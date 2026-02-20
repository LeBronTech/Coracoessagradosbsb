"use client";

import React, { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogClose } from "@/components/ui/dialog";
import { Globe, AlertCircle, CheckCircle, Clock, X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import Image from "next/image";

import { worldMarianDevotions, MarianDevotion, Continent } from "@/lib/world-devotions-data";

export function WorldMarianDevotions() {
    const continents: Continent[] = worldMarianDevotions;
    const [activeContinent, setActiveContinent] = useState<string>("");
    const continentRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

    // Cálculos estatísticos
    const allDevotions = continents.flatMap(c => c.devotions);
    const worldTitles = allDevotions.length;
    const brazilTitles = allDevotions.filter(d => d.country.includes("Brasil")).length;

    const scrollToContinent = (continentName: string) => {
        const element = continentRefs.current[continentName];
        if (element) {
            const offset = 100;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;
            window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        }
    };

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '-20% 0px -70% 0px',
            threshold: 0
        };

        const observerCallback = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveContinent(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);
        Object.values(continentRefs.current).forEach((ref) => {
            if (ref) observer.observe(ref);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <section className="mb-12">
            <div className="text-center mb-10">
                <h2 className="text-4xl font-bold text-blue-900 dark:text-blue-100 mb-6 font-brand flex items-center justify-center gap-3">
                    <Globe className="w-10 h-10" />
                    Espaço Mariano
                </h2>

                <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
                    <div className="bg-white dark:bg-slate-800 px-6 py-3 rounded-2xl shadow-sm border border-blue-100 dark:border-blue-900/40 flex flex-col items-center min-w-[140px]">
                        <span className="text-3xl font-bold text-blue-600 dark:text-blue-400">{worldTitles}</span>
                        <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Títulos pelo Mundo</span>
                    </div>
                    <div className="bg-white dark:bg-slate-800 px-6 py-3 rounded-2xl shadow-sm border border-blue-100 dark:border-blue-900/40 flex flex-col items-center min-w-[140px]">
                        <span className="text-3xl font-bold text-green-600 dark:text-green-400">{brazilTitles}</span>
                        <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Títulos no Brasil</span>
                    </div>
                </div>
            </div>

            {/* Menu de Navegação por Continentes */}
            <nav className="sticky top-20 z-40 mb-8 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-y border-blue-200 dark:border-blue-800 shadow-md py-4">
                <div className="flex gap-2 sm:gap-4 justify-center items-center flex-wrap px-4">
                    {continents.map((continent) => (
                        <button
                            key={continent.name}
                            onClick={() => scrollToContinent(continent.name)}
                            className={`group flex flex-col items-center gap-1 px-3 sm:px-4 py-2 rounded-xl transition-all duration-300 hover:scale-110 ${activeContinent === continent.name
                                ? 'bg-blue-600 text-white shadow-lg scale-105'
                                : 'bg-blue-50 dark:bg-blue-950/50 text-slate-700 dark:text-slate-300 hover:bg-blue-100 dark:hover:bg-blue-900/50'
                                }`}
                            aria-label={`Ir para ${continent.name}`}
                        >
                            {continent.iconUrl ? (
                                <Image
                                    src={continent.iconUrl}
                                    alt={continent.name}
                                    width={40}
                                    height={40}
                                    className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
                                />
                            ) : (
                                <span className="text-2xl sm:text-3xl">{continent.emoji}</span>
                            )}
                            <span className="text-xs sm:text-sm font-semibold whitespace-nowrap">
                                {continent.name}
                            </span>
                        </button>
                    ))}
                </div>
            </nav>

            <div className="space-y-12">
                {continents.map((continent) => {
                    const devotionsByCountry: Record<string, MarianDevotion[]> = {};

                    continent.devotions.forEach(devotion => {
                        let countryKey = devotion.country.split('(')[0].trim();
                        if (!devotionsByCountry[countryKey]) {
                            devotionsByCountry[countryKey] = [];
                        }
                        devotionsByCountry[countryKey].push(devotion);
                    });

                    const sortedCountries = Object.keys(devotionsByCountry).sort();

                    return (
                        <div
                            key={continent.name}
                            id={continent.name}
                            ref={(el) => { continentRefs.current[continent.name] = el; }}
                            className="p-8 rounded-3xl shadow-lg border transition-all duration-500 bg-gradient-to-br from-blue-50 to-sky-50 border-blue-100 dark:from-blue-950/20 dark:to-sky-950/20 dark:border-blue-900/30"
                        >
                            <h3 className="text-3xl font-bold mb-8 flex items-center gap-3 text-blue-800 dark:text-blue-300 border-b pb-4 border-blue-200 dark:border-blue-800">
                                {continent.iconUrl ? (
                                    <Image
                                        src={continent.iconUrl}
                                        alt={continent.name}
                                        width={48}
                                        height={48}
                                        className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
                                    />
                                ) : (
                                    <span className="text-4xl">{continent.emoji}</span>
                                )}
                                {continent.name}
                            </h3>

                            <div className="space-y-12">
                                {sortedCountries.map(countryKey => {
                                    const countryDevotions = devotionsByCountry[countryKey];
                                    const flag = countryDevotions[0].countryFlag;

                                    return (
                                        <div key={countryKey} className="bg-white/50 dark:bg-slate-900/30 rounded-2xl p-6">
                                            <h4 className="text-xl font-bold mb-6 text-slate-700 dark:text-slate-200 flex items-center gap-2">
                                                <span className="text-2xl shadow-sm rounded-full bg-white px-2 py-1">{flag}</span>
                                                {countryKey}
                                            </h4>

                                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
                                                {countryDevotions.map((devotion) => (
                                                    <Dialog key={devotion.id}>
                                                        <DialogTrigger asChild>
                                                            <div className="cursor-pointer group flex flex-col items-center">
                                                                <div className="relative w-full max-w-[140px]">
                                                                    <Image
                                                                        src={devotion.images?.[0] ?? devotion.imageUrl}
                                                                        alt={devotion.name}
                                                                        width={200}
                                                                        height={200}
                                                                        className="aspect-square rounded-full object-cover border-4 transition-all duration-300 shadow-md group-hover:shadow-xl group-hover:scale-105 border-blue-200 group-hover:border-blue-400"
                                                                    />
                                                                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 z-10">
                                                                        <span className="inline-block px-3 py-1 text-white text-[10px] font-bold rounded-full shadow-sm bg-blue-600">
                                                                            {devotion.date}
                                                                        </span>
                                                                    </div>
                                                                    {/* Badge de múltiplas imagens na thumbnail */}
                                                                    {devotion.images && devotion.images.length > 1 && (
                                                                        <div className="absolute top-0 right-0 bg-purple-600 text-white text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center shadow-md border-2 border-white">
                                                                            {devotion.images.length}
                                                                        </div>
                                                                    )}
                                                                </div>
                                                                <p className="text-center mt-6 text-sm font-semibold text-slate-700 dark:text-slate-300 line-clamp-2 px-2 h-10 flex items-center justify-center">
                                                                    {devotion.name}
                                                                </p>
                                                                <p className="text-center text-xs text-slate-500 dark:text-slate-400 mt-1">
                                                                    {devotion.country}
                                                                </p>
                                                            </div>
                                                        </DialogTrigger>

                                                        <WorldDevotionDialog devotion={devotion} />
                                                    </Dialog>
                                                ))}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    );
                })}
            </div>

            <div className="mt-8 p-6 bg-blue-50/50 dark:bg-blue-950/30 border-l-4 border-blue-600 rounded-r-lg">
                <p className="text-sm text-blue-900 dark:text-blue-100 font-bold mb-2 flex items-center gap-2">
                    <AlertCircle className="w-5 h-5" />
                    Nota Importante
                </p>
                <p className="text-sm text-slate-700 dark:text-slate-400">
                    A Igreja Católica possui critérios rigorosos para aprovar aparições marianas. Algumas devoções aqui apresentadas ainda estão em estudo ou não foram aprovadas oficialmente, mas mantêm grande devoção popular. A fé católica se baseia na Revelação contida na Sagrada Escritura e na Tradição, não em revelações privadas.
                </p>
            </div>
        </section>
    );
}

// ─── Funções utilitárias de status ───────────────────────────────────────────

const getStatusIcon = (status?: string) => {
    switch (status) {
        case "approved": return <CheckCircle className="w-4 h-4 text-green-600" />;
        case "pending": return <Clock className="w-4 h-4 text-orange-600" />;
        case "not-approved": return <AlertCircle className="w-4 h-4 text-red-600" />;
        case "complex": return <Globe className="w-4 h-4 text-blue-600" />;
        default: return null;
    }
};

const getStatusText = (status?: string) => {
    switch (status) {
        case "approved": return "Aprovada pela Santa Sé";
        case "pending": return "Em Estudo/Reconhecimento";
        case "not-approved": return "Não Aprovada (Culto Privado)";
        case "complex": return "Status Complexo/Em Transição";
        default: return "";
    }
};

// ─── Dialog da Devoção com Lightbox ──────────────────────────────────────────

function WorldDevotionDialog({ devotion }: { devotion: MarianDevotion }) {
    const [scrolled, setScrolled] = useState(false);
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [paused, setPaused] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);
    const [lastInteractionTime, setLastInteractionTime] = useState(0);

    // Usa `images` se disponível (a 1ª do array é sempre a principal), senão usa imageUrl
    const allImages = devotion.images && devotion.images.length > 0
        ? devotion.images
        : [devotion.imageUrl];

    const hasMultipleImages = allImages.length > 1;

    const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
        const isScrolled = e.currentTarget.scrollTop > 50;
        setScrolled(isScrolled);
        if (isScrolled && isExpanded) setIsExpanded(false);
    };

    const openLightbox = () => {
        setPaused(true);
        setLightboxOpen(true);
    };

    const closeLightbox = () => {
        setLightboxOpen(false);
        setPaused(false);
    };

    const goTo = (idx: number) => {
        setCurrentImageIndex((idx + allImages.length) % allImages.length);
        setLastInteractionTime(Date.now());
    };

    const prevImage = (e?: React.MouseEvent | React.PointerEvent) => {
        e?.stopPropagation();
        goTo(currentImageIndex - 1);
    };

    const nextImage = (e?: React.MouseEvent | React.PointerEvent) => {
        e?.stopPropagation();
        goTo(currentImageIndex + 1);
    };

    // Slide automático a cada 4 segundos (vence pausa de 5s após interação)
    useEffect(() => {
        if (!hasMultipleImages || paused || lightboxOpen) return;

        const timer = setInterval(() => {
            const now = Date.now();
            if (now - lastInteractionTime > 5000) {
                setCurrentImageIndex((p) => (p + 1) % allImages.length);
            }
        }, 4000);

        return () => clearInterval(timer);
    }, [hasMultipleImages, paused, lightboxOpen, allImages.length, lastInteractionTime]);

    // Navegação por teclado no lightbox (só setas — Esc é tratado pelo DialogContent)
    useEffect(() => {
        if (!lightboxOpen) return;
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === "ArrowLeft" && hasMultipleImages) goTo(currentImageIndex - 1);
            if (e.key === "ArrowRight" && hasMultipleImages) goTo(currentImageIndex + 1);
        };
        window.addEventListener("keydown", handleKey);
        return () => window.removeEventListener("keydown", handleKey);
    }, [lightboxOpen, hasMultipleImages, currentImageIndex]);

    return (
        <>
            {/* ── Modal Principal ── */}
            <DialogContent
                className="sm:max-w-3xl max-w-[98vw] max-h-[95vh] flex flex-col bg-gradient-to-br from-white to-blue-50 dark:from-slate-900 dark:to-blue-950 border-2 border-blue-200 dark:border-blue-800 shadow-2xl overflow-hidden p-0 [&>button:last-child]:hidden"
                onEscapeKeyDown={(e) => {
                    if (lightboxOpen) {
                        e.preventDefault();
                        closeLightbox();
                    }
                }}
            >
                {/* X azul — fora do frame, sempre visível */}
                <DialogClose className="absolute left-3 top-12 z-50 rounded-full bg-blue-600 hover:bg-blue-700 text-white p-2 shadow-lg transition-colors focus:outline-none">
                    <X className="h-4 w-4" />
                    <span className="sr-only">Fechar</span>
                </DialogClose>

                {/* ── Galeria: container relativo para permitir overlay ── */}
                <div className={`flex-shrink-0 flex flex-col items-center transition-all duration-500 ease-in-out ${scrolled ? 'pt-2 pb-1' : 'pt-12 pb-0'}`}>
                    <div className="relative flex items-center justify-center w-full max-w-[500px] px-4">
                        {/* Seta esquerda — overlay no mobile, externa no SM */}
                        {hasMultipleImages && (
                            <button
                                type="button"
                                className={`absolute left-4 sm:left-0 sm:relative z-20 rounded-full border border-blue-300 dark:border-blue-700 bg-blue-50/90 dark:bg-blue-900/60 text-blue-600 dark:text-blue-300 hover:bg-blue-100 dark:hover:bg-blue-800 shadow-sm transition-all duration-300 ${scrolled ? 'opacity-0 pointer-events-none p-1' : 'opacity-100 p-2 sm:mr-3'}`}
                                style={{ touchAction: 'manipulation' }}
                                onPointerDown={(e) => prevImage(e)}
                                aria-label="Imagem anterior"
                            >
                                <ChevronLeft className="w-5 h-5" />
                            </button>
                        )}

                        {/* Moldura quadrada → círculo ao rolar (ou cresce ao expandir) */}
                        <div
                            onClick={() => !scrolled && setIsExpanded(!isExpanded)}
                            style={{
                                borderRadius: scrolled ? '9999px' : '1rem',
                                width: scrolled ? '72px' : isExpanded ? 'min(450px, 85vw)' : 'min(350px, 75vw)',
                                height: scrolled ? '72px' : isExpanded ? 'min(450px, 85vw)' : 'min(350px, 75vw)',
                                cursor: scrolled ? 'default' : 'pointer',
                            }}
                            className="relative overflow-hidden flex-shrink-0 border-2 border-blue-400 dark:border-blue-600 shadow-[0_0_0_3px_rgba(59,130,246,0.15)] transition-all duration-500 z-10"
                        >
                            {/* Fundo borrado */}
                            <img
                                src={allImages[currentImageIndex]}
                                alt=""
                                aria-hidden
                                className="absolute inset-0 w-full h-full object-cover blur-xl scale-110 opacity-70"
                                draggable={false}
                            />
                            <div className="absolute inset-0 bg-black/15 pointer-events-none" />
                            {/* Imagem principal */}
                            <img
                                src={allImages[currentImageIndex]}
                                alt={devotion.name}
                                className="absolute inset-0 w-full h-full object-contain z-10 transition-opacity duration-500"
                                draggable={false}
                            />
                            {/* Barras indicadoras dentro da moldura */}
                            {hasMultipleImages && !scrolled && (
                                <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 z-20 flex gap-1">
                                    {allImages.map((_, idx) => (
                                        <button
                                            key={idx}
                                            type="button"
                                            style={{ touchAction: 'manipulation' }}
                                            onPointerDown={(e) => { e.stopPropagation(); goTo(idx); }}
                                            className={`h-0.5 rounded-full transition-all duration-300 ${idx === currentImageIndex ? 'w-6 bg-white' : 'w-3 bg-white/50'}`}
                                            aria-label={`Foto ${idx + 1}`}
                                        />
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Seta direita — overlay no mobile, externa no SM */}
                        {hasMultipleImages && (
                            <button
                                type="button"
                                className={`absolute right-4 sm:right-0 sm:relative z-20 rounded-full border border-blue-300 dark:border-blue-700 bg-blue-50/90 dark:bg-blue-900/60 text-blue-600 dark:text-blue-300 hover:bg-blue-100 dark:hover:bg-blue-800 shadow-sm transition-all duration-300 ${scrolled ? 'opacity-0 pointer-events-none p-1' : 'opacity-100 p-2 sm:ml-3'}`}
                                style={{ touchAction: 'manipulation' }}
                                onPointerDown={(e) => nextImage(e)}
                                aria-label="Próxima imagem"
                            >
                                <ChevronRight className="w-5 h-5" />
                            </button>
                        )}
                    </div>
                </div>

                {/* ── Título e detalhes ── */}
                <DialogHeader className="px-5 pt-1 pb-0 flex-shrink-0">
                    <DialogTitle className={`font-bold text-blue-900 dark:text-blue-100 text-center font-brand break-words hyphens-auto transition-all duration-500 ${scrolled ? 'text-base sm:text-lg' : 'text-xl sm:text-2xl md:text-3xl'}`}>
                        {devotion.name}
                    </DialogTitle>
                    <div className={`flex items-center gap-2 flex-wrap justify-center mt-1 transition-all duration-500 ${scrolled ? 'opacity-0 h-0 pointer-events-none mt-0 overflow-hidden' : 'opacity-100'}`}>
                        <div className="flex items-center gap-2">
                            <span className="text-2xl">{devotion.countryFlag}</span>
                            <span className="text-slate-600 dark:text-slate-400 font-medium text-sm">{devotion.country}</span>
                        </div>
                        <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 text-sm font-bold rounded-full">
                            {devotion.date}
                        </span>
                    </div>
                </DialogHeader>

                <div
                    className="flex-1 overflow-y-auto px-3 sm:px-6 custom-scrollbar scroll-smooth"
                    onScroll={handleScroll}
                >
                    <div className="space-y-6 pb-24 animate-in fade-in duration-700">
                        <div className="bg-blue-50/50 dark:bg-blue-900/10 p-4 sm:p-6 rounded-2xl border border-blue-100 dark:border-blue-900/20">
                            <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-center italic text-sm sm:text-base break-words">
                                "{devotion.description}"
                            </p>
                        </div>

                        <div className="space-y-3 animate-in fade-in slide-in-from-bottom-4 duration-500">
                            <p className="text-slate-700 dark:text-slate-300 leading-relaxed px-1 text-sm sm:text-base break-words whitespace-pre-wrap">
                                {devotion.fullDescription}
                            </p>
                        </div>

                        {devotion.status && (
                            <div className={`p-4 rounded-xl border flex items-start gap-3 animate-in fade-in slide-in-from-bottom-4 duration-700 ${devotion.status === "approved"
                                ? "bg-green-50 dark:bg-green-900/20 border-green-100 dark:border-green-900/30"
                                : devotion.status === "not-approved"
                                    ? "bg-red-50 dark:bg-red-900/20 border-red-100 dark:border-red-900/30"
                                    : "bg-orange-50 dark:bg-orange-900/20 border-orange-100 dark:border-orange-900/30"
                                }`}>
                                <div className="mt-0.5 flex-shrink-0">
                                    {getStatusIcon(devotion.status)}
                                </div>
                                <div>
                                    <p className={`text-sm font-semibold ${devotion.status === "approved"
                                        ? "text-green-800 dark:text-green-200"
                                        : devotion.status === "not-approved"
                                            ? "text-red-800 dark:text-red-200"
                                            : "text-orange-800 dark:text-orange-200"
                                        }`}>
                                        {getStatusText(devotion.status)}
                                    </p>
                                    {devotion.statusNote && (
                                        <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                                            {devotion.statusNote}
                                        </p>
                                    )}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </DialogContent>


        </>
    );
}

