import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatSaintName(name: string, abbreviate: boolean = true, full: boolean = false) {
  if (!name) return { main: '', additional: '' };

  const trimmed = name.trim();

  // 1. Nossa Senhora / N.S.
  const isNS = /^(N\.?\s*S\.?\s*|Nossa Senhora\s+)/i.test(trimmed);
  if (isNS) {
    const afterNS = trimmed.replace(/^(N\.?\s*S\.?\s*|Nossa Senhora\s+)/i, '').trim();
    return {
      main: abbreviate ? 'N.S.' : 'Nossa Senhora',
      additional: afterNS
    };
  }

  let main = '';
  let additional = '';

  // 2. Beato / Beata
  const beatoMatch = trimmed.match(/^(Beata|Beato)\s+([^\s]+)\s*(.*)$/i);
  if (beatoMatch) {
    main = `${beatoMatch[1]} ${beatoMatch[2]}`;
    additional = beatoMatch[3].trim();
  } else {
    // 3. Santos com prefixo São / Santo / Santa / Sta. / S.
    const prefixMatch = trimmed.match(/^(São|Santo|Santa|Sta\.|S\.)\s+([^\s]+)\s*(.*)$/i);
    if (prefixMatch) {
      const rawPrefix = prefixMatch[1];
      const firstName = prefixMatch[2];
      const rest = prefixMatch[3].trim();

      const prefix = abbreviate ? 'S.' : rawPrefix;
      main = `${prefix} ${firstName}`;
      additional = rest;
    } else if (/^Menino Jesus/i.test(trimmed)) {
      main = 'Menino Jesus';
      additional = trimmed.replace(/^Menino Jesus\s*/i, '').trim();
    } else if (/^Sagrada Face/i.test(trimmed)) {
      main = 'Sagrada';
      additional = 'Face';
    } else if (/^Divina Misericórdia/i.test(trimmed)) {
      main = 'Divina';
      additional = 'Misericórdia';
    } else if (/^Todos os Santos/i.test(trimmed)) {
      main = 'Todos os';
      additional = 'Santos';
    } else if (/^Anjo da Guarda/i.test(trimmed)) {
      main = 'Anjo';
      additional = 'da Guarda';
    } else if (/^Sagrado Coração/i.test(trimmed)) {
      main = 'Sagrado';
      additional = 'Coração';
    } else if (/^Imaculado Coração/i.test(trimmed)) {
      main = 'Imaculado';
      additional = 'Coração';
    } else if (/^Cristo Rei/i.test(trimmed)) {
      main = 'Cristo';
      additional = 'Rei';
    } else if (/^Imaculada Conceição/i.test(trimmed)) {
      main = 'Imaculada';
      additional = 'Conceição';
    } else if (/^Santíssima Trindade/i.test(trimmed)) {
      main = 'Santíssima';
      additional = 'Trindade';
    } else if (/^Novena de Natal/i.test(trimmed)) {
      main = 'Novena de';
      additional = 'Natal';
    } else if (/^Quaresma S\. Miguel/i.test(trimmed)) {
      main = 'Quaresma';
      additional = 'S. Miguel';
    } else if (/^Exaltação Santa Cruz/i.test(trimmed)) {
      main = 'Exaltação';
      additional = 'Santa Cruz';
    } else if (/^Natividade N\.S\./i.test(trimmed)) {
      main = 'Natividade';
      additional = 'N.S.';
    } else if (/^Assunção de N\.S\./i.test(trimmed)) {
      main = 'Assunção';
      additional = 'de N.S.';
    } else if (/^Cátedra S\. Pedro/i.test(trimmed)) {
      main = 'Cátedra';
      additional = 'S. Pedro';
    } else if (/^Sant'Ana/i.test(trimmed)) {
      main = "Sant'Ana";
      additional = trimmed.replace(/^Sant'Ana\s*/i, '').trim();
    } else {
      // Fallback padrão: primeira palavra na 1ª linha, restante na 2ª
      const words = trimmed.split(/\s+/);
      main = words[0] || '';
      additional = words.slice(1).join(' ');
    }
  }

  // 6. Para os santos que não possuem um segundo nome ou sobrenome, adiciona um adjetivo ou título canônico
  if (!additional || additional.trim() === '') {
    const titlesMap: Record<string, string> = {
      'antao': 'Abade',
      'sebastiao': 'Mártir',
      'bras': 'Bispo',
      'casimiro': 'Príncipe',
      'patricio': 'da Irlanda',
      'anunciacao': 'do Senhor',
      'expedito': 'Mártir',
      'jorge': 'Mártir',
      'antonio': 'de Pádua',
      'cristovao': 'Mártir',
      'marta': 'de Betânia',
      'filomena': 'Mártir',
      'monica': 'Mãe',
      'teresinha': 'das Rosas',
      'edwiges': 'Duquesa',
      'almas': 'do Purgatório',
      'cecilia': 'Mártir',
      'luzia': 'Mártir',
      'epifania': 'do Senhor',
      'bento': 'Abade',
      'natal': 'do Senhor'
    };

    const norm = trimmed.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    const matchedKey = Object.keys(titlesMap).find(k => norm.includes(k));
    if (matchedKey) {
      additional = titlesMap[matchedKey];
    }
  }

  return { main, additional };
}

/**
 * Retorna o nome canônico completo e sem abreviações para o título da novena/modal
 */
export function getFullSaintName(name: string): string {
  if (!name) return '';
  let full = name.trim();

  // Expande S. Pedro de A. para São Pedro de Alcântara
  if (/^S\.\s*Pedro\s+de\s+A\.?$/i.test(full) || /^São\s+Pedro\s+de\s+A\.?$/i.test(full)) {
    return 'São Pedro de Alcântara';
  }

  // Expande abreviações comuns
  full = full.replace(/^S\.\s+/i, (match) => {
    // Determina se é feminino ou masculino baseado no próximo nome
    const femaleNames = ['teresa', 'teresinha', 'faustina', 'edwiges', 'margarida', 'isabel', 'cecília', 'cecilia', 'luzia', 'maria', 'paulina', 'clara', 'filomena', 'dulce', 'mônica', 'monica', 'gemma', 'rita', 'gianna', 'catarina', 'marta', 'ana', 'josefina'];
    const nextWord = full.slice(match.length).split(/\s+/)[0]?.toLowerCase();
    if (nextWord && femaleNames.includes(nextWord)) {
      return 'Santa ';
    }
    return 'São ';
  });

  full = full.replace(/^Sta\.\s+/i, 'Santa ');
  full = full.replace(/^N\.?\s*S\.?\s+/i, 'Nossa Senhora ');

  return full;
}

/**
 * Ajusta o tamanho da fonte da primeira linha (main) para não quebrar a linha no card de 100px
 */
export function getMainNameFontSize(text: string): string {
  const len = text ? text.length : 0;
  if (len <= 8) return 'text-sm'; // 14px
  if (len <= 11) return 'text-xs'; // 12px
  if (len <= 14) return 'text-[11px]'; // 11px
  return 'text-[9.5px]';
}

/**
 * Ajusta o tamanho da fonte da segunda linha (additional) para caber sem quebrar no card de 100px
 */
export function getAdditionalNameFontSize(text: string): string {
  const len = text ? text.length : 0;
  if (len <= 8) return 'text-[10.5px]';
  if (len <= 12) return 'text-[9.5px]';
  if (len <= 16) return 'text-[8.5px]';
  return 'text-[7.5px]';
}

export function getProxiedImageUrl(url?: string | null): string {
  if (!url) return '';
  if (url.startsWith('http://') || url.startsWith('https://')) {
    // Se for URL externa, passa pelo proxy da API interna para evitar bloqueios de rede
    return `/api/proxy-image?url=${encodeURIComponent(url)}`;
  }
  return url;
}

/**
 * Retorna o objetivo espiritual e as graças pelas quais o Santo ou devoção é invocado
 */
export function getSaintIntercession(saintId?: string, saintName?: string): string {
  const intercessions: Record<string, string> = {
    menino_jesus_praga: "Invocado nas causas urgentes e desesperadas, na proteção e saúde das crianças, bênção dos lares e alívio nas dificuldades financeiras.",
    santo_antao: "Pai do monaquismo, invocado para vencer tentações espirituais, proteção contra doenças de pele e padroeiro dos agricultores e animais.",
    sao_sebastiao: "Mártir da fé, invocado tradicionalmente como protetor contra pestes, epidemias, doenças contagiosas e pela fortaleza espiritual.",
    sao_francisco_sales: "Doutor da Igreja e padroeiro dos escritores e jornalistas, intercessor pela mansidão, doçura no trato, paciência e caridade fraterna.",
    santo_tomas_aquino: "Doutor Angélico, padroeiro dos estudantes, professores e teólogos; invocado pelo dom da sabedoria, discernimento e sucesso nos estudos.",
    sao_joao_bosco: "Pai e mestre da juventude, padroeiro dos educadores; invocado para a proteção dos filhos e jovens, discernimento vocacional e paz na família.",
    ns_candeias: "Nossa Senhora da Candelária (da Luz), invocada pela purificação da alma, iluminação dos caminhos espirituais e bênção das gestantes e parturientes.",
    nossa_senhora_candeias: "Nossa Senhora da Candelária (da Luz), invocada pela purificação da alma, iluminação dos caminhos espirituais e bênção das gestantes e parturientes.",
    sao_bras: "Bispo e mártir, protetor milagroso contra doenças da garganta, engasgos, males respiratórios e enfermidades corporais.",
    santa_josefina_bakhita: "Padroeira das vítimas de opressão e escravidão moderna; modelo de superação, perdão evangélico, dignidade e liberdade interior.",
    nossa_senhora_lourdes: "Padroeira mundial dos enfermos e doentes, fonte inesgotável de graças de cura física, emocional e espiritual.",
    sagrada_face: "Devoção reparadora pedida por Jesus para a salvação das famílias, alívio nas dores profundas, vitória contra as forças do mal e paz interior.",
    catedra_sao_pedro: "Pela solidez da fé católica, unidade inquebrantável da Igreja e fidelidade e proteção ao Papa e aos bispos.",
    sao_casimiro: "Padroeiro da juventude e dos líderes, modelo exemplar de castidade, pureza de costumes, retidão moral e oração sincera.",
    sao_gabriel_dores: "Padroeiro dos jovens estudantes, modelo de pureza angélica e profunda devoção compadecida a Nossa Senhora das Dores.",
    sao_joao_de_deus: "Padroeiro dos hospitais, enfermeiros e doentes; intercessor pelo amparo compassivo aos doentes e restauração da saúde.",
    sao_patricio: "Apóstolo da evangelização, poderoso protetor contra adversidades, ciladas do mal e pela renovação ardente da fé em Jesus Cristo.",
    sao_jose: "Patrono Universal da Igreja e das famílias, padroeiro dos trabalhadores, dos pais, da providência material, moradia e de uma santa morte.",
    sao_jose_19_marco: "Patrono Universal da Igreja e das famílias, padroeiro dos trabalhadores, dos pais, da providência material, moradia e de uma santa morte.",
    sao_bento: "Patriarca dos monges, poderoso intercessor contra feitiçarias, ciladas do demônio, invejas, brigas e pela paz e proteção do lar.",
    sao_bento_transito: "Poderoso intercessor contra tentações malignas, influências espirituais nefastas, perigos ocultos e pela proteção e paz das famílias.",
    anunciacao: "Pela acolhida obediente aos desígnios de Deus, proteção da vida humana desde a concepção, bênção da maternidade e paz no mundo.",
    sao_vicente_ferrer: "Taumaturgo da caridade, intercessor pela conversão dos pecadores, concórdia nos lares, livramento de calamidades e discernimento.",
    santa_gemma_galgani: "Intercessora dos jovens em tentação, nas perseguições espirituais, dores físicas graves e busca por intimidade mística com Deus.",
    divina_misericordia: "Para o perdão dos pecados mais difíceis, salvação das almas agonizantes e confiança inabalável no Coração Misericordioso de Jesus.",
    santo_expedito: "Advogado das causas justas e urgentes que não toleram adiamento; protetor dos estudantes, candidatos a concursos e militares.",
    sao_jorge: "Guerreiro da fé, defensor contra injustiças, perseguições materiais e espirituais, perigos físicos e ataques de inimigos.",
    sao_marcos: "Evangelista da Boa Nova, invocado pela intrepidez na proclamação do Evangelho, clareza na doutrina e fidelidade à Palavra divina.",
    sao_luis_montfort: "Mestre da verdadeira devoção à Santíssima Virgem, invocado pela total consagração a Jesus por Maria e vitória sobre as heresias.",
    santa_gianna_beretta: "Padroeira das famílias, mães e gestantes; protetora da vida dos nascituros, da santidade conjugal e dos profissionais de saúde.",
    santa_catarina_siena: "Doutora da Igreja, intercessora pela reforma e unidade da Igreja, fidelidade dos ministros sagrados e sabedoria espiritual nas tribulações.",
    santa_candida: "Invocada pela pureza do coração, firmeza nas perseguições espirituais e amor corajoso e fraterno aos mártires de Cristo.",
    ns_africa: "Invocada pela reconciliação, fraternidade entre os povos, amparo aos marginalizados e missionários e paz nas nações oprimidas.",
    sao_jose_operario: "Protetor insigne dos trabalhadores, desempregados, operários e de quem busca emprego digno, providência diária e justiça nas relações de trabalho.",
    santo_atanasio: "Baluarte da ortodoxia católica, invocado pela preservação da sã doutrina cristã e firmeza na fé contra falsos ensinamentos.",
    nossa_senhora_fatima: "Pela conversão dos pecadores, consagração dos lares ao Imaculado Coração de Maria, oração do Santo Terço e paz no mundo.",
    santa_rita_cassia: "Padroeira das causas impossíveis e desesperadas; advogada das mães e esposas em sofrimento e da reconciliação matrimonial.",
    pentecostes: "Pela efusão renovada dos dons e frutos do Espírito Santo, zelo apostólico, consolo nas dores e renovação espiritual da alma.",
    nossa_senhora_auxiliadora: "Auxílio dos cristãos nos momentos de aflição extrema, perseguição religiosa, proteção dos jovens e bênção da casa.",
    sao_filipe_neri: "Padroeiro da alegria cristã genuína, do amor caridoso aos pobres e jovens e do desprendimento das vaidades humanas.",
    visitacao: "Pela caridade ativa e generosa, bênção das visitas fraternas, harmonia familiar e proteção para uma gravidez tranquila e saudável.",
    santissima_trindade: "Pelo louvor supremo a Deus Pai, Filho e Espírito Santo, aumento da fé, esperança e caridade e unidade nas comunidades cristãs.",
    sao_jose_anchieta: "Apóstolo do Brasil, intercessor pelos catequistas, educadores, união do povo brasileiro e cura de enfermidades físicas.",
    santo_antonio_padua: "Padroeiro dos pobres, intercessor para encontrar coisas e caminhos perdidos, bênção do casamento, reconciliação e fartura do pão.",
    sagrado_coracao: "Fonte de misericórdia infinita, refúgio de paz nas aflições, consolo dos corações feridos e salvação eterna nas Suas promessas divinas.",
    santo_onofre: "Protetor contra a extrema pobreza, vícios, alcoolismo e dependências; invocado para quem necessita de emprego e teto.",
    imaculado_coracao: "Refúgio de pureza e paz espiritual, consagração pessoal e familiar, livramento do pecado e conforto nas angústias.",
    sao_joao_batista: "Precursor do Senhor, intercessor pela conversão sincera de coração, superação da hipocrisia e coragem em defender a verdade moral.",
    sao_josemaria_escriva: "Padroeiro da santificação da vida profissional e do trabalho diário, amparo na vida familiar e dedicação alegre aos deveres cotidianos.",
    nossa_senhora_perpetuo_socorro: "Socorro contínuo e compassivo nas maiores tribulações da vida, alívio nas enfermidades corporais e amparo maternal em perigos urgentes.",
    sao_pedro_paulo: "Colunas apostólicas da Igreja, invocados pela perseverança final na fé católica, firmeza doutrinária e zelo na evangelização.",
    santa_paulina: "Primeira santa do Brasil, invocada pelos doentes, pessoas em tratamento de câncer, diabéticos e nas carências materiais prementes.",
    luis_zelia_martin: "Pais de Santa Teresinha, padroeiros dos esposos, da santidade conjugal, da educação cristã dos filhos e consolo na perda de entes queridos.",
    nossa_senhora_carmo: "Padroeira dos que usam o Escapulário, refúgio na hora da agonia e morte, libertadora das almas do Purgatório e mestra de oração interior.",
    santa_maria_madalena: "Padroeira dos penitentes e convertidos, exemplo heroico de amor apaixonado por Cristo, arrependimento sincero e fidelidade à Cruz.",
    sao_cristovao: "Padroeiro e protetor dos motoristas, viajantes, condutores, pilotos e pedestres contra sinistros, perigos e acidentes nas estradas.",
    santa_ana_joaquim: "Avós de Nosso Senhor Jesus Cristo, padroeiros dos avós, casais com dificuldades para conceber e protetores da harmonia no lar.",
    santa_marta: "Padroeira das donas de casa, cozinheiros, hotelaria e anfitriões; intercessora nas necessidades domésticas urgentes e aflições financeiras.",
    santo_inacio_loyola: "Mestre dos Exercícios Espirituais, intercessor pelo discernimento da vontade divina, superação das tentações e busca da Maior Glória de Deus.",
    sao_joao_vianney: "Padroeiro dos párocos e padres do mundo inteiro, intercessor pela conversão dos pecadores mais empedernidos e santificação do clero.",
    santo_afonso_ligorio: "Doutor da Igreja e padroeiro dos confessores e moralistas, mestre da oração constante e guia da confiança filial em Maria Santíssima.",
    santa_clara: "Padroeira da televisão e dos meios de comunicação, intercessora pela pureza do olhar, clareza espiritual e desapego material generoso.",
    santa_filomena: "Virgem e mártir operadora de milagres extraordinários, intercessora nas causas mais intrincadas, conversões difíceis e curas milagrosas.",
    santa_dulce_pobres: "O Anjo Bom da Bahia, padroeira dos doentes desenganados, dos necessitados e marginalizados, protetora nas intervenções cirúrgicas.",
    sao_maximiliano_kolbe: "Mártir da caridade que deu a vida por um pai de família, padroeiro das famílias, dependentes químicos e comunicadores da fé.",
    assuncao_nossa_senhora: "Pela esperança viva da ressurreição, amparo maternal na passagem para a eternidade e desapego das ilusões mundanas.",
    quaresma_sao_miguel: "Combate contra armadilhas e obsessões diabólicas, cura e libertação de vícios arraigados, purificação espiritual da família e proteção contra o mal.",
    santa_monica: "Padroeira e consolo das mães que sofrem e choram pela conversão, reabilitação e salvação dos filhos e esposos.",
    santo_agostinho: "Doutor da Graça, padroeiro dos que buscam a Verdade com sede sincera, estudantes e intercessor contra paixões e inquietações da alma.",
    natividade_nossa_senhora: "Bênção das crianças recém-nascidas, restauração da esperança e da inocência no lar e renovação do amor a Deus na família.",
    exaltacao_santa_cruz: "Pela fortaleza e sentido salvífico diante dos sofrimentos, enfermidades crônicas e pesadas cruzes que enfrentamos na vida cotidiana.",
    nossa_senhora_dores: "Consolo compassivo nas dores profundas da alma, perdas de entes queridos, depressões, sofrimentos incompreendidos e união à Cruz de Cristo.",
    sao_pio_pietrelcina: "Taumaturgo de nossos tempos, intercessor pela cura física e espiritual, perdão dos pecados na confissão e perseverança inabalável na oração.",
    sao_cosme_damiao: "Irmãos médicos e mártires, padroeiros dos farmacêuticos e médicos, intercessores pela saúde e proteção graciosa das crianças.",
    sao_miguel_arcanjo: "Príncipe dos Exércitos Celestes e terror dos demônios, supremo defensor nas batalhas espirituais, contra feitiços e perigos da alma e do corpo.",
    santa_teresinha: "Doutora da Pequena Via, prometeu passar seu Céu fazendo o bem na Terra; invocada para alcançar graças com sua 'Chuva de Rosas' e cura interior.",
    anjo_guarda: "Nosso fiel protetor e companheiro espiritual, invocado para iluminação de decisões difíceis, guarda contra perigos físicos e guia para a salvação.",
    sao_francisco_assis: "Padroeiro da ecologia e dos animais, exemplo universal de humildade, fraternidade sincera, reconciliação, desapego e paz.",
    faustina: "Apóstola da Divina Misericórdia, intercessora pela salvação dos pecadores agonizantes, alívio no desespero e confiança no amor de Cristo.",
    rosario: "Vitória nas batalhas espirituais e materiais mais difíceis, consagração das famílias, proteção contra ataques do mal e paz no lar.",
    john_henry_newman: "Padroeiro dos intelectuais e convertidos, intercessor pela integridade de consciência, fidelidade doutrinária e discernimento moral da verdade.",
    joao_xxiii: "O Papa Bom, invocado pela paz duradoura entre as nações, reconciliação de corações rompidos e amor fraterno nos relacionamentos.",
    aparecida: "Rainha e Padroeira do Brasil, mãe compassiva de todos os brasileiros, refúgio carinhoso nas aflições familiares, trabalho e saúde.",
    carlo_acutis: "Primeiro santo da era digital, padroeiro dos jovens e da internet; intercessor pela pureza moral na era digital e amor fervoroso à Eucaristia.",
    teresa_avila: "Mestra insigne de oração, intercessora para vencer a aridez espiritual, cultivar a amizade íntima com Jesus e alcançar firmeza na vida cristã.",
    edwiges: "Padroeira dos endividados, desamparados e das famílias que necessitam de moradia própria, quitação de dívidas e estabilidade financeira.",
    margarida_alacoque: "Vidente do Sagrado Coração, intercessora pela reparação aos ultrajes contra a Sagrada Eucaristia e consagração dos lares cristãos.",
    inacio_antioquia: "Mártir intrépido, intercessor pela coragem perante perseguições, unidade de comunhão com os bispos e amor incondicional à Eucaristia.",
    lucas: "Médico e evangelista, padroeiro dos médicos, cirurgiões e artistas; intercessor pelo sucesso em intervenções cirúrgicas e alívio das enfermidades.",
    pedro_alcantara: "Padroeiro do Brasil, mestre admirável de oração contemplativa e mortificação dos sentidos, intercessor pela paz interior e vigilância na fé.",
    jp2: "O Papa das Famílias e dos Jovens, intercessor pelas vocações matrimoniais e sacerdotais, coragem nas provações e liberdade das opressões.",
    frei_galvao: "Primeiro santo brasileiro, célebre pelas 'Pílulas de Frei Galvão', poderoso intercessor pelas parturientes, gestações de risco e curas milagrosas.",
    judas_tadeu: "Padroeiro dos casos desesperados, aflitivos e das causas sem esperança humana; refúgio certo onde os recursos humanos falham.",
    chiara_luce: "Beata modelo para a juventude contemporânea, intercessora contra a depressão e a tristeza, exemplo de entrega confiante e alegre a Deus na dor.",
    todos_santos: "Invocação solene de toda a Igreja triunfante no Céu, auxílio na caminhada para a santidade diária e comunhão de oração com os santos.",
    almas: "Piedade pelas santas Almas do Purgatório, aceleração de sua entrada na glória eterna e auxílio recíproco que elas concedem a quem ora por elas.",
    isabel_hungria: "Padroeira da caridade cristã aos pobres, enfermos e desvalidos, modelo de compaixão heroica e partilha com os necessitados.",
    apresentacao_ns: "Pela consagração pura do coração a Deus desde a juventude, amor à oração silenciosa e prontidão para realizar o plano divino.",
    ns_saude: "Nossa Senhora da Saúde, invocada fervorosamente pela cura de enfermidades graves, recuperação de doentes e fortalecimento dos que sofrem dor.",
    santa_cecilia: "Padroeira dos músicos, cantores e poetas; intercessora pela pureza da arte sacra, harmonia espiritual e testemunho destemido de fé cristã.",
    gracas: "Dispensadora universal de todas as graças pela Medalha Milagrosa, refúgio de ternura materna para todo aquele que suplica com confiança filial.",
    cristo_rei: "Solenidade de Cristo Rei do Universo, invocada pela soberania da lei de Deus nos corações, nas leis, nas famílias e no mundo inteiro.",
    imaculada_conceicao: "Padroeira da pureza e vitória sobre o pecado; poderosa defensora contra as tentações, ciladas do demônio e mãe solícita de todos nós.",
    guadalupe: "Imperatriz das Américas, protetora sagrada dos nascituros, da vida humana, das famílias e consolo terno em todas as tribulações.",
    santa_luzia: "Protetora sagrada da visão e dos olhos corporais e espirituais; padroeira dos oftalmologistas e de quem padece de doenças oculares.",
    joao_cruz: "Doutor Místico, guia seguro nas noites e purificações espirituais da alma, intercessor pelo amor puro a Deus e desapego das criaturas.",
    natal: "Tempo de bênçãos abundantes, reconciliação nos relacionamentos familiares, acolhimento do Menino Jesus e paz duradoura para o lar.",
    maria_mae_deus: "Solenidade da Mãe de Deus, rogando proteção e bênção no início do novo ano, harmonia e salvação para toda a família.",
    epifania: "Manifestação do Salvador a todas as gentes, iluminação para governantes e povos, bênção dos lares e acolhimento da Verdade de Cristo.",
  };

  if (saintId && intercessions[saintId]) {
    return intercessions[saintId];
  }

  if (saintName) {
    const clean = saintName.toLowerCase();
    for (const [key, val] of Object.entries(intercessions)) {
      const keyParts = key.split('_').filter(p => p.length > 2);
      if (keyParts.some(p => clean.includes(p))) {
        return val;
      }
    }
  }

  return "Intercessão poderosa diante de Deus para o alcance de graças espirituais, saúde, paz na família, proteção e fortalecimento na fé católica.";
}
