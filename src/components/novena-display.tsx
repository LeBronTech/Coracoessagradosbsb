'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from '@/components/ui/carousel';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight, Copy, ChevronDown, Check } from 'lucide-react';
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

interface NovenaDisplayProps {
  saint: Saint | null;
  novena: Novena | null;
  theme: Theme;
  setTheme: (theme: Theme | ((prev: Theme) => Theme)) => void;
}

function ThemeSelector({ theme, setTheme }: { theme: Theme, setTheme: (theme: Theme | ((prev: Theme) => Theme)) => void }) {
  return (
    <div className="absolute top-[-14px] right-5 flex gap-2.5 bg-background/50 backdrop-blur-sm px-3 py-1.5 rounded-full z-10">
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
      setIsAlertExpanded(true);
      setIsAutoDisplay(true);

      if (alertTimerRef.current) clearTimeout(alertTimerRef.current);
      
      alertTimerRef.current = setTimeout(() => {
        setIsAlertExpanded(false);
        setIsAutoDisplay(false);
      }, 4000);

      return () => {
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
        'main-card glass-card rounded-2xl p-6 md:p-10 relative shadow-2xl shadow-black/20',
        themeClasses[theme],
        theme,
        getAnimationClass()
      )}
      style={theme === 'theme-green' ? { backgroundColor: '#14532d', color: 'white' } : undefined}
    >
      <ThemeSelector theme={theme} setTheme={setTheme} />

      {/* Seletor de versão da novena */}
      {novena.versions && novena.versions.length > 0 && (
        <div className="mb-6 mt-2">
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
      <header id="novena-header" className="w-full flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 mb-8 text-center sm:text-left relative z-20">
        <img src={saint.imageUrl} alt={saint.name} className="w-28 h-28 md:w-32 md:h-32 rounded-full object-cover border-2 border-stone-400/50 shadow-lg flex-shrink-0" />
        <div>
          <div className="flex flex-col items-center sm:items-start leading-tight">
            <span className={cn(
              "text-sm md:text-base font-medium opacity-70 uppercase tracking-widest mb-1",
              isLightTheme ? "text-stone-600" : "text-white/80"
            )}>Novena</span>
            <h2 className="text-3xl md:text-4xl font-bold font-brand">
              {formatSaintName(saint.name, false).main}
            </h2>
            {formatSaintName(saint.name, false).additional && (
              <p className={cn(
                "text-base md:text-lg font-normal opacity-90 mt-0.5",
                isLightTheme ? "text-stone-500" : "text-white/80"
              )}>
                {formatSaintName(saint.name, false).additional}
              </p>
            )}
          </div>
          <p className={cn("italic mt-1",
            isLightTheme ? 'text-stone-600' : 'text-white/90'
          )}>
            {description || ''}
          </p>
          {saint.startDate && (
            <div ref={alertContainerRef} className="mt-3 relative">
              {/* Linha de data — sempre visível */}
              <div className="flex flex-row items-center justify-center sm:justify-start gap-2 flex-wrap">
                <span className={cn(
                  "inline-block text-xs font-bold px-4 py-1 rounded-full",
                  isLightTheme ? "bg-primary text-white" : "bg-primary text-white"
                )}>
                  Novena: {saint.startDate} a {saint.endDate}
                </span>
                {saint.isMartyr && (
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-red-700/80 text-white">
                    Mártir
                  </span>
                )}
                {alertInfo && (
                  <button
                    onClick={() => {
                      setIsAlertExpanded(!isAlertExpanded);
                      setIsAutoDisplay(false);
                      if (alertTimerRef.current) clearTimeout(alertTimerRef.current);
                    }}
                    className="w-7 h-7 rounded-full border-[#D4AF37] border-[1.5px] bg-transparent text-[#D4AF37] hover:bg-[#D4AF37]/10 flex items-center justify-center flex-shrink-0 transition-all duration-200 ml-1"
                  >
                    <ChevronDown className={cn(
                      "w-4 h-4 transition-transform duration-300",
                      isAlertExpanded ? "rotate-180" : "rotate-0"
                    )} />
                  </button>
                )}
              </div>

              {/* Bloco de aviso — expande abaixo da linha de data */}
              {alertInfo && (
                <div
                  className={cn(
                    "overflow-hidden transition-all duration-[600ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] mt-2 origin-top",
                    isAlertExpanded ? "max-h-[200px] opacity-100" : "max-h-0 opacity-0 pointer-events-none"
                  )}
                >
                  <div className={cn(
                    "p-4 rounded-2xl border flex flex-col items-center justify-center text-center gap-1",
                    (theme === 'theme-light-gray' || theme === 'theme-default')
                      ? "bg-white/85 backdrop-blur-xl border-primary/20 text-stone-900 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.15)]"
                      : "bg-black/75 border-white/20 text-white backdrop-blur-xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)]"
                  )}>
                    <h4 className={cn("font-bold font-brand text-base mb-0.5", (theme === 'theme-light-gray' || theme === 'theme-default') ? "text-primary" : "text-[#D4AF37]")}>
                      {alertInfo.title}
                    </h4>
                    <p className="text-[12px] sm:text-sm text-center opacity-95 leading-snug">
                      {alertInfo.description}
                    </p>
                  </div>
                </div>
              )}
            </div>
          )}

        </div>
      </header>



      <Carousel setApi={setApi} className="w-full">
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
          <div className="flex flex-col gap-4 mb-4">
            <div className="flex flex-row items-start justify-between gap-2 w-full">
              <div className="flex flex-col items-center flex-1 gap-2">
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

              <Button
                onClick={copyNovenaText}
                variant="ghost"
                size="icon"
                className={cn(
                  'rounded-full h-10 w-10 shrink-0 border-2 mt-1',
                  theme === 'theme-light-gray' 
                    ? 'border-stone-200 hover:bg-black/5 text-stone-600' 
                    : 'border-white/20 hover:bg-white/10 text-white'
                )}
                title={days.length === 1 ? 'Copiar oração' : `Copiar texto dos ${days.length} dias`}
              >
                <Copy className="w-5 h-5" />
              </Button>
            </div>

            {/* BARRA DE PROGRESSO */}
            <div className="relative w-full h-3 bg-black/20 rounded-full overflow-hidden border border-white/10">
              <div 
                className="h-full bg-primary transition-all duration-700 ease-out shadow-[0_0_15px_rgba(var(--primary-rgb),0.6)]"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        )}

        {days.length === 1 && (
          <div className="flex flex-col items-center justify-center gap-2 mb-8">
            <Button
              onClick={copyNovenaText}
              variant="outline"
              className={cn(
                'inline-flex items-center gap-2 rounded-lg px-6 py-2 transition-all duration-200 shadow-sm border-2',
                theme === 'theme-light-gray'
                  ? 'bg-white hover:bg-stone-50 text-stone-800 border-stone-200'
                  : 'bg-white/10 hover:bg-white/20 text-white border-white/20'
              )}
            >
              <Copy className="w-4 h-4" />
              <span className="text-sm font-bold uppercase tracking-wide">Copiar oração</span>
            </Button>
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
                  <div className="flex items-center justify-center gap-4 mb-8">
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

                <div className="mt-8 flex justify-center">
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
