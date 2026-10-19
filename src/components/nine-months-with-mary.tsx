"use client";

import React, { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { 
  Heart, 
  Calendar, 
  Sparkles, 
  CheckCircle2, 
  Copy, 
  Check, 
  Share2, 
  BookOpen, 
  Baby, 
  ChevronRight, 
  Clock,
  RotateCcw,
  ShieldCheck,
  Flame
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { 
  PREGNANCY_MONTHS, 
  calculatePregnancyDay, 
  ORACAO_OFICIAL_NOVE_MESES, 
  ORACAO_PELAS_GESTANTES_E_VIDA,
  PregnancyMonthInfo
} from "@/lib/nine-months-data";
import { getProxiedImageUrl } from "@/lib/utils";

export function NineMonthsWithMary() {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [selectedMonthNumber, setSelectedMonthNumber] = useState<number>(1);
  const [copied, setCopied] = useState(false);
  const [prayedToday, setPrayedToday] = useState(false);
  const [completedCount, setCompletedCount] = useState<number>(0);
  const [showSeasonHelp, setShowSeasonHelp] = useState(false);

  // Cálculo baseado no dia atual
  const todayCalc = useMemo(() => calculatePregnancyDay(new Date()), []);
  
  // Cálculo baseado na data selecionada ou visualizada
  const activeCalc = useMemo(() => calculatePregnancyDay(selectedDate), [selectedDate]);

  // Inicializa o mês selecionado com base no dia de hoje
  useEffect(() => {
    setSelectedMonthNumber(todayCalc.monthIndex);
  }, [todayCalc.monthIndex]);

  // Carrega status de oração do localStorage
  useEffect(() => {
    try {
      const todayStr = format(new Date(), "yyyy-MM-dd");
      const savedPrayed = localStorage.getItem(`nove-meses-prayed-${todayStr}`);
      if (savedPrayed === "true") {
        setPrayedToday(true);
      }

      const savedCount = localStorage.getItem("nove-meses-total-days-count");
      if (savedCount) {
        setCompletedCount(parseInt(savedCount, 10) || 0);
      }
    } catch (e) {
      console.error("Erro ao carregar dados dos 9 meses", e);
    }
  }, []);

  const handleTogglePrayed = () => {
    try {
      const todayStr = format(new Date(), "yyyy-MM-dd");
      const newStatus = !prayedToday;
      setPrayedToday(newStatus);

      if (newStatus) {
        localStorage.setItem(`nove-meses-prayed-${todayStr}`, "true");
        const newCount = completedCount + 1;
        setCompletedCount(newCount);
        localStorage.setItem("nove-meses-total-days-count", newCount.toString());
      } else {
        localStorage.removeItem(`nove-meses-prayed-${todayStr}`);
        const newCount = Math.max(0, completedCount - 1);
        setCompletedCount(newCount);
        localStorage.setItem("nove-meses-total-days-count", newCount.toString());
      }
    } catch (e) {
      console.error(e);
    }
  };

  const selectedMonth: PregnancyMonthInfo = useMemo(() => {
    return PREGNANCY_MONTHS.find(m => m.numero === selectedMonthNumber) || PREGNANCY_MONTHS[0];
  }, [selectedMonthNumber]);

  const handleSelectMonth = (monthNum: number) => {
    setSelectedMonthNumber(monthNum);
  };

  const handleReturnToToday = () => {
    setSelectedDate(new Date());
    setSelectedMonthNumber(todayCalc.monthIndex);
  };

  const handleCopyPrayer = async () => {
    try {
      const fullPrayerText = `🕊️ 9 MESES COM MARIA — ORAÇÃO DO DIA 🕊️\n` +
        `Data: ${format(new Date(), "dd 'de' MMMM", { locale: ptBR })}\n` +
        `Mês: ${selectedMonth.nome} — ${selectedMonth.subtitulo}\n` +
        `Virtude: ${selectedMonth.virtudePrincipal}\n\n` +
        `📖 Palavra de Deus: "${selectedMonth.passagemBiblica}" (${selectedMonth.referencia})\n\n` +
        `Reflexão:\n${selectedMonth.reflexao}\n\n` +
        `Oração do Mês:\n${selectedMonth.oracaoDoMes}\n\n` +
        `Oração Oficial da Gestação:\n${ORACAO_OFICIAL_NOVE_MESES}\n\n` +
        `Súplica pelas Mães e Gestantes:\n${ORACAO_PELAS_GESTANTES_E_VIDA}\n\n` +
        `Rezar: 1 Pai-Nosso, 3 Ave-Marias e 1 Glória ao Pai.\n` +
        `Nossa Senhora do Bom Parto e da Conceição, rogai por nós!`;

      await navigator.clipboard.writeText(fullPrayerText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (e) {
      console.error("Erro ao copiar oração", e);
    }
  };

  const handleShareWhatsApp = () => {
    const text = `🕊️ *9 Meses com Maria — Oração de Hoje*\n` +
      `Estou rezando a devoção da gestação de Nossa Senhora (${selectedMonth.nome}).\n\n` +
      `"${selectedMonth.passagemBiblica}" (${selectedMonth.referencia})\n\n` +
      `*Virtude do Mês:* ${selectedMonth.virtudePrincipal}\n\n` +
      `*Oração:* ${selectedMonth.oracaoDoMes}\n\n` +
      `Acompanhe diariamente no Espaço Mariano!`;
    const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-6xl mx-auto">
      {/* ── Banner de Apresentação / Header ── */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-900 via-indigo-900 to-sky-900 text-white p-6 sm:p-10 shadow-2xl border border-blue-400/30">
        <div className="absolute -right-16 -bottom-16 w-72 h-72 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -left-16 -top-16 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row items-center gap-6 justify-between">
          <div className="space-y-3 text-center md:text-left max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold text-sky-200">
              <Baby className="w-4 h-4 text-amber-300" />
              <span>Devoção Sagrada dos Nove Meses da Gestação</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold font-brand tracking-tight drop-shadow-md">
              9 Meses com Maria
            </h2>
            <p className="text-sm sm:text-base text-blue-100/90 leading-relaxed font-sans">
              Acompanhe a Santíssima Virgem desde a Anunciação do Senhor (25 de Março) até o Santo Natal (25 de Dezembro), rezando diariamente pelo mistério do Verbo Encarnado em seu puríssimo seio.
            </p>
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 pt-1 text-xs text-blue-200/80">
              <span className="flex items-center gap-1 bg-black/20 px-3 py-1 rounded-full">
                <Calendar className="w-3.5 h-3.5 text-amber-300" />
                25 Março a 25 Dezembro
              </span>
              <span className="flex items-center gap-1 bg-black/20 px-3 py-1 rounded-full">
                <ShieldCheck className="w-3.5 h-3.5 text-sky-300" />
                Bênção às Mães e Famílias
              </span>
            </div>
          </div>

          {/* Card com a data de hoje e cálculo */}
          <div className="bg-white/10 backdrop-blur-xl border border-white/25 rounded-2xl p-5 text-center min-w-[280px] shadow-xl space-y-3">
            <div className="flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-300">
              <Clock className="w-4 h-4" />
              <span>Data de Hoje</span>
            </div>
            <p className="text-xl font-bold text-white capitalize font-brand">
              {format(new Date(), "EEEE, dd 'de' MMMM", { locale: ptBR })}
            </p>
            
            <div className="h-px bg-white/15 my-2" />

            {todayCalc.isWithinSeason ? (
              <div className="space-y-1.5">
                <Badge className="bg-amber-400 text-amber-950 font-bold hover:bg-amber-300 text-xs px-3 py-1">
                  {todayCalc.monthInfo.nome}
                </Badge>
                <p className="text-xs text-blue-100">
                  Dia <strong className="text-white text-sm">{todayCalc.dayOfMonth}</strong> do mês • Dia <strong className="text-white text-sm">{todayCalc.totalDayNumber}</strong> da gestação
                </p>
                <p className="text-[11px] text-sky-200/80 italic">
                  Faltam {todayCalc.daysRemainingToChristmas} dias para o Natal do Senhor
                </p>
              </div>
            ) : (
              <div className="space-y-1">
                <Badge variant="outline" className="text-amber-200 border-amber-300/40 text-[11px]">
                  Fora da Temporada Tradicional
                </Badge>
                <p className="text-[11px] text-blue-200 leading-tight">
                  A caminhada litúrgica vai de 25/03 a 25/12, mas você pode rezar a qualquer momento!
                </p>
              </div>
            )}

            {/* Contador de dias rezados */}
            {completedCount > 0 && (
              <div className="pt-1 text-[11px] text-emerald-300 font-semibold flex items-center justify-center gap-1">
                <Flame className="w-3.5 h-3.5 text-amber-400" />
                <span>Você já rezou {completedCount} dia(s)</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ── Barra de Navegação Horizontal dos 9 Meses ── */}
      <Card className="border border-blue-200 dark:border-blue-900 shadow-md bg-white dark:bg-slate-900">
        <CardHeader className="pb-3 pt-5 px-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <CardTitle className="text-xl font-bold text-blue-900 dark:text-blue-100 font-brand flex items-center gap-2">
                <Calendar className="w-5 h-5 text-blue-600" />
                Os 9 Meses da Gestação
              </CardTitle>
              <CardDescription className="text-xs sm:text-sm">
                Selecione um mês para ver a oração e a meditação correspondente
              </CardDescription>
            </div>

            {selectedMonthNumber !== todayCalc.monthIndex && todayCalc.isWithinSeason && (
              <Button
                variant="outline"
                size="sm"
                onClick={handleReturnToToday}
                className="text-xs border-blue-300 text-blue-800 hover:bg-blue-50 dark:border-blue-700 dark:text-blue-200 shrink-0 self-start sm:self-auto flex items-center gap-1.5"
              >
                <RotateCcw className="w-3.5 h-3.5 text-blue-600" />
                Voltar para o Mês de Hoje ({todayCalc.monthInfo.nome})
              </Button>
            )}
          </div>
        </CardHeader>
        <CardContent className="px-3 pb-5">
          <ScrollArea className="w-full whitespace-nowrap [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden pb-2">
            <div className="flex gap-2 sm:gap-3 p-1">
              {PREGNANCY_MONTHS.map((m) => {
                const isSelected = selectedMonthNumber === m.numero;
                const isTodayMonth = todayCalc.isWithinSeason && todayCalc.monthIndex === m.numero;

                return (
                  <button
                    key={m.numero}
                    onClick={() => handleSelectMonth(m.numero)}
                    className={`shrink-0 flex flex-col text-left p-3.5 rounded-2xl border-2 transition-all duration-200 min-w-[150px] sm:min-w-[170px] relative cursor-pointer ${
                      isSelected
                        ? "bg-blue-800 text-white border-blue-800 shadow-lg scale-[1.02]"
                        : "bg-slate-50 dark:bg-slate-800/60 text-slate-700 dark:text-slate-200 border-slate-200 dark:border-slate-700 hover:border-blue-300 hover:bg-blue-50/50"
                    }`}
                  >
                    {isTodayMonth && (
                      <span className="absolute -top-1.5 -right-1.5 px-2 py-0.5 rounded-full bg-amber-400 text-amber-950 font-bold text-[9px] shadow-sm flex items-center gap-0.5">
                        <Sparkles className="w-2.5 h-2.5" /> HOJE
                      </span>
                    )}

                    <div className="flex items-center justify-between mb-1">
                      <span className={`text-xs font-bold uppercase tracking-wider ${isSelected ? "text-sky-200" : "text-blue-600 dark:text-blue-400"}`}>
                        {m.nome}
                      </span>
                    </div>

                    <p className={`text-xs font-bold truncate max-w-[140px] sm:max-w-[160px] ${isSelected ? "text-white" : "text-slate-800 dark:text-slate-100"}`}>
                      {m.subtitulo}
                    </p>

                    <p className={`text-[10px] mt-1 ${isSelected ? "text-blue-200" : "text-slate-500 dark:text-slate-400"}`}>
                      {m.periodo}
                    </p>
                  </button>
                );
              })}
            </div>
            <ScrollBar orientation="horizontal" className="h-1.5" />
          </ScrollArea>
        </CardContent>
      </Card>

      {/* ── Card Principal: A Oração e Meditação do Dia ── */}
      <div className="grid lg:grid-cols-3 gap-6 items-start">
        {/* Coluna Lateral: Card com Imagem e Mistério do Mês */}
        <div className="lg:col-span-1 space-y-5">
          <Card className="border-2 border-blue-200 dark:border-blue-900 shadow-xl overflow-hidden bg-white dark:bg-slate-900">
            <div className="relative h-64 sm:h-72 w-full bg-gradient-to-t from-black/80 via-black/20 to-transparent">
              <Image
                src={getProxiedImageUrl(selectedMonth.imagemUrl)}
                alt={selectedMonth.nome}
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 33vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              
              <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 z-10">
                <Badge className="bg-blue-700 text-white font-bold text-xs shadow-md">
                  {selectedMonth.nome}
                </Badge>
                <Badge className="bg-amber-500/90 text-amber-950 font-bold text-xs shadow-md">
                  {selectedMonth.periodo}
                </Badge>
              </div>

              <div className="absolute bottom-4 left-4 right-4 text-white z-10">
                <p className="text-xs text-sky-200 font-semibold uppercase tracking-wider">Mistério do Mês</p>
                <h3 className="text-xl font-bold font-brand leading-tight text-white drop-shadow-md">
                  {selectedMonth.misterio}
                </h3>
              </div>
            </div>

            <CardContent className="p-5 space-y-4">
              <div className="p-3.5 bg-blue-50 dark:bg-blue-950/40 rounded-xl border border-blue-200/80 dark:border-blue-800">
                <p className="text-[11px] font-bold uppercase tracking-wider text-blue-700 dark:text-blue-300 mb-1 flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                  Virtude Mariana a Cultivar
                </p>
                <p className="text-sm font-bold text-slate-800 dark:text-slate-100">
                  {selectedMonth.virtudePrincipal}
                </p>
              </div>

              <div className="space-y-2 text-xs text-slate-600 dark:text-slate-300">
                <p className="font-semibold text-slate-700 dark:text-slate-200 flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-blue-600" />
                  Palavra de Deus ({selectedMonth.referencia}):
                </p>
                <blockquote className="italic border-l-2 border-blue-400 pl-3 py-1 bg-slate-50 dark:bg-slate-800/60 rounded-r-lg text-slate-700 dark:text-slate-200">
                  "{selectedMonth.passagemBiblica}"
                </blockquote>
              </div>

              {/* Botão de Conclusão / Já Rezei Hoje */}
              <div className="pt-2">
                <Button
                  onClick={handleTogglePrayed}
                  className={`w-full py-5 rounded-xl font-bold transition-all shadow-md flex items-center justify-center gap-2 ${
                    prayedToday
                      ? "bg-emerald-600 hover:bg-emerald-700 text-white"
                      : "bg-gradient-to-r from-blue-700 to-indigo-700 hover:from-blue-800 hover:to-indigo-800 text-white"
                  }`}
                >
                  <CheckCircle2 className="w-5 h-5" />
                  <span>{prayedToday ? "Oração Concluída Hoje! ✓" : "Marcar como Rezado Hoje"}</span>
                </Button>
                {prayedToday && (
                  <p className="text-[11px] text-center text-emerald-600 dark:text-emerald-400 font-semibold mt-1.5">
                    Deus abençoe sua oração e perseverança!
                  </p>
                )}
              </div>

              {/* Botões de Ação Rápida */}
              <div className="flex gap-2 pt-1">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleCopyPrayer}
                  className="flex-1 text-xs border-slate-300 dark:border-slate-700 flex items-center justify-center gap-1.5"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? "Copiado!" : "Copiar"}</span>
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleShareWhatsApp}
                  className="flex-1 text-xs border-green-300 text-green-700 hover:bg-green-50 dark:border-green-800 dark:text-green-300 flex items-center justify-center gap-1.5"
                >
                  <Share2 className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Coluna Central/Principal: Meditação e Textos de Oração */}
        <div className="lg:col-span-2 space-y-6">
          {/* Card da Meditação do Mês */}
          <Card className="border border-blue-200 dark:border-blue-900 shadow-lg bg-white dark:bg-slate-900">
            <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-slate-800 dark:to-blue-950/40 pb-4 border-b border-blue-100 dark:border-blue-900/60">
              <div className="flex items-center justify-between">
                <div>
                  <Badge variant="outline" className="text-blue-800 dark:text-blue-300 border-blue-300 font-bold mb-1">
                    Meditação do {selectedMonth.nome}
                  </Badge>
                  <CardTitle className="text-2xl font-bold font-brand text-blue-900 dark:text-blue-100">
                    {selectedMonth.subtitulo}
                  </CardTitle>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-6 space-y-5 leading-relaxed text-slate-700 dark:text-slate-300">
              <div className="text-sm sm:text-base leading-relaxed space-y-3">
                <p>{selectedMonth.reflexao}</p>
              </div>

              {/* Oração específica do mês */}
              <div className="p-4 sm:p-5 rounded-2xl bg-blue-50/70 dark:bg-blue-950/50 border border-blue-200 dark:border-blue-800/80 space-y-2">
                <p className="text-xs font-bold uppercase tracking-wider text-blue-800 dark:text-blue-300 flex items-center gap-1.5">
                  <Flame className="w-4 h-4 text-amber-500" />
                  Oração Especial do {selectedMonth.nome}
                </p>
                <p className="italic text-slate-800 dark:text-slate-200 font-serif leading-relaxed text-sm sm:text-base">
                  "{selectedMonth.oracaoDoMes}"
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Card da Oração Oficial dos Nove Meses da Gestação */}
          <Card className="border-2 border-amber-200 dark:border-amber-900/50 shadow-xl bg-gradient-to-br from-white via-amber-50/20 to-blue-50/20 dark:from-slate-900 dark:via-slate-900 dark:to-amber-950/10">
            <CardHeader className="bg-gradient-to-r from-amber-100/60 via-amber-50/40 to-blue-100/40 dark:from-amber-950/30 dark:to-slate-900 pb-4 border-b border-amber-200/50">
              <CardTitle className="text-2xl font-bold font-brand text-amber-950 dark:text-amber-200 flex items-center gap-2">
                <Baby className="w-6 h-6 text-amber-600" />
                Oração Solene dos Nove Meses da Gestação de Maria
              </CardTitle>
              <CardDescription>
                Reza-se todos os dias durante a caminhada dos 9 meses
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6 space-y-6">
              <div className="text-sm sm:text-base font-serif leading-relaxed text-slate-800 dark:text-slate-200 whitespace-pre-line space-y-4 bg-white/70 dark:bg-slate-800/50 p-5 rounded-2xl border border-amber-100 dark:border-amber-900/40 shadow-inner">
                {ORACAO_OFICIAL_NOVE_MESES}
              </div>

              {/* Orações Vocais Tradicionais */}
              <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-blue-900 to-indigo-900 text-white space-y-3 shadow-md">
                <h4 className="text-sm font-bold uppercase tracking-wider text-sky-200 flex items-center gap-2">
                  <Heart className="w-4 h-4 text-red-400" />
                  Orações Complementares Diárias
                </h4>
                <div className="space-y-2 text-xs sm:text-sm text-blue-100">
                  <p>⚜️ <strong>1 Pai-Nosso</strong> (em louvor ao Pai Eterno que escolheu Maria para Mãe do Seu Filho).</p>
                  <p>⚜️ <strong>3 Ave-Marias</strong> (em honra dos mistérios da Encarnação, da Gestação Sagrada e da Natividade).</p>
                  <p>⚜️ <strong>1 Glória ao Pai</strong> (pela glória eterna concedida à Santíssima Trindade).</p>
                </div>
              </div>

              {/* Oração pelas Mães e Gestantes */}
              <div className="p-4 sm:p-5 rounded-2xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-amber-900 dark:text-amber-300 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-amber-600" />
                  Bênção Especial pelas Mães Gestantes e pela Vida
                </h4>
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed italic">
                  "{ORACAO_PELAS_GESTANTES_E_VIDA}"
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* ── Guia Teológico e Espiritual da Devoção ── */}
      <Card className="border border-blue-200 dark:border-blue-900 shadow-lg bg-white dark:bg-slate-900">
        <CardHeader className="bg-slate-50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-800">
          <CardTitle className="text-xl font-bold font-brand text-blue-900 dark:text-blue-100 flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-blue-600" />
            O que é a Devoção dos 9 Meses com Maria?
          </CardTitle>
          <CardDescription>
            Origem, tradição católica e como viver espiritualmente este caminho
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-6 space-y-4 text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
          <p>
            A devoção dos <strong>9 Meses com Maria</strong> é uma piedosa tradição católica que acompanha dia a dia o período em que Nosso Senhor Jesus Cristo habitou no seio virginal de Maria Santíssima — desde a <strong>Solenidade da Anunciação do Senhor (25 de Março)</strong> até a <strong>Solenidade do Santo Natal (25 de Dezembro)</strong>.
          </p>
          <p>
            Durante esses 275 dias de espera orante, os fiéis contemplam Maria como o <em>Primeiro Sacrário da Terra</em>. A Igreja celebra esta verdade de fé proclamando que, no instante do 'Sim' de Maria, o Verbo Eterno de Deus assumiu a nossa natureza humana para nos salvar.
          </p>
          <div className="grid sm:grid-cols-3 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-blue-50 dark:bg-slate-800 border border-blue-200 dark:border-blue-800">
              <h5 className="font-bold text-blue-900 dark:text-blue-200 mb-1">Pela Vida dos Nascituros</h5>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                Uma poderosa súplica contra o aborto e em defesa de todos os bebês em formação no ventre materno.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-blue-50 dark:bg-slate-800 border border-blue-200 dark:border-blue-800">
              <h5 className="font-bold text-blue-900 dark:text-blue-200 mb-1">Pelas Mães Gestantes</h5>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                Proteção divina para as grávidas, um parto abençoado e saúde para as famílias que esperam um filho.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-blue-50 dark:bg-slate-800 border border-blue-200 dark:border-blue-800">
              <h5 className="font-bold text-blue-900 dark:text-blue-200 mb-1">Preparação para o Natal</h5>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                Purificar o coração mês a mês para que Jesus encontre em nós um presépio puro e acolhedor na Noite Santa.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
