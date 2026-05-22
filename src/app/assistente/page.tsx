"use client";

import React, { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useToast } from "@/hooks/use-toast";
import { 
  ChevronLeft, 
  Sparkles, 
  Copy, 
  Check, 
  Calendar, 
  MessageSquare, 
  Instagram, 
  Send, 
  FileText, 
  BookOpen, 
  Clock,
  Trash2,
  AlertTriangle,
  UserCheck,
  ChevronDown,
  ChevronUp
} from "lucide-react";
import { saints, novenaData, saintsOfTheDay } from "@/lib/data";
import { addDays, subDays, format, parse, differenceInDays } from "date-fns";
import { ptBR } from "date-fns/locale";

// Mapeamento de Emojis temáticos sugeridos por Santo
const saintEmojisMap: Record<string, [string, string]> = {
  sao_jose: ["⚒️", "🌹"],
  sao_jose_operario: ["⚒️", "🛠️"],
  sao_jose_19_marco: ["⚒️", "🌹"],
  sao_jorge: ["⚔️", "🛡️"],
  rita_cassia: ["🌹", "🐝"],
  santo_expedito: ["🛡️", "⏳"],
  padre_pio: ["📿", "🕊️"],
  teresinha: ["🌹", "🕊️"],
  antonio: ["👶", "🍞"],
  judas_tadeu: ["📖", "🟢"],
  sebastiao: ["🏹", "🪵"],
  francisco: ["🕊️", "🐕"],
  imaculada_conceicao: ["👑", "🌹"],
  rosario: ["📿", "🌹"],
  aparecida: ["👑", "📿"],
  gracas: ["💍", "✨"],
  natal_sao_leao: ["👶", "🌟"],
  natal_familia: ["🏠", "❤️"],
};

const MESES = [
  "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", 
  "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
];

// Rodapé padrão da Comunidade
const FOOTER_PADRAO = `Sagrado coração de Jesus seja nossa força ❤️🔥 
Imaculado coração de Maria seja nossa proteção 🌹
Castíssimo coração de São José Valei-nos ⚒️
Comunidade Corações Sagrados❤️🔥`;

// Rodapé de engajamento do Instagram
const ENGAGEMENT_INSTAGRAM = "📖Leia, ❤️Curta, 🔄 Reposte, ✝️ conheça nossa comunidade!";

// Aviso padrão de Novenas no WhatsApp
const WA_NOVENA_AVISO = "⚠️ Atenção: A oração de cada dia será postada aqui no grupo de novenas diariamente. Acompanhe conosco!";

// Helper para converter HTML de história para Plain Text do WhatsApp/Instagram
const convertHtmlToWhatsappMarkdown = (html: string): string => {
  if (!html) return "";
  let text = html;
  // Substitui h4 por negritos e quebras de linha
  text = text.replace(/<h4>(.*?)<\/h4>/gi, "\n\n*$1*\n");
  // Substitui parágrafos e adiciona quebras de linha
  text = text.replace(/<p>(.*?)<\/p>/gi, "\n$1\n");
  // Substitui tags b e strong por negritos
  text = text.replace(/<(b|strong)>(.*?)<\/(b|strong)>/gi, "*$2*");
  // Substitui tags em e i por itálicos
  text = text.replace(/<(em|i)>(.*?)<\/(em|i)>/gi, "_$2_");
  // Remove todas as outras tags HTML remanescentes
  text = text.replace(/<[^>]*>/g, "");
  // Remove quebras de linha duplicadas em excesso
  text = text.replace(/\n\s*\n\s*\n/g, "\n\n");
  return text.trim();
};

export default function AssistentePage() {
  const { toast } = useToast();
  const [hydrated, setHydrated] = useState(false);
  const [activeTab, setActiveTab] = useState<"redator" | "formatador" | "santododia" | "multitask">("multitask");

  // --- Tempo Real para Cronômetro ---
  const [now, setNow] = useState(new Date());

  // --- Navegação Temporal por Mês ---
  const [selectedMonth, setSelectedMonth] = useState<string>(() => {
    const mIdx = new Date().getMonth();
    return MESES[mIdx];
  });

  // --- Estados do Redator de Convites ---
  const [selectedSaintId, setSelectedSaintId] = useState<string>("sao_jose");
  const [customSaintName, setCustomSaintName] = useState<string>("");
  const [customFeastDay, setCustomFeastDay] = useState<string>("");
  const [devotionalText, setDevotionalText] = useState<string>("");
  const [emoji1, setEmoji1] = useState<string>("⚒️");
  const [emoji2, setEmoji2] = useState<string>("🌹");
  const [siteAnchor, setSiteAnchor] = useState<string>("#sao_jose");

  // --- Estados do Formatador de Novenas ---
  const [formatSaintId, setFormatSaintId] = useState<string>("sao_jose");
  const [formatEmoji1, setFormatEmoji1] = useState<string>("⚒️");
  const [formatEmoji2, setFormatEmoji2] = useState<string>("🌹");
  const [formatInitialPrayer, setFormatInitialPrayer] = useState<string>("");
  const [formatFinalPrayer, setFormatFinalPrayer] = useState<string>("");
  const [novenaStartDate, setNovenaStartDate] = useState<string>("");
  const [novenaDaysTexts, setNovenaDaysTexts] = useState<string[]>(Array(9).fill(""));
  const [novenaDaysTitles, setNovenaDaysTitles] = useState<string[]>(
    Array.from({ length: 9 }, (_, i) => `${i + 1}º Dia`)
  );

  // --- Estados do Santo do Dia ---
  const [selectedSaintInDayIndex, setSelectedSaintInDayIndex] = useState(0);

  // --- Controle de Cópias e Cache (LocalStorage) ---
  const [copiedHistory, setCopiedHistory] = useState<Record<string, boolean>>({});

  // --- Estados customizados para Emojis (Novenas e Santo do Dia) ---
  const [customNovenasEmojis, setCustomNovenasEmojis] = useState<Record<string, [string, string]>>({});
  const [santoEmoji1, setSantoEmoji1] = useState("😇");
  const [santoEmoji2, setSantoEmoji2] = useState("✨");

  // --- Estados de navegação dos dias por novena (Envios de Hoje) ---
  const [selectedDayPerNovena, setSelectedDayPerNovena] = useState<Record<string, number>>({});
  const [expandedNovenas, setExpandedNovenas] = useState<Record<string, boolean>>({});

  useEffect(() => {
    setHydrated(true);
    // Carrega histórico de cópias
    const history: Record<string, boolean> = {};
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key && (key.startsWith("copiado_") || key.startsWith("enviado_"))) {
        history[key] = localStorage.getItem(key) === "true";
      }
    }
    setCopiedHistory(history);

    // Carrega emojis de novenas salvos
    const novenaEmojisCache: Record<string, [string, string]> = {};
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key && key.startsWith("novena_emojis_")) {
        const id = key.replace("novena_emojis_", "");
        try {
          const parsed = JSON.parse(localStorage.getItem(key) || "");
          if (Array.isArray(parsed) && parsed.length >= 2) {
            novenaEmojisCache[id] = [parsed[0], parsed[1]];
          }
        } catch (e) {}
      }
    }
    setCustomNovenasEmojis(novenaEmojisCache);

    // Carrega emojis do santo do dia salvos
    const cachedSantoEmojis = localStorage.getItem("santo_emojis");
    if (cachedSantoEmojis) {
      try {
        const parsed = JSON.parse(cachedSantoEmojis);
        if (Array.isArray(parsed) && parsed.length >= 2) {
          setSantoEmoji1(parsed[0]);
          setSantoEmoji2(parsed[1]);
        }
      } catch (e) {}
    }

    // Timer do cronômetro
    const timer = setInterval(() => {
      setNow(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Filtra santos pelo mês ativo
  const filteredSaints = useMemo(() => {
    return saints.filter(s => s.month.toLowerCase().includes(selectedMonth.toLowerCase()));
  }, [selectedMonth]);

  // Filtra chaves do novenaData pelo mês ativo
  const filteredNovenaKeys = useMemo(() => {
    return Object.keys(novenaData).filter(key => {
      const saint = saints.find(s => s.id === key);
      return saint && saint.month.toLowerCase().includes(selectedMonth.toLowerCase());
    });
  }, [selectedMonth]);

  // Adapta o Santo do Dia selecionado baseado no relógio
  const todaySaintData = useMemo(() => {
    const day = now.getDate();
    const month = MESES[now.getMonth()];
    return saintsOfTheDay.find(s => s.day === day && s.month === month);
  }, [now]);

  // Atualiza as seleções ao mudar de mês
  useEffect(() => {
    if (filteredSaints.length > 0) {
      const isAlreadyIn = filteredSaints.some(s => s.id === selectedSaintId);
      if (!isAlreadyIn) {
        setSelectedSaintId(filteredSaints[0].id);
      }
    } else {
      setSelectedSaintId("custom");
    }

    if (filteredNovenaKeys.length > 0) {
      const isAlreadyIn = filteredNovenaKeys.includes(formatSaintId);
      if (!isAlreadyIn) {
        setFormatSaintId(filteredNovenaKeys[0]);
      }
    }
  }, [selectedMonth, filteredSaints, filteredNovenaKeys]);

  // Preenche dados do Redator quando altera o Santo
  useEffect(() => {
    if (selectedSaintId === "custom") {
      setCustomSaintName("");
      setCustomFeastDay("");
      setEmoji1("🙏");
      setEmoji2("✝️");
      setSiteAnchor("");
      setDevotionalText("");
      return;
    }

    const saint = saints.find(s => s.id === selectedSaintId) || 
      (selectedSaintId === "natal_sao_leao" ? { name: "São Leão Magno", feastDay: "25 de Dezembro", id: "natal_sao_leao" } : null) ||
      (selectedSaintId === "natal_familia" ? { name: "Sagrada Família", feastDay: "25 de Dezembro", id: "natal_familia" } : null);

    if (saint) {
      setCustomSaintName(saint.name);
      setCustomFeastDay(saint.feastDay || "");
      
      const emojis = customNovenasEmojis[selectedSaintId] || saintEmojisMap[selectedSaintId] || ["🙏", "✝️"];
      setEmoji1(emojis[0]);
      setEmoji2(emojis[1]);
      setSiteAnchor(`#${selectedSaintId}`);

      const novena = novenaData[selectedSaintId];
      if (novena && novena.description) {
        const cleanDesc = novena.description.replace(/<[^>]*>/g, "");
        setDevotionalText(cleanDesc.substring(0, 180) + "...");
      } else {
        setDevotionalText(`Que a exemplo deste grande santo, possamos crescer no amor a Nosso Senhor e buscar a santidade em nossas vidas cotidianas.`);
      }
    }
  }, [selectedSaintId, customNovenasEmojis]);

  // Preenche dados do Formatador quando altera o Santo
  useEffect(() => {
    const novena = novenaData[formatSaintId];
    const emojis = customNovenasEmojis[formatSaintId] || saintEmojisMap[formatSaintId] || ["🙏", "✝️"];
    setFormatEmoji1(emojis[0]);
    setFormatEmoji2(emojis[1]);

    const saint = saints.find(s => s.id === formatSaintId);
    if (saint && saint.startDate) {
      setNovenaStartDate(saint.startDate);
    } else {
      setNovenaStartDate("");
    }

    if (novena) {
      const cleanInitial = novena.initialPrayer ? novena.initialPrayer.replace(/<[^>]*>/g, "\n").trim() : "";
      const cleanFinal = novena.finalPrayer ? novena.finalPrayer.replace(/<[^>]*>/g, "\n").trim() : "";
      setFormatInitialPrayer(cleanInitial);
      setFormatFinalPrayer(cleanFinal);

      const daysContent = novena.days.map(d => {
        let content = d.content.replace(/<[^>]*>/g, "\n").trim();
        content = content.replace(/\n\s*\n/g, "\n\n");
        return content;
      });
      
      const daysTitles = novena.days.map(d => d.day);

      const filledDays = [...daysContent];
      while (filledDays.length < 9) filledDays.push("");
      setNovenaDaysTexts(filledDays.slice(0, 9));

      const filledTitles = [...daysTitles];
      while (filledTitles.length < 9) filledTitles.push(`Dia ${filledTitles.length + 1}`);
      setNovenaDaysTitles(filledTitles.slice(0, 9));
    } else {
      setFormatInitialPrayer("");
      setFormatFinalPrayer("");
      setNovenaDaysTexts(Array(9).fill(""));
      setNovenaDaysTitles(Array.from({ length: 9 }, (_, i) => `${i + 1}º Dia`));
    }
  }, [formatSaintId, customNovenasEmojis]);

  // Função para copiar texto com feedback visual, cache e reversão ao clicar novamente
  const handleCopyText = (text: string, key: string) => {
    if (copiedHistory[key]) {
      // Reverter status se já foi copiado
      localStorage.removeItem(key);
      setCopiedHistory(prev => ({ ...prev, [key]: false }));
      toast({
        title: "Envio Revertido!",
        description: "O status deste dia foi marcado como pendente (não enviado).",
        duration: 2000,
      });
    } else {
      // Copiar e marcar como enviado
      navigator.clipboard.writeText(text);
      localStorage.setItem(key, "true");
      setCopiedHistory(prev => ({ ...prev, [key]: true }));
      toast({
        title: "Copiado com Sucesso!",
        description: "O texto já está na área de transferência com a formatação correta.",
        duration: 3000,
      });
    }
  };

  // Limpar histórico de cópias
  const handleClearHistory = () => {
    Object.keys(copiedHistory).forEach(key => {
      localStorage.removeItem(key);
    });
    setCopiedHistory({});
    toast({
      title: "Progresso Reiniciado!",
      description: "Os marcadores visuais de envios foram limpos.",
      duration: 3000,
    });
  };

  // --- Lógicas de Calendário e Datas ---
  const calculatedStartDateStr = useMemo(() => {
    if (!customFeastDay) return "[Defina a Festa Litúrgica]";
    const mesesPt = [
      "janeiro", "fevereiro", "março", "abril", "maio", "junho", 
      "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"
    ];

    try {
      let dia = 0;
      let mesIdx = 0;
      const cleanDate = customFeastDay.toLowerCase().trim();
      
      if (cleanDate.includes("/")) {
        const parts = cleanDate.split("/");
        dia = parseInt(parts[0], 10);
        mesIdx = parseInt(parts[1], 10) - 1;
      } else {
        const regex = /(\d+)\s+de\s+([a-zçãõáéíóú]+)/;
        const match = cleanDate.match(regex);
        if (match) {
          dia = parseInt(match[1], 10);
          mesIdx = mesesPt.indexOf(match[2]);
        } else {
          const numMatch = cleanDate.match(/\d+/);
          if (numMatch) {
            dia = parseInt(numMatch[0], 10);
            const foundMonth = mesesPt.find(m => cleanDate.includes(m));
            if (foundMonth) mesIdx = mesesPt.indexOf(foundMonth);
          }
        }
      }

      if (dia > 0 && mesIdx >= 0 && mesIdx < 12) {
        const anoAtual = now.getFullYear();
        const dataFesta = new Date(anoAtual, mesIdx, dia);
        const dataInicio = subDays(dataFesta, 9);
        return format(dataInicio, "dd 'de' MMMM", { locale: ptBR });
      }
    } catch (e) {}
    return "[Formato inválido. Use 'DD de Mês']";
  }, [customFeastDay, now]);

  const calculateNovenaDayDate = (dayIdx: number) => {
    if (!novenaStartDate) return null;
    const mesesPt = [
      "janeiro", "fevereiro", "março", "abril", "maio", "junho", 
      "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"
    ];

    try {
      let dia = 0;
      let mesIdx = 0;
      const cleanDate = novenaStartDate.toLowerCase().trim();

      if (cleanDate.includes("/")) {
        const parts = cleanDate.split("/");
        dia = parseInt(parts[0], 10);
        mesIdx = parseInt(parts[1], 10) - 1;
      } else {
        const regex = /(\d+)\s+de\s+([a-zçãõáéíóú]+)/;
        const match = cleanDate.match(regex);
        if (match) {
          dia = parseInt(match[1], 10);
          mesIdx = mesesPt.indexOf(match[2]);
        } else {
          const numMatch = cleanDate.match(/\d+/);
          if (numMatch) {
            dia = parseInt(numMatch[0], 10);
            const foundMonth = mesesPt.find(m => cleanDate.includes(m));
            if (foundMonth) mesIdx = mesesPt.indexOf(foundMonth);
          }
        }
      }

      if (dia > 0 && mesIdx >= 0 && mesIdx < 12) {
        const anoAtual = now.getFullYear();
        const start = new Date(anoAtual, mesIdx, dia);
        const dayDate = addDays(start, dayIdx);
        return format(dayDate, "dd/MM 'e' EEEE", { locale: ptBR });
      }
    } catch (e) {}
    return null;
  };

  const isDayToday = (dayIdx: number) => {
    const suggested = calculateNovenaDayDate(dayIdx);
    if (!suggested) return false;
    const todayStr = format(now, "dd/MM", { locale: ptBR });
    return suggested.startsWith(todayStr);
  };

  // --- Cronômetro de Novenas ---
  const countdowns = useMemo(() => {
    const results: Record<string, { status: "not_started" | "active" | "finished"; text: string; label: string; isUrgent?: boolean }> = {};
    
    filteredSaints.forEach(saint => {
      if (!saint.startDate || !saint.endDate) return;
      try {
        const [startDay, startMonth] = saint.startDate.split("/").map(Number);
        const [endDay, endMonth] = saint.endDate.split("/").map(Number);
        const ano = now.getFullYear();

        const startDate = new Date(ano, startMonth - 1, startDay, 0, 0, 0);
        let endDate = new Date(ano, endMonth - 1, endDay, 23, 59, 59);

        if (endDate < startDate) {
          endDate.setFullYear(ano + 1);
        }

        const todayDateOnly = new Date(now.getFullYear(), now.getMonth(), now.getDate());
        const startCalendarDate = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate());
        const calendarDiffToStart = differenceInDays(startCalendarDate, todayDateOnly);

        if (now < startDate) {
          const diff = startDate.getTime() - now.getTime();
          const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
          const horas = Math.floor((diff / (1000 * 60 * 60)) % 24);
          const minutos = Math.floor((diff / (1000 * 60)) % 60);
          const segundos = Math.floor((diff / 1000) % 60);

          results[saint.id] = {
            status: "not_started",
            text: `${dias}d ${horas}h ${minutos}m ${segundos}s`,
            label: "Falta para iniciar",
            isUrgent: calendarDiffToStart === 1
          };
        } else if (now >= startDate && now <= endDate) {
          const diffDays = differenceInDays(now, startDate);
          const currentDay = Math.min(9, Math.max(1, diffDays + 1));
          results[saint.id] = {
            status: "active",
            text: `Dia ${currentDay} de 9`,
            label: "Novena em Andamento"
          };
        } else {
          results[saint.id] = {
            status: "finished",
            text: "Concluída",
            label: "Status"
          };
        }
      } catch (e) {}
    });

    return results;
  }, [filteredSaints, now]);

  // --- Lógicas de Emojis Customizados ---
  const handleUpdateNovenaEmoji = (id: string, index: number, emoji: string) => {
    const current = customNovenasEmojis[id] || saintEmojisMap[id] || ["🙏", "✝️"];
    const updated: [string, string] = index === 0 ? [emoji, current[1]] : [current[0], emoji];
    setCustomNovenasEmojis(prev => ({ ...prev, [id]: updated }));
    localStorage.setItem(`novena_emojis_${id}`, JSON.stringify(updated));
  };

  const handleUpdateSantoEmoji1 = (emoji: string) => {
    setSantoEmoji1(emoji);
    localStorage.setItem("santo_emojis", JSON.stringify([emoji, santoEmoji2]));
  };

  const handleUpdateSantoEmoji2 = (emoji: string) => {
    setSantoEmoji2(emoji);
    localStorage.setItem("santo_emojis", JSON.stringify([santoEmoji1, emoji]));
  };

  // --- Lógica Unificada para Envios de Hoje (Ativas e Agendadas) ---
  const allNovenasForTodayTab = useMemo(() => {
    const list: {
      id: string;
      saint: any;
      novena: any;
      startDate: Date;
      endDate: Date;
      status: "active" | "scheduled";
      suggestedDay: number;
      calendarDiffToStart: number;
    }[] = [];

    filteredNovenaKeys.forEach(id => {
      const saint = saints.find(s => s.id === id);
      const novena = novenaData[id];
      if (!saint || !novena || !saint.startDate || !saint.endDate) return;

      try {
        const [startDay, startMonth] = saint.startDate.split("/").map(Number);
        const [endDay, endMonth] = saint.endDate.split("/").map(Number);
        const ano = now.getFullYear();

        const startDate = new Date(ano, startMonth - 1, startDay, 0, 0, 0);
        let endDate = new Date(ano, endMonth - 1, endDay, 23, 59, 59);

        if (endDate < startDate) {
          endDate.setFullYear(ano + 1);
        }

        let status: "active" | "scheduled" | null = null;
        if (now >= startDate && now <= endDate) {
          status = "active";
        } else if (now < startDate) {
          status = "scheduled";
        }

        if (status) {
          const diff = differenceInDays(now, startDate);
          const suggestedDay = status === "active" ? Math.min(9, Math.max(1, diff + 1)) : 1;

          // Dias calendário restantes para começar (se 1, então inicia amanhã)
          const todayDateOnly = new Date(now.getFullYear(), now.getMonth(), now.getDate());
          const startCalendarDate = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate());
          const calendarDiffToStart = differenceInDays(startCalendarDate, todayDateOnly);

          list.push({
            id,
            saint,
            novena,
            startDate,
            endDate,
            status,
            suggestedDay,
            calendarDiffToStart
          });
        }
      } catch (e) {}
    });

    // Ordenação de forma crescente pela data de início
    return list.sort((a, b) => a.startDate.getTime() - b.startDate.getTime());
  }, [filteredNovenaKeys, now]);

  // Auxiliares para renderização reativa de datas e dias
  const getSelectedDayForNovena = (id: string, suggestedDay: number) => {
    if (selectedDayPerNovena[id] !== undefined) {
      return selectedDayPerNovena[id];
    }
    return suggestedDay;
  };

  const getFormattedDateForDay = (startDate: Date, day: number) => {
    try {
      const targetDate = day === 0 ? subDays(startDate, 1) : addDays(startDate, day - 1);
      return format(targetDate, "dd/MM (EEEE)", { locale: ptBR });
    } catch (e) {
      return "";
    }
  };

  const getFormattedNovenaTextCompact = (
    id: string,
    dayIdx: number,
    emojis: [string, string]
  ) => {
    const novena = novenaData[id];
    const saint = saints.find(s => s.id === id);
    if (!novena || !saint) return "";

    const saintNameStr = saint.name;
    const [em1, em2] = emojis;
    const siteUrl = `https://coracoessagradosbsb.vercel.app/#${id}`;

    if (dayIdx === 0) {
      return "";
    }

    const dayData = novena.days[dayIdx - 1];
    if (!dayData) return "";

    const diaNome = dayData.day;
    const rawMeditation = dayData.content;
    
    // Limpar HTML
    const cleanMeditation = rawMeditation.replace(/<[^>]*>/g, "\n").trim();
    const cleanInitial = novena.initialPrayer ? novena.initialPrayer.replace(/<[^>]*>/g, "\n").trim() : "";
    const cleanFinal = novena.finalPrayer ? novena.finalPrayer.replace(/<[^>]*>/g, "\n").trim() : "";

    const text = `*${diaNome}*

Pelo Sinal da Santa cruz ♱
Vinde Espírito santo ❦

${em1}${em2} *Novena a ${saintNameStr}* ${em2}${em1}

${cleanInitial ? `*Oração Inicial:*\n${cleanInitial}\n` : ""}*Meditação do Dia:*
_${cleanMeditation}_

*_(Coloque suas intenções)_*

${cleanFinal ? `*Oração Final:*\n${cleanFinal}\n` : ""}*Novena também disponível em nosso site:*
👉 ${siteUrl}

Compartilhe 😉!
_Projeto Corações Sagrados❤️🔥_`;

    return text
      .replace(/\r\n/g, "\n")
      .replace(/\n\s*\n\s*\n+/g, "\n\n")
      .trim();
  };

  const getDiaZeroTextCompact = (id: string, isInstagram: boolean, emojis: [string, string]) => {
    const saint = saints.find(s => s.id === id);
    const novena = novenaData[id];
    if (!saint || !novena) return "";

    const [em1, em2] = emojis;
    const siteUrl = `https://coracoessagradosbsb.vercel.app/#${id}`;
    
    // Calcula a data de início da novena
    const [startDay, startMonth] = saint.startDate.split("/").map(Number);
    const startDate = new Date(now.getFullYear(), startMonth - 1, startDay);
    const startDateStr = format(startDate, "dd 'de' MMMM", { locale: ptBR });
    const feastDayStr = saint.feastDay || "";
    
    let devText = novena.description || "";
    devText = devText.replace(/<[^>]*>/g, "");
    if (devText.length > 180) {
      devText = devText.substring(0, 180) + "...";
    }

    if (isInstagram) {
      const cleanHashtagName = saint.name.replace(/[\s,.-]+/g, "");
      const hashtags = `#Novena #${cleanHashtagName} #CoracoesSagrados #ComunidadeCatolica #Fé`;
      
      const text = `${em1}${em2} *PREPARE SEU CORAÇÃO: NOVENA DE ${saint.name.toUpperCase()}* ${em2}${em1}

No dia *${startDateStr}*, iniciaremos a nossa jornada de fé com a Novena em preparação para a Festa de *${saint.name}*, celebrada no dia ${feastDayStr}.

Convidamos você, sua família e todos os fiéis da nossa comunidade a trilharem este caminho de conversão e oração fervorosa.

"${devText}"

Coloque suas intenções no altar do Senhor e reze conosco!

Acesse a novena completa em nosso site através do link na nossa bio ou clique no link:
👉 ${siteUrl}

${ENGAGEMENT_INSTAGRAM}

${hashtags}

${FOOTER_PADRAO}`;

      return text
        .replace(/\r\n/g, "\n")
        .replace(/\n\s*\n\s*\n+/g, "\n\n")
        .trim();
    } else {
      const text = `${em1}${em2} *INÍCIO DA NOVENA DE ${saint.name.toUpperCase()}* ${em2}${em1}

Queridos irmãos em Cristo da Comunidade Corações Sagrados! 

A nossa preparação espiritual para a grande festa litúrgica de *${saint.name}* começará no dia *${startDateStr}* (9 dias antes de sua festa que é celebrada em ${feastDayStr}).

Como devotos e comunidade de oração, convidamos todos vocês a se unirem a nós nesta caminhada espiritual de fé e esperança.

_${devText}_

Que este tempo seja de profunda conversão, oração em família e de apresentarmos ao Senhor as nossas intenções e súplicas confiadas à intercessão de ${saint.name}.

${WA_NOVENA_AVISO}

Acesse a novena também em nosso site:
👉 ${siteUrl}

${FOOTER_PADRAO}`;

      return text
        .replace(/\r\n/g, "\n")
        .replace(/\n\s*\n\s*\n+/g, "\n\n")
        .trim();
    }
  };

  // --- Lógica de Novenas Ativas Hoje para o Badge do Menu ---
  const activeNovenasTodayCount = useMemo(() => {
    return allNovenasForTodayTab.filter(n => n.status === "active").length;
  }, [allNovenasForTodayTab]);

  // --- Textos do Santo do Dia de Hoje ---
  const todaySaintInfo = useMemo(() => {
    if (!todaySaintData || !todaySaintData.saints || todaySaintData.saints.length === 0) return null;
    return todaySaintData.saints[selectedSaintInDayIndex] || todaySaintData.saints[0];
  }, [todaySaintData, selectedSaintInDayIndex]);

  const textWhatsAppSanto = useMemo(() => {
    if (!todaySaintInfo) return "Sem dados de Santo do Dia para hoje.";
    const cleanStory = convertHtmlToWhatsappMarkdown(todaySaintInfo.story);
    
    let storySummary = cleanStory;
    if (storySummary.length > 380) {
      storySummary = storySummary.substring(0, 360) + "...\n\n(Acompanhe a história completa no nosso site!)";
    }

    const text = `${santoEmoji1}${santoEmoji2} *SANTO DO DIA - ${now.getDate()} DE ${MESES[now.getMonth()].toUpperCase()}* ${santoEmoji2}${santoEmoji1}

Hoje relembramos a santidade e o legado de *${todaySaintInfo.name}*.

📖 *História e Virtudes:*
${storySummary}

Veja as orações e história completa no site:
👉 https://coracoessagradosbsb.vercel.app

${FOOTER_PADRAO}`;

    return text
      .replace(/\r\n/g, "\n")
      .replace(/\n\s*\n\s*\n+/g, "\n\n")
      .trim();
  }, [todaySaintInfo, now, santoEmoji1, santoEmoji2]);

  const textInstagramSanto = useMemo(() => {
    if (!todaySaintInfo) return "Sem dados de Santo do Dia para hoje.";
    const cleanStory = convertHtmlToWhatsappMarkdown(todaySaintInfo.story);
    const cleanHashtag = todaySaintInfo.name.replace(/[\s,.-]+/g, "");
    
    const text = `${santoEmoji1}${santoEmoji2} *TESTEMUNHO DE SANTIDADE: ${todaySaintInfo.name.toUpperCase()}* ${santoEmoji2}${santoEmoji1}

Neste dia ${now.getDate()} de ${MESES[now.getMonth()]}, celebramos liturgicamente *${todaySaintInfo.name}*. 

📖 *Reflexão:*
${cleanStory}

Que possamos, sob a intercessão deste grande santo, trilhar uma caminhada de sincera devoção e conversão constante.

Acesse mais devocionais católicos no link da bio ou digite:
👉 https://coracoessagradosbsb.vercel.app

${ENGAGEMENT_INSTAGRAM}

#SantoDoDia #${cleanHashtag} #CoracoesSagrados #Liturgia #VidaDeSantos #Catolicos

${FOOTER_PADRAO}`;

    return text
      .replace(/\r\n/g, "\n")
      .replace(/\n\s*\n\s*\n+/g, "\n\n")
      .trim();
  }, [todaySaintInfo, now, santoEmoji1, santoEmoji2]);

  // --- Textos Gerados do Redator ---
  const textWhatsAppConvite = useMemo(() => {
    if (!customSaintName) return "";
    const cleanAnchor = siteAnchor ? siteAnchor.trim() : "";
    const siteUrl = `https://coracoessagradosbsb.vercel.app${cleanAnchor}`;

    const text = `${emoji1}${emoji2} *INÍCIO DA NOVENA DE ${customSaintName.toUpperCase()}* ${emoji2}${emoji1}

Queridos irmãos em Cristo da Comunidade Corações Sagrados! 

A nossa preparação espiritual para a grande festa litúrgica de *${customSaintName}* começará no dia *${calculatedStartDateStr}* (9 dias antes de sua festa que é celebrada em ${customFeastDay}).

Como devotos e comunidade de oração, convidamos todos vocês a se unirem a nós nesta caminhada espiritual de fé e esperança.

_${devotionalText}_

Que este tempo seja de profunda conversão, oração em família e de apresentarmos ao Senhor as nossas intenções e súplicas confiadas à intercessão de ${customSaintName}.

${WA_NOVENA_AVISO}

Acesse a novena também em nosso site:
👉 ${siteUrl}

${FOOTER_PADRAO}`;

    return text
      .replace(/\r\n/g, "\n")
      .replace(/\n\s*\n\s*\n+/g, "\n\n")
      .trim();
  }, [customSaintName, calculatedStartDateStr, customFeastDay, devotionalText, emoji1, emoji2, siteAnchor]);

  const textInstagramConvite = useMemo(() => {
    if (!customSaintName) return "";
    const cleanAnchor = siteAnchor ? siteAnchor.trim() : "";
    const siteUrl = `https://coracoessagradosbsb.vercel.app${cleanAnchor}`;
    const cleanHashtagName = customSaintName.replace(/\s+/g, "");
    const hashtags = `#Novena #${cleanHashtagName} #CoracoesSagrados #ComunidadeCatolica #Fé`;

    const text = `${emoji1}${emoji2} *PREPARE SEU CORAÇÃO: NOVENA DE ${customSaintName.toUpperCase()}* ${emoji2}${emoji1}

No dia *${calculatedStartDateStr}*, iniciaremos a nossa jornada de fé com a Novena em preparação para a Festa de *${customSaintName}*, celebrada no dia ${customFeastDay}.

Convidamos você, sua família e todos os fiéis da nossa comunidade a trilharem este caminho de conversão e oração fervorosa.

"${devotionalText}"

Coloque suas intenções no altar do Senhor e reze conosco! 

Acesse a novena completa em nosso site através do link na nossa bio ou clique no link:
👉 ${siteUrl}

${ENGAGEMENT_INSTAGRAM}

${hashtags}

${FOOTER_PADRAO}`;

    return text
      .replace(/\r\n/g, "\n")
      .replace(/\n\s*\n\s*\n+/g, "\n\n")
      .trim();
  }, [customSaintName, calculatedStartDateStr, customFeastDay, devotionalText, emoji1, emoji2, siteAnchor]);

  // --- Textos Gerados do Formatador ---
  const formattedNovenaDays = useMemo(() => {
    return novenaDaysTexts.map((meditacao, idx) => {
      if (!meditacao) return "";
      const diaNome = novenaDaysTitles[idx] || `${idx + 1}º Dia`;
      const saintNameStr = customSaintName || "Santo";
      const siteUrl = `https://coracoessagradosbsb.vercel.app${siteAnchor ? siteAnchor : `#${formatSaintId}`}`;

      const text = `*${diaNome}*

Pelo Sinal da Santa cruz ♱
Vinde Espírito santo ❦

${formatEmoji1}${formatEmoji2} *Novena a ${saintNameStr}* ${formatEmoji2}${formatEmoji1}

${formatInitialPrayer ? `*Oração Inicial:*\n${formatInitialPrayer}\n` : ""}*Meditação do Dia:*
_${meditacao.trim()}_

*_(Coloque suas intenções)_*

${formatFinalPrayer ? `*Oração Final:*\n${formatFinalPrayer}\n` : ""}*Novena também disponível em nosso site:*
👉 ${siteUrl}

Compartilhe 😉!
_Projeto Corações Sagrados❤️🔥_`;

      return text
        .replace(/\r\n/g, "\n")
        .replace(/\n\s*\n\s*\n+/g, "\n\n")
        .trim();
    });
  }, [novenaDaysTexts, novenaDaysTitles, customSaintName, formatEmoji1, formatEmoji2, formatInitialPrayer, formatFinalPrayer, siteAnchor, formatSaintId]);

  if (!hydrated) {
    return null;
  }

  return (
    <div 
      className="min-h-screen bg-stone-900 text-stone-100 py-12 px-4 transition-all duration-500 overflow-y-auto"
      style={{
        backgroundImage: "linear-gradient(to bottom, rgba(28, 25, 23, 0.96), rgba(28, 25, 23, 0.94)), url('https://iili.io/BszsZNa.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="container mx-auto max-w-5xl">
        
        {/* Header de Ação / Reset */}
        <div className="flex justify-between items-center mb-6">
          <Link href="/" className="inline-flex items-center text-amber-500 hover:text-amber-400 transition-all duration-300 transform hover:-translate-x-1 font-semibold">
            <ChevronLeft className="mr-2 h-5 w-5" />
            Voltar ao Início
          </Link>

          {Object.keys(copiedHistory).length > 0 && (
            <Button
              onClick={handleClearHistory}
              variant="outline"
              size="sm"
              className="bg-red-950/20 border-red-500/30 text-red-400 hover:bg-red-900/30 hover:text-red-300 text-xs rounded-full gap-1.5"
            >
              <Trash2 className="w-3.5 h-3.5" />
              Limpar Histórico de Cópias
            </Button>
          )}
        </div>

        {/* Hero Header */}
        <div className="text-center mb-6 bg-black/40 p-6 md:p-8 rounded-3xl border border-white/5 backdrop-blur-md shadow-2xl relative overflow-hidden">
          <div className="absolute -top-12 -left-12 w-32 h-32 bg-amber-600/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-red-600/10 rounded-full blur-3xl"></div>
          
          <div className="flex justify-center items-center gap-3 mb-2">
            <Sparkles className="w-8 h-8 text-amber-500 animate-pulse" />
            <h1 className="text-3xl md:text-5xl font-bold font-brand tracking-tight bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200 bg-clip-text text-transparent">
              Assistente de Textos
            </h1>
            <Sparkles className="w-8 h-8 text-amber-500 animate-pulse" />
          </div>
          <p className="text-stone-300 max-w-xl mx-auto text-xs md:text-sm">
            Administre os textos das mídias sociais católicas com automação, controle visual de envios, alertas temporais e gerador litúrgico diário.
          </p>
        </div>

        {/* ============================================================== */}
        {/* BARRA DE NAVEGAÇÃO TEMPORAL (MÊS ATUAL DO SISTEMA POR PADRÃO)    */}
        {/* ============================================================== */}
        <div className="text-center mb-6">
          <p className="text-[10px] text-stone-400 font-bold uppercase tracking-widest mb-2">Selecione o Mês para Filtrar Novenas</p>
          <div className="flex flex-wrap justify-center gap-1.5 p-2 bg-stone-950/60 backdrop-blur-md rounded-2xl border border-white/5 max-w-4xl mx-auto shadow-inner">
            {MESES.map((mes, idx) => {
              const isCurrentMonth = new Date().getMonth() === idx;
              const isSelected = selectedMonth === mes;
              return (
                <Button
                  key={mes}
                  variant="ghost"
                  size="sm"
                  onClick={() => setSelectedMonth(mes)}
                  className={cn(
                    "px-3 py-1.5 text-xs rounded-full font-semibold font-brand transition-all duration-300",
                    isSelected 
                      ? "bg-amber-600 text-stone-950 font-bold shadow-md shadow-amber-600/20" 
                      : isCurrentMonth
                        ? "text-amber-500 hover:text-amber-400 hover:bg-white/5 border border-amber-500/25"
                        : "text-stone-400 hover:text-stone-200 hover:bg-white/5"
                  )}
                >
                  {mes}
                </Button>
              );
            })}
          </div>
        </div>

        {/* ============================================================== */}
        {/* PAINEL DE ALERTAS & CRONÔMETRO DAS NOVENAS DO MÊS              */}
        {/* ============================================================== */}
        {filteredSaints.length > 0 && (
          <div className="mb-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            {filteredSaints.map(saint => {
              const countdown = countdowns[saint.id];
              if (!countdown) return null;
              
              return (
                <Card 
                  key={saint.id} 
                  onClick={() => {
                    setActiveTab("multitask");
                    // Rolagem reativa com atraso mínimo para renderizar a aba
                    setTimeout(() => {
                      const element = document.getElementById(`novena-card-${saint.id}`);
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth", block: "center" });
                      }
                    }, 120);
                  }}
                  className={cn(
                    "border-white/5 backdrop-blur-sm shadow-md transition-all duration-300 cursor-pointer hover:border-amber-500/30 hover:bg-stone-900/80 hover:scale-[1.01] active:scale-[0.99]",
                    countdown.status === "active" 
                      ? "bg-emerald-950/15 border-emerald-500/20" 
                      : countdown.isUrgent
                        ? "bg-red-950/15 border-red-500/20 border-t-2 border-t-red-500"
                        : countdown.status === "not_started"
                          ? "bg-stone-950/40"
                          : "bg-stone-950/20 opacity-60"
                  )}
                >
                  <CardHeader className="p-3.5 pb-2 border-b border-white/5 flex flex-row items-center justify-between">
                    <div className="truncate">
                      <CardTitle className="text-xs font-brand text-stone-200 truncate">{saint.name}</CardTitle>
                      <CardDescription className="text-[10px] text-stone-400">Festa: {saint.feastDay}</CardDescription>
                    </div>
                    <span 
                      className={cn(
                        "text-[9px] px-2 py-0.5 rounded-full font-bold uppercase",
                        countdown.status === "active" 
                          ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/25 animate-pulse" 
                          : countdown.isUrgent
                            ? "bg-red-500/10 text-red-400 border border-red-500/25 animate-pulse font-extrabold"
                            : countdown.status === "not_started"
                              ? "bg-amber-500/10 text-amber-400 border border-amber-500/25"
                              : "bg-stone-500/10 text-stone-400"
                      )}
                    >
                      {countdown.status === "active" 
                        ? "Ativa" 
                        : countdown.isUrgent 
                          ? "Inicia Amanhã!" 
                          : countdown.status === "not_started" 
                            ? "Agendada" 
                            : "Finalizada"}
                    </span>
                  </CardHeader>
                  <CardContent className="p-3.5 pt-2.5 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Clock className={cn("w-3.5 h-3.5", countdown.isUrgent ? "text-red-500 animate-pulse" : "text-amber-500")} />
                      <span className={cn("text-xs font-bold font-mono", countdown.isUrgent ? "text-red-400 font-extrabold" : "text-stone-300")}>{countdown.text}</span>
                    </div>
                    <span className="text-[9px] text-stone-500 italic">{countdown.label}</span>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        )}

        {/* Abas Principais Reorganizadas */}
        <Tabs value={activeTab} onValueChange={(v) => setActiveTab(v as any)} className="space-y-6">
          <div className="flex justify-center">
            <TabsList className="bg-stone-950/80 border border-white/10 p-1 rounded-full w-full max-w-3xl shadow-lg flex-wrap h-auto">
              
              {/* 1. Envios de Hoje */}
              <TabsTrigger 
                value="multitask" 
                className={cn(
                  "rounded-full font-brand text-xs md:text-sm py-2 px-4 transition-all duration-300 font-bold relative",
                  activeNovenasTodayCount > 0 
                    ? "data-[state=active]:bg-emerald-600 data-[state=active]:text-stone-950 text-emerald-400" 
                    : "data-[state=active]:bg-amber-600 data-[state=active]:text-stone-950"
                )}
              >
                <Send className="w-4 h-4 mr-1.5" />
                Envios de Hoje
                {activeNovenasTodayCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-emerald-500 text-stone-950 text-[9px] w-4.5 h-4.5 rounded-full flex items-center justify-center font-extrabold animate-bounce">
                    {activeNovenasTodayCount}
                  </span>
                )}
              </TabsTrigger>

              {/* 2. Santo do Dia */}
              <TabsTrigger 
                value="santododia" 
                className="rounded-full font-brand text-xs md:text-sm py-2 px-4 transition-all duration-300 data-[state=active]:bg-amber-600 data-[state=active]:text-stone-950 font-bold"
              >
                <UserCheck className="w-4 h-4 mr-1.5" />
                Santo do Dia
              </TabsTrigger>

              {/* 3. Redator de Convites (Manutenção) */}
              <TabsTrigger 
                value="redator" 
                className="rounded-full font-brand text-xs md:text-sm py-2 px-4 transition-all duration-300 data-[state=active]:bg-stone-600 data-[state=active]:text-white text-stone-400 font-semibold"
              >
                <Instagram className="w-4 h-4 mr-1.5" />
                Redator de Convites
              </TabsTrigger>

              {/* 4. Formatador de Novena (Manutenção) */}
              <TabsTrigger 
                value="formatador" 
                className="rounded-full font-brand text-xs md:text-sm py-2 px-4 transition-all duration-300 data-[state=active]:bg-stone-600 data-[state=active]:text-white text-stone-400 font-semibold"
              >
                <MessageSquare className="w-4 h-4 mr-1.5" />
                Formatador de Novena
              </TabsTrigger>

            </TabsList>
          </div>

          {/* ============================================================== */}
          {/* TAB 1: ENVIO CONJUNTO ("Envios de Hoje") - ABA PRINCIPAL       */}
          {/* ============================================================== */}
          <TabsContent value="multitask" className="space-y-6 outline-none">
            {allNovenasForTodayTab.length > 0 ? (
              <div className="space-y-6">
                
                {/* Banner Informativo */}
                <div className="p-4 bg-emerald-950/20 border border-emerald-500/25 rounded-2xl flex flex-col md:flex-row justify-between items-start md:items-center gap-3">
                  <div>
                    <h3 className="text-sm font-bold text-emerald-400 flex items-center gap-2">
                      <Send className="w-4 h-4 animate-pulse" /> Envios Recomendados para Hoje
                    </h3>
                    <p className="text-xs text-stone-300 mt-1 leading-normal">
                      Monitore e gerencie as novenas ativas e agendadas do mês de {selectedMonth}. Emojis customizados e navegação por dias disponíveis nos blocos abaixo.
                    </p>
                  </div>
                  <span className="text-[10px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 px-3 py-1 rounded-full font-extrabold uppercase">
                    Hoje: {now.getDate()}/{now.getMonth() + 1}
                  </span>
                </div>

                {/* Grid das Devoções do Mês */}
                <div className="grid grid-cols-1 gap-6">
                  {allNovenasForTodayTab.map((item) => {
                    const emojis = customNovenasEmojis[item.id] || saintEmojisMap[item.id] || ["🙏", "✝️"];
                    const selDay = getSelectedDayForNovena(item.id, item.suggestedDay);
                    const isExpanded = expandedNovenas[item.id] || false;
                    
                    const isCopied = selDay === 0 
                      ? (copiedHistory[`enviado_novena_${item.id}_dia_0_wa`] && copiedHistory[`enviado_novena_${item.id}_dia_0_ig`])
                      : copiedHistory[`enviado_novena_${item.id}_dia_${selDay}`];

                    // Texto formatado correspondente ao dia selecionado
                    const formattedText = selDay > 0 ? getFormattedNovenaTextCompact(item.id, selDay, emojis) : "";
                    const waConviteText = selDay === 0 ? getDiaZeroTextCompact(item.id, false, emojis) : "";
                    const igConviteText = selDay === 0 ? getDiaZeroTextCompact(item.id, true, emojis) : "";

                    const isUrgent = item.status === "scheduled" && item.calendarDiffToStart === 1;

                    return (
                      <Card 
                        key={item.id} 
                        id={`novena-card-${item.id}`}
                        className={cn(
                          "border transition-all duration-500 overflow-hidden flex flex-col backdrop-blur-md rounded-3xl shadow-xl",
                          item.status === "active" 
                            ? "bg-emerald-950/10 border-emerald-500/30 text-stone-100 border-t-4 border-t-emerald-500" 
                            : isUrgent
                              ? "bg-red-950/15 border-red-500/35 text-stone-100 border-t-4 border-t-red-500 opacity-95"
                              : "bg-amber-950/5 border-amber-500/20 text-stone-300 opacity-80 border-t-4 border-t-amber-500/40"
                        )}
                      >
                        {/* Header do Bloco */}
                        <div className="p-5 border-b border-white/5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                          <div>
                            <h3 className="text-base font-brand font-bold text-stone-100 flex items-center gap-2">
                              <span className="text-lg">{emojis[0]}</span>
                              <span className="bg-gradient-to-r from-amber-200 to-amber-400 bg-clip-text text-transparent font-extrabold">{item.novena.saintName}</span>
                              <span className="text-lg">{emojis[1]}</span>
                            </h3>
                            <p className="text-[10px] text-stone-400 mt-1">
                              Festa Litúrgica: {item.saint.feastDay} | Início sugerido da Novena: {item.saint.startDate}
                            </p>

                            {/* Barra de Progresso Dividida em 9 */}
                            <div className="flex items-center gap-1 w-full max-w-xs mt-2.5" title="Progresso de envio (9 Dias da Novena)">
                              {Array.from({ length: 9 }).map((_, dIdx) => {
                                const dNum = dIdx + 1;
                                const isDCopied = copiedHistory[`enviado_novena_${item.id}_dia_${dNum}`];
                                return (
                                  <div 
                                    key={dNum}
                                    className={cn(
                                      "h-1.5 flex-grow rounded-full border border-white/5 transition-all duration-300",
                                      isDCopied ? "bg-emerald-500 shadow-sm shadow-emerald-500/20" : "bg-black"
                                    )}
                                  />
                                );
                              })}
                            </div>
                          </div>

                          {/* Seletor Compacto de Emojis e Status */}
                          <div className="flex items-center gap-3 self-end sm:self-auto">
                            {/* Inputs de emoji */}
                            <div className="flex items-center gap-1.5 p-1 bg-stone-900 border border-white/10 rounded-xl">
                              <span className="text-[9px] text-stone-400 font-bold uppercase px-1.5">Emojis:</span>
                              <input 
                                type="text" 
                                value={emojis[0]} 
                                onChange={(e) => handleUpdateNovenaEmoji(item.id, 0, e.target.value)} 
                                className="w-7 h-7 bg-stone-950 border border-white/10 rounded-lg text-center text-xs focus:outline-none focus:border-amber-500 font-bold"
                                maxLength={2}
                              />
                              <input 
                                type="text" 
                                value={emojis[1]} 
                                onChange={(e) => handleUpdateNovenaEmoji(item.id, 1, e.target.value)} 
                                className="w-7 h-7 bg-stone-950 border border-white/10 rounded-lg text-center text-xs focus:outline-none focus:border-amber-500 font-bold"
                                maxLength={2}
                              />
                            </div>

                            {/* Badge */}
                            <span 
                              className={cn(
                                "text-[9px] px-2.5 py-1 rounded-full font-bold uppercase tracking-wider",
                                item.status === "active" 
                                  ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/25 animate-pulse" 
                                  : isUrgent
                                    ? "bg-red-500/15 text-red-400 border border-red-500/25 animate-bounce"
                                    : "bg-amber-500/10 text-amber-400 border border-amber-500/25"
                              )}
                            >
                              {item.status === "active" 
                                ? "Ativa" 
                                : isUrgent 
                                  ? "Inicia Amanhã!" 
                                  : "Agendada"}
                            </span>
                          </div>
                        </div>

                        <div className="p-5 space-y-4 flex-grow flex flex-col justify-between">
                          {/* Seletor de dia e data sugerida */}
                          <div className="flex items-center justify-between p-3.5 bg-stone-900/60 border border-white/5 rounded-2xl">
                            <div className="flex items-center gap-2">
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => {
                                  setExpandedNovenas(prev => ({ ...prev, [item.id]: !isExpanded }));
                                }}
                                className="p-1 h-8 w-8 text-amber-500 hover:text-amber-400 hover:bg-white/5 rounded-xl transition-all"
                              >
                                {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                              </Button>
                              <div>
                                <p className="text-[9px] text-stone-400 uppercase font-bold tracking-wider leading-none">Dia Selecionado</p>
                                <p className="text-xs text-white font-bold mt-1">
                                  {selDay === 0 
                                    ? "Dia 0 - Convite de Início (Convite)" 
                                    : `${selDay}º Dia - ${item.novena.days[selDay - 1]?.title || ""}`}
                                </p>
                              </div>
                            </div>
                            
                            <div className="text-right">
                              <p className="text-[9px] text-stone-400 uppercase font-bold tracking-wider leading-none">Data Sugerida de Envio</p>
                              <p className="text-xs text-amber-500 font-bold mt-1">
                                {getFormattedDateForDay(item.startDate, selDay)}
                              </p>
                            </div>
                          </div>

                          {/* Grade expansível para navegação entre os dias com fundos escuros */}
                          {isExpanded && (
                            <div className="p-3 bg-stone-900/80 border border-white/5 rounded-2xl animate-in slide-in-from-top-1 duration-300">
                              <p className="text-[9px] text-stone-400 font-bold uppercase tracking-wider mb-2">Navegar pelos Dias da Novena:</p>
                              <div className="flex flex-wrap gap-1.5 justify-start">
                                {/* Dia 0 (Convite) */}
                                <Button
                                  variant={selDay === 0 ? "default" : "outline"}
                                  onClick={() => setSelectedDayPerNovena(prev => ({ ...prev, [item.id]: 0 }))}
                                  className={cn(
                                    "text-[10px] h-8 px-3 font-bold rounded-xl transition-all",
                                    selDay === 0 
                                      ? "bg-amber-500 text-stone-950 hover:bg-amber-400 shadow-md shadow-amber-500/20" 
                                      : "bg-stone-950 border border-white/5 text-stone-400 hover:text-white hover:bg-stone-900"
                                  )}
                                >
                                  Dia 0 (Convite)
                                </Button>

                                {/* Dias 1 a 9 */}
                                {Array.from({ length: 9 }).map((_, dIdx) => {
                                  const dNum = dIdx + 1;
                                  const isDToday = item.status === "active" && item.suggestedDay === dNum;
                                  const isDCopied = copiedHistory[`enviado_novena_${item.id}_dia_${dNum}`];

                                  return (
                                    <Button
                                      key={dNum}
                                      variant={selDay === dNum ? "default" : "outline"}
                                      onClick={() => setSelectedDayPerNovena(prev => ({ ...prev, [item.id]: dNum }))}
                                      className={cn(
                                        "text-[10px] h-8 w-10 font-bold rounded-xl relative transition-all",
                                        selDay === dNum 
                                          ? "bg-amber-500 text-stone-950 hover:bg-amber-400 shadow-md shadow-amber-500/20" 
                                          : isDToday
                                            ? "bg-amber-950/40 text-amber-400 border-2 border-amber-500/50 hover:bg-amber-900/30 font-extrabold animate-pulse"
                                            : isDCopied
                                              ? "bg-emerald-950/30 text-emerald-400 border border-emerald-500/30 hover:bg-emerald-900/20"
                                              : "bg-stone-950 border border-white/5 text-stone-400 hover:text-white hover:bg-stone-900"
                                      )}
                                    >
                                      D{dNum}
                                      {isDCopied && (
                                        <span className="absolute -top-1 -right-1 bg-emerald-500 text-stone-950 text-[7px] w-3 h-3 rounded-full flex items-center justify-center font-black shadow">
                                          ✓
                                        </span>
                                      )}
                                    </Button>
                                  );
                                })}
                              </div>
                            </div>
                          )}

                          {/* Seção de Texto e Cópias */}
                          <div className="space-y-4 pt-1">
                            {selDay === 0 ? (
                              /* Dia 0 - Convite de Início: WhatsApp e Instagram */
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {/* WhatsApp Bloco */}
                                <div className="space-y-2">
                                  <div className="flex justify-between items-center bg-stone-900 border border-white/5 px-3.5 py-2 rounded-xl">
                                    <span className="text-[10px] text-emerald-400 font-bold uppercase tracking-wider flex items-center gap-1">
                                      <Send className="w-3.5 h-3.5" /> WhatsApp Convite
                                    </span>
                                    <Button 
                                      onClick={() => handleCopyText(waConviteText, `enviado_novena_${item.id}_dia_0_wa`)}
                                      size="sm"
                                      className={cn(
                                        "h-6 px-2.5 text-[9px] font-bold rounded-full gap-1 transition-all active:scale-95",
                                        copiedHistory[`enviado_novena_${item.id}_dia_0_wa`]
                                          ? "bg-emerald-600 text-stone-950 hover:bg-emerald-500"
                                          : "bg-emerald-700 hover:bg-emerald-800 text-white"
                                      )}
                                    >
                                      {copiedHistory[`enviado_novena_${item.id}_dia_0_wa`] ? <Check className="w-3 h-3 text-stone-950" /> : <Copy className="w-3 h-3" />}
                                      {copiedHistory[`enviado_novena_${item.id}_dia_0_wa`] ? "Enviado!" : "Copiar"}
                                    </Button>
                                  </div>
                                  <ScrollArea className="h-56 p-4 bg-stone-950/80 border border-white/5 rounded-2xl font-mono text-[10px] leading-relaxed whitespace-pre-wrap text-stone-300">
                                    {waConviteText}
                                  </ScrollArea>
                                </div>

                                {/* Instagram Bloco */}
                                <div className="space-y-2">
                                  <div className="flex justify-between items-center bg-stone-900 border border-white/5 px-3.5 py-2 rounded-xl">
                                    <span className="text-[10px] text-pink-400 font-bold uppercase tracking-wider flex items-center gap-1">
                                      <Instagram className="w-3.5 h-3.5" /> Instagram Convite
                                    </span>
                                    <Button 
                                      onClick={() => handleCopyText(igConviteText, `enviado_novena_${item.id}_dia_0_ig`)}
                                      size="sm"
                                      className={cn(
                                        "h-6 px-2.5 text-[9px] font-bold rounded-full gap-1 transition-all active:scale-95",
                                        copiedHistory[`enviado_novena_${item.id}_dia_0_ig`]
                                          ? "bg-emerald-600 text-stone-950 hover:bg-emerald-500"
                                          : "bg-pink-600 hover:bg-pink-700 text-stone-950"
                                      )}
                                    >
                                      {copiedHistory[`enviado_novena_${item.id}_dia_0_ig`] ? <Check className="w-3 h-3 text-stone-950" /> : <Copy className="w-3 h-3" />}
                                      {copiedHistory[`enviado_novena_${item.id}_dia_0_ig`] ? "Enviado!" : "Copiar"}
                                    </Button>
                                  </div>
                                  <ScrollArea className="h-56 p-4 bg-stone-950/80 border border-white/5 rounded-2xl font-mono text-[10px] leading-relaxed whitespace-pre-wrap text-stone-300">
                                    {igConviteText}
                                  </ScrollArea>
                                </div>
                              </div>
                            ) : (
                              /* Dias 1 a 9 - Meditação WhatsApp */
                              <div className="space-y-2">
                                <div className="flex justify-between items-center bg-stone-900 border border-white/5 px-3.5 py-2 rounded-xl">
                                  <span className="text-[10px] text-emerald-400 font-bold uppercase tracking-wider flex items-center gap-1">
                                    <Send className="w-3.5 h-3.5" /> WhatsApp Meditação
                                  </span>
                                  <Button 
                                    onClick={() => handleCopyText(formattedText, `enviado_novena_${item.id}_dia_${selDay}`)}
                                    size="sm"
                                    className={cn(
                                      "h-7 px-3.5 text-[10px] font-bold rounded-full gap-1 transition-all active:scale-95",
                                      copiedHistory[`enviado_novena_${item.id}_dia_${selDay}`]
                                        ? "bg-emerald-600 text-stone-950 hover:bg-emerald-500"
                                        : "bg-emerald-700 hover:bg-emerald-800 text-white"
                                    )}
                                  >
                                    {copiedHistory[`enviado_novena_${item.id}_dia_${selDay}`] ? <Check className="w-3.5 h-3.5 text-stone-950" /> : <Copy className="w-3.5 h-3.5" />}
                                    {copiedHistory[`enviado_novena_${item.id}_dia_${selDay}`] ? "Texto Copiado!" : "Copiar WhatsApp"}
                                  </Button>
                                </div>
                                <ScrollArea className="h-60 p-4 bg-stone-950/80 border border-white/5 rounded-2xl font-mono text-[10px] leading-relaxed whitespace-pre-wrap text-stone-300">
                                  {formattedText}
                                </ScrollArea>
                              </div>
                            )}
                          </div>
                        </div>
                      </Card>
                    );
                  })}
                </div>
              </div>
            ) : (
              <div className="text-center py-12 bg-stone-950/40 rounded-3xl border border-dashed border-white/5">
                <AlertTriangle className="w-10 h-10 text-amber-500 mx-auto mb-3" />
                <p className="text-sm font-semibold">Nenhuma novena ativa ou agendada hoje.</p>
                <p className="text-xs text-stone-400 mt-1">
                  Atualmente, nenhuma das novenas cadastradas está no período correspondente para o mês de {selectedMonth}.
                </p>
                <p className="text-[11px] text-amber-500/70 mt-2 italic">
                  Altere o mês de navegação no topo ou use as abas no final para manutenção e criação de textos personalizados.
                </p>
              </div>
            )}
          </TabsContent>

          {/* ============================================================== */}
          {/* TAB 2: SANTO DO DIA DE HOJE                                    */}
          {/* ============================================================== */}
          <TabsContent value="santododia" className="space-y-6 outline-none">
            {todaySaintData ? (
              <div className="grid md:grid-cols-12 gap-6">
                
                {/* Informações do Santo do Dia e Escolha de Emojis */}
                <div className="md:col-span-4 space-y-4">
                  <Card className="bg-stone-950/60 border-white/5 backdrop-blur-sm text-stone-100 shadow-xl overflow-hidden">
                    {todaySaintInfo && (
                      <>
                        <div className="relative h-48 bg-stone-900 border-b border-white/5">
                          <img 
                            src={todaySaintInfo.imageUrl} 
                            alt={todaySaintInfo.name} 
                            className="w-full h-full object-cover object-center" 
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-transparent"></div>
                          <div className="absolute bottom-3 left-3 right-3">
                            <span className="text-[10px] bg-amber-500 text-stone-950 px-2 py-0.5 rounded-full font-bold uppercase tracking-wider">
                              Santo do Dia
                            </span>
                            <h3 className="text-lg font-bold font-brand text-white mt-1 leading-tight">{todaySaintInfo.name}</h3>
                          </div>
                        </div>
                        <CardContent className="pt-4 space-y-4">
                          <p className="text-xs text-stone-400">
                            Celebração litúrgica em {now.getDate()} de {MESES[now.getMonth()]}.
                          </p>

                          {/* Seletor de Emojis do Santo do Dia */}
                          <div className="pt-3 border-t border-white/5 space-y-1.5">
                            <label className="text-[10px] font-bold text-stone-400 uppercase tracking-widest block">Emojis Customizados</label>
                            <div className="flex gap-2">
                              <input 
                                type="text" 
                                value={santoEmoji1} 
                                onChange={(e) => handleUpdateSantoEmoji1(e.target.value)} 
                                className="w-9 h-9 bg-stone-900 border border-white/10 rounded-xl text-center text-sm focus:outline-none focus:border-amber-500 font-bold"
                                maxLength={2}
                              />
                              <input 
                                type="text" 
                                value={santoEmoji2} 
                                onChange={(e) => handleUpdateSantoEmoji2(e.target.value)} 
                                className="w-9 h-9 bg-stone-900 border border-white/10 rounded-xl text-center text-sm focus:outline-none focus:border-amber-500 font-bold"
                                maxLength={2}
                              />
                            </div>
                            <p className="text-[9px] text-stone-500 leading-normal">
                              Esses emojis serão injetados nos textos formatados de WhatsApp e Instagram abaixo.
                            </p>
                          </div>

                          {todaySaintData.saints.length > 1 && (
                            <div className="space-y-1.5 pt-2 border-t border-white/5">
                              <label className="text-[10px] font-bold text-stone-500 uppercase tracking-widest block">Outros Santos de Hoje</label>
                              <div className="flex gap-2 flex-wrap">
                                {todaySaintData.saints.map((s, idx) => (
                                  <Button
                                    key={idx}
                                    variant={selectedSaintInDayIndex === idx ? "default" : "outline"}
                                    size="sm"
                                    onClick={() => setSelectedSaintInDayIndex(idx)}
                                    className="text-[10px] h-7 rounded-lg"
                                  >
                                    {s.name.split(" ")[0]}
                                  </Button>
                                ))}
                              </div>
                            </div>
                          )}
                        </CardContent>
                      </>
                    )}
                  </Card>
                </div>

                {/* Outputs dos Posts do Santo do Dia */}
                <div className="md:col-span-8 space-y-6">
                  
                  {/* WhatsApp Santo do Dia */}
                  <Card className="bg-stone-950/60 border-white/5 backdrop-blur-sm text-stone-100 shadow-xl overflow-hidden">
                    <CardHeader className="bg-emerald-950/20 border-b border-emerald-900/30 px-6 py-4 flex flex-row items-center justify-between">
                      <div>
                        <CardTitle className="font-brand text-lg text-emerald-400 flex items-center gap-2 leading-none">
                          <Send className="w-4 h-4" /> WhatsApp Santo do Dia
                        </CardTitle>
                        <CardDescription className="text-stone-400 text-xs mt-1">
                          Texto curto e formatado em negritos para compartilhamento imediato.
                        </CardDescription>
                      </div>
                      
                      <Button 
                        onClick={() => handleCopyText(textWhatsAppSanto, `copiado_santo_wa_${now.getDate()}_${now.getMonth()}`)}
                        size="sm"
                        className={cn(
                          "font-bold rounded-full gap-1.5 shadow-md active:scale-95",
                          copiedHistory[`copiado_santo_wa_${now.getDate()}_${now.getMonth()}`]
                            ? "bg-emerald-600 text-stone-950 hover:bg-emerald-500"
                            : "bg-emerald-700 hover:bg-emerald-800 text-white"
                        )}
                      >
                        {copiedHistory[`copiado_santo_wa_${now.getDate()}_${now.getMonth()}`] ? <Check className="w-4 h-4 text-stone-950" /> : <Copy className="w-4 h-4" />}
                        {copiedHistory[`copiado_santo_wa_${now.getDate()}_${now.getMonth()}`] ? "Enviado!" : "Copiar WhatsApp"}
                      </Button>
                    </CardHeader>
                    <CardContent className="p-0">
                      <ScrollArea className="h-60 p-5 bg-stone-950/20 font-mono text-stone-300 text-xs leading-relaxed whitespace-pre-wrap">
                        {textWhatsAppSanto}
                      </ScrollArea>
                    </CardContent>
                  </Card>

                  {/* Instagram Santo do Dia */}
                  <Card className="bg-stone-950/60 border-white/5 backdrop-blur-sm text-stone-100 shadow-xl overflow-hidden">
                    <CardHeader className="bg-pink-950/20 border-b border-pink-900/30 px-6 py-4 flex flex-row items-center justify-between">
                      <div>
                        <CardTitle className="font-brand text-lg text-pink-400 flex items-center gap-2 leading-none">
                          <Instagram className="w-4 h-4" /> Instagram Santo do Dia (Legenda)
                        </CardTitle>
                        <CardDescription className="text-stone-400 text-xs mt-1">
                          Legenda devocional rica em reflexão com até 6 hashtags inclusas.
                        </CardDescription>
                      </div>
                      
                      <Button 
                        onClick={() => handleCopyText(textInstagramSanto, `copiado_santo_ig_${now.getDate()}_${now.getMonth()}`)}
                        size="sm"
                        className={cn(
                          "font-bold rounded-full gap-1.5 shadow-md active:scale-95",
                          copiedHistory[`copiado_santo_ig_${now.getDate()}_${now.getMonth()}`]
                            ? "bg-emerald-600 text-stone-950 hover:bg-emerald-500"
                            : "bg-pink-600 hover:bg-pink-700 text-stone-950"
                        )}
                      >
                        {copiedHistory[`copiado_santo_ig_${now.getDate()}_${now.getMonth()}`] ? <Check className="w-4 h-4 text-stone-950" /> : <Copy className="w-4 h-4" />}
                        {copiedHistory[`copiado_santo_ig_${now.getDate()}_${now.getMonth()}`] ? "Enviado!" : "Copiar Instagram"}
                      </Button>
                    </CardHeader>
                    <CardContent className="p-0">
                      <ScrollArea className="h-64 p-5 bg-stone-950/20 font-mono text-stone-300 text-xs leading-relaxed whitespace-pre-wrap">
                        {textInstagramSanto}
                      </ScrollArea>
                    </CardContent>
                  </Card>

                </div>
              </div>
            ) : (
              <div className="text-center py-12 bg-stone-950/40 rounded-3xl border border-dashed border-white/5">
                <AlertTriangle className="w-10 h-10 text-amber-500 mx-auto mb-3" />
                <p className="text-sm font-semibold">Nenhum santo do dia cadastrado para hoje.</p>
                <p className="text-xs text-stone-400 mt-1">O calendário litúrgico de hoje não contém santos mapeados no banco de dados.</p>
              </div>
            )}
          </TabsContent>

          {/* ============================================================== */}
          {/* TAB 3: REDATOR DE CONVITES (MANUTENÇÃO)                         */}
          {/* ============================================================== */}
          <TabsContent value="redator" className="space-y-6 outline-none">
            <div className="grid md:grid-cols-12 gap-6">
              
              {/* Painel de Configurações */}
              <div className="md:col-span-5 space-y-6">
                <Card className="bg-stone-950/60 border-white/5 backdrop-blur-sm text-stone-100 shadow-xl">
                  <CardHeader className="border-b border-white/5 pb-4">
                    <CardTitle className="font-brand text-xl text-amber-400 flex items-center gap-2">
                      <Calendar className="w-5 h-5" /> Parâmetros do Convite
                    </CardTitle>
                    <CardDescription className="text-stone-400 text-xs">
                      Selecione um Santo ou edite livremente para montar seus convites.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-5 space-y-4">
                    
                    {/* Santo da Lista (Filtrado) */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-stone-400 uppercase tracking-wider block">Selecionar Santo ({selectedMonth})</label>
                      <select 
                        value={selectedSaintId}
                        onChange={(e) => setSelectedSaintId(e.target.value)}
                        className="w-full bg-stone-900 border border-white/10 rounded-xl px-3 py-2 text-sm text-stone-100 focus:outline-none focus:border-amber-500 cursor-pointer"
                      >
                        {filteredSaints.map(s => (
                          <option key={s.id} value={s.id}>{s.name} ({s.feastDay})</option>
                        ))}
                        {selectedMonth === "Dezembro" && (
                          <>
                            <option value="natal_sao_leao">São Leão Magno (Natal)</option>
                            <option value="natal_familia">Sagrada Família (Natal)</option>
                          </>
                        )}
                        <option value="custom">-- Santo Personalizado --</option>
                      </select>
                    </div>

                    {/* Nome do Santo */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-stone-400 uppercase tracking-wider block">Nome do Santo/Festa</label>
                      <input 
                        type="text" 
                        value={customSaintName}
                        onChange={(e) => setCustomSaintName(e.target.value)}
                        placeholder="Ex: São Francisco"
                        disabled={selectedSaintId !== "custom"}
                        className="w-full bg-stone-900 border border-white/10 rounded-xl px-3 py-2 text-sm text-stone-100 focus:outline-none focus:border-amber-500 disabled:opacity-50 font-bold"
                      />
                    </div>

                    {/* Festa Litúrgica */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-stone-400 uppercase tracking-wider block flex items-center gap-1.5">
                        Festa Litúrgica
                        <span className="text-[10px] text-amber-500 lowercase normal-case italic font-normal">(use formato: DD de Mês)</span>
                      </label>
                      <input 
                        type="text" 
                        value={customFeastDay}
                        onChange={(e) => setCustomFeastDay(e.target.value)}
                        placeholder="Ex: 19 de Março"
                        disabled={selectedSaintId !== "custom"}
                        className="w-full bg-stone-900 border border-white/10 rounded-xl px-3 py-2 text-sm text-stone-100 focus:outline-none focus:border-amber-500 disabled:opacity-50 font-bold"
                      />
                    </div>

                    {/* Emojis do Santo */}
                    <div className="grid grid-cols-2 gap-3">
                      <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-stone-400 uppercase tracking-wider block">Emoji 1</label>
                        <input 
                          type="text" 
                          value={emoji1}
                          onChange={(e) => setEmoji1(e.target.value)}
                          maxLength={3}
                          className="w-full bg-stone-900 border border-white/10 rounded-xl px-3 py-2 text-sm text-center text-stone-100 focus:outline-none focus:border-amber-500 font-bold"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-stone-400 uppercase tracking-wider block">Emoji 2</label>
                        <input 
                          type="text" 
                          value={emoji2}
                          onChange={(e) => setEmoji2(e.target.value)}
                          maxLength={3}
                          className="w-full bg-stone-900 border border-white/10 rounded-xl px-3 py-2 text-sm text-center text-stone-100 focus:outline-none focus:border-amber-500 font-bold"
                        />
                      </div>
                    </div>

                    {/* Âncora do Site */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-stone-400 uppercase tracking-wider block">Âncora do Link no Site</label>
                      <input 
                        type="text" 
                        value={siteAnchor}
                        onChange={(e) => setSiteAnchor(e.target.value)}
                        placeholder="Ex: #sao_jose"
                        className="w-full bg-stone-900 border border-white/10 rounded-xl px-3 py-2 text-sm text-stone-100 focus:outline-none focus:border-amber-500"
                      />
                    </div>

                    {/* Frase / Meditação */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-stone-400 uppercase tracking-wider block">Frase do Santo / Explicação Devocional</label>
                      <textarea 
                        value={devotionalText}
                        onChange={(e) => setDevotionalText(e.target.value)}
                        rows={4}
                        placeholder="Escreva uma frase de impacto ou ensinamento..."
                        className="w-full bg-stone-900 border border-white/10 rounded-xl px-3 py-2 text-sm text-stone-100 focus:outline-none focus:border-amber-500 resize-none text-xs"
                      />
                    </div>

                    {/* Data de início calculada informativa */}
                    <div className="p-3 bg-amber-500/10 border border-amber-500/20 rounded-xl flex items-center gap-3">
                      <Calendar className="w-5 h-5 text-amber-500 flex-shrink-0" />
                      <div>
                        <p className="text-[10px] text-amber-400 font-bold uppercase tracking-wider leading-none">Início da Novena (Calculado)</p>
                        <p className="text-sm font-bold text-white mt-1">{calculatedStartDateStr}</p>
                      </div>
                    </div>

                  </CardContent>
                </Card>
              </div>

              {/* Visualizador de Convites */}
              <div className="md:col-span-7 space-y-6">
                
                {/* Visualizador WhatsApp */}
                <Card className="bg-stone-950/60 border-white/5 backdrop-blur-sm text-stone-100 shadow-xl overflow-hidden">
                  <CardHeader className="bg-emerald-950/20 border-b border-emerald-900/30 px-6 py-4 flex flex-row items-center justify-between">
                    <div>
                      <CardTitle className="font-brand text-lg text-emerald-400 flex items-center gap-2 leading-none">
                        <Send className="w-4 h-4" /> Versão WhatsApp
                      </CardTitle>
                      <CardDescription className="text-stone-400 text-xs mt-1">
                        Pronto para colar em grupos e contatos.
                      </CardDescription>
                    </div>
                    <Button 
                      onClick={() => handleCopyText(textWhatsAppConvite, "copiado_wa_convite_" + selectedSaintId)}
                      size="sm"
                      className={cn(
                        "font-bold rounded-full gap-1.5 transition-all shadow-md active:scale-95",
                        copiedHistory["copiado_wa_convite_" + selectedSaintId] 
                          ? "bg-emerald-600 text-stone-950 hover:bg-emerald-500" 
                          : "bg-emerald-700 hover:bg-emerald-800 text-white"
                      )}
                    >
                      {copiedHistory["copiado_wa_convite_" + selectedSaintId] ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                      {copiedHistory["copiado_wa_convite_" + selectedSaintId] ? "Enviado!" : "Copiar"}
                    </Button>
                  </CardHeader>
                  <CardContent className="p-0">
                    <ScrollArea className="h-64 p-6 bg-stone-950/20 font-mono text-stone-300 text-xs leading-relaxed whitespace-pre-wrap">
                      {textWhatsAppConvite}
                    </ScrollArea>
                  </CardContent>
                </Card>

                {/* Visualizador Instagram */}
                <Card className="bg-stone-950/60 border-white/5 backdrop-blur-sm text-stone-100 shadow-xl overflow-hidden">
                  <CardHeader className="bg-pink-950/20 border-b border-pink-900/30 px-6 py-4 flex flex-row items-center justify-between">
                    <div>
                      <CardTitle className="font-brand text-lg text-pink-400 flex items-center gap-2 leading-none">
                        <Instagram className="w-4 h-4" /> Versão Instagram (Legenda)
                      </CardTitle>
                      <CardDescription className="text-stone-400 text-xs mt-1">
                        Máximo de 5 hashtags e aviso de engajamento incluídos.
                      </CardDescription>
                    </div>
                    <Button 
                      onClick={() => handleCopyText(textInstagramConvite, "copiado_ig_convite_" + selectedSaintId)}
                      size="sm"
                      className={cn(
                        "font-bold rounded-full gap-1.5 transition-all shadow-md active:scale-95",
                        copiedHistory["copiado_ig_convite_" + selectedSaintId] 
                          ? "bg-emerald-600 text-stone-950 hover:bg-emerald-500" 
                          : "bg-pink-600 hover:bg-pink-700 text-stone-950"
                      )}
                    >
                      {copiedHistory["copiado_ig_convite_" + selectedSaintId] ? <Check className="w-4 h-4 text-stone-950" /> : <Copy className="w-4 h-4" />}
                      {copiedHistory["copiado_ig_convite_" + selectedSaintId] ? "Enviado!" : "Copiar"}
                    </Button>
                  </CardHeader>
                  <CardContent className="p-0">
                    <ScrollArea className="h-64 p-6 bg-stone-950/20 font-mono text-stone-300 text-xs leading-relaxed whitespace-pre-wrap">
                      {textInstagramConvite}
                    </ScrollArea>
                  </CardContent>
                </Card>

              </div>
            </div>
          </TabsContent>

          {/* ============================================================== */}
          {/* TAB 4: FORMATADOR DE NOVENA (MANUTENÇÃO)                        */}
          {/* ============================================================== */}
          <TabsContent value="formatador" className="space-y-6 outline-none">
            <div className="grid md:grid-cols-12 gap-6">
              
              {/* Painel de Inputs da Novena */}
              <div className="md:col-span-5 space-y-6">
                <Card className="bg-stone-950/60 border-white/5 backdrop-blur-sm text-stone-100 shadow-xl">
                  <CardHeader className="border-b border-white/5 pb-4">
                    <CardTitle className="font-brand text-xl text-amber-400 flex items-center gap-2">
                      <FileText className="w-5 h-5" /> Dados da Novena
                    </CardTitle>
                    <CardDescription className="text-stone-400 text-xs">
                      Insira as orações comuns e a meditação de cada dia.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-5 space-y-4">
                    
                    {/* Importação Rápida */}
                    <div className="p-3.5 bg-amber-500/5 border border-amber-500/20 rounded-2xl space-y-2">
                      <div className="flex items-center gap-2 text-amber-400">
                        <BookOpen className="w-4 h-4" />
                        <span className="text-xs font-bold uppercase tracking-wider leading-none">Importar do Mês ({selectedMonth})</span>
                      </div>
                      <select 
                        value={formatSaintId}
                        onChange={(e) => setFormatSaintId(e.target.value)}
                        className="w-full bg-stone-900 border border-white/10 rounded-xl px-3 py-1.5 text-xs text-stone-100 focus:outline-none focus:border-amber-500 cursor-pointer font-bold"
                      >
                        {filteredNovenaKeys.map(key => (
                          <option key={key} value={key}>{novenaData[key].saintName}</option>
                        ))}
                      </select>
                      <p className="text-[10px] text-stone-400 leading-normal">
                        Carrega as meditações de santos do mês atual cadastradas no banco de dados.
                      </p>
                    </div>

                    {/* Nome do Santo no Formatador */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-stone-400 uppercase tracking-wider block">Nome do Santo</label>
                      <input 
                        type="text" 
                        value={customSaintName}
                        onChange={(e) => setCustomSaintName(e.target.value)}
                        placeholder="Ex: São José"
                        className="w-full bg-stone-900 border border-white/10 rounded-xl px-3 py-2 text-sm text-stone-100 focus:outline-none focus:border-amber-500 font-bold"
                      />
                    </div>

                    {/* Emojis da Novena */}
                    <div className="grid grid-cols-2 gap-3">
                      <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-stone-400 uppercase tracking-wider block">Emoji 1</label>
                        <input 
                          type="text" 
                          value={formatEmoji1}
                          onChange={(e) => setFormatEmoji1(e.target.value)}
                          maxLength={3}
                          className="w-full bg-stone-900 border border-white/10 rounded-xl px-3 py-2 text-sm text-center text-stone-100 focus:outline-none focus:border-amber-500 font-bold"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-stone-400 uppercase tracking-wider block">Emoji 2</label>
                        <input 
                          type="text" 
                          value={formatEmoji2}
                          onChange={(e) => setFormatEmoji2(e.target.value)}
                          maxLength={3}
                          className="w-full bg-stone-900 border border-white/10 rounded-xl px-3 py-2 text-sm text-center text-stone-100 focus:outline-none focus:border-amber-500 font-bold"
                        />
                      </div>
                    </div>

                    {/* Link Âncora no Formatador */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-stone-400 uppercase tracking-wider block">Âncora do Link no Site</label>
                      <input 
                        type="text" 
                        value={siteAnchor}
                        onChange={(e) => setSiteAnchor(e.target.value)}
                        placeholder="Ex: #sao_jose"
                        className="w-full bg-stone-900 border border-white/10 rounded-xl px-3 py-2 text-sm text-stone-100 focus:outline-none focus:border-amber-500"
                      />
                    </div>

                    {/* Data de Início da Novena */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-stone-400 uppercase tracking-wider block flex items-center gap-1.5">
                        Data de Início da Novena
                        <span className="text-[10px] text-amber-500 lowercase normal-case italic font-normal">(use: DD/MM)</span>
                      </label>
                      <input 
                        type="text" 
                        value={novenaStartDate}
                        onChange={(e) => setNovenaStartDate(e.target.value)}
                        placeholder="Ex: 10/03"
                        className="w-full bg-stone-900 border border-white/10 rounded-xl px-3 py-2 text-sm text-stone-100 focus:outline-none focus:border-amber-500"
                      />
                    </div>

                    {/* Oração Inicial (Repetida) */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-stone-400 uppercase tracking-wider block">Oração Inicial (Se repete todos os dias)</label>
                      <textarea 
                        value={formatInitialPrayer}
                        onChange={(e) => setFormatInitialPrayer(e.target.value)}
                        rows={4}
                        placeholder="Esta oração será adicionada no início de cada um dos 9 dias."
                        className="w-full bg-stone-900 border border-white/10 rounded-xl px-3 py-2 text-sm text-stone-100 focus:outline-none focus:border-amber-500 resize-none text-xs"
                      />
                    </div>

                    {/* Oração Final (Repetida) */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-stone-400 uppercase tracking-wider block">Oração Final (Se repete todos os dias)</label>
                      <textarea 
                        value={formatFinalPrayer}
                        onChange={(e) => setFormatFinalPrayer(e.target.value)}
                        rows={4}
                        placeholder="Esta oração será adicionada no encerramento de cada um dos 9 dias."
                        className="w-full bg-stone-900 border border-white/10 rounded-xl px-3 py-2 text-sm text-stone-100 focus:outline-none focus:border-amber-500 resize-none text-xs"
                      />
                    </div>

                  </CardContent>
                </Card>
              </div>

              {/* Meditações dos 9 Dias e Outputs */}
              <div className="md:col-span-7 space-y-6">
                
                {/* Abas Internas para Meditações Diárias */}
                <Card className="bg-stone-950/60 border-white/5 backdrop-blur-sm text-stone-100 shadow-xl">
                  <CardHeader className="border-b border-white/5 pb-3">
                    <CardTitle className="font-brand text-lg text-amber-400">
                      📝 Meditações dos Dias (1 a 9)
                    </CardTitle>
                    <CardDescription className="text-stone-400 text-xs">
                      Clique no dia para visualizar e editar a meditação específica.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <Tabs defaultValue="day-0" className="w-full">
                      <TabsList className="bg-stone-900 border border-white/5 p-1 rounded-xl w-full grid grid-cols-5 md:grid-cols-9 gap-1 h-auto flex-wrap">
                        {Array.from({ length: 9 }).map((_, i) => {
                          const today = isDayToday(i);
                          const isCopied = copiedHistory[`enviado_novena_${formatSaintId}_dia_${i}`];
                          
                          return (
                            <TabsTrigger 
                              key={i}
                              value={`day-${i}`} 
                              className={cn(
                                "text-xs py-1 rounded-lg font-bold transition-all relative",
                                today 
                                  ? "bg-amber-600 text-stone-950 animate-pulse border-2 border-amber-400/50" 
                                  : isCopied
                                    ? "bg-emerald-950/40 text-emerald-400 border border-emerald-500/20"
                                    : "text-stone-300 data-[state=active]:bg-amber-600 data-[state=active]:text-stone-950"
                              )}
                            >
                              D{i + 1}
                              {isCopied && (
                                <span className="absolute -top-1.5 -right-1 bg-emerald-500 text-stone-950 text-[7px] w-3 h-3 rounded-full flex items-center justify-center font-black">
                                  ✓
                                </span>
                              )}
                            </TabsTrigger>
                          );
                        })}
                      </TabsList>
                      
                      {Array.from({ length: 9 }).map((_, i) => (
                        <TabsContent key={i} value={`day-${i}`} className="space-y-4 pt-4 outline-none">
                          <div className="flex justify-between items-center">
                            <span className="text-xs font-bold text-amber-400 uppercase tracking-widest flex items-center gap-1.5">
                              {novenaDaysTitles[i] || `Dia ${i + 1}`}
                              {isDayToday(i) && (
                                <span className="bg-amber-500 text-stone-950 text-[9px] font-extrabold uppercase px-2 py-0.5 rounded-full animate-bounce">
                                  Enviar Hoje!
                                </span>
                              )}
                            </span>
                            {calculateNovenaDayDate(i) && (
                              <span 
                                className={cn(
                                  "text-[10px] border px-2 py-0.5 rounded-full font-semibold",
                                  isDayToday(i)
                                    ? "bg-amber-500/10 text-amber-400 border-amber-500/20 font-bold"
                                    : "bg-stone-500/10 text-stone-400 border-stone-500/20"
                                )}
                              >
                                Envio: {calculateNovenaDayDate(i)}
                              </span>
                            )}
                          </div>
                          
                          {/* Input do Título do Dia */}
                          <div className="space-y-1">
                            <label className="text-[10px] text-stone-400 uppercase font-bold tracking-wider">Título do Dia</label>
                            <input 
                              type="text" 
                              value={novenaDaysTitles[i]}
                              onChange={(e) => {
                                const newTitles = [...novenaDaysTitles];
                                newTitles[i] = e.target.value;
                                setNovenaDaysTitles(newTitles);
                              }}
                              placeholder={`Ex: ${i + 1}º Dia`}
                              className="w-full bg-stone-900 border border-white/10 rounded-xl px-3 py-1.5 text-xs text-stone-100 focus:outline-none focus:border-amber-500 font-bold"
                            />
                          </div>

                          {/* Meditação Específica */}
                          <div className="space-y-1">
                            <label className="text-[10px] text-stone-400 uppercase font-bold tracking-wider">Meditação Específica</label>
                            <textarea 
                              value={novenaDaysTexts[i]}
                              onChange={(e) => {
                                const newTexts = [...novenaDaysTexts];
                                newTexts[i] = e.target.value;
                                setNovenaDaysTexts(newTexts);
                              }}
                              rows={8}
                              placeholder={`Cole o texto específico da meditação do dia ${i + 1} aqui.`}
                              className="w-full bg-stone-900 border border-white/10 rounded-xl px-3 py-2 text-xs text-stone-100 focus:outline-none focus:border-amber-500"
                            />
                          </div>
                        </TabsContent>
                      ))}
                    </Tabs>
                  </CardContent>
                </Card>

                {/* Bloco de Visualização Formatada e Cópia */}
                <Card className="bg-stone-950/60 border-white/5 backdrop-blur-sm text-stone-100 shadow-xl overflow-hidden border-t-2 border-t-amber-600">
                  <CardHeader className="bg-amber-950/15 border-b border-amber-900/30 px-6 py-4 flex flex-row items-center justify-between">
                    <div>
                      <CardTitle className="font-brand text-lg text-amber-400 flex items-center gap-2 leading-none">
                        <MessageSquare className="w-4 h-4" /> Visualização Diária & Cópia
                      </CardTitle>
                      <CardDescription className="text-stone-400 text-xs mt-1">
                        Cada bloco abaixo está formatado rigorosamente para o WhatsApp.
                      </CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6 space-y-6">
                    <Tabs defaultValue="out-day-0" className="w-full">
                      <TabsList className="bg-stone-900 border border-white/5 p-1 rounded-xl w-full grid grid-cols-5 md:grid-cols-9 gap-1 h-auto flex-wrap">
                        {Array.from({ length: 9 }).map((_, i) => (
                          <TabsTrigger 
                            key={i}
                            value={`out-day-${i}`} 
                            disabled={!novenaDaysTexts[i]}
                            className="text-stone-300 text-xs py-1 rounded-lg data-[state=active]:bg-emerald-600 data-[state=active]:text-stone-950 font-bold disabled:opacity-30"
                          >
                            D{i + 1}
                          </TabsTrigger>
                        ))}
                      </TabsList>

                      {Array.from({ length: 9 }).map((_, i) => {
                        const formattedText = formattedNovenaDays[i];
                        const suggestedDate = calculateNovenaDayDate(i);
                        const isCopied = copiedHistory[`enviado_novena_${formatSaintId}_dia_${i}`];
                        
                        return (
                          <TabsContent key={i} value={`out-day-${i}`} className="space-y-4 pt-4 outline-none">
                            {formattedText ? (
                              <div className="space-y-3 animate-in fade-in duration-300">
                                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 p-3 bg-stone-900 border border-white/5 rounded-xl">
                                  <div>
                                    <p className="text-[10px] text-stone-400 font-bold uppercase tracking-wider leading-none">Sinalização de Envio</p>
                                    <p className="text-xs text-white font-bold mt-1">
                                      {novenaDaysTitles[i] || `${i + 1}º Dia`} 
                                      {suggestedDate ? ` - Enviar em: ${suggestedDate}` : " (Defina a data de início da novena)"}
                                    </p>
                                  </div>
                                  <Button 
                                    onClick={() => handleCopyText(formattedText, `enviado_novena_${formatSaintId}_dia_${i}`)}
                                    size="sm"
                                    className={cn(
                                      "font-bold rounded-full gap-1.5 shadow-md active:scale-95 w-full sm:w-auto",
                                      isCopied 
                                        ? "bg-emerald-600 text-stone-950 hover:bg-emerald-500" 
                                        : "bg-emerald-700 hover:bg-emerald-800 text-white"
                                    )}
                                  >
                                    {isCopied ? <Check className="w-4 h-4 text-stone-950" /> : <Copy className="w-4 h-4" />}
                                    {isCopied ? "Enviado!" : "Copiar WhatsApp"}
                                  </Button>
                                </div>
                                <ScrollArea className="h-64 p-5 bg-stone-950/80 border border-emerald-950/20 rounded-2xl font-mono text-stone-300 text-xs leading-relaxed whitespace-pre-wrap shadow-inner relative">
                                  {formattedText}
                                </ScrollArea>
                              </div>
                            ) : (
                              <div className="text-center py-10 text-stone-500 border-2 border-dashed border-white/5 rounded-2xl">
                                <p className="text-sm font-semibold">Sem meditação cadastrada para o Dia {i + 1}.</p>
                                <p className="text-xs mt-1">Cole o texto na caixa de edição do Dia {i + 1} acima para formatá-lo.</p>
                              </div>
                            )}
                          </TabsContent>
                        );
                      })}
                    </Tabs>
                  </CardContent>
                </Card>

              </div>
            </div>
          </TabsContent>

        </Tabs>
      </div>
    </div>
  );
}
