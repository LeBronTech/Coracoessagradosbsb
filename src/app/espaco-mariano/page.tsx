"use client";
import { cn } from "@/lib/utils";

import React, { useState, useRef, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronLeft, BookOpen, Heart, ArrowUp, Search, X, SlidersHorizontal, Globe, Calendar } from "lucide-react";
import Link from "next/link";
import { MarianGallery, devotions as regionalDevotions } from "@/components/marian-gallery";
import { WorldMarianDevotions } from "@/components/world-marian-devotions";
import { RosarySection } from "@/components/rosary-section";
import { ConsecrationSection } from "@/components/consecration-section";
import Image from "next/image";
import { worldMarianDevotions, MarianDevotion } from "@/lib/world-devotions-data";
import { LoadingScreen } from "@/components/loading-screen";

export default function EspacoMarianoPage() {
    const [activeSection, setActiveSection] = useState<"galeria" | "oracoes" | "rosario" | "consagracao">("galeria");
    const [showScrollTop, setShowScrollTop] = React.useState(false);
    const [hydrated, setHydrated] = useState(false);

    React.useEffect(() => {
        setHydrated(true);
    }, []);

    React.useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 400) {
                setShowScrollTop(true);
            } else {
                setShowScrollTop(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <React.Fragment>
            <LoadingScreen isLoading={!hydrated} />
            <div className={cn("min-h-screen bg-gradient-to-br from-blue-50 via-white to-sky-50 dark:from-slate-950 dark:via-slate-900 dark:to-blue-950 transition-opacity duration-700", hydrated ? "opacity-100" : "opacity-0")}>
                {/* Header / Hero Section */}
                <header className="bg-gradient-to-r from-blue-800 via-blue-700 to-blue-800 text-white py-12 px-4 shadow-2xl relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('https://iili.io/fj0D5Ga.png')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
                    <div className="container mx-auto max-w-4xl relative z-10">
                        <Link href="/" className="inline-flex items-center text-blue-100 hover:text-white mb-6 transition-colors">
                            <ChevronLeft className="mr-2 h-5 w-5" />
                            Voltar ao Início
                        </Link>
                        <div className="text-center mb-8">
                            <h1 className="text-5xl md:text-6xl font-bold mb-3 tracking-tight drop-shadow-lg">
                                Espaço Mariano
                            </h1>
                            <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-1">
                                Mãe de Deus, Rainha do Céu, Nossa Senhora
                            </p>
                            <p className="text-sm text-blue-200 italic">
                                "Eis aqui a serva do Senhor, faça-se em mim segundo a tua palavra"
                            </p>
                        </div>

                        {/* ── Barra de Pesquisa Global ── */}
                        <HeroSearchBar />
                    </div>
                </header>

                <main className="container mx-auto max-w-7xl px-4 py-8">
                    {/* Navigation Buttons */}
                    <div className="flex flex-wrap gap-4 justify-center mb-12">
                        <Button
                            size="lg"
                            variant={activeSection === "galeria" ? "default" : "outline"}
                            onClick={() => setActiveSection("galeria")}
                            className={`transition-all duration-300 ${activeSection === "galeria" ? "bg-blue-700 hover:bg-blue-800 shadow-lg scale-105" : "hover:bg-blue-50"}`}
                        >
                            <Heart className="mr-2 h-5 w-5" />
                            Títulos Marianos
                        </Button>
                        <Button
                            size="lg"
                            variant={activeSection === "rosario" ? "default" : "outline"}
                            onClick={() => setActiveSection("rosario")}
                            className={`transition-all duration-300 ${activeSection === "rosario" ? "bg-blue-700 hover:bg-blue-800 shadow-lg scale-105" : "hover:bg-blue-50"}`}
                        >
                            <BookOpen className="mr-2 h-5 w-5" />
                            Aprenda a Rezar o Terço
                        </Button>
                        <Button
                            size="lg"
                            variant={activeSection === "oracoes" ? "default" : "outline"}
                            onClick={() => setActiveSection("oracoes")}
                            className={`transition-all duration-300 ${activeSection === "oracoes" ? "bg-blue-700 hover:bg-blue-800 shadow-lg scale-105" : "hover:bg-blue-50"}`}
                        >
                            <BookOpen className="mr-2 h-5 w-5" />
                            Orações Marianas
                        </Button>
                        <Button
                            size="lg"
                            variant={activeSection === "consagracao" ? "default" : "outline"}
                            onClick={() => setActiveSection("consagracao")}
                            className={`transition-all duration-300 ${activeSection === "consagracao" ? "bg-blue-700 hover:bg-blue-800 shadow-lg scale-105" : "hover:bg-blue-50"}`}
                        >
                            <Heart className="mr-2 h-5 w-5" />
                            Consagração
                        </Button>
                    </div>

                    {/* Content Sections */}
                    {activeSection === "galeria" ? (
                        <div className="space-y-12">
                            {/* Galeria de Devoções Marianas */}
                            <MarianGallery />

                            {/* Devoções Marianas pelo Mundo */}
                            <WorldMarianDevotions />
                        </div>
                    ) : activeSection === "rosario" ? (
                        <RosarySection />
                    ) : activeSection === "consagracao" ? (
                        <ConsecrationSection />
                    ) : (
                        <OracoesSection />
                    )}
                </main>

                {/* Back to Top Button */}
                {showScrollTop && (
                    <button
                        onClick={scrollToTop}
                        className="fixed bottom-8 right-8 p-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 z-50 animate-in fade-in zoom-in"
                        aria-label="Voltar ao topo"
                    >
                        <ArrowUp className="h-6 w-6" />
                    </button>
                )}
            </div>
        </React.Fragment>
    );
}

// ─── Barra de Pesquisa Global do Hero ────────────────────────────────────────

function HeroSearchBar() {
    const continents = worldMarianDevotions;

    const [query, setQuery] = useState("");
    const allDevotions = useMemo(() => {
        const world = worldMarianDevotions.flatMap(c => c.devotions);
        const regional = regionalDevotions;
        
        // Unique-ify by ID
        const map = new Map<string, any>();
        [...world, ...regional].forEach(d => {
          if (!map.has(d.id)) {
            map.set(d.id, d);
          }
        });
        return Array.from(map.values());
    }, []);
    const [filterContinent, setFilterContinent] = useState("");
    const [filterMonth, setFilterMonth] = useState("");
    const [showFilters, setShowFilters] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

    const months = [
        "Janeiro","Fevereiro","Março","Abril","Maio","Junho",
        "Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"
    ];

    // Mapa id → nome do continente
    const devotionToContinentMap = useMemo(() => {
        const map = new Map<string, string>();
        continents.forEach(c => c.devotions.forEach(d => map.set(d.id, c.name)));
        return map;
    }, []);

    const results = useMemo(() => {
        const q = query.trim().toLowerCase();
        if (!q && !filterContinent && !filterMonth) return [];
        return allDevotions.filter(d => {
            const cName = devotionToContinentMap.get(d.id) ?? "";
            const matchText = !q || [d.name, (d as any).country ?? "", d.date, d.description ?? "", cName]
                .some(v => v.toLowerCase().includes(q));
            const matchCont = !filterContinent || cName === filterContinent;
            const matchMonth = !filterMonth || d.date.toLowerCase().includes(filterMonth.toLowerCase());
            return matchText && matchCont && matchMonth;
        });
    }, [query, filterContinent, filterMonth]);

    const isSearching = query.trim() !== "" || filterContinent !== "" || filterMonth !== "";

    const clearAll = () => { setQuery(""); setFilterContinent(""); setFilterMonth(""); };

    return (
        <div>
            {/* Campo principal */}
            <div className="flex items-center gap-3 bg-white/15 backdrop-blur-sm border border-white/30 rounded-2xl px-4 py-3 focus-within:bg-white/20 focus-within:border-white/50 transition-all duration-200 shadow-lg">
                <Search className="w-5 h-5 text-white/80 flex-shrink-0" />
                <input
                    ref={inputRef}
                    id="hero-marian-search"
                    type="text"
                    value={query}
                    onChange={e => setQuery(e.target.value)}
                    placeholder="Buscar título, país, data, continente…"
                    className="flex-1 bg-transparent outline-none text-white placeholder-white/60 text-sm sm:text-base"
                    aria-label="Pesquisar devoções marianas"
                    autoComplete="off"
                />
                <div className="flex items-center gap-2 flex-shrink-0">
                    {isSearching && (
                        <button
                            onClick={clearAll}
                            className="w-7 h-7 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
                            aria-label="Limpar busca"
                        >
                            <X className="w-4 h-4 text-white" />
                        </button>
                    )}
                    <button
                        onClick={() => setShowFilters(v => !v)}
                        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all duration-200 ${
                            showFilters || filterContinent || filterMonth
                                ? 'bg-white text-blue-800'
                                : 'bg-white/20 text-white hover:bg-white/30'
                        }`}
                        aria-label="Filtros"
                    >
                        <SlidersHorizontal className="w-3.5 h-3.5" />
                        <span className="hidden sm:inline">Filtros</span>
                        {(filterContinent || filterMonth) && (
                            <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 inline-block" />
                        )}
                    </button>
                </div>
            </div>

            {/* Filtros avançados */}
            <div className={`overflow-hidden transition-all duration-300 ${showFilters ? 'max-h-24 opacity-100 mt-3' : 'max-h-0 opacity-0'}`}>
                <div className="flex flex-wrap gap-3">
                    <div className="flex items-center gap-2 flex-1 min-w-[180px]">
                        <Globe className="w-4 h-4 text-white/70 flex-shrink-0" />
                        <select
                            value={filterContinent}
                            onChange={e => setFilterContinent(e.target.value)}
                            className="flex-1 bg-white/15 backdrop-blur-sm border border-white/30 rounded-xl px-3 py-2 text-sm text-white outline-none focus:border-white/60 cursor-pointer"
                            aria-label="Filtrar por continente"
                        >
                            <option value="" className="text-slate-800">🌍 Todos os Continentes</option>
                            {continents.map(c => (
                                <option key={c.name} value={c.name} className="text-slate-800">{c.emoji} {c.name}</option>
                            ))}
                        </select>
                    </div>
                    <div className="flex items-center gap-2 flex-1 min-w-[160px]">
                        <Calendar className="w-4 h-4 text-white/70 flex-shrink-0" />
                        <select
                            value={filterMonth}
                            onChange={e => setFilterMonth(e.target.value)}
                            className="flex-1 bg-white/15 backdrop-blur-sm border border-white/30 rounded-xl px-3 py-2 text-sm text-white outline-none focus:border-white/60 cursor-pointer"
                            aria-label="Filtrar por mês"
                        >
                            <option value="" className="text-slate-800">📅 Todos os Meses</option>
                            {months.map(m => (
                                <option key={m} value={m} className="text-slate-800">{m}</option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>

            {/* Resultados */}
            {isSearching && (
                <div className="mt-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-4 max-h-80 overflow-y-auto">
                    <div className="flex items-center justify-between mb-3">
                        <p className="text-white/80 text-xs font-semibold">
                            {results.length === 0
                                ? "Nenhuma devoção encontrada"
                                : `${results.length} devoção${results.length !== 1 ? 'ões' : ''} encontrada${results.length !== 1 ? 's' : ''}`}
                        </p>
                        <button onClick={clearAll} className="text-white/70 hover:text-white text-xs underline">
                            Limpar
                        </button>
                    </div>

                    {results.length === 0 ? (
                        <p className="text-white/60 text-sm text-center py-4">Tente outros termos.</p>
                    ) : (
                        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3">
                            {results.map(d => {
                                const cName = devotionToContinentMap.get(d.id) ?? "";
                                const continent = continents.find(c => c.name === cName);
                                return (
                                    <button
                                        key={d.id}
                                        onClick={() => {
                                            setQuery("");
                                            // Tenta rolar para a galeria regional primeiro, depois para a do mundo
                                            let element = document.getElementById(`devotion-${d.id}`) || document.getElementById(`world-devotion-${d.id}`);
                                            
                                            if (element) {
                                                element.scrollIntoView({ behavior: 'smooth', block: 'center' });
                                                // Feedback visual temporário
                                                element.classList.add('ring-4', 'ring-blue-500', 'ring-offset-4', 'rounded-full');
                                                setTimeout(() => {
                                                    element?.classList.remove('ring-4', 'ring-blue-500', 'ring-offset-4');
                                                }, 2000);
                                            }
                                        }}
                                        className="flex flex-col items-center gap-1 group cursor-pointer"
                                    >
                                        <div className="relative">
                                            {(d.images?.[0] || d.imageUrl) ? (
                                                <img
                                                    src={d.images?.[0] || d.imageUrl}
                                                    alt={d.name}
                                                    className="w-12 h-12 rounded-full object-cover border-2 border-white/50 group-hover:border-white transition-all shadow-md group-hover:scale-110"
                                                    style={{ objectPosition: (d as any).objectPosition || 'center' }}
                                                />
                                            ) : (
                                                <div className="w-12 h-12 rounded-full border-2 border-white/50 group-hover:border-white transition-all shadow-md bg-white/20 flex items-center justify-center">
                                                    <span className="text-[10px] text-white">Sem Img</span>
                                                </div>
                                            )}
                                            <span className="absolute -top-1 -left-1 text-xs leading-none">{continent?.emoji ?? "🌍"}</span>
                                        </div>
                                        <p className="text-white text-[10px] font-semibold text-center line-clamp-2 leading-tight px-0.5">
                                            {d.name}
                                        </p>
                                        <p className="text-white/60 text-[9px] text-center">{d.date}</p>
                                    </button>
                                );
                            })}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}

// Seção de Orações
function OracoesSection() {
    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h2 className="text-4xl font-bold text-blue-900 dark:text-blue-100 text-center mb-10 font-brand">
                🙏 Orações Marianas 🙏
            </h2>

            <div className="grid gap-8 max-w-4xl mx-auto">
                {/* Ave Maria */}
                <Card className="border-blue-200 shadow-xl overflow-hidden hover:border-blue-400 transition-colors">
                    <CardHeader className="bg-gradient-to-r from-blue-50 to-white dark:from-blue-950/30 dark:to-transparent border-b border-blue-100 dark:border-blue-900/30">
                        <CardTitle className="text-2xl text-blue-800 dark:text-blue-200 flex items-center gap-3">
                            <span className="w-1.5 h-6 bg-blue-600 rounded-full"></span>
                            Ave Maria
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-8 px-8 pb-8">
                        <p className="text-lg md:text-xl text-slate-700 dark:text-slate-300 leading-relaxed text-center font-medium italic">
                            Ave Maria, cheia de graça, o Senhor é convosco, bendita sois vós entre as mulheres e bendito é o fruto do vosso ventre, Jesus. Santa Maria, Mãe de Deus, rogai por nós pecadores, agora e na hora da nossa morte. Amém.
                        </p>
                    </CardContent>
                </Card>

                {/* Salve Rainha */}
                <Card className="border-blue-200 shadow-xl overflow-hidden hover:border-blue-400 transition-colors">
                    <CardHeader className="bg-gradient-to-r from-blue-50 to-white dark:from-blue-950/30 dark:to-transparent border-b border-blue-100 dark:border-blue-900/30">
                        <CardTitle className="text-2xl text-blue-800 dark:text-blue-200 flex items-center gap-3">
                            <span className="w-1.5 h-6 bg-blue-600 rounded-full"></span>
                            Salve Rainha
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-8 px-8 pb-8">
                        <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed text-center">
                            Salve, Rainha, Mãe de misericórdia, vida, doçura e esperança nossa, salve! A vós bradamos, os degredados filhos de Eva. A vós suspiramos, gemendo e chorando neste vale de lágrimas. Eia, pois, advogada nossa, esses vossos olhos misericordiosos a nós volvei. E depois deste desterro, mostrai-nos Jesus, bendito fruto do vosso ventre. Ó clemente, ó piedosa, ó doce sempre Virgem Maria. Rogai por nós, Santa Mãe de Deus, para que sejamos dignos das promessas de Cristo. Amém.
                        </p>
                    </CardContent>
                </Card>

                {/* Memorare */}
                <Card className="border-blue-200 shadow-xl overflow-hidden hover:border-blue-400 transition-colors">
                    <CardHeader className="bg-gradient-to-r from-blue-50 to-white dark:from-blue-950/30 dark:to-transparent border-b border-blue-100 dark:border-blue-900/30">
                        <CardTitle className="text-2xl text-blue-800 dark:text-blue-200 flex items-center gap-3">
                            <span className="w-1.5 h-6 bg-blue-600 rounded-full"></span>
                            Memorare
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-8 px-8 pb-8">
                        <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed text-center italic">
                            Lembrai-vos, ó puríssima Virgem Maria, que jamais se ouviu dizer que algum daqueles que têm recorrido à vossa proteção, implorado a vossa assistência e reclamado o vosso socorro, fosse por vós abandonado. Animado por esta confiança, a vós recorro, ó Mãe, Virgem das virgens, e gemendo sob o peso dos meus pecados, ouso comparecer diante da vossa presença soberana. Não desprezeis as minhas súplicas, ó Mãe do Verbo Divino, mas dignai-vos ouvi-las e atendê-las benignamente. Amém.
                        </p>
                    </CardContent>
                </Card>

                {/* Magnificat */}
                <Card className="border-blue-200 shadow-xl overflow-hidden hover:border-blue-400 transition-colors">
                    <CardHeader className="bg-gradient-to-r from-blue-50 to-white dark:from-blue-950/30 dark:to-transparent border-b border-blue-100 dark:border-blue-900/30">
                        <CardTitle className="text-2xl text-blue-800 dark:text-blue-200 flex items-center gap-3">
                            <span className="w-1.5 h-6 bg-blue-600 rounded-full"></span>
                            Magnificat
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-8 px-8 pb-8">
                        <p className="text-lg md:text-xl text-slate-700 dark:text-slate-300 leading-relaxed text-center font-medium italic">
                            A minha alma glorifica ao Senhor, e o meu espírito exulta em Deus, meu Salvador, porque olhou para a humildade de sua serva. Desde agora todas as gerações me chamarão bem-aventurada, porque o Todo-Poderoso fez grandes coisas em meu favor. Santo é o seu nome! Sua misericórdia se estende, de geração em geração, sobre os que o temem.
                        </p>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
