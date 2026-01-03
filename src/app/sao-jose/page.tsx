"use client";

import React, { useState, useRef } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronLeft, Download, MessageCircle, BookOpen, Video, Heart, ExternalLink, ChevronDown } from "lucide-react";
import Link from "next/link";

export default function SaoJosePage() {
    const [activeSection, setActiveSection] = useState<"novenas" | "consagracao">("novenas");
    const consagracaoContentRef = useRef<HTMLDivElement>(null);

    const handleConsagracaoClick = () => {
        setActiveSection("consagracao");
        setTimeout(() => {
            if (consagracaoContentRef.current) {
                consagracaoContentRef.current.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }, 300);
    };

    const scrollToConsagracaoContent = () => {
        setTimeout(() => {
            if (consagracaoContentRef.current) {
                consagracaoContentRef.current.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }, 100);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50 dark:from-slate-950 dark:via-slate-900 dark:to-green-950">
            {/* Header / Hero Section */}
            <header className="bg-gradient-to-r from-green-800 via-green-700 to-green-800 text-white py-16 px-4 shadow-2xl relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://iili.io/fj7jrtj.png')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
                <div className="container mx-auto max-w-7xl relative z-10">
                    <Link href="/" className="inline-flex items-center text-green-100 hover:text-white mb-6 transition-colors">
                        <ChevronLeft className="mr-2 h-5 w-5" />
                        Voltar ao Início
                    </Link>
                    <div className="text-center">
                        <h1 className="text-5xl md:text-6xl font-bold mb-4 tracking-tight drop-shadow-lg">
                            São José
                        </h1>
                        <p className="text-2xl text-green-100 max-w-3xl mx-auto mb-6">
                            Esposo de Maria, Pai Nutrício de Jesus, Terror dos Demônios
                        </p>
                        <p className="text-lg text-green-50 italic">
                            "Ite ad Joseph" - Ide a José
                        </p>
                    </div>
                </div>
            </header>

            {/* Navigation Buttons */}
            <div className="container mx-auto max-w-7xl px-4 py-8">
                <div className="flex flex-wrap gap-4 justify-center">
                    <Button
                        size="lg"
                        variant={activeSection === "novenas" ? "default" : "outline"}
                        onClick={() => setActiveSection("novenas")}
                        className="bg-green-700 hover:bg-green-800 text-white"
                    >
                        <Heart className="mr-2 h-5 w-5" />
                        Novenas a São José
                    </Button>
                    <Button
                        size="lg"
                        variant={activeSection === "consagracao" ? "default" : "outline"}
                        onClick={handleConsagracaoClick}
                        className="bg-green-700 hover:bg-green-800 text-white"
                    >
                        <BookOpen className="mr-2 h-5 w-5" />
                        33 Dias de Consagração
                    </Button>
                </div>
            </div>

            <main className="container mx-auto max-w-7xl px-4 pb-12">
                {/* Recursos e Links */}
                <section className="mb-8">
                    <Card className="border-green-200 shadow-lg bg-gradient-to-br from-white to-green-50 dark:from-slate-900 dark:to-green-950/20">
                        <CardHeader className="bg-green-100/50 dark:bg-green-900/20">
                            <CardTitle className="text-2xl text-green-800 dark:text-green-300 flex items-center">
                                <Download className="mr-2 h-6 w-6" />
                                Recursos para sua Devoção
                            </CardTitle>
                            <CardDescription>Materiais e links importantes para aprofundar sua consagração</CardDescription>
                        </CardHeader>
                        <CardContent className="pt-6">
                            <div className="grid md:grid-cols-2 gap-4">
                                <a
                                    href="https://drive.google.com/file/d/1Knev27Ne-BgYV4cdQk11Yx__ZQo2D5da/view"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 p-4 bg-white dark:bg-slate-800 rounded-lg border-2 border-green-200 hover:border-green-400 hover:shadow-md transition-all group"
                                    title="Clique para fazer o download do livro completo"
                                >
                                    <BookOpen className="h-8 w-8 text-green-600 group-hover:scale-110 transition-transform" />
                                    <div>
                                        <p className="font-semibold text-green-900 dark:text-green-100">Livro de Consagração (PDF)</p>
                                        <p className="text-sm text-slate-600 dark:text-slate-400">Padre Donald Calloway</p>
                                        <p className="text-xs text-green-600 dark:text-green-400 mt-1 font-medium">📥 Clique para baixar</p>
                                    </div>
                                </a>

                                <a
                                    href="https://chat.whatsapp.com/LNU3BDbd2wK81q3RZ8QhK1"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 p-4 bg-white dark:bg-slate-800 rounded-lg border-2 border-green-200 hover:border-green-400 hover:shadow-md transition-all"
                                >
                                    <MessageCircle className="h-8 w-8 text-green-600" />
                                    <div>
                                        <p className="font-semibold text-green-900 dark:text-green-100">Grupo WhatsApp</p>
                                        <p className="text-sm text-slate-600 dark:text-slate-400">Consagração a São José</p>
                                    </div>
                                </a>

                                <a
                                    href="https://drive.google.com/file/d/1vj1OWZ6I1MvoBaTjfdk922LnuTu57Ruj/view?usp=sharing"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 p-4 bg-white dark:bg-slate-800 rounded-lg border-2 border-blue-200 hover:border-blue-400 hover:shadow-md transition-all"
                                >
                                    <Download className="h-8 w-8 text-blue-600" />
                                    <div>
                                        <p className="font-semibold text-blue-900 dark:text-blue-100">Ato de Consagração</p>
                                        <p className="text-sm text-slate-600 dark:text-slate-400">Para imprimir e assinar</p>
                                    </div>
                                </a>

                                <a
                                    href="https://youtu.be/KZa9vqbfa9A?si=nbKwOB2loW8scJIm"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 p-4 bg-white dark:bg-slate-800 rounded-lg border-2 border-red-200 hover:border-red-400 hover:shadow-md transition-all"
                                >
                                    <Video className="h-8 w-8 text-red-600" />
                                    <div>
                                        <p className="font-semibold text-red-900 dark:text-red-100">Faça seu Cordão</p>
                                        <p className="text-sm text-slate-600 dark:text-slate-400">Tutorial em vídeo</p>
                                    </div>
                                </a>
                            </div>

                            <div className="mt-6 p-4 bg-green-50 dark:bg-green-950/30 border-l-4 border-green-600 rounded">
                                <p className="text-sm text-green-900 dark:text-green-100 font-medium mb-2">
                                    📅 Toda quarta-feira do mês é dedicada a São José
                                </p>
                                <p className="text-sm text-slate-700 dark:text-slate-300">
                                    Participe da nossa comunidade e aprofunde sua devoção ao Terror dos Demônios!
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                </section>

                {/* Content Sections */}
                {activeSection === "novenas" && <NovenasSaoJose />}
                {activeSection === "consagracao" && <ConsagracaoSaoJose consagracaoContentRef={consagracaoContentRef} scrollToContent={scrollToConsagracaoContent} />}
            </main>
        </div>
    );
}

// Component for Novenas Section
function NovenasSaoJose() {
    return (
        <div className="space-y-8">
            <h2 className="text-3xl font-bold text-green-900 dark:text-green-100 text-center mb-6">
                Novenas a São José
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
                {/* Novena 19 de Março */}
                <Card className="border-green-300 shadow-lg hover:shadow-xl transition-shadow">
                    <CardHeader className="bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/40 dark:to-emerald-900/40">
                        <CardTitle className="text-2xl text-green-900 dark:text-green-100">
                            Novena a São José
                        </CardTitle>
                        <CardDescription className="text-green-700 dark:text-green-300">
                            19 de Março - Festa de São José
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="pt-6">
                        <p className="text-slate-700 dark:text-slate-300 mb-4">
                            Novena tradicional em honra a São José, esposo de Maria Santíssima e pai nutrício de Jesus.
                        </p>
                        <Link href="/#sao_jose_19_marco">
                            <Button className="w-full bg-green-700 hover:bg-green-800">
                                Rezar Novena de 19 de Março
                            </Button>
                        </Link>
                    </CardContent>
                </Card>

                {/* Novena 1º de Maio */}
                <Card className="border-emerald-300 shadow-lg hover:shadow-xl transition-shadow">
                    <CardHeader className="bg-gradient-to-r from-emerald-100 to-green-100 dark:from-emerald-900/40 dark:to-green-900/40">
                        <CardTitle className="text-2xl text-emerald-900 dark:text-emerald-100">
                            Novena a São José Operário
                        </CardTitle>
                        <CardDescription className="text-emerald-700 dark:text-emerald-300">
                            1º de Maio - Festa de São José Operário
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="pt-6">
                        <p className="text-slate-700 dark:text-slate-300 mb-4">
                            Novena ao modelo dos trabalhadores, que dignificou o trabalho com suas próprias mãos.
                        </p>
                        <Link href="/#sao_jose_operario">
                            <Button className="w-full bg-emerald-700 hover:bg-emerald-800">
                                Rezar Novena de 1º de Maio
                            </Button>
                        </Link>
                    </CardContent>
                </Card>
            </div>

            {/* Ladainha */}
            <Card className="border-green-200 shadow-lg mt-8">
                <CardHeader className="bg-green-50 dark:bg-green-950/20">
                    <CardTitle className="text-2xl text-green-800 dark:text-green-200">
                        Ladainha de São José
                    </CardTitle>
                    <CardDescription>Aprovada pelo Papa São Pio X em 1909</CardDescription>
                </CardHeader>
                <CardContent className="pt-6 prose dark:prose-invert max-w-none">
                    <div className="text-slate-700 dark:text-slate-300 leading-relaxed space-y-2">
                        <p>Senhor, tende piedade de nós. <span className="italic text-green-700 dark:text-green-400">Jesus Cristo, tende piedade de nós.</span> Senhor, tende piedade de nós.</p>
                        <p>Jesus Cristo, ouvi-nos. <span className="italic text-green-700 dark:text-green-400">Jesus Cristo, atendei-nos.</span></p>

                        <Separator className="my-4" />

                        <p>Deus, Pai dos Céus, <span className="italic">tende piedade de nós.</span></p>
                        <p>Deus Filho, Redentor do mundo, <span className="italic">tende piedade de nós.</span></p>
                        <p>Deus Espírito Santo, <span className="italic">tende piedade de nós.</span></p>
                        <p>Santíssima Trindade, que sois um só Deus, <span className="italic">tende piedade de nós.</span></p>

                        <Separator className="my-4" />

                        <div className="grid md:grid-cols-2 gap-2">
                            <p>Santa Maria, <span className="italic">rogai por nós.</span></p>
                            <p>São José, <span className="italic">rogai por nós.</span></p>
                            <p>Ilustre filho de Davi, <span className="italic">rogai por nós.</span></p>
                            <p>Luz dos Patriarcas, <span className="italic">rogai por nós.</span></p>
                            <p>Esposo da Mãe de Deus, <span className="italic">rogai por nós.</span></p>
                            <p>Casto guarda da Virgem, <span className="italic">rogai por nós.</span></p>
                            <p>Sustentador do Filho de Deus, <span className="italic">rogai por nós.</span></p>
                            <p>Zeloso defensor de Jesus Cristo, <span className="italic">rogai por nós.</span></p>
                            <p>Chefe da Sagrada Família, <span className="italic">rogai por nós.</span></p>
                            <p>José justíssimo, <span className="italic">rogai por nós.</span></p>
                            <p>José castíssimo, <span className="italic">rogai por nós.</span></p>
                            <p>José prudentíssimo, <span className="italic">rogai por nós.</span></p>
                            <p>José fortíssimo, <span className="italic">rogai por nós.</span></p>
                            <p>José obedientíssimo, <span className="italic">rogai por nós.</span></p>
                            <p>José fidelíssimo, <span className="italic">rogai por nós.</span></p>
                            <p>Espelho de paciência, <span className="italic">rogai por nós.</span></p>
                            <p>Amante da pobreza, <span className="italic">rogai por nós.</span></p>
                            <p>Modelo dos operários, <span className="italic">rogai por nós.</span></p>
                            <p>Honra da vida de família, <span className="italic">rogai por nós.</span></p>
                            <p>Guarda das virgens, <span className="italic">rogai por nós.</span></p>
                            <p>Sustentáculo das famílias, <span className="italic">rogai por nós.</span></p>
                            <p>Alívio dos miseráveis, <span className="italic">rogai por nós.</span></p>
                            <p>Esperança dos doentes, <span className="italic">rogai por nós.</span></p>
                            <p>Patrono dos moribundos, <span className="italic">rogai por nós.</span></p>
                            <p className="font-bold text-green-800 dark:text-green-300">Terror dos demônios, <span className="italic">rogai por nós.</span></p>
                            <p>Protetor da Santa Igreja, <span className="italic">rogai por nós.</span></p>
                        </div>

                        <Separator className="my-4" />

                        <p>Cordeiro de Deus, que tirais o pecado do mundo, <span className="italic">perdoai-nos, Senhor.</span></p>
                        <p>Cordeiro de Deus, que tirais o pecado do mundo, <span className="italic">atendei-nos, Senhor.</span></p>
                        <p>Cordeiro de Deus, que tirais o pecado do mundo, <span className="italic">tende piedade de nós.</span></p>

                        <Separator className="my-4" />

                        <p className="font-semibold">V. Ele constituiu-o senhor da sua casa.</p>
                        <p className="font-semibold">R. E fê-lo príncipe de todos os seus bens.</p>

                        <div className="mt-6 p-4 bg-green-50 dark:bg-green-950/30 rounded-lg">
                            <p className="font-bold mb-2">Oremos:</p>
                            <p>Ó Deus, que por inefável providência Vos dignastes escolher a São José por esposo de vossa Mãe Santíssima; concedei-nos, Vo-lo pedimos, que mereçamos ter por intercessor no Céu, aquele que veneramos na Terra como protetor. Vós que viveis e reinais por todos os séculos dos séculos. Amém.</p>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}

// Helper function to extract YouTube video ID
function getYouTubeVideoId(url: string): string | null {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
}

// Component for Consagração Section
function ConsagracaoSaoJose({ consagracaoContentRef, scrollToContent }: { consagracaoContentRef: React.RefObject<HTMLDivElement>; scrollToContent: () => void }) {

    // Dados dos 33 dias com páginas do PDF
    const diasConsagracao = [
        { dia: 1, titulo: "Por que uma consagração a São José?", paginas: "27-28", paginaPdf: 27, video: "https://youtu.be/SlYCkv2V3GM?si=Geizwd3WCbjrJyMc" },
        { dia: 2, titulo: "Ladainha de São José", paginas: "29-31", paginaPdf: 29, video: "https://youtu.be/oFKZPoaoFf0?si=7iqLnBzhCKZO-gLT" },
        { dia: 3, titulo: "Deus Pai do céu, tende piedade de nós", paginas: "33-34", paginaPdf: 33, video: "https://youtu.be/PYlBIwrBPvo?si=Ct6GWi27afwBcRzH" },
        { dia: 4, titulo: "Deus Filho Redentor do mundo", paginas: "35-37", paginaPdf: 35, video: "https://youtu.be/-_cPKDAnGk8?si=LwLoGYJFxjwPPf3t" },
        { dia: 5, titulo: "Deus Espírito Santo", paginas: "39-41", paginaPdf: 39, video: "https://youtu.be/jzcnGDsUqC0?si=RJFvdIbqoZHWhYhc" },
        { dia: 6, titulo: "Santíssima Trindade", paginas: "43-44", paginaPdf: 43, video: "https://youtu.be/7iylkxKggKs?si=5vFAc1hgTHEFzm2d" },
        { dia: 7, titulo: "Santa Maria, rogai por nós", paginas: "45-47", paginaPdf: 45, video: "https://youtu.be/jKPYxNDK-as?si=fUrZChUsIBZX8Mhv" },
        { dia: 8, titulo: "São José, rogai por nós", paginas: "49-50", paginaPdf: 49, video: "https://youtu.be/soIQ7iwbYe0?si=9R49tKT6xMLhyiA1" },
        { dia: 9, titulo: "Ilustre Filho de Davi", paginas: "51-53", paginaPdf: 51, video: "https://youtu.be/v9vyQxi2f0k?si=93ypI61cV0On68gJ" },
        { dia: 10, titulo: "Luz dos Patriarcas", paginas: "55-57", paginaPdf: 55, video: "https://youtu.be/rxDkkuJzGZw?si=3sgCJfFxYghB6a6n" },
        { dia: 11, titulo: "Esposo da Mãe de Deus", paginas: "59-60", paginaPdf: 59, video: "https://youtu.be/EgJ_bAdaOKk?si=glcT5UiKtqm6ypdR" },
        { dia: 12, titulo: "Casto guarda da Virgem", paginas: "61-62", paginaPdf: 61, video: "https://youtu.be/GoFg0QteH08?si=NHijOaJcGg52Crqq" },
        { dia: 13, titulo: "Pai adotivo do Filho de Deus", paginas: "63-65", paginaPdf: 63, video: "https://youtu.be/6SEBJYV81F0?si=Jv1VtD9RH8E0CPbv" },
        { dia: 14, titulo: "Zeloso defensor de Cristo", paginas: "67-69", paginaPdf: 67, video: "https://youtu.be/yjD-6vHcFMg?si=CKYMI0UKIj9GIOjr" },
        { dia: 15, titulo: "Chefe da Sagrada Família", paginas: "71-72", paginaPdf: 71, video: "https://youtu.be/RvQZMCgXV50?si=b1Zfojz4yxRLJqVH" },
        { dia: 16, titulo: "José Justíssimo", paginas: "73-75", paginaPdf: 73, video: "https://youtu.be/Up3Epb2B3ck?si=Gu2UNn8VLIUzg3i0" },
        { dia: 17, titulo: "José Castíssimo", paginas: "77-78", paginaPdf: 77, video: "https://youtu.be/SpaOD7TDXTo?si=Q9wojP_SgqPBHb-p" },
        { dia: 18, titulo: "José Prudentíssimo", paginas: "79-81", paginaPdf: 79, video: "https://youtu.be/4bRzlotHG8s?si=0ix69kcjiwNRRJ-x" },
        { dia: 19, titulo: "José Fortíssimo", paginas: "83-85", paginaPdf: 83, video: "https://youtu.be/gVS_IWAiFOU?si=efvUu7IDogpBmQk6" },
        { dia: 20, titulo: "José Obedientíssimo", paginas: "87-88", paginaPdf: 87, video: "https://youtu.be/Uu1YHtagM54?si=6SCIdYyguN3EWGKt" },
        { dia: 21, titulo: "José Fidelíssimo", paginas: "91-92", paginaPdf: 91, video: "https://youtu.be/F9UnjYhXBUw?si=WKA8fYMyH60cJ-oz" },
        { dia: 22, titulo: "Espelho de Paciência", paginas: "93-95", paginaPdf: 93, video: "https://youtu.be/FLrGFJoTDow?si=ivULePpIUx4JJcha" },
        { dia: 23, titulo: "Amante da Pobreza", paginas: "97-99", paginaPdf: 97, video: "https://youtu.be/YKVijyMWY7s?si=F1XJ52U1qORfFoEv" },
        { dia: 24, titulo: "Modelo dos trabalhadores", paginas: "101-103", paginaPdf: 101, video: "https://youtu.be/fGZ8_mPyPUQ?si=V9_Wh23Gc837RJot" },
        { dia: 25, titulo: "Honra da vida de família", paginas: "105-106", paginaPdf: 105, video: "https://youtu.be/2msN0ElyMic?si=vluCiKZ1Ax3O20q4" },
        { dia: 26, titulo: "Guarda das Virgens", paginas: "107-109", paginaPdf: 107, video: "https://youtu.be/tm_WYSJWGgI?si=sJ33PFBuGQL11vtP" },
        { dia: 27, titulo: "Sustentáculo das Famílias", paginas: "111-113", paginaPdf: 111, video: "https://youtu.be/0pL7ooT5YD4?si=h3BjzMjqan26L2k8" },
        { dia: 28, titulo: "Alívio dos miseráveis", paginas: "115-117", paginaPdf: 115, video: "https://youtu.be/ekEPW4k5vHc?si=bGCldBp7gzrIw-k3" },
        { dia: 29, titulo: "Esperança dos Doentes", paginas: "119-120", paginaPdf: 119, video: "https://youtu.be/PQLrxEQzK98?si=NSbSDNOqKXteUYAq" },
        { dia: 30, titulo: "Patrono dos moribundos", paginas: "121-123", paginaPdf: 121, video: "https://youtu.be/g-sUpYeTi-g?si=Pv8Li_Wl1CYSY7wD" },
        { dia: 31, titulo: "Terror dos demônios", paginas: "125-127", paginaPdf: 125, video: "https://youtu.be/W9960fzskng?si=13psTBULuIL51GBB" },
        { dia: 32, titulo: "Protetor da Santa Igreja", paginas: "129-131", paginaPdf: 129, video: "https://youtu.be/dPE8-alpwFE?si=xlEdlC2KL6cwgb4k" },
        { dia: 33, titulo: "Dia da Consagração", paginas: "133-135", paginaPdf: 133, video: "https://youtu.be/bWSkt73pwqo" },
    ];

    return (
        <div className="space-y-8">
            <div className="text-center mb-8">
                <h2 className="text-4xl font-bold text-green-900 dark:text-green-100 mb-4">
                    33 Dias de Consagração a São José
                </h2>
                <p className="text-lg text-slate-700 dark:text-slate-300 max-w-3xl mx-auto">
                    Baseado no livro do Padre Donald Calloway
                </p>
            </div>

            {/* O que é a Consagração */}
            <Card className="border-green-300 shadow-lg">
                <CardHeader className="bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/40 dark:to-emerald-900/40">
                    <CardTitle className="text-2xl text-green-900 dark:text-green-100">
                        🟤 O que é a Consagração?
                    </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                        A Consagração significa que você reconhece São José como seu pai espiritual e que você quer tornar-se como ele. Para o realizar, você confia inteiramente em seu cuidado paternal, para que São José possa lhe conferir virtudes e torná-lo santo, guiando-o para Deus.
                    </p>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                        Todos que se consagraram a São José buscam tornar-se o mais próximo possível de seu pai espiritual, ao ponto de assemelhar-se a ele por sua virtude e santidade. São José, em retorno, dará aos seus consagrados sua atenção total, proteção e direção.
                    </p>
                    <div className="mt-6 p-4 bg-emerald-50 dark:bg-emerald-950/30 border-l-4 border-emerald-500 rounded">
                        <p className="font-semibold text-emerald-900 dark:text-emerald-100 mb-2">
                            📖 Livro que usaremos:
                        </p>
                        <p className="text-slate-700 dark:text-slate-300">
                            Consagração a São José - Padre Donald Calloway
                        </p>
                    </div>
                </CardContent>
            </Card>

            {/* Dias da Consagração */}
            <div ref={consagracaoContentRef}>
                <Card className="border-green-200 shadow-lg">
                    <CardHeader className="bg-green-50 dark:bg-green-950/20">
                        <CardTitle className="text-2xl text-green-800 dark:text-green-200">
                            Os 33 Dias de Preparação
                        </CardTitle>
                        <CardDescription>Clique em cada dia para ver as leituras e orações</CardDescription>
                    </CardHeader>
                    <CardContent className="pt-6">
                        <Tabs defaultValue="dia-1" className="w-full" onValueChange={scrollToContent}>
                            <ScrollArea className="w-full whitespace-nowrap rounded-md border bg-white dark:bg-slate-900 p-1 mb-6">
                                <TabsList className="flex w-full h-auto p-0 bg-transparent flex-wrap">
                                    {diasConsagracao.map((diaInfo) => (
                                        <TabsTrigger
                                            key={diaInfo.dia}
                                            value={`dia-${diaInfo.dia}`}
                                            className="min-w-[80px] py-2 px-3 data-[state=active]:bg-green-100 data-[state=active]:text-green-900 dark:data-[state=active]:bg-green-900/40 dark:data-[state=active]:text-green-100 rounded-md transition-all m-1"
                                        >
                                            Dia {diaInfo.dia}
                                        </TabsTrigger>
                                    ))}
                                </TabsList>
                            </ScrollArea>

                            {diasConsagracao.map((diaInfo) => (
                                <TabsContent key={diaInfo.dia} value={`dia-${diaInfo.dia}`}>
                                    <ConsagracaoDayCard
                                        day={`${diaInfo.dia}º Dia`}
                                        title={diaInfo.titulo}
                                        reading={`Páginas ${diaInfo.paginas}`}
                                        paginaPdf={diaInfo.paginaPdf}
                                        videoUrl={diaInfo.video}
                                        content={
                                            <>
                                                <p className="mb-4">⚜️ Faça a oração do Vinde Espírito Santo</p>
                                                <p className="mb-4">⚜️ Leitura das páginas {diaInfo.paginas}</p>
                                                <p className="mb-4">⚜️ Ladainha de São José</p>

                                                {diaInfo.dia === 2 && (
                                                    <div className="mt-6 p-4 bg-green-50 dark:bg-green-950/30 rounded-lg">
                                                        <p className="font-bold mb-2">⚜️ Memorare a São José</p>
                                                        <p className="italic text-sm">
                                                            Lembrai-vos, ó castíssimo Esposo da Virgem Maria, que nunca se ouviu dizer que algum daqueles que têm recorrido à vossa proteção, implorado a vossa assistência e reclamado vosso socorro, fosse por vós desamparado. Animado, pois, com igual confiança, a vós recorro, ó pai espiritual, e imploro a vossa proteção. Não rejeiteis as minhas súplicas, ó pai adotivo do Redentor, mas dignai-vos de as ouvir propiciamente e de me alcançar o que vos rogo. Amém.
                                                        </p>
                                                    </div>
                                                )}

                                                {diaInfo.dia === 33 && (
                                                    <div className="mt-6 p-6 bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/40 dark:to-emerald-900/40 rounded-lg border-2 border-green-400">
                                                        <p className="font-bold text-xl mb-4 text-green-900 dark:text-green-100">
                                                            🎉 Dia da Consagração
                                                        </p>
                                                        <p className="mb-4 text-slate-700 dark:text-slate-300">
                                                            Você conseguiu! Hoje será a sua consagração total a São José.
                                                        </p>
                                                        <p className="mb-4 text-slate-700 dark:text-slate-300">
                                                            Um programa completo de consagração a São José há muito vem sendo preparado. Foram séculos até que a arma secreta da consagração a São José fosse desenvolvida. Agora ela é revelada e você foi escolhido por Deus para receber uma enorme bênção em sua vida espiritual.
                                                        </p>
                                                        <p className="font-semibold text-green-800 dark:text-green-300 mb-2">
                                                            Reze o Ato de Consagração a São José (p. 315)
                                                        </p>
                                                        <a
                                                            href="https://drive.google.com/file/d/1vj1OWZ6I1MvoBaTjfdk922LnuTu57Ruj/view?usp=sharing"
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="inline-block mt-4"
                                                        >
                                                            <Button className="bg-green-700 hover:bg-green-800">
                                                                <Download className="mr-2 h-4 w-4" />
                                                                Baixar Ato de Consagração
                                                            </Button>
                                                        </a>
                                                    </div>
                                                )}
                                            </>
                                        }
                                    />
                                </TabsContent>
                            ))}
                        </Tabs>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}

// Componente da Ladainha de São José (expansível)
function LadainhaSaoJose() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Collapsible open={isOpen} onOpenChange={setIsOpen} className="mt-6">
            <CollapsibleTrigger asChild>
                <Button
                    variant="outline"
                    className="w-full justify-between bg-green-50 hover:bg-green-100 dark:bg-green-950/30 dark:hover:bg-green-950/50 border-green-300 dark:border-green-700"
                >
                    <span className="font-semibold text-green-800 dark:text-green-300">
                        📿 Ladainha de São José
                    </span>
                    <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                </Button>
            </CollapsibleTrigger>
            <CollapsibleContent className="mt-4 p-4 bg-green-50/50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
                <div className="text-slate-700 dark:text-slate-300 leading-relaxed space-y-2 text-sm">
                    <p>Senhor, tende piedade de nós. <span className="italic text-green-700 dark:text-green-400">Jesus Cristo, tende piedade de nós.</span> Senhor, tende piedade de nós.</p>
                    <p>Jesus Cristo, ouvi-nos. <span className="italic text-green-700 dark:text-green-400">Jesus Cristo, atendei-nos.</span></p>

                    <Separator className="my-3" />

                    <p>Deus, Pai dos Céus, <span className="italic">tende piedade de nós.</span></p>
                    <p>Deus Filho, Redentor do mundo, <span className="italic">tende piedade de nós.</span></p>
                    <p>Deus Espírito Santo, <span className="italic">tende piedade de nós.</span></p>
                    <p>Santíssima Trindade, que sois um só Deus, <span className="italic">tende piedade de nós.</span></p>

                    <Separator className="my-3" />

                    <div className="grid md:grid-cols-2 gap-2">
                        <p>Santa Maria, <span className="italic">rogai por nós.</span></p>
                        <p>São José, <span className="italic">rogai por nós.</span></p>
                        <p>Ilustre filho de Davi, <span className="italic">rogai por nós.</span></p>
                        <p>Luz dos Patriarcas, <span className="italic">rogai por nós.</span></p>
                        <p>Esposo da Mãe de Deus, <span className="italic">rogai por nós.</span></p>
                        <p>Casto guarda da Virgem, <span className="italic">rogai por nós.</span></p>
                        <p>Sustentador do Filho de Deus, <span className="italic">rogai por nós.</span></p>
                        <p>Zeloso defensor de Jesus Cristo, <span className="italic">rogai por nós.</span></p>
                        <p>Chefe da Sagrada Família, <span className="italic">rogai por nós.</span></p>
                        <p>José justíssimo, <span className="italic">rogai por nós.</span></p>
                        <p>José castíssimo, <span className="italic">rogai por nós.</span></p>
                        <p>José prudentíssimo, <span className="italic">rogai por nós.</span></p>
                        <p>José fortíssimo, <span className="italic">rogai por nós.</span></p>
                        <p>José obedientíssimo, <span className="italic">rogai por nós.</span></p>
                        <p>José fidelíssimo, <span className="italic">rogai por nós.</span></p>
                        <p>Espelho de paciência, <span className="italic">rogai por nós.</span></p>
                        <p>Amante da pobreza, <span className="italic">rogai por nós.</span></p>
                        <p>Modelo dos operários, <span className="italic">rogai por nós.</span></p>
                        <p>Honra da vida de família, <span className="italic">rogai por nós.</span></p>
                        <p>Guarda das virgens, <span className="italic">rogai por nós.</span></p>
                        <p>Sustentáculo das famílias, <span className="italic">rogai por nós.</span></p>
                        <p>Alívio dos miseráveis, <span className="italic">rogai por nós.</span></p>
                        <p>Esperança dos doentes, <span className="italic">rogai por nós.</span></p>
                        <p>Patrono dos moribundos, <span className="italic">rogai por nós.</span></p>
                        <p className="font-bold text-green-800 dark:text-green-300">Terror dos demônios, <span className="italic">rogai por nós.</span></p>
                        <p>Protetor da Santa Igreja, <span className="italic">rogai por nós.</span></p>
                    </div>

                    <Separator className="my-3" />

                    <p>Cordeiro de Deus, que tirais o pecado do mundo, <span className="italic">perdoai-nos, Senhor.</span></p>
                    <p>Cordeiro de Deus, que tirais o pecado do mundo, <span className="italic">atendei-nos, Senhor.</span></p>
                    <p>Cordeiro de Deus, que tirais o pecado do mundo, <span className="italic">tende piedade de nós.</span></p>

                    <Separator className="my-3" />

                    <p className="font-semibold">V. Ele constituiu-o senhor da sua casa.</p>
                    <p className="font-semibold">R. E fê-lo príncipe de todos os seus bens.</p>

                    <div className="mt-4 p-3 bg-green-100 dark:bg-green-950/40 rounded-lg">
                        <p className="font-bold mb-2">Oremos:</p>
                        <p>Ó Deus, que por inefável providência Vos dignastes escolher a São José por esposo de vossa Mãe Santíssima; concedei-nos, Vo-lo pedimos, que mereçamos ter por intercessor no Céu, aquele que veneramos na Terra como protetor. Vós que viveis e reinais por todos os séculos dos séculos. Amém.</p>
                    </div>
                </div>
            </CollapsibleContent>
        </Collapsible>
    );
}

function ConsagracaoDayCard({
    day,
    title,
    reading,
    paginaPdf,
    videoUrl,
    content
}: {
    day: string;
    title: string;
    reading: string;
    paginaPdf?: number;
    videoUrl?: string;
    content: React.ReactNode;
}) {
    const videoId = videoUrl ? getYouTubeVideoId(videoUrl) : null;
    const pdfUrl = paginaPdf
        ? `https://drive.google.com/file/d/1Knev27Ne-BgYV4cdQk11Yx__ZQo2D5da/view#page=${paginaPdf}`
        : null;


    return (
        <Card className="border-none shadow-md bg-white dark:bg-slate-900">
            <CardHeader className="pb-2">
                <CardTitle className="text-2xl text-green-700 dark:text-green-400">{day}</CardTitle>
                <CardDescription className="text-lg">{title}</CardDescription>
            </CardHeader>
            <CardContent className="text-slate-700 dark:text-slate-300 leading-relaxed">
                <div className="mb-4 p-3 bg-blue-50 dark:bg-blue-950/30 rounded border-l-4 border-blue-500">
                    <div className="flex items-center justify-between flex-wrap gap-2">
                        <p className="text-sm font-semibold text-blue-900 dark:text-blue-100">
                            📖 {reading}
                        </p>
                        {pdfUrl && (
                            <a
                                href={encodeURI(pdfUrl)}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 text-xs font-medium text-blue-700 hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-200 underline transition-colors hover:scale-105"
                                title="Clique para visualizar esta página no PDF"
                            >
                                <ExternalLink className="h-3 w-3" />
                                📖 Ver no PDF
                            </a>
                        )}
                    </div>
                </div>

                {content}

                {videoId && (
                    <div className="mt-6">
                        <p className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3 flex items-center gap-2">
                            <Video className="h-4 w-4 text-red-600" />
                            Vídeo do dia:
                        </p>
                        <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-lg border-2 border-slate-200 dark:border-slate-700">
                            <iframe
                                src={`https://www.youtube.com/embed/${videoId}`}
                                title={`Vídeo - ${day}`}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="absolute top-0 left-0 w-full h-full"
                            ></iframe>
                        </div>
                    </div>
                )}

                <Separator className="my-6" />

                <LadainhaSaoJose />
            </CardContent>
        </Card>
    );
}
