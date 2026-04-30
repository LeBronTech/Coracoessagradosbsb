'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from '@/components/ui/carousel';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight, Copy, ChevronDown, ChevronLeft, ChevronRight, Check } from 'lucide-react';
import { cn, formatSaintName } from '@/lib/utils';
import type { Saint, Novena, NovenaVersion } from '@/lib/data';
import type { Theme } from '@/app/page';
import Image from 'next/image';


const themeClasses: Record<Theme, string> = {
  'theme-default': 'bg-[#949da4] text-white',
  'theme-dark-gray': 'bg-gray-700 text-white',
  'theme-light-gray': 'bg-gray-100 text-stone-800',
  'theme-red': 'bg-primary text-white',
  'theme-green': 'bg-[#14532d] text-white',
};

const themeDotClasses: Record<Theme, string> = {
  'theme-default': 'bg-[#949da4]',
  'theme-dark-gray': 'bg-gray-700',
  'theme-light-gray': 'bg-gray-100',
  'theme-red': 'bg-primary',
  'theme-green': 'bg-[#14532d]',
};

// Gradient overlay for the blurred image background - lighter at top, theme color at bottom
const themeGradientOverlay: Record<Theme, string> = {
  'theme-default': 'from-[#949da4]/40 via-[#949da4]/75 to-[#949da4]/95',
  'theme-dark-gray': 'from-gray-700/40 via-gray-700/75 to-gray-700/95',
  'theme-light-gray': 'from-gray-100/40 via-gray-100/80 to-gray-100/95',
  'theme-red': 'from-[#8B0000]/40 via-[#8B0000]/75 to-[#8B0000]/95',
  'theme-green': 'from-[#15803d]/80 via-[#052e16]/95 to-[#011a11]/100',
};

// Gradient overlay for the header cover - specific colors per theme
const themeHeaderOverlay: Record<Theme, string> = {
  'theme-default': 'from-black/30 via-black/50 to-black/65',
  'theme-dark-gray': 'from-black/30 via-black/50 to-black/65',
  'theme-light-gray': 'from-black/20 via-black/40 to-black/60',
  'theme-red': 'from-[#8B0000]/30 via-[#5a0000]/60 to-[#3a0000]/85',
  'theme-green': 'from-[#16a34a]/30 via-[#14532d]/60 to-[#052e16]/85',
};

interface NovenaDisplayProps {
  saint: Saint | null;
  novena: Novena | null;
  theme: Theme;
  setTheme: (theme: Theme | ((prev: Theme) => Theme)) => void;
}

function ThemeSelector({ theme, setTheme }: { theme: Theme, setTheme: (theme: Theme | ((prev: Theme) => Theme)) => void }) {
  return (
    <div className="flex justify-end gap-2.5 bg-background/50 backdrop-blur-sm px-3 py-1.5 rounded-full z-30 mb-4 w-fit ml-auto">
      {(['theme-dark-gray', 'theme-default', 'theme-light-gray', 'theme-red', 'theme-green'] as Theme[]).map((t) => (
        <button
          key={t}
          onClick={() => setTheme(t)}
          title={`Tema ${t.split('-')[1]}`}
          className={cn(
            'w-5 h-5 rounded-full cursor-pointer transition-all duration-200 border-2 border-white/70 shadow-md',
            'hover:scale-115',
            theme === t ? 'scale-125 shadow-lg ring-2 ring-white/90 ring-offset-2 ring-offset-transparent' : '',
            themeDotClasses[t]
          )}
        />
      ))}
    </div>
  );
}

function NovenaContent({ htmlContent }: { htmlContent: string }) {
  return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;
}

export default function NovenaDisplay({ saint, novena, theme, setTheme }: NovenaDisplayProps) {
  const [animationState, setAnimationState] = useState<'idle' | 'out' | 'in'>('idle');
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const [selectedVersionId, setSelectedVersionId] = useState<string>('tradicional');
  const [completedDays, setCompletedDays] = useState<Record<number, boolean>>({});
  
  const [alertInfo, setAlertInfo] = useState<{ title: string, description: React.ReactNode } | null>(null);
  const [isAlertExpanded, setIsAlertExpanded] = useState(false);
  const [isAutoDisplay, setIsAutoDisplay] = useState(false);
  const alertTimerRef = useRef<NodeJS.Timeout | null>(null);
  const alertContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleInteraction(event: Event) {
      if (isAutoDisplay || !isAlertExpanded) return;

      if (event.type === 'scroll') {
        setIsAlertExpanded(false);
      } else if (event.type === 'mousedown' || event.type === 'touchstart') {
        if (alertContainerRef.current && !alertContainerRef.current.contains(event.target as Node)) {
          setIsAlertExpanded(false);
        }
      }
    }

    if (isAlertExpanded && !isAutoDisplay) {
      document.addEventListener('mousedown', handleInteraction);
      document.addEventListener('touchstart', handleInteraction);
      window.addEventListener('scroll', handleInteraction, { passive: true });
    }

    return () => {
      document.removeEventListener('mousedown', handleInteraction);
      document.removeEventListener('touchstart', handleInteraction);
      window.removeEventListener('scroll', handleInteraction);
    };
  }, [isAlertExpanded, isAutoDisplay]);

  useEffect(() => {
    // Reset alert state when saint changes
    setIsAlertExpanded(false);
    setIsAutoDisplay(false);
    if (alertTimerRef.current) clearTimeout(alertTimerRef.current);

    if (saint && saint.startDate) {
      const todayOnlyDate = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate());
      
      const [startDayStr, startMonthStr] = saint.startDate.split('/');
      const [endDayStr, endMonthStr] = saint.endDate.split('/');
      const startMonth = Number(startMonthStr);
      const endMonth = Number(endMonthStr);
      
      let startD = new Date(todayOnlyDate.getFullYear(), startMonth - 1, Number(startDayStr));
      let endD = new Date(todayOnlyDate.getFullYear(), endMonth - 1, Number(endDayStr));
      
      if (endMonth < startMonth) {
        if (todayOnlyDate.getMonth() < 6) {
          startD.setFullYear(todayOnlyDate.getFullYear() - 1);
        } else {
          endD.setFullYear(todayOnlyDate.getFullYear() + 1);
        }
      }

      const diffStart = Math.ceil((todayOnlyDate.getTime() - startD.getTime()) / (1000 * 60 * 60 * 24));
      const diffEnd = Math.ceil((endD.getTime() - todayOnlyDate.getTime()) / (1000 * 60 * 60 * 24));

      let title = "";
      let description: React.ReactNode = "";

      if (diffStart === 0) {
        title = "Inicia Hoje!";
        description = "Esta novena começou oficialmente hoje. É o momento perfeito para iniciá-la.";
      } else if (diffEnd === 0) {
        title = `Último dia (${diffStart + 1}º Dia)`;
        description = <>Atenção: hoje é o último dia oficial (<strong>{diffStart + 1}º Dia</strong>) desta novena antes da sua grande festa.</>;
      } else if (diffStart > 0 && diffEnd > 0) {
        title = "Novena em andamento";
        description = <>A novena está atualmente no <strong>{diffStart + 1}º dia</strong>. Junte-se às orações!</>;
      } else {
        title = "Aviso";
        description = <>A data oficial inicia em <strong>{saint.startDate}</strong>, mas você pode iniciar e rezar esta novena em qualquer época ou momento!</>;
      }

      setAlertInfo({ title, description });

      // Delay auto-expand to avoid conflict with main entrance animation
      const openTimer = setTimeout(() => {
        // Only auto-expand if the user hasn't interacted yet (isAutoDisplay would be true or we check isAlertExpanded)
        // But more importantly, if alertTimerRef is not set by a manual click
        setAlertInfo(prev => {
          if (prev) {
            setIsAlertExpanded(true);
            setIsAutoDisplay(true);

            alertTimerRef.current = setTimeout(() => {
              setIsAlertExpanded(false);
              setIsAutoDisplay(false);
              alertTimerRef.current = null;
            }, 5000);
          }
          return prev;
        });
      }, 2000);

      return () => {
        clearTimeout(openTimer);
        if (alertTimerRef.current) clearTimeout(alertTimerRef.current);
      };
    }
  }, [saint]);

  const onSelect = useCallback(() => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap());
  }, [api]);

  const scrollTo = useCallback((index: number) => {
    api?.scrollTo(index);
  }, [api]);

  useEffect(() => {
    if (novena) {
      setAnimationState('out');
      const outTimer = setTimeout(() => {
        setAnimationState('in');
        if (api) {
          api.scrollTo(0);
        }
      }, 150);

      const inTimer = setTimeout(() => {
        setAnimationState('idle');
      }, 150 + 800);

      return () => {
        clearTimeout(outTimer);
        clearTimeout(inTimer);
      };
    }
  }, [saint, novena, api]);

  // Reset version when novena changes
  useEffect(() => {
    setSelectedVersionId('tradicional');
  }, [saint]);

  // Handle completed days state
  useEffect(() => {
    if (saint && typeof window !== 'undefined') {
      const storageKey = `novena_completed_${saint.id}_${selectedVersionId}`;
      const saved = localStorage.getItem(storageKey);
      if (saved) {
        try {
          setCompletedDays(JSON.parse(saved));
        } catch (e) {
          setCompletedDays({});
        }
      } else {
        setCompletedDays({});
      }
    }
  }, [saint, selectedVersionId]);

  const toggleCompleted = useCallback((index: number) => {
    setCompletedDays(prev => {
      const newState = { ...prev, [index]: !prev[index] };
      if (saint && typeof window !== 'undefined') {
        const storageKey = `novena_completed_${saint.id}_${selectedVersionId}`;
        localStorage.setItem(storageKey, JSON.stringify(newState));
      }
      return newState;
    });
  }, [saint, selectedVersionId]);



  useEffect(() => {
    if (!api) {
      return;
    }
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());
    api.on("select", onSelect);

    return () => {
      api.off("select", onSelect);
    };
  }, [api, onSelect]);

  const copyNovenaText = () => {
    if (!novena) return;

    const stripHtml = (html: string) => {
      let text = html
        .replace(/<p[^>]*>/g, '\n')
        .replace(/<\/p>/g, '\n')
        .replace(/<br\s*\/?>/g, '\n')
        .replace(/<h4[^>]*>/g, '\n\n')
        .replace(/<\/h4>/g, '\n')
        .replace(/<[^>]*>/g, '');

      text = text
        .replace(/&nbsp;/g, ' ')
        .replace(/&amp;/g, '&')
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&quot;/g, '"')
        .replace(/&#39;/g, "'");

      return text.split('\n').map(line => line.trim()).filter(line => line.length > 0).join('\n');
    };

    let fullText = `*${novena.novenaTitle.toUpperCase()}*\n\n`;

    if (novena.initialPrayer) {
      fullText += `*ORAÇÃO INICIAL*\n\n${stripHtml(novena.initialPrayer)}\n\n`;
    }

    novena.days.forEach((day, index) => {
      fullText += `*${day.day.toUpperCase()} - ${day.title.toUpperCase()}*\n\n${stripHtml(day.content)}\n\n`;
    });

    if (novena.finalPrayer) {
      fullText += `*ORAÇÃO FINAL*\n\n${stripHtml(novena.finalPrayer)}\n\n`;
    }

    fullText += `\n_Fonte: Portal Corações Sagrados_`;

    navigator.clipboard.writeText(fullText).then(() => {
      alert('Texto completo da novena copiado com sucesso!');
    }).catch(err => {
      console.error('Erro ao copiar texto:', err);
    });
  };


  if (!novena || !saint) {
    return (
      <main className="flex flex-col items-center justify-center p-16 text-center bg-transparent border-2 border-dashed rounded-2xl">
        <div className="font-headline text-5xl text-primary/50 mb-4">✝</div>
        <h2 className="font-headline text-2xl tracking-wide">Bem-vindo ao Portal Corações Sagrados</h2>
        <p className="mt-2 text-muted-foreground max-w-md">
          Selecione uma novena na barra acima para iniciar sua jornada de oração e reflexão.
        </p>
      </main>
    );
  }

  const activeVersion: NovenaVersion | null =
    novena?.versions?.find(v => v.id === selectedVersionId) ?? null;

  const { novenaTitle, description } = novena;
  const days = activeVersion?.days ?? novena.days;
  const initialPrayer = activeVersion?.initialPrayer ?? novena.initialPrayer;
  const finalPrayer = activeVersion?.finalPrayer ?? novena.finalPrayer;

  const completedCount = Object.values(completedDays).filter(Boolean).length;
  const progress = (completedCount / (days.length || 1)) * 100;
  const isAllCompleted = completedCount === days.length && days.length > 0;

  const handleResetNovena = () => {
    if (saint && typeof window !== 'undefined') {
      const storageKey = `novena_completed_${saint.id}_${selectedVersionId}`;
      localStorage.removeItem(storageKey);
      setCompletedDays({});
      api?.scrollTo(0);
    }
  };

  const isLightTheme = theme === 'theme-light-gray' || theme === 'theme-default';

  const getAnimationClass = () => {
    switch (animationState) {
      case 'out': return 'animate-fade-out';
      case 'in': return 'animate-slide-up-fade-in';
      default: return '';
    }
  }

  const arrowClasses = isLightTheme
    ? "text-primary border-primary/50 hover:bg-primary hover:text-white"
    : "text-primary border-primary/50 hover:bg-primary hover:text-white";

  const isSpecialNovena = days.length === 2 && (days[0].title === 'Oração da Novena' || days[1].title === 'Breve história da Apresentação');

  const proseClasses = cn(
    "prose max-w-none prose-blockquote:text-inherit",
    isLightTheme ? "text-stone-800" : "text-white",
    isLightTheme ? "prose-blockquote:text-primary/90" : "prose-blockquote:text-white/90",
    isLightTheme ? "[&_.litany-response]:text-primary/90" : "[&_.litany-response]:text-white/80"
  );


  return (
    <main
      id="main-card"
      className={cn(
        'main-card glass-card rounded-2xl p-6 md:p-10 relative shadow-2xl shadow-black/20 overflow-hidden',
        themeClasses[theme],
        theme,
        getAnimationClass()
      )}
      style={theme === 'theme-green' ? { backgroundColor: '#011a11', color: 'white' } : undefined}
    >
      {/* === Blurred image background for the entire card === */}
      {saint && (
        <>
          <img
            src={(novena as any)?.image || saint.imageUrl}
            alt=""
            aria-hidden
            className="absolute inset-0 w-full h-full object-cover blur-[100px] scale-[3] opacity-60 pointer-events-none"
            style={{ objectPosition: (novena as any)?.imageObjectPosition || (saint as any)?.imageObjectPosition || 'center' }}
          />
          <div className={cn('absolute inset-0 bg-gradient-to-b pointer-events-none', themeGradientOverlay[theme])} />
        </>
      )}

      <div className="flex items-center justify-between mb-4 relative z-30">
        <Button
          onClick={copyNovenaText}
          variant="ghost"
          size="icon"
          className={cn(
            'rounded-full h-8 w-8 shrink-0 border-2 bg-background/50 backdrop-blur-sm',
            theme === 'theme-light-gray' || theme === 'theme-default'
              ? 'border-stone-200 hover:bg-black/5 text-stone-600' 
              : 'border-white/20 hover:bg-white/10 text-white'
          )}
          title={days.length === 1 ? 'Copiar oração' : `Copiar texto dos ${days.length} dias`}
        >
          <Copy className="w-4 h-4" />
        </Button>

        <ThemeSelector theme={theme} setTheme={setTheme} />
      </div>

      {/* Seletor de versão da novena */}
      {novena.versions && novena.versions.length > 0 && (
        <div className="mb-6 mt-2 relative z-10">
          <p className={cn('text-xs uppercase tracking-widest font-bold text-center mb-3 opacity-70')}>Escolha a versão da novena</p>
          <div className="flex flex-wrap justify-center gap-2">
            <button
              onClick={() => setSelectedVersionId('tradicional')}
              className={cn(
                'px-4 py-2 rounded-full text-sm font-semibold border-2 transition-all',
                selectedVersionId === 'tradicional'
                  ? 'bg-white text-[#14532d] border-white shadow-lg scale-105'
                  : 'bg-white/10 text-white border-white/30 hover:bg-white/20'
              )}
            >
              ✝ Tradicional
            </button>
            {novena.versions.map(v => (
              <button
                key={v.id}
                onClick={() => setSelectedVersionId(v.id)}
                className={cn(
                  'px-4 py-2 rounded-full text-sm font-semibold border-2 transition-all',
                  selectedVersionId === v.id
                    ? 'bg-white text-[#14532d] border-white shadow-lg scale-105'
                    : 'bg-white/10 text-white border-white/30 hover:bg-white/20'
                )}
              >
                {v.name}
              </button>
            ))}
          </div>
        </div>
      )}
      <header id="novena-header" className="w-full relative rounded-2xl mb-8 z-20">
        {/* === Container for blurred image background - moved overflow-hidden here === */}
        <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">
          <img
            src={(novena as any)?.image || saint.imageUrl}
            alt=""
            aria-hidden
            className="absolute inset-0 w-full h-full object-cover blur-[80px] scale-[2.5] opacity-80"
            style={{ objectPosition: (novena as any)?.imageObjectPosition || (saint as any)?.imageObjectPosition || 'center' }}
          />
          {/* Dark overlay for text readability - now dynamic by theme */}
          <div className={cn("absolute inset-0 bg-gradient-to-r", themeHeaderOverlay[theme])} />
        </div>

        {/* === Content layer === */}
        <div className="relative z-10 flex flex-col sm:flex-row items-center gap-5 md:gap-7 p-5 md:p-7 text-center sm:text-left">
          {/* Square image with rounded corners */}
          <img
            src={(novena as any)?.image || saint.imageUrl}
            alt={saint.name}
            className="w-32 h-32 md:w-40 md:h-40 rounded-2xl object-cover border-2 border-white/25 shadow-[0_8px_32px_rgba(0,0,0,0.4)] flex-shrink-0 ring-1 ring-white/10"
            style={{ objectPosition: (novena as any)?.imageObjectPosition || (saint as any)?.imageObjectPosition || 'center' }}
          />

          <div className="flex-1 min-w-0">
            <div className="flex flex-col items-center sm:items-start leading-tight">
              <span className="text-sm md:text-base font-medium uppercase tracking-[0.2em] mb-1 text-white/70 drop-shadow">Novena</span>
              <h2 className="text-3xl md:text-4xl font-bold font-brand text-white drop-shadow-lg">
                {formatSaintName(saint.name, false, true).main}
              </h2>
              {formatSaintName(saint.name, false, true).additional && !saint.isMartyr && (
                <p className="text-base md:text-lg font-normal mt-0.5 text-white/80 drop-shadow">
                  {formatSaintName(saint.name, false, true).additional}
                </p>
              )}
            </div>
            <p className="italic mt-2 text-white/85 drop-shadow text-sm md:text-base leading-relaxed">
              {description || ''}
            </p>
            {saint.startDate && (
              <div ref={alertContainerRef} className="mt-1 relative w-full sm:w-fit mx-auto sm:mx-0">
                {/* Linha de data e status — Mártir tem prioridade */}
                <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-0 relative">
                  {saint.isMartyr && (
                    <span className="text-[10px] font-bold px-3 py-0.5 rounded-full bg-red-700 text-white shadow-lg animate-in fade-in zoom-in duration-300 uppercase tracking-widest z-10">
                      Mártir
                    </span>
                  )}
                  <span className={cn(
                    "inline-block text-xs font-bold px-4 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white border border-white/15 shadow-sm",
                    saint.isMartyr && "-mt-1.5 sm:mt-0 sm:-ml-2"
                  )}>
                    Novena: {saint.startDate} a {saint.endDate}
                  </span>
                  {alertInfo && (
                    <button
                      onClick={() => {
                        setIsAlertExpanded(!isAlertExpanded);
                        setIsAutoDisplay(false);
                        if (alertTimerRef.current) clearTimeout(alertTimerRef.current);
                      }}
                      className="w-7 h-7 rounded-full border-[#D4AF37] border-[1.5px] bg-black/20 backdrop-blur-sm text-[#D4AF37] hover:bg-[#D4AF37]/20 flex items-center justify-center flex-shrink-0 transition-all duration-200 ml-1"
                    >
                      <div className="hidden sm:block">
                        {isAlertExpanded ? <ChevronLeft className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
                      </div>
                      <div className="sm:hidden">
                        <ChevronDown className={cn(
                          "w-4 h-4 transition-transform duration-300",
                          isAlertExpanded ? "rotate-180" : "rotate-0"
                        )} />
                      </div>
                    </button>
                  )}
                </div>

                {/* Bloco de aviso — Agora como um Pop-up flutuante */}
                {alertInfo && (
                  <div
                    className={cn(
                      "absolute z-[100] transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]",
                      // Mobile: below the date capsule
                      "top-full left-1/2 -translate-x-1/2 w-[88vw] max-w-[260px] mt-1 origin-top",
                      // Desktop: exactly to the side of the button
                      "sm:top-[85%] sm:left-full sm:-translate-y-1/2 sm:translate-x-0 sm:ml-0 sm:w-[380px] sm:origin-left",
                      isAlertExpanded 
                        ? "opacity-100 translate-y-0 sm:translate-x-0 scale-100" 
                        : "opacity-0 -translate-y-4 sm:translate-y-0 sm:-translate-x-4 scale-95 pointer-events-none"
                    )}
                  >
                    <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl border flex flex-col items-center justify-center text-center gap-1.5 sm:gap-2 bg-black/85 border-white/20 text-white backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] ring-1 ring-white/10">
                      <div className="w-8 h-1 rounded-full bg-white/20 mb-1 sm:hidden" />
                      <h4 className="font-bold font-brand text-sm sm:text-base mb-0.5 text-[#D4AF37]">
                        {alertInfo.title}
                      </h4>
                      <p className="text-[12px] sm:text-sm text-center opacity-95 leading-relaxed">
                        {alertInfo.description}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            )}

          </div>
        </div>
      </header>



      <Carousel setApi={setApi} className="w-full" opts={{ watchDrag: false }}>
        <div className="flex flex-col items-center justify-center gap-2 mb-6">
          <a
            href="https://chat.whatsapp.com/D08lyjhVqL8KyZfIovKYk5?mode=ems_copy_t"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              'inline-flex items-center gap-2 rounded-lg px-4 py-2 transition-all duration-200',
              theme === 'theme-light-gray' ? 'bg-black/10 hover:bg-black/20 text-stone-800' : 'bg-white/10 hover:bg-white/20 text-white'
            )}
          >
            <Image src="https://i.postimg.cc/g24cJdKG/whatsapp-icone-5.png" alt="WhatsApp" width={20} height={20} className="w-5 h-5" />
            <span className="text-sm font-semibold">Novena também disponível no nosso grupo do WhatsApp. (clique aqui)</span>
          </a>
          <a
            href="https://www.instagram.com/coracoessagradosbsb"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              'inline-flex items-center gap-2 rounded-lg px-4 py-2 transition-all duration-200',
              theme === 'theme-light-gray' ? 'bg-black/10 hover:bg-black/20 text-stone-800' : 'bg-white/10 hover:bg-white/20 text-white'
            )}
          >
            <Image src="https://iili.io/Kpy9S3P.png" alt="Instagram" width={20} height={20} className="w-5 h-5" />
            <span className="text-sm font-semibold">Segue a gente no Insta</span>
          </a>
        </div>

        {isAllCompleted && (
          <div className="mb-8 animate-in fade-in zoom-in duration-500">
            <div className={cn(
              "p-6 rounded-2xl text-center border-2 border-primary/50 flex flex-col items-center gap-4",
              isLightTheme ? "bg-red-50 text-red-900" : "bg-red-900/30 text-white backdrop-blur-sm"
            )}>
              <div className="text-4xl">🙏</div>
              <h3 className="text-xl font-bold font-brand">Parabéns! Você concluiu esta novena.</h3>
              <p className="text-sm opacity-90">Deseja reiniciar sua jornada de oração para esta novena?</p>
              <Button 
                onClick={handleResetNovena}
                className={cn(
                  "rounded-full px-6 py-2 text-xs font-bold uppercase tracking-widest transition-all hover:scale-105 shadow-md",
                  "bg-primary text-white border border-white/20 hover:bg-red-800"
                )}
              >
                Sim, começar de novo
              </Button>
            </div>
          </div>
        )}

        {days.length > 1 && (
          <div className="flex flex-col gap-3 mb-4">
            <div className="flex flex-col items-center gap-2 w-full">
              {/* Primeira Linha: Dias 1 a 5 */}
              <div className="flex flex-wrap gap-2 justify-center">
                {days.slice(0, 5).map((day, index) => (
                  <button
                    key={index}
                    onClick={() => scrollTo(index)}
                    className={cn(
                      'px-3 py-1 flex items-center gap-1.5 text-sm font-semibold rounded-full transition-all duration-200',
                      current === index
                        ? (theme === 'theme-light-gray' ? 'bg-primary text-white' : 'bg-white text-primary')
                        : (theme === 'theme-light-gray' ? 'bg-black/10 text-stone-600 hover:bg-black/20' : 'bg-white/10 text-white hover:bg-white/20')
                    )}
                  >
                    {isSpecialNovena ? (index === 0 ? 'Oração' : 'História') : `Dia ${index + 1}`}
                    {completedDays[index] && <Check className="w-3.5 h-3.5" />}
                  </button>
                ))}
              </div>
              {/* Segunda Linha: Dias 6+ */}
              {days.length > 5 && (
                <div className="flex flex-wrap gap-2 justify-center">
                  {days.slice(5).map((day, idx) => {
                    const index = idx + 5;
                    return (
                      <button
                        key={index}
                        onClick={() => scrollTo(index)}
                        className={cn(
                          'px-3 py-1 flex items-center gap-1.5 text-sm font-semibold rounded-full transition-all duration-200',
                          current === index
                            ? (theme === 'theme-light-gray' ? 'bg-primary text-white' : 'bg-white text-primary')
                            : (theme === 'theme-light-gray' ? 'bg-black/10 text-stone-600 hover:bg-black/20' : 'bg-white/10 text-white hover:bg-white/20')
                        )}
                      >
                        {isSpecialNovena ? (index === 0 ? 'Oração' : 'História') : `Dia ${index + 1}`}
                        {completedDays[index] && <Check className="w-3.5 h-3.5" />}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            <div className="flex flex-col gap-3">
              {/* BARRA DE PROGRESSO */}
              <div className="relative w-full h-3 bg-black/20 rounded-full overflow-hidden border border-white/10">
                <div 
                  className="h-full bg-primary transition-all duration-700 ease-out shadow-[0_0_15px_rgba(var(--primary-rgb),0.6)]"
                  style={{ width: `${progress}%` }}
                />
              </div>

            </div>
          </div>
        )}



        <CarouselContent>
          {days.map((day, index) => (
            <CarouselItem key={`content-${index}`}>
              <div className="animate-fade-in">
                {initialPrayer && (
                  <div className={proseClasses}>
                    <div className={cn('initial-prayer-text', !isLightTheme ? '[&_strong]:text-white' : '')}>
                      <NovenaContent htmlContent={initialPrayer} />
                    </div>
                  </div>
                )}

                {initialPrayer && <div className="w-16 h-px bg-white/20 my-8 mx-auto"></div>}

                {days.length > 1 && (
                  <div className="flex items-center justify-center gap-4 mb-4">
                    <CarouselPrevious className={cn("relative -left-0 top-0 translate-y-0", arrowClasses)} />
                    <p className="text-sm font-bold">
                      {isSpecialNovena ? (current === 0 ? 'Oração' : 'História') : `Dia ${current + 1} de ${count}`}
                    </p>
                    <CarouselNext className={cn("relative -right-0 top-0 translate-y-0", arrowClasses)} />
                  </div>
                )}

                <div className={proseClasses}>
                  {day.day && !isSpecialNovena && <h3 className={cn("section-title text-2xl font-bold font-brand mb-2")}>{day.day}</h3>}
                  {day.title && <h4 className={cn("text-xl italic mb-4", isLightTheme ? 'text-stone-500' : 'text-stone-300')}>{day.title}</h4>}

                  <div className="day-specific-content">
                    <NovenaContent htmlContent={day.content} />
                  </div>
                </div>

                {finalPrayer && (
                  <div className={proseClasses}>
                    <div className='final-prayer-text'>
                      <NovenaContent htmlContent={finalPrayer} />
                    </div>
                  </div>
                )}

                <div className="mt-4 flex justify-center">
                  <Button 
                    onClick={() => toggleCompleted(index)}
                    className={cn(
                      'inline-flex items-center gap-2 rounded-xl px-6 py-3 transition-all duration-300 shadow-sm font-bold text-sm uppercase tracking-wider',
                      completedDays[index] 
                        ? 'bg-green-600 hover:bg-green-700 text-white border-transparent' 
                        : (isLightTheme 
                            ? 'bg-white hover:bg-stone-50 text-stone-800 border-2 border-stone-200' 
                            : 'bg-white/10 hover:bg-white/20 text-white border-2 border-white/20')
                    )}
                  >
                    {completedDays[index] ? <><Check className="w-4 h-4" /> Concluído</> : "Marcar como concluído"}
                  </Button>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        {days.length > 1 && (
          <div className="flex items-center justify-center gap-4 mt-8">
            <CarouselPrevious className={cn("relative -left-0 top-0 translate-y-0", arrowClasses)} />
            <p className="text-sm font-bold">
              {isSpecialNovena ? (current === 0 ? 'Oração' : 'História') : `Dia ${current + 1} de ${count}`}
            </p>
            <CarouselNext className={cn("relative -right-0 top-0 translate-y-0", arrowClasses)} />
          </div>
        )}
      </Carousel>
    </main>
  );
}
