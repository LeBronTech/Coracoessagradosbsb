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
  RotateCcw
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
import { getProxiedImageUrl } from "@/lib/utils";

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
        setCompletedDays(JSON.parse(savedCompleted));
      }
    } catch (e) {
      console.error("Erro ao carregar dados da consagração", e);
    }
  }, []);

  // Foco no dia sugerido ao carregar
  const once = useRef(false);
  useEffect(() => {
    if (!once.current && currentConsagracaoDay) {
      setActiveTab(`dia-${currentConsagracaoDay}`);
      setTimeout(() => {
        const element = document.getElementById(`trigger-dia-${currentConsagracaoDay}`);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
        }
      }, 300);
      once.current = true;
    }
  }, [currentConsagracaoDay]);

  useEffect(() => {
    try {
      localStorage.setItem("mariano-consagracao-completed", JSON.stringify(completedDays));
    } catch (e) {
      console.error(e);
    }
  }, [completedDays]);

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
    setCompletedDays(prev =>
      prev.includes(day) ? prev.filter(d => d !== day) : [...prev, day]
    );
  };

  const isDayCompleted = (day: number) => completedDays.includes(day);

  const handleTabChange = (value: string) => {
    setActiveTab(value);
    setTimeout(() => {
      const triggerElement = document.getElementById("trigger-" + value);
      if (triggerElement) {
        triggerElement.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
    }, 100);
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
          className={`font-semibold text-xs sm:text-sm rounded-xl transition-all ${
            showMethod ? "bg-blue-700 text-white" : "border-blue-200 text-blue-900 dark:text-blue-200 hover:bg-blue-50"
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
          className={`font-semibold text-xs sm:text-sm rounded-xl transition-all ${
            showPrayers ? "bg-purple-700 text-white" : "border-purple-200 text-purple-900 dark:text-purple-200 hover:bg-purple-50"
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
          className={`font-semibold text-xs sm:text-sm rounded-xl transition-all ${
            showFormula ? "bg-red-700 text-white" : "border-red-200 text-red-900 dark:text-red-200 hover:bg-red-50"
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
          <div className="flex justify-between items-center mb-2 px-1 text-[11px] font-bold uppercase tracking-wider text-blue-800 dark:text-blue-300">
            <span className="flex items-center gap-1">
              <ChevronLeft className="w-3.5 h-3.5" /> Arraste para ver todos os 33 dias
            </span>
            <span className="text-slate-500">
              {completedDays.length} de 33 concluídos ({Math.round((completedDays.length / 33) * 100)}%)
            </span>
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

                  return (
                    <TabsTrigger
                      key={diaInfo.dia}
                      id={`trigger-dia-${diaInfo.dia}`}
                      value={`dia-${diaInfo.dia}`}
                      className={`min-w-[95px] sm:min-w-[105px] py-2.5 px-3 rounded-xl transition-all m-1 flex flex-col items-center justify-center gap-1 border-2 relative cursor-pointer ${
                        completed
                          ? "bg-blue-900 text-white border-blue-900 hover:bg-blue-800 font-bold"
                          : "bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border-slate-200 dark:border-slate-700 hover:border-blue-300 shadow-sm"
                      } ${isToday ? "ring-2 ring-emerald-500 ring-offset-2 dark:ring-offset-slate-900 shadow-md scale-105" : ""}
                      data-[state=active]:bg-blue-600 data-[state=active]:text-white data-[state=active]:border-blue-600`}
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
                  onOpenPrayers={() => {
                    setShowPrayers(true);
                    window.scrollTo({ top: 300, behavior: "smooth" });
                  }}
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

// ── Card do Dia da Consagração (integrado com a Devoção da Galeria) ──
function ConsagracaoDayCard({
  diaInfo,
  isCompleted,
  onToggle,
  onOpenPrayers,
  onOpenFormula
}: {
  diaInfo: MarianConsecrationDay;
  isCompleted: boolean;
  onToggle: () => void;
  onOpenPrayers: () => void;
  onOpenFormula: () => void;
}) {
  return (
    <Card className={`border-none shadow-lg transition-colors duration-300 overflow-hidden ${
      isCompleted ? "bg-blue-50/40 dark:bg-blue-950/20" : "bg-white dark:bg-slate-900"
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
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={onOpenPrayers}
                className="text-xs bg-white/10 hover:bg-white/20 text-white border-white/30 h-7"
              >
                Abrir Textos das Orações
              </Button>
              {diaInfo.dia === 33 && (
                <Button
                  size="sm"
                  onClick={onOpenFormula}
                  className="text-xs bg-amber-500 hover:bg-amber-600 text-amber-950 font-bold h-7"
                >
                  Fórmula Solene
                </Button>
              )}
            </div>
          </div>
          <div className="flex flex-wrap gap-2 pt-1">
            {diaInfo.oracoes.map((oracao, idx) => (
              <span
                key={idx}
                className="px-3 py-1 rounded-full bg-white/15 text-blue-100 text-xs font-semibold border border-white/20"
              >
                • {oracao}
              </span>
            ))}
          </div>
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
