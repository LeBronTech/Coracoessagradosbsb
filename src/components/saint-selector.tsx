
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

  // Carregamento por lote: inicializa com o mês atual e o mês posterior (ou o mês do santo selecionado/mais próximo)
  const [loadedRange, setLoadedRange] = useState<{ start: number; end: number }>(() => {
    const currentIdx = Math.max(0, months.indexOf(selectedMonth));
    let start = currentIdx;
    let end = Math.min(11, currentIdx + 1);

    const targetId = selectedSaintId || closestSaintId;
    if (targetId) {
      const s = saints.find((saint) => saint.id === targetId);
      if (s) {
        const m = (parseInt(s.startDate.split('/')[1], 10) || 1) - 1;
        start = Math.min(start, m);
        end = Math.max(end, Math.min(11, m + 1));
      }
    }

    return { start, end };
  });

  // Filtrar os santos dentro do lote carregado dinamicamente
  const renderedSaints = useMemo(() => {
    return allSortedSaints.filter(
      (s) => s.monthIndex >= loadedRange.start && s.monthIndex <= loadedRange.end
    );
  }, [allSortedSaints, loadedRange]);

  const navContainerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const lastScrolledId = useRef<string | null>(null);

  // Controle de rolagem programática vs manual
  const isProgrammaticScroll = useRef(false);
  const programmaticScrollTimer = useRef<NodeJS.Timeout | null>(null);
  const lastScrollSpiedMonth = useRef<string>(selectedMonth);

  // Âncora de scroll para evitar saltos visuais ao prepender meses anteriores
  const anchorInfoRef = useRef<{ id: string; offsetFromLeft: number } | null>(null);

  // Ajuste do scrollLeft via useLayoutEffect quando meses anteriores são adicionados manualmente
  useLayoutEffect(() => {
    if (!anchorInfoRef.current) return;
    const { id, offsetFromLeft } = anchorInfoRef.current;
    anchorInfoRef.current = null;

    if (isProgrammaticScroll.current) return;

    const container = navContainerRef.current;
    const item = itemRefs.current[id];
    if (container && item) {
      const newOffset = item.getBoundingClientRect().left - container.getBoundingClientRect().left;
      const delta = newOffset - offsetFromLeft;
      if (Math.abs(delta) > 1) {
        container.scrollLeft += delta;
      }
    }
  }, [renderedSaints]);

  // Rolar suavemente para o primeiro santo de um determinado mês quando clicado
  const scrollToMonth = useCallback((monthName: string) => {
    const targetIdx = months.indexOf(monthName);
    if (targetIdx === -1) return;

    lastScrollSpiedMonth.current = monthName;
    isProgrammaticScroll.current = true;
    if (programmaticScrollTimer.current) clearTimeout(programmaticScrollTimer.current);

    // Se o mês alvo estiver a mais de 2 meses de distância, redefine o lote em torno do alvo
    // Isso evita adicionar 100+ cards de uma só vez, eliminando totalmente a engasgada
    const currentLoadedCenter = Math.round((loadedRange.start + loadedRange.end) / 2);
    const isDistantJump = Math.abs(targetIdx - currentLoadedCenter) > 2;

    if (isDistantJump) {
      setLoadedRange({
        start: Math.max(0, targetIdx - 1),
        end: Math.min(11, targetIdx + 1),
      });
    } else {
      setLoadedRange((prev) => {
        if (targetIdx < prev.start || targetIdx > prev.end) {
          return {
            start: Math.min(prev.start, targetIdx),
            end: Math.max(prev.end, Math.min(11, targetIdx + 1)),
          };
        }
        return prev;
      });
    }

    const firstSaintOfMonth = allSortedSaints.find((s) => s.monthIndex === targetIdx);
    if (!firstSaintOfMonth) {
      isProgrammaticScroll.current = false;
      return;
    }

    const performScroll = (retryCount = 0) => {
      const container = navContainerRef.current;
      const item = itemRefs.current[firstSaintOfMonth.id];

      if (!container || !item || container.clientWidth === 0 || item.clientWidth === 0) {
        if (retryCount < 15) {
          setTimeout(() => performScroll(retryCount + 1), 35);
        } else {
          isProgrammaticScroll.current = false;
        }
        return;
      }

      const containerRect = container.getBoundingClientRect();
      const itemRect = item.getBoundingClientRect();
      const scrollOffset =
        container.scrollLeft +
        (itemRect.left - containerRect.left) -
        (containerRect.width / 2 - itemRect.width / 2);

      container.scrollTo({
        left: Math.max(0, scrollOffset),
        behavior: isDistantJump ? 'auto' : 'smooth',
      });

      if (programmaticScrollTimer.current) clearTimeout(programmaticScrollTimer.current);
      programmaticScrollTimer.current = setTimeout(() => {
        isProgrammaticScroll.current = false;
      }, isDistantJump ? 80 : 500);
    };

    setTimeout(() => performScroll(0), 20);
  }, [allSortedSaints, months, loadedRange]);

  // Monitorar mudança externa do selectedMonth (clique no MonthCarousel)
  useEffect(() => {
    if (selectedMonth === lastScrollSpiedMonth.current) {
      return;
    }
    lastScrollSpiedMonth.current = selectedMonth;
    scrollToMonth(selectedMonth);
  }, [selectedMonth, scrollToMonth]);

  // Garantir que a novena selecionada ou mais próxima inicial esteja dentro de loadedRange
  useEffect(() => {
    const idToScroll = selectedSaintId || closestSaintId;
    if (!idToScroll) return;

    const targetSaint = allSortedSaints.find((s) => s.id === idToScroll);
    if (targetSaint) {
      setLoadedRange((prev) => {
        if (targetSaint.monthIndex < prev.start || targetSaint.monthIndex > prev.end) {
          return {
            start: Math.min(prev.start, targetSaint.monthIndex),
            end: Math.max(prev.end, Math.min(11, targetSaint.monthIndex + 1)),
          };
        }
        return prev;
      });
    }
  }, [selectedSaintId, closestSaintId, allSortedSaints]);

  // Efeito para centralizar o carrossel na novena mais próxima ou selecionada
  useEffect(() => {
    const idToScroll = selectedSaintId || closestSaintId;
    if (!idToScroll) return;
    if (idToScroll === lastScrolledId.current) return;

    let isCancelled = false;

    const performScroll = (retryCount = 0) => {
      if (isCancelled) return;
      const container = navContainerRef.current;
      const item = itemRefs.current[idToScroll];

      // Se o container ou item ainda não estiverem visíveis ou montados com largura real, tentar novamente
      if (!container || !item || container.clientWidth === 0 || item.clientWidth === 0) {
        if (retryCount < 25) {
          setTimeout(() => performScroll(retryCount + 1), 60);
        }
        return;
      }

      // Elemento encontrado com sucesso! Centralizar exatamente no meio do carrossel
      lastScrolledId.current = idToScroll;

      const containerRect = container.getBoundingClientRect();
      const itemRect = item.getBoundingClientRect();
      const scrollOffset =
        container.scrollLeft +
        (itemRect.left - containerRect.left) -
        (containerRect.width / 2 - itemRect.width / 2);

      isProgrammaticScroll.current = true;
      container.scrollTo({
        left: Math.max(0, scrollOffset),
        behavior: retryCount === 0 ? 'auto' : 'smooth',
      });

      if (programmaticScrollTimer.current) clearTimeout(programmaticScrollTimer.current);
      programmaticScrollTimer.current = setTimeout(() => {
        isProgrammaticScroll.current = false;
      }, 600);
    };

    const timer = setTimeout(() => performScroll(0), 50);
    return () => {
      isCancelled = true;
      clearTimeout(timer);
    };
  }, [closestSaintId, selectedSaintId, renderedSaints]);

  // Scroll handler com carregamento sob demanda por lote e scroll spy bidirecional
  const handleScroll = useCallback(() => {
    const container = navContainerRef.current;
    if (!container) return;

    // Se estiver em rolagem programática (clique no mês ou santo):
    if (isProgrammaticScroll.current) {
      // Renovar temporizador enquanto ainda houver inércia de rolagem
      if (programmaticScrollTimer.current) clearTimeout(programmaticScrollTimer.current);
      programmaticScrollTimer.current = setTimeout(() => {
        isProgrammaticScroll.current = false;
      }, 200);
      return; // NÃO EXECUTAR SCROLL SPY DURANTE ANIMAÇÃO/ROLAGEM PROGRAMÁTICA
    }

    const { scrollLeft, scrollWidth, clientWidth } = container;

    // 1. Carregamento para frente ao aproximar do fim da barra
    if (scrollLeft + clientWidth >= scrollWidth - 350) {
      setLoadedRange((prev) => {
        if (prev.end < 11) {
          return { ...prev, end: Math.min(11, prev.end + 1) };
        }
        return prev;
      });
    }

    // 2. Carregamento para trás ao aproximar do início da barra
    if (scrollLeft <= 350) {
      setLoadedRange((prev) => {
        if (prev.start > 0) {
          if (!anchorInfoRef.current && renderedSaints.length > 0) {
            const firstSaint = renderedSaints[0];
            const el = itemRefs.current[firstSaint.id];
            if (el) {
              anchorInfoRef.current = {
                id: firstSaint.id,
                offsetFromLeft: el.getBoundingClientRect().left - container.getBoundingClientRect().left,
              };
            }
          }
          return { ...prev, start: Math.max(0, prev.start - 1) };
        }
        return prev;
      });
    }

    // 3. Scroll Spy: detectar qual mês está no centro visual da tela
    const containerRect = container.getBoundingClientRect();
    const focusX = containerRect.left + containerRect.width / 2;

    let closestSaint: (typeof renderedSaints)[0] | null = null;
    let minDistance = Infinity;

    for (const saint of renderedSaints) {
      const el = itemRefs.current[saint.id];
      if (!el) continue;
      const rect = el.getBoundingClientRect();
      const itemCenter = rect.left + rect.width / 2;
      const dist = Math.abs(itemCenter - focusX);
      if (dist < minDistance) {
        minDistance = dist;
        closestSaint = saint;
      }
    }

    if (closestSaint) {
      const currentMonthName = months[closestSaint.monthIndex];
      if (currentMonthName && currentMonthName !== lastScrollSpiedMonth.current) {
        lastScrollSpiedMonth.current = currentMonthName;
        onMonthChange(currentMonthName);
      }
    }
  }, [renderedSaints, months, onMonthChange]);

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

  return (
    <section className="w-full">
      <MonthCarousel months={months} selectedMonth={selectedMonth} onMonthChange={onMonthChange} />

      <div
        id="saints-icons-container"
        ref={navContainerRef}
        onScroll={handleScroll}
        className="saints-nav-container flex items-start gap-x-4 overflow-x-auto pb-2 mt-4 border-t border-gray-300 pt-4"
      >
        {renderedSaints.length > 0 ? (
          renderedSaints.map((saint, idx) => {
            const isFirstOfMonth = idx === 0 || saint.monthIndex !== renderedSaints[idx - 1].monthIndex;
            const [startDayStr, startMonthStr] = saint.startDate.split('/');
            const startDay = Number(startDayStr);
            const startMonth = Number(startMonthStr);
            const startsToday = todayNumbers?.day === startDay && todayNumbers?.month === startMonth;
            const isSelected = selectedSaintId === saint.id || (saint.id === 'natal' && (selectedSaintId === 'natal_sao_leao' || selectedSaintId === 'natal_familia'));
            const shouldBlink = startsToday && !isSelected;

            return (
              <React.Fragment key={saint.id}>
                {isFirstOfMonth && idx > 0 && (
                  <div className="flex flex-col items-center justify-center self-stretch px-2 select-none shrink-0 opacity-40 hover:opacity-80 transition-opacity">
                    <div className="h-full w-[1px] bg-gradient-to-b from-transparent via-gray-400 to-transparent min-h-[60px]" />
                    <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500 my-1 font-brand whitespace-nowrap">
                      {months[saint.monthIndex]}
                    </span>
                    <div className="h-full w-[1px] bg-gradient-to-b from-transparent via-gray-400 to-transparent min-h-[20px]" />
                  </div>
                )}
                <div
                  ref={(el) => { itemRefs.current[saint.id] = el; }}
                  className={cn(
                    'saint-nav-item flex flex-col items-center gap-1 text-center opacity-70 hover:opacity-100 hover:scale-105 transform-gpu transition-all duration-200 w-[100px] shrink-0 cursor-pointer',
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
                          ? 'border-primary shadow-lg'
                          : 'border-transparent'
                    )}
                    style={{ objectPosition: (saint as any).imageObjectPosition || 'center' }}
                  />
                  <div className="flex flex-col items-center leading-tight mt-1 min-h-[30px] justify-center">
                    {(() => {
                      const { main, additional } = formatSaintName(saint.name);
                      return (
                        <>
                          <p className={cn(
                            "font-bold text-gray-800 font-brand whitespace-nowrap",
                            getMainNameFontSize(main)
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
                  <div className="mt-1 mb-0.5 bg-primary text-primary-foreground px-3 py-0.5 rounded-full text-[11px] font-bold tracking-wide shadow-sm">
                    Início: {saint.startDate}
                  </div>
                </div>
              </React.Fragment>
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
