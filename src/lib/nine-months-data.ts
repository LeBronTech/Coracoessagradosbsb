import { differenceInCalendarDays, isAfter, isBefore, startOfDay } from "date-fns";

export interface PregnancyMonthInfo {
  numero: number;
  nome: string;
  subtitulo: string;
  periodo: string;
  startMonth: number; // 0-indexed (2 = Março)
  startDay: number;
  endMonth: number;
  endDay: number;
  misterio: string;
  passagemBiblica: string;
  referencia: string;
  virtudePrincipal: string;
  simbolismo: string;
  reflexao: string;
  oracaoDoMes: string;
  imagemUrl: string;
}

export const PREGNANCY_MONTHS: PregnancyMonthInfo[] = [
  {
    numero: 1,
    nome: "1º Mês da Gestação",
    subtitulo: "A Anunciação e o 'Fiat' de Maria",
    periodo: "25 de Março a 24 de Abril",
    startMonth: 2, // Março
    startDay: 25,
    endMonth: 3,   // Abril
    endDay: 24,
    misterio: "A Encarnação do Verbo no Seio da Virgem",
    passagemBiblica: "Eis aqui a serva do Senhor; faça-se em mim segundo a tua palavra.",
    referencia: "Lucas 1, 26-38",
    virtudePrincipal: "Humildade e Fé incondicional",
    simbolismo: "A semente da Salvação lançada na terra puríssima de Nazaré",
    reflexao: "O Arcanjo Gabriel desce à humilde Nazaré. O Céu e a Terra aguardam em silêncio a resposta da Virgem. Com o seu 'Sim' corajoso e livre, a Segunda Pessoa da Santíssima Trindade torna-se carne em seu ventre. Neste primeiro mês, contemplemos o milagre silencioso do início da vida de Jesus e peçamos a graça de sermos dóceis à vontade de Deus em nossos dias.",
    oracaoDoMes: "Ó Maria, Virgem do 'Fiat', ensinai-me a dizer sim aos planos de Deus, mesmo quando não compreendo todos os caminhos. Guardai no meu coração a semente da fé viva e protegei todas as vidas humanas desde o primeiro instante de sua concepção.",
    imagemUrl: "https://i.postimg.cc/rsh03kKj/ns-anunciacao.jpg"
  },
  {
    numero: 2,
    nome: "2º Mês da Gestação",
    subtitulo: "A Pressa do Amor e a Visitação",
    periodo: "25 de Abril a 24 de Maio",
    startMonth: 3, // Abril
    startDay: 25,
    endMonth: 4,   // Maio
    endDay: 24,
    misterio: "A Visitação a Santa Isabel e o Magnificat",
    passagemBiblica: "Naqueles dias, Maria pôs-se a caminho para a região montanhosa, dirigindo-se apressadamente a uma cidade de Judá.",
    referencia: "Lucas 1, 39-56",
    virtudePrincipal: "Caridade operosa e Prontidão fraterna",
    simbolismo: "O primeiro Sacrário da Terra peregrina pelas montanhas",
    reflexao: "Mesmo grávida do Salvador, Maria não se fecha em si mesma nem reivindica privilégios. Ao saber que sua idosa prima Isabel esperava um filho, parte com pressa para servi-la. A presença de Maria levando Jesus no ventre faz estremecer de alegria o menino João e transborda a casa no cântico do Magnificat. Que nossa caridade não seja feita de palavras vazias, mas de passos concretos ao encontro dos necessitados.",
    oracaoDoMes: "Mãe da Caridade Pressurosa, dai-me um coração atento às aflições do meu irmão. Que eu leve a presença pacificadora de Jesus por onde eu passar, servindo com humildade e louvando ao Altíssimo com a minha própria vida.",
    imagemUrl: "https://i.postimg.cc/ydsDNdRy/visitacao-ns.jpg"
  },
  {
    numero: 3,
    nome: "3º Mês da Gestação",
    subtitulo: "A Permanência com Isabel e o Nascimento de João",
    periodo: "25 de Maio a 24 de Junho",
    startMonth: 4, // Maio
    startDay: 25,
    endMonth: 5,   // Junho
    endDay: 24,
    misterio: "A Santificação do Precursor no Ventre Materno",
    passagemBiblica: "Maria permaneceu com Isabel cerca de três meses; depois voltou para a sua casa.",
    referencia: "Lucas 1, 56-66",
    virtudePrincipal: "Perseverança, Paciência e Louvor",
    simbolismo: "A luz que dissipa o mutismo de Zacarias e gera alegria",
    reflexao: "Maria permaneceu cerca de três meses auxiliando Isabel nas tarefas mais simples e humildes do lar. Quando João Batista nasceu, Zacarias recuperou a fala e bendisse ao Senhor. O terceiro mês da gestação ensina a beleza da perseverança no bem: a caridade santa não se cansa rapidamente, mas sabe permanecer com paciência nos momentos de maior fragilidade.",
    oracaoDoMes: "Ó Mãe de Amor e Paciência, que permanecestes ao lado de Isabel até o nascimento de João, concedei-me a virtude da fidelidade nas pequenas coisas. Afastai do meu lar toda murmuração e enchei a minha família com o louvor e a gratidão a Deus.",
    imagemUrl: "https://i.pinimg.com/1200x/cc/80/b9/cc80b9f6815e1ec29ad8815d63103fbb.jpg"
  },
  {
    numero: 4,
    nome: "4º Mês da Gestação",
    subtitulo: "O Retorno a Nazaré e o Sonho de São José",
    periodo: "25 de Junho a 24 de Julho",
    startMonth: 5, // Junho
    startDay: 25,
    endMonth: 6,   // Julho
    endDay: 24,
    misterio: "O Silêncio de Maria e a Revelação Angelical a José",
    passagemBiblica: "José, filho de Davi, não temas receber Maria por esposa, pois o que nela foi gerado vem do Espírito Santo.",
    referencia: "Mateus 1, 18-25",
    virtudePrincipal: "Silêncio interior e Confiança na Providência",
    simbolismo: "O crisol da provação antes do consolo celestial",
    reflexao: "Ao regressar a Nazaré, a gravidez de Maria torna-se visível. Ela não procura se justificar perante José nem perante as leis dos homens; ela guarda o segredo divino em silêncio santo e confia que Deus cuidará de tudo. E o Senhor envia em sonhos o anjo a São José, confirmando a honra puríssima de Maria e inaugurando a Sagrada Família de Nazaré.",
    oracaoDoMes: "Virgem Silenciosa e Justo São José, protegei os casais e as famílias em tempos de incompreensão e dúvida. Ensinai-me a calar o meu orgulho nas ofensas e a esperar com serenidade a intervenção salvífica da Providência Divina.",
    imagemUrl: "https://i.pinimg.com/1200x/cc/80/b9/cc80b9f6815e1ec29ad8815d63103fbb.jpg"
  },
  {
    numero: 5,
    nome: "5º Mês da Gestação",
    subtitulo: "A Vida Oculta e os Primeiros Movimentos de Jesus",
    periodo: "25 de Julho a 24 de Agosto",
    startMonth: 6, // Julho
    startDay: 25,
    endMonth: 7,   // Agosto
    endDay: 24,
    misterio: "O Primeiro Sacrário Vivo da Nova Criação",
    passagemBiblica: "Bem-aventurada aquela que acreditou, porque se cumprirá o que lhe foi dito da parte do Senhor.",
    referencia: "Lucas 1, 45; Efésios 3, 17",
    virtudePrincipal: "Adoração íntima e Recolhimento interior",
    simbolismo: "O pulsar do Sagrado Coração de Jesus dentro do Coração Imaculado",
    reflexao: "No quinto mês, a Mãe Santíssima sente com emoção inefável os primeiros movimentos do Menino Jesus em seu seio. Cada pulsar do Salvador é um ato de redenção e amor pelos homens. A casa de Nazaré torna-se um paraíso na terra: Jesus no sacrário do ventre de Maria, e São José em adoração silenciosa diante do maior mistério do universo.",
    oracaoDoMes: "Ó Maria, Sacrário Vivo do Deus Altíssimo, fazei do meu pobre coração uma morada digna para Jesus. Que nos meus trabalhos e deveres de cada dia, eu saiba manter os olhos fixos na presença de Deus, adorando-O no silêncio da minha alma.",
    imagemUrl: "https://i.pinimg.com/1200x/cc/80/b9/cc80b9f6815e1ec29ad8815d63103fbb.jpg"
  },
  {
    numero: 6,
    nome: "6º Mês da Gestação",
    subtitulo: "A Oração Contemplativa de Maria",
    periodo: "25 de Agosto a 24 de Setembro",
    startMonth: 7, // Agosto
    startDay: 25,
    endMonth: 8,   // Setembro
    endDay: 24,
    misterio: "A Alma que Guarda e Medita as Palavras de Deus",
    passagemBiblica: "Maria, contudo, conservava todas estas coisas, meditando-as no seu coração.",
    referencia: "Lucas 2, 19.51",
    virtudePrincipal: "Contemplação, Castidade e Pureza de Intenção",
    simbolismo: "O lírio que floresce no jardim fechado de Deus",
    reflexao: "No sexto mês de gravidez, o recolhimento de Maria atinge píncaros de sublimidade mística. Ela conversa intimamente com o Verbo Encarnado que carrega dentro de si. Maria nos ensina que a vida interior é a alma de todo apostolado: sem oração contemplativa, nossas ações tornam-se barulho vazio. Que saibamos guardar momentos preciosos de conversa a sós com Cristo.",
    oracaoDoMes: "Mãe Puríssima e Contemplativa, purificai a minha mente de tantas distrações fúteis e ruídos do mundo. Ajudai-me a amar o silêncio santo e a meditar diariamente a Palavra de Deus, para que minhas ações reflitam a luz do vosso Filho.",
    imagemUrl: "https://i.pinimg.com/1200x/cc/80/b9/cc80b9f6815e1ec29ad8815d63103fbb.jpg"
  },
  {
    numero: 7,
    nome: "7º Mês da Gestação",
    subtitulo: "A Preparação do Enxoval e o Amor Diligente",
    periodo: "25 de Setembro a 24 de Outubro",
    startMonth: 8, // Setembro
    startDay: 25,
    endMonth: 9,   // Outubro
    endDay: 24,
    misterio: "As Mãos Virginais que Tecem com Amor para o Menino",
    passagemBiblica: "Revesti-vos, pois, como eleitos de Deus, santos e amados, de entranhas de misericórdia, de bondade, de humildade, de mansidão, de paciência.",
    referencia: "Colossenses 3, 12-14",
    virtudePrincipal: "Diligência, Pureza de Intenção e Zelo Santo",
    simbolismo: "Os panos brancos tecidos com fios de amor e santidade",
    reflexao: "No sétimo mês, Maria e José preparam com carinho indizível os paninhos e cueiros para acolher o Menino Deus. Cada ponto de costura, cada fibra de tecido é uma oração bordada com ternura. Este mês nos convida a preparar a nossa alma para receber a graça: que vestes espirituais estamos preparando para o Senhor? Revistamo-nos de caridade, perdão e oração fervorosa.",
    oracaoDoMes: "Querida Mãe do Bom Parto, que preparastes com tanta doçura o enxoval do Vosso Filho Divino, costurai na minha alma as vestes brancas da graça e da inocência. Livrai-me da tibieza espiritual e dai-me zelo santo para com as coisas de Deus.",
    imagemUrl: "https://i.pinimg.com/1200x/cc/80/b9/cc80b9f6815e1ec29ad8815d63103fbb.jpg"
  },
  {
    numero: 8,
    nome: "8º Mês da Gestação",
    subtitulo: "O Decreto do Imperador e o Caminho de Belém",
    periodo: "25 de Outubro a 24 de Novembro",
    startMonth: 9,  // Outubro
    startDay: 25,
    endMonth: 10,  // Novembro
    endDay: 24,
    misterio: "A Obediência nas Provações e Incertezas da Vida",
    passagemBiblica: "Naqueles dias, saiu um decreto de César Augusto mandando recensear toda a terra.",
    referencia: "Lucas 2, 1-5",
    virtudePrincipal: "Obediência heroica e Fortaleza no sofrimento",
    simbolismo: "A jornada árdua cumprindo as profecias de Miqueias",
    reflexao: "Quando a gestação chegava ao oitavo mês, surge a notícia do recenseamento civil ordenado por Roma. José e Maria, em estágio avançado de gravidez, precisam empreender uma viagem de quase 150 km a pé e sobre um burrico, de Nazaré até Belém da Judeia. Eles não protestam nem perdem a paz: reconhecem que, através dos acontecimentos humanos, a profecia de Miqueias 5,2 ('E tu, Belém, de ti sairá o Governador') estava se cumprindo.",
    oracaoDoMes: "Nossa Senhora do Caminho, fortaleza dos peregrinos, concedei-me coragem nas travessias difíceis da minha vida. Quando os planos humanos desabarem e as dores baterem à minha porta, ajudai-me a crer que Deus está conduzindo tudo para o bem dos que O amam.",
    imagemUrl: "https://i.pinimg.com/1200x/cc/80/b9/cc80b9f6815e1ec29ad8815d63103fbb.jpg"
  },
  {
    numero: 9,
    nome: "9º Mês da Gestação",
    subtitulo: "A Procura de Abrigo e a Glória do Santo Natal",
    periodo: "25 de Novembro a 25 de Dezembro",
    startMonth: 10, // Novembro
    startDay: 25,
    endMonth: 11,   // Dezembro
    endDay: 25,
    misterio: "A Gruta de Belém e o Nascimento de Nosso Senhor Jesus Cristo",
    passagemBiblica: "E deu à luz o seu filho primogênito, envolveu-o em faixas e deitou-o numa manjedoura, porque não havia lugar para eles na hospedaria.",
    referencia: "Lucas 2, 6-20",
    virtudePrincipal: "Desapego total, Adoração sublime e Júbilo celeste",
    simbolismo: "A Luz do Mundo que nasce na noite escura do mundo",
    reflexao: "Chegando a Belém, todas as portas se fecharam: 'Não há lugar para vós'. Sem amargura, São José conduz a Virgem Maria a uma pobre gruta de pastores. E ali, na Noite Santa, sem dores de parto, o Salvador do Mundo nasce! O Céu se abre em cantos de anjos: 'Glória a Deus nas alturas e paz na terra aos homens de boa vontade!'. Concluímos os nove meses com Maria adorando o Menino Deus deitado no presépio do nosso coração.",
    oracaoDoMes: "Ó Menino Jesus, Emanuel, Deus Conosco, acolhido nos braços santíssimos da Virgem Maria e de São José: eis aqui o meu coração! Abro todas as portas da minha vida para que Vós possais nascer em mim. Fazei de mim um instrumento da vossa paz e do vosso amor. Amém!",
    imagemUrl: "https://i.pinimg.com/1200x/cc/80/b9/cc80b9f6815e1ec29ad8815d63103fbb.jpg"
  }
];

export const ORACAO_OFICIAL_NOVE_MESES = `Ó Maria, Virgem Imaculada, Mãe de Deus e nossa Mãe bendita, que por obra e graça do Espírito Santo acolhestes em vosso puríssimo seio o Verbo Eterno feito Carne:

Nós vos contemplamos e bendizemos com filial amor durante todos os dias da vossa singular e bendita Gestação. Vós fostes o primeiro Sacrário vivo de Jesus na Terra, levando nas vossas entranhas a Salvação de toda a humanidade.

Acompanhando cada mês e cada batimento do Coração do Menino Deus em vosso ventre, nós vos consagramos as nossas famílias, as nossas casas, os nossos trabalhos e aflições. 

Suplicamos-vos especialmente por todas as mães gestantes: dai-lhes uma boa hora, saúde, serenidade e fé. Protegei todos os bebês em gestação contra os perigos espirituais e corporais, e tocai com a vossa doçura o coração daquelas mães tentadas pelo desespero ou pelo aborto, para que compreendam a grandeza sagrada da vida humana.

Alcançai-nos, ó Mãe Dulcíssima, a graça que hoje confiantes vos pedimos [faça o seu pedido pessoal...], e concedei-nos preparar a nossa alma para que o vosso Filho Jesus encontre em nós um presépio repleto de fé, pureza e sincero amor.

Amém!`;

export const ORACAO_PELAS_GESTANTES_E_VIDA = `Senhor Jesus Cristo, que quisestes santificar o ventre materno e fazer-Vos frágil embrião no seio da Virgem Maria, abençoai todas as mulheres que trazem uma nova vida no ventre. Concedei-lhes saúde, coragem, paz e a certeza da vossa bênção. Defendei os inocentes nascituros, abençoai os pais que aguardam com esperança o dom de um filho, e confortai os lares que choram a perda de uma criança. Por Maria Santíssima, Rainha da Vida, nós Vos pedimos. Amém.`;

export interface DayCalculationResult {
  isWithinSeason: boolean;
  currentDate: Date;
  monthIndex: number; // 1 a 9
  dayOfMonth: number; // 1 a 31
  totalDayNumber: number; // 1 a 275
  totalDaysInSeason: number;
  monthInfo: PregnancyMonthInfo;
  daysRemainingToChristmas: number;
  isChristmasDay: boolean;
}

/**
 * Calcula a posição e oração na devoção dos 9 Meses com Maria com base em uma data
 */
export function calculatePregnancyDay(targetDate: Date = new Date()): DayCalculationResult {
  const date = startOfDay(targetDate);
  const year = date.getFullYear();

  const annunciation = new Date(year, 2, 25); // 25 de Março
  const christmas = new Date(year, 11, 25);   // 25 de Dezembro

  const isAfterAnnunciation = !isBefore(date, annunciation);
  const isBeforeOrOnChristmas = !isAfter(date, christmas);
  const isWithin = isAfterAnnunciation && isBeforeOrOnChristmas;

  // Se estiver fora da temporada do ano atual, calcula em relação à Anunciação mais próxima
  let effectiveDate = date;
  let effectiveYear = year;

  if (!isWithin) {
    if (isBefore(date, annunciation)) {
      // Estamos em Jan, Fev ou início de Março -> pode simular início ou olhar ano anterior
      effectiveYear = year;
    } else {
      // Depois do Natal -> já completou os 9 meses
      effectiveYear = year;
    }
  }

  // Encontra o mês da gestação
  let monthIndex = 1;
  let dayOfMonth = 1;
  let totalDayNumber = 1;

  if (isWithin) {
    totalDayNumber = differenceInCalendarDays(date, annunciation) + 1;
    
    // Identificar qual dos 9 meses
    for (let i = 0; i < PREGNANCY_MONTHS.length; i++) {
      const m = PREGNANCY_MONTHS[i];
      const mStart = new Date(year, m.startMonth, m.startDay);
      const mEnd = new Date(year, m.endMonth, m.endDay);

      if (!isBefore(date, mStart) && !isAfter(date, mEnd)) {
        monthIndex = m.numero;
        dayOfMonth = differenceInCalendarDays(date, mStart) + 1;
        break;
      }
    }
  } else {
    // Fora do período: padrão no 1º mês
    monthIndex = 1;
    dayOfMonth = 1;
    totalDayNumber = 1;
  }

  const selectedMonthInfo = PREGNANCY_MONTHS[monthIndex - 1] || PREGNANCY_MONTHS[0];
  const daysRemaining = Math.max(0, differenceInCalendarDays(christmas, date));
  const isChristmasDay = date.getMonth() === 11 && date.getDate() === 25;

  return {
    isWithinSeason: isWithin,
    currentDate: date,
    monthIndex,
    dayOfMonth,
    totalDayNumber: Math.min(275, Math.max(1, totalDayNumber)),
    totalDaysInSeason: 275,
    monthInfo: selectedMonthInfo,
    daysRemainingToChristmas: daysRemaining,
    isChristmasDay
  };
}
