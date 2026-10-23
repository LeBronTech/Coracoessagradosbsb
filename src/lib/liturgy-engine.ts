/**
 * Motor Litúrgico Católico Dinâmico (Liturgy Engine)
 * Responsável pelo cálculo do Computus (Páscoa), determinação de todas as datas móveis,
 * ciclos litúrgicos (Anos A, B, C e Anos I, II), tempos litúrgicos e regra de precedência.
 * 
 * Regra Litúrgica: A celebração da data móvel tem precedência e aparece sempre primeiro
 * e à frente do santo do dia fixo quando coincidir na data.
 */

import type { SaintStory } from './data';
import type { LiturgicalDay } from './liturgical-calendar';
import { liturgicalCalendar } from './liturgical-calendar';

export type DominicalCycle = 'Ano A' | 'Ano B' | 'Ano C';
export type FerialCycle = 'Ano I' | 'Ano II';
export type LiturgicalSeason = 'Advent' | 'Christmas' | 'Ordinary Time' | 'Lent' | 'Easter';
export type LiturgicalColor = 'Roxo' | 'Branco' | 'Vermelho' | 'Verde' | 'Rosa';

export interface MovableFeastDefinition {
  id: string;
  name: string;
  daysFromEaster: number; // dias de deslocamento relativo ao Domingo de Páscoa
  color: LiturgicalColor;
  category: 'Solemnity' | 'Feast' | 'Memorial';
  imageUrl: string;
  story: string;
  isImportant?: boolean;
}

/**
 * Cálculo da Páscoa da Ressurreição pelo algoritmo astronômico de Meeus/Jones/Butcher
 * Válido para qualquer ano do calendário gregoriano da Igreja Católica.
 */
export function getEasterDate(year: number): Date {
  const a = year % 19;
  const b = Math.floor(year / 100);
  const c = year % 100;
  const d = Math.floor(b / 4);
  const e = b % 4;
  const f = Math.floor((b + 8) / 25);
  const g = Math.floor((b - f + 1) / 3);
  const h = (19 * a + b - d - g + 15) % 30;
  const i = Math.floor(c / 4);
  const k = c % 4;
  const l = (32 + 2 * e + 2 * i - h - k) % 7;
  const m = Math.floor((a + 11 * h + 22 * l) / 451);
  const month = Math.floor((h + l - 7 * m + 114) / 31); // 3 = Março, 4 = Abril
  const day = ((h + l - 7 * m + 114) % 31) + 1;
  return new Date(year, month - 1, day);
}

/**
 * Adiciona dias a uma data mantendo zeradas as horas
 */
export function addDays(date: Date, days: number): Date {
  const res = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  res.setDate(res.getDate() + days);
  return res;
}

/**
 * Formata data no formato universal ISO YYYY-MM-DD
 */
export function formatISODate(date: Date): string {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

/**
 * Retorna o 1º Domingo do Advento para um determinado ano civil
 * (O 4º domingo antes do Natal, sempre entre 27 de novembro e 3 de dezembro)
 */
export function getFirstSundayOfAdvent(year: number): Date {
  const christmas = new Date(year, 11, 25);
  const dayOfWeek = christmas.getDay(); // 0 = Domingo
  const fourthSundayDaysAgo = dayOfWeek === 0 ? 7 : dayOfWeek;
  const fourthSunday = addDays(christmas, -fourthSundayDaysAgo);
  return addDays(fourthSunday, -21);
}

/**
 * Determina os Ciclos Litúrgicos da Igreja para qualquer data:
 * - Ciclo Dominical: Ano A (São Mateus), Ano B (São Marcos), Ano C (São Lucas)
 * - Ciclo Ferial do Tempo Comum: Ano I (Ímpar) e Ano II (Par)
 */
export function getLiturgicalCycle(date: Date): {
  dominicalCycle: DominicalCycle;
  evangelist: string;
  ferialCycle: FerialCycle;
  liturgicalYear: number;
} {
  const year = date.getFullYear();
  const advent1 = getFirstSundayOfAdvent(year);
  
  // A virada do Ano Litúrgico ocorre sempre no 1º Domingo do Advento!
  const liturgicalYear = date >= advent1 ? year + 1 : year;
  
  // Fórmula católica romana universal:
  // (liturgicalYear % 3):
  // Resto 1 = Ano A (Mateus)
  // Resto 2 = Ano B (Marcos)
  // Resto 0 = Ano C (Lucas)
  const mod = liturgicalYear % 3;
  let dominicalCycle: DominicalCycle = 'Ano A';
  let evangelist = 'São Mateus';

  if (mod === 1) {
    dominicalCycle = 'Ano A';
    evangelist = 'São Mateus';
  } else if (mod === 2) {
    dominicalCycle = 'Ano B';
    evangelist = 'São Marcos';
  } else {
    dominicalCycle = 'Ano C';
    evangelist = 'São Lucas';
  }

  const ferialCycle: FerialCycle = liturgicalYear % 2 === 0 ? 'Ano II' : 'Ano I';

  return { dominicalCycle, evangelist, ferialCycle, liturgicalYear };
}

/**
 * Catálogo canônico de Celebrações Móveis ligadas ao ciclo pascal e encerramento litúrgico
 */
export const MOVABLE_FEASTS_DEFINITIONS: MovableFeastDefinition[] = [
  {
    id: 'ash-wednesday',
    name: 'Quarta-feira de Cinzas',
    daysFromEaster: -46,
    color: 'Roxo',
    category: 'Feast',
    imageUrl: 'https://images.unsplash.com/photo-1544427920-c49ccfb85579?q=80&w=600&auto=format&fit=crop',
    story: '<h4>Início da Quaresma - Tempo de Conversão</h4><p>A Quarta-feira de Cinzas marca a abertura oficial do sagrado tempo da Quaresma na Igreja Católica, um período de 40 dias de retiro, oração, penitência e caridade que nos prepara espiritualmente para a celebração da Ressurreição de Jesus Cristo na Páscoa.</p><p class="mt-4">Durante a celebração litúrgica, o sacerdote impõe sobre as frontes dos fiéis as cinzas abençoadas — obtidas da queima dos ramos do Domingo de Ramos do ano anterior —, pronunciando a advertência bíblica: <em>"Lembra-te que és pó e ao pó hás de voltar"</em> (Gn 3,19) ou <em>"Convertei-vos e crede no Evangelho"</em> (Mc 1,15). Este gesto solene nos recorda a fragilidade da vida humana e a necessidade premente de conversão sincera e retorno a Deus.</p><p class="mt-4">Neste dia, os fiéis católicos guardam jejum e abstinência de carne, fortalecendo a alma contra as tentações do egoísmo e do pecado, e abrindo o coração para a escuta fiel da Palavra de Deus e o amor ao próximo.</p><p class="mt-4"><b>Oração:</b> Senhor nosso Deus, concedei-nos iniciar com santo jejum e penitência o caminho da Quaresma, para que, fortalecidos contra o espírito do mal, possamos perseverar na oração e nas obras de caridade até o dia triunfal da Páscoa. Por nosso Senhor Jesus Cristo. Amém.</p>'
  },
  {
    id: 'laetare-sunday',
    name: 'Domingo Laetare',
    daysFromEaster: -21, // 4º Domingo da Quaresma
    color: 'Rosa',
    category: 'Solemnity',
    imageUrl: 'https://i.pinimg.com/736x/f7/e3/76/f7e3763772dc14fb2e28cdc822bf7290.jpg',
    story: '<h4>O Domingo da Alegria na Quaresma</h4><p>O Domingo Laetare é o quarto domingo do tempo quaresmal. Seu nome tem origem nas primeiras palavras do cântico de entrada da liturgia: <em>"Laetare, Ierusalem!"</em> (Alegra-te, Jerusalém!), retiradas do profeta Isaías (Is 66,10).</p><p class="mt-4">No meio do austero itinerário penitencial da Quaresma, a Igreja convida seus filhos a vislumbrarem com alegria antecipada a glória luminosa da Páscoa que se aproxima. Para expressar este alívio e júbilo espiritual, os sacerdotes podem usar vestes litúrgicas na cor rosa, e o altar pode ser ornado com flores e acompanhado por sons suaves de instrumentos musicais.</p><p class="mt-4">É um dia de renovação da esperança, ensinando que toda penitência cristã tem como meta a vitória eterna da vida sobre a morte.</p><p class="mt-4"><b>Oração:</b> Ó Deus, que por vosso Filho realizais de modo admirável a reconciliação do gênero humano, concedei ao vosso povo acorrer com pronta devoção e fé viva ao encontro das solenidades pascais. Por Cristo, nosso Senhor. Amém.</p>'
  },
  {
    id: 'palm-sunday',
    name: 'Domingo de Ramos da Paixão do Senhor',
    daysFromEaster: -7,
    color: 'Vermelho',
    category: 'Solemnity',
    imageUrl: 'https://i.pinimg.com/736x/b0/e8/86/b0e886335aff1d43f975d63787e81682.jpg',
    story: '<h4>Entrada Triunfal de Jesus em Jerusalém</h4><p>O Domingo de Ramos inaugura a Semana Santa, a mais sagrada e solene de todo o ano litúrgico católico. Neste dia, a Igreja comemora a entrada triunfal de Nosso Senhor Jesus Cristo em Jerusalém, montado num jumentinho como profetizado por Zacarias, aclamado por uma multidão entusiasmada que estendia seus mantos e agitava ramos de oliveira e palmeiras, bradando: <em>"Hosana ao Filho de Davi! Bendito o que vem em nome do Senhor!"</em> (Mt 21,9).</p><p class="mt-4">A liturgia deste dia possui uma profunda dualidade: inicia-se com a alegre procissão dos ramos abençoados e culmina com a proclamação comovente da Paixão e Morte do Senhor. Essa transição ensina ao cristão que a verdadeira realeza de Cristo não é de conquistas políticas ou temporais, mas se revela no sacrifício supremo da Cruz para a redenção de toda a humanidade.</p><p class="mt-4"><b>Oração:</b> Deus eterno e todo-poderoso, para dar aos homens um exemplo de humildade, quisestes que o nosso Salvador tomasse a condição humana e suportasse a Cruz. Concedei-nos acolher o ensinamento da sua Paixão e participar um dia da sua Ressurreição. Amém.</p>'
  },
  {
    id: 'holy-thursday',
    name: 'Quinta-feira Santa - Ceia do Senhor',
    daysFromEaster: -3,
    color: 'Branco',
    category: 'Solemnity',
    imageUrl: 'https://images.unsplash.com/photo-1543807535-eceef0bc6599?q=80&w=600&auto=format&fit=crop',
    story: '<h4>Instituição da Eucaristia e do Sacerdócio</h4><p>A Quinta-feira Santa abre o Tríduo Pascal, o coração da fé católica. Na Missa vespertina da Ceia do Senhor, a Igreja celebra três mistérios sublimes confiados por Jesus antes de sua Paixão: a instituição da Sagrada Eucaristia, a instituição do Sacerdócio ministerial e o mandamento novo do amor fraterno, simbolizado no rito comovente do Lava-pés.</p><p class="mt-4">Reunido com seus doze apóstolos no Cenáculo, Jesus tomou o pão e o vinho, dando graças, e disse: <em>"Isto é o meu Corpo... Este é o cálice do meu Sangue. Fazei isto em memória de mim."</em> Em seguida, cingiu-se com uma toalha e lavou os pés de seus discípulos, ensinando que a autoridade no Reino de Deus é serviço humilde e desinteressado aos irmãos.</p><p class="mt-4"><b>Oração:</b> Ó Deus, que nos reunistes para a santa ceia em que vosso Filho único, ao entregar-se à morte, confiou à sua Igreja um sacrifício novo e eterno, fazei que alcancemos neste banquete a plenitude da caridade e da vida. Por Cristo, nosso Senhor. Amém.</p>'
  },
  {
    id: 'good-friday',
    name: 'Sexta-feira da Paixão do Senhor',
    daysFromEaster: -2,
    color: 'Vermelho',
    category: 'Solemnity',
    imageUrl: 'https://i.pinimg.com/1200x/6d/cd/06/6dcd0618583d58004c4528ef4887fc98.jpg',
    story: '<h4>O Sacrifício Supremo de Cristo na Cruz</h4><p>A Sexta-feira Santa é o único dia do ano litúrgico em que a Igreja Católica em todo o mundo não celebra o sacrifício da Santa Missa. É um dia de silêncio contemplativo, oração, jejum e abstinência profunda, no qual veneramos a Paixão e Morte de Nosso Senhor Jesus Cristo no alto do Calvário.</p><p class="mt-4">A Ação Litúrgica da tarde comemora a entrega voluntária do Cordeiro de Deus pelos nossos pecados. Estrutura-se na Liturgia da Palavra (com a proclamação da Paixão segundo São João), nas Grandes Preces Universais por toda a humanidade, na Solene Adoração da Santa Cruz e na Sagrada Comunhão das hóstias consagradas na véspera.</p><p class="mt-4">Ao contemplar a Cruz erguida, não vemos uma derrota, mas o trono do amor vitorioso de Deus, onde a misericórdia venceu a condenação e abriu as portas do Paraíso.</p><p class="mt-4"><b>Oração:</b> Olhai com bondade, Senhor, para esta vossa família, pela qual nosso Senhor Jesus Cristo não hesitou em entregar-se às mãos dos malfeitores e sofrer o suplício da Cruz. Ele que convosco vive e reina na unidade do Espírito Santo. Amém.</p>'
  },
  {
    id: 'holy-saturday',
    name: 'Sábado Santo - Vigília Pascal',
    daysFromEaster: -1,
    color: 'Branco',
    category: 'Solemnity',
    imageUrl: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?q=80&w=600&auto=format&fit=crop',
    story: '<h4>O Grande Silêncio e a Mãe de Todas as Vigílias</h4><p>O Sábado Santo é o dia do grande repouso de Cristo no sepulcro. A Igreja permanece em silêncio e recolhimento ao lado do túmulo do Senhor, meditando na sua descida à mansão dos mortos para libertar os justos da Antiga Aliança que aguardavam a redenção.</p><p class="mt-4">Ao cair da noite, irrompe a Solene Vigília Pascal, chamada por Santo Agostinho de "a mãe de todas as vigílias". Inicia-se com a Bênção do Fogo Novo e o Círio Pascal, proclamando que a Luz de Cristo dissipa as trevas do mundo; percorre a história da salvação através das leituras bíblicas; celebra os sacramentos do Batismo e Crisma; e culmina no primeiro e jubiloso canto do Aleluia pascal na Eucaristia.</p><p class="mt-4"><b>Oração:</b> Ó Deus, que iluminastes esta noite santíssima com a glória da ressurreição do Senhor, avivai na vossa Igreja o espírito filial, para que, renovados no corpo e na alma, nos consagremos inteiramente ao vosso serviço. Por Cristo, nosso Senhor. Amém.</p>'
  },
  {
    id: 'easter-sunday',
    name: 'Domingo da Páscoa da Ressurreição do Senhor',
    daysFromEaster: 0,
    color: 'Branco',
    category: 'Solemnity',
    imageUrl: 'https://images.unsplash.com/photo-1520697830682-bbb6e85e2b0b?q=80&w=600&auto=format&fit=crop',
    story: '<h4>Cristo Ressuscitou Verdadeiramente! Aleluia!</h4><p>A Solenidade da Páscoa da Ressurreição de Jesus Cristo é a festa suprema, o cume e o fundamento de toda a fé cristã. Como proclama São Paulo: <em>"Se Cristo não ressuscitou, vã é a nossa fé"</em> (1Cor 15,14). Na manhã do terceiro dia, o túmulo vazio testemunhou a derrota definitiva do pecado, do inferno e da morte pelo poder de Deus.</p><p class="mt-4">Jesus vive para sempre e caminha conosco. Sua vitória é a garantia da nossa própria ressurreição futura e a fonte inesgotável de esperança que renova a criação inteira. Durante os cinquenta dias do Tempo Pascal, a Igreja ecoa incessantemente o cântico festivo do <em>Aleluia</em>, celebrando a vida nova comunicada pelo Ressuscitado.</p><p class="mt-4"><b>Oração:</b> Ó Deus, que pelo vosso Filho Unigênito vencestes a morte e nos abristes as portas da eternidade, concedei aos que celebramos a solenidade da sua Ressurreição que, renovados pelo vosso Espírito, ressuscitemos na luz da vida. Por Cristo, nosso Senhor. Amém.</p>'
  },
  {
    id: 'divine-mercy-sunday',
    name: 'Domingo da Divina Misericórdia',
    daysFromEaster: 7, // 2º Domingo da Páscoa
    color: 'Branco',
    category: 'Solemnity',
    imageUrl: 'https://images.unsplash.com/photo-1544427920-c49ccfb85579?q=80&w=600&auto=format&fit=crop',
    story: '<h4>A Festa do Amor Misericordioso de Jesus</h4><p>O Domingo da Divina Misericórdia foi instituído no ano 2000 por São João Paulo II no segundo domingo da Páscoa (oitava da Páscoa), cumprindo o pedido expressado pelo próprio Jesus a Santa Faustina Kowalska nas revelações da Polônia.</p><p class="mt-4">Neste dia bendito, Jesus prometeu derramar um oceano imenso de graças sobre as almas que se aproximarem da fonte da sua misericórdia, concedendo o perdão total dos pecados e das penas temporais aos que confessarem e comungarem com fé. A imagem com os raios pálido e vermelho saindo do Coração de Jesus simboliza a água do Batismo e o sangue redentor da Eucaristia.</p><p class="mt-4"><b>Oração:</b> Deus de infinita misericórdia, que reacendeis a fé do vosso povo na celebração anual das festas pascais, aumentai em nós a vossa graça, para que compreendamos melhor que Batismo nos lavou, que Espírito nos fez renascer e que Sangue nos resgatou. Jesus, eu confio em Vós! Amém.</p>'
  },
  {
    id: 'ascension-of-the-lord',
    name: 'Solenidade da Ascensão do Senhor',
    daysFromEaster: 42, // No Brasil, transferida para o 7º Domingo da Páscoa
    color: 'Branco',
    category: 'Solemnity',
    imageUrl: 'https://images.unsplash.com/photo-1508672019048-805b876b67e2?q=80&w=600&auto=format&fit=crop',
    story: '<h4>Jesus Sobe aos Céus e Envia os Discípulos em Missão</h4><p>Quarenta dias após ressuscitar, Jesus reuniu seus discípulos no Monte das Oliveiras e, abençoando-os, elevou-se ao Céu diante dos seus olhos, sentando-se à direita do Pai Todo-Poderoso.</p><p class="mt-4">A Ascensão não significa o afastamento de Jesus da humanidade, mas a glorificação definitiva da nossa própria carne humana no Céu e o início da missão universal da Igreja. Jesus deu aos apóstolos o mandato irrevogável: <em>"Ide por todo o mundo e pregai o Evangelho a toda criatura"</em>, prometendo: <em>"Eis que estou convosco todos os dias, até o fim dos tempos"</em> (Mt 28,20).</p><p class="mt-4"><b>Oração:</b> Deus todo-poderoso, a ascensão do vosso Filho já é a nossa vitória. Concedei-nos exultar de alegria e em santa ação de graças, pois os membros do seu Corpo têm a esperança de segui-lo até onde ele, nossa Cabeça, nos precedeu na glória. Amém.</p>'
  },
  {
    id: 'pentecost-sunday',
    name: 'Solenidade de Pentecostes',
    daysFromEaster: 49, // 50 dias após a Páscoa
    color: 'Vermelho',
    category: 'Solemnity',
    imageUrl: 'https://images.unsplash.com/photo-1519817650390-64a93db51149?q=80&w=600&auto=format&fit=crop',
    story: '<h4>A Efusão do Espírito Santo sobre os Apóstolos e Maria</h4><p>Cinquenta dias após a Páscoa, conclui-se o ciclo pascal com a Solenidade de Pentecostes. Estando os apóstolos reunidos no Cenáculo em oração unânime com a Virgem Maria, cumpriu-se a promessa de Jesus: um ruído semelhante a um vento impetuoso encheu a casa e línguas como que de fogo pousaram sobre cada um deles.</p><p class="mt-4">Repletos do Espírito Santo, os apóstolos perderam todo o medo, abriram as portas e começaram a proclamar as maravilhas de Deus em todas as línguas aos povos reunidos em Jerusalém. Pentecostes é o nascimento público da Igreja missionária, animada pelos dons celestes para anunciar o amor de Cristo a todos os cantos da terra.</p><p class="mt-4"><b>Oração:</b> Ó Deus, que pelo mistério do Pentecostes santificais a vossa Igreja em todos os povos e nações, derramai por toda a extensão do mundo os dons do Espírito Santo e realizai agora no coração dos fiéis as maravilhas operadas no início da pregação evangélica. Por Cristo, nosso Senhor. Amém.</p>'
  },
  {
    id: 'trinity-sunday',
    name: 'Solenidade da Santíssima Trindade',
    daysFromEaster: 56, // Domingo após Pentecostes
    color: 'Branco',
    category: 'Solemnity',
    imageUrl: 'https://images.unsplash.com/photo-1544427920-c49ccfb85579?q=80&w=600&auto=format&fit=crop',
    story: '<h4>O Mistério Central da Fé: Pai, Filho e Espírito Santo</h4><p>No domingo seguinte a Pentecostes, a Igreja celebra a Solenidade da Santíssima Trindade, o mistério inefável de um só Deus em três Pessoas divinas: o Pai Criador, o Filho Redentor e o Espírito Santo Consolador.</p><p class="mt-4">Deus não é uma solidão distante, mas uma perfeita comunhão eterna de amor e vida. Fomos criados à imagem desta comunhão e batizados em seu Nome sagrado. Toda a oração cristã inicia-se e conclui-se sob a invocação trinitária: "Em nome do Pai e do Filho e do Espírito Santo".</p><p class="mt-4"><b>Oração:</b> Deus, nosso Pai, enviando ao mundo a Palavra da verdade e o Espírito da santidade, revelastes aos homens o vosso mistério admirável. Concedei-nos, na profissão da verdadeira fé, reconhecer a glória da Trindade eterna e adorar a vossa Unidade soberana. Amém.</p>'
  },
  {
    id: 'corpus-christi',
    name: 'Solenidade do Santíssimo Corpo e Sangue de Cristo (Corpus Christi)',
    daysFromEaster: 60, // Quinta-feira após a Trindade
    color: 'Branco',
    category: 'Solemnity',
    imageUrl: 'https://images.unsplash.com/photo-1543807535-eceef0bc6599?q=80&w=600&auto=format&fit=crop',
    story: '<h4>A Festa da Presença Real de Jesus na Eucaristia</h4><p>A Solenidade de Corpus Christi foi instituída pelo Papa Urbano IV em 1264, impulsionada pelas visões místicas de Santa Juliana de Cornillon na Bélgica e pelo célebre Milagre Eucarístico de Bolsena, na Itália.</p><p class="mt-4">Neste dia glorioso, a Igreja sai dos templos e leva Jesus Eucarístico em procissão pública pelas ruas decoradas com belos tapetes coloridos, abençoando as famílias, os lares, os enfermos e os trabalhadores. É uma profissão pública de amor e fé na presença real, substancial e viva de Jesus Cristo na Sagrada Hóstia Consagrada.</p><p class="mt-4"><b>Oração:</b> Senhor Jesus Cristo, que neste admirável sacramento nos deixastes o memorial da vossa paixão, concedei-nos venerar de tal modo os sagrados mistérios do vosso Corpo e do vosso Sangue, que sintamos sempre em nós os frutos da vossa redenção. Vós que sois Deus com o Pai, na unidade do Espírito Santo. Amém.</p>'
  },
  {
    id: 'sacred-heart',
    name: 'Solenidade do Sagrado Coração de Jesus',
    daysFromEaster: 68, // Sexta-feira após o 2º domingo após Pentecostes
    color: 'Branco',
    category: 'Solemnity',
    imageUrl: 'https://images.unsplash.com/photo-1520697830682-bbb6e85e2b0b?q=80&w=600&auto=format&fit=crop',
    story: '<h4>O Abismo Infinito de Amor por Toda a Humanidade</h4><p>Celebrada na sexta-feira seguinte à oitava de Corpus Christi, a Solenidade do Sagrado Coração de Jesus celebra a fonte inesgotável de misericórdia e amor divino revelada no Coração traspassado de Cristo na Cruz.</p><p class="mt-4">Promovida ardentemente por São João Eudes e pelas revelações de Nosso Senhor a Santa Margarida Maria Alacoque em Paray-le-Monial, na França, Jesus mostrou seu Coração cercado de espinhos e em chamas de amor, dizendo: <em>"Eis o Coração que tanto tem amado os homens e em troca recebe tanta ingratidão e frieza."</em> É um convite ardente à oração de reparação e consagração ao amor misericordioso de Deus.</p><p class="mt-4"><b>Oração:</b> Concedei, ó Deus todo-poderoso, que, alegrando-nos na solenidade do Coração do vosso amado Filho, meditemos as grandes maravilhas do seu amor por nós e possamos receber desta fonte divina uma torrente copiosa de graças celestiais. Por nosso Senhor Jesus Cristo. Amém.</p>'
  },
  {
    id: 'immaculate-heart',
    name: 'Memória do Imaculado Coração de Maria',
    daysFromEaster: 69, // Sábado seguinte ao Sagrado Coração
    color: 'Branco',
    category: 'Memorial',
    imageUrl: 'https://images.unsplash.com/photo-1544427920-c49ccfb85579?q=80&w=600&auto=format&fit=crop',
    story: '<h4>O Coração Puro da Mãe Conduzindo ao Filho</h4><p>Celebrada imediatamente no dia seguinte ao Sagrado Coração de Jesus, a Memória do Imaculado Coração de Maria expressa a união indissolúvel entre a Mãe e o Filho na história da salvação.</p><p class="mt-4">O Coração de Maria guardava e meditava todas as palavras e gestos de Jesus com fidelidade exemplar. Em Fátima, Nossa Senhora revelou aos pastorinhos: <em>"O meu Imaculado Coração será o teu refúgio e o caminho que te conduzirá até Deus."</em> É um modelo luminoso de oração, pureza interior, obediência à vontade do Pai e compaixão pelos que sofrem.</p><p class="mt-4"><b>Oração:</b> Ó Deus, que preparastes no Imaculado Coração da Virgem Maria uma digna morada para o vosso Espírito Santo, concedei-nos, por sua maternal intercessão, a graça de um coração puro e obediente ao vosso amor. Por Cristo, nosso Senhor. Amém.</p>'
  },
  {
    id: 'christ-the-king',
    name: 'Solenidade de Nosso Senhor Jesus Cristo, Rei do Universo',
    daysFromEaster: 9999, // Calculado especialmente via getFirstSundayOfAdvent
    color: 'Branco',
    category: 'Solemnity',
    imageUrl: 'https://images.unsplash.com/photo-1544427920-c49ccfb85579?q=80&w=600&auto=format&fit=crop',
    story: '<h4>A Majestade Universal e Amorosa do Bom Pastor</h4><p>A Solenidade de Cristo Rei, instituída pelo Papa Pio XI em 1925 através da encíclica <em>Quas Primas</em>, marca o glorioso encerramento do ano litúrgico católico. No último domingo do Tempo Comum (34º Domingo), a Igreja proclama a soberania universal e eterna de Jesus Cristo sobre toda a criação, a história humana e os corações.</p><p class="mt-4">O Reino de Jesus não é construído sobre o poder político, armas ou ambições temporais, mas se manifesta no amor desinteressado, na verdade e na entrega suprema da vida na Cruz. Como nos lembra o Prefácio litúrgico, seu reino é um <em>"reino de verdade e de vida, reino de santidade e de graça, reino de justiça, de amor e de paz"</em>.</p><p class="mt-4">Ao coroar o ano da Igreja celebrando a Cristo Rei, os fiéis renovam o compromisso de permitir que a graça do Evangelho reine em suas famílias, em suas ações profissionais e na sociedade inteira.</p><p class="mt-4"><b>Oração:</b> Deus eterno e todo-poderoso, que quisestes fundar todas as coisas no vosso Filho amado, Rei do universo, fazei que toda a criação, libertada da escravidão do pecado, sirva à vossa majestade e vos glorifique eternamente. Por nosso Senhor Jesus Cristo. Amém.</p>'
  }
];

// Nomes canônicos e padrões de festas móveis para evitar resíduos fixos fora de época
const MOVABLE_FEAST_NAMES_LOWER = [
  'quarta-feira de cinzas',
  'domingo laetare',
  'domingo de ramos',
  'quinta-feira santa',
  'sexta-feira da paixão',
  'sexta-feira santa',
  'sábado santo',
  'domingo da páscoa',
  'divina misericórdia',
  'ascensão do senhor',
  'pentecostes',
  'santíssima trindade',
  'corpus christi',
  'sagrado coração de jesus',
  'imaculado coração de maria',
  'cristo rei'
];

function isLegacyMovableFeastName(name: string): boolean {
  const lower = name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  return MOVABLE_FEAST_NAMES_LOWER.some(pattern => {
    const patternNorm = pattern.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    return lower.includes(patternNorm);
  });
}

/**
 * Busca e retorna se determinada data civil coincide com uma comemoração móvel
 */
export function getMovableFeastForDate(date: Date): SaintStory | null {
  const year = date.getFullYear();
  const easter = getEasterDate(year);
  
  // Normaliza para meia-noite
  const targetMidnight = new Date(date.getFullYear(), date.getMonth(), date.getDate()).getTime();
  const easterMidnight = new Date(easter.getFullYear(), easter.getMonth(), easter.getDate()).getTime();
  
  const diffDays = Math.round((targetMidnight - easterMidnight) / (1000 * 60 * 60 * 24));
  
  // 1. Verifica festas pascais (relativas à Páscoa)
  const feast = MOVABLE_FEASTS_DEFINITIONS.find(f => f.daysFromEaster === diffDays);
  if (feast) {
    return {
      name: feast.name,
      imageUrl: feast.imageUrl,
      story: feast.story
    };
  }

  // 2. Verifica a Solenidade de Cristo Rei (domingo que precede o 1º Domingo do Advento)
  const advent1 = getFirstSundayOfAdvent(year);
  const cristoReiDate = addDays(advent1, -7);
  if (
    date.getFullYear() === cristoReiDate.getFullYear() &&
    date.getMonth() === cristoReiDate.getMonth() &&
    date.getDate() === cristoReiDate.getDate()
  ) {
    const cristoFeast = MOVABLE_FEASTS_DEFINITIONS.find(f => f.id === 'christ-the-king');
    if (cristoFeast) {
      return {
        name: cristoFeast.name,
        imageUrl: cristoFeast.imageUrl,
        story: cristoFeast.story
      };
    }
  }
  
  return null;
}

/**
 * REGRA DE OURO LITÚRGICA:
 * A comemoração da data móvel SEMPRE tem precedência sobre o santo fixo do dia,
 * aparecendo em PRIMEIRO LUGAR (índice 0) e com destaque principal.
 * Os santos fixos do Martirológio Romano passam para a segunda posição (índice 1+).
 * Caso não haja data móvel naquele dia, exibe os santos fixos normalmente,
 * eliminando resíduos de datas móveis de anos anteriores que não correspondam à data atual.
 */
export function resolveSaintsWithPriority(baseSaints: SaintStory[], date: Date): SaintStory[] {
  const movable = getMovableFeastForDate(date);

  // Remove qualquer celebração móvel fora de época do array base (resíduos estáticos de 2026)
  const cleanedBase = baseSaints.filter(s => {
    // Se não for nome de celebração móvel, mantém sempre (é santo fixo)
    if (!isLegacyMovableFeastName(s.name)) return true;
    
    // Se for nome de celebração móvel, só mantém se coincidir exatamente com a celebração móvel ativa de hoje
    if (movable && s.name.toLowerCase() === movable.name.toLowerCase()) {
      return true;
    }
    return false;
  });

  // Se houver comemoração móvel para a data:
  if (movable) {
    // Garante que o santo móvel fique no índice 0
    const withoutMovable = cleanedBase.filter(s => s.name.toLowerCase() !== movable.name.toLowerCase());
    return [movable, ...withoutMovable];
  }

  // Se não houver data móvel hoje:
  // Se após a limpeza restaram santos fixos, retorna-os
  if (cleanedBase.length > 0) {
    return cleanedBase;
  }

  // Fallback seguro se o array base só continha a celebração antiga (antes de adicionar o fixo)
  return baseSaints;
}

/**
 * Retorna dados litúrgicos resilientes para qualquer ano (presente, passado ou futuro)
 * Se não houver registro manual estático em liturgical-calendar, deriva dinamicamente!
 */
export function getDynamicLiturgicalDay(date: Date): LiturgicalDay {
  const iso = formatISODate(date);
  const staticFound = liturgicalCalendar.find(d => d.date === iso);
  if (staticFound) {
    return staticFound;
  }

  // Derivação litúrgica em tempo real
  const year = date.getFullYear();
  const monthNames = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
  const monthName = monthNames[date.getMonth()];
  const day = date.getDate();

  const easter = getEasterDate(year);
  const targetTime = new Date(date.getFullYear(), date.getMonth(), date.getDate()).getTime();
  const easterTime = new Date(easter.getFullYear(), easter.getMonth(), easter.getDate()).getTime();
  const diffFromEaster = Math.round((targetTime - easterTime) / (1000 * 60 * 60 * 24));
  
  const advent1 = getFirstSundayOfAdvent(year);
  const christmas = new Date(year, 11, 25);
  const cycles = getLiturgicalCycle(date);

  let season: LiturgicalSeason = 'Ordinary Time';
  let color: LiturgicalColor = 'Verde';
  let desc = `Tempo Comum • ${cycles.dominicalCycle} (${cycles.evangelist}) • ${cycles.ferialCycle}`;

  // Quaresma: Cinzas (-46) até Quinta-feira Santa (-3)
  if (diffFromEaster >= -46 && diffFromEaster < -3) {
    season = 'Lent';
    color = diffFromEaster === -21 ? 'Rosa' : 'Roxo';
    desc = `Tempo da Quaresma • ${cycles.dominicalCycle} (${cycles.evangelist})`;
  } 
  // Tríduo Pascal (-3 até 0)
  else if (diffFromEaster >= -3 && diffFromEaster < 0) {
    season = 'Easter';
    color = diffFromEaster === -2 ? 'Vermelho' : 'Branco';
    desc = `Tríduo Pascal da Paixão e Morte do Senhor`;
  }
  // Tempo Pascal (0 até +49)
  else if (diffFromEaster >= 0 && diffFromEaster <= 49) {
    season = 'Easter';
    color = diffFromEaster === 49 ? 'Vermelho' : 'Branco';
    desc = `Tempo da Páscoa • ${cycles.dominicalCycle} (${cycles.evangelist})`;
  }
  // Advento (de advent1 até 24/12)
  else if (date >= advent1 && date < christmas) {
    season = 'Advent';
    color = 'Roxo';
    desc = `Tempo do Advento • ${cycles.dominicalCycle} (${cycles.evangelist})`;
  }
  // Natal (de 25/12 até ~11 de janeiro)
  else if (date >= christmas || (date.getMonth() === 0 && date.getDate() <= 12)) {
    season = 'Christmas';
    color = 'Branco';
    desc = `Tempo do Natal do Senhor • ${cycles.dominicalCycle}`;
  }

  // Verifica se há festa móvel com cor especial
  const movable = getMovableFeastForDate(date);
  if (movable) {
    const def = MOVABLE_FEASTS_DEFINITIONS.find(f => f.name === movable.name);
    if (def) {
      color = def.color;
      desc = `${def.name} • ${desc}`;
    }
  }

  return {
    date: iso,
    day,
    month: monthName,
    season,
    color,
    description: desc,
    readings: {
      firstReading: 'Leituras do Lecionário ' + cycles.ferialCycle,
      psalm: 'Salmo Responsorial',
      gospel: `Evangelho segundo ${cycles.evangelist}`
    }
  };
}
