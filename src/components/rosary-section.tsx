"use client";

import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronDown, ChevronUp, BookOpen } from "lucide-react";

interface Mystery {
    name: string;
    day: string;
    color: string;
    number: number;
    offering: string;
    grace: string;
}

export function RosarySection() {
    const [expandedSection, setExpandedSection] = useState<string | null>(null);
    const [selectedMystery, setSelectedMystery] = useState<string | null>(null);

    const mysteries: Mystery[] = [
        {
            name: "Mistérios Gozosos",
            day: "Segundas-feiras e Sábados",
            color: "from-yellow-50 to-amber-50 dark:from-yellow-950/20 dark:to-amber-950/20 border-yellow-200",
            number: 1,
            offering: "Nós vos oferecemos, Senhor Jesus, esta primeira dezena, em honra a vossa Encarnação no seio de Maria; e vos pedimos, por esse mistério, e por sua intercessão uma profunda humildade.",
            grace: "Graças ao mistério da Encarnação, descei em nossas almas."
        },
        {
            name: "Mistérios Gozosos",
            day: "Segundas-feiras e Sábados",
            color: "from-yellow-50 to-amber-50 dark:from-yellow-950/20 dark:to-amber-950/20 border-yellow-200",
            number: 2,
            offering: "Nos vos oferecemos, Senhor Jesus, esta segunda dezena, em honra da visitação de vossa santa Mãe à sua prima santa Isabel e da santificação de São João Batista; e vos pedimos, por esse mistério e pela intercessão de vossa Mãe Santíssima, a caridade para com o nosso próximo.",
            grace: "Graças ao mistério da visitação, descei em nossas almas."
        },
        {
            name: "Mistérios Gozosos",
            day: "Segundas-feiras e Sábados",
            color: "from-yellow-50 to-amber-50 dark:from-yellow-950/20 dark:to-amber-950/20 border-yellow-200",
            number: 3,
            offering: "Nós vos oferecemos, Senhor Jesus, esta terceira dezena, em honra ao vosso nascimento no estábulo de Belém; e vos pedimos, por este mistério e pela intercessão de vossa Mãe Santíssima, o desapego dos bens terrenos e ao amor a pobreza.",
            grace: "Graças ao mistério do nascimento de Jesus, descei em nossas almas."
        },
        {
            name: "Mistérios Gozosos",
            day: "Segundas-feiras e Sábados",
            color: "from-yellow-50 to-amber-50 dark:from-yellow-950/20 dark:to-amber-950/20 border-yellow-200",
            number: 4,
            offering: "Nós vos oferecemos, Senhor Jesus, esta quarta dezena, em honra a vossa apresentação ao templo, e da purificação de Maria; e vos pedimos, por este mistério e por sua intercessão, uma grande pureza de corpo de alma.",
            grace: "Graças ao mistério da purificação descei, descei em nossas almas."
        },
        {
            name: "Mistérios Gozosos",
            day: "Segundas-feiras e Sábados",
            color: "from-yellow-50 to-amber-50 dark:from-yellow-950/20 dark:to-amber-950/20 border-yellow-200",
            number: 5,
            offering: "Nós vos oferecemos, Senhor Jesus, esta quinta dezena, em honra ao vosso reencontro por Maria; e vos pedimos, por este mistério; e por sua intercessão, a verdadeira sabedoria.",
            grace: "Graças ao mistério do reencontro de Jesus, descei em nossas almas."
        },
        // Luminosos
        {
            name: "Mistérios Luminosos",
            day: "Quintas-feiras",
            color: "from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20 border-cyan-200",
            number: 1,
            offering: "Nós vos oferecemos, Senhor Jesus, esta primeira dezena, em honra de Vosso Batismo no Rio Jordão; e Vos pedimos, por este mistério e pela intercessão de Vossa Mãe Santíssima, a graça de vivermos a radicalidade de nosso batismo.",
            grace: "Graças ao Mistério do Batismo de Jesus, descei em nossas almas."
        },
        {
            name: "Mistérios Luminosos",
            day: "Quintas-feiras",
            color: "from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20 border-cyan-200",
            number: 2,
            offering: "Nós vos oferecemos, Senhor Jesus, esta segunda dezena, em honra de Vossa Auto-revelação nas Bodas de Caná e da ordem de Vossa Mãe Santíssima; e Vos pedimos, por este mistério e por sua intercessão, a graça de vivermos segundo à Vossa vontade.",
            grace: "Graças ao Mistério da auto-revelação, descei em nossas almas."
        },
        {
            name: "Mistérios Luminosos",
            day: "Quintas-feiras",
            color: "from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20 border-cyan-200",
            number: 3,
            offering: "Nós vos oferecemos, Senhor Jesus, esta terceira dezena, em honra da pregação do Evangelho e o chamado à conversão; e Vos pedimos, por este mistério e pela intercessão de Vossa Mãe Santíssima, a graça de vivermos as virtudes evangélicas da pobreza, da castidade e da obediência.",
            grace: "Graças ao Mistério da pregação do Evangelho, descei em nossas almas."
        },
        {
            name: "Mistérios Luminosos",
            day: "Quintas-feiras",
            color: "from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20 border-cyan-200",
            number: 4,
            offering: "Nós vos oferecemos, Senhor Jesus, esta quarta dezena, em honra de Vossa Transfiguração no Monte Tabor; e vos pedimos, por este mistério e pela intercessão de Vossa Mãe Santíssima, a graça de nos transfigurarmos à Vossa imagem.",
            grace: "Graças ao Mistério da Transfiguração, descei em nossas almas."
        },
        {
            name: "Mistérios Luminosos",
            day: "Quintas-feiras",
            color: "from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20 border-cyan-200",
            number: 5,
            offering: "Nós Vos oferecemos, Senhor Jesus, esta quinta dezena, em honra á instituição da Sagrada Eucaristia; e vos pedimos, por este mistério e pela intercessão de Vossa Mãe Santíssima, a graça de honrar-Vos e adorar-Vos de maneira sublime no Santíssimo Sacramento do Altar.",
            grace: "Graças ao mistério da instituição da Eucaristia, descei em nossas almas."
        },
        // Dolorosos
        {
            name: "Mistérios Dolorosos",
            day: "Terças e Sextas-feiras",
            color: "from-purple-50 to-violet-50 dark:from-purple-950/20 dark:to-violet-950/20 border-purple-200",
            number: 6,
            offering: "Nós vos oferecemos, Senhor Jesus, esta sexta dezena, em honra a vossa agonia mortal no Jardim das Oliveiras; e vos pedimos, por este mistério e pela intercessão de vossa Mãe Santíssima, a contrição de nossos pecados.",
            grace: "Graças ao mistério da agonia de Jesus, descei em nossas almas."
        },
        {
            name: "Mistérios Dolorosos",
            day: "Terças e Sextas-feiras",
            color: "from-purple-50 to-violet-50 dark:from-purple-950/20 dark:to-violet-950/20 border-purple-200",
            number: 7,
            offering: "Nós vos oferecemos, Senhor Jesus, esta sétima dezena, em honra a vossa sangrenta flagelação; e vos pedimos, por este mistério e pela intercessão de vossa Mãe santíssima, a mortificação de nossos sentidos.",
            grace: "Graças ao mistério da flagelação de Jesus, descei em nossas almas."
        },
        {
            name: "Mistérios Dolorosos",
            day: "Terças e Sextas-feiras",
            color: "from-purple-50 to-violet-50 dark:from-purple-950/20 dark:to-violet-950/20 border-purple-200",
            number: 8,
            offering: "Nós vos oferecemos, Senhor Jesus, esta oitava dezena, em honra de vossa coroação de espinhos; e vos pedimos por este mistério e pela intercessão de vossa Mãe Santíssima, o desprezo do mundo.",
            grace: "Graças ao mistério da coroação de espinhos, descei em nossas almas."
        },
        {
            name: "Mistérios Dolorosos",
            day: "Terças e Sextas-feiras",
            color: "from-purple-50 to-violet-50 dark:from-purple-950/20 dark:to-violet-950/20 border-purple-200",
            number: 9,
            offering: "Nós vos oferecemos, Senhor Jesus, esta nona dezena, em honra do carregamento da Cruz; e vos pedimos, por este mistério e pela intercessão de vossa Mãe Santíssima, a paciência em todas as nossas cruzes.",
            grace: "Graças ao mistério do carregamento da cruz, descei em nossas almas."
        },
        {
            name: "Mistérios Dolorosos",
            day: "Terças e Sextas-feiras",
            color: "from-purple-50 to-violet-50 dark:from-purple-950/20 dark:to-violet-950/20 border-purple-200",
            number: 10,
            offering: "Nós vos oferecemos, Senhor Jesus, esta décima dezena, em honra a vossa crucificação e morte ignominiosa sobre o calvário; e vos pedimos por este mistério e pela intercessão de vossa Mãe Santíssima, a conversão dos pecadores, a perseverança dos justos e o alívio das almas do purgatório.",
            grace: "Graças ao mistério da crucificação de Jesus descei em nossas almas."
        },
        // Gloriosos
        {
            name: "Mistérios Gloriosos",
            day: "Quartas-feiras, Sábados e Domingos",
            color: "from-rose-50 to-pink-50 dark:from-rose-950/20 dark:to-pink-950/20 border-rose-200",
            number: 11,
            offering: "Nós vos oferecemos, Senhor Jesus, esta undécima dezena, em honra a vossa ressurreição gloriosa; e vos pedimos, por este mistério e pela intercessão de vossa Mãe Santíssima, o amor a Deus e o fervor ao vosso serviço.",
            grace: "Graças ao mistério da ressurreição, descei em nossas almas."
        },
        {
            name: "Mistérios Gloriosos",
            day: "Quartas-feiras, Sábados e Domingos",
            color: "from-rose-50 to-pink-50 dark:from-rose-950/20 dark:to-pink-950/20 border-rose-200",
            number: 12,
            offering: "Nós vos oferecemos, Senhor Jesus, esta duodécima dezena, em honra a vossa triunfante ascensão; e vos pedimos, por este mistério e pela intercessão de vossa Mãe Santíssima, um ardente desejo do céu, nossa cara pátria.",
            grace: "Graças ao mistério da ascensão descei, em nossas almas."
        },
        {
            name: "Mistérios Gloriosos",
            day: "Quartas-feiras, Sábados e Domingos",
            color: "from-rose-50 to-pink-50 dark:from-rose-950/20 dark:to-pink-950/20 border-rose-200",
            number: 13,
            offering: "Nós vos oferecemos, Senhor Jesus, esta décima terceira dezena, em honra do mistério de Pentecostes; e vos pedimos, por este mistério e pela intercessão de vossa Mãe Santíssima, a descida do Espírito Santo em nossas almas.",
            grace: "Graças ao mistério de Pentecostes, descei em nossas almas."
        },
        {
            name: "Mistérios Gloriosos",
            day: "Quartas-feiras, Sábados e Domingos",
            color: "from-rose-50 to-pink-50 dark:from-rose-950/20 dark:to-pink-950/20 border-rose-200",
            number: 14,
            offering: "Nós vos oferecemos, Senhor Jesus, esta décima quarta dezena, em honra da ressurreição e triunfal assunção de vossa Mãe ao céu; e vos pedimos, por este mistério e por sua intercessão, uma terna devoção a tão boa mãe.",
            grace: "Graças ao mistério da assunção descei em nossas almas."
        },
        {
            name: "Mistérios Gloriosos",
            day: "Quartas-feiras, Sábados e Domingos",
            color: "from-rose-50 to-pink-50 dark:from-rose-950/20 dark:to-pink-950/20 border-rose-200",
            number: 15,
            offering: "Nós vos oferecemos, Senhor Jesus esta décima quinta dezena, em honra da coroação gloriosa de vossa Mãe Santíssima no céu; e vos pedimos, por este mistério e por sua intercessão, a perseverança na graça e a coroa da glória.",
            grace: "Graças aos mistérios da coroação gloriosa de Maria, descei em nossas almas."
        }
    ];

    const toggleSection = (section: string) => {
        setExpandedSection(expandedSection === section ? null : section);
    };

    const groupedMysteries = {
        "Gozosos": mysteries.filter(m => m.name === "Mistérios Gozosos"),
        "Luminosos": mysteries.filter(m => m.name === "Mistérios Luminosos"),
        "Dolorosos": mysteries.filter(m => m.name === "Mistérios Dolorosos"),
        "Gloriosos": mysteries.filter(m => m.name === "Mistérios Gloriosos")
    };

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h2 className="text-4xl font-bold text-blue-900 dark:text-blue-100 text-center mb-6 font-brand">
                Método de São Luís de Montfort
            </h2>

            <p className="text-center text-slate-600 dark:text-slate-400 max-w-3xl mx-auto mb-8 italic">
                "Não é possível expressar quanto a Santíssima Virgem estima o Rosário sobre todas as demais devoções" - São Luís de Montfort
            </p>

            {/* Botões de Seleção */}
            <div className="flex justify-center gap-4 mb-8 flex-wrap">
                <button
                    onClick={() => toggleSection("inicio")}
                    className={`px-6 py-3 rounded-lg font-semibold transition-all ${expandedSection === "inicio"
                        ? "bg-blue-600 text-white shadow-lg scale-105"
                        : "bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-2 border-blue-200 hover:border-blue-400"
                        }`}
                >
                    <BookOpen className="inline mr-2 h-5 w-5" />
                    Como Iniciar
                </button>
                <button
                    onClick={() => toggleSection("tradicional")}
                    className={`px-6 py-3 rounded-lg font-semibold transition-all ${expandedSection === "tradicional"
                        ? "bg-blue-600 text-white shadow-lg scale-105"
                        : "bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-2 border-blue-200 hover:border-blue-400"
                        }`}
                >
                    Mistérios Tradicionais
                </button>
                <button
                    onClick={() => toggleSection("misterios")}
                    className={`px-6 py-3 rounded-lg font-semibold transition-all ${expandedSection === "misterios"
                        ? "bg-blue-600 text-white shadow-lg scale-105"
                        : "bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-2 border-blue-200 hover:border-blue-400"
                        }`}
                >
                    Método de Montfort
                </button>
                <button
                    onClick={() => toggleSection("final")}
                    className={`px-6 py-3 rounded-lg font-semibold transition-all ${expandedSection === "final"
                        ? "bg-blue-600 text-white shadow-lg scale-105"
                        : "bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-2 border-blue-200 hover:border-blue-400"
                        }`}
                >
                    Orações Finais
                </button>
            </div>

            {/* Seção: Como Iniciar */}
            {expandedSection === "inicio" && (
                <div className="space-y-6 max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-300">
                    <Card className="border-2 border-blue-200 shadow-xl bg-gradient-to-br from-blue-50 to-sky-50 dark:from-blue-950/20 dark:to-sky-950/20">
                        <CardHeader>
                            <CardTitle className="text-2xl text-blue-800 dark:text-blue-200">
                                1. Sinal da Cruz
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <p className="text-slate-700 dark:text-slate-300 leading-relaxed italic">
                                Em nome do Pai, (+) do Filho e do Espírito Santo. Amém.
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="border-2 border-blue-200 shadow-xl bg-gradient-to-br from-blue-50 to-sky-50 dark:from-blue-950/20 dark:to-sky-950/20">
                        <CardHeader>
                            <CardTitle className="text-2xl text-blue-800 dark:text-blue-200">
                                2. Oferecimento do Terço
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <p className="text-slate-700 dark:text-slate-300 leading-relaxed italic">
                                Uno-me a todos os santos que estão no Céu, a todos os justos que estão sobre a Terra, a todas as almas fiéis que estão neste lugar. Uno-me a Vós, meu Jesus, para louvar dignamente Vossa Santa Mãe, e louvar-Vos a Vós, nela e por Ela. Renuncio a todas as distrações que me vierem durante este Rosário, que quero recitar com modéstia, atenção e devoção, como se fosse o último da minha vida.
                            </p>
                            <p className="text-slate-700 dark:text-slate-300 leading-relaxed italic">
                                Nós Vos oferecemos, Trindade Santíssima, este Credo, para honrar os mistérios todos de nossa Fé; este Pater (Pai Nosso) e estas três Ave-Marias, para honrar a unidade de vossa essência e a trindade de vossas pessoas. Pedimo-Vos uma fé viva, uma esperança firme e uma caridade ardente. Assim seja.
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="border-2 border-blue-200 shadow-xl bg-gradient-to-br from-blue-50 to-sky-50 dark:from-blue-950/20 dark:to-sky-950/20">
                        <CardHeader>
                            <CardTitle className="text-2xl text-blue-800 dark:text-blue-200">
                                3. Credo (segurando a cruz)
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-slate-700 dark:text-slate-300 leading-relaxed italic">
                                Creio em Deus Pai Todo-Poderoso, criador do céu e da terra. E em Jesus Cristo, seu único Filho Nosso Senhor, o qual foi concebido pelo poder do Espírito Santo, nasceu de Maria Virgem, padeceu sob Pôncio Pilatus, foi crucificado, morto e sepultado, desceu aos infernos, ao terceiro dia ressurgiu dos mortos, subiu ao Céu, está sentado à direita de Deus Pai todo-poderoso, de onde há de vir a julgar os vivos e mortos. Creio no Espírito Santo. Na Santa Igreja Católica, na comunhão dos santos, na remissão dos pecados, na ressurreição da carne, na vida eterna. Amém.
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="border-2 border-blue-200 shadow-xl bg-gradient-to-br from-blue-50 to-sky-50 dark:from-blue-950/20 dark:to-sky-950/20">
                        <CardHeader>
                            <CardTitle className="text-2xl text-blue-800 dark:text-blue-200">
                                4. Pai Nosso e 3 Ave Marias
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div>
                                <p className="font-semibold text-blue-700 dark:text-blue-300 mb-2">1 Pai Nosso (conta grande)</p>
                                <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">Antes da primeira Ave Maria, diga:</p>
                                <p className="text-slate-700 dark:text-slate-300 italic">Louvemos a Maria, Filha bem amada do Pai Eterno.</p>
                            </div>
                            <div>
                                <p className="font-semibold text-blue-700 dark:text-blue-300 mb-2">1ª Ave Maria</p>
                                <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">Antes da segunda Ave Maria, diga:</p>
                                <p className="text-slate-700 dark:text-slate-300 italic">Louvemos a Maria, Mãe admirável de Deus Filho.</p>
                            </div>
                            <div>
                                <p className="font-semibold text-blue-700 dark:text-blue-300 mb-2">2ª Ave Maria</p>
                                <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">Antes da terceira Ave Maria, diga:</p>
                                <p className="text-slate-700 dark:text-slate-300 italic">Esposa fidelíssima de Deus Espírito Santo.</p>
                            </div>
                            <p className="font-semibold text-blue-700 dark:text-blue-300">3ª Ave Maria</p>
                        </CardContent>
                    </Card>

                    <Card className="border-2 border-blue-200 shadow-xl bg-gradient-to-br from-blue-50 to-sky-50 dark:from-blue-950/20 dark:to-sky-950/20">
                        <CardHeader>
                            <CardTitle className="text-2xl text-blue-800 dark:text-blue-200">
                                5. Glória ao Pai
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-slate-700 dark:text-slate-300 leading-relaxed italic">
                                Gloria ao Pai, ao Filho e ao Espírito Santo, assim como era no princípio, agora e sempre e por todos os séculos dos séculos, Amém.
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="border-2 border-blue-200 shadow-xl bg-gradient-to-br from-blue-50 to-sky-50 dark:from-blue-950/20 dark:to-sky-950/20">
                        <CardHeader>
                            <CardTitle className="text-2xl text-blue-800 dark:text-blue-200">
                                6. Jaculatória de Fátima
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-slate-700 dark:text-slate-300 leading-relaxed italic">
                                Ó Meu Jesus perdoai-nos, livrai-nos do fogo do inferno, levai as almas todas para o céu, principalmente as que mais precisarem.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            )}

            {/* Seção: Mistérios Tradicionais */}
            {expandedSection === "tradicional" && (
                <div className="space-y-6 max-w-5xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-300">
                    <div className="p-6 bg-gradient-to-br from-blue-50 to-sky-50 dark:from-blue-950/30 dark:to-sky-950/30 rounded-2xl border-2 border-blue-200 dark:border-blue-800 shadow-lg mb-6">
                        <h3 className="text-2xl font-bold text-blue-900 dark:text-blue-100 mb-4 text-center">
                            📅 Dias da Semana para Cada Mistério
                        </h3>
                        <div className="grid md:grid-cols-2 gap-4 text-slate-700 dark:text-slate-300">
                            <div className="p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border-l-4 border-yellow-500">
                                <strong>Mistérios Gozosos:</strong> Segundas-feiras e Sábados
                            </div>
                            <div className="p-3 bg-cyan-50 dark:bg-cyan-900/20 rounded-lg border-l-4 border-cyan-500">
                                <strong>Mistérios Luminosos:</strong> Quintas-feiras
                            </div>
                            <div className="p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg border-l-4 border-purple-500">
                                <strong>Mistérios Dolorosos:</strong> Terças e Sextas-feiras
                            </div>
                            <div className="p-3 bg-rose-50 dark:bg-rose-900/20 rounded-lg border-l-4 border-rose-500">
                                <strong>Mistérios Gloriosos:</strong> Quartas-feiras e Domingos
                            </div>
                        </div>
                    </div>

                    {/* Gozosos */}
                    <Card className="border-2 border-yellow-200 shadow-xl bg-gradient-to-br from-yellow-50 to-amber-50 dark:from-yellow-950/20 dark:to-amber-950/20">
                        <CardHeader className="bg-yellow-100/50 dark:bg-yellow-900/20">
                            <CardTitle className="text-2xl text-yellow-900 dark:text-yellow-100">
                                Mistérios Gozosos
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="pt-6 space-y-4">
                            <div className="space-y-3">
                                <div className="p-4 bg-white dark:bg-slate-800 rounded-lg">
                                    <h4 className="font-bold text-yellow-900 dark:text-yellow-100 mb-2">1. A Anunciação do Anjo à Virgem Maria</h4>
                                    <p className="text-sm text-slate-600 dark:text-slate-400">Lucas 1, 26-38</p>
                                </div>
                                <div className="p-4 bg-white dark:bg-slate-800 rounded-lg">
                                    <h4 className="font-bold text-yellow-900 dark:text-yellow-100 mb-2">2. A Visita de Maria a Santa Isabel</h4>
                                    <p className="text-sm text-slate-600 dark:text-slate-400">Lucas 1, 39-56</p>
                                </div>
                                <div className="p-4 bg-white dark:bg-slate-800 rounded-lg">
                                    <h4 className="font-bold text-yellow-900 dark:text-yellow-100 mb-2">3. O Nascimento de Jesus em Belém</h4>
                                    <p className="text-sm text-slate-600 dark:text-slate-400">Lucas 2, 6-20</p>
                                </div>
                                <div className="p-4 bg-white dark:bg-slate-800 rounded-lg">
                                    <h4 className="font-bold text-yellow-900 dark:text-yellow-100 mb-2">4. A Apresentação de Jesus no Templo</h4>
                                    <p className="text-sm text-slate-600 dark:text-slate-400">Lucas 2, 22-39</p>
                                </div>
                                <div className="p-4 bg-white dark:bg-slate-800 rounded-lg">
                                    <h4 className="font-bold text-yellow-900 dark:text-yellow-100 mb-2">5. A Perda e Encontro de Jesus no Templo</h4>
                                    <p className="text-sm text-slate-600 dark:text-slate-400">Lucas 2, 41-51</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Luminosos */}
                    <Card className="border-2 border-cyan-200 shadow-xl bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20">
                        <CardHeader className="bg-cyan-100/50 dark:bg-cyan-900/20">
                            <CardTitle className="text-2xl text-cyan-900 dark:text-cyan-100">
                                Mistérios Luminosos
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="pt-6 space-y-4">
                            <div className="space-y-3">
                                <div className="p-4 bg-white dark:bg-slate-800 rounded-lg">
                                    <h4 className="font-bold text-cyan-900 dark:text-cyan-100 mb-2">1. O Batismo de Jesus no Jordão</h4>
                                    <p className="text-sm text-slate-600 dark:text-slate-400">Mateus 3, 13-17; Marcos 1, 9-11; Lucas 3, 21-22</p>
                                </div>
                                <div className="p-4 bg-white dark:bg-slate-800 rounded-lg">
                                    <h4 className="font-bold text-cyan-900 dark:text-cyan-100 mb-2">2. A Autorrevelação de Jesus nas Bodas de Caná</h4>
                                    <p className="text-sm text-slate-600 dark:text-slate-400">João 2, 1-12</p>
                                </div>
                                <div className="p-4 bg-white dark:bg-slate-800 rounded-lg">
                                    <h4 className="font-bold text-cyan-900 dark:text-cyan-100 mb-2">3. O Anúncio do Reino de Deus e Convite à Conversão</h4>
                                    <p className="text-sm text-slate-600 dark:text-slate-400">Mateus 4, 17; Marcos 1, 14-15</p>
                                </div>
                                <div className="p-4 bg-white dark:bg-slate-800 rounded-lg">
                                    <h4 className="font-bold text-cyan-900 dark:text-cyan-100 mb-2">4. A Transfiguração de Jesus no Tabor</h4>
                                    <p className="text-sm text-slate-600 dark:text-slate-400">Mateus 17, 1-8; Marcos 9, 2-8; Lucas 9, 28-36</p>
                                </div>
                                <div className="p-4 bg-white dark:bg-slate-800 rounded-lg">
                                    <h4 className="font-bold text-cyan-900 dark:text-cyan-100 mb-2">5. A Instituição da Eucaristia</h4>
                                    <p className="text-sm text-slate-600 dark:text-slate-400">Mateus 26, 26-30; Marcos 14, 22-26; Lucas 22, 14-20; João 13, 1-20</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Dolorosos */}
                    <Card className="border-2 border-purple-200 shadow-xl bg-gradient-to-br from-purple-50 to-violet-50 dark:from-purple-950/20 dark:to-violet-950/20">
                        <CardHeader className="bg-purple-100/50 dark:bg-purple-900/20">
                            <CardTitle className="text-2xl text-purple-900 dark:text-purple-100">
                                Mistérios Dolorosos
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="pt-6 space-y-4">
                            <div className="space-y-3">
                                <div className="p-4 bg-white dark:bg-slate-800 rounded-lg">
                                    <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-2">1. A Agonia de Jesus no Horto das Oliveiras</h4>
                                    <p className="text-sm text-slate-600 dark:text-slate-400">Mateus 26, 36-46; Marcos 14, 32-42; Lucas 22, 39-46</p>
                                </div>
                                <div className="p-4 bg-white dark:bg-slate-800 rounded-lg">
                                    <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-2">2. A Flagelação de Jesus Preso à Coluna</h4>
                                    <p className="text-sm text-slate-600 dark:text-slate-400">Mateus 27, 26; Marcos 15, 15; João 19, 1</p>
                                </div>
                                <div className="p-4 bg-white dark:bg-slate-800 rounded-lg">
                                    <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-2">3. A Coroação de Espinhos</h4>
                                    <p className="text-sm text-slate-600 dark:text-slate-400">Mateus 27, 29-30; Marcos 15, 16-20</p>
                                </div>
                                <div className="p-4 bg-white dark:bg-slate-800 rounded-lg">
                                    <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-2">4. Jesus Carrega a Cruz a Caminho do Calvário</h4>
                                    <p className="text-sm text-slate-600 dark:text-slate-400">Mateus 27, 31-32; Marcos 15, 20b-21; Lucas 23, 26-32; João 19, 16-17</p>
                                </div>
                                <div className="p-4 bg-white dark:bg-slate-800 rounded-lg">
                                    <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-2">5. A Crucificação e Morte de Jesus na Cruz</h4>
                                    <p className="text-sm text-slate-600 dark:text-slate-400">Mateus 27, 33-56; Marcos 15, 22-41; Lucas 23, 33-46; João 19, 17-37</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Gloriosos */}
                    <Card className="border-2 border-rose-200 shadow-xl bg-gradient-to-br from-rose-50 to-pink-50 dark:from-rose-950/20 dark:to-pink-950/20">
                        <CardHeader className="bg-rose-100/50 dark:bg-rose-900/20">
                            <CardTitle className="text-2xl text-rose-900 dark:text-rose-100">
                                Mistérios Gloriosos
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="pt-6 space-y-4">
                            <div className="space-y-3">
                                <div className="p-4 bg-white dark:bg-slate-800 rounded-lg">
                                    <h4 className="font-bold text-rose-900 dark:text-rose-100 mb-2">1. A Ressurreição de Jesus</h4>
                                    <p className="text-sm text-slate-600 dark:text-slate-400">Mateus 28, 1-10; Marcos 16, 1-8; Lucas 24, 1-12; João 20, 1-18</p>
                                </div>
                                <div className="p-4 bg-white dark:bg-slate-800 rounded-lg">
                                    <h4 className="font-bold text-rose-900 dark:text-rose-100 mb-2">2. A Ascensão de Jesus ao Céu</h4>
                                    <p className="text-sm text-slate-600 dark:text-slate-400">Marcos 16, 19-20; Lucas 24, 50-53; Atos 1, 6-11</p>
                                </div>
                                <div className="p-4 bg-white dark:bg-slate-800 rounded-lg">
                                    <h4 className="font-bold text-rose-900 dark:text-rose-100 mb-2">3. A Descida do Espírito Santo</h4>
                                    <p className="text-sm text-slate-600 dark:text-slate-400">Atos 2, 1-13</p>
                                </div>
                                <div className="p-4 bg-white dark:bg-slate-800 rounded-lg">
                                    <h4 className="font-bold text-rose-900 dark:text-rose-100 mb-2">4. A Assunção da Santíssima Virgem ao Céu</h4>
                                    <p className="text-sm text-slate-600 dark:text-slate-400">Apocalipse 12, 1</p>
                                </div>
                                <div className="p-4 bg-white dark:bg-slate-800 rounded-lg">
                                    <h4 className="font-bold text-rose-900 dark:text-rose-100 mb-2">5. A Coroação de Nossa Senhora como Rainha do Céu e da Terra</h4>
                                    <p className="text-sm text-slate-600 dark:text-slate-400">Apocalipse 12, 1-6</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            )}

            {/* Seção: Mistérios */}
            {expandedSection === "misterios" && (
                <div className="space-y-6 max-w-5xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-300">
                    {Object.entries(groupedMysteries).map(([type, mysteryGroup]) => (
                        <Card
                            key={type}
                            className={`border-2 shadow-xl overflow-hidden transition-all duration-300 bg-gradient-to-br ${mysteryGroup[0].color}`}
                        >
                            <CardHeader
                                className="cursor-pointer hover:bg-white/50 dark:hover:bg-slate-800/50 transition-colors"
                                onClick={() => setSelectedMystery(selectedMystery === type ? null : type)}
                            >
                                <div className="flex items-center justify-between">
                                    <div>
                                        <CardTitle className="text-2xl text-blue-800 dark:text-blue-200 flex items-center gap-3">
                                            <span className="w-2 h-8 bg-current rounded-full"></span>
                                            Mistérios {type}
                                        </CardTitle>
                                        <p className="text-sm text-slate-600 dark:text-slate-400 mt-2 ml-5">
                                            {mysteryGroup[0].day}
                                        </p>
                                    </div>
                                    {selectedMystery === type ? (
                                        <ChevronUp className="w-6 h-6 text-blue-600" />
                                    ) : (
                                        <ChevronDown className="w-6 h-6 text-blue-600" />
                                    )}
                                </div>
                            </CardHeader>

                            {selectedMystery === type && (
                                <CardContent className="pt-6 px-8 pb-8 space-y-6">
                                    {mysteryGroup.map((mystery, index) => (
                                        <div
                                            key={mystery.number}
                                            className="p-6 bg-white/70 dark:bg-slate-800/70 rounded-xl border-l-4 border-blue-500 shadow-md"
                                        >
                                            <h4 className="font-bold text-lg text-blue-900 dark:text-blue-100 mb-3">
                                                {mystery.number}º Mistério
                                            </h4>
                                            <p className="text-slate-700 dark:text-slate-300 leading-relaxed italic mb-4">
                                                {mystery.offering}
                                            </p>
                                            <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg mb-4">
                                                <p className="text-sm font-semibold text-blue-800 dark:text-blue-200 mb-2">
                                                    Pausa para meditar
                                                </p>
                                                <p className="text-sm text-slate-600 dark:text-slate-400">
                                                    1 Pai Nosso + 10 Ave Marias + 1 Glória + Ó Meu Jesus
                                                </p>
                                            </div>
                                            <p className="text-slate-700 dark:text-slate-300 leading-relaxed italic font-semibold">
                                                {mystery.grace} Assim seja.
                                            </p>
                                        </div>
                                    ))}
                                </CardContent>
                            )}
                        </Card>
                    ))}
                </div>
            )}

            {/* Seção: Orações Finais */}
            {expandedSection === "final" && (
                <div className="space-y-6 max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-300">
                    <Card className="border-2 border-blue-200 shadow-xl bg-gradient-to-br from-blue-50 to-sky-50 dark:from-blue-950/20 dark:to-sky-950/20">
                        <CardHeader>
                            <CardTitle className="text-2xl text-blue-800 dark:text-blue-200">
                                Salve Rainha
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-slate-700 dark:text-slate-300 leading-relaxed italic">
                                Salve Rainha, Mãe de misericórdia, vida, doçura e esperança nossa, Salve! A vós bradamos os degredados filhos de Eva. A vós suspiramos, gemendo e chorando neste vale de lágrimas. Eia pois advogada nossa, esses vossos olhos misericordiosos a nós volvei. E depois deste desterro, mostrai-nos Jesus, bendito fruto de vosso ventre. Ó clemente! ó piedosa! ó doce sempre Virgem Maria!
                            </p>
                            <div className="mt-4 p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                                <p className="text-sm text-slate-700 dark:text-slate-300">
                                    <strong>V.</strong> Rogai por nós Santa Mãe de Deus.<br />
                                    <strong>R.</strong> Para que sejamos dignos das promessas de Cristo
                                </p>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="border-2 border-blue-200 shadow-xl bg-gradient-to-br from-blue-50 to-sky-50 dark:from-blue-950/20 dark:to-sky-950/20">
                        <CardHeader>
                            <CardTitle className="text-2xl text-blue-800 dark:text-blue-200">
                                Saudação Final
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-slate-700 dark:text-slate-300 leading-relaxed italic">
                                Eu vos saúdo, Maria, Filha bem-amada do eterno Pai, Mãe admirável do Filho, Esposa mui fiel do Espírito Santo, templo augusto da santíssima trindade; eu vos saúdo soberana Princesa, a quem tudo está submisso no céu e na terra; eu vos saúdo, seguro refúgio dos pecadores, nossa Senhora da Misericórdia, que jamais repeliste pessoa alguma. Pecador que sou, me prostro aos vossos pés, e vos peço de me obter de Jesus, vosso amado filho, a contrição e o perdão de todos os meus pecados, e a divina sabedoria. Eu me consagro todo a vós, com tudo o que possuo. Eu vos tomo, hoje, por minha Mãe e Senhora. Tratai-me, pois, como o ultimo de vossos filhos e o mais obediente de vossos escravos. Atendei, minha Princesa, atendei aos suspiros de um coração que seja amar-vos e servi-vos fielmente. Que ninguém diga que, entre todos que a vós recorreram, seja eu o primeiro desamparado. Ó minha esperança, Ó minha vida, Ó minha fiel e imaculada Virgem Maria defendei-me, nutri-me, escutai-me, instruí-me, salvai-me. Assim seja.
                            </p>
                            <p className="text-center font-bold text-lg mt-4 text-blue-800 dark:text-blue-200">
                                Em Nome do Pai, (+) do Filho e do Espírito Santo. Amém.
                            </p>
                        </CardContent>
                    </Card>

                    <div className="p-6 bg-gradient-to-br from-amber-50 to-yellow-50 dark:from-amber-950/30 dark:to-yellow-950/30 rounded-2xl border-2 border-amber-200 dark:border-amber-800 shadow-lg">
                        <h3 className="text-xl font-bold text-amber-900 dark:text-amber-100 mb-4 text-center">
                            💬 Palavras de São Luís de Montfort
                        </h3>
                        <p className="text-slate-700 dark:text-slate-300 leading-relaxed italic text-center">
                            "Não é possível expressar quanto a Santíssima Virgem estima o Rosário sobre todas as demais devoções, e quão magnânimo é ao recompensar os que trabalham para pregá-lo, estabelecê-lo e cultivá-lo. Recitado enquanto são meditados os mistérios sagrados, o Rosário é manancial de maravilhosos frutos e depósito de toda espécie de bens."
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
}
