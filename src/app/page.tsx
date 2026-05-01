'use client';

import React, { useState, useMemo, useEffect, useRef, useCallback } from 'react';
import Header from '@/components/header';
import Footer from '@/components/footer';
import SaintSelector from '@/components/saint-selector';
import NovenaDisplay from '@/components/novena-display';
import { LoadingScreen } from '@/components/loading-screen';
import SaintOfTheDay, { type SaintOfTheDayRef } from '@/components/saint-of-the-day';
import WeeklyDevotions from '@/components/weekly-devotions';
import { saints, months, novenaData } from '@/lib/data';
import type { Saint } from '@/lib/data';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription, SheetTrigger } from '@/components/ui/sheet';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from '@/components/ui/alert-dialog';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogClose } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Menu, ChevronLeft, ChevronRight, BookOpen, MapPin, Users } from 'lucide-react';
import { cn } from '@/lib/utils';
import { parse, differenceInDays, getYear } from 'date-fns';
import Image from 'next/image';
import Link from 'next/link';
import { useToast } from '@/hooks/use-toast';
import { AlertCircle } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LilyIcon } from '@/components/weekly-devotions';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from '@/components/ui/carousel';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { ScrollArea } from '@/components/ui/scroll-area';
import { ConfessionTimesModal } from '@/components/confession-times-modal';

export type Theme = 'theme-default' | 'theme-dark-gray' | 'theme-light-gray' | 'theme-red' | 'theme-green';



const marianDevotions = [
  {
    name: 'N. S. do Rosário',
    imageUrl: 'https://i.postimg.cc/2669v1gr/nsr.jpg',
    novenaId: 'rosario',
    feastDay: '07 de Outubro',
    description: `
            <h4>1. Origem da Devoção do Rosário</h4>
            <p>A devoção a Nossa Senhora do Rosário remonta ao século XIII, ligada tradicionalmente a <strong>São Domingos de Gusmão</strong>, que teria recebido o Rosário da própria Virgem Maria como uma arma espiritual para combater as heresias. A festa de 7 de outubro comemora a <strong>Vitória de Lepanto</strong> (1571), atribuída à intercessão da Virgem através do Rosário.</p>

            <h4>2. Contexto de Pompeia</h4>
            <p>No século XIX, o Vale de Pompeia, sobre as ruínas da antiga cidade romana, era um local de <strong>miséria social e abandono espiritual</strong>.</p>
            
            <h4>3. A Figura de Bartolo Longo e o Rosário</h4>
            <p>Em 1872, o advogado <strong>Bartolo Longo</strong> (hoje Beato), recém-convertido, sentiu o chamado para evangelizar a região. Uma inspiração divina o guiou: <strong>\'Salva esta gente, Bartolo! Propaga o Rosário.\'</strong> Ele dedicou-se a ensinar esta oração aos camponeses.</p>

            <h4>4. O Santuário e a Devoção em Pompeia</h4>
            <p>Em 1875, Bartolo Longo adquiriu um quadro deteriorado da Virgem do Rosário. Após ser restaurado, a devoção cresceu rapidamente devido a inúmeros milagres. Isso levou à construção do imponente <strong>Santuário de Nossa Senhora do Rosário de Pompeia</strong>. Bartolo Longo também fundou importantes obras de caridade, estabelecendo-se como o "Apóstolo do Rosário".</p>
        `
  },
  { name: 'N. S. Aparecida', imageUrl: 'https://i.postimg.cc/Lsyj4XMh/4011bde1376c5422265a41f3a652c540.jpg', novenaId: 'aparecida', feastDay: '12 de Outubro' },
  { name: 'Apresentação de N.S.', imageUrl: 'https://i.postimg.cc/3Js86PzK/image.png', novenaId: 'apresentacao_ns', feastDay: '21 de Novembro' },
  { name: 'N.S. da Saúde', imageUrl: 'https://i.postimg.cc/RCdhqSqh/image.png', novenaId: 'ns_saude', feastDay: '21 de Novembro' },
  { name: 'N.S. das Graças', imageUrl: 'https://i.postimg.cc/SsBDK7HJ/Design-sem-nome-2.png', novenaId: 'gracas', feastDay: '27 de Novembro' },
  { name: 'Imaculada Conceição', imageUrl: 'https://iili.io/KpAtISf.png', novenaId: 'imaculada_conceicao', feastDay: '08 de Dezembro' },
]


import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  const { toast } = useToast();
  const [selectedMonth, setSelectedMonth] = useState<string>(months[new Date().getMonth()]);
  const [selectedSaintId, setSelectedSaintId] = useState<string | null>(null);
  const [hydrated, setHydrated] = useState(false);
  const [theme, setTheme] = useState<Theme>('theme-dark-gray');
  const saintOfTheDayRef = useRef<SaintOfTheDayRef>(null);
  const saintOfTheDaySectionRef = useRef<HTMLDivElement>(null);
  const novenaSectionRef = useRef<HTMLDivElement>(null);
  const novenaDisplaySectionRef = useRef<HTMLDivElement>(null);
  const scrollTimeoutRef = useRef<number | null>(null);
  const [isSaintOfTheDayOpen, setIsSaintOfTheDayOpen] = useState(false);
  const [showJoseNovenaDialog, setShowJoseNovenaDialog] = useState(false);
  const [isJoseDialogOpen, setIsJoseDialogOpen] = useState(false);
  const [isMarianDialogOpen, setIsMarianDialogOpen] = useState(false);
  const [marianCarouselApi, setMarianCarouselApi] = useState<CarouselApi>()
  const [marianCarouselCurrent, setMarianCarouselCurrent] = useState(0)
  const [isRosarioDescriptionOpen, setIsRosarioDescriptionOpen] = useState(false);
  const [scrollTarget, setScrollTarget] = useState<'novena' | 'title' | null>(null);
  const [showNatalNovenaDialog, setShowNatalNovenaDialog] = useState(false);
  const [closestSaintId, setClosestSaintId] = useState<string | null>(null);
  const [isHamburgerRed, setIsHamburgerRed] = useState(false);
  const [isNavigating, setIsNavigating] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [userProgress, setUserProgress] = useState<{ completed: number, ongoing: { id: string, name: string, day: number }[] }>({ completed: 0, ongoing: [] });

  const calculateProgress = useCallback(() => {
    if (typeof window === 'undefined') return;
    
    let completedCount = 0;
    const ongoingItems: { id: string, name: string, day: number }[] = [];

    Object.keys(novenaData).forEach(id => {
      const novena = novenaData[id];
      const saint = saints.find(s => s.id === id) || (id.startsWith('natal') ? { name: id === 'natal_sao_leao' ? 'São Leão Magno' : 'Sagrada Família' } : null);
      if (!saint) return;

      const versionIds = ['tradicional', ...(novena.versions?.map(v => v.id) || [])];

      versionIds.forEach(vId => {
        const storageKey = `novena_completed_${id}_${vId}`;
        const saved = localStorage.getItem(storageKey);
        if (saved) {
          try {
            const completedDays = JSON.parse(saved);
            const daysDone = Object.values(completedDays).filter(Boolean).length;
            const totalDays = vId === 'tradicional' ? novena.days.length : (novena.versions?.find(v => v.id === vId)?.days.length || 0);

            if (daysDone >= totalDays && totalDays > 0) {
              completedCount++;
            } else if (daysDone > 0) {
              const lastDay = Math.max(...Object.keys(completedDays).map(Number).filter(k => completedDays[k]));
              ongoingItems.push({ id, name: saint.name, day: lastDay + 1 });
            }
          } catch (e) {}
        }
      });
    });

    setUserProgress({ completed: completedCount, ongoing: ongoingItems });
  }, []);

  useEffect(() => {
    if (hydrated) {
      calculateProgress();
    }
  }, [hydrated, calculateProgress]);

  useEffect(() => {
    if (!marianCarouselApi) return
    setMarianCarouselCurrent(marianCarouselApi.selectedScrollSnap())
    marianCarouselApi.on("select", () => {
      setMarianCarouselCurrent(marianCarouselApi.selectedScrollSnap())
    })
  }, [marianCarouselApi])

  useEffect(() => {
    const handlePopState = () => {
      if (isJoseDialogOpen) {
        setIsJoseDialogOpen(false);
      }
      if (isMarianDialogOpen) {
        setIsMarianDialogOpen(false);
      }
      if (showJoseNovenaDialog) {
        setShowJoseNovenaDialog(false);
      }
    };

    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, [isJoseDialogOpen, isMarianDialogOpen, showJoseNovenaDialog]);

  useEffect(() => {
    if (isJoseDialogOpen) {
      window.history.pushState({ modal: 'jose' }, '');
    }
    if (isMarianDialogOpen) {
      window.history.pushState({ modal: 'mariano' }, '');
    }
    if (showJoseNovenaDialog) {
      window.history.pushState({ modal: 'joseNovena' }, '');
    }
    if (showNatalNovenaDialog) {
      window.history.pushState({ modal: 'natalNovena' }, '');
    }
  }, [isJoseDialogOpen, isMarianDialogOpen, showJoseNovenaDialog, showNatalNovenaDialog]);

  useEffect(() => {
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;

    const today = new Date();
    const todayOnlyDate = new Date(today.getFullYear(), today.getMonth(), today.getDate());

    let initialMonth: string | null = null;
    let initialNovenaId: string | null = null;
    let initialMonthScroll: string | null = null;
    let initialSaintScrollId: string | null = null;

    const hash = window.location.hash.substring(1);
    const saintFromHash = saints.find(s => s.id === hash);

    if (saintFromHash) {
      const saintMonths = saintFromHash.month.split('/').map(m => m.trim());
      const currentMonthName = months[todayOnlyDate.getMonth()];
      initialMonth = saintMonths.includes(currentMonthName) ? currentMonthName : saintMonths[0];
      initialNovenaId = saintFromHash.id;
      initialMonthScroll = initialMonth;
      initialSaintScrollId = initialNovenaId;
      setScrollTarget('title');
    } else {
      const saintsWithDates = saints.map(s => {
        const [startDay, startMonth] = s.startDate.split('/').map(Number);
        const [endDay, endMonth] = s.endDate.split('/').map(Number);
        
        let startD = new Date(todayOnlyDate.getFullYear(), startMonth - 1, startDay);
        let endD = new Date(todayOnlyDate.getFullYear(), endMonth - 1, endDay);

        if (endMonth < startMonth) {
          if (todayOnlyDate.getMonth() < 6) {
            startD.setFullYear(todayOnlyDate.getFullYear() - 1);
          } else {
            endD.setFullYear(todayOnlyDate.getFullYear() + 1);
          }
        }

        const diffStart = startD.getTime() - todayOnlyDate.getTime();
        const daysUntilStart = Math.ceil(diffStart / (1000 * 60 * 60 * 24));

        return { saint: s, daysUntilStart, endD };
      });

      const closestSaint = saintsWithDates
        .filter(item => item.endD >= todayOnlyDate)
        .sort((a, b) => {
          if (a.daysUntilStart <= 0 && b.daysUntilStart > 0) return -1;
          if (b.daysUntilStart <= 0 && a.daysUntilStart > 0) return 1;
          return Math.abs(a.daysUntilStart) - Math.abs(b.daysUntilStart);
        })[0];

      if (closestSaint) {
        initialSaintScrollId = closestSaint.saint.id;
        const saintMonths = closestSaint.saint.month.split('/').map(m => m.trim());
        const currentMonthName = months[todayOnlyDate.getMonth()];
        initialMonthScroll = saintMonths.includes(currentMonthName) ? currentMonthName : saintMonths[0];
        // Only set scroll target if we have a specific hash, 
        // OR if you want it to scroll to the "closest" on every refresh (maybe not desirable for everyone, but let's see)
        // If there's a hash, we definitely want to scroll.
        if (hash) setScrollTarget('title');
      }
    }

    if (initialMonth) {
      setSelectedMonth(initialMonth);
      if (initialNovenaId) setSelectedSaintId(initialNovenaId);
    } else if (initialMonthScroll) {
      setSelectedMonth(initialMonthScroll);
    }

    if (initialSaintScrollId) {
      setClosestSaintId(initialSaintScrollId);
    }

    // Listener para mudanças de hash enquanto o usuário está na página
    const handleHashChange = () => {
      const newHash = window.location.hash.substring(1);
      const saint = saints.find(s => s.id === newHash);
      if (saint) {
        const saintMonths = saint.month.split('/').map(m => m.trim());
        const currentMonthName = months[new Date().getMonth()];
        const targetMonth = saintMonths.includes(currentMonthName) ? currentMonthName : saintMonths[0];
        
        setSelectedMonth(targetMonth);
        setSelectedSaintId(saint.id);
        setScrollTarget('title');
      }
    };

    window.addEventListener('hashchange', handleHashChange);

    // Flash hamburger button red for 4 seconds when confession popup appears
    setTimeout(() => {
      setIsHamburgerRed(true);
      setTimeout(() => setIsHamburgerRed(false), 4000);
    }, 300);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, [hydrated]);


  const smoothScrollToElement = (target: HTMLElement | null) => {
    if (!target) return;

    const isScrollable = (node: Element | null) => {
      if (!node || node === document.documentElement) return false;
      const style = getComputedStyle(node as Element);
      const overflowY = style.overflowY;
      return (overflowY === 'auto' || overflowY === 'scroll') && (node as HTMLElement).scrollHeight > (node as HTMLElement).clientHeight;
    }

    let ancestor: Element | null = target.parentElement;
    while (ancestor && !isScrollable(ancestor)) {
      ancestor = ancestor.parentElement;
    }

    const headerOffset = 32; // maior respiro no topo após a rolagem

    if (!ancestor || ancestor === document.documentElement || ancestor === document.body) {
      const top = target.getBoundingClientRect().top + window.pageYOffset - headerOffset;
      window.scrollTo({ top, behavior: 'smooth' });
    } else {
      const ancestorRect = (ancestor as HTMLElement).getBoundingClientRect();
      const targetRect = target.getBoundingClientRect();
      const topWithin = targetRect.top - ancestorRect.top + (ancestor as HTMLElement).scrollTop - headerOffset;
      (ancestor as HTMLElement).scrollTo({ top: topWithin, behavior: 'smooth' });
    }
  }

  useEffect(() => {
    if (selectedSaintId && hydrated) {
      history.pushState({ novenaId: selectedSaintId }, '', '#' + selectedSaintId);
      
      if (scrollTarget) {
        if (scrollTimeoutRef.current) window.clearTimeout(scrollTimeoutRef.current);
        scrollTimeoutRef.current = window.setTimeout(() => {
          requestAnimationFrame(() => {
            const selectorTitle = document.getElementById('saints-nav-title');
            if (selectorTitle) {
                selectorTitle.scrollIntoView({ behavior: 'smooth', block: 'start' });
            } else if (novenaDisplaySectionRef.current) {
                novenaDisplaySectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
            setScrollTarget(null);
          });
        }, 300);
      }
    }

    return () => {
      if (scrollTimeoutRef.current) {
        window.clearTimeout(scrollTimeoutRef.current);
        scrollTimeoutRef.current = null;
      }
    }
  }, [selectedSaintId, hydrated, scrollTarget]);

  const selectedNovena = useMemo(
    () => (selectedSaintId ? novenaData[selectedSaintId] : null),
    [selectedSaintId]
  );

  const selectedSaint = useMemo(
    () => {
      if (selectedSaintId === 'natal_sao_leao') {
        return {
          id: 'natal_sao_leao',
          name: 'São Leão Magno',
          imageUrl: 'https://iili.io/ffgFVsI.jpg',
          month: 'Dezembro',
          startDate: '16/12',
          endDate: '24/12',
          feastDay: '25 de Dezembro'
        };
      }
      if (selectedSaintId === 'natal_familia') {
        return {
          id: 'natal_familia',
          name: 'Sagrada Família',
          imageUrl: 'https://iili.io/ffgFVsI.jpg',
          month: 'Dezembro',
          startDate: '16/12',
          endDate: '24/12',
          feastDay: '25 de Dezembro'
        };
      }
      return saints.find(saint => saint.id === selectedSaintId) || null;
    },
    [selectedSaintId]
  );



  const handleSelectSaint = (id: string) => {
    if (id === 'natal') {
      setShowNatalNovenaDialog(true);
      return;
    }
    setSelectedSaintId(id);
    const saint = saints.find(s => s.id === id);
    if (saint) setSelectedMonth(saint.month);
    
    // Tema específico por santo
    if (id === 'sao_jose_operario' || id === 'sao_jose_19_marco') {
      setTheme('theme-green');
    } else {
      setTheme(prev => prev === 'theme-green' ? 'theme-dark-gray' : prev);
    }

    // Acionar a rolagem suave até a novena selecionada
    setScrollTarget('title');
  };

  const handleMonthChange = (month: string) => {
    setSelectedMonth(month);
    const saintsInNewMonth = saints.filter(s => s.month.split('/').map(m => m.trim()).includes(month));

    // Check if the current selected ID is valid for the new month
    const isValidForMonth = saintsInNewMonth.some(s => s.id === selectedSaintId);

    // Special case for Natal novenas which are not in the main saints list but belong to December
    const isNatalNovena = (selectedSaintId === 'natal_sao_leao' || selectedSaintId === 'natal_familia') && month === 'Dezembro';

    if (selectedSaintId && !isValidForMonth && !isNatalNovena) {
      setSelectedSaintId(null);
    }
  }

  const handleSaintOfTheDayNavigation = (direction: 'prev' | 'next') => {
    setIsSaintOfTheDayOpen(false); // Close accordion before navigating
    // Add a small delay to allow the accordion to close before changing the slide
    setTimeout(() => {
      saintOfTheDayRef.current?.navigate(direction);
      saintOfTheDaySectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 200);
  }

  const handleNavigateToNovena = (saintId: string) => {
    setShowJoseNovenaDialog(false);
    setShowNatalNovenaDialog(false);
    setIsJoseDialogOpen(false);
    setIsMarianDialogOpen(false);

    const saint = saints.find(s => s.id === saintId);
    if (saint) {
      setSelectedMonth(saint.month);
      setSelectedSaintId(saintId);
      // Aguarda o fechamento do diálogo (animação) antes de rolar
      // para garantir que a rolagem com comportamento 'smooth' fique visível.
      setTimeout(() => setScrollTarget('title'), 220);
    } else if (saintId === 'natal_sao_leao' || saintId === 'natal_familia') {
      setSelectedMonth('Dezembro');
      setSelectedSaintId(saintId);
      setTimeout(() => setScrollTarget('title'), 220);
    }
  }

  const handlePageTransition = (e: React.MouseEvent<HTMLAnchorElement>, url: string) => {
    e.preventDefault();
    setIsNavigating(true);
    // Add 100ms delay to allow some animation frames before moving to Next.js router
    setTimeout(() => {
        router.push(url);
    }, 1000); 
  };

  return (
    <React.Fragment>
      <LoadingScreen isLoading={!hydrated || isNavigating} />
      
      <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
        {/* Botão de abrir (visível apenas quando o menu está fechado) */}
        {!isMenuOpen && (
          <Button
            variant="outline"
            size="icon"
            onClick={() => {
              calculateProgress();
              setIsMenuOpen(true);
            }}
            className={`fixed top-2 left-2 z-[100] transition-all duration-700 shadow-xl border-2 ${
              isHamburgerRed
                ? 'bg-red-700 text-white border-red-700 scale-110 shadow-red-500/40'
                : 'bg-white/20 backdrop-blur-md text-primary border-primary/30 hover:bg-white/40'
            } rounded-full w-12 h-12`}
          >
            <Menu className="h-6 w-6" />
            <span className="sr-only">Abrir menu</span>
          </Button>
        )}
        <SheetContent 
          side="left" 
          hideClose
          className="w-[85vw] sm:w-[400px] p-0 border-r-[3px] border-black/20 overflow-hidden shadow-2xl backdrop-blur-3xl transition-all duration-500"
          style={{
            backgroundImage: "linear-gradient(to bottom, rgba(255, 255, 255, 0.65), rgba(255, 255, 255, 0.55)), url('https://iili.io/BszsZNa.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          {/* Botão de fechar (dentro do SheetContent para evitar bloqueio de cliques do Radix) */}
          <Button
            variant="outline"
            size="icon"
            onClick={() => setIsMenuOpen(false)}
            className={`fixed top-2 left-2 z-[200] transition-all duration-700 shadow-xl border-2 ${
              isHamburgerRed
                ? 'bg-red-700 text-white border-red-700 scale-110 shadow-red-500/40'
                : 'bg-white/20 backdrop-blur-md text-primary border-primary/30 hover:bg-white/40'
            } rounded-full w-12 h-12`}
          >
            <Menu className="h-6 w-6" />
            <span className="sr-only">Fechar menu</span>
          </Button>

          <SheetHeader className="p-6 bg-white/40 backdrop-blur-md shadow-sm border-b border-black/5 flex flex-col items-center justify-center text-center">
            <SheetTitle className="text-xl font-brand text-gray-800 text-center w-full">Menu</SheetTitle>
            <SheetDescription className="sr-only">Menu principal de navegação.</SheetDescription>
          </SheetHeader>
          <div className="flex flex-col gap-4 p-6">
            <ConfessionTimesModal>
              <Button variant="outline" className="w-full justify-start gap-2 bg-white/10 backdrop-blur-md hover:bg-white/20 text-primary border-2 border-primary font-bold animate-shine">
                <AlertCircle className="h-5 w-5" />
                Horários de Confissão
              </Button>
            </ConfessionTimesModal>

            <Link href="/espaco-mariano" className="w-full" onClick={(e) => handlePageTransition(e, '/espaco-mariano')}>
              <Button
                className="w-full justify-start gap-2 bg-blue-900 hover:bg-blue-950 text-white"
              >
                <Image src="https://iili.io/KpYhaae.png" alt="Nossa Senhora" width={20} height={20} className="w-5 h-5 object-contain" />
                Espaço Mariano
              </Button>
            </Link>

            <Link href="/encontre-seu-lugar" className="w-full" onClick={(e) => handlePageTransition(e, '/encontre-seu-lugar')}>
              <Button
                className="w-full justify-start gap-2 bg-red-700 hover:bg-red-800 text-white"
              >
                <Image src="https://iili.io/B5cDUbI.png" alt="Encontre seu lugar" width={20} height={20} className="w-5 h-5 object-contain" />
                Encontre Seu Lugar
              </Button>
            </Link>

            <Link href="/sao-jose" className="w-full" onClick={(e) => handlePageTransition(e, '/sao-jose')}>
              <Button
                className="w-full justify-start gap-2 bg-green-700 hover:bg-green-800 text-white"
              >
                <Image src="https://iili.io/KpYhc8u.png" alt="São José" width={20} height={20} className="w-5 h-5 object-contain" />
                Espaço São José
              </Button>
            </Link>
          </div>

          <div className="mt-auto p-6 border-t border-gray-200">
            <h3 className="text-lg font-brand text-gray-800 mb-4 flex items-center gap-2">
              <span className="text-xl">📈</span> Seu Progresso
            </h3>
            <div className="space-y-4">
              <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-sm border border-primary/10">
                <p className="text-sm font-semibold text-gray-600 uppercase tracking-wider">Novenas Concluídas</p>
                <p className="text-3xl font-bold text-primary">{userProgress.completed}</p>
              </div>
              
              {userProgress.ongoing.length > 0 && (
                <div className="space-y-2">
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-widest px-1">Em andamento</p>
                  <ScrollArea className="h-48">
                    <div className="space-y-2 pr-4">
                      {userProgress.ongoing.map((item, idx) => (
                        <button 
                          key={idx} 
                          onClick={() => {
                            handleNavigateToNovena(item.id);
                            setIsMenuOpen(false);
                          }}
                          className="w-full bg-white p-3 rounded-lg shadow-sm border border-gray-200 flex justify-between items-center hover:bg-stone-50 transition-colors group"
                        >
                          <span className="text-sm font-medium text-gray-700 group-hover:text-primary transition-colors">{item.name}</span>
                          <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full font-bold">Dia {item.day}</span>
                        </button>
                      ))}
                    </div>
                  </ScrollArea>
                </div>
              )}
            </div>
          </div>
        </SheetContent>
      </Sheet>

      <div className={cn(
          "transition-all duration-700 ease-in-out", 
          hydrated && !isNavigating ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-[100%] animate-gate-up"
      )}>
        <div className="container mx-auto p-4 md:p-8 max-w-5xl text-stone-900">

          <Header />
          <WeeklyDevotions onLiturgyClick={() => saintOfTheDayRef.current?.openAndScrollToLiturgy()} />

          <div className="relative mt-12" ref={saintOfTheDaySectionRef}>
            <div className="flex justify-center -mb-px">
              <div className="bg-gray-100/70 backdrop-blur-md px-8 py-2 rounded-t-3xl border-t border-x border-white/30 shadow-[0_-8px_20px_-8px_rgba(0,0,0,0.15)] relative z-10">
                <h2 className="text-base font-brand text-center text-stone-800 tracking-wide">
                  Santo do Dia
                </h2>
              </div>
            </div>
            <SaintOfTheDay
              ref={saintOfTheDayRef}
              triggerTheme={theme}
              isOpenInitially={isSaintOfTheDayOpen}
              onToggle={setIsSaintOfTheDayOpen}
            />
            <div
              className={cn(
                "absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 flex items-center justify-center gap-2 z-20"
              )}
            >
              <Button
                variant="outline"
                className="h-8 px-4 bg-white/70 backdrop-blur-sm text-primary hover:bg-primary hover:text-primary-foreground shadow-lg border-primary/20 border"
                onClick={(e) => { e.stopPropagation(); e.currentTarget.blur(); handleSaintOfTheDayNavigation('prev'); }}
              >
                Dia anterior
              </Button>
              <Button
                variant="outline"
                className="h-8 px-4 bg-white/70 backdrop-blur-sm text-primary hover:bg-primary hover:text-primary-foreground shadow-lg border-primary/20 border"
                onClick={(e) => { e.stopPropagation(); e.currentTarget.blur(); handleSaintOfTheDayNavigation('next'); }}
              >
                Próximo dia
              </Button>
            </div>
          </div>

          <div className="mt-16 w-full flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/espaco-mariano" onClick={(e) => handlePageTransition(e, '/espaco-mariano')}>
              <button className="flex flex-row items-center justify-center gap-3 px-4 py-3 bg-blue-900/90 text-white rounded-lg shadow-md cursor-pointer transition-all hover:scale-105 hover:shadow-xl w-auto">
                <Image src="https://iili.io/KpYhaae.png" alt="Nossa Senhora" width={24} height={24} className="w-6 h-6 object-contain" />
                <span className="font-brand text-sm text-center font-semibold">Espaço Mariano</span>
              </button>
            </Link>

            <Link href="/encontre-seu-lugar" onClick={(e) => handlePageTransition(e, '/encontre-seu-lugar')}>
              <button className="flex flex-row items-center justify-center gap-3 px-4 py-3 bg-red-700/90 text-white rounded-lg shadow-md cursor-pointer transition-all hover:scale-105 hover:shadow-xl w-auto">
                <Image src="https://iili.io/B5cDUbI.png" alt="Encontre seu lugar" width={24} height={24} className="w-6 h-6 object-contain" />
                <span className="font-brand text-sm text-center font-semibold">Encontre Seu Lugar</span>
              </button>
            </Link>

            <Link href="/sao-jose" onClick={(e) => handlePageTransition(e, '/sao-jose')}>
              <button className="flex flex-row items-center justify-center gap-3 px-4 py-3 bg-green-700/90 text-white rounded-lg shadow-md cursor-pointer transition-all hover:scale-105 hover:shadow-xl w-auto">
                <Image src="https://iili.io/KpYhc8u.png" alt="São José" width={24} height={24} className="w-6 h-6 object-contain" />
                <span className="font-brand text-sm text-center font-semibold">Espaço São José</span>
              </button>
            </Link>
          </div>


          <div ref={novenaSectionRef} className="mt-16">
            <div className="flex justify-center -mb-px">
              <div className="bg-gray-100/70 backdrop-blur-md px-8 py-2 rounded-t-3xl border-t border-x border-white/30 shadow-[0_-8px_20px_-8px_rgba(0,0,0,0.15)] relative z-10">
                <h2 id="saints-nav-title" className="text-base font-brand text-center text-stone-800 tracking-wide">
                  Novenas de {selectedMonth}
                </h2>
              </div>
            </div>
            <div className="bg-gray-100/70 backdrop-blur-sm rounded-xl shadow-lg p-4 relative border border-white/20">
              <SaintSelector
                saints={saints}
                months={months}
                selectedMonth={selectedMonth}
                onMonthChange={handleMonthChange}
                selectedSaintId={selectedSaintId}
                onSaintSelect={handleSelectSaint}
                closestSaintId={closestSaintId}
              />
            </div>
          </div>

          <div className="mt-8" ref={novenaDisplaySectionRef}>
            <NovenaDisplay
              novena={selectedNovena}
              saint={selectedSaint}
              theme={theme}
              setTheme={setTheme}
            />
          </div>
          <Footer />
        </div>
      </div>
      <AlertDialog open={showJoseNovenaDialog} onOpenChange={setShowJoseNovenaDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Qual novena a São José você gostaria de rezar?</AlertDialogTitle>
            <AlertDialogDescription>
              A Igreja dedica dois dias a São José, com diferentes ênfases em sua missão.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction onClick={() => handleNavigateToNovena('sao_jose')}>
              São José, Esposo da Virgem Maria (19 de Março)
            </AlertDialogAction>
            <AlertDialogAction onClick={() => handleNavigateToNovena('sao_jose_operario')}>
              São José Operário (1 de Maio)
            </AlertDialogAction>
            <AlertDialogCancel>Cancelar</AlertDialogCancel>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <AlertDialog open={showNatalNovenaDialog} onOpenChange={setShowNatalNovenaDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Qual Novena de Natal você gostaria de rezar?</AlertDialogTitle>
            <AlertDialogDescription>
              Escolha entre as meditações profundas de São Leão Magno ou a novena para rezar em família.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter className="flex-col gap-2 sm:flex-row">
            <AlertDialogAction onClick={() => handleNavigateToNovena('natal_sao_leao')}>
              Novena com São Leão Magno
            </AlertDialogAction>
            <AlertDialogAction onClick={() => handleNavigateToNovena('natal_familia')}>
              Novena de Natal em Família
            </AlertDialogAction>
            <AlertDialogCancel>Cancelar</AlertDialogCancel>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
      <ConfessionTimesModal />
      </React.Fragment>
    );
}
