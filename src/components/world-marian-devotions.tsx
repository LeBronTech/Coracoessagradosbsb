"use client";

import React, { useState, useEffect, useRef } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogClose } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Globe, AlertCircle, CheckCircle, Clock, X } from "lucide-react";
import Image from "next/image";

import { worldMarianDevotions, MarianDevotion, Continent } from "@/lib/world-devotions-data";

export function WorldMarianDevotions() {
    const continents: Continent[] = worldMarianDevotions;

    const getStatusIcon = (status?: string) => {
        switch (status) {
            case "approved":
                return <CheckCircle className="w-5 h-5 text-green-600" />;
            case "pending":
                return <Clock className="w-5 h-5 text-yellow-600" />;
            case "complex":
                return <AlertCircle className="w-5 h-5 text-orange-600" />;
            case "not-approved":
                return <AlertCircle className="w-5 h-5 text-red-600" />;
            default:
                return null;
        }
    };

    const getStatusText = (status?: string) => {
        switch (status) {
            case "approved":
                return "Aprovada pela Igreja";
            case "pending":
                return "Em análise";
            case "complex":
                return "Situação complexa";
            case "not-approved":
                return "Não aprovada";
            default:
                return "";
        }
    };

    return (
        <section className="mb-12">
            <div className="text-center mb-10">
                <h2 className="text-4xl font-bold text-blue-900 dark:text-blue-100 mb-4 font-brand flex items-center justify-center gap-3">
                    <Globe className="w-10 h-10" />
                    Devoções Marianas pelo Mundo
                </h2>
                <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
                    Descubra devoções marianas de diferentes países, cada uma com sua história única e significado especial para os fiéis locais
                </p>
            </div>

            <div className="space-y-12">
                {continents.map((continent) => {
                    // Agrupar devoções por país
                    const devotionsByCountry: Record<string, MarianDevotion[]> = {};

                    continent.devotions.forEach(devotion => {
                        const countryName = devotion.country; // Ex: "Brasil (Acre)" ou "França"
                        // Simplifica o nome do país para agrupamento se desejar, ou usa o full name
                        // Vamos usar o nome completo para garantir bandeiras corretas se estiverem "Brasil (MG)" etc.
                        // Mas para agrupar melhor, talvez devêssemos normalizar.
                        // Dado os dados atuais, "Brasil (Acre)", "Brasil (SP)" são distintos.
                        // Se quisermos agrupar TUDO do Brasil, precisamos extrair a base.

                        // Lógica de extração simples: Pegar o que está antes de parenteses ou o próprio nome
                        // Ex: "Brasil (Acre)" -> "Brasil"
                        let countryKey = countryName.split('(')[0].trim();

                        // Exceções ou refinamentos se necessário. Por enquanto, agrupación por base do país.

                        if (!devotionsByCountry[countryKey]) {
                            devotionsByCountry[countryKey] = [];
                        }
                        devotionsByCountry[countryKey].push(devotion);
                    });

                    // Ordenar países alfabeticamente
                    const sortedCountries = Object.keys(devotionsByCountry).sort();

                    return (
                        <div
                            key={continent.name}
                            className="p-8 rounded-3xl shadow-lg border transition-all duration-500 bg-gradient-to-br from-blue-50 to-sky-50 border-blue-100 dark:from-blue-950/20 dark:to-sky-950/20 dark:border-blue-900/30"
                        >
                            <h3 className="text-3xl font-bold mb-8 flex items-center gap-3 text-blue-800 dark:text-blue-300 border-b pb-4 border-blue-200 dark:border-blue-800">
                                <span className="text-4xl">{continent.emoji}</span>
                                {continent.name}
                            </h3>

                            <div className="space-y-12">
                                {sortedCountries.map(countryKey => {
                                    const countryDevotions = devotionsByCountry[countryKey];
                                    // Pega a bandeira do primeiro item para exibir no header do país
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
                                                                        src={devotion.imageUrl}
                                                                        alt={devotion.name}
                                                                        width={200}
                                                                        height={200}
                                                                        className="aspect-square rounded-full object-cover border-4 transition-all duration-300 shadow-md group-hover:shadow-xl group-hover:scale-105 border-blue-200 group-hover:border-blue-400"
                                                                    />
                                                                    {/* Bandeira removida daqui pois já está no header do grupo, ou mantemos pequena? Vamos manter para reforçar */}
                                                                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 z-10">
                                                                        <span className="inline-block px-3 py-1 text-white text-[10px] font-bold rounded-full shadow-sm bg-blue-600">
                                                                            {devotion.date}
                                                                        </span>
                                                                    </div>
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

function WorldDevotionDialog({ devotion }: { devotion: MarianDevotion }) {
    const [scrolled, setScrolled] = useState(false);
    const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
        const scrollTop = e.currentTarget.scrollTop;
        setScrolled(scrollTop > 50);
    };

    return (
        <DialogContent className="sm:max-w-3xl max-w-[98vw] max-h-[95vh] flex flex-col bg-gradient-to-br from-white to-blue-50 dark:from-slate-900 dark:to-blue-950 border-2 border-blue-200 dark:border-blue-800 shadow-2xl overflow-hidden">
            {/* Botão Voltar Estilizado */}
            <DialogClose className="absolute left-8 top-16 z-50 rounded-full bg-blue-600 hover:bg-blue-700 text-white p-2 shadow-lg transition-all hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <X className="h-5 w-5" />
                <span className="sr-only">Fechar</span>
            </DialogClose>

            <DialogHeader className="px-2 pt-10 pb-4 relative flex-shrink-0">
                <div className="flex flex-col items-center justify-center min-h-[180px] sm:min-h-[220px]">
                    <div className={`relative transition-all duration-500 ease-in-out ${scrolled ? 'scale-50 -translate-y-4' : 'scale-100'}`}>
                        <Image
                            src={devotion.imageUrl}
                            alt={devotion.name}
                            width={200}
                            height={200}
                            className="rounded-full object-cover border-4 border-blue-300 dark:border-blue-600 shadow-xl w-32 h-32 sm:w-40 sm:h-40"
                        />
                    </div>
                    <DialogTitle className={`font-bold text-blue-900 dark:text-blue-100 text-center font-brand px-2 break-words hyphens-auto transition-all duration-500 ease-in-out ${scrolled ? 'text-lg sm:text-xl -translate-y-8' : 'text-xl sm:text-2xl md:text-3xl mt-4'
                        }`}>
                        {devotion.name}
                    </DialogTitle>
                    <div className={`flex items-center gap-2 flex-wrap justify-center px-2 transition-all duration-500 ease-in-out ${scrolled ? 'opacity-0 scale-95 pointer-events-none h-0 mt-0' : 'opacity-100 mt-2'
                        }`}>
                        <div className="flex items-center gap-2">
                            <span className="text-2xl">{devotion.countryFlag}</span>
                            <span className="text-slate-600 dark:text-slate-400 font-medium">
                                {devotion.country}
                            </span>
                        </div>
                        <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 text-sm font-bold rounded-full">
                            {devotion.date}
                        </span>
                    </div>
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
    );
}
