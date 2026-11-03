'use client';

import { useState, useEffect, useRef, useMemo } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { confessionData } from '@/lib/confession-data';
import { Search, X } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const DAYS_OF_WEEK = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo'];

interface ConfessionTimesModalProps {
  children?: React.ReactNode;
}

export function ConfessionTimesModal({ children }: ConfessionTimesModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(true);
  const [selectedRegion, setSelectedRegion] = useState<'Brasília' | 'Entorno (GO)'>('Brasília');
  const [selectedCity, setSelectedCity] = useState('Arniqueiras & Riacho Fundo');
  const [selectedGroup, setSelectedGroup] = useState<string | null>(null);
  const [selectedDay, setSelectedDay] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const regionNavRef = useRef<HTMLDivElement>(null);
  const saintsNavRef = useRef<HTMLDivElement>(null);
  const subCitiesNavRef = useRef<HTMLDivElement>(null);
  const daysNavRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.location.hash === '#confissoes') {
      setIsOpen(true);
    }
  }, []);

  useEffect(() => {
    const handlePopState = () => {
      if (isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      window.history.pushState({ modal: 'confession' }, '');
    }
  }, [isOpen]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsExpanded(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (isExpanded) {
        setIsExpanded(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [isExpanded]);

  const handleRegionChange = (region: 'Brasília' | 'Entorno (GO)') => {
    setSelectedRegion(region);
    setSelectedGroup(null);
    setSelectedCity('');
    setSelectedDay(null);

    // Seleciona a primeira cidade automaticamente para nunca deixar vazio
    if (region === 'Brasília') {
      const firstBrasCity = confessionData.find(d => !d.isGroup);
      if (firstBrasCity) setSelectedCity(firstBrasCity.city);
    } else {
      const entornoGroup = confessionData.find(d => d.isGroup && d.city === 'Entorno (GO)');
      const firstEntornoCity = entornoGroup?.subCities?.[0];
      if (firstEntornoCity) setSelectedCity(firstEntornoCity.city);
    }

    if (saintsNavRef.current) {
      saintsNavRef.current.scrollTo({ left: 0, behavior: 'smooth' });
    }
  };

  const handleCityChange = (city: string, isGroup: boolean = false) => {
    if (isGroup) {
      setSelectedGroup(selectedGroup === city ? null : city);
      setSelectedCity('');
    } else {
      setSelectedCity(city);
      if (saintsNavRef.current) {
        const selectedButton = saintsNavRef.current.querySelector<HTMLElement>(`[data-city="${city}"]`);
        if (selectedButton) {
          const container = saintsNavRef.current;
          const scrollLeft = selectedButton.offsetLeft - (container.clientWidth / 2) + (selectedButton.clientWidth / 2);
          container.scrollTo({ left: Math.max(0, scrollLeft), behavior: 'smooth' });
        }
      }
    }
  };

  const handleSubCityChange = (subCity: string) => {
    setSelectedCity(subCity);
    if (saintsNavRef.current) {
      const selectedButton = saintsNavRef.current.querySelector<HTMLElement>(`[data-city="${subCity}"]`);
      if (selectedButton) {
        const container = saintsNavRef.current;
        const scrollLeft = selectedButton.offsetLeft - (container.clientWidth / 2) + (selectedButton.clientWidth / 2);
        container.scrollTo({ left: Math.max(0, scrollLeft), behavior: 'smooth' });
      }
    }
  };

  const handleDayChange = (day: string) => {
    setSelectedDay(prev => prev === day ? null : day);
    if (daysNavRef.current) {
      const selectedButton = daysNavRef.current.querySelector<HTMLElement>(`[data-day="${day}"]`);
      if (selectedButton) {
        const container = daysNavRef.current;
        const scrollLeft = selectedButton.offsetLeft - (container.clientWidth / 2) + (selectedButton.clientWidth / 2);
        container.scrollTo({ left: Math.max(0, scrollLeft), behavior: 'smooth' });
      }
    }
  };

  const filteredParishes = useMemo(() => {
    let cityData = confessionData.find((data) => data.city === selectedCity);

    // Se não encontrou diretamente, procura nas subCities do Entorno
    if (!cityData && selectedRegion === 'Entorno (GO)') {
      const entornoGroup = confessionData.find((data) => data.isGroup && data.city === 'Entorno (GO)');
      if (entornoGroup?.subCities) {
        cityData = entornoGroup.subCities.find((sub) => sub.city === selectedCity);
      }
    }

    if (!cityData) return [];

    return cityData.parishes.filter(parish => {
      const matchesSearch = parish.name.toLowerCase().includes(searchQuery.toLowerCase());

      let matchesDay = true;
      if (selectedDay) {
        const timesLower = parish.times ? parish.times.toLowerCase() : "";
        const dayLower = selectedDay.toLowerCase();

        const daysMap: { [key: string]: number } = { 'segunda': 1, 'terça': 2, 'quarta': 3, 'quinta': 4, 'sexta': 5, 'sábado': 6, 'domingo': 0 };
        const targetDayNum = daysMap[dayLower.split('-')[0]];

        if (timesLower.includes(dayLower.split('-')[0])) {
          matchesDay = true;
        }
        else if (timesLower.includes('todos os dias') || timesLower.includes('diariamente')) {
          matchesDay = true;
        }
        else if (timesLower.includes(' a ')) {
          const rangeRegex = /(segunda|terça|quarta|quinta|sexta|sábado|domingo).*?a.*?(segunda|terça|quarta|quinta|sexta|sábado|domingo)/gi;
          let match;
          let rangeMatches = false;
          while ((match = rangeRegex.exec(timesLower)) !== null) {
            const startDay = match[1].toLowerCase();
            const endDay = match[2].toLowerCase();
            const startNum = daysMap[startDay];
            const endNum = daysMap[endDay];

            if (startNum !== undefined && endNum !== undefined && targetDayNum !== undefined) {
              if (startNum <= endNum) {
                if (targetDayNum >= startNum && targetDayNum <= endNum) rangeMatches = true;
              } else {
                if (targetDayNum >= startNum || targetDayNum <= endNum) rangeMatches = true;
              }
            }
          }
          if (rangeMatches) matchesDay = true;
          else matchesDay = false;
        } else {
          matchesDay = false;
        }
      }

      return matchesSearch && matchesDay;
    });
  }, [selectedCity, selectedRegion, searchQuery, selectedDay]);

  // Filtrar cidades por região
  const citiesByRegion = useMemo(() => {
    if (selectedRegion === 'Brasília') {
      return confessionData.filter(d => !d.isGroup);
    } else {
      const entornoGroup = confessionData.find(d => d.isGroup && d.city === 'Entorno (GO)');
      return entornoGroup?.subCities || [];
    }
  }, [selectedRegion]);

  return (
    <>
      {children ? (
        <div onClick={() => setIsOpen(true)} className="cursor-pointer">
          {children}
        </div>
      ) : (
        <>
          <div
            className={`fixed left-16 top-2 z-20 bg-red-800/90 text-white shadow-lg rounded-lg cursor-pointer transition-all duration-500 overflow-hidden ${isExpanded ? 'max-w-xs opacity-100' : 'max-w-0 opacity-0 pointer-events-none'}`}
            onClick={(e) => {
              e.preventDefault();
              setIsOpen(true)
            }}
          >
            <div className="px-3 py-2 whitespace-nowrap">
              <p className="font-bold text-sm">Confissões</p>
              <p style={{ fontFamily: 'Cinzel Decorative, cursive' }} className="text-xs opacity-80">Clique para abrir</p>
            </div>
          </div>
        </>
      )}

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent
          id="confissoes"
          className="max-h-[92vh] h-full sm:h-auto overflow-hidden w-[96vw] sm:w-[90vw] md:max-w-2xl rounded-2xl flex flex-col items-stretch [&>button:not(.custom-close-button)]:hidden p-0 gap-0 border border-stone-300 shadow-2xl"
          style={{ backgroundImage: 'linear-gradient(to bottom, #ffffff 0%, #e0e0e0 25%, #c3c3c3 50%, #949da4 100%)' }}
        >
          <DialogHeader className="bg-red-800 text-white p-3 shrink-0 w-full flex flex-row items-center justify-between shadow-md z-30">
            <div className="flex items-center gap-2 flex-1 min-w-0">
              {isSearchOpen ? (
                <div className="flex items-center w-full bg-white rounded-lg overflow-hidden animate-in fade-in slide-in-from-left-2 duration-300 shadow-inner">
                  <Search className="h-4 w-4 text-gray-500 ml-2.5 shrink-0" />
                  <Input
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Pesquisar paróquia..."
                    className="border-0 focus-visible:ring-0 text-gray-800 h-8 bg-transparent min-w-0 flex-1 text-sm"
                    autoFocus
                  />
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 text-gray-500 hover:text-gray-700 shrink-0"
                    onClick={() => {
                      setIsSearchOpen(false);
                      setSearchQuery('');
                    }}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              ) : (
                <>
                  <div className="w-8 shrink-0"></div> {/* Spacer to center title roughly */}
                  <DialogTitle className="text-center flex-1 text-base md:text-lg font-brand tracking-wide truncate">Horários de Confissão</DialogTitle>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-white hover:bg-red-700 hover:text-white h-8 w-8 shrink-0"
                    onClick={() => setIsSearchOpen(true)}
                    title="Pesquisar"
                  >
                    <Search className="h-5 w-5" />
                  </Button>
                </>
              )}
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="custom-close-button p-1 ml-2 text-white border-2 border-white rounded-full hover:bg-white/20 transition-colors duration-200 shrink-0"
              title="Fechar"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </DialogHeader>

          {/* Painel de Filtros Fixo no Topo do Modal (sem -mx-4, contido dentro do modal) */}
          <div className="shrink-0 w-full bg-white/95 backdrop-blur-md px-3.5 sm:px-4 py-2.5 border-b border-stone-300/80 shadow-sm z-20 space-y-2">
            {/* Região */}
            <div>
              <div className="flex items-center justify-between mb-1">
                <label className="font-bold text-gray-800 text-[11px] uppercase tracking-wider">Região</label>
                {selectedDay && (
                  <button
                    onClick={() => setSelectedDay(null)}
                    className="text-[10px] text-red-700 font-semibold hover:underline flex items-center gap-0.5 cursor-pointer"
                  >
                    Limpar dia
                  </button>
                )}
              </div>
              <div
                className="overflow-x-auto pb-1 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
                ref={regionNavRef}
              >
                <div className="flex flex-nowrap gap-1.5 sm:gap-2 items-center">
                  <button
                    onClick={() => handleRegionChange('Brasília')}
                    className={`shrink-0 px-3.5 py-1 text-xs sm:text-sm rounded-full border-2 transition-all duration-200 whitespace-nowrap font-semibold cursor-pointer ${
                      selectedRegion === 'Brasília'
                        ? 'bg-red-800 text-white border-red-800 shadow-sm'
                        : 'text-gray-700 border-gray-300 hover:border-red-800 hover:text-red-800 bg-white'
                    }`}
                  >
                    Brasília
                  </button>
                  <button
                    onClick={() => handleRegionChange('Entorno (GO)')}
                    className={`shrink-0 px-3.5 py-1 text-xs sm:text-sm rounded-full border-2 transition-all duration-200 whitespace-nowrap font-semibold cursor-pointer ${
                      selectedRegion === 'Entorno (GO)'
                        ? 'bg-red-800 text-white border-red-800 shadow-sm'
                        : 'text-gray-700 border-gray-300 hover:border-red-800 hover:text-red-800 bg-white'
                    }`}
                  >
                    Entorno (GO)
                  </button>
                </div>
              </div>
            </div>

            {/* Cidades */}
            <div>
              <label className="block font-bold mb-1 text-gray-800 text-[11px] uppercase tracking-wider">
                Cidades {citiesByRegion.length > 0 && <span className="font-normal text-gray-500">({citiesByRegion.length})</span>}
              </label>
              <div
                className="overflow-x-auto pb-1 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
                ref={saintsNavRef}
              >
                <div className="flex flex-nowrap gap-1.5 items-center">
                  {citiesByRegion.map((data) => {
                    const isSelected = selectedCity === data.city;
                    return (
                      <button
                        key={data.city}
                        data-city={data.city}
                        onClick={() => handleCityChange(data.city, data.isGroup)}
                        className={`shrink-0 px-2.5 sm:px-3 py-1 text-xs rounded-full border transition-all duration-200 whitespace-nowrap cursor-pointer ${
                          isSelected
                            ? 'bg-red-800 text-white border-red-800 font-semibold shadow-sm'
                            : 'text-gray-700 bg-white border-gray-300 hover:border-red-800 hover:text-red-800'
                        }`}
                      >
                        {data.city}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Dia da Semana */}
            <div>
              <label className="block font-bold mb-1 text-gray-800 text-[11px] uppercase tracking-wider">Dia da Semana</label>
              <div
                className="overflow-x-auto pb-0.5 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
                ref={daysNavRef}
              >
                <div className="flex flex-nowrap gap-1.5 items-center">
                  {DAYS_OF_WEEK.map((day) => {
                    const isSelected = selectedDay === day;
                    return (
                      <button
                        key={day}
                        data-day={day}
                        onClick={() => handleDayChange(day)}
                        className={`shrink-0 px-2.5 py-1 text-[11px] sm:text-xs rounded-full border transition-all duration-200 whitespace-nowrap cursor-pointer ${
                          isSelected
                            ? 'bg-red-800 text-white border-red-800 font-bold shadow-sm'
                            : 'text-gray-700 bg-white border-gray-300 hover:bg-gray-100 hover:text-red-800'
                        }`}
                      >
                        {day}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Lista de Paróquias (único container com scroll vertical) */}
          <div className="flex-1 overflow-y-auto p-3.5 sm:p-4 w-full">
            <div className="w-full min-h-[250px]">
              {filteredParishes.length > 0 ? (
                <div>
                  {filteredParishes.map((parish, index) => {
                    const isRedBg = index % 2 !== 0;
                    return (
                      <div
                        key={parish.name}
                        className={`mb-4 p-4 rounded-xl shadow-md transition-all duration-300 hover:scale-[1.01] ${isRedBg ? 'bg-red-800 text-white' : 'bg-white text-gray-800'}`}>
                        <h3 className="text-base sm:text-lg font-bold break-words text-center leading-tight mb-1">{parish.name}</h3>
                        <p className="text-xs sm:text-sm break-words text-center opacity-90 mb-2">{parish.address}</p>
                        <div className={`w-full h-px mb-3 ${isRedBg ? 'bg-white/30' : 'bg-gray-200'}`}></div>
                        <p className="text-xs sm:text-sm break-words text-center font-medium leading-relaxed">{parish.times}</p>
                        <div className="flex items-center justify-center flex-wrap mt-4 gap-2">
                          <a
                            href={(parish as { location?: string }).location || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${parish.name} ${parish.address} DF`)}`}
                            target="_blank"
                            rel="noreferrer"
                            className={`px-3 py-1.5 text-xs font-bold uppercase tracking-wider rounded-md shadow-sm transition-colors duration-200 flex items-center gap-1 ${isRedBg ? 'bg-white text-red-800 hover:bg-gray-100' : 'bg-red-800 text-white hover:bg-red-700'}`}>
                            <span>Mapa</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                          </a>
                          {parish.instagram && (
                            <a
                              href={parish.instagram}
                              target="_blank"
                              rel="noreferrer"
                              className={`border px-3 py-1.5 text-xs font-bold uppercase tracking-wider rounded-md flex items-center shadow-sm transition-colors duration-200 gap-1 ${isRedBg ? 'bg-transparent border-white text-white hover:bg-white hover:text-red-800' : 'bg-transparent border-pink-500 text-pink-500 hover:bg-pink-50 hover:text-white'}`}>
                              <span>Insta</span>
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.07 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-7.325 3.167-7.525 7.525-.058 1.28-.072 1.688-.072 4.947s.014 3.667.072 4.947c.2 4.358 3.167 7.325 7.525 7.525 1.28.058 1.688.072 4.947.072s3.667-.014 4.947-.072c4.358-.2 7.325-3.167 7.525-7.525.058-1.28.072-1.688.072-4.947s-.014-3.667-.072-4.947c-.2-4.358-3.167-7.325-7.525-7.525-1.28-.058-1.688-.072-4.947-.072zm0 5.838c-3.203 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44 1.441-.645 1.441-1.44-.645-1.44-1.441-1.44z" />
                              </svg>
                            </a>
                          )}
                        </div>
                      </div>
                    )
                  }
                  )}
                </div>
              ) : (
                <div className="text-center py-10 opacity-60">
                  <p className="text-base sm:text-lg font-semibold">Nenhuma paróquia encontrada</p>
                  <p className="text-xs sm:text-sm">Tente ajustar os filtros de cidade ou dia.</p>
                </div>
              )}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
