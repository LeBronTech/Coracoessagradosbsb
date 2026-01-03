"use client";

import React, { useState, useEffect, useRef } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogClose } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Globe, AlertCircle, CheckCircle, Clock, X } from "lucide-react";
import Image from "next/image";

interface MarianDevotion {
    id: string;
    name: string;
    country: string;
    countryFlag: string;
    date: string;
    imageUrl: string;
    description: string;
    fullDescription: string;
    status?: "approved" | "pending" | "not-approved" | "complex";
    statusNote?: string;
}

interface Continent {
    name: string;
    emoji: string;
    devotions: MarianDevotion[];
}

export function WorldMarianDevotions() {
    const continents: Continent[] = [
        {
            name: "Europa",
            emoji: "🇪🇺",
            devotions: [
                {
                    id: "siluva",
                    name: "Nossa Senhora de Šiluva",
                    country: "Lituânia",
                    countryFlag: "🇱🇹",
                    date: "8 de Setembro",
                    imageUrl: "https://via.placeholder.com/200?text=Siluva",
                    description: "Primeira aparição mariana aprovada na Europa (1608)",
                    fullDescription: "É considerada a primeira aparição mariana aprovada na Europa, ocorrida em 1608. Em um período onde a Lituânia se tornava calvinista (protestante), Maria apareceu chorando, lamentando que seu Filho não era mais adorado naquele lugar. É o coração católico do Báltico. A aparição marcou um momento crucial na preservação da fé católica na região.",
                    status: "approved"
                },
                {
                    id: "medjugorje",
                    name: "Rainha da Paz",
                    country: "Bósnia e Herzegovina",
                    countryFlag: "🇧🇦",
                    date: "25 de Junho",
                    imageUrl: "https://via.placeholder.com/200?text=Medjugorje",
                    description: "Centro de espiritualidade e conversão (desde 1981)",
                    fullDescription: "As aparições iniciaram em 25 de junho de 1981. O Vaticano ainda não se pronunciou definitivamente sobre a natureza sobrenatural das aparições, pois elas alegadamente ainda ocorrem. No entanto, o Papa Francisco autorizou peregrinações oficiais ao local, reconhecendo-o como um importante centro de espiritualidade e conversão. É talvez o fenômeno mariano não-definitivo mais famoso do mundo hoje.",
                    status: "complex",
                    statusNote: "Peregrinações autorizadas, mas aparições ainda em estudo pelo Vaticano"
                },
                {
                    id: "garabandal",
                    name: "Nossa Senhora do Carmo de Garabandal",
                    country: "Espanha",
                    countryFlag: "🇪🇸",
                    date: "18 de Junho",
                    imageUrl: "https://via.placeholder.com/200?text=Garabandal",
                    description: "Mensagens de conversão e avisos proféticos (anos 60)",
                    fullDescription: "As aparições ocorreram nos anos 60, famosas pelos êxtases das meninas caminhando para trás. Não foram reconhecidas pelos bispos locais como sobrenaturais (Non constat de supernaturalitate). No entanto, as mensagens de conversão e os 'avisos' apocalípticos mantêm um grupo de devotos muito fervoroso e fiel ao redor do mundo, inclusive no Brasil.",
                    status: "not-approved",
                    statusNote: "Não aprovada pela Igreja local"
                },
                {
                    id: "rosa_mistica",
                    name: "Rosa Mística",
                    country: "Itália",
                    countryFlag: "🇮🇹",
                    date: "13 de Julho / 8 de Dezembro",
                    imageUrl: "https://via.placeholder.com/200?text=Rosa+Mistica",
                    description: "Mãe da Igreja com três rosas (branca, vermelha e dourada)",
                    fullDescription: "Primeira aparição em 1947 em Montichiari-Fontanelle. A diocese local não reconheceu a sobrenaturalidade dos eventos originais com a vidente Pierina Gilli. Contudo, em 2019, o bispo local reconheceu a localidade de Fontanelle como 'Santuário Diocesano', autorizando o culto e a peregrinação à 'Rosa Mística - Mãe da Igreja', focando na devoção e não nas aparições em si. É a imagem famosa de Maria com três rosas no peito (branca, vermelha e dourada).",
                    status: "complex",
                    statusNote: "Culto permitido, aparições não reconhecidas"
                },
                {
                    id: "pellevoisin",
                    name: "Nossa Senhora de Pellevoisin",
                    country: "França",
                    countryFlag: "🇫🇷",
                    date: "19 de Fevereiro",
                    imageUrl: "https://via.placeholder.com/200?text=Pellevoisin",
                    description: "Mãe Todo-Misericordiosa e o Escapulário do Sagrado Coração",
                    fullDescription: "Uma aparição aprovada que ocorreu em 1876, mas que ficou 'escondida' na França, ofuscada por Lourdes e La Salette. Maria apareceu a uma mulher doente que foi curada e pediu a divulgação do Escapulário do Sagrado Coração. A devoção enfatiza a misericórdia infinita de Deus através do Coração de Jesus.",
                    status: "approved"
                }
            ]
        },
        {
            name: "Ásia",
            emoji: "🌏",
            devotions: [
                {
                    id: "la_vang",
                    name: "Nossa Senhora de La Vang",
                    country: "Vietnã",
                    countryFlag: "🇻🇳",
                    date: "15 de Agosto",
                    imageUrl: "https://via.placeholder.com/200?text=La+Vang",
                    description: "Símbolo da resistência católica vietnamita",
                    fullDescription: "Em 1798, católicos vietnamitas fugiam de uma perseguição brutal e se esconderam na floresta de La Vang. Doentes e com medo, viram uma senhora com um manto dourado segurando um menino, que os consolou e ensinou a usar folhas locais como remédio. É o símbolo máximo da resistência católica vietnamita. Não é uma 'aparição' com mensagens longas, mas uma consolação divina em momento de extrema necessidade.",
                    status: "approved"
                },
                {
                    id: "lipa",
                    name: "Maria, Medianeira de Todas as Graças",
                    country: "Filipinas",
                    countryFlag: "🇵🇭",
                    date: "12 de Setembro",
                    imageUrl: "https://via.placeholder.com/200?text=Lipa",
                    description: "Fenômeno das pétalas de rosas (1948)",
                    fullDescription: "Foi um fenômeno massivo nas Filipinas em 1948, com chuvas de pétalas de rosas. Houve uma aprovação inicial nos anos 50, depois revogada. Recentemente (2024), o Vaticano reafirmou que os eventos não têm origem sobrenatural. Apesar disso, a imagem e a devoção popular à 'Mediadora' são gigantescas nas Filipinas.",
                    status: "not-approved",
                    statusNote: "Julgamento negativo recente do Vaticano (2024)"
                },
                {
                    id: "akita",
                    name: "Nossa Senhora de Akita",
                    country: "Japão",
                    countryFlag: "🇯🇵",
                    date: "13 de Outubro",
                    imageUrl: "https://via.placeholder.com/200?text=Akita",
                    description: "Continuação de Fátima - Estátua que chorou lágrimas e sangue",
                    fullDescription: "Aprovada pelo bispo local e reconhecida como continuação das mensagens de Fátima. Uma estátua de madeira chorou lágrimas humanas e sangue (cientificamente comprovado) mais de 100 vezes, testemunhado por não-cristãos e até pela TV japonesa. As mensagens são severas sobre o futuro da humanidade e a crise na Igreja. A última mensagem crucial foi em 13 de outubro de 1973.",
                    status: "approved"
                },
                {
                    id: "sheshan",
                    name: "Nossa Senhora de Sheshan",
                    country: "China",
                    countryFlag: "🇨🇳",
                    date: "24 de Maio",
                    imageUrl: "https://via.placeholder.com/200?text=Sheshan",
                    description: "Auxiliadora dos Cristãos - Ponto focal da fé católica chinesa",
                    fullDescription: "O Papa Bento XVI compôs uma oração específica para esta Nossa Senhora, pedindo proteção para a Igreja na China. O santuário em Xangai é o ponto focal da identidade católica chinesa, muitas vezes em tensão com o governo comunista. Representa a esperança e a perseverança da Igreja perseguida.",
                    status: "approved"
                }
            ]
        },
        {
            name: "África e Oriente Médio",
            emoji: "🌍",
            devotions: [
                {
                    id: "kibeho",
                    name: "Nossa Senhora de Kibeho",
                    country: "Ruanda",
                    countryFlag: "🇷🇼",
                    date: "28 de Novembro",
                    imageUrl: "https://via.placeholder.com/200?text=Kibeho",
                    description: "Mãe do Verbo - Única aparição aprovada na África",
                    fullDescription: "É a única aparição plenamente aprovada pelo Vaticano no continente africano. Maria apareceu para adolescentes em 1981 com mensagens de amor, mas também com visões terríveis (rios de sangue) que foram interpretadas como uma profecia do genocídio de Ruanda que ocorreu anos depois. As mensagens enfatizam a conversão, a oração e a penitência.",
                    status: "approved"
                },
                {
                    id: "zeitoun",
                    name: "Nossa Senhora de Zeitoun",
                    country: "Egito",
                    countryFlag: "🇪🇬",
                    date: "2 de Abril",
                    imageUrl: "https://via.placeholder.com/200?text=Zeitoun",
                    description: "A Virgem de Luz - Aparição pública mais espetacular",
                    fullDescription: "Talvez a aparição pública mais espetacular da história moderna. Durante meses em 1968, Maria apareceu fisicamente e luminosa sobre o domo de uma igreja Copta no Cairo. Foi vista por multidões de centenas de milhares de pessoas: católicos, ortodoxos, muçulmanos, ateus e até pelo presidente do Egito. Foi aprovada pelo Patriarca da Igreja Ortodoxa Copta.",
                    status: "approved",
                    statusNote: "Aprovada pela Igreja Ortodoxa Copta"
                }
            ]
        },
        {
            name: "Américas",
            emoji: "🌎",
            devotions: [
                {
                    id: "champion",
                    name: "Nossa Senhora do Bom Socorro",
                    country: "Estados Unidos",
                    countryFlag: "🇺🇸",
                    date: "9 de Outubro",
                    imageUrl: "https://via.placeholder.com/200?text=Champion",
                    description: "Única aparição aprovada nos EUA (1859)",
                    fullDescription: "É a única aparição aprovada pela Igreja nos Estados Unidos. Maria apareceu em 1859 a uma jovem imigrante belga no meio da floresta de Wisconsin e deu uma missão muito específica: 'Ensine as crianças o catecismo e como fazer o sinal da cruz, elas estão se perdendo por falta de conhecimento'. É uma devoção muito focada na educação religiosa.",
                    status: "approved"
                },
                {
                    id: "quinche",
                    name: "Nossa Senhora do Quinche",
                    country: "Equador",
                    countryFlag: "🇪🇨",
                    date: "21 de Novembro",
                    imageUrl: "https://via.placeholder.com/200?text=Quinche",
                    description: "Padroeira do Equador - Proteção contra terremotos",
                    fullDescription: "Padroeira do Equador, é uma imagem de madeira do século XVI extremamente popular nos Andes. A devoção está ligada à proteção contra terremotos e desastres naturais, e a peregrinação anual reúne centenas de milhares de pessoas nas montanhas. Representa a fé andina profundamente enraizada.",
                    status: "approved"
                }
            ]
        }
    ];

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
                {continents.map((continent) => (
                    <div
                        key={continent.name}
                        className="p-8 rounded-3xl shadow-lg border transition-all duration-500 bg-gradient-to-br from-blue-50 to-sky-50 border-blue-100 dark:from-blue-950/20 dark:to-sky-950/20 dark:border-blue-900/30"
                    >
                        <h3 className="text-2xl font-bold mb-8 flex items-center gap-3 text-blue-800 dark:text-blue-300">
                            <span className="text-3xl">{continent.emoji}</span>
                            <span className="w-2 h-8 bg-current rounded-full"></span>
                            {continent.name}
                        </h3>

                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
                            {continent.devotions.map((devotion) => (
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
                                                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 z-10">
                                                    <span className="inline-block px-3 py-1 text-white text-[10px] font-bold rounded-full shadow-sm bg-blue-600">
                                                        {devotion.countryFlag}
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
                ))}
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
            <DialogClose className="absolute left-4 top-4 z-50 rounded-full bg-blue-600 hover:bg-blue-700 text-white p-2 shadow-lg transition-all hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <X className="h-5 w-5" />
                <span className="sr-only">Fechar</span>
            </DialogClose>

            <DialogHeader className={`px-2 transition-all duration-300 ${scrolled ? 'pt-8' : 'pt-12'}`}>
                <div className="flex flex-col items-center mb-4">
                    <div className={`relative transition-all duration-300 ${scrolled ? 'scale-75 opacity-80' : 'scale-100'}`}>
                        <Image
                            src={devotion.imageUrl}
                            alt={devotion.name}
                            width={200}
                            height={200}
                            className={`rounded-full object-cover border-4 border-blue-300 dark:border-blue-600 shadow-xl transition-all duration-300 ${scrolled ? 'w-20 h-20' : 'w-32 h-32 sm:w-40 sm:h-40'
                                }`}
                        />
                    </div>
                    <DialogTitle className={`font-bold text-blue-900 dark:text-blue-100 text-center font-brand px-2 break-words hyphens-auto transition-all duration-300 ${scrolled ? 'text-lg sm:text-xl mt-2' : 'text-xl sm:text-2xl md:text-3xl mt-6'
                        }`}>
                        {devotion.name}
                    </DialogTitle>
                    <div className={`flex items-center gap-2 flex-wrap justify-center px-2 transition-all duration-300 ${scrolled ? 'mt-1 opacity-10' : 'mt-3 opacity-100 flex-col sm:flex-row'
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
