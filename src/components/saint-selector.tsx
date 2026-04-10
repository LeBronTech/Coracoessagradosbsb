
'use client';

import React, { useState, useEffect, useCallback, memo, useRef } from 'react';
import Image from 'next/image';
import useEmblaCarousel, { type UseEmblaCarouselType } from 'embla-carousel-react';
import type { EmblaOptionsType } from 'embla-carousel';
import { cn } from '@/lib/utils';
import type { Saint } from '@/lib/data';
import { Card, CardContent } from '@/components/ui/card';
import { Heart } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';

const OPTIONS: EmblaOptionsType = { loop: true, align: 'center', containScroll: false };
type EmblaApi = UseEmblaCarouselType[1];

interface SaintSelectorProps {
  saints: Saint[];
  months: string[];
  selectedMonth: string;
  onMonthChange: (month: string) => void;
  selectedSaintId: string | null;
  onSaintSelect: (id: string) => void;
  closestSaintId: string | null;
}

const MonthCarousel = memo(({ months, selectedMonth, onMonthChange }: Pick<SaintSelectorProps, 'months' | 'selectedMonth' | 'onMonthChange'>) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS);

  const onSelect = useCallback((api: EmblaApi) => {
    if (!api) return;
    const newSelectedIndex = api.selectedScrollSnap();
    onMonthChange(months[newSelectedIndex]);
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
      emblaApi.scrollTo(initialIndex, true);
    }
  }, [emblaApi, months, selectedMonth]);

  useEffect(() => {
    if (!emblaApi) return;

    const handleEvents = () => {
      onScroll(emblaApi);
    }
    const handleSelect = () => onSelect(emblaApi);

    // Initial paint
    handleEvents();

    emblaApi.on('select', handleSelect);
    emblaApi.on('scroll', handleEvents);
    emblaApi.on('reInit', handleEvents);
    emblaApi.on('reInit', handleSelect);

    // IMPORTANT: Force re-layout after mount to position clones
    setTimeout(() => {
      emblaApi.reInit();
    }, 100);

    return () => {
      emblaApi.off('select', handleSelect);
      emblaApi.off('scroll', handleEvents);
      emblaApi.off('reInit', handleEvents);
      emblaApi.off('reInit', handleSelect);
    };
  }, [emblaApi, onSelect, onScroll]);

  const handleMonthClick = (index: number) => {
    if (emblaApi) emblaApi.scrollTo(index);
  }

  return (
    <div className="overflow-hidden month-carousel py-4 w-full" ref={emblaRef} style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}>
      <div className="flex touch-pan-y shadow-inner-top">
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

  const [todayNumbers, setTodayNumbers] = useState<{ day: number, month: number } | null>(null);

  useEffect(() => {
    const today = new Date();
    setTodayNumbers({ day: today.getDate(), month: today.getMonth() + 1 });
  }, []);

  const saintsForMonth = saints
    .filter(s => s.month.split('/').map(m => m.trim()).includes(selectedMonth))
    .sort((a, b) => {
      // Helper to parse "DD/MM"
      const parseDate = (d: string) => {
        const [day, month] = d.split('/').map(Number);
        // Think about year logic for Dec/Jan crossover if needed
        const year = month > 6 ? 2024 : 2025;
        return new Date(year, month - 1, day).getTime();
      };

      return parseDate(a.startDate) - parseDate(b.startDate);
    });

  const navContainerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<Record<string, HTMLDivElement | null>>({});

  // Scroll the selected saint's item into view (flush to left with padding)
  // Also scroll vertically to the novena display section
  const handleSaintSelect = useCallback((id: string) => {
    onSaintSelect(id);
    setTimeout(() => {
      const container = navContainerRef.current;
      const item = itemRefs.current[id];
      if (!container || !item) return;
      const containerLeft = container.getBoundingClientRect().left;
      const itemLeft = item.getBoundingClientRect().left;
      const scrollOffset = container.scrollLeft + (itemLeft - containerLeft) - 16;
      container.scrollTo({ left: Math.max(0, scrollOffset), behavior: 'smooth' });
    }, 30);
  }, [onSaintSelect]);
  
  const lastScrolledId = useRef<string | null>(null);

  // Efeito inicial para rolar até a novena mais próxima ou selecionada
  useEffect(() => {
    const idToScroll = selectedSaintId || closestSaintId;
    if (!idToScroll || idToScroll === lastScrolledId.current) return;

    lastScrolledId.current = idToScroll;

    const performScroll = (retryCount = 0) => {
      const container = navContainerRef.current;
      const item = itemRefs.current[idToScroll];
      
      if (!container || !item) {
        if (retryCount < 5) {
          setTimeout(() => performScroll(retryCount + 1), 100);
        }
        return;
      }

      const containerLeft = container.getBoundingClientRect().left;
      const itemLeft = item.getBoundingClientRect().left;
      const scrollOffset = container.scrollLeft + (itemLeft - containerLeft) - 16;
      
      container.scrollTo({ 
        left: Math.max(0, scrollOffset), 
        behavior: retryCount === 0 ? 'smooth' : 'auto' 
      });
    };

    // Pequeno atraso para garantir que a transição de mês/renderização ocorreu
    const timer = setTimeout(() => performScroll(0), 100);
    return () => clearTimeout(timer);
  }, [closestSaintId, selectedSaintId, selectedMonth]);

  return (
    <section className="w-full">
      <MonthCarousel months={months} selectedMonth={selectedMonth} onMonthChange={onMonthChange} />

      <div
        key={selectedMonth}
        ref={navContainerRef}
        className="saints-nav-container flex items-start gap-x-4 overflow-x-auto pb-2 mt-4 border-t border-gray-300 pt-4 animate-fade-in"
      >
        {saintsForMonth.length > 0 ? (
          saintsForMonth.map((saint) => (
            <div
              key={saint.id}
              ref={(el) => { itemRefs.current[saint.id] = el; }}
              className={cn(
                'saint-nav-item flex flex-col items-center gap-1 text-center opacity-70 hover:opacity-100 hover:scale-105 transform-gpu transition-all duration-200 w-[100px] shrink-0 cursor-pointer',
                (selectedSaintId === saint.id || (saint.id === 'natal' && (selectedSaintId === 'natal_sao_leao' || selectedSaintId === 'natal_familia'))) && 'opacity-100'
              )}
              onClick={() => handleSaintSelect(saint.id)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && handleSaintSelect(saint.id)}
            >
              {(() => {
                const [startDayStr, startMonthStr] = saint.startDate.split('/');
                const startDay = Number(startDayStr);
                const startMonth = Number(startMonthStr);
                const startsToday = todayNumbers?.day === startDay && todayNumbers?.month === startMonth;
                const isSelected = selectedSaintId === saint.id || (saint.id === 'natal' && (selectedSaintId === 'natal_sao_leao' || selectedSaintId === 'natal_familia'));
                const shouldBlink = startsToday && !isSelected;

                return (
                  <>
                    <Image
                      src={saint.imageUrl}
                      alt={saint.name}
                      width={80}
                      height={80}
                      className={cn(
                        'w-20 h-20 rounded-full object-cover shadow-md border-4 transition-all duration-300',
                        shouldBlink
                          ? 'border-primary glow-pulse-ring'
                          : isSelected
                            ? 'border-primary shadow-lg'
                            : 'border-transparent'
                      )}
                    />
                    <p className="text-sm font-semibold text-gray-700 font-brand leading-tight mt-1">{saint.name}</p>
                    <div className="mt-1.5 mb-0.5 bg-primary text-primary-foreground px-3 py-0.5 rounded-full text-[11px] font-bold tracking-wide shadow-sm">
                      Início: {saint.startDate}
                    </div>
                    {saint.isMartyr && (
                      <div className="mt-1 bg-red-700/80 text-white px-4 py-1 rounded-full text-xs font-bold leading-tight shadow-sm">
                        Mártir
                      </div>
                    )}
                  </>
                );
              })()}
            </div>
          ))
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
