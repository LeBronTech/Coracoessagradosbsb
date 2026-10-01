
'use client';

import React, { useState, useEffect, useCallback, memo, useRef, useMemo, startTransition } from 'react';
import Image from 'next/image';
import useEmblaCarousel, { type UseEmblaCarouselType } from 'embla-carousel-react';
import type { EmblaOptionsType } from 'embla-carousel';
import { cn, formatSaintName, getProxiedImageUrl, getMainNameFontSize } from '@/lib/utils';
import type { Saint } from '@/lib/data';
import { novenaData } from '@/lib/data';
import { Card, CardContent } from '@/components/ui/card';
import { Heart } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';
import { MartyrSymbol } from '@/components/martyr-symbol';

const OPTIONS: EmblaOptionsType = { loop: true, align: 'center', containScroll: false };
type EmblaApi = UseEmblaCarouselType[1];

interface SaintSelectorProps {
  saints: Saint[];
  months: string[];
  selectedMonth: string;
  onMonthChange: (month: string) => void;
  selectedSaintId: string | null;
  onSaintSelect: (id: string) => void;
  closestSaintId?: string | null;
}

const MonthCarousel = memo(({ months, selectedMonth, onMonthChange }: Pick<SaintSelectorProps, 'months' | 'selectedMonth' | 'onMonthChange'>) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS);
  const selectedMonthRef = useRef(selectedMonth);
  selectedMonthRef.current = selectedMonth;

  // Rastreia se o usuário está arrastando manualmente o MonthCarousel
  const isUserDragging = useRef(false);
  const scrollRaf = useRef<number | null>(null);

  const onSelect = useCallback((api: EmblaApi) => {
    if (!api) return;
    if (!isUserDragging.current) return;

    const newSelectedIndex = api.selectedScrollSnap();
    const newMonth = months[newSelectedIndex];
    if (newMonth && newMonth !== selectedMonthRef.current) {
      selectedMonthRef.current = newMonth;
      onMonthChange(newMonth);
    }
  }, [onMonthChange, months]);

  // Cálculo de escala e opacidade otimizado com leitura única de layout
  const onScroll = useCallback((api: EmblaApi) => {
    if (!api) return;
    const root = api.rootNode();
    if (!root) return;

    const parentRect = root.getBoundingClientRect();
    const viewportCenter = parentRect.width / 2;
    const parentLeft = parentRect.left;
    const nodes = api.slideNodes();

    for (let i = 0; i < nodes.length; i++) {
      const node = nodes[i];
      const nodeRect = node.getBoundingClientRect();
      const nodeCenter = nodeRect.left + nodeRect.width / 2;
      const relativeCenter = nodeCenter - parentLeft;
      const dist = Math.abs(viewportCenter - relativeCenter);

      let scale = 0.7;
      let opacity = 0.6;

      if (dist < 100) {
        scale = 1.1; // Ativo
        opacity = 1;
      } else if (dist < 260) {
        scale = 0.85; // Vizinhos imediatos
        opacity = 0.8;
      }

      node.style.transform = `scale(${scale})`;
      node.style.opacity = `${opacity}`;
    }
  }, []);

  // Anima suavemente para o novo mês sem engasgar
  useEffect(() => {
    if (!emblaApi) return;
    const initialIndex = months.indexOf(selectedMonth);
    const currentIndex = emblaApi.selectedScrollSnap();

    if (initialIndex !== -1 && initialIndex !== currentIndex) {
      isUserDragging.current = false;
      emblaApi.scrollTo(initialIndex, false);
    }
  }, [emblaApi, months, selectedMonth]);

  useEffect(() => {
    if (!emblaApi) return;

    const onPointerDown = () => {
      isUserDragging.current = true;
    };
    const onPointerUp = () => {
      setTimeout(() => {
        isUserDragging.current = false;
      }, 250);
    };

    emblaApi.on('pointerDown', onPointerDown);
    emblaApi.on('pointerUp', onPointerUp);

    // Throttle do evento de scroll de Embla para 60fps (1x por frame)
    const handleEvents = () => {
      if (scrollRaf.current !== null) return;
      scrollRaf.current = requestAnimationFrame(() => {
        scrollRaf.current = null;
        onScroll(emblaApi);
      });
    };

    const handleSelect = () => onSelect(emblaApi);

    // Render inicial
    onScroll(emblaApi);

    emblaApi.on('select', handleSelect);
    emblaApi.on('scroll', handleEvents);
    emblaApi.on('reInit', handleEvents);
    emblaApi.on('reInit', handleSelect);

    const timer = setTimeout(() => {
      emblaApi.reInit();
    }, 100);

    return () => {
      clearTimeout(timer);
      if (scrollRaf.current !== null) cancelAnimationFrame(scrollRaf.current);
      emblaApi.off('pointerDown', onPointerDown);
      emblaApi.off('pointerUp', onPointerUp);
      emblaApi.off('select', handleSelect);
      emblaApi.off('scroll', handleEvents);
      emblaApi.off('reInit', handleEvents);
      emblaApi.off('reInit', handleSelect);
    };
  }, [emblaApi, onSelect, onScroll]);

  const handleMonthClick = (index: number) => {
    isUserDragging.current = false;
    if (emblaApi) emblaApi.scrollTo(index, false);
    const clickedMonth = months[index];
    if (clickedMonth) {
      selectedMonthRef.current = clickedMonth;
      onMonthChange(clickedMonth);
    }
  };

  return (
    <div className="overflow-hidden month-carousel py-4 w-full" ref={emblaRef}>
      <div className="flex touch-pan-y">
        {months.map((month, index) => (
          <div
            className={cn('flex-[0_0_10rem] min-w-0 pl-4 relative embla__slide select-none')}
            key={month + index}
            style={{ transform: 'scale(0.7)', opacity: 0.6 }}
          >
            <button
              onClick={() => handleMonthClick(index)}
              className={cn(
                'month-nav-btn text-lg font-brand text-gray-600 w-full cursor-pointer',
                selectedMonth === month && 'active'
              )}
            >
              {month}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
});

MonthCarousel.displayName = 'MonthCarousel';

// Componente individual memoizado para evitar re-render dos 108 cards a cada mudança de mês
interface SaintNavItemProps {
  saint: Saint;
  isSelected: boolean;
  shouldBlink: boolean;
  isPriority: boolean;
  onSelect: (id: string) => void;
  isFirstOfMonth: boolean;
  monthName: string;
}

const SaintNavItem = memo(({
  saint,
  isSelected,
  shouldBlink,
  isPriority,
  onSelect,
  isFirstOfMonth,
  monthName,
}: SaintNavItemProps) => {
  const { main, additional } = useMemo(() => formatSaintName(saint.name), [saint.name]);

  return (
    <>
      {isFirstOfMonth && (
        <div className="flex flex-col items-center justify-center self-stretch px-2 select-none shrink-0 opacity-40 hover:opacity-80 transition-opacity">
          <div className="h-full w-[1px] bg-gradient-to-b from-transparent via-gray-400 to-transparent min-h-[60px]" />
          <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500 my-1 font-brand whitespace-nowrap">
            {monthName}
          </span>
          <div className="h-full w-[1px] bg-gradient-to-b from-transparent via-gray-400 to-transparent min-h-[20px]" />
        </div>
      )}
      <div
        className={cn(
          'group saint-nav-item flex flex-col items-center gap-1 text-center opacity-70 hover:opacity-100 hover:scale-105 transform-gpu transition-all duration-200 w-[100px] shrink-0 cursor-pointer',
          isSelected && 'opacity-100'
        )}
        onClick={() => onSelect(saint.id)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && onSelect(saint.id)}
      >
        <Image
          src={getProxiedImageUrl(saint.imageUrl)}
          alt={saint.name}
          width={80}
          height={80}
          sizes="80px"
          loading={isPriority ? 'eager' : 'lazy'}
          priority={isPriority}
          decoding="async"
          referrerPolicy="no-referrer"
          className={cn(
            'w-20 h-20 rounded-full object-cover shadow-md border-4 transition-all duration-300 bg-stone-200/50 dark:bg-stone-800/50',
            shouldBlink
              ? 'border-primary glow-pulse-ring'
              : isSelected
                ? 'border-primary shadow-lg ring-2 ring-primary/40'
                : 'border-transparent group-hover:border-primary/60'
          )}
          style={{ objectPosition: (saint as any).imageObjectPosition || 'center' }}
        />
        <div className="flex flex-col items-center leading-tight mt-1 min-h-[30px] justify-center">
          <p className={cn(
            "font-bold text-gray-800 font-brand whitespace-nowrap transition-colors duration-200 group-hover:text-primary",
            getMainNameFontSize(main),
            isSelected && "text-primary font-extrabold"
          )}>
            {main}
          </p>
          {additional && (
            <p className="text-[10px] font-normal text-gray-500 opacity-80 whitespace-nowrap flex items-center justify-center gap-1">
              <span>{additional}</span>
              {saint.isMartyr && (
                <MartyrSymbol className="w-3.5 h-3.5 ml-0.5" />
              )}
            </p>
          )}
          {!additional && saint.isMartyr && (
            <div className="flex items-center justify-center">
              <MartyrSymbol className="w-3.5 h-3.5" />
            </div>
          )}
        </div>
        {novenaData[saint.id]?.novenaTitle?.toLowerCase().includes('trezena') && (
          <div className="-mt-1 -mb-1 relative flex items-center justify-center">
            <div className="bg-red-700/80 text-white px-3 py-0.5 text-[9px] font-bold leading-tight shadow-sm uppercase tracking-widest"
              style={{ borderRadius: '0 0 9999px 9999px' }}>
              Trezena
            </div>
          </div>
        )}
        <div className={cn(
          "mt-1 mb-0.5 px-3 py-0.5 rounded-full text-[11px] font-bold tracking-wide shadow-sm transition-all duration-200 border",
          isSelected
            ? "bg-primary text-primary-foreground border-primary shadow-md group-hover:bg-white group-hover:text-primary"
            : "bg-primary text-primary-foreground border-primary group-hover:bg-white group-hover:text-primary group-hover:border-primary group-hover:shadow-md"
        )}>
          Início: {saint.startDate}
        </div>
      </div>
    </>
  );
});

SaintNavItem.displayName = 'SaintNavItem';

function SaintSelector({
  saints,
  months,
  selectedMonth,
  onMonthChange,
  selectedSaintId,
  onSaintSelect,
  closestSaintId,
}: SaintSelectorProps) {

  const [todayNumbers, setTodayNumbers] = useState<{ day: number; month: number } | null>(null);

  useEffect(() => {
    const today = new Date();
    setTodayNumbers({ day: today.getDate(), month: today.getMonth() + 1 });
  }, []);

  // Ordenar todos os santos cronologicamente pelo ano litúrgico (mês * 100 + dia)
  const allSortedSaints = useMemo(() => {
    return [...saints]
      .map((saint) => {
        const [dayStr, monthStr] = saint.startDate.split('/');
        const day = parseInt(dayStr, 10) || 1;
        const monthNum = parseInt(monthStr, 10) || 1;
        const monthIndex = monthNum - 1; // 0 (Janeiro) a 11 (Dezembro)
        return {
          ...saint,
          day,
          monthIndex,
          sortOrder: monthNum * 100 + day,
        };
      })
      .sort((a, b) => a.sortOrder - b.sortOrder);
  }, [saints]);

  // Índice do mês selecionado para priorizar imagens visíveis
  const currentMonthIdx = useMemo(() => {
    return Math.max(0, months.indexOf(selectedMonth));
  }, [months, selectedMonth]);

  const navContainerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const lastScrolledId = useRef<string | null>(null);

  // Controle de rolagem programática vs manual
  const isProgrammaticScroll = useRef(false);
  const programmaticScrollTimer = useRef<NodeJS.Timeout | null>(null);
  const lastScrollSpiedMonth = useRef<string>(selectedMonth);
  const scrollSpyRaf = useRef<number | null>(null);

  // Rolar suavemente para o primeiro santo de um determinado mês quando clicado
  const scrollToMonth = useCallback((monthName: string) => {
    const targetIdx = months.indexOf(monthName);
    if (targetIdx === -1) return;

    lastScrollSpiedMonth.current = monthName;
    isProgrammaticScroll.current = true;
    if (programmaticScrollTimer.current) clearTimeout(programmaticScrollTimer.current);

    const firstSaintOfMonth = allSortedSaints.find((s) => s.monthIndex === targetIdx);
    if (!firstSaintOfMonth) {
      isProgrammaticScroll.current = false;
      return;
    }

    const container = navContainerRef.current;
    const item = itemRefs.current[firstSaintOfMonth.id];
    if (!container || !item) {
      isProgrammaticScroll.current = false;
      return;
    }

    const containerWidth = container.clientWidth;
    const itemOffsetLeft = item.offsetLeft;
    const itemWidth = item.offsetWidth;
    const scrollOffset = itemOffsetLeft - (containerWidth / 2 - itemWidth / 2);

    container.scrollTo({
      left: Math.max(0, scrollOffset),
      behavior: 'smooth',
    });

    programmaticScrollTimer.current = setTimeout(() => {
      isProgrammaticScroll.current = false;
    }, 600);
  }, [allSortedSaints, months]);

  // Monitorar mudança externa do selectedMonth (clique no MonthCarousel)
  useEffect(() => {
    if (selectedMonth === lastScrollSpiedMonth.current) {
      return;
    }
    lastScrollSpiedMonth.current = selectedMonth;
    scrollToMonth(selectedMonth);
  }, [selectedMonth, scrollToMonth]);

  // Efeito para centralizar o carrossel na novena mais próxima ou selecionada
  useEffect(() => {
    const idToScroll = selectedSaintId || closestSaintId;
    if (!idToScroll) return;
    if (idToScroll === lastScrolledId.current) return;

    const performScroll = () => {
      const container = navContainerRef.current;
      const item = itemRefs.current[idToScroll];
      if (!container || !item) return;

      lastScrolledId.current = idToScroll;

      const containerWidth = container.clientWidth;
      const itemOffsetLeft = item.offsetLeft;
      const itemWidth = item.offsetWidth;
      const scrollOffset = itemOffsetLeft - (containerWidth / 2 - itemWidth / 2);

      isProgrammaticScroll.current = true;
      container.scrollTo({
        left: Math.max(0, scrollOffset),
        behavior: 'smooth',
      });

      if (programmaticScrollTimer.current) clearTimeout(programmaticScrollTimer.current);
      programmaticScrollTimer.current = setTimeout(() => {
        isProgrammaticScroll.current = false;
      }, 600);
    };

    const timer = setTimeout(performScroll, 60);
    return () => clearTimeout(timer);
  }, [closestSaintId, selectedSaintId, allSortedSaints]);

  // Detecção de mês sob demanda com propriedades offset nativas (zero layout thrashing)
  const performScrollSpy = useCallback(() => {
    const container = navContainerRef.current;
    if (!container || isProgrammaticScroll.current) return;

    const scrollLeft = container.scrollLeft;
    const clientWidth = container.clientWidth;
    const focusX = scrollLeft + clientWidth / 2;

    let closestSaint: (typeof allSortedSaints)[0] | null = null;
    let minDistance = Infinity;

    for (let i = 0; i < allSortedSaints.length; i++) {
      const saint = allSortedSaints[i];
      const el = itemRefs.current[saint.id];
      if (!el) continue;

      const itemCenter = el.offsetLeft + el.offsetWidth / 2;
      const dist = Math.abs(itemCenter - focusX);

      if (dist < minDistance) {
        minDistance = dist;
        closestSaint = saint;
      }

      if (itemCenter > focusX + 350 && minDistance < Infinity) {
        break;
      }
    }

    if (closestSaint) {
      const currentMonthName = months[closestSaint.monthIndex];
      if (currentMonthName && currentMonthName !== lastScrollSpiedMonth.current) {
        lastScrollSpiedMonth.current = currentMonthName;
        // startTransition garante que o React atualize o mês em segundo plano
        // sem travar a thread de rolagem ou a animação do carrossel superior
        startTransition(() => {
          onMonthChange(currentMonthName);
        });
      }
    }
  }, [allSortedSaints, months, onMonthChange]);

  const isPointerDownRef = useRef(false);
  const scrollEndTimer = useRef<NodeJS.Timeout | null>(null);

  // Monitora quando o usuário está segurando e quando solta o mouse/touch
  useEffect(() => {
    const handlePointerDown = () => {
      isPointerDownRef.current = true;
    };

    const handlePointerUp = () => {
      if (isPointerDownRef.current) {
        isPointerDownRef.current = false;
        // Soltou o mouse/dedo: sincroniza imediatamente o mês e aciona a animação
        setTimeout(() => {
          performScrollSpy();
        }, 40);
      }
    };

    window.addEventListener('pointerdown', handlePointerDown);
    window.addEventListener('pointerup', handlePointerUp);
    window.addEventListener('mouseup', handlePointerUp);
    window.addEventListener('touchend', handlePointerUp);

    return () => {
      window.removeEventListener('pointerdown', handlePointerDown);
      window.removeEventListener('pointerup', handlePointerUp);
      window.removeEventListener('mouseup', handlePointerUp);
      window.removeEventListener('touchend', handlePointerUp);
      if (scrollEndTimer.current) clearTimeout(scrollEndTimer.current);
    };
  }, [performScrollSpy]);

  const handleScroll = useCallback(() => {
    const container = navContainerRef.current;
    if (!container) return;

    if (isProgrammaticScroll.current) {
      if (programmaticScrollTimer.current) clearTimeout(programmaticScrollTimer.current);
      programmaticScrollTimer.current = setTimeout(() => {
        isProgrammaticScroll.current = false;
      }, 200);
      return;
    }

    // Enquanto o usuário estiver rolando ou arrastando, limpa o timer anterior
    if (scrollEndTimer.current) clearTimeout(scrollEndTimer.current);

    // Se a rolagem cessar (ex: inércia, touchpad ou soltura do mouse),
    // aguarda 140ms de estabilização para disparar a animação do mês correspondente
    scrollEndTimer.current = setTimeout(() => {
      if (!isPointerDownRef.current) {
        performScrollSpy();
      }
    }, 140);
  }, [performScrollSpy]);

  const handleSaintSelect = useCallback((id: string) => {
    lastScrolledId.current = id;
    onSaintSelect(id);
    setTimeout(() => {
      const container = navContainerRef.current;
      const item = itemRefs.current[id];
      if (!container || !item) return;

      const containerWidth = container.clientWidth;
      const itemOffsetLeft = item.offsetLeft;
      const itemWidth = item.offsetWidth;
      const scrollOffset = itemOffsetLeft - (containerWidth / 2 - itemWidth / 2);
      container.scrollTo({ left: Math.max(0, scrollOffset), behavior: 'smooth' });
    }, 30);
  }, [onSaintSelect]);

  return (
    <section className="w-full">
      <MonthCarousel months={months} selectedMonth={selectedMonth} onMonthChange={onMonthChange} />

      <div
        id="saints-icons-container"
        ref={navContainerRef}
        onScroll={handleScroll}
        className="saints-nav-container flex items-start gap-x-4 overflow-x-auto pb-2 mt-4 border-t border-gray-300 pt-4"
      >
        {allSortedSaints.length > 0 ? (
          allSortedSaints.map((saint, idx) => {
            const isFirstOfMonth = idx === 0 || saint.monthIndex !== allSortedSaints[idx - 1].monthIndex;
            const [startDayStr, startMonthStr] = saint.startDate.split('/');
            const startDay = Number(startDayStr);
            const startMonth = Number(startMonthStr);
            const startsToday = todayNumbers?.day === startDay && todayNumbers?.month === startMonth;
            const isSelected = selectedSaintId === saint.id || (saint.id === 'natal' && (selectedSaintId === 'natal_sao_leao' || selectedSaintId === 'natal_familia'));
            const shouldBlink = startsToday && !isSelected;

            const isNearbyMonth = Math.abs(saint.monthIndex - currentMonthIdx) <= 1;
            const isPriority = isNearbyMonth || idx < 14;

            return (
              <div
                key={saint.id}
                ref={(el) => { itemRefs.current[saint.id] = el; }}
                className="shrink-0 flex items-start"
              >
                <SaintNavItem
                  saint={saint}
                  isSelected={isSelected}
                  shouldBlink={shouldBlink}
                  isPriority={isPriority}
                  onSelect={handleSaintSelect}
                  isFirstOfMonth={isFirstOfMonth && idx > 0}
                  monthName={months[saint.monthIndex]}
                />
              </div>
            );
          })
        ) : (
          <div className="w-full flex justify-center">
            <Card className="w-full max-w-sm bg-gray-200/50 border-dashed">
              <CardContent className="p-6 text-center">
                <Heart className="mx-auto h-12 w-12 text-primary/50 mb-4" strokeWidth={1} />
                <p className="font-semibold text-gray-600">
                  Logo logo teremos novenas aqui. Salve Maria!
                </p>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </section>
  );
}

SaintSelector.Skeleton = function SaintSelectorSkeleton() {
  return (
    <section className="w-full">
      <div className="py-4 flex justify-center">
        <Skeleton className="h-8 w-32" />
      </div>
      <div className="flex items-start gap-x-4 overflow-x-auto pb-2 mt-4 border-t border-gray-300 pt-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="flex flex-col items-center gap-1 w-[100px] shrink-0">
            <Skeleton className="w-20 h-20 rounded-full" />
            <Skeleton className="h-4 w-16 mt-1" />
            <Skeleton className="h-3 w-12" />
            <Skeleton className="h-5 w-10 mt-1 rounded-full" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default SaintSelector;
