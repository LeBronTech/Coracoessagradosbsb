"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { format, addDays, startOfDay, parseISO } from "date-fns";
import { ptBR } from "date-fns/locale";
import {
  Heart,
  Calendar as CalendarIcon,
  CheckCircle2,
  ChevronLeft,
  ChevronDown,
  ChevronUp,
  Check,
  BookOpen,
  Download,
  MessageCircle,
  Sparkles,
  Link as LinkIcon,
  Flame,
  ShieldCheck,
  RotateCcw,
  Copy,
  X
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import {
  getMarianConsecrationPresets,
  getCustomMarianPreset,
  MarianConsecrationPreset
} from "@/lib/utils/marian-consecration-dates";
import {
  MARIAN_CONSECRATION_DAYS,
  MarianConsecrationDay
} from "@/lib/marian-consecration-days-data";
import { getProxiedImageUrl, cn } from "@/lib/utils";

export function ConsecrationSection() {
  const [selectedGoalId, setSelectedGoalId] = useState<string>("aparecida");
  const [customStartDate, setCustomStartDate] = useState<Date>(new Date());
  const [tempDate, setTempDate] = useState<string>(format(new Date(), "yyyy-MM-dd"));
  const [completedDays, setCompletedDays] = useState<number[]>([]);
  const [year] = useState<number>(new Date().getFullYear());
  const [activeTab, setActiveTab] = useState<string>("dia-1");

  // Visualizadores adicionais
  const [showFormula, setShowFormula] = useState(false);
  const [showMethod, setShowMethod] = useState(false);
  const [showPrayers, setShowPrayers] = useState(false);
  const [expandedPrayer, setExpandedPrayer] = useState<string | null>(null);

  const presets = getMarianConsecrationPresets(year);

  // Preset selecionado
  const selectedPreset: MarianConsecrationPreset = selectedGoalId === "custom"
    ? getCustomMarianPreset(customStartDate)
    : (presets.find(p => p.id === selectedGoalId) || presets[0]);

  // Identificar dia atual da consagração
  const today = startOfDay(new Date());
  const diffInDays = Math.floor((today.getTime() - startOfDay(selectedPreset.startDate).getTime()) / (1000 * 60 * 60 * 24));
  const currentConsagracaoDay = diffInDays >= 0 && diffInDays < 33 ? diffInDays + 1 : null;

  // Persistência em localStorage
  useEffect(() => {
    try {
      const savedGoal = localStorage.getItem("mariano-consagracao-goal");
      if (savedGoal) {
        setSelectedGoalId(savedGoal);
      }

      const savedCustomDate = localStorage.getItem("mariano-consagracao-custom-date");
      if (savedCustomDate) {
        const parsed = new Date(savedCustomDate);
        if (!isNaN(parsed.getTime())) {
          setCustomStartDate(parsed);
          setTempDate(format(parsed, "yyyy-MM-dd"));
        }
      }

      const savedCompleted = localStorage.getItem("mariano-consagracao-completed");
      if (savedCompleted) {
        const parsed = JSON.parse(savedCompleted);
        if (Array.isArray(parsed)) {
          setCompletedDays(parsed);
        }
      }
    } catch (e) {
      console.error("Erro ao carregar dados da consagração", e);
    }
  }, []);

  // Foco no dia sugerido / onde o devoto parou ao carregar
  const once = useRef(false);
  useEffect(() => {
    if (once.current) return;

    try {
      const savedCurrentDay = localStorage.getItem("mariano-consagracao-current-day");
      const savedCompleted = localStorage.getItem("mariano-consagracao-completed");
      const savedDates = localStorage.getItem("mariano-consagracao-completed-dates");

      let targetDay: number | null = null;

      // 1. Tenta recuperar o dia salvo onde o devoto parou na sessão anterior
      if (savedCurrentDay) {
        const parsed = parseInt(savedCurrentDay, 10);
        if (!isNaN(parsed) && parsed >= 1 && parsed <= 33) {
          targetDay = parsed;
        }
      }

      // 2. Se não havia dia salvo explicitamente mas há dias concluídos, busca o dia seguinte ao último concluído
      if (targetDay === null && savedCompleted) {
        const completedArr: number[] = JSON.parse(savedCompleted);
        if (Array.isArray(completedArr) && completedArr.length > 0) {
          const maxCompleted = Math.max(...completedArr);
          targetDay = maxCompleted < 33 ? maxCompleted + 1 : 33;
        }
      }

      // 3. Fallback: dia do calendário (preset) ou dia 1
      if (targetDay === null) {
        targetDay = currentConsagracaoDay || 1;
      }

      // 4. LÓGICA DO RELÓGIO (Virada da meia-noite / 00h):
      // Mesma lógica presente nas novenas: se o dia em que parou já foi concluído em data anterior a hoje,
      // avança automaticamente para o próximo dia após a 00h!
      if (savedCompleted && savedDates && targetDay) {
        const completedArr: number[] = JSON.parse(savedCompleted);
        const datesObj: Record<string, string> = JSON.parse(savedDates);
        const todayStr = new Date().toLocaleDateString('en-CA'); // 'YYYY-MM-DD' no fuso local

        if (
          Array.isArray(completedArr) &&
          completedArr.includes(targetDay) &&
          datesObj[targetDay.toString()] &&
          datesObj[targetDay.toString()] < todayStr
        ) {
          if (targetDay + 1 <= 33) {
            targetDay = targetDay + 1;
            localStorage.setItem("mariano-consagracao-current-day", targetDay.toString());
          }
        }
      }

      if (targetDay) {
        setActiveTab(`dia-${targetDay}`);
        setTimeout(() => {
          const element = document.getElementById(`trigger-dia-${targetDay}`);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
          }
        }, 300);
      }
    } catch (e) {
      console.error("Erro ao restaurar dia da consagração", e);
    } finally {
      once.current = true;
    }
  }, [currentConsagracaoDay]);

  // Timer de virada de meia-noite ao vivo (caso a aba permaneça aberta)
  useEffect(() => {
    if (typeof window === 'undefined') return;

    let midnightTimeout: NodeJS.Timeout;

    const scheduleMidnightCheck = () => {
      const now = new Date();
      const nextMidnight = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 0, 0, 1);
      const msUntilMidnight = Math.max(1000, nextMidnight.getTime() - now.getTime());

      midnightTimeout = setTimeout(() => {
        try {
          const currentDayStr = localStorage.getItem("mariano-consagracao-current-day");
          const savedCompleted = localStorage.getItem("mariano-consagracao-completed");
          const curDay = currentDayStr ? parseInt(currentDayStr, 10) : parseInt(activeTab.replace("dia-", ""), 10);

          if (!isNaN(curDay) && curDay >= 1 && curDay < 33 && savedCompleted) {
            const completedArr: number[] = JSON.parse(savedCompleted);
            if (Array.isArray(completedArr) && completedArr.includes(curDay)) {
              const nextDay = curDay + 1;
              localStorage.setItem("mariano-consagracao-current-day", nextDay.toString());
              setActiveTab(`dia-${nextDay}`);
              setTimeout(() => {
                const element = document.getElementById(`trigger-dia-${nextDay}`);
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
                }
              }, 200);
            }
          }
        } catch (e) { }

        scheduleMidnightCheck();
      }, msUntilMidnight);
    };

    scheduleMidnightCheck();

    return () => {
      if (midnightTimeout) clearTimeout(midnightTimeout);
    };
  }, [activeTab]);

  useEffect(() => {
    try {
      localStorage.setItem("mariano-consagracao-goal", selectedGoalId);
    } catch (e) {
      console.error(e);
    }
  }, [selectedGoalId]);

  useEffect(() => {
    try {
      localStorage.setItem("mariano-consagracao-custom-date", customStartDate.toISOString());
    } catch (e) {
      console.error(e);
    }
  }, [customStartDate]);

  const toggleDay = (day: number) => {
    setCompletedDays(prev => {
      const isNowCompleted = !prev.includes(day);
      const next = isNowCompleted ? [...prev, day] : prev.filter(d => d !== day);

      try {
        // Salva diretamente a lista de concluídos sem risco de sobrescrita no mount
        localStorage.setItem("mariano-consagracao-completed", JSON.stringify(next));

        const savedDatesRaw = localStorage.getItem("mariano-consagracao-completed-dates");
        let datesObj: Record<string, string> = {};
        if (savedDatesRaw) {
          try {
            datesObj = JSON.parse(savedDatesRaw);
          } catch (e) { }
        }
        if (isNowCompleted) {
          datesObj[day.toString()] = new Date().toLocaleDateString('en-CA');
        } else {
          delete datesObj[day.toString()];
        }
        localStorage.setItem("mariano-consagracao-completed-dates", JSON.stringify(datesObj));
        localStorage.setItem("mariano-consagracao-current-day", day.toString());

        if (typeof window !== "undefined") {
          window.dispatchEvent(new CustomEvent("novena-progress-updated", { detail: { type: "marian_consecration" } }));
        }
      } catch (e) {
        console.error("Erro ao salvar progresso da consagração", e);
      }

      return next;
    });
  };

  const isDayCompleted = (day: number) => completedDays.includes(day);

  const handleTabChange = (value: string) => {
    setActiveTab(value);
    const dayMatch = value.match(/dia-(\d+)/);
    if (dayMatch) {
      try {
        localStorage.setItem("mariano-consagracao-current-day", dayMatch[1]);
        if (typeof window !== "undefined") {
          window.dispatchEvent(new CustomEvent("novena-progress-updated", { detail: { type: "marian_consecration" } }));
        }
      } catch (e) { }
    }
    setTimeout(() => {
      const triggerElement = document.getElementById("trigger-" + value);
      if (triggerElement) {
        triggerElement.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
    }, 100);
  };

  const handleResetConsecration = () => {
    if (typeof window !== "undefined") {
      if (confirm("Deseja realmente reiniciar todo o seu progresso da Consagração Mariana?")) {
        localStorage.removeItem("mariano-consagracao-completed");
        localStorage.removeItem("mariano-consagracao-completed-dates");
        localStorage.removeItem("mariano-consagracao-current-day");
        setCompletedDays([]);
        setActiveTab("dia-1");
        window.dispatchEvent(new CustomEvent("novena-progress-updated", { detail: { type: "marian_consecration" } }));
      }
    }
  };

  const handleConfirmCustomDate = () => {
    try {
      const parsed = parseISO(tempDate);
      if (!isNaN(parsed.getTime())) {
        setCustomStartDate(parsed);
      }
    } catch (e) {
      console.error("Data inválida", e);
    }
  };

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-6xl mx-auto">
      {/* ── Título Principal ── */}
      <div className="text-center space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-100 dark:bg-blue-950/60 text-blue-800 dark:text-blue-300 font-semibold text-xs border border-blue-200 dark:border-blue-800">
          <Heart className="w-4 h-4 text-red-500 fill-red-500" />
          <span>Método de São Luís Maria Grignion de Montfort</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-bold font-brand text-blue-950 dark:text-blue-100">
          33 Dias de Consagração a Jesus por Maria
        </h2>
        <p className="text-base text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
          A Santa Escravidão de Amor: o caminho mais perfeito, doce, rápido e seguro para se unir intimamente a Nosso Senhor Jesus Cristo pelas mãos puríssimas da Santíssima Virgem.
        </p>
      </div>

      {/* ── Botões de Auxílio / Recursos Rápidos no Topo ── */}
      <div className="flex justify-center gap-3 flex-wrap">
        <Button
          variant={showMethod ? "default" : "outline"}
          onClick={() => {
            setShowFormula(false);
            setShowPrayers(false);
            setShowMethod(!showMethod);
          }}
          className={`font-semibold text-xs sm:text-sm rounded-xl transition-all ${showMethod ? "bg-blue-700 text-white" : "border-blue-200 text-blue-900 dark:text-blue-200 hover:bg-blue-50"
            }`}
        >
          <BookOpen className="w-4 h-4 mr-2" />
          {showMethod ? "Ocultar Método" : "Método de Meditação (7 Passos)"}
        </Button>

        <Button
          variant={showPrayers ? "default" : "outline"}
          onClick={() => {
            setShowMethod(false);
            setShowFormula(false);
            setShowPrayers(!showPrayers);
          }}
          className={`font-semibold text-xs sm:text-sm rounded-xl transition-all ${showPrayers ? "bg-purple-700 text-white" : "border-purple-200 text-purple-900 dark:text-purple-200 hover:bg-purple-50"
            }`}
        >
          <Sparkles className="w-4 h-4 mr-2 text-purple-500" />
          {showPrayers ? "Ocultar Orações" : "Orações da Consagração"}
        </Button>

        <Button
          variant={showFormula ? "default" : "outline"}
          onClick={() => {
            setShowMethod(false);
            setShowPrayers(false);
            setShowFormula(!showFormula);
          }}
          className={`font-semibold text-xs sm:text-sm rounded-xl transition-all ${showFormula ? "bg-red-700 text-white" : "border-red-200 text-red-900 dark:text-red-200 hover:bg-red-50"
            }`}
        >
          <Heart className="w-4 h-4 mr-2 text-red-500" />
          {showFormula ? "Ocultar Fórmula" : "Fórmula Solene de Consagração"}
        </Button>
      </div>

      {/* ── Seção Expansível: Método de Meditação ── */}
      {showMethod && (
        <Card className="border-2 border-blue-200 dark:border-blue-900 shadow-xl bg-gradient-to-br from-blue-50 to-sky-50 dark:from-slate-900 dark:to-blue-950/30 animate-in fade-in duration-300">
          <CardHeader className="bg-blue-100/60 dark:bg-blue-900/30 pb-3">
            <CardTitle className="text-xl font-bold font-brand text-blue-900 dark:text-blue-100 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-blue-600" />
              Esquema Geral da Meditação Diária (São Luís de Montfort)
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6 space-y-4 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
            <div className="grid md:grid-cols-2 gap-3">
              <div className="p-3.5 bg-white dark:bg-slate-800 rounded-xl border-l-4 border-blue-500 shadow-sm">
                <h5 className="font-bold text-blue-900 dark:text-blue-200 mb-1">1. Presença de Deus</h5>
                <p>Pôr-se reverentemente na presença de Deus, contemplando Jesus e Maria no mistério proposto para o dia.</p>
              </div>
              <div className="p-3.5 bg-white dark:bg-slate-800 rounded-xl border-l-4 border-blue-500 shadow-sm">
                <h5 className="font-bold text-blue-900 dark:text-blue-200 mb-1">2. Súplica</h5>
                <p>Pedir a Deus, por Maria, a graça do período: desapego do mundo, conhecimento de si, de Maria ou de Jesus.</p>
              </div>
              <div className="p-3.5 bg-white dark:bg-slate-800 rounded-xl border-l-4 border-blue-500 shadow-sm">
                <h5 className="font-bold text-blue-900 dark:text-blue-200 mb-1">3. Oferecimento</h5>
                <p>Oferecer as orações prescritas com amor filial, despojando-se de qualquer vanglória humana.</p>
              </div>
              <div className="p-3.5 bg-white dark:bg-slate-800 rounded-xl border-l-4 border-blue-500 shadow-sm">
                <h5 className="font-bold text-blue-900 dark:text-blue-200 mb-1">4. Meditar a Verdade</h5>
                <p>Ler atentamente o trecho bíblico e a reflexão do Tratado, perguntando-se: 'O que Deus me pede hoje?'.</p>
              </div>
              <div className="p-3.5 bg-white dark:bg-slate-800 rounded-xl border-l-4 border-blue-500 shadow-sm">
                <h5 className="font-bold text-blue-900 dark:text-blue-200 mb-1">5. Afetos da Vontade</h5>
                <p>Produzir atos de amor, gratidão, contrição, louvor e entrega filial à Mãe Santíssima.</p>
              </div>
              <div className="p-3.5 bg-white dark:bg-slate-800 rounded-xl border-l-4 border-blue-500 shadow-sm">
                <h5 className="font-bold text-blue-900 dark:text-blue-200 mb-1">6. Resoluções Práticas</h5>
                <p>Tomar um propósito concreto para o dia (ex: vencer a ira, guardar a pureza dos olhos, rezar o terço).</p>
              </div>
            </div>
            <div className="p-3.5 bg-white dark:bg-slate-800 rounded-xl border-l-4 border-blue-500 shadow-sm">
              <h5 className="font-bold text-blue-900 dark:text-blue-200 mb-1">7. Orações Finais</h5>
              <p>Rezar as orações do dia (Veni Creator, Ave Maris Stella, Ladainhas) selando a resolução diante do Senhor.</p>
            </div>
          </CardContent>
        </Card>
      )}

      {/* ── Seção Expansível: Orações da Consagração ── */}
      {showPrayers && (
        <Card className="border-2 border-purple-200 dark:border-purple-900 shadow-xl bg-gradient-to-br from-purple-50 to-violet-50 dark:from-slate-900 dark:to-purple-950/30 animate-in fade-in duration-300">
          <CardHeader className="bg-purple-100/60 dark:bg-purple-900/30 pb-3">
            <CardTitle className="text-xl font-bold font-brand text-purple-900 dark:text-purple-100 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-purple-600" />
              Orações Tradicionais da Consagração
            </CardTitle>
            <CardDescription>Clique na oração para abrir e rezar o texto completo</CardDescription>
          </CardHeader>
          <CardContent className="pt-6 space-y-4 text-xs sm:text-sm">
            {/* Veni Creator */}
            <div className="p-4 bg-white dark:bg-slate-800 rounded-xl border border-purple-200 dark:border-purple-800 shadow-sm">
              <button
                onClick={() => setExpandedPrayer(expandedPrayer === "veni" ? null : "veni")}
                className="w-full flex items-center justify-between font-bold text-base text-purple-900 dark:text-purple-200"
              >
                <span>🕊️ Veni Creator Spiritus (Vinde, Espírito Criador)</span>
                {expandedPrayer === "veni" ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
              </button>
              {expandedPrayer === "veni" && (
                <div className="mt-3 pt-3 border-t border-purple-100 dark:border-purple-900 italic text-slate-700 dark:text-slate-300 space-y-2 whitespace-pre-line font-serif">
                  {`Vem, ó criador Espírito, as almas dos teus visita;
os corações que criastes, enche de graça infinita.

Tu, Paráclito és chamado, Dom do Pai celestial,
Fogo, caridade, fonte viva e unção espiritual.

Tu dás septiforme graça; dedo és da destra paterna;
Do Pai, solene promessa, dás força da voz suprema.

Nossa razão esclarece, Teu amor no peito acende,
Do nosso corpo a fraqueza com tua força defende.

De nós afasta o inimigo. Dá que Deus Pai e seu Filho
Por ti nós bem conheçamos, e em ti, Espírito de ambos,
Em todo tempo creiamos.

A Deus Pai se dê a glória e ao Filho ressuscitado,
Paráclito e a ti também com louvor perpetuado. Amém.

V. Enviai o vosso Espírito e tudo será criado.
R. E renovareis a face da terra.

Oremos: Ó Deus, que instruístes os corações de vossos fiéis com a luz do Espírito Santo, concedei-nos que, no mesmo Espírito, conheçamos o que é reto, e gozemos sempre as suas consolações. Por Cristo Nosso Senhor. Amém.`}
                </div>
              )}
            </div>

            {/* Ave Maris Stella */}
            <div className="p-4 bg-white dark:bg-slate-800 rounded-xl border border-purple-200 dark:border-purple-800 shadow-sm">
              <button
                onClick={() => setExpandedPrayer(expandedPrayer === "ave" ? null : "ave")}
                className="w-full flex items-center justify-between font-bold text-base text-purple-900 dark:text-purple-200"
              >
                <span>⭐ Ave Maris Stella (Ave, do Mar Estrela)</span>
                {expandedPrayer === "ave" ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
              </button>
              {expandedPrayer === "ave" && (
                <div className="mt-3 pt-3 border-t border-purple-100 dark:border-purple-900 italic text-slate-700 dark:text-slate-300 space-y-2 whitespace-pre-line font-serif">
                  {`Ave, do mar Estrela, de Deus mãe bela,
Sempre virgem, da morada celeste Feliz entrada.

Ó tu que ouviste da boca do anjo a saudação;
Dá-nos a paz e quietação; e o nome da Eva troca.

As prisões aos réus desata e a nós cegos alumia;
De tudo que nos maltrata nos livra, o bem nos granjeia.

Ostenta que és mãe, fazendo que os rogos do povo seu
Ouça aquele que, nascendo por nós, quis ser filho teu.

Ó virgem especiosa, toda cheia de ternura,
Extintos nossos pecados dá-nos pureza e bravura.

Dá-nos uma vida pura, põe-nos em vida segura,
Para que a Jesus gozemos e sempre nos alegremos.

A Deus Pai veneremos, a Jesus Cristo também,
E ao Espírito Santo; demos aos três um louvor: Amém.`}
                </div>
              )}
            </div>

            {/* Magnificat */}
            <div className="p-4 bg-white dark:bg-slate-800 rounded-xl border border-purple-200 dark:border-purple-800 shadow-sm">
              <button
                onClick={() => setExpandedPrayer(expandedPrayer === "magnificat" ? null : "magnificat")}
                className="w-full flex items-center justify-between font-bold text-base text-purple-900 dark:text-purple-200"
              >
                <span>🎶 O Magnificat (Cântico da Virgem Maria - Lc 1,46-55)</span>
                {expandedPrayer === "magnificat" ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
              </button>
              {expandedPrayer === "magnificat" && (
                <div className="mt-3 pt-3 border-t border-purple-100 dark:border-purple-900 italic text-slate-700 dark:text-slate-300 space-y-2 whitespace-pre-line font-serif">
                  {`A minha alma engrandece ao Senhor,
e o meu espírito se alegra em Deus, meu Salvador,
porque olhou para a humildade de sua serva.

Doravante todas as gerações me chamarão bem-aventurada,
porque o Todo-Poderoso fez em mim grandes coisas;
o seu nome é santo,
e sua misericórdia se estende de geração em geração
sobre os que o temem.

Manifestou o poder do seu braço:
desconcertou os corações dos soberbos.
Derrubou do trono os poderosos
e exaltou os humildes.
Saciou de bens os famintos
e despediu os ricos de mãos vazias.

Acolheu a Israel, seu servo,
lembrado da sua misericórdia,
como prometera aos nossos pais,
em favor de Abraão e de sua descendência para sempre. Amém.`}
                </div>
              )}
            </div>

            {/* Ladainha de Nossa Senhora */}
            <div className="p-4 bg-white dark:bg-slate-800 rounded-xl border border-purple-200 dark:border-purple-800 shadow-sm">
              <button
                onClick={() => setExpandedPrayer(expandedPrayer === "ladainha_ns" ? null : "ladainha_ns")}
                className="w-full flex items-center justify-between font-bold text-base text-purple-900 dark:text-purple-200"
              >
                <span>🌹 Ladainha Lauretana de Nossa Senhora</span>
                {expandedPrayer === "ladainha_ns" ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
              </button>
              {expandedPrayer === "ladainha_ns" && (
                <div className="mt-3 pt-3 border-t border-purple-100 dark:border-purple-900 text-slate-700 dark:text-slate-300 space-y-1.5 text-xs sm:text-sm">
                  <p>Senhor, tende piedade de nós. Cristo, tende piedade de nós. Senhor, tende piedade de nós.</p>
                  <p>Jesus Cristo, ouvi-nos. Jesus Cristo, atendei-nos.</p>
                  <p>Deus Pai dos Céus, tende piedade de nós.</p>
                  <p>Deus Filho, Redentor do mundo, tende piedade de nós.</p>
                  <p>Deus Espírito Santo, tende piedade de nós.</p>
                  <p>Santíssima Trindade, que sois um só Deus, tende piedade de nós.</p>
                  <div className="grid sm:grid-cols-2 gap-1 pt-2 font-serif italic">
                    <p>Santa Maria, rogai por nós.</p>
                    <p>Santa Mãe de Deus, rogai por nós.</p>
                    <p>Santa Virgem das Virgens, rogai por nós.</p>
                    <p>Mãe de Cristo, rogai por nós.</p>
                    <p>Mãe da Igreja, rogai por nós.</p>
                    <p>Mãe da Divina Graça, rogai por nós.</p>
                    <p>Mãe Puríssima, rogai por nós.</p>
                    <p>Mãe Castíssima, rogai por nós.</p>
                    <p>Mãe Imaculada, rogai por nós.</p>
                    <p>Mãe Intacta, rogai por nós.</p>
                    <p>Mãe Amável, rogai por nós.</p>
                    <p>Mãe Admirável, rogai por nós.</p>
                    <p>Mãe do Bom Conselho, rogai por nós.</p>
                    <p>Mãe do Criador, rogai por nós.</p>
                    <p>Mãe do Salvador, rogai por nós.</p>
                    <p>Virgem Prudentíssima, rogai por nós.</p>
                    <p>Virgem Venerável, rogai por nós.</p>
                    <p>Virgem Louvável, rogai por nós.</p>
                    <p>Virgem Poderosa, rogai por nós.</p>
                    <p>Virgem Clemente, rogai por nós.</p>
                    <p>Virgem Fiel, rogai por nós.</p>
                    <p>Espelho de Justiça, rogai por nós.</p>
                    <p>Sede da Sabedoria, rogai por nós.</p>
                    <p>Causa da nossa alegria, rogai por nós.</p>
                    <p>Vaso Espiritual, rogai por nós.</p>
                    <p>Vaso Honorífico, rogai por nós.</p>
                    <p>Vaso Insigne de Devoção, rogai por nós.</p>
                    <p>Rosa Mística, rogai por nós.</p>
                    <p>Torre de Davi, rogai por nós.</p>
                    <p>Torre de Marfim, rogai por nós.</p>
                    <p>Casa de Ouro, rogai por nós.</p>
                    <p>Arca da Aliança, rogai por nós.</p>
                    <p>Porta do Céu, rogai por nós.</p>
                    <p>Estrela da Manhã, rogai por nós.</p>
                    <p>Saúde dos Enfermos, rogai por nós.</p>
                    <p>Refúgio dos Pecadores, rogai por nós.</p>
                    <p>Consoladora dos Aflitos, rogai por nós.</p>
                    <p>Auxílio dos Cristãos, rogai por nós.</p>
                    <p>Rainha dos Anjos, rogai por nós.</p>
                    <p>Rainha dos Patriarcas, rogai por nós.</p>
                    <p>Rainha dos Profetas, rogai por nós.</p>
                    <p>Rainha dos Apóstolos, rogai por nós.</p>
                    <p>Rainha dos Mártires, rogai por nós.</p>
                    <p>Rainha dos Confessores, rogai por nós.</p>
                    <p>Rainha das Virgens, rogai por nós.</p>
                    <p>Rainha de Todos os Santos, rogai por nós.</p>
                    <p>Rainha Concebida Sem Pecado Original, rogai por nós.</p>
                    <p>Rainha Assunta ao Céu, rogai por nós.</p>
                    <p>Rainha do Santo Rosário, rogai por nós.</p>
                    <p>Rainha da Família, rogai por nós.</p>
                    <p>Rainha da Paz, rogai por nós.</p>
                  </div>
                  <p className="pt-2 font-bold">Cordeiro de Deus, que tirais o pecado do mundo, perdoai-nos, Senhor.</p>
                  <p className="font-bold">Cordeiro de Deus, que tirais o pecado do mundo, ouvi-nos, Senhor.</p>
                  <p className="font-bold">Cordeiro de Deus, que tirais o pecado do mundo, tende piedade de nós.</p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      )}

      {/* ── Seção Expansível: Fórmula Solene de Consagração ── */}
      {showFormula && (
        <Card className="border-2 border-red-200 dark:border-red-900 shadow-xl bg-gradient-to-br from-red-50 to-rose-50 dark:from-slate-900 dark:to-red-950/30 animate-in fade-in duration-300">
          <CardHeader className="bg-red-100/60 dark:bg-red-900/30 pb-3">
            <CardTitle className="text-xl font-bold font-brand text-red-900 dark:text-red-100 flex items-center gap-2">
              <Heart className="w-5 h-5 text-red-600 fill-red-500" />
              Fórmula Solene de Consagração a Jesus Cristo, a Sabedoria Encarnada, pelas Mãos de Maria
            </CardTitle>
            <CardDescription>Escrita por São Luís Maria Grignion de Montfort (rezada no 33º dia)</CardDescription>
          </CardHeader>
          <CardContent className="pt-6 space-y-4 text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed font-serif whitespace-pre-line bg-white/70 dark:bg-slate-800/60 p-6 rounded-2xl border border-red-200 dark:border-red-800 shadow-inner">
            {`Ó Sabedoria eterna e encarnada! Ó amabilíssimo e adorável Jesus, verdadeiro Deus e verdadeiro homem, Filho único do Pai Eterno e de Maria, sempre Virgem! Adoro-Vos profundamente no seio e nos esplendores de vosso Pai, durante a eternidade; e adoro-Vos também no seio virginal de Maria, vossa digníssima Mãe, no tempo da vossa Encarnação.

Agradeço-Vos por terdes aniquilado a Vós mesmo, tomando a forma de um escravo, para livrar-me do cruel cativeiro do demônio. Louvo-Vos e glorifico-Vos por terdes querido submeter-Vos a Maria, vossa santa Mãe, em todas as coisas, a fim de, por Ela, tornar-me vosso fiel escravo. Mas, ai de mim! Ingrato e infiel que sou, não guardei os votos e as promessas que tão solenemente Vos fiz no meu Batismo; não cumpri as minhas obrigações; não mereço ser chamado vosso filho, nem vosso escravo.

Recorro, pois, à misericórdia e à intercessão de vossa Santíssima Mãe, que me destes por Medianeira junto de Vós, e é por seu intermédio que espero obter de Vós a contrição e o perdão dos meus pecados, a aquisição e a conservação da Sabedoria.

Ave, pois, ó Maria Imaculada, Tabernáculo vivo da Divindade, onde a Sabedoria eterna oculta quer ser adorada pelos anjos e pelos homens! Ave, ó Rainha do Céu e da Terra, a cujo império está sujeito tudo o que está abaixo de Deus! Ave, ó refúgio seguro dos pecadores, cuja misericórdia a ninguém falta! Atendei aos desejos que tenho da divina Sabedoria e recebei para esse fim os votos e as ofertas que a minha baixeza Vos apresenta:

Eu, [diga o seu nome completo], pecador infiel, renovo e ratifico hoje, em vossas mãos, as promessas do meu Batismo: renuncio para sempre a Satanás, às suas pompas e às suas obras, e dou-me inteiramente a Jesus Cristo, a Sabedoria Encarnada, para levar a minha cruz atrás d'Ele, todos os dias de minha vida, e a fim de Lhe ser mais fiel do que tenho sido até agora.

Na presença de toda a corte celeste, escolho-Vos hoje para minha Mãe e Senhora. Entrego-Vos e consagro-Vos, na qualidade de escravo, o meu corpo e a minha alma, os meus bens interiores e exteriores, e o próprio valor das minhas boas ações passadas, presentes e futuras, deixando-Vos inteiro e pleno direito de dispor de mim e de tudo o que me pertence, sem exceção, segundo o vosso beneplácito, para a maior glória de Deus, no tempo e na eternidade.

Recebei, ó Virgem benigna, esta pequena oferta da minha escravidão, em honra e união daquela submissão que a Sabedoria Eterna quis ter à vossa maternidade; em homenagem ao poder que tendes ambos sobre este vermezinho e miserável pecador; e em ação de graças pelos privilégios com que a Santíssima Trindade Vos favoreceu. Protesto que quero doravante, como vosso verdadeiro escravo, procurar a vossa honra e obedecer-Vos em todas as coisas.

Ó Mãe admirável, apresentai-me ao vosso querido Filho na qualidade de escravo eterno, a fim de que, tendo-me Ele resgatado por Vós, por Vós me receba! Ó Mãe de misericórdia, concedei-me a graça de obter a verdadeira Sabedoria de Deus e de colocar-me, para esse fim, no número daqueles que amais, ensinais, guiais, sustentais e protegeis como vossos filhos e vossos escravos.

Ó Virgem fiel, tornai-me em todas as coisas um tão perfeito discípulo, imitador e escravo da Sabedoria Encarnada, Jesus Cristo, vosso Filho, que eu chegue, por vossa intercessão e a vosso exemplo, à plenitude da sua idade na Terra e da sua glória no Céu. Amém!`}
          </CardContent>
        </Card>
      )}

      {/* ── CARD SELETOR DE DATA E PLANEJADOR (IDÊNTICO AO DE SÃO JOSÉ) ── */}
      <Card className="border-2 border-blue-300 dark:border-blue-800 shadow-xl bg-white dark:bg-slate-900 overflow-hidden">
        <div className="bg-gradient-to-r from-blue-800 via-blue-700 to-indigo-800 p-5 text-white">
          <h3 className="text-xl sm:text-2xl font-bold font-brand flex items-center gap-2.5">
            <CalendarIcon className="h-6 w-6 text-amber-300" />
            Planeje sua Consagração a Nossa Senhora
          </h3>
          <p className="text-xs sm:text-sm text-blue-100 mt-1">
            Escolha uma festa mariana para concluir seus 33 dias ou defina sua data personalizada
          </p>
        </div>

        <CardContent className="pt-6">
          <div className="grid md:grid-cols-2 gap-6 items-end">
            <div className="space-y-3">
              <label className="text-sm font-bold text-blue-900 dark:text-blue-300 ml-1 block">
                Escolha a Festa Mariana da sua Consagração:
              </label>
              <Select value={selectedGoalId} onValueChange={setSelectedGoalId}>
                <SelectTrigger className="w-full border-2 border-blue-200 focus:ring-blue-500 h-12 rounded-xl text-slate-800 dark:text-slate-100">
                  <SelectValue placeholder="Selecione uma data festiva" />
                </SelectTrigger>
                <SelectContent className="max-h-80">
                  {presets.map((p) => (
                    <SelectItem key={p.id} value={p.id} className="py-2 cursor-pointer">
                      <span className="font-semibold">{p.name}</span>
                    </SelectItem>
                  ))}
                  <SelectItem value="custom" className="py-2 cursor-pointer font-bold text-blue-700">
                    ✨ Escolha Livre (Personalizada)
                  </SelectItem>
                </SelectContent>
              </Select>

              {selectedGoalId === "custom" && (
                <div className="p-4 bg-blue-50 dark:bg-slate-800 rounded-xl border-2 border-blue-200 dark:border-blue-700 space-y-3 animate-in fade-in">
                  <p className="text-xs font-bold text-blue-800 dark:text-blue-300 uppercase tracking-wider">
                    Data de Início da Consagração (1º Dia):
                  </p>
                  <div className="flex gap-2">
                    <Input
                      type="date"
                      value={tempDate}
                      onChange={(e) => setTempDate(e.target.value)}
                      className="h-10 border-2 border-blue-200 flex-1 rounded-lg"
                    />
                    <Button
                      onClick={handleConfirmCustomDate}
                      className="bg-blue-800 hover:bg-blue-900 text-white font-bold h-10 px-5 rounded-lg"
                    >
                      Confirmar
                    </Button>
                  </div>
                  <div className="flex items-center gap-2 pt-1">
                    <p className="text-xs text-blue-700 dark:text-blue-300">Quer começar hoje?</p>
                    <button
                      type="button"
                      onClick={() => {
                        const d = new Date();
                        setCustomStartDate(d);
                        setTempDate(format(d, "yyyy-MM-dd"));
                      }}
                      className="text-xs font-bold text-blue-800 dark:text-blue-200 underline hover:text-blue-950"
                    >
                      Sim, iniciar hoje
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Painel de Datas: Início e Festa */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-slate-800 dark:to-blue-950/40 rounded-2xl p-4 border-2 border-blue-200 dark:border-blue-800 flex justify-around items-center text-center shadow-inner">
              <div>
                <p className="text-xs uppercase font-bold text-blue-700 dark:text-blue-400 mb-1">Início (1º dia)</p>
                <p className="text-base sm:text-lg font-bold text-blue-950 dark:text-blue-100 capitalize">
                  {format(selectedPreset.startDate, "dd 'de' MMMM", { locale: ptBR })}
                </p>
              </div>
              <div className="h-10 w-[2px] bg-blue-200 dark:bg-blue-800" />
              <div>
                <p className="text-xs uppercase font-bold text-blue-700 dark:text-blue-400 mb-1">Festa (33º dia)</p>
                <p className="text-base sm:text-lg font-bold text-blue-950 dark:text-blue-100 capitalize">
                  {format(selectedPreset.feastDate, "dd 'de' MMMM", { locale: ptBR })}
                </p>
              </div>
            </div>
          </div>

          {/* Destaque do Progresso do Dia Atual */}
          {currentConsagracaoDay && (
            <div className="mt-5 p-3.5 bg-emerald-100/90 dark:bg-emerald-950/40 border-2 border-emerald-300 dark:border-emerald-700 rounded-xl flex items-center justify-center gap-2.5 shadow-sm animate-pulse">
              <CheckCircle2 className="h-5 w-5 text-emerald-700 dark:text-emerald-400 shrink-0" />
              <p className="text-xs sm:text-sm font-bold text-emerald-900 dark:text-emerald-100 text-center">
                Seu progresso recomendado para hoje: <span className="underline text-sm font-black">Dia {currentConsagracaoDay}</span>
              </p>
            </div>
          )}

          <p className="text-[11px] text-slate-500 mt-4 text-center italic">
            * O seu progresso diário e a meta selecionada ficam salvos automaticamente neste navegador.
          </p>
        </CardContent>
      </Card>

      {/* ── Recursos para a Devoção ── */}
      <Card className="border border-blue-200 dark:border-blue-900 shadow-md bg-white dark:bg-slate-900">
        <CardHeader className="bg-slate-50 dark:bg-slate-800/40 pb-3">
          <CardTitle className="text-xl font-bold font-brand text-blue-900 dark:text-blue-100 flex items-center gap-2">
            <Download className="w-5 h-5 text-blue-600" />
            Recursos e Materiais para a Consagração
          </CardTitle>
          <CardDescription>Baixe os livros e materiais essenciais para o seu retiro espiritual</CardDescription>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-3.5">
            <a
              href="https://drive.google.com/file/d/1Knev27Ne-BgYV4cdQk11Yx__ZQo2D5da/view"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3.5 rounded-xl border-2 border-blue-200 hover:border-blue-400 dark:border-blue-800 bg-blue-50/50 dark:bg-slate-800/70 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <BookOpen className="w-7 h-7 text-blue-700 mb-2" />
                <h4 className="font-bold text-sm text-blue-950 dark:text-blue-100 leading-tight">Tratado da Verdadeira Devoção</h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">São Luís Maria de Montfort</p>
              </div>
              <p className="text-[11px] font-bold text-blue-700 dark:text-blue-300 mt-3 flex items-center gap-1">
                📥 Baixar PDF
              </p>
            </a>

            <div className="p-3.5 rounded-xl border-2 border-purple-200 hover:border-purple-400 dark:border-purple-800 bg-purple-50/50 dark:bg-slate-800/70 hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <Heart className="w-7 h-7 text-purple-700 mb-2" />
                <h4 className="font-bold text-sm text-purple-950 dark:text-purple-100 leading-tight">Fórmula de Consagração</h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">Para imprimir, assinar e datar</p>
              </div>
              <button
                onClick={() => setShowFormula(true)}
                className="text-[11px] font-bold text-purple-700 dark:text-purple-300 mt-3 text-left hover:underline"
              >
                📄 Ver Fórmula Solene
              </button>
            </div>

            <div className="p-3.5 rounded-xl border-2 border-amber-200 hover:border-amber-400 dark:border-amber-800 bg-amber-50/50 dark:bg-slate-800/70 hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <ShieldCheck className="w-7 h-7 text-amber-700 mb-2" />
                <h4 className="font-bold text-sm text-amber-950 dark:text-amber-100 leading-tight">A Cadeia de Consagração</h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">Correntinha como sinal de pertença</p>
              </div>
              <p className="text-[11px] font-semibold text-amber-800 dark:text-amber-300 mt-3">
                ⛓️ Sacramental de Amor
              </p>
            </div>

            <a
              href="https://chat.whatsapp.com/LNU3BDbd2wK81q3RZ8QhK1"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3.5 rounded-xl border-2 border-emerald-200 hover:border-emerald-400 dark:border-emerald-800 bg-emerald-50/50 dark:bg-slate-800/70 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <MessageCircle className="w-7 h-7 text-emerald-700 mb-2" />
                <h4 className="font-bold text-sm text-emerald-950 dark:text-emerald-100 leading-tight">Grupo de Consagração</h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">WhatsApp de oração diária</p>
              </div>
              <p className="text-[11px] font-bold text-emerald-700 dark:text-emerald-300 mt-3 flex items-center gap-1">
                💬 Participar do Grupo
              </p>
            </a>
          </div>
        </CardContent>
      </Card>

      {/* ── OS 33 DIAS DE PREPARAÇÃO: TABS E ACOMPANHAMENTO ── */}
      <Card className="border-2 border-blue-200 dark:border-blue-900 shadow-xl bg-white dark:bg-slate-900">
        <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-slate-800 dark:to-blue-950/40 pb-3">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <CardTitle className="text-xl sm:text-2xl font-bold font-brand text-blue-900 dark:text-blue-100">
                Os 33 Dias de Preparação
              </CardTitle>
              <CardDescription className="text-xs sm:text-sm">
                Acompanhe as leituras, meditações e as devoções marianas catalogadas para cada dia
              </CardDescription>
            </div>
            {currentConsagracaoDay && (
              <Badge className="bg-emerald-600 text-white font-bold text-xs self-start sm:self-auto">
                Hoje: Dia {currentConsagracaoDay}
              </Badge>
            )}
          </div>
        </CardHeader>

        <CardContent className="pt-6">
          <div className="flex justify-between items-center mb-1.5 px-1 text-[11px] font-bold uppercase tracking-wider text-blue-800 dark:text-blue-300">
            <span className="flex items-center gap-1">
              <ChevronLeft className="w-3.5 h-3.5" /> Arraste para ver todos os 33 dias
            </span>
            <div className="flex items-center gap-2">
              <span className="text-slate-500">
                {completedDays.length} de 33 concluídos ({Math.round((completedDays.length / 33) * 100)}%)
              </span>
              {completedDays.length > 0 && (
                <button
                  type="button"
                  onClick={handleResetConsecration}
                  className="text-[10px] text-slate-500 hover:text-red-600 transition-colors flex items-center gap-0.5 underline cursor-pointer"
                  title="Reiniciar progresso da consagração"
                >
                  <RotateCcw className="w-2.5 h-2.5" /> Reiniciar
                </button>
              )}
            </div>
          </div>

          {/* Barra de progresso fina e azul */}
          <div className="w-full bg-blue-100/80 dark:bg-blue-950/60 rounded-full h-1.5 mb-3 overflow-hidden border border-blue-200/50 dark:border-blue-900/50 shadow-xs">
            <div
              className="h-full bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full transition-all duration-500 ease-out"
              style={{ width: `${Math.min(100, (completedDays.length / 33) * 100)}%` }}
            />
          </div>

          <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
            {/* Barra de rolagem horizontal com os 33 botões */}
            <ScrollArea
              id="marian-day-selection-bar"
              className="w-full whitespace-nowrap rounded-2xl border-2 border-blue-100 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-900/50 p-2 mb-6 shadow-inner [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
            >
              <TabsList className="flex w-fit h-auto p-0 bg-transparent flex-row relative mb-2">
                {MARIAN_CONSECRATION_DAYS.map((diaInfo) => {
                  const completed = isDayCompleted(diaInfo.dia);
                  const isToday = currentConsagracaoDay === diaInfo.dia;
                  const isSelected = activeTab === `dia-${diaInfo.dia}`;

                  return (
                    <TabsTrigger
                      key={diaInfo.dia}
                      id={`trigger-dia-${diaInfo.dia}`}
                      value={`dia-${diaInfo.dia}`}
                      className={cn(
                        "min-w-[95px] sm:min-w-[105px] py-2.5 px-3 rounded-xl transition-all m-1 flex flex-col items-center justify-center gap-1 border-2 relative cursor-pointer",
                        completed
                          ? "bg-blue-900 text-white border-blue-900 hover:bg-blue-800 font-bold"
                          : "bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border-slate-200 dark:border-slate-700 hover:border-blue-300 shadow-sm",
                        // Contorno azul destacado no dia selecionado para indicar em qual dia o devoto está
                        isSelected && "border-blue-600 ring-2 ring-blue-500 ring-offset-2 ring-offset-slate-50 dark:ring-offset-slate-900 shadow-lg scale-105 z-10",
                        isSelected && !completed && "bg-blue-50/90 dark:bg-blue-950/70 text-blue-950 dark:text-blue-100 font-bold border-blue-600",
                        isSelected && completed && "bg-blue-800 text-white border-blue-400 ring-blue-400",
                        isToday && !isSelected && "ring-2 ring-emerald-500 ring-offset-2 dark:ring-offset-slate-900 shadow-md",
                        // Suporte aos atributos data-state do Radix UI
                        "data-[state=active]:border-blue-600 data-[state=active]:ring-2 data-[state=active]:ring-blue-500 data-[state=active]:ring-offset-2 dark:data-[state=active]:ring-offset-slate-900 data-[state=active]:shadow-lg data-[state=active]:scale-105 data-[state=active]:z-10"
                      )}
                    >
                      {completed && <Check className="h-3.5 w-3.5 text-emerald-300 mb-0.5" />}
                      <span className="font-bold text-xs sm:text-sm">Dia {diaInfo.dia}</span>
                      {isToday && (
                        <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                        </span>
                      )}
                    </TabsTrigger>
                  );
                })}
              </TabsList>
              <ScrollBar orientation="horizontal" className="h-1.5" />
            </ScrollArea>

            {/* Conteúdo de cada dia dos 33 dias */}
            {MARIAN_CONSECRATION_DAYS.map((diaInfo) => (
              <TabsContent key={diaInfo.dia} value={`dia-${diaInfo.dia}`}>
                <ConsagracaoDayCard
                  diaInfo={diaInfo}
                  isCompleted={isDayCompleted(diaInfo.dia)}
                  onToggle={() => toggleDay(diaInfo.dia)}
                  onOpenFormula={() => {
                    setShowFormula(true);
                    window.scrollTo({ top: 300, behavior: "smooth" });
                  }}
                />
              </TabsContent>
            ))}
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}

// ── Catálogo de Orações Tradicionais da Consagração Mariana ──
interface MarianPrayerDetail {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  text: string;
}

const MARIAN_PRAYERS_CATALOG: Record<string, MarianPrayerDetail> = {
  veni: {
    id: "veni",
    title: "Veni Creator Spiritus (Vinde, Espírito Criador)",
    subtitle: "Hino Tradicional ao Divino Espírito Santo",
    icon: "🕊️",
    text: `Vem, ó criador Espírito, as almas dos teus visita;
os corações que criastes, enche de graça infinita.

Tu, Paráclito és chamado, Dom do Pai celestial,
Fogo, caridade, fonte viva e unção espiritual.

Tu dás septiforme graça; dedo és da destra paterna;
Do Pai, solene promessa, dás força da voz suprema.

Nossa razão esclarece, Teu amor no peito acende,
Do nosso corpo a fraqueza com tua força defende.

De nós afasta o inimigo. Dá que Deus Pai e seu Filho
Por ti nós bem conheçamos, e em ti, Espírito de ambos,
Em todo tempo creiamos.

A Deus Pai se dê a glória e ao Filho ressuscitado,
Paráclito e a ti também com louvor perpetuado. Amém.

℣. Enviai o vosso Espírito e tudo será criado.
℟. E renovareis a face da terra.

Oremos: Ó Deus, que instruístes os corações de vossos fiéis com a luz do Espírito Santo, concedei-nos que, no mesmo Espírito, conheçamos o que é reto, e gozemos sempre as suas consolações. Por Cristo Nosso Senhor. Amém.`
  },
  ave: {
    id: "ave",
    title: "Ave Maris Stella (Ave, do Mar Estrela)",
    subtitle: "Hino Litúrgico à Bem-Aventurada Virgem Maria",
    icon: "⭐",
    text: `Ave, do mar Estrela, de Deus mãe bela,
Sempre virgem, da morada celeste Feliz entrada.

Ó tu que ouviste da boca do anjo a saudação;
Dá-nos a paz e quietação; e o nome da Eva troca.

As prisões aos réus desata e a nós cegos alumia;
De tudo que nos maltrata nos livra, o bem nos granjeia.

Ostenta que és mãe, fazendo que os rogos do povo seu
Ouça aquele que, nascendo por nós, quis ser filho teu.

Ó virgem especiosa, toda cheia de ternura,
Extintos nossos pecados dá-nos pureza e bravura.

Dá-nos uma vida pura, põe-nos em vida segura,
Para que a Jesus gozemos e sempre nos alegremos.

A Deus Pai veneremos, a Jesus Cristo também,
E ao Espírito Santo; demos aos três um louvor: Amém.`
  },
  magnificat: {
    id: "magnificat",
    title: "O Magnificat (Cântico da Virgem Maria)",
    subtitle: "Lucas 1, 46-55",
    icon: "🎶",
    text: `A minha alma engrandece ao Senhor,
e o meu espírito se alegra em Deus, meu Salvador,
porque olhou para a humildade de sua serva.

Doravante todas as gerações me chamarão bem-aventurada,
porque o Todo-Poderoso fez em mim grandes coisas;
o seu nome é santo,
e sua misericórdia se estende de geração em geração
sobre os que o temem.

Manifestou o poder do seu braço:
desconcertou os corações dos soberbos.
Derrubou do trono os poderosos
e exaltou os humildes.
Saciou de bens os famintos
e despediu os ricos de mãos vazias.

Acolheu a Israel, seu servo,
lembrado da sua misericórdia,
como prometera aos nossos pais,
em favor de Abraão e de sua descendência para sempre. Amém.`
  },
  ladainha_ns: {
    id: "ladainha_ns",
    title: "Ladainha Lauretana de Nossa Senhora",
    subtitle: "Preces Litúrgicas de Louvor e Súplica à Mãe de Deus",
    icon: "🌹",
    text: `Senhor, tende piedade de nós.
Cristo, tende piedade de nós.
Senhor, tende piedade de nós.
Jesus Cristo, ouvi-nos.
Jesus Cristo, atendei-nos.

Deus Pai dos Céus, tende piedade de nós.
Deus Filho, Redentor do mundo, tende piedade de nós.
Deus Espírito Santo, tende piedade de nós.
Santíssima Trindade, que sois um só Deus, tende piedade de nós.

Santa Maria, rogai por nós.
Santa Mãe de Deus, rogai por nós.
Santa Virgem das Virgens, rogai por nós.
Mãe de Cristo, rogai por nós.
Mãe da Igreja, rogai por nós.
Mãe da Divina Graça, rogai por nós.
Mãe Puríssima, rogai por nós.
Mãe Castíssima, rogai por nós.
Mãe Imaculada, rogai por nós.
Mãe Intacta, rogai por nós.
Mãe Amável, rogai por nós.
Mãe Admirável, rogai por nós.
Mãe do Bom Conselho, rogai por nós.
Mãe do Criador, rogai por nós.
Mãe do Salvador, rogai por nós.
Virgem Prudentíssima, rogai por nós.
Virgem Venerável, rogai por nós.
Virgem Louvável, rogai por nós.
Virgem Poderosa, rogai por nós.
Virgem Clemente, rogai por nós.
Virgem Fiel, rogai por nós.
Espelho de Justiça, rogai por nós.
Sede da Sabedoria, rogai por nós.
Causa da nossa alegria, rogai por nós.
Vaso Espiritual, rogai por nós.
Vaso Honorífico, rogai por nós.
Vaso Insigne de Devoção, rogai por nós.
Rosa Mística, rogai por nós.
Torre de Davi, rogai por nós.
Torre de Marfim, rogai por nós.
Casa de Ouro, rogai por nós.
Arca da Aliança, rogai por nós.
Porta do Céu, rogai por nós.
Estrela da Manhã, rogai por nós.
Saúde dos Enfermos, rogai por nós.
Refúgio dos Pecadores, rogai por nós.
Consoladora dos Aflitos, rogai por nós.
Auxílio dos Cristãos, rogai por nós.
Rainha dos Anjos, rogai por nós.
Rainha dos Patriarcas, rogai por nós.
Rainha dos Profetas, rogai por nós.
Rainha dos Apóstolos, rogai por nós.
Rainha dos Mártires, rogai por nós.
Rainha dos Confessores, rogai por nós.
Rainha das Virgens, rogai por nós.
Rainha de Todos os Santos, rogai por nós.
Rainha Concebida Sem Pecado Original, rogai por nós.
Rainha Assunta ao Céu, rogai por nós.
Rainha do Santo Rosário, rogai por nós.
Rainha da Família, rogai por nós.
Rainha da Paz, rogai por nós.

Cordeiro de Deus, que tirais o pecado do mundo, perdoai-nos, Senhor.
Cordeiro de Deus, que tirais o pecado do mundo, ouvi-nos, Senhor.
Cordeiro de Deus, que tirais o pecado do mundo, tende piedade de nós.

℣. Rogai por nós, Santa Mãe de Deus.
℟. Para que sejamos dignos das promessas de Cristo.

Oremos: Concedei a vossos servos, nós vo-lo pedimos, Senhor Deus, que gozemos sempre de saúde de alma e de corpo, e que, pela gloriosa intercessão da bem-aventurada sempre Virgem Maria, sejamos livres da tristeza presente e alcancemos a eterna alegria. Por Cristo, Nosso Senhor. Amém.`
  },
  ladainha_espirito: {
    id: "ladainha_espirito",
    title: "Ladainha do Espírito Santo",
    subtitle: "Invocação aos Sete Dons e Frutos do Paráclito",
    icon: "🔥",
    text: `Senhor, tende piedade de nós.
Cristo, tende piedade de nós.
Senhor, tende piedade de nós.
Pai Todo-Poderoso, tende piedade de nós.
Jesus, Filho Eterno do Pai e Redentor do mundo, salvai-nos.
Espírito do Pai e do Filho, que fundis as duas vidas, santificai-nos.
Santíssima Trindade, ouvi-nos.

Espírito Santo, que procedeis do Pai e do Filho, entrai em nossos corações.
Espírito Santo, que sois igual ao Pai e ao Filho, entrai em nossos corações.
Promessa de Deus Pai, tende piedade de nós.
Raio de luz celeste, tende piedade de nós.
Autor de todo bem, tende piedade de nós.
Fonte de água viva, tende piedade de nós.
Fogo consumidor, tende piedade de nós.
Unção espiritual, tende piedade de nós.
Espírito de amor e de verdade, tende piedade de nós.
Espírito de sabedoria e de inteligência, tende piedade de nós.
Espírito de conselho e de fortaleza, tende piedade de nós.
Espírito de ciência e de piedade, tende piedade de nós.
Espírito de temor do Senhor, tende piedade de nós.
Espírito de graça e de oração, tende piedade de nós.
Espírito de paz e de doçura, tende piedade de nós.
Espírito de modéstia e de pureza, tende piedade de nós.
Espírito Consolador, tende piedade de nós.
Espírito Santificador, tende piedade de nós.
Espírito que governais a Igreja, tende piedade de nós.
Dom de Deus Altíssimo, tende piedade de nós.
Espírito que encheis o universo, tende piedade de nós.
Espírito de adoção dos filhos de Deus, tende piedade de nós.

Espírito Santo, inspirai-nos o horror ao pecado.
Espírito Santo, vinde renovar a face da terra.
Espírito Santo, derramai a vossa luz em nossas almas.
Espírito Santo, gravai a vossa lei em nossos corações.
Espírito Santo, abrasai-nos no fogo do vosso amor.
Espírito Santo, abri-nos o tesouro de vossas graças.
Espírito Santo, ensinai-nos a rezar bem.
Espírito Santo, iluminai-nos com as vossas celestes inspirações.
Espírito Santo, conduzi-nos pelo caminho da salvação.
Espírito Santo, fazei que haja em nós um só coração e uma só alma.
Espírito Santo, tornai-nos dóceis às vossas inspirações.
Espírito Santo, dai-nos a perseverança na virtude.

Cordeiro de Deus, que tirais os pecados do mundo, enviai-nos o vosso Espírito.
Cordeiro de Deus, que tirais os pecados do mundo, derramai em nós os dons do vosso Espírito.
Cordeiro de Deus, que tirais os pecados do mundo, dai-nos o espírito de sabedoria e de piedade.

℣. Enviai o vosso Espírito e tudo será criado.
℟. E renovareis a face da terra.

Oremos: Ó Deus, que haveis instruído os corações dos vossos fiéis com a luz do Espírito Santo, concedei-nos, segundo o mesmo Espírito, conhecer o que é reto e gozar sempre das suas divinas consolações. Por Cristo, Nosso Senhor. Amém.`
  },
  ladainha_jesus: {
    id: "ladainha_jesus",
    title: "Ladainha do Santíssimo Nome de Jesus",
    subtitle: "Invocação ao Nome Salvador de Cristo",
    icon: "✝️",
    text: `Senhor, tende piedade de nós.
Cristo, tende piedade de nós.
Senhor, tende piedade de nós.
Jesus, ouvi-nos.
Jesus, atendei-nos.

Deus Pai dos Céus, tende piedade de nós.
Deus Filho, Redentor do mundo, tende piedade de nós.
Deus Espírito Santo, tende piedade de nós.
Santíssima Trindade, que sois um só Deus, tende piedade de nós.

Jesus, Filho de Deus vivo, tende piedade de nós.
Jesus, esplendor do Pai, tende piedade de nós.
Jesus, pureza da luz eterna, tende piedade de nós.
Jesus, Rei da glória, tende piedade de nós.
Jesus, sol de justiça, tende piedade de nós.
Jesus, Filho da Virgem Maria, tende piedade de nós.
Jesus amável, tende piedade de nós.
Jesus admirável, tende piedade de nós.
Jesus, Deus forte, tende piedade de nós.
Jesus, Pai do século futuro, tende piedade de nós.
Jesus, Anjo do grande conselho, tende piedade de nós.
Jesus poderosíssimo, tende piedade de nós.
Jesus pacientíssimo, tende piedade de nós.
Jesus obedientíssimo, tende piedade de nós.
Jesus, manso e humilde de coração, tende piedade de nós.
Jesus, amante da castidade, tende piedade de nós.
Jesus, nosso amor, tende piedade de nós.
Jesus, Deus da paz, tende piedade de nós.
Jesus, autor da vida, tende piedade de nós.
Jesus, exemplo das virtudes, tende piedade de nós.
Jesus, zelador das almas, tende piedade de nós.
Jesus, nosso Deus, tende piedade de nós.
Jesus, nosso refúgio, tende piedade de nós.
Jesus, pai dos pobres, tende piedade de nós.
Jesus, tesouro dos fiéis, tende piedade de nós.
Jesus, bom Pastor, tende piedade de nós.
Jesus, verdadeira luz, tende piedade de nós.
Jesus, sabedoria eterna, tende piedade de nós.
Jesus, bondade infinita, tende piedade de nós.
Jesus, nosso caminho e nossa vida, tende piedade de nós.
Jesus, alegria dos Anjos, tende piedade de nós.
Jesus, Rei dos Patriarcas, tende piedade de nós.
Jesus, Mestre dos Apóstolos, tende piedade de nós.
Jesus, Doutor dos Evangelistas, tende piedade de nós.
Jesus, fortaleza dos Mártires, tende piedade de nós.
Jesus, luz dos Confessores, tende piedade de nós.
Jesus, pureza das Virgens, tende piedade de nós.
Jesus, coroa de todos os Santos, tende piedade de nós.

Sede-nos propício: perdoai-nos, Jesus.
Sede-nos propício: ouvi-nos, Jesus.
De todo o mal, livrai-nos, Jesus.
De todo o pecado, livrai-nos, Jesus.
Da vossa ira, livrai-nos, Jesus.
Das ciladas do demônio, livrai-nos, Jesus.
Do espírito de impureza, livrai-nos, Jesus.
Da morte eterna, livrai-nos, Jesus.
Do desprezo das vossas inspirações, livrai-nos, Jesus.
Pelo mistério da vossa santa Encarnação, livrai-nos, Jesus.
Pela vossa Natividade, livrai-nos, Jesus.
Pela vossa Infância, livrai-nos, Jesus.
Pela vossa santíssima Vida, livrai-nos, Jesus.
Pelos vossos Trabalhos, livrai-nos, Jesus.
Pela vossa Agonia e Paixão, livrai-nos, Jesus.
Pela vossa Cruz e Desamparo, livrai-nos, Jesus.
Pelas vossas Angústias, livrai-nos, Jesus.
Pela vossa Morte e Sepultura, livrai-nos, Jesus.
Pela vossa Ressurreição, livrai-nos, Jesus.
Pela vossa Ascensão, livrai-nos, Jesus.
Pela vossa instituição da Santíssima Eucaristia, livrai-nos, Jesus.
Pelas vossas Alegrias, livrai-nos, Jesus.
Pela vossa Glória, livrai-nos, Jesus.

Cordeiro de Deus, que tirais os pecados do mundo, perdoai-nos, Jesus.
Cordeiro de Deus, que tirais os pecados do mundo, ouvi-nos, Jesus.
Cordeiro de Deus, que tirais os pecados do mundo, tende piedade de nós, Jesus.

Jesus, ouvi-nos.
Jesus, atendei-nos.

Oremos: Senhor Jesus Cristo, que dissestes: «Pedi e recebereis, buscai e achareis, batei e abrir-se-vos-á», concedei-nos, nós Vo-lo pedimos, a nós que Vos pedimos o afeto do Vosso divino amor, para que Vos amemos de todo o coração, por palavras e obras, e não cessemos de Vos louvar. Dai-nos, Senhor, temor e amor perpétuos ao Vosso Santo Nome, pois nunca privais de Vossa direção aqueles que estabeleceis na firmeza do Vosso amor. Vós que viveis e reinais com Deus Pai na unidade do Espírito Santo pelos séculos dos séculos. Amém.`
  },
  terco: {
    id: "terco",
    title: "Oração do Santo Terço",
    subtitle: "Roteiro Tradicional para Rezar as Dezenas e Contemplar os Mistérios",
    icon: "📿",
    text: `1. Sinal da Cruz:
Pelo sinal da Santa Cruz, ♱ livrai-nos Deus, Nosso Senhor, ♱ dos nossos inimigos. ♱ Em nome do Pai, e do Filho, e do Espírito Santo. Amém.

2. Oferecimento do Terço:
Divino Jesus, nós Vos oferecemos este terço que vamos rezar, meditando nos mistérios da nossa Redenção. Concedei-nos, por intercessão da Virgem Maria, Mãe de Deus e nossa Mãe, as virtudes necessárias para bem rezá-lo e a graça de ganharmos as indulgências desta santa devoção.

3. Símbolo dos Apóstolos (Creio):
Creio em Deus Pai Todo-Poderoso, Criador do céu e da terra; e em Jesus Cristo, seu único Filho, nosso Senhor; que foi concebido pelo poder do Espírito Santo; nasceu da Virgem Maria; padeceu sob Pôncio Pilatos, foi crucificado, morto e sepultado; desceu à mansão dos mortos; ressuscitou ao terceiro dia; subiu aos céus; está sentado à direita de Deus Pai Todo-Poderoso, donde há de vir a julgar os vivos e os mortos. Creio no Espírito Santo; na Santa Igreja Católica; na comunhão dos Santos; na remissão dos pecados; na ressurreição da carne; na vida eterna. Amém.

4. 1 Pai-Nosso, 3 Ave-Marias (pelas virtudes da Fé, Esperança e Caridade) e 1 Glória ao Pai.

5. Em cada uma das 5 dezenas:
- Anuncia-se o Mistério e faz-se breve silêncio de reflexão;
- 1 Pai-Nosso;
- 10 Ave-Marias;
- 1 Glória ao Pai;
- Jaculatória: «Ó meu Jesus, perdoai-nos, livrai-nos do fogo do inferno, levai as almas todas para o Céu e socorrei principalmente as que mais precisarem da vossa misericórdia.»

6. Agradecimento e Salve Rainha:
Infinitas graças vos damos, soberana Rainha, pelos benefícios que todos os dias recebemos de vossas mãos maternais. Dignai-vos agora e para sempre tomar-nos debaixo de vosso poderoso amparo, e para mais vos obrigar, vos saudamos com uma Salve Rainha:

Salve, Rainha, Mãe de misericórdia, vida, doçura e esperança nossa, salve! A vós bradamos, os degredados filhos de Eva. A vós suspiramos, gemendo e chorando neste vale de lágrimas. Eia, pois, advogada nossa, esses vossos olhos misericordiosos a nós volvei, e depois deste desterro mostrai-nos Jesus, bendito fruto do vosso ventre, ó clemente, ó piedosa, ó doce sempre Virgem Maria.

℣. Rogai por nós, Santa Mãe de Deus.
℟. Para que sejamos dignos das promessas de Cristo. Amém.`
  },
  formula: {
    id: "formula",
    title: "Fórmula Solene de Consagração Total",
    subtitle: "A Jesus Cristo, a Sabedoria Encarnada, pelas Mãos de Maria (São Luís de Montfort)",
    icon: "📜",
    text: `Ó Sabedoria eterna e encarnada! Ó amabilíssimo e adorável Jesus, verdadeiro Deus e verdadeiro homem, Filho único do Pai Eterno e de Maria, sempre Virgem! Adoro-Vos profundamente no seio e nos esplendores de vosso Pai, durante a eternidade; e adoro-Vos também no seio virginal de Maria, vossa digníssima Mãe, no tempo da vossa Encarnação.

Agradeço-Vos por terdes aniquilado a Vós mesmo, tomando a forma de um escravo, para livrar-me do cruel cativeiro do demônio. Louvo-Vos e glorifico-Vos por terdes querido submeter-Vos a Maria, vossa santa Mãe, em todas as coisas, a fim de, por Ela, tornar-me vosso fiel escravo. Mas, ai de mim! Ingrato e infiel que sou, não guardei os votos e as promessas que tão solenemente Vos fiz no meu Batismo; não cumpri as minhas obrigações; não mereço ser chamado vosso filho, nem vosso escravo.

Recorro, pois, à misericórdia e à intercessão de vossa Santíssima Mãe, que me destes por Medianeira junto de Vós, e é por seu intermédio que espero obter de Vós a contrição e o perdão dos meus pecados, a aquisição e a conservação da Sabedoria.

Ave, pois, ó Maria Imaculada, Tabernáculo vivo da Divindade, onde a Sabedoria eterna oculta quer ser adorada pelos anjos e pelos homens! Ave, ó Rainha do Céu e da Terra, a cujo império está sujeito tudo o que está abaixo de Deus! Ave, ó refúgio seguro dos pecadores, cuja misericórdia a ninguém falta! Atendei aos desejos que tenho da divina Sabedoria e recebei para esse fim os votos e as ofertas que a minha baixeza Vos apresenta:

Eu, [diga o seu nome completo], pecador infiel, renovo e ratifico hoje, em vossas mãos, as promessas do meu Batismo: renuncio para sempre a Satanás, às suas pompas e às suas obras, e dou-me inteiramente a Jesus Cristo, a Sabedoria Encarnada, para levar a minha cruz atrás d'Ele, todos os dias de minha vida, e a fim de Lhe ser mais fiel do que tenho sido até agora.

Na presença de toda a corte celeste, escolho-Vos hoje para minha Mãe e Senhora. Entrego-Vos e consagro-Vos, na qualidade de escravo, o meu corpo e a minha alma, os meus bens interiores e exteriores, e o próprio valor das minhas boas ações passadas, presentes e futuras, deixando-Vos inteiro e pleno direito de dispor de mim e de tudo o que me pertence, sem exceção, segundo o vosso beneplácito, para a maior glória de Deus, no tempo e na eternidade.

Recebei, ó Virgem benigna, esta pequena oferta da minha escravidão, em honra e união daquela submissão que a Sabedoria Eterna quis ter à vossa maternidade; em homenagem ao poder que tendes ambos sobre este vermezinho e miserável pecador; e em ação de graças pelos privilégios com que a Santíssima Trindade Vos favoreceu. Protesto que quero doravante, como vosso verdadeiro escravo, procurar a vossa honra e obedecer-Vos em todas as coisas.

Ó Mãe admirável, apresentai-me ao vosso querido Filho na qualidade de escravo eterno, a fim de que, tendo-me Ele resgatado por Vós, por Vós me receba! Ó Mãe de misericórdia, concedei-me a graça de obter a verdadeira Sabedoria de Deus e de colocar-me, para esse fim, no número daqueles que amais, ensinais, guiais, sustentais e protegeis como vossos filhos e vossos escravos.

Ó Virgem fiel, tornai-me em todas as coisas um tão perfeito discípulo, imitador e escravo da Sabedoria Encarnada, Jesus Cristo, vosso Filho, que eu chegue, por vossa intercessão e a vosso exemplo, à plenitude da sua idade na Terra e da sua glória no Céu. Amém!`
  }
};

function getMarianPrayer(name: string): MarianPrayerDetail {
  const norm = name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim();
  if (norm.includes("veni creator")) return MARIAN_PRAYERS_CATALOG["veni"];
  if (norm.includes("ave maris stella")) return MARIAN_PRAYERS_CATALOG["ave"];
  if (norm.includes("magnificat")) return MARIAN_PRAYERS_CATALOG["magnificat"];
  if (norm.includes("ladainha") && (norm.includes("senhora") || norm.includes("maria") || norm.includes("lauretana"))) {
    return MARIAN_PRAYERS_CATALOG["ladainha_ns"];
  }
  if (norm.includes("ladainha") && norm.includes("espirito")) {
    return MARIAN_PRAYERS_CATALOG["ladainha_espirito"];
  }
  if (norm.includes("ladainha") && (norm.includes("jesus") || norm.includes("nome"))) {
    return MARIAN_PRAYERS_CATALOG["ladainha_jesus"];
  }
  if (norm.includes("terco") || norm.includes("rosario")) {
    return MARIAN_PRAYERS_CATALOG["terco"];
  }
  if (norm.includes("formula") || norm.includes("solene") || norm.includes("consagracao")) {
    return MARIAN_PRAYERS_CATALOG["formula"];
  }
  return {
    id: norm,
    title: name,
    subtitle: "Oração Tradicional da Consagração",
    icon: "🙏",
    text: `Oração prescrita para este dia da preparação: ${name}.\nReze com espírito de recolhimento, humildade e amor a Jesus por Maria.`
  };
}

// ── Card do Dia da Consagração (integrado com a Devoção da Galeria) ──
function ConsagracaoDayCard({
  diaInfo,
  isCompleted,
  onToggle,
  onOpenFormula
}: {
  diaInfo: MarianConsecrationDay;
  isCompleted: boolean;
  onToggle: () => void;
  onOpenFormula: () => void;
}) {
  const [activePrayerName, setActivePrayerName] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const prayerBoxRef = useRef<HTMLDivElement>(null);

  // Fecha o texto da oração aberta caso o usuário troque de dia
  useEffect(() => {
    setActivePrayerName(null);
  }, [diaInfo.dia]);

  const activePrayerData = activePrayerName ? getMarianPrayer(activePrayerName) : null;

  const handleTogglePrayer = (oracao: string) => {
    if (activePrayerName === oracao) {
      setActivePrayerName(null);
    } else {
      setActivePrayerName(oracao);
      setTimeout(() => {
        prayerBoxRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
      }, 60);
    }
  };

  const handleCopyPrayer = (text: string) => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(text).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      });
    }
  };

  return (
    <Card className={`border-none shadow-lg transition-colors duration-300 overflow-hidden ${isCompleted ? "bg-blue-50/40 dark:bg-blue-950/20" : "bg-white dark:bg-slate-900"
      }`}>
      {/* Header do Dia */}
      <CardHeader className="bg-gradient-to-r from-blue-100/50 to-indigo-100/50 dark:from-slate-800 dark:to-blue-950/40 pb-4">
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2 flex-wrap">
              <Badge className="bg-blue-800 text-white font-bold text-xs">
                {diaInfo.dia}º Dia da Preparação
              </Badge>
              <Badge variant="outline" className="border-blue-400 text-blue-800 dark:text-blue-300 font-semibold text-xs">
                {diaInfo.semana}
              </Badge>
              <Badge variant="secondary" className="text-slate-600 dark:text-slate-300 text-xs">
                {diaInfo.fase}
              </Badge>
            </div>
            <CardTitle className="text-xl sm:text-2xl font-bold font-brand text-blue-950 dark:text-blue-100 pt-1">
              {diaInfo.titulo}
            </CardTitle>
          </div>

          {/* Checkbox de Conclusão */}
          <div className="flex items-center gap-2.5 bg-white dark:bg-slate-800 px-4 py-2.5 rounded-2xl border-2 border-blue-200 dark:border-blue-800 shadow-sm shrink-0 self-start sm:self-auto">
            <Checkbox
              id={`check-marian-${diaInfo.dia}`}
              checked={isCompleted}
              onCheckedChange={onToggle}
              className="h-5 w-5 border-2 border-blue-600 data-[state=checked]:bg-blue-700"
            />
            <label
              htmlFor={`check-marian-${diaInfo.dia}`}
              className="text-xs font-bold uppercase tracking-wider text-blue-900 dark:text-blue-200 cursor-pointer select-none"
            >
              {isCompleted ? "Dia Concluído ✓" : "Marcar Concluído"}
            </label>
          </div>
        </div>
      </CardHeader>

      <CardContent className="pt-6 space-y-6">
        {/* ── CARD DA DEVOÇÃO MARIANA DA GALERIA HOMENAGEADA NO DIA ── */}
        <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-blue-50/80 via-white to-sky-50/80 dark:from-slate-800/90 dark:via-slate-800 dark:to-blue-950/40 border-2 border-blue-200/80 dark:border-blue-800 shadow-sm">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
            <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border-2 border-blue-400 shadow-md shrink-0">
              <Image
                src={getProxiedImageUrl(diaInfo.devocaoImagem)}
                alt={diaInfo.devocaoNome}
                fill
                className="object-cover object-center"
                sizes="96px"
              />
            </div>
            <div className="space-y-1.5 text-center sm:text-left flex-1">
              <div className="flex items-center justify-center sm:justify-start gap-2 flex-wrap">
                <span className="text-[11px] font-bold uppercase tracking-wider text-blue-700 dark:text-blue-300">
                  Devoção Mariana Inspiradora do Dia:
                </span>
                <Badge variant="outline" className="text-amber-800 dark:text-amber-300 border-amber-300 text-[10px] font-bold">
                  Galeria de Devoções
                </Badge>
              </div>
              <h4 className="text-lg sm:text-xl font-bold font-brand text-blue-950 dark:text-blue-100">
                {diaInfo.devocaoNome}
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-snug">
                {diaInfo.devocaoDescricao}
              </p>
            </div>
          </div>
        </div>

        {/* Leitura Bíblica e do Tratado */}
        <div className="grid sm:grid-cols-2 gap-3.5 text-xs sm:text-sm">
          <div className="p-3.5 bg-blue-50 dark:bg-blue-950/30 rounded-xl border-l-4 border-blue-500">
            <p className="font-bold text-blue-900 dark:text-blue-200 mb-0.5">📖 Palavra de Deus:</p>
            <p className="text-slate-700 dark:text-slate-300">{diaInfo.passagemBiblica}</p>
          </div>
          <div className="p-3.5 bg-amber-50 dark:bg-amber-950/30 rounded-xl border-l-4 border-amber-500">
            <p className="font-bold text-amber-900 dark:text-amber-200 mb-0.5">📜 Tratado / Leitura Espiritual:</p>
            <p className="text-slate-700 dark:text-slate-300">{diaInfo.leituraTratado}</p>
          </div>
        </div>

        {/* Meditação Diária */}
        <div className="space-y-2">
          <h4 className="font-bold text-sm uppercase tracking-wider text-blue-900 dark:text-blue-200 flex items-center gap-1.5">
            <BookOpen className="w-4 h-4 text-blue-600" />
            Meditação para a Alma:
          </h4>
          <p className="text-sm sm:text-base text-slate-700 dark:text-slate-200 leading-relaxed font-serif bg-slate-50 dark:bg-slate-800/60 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-inner">
            {diaInfo.meditacao}
          </p>
        </div>

        {/* Orações do Dia */}
        <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-blue-900 to-indigo-950 text-white space-y-3 shadow-md">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-sky-200 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-400" />
              Orações Prescritas para Hoje:
            </h4>
            <span className="text-[11px] text-sky-200/80 italic">
              Toque na oração para abrir o texto abaixo
            </span>
          </div>

          <div className="flex flex-wrap gap-2 pt-1">
            {diaInfo.oracoes.map((oracao, idx) => {
              const isSelected = activePrayerName === oracao;
              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => handleTogglePrayer(oracao)}
                  className={`px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold border transition-all duration-200 flex items-center gap-1.5 cursor-pointer shadow-xs ${isSelected
                      ? "bg-amber-400 text-blue-950 font-bold border-amber-300 shadow-md ring-2 ring-amber-300/60 scale-105"
                      : "bg-white/15 hover:bg-white/25 active:scale-95 text-blue-100 hover:text-white border-white/20 hover:border-white/40"
                    }`}
                  title={isSelected ? `Fechar oração ${oracao}` : `Abrir oração ${oracao}`}
                >
                  <span className="text-sm">📖</span>
                  <span>{oracao}</span>
                  {isSelected ? (
                    <ChevronUp className="w-3.5 h-3.5 text-blue-950 font-bold" />
                  ) : (
                    <ChevronDown className="w-3.5 h-3.5 opacity-60" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Caixa de Texto da Oração Aberta Abaixo */}
          {activePrayerData && (
            <div
              ref={prayerBoxRef}
              className="mt-4 p-4 sm:p-6 rounded-2xl bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 border-2 border-blue-200 dark:border-blue-800 shadow-xl animate-in fade-in-50 slide-in-from-top-2 duration-300 space-y-3"
            >
              <div className="flex items-start justify-between gap-3 pb-3 border-b border-slate-200 dark:border-slate-800">
                <div className="flex items-center gap-2.5">
                  <span className="text-2xl">{activePrayerData.icon}</span>
                  <div>
                    <h5 className="font-bold font-brand text-base sm:text-lg text-blue-950 dark:text-sky-200 leading-tight">
                      {activePrayerData.title}
                    </h5>
                    {activePrayerData.subtitle && (
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                        {activePrayerData.subtitle}
                      </p>
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-1.5 shrink-0">
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={() => handleCopyPrayer(activePrayerData.text)}
                    className="h-8 px-2.5 text-xs text-slate-600 dark:text-slate-300 hover:text-blue-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg"
                    title="Copiar texto da oração"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600 mr-1" />
                        <span className="text-emerald-700 dark:text-emerald-400 font-semibold">Copiado!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 mr-1" />
                        <span>Copiar</span>
                      </>
                    )}
                  </Button>
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={() => setActivePrayerName(null)}
                    className="h-8 w-8 p-0 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 rounded-lg"
                    title="Fechar texto da oração"
                  >
                    <X className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              <div className="text-xs sm:text-sm font-serif leading-relaxed whitespace-pre-line text-slate-700 dark:text-slate-200 max-h-[60vh] overflow-y-auto pr-2 scrollbar-thin">
                {activePrayerData.text}
              </div>
            </div>
          )}
        </div>

        {/* Conclusão do 33º dia */}
        {diaInfo.dia === 33 && (
          <div className="p-6 bg-gradient-to-r from-amber-100 to-amber-50 dark:from-amber-950/40 dark:to-slate-900 rounded-2xl border-2 border-amber-400 shadow-xl space-y-3 text-center">
            <p className="text-2xl font-bold font-brand text-amber-950 dark:text-amber-200 flex items-center justify-center gap-2">
              <Heart className="w-6 h-6 text-red-600 fill-red-500" />
              Parabéns! Você Chegou ao Dia da Consagração Total!
              <Heart className="w-6 h-6 text-red-600 fill-red-500" />
            </p>
            <p className="text-sm text-slate-700 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Você completou os 33 dias de preparação. Hoje é o dia de participar da Santa Missa em estado de graça, comungar com fervor de amor e assinar solenemente a fórmula da Consagração a Jesus por Maria!
            </p>
            <Button
              onClick={onOpenFormula}
              className="bg-red-700 hover:bg-red-800 text-white font-bold px-8 py-3 rounded-xl shadow-lg hover:scale-105 transition-all"
            >
              📜 Ler e Assinar a Fórmula Solene de Consagração
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
