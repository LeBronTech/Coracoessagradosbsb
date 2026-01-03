"use client";

import React, { useState, useRef } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { ChevronLeft, Download, MessageCircle, BookOpen, Video, Heart } from "lucide-react";
import Link from "next/link";

export default function SaoJosePage() {
    const [activeSection, setActiveSection] = useState<"novenas" | "consagracao">("novenas");
    const consagracaoContentRef = useRef<HTMLDivElement>(null);

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
                        onClick={() => setActiveSection("consagracao")}
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
                                    href="https://drive.google.com/file/d/1Knev27Ne-BgYV4cdQk11Yx__ZQo2D5da/view?usp=drive_link"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 p-4 bg-white dark:bg-slate-800 rounded-lg border-2 border-green-200 hover:border-green-400 hover:shadow-md transition-all"
                                >
                                    <BookOpen className="h-8 w-8 text-green-600" />
                                    <div>
                                        <p className="font-semibold text-green-900 dark:text-green-100">Livro de Consagração (PDF)</p>
                                        <p className="text-sm text-slate-600 dark:text-slate-400">Padre Donald Calloway</p>
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

// Component for Consagração Section
function ConsagracaoSaoJose({ consagracaoContentRef, scrollToContent }: { consagracaoContentRef: React.RefObject<HTMLDivElement>; scrollToContent: () => void }) {
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
                                    {Array.from({ length: 33 }).map((_, i) => (
                                        <TabsTrigger
                                            key={i}
                                            value={`dia-${i + 1}`}
                                            className="min-w-[80px] py-2 px-3 data-[state=active]:bg-green-100 data-[state=active]:text-green-900 dark:data-[state=active]:bg-green-900/40 dark:data-[state=active]:text-green-100 rounded-md transition-all m-1"
                                        >
                                            Dia {i + 1}
                                        </TabsTrigger>
                                    ))}
                                </TabsList>
                            </ScrollArea>

                            <TabsContent value="dia-1">
                                <ConsagracaoDayCard
                                    day="1º Dia"
                                    title="Por que uma consagração a São José?"
                                    reading="Páginas 27-28"
                                    videoUrl="https://youtu.be/SlYCkv2V3GM?si=Geizwd3WCbjrJyMc"
                                    content={
                                        <>
                                            <p className="mb-4">⚜️ Faça a oração do Vinde Espírito Santo</p>
                                            <p className="mb-4">⚜️ Leitura das páginas 27-28</p>
                                            <p className="font-semibold text-green-800 dark:text-green-300">
                                                Refletimos hoje o porquê dessa consagração.
                                            </p>
                                        </>
                                    }
                                />
                            </TabsContent>

                            <TabsContent value="dia-2">
                                <ConsagracaoDayCard
                                    day="2º Dia"
                                    title="Ladainha de São José"
                                    reading="Páginas 29-31"
                                    videoUrl="https://youtu.be/oFKZPoaoFf0?si=7iqLnBzhCKZO-gLT"
                                    content={
                                        <>
                                            <p className="mb-4">⚜️ Faça a oração do Vinde Espírito Santo</p>
                                            <p className="mb-4">⚜️ Leitura das páginas 29-31</p>
                                            <p className="mb-4">⚜️ Ladainha de São José (veja acima na seção de Novenas)</p>

                                            <div className="mt-6 p-4 bg-green-50 dark:bg-green-950/30 rounded-lg">
                                                <p className="font-bold mb-2">⚜️ Memorare a São José</p>
                                                <p className="italic">
                                                    Lembrai-vos, ó castíssimo Esposo da Virgem Maria, que nunca se ouviu dizer que algum daqueles que têm recorrido à vossa proteção, implorado a vossa assistência e reclamado vosso socorro, fosse por vós desamparado. Animado, pois, com igual confiança, a vós recorro, ó pai espiritual, e imploro a vossa proteção. Não rejeiteis as minhas súplicas, ó pai adotivo do Redentor, mas dignai-vos de as ouvir propiciamente e de me alcançar o que vos rogo. Amém.
                                                </p>
                                            </div>
                                        </>
                                    }
                                />
                            </TabsContent>

                            <TabsContent value="dia-33">
                                <ConsagracaoDayCard
                                    day="33º Dia"
                                    title="Dia da Consagração"
                                    reading="Páginas 133-135"
                                    videoUrl="https://youtu.be/bWSkt73pwqo"
                                    content={
                                        <>
                                            <p className="mb-4">⚜️ Faça a oração do Vinde Espírito Santo</p>
                                            <p className="mb-4">⚜️ Leitura das páginas 133-135</p>
                                            <p className="mb-4">⚜️ Ladainha de São José</p>

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
                                        </>
                                    }
                                />
                            </TabsContent>
                        </Tabs>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}

function ConsagracaoDayCard({
    day,
    title,
    reading,
    videoUrl,
    content
}: {
    day: string;
    title: string;
    reading: string;
    videoUrl?: string;
    content: React.ReactNode;
}) {
    return (
        <Card className="border-none shadow-md bg-white dark:bg-slate-900">
            <CardHeader className="pb-2">
                <CardTitle className="text-2xl text-green-700 dark:text-green-400">{day}</CardTitle>
                <CardDescription className="text-lg">{title}</CardDescription>
            </CardHeader>
            <CardContent className="text-slate-700 dark:text-slate-300 leading-relaxed">
                <div className="mb-4 p-3 bg-blue-50 dark:bg-blue-950/30 rounded border-l-4 border-blue-500">
                    <p className="text-sm font-semibold text-blue-900 dark:text-blue-100">
                        📖 {reading}
                    </p>
                </div>

                {content}

                {videoUrl && (
                    <div className="mt-6">
                        <a
                            href={videoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-red-600 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300 font-medium"
                        >
                            <Video className="h-5 w-5" />
                            Assistir vídeo do dia
                        </a>
                    </div>
                )}

                <Separator className="my-6" />
                <p className="text-sm text-slate-500 italic text-center">
                    Após as leituras, rezar a Ladainha de São José
                </p>
            </CardContent>
        </Card>
    );
}
