"use client";

import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";
import { ChevronDown, Calendar } from "lucide-react";

export function SaoJoseTimeline() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <section className="mb-8">
            <Collapsible open={isOpen} onOpenChange={setIsOpen}>
                <CollapsibleTrigger asChild>
                    <Button
                        variant="outline"
                        className="w-full justify-between bg-gradient-to-r from-green-100 to-emerald-100 hover:from-green-200 hover:to-emerald-200 dark:from-green-900/40 dark:to-emerald-900/40 dark:hover:from-green-900/60 dark:hover:to-emerald-900/60 border-green-300 dark:border-green-700 h-auto py-4"
                    >
                        <div className="text-left">
                            <p className="text-2xl font-bold text-green-800 dark:text-green-300">
                                Fatos Históricos sobre São José
                            </p>
                            <div className="flex items-center gap-2 mt-1">
                                <p className="text-sm text-slate-600 dark:text-slate-400">
                                    Milagres e Devoções
                                </p>
                                <span className="text-xs font-bold text-green-600 dark:text-green-400 bg-green-200/50 dark:bg-green-800/50 px-2 py-0.5 rounded-full animate-pulse">
                                    Clique aqui
                                </span>
                            </div>
                        </div>
                    </Button>
                </CollapsibleTrigger>

                <CollapsibleContent className="mt-6">
                    {/* Datas Importantes */}
                    <Card className="mb-8 border-amber-300 shadow-lg bg-gradient-to-br from-amber-50 to-yellow-50 dark:from-amber-950/20 dark:to-yellow-950/20">
                        <CardHeader className="bg-amber-100/50 dark:bg-amber-900/20">
                            <CardTitle className="text-2xl text-amber-800 dark:text-amber-300 flex items-center gap-2">
                                <Calendar className="h-6 w-6" />
                                📅 Datas Litúrgicas de São José
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="pt-6">
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="p-4 bg-white dark:bg-slate-800 rounded-lg border-2 border-amber-200">
                                    <p className="font-bold text-lg text-amber-900 dark:text-amber-100 mb-2">19 de Março</p>
                                    <p className="text-slate-700 dark:text-slate-300 font-semibold">Solenidade de São José</p>
                                    <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">Esposo da Virgem Maria - Festa Principal</p>
                                </div>

                                <div className="p-4 bg-white dark:bg-slate-800 rounded-lg border-2 border-amber-200">
                                    <p className="font-bold text-lg text-amber-900 dark:text-amber-100 mb-2">1º de Maio</p>
                                    <p className="text-slate-700 dark:text-slate-300 font-semibold">São José Operário</p>
                                    <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">Patrono dos Trabalhadores</p>
                                </div>

                                <div className="p-4 bg-white dark:bg-slate-800 rounded-lg border-2 border-green-200">
                                    <p className="font-bold text-lg text-green-900 dark:text-green-100 mb-2">Todas as Quartas-feiras</p>
                                    <p className="text-slate-700 dark:text-slate-300 font-semibold">Dia Semanal de São José</p>
                                    <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">Dedicado especialmente ao santo</p>
                                </div>

                                <div className="p-4 bg-white dark:bg-slate-800 rounded-lg border-2 border-purple-200">
                                    <p className="font-bold text-lg text-purple-900 dark:text-purple-100 mb-2">8 de Dezembro de 1870</p>
                                    <p className="text-slate-700 dark:text-slate-300 font-semibold">Patrono da Igreja Universal</p>
                                    <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">Declarado pelo Papa Pio IX</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Timeline de Fatos Históricos */}
                    <div className="relative overflow-hidden max-w-full px-2">
                        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-green-300 via-green-500 to-green-700 dark:from-green-700 dark:via-green-600 dark:to-green-500"></div>

                        <div className="space-y-8 max-w-full">
                            {/* Fato 1 */}
                            <TimelineFact
                                side="right"
                                icon="👑"
                                title="Descendência Real de Davi"
                                content="São José era descendente direto do Rei Davi, cumprindo as profecias messiânicas. Através dele, Jesus Cristo herdou legalmente o trono de Davi, tornando-se o Messias prometido."
                            />

                            {/* Fato 2 */}
                            <TimelineFact
                                side="left"
                                icon="💪"
                                title="Jovem e Forte, não Idoso"
                                content="Contrariando representações artísticas antigas, São José era provavelmente um homem jovem e vigoroso (18-30 anos) quando desposou Maria. Sua força física era necessária para proteger a Sagrada Família."
                            />

                            {/* Fato 3 */}
                            <TimelineFact
                                side="right"
                                icon="🌸"
                                title="O Lírio da Pureza"
                                content="O lírio branco é o símbolo tradicional de São José. Segundo a tradição, quando os pretendentes de Maria apresentaram suas varas no Templo, apenas a de José floresceu milagrosamente com lírios brancos."
                            />

                            {/* Fato 4 */}
                            <TimelineFact
                                side="left"
                                icon="🔨"
                                title="O Carpinteiro de Nazaré"
                                content="Como 'tekton' (artesão/carpinteiro), São José era um construtor habilidoso. Ele ensinou a Jesus o ofício, dignificando o trabalho manual. Por isso é patrono dos trabalhadores."
                            />

                            {/* Fato 5 */}
                            <TimelineFact
                                side="right"
                                icon="🌙"
                                title="A Fuga para o Egito"
                                content="Quando Herodes ordenou o massacre dos inocentes, São José recebeu em sonho a ordem de fugir para o Egito. Sem questionar, partiu imediatamente de noite, protegendo Maria e Jesus."
                            />

                            {/* Fato 6 */}
                            <TimelineFact
                                side="left"
                                icon="⛪"
                                title="A Santa Casa de Loreto"
                                content="A Santa Casa de Loreto, na Itália, é venerada como a casa onde a Sagrada Família viveu em Nazaré. Segundo a tradição, foi miraculosamente transportada por anjos em 1291."
                            />

                            {/* Fato 7 */}
                            <TimelineFact
                                side="right"
                                icon="🇨🇦"
                                title="Oratório de São José - Canadá"
                                content="O Oratório de São José, em Montreal, é o maior santuário dedicado a São José no mundo. Foi construído pelo Irmão André Bessette. Milhares de milagres foram relatados neste local."
                            />

                            {/* Fato 8 */}
                            <TimelineFact
                                side="left"
                                icon="🪜"
                                title="A Escada Milagrosa de Santa Fé"
                                content="Na Capela de Loreto em Santa Fé, Novo México, existe uma escada em espiral que desafia as leis da física. Construída misteriosamente em 1878, não possui suporte central. As irmãs atribuem o milagre a São José."
                            />

                            {/* Fato 9 */}
                            <TimelineFact
                                side="right"
                                icon="⛪"
                                title="Patrono da Igreja Universal"
                                content="Em 8 de dezembro de 1870, o Papa Pio IX declarou São José Patrono da Igreja Universal. Assim como ele protegeu a Sagrada Família, agora protege toda a Igreja."
                            />

                            {/* Fato 10 */}
                            <TimelineFact
                                side="left"
                                icon="⬅️"
                                title="Lado Esquerdo do Altar"
                                content="Tradicionalmente, a imagem de São José é colocada no lado esquerdo do altar (lado do Evangelho), enquanto Nossa Senhora fica à direita. Esta disposição simboliza que São José está sempre vigilante."
                            />

                            {/* Fato 11 - Destaque */}
                            <TimelineFact
                                side="center"
                                icon="⚔️"
                                title="Terror dos Demônios"
                                content="São José é invocado como 'Terror dos Demônios' porque sua pureza, obediência e poder de intercessão são devastadores para as forças do mal. Santa Teresa d'Ávila testemunhou que nunca pediu nada a São José que ele não alcançasse."
                                highlight={true}
                            />
                        </div>
                    </div>
                </CollapsibleContent>
            </Collapsible>
        </section>
    );
}

interface TimelineFactProps {
    side: "left" | "right" | "center";
    icon: string;
    title: string;
    content: string;
    highlight?: boolean;
}

function TimelineFact({ side, icon, title, content, highlight = false }: TimelineFactProps) {
    const isCenter = side === "center";
    const isLeft = side === "left";

    return (
        <div className={`relative grid ${isCenter ? 'grid-cols-1' : 'md:grid-cols-2'} gap-4 md:gap-8 items-center max-w-full`}>
            {!isCenter && isLeft && <div className="hidden md:block"></div>}

            <div className={`${isCenter ? "max-w-3xl mx-auto w-full" : "w-full"} px-2`}>
                <Card className={`shadow-lg hover:shadow-xl transition-all duration-300 ${highlight
                    ? 'border-red-300 bg-gradient-to-br from-white to-red-50 dark:from-slate-900 dark:to-red-950/20 border-2'
                    : 'border-green-300 bg-gradient-to-br from-white to-green-50 dark:from-slate-900 dark:to-green-950/20'
                    }`}>
                    <CardHeader>
                        <CardTitle className={`text-lg md:text-xl ${highlight
                            ? 'text-red-800 dark:text-red-300'
                            : 'text-green-800 dark:text-green-300'
                            } flex items-center ${isCenter || !isLeft ? 'justify-start' : 'md:justify-end justify-start'} gap-2 flex-wrap`}>
                            <span className="break-words">{icon} {title}</span>
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-sm md:text-base">
                            {content}
                        </p>
                    </CardContent>
                </Card>
            </div>

            {!isCenter && !isLeft && <div className="hidden md:block"></div>}

            <div className={`absolute left-1/2 transform -translate-x-1/2 w-8 h-8 ${highlight ? 'bg-red-600 animate-pulse' : 'bg-green-600'
                } rounded-full border-4 border-white dark:border-slate-900 shadow-lg hidden md:block`}></div>
        </div>
    );
}
