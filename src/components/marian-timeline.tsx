"use client";

import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";
import { ChevronDown, Calendar } from "lucide-react";

export function MarianTimeline() {
    const [isOpen, setIsOpen] = useState(false);

    // Todas as devoções marianas organizadas por mês
    const marianDevotions = [
        // JANEIRO
        { month: "Janeiro", date: "01/01", title: "Santa Maria, Mãe de Deus", description: "Solenidade mariana mais antiga e importante, celebrada na Oitava do Natal (Theotokos)" },
        { month: "Janeiro", date: "06/01", title: "Nossa Senhora de Caná", description: "Lembrada na Epifania, celebrando a intercessão de Maria nas Bodas de Caná" },
        { month: "Janeiro", date: "Último domingo", title: "Nossa Senhora do Bom Parto", description: "Devoção muito antiga, ligada à proteção das mães" },

        // FEVEREIRO
        { month: "Fevereiro", date: "02/02", title: "Nossa Senhora das Candeias", description: "Apresentação do Senhor no templo. Também Nossa Senhora dos Navegantes (especialmente no Sul)" },
        { month: "Fevereiro", date: "11/02", title: "Nossa Senhora de Lourdes", description: "Memória facultativa universal, celebrando as aparições na França, padroeira dos enfermos" },

        // MARÇO
        { month: "Março", date: "25/03", title: "Nossa Senhora da Anunciação", description: "Anunciação do Senhor. Marca o 'Sim' (Fiat) de Maria à Encarnação" },
        { month: "Março", date: "Semana Santa", title: "Nossa Senhora das Dores", description: "Celebrada intensamente na Semana Santa (Procissão do Encontro)" },

        // ABRIL
        { month: "Abril", date: "08/04", title: "Nossa Senhora da Penha", description: "Padroeira do Espírito Santo e de grande devoção no Rio de Janeiro" },
        { month: "Abril", date: "26/04", title: "Nossa Senhora do Bom Conselho", description: "Devoção de origem agostiniana muito respeitada" },

        // MAIO - Mês de Maria
        { month: "Maio", date: "08/05", title: "Nossa Senhora da Estrela", description: "Também Nossa Senhora de Luján, padroeira da Argentina" },
        { month: "Maio", date: "13/05", title: "Nossa Senhora de Fátima", description: "Uma das devoções mais populares no Brasil. Aparições em Portugal (1917)" },
        { month: "Maio", date: "13/05", title: "Nossa Senhora do Mel", description: "Imagem milagrosa que verte mel, sal e azeite (Mirassol/SP) e grande devoção de doçura maternal (PR)" },
        { month: "Maio", date: "24/05", title: "Nossa Senhora Auxiliadora", description: "Padroeira da Família Salesiana, de Goiânia e de Palmas" },
        { month: "Maio", date: "26/05", title: "Nossa Senhora de Caravaggio", description: "Grande devoção no sul do Brasil (imigrantes italianos)" },
        { month: "Maio", date: "31/05", title: "Visitação de Nossa Senhora", description: "Festa litúrgica que encerra o mês de Maria, lembrando a visita a Santa Isabel" },

        // JUNHO
        { month: "Junho", date: "Sábado após Sagrado Coração", title: "Imaculado Coração de Maria", description: "Memória obrigatória" },
        { month: "Junho", date: "27/06", title: "Nossa Senhora do Perpétuo Socorro", description: "Título oriental (ícone bizantino) difundido pelos Redentoristas" },

        // JULHO
        { month: "Julho", date: "16/07", title: "Nossa Senhora do Carmo", description: "Festa litúrgica importante (Escapulário). Padroeira de Recife" },
        { month: "Julho", date: "26/07", title: "Sant'Ana (Mãe de Maria)", description: "Embora a festa seja da mãe, a devoção é intrinsecamente ligada à 'Menina Maria'" },

        // AGOSTO
        { month: "Agosto", date: "02/08", title: "Nossa Senhora dos Anjos", description: "Festa franciscana do perdão de Assis (Porciúncula)" },
        { month: "Agosto", date: "05/08", title: "Nossa Senhora das Neves", description: "Padroeira da Paraíba (João Pessoa) e ligada à Basílica de Santa Maria Maior" },
        { month: "Agosto", date: "15/08", title: "Assunção de Nossa Senhora", description: "Solenidade. Também celebrada como Nossa Senhora da Glória ou da Guia" },
        { month: "Agosto", date: "22/08", title: "Nossa Senhora Rainha", description: "Oitava da Assunção, celebrando a realeza de Maria" },

        // SETEMBRO
        { month: "Setembro", date: "08/09", title: "Natividade de Nossa Senhora", description: "O aniversário de Maria. Também Nossa Senhora da Luz (Curitiba)" },
        { month: "Setembro", date: "15/09", title: "Nossa Senhora das Dores", description: "Memória oficial. Padroeira de Minas Gerais (Nossa Senhora da Piedade)" },
        { month: "Setembro", date: "19/09", title: "Nossa Senhora de La Salette", description: "Aparição aprovada (França), com forte devoção 'reconciliadora'" },
        { month: "Setembro", date: "24/09", title: "Nossa Senhora das Mercês", description: "Ordem Mercedária, libertação dos cativos" },

        // OUTUBRO - Mês do Rosário
        { month: "Outubro", date: "07/10", title: "Nossa Senhora do Rosário", description: "Memória instituída para celebrar a vitória cristã e a oração do terço" },
        { month: "Outubro", date: "12/10", title: "Nossa Senhora Aparecida", description: "Solenidade no Brasil. Padroeira e Rainha do Brasil" },
        { month: "Outubro", date: "2º Domingo", title: "Nossa Senhora de Nazaré", description: "Círio de Nazaré (Belém/PA), a maior manifestação católica do Brasil" },

        // NOVEMBRO
        { month: "Novembro", date: "21/11", title: "Apresentação de Nossa Senhora", description: "Memória da entrega de Maria ao templo quando criança" },
        { month: "Novembro", date: "27/11", title: "Nossa Senhora das Graças", description: "Medalha Milagrosa. Data da aparição a Santa Catarina Labouré. Extremamente popular" },

        // DEZEMBRO
        { month: "Dezembro", date: "08/12", title: "Imaculada Conceição", description: "Solenidade (Dogma). Padroeira de Portugal e de inúmeras dioceses" },
        { month: "Dezembro", date: "10/12", title: "Nossa Senhora de Loreto", description: "Padroeira da aviação e das casas" },
        { month: "Dezembro", date: "12/12", title: "Nossa Senhora de Guadalupe", description: "Padroeira da América Latina. Aparição no México (1531)" },
        { month: "Dezembro", date: "18/12", title: "Nossa Senhora do Ó", description: "Semana que antecede o Natal, celebrando a gravidez de Maria prestes a dar à luz" },
    ];

    // Agrupar por mês
    const devotionsByMonth = marianDevotions.reduce((acc, devotion) => {
        if (!acc[devotion.month]) {
            acc[devotion.month] = [];
        }
        acc[devotion.month].push(devotion);
        return acc;
    }, {} as Record<string, typeof marianDevotions>);

    const months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

    return (
        <section className="mb-8">
            <Collapsible open={isOpen} onOpenChange={setIsOpen}>
                <CollapsibleTrigger asChild>
                    <Button
                        variant="outline"
                        className="w-full justify-between bg-gradient-to-r from-blue-100 to-sky-100 hover:from-blue-200 hover:to-sky-200 dark:from-blue-900/40 dark:to-sky-900/40 dark:hover:from-blue-900/60 dark:hover:to-sky-900/60 border-blue-300 dark:border-blue-700 h-auto py-4"
                    >
                        <div className="text-left">
                            <p className="text-2xl font-bold text-blue-800 dark:text-blue-300">
                                ✨ Calendário Mariano Completo ✨
                            </p>
                            <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                                Todas as festas e devoções marianas ao longo do ano litúrgico
                            </p>
                        </div>
                        <ChevronDown className={`h-6 w-6 transition-transform duration-200 flex-shrink-0 ml-4 ${isOpen ? 'rotate-180' : ''}`} />
                    </Button>
                </CollapsibleTrigger>

                <CollapsibleContent className="mt-6">
                    {/* Dica Litúrgica */}
                    <Card className="mb-8 border-purple-300 shadow-lg bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20">
                        <CardHeader className="bg-purple-100/50 dark:bg-purple-900/20">
                            <CardTitle className="text-xl text-purple-800 dark:text-purple-300 flex items-center gap-2">
                                💡 Dica Litúrgica
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="pt-6">
                            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                                Para a devoção pessoal, a Igreja recomenda que o <strong>sábado de cada semana</strong> (quando não há outra festa obrigatória) seja dedicado à <strong>Memória de Santa Maria no Sábado</strong>, usando-se leituras e orações próprias do Missal Romano.
                            </p>
                        </CardContent>
                    </Card>

                    {/* Calendário por Mês */}
                    <div className="space-y-6">
                        {months.map((month) => {
                            const devotions = devotionsByMonth[month] || [];
                            if (devotions.length === 0) return null;

                            // Cores especiais para meses importantes
                            const isMarianMonth = month === "Maio";
                            const isRosaryMonth = month === "Outubro";

                            const borderColor = isMarianMonth ? "border-pink-300" : isRosaryMonth ? "border-rose-300" : "border-sky-300";
                            const bgColor = isMarianMonth ? "from-pink-50 to-rose-50 dark:from-pink-950/20 dark:to-rose-950/20" :
                                isRosaryMonth ? "from-rose-50 to-red-50 dark:from-rose-950/20 dark:to-red-950/20" :
                                    "from-sky-50 to-blue-50 dark:from-sky-950/20 dark:to-blue-950/20";
                            const headerBg = isMarianMonth ? "bg-pink-100/50 dark:bg-pink-900/20" :
                                isRosaryMonth ? "bg-rose-100/50 dark:bg-rose-900/20" :
                                    "bg-sky-100/50 dark:bg-sky-900/20";
                            const titleColor = isMarianMonth ? "text-pink-800 dark:text-pink-300" :
                                isRosaryMonth ? "text-rose-800 dark:text-rose-300" :
                                    "text-sky-800 dark:text-sky-300";

                            return (
                                <Card key={month} className={`${borderColor} shadow-lg bg-gradient-to-br ${bgColor}`}>
                                    <CardHeader className={headerBg}>
                                        <CardTitle className={`text-2xl ${titleColor} flex items-center gap-2`}>
                                            <Calendar className="h-6 w-6" />
                                            {month}
                                            {isMarianMonth && <span className="text-sm font-normal">(Mês de Maria)</span>}
                                            {isRosaryMonth && <span className="text-sm font-normal">(Mês do Rosário)</span>}
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="pt-6">
                                        <div className="space-y-3">
                                            {devotions.map((devotion, index) => (
                                                <div key={index} className="p-4 bg-white dark:bg-slate-800 rounded-lg border-2 border-blue-200 hover:border-blue-400 hover:shadow-md transition-all">
                                                    <div className="flex items-start gap-3">
                                                        <div className="flex-shrink-0">
                                                            <span className="inline-block px-3 py-1 bg-blue-600 text-white text-sm font-bold rounded-full">
                                                                {devotion.date}
                                                            </span>
                                                        </div>
                                                        <div className="flex-1">
                                                            <h4 className="font-bold text-lg text-blue-900 dark:text-blue-100 mb-1">
                                                                {devotion.title}
                                                            </h4>
                                                            <p className="text-sm text-slate-600 dark:text-slate-400">
                                                                {devotion.description}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>
                            );
                        })}
                    </div>

                    {/* Destaques Especiais */}
                    <Card className="mt-8 border-amber-300 shadow-lg bg-gradient-to-br from-amber-50 to-yellow-50 dark:from-amber-950/20 dark:to-yellow-950/20">
                        <CardHeader className="bg-amber-100/50 dark:bg-amber-900/20">
                            <CardTitle className="text-2xl text-amber-800 dark:text-amber-300 flex items-center gap-2">
                                ⭐ Solenidades Marianas (Grau Máximo)
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="pt-6">
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="p-4 bg-white dark:bg-slate-800 rounded-lg border-2 border-amber-300">
                                    <p className="font-bold text-lg text-amber-900 dark:text-amber-100">01 de Janeiro</p>
                                    <p className="text-slate-700 dark:text-slate-300 font-semibold">Santa Maria, Mãe de Deus</p>
                                    <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">A mais antiga solenidade mariana</p>
                                </div>

                                <div className="p-4 bg-white dark:bg-slate-800 rounded-lg border-2 border-amber-300">
                                    <p className="font-bold text-lg text-amber-900 dark:text-amber-100">15 de Agosto</p>
                                    <p className="text-slate-700 dark:text-slate-300 font-semibold">Assunção de Nossa Senhora</p>
                                    <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">Elevação ao Céu em corpo e alma</p>
                                </div>

                                <div className="p-4 bg-white dark:bg-slate-800 rounded-lg border-2 border-amber-300">
                                    <p className="font-bold text-lg text-amber-900 dark:text-amber-100">08 de Dezembro</p>
                                    <p className="text-slate-700 dark:text-slate-300 font-semibold">Imaculada Conceição</p>
                                    <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">Dogma proclamado em 1854</p>
                                </div>

                                <div className="p-4 bg-white dark:bg-slate-800 rounded-lg border-2 border-amber-300">
                                    <p className="font-bold text-lg text-amber-900 dark:text-amber-100">12 de Outubro</p>
                                    <p className="text-slate-700 dark:text-slate-300 font-semibold">Nossa Senhora Aparecida</p>
                                    <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">Padroeira e Rainha do Brasil</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </CollapsibleContent>
            </Collapsible>
        </section>
    );
}
