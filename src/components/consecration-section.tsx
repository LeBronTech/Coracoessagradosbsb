"use client";

import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronDown, ChevronUp, Heart, BookOpen } from "lucide-react";

export function ConsecrationSection() {
    const [expandedWeek, setExpandedWeek] = useState<number | null>(null);
    const [showFormula, setShowFormula] = useState(false);
    const [showMethod, setShowMethod] = useState(false);
    const [showPrayers, setShowPrayers] = useState(false);
    const [expandedPrayer, setExpandedPrayer] = useState<string | null>(null);

    const preliminaryDays = [
        { day: 1, theme: "Fugir do pecado", reference: "Mt 5,23; Mt 11,12" },
        { day: 2, theme: "Cumprir os mandamentos", reference: "Lc 9,23; Jo 14,15-24; Mt 7,21" },
        { day: 3, theme: "Temor de Deus", reference: "Mt 25,13; Lc 12,4-5; Mt 7,13-14; Mt 18,9" },
        { day: 4, theme: "Fidelidade", reference: "Mt 6,24; Lc 9,62; Lc 16,10; Mt 7,24" },
        { day: 5, theme: "Importância da oração", reference: "Mc 11,24-25; Lc 11; Lc 18,1; Mt 26,41; Mt 6,5" },
        { day: 6, theme: "Conhecimento da Verdade", reference: "Lc 5,8-17" },
        { day: 7, theme: "Humildade e mansidão", reference: "Mt 20,26-27; Mt 5,44; Mt 20,16; Mt 5,39-40; Lc 14,11; Mt 18,3; Mt 11,29" },
        { day: 8, theme: "Paciência e caridade para com o próximo", reference: "Mt 9 e 7,1-2; Mt 18,10; At 20,35; Mt 5,23-24" },
        { day: 9, theme: "Mortificação, Penitência e Sofrimento", reference: "Lc 9,23; Mt 6,16; Lc 15,7" },
        { day: 10, theme: "Perseguição e incompreensão", reference: "Mt 6,5-10; Lc 6,22-23; Jo 15,18-19" },
        { day: 11, theme: "Desapego de tudo", reference: "Mt 6,19-20; Mc 10,23; Lc 10,18-25; Lc 6,24; Lc 14,26; Mt 19,29; Mt 19,21" },
        { day: 12, theme: "Confiança na Providência", reference: "Mt 22,11-28; Jo 6,51-52; Lc 21,17-18; Lc 10 e 12,7; Jo 3,17; Lc 12,22-30" }
    ];

    const weeks = [
        {
            title: "12 Dias Preliminares: Desapego do Mundo",
            subtitle: "Renúncia ao espírito do mundo",
            intro: "\"Não estareis vós, sem perceber, no caminho largo do mundo, que é o caminho da perdição?\" - São Luís de Montfort",
            days: preliminaryDays,
            prayers: ["Veni Creator", "Ave Maris Stella"]
        },
        {
            title: "Primeira Semana: Conhecimento Próprio",
            subtitle: "Conhecer-se para humilhar-se",
            intro: "\"Para esvaziar-nos de nós mesmos é preciso, primeiramente, conhecer bem, pela luz do Espírito Santo, nosso fundo mau, nossa incapacidade, nossa fraqueza, nossa inconstância, nossa indignidade e nossa iniquidade.\" - São Luís de Montfort",
            days: [
                { day: 1, theme: "Pecados da 1ª Infância", reference: "Exame de consciência" },
                { day: 2, theme: "Pecados da Infância", reference: "Exame de consciência" },
                { day: 3, theme: "Pecados da Adolescência", reference: "Exame de consciência" },
                { day: 4, theme: "Pecados da Idade Adulta", reference: "Exame de consciência" },
                { day: 5, theme: "Paixão Dominante", reference: "Descobrir o vício principal" },
                { day: 6, theme: "Transposição da paixão dominante para o amor a Deus", reference: "Buscar em Deus o verdadeiro bem" }
            ],
            prayers: ["Jaculatórias: 'Domine, ut videam', 'Noverim me'", "Ladainha do Espírito Santo", "Ave Maris Stella", "Ladainha de Nossa Senhora"]
        },
        {
            title: "Segunda Semana: Conhecimento de Maria",
            subtitle: "Maria: Doce e forte, Zelosa e prudente, Humilde e corajosa, Pura e fecunda",
            intro: "\"Como uma alma é feliz quando está inteiramente possuída e governada pelo espírito de Maria!\" - São Luís de Montfort",
            days: [
                { day: 1, theme: "Doce e Forte", reference: "Maria Fons - A doçura e força da água" },
                { day: 2, theme: "Zelosa e Prudente", reference: "A Visitação - Lc 1,39-56" },
                { day: 3, theme: "Humilde", reference: "Magnificat - Lc 1,46-55" },
                { day: 4, theme: "Corajosa", reference: "Maria ao pé da Cruz - Jo 19,25-27" },
                { day: 5, theme: "Pura", reference: "Virgem das Virgens" },
                { day: 6, theme: "Fecunda", reference: "Mãe de Cristo e nossa Mãe" }
            ],
            prayers: ["Ladainha do Espírito Santo", "Ave Maris Stella", "Um Rosário ou pelo menos um Terço"]
        },
        {
            title: "Terceira Semana: Conhecimento de Jesus Cristo",
            subtitle: "O amor de Cristo manifestado em seu sofrimento",
            intro: "\"Entre todas as razões que nos podem excitar a amar Jesus Cristo, a mais poderosa é a quantidade de dores que Ele quis sofrer para nos testemunhar seu amor.\" - São Luís de Montfort",
            days: [
                { day: 1, theme: "A excelência daquele que sofre", reference: "Quem é Jesus que sofre por nós" },
                { day: 2, theme: "A qualidade das pessoas por quem Ele sofre", reference: "Os homens, eu" },
                { day: 3, theme: "Quantidade e qualidade dos sofrimentos (corpo)", reference: "Paixão de Cristo" },
                { day: 4, theme: "Quantidade e qualidade dos sofrimentos (alma)", reference: "Solidão, traição, desonra" },
                { day: 5, theme: "Sofrimentos de amigos, inimigos, autoridades", reference: "Abandono e perseguição" },
                { day: 6, theme: "Amor aos homens manifestado durante o sofrimento", reference: "Perdão na Cruz" }
            ],
            prayers: ["Ladainha do Espírito Santo", "Ave Maris Stella", "Ladainha do Santo Nome de Jesus"]
        }
    ];

    const toggleWeek = (weekIndex: number) => {
        setExpandedWeek(expandedWeek === weekIndex ? null : weekIndex);
    };

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h2 className="text-4xl font-bold text-blue-900 dark:text-blue-100 text-center mb-6 font-brand flex items-center justify-center gap-3">
                <Heart className="w-10 h-10 text-red-500" />
                Consagração a Jesus por Maria
                <Heart className="w-10 h-10 text-red-500" />
            </h2>

            <p className="text-center text-slate-600 dark:text-slate-400 max-w-3xl mx-auto mb-8">
                A Consagração a Jesus por Maria, segundo São Luís Maria de Montfort, é o caminho mais perfeito para se unir a Cristo. São 33 dias de preparação (12 preliminares + 21 dias divididos em 3 semanas) para entregar-se totalmente a Jesus pelas mãos de Maria.
            </p>

            {/* Botões de Navegação */}
            <div className="flex justify-center gap-4 mb-8 flex-wrap">
                <button
                    onClick={() => {
                        setShowFormula(false);
                        setShowMethod(!showMethod);
                        setShowPrayers(false);
                    }}
                    className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-105 flex items-center gap-2"
                >
                    <BookOpen className="w-5 h-5" />
                    {showMethod ? "Ver os 33 Dias" : "Método de Meditação"}
                </button>
                <button
                    onClick={() => {
                        setShowMethod(false);
                        setShowFormula(false);
                        setShowPrayers(!showPrayers);
                    }}
                    className="px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-700 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-105 flex items-center gap-2"
                >
                    <BookOpen className="w-5 h-5" />
                    {showPrayers ? "Ver os 33 Dias" : "Orações"}
                </button>
                <button
                    onClick={() => {
                        setShowMethod(false);
                        setShowFormula(!showFormula);
                        setShowPrayers(false);
                    }}
                    className="px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-105 flex items-center gap-2"
                >
                    <Heart className="w-5 h-5" />
                    {showFormula ? "Ver os 33 Dias" : "Fórmula de Consagração"}
                </button>
            </div>

            {/* Método de Meditação */}
            {showMethod && (
                <Card className="border-2 border-blue-200 shadow-2xl bg-gradient-to-br from-blue-50 to-sky-50 dark:from-blue-950/20 dark:to-sky-950/20 max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-300">
                    <CardHeader className="bg-gradient-to-r from-blue-100 to-sky-100 dark:from-blue-900/30 dark:to-sky-900/30">
                        <CardTitle className="text-3xl text-center text-blue-900 dark:text-blue-100 font-brand">
                            Esquema Geral da Meditação Diária
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-8 px-8 pb-8">
                        <div className="space-y-6">
                            <div className="p-5 bg-white dark:bg-slate-800 rounded-xl border-l-4 border-blue-500 shadow-md">
                                <h4 className="font-bold text-lg text-blue-900 dark:text-blue-100 mb-2">
                                    a) Presença de Deus
                                </h4>
                                <p className="text-slate-700 dark:text-slate-300">
                                    Pôr-se na presença de Deus, através de Nosso Senhor Jesus Cristo contemplado juntamente com Nossa Senhora (durante a Encarnação, no presépio, em Nazaré, no Templo, na via-crúcis, no Calvário, etc.).
                                </p>
                            </div>

                            <div className="p-5 bg-white dark:bg-slate-800 rounded-xl border-l-4 border-blue-500 shadow-md">
                                <h4 className="font-bold text-lg text-blue-900 dark:text-blue-100 mb-2">
                                    b) Súplica
                                </h4>
                                <p className="text-slate-700 dark:text-slate-300">
                                    Suplicar a Nosso Senhor, através de Maria Santíssima, a graça própria do período: desprezo do mundo, conhecimento próprio, de Nossa Senhora ou de Nosso Senhor.
                                </p>
                            </div>

                            <div className="p-5 bg-white dark:bg-slate-800 rounded-xl border-l-4 border-blue-500 shadow-md">
                                <h4 className="font-bold text-lg text-blue-900 dark:text-blue-100 mb-2">
                                    c) Oferecimento
                                </h4>
                                <p className="text-slate-700 dark:text-slate-300">
                                    Oferecer por essa intenção uma das orações determinadas por São Luís de Montfort.
                                </p>
                            </div>

                            <div className="p-5 bg-white dark:bg-slate-800 rounded-xl border-l-4 border-blue-500 shadow-md">
                                <h4 className="font-bold text-lg text-blue-900 dark:text-blue-100 mb-2">
                                    d) Meditar
                                </h4>
                                <p className="text-slate-700 dark:text-slate-300">
                                    Ato da inteligência: "O que eu devo saber?" Meditar sobre as verdades propostas, escolhendo entre os textos do cronograma.
                                </p>
                            </div>

                            <div className="p-5 bg-white dark:bg-slate-800 rounded-xl border-l-4 border-blue-500 shadow-md">
                                <h4 className="font-bold text-lg text-blue-900 dark:text-blue-100 mb-2">
                                    e) Afetos
                                </h4>
                                <p className="text-slate-700 dark:text-slate-300">
                                    Atos da vontade: "O que eu devo querer?" Produzir e explicitar afetos.
                                </p>
                            </div>

                            <div className="p-5 bg-white dark:bg-slate-800 rounded-xl border-l-4 border-blue-500 shadow-md">
                                <h4 className="font-bold text-lg text-blue-900 dark:text-blue-100 mb-2">
                                    f) Resoluções
                                </h4>
                                <p className="text-slate-700 dark:text-slate-300">
                                    Formular resoluções práticas e precisas (determinadas na matéria, no tempo, no espaço, nas circunstâncias) e em pequeno número, oferecendo-as a Nosso Senhor pelas mãos de Maria e suplicando força para cumpri-las.
                                </p>
                            </div>

                            <div className="p-5 bg-white dark:bg-slate-800 rounded-xl border-l-4 border-blue-500 shadow-md">
                                <h4 className="font-bold text-lg text-blue-900 dark:text-blue-100 mb-2">
                                    g) Orações Finais
                                </h4>
                                <p className="text-slate-700 dark:text-slate-300">
                                    Oferecer nesta intenção alguma(s) outra(s) das orações determinadas por São Luís (os exercícios remanescentes podem ser feitos em outro momento do dia).
                                </p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            )}

            {/* Seção: Orações */}
            {showPrayers && (
                <div className="space-y-6 max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-300">
                    {/* Veni Creator */}
                    <Card className="border-2 border-purple-200 shadow-xl bg-gradient-to-br from-purple-50 to-violet-50 dark:from-purple-950/20 dark:to-violet-950/20">
                        <CardHeader
                            className="cursor-pointer hover:bg-white/50 dark:hover:bg-slate-800/50 transition-colors"
                            onClick={() => setExpandedPrayer(expandedPrayer === "veni" ? null : "veni")}
                        >
                            <div className="flex items-center justify-between">
                                <CardTitle className="text-2xl text-purple-900 dark:text-purple-100">
                                    Veni Creator Spiritus
                                </CardTitle>
                                {expandedPrayer === "veni" ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
                            </div>
                        </CardHeader>
                        {expandedPrayer === "veni" && (
                            <CardContent className="pt-6 space-y-4 text-slate-700 dark:text-slate-300">
                                <p className="italic">Vem, ó criador Espírito,<br />As almas dos teus visita;<br />Os corações que criastes,<br />Enche de graça infinita.</p>
                                <p className="italic">Tu, Paráclito és chamado<br />Dom do Pai celestial,<br />Fogo, caridade, fonte<br />Viva unção espiritual.</p>
                                <p className="italic">Tu dás septiforme graça;<br />Dedo és da destra paterna;<br />Do Pai, solene promessa,<br />Dás força da voz suprema.</p>
                                <p className="italic">Nossa razão esclarece,<br />Teu amor no peito acende,<br />Do nosso corpo a fraqueza<br />Com tua força defende.</p>
                                <p className="italic">De nós afasta o inimigo.<br />Dá que Deus Pai e seu Filho<br />Por ti nós bem conheçamos,<br />E em ti, Espírito de ambos<br />Em todo tempo creiamos.</p>
                                <p className="italic">A Deus Pai se dê a glória<br />E ao Filho ressuscitado,<br />Paráclito e a ti também<br />Com louvor perpetuado. Amém</p>
                                <div className="mt-4 p-3 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                                    <p className="text-sm"><strong>V.</strong> Envia o vosso Espírito, e a tudo será criado.</p>
                                    <p className="text-sm"><strong>R.</strong> E renovareis a face da terra.</p>
                                    <p className="text-sm mt-2"><strong>Oremos:</strong> Ó Deus, que instruístes os corações de vossos fiéis com a luz do Espírito Santo, concedei-nos que, no mesmo Espírito, conheçamos o que é reto, e gozemos sempre as suas consolações. Por Cristo Nosso Senhor. Amém</p>
                                </div>
                            </CardContent>
                        )}
                    </Card>

                    {/* Ave Maris Stella */}
                    <Card className="border-2 border-blue-200 shadow-xl bg-gradient-to-br from-blue-50 to-sky-50 dark:from-blue-950/20 dark:to-sky-950/20">
                        <CardHeader
                            className="cursor-pointer hover:bg-white/50 dark:hover:bg-slate-800/50 transition-colors"
                            onClick={() => setExpandedPrayer(expandedPrayer === "ave" ? null : "ave")}
                        >
                            <div className="flex items-center justify-between">
                                <CardTitle className="text-2xl text-blue-900 dark:text-blue-100">
                                    Ave Maris Stella
                                </CardTitle>
                                {expandedPrayer === "ave" ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
                            </div>
                        </CardHeader>
                        {expandedPrayer === "ave" && (
                            <CardContent className="pt-6 space-y-4 text-slate-700 dark:text-slate-300">
                                <p className="italic">Ave, do mar Estrela<br />De Deus mãe bela,<br />Sempre virgem, da morada<br />Celeste Feliz entrada.</p>
                                <p className="italic">Ó tu que ouviste da boca<br />Do anjo a saudação;<br />Dá-nos a paz e quietação;<br />E o nome da Eva troca.</p>
                                <p className="italic">As prisões aos réus desata.<br />E a nós cegos alumia;<br />De tudo que nos maltrata<br />Nos livra, o bem nos granjeia.</p>
                                <p className="italic">Ostenta que és mãe, fazendo<br />Que os rogos do povo seu<br />Ouça aquele que, nascendo<br />Por nós, quis ser filho teu.</p>
                                <p className="italic">Ó virgem especiosa,<br />Toda cheia de ternura,<br />Extintos nossos pecados<br />Dá-nos pureza e bravura,</p>
                                <p className="italic">Dá-nos uma vida pura,<br />Põe-nos em vida segura,<br />Para que a Jesus gozemos,<br />E sempre nos alegremos.</p>
                                <p className="italic">A Deus Pai veneremos:<br />A Jesus Cristo também:<br />E ao Espírito Santo; demos<br />Aos três um louvor: Amém.</p>
                            </CardContent>
                        )}
                    </Card>

                    {/* Oração de Santo Agostinho */}
                    <Card className="border-2 border-amber-200 shadow-xl bg-gradient-to-br from-amber-50 to-yellow-50 dark:from-amber-950/20 dark:to-yellow-950/20">
                        <CardHeader
                            className="cursor-pointer hover:bg-white/50 dark:hover:bg-slate-800/50 transition-colors"
                            onClick={() => setExpandedPrayer(expandedPrayer === "agostinho" ? null : "agostinho")}
                        >
                            <div className="flex items-center justify-between">
                                <CardTitle className="text-2xl text-amber-900 dark:text-amber-100">
                                    Oração de Santo Agostinho
                                </CardTitle>
                                {expandedPrayer === "agostinho" ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
                            </div>
                        </CardHeader>
                        {expandedPrayer === "agostinho" && (
                            <CardContent className="pt-6 space-y-4 text-slate-700 dark:text-slate-300 text-sm">
                                <p>Vós sois, ó Jesus, o Cristo, meu Pai santo, meu Deus misericordioso, meu Rei infinitamente grande; sois meu bom pastor, meu único mestre, meu auxílio cheio de bondade, meu bem-amado de uma beleza maravilhosa, meu pão vivo, meu sacerdote eterno, meu guia para a pátria, minha verdadeira luz, minha santa doçura, meu reto caminho, sapiência minha preclara, minha pura simplicidade, minha paz e concórdia; sois, enfim, toda a minha salvaguarda, minha herança preciosa, minha eterna salvação…</p>
                                <p>Ó Jesus Cristo, amável Senhor, por que, em toda a minha vida, amei, por que desejei outra coisa senão vós? Onde estava eu quando não pensava em vós? Ah! que, pelo menos, a partir deste momento meu coração só deseje a vós e por vós se abrase, Senhor Jesus! Desejos de minha alma, correi, que já bastante tardastes; apressai-vos para o fim a que aspirais; procurai em verdade aquele que procurais. Ó Jesus, anátema seja quem não vos ama. Aquele que não vos ama seja repleto de amarguras. Ó doce Jesus, sede o amor, as delícias, a admiração de todo coração dignamente consagrado à vossa glória. Deus de meu coração e minha partilha, Jesus Cristo, que em vós meu coração desfaleça, e sede vós mesmo a minha vida. Acenda-se em minha alma a brasa ardente de vosso amor e se converta num incêndio todo divino, a arder para sempre no altar de meu coração; que inflame o íntimo do meu ser, e abrase o âmago de minha alma; para que no dia de minha morte eu apareça diante de vós inteiramente consumido em vosso amor.</p>
                                <p className="text-center font-bold">Amém</p>
                            </CardContent>
                        )}
                    </Card>

                    {/* Ladainha do Espírito Santo */}
                    <Card className="border-2 border-red-200 shadow-xl bg-gradient-to-br from-red-50 to-rose-50 dark:from-red-950/20 dark:to-rose-950/20">
                        <CardHeader
                            className="cursor-pointer hover:bg-white/50 dark:hover:bg-slate-800/50 transition-colors"
                            onClick={() => setExpandedPrayer(expandedPrayer === "espirito" ? null : "espirito")}
                        >
                            <div className="flex items-center justify-between">
                                <CardTitle className="text-2xl text-red-900 dark:text-red-100">
                                    Ladainha do Espírito Santo
                                </CardTitle>
                                {expandedPrayer === "espirito" ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
                            </div>
                            <p className="text-sm text-red-700 dark:text-red-300 mt-2">Dias Preliminares e Todas as Semanas</p>
                        </CardHeader>
                        {expandedPrayer === "espirito" && (
                            <CardContent className="pt-6 space-y-2 text-slate-700 dark:text-slate-300 text-sm">
                                <p>Senhor, tende piedade de nós.</p>
                                <p>Jesus Cristo, tende piedade de nós.</p>
                                <p>Divino Espírito Santo, ouvi-nos.</p>
                                <p>Espírito Paráclito, atendei-nos.</p>
                                <p>Deus Pai dos céus, tende piedade de nós.</p>
                                <p>Deus Filho, redentor do mundo, tende piedade de nós.</p>
                                <p>Deus Espírito Santo, tende piedade de nós.</p>
                                <p>Santíssima Trindade, que sois um só Deus, tende piedade de nós.</p>
                                <div className="ml-4 space-y-1">
                                    <p>Espírito da verdade, tende piedade de nós.</p>
                                    <p>Espírito da sabedoria,</p>
                                    <p>Espírito da inteligência,</p>
                                    <p>Espírito da fortaleza,</p>
                                    <p>Espírito da piedade,</p>
                                    <p>Espírito do bom conselho,</p>
                                    <p>Espírito da ciência,</p>
                                    <p>Espírito do santo temor,</p>
                                    <p>Espírito da caridade,</p>
                                    <p>Espírito da alegria,</p>
                                    <p>Espírito da paz,</p>
                                    <p>Espírito das virtudes,</p>
                                    <p>Espírito de toda graça,</p>
                                    <p>Espírito da adoção dos filhos de Deus,</p>
                                    <p>Purificador das nossas almas,</p>
                                    <p>Santificador e guia da Igreja Católica,</p>
                                    <p>Distribuidor dos dons celestes,</p>
                                    <p>Conhecedor dos pensamentos e das intenções do coração,</p>
                                    <p>Doçura dos que começam a vos servir,</p>
                                    <p>Coroa dos perfeitos,</p>
                                    <p>Alegria dos anjos,</p>
                                    <p>Luz dos patriarcas,</p>
                                    <p>Inspiração dos profetas,</p>
                                    <p>Palavra e sabedoria dos apóstolos,</p>
                                    <p>Vitória dos mártires,</p>
                                    <p>Ciência dos confessores,</p>
                                    <p>Pureza das virgens,</p>
                                    <p>Unção de todos os santos,</p>
                                </div>
                                <p className="font-semibold mt-4">Sede-nos propício, perdoai-nos, Senhor.</p>
                                <p className="font-semibold">Sede-nos propício, atendei-nos, Senhor.</p>
                                <div className="ml-4 space-y-1">
                                    <p>De todo o pecado, livrai-nos, Senhor.</p>
                                    <p>De todas as tentações e ciladas do demônio,</p>
                                    <p>De toda a presunção e desesperação,</p>
                                    <p>Do ataque à verdade conhecida,</p>
                                    <p>Da inveja da graça fraterna,</p>
                                    <p>De toda a obstinação e impenitência,</p>
                                    <p>De toda a negligência e tepor do espírito,</p>
                                    <p>De toda a impureza da mente e do corpo,</p>
                                    <p>De todas as heresias e erros,</p>
                                    <p>De todo o mau espírito,</p>
                                    <p>Da morte má e eterna,</p>
                                </div>
                                <div className="bg-red-50 dark:bg-red-900/30 p-3 rounded-lg mt-4">
                                    <p><strong>V.</strong> Enviai o vosso Espírito e tudo será criado.</p>
                                    <p><strong>R.</strong> E renovareis a face da terra.</p>
                                    <p className="mt-2"><strong>Oremos:</strong> Deus, que instruístes o coração de vossos fiéis, com a luz do Espírito Santo, concedei-nos que, no mesmo Espírito, conheçamos o que é reto, e gozemos sempre as suas consolações. Por Cristo, Nosso Senhor. Amém.</p>
                                </div>
                            </CardContent>
                        )}
                    </Card>

                    {/* Ladainha de Nossa Senhora */}
                    <Card className="border-2 border-blue-200 shadow-xl bg-gradient-to-br from-blue-50 to-sky-50 dark:from-blue-950/20 dark:to-sky-950/20">
                        <CardHeader
                            className="cursor-pointer hover:bg-white/50 dark:hover:bg-slate-800/50 transition-colors"
                            onClick={() => setExpandedPrayer(expandedPrayer === "maria" ? null : "maria")}
                        >
                            <div className="flex items-center justify-between">
                                <CardTitle className="text-2xl text-blue-900 dark:text-blue-100">
                                    Ladainha de Nossa Senhora
                                </CardTitle>
                                {expandedPrayer === "maria" ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
                            </div>
                            <p className="text-sm text-blue-700 dark:text-blue-300 mt-2">Primeira Semana</p>
                        </CardHeader>
                        {expandedPrayer === "maria" && (
                            <CardContent className="pt-6 space-y-2 text-slate-700 dark:text-slate-300 text-sm">
                                <p>Senhor, tende piedade de nós.</p>
                                <p>Cristo, tende piedade de nós.</p>
                                <p>Senhor, tende piedade de nós.</p>
                                <p>Cristo, ouvi-nos.</p>
                                <p>Cristo, atendei-nos.</p>
                                <p>Deus Pai do céu, tende piedade de nós.</p>
                                <p>Deus Filho Redentor do mundo, tende piedade de nós.</p>
                                <p>Deus Espírito Santo, tende piedade de nós.</p>
                                <p>Santíssima Trindade, que sois um só Deus, tende piedade de nós.</p>
                                <div className="ml-4 space-y-1 mt-3">
                                    <p>Santa Maria, rogai por nós.</p>
                                    <p>Santa Mãe de Deus,</p>
                                    <p>Santa Virgem das virgens,</p>
                                    <p>Mãe de Cristo,</p>
                                    <p>Mãe da Igreja,</p>
                                    <p>Mãe de misericórdia,</p>
                                    <p>Mãe da divina graça,</p>
                                    <p>Mãe da esperança,</p>
                                    <p>Mãe puríssima,</p>
                                    <p>Mãe castíssima,</p>
                                    <p>Mãe sempre virgem,</p>
                                    <p>Mãe imaculada,</p>
                                    <p>Mãe digna de amor,</p>
                                    <p>Mãe admirável,</p>
                                    <p>Mãe do bom conselho,</p>
                                    <p>Mãe do Criador,</p>
                                    <p>Mãe do Salvador,</p>
                                    <p>Virgem prudentíssima,</p>
                                    <p>Virgem venerável,</p>
                                    <p>Virgem louvável,</p>
                                    <p>Virgem poderosa,</p>
                                    <p>Virgem clemente,</p>
                                    <p>Virgem fiel,</p>
                                    <p>Espelho de perfeição,</p>
                                    <p>Sede da Sabedoria,</p>
                                    <p>Fonte de nossa alegria,</p>
                                    <p>Vaso espiritual,</p>
                                    <p>Tabernáculo da eterna glória,</p>
                                    <p>Moradia consagrada a Deus,</p>
                                    <p>Rosa mística,</p>
                                    <p>Torre de Davi,</p>
                                    <p>Torre de marfim,</p>
                                    <p>Casa de ouro,</p>
                                    <p>Arca da aliança,</p>
                                    <p>Porta do céu,</p>
                                    <p>Estrela da manhã,</p>
                                    <p>Saúde dos enfermos,</p>
                                    <p>Refúgio dos pecadores,</p>
                                    <p>Socorro dos migrantes,</p>
                                    <p>Consoladora dos aflitos,</p>
                                    <p>Auxílio dos cristãos,</p>
                                    <p>Rainha dos Anjos,</p>
                                    <p>Rainha dos Patriarcas,</p>
                                    <p>Rainha dos Profetas,</p>
                                    <p>Rainha dos Apóstolos,</p>
                                    <p>Rainha dos Mártires,</p>
                                    <p>Rainha dos confessores da fé,</p>
                                    <p>Rainha das Virgens,</p>
                                    <p>Rainha de todos os Santos,</p>
                                    <p>Rainha concebida sem pecado original,</p>
                                    <p>Rainha assunta ao céu,</p>
                                    <p>Rainha do santo Rosário,</p>
                                    <p>Rainha da paz,</p>
                                </div>
                                <div className="bg-blue-50 dark:bg-blue-900/30 p-3 rounded-lg mt-4">
                                    <p><strong>V.</strong> Rogai por nós, santa Mãe de Deus.</p>
                                    <p><strong>R.</strong> Para que sejamos dignos das promessas de Cristo.</p>
                                </div>
                            </CardContent>
                        )}
                    </Card>

                    {/* Ladainha do Santo Nome de Jesus */}
                    <Card className="border-2 border-yellow-200 shadow-xl bg-gradient-to-br from-yellow-50 to-amber-50 dark:from-yellow-950/20 dark:to-amber-950/20">
                        <CardHeader
                            className="cursor-pointer hover:bg-white/50 dark:hover:bg-slate-800/50 transition-colors"
                            onClick={() => setExpandedPrayer(expandedPrayer === "jesus" ? null : "jesus")}
                        >
                            <div className="flex items-center justify-between">
                                <CardTitle className="text-2xl text-yellow-900 dark:text-yellow-100">
                                    Ladainha do Santíssimo Nome de Jesus
                                </CardTitle>
                                {expandedPrayer === "jesus" ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
                            </div>
                            <p className="text-sm text-yellow-700 dark:text-yellow-300 mt-2">Terceira Semana</p>
                        </CardHeader>
                        {expandedPrayer === "jesus" && (
                            <CardContent className="pt-6 space-y-2 text-slate-700 dark:text-slate-300 text-sm">
                                <p>Senhor, tende piedade de nós.</p>
                                <p>Jesus Cristo, tende piedade de nós.</p>
                                <p>Senhor, tende piedade de nós.</p>
                                <p>Jesus Cristo, ouvi-nos.</p>
                                <p>Jesus Cristo, atendei-nos.</p>
                                <p>Pai celeste, que sois Deus, tende piedade de nós.</p>
                                <p>Filho, Redentor do mundo, que sois Deus, tende piedade de nós.</p>
                                <p>Santíssima Trindade, que sois um só Deus, tende piedade de nós.</p>
                                <div className="ml-4 space-y-1 mt-3">
                                    <p>Jesus, filho de Deus vivo, tende piedade de nós.</p>
                                    <p>Jesus, pureza da luz eterna,</p>
                                    <p>Jesus, rei da glória,</p>
                                    <p>Jesus, sol de justiça,</p>
                                    <p>Jesus, filho da Virgem Maria,</p>
                                    <p>Jesus amável,</p>
                                    <p>Jesus, admirável,</p>
                                    <p>Jesus, Deus forte,</p>
                                    <p>Jesus, pai do futuro século,</p>
                                    <p>Jesus, anjo do grande conselho,</p>
                                    <p>Jesus, poderosíssimo,</p>
                                    <p>Jesus, pacienciosíssimo,</p>
                                    <p>Jesus, obedientíssimo,</p>
                                    <p>Jesus, manso e humilde de coração,</p>
                                    <p>Jesus, amante da castidade,</p>
                                    <p>Jesus, amador nosso,</p>
                                    <p>Jesus, Deus da Paz,</p>
                                    <p>Jesus, autor da vida,</p>
                                    <p>Jesus, exemplar das virtudes,</p>
                                    <p>Jesus, zelador das almas,</p>
                                    <p>Jesus, nosso refúgio,</p>
                                    <p>Jesus, pai dos pobres,</p>
                                    <p>Jesus, tesouro dos fiéis,</p>
                                    <p>Jesus, boníssimo pastor,</p>
                                    <p>Jesus, luz verdadeira,</p>
                                    <p>Jesus, sabedoria eterna,</p>
                                    <p>Jesus, bondade infinita,</p>
                                    <p>Jesus, nosso caminho e nossa vida,</p>
                                    <p>Jesus, alegria dos anjos,</p>
                                    <p>Jesus, rei dos patriarcas,</p>
                                    <p>Jesus, mestre dos apóstolos,</p>
                                    <p>Jesus, doutor dos evangelistas,</p>
                                    <p>Jesus, fortaleza dos mártires,</p>
                                    <p>Jesus, luz dos confessores,</p>
                                    <p>Jesus, pureza das virgens,</p>
                                    <p>Jesus, coroa de todos os santos,</p>
                                </div>
                                <div className="bg-yellow-50 dark:bg-yellow-900/30 p-3 rounded-lg mt-4">
                                    <p><strong>Oremos:</strong> Senhor Jesus Cristo, que dissestes: "Pedi e recebereis, buscai e achareis, batei e abrir-se-vos-á", nós Vos suplicamos que concedais a nós, que Vos pedimos, os sentimentos afetivos de Vosso divino amor, a fim de que nós Vos amemos de todo o coração e que esse amor transcenda por nossas ações. Permiti que tenhamos sempre, Senhor, um igual temor e amor pelo Vosso Santo Nome, pois não deixais de governar aqueles que estabeleceis na firmeza do Vosso amor. Vós que viveis e reinais para todo o sempre. Amém.</p>
                                </div>
                            </CardContent>
                        )}
                    </Card>

                    {/* Ladainha do Sagrado Coração */}
                    <Card className="border-2 border-rose-200 shadow-xl bg-gradient-to-br from-rose-50 to-pink-50 dark:from-rose-950/20 dark:to-pink-950/20">
                        <CardHeader
                            className="cursor-pointer hover:bg-white/50 dark:hover:bg-slate-800/50 transition-colors"
                            onClick={() => setExpandedPrayer(expandedPrayer === "coracao" ? null : "coracao")}
                        >
                            <div className="flex items-center justify-between">
                                <CardTitle className="text-2xl text-rose-900 dark:text-rose-100">
                                    Ladainha do Sagrado Coração de Jesus
                                </CardTitle>
                                {expandedPrayer === "coracao" ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
                            </div>
                            <p className="text-sm text-rose-700 dark:text-rose-300 mt-2">Terceira Semana</p>
                        </CardHeader>
                        {expandedPrayer === "coracao" && (
                            <CardContent className="pt-6 space-y-2 text-slate-700 dark:text-slate-300 text-sm">
                                <p>Senhor, tende piedade de nós.</p>
                                <p>Jesus Cristo, tende piedade de nós.</p>
                                <p>Senhor, tende piedade de nós.</p>
                                <p>Jesus Cristo, ouvi-nos.</p>
                                <p>Jesus Cristo, atendei-nos.</p>
                                <p>Pai celeste, que sois Deus, tende piedade de nós.</p>
                                <p>Filho, Redentor do mundo, que sois Deus, tende piedade de nós.</p>
                                <p>Espírito Santo, que sois Deus, tende piedade de nós.</p>
                                <p>Santíssima Trindade, que sois um só Deus, tende piedade de nós.</p>
                                <div className="ml-4 space-y-1 mt-3">
                                    <p>Coração de Jesus, Filho do Pai eterno, tende piedade de nós.</p>
                                    <p>Coração de Jesus, formado pelo Espírito Santo no seio da Virgem Mãe,</p>
                                    <p>Coração de Jesus, unido substancialmente ao Verbo de Deus,</p>
                                    <p>Coração de Jesus, de majestade infinita,</p>
                                    <p>Coração de Jesus, templo santo de Deus,</p>
                                    <p>Coração de Jesus, tabernáculo do Altíssimo,</p>
                                    <p>Coração de Jesus, casa de Deus e porta do Céu,</p>
                                    <p>Coração de Jesus, fornalha ardente de caridade,</p>
                                    <p>Coração de Jesus, receptáculo de justiça e de amor,</p>
                                    <p>Coração de Jesus, cheio de bondade e de amor,</p>
                                    <p>Coração de Jesus, abismo de todas as virtudes,</p>
                                    <p>Coração de Jesus, digníssimo de todo o louvor,</p>
                                    <p>Coração de Jesus, Rei e centro de todos os corações,</p>
                                    <p>Coração de Jesus, no qual estão todos os tesouros da sabedoria e ciência,</p>
                                    <p>Coração de Jesus, no qual habita toda a plenitude da divindade,</p>
                                    <p>Coração de Jesus, no qual o Pai põe todas as suas complacências,</p>
                                    <p>Coração de Jesus, de cuja plenitude todos nós participamos,</p>
                                    <p>Coração de Jesus, desejo das colinas eternas,</p>
                                    <p>Coração de Jesus, paciente e de muita misericórdia,</p>
                                    <p>Coração de Jesus, rico para todos que vos invocam,</p>
                                    <p>Coração de Jesus, fonte de vida e santidade,</p>
                                    <p>Coração de Jesus, propiciação por nossos pecados,</p>
                                    <p>Coração de Jesus, saturado de opróbrios,</p>
                                    <p>Coração de Jesus, esmagado de dor por causa dos nossos pecados,</p>
                                    <p>Coração de Jesus, feito obediente até a morte,</p>
                                    <p>Coração de Jesus, transpassado pela lança,</p>
                                    <p>Coração de Jesus, fonte de toda consolação,</p>
                                    <p>Coração de Jesus, nossa vida e ressurreição,</p>
                                    <p>Coração de Jesus, nossa paz e reconciliação,</p>
                                    <p>Coração de Jesus, vítima dos pecadores,</p>
                                    <p>Coração de Jesus, salvação dos que em vós esperam,</p>
                                    <p>Coração de Jesus, esperança dos que morrem em vós,</p>
                                    <p>Coração de Jesus, delícias de todos os santos,</p>
                                </div>
                                <div className="bg-rose-50 dark:bg-rose-900/30 p-3 rounded-lg mt-4">
                                    <p><strong>V.</strong> Jesus, manso e humilde de coração,</p>
                                    <p><strong>R.</strong> Fazei o nosso coração semelhante ao vosso.</p>
                                    <p className="mt-2"><strong>Oremos:</strong> Deus eterno e todo-poderoso, olhai para o Coração do vosso diletíssimo Filho e para os louvores e satisfações que Ele, em nome dos pecadores, vos tem tributado; e, deixando-vos aplacar, perdoai aos que imploram a vossa misericórdia, em nome de vosso mesmo Filho, Jesus Cristo, que convosco vive e reina na unidade do Espírito Santo. Amém.</p>
                                </div>
                            </CardContent>
                        )}
                    </Card>
                </div>
            )}

            {/* Fórmula de Consagração */}
            {showFormula ? (
                <Card className="border-2 border-red-200 shadow-2xl bg-gradient-to-br from-red-50 to-pink-50 dark:from-red-950/20 dark:to-pink-950/20 max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-300">
                    <CardHeader className="bg-gradient-to-r from-red-100 to-pink-100 dark:from-red-900/30 dark:to-pink-900/30">
                        <CardTitle className="text-3xl text-center text-red-900 dark:text-red-100 font-brand">
                            Fórmula de Consagração a Jesus por Maria
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-8 px-8 pb-8">
                        <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
                            <p className="text-center italic text-lg font-semibold text-red-800 dark:text-red-200">
                                (Reze esta fórmula no 33º dia e renove-a diariamente)
                            </p>

                            <div className="space-y-4 text-base">
                                <p>
                                    Ó Eterna e Encarnada Sabedoria! Ó amabilíssimo e adorabilíssimo Jesus, verdadeiro Deus e verdadeiro homem, Filho único do Eterno Pai e de Maria sempre Virgem!
                                </p>

                                <p>
                                    Eu Vos adoro profundamente no seio e nos esplendores de Vosso Pai, durante a eternidade, e no seio virginal de Maria, Vossa digníssima Mãe, no tempo de Vossa Encarnação.
                                </p>

                                <p>
                                    Dou-Vos graças por Vos haverdes aniquilado, tomando a forma de escravo, para me libertar da cruel escravidão do demônio.
                                </p>

                                <p>
                                    Louvo-Vos e glorifico-Vos por Vos haverdes dignado submeter-Vos a Maria, Vossa Santíssima Mãe, em todas as coisas, a fim de me tornar, por Ela, Vosso fiel escravo.
                                </p>

                                <p>
                                    Mas, ai de mim! Ingrato e infiel como tenho sido, não guardei as promessas que tão solenemente Vos fiz no meu Batismo. Não cumpri as minhas obrigações; não mereço ser chamado Vosso filho, nem Vosso escravo; e, como nada há em mim que não mereça Vossas repulsas e Vossa cólera, não ouso mais, por mim mesmo, aproximar-me de Vossa santíssima e augusta Majestade.
                                </p>

                                <p>
                                    É por isso que recorro à intercessão e à misericórdia de Vossa Santíssima Mãe, que me destes por Medianeira junto de Vós; e é por seu intermédio que espero obter de Vós a contrição e o perdão de meus pecados, a aquisição e a conservação da Sabedoria.
                                </p>

                                <p className="font-bold text-red-800 dark:text-red-200">
                                    Saúdo-Vos, pois, ó Maria Imaculada, Tabernáculo vivo da Divindade, onde a Eterna Sabedoria escondida quer ser adorada pelos anjos e pelos homens.
                                </p>

                                <p className="font-bold text-red-800 dark:text-red-200">
                                    Saúdo-Vos, ó Rainha do Céu e da terra, a cujo império está submetido tudo o que está abaixo de Deus.
                                </p>

                                <p>
                                    Saúdo-Vos, ó Refúgio seguro dos pecadores, cuja misericórdia a ninguém falta. Atendei aos desejos que tenho da Divina Sabedoria e recebei, para isso, os votos e ofertas que minha baixeza Vos apresenta.
                                </p>

                                <p className="font-bold text-lg text-red-900 dark:text-red-100 bg-red-100 dark:bg-red-900/30 p-4 rounded-lg border-l-4 border-red-500">
                                    Eu, (diga seu nome), pecador infiel, renovo e ratifico hoje em vossas mãos os votos do meu Batismo: renuncio para sempre a Satanás, a suas pompas e a suas obras, e dou-me inteiramente a Jesus Cristo, a Sabedoria Encarnada, para carregar a minha cruz em Seu seguimento todos os dias da minha vida, e a fim de que Lhe seja mais fiel do que até aqui tenho sido.
                                </p>

                                <p className="font-bold text-lg text-red-900 dark:text-red-100">
                                    Hoje, na presença de toda a Corte Celestial, escolho-Vos, ó Maria, por minha Mãe e Senhora. Entrego-Vos e consagro-Vos, como Vosso escravo, meu corpo e minha alma, meus bens interiores e exteriores, e até o valor de minhas boas ações passadas, presentes e futuras, deixando-Vos inteiro e pleno direito de dispor de mim e de tudo o que me pertence, sem exceção, segundo o Vosso beneplácito, para a maior glória de Deus, no tempo e na eternidade.
                                </p>

                                <p>
                                    Recebei, ó Virgem benignissima, esta pequena oferta de minha escravidão, em honra e união com a submissão que a Sabedoria Eterna quis ter à Vossa maternidade; em homenagem ao poder que ambos tendes sobre este vermezinho e miserável pecador; e em ação de graças pelos privilégios com que a Santíssima Trindade Vos favoreceu.
                                </p>

                                <p>
                                    Protesto que quero, de ora em diante, como Vosso verdadeiro escravo, procurar a Vossa honra e obedecer-Vos em todas as coisas.
                                </p>

                                <p className="font-bold text-red-800 dark:text-red-200">
                                    Ó Mãe admirável, apresentai-me a Vosso amado Filho, como Seu escravo perpétuo, a fim de que, tendo-me Ele remido por Vós, também por Vós me receba.
                                </p>

                                <p className="font-bold text-red-800 dark:text-red-200">
                                    Ó Mãe de misericórdia, fazei-me a graça de obter a verdadeira Sabedoria de Deus, e colocai-me para esse fim no número daqueles que amais, que ensinais, que guiais, que alimentais e protegeis como filhos e escravos Vossos.
                                </p>

                                <p>
                                    Ó Virgem fiel, fazei-me em tudo tão perfeito discípulo, imitador e escravo da Sabedoria Encarnada, Jesus Cristo, Vosso Filho, que eu chegue, por Vossa intercessão e exemplo, à plenitude de Sua idade na terra e de Sua glória nos Céus.
                                </p>

                                <p className="text-center font-bold text-lg mt-6">
                                    Amém.
                                </p>
                            </div>

                            <div className="mt-8 p-4 bg-red-100 dark:bg-red-900/30 rounded-lg border-l-4 border-red-500">
                                <p className="text-sm font-semibold text-red-900 dark:text-red-100">
                                    📌 Importante: No dia da Consagração é fortemente recomendável que se esteja em estado de graça e, sendo possível, que se comungue, recitando a consagração durante a ação de graças. São Luís sugere também que se ofereça a Nossa Senhora um presente.
                                </p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            ) : !showMethod && (
                <div className="space-y-6 max-w-5xl mx-auto">
                    {weeks.map((week, weekIndex) => (
                        <Card
                            key={weekIndex}
                            className="border-2 border-blue-200 shadow-xl overflow-hidden transition-all duration-300 bg-gradient-to-br from-blue-50 to-sky-50 dark:from-blue-950/20 dark:to-sky-950/20"
                        >
                            <CardHeader
                                className="cursor-pointer hover:bg-white/50 dark:hover:bg-slate-800/50 transition-colors"
                                onClick={() => toggleWeek(weekIndex)}
                            >
                                <div className="flex items-center justify-between">
                                    <div>
                                        <CardTitle className="text-2xl text-blue-800 dark:text-blue-200 flex items-center gap-3">
                                            <span className="w-2 h-8 bg-current rounded-full"></span>
                                            {week.title}
                                        </CardTitle>
                                        <p className="text-sm text-slate-600 dark:text-slate-400 mt-2 ml-5 italic">
                                            {week.subtitle}
                                        </p>
                                    </div>
                                    {expandedWeek === weekIndex ? (
                                        <ChevronUp className="w-6 h-6 text-blue-600" />
                                    ) : (
                                        <ChevronDown className="w-6 h-6 text-blue-600" />
                                    )}
                                </div>
                            </CardHeader>

                            {expandedWeek === weekIndex && (
                                <CardContent className="pt-6 px-8 pb-8 space-y-6">
                                    <div className="p-5 bg-blue-50 dark:bg-blue-900/30 rounded-xl border-l-4 border-blue-500">
                                        <p className="text-slate-700 dark:text-slate-300 italic">
                                            {week.intro}
                                        </p>
                                    </div>

                                    {week.days.map((dayInfo) => (
                                        <div
                                            key={dayInfo.day}
                                            className="p-5 bg-white/70 dark:bg-slate-800/70 rounded-xl border-l-4 border-blue-500 shadow-md hover:shadow-lg transition-shadow"
                                        >
                                            <div className="flex items-start gap-4">
                                                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                                                    {dayInfo.day}
                                                </div>
                                                <div className="flex-1">
                                                    <h4 className="font-bold text-lg text-blue-900 dark:text-blue-100 mb-2">
                                                        {dayInfo.theme}
                                                    </h4>
                                                    <p className="text-sm text-slate-600 dark:text-slate-400">
                                                        {dayInfo.reference}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}

                                    <div className="mt-6 p-5 bg-amber-50 dark:bg-amber-900/30 rounded-xl border-l-4 border-amber-500">
                                        <h4 className="font-bold text-amber-900 dark:text-amber-100 mb-3">
                                            📿 Orações Diárias:
                                        </h4>
                                        <ul className="space-y-1 text-sm text-slate-700 dark:text-slate-300">
                                            {week.prayers.map((prayer, idx) => (
                                                <li key={idx}>• {prayer}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </CardContent>
                            )}
                        </Card>
                    ))}

                    <div className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 rounded-2xl border-2 border-green-200 dark:border-green-800 shadow-lg">
                        <h3 className="text-xl font-bold text-green-900 dark:text-green-100 mb-4 text-center flex items-center justify-center gap-2">
                            <Heart className="w-6 h-6 text-red-500" />
                            Dia 33: Dia da Consagração
                        </h3>
                        <p className="text-slate-700 dark:text-slate-300 text-center mb-4">
                            Após os 33 dias de preparação, você estará pronto para fazer sua Consagração a Jesus por Maria!
                        </p>
                        <ul className="space-y-2 text-slate-700 dark:text-slate-300 list-disc ml-6 text-sm">
                            <li>Escolha uma data significativa (festa de Nossa Senhora, aniversário, etc.)</li>
                            <li>Conte 33 dias para trás a partir dessa data para começar a preparação</li>
                            <li>Esteja em estado de graça (confesse-se antes)</li>
                            <li>Se possível, comungue no dia da consagração</li>
                            <li>Reze a fórmula durante a ação de graças após a comunhão</li>
                            <li>Ofereça um presente a Nossa Senhora</li>
                            <li>Renove sua consagração todos os dias</li>
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
}
