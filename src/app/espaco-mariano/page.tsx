"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronLeft, Download, BookOpen, Video, Heart } from "lucide-react";
import Link from "next/link";
import { MarianGallery } from "@/components/marian-gallery";
import { WorldMarianDevotions } from "@/components/world-marian-devotions";
import { RosarySection } from "@/components/rosary-section";
import { ConsecrationSection } from "@/components/consecration-section";
import Image from "next/image";

export default function EspacoMarianoPage() {
    const [activeSection, setActiveSection] = useState<"galeria" | "oracoes" | "rosario" | "consagracao">("galeria");

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-sky-50 dark:from-slate-950 dark:via-slate-900 dark:to-blue-950">
            {/* Header / Hero Section */}
            <header className="bg-gradient-to-r from-blue-800 via-blue-700 to-blue-800 text-white py-16 px-4 shadow-2xl relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://iili.io/fj0D5Ga.png')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
                <div className="container mx-auto max-w-7xl relative z-10">
                    <Link href="/" className="inline-flex items-center text-blue-100 hover:text-white mb-6 transition-colors">
                        <ChevronLeft className="mr-2 h-5 w-5" />
                        Voltar ao Início
                    </Link>
                    <div className="text-center">
                        <h1 className="text-5xl md:text-6xl font-bold mb-4 tracking-tight drop-shadow-lg">
                            Espaço Mariano
                        </h1>
                        <p className="text-2xl text-blue-100 max-w-3xl mx-auto mb-6">
                            Mãe de Deus, Rainha do Céu, Nossa Senhora
                        </p>
                        <p className="text-lg text-blue-50 italic">
                            "Eis aqui a serva do Senhor, faça-se em mim segundo a tua palavra"
                        </p>
                    </div>
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
