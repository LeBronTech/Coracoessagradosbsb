
'use client';

import React, { useState, useEffect, useLayoutEffect, useCallback, memo, useRef, useMemo } from 'react';
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

  const onSelect = useCallback((api: EmblaApi) => {
    if (!api) return;
    // Disparar onMonthChange APENAS se o usuário arrastou diretamente o carrossel de meses
    if (!isUserDragging.current) return;

    const newSelectedIndex = api.selectedScrollSnap();
    const newMonth = months[newSelectedIndex];
    if (newMonth && newMonth !== selectedMonthRef.current) {
      selectedMonthRef.current = newMonth;
      onMonthChange(newMonth);
    }
  }, [onMonthChange, months]);

  const onScroll = useCallback((api: EmblaApi) => {
    if (!api) return;

    const viewportCenter = api.rootNode().getBoundingClientRect().width / 2;
    const nodes = api.slideNodes();

    nodes.forEach((node) => {
      const nodeRect = node.getBoundingClientRect();
      const nodeCenter = nodeRect.left + nodeRect.width / 2;
      const parentRect = api.rootNode().getBoundingClientRect();

      const relativeCenter = nodeCenter - parentRect.left;
      const dist = Math.abs(viewportCenter - relativeCenter);

      let scale = 0.7;
      let opacity = 0.6;

      // Adjusted thresholds for neighbors (approx 160px width)
      if (dist < 100) {
        scale = 1.1; // Active
        opacity = 1;
      } else if (dist < 260) {
        scale = 0.85; // Immediate neighbors
        opacity = 0.8;
      }

      node.style.transform = `scale(${scale})`;
      node.style.opacity = `${opacity}`;
    });
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    const initialIndex = months.indexOf(selectedMonth);
    const currentIndex = emblaApi.selectedScrollSnap();

    if (initialIndex !== -1 && initialIndex !== currentIndex) {
      isUserDragging.current = false;
      emblaApi.scrollTo(initialIndex, true);
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

    const handleEvents = () => {
      onScroll(emblaApi);
    };
    const handleSelect = () => onSelect(emblaApi);

    // Initial paint
    handleEvents();

    emblaApi.on('select', handleSelect);
    emblaApi.on('scroll', handleEvents);
    emblaApi.on('reInit', handleEvents);
    emblaApi.on('reInit', handleSelect);

    const timer = setTimeout(() => {
      emblaApi.reInit();
    }, 100);

    return () => {
      clearTimeout(timer);
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
    if (emblaApi) emblaApi.scrollTo(index, true);
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

  // Filtra e organiza apenas as novenas do mês selecionado, eliminando saltos indesejados
  const saintsForMonth = useMemo(() => {
    return saints
      .filter((s) => s.month.split('/').map((m) => m.trim()).includes(selectedMonth))
      .sort((a, b) => {
        const [dayA, monthA] = a.startDate.split('/').map(Number);
        const [dayB, monthB] = b.startDate.split('/').map(Number);
        return (monthA * 100 + dayA) - (monthB * 100 + dayB);
      });
  }, [saints, selectedMonth]);

  const navContainerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const lastScrolledId = useRef<string | null>(null);

  const handleSaintSelect = useCallback((id: string) => {
    lastScrolledId.current = id;
    onSaintSelect(id);
    setTimeout(() => {
      const container = navContainerRef.current;
      const item = itemRefs.current[id];
      if (!container || !item) return;
      const containerRect = container.getBoundingClientRect();
      const itemRect = item.getBoundingClientRect();
      const scrollOffset =
        container.scrollLeft +
        (itemRect.left - containerRect.left) -
        (containerRect.width / 2 - itemRect.width / 2);
      container.scrollTo({ left: Math.max(0, scrollOffset), behavior: 'smooth' });
    }, 30);
  }, [onSaintSelect]);

  // Efeito para centralizar o carrossel na novena selecionada ou mais próxima dentro do mês
  useEffect(() => {
    const idToScroll = selectedSaintId || closestSaintId;
    if (!idToScroll) return;

    const existsInMonth = saintsForMonth.some((s) => s.id === idToScroll);
    if (!existsInMonth) return;

    const performScroll = (retryCount = 0) => {
      const container = navContainerRef.current;
      const item = itemRefs.current[idToScroll];

      if (!container || !item || container.clientWidth === 0 || item.clientWidth === 0) {
        if (retryCount < 10) {
          setTimeout(() => performScroll(retryCount + 1), 50);
        }
        return;
      }

      lastScrolledId.current = idToScroll;
      const containerRect = container.getBoundingClientRect();
      const itemRect = item.getBoundingClientRect();
      const scrollOffset =
        container.scrollLeft +
        (itemRect.left - containerRect.left) -
        (containerRect.width / 2 - itemRect.width / 2);

      container.scrollTo({
        left: Math.max(0, scrollOffset),
        behavior: retryCount === 0 ? 'auto' : 'smooth',
      });
    };

    const timer = setTimeout(() => performScroll(0), 40);
    return () => clearTimeout(timer);
  }, [closestSaintId, selectedSaintId, selectedMonth, saintsForMonth]);

  return (
    <section className="w-full">
      <MonthCarousel months={months} selectedMonth={selectedMonth} onMonthChange={onMonthChange} />

      <div
        id="saints-icons-container"
        ref={navContainerRef}
        className="saints-nav-container flex items-start gap-x-4 overflow-x-auto pb-2 mt-4 border-t border-gray-300 pt-4"
      >
        {saintsForMonth.length > 0 ? (
          saintsForMonth.map((saint, idx) => {
            const [startDayStr, startMonthStr] = saint.startDate.split('/');
            const startDay = Number(startDayStr);
            const startMonth = Number(startMonthStr);
            const startsToday = todayNumbers?.day === startDay && todayNumbers?.month === startMonth;
            const isSelected = selectedSaintId === saint.id || (saint.id === 'natal' && (selectedSaintId === 'natal_sao_leao' || selectedSaintId === 'natal_familia'));
            const shouldBlink = startsToday && !isSelected;

            return (
              <div
                key={saint.id}
                ref={(el) => { itemRefs.current[saint.id] = el; }}
                className={cn(
                  'group saint-nav-item flex flex-col items-center gap-1 text-center opacity-80 hover:opacity-100 hover:scale-105 transform-gpu transition-all duration-200 w-[100px] shrink-0 cursor-pointer',
                  isSelected && 'opacity-100'
                )}
                onClick={() => handleSaintSelect(saint.id)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && handleSaintSelect(saint.id)}
              >
                <Image
                  src={getProxiedImageUrl(saint.imageUrl)}
                  alt={saint.name}
                  width={80}
                  height={80}
                  loading="eager"
                  priority={idx < 12}
                  referrerPolicy="no-referrer"
                  className={cn(
                    'w-20 h-20 rounded-full object-cover shadow-md border-4 transition-all duration-300',
                    shouldBlink
                      ? 'border-primary glow-pulse-ring'
                      : isSelected
                        ? 'border-primary shadow-lg ring-2 ring-primary/40'
                        : 'border-transparent group-hover:border-primary/60'
                  )}
                  style={{ objectPosition: (saint as any).imageObjectPosition || 'center' }}
                />
                <div className="flex flex-col items-center leading-tight mt-1 min-h-[30px] justify-center">
                  {(() => {
                    const { main, additional } = formatSaintName(saint.name);
                    return (
                      <>
                        <p className={cn(
                          "font-bold font-brand whitespace-nowrap transition-colors duration-200 text-gray-800 group-hover:text-primary",
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
                      </>
                    );
                  })()}
                </div>
                {novenaData[saint.id]?.novenaTitle?.toLowerCase().includes('trezena') && (
                  <div className="-mt-1 -mb-1 relative flex items-center justify-center">
                    <div className="bg-red-700/80 text-white px-3 py-0.5 text-[9px] font-bold leading-tight shadow-sm uppercase tracking-widest"
                      style={{ borderRadius: '0 0 9999px 9999px' }}>
                      Trezena
                    </div>
                  </div>
                )}
                {/* Pílula de Início com inversão de cores no hover */}
                <div className={cn(
                  "mt-1 mb-0.5 px-3 py-0.5 rounded-full text-[11px] font-bold tracking-wide shadow-sm transition-all duration-200 border",
                  isSelected
                    ? "bg-primary text-primary-foreground border-primary shadow-md group-hover:bg-white group-hover:text-primary"
                    : "bg-primary text-primary-foreground border-primary group-hover:bg-white group-hover:text-primary group-hover:border-primary group-hover:shadow-md"
                )}>
                  Início: {saint.startDate}
                </div>
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
