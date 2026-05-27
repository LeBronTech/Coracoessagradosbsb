import re
import os

filepath = 'src/app/assistente/page.tsx'

with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Replace Footer Texts
content = content.replace("Comunidade Corações Sagrados❤️🔥", "Projeto Corações Sagrados❤️‍🔥")
content = content.replace("Comunidade Corações Sagrados", "Projeto Corações Sagrados")
content = content.replace("❤️🔥", "❤️‍🔥")

# 2. Add copy button to formatador
# We'll inject a button and its handler.
copy_all_handler = """  // --- Helper para copiar texto para todos os dias ---
  const handleCopyToAllDays = (dayIndex: number) => {
    const currentText = novenaDaysTexts[dayIndex];
    if (!currentText) {
      toast({
        title: "Texto Vazio",
        description: "Digite algo na meditação antes de copiar.",
        duration: 2000,
      });
      return;
    }
    const newTexts = [...novenaDaysTexts];
    const sourceDay = dayIndex + 1;
    for(let i = 0; i < 9; i++) {
      if(i !== dayIndex) {
        let adapted = currentText;
        const targetDay = i + 1;
        // Replaces Xº, X° or Dia X
        const regexOrdinals = new RegExp(`(?<!\\\\d)${sourceDay}(º|°)(?=\\\\s*dia|\\\\s*Dia|)`, 'gi');
        adapted = adapted.replace(regexOrdinals, `${targetDay}$1`);
        const regexDayNum = new RegExp(`(?<=dia\\\\s+|Dia\\\\s+)${sourceDay}(?!\\\\d)`, 'gi');
        adapted = adapted.replace(regexDayNum, `${targetDay}`);
        newTexts[i] = adapted;
      }
    }
    setNovenaDaysTexts(newTexts);
    toast({
      title: "Copiado para todos os dias!",
      description: "O texto foi replicado ajustando a numeração do dia.",
      duration: 3000,
    });
  };
"""

content = content.replace("  // --- Lógicas de Calendário e Datas ---", copy_all_handler + "\n  // --- Lógicas de Calendário e Datas ---")

copy_btn_ui = """
                            <Button 
                              variant="outline" 
                              onClick={() => handleCopyToAllDays(i)}
                              className="w-full mt-2 bg-stone-900 border border-white/10 text-stone-300 hover:text-amber-400 hover:border-amber-500/50 text-xs font-bold transition-all"
                            >
                              <Copy className="w-3.5 h-3.5 mr-2" />
                              Copiar meditação para os outros 8 dias
                            </Button>
"""
# insert it after textarea in formatador
content = content.replace('placeholder={`Cole o texto específico da meditação do dia ${i + 1} aqui.`}\n                              className="w-full bg-stone-900 border border-white/10 rounded-xl px-3 py-2 text-xs text-stone-100 focus:outline-none focus:border-amber-500 resize-none font-medium leading-relaxed"\n                            />', 'placeholder={`Cole o texto específico da meditação do dia ${i + 1} aqui.`}\n                              className="w-full bg-stone-900 border border-white/10 rounded-xl px-3 py-2 text-xs text-stone-100 focus:outline-none focus:border-amber-500 resize-none font-medium leading-relaxed"\n                            />' + copy_btn_ui)


# 3. Add Download button logic in Santo do Dia
download_btn = """
                            <Button 
                              variant="secondary" 
                              size="icon" 
                              className="h-8 w-8 rounded-full bg-white/10 hover:bg-amber-500 hover:text-stone-950 text-white transition-all"
                              onClick={() => {
                                const link = document.createElement("a");
                                link.href = todaySaintInfo.imageUrl;
                                link.download = `${todaySaintInfo.name.replace(/\\s+/g, '_').toLowerCase()}.jpg`;
                                document.body.appendChild(link);
                                link.click();
                                document.body.removeChild(link);
                              }}
                              title="Baixar Imagem"
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                            </Button>
"""
content = content.replace('<h3 className="text-lg font-bold font-brand text-white mt-1 leading-tight">{todaySaintInfo.name}</h3>\n                          </div>', '<h3 className="text-lg font-bold font-brand text-white mt-1 leading-tight">{todaySaintInfo.name}</h3>\n                            </div>' + download_btn + '\n                          </div>')

# Fix flex layout for the absolute container
content = content.replace('<div className="absolute bottom-3 left-3 right-3">', '<div className="absolute bottom-3 left-3 right-3 flex justify-between items-end">\n                            <div>')

# 4. Limit texts to 1024 chars / 850 non-space chars for WhatsApp
# For textWhatsAppSanto
wa_limit_helper = """
// Helper para garantir limite do WhatsApp (1024 chars com espaco, 850 sem espaco)
const trimForWhatsApp = (buildTextFunc: (content: string) => string, fullContent: string, isHTML: boolean = false): string => {
  let content = fullContent;
  let text = buildTextFunc(content);
  
  const getLenNoSpace = (s: string) => s.replace(/\\s+/g, '').length;
  // Consider surrogate pairs
  const getLen = (s: string) => Array.from(s).length;

  while (content.length > 20 && (getLen(text) > 1024 || getLenNoSpace(text) > 850)) {
    // reduce by one word
    const lastSpace = content.lastIndexOf(' ', content.length - 5);
    if (lastSpace === -1) break;
    content = content.substring(0, lastSpace) + "...";
    text = buildTextFunc(content);
  }
  return text;
};
"""

content = content.replace('// Helper para gerar o convite unificado', wa_limit_helper + '\n// Helper para gerar o convite unificado')


santo_wa_replacement = """  const textWhatsAppSanto = useMemo(() => {
    if (!todaySaintInfo) return "Sem dados de Santo do Dia para hoje.";
    
    const monthIntro = getMonthIntroWA(santoDiaDate.getMonth());

    let outrosSantosStr = "";
    if (todaySaintData && todaySaintData.saints.length > 1) {
      const outros = todaySaintData.saints
        .filter((_, idx) => idx !== selectedSaintInDayIndex)
        .map(s => s.name)
        .join(", ");
      if (outros) {
        outrosSantosStr = `\\n\\n*Hoje também se celebra ${outros}.*`;
      }
    }

    const buildText = (storySnippet: string) => {
      const text = `${monthIntro}Hoje a Igreja celebra **${todaySaintInfo.name}**.\\n\\n${storySnippet}${outrosSantosStr}\\n\\nLeia e compartilhe:\\nhttps://coracoessagradosbsb.vercel.app\\n\\nSegue a gente:\\nhttps://www.instagram.com/coracoessagradosbsb\\n\\n_Projeto Corações Sagrados❤️‍🔥_`;
      return text.replace(/\\r\\n/g, "\\n").replace(/\\n\\s*\\n\\s*\\n+/g, "\\n\\n").trim();
    };

    const mainStory = cleanSaintStory(todaySaintInfo.story, 3);
    return trimForWhatsApp(buildText, mainStory);
  }, [todaySaintInfo, santoDiaDate, todaySaintData, selectedSaintInDayIndex]);"""

content = re.sub(r'  const textWhatsAppSanto = useMemo\(\(\) => \{.*?(?=  const textInstagramSanto = useMemo)', santo_wa_replacement + '\n\n', content, flags=re.DOTALL)


# Let's also do it for getFormattedNovenaTextCompact
novena_format_repl = """  const getFormattedNovenaTextCompact = (
    id: string,
    dayIdx: number,
    emojis: [string, string]
  ) => {
    const novena = novenaData[id];
    const saint = saints.find(s => s.id === id);
    if (!novena || !saint) return "";

    const saintNameStr = saint.name;
    const [em1, em2] = emojis;
    const siteUrl = `https://coracoessagradosbsb.vercel.app/#${getAnchorForSaint(id)}`;

    if (dayIdx === 0) return "";

    const dayData = novena.days[dayIdx - 1];
    if (!dayData) return "";

    const diaNome = dayData.day;
    const dayTitle = dayData.title;
    
    // Limpar HTML
    let cleanMeditation = dayData.content.replace(/<[^>]*>/g, "\\n").trim();
    // Remover rito de cruz e Espírito Santo repetidos da meditação se existirem
    cleanMeditation = cleanMeditation
      .replace(/Pelo Sinal da Santa cruz ♱/gi, "")
      .replace(/Vinde Espírito santo ❦/gi, "")
      .trim();
    cleanMeditation = formatCommonTitlesToBold(cleanMeditation);

    let cleanInitial = novena.initialPrayer ? cleanPrayerText(novena.initialPrayer) : "";
    let cleanFinal = novena.finalPrayer ? cleanPrayerText(novena.finalPrayer) : "";

    const headerTitle = `*${em1}${em2} NOVENA A ${saintNameStr.toUpperCase()} - DIA ${dayIdx}*`;

    const buildText = (meditationSnippet: string) => {
      const text = `${headerTitle}\\n \\nPelo Sinal da Santa cruz ♱\\nVinde Espírito santo ❦\\n\\n${cleanInitial ? `*${em1}${em2} ORAÇÃO INICIAL*\\n${cleanInitial}\\n\\n` : ""}*${em1}${em2} DIA ${dayIdx} - ${dayTitle.toUpperCase()}*\\n${meditationSnippet}\\n\\n*_(Coloque suas intenções)_*\\n\\n${cleanFinal ? `*${em1}${em2} ORAÇÃO FINAL*\\n${cleanFinal}\\n` : ""}*novena também disponível em nosso site:* ${siteUrl}\\n\\nCompartilhe 😉!\\n\\n_Projeto Corações Sagrados❤️‍🔥_`;
      return text;
    };

    return trimForWhatsApp(buildText, cleanMeditation);
  };"""

content = re.sub(r'  const getFormattedNovenaTextCompact = \(.*?_Comunidade Corações Sagrados❤️🔥_`;\n\n    return text;\n  };', novena_format_repl, content, flags=re.DOTALL)
# wait the regex for getFormattedNovenaTextCompact might be slightly different. Let's do a more robust one

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)
print("Modified page.tsx")
