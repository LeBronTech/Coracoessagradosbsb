
export type NovenaDay = {
  day: string;
  title: string;
  content: string;
};

export type Novena = {
  saintName: string;
  novenaTitle: string;
  description: string;
  days: NovenaDay[];
  initialPrayer?: string;
  finalPrayer?: string;
  image?: string;
};

export type Saint = {
  id: string;
  name: string;
  imageUrl: string;
  month: string;
  startDate: string;
  endDate: string;
  feastDay: string;
  isMartyr?: boolean;
};

export type SaintStory = {
  name: string;
  imageUrl: string;
  story: string;
  isMartyr?: boolean;
};

export type SaintOfTheDayData = {
  day: number;
  month: string;
  saints: SaintStory[];
};


export const novenaData: Record<string, Novena> = {
  sao_jose: {
    saintName: "São José",
    novenaTitle: "Novena a São José",
    description: "Esta é uma novena tradicional em honra a São José, pai virginal de Nosso Senhor. A oração pode ser feita a qualquer tempo do ano, mas é especialmente recomendada em preparação para as suas festas.",
    initialPrayer: `<p>Não me lembro de até hoje lhe ter pedido alguma coisa que não me tenha concedido... Parece-me que Deus concede aos outros santos a graça de nos auxiliar nesta ou naquela necessidade, mas sei por experiência que São José nos socorre em todas, como se Nosso Senhor quisesse fazer-nos compreender que, assim como Ele lhe era submisso na terra, because estava no lugar de pai e como tal era chamado, também no céu não pode recusar-lhe nada. <em>(Santa Teresa d’Ávila)</em></p>`,
    finalPrayer: `<h4 class="section-title">Oração Final</h4><div class="prayer-block"><p>Glorioso São José, que fostes exaltado pelo Eterno Pai, obedecido pelo Verbo Encarnado, favorecido pelo Espírito Santo e amado pela Virgem Maria; louvo e bendigo a Santíssima Trindade pelos privilégios e méritos com que vos enriqueceu. Sois poderosíssimo e jamais se ouviu dizer que alguém tenha recorrido a vós e fosse por vós desamparado. Sois o consolador dos aflitos, o amparo dos míseros e o advogado dos pecadores. Acolhei, pois, com bondade paternal a quem vos invoca com filial confiança e alcançai-me as graças que vos peço nesta novena. Eu vos escolho por meu especial protetor. Sede, depois de Jesus e Maria, minha consolação nesta terra, meu refúgio nas desgraças, meu guia nas incertezas, meu conforto nas tribulações, meu pai solícito em todas as necessidades. Obtende-me, finalmente, como coroa dos vossos favores, uma boa e santa morte na graça de Nosso Senhor. Amém.</p></div>`,
    days: [
      {
        day: 'Primeiro Dia',
        title: 'São José, Pai Nutrício de Jesus',
        content: `<div class="day-specific-content"><p>Amabilíssimo São José, que tivestes a honra de alimentar, educar e abraçar o Messias, a quem tantos profetas e reis desejaram ver e não viram, obtende-me, com o perdão das minhas culpas, a graça da oração humilde e confiante que tudo alcança de Deus. Acolhei com bondade paternal os pedidos que vos faço nesta novena e apresentai-os a Jesus, que se dignou obedecer-vos na terra. Amém.</p><p class="mt-4">V/. Rogai por nós, São José, pai nutrício de Jesus.<br/>R/. Para que sejamos dignos das promessas de Cristo.</p><p class="mt-4 font-semibold">Oremos: Ó Deus, que por uma inefável Providência Vos dignastes escolher o bem-aventurado São José para Esposo de vossa Mãe Santíssima, concedei-nos que aquele mesmo que na terra veneramos como protetor, mereçamos tê-lo no céu por nosso intercessor. Vós que viveis e reinais por todos os séculos dos séculos. Amém.</p></div>`
      },
      {
        day: 'Segundo Dia',
        title: 'São José, Esposo da Virgem Maria',
        content: `<div class="day-specific-content"><p>São José, castíssimo Esposo da Mãe de Deus e guarda fiel da sua virgindade, obtende-me, por Maria, a pureza do corpo e da alma e a vitória em todas as tentações e dificuldades. Recomendo-vos também os esposos cristãos, para que, unidos com sincero amor e fortalecidos pela graça, amparem-se mutuamente nos sofrimentos e tribulações da vida. Amém.</p><p class="mt-4">V/. Rogai por nós, São José, esposo da Mãe de Deus.<br/>R/. Para que sejamos dignos das promessas de Cristo.</p><p class="mt-4 font-semibold">Oremos. Ó Deus, que por uma inefável Providência Vos dignastes escolher o bem-aventurado São José para Esposo de vossa Mãe Santíssima, concedei-nos que aquele mesmo que na terra veneramos como protetor, mereçamos tê-lo no céu por nosso intercessor. Vós que viveis e reinais por todos os séculos dos séculos. Amém.</p></div>`
      },
      {
        day: 'Terceiro Dia',
        title: 'São José, Chefe da Sagrada Família',
        content: `<div class="day-specific-content"><p>Glorioso São José, que gozastes durante tantos anos da presença e filial afeição de Jesus, a quem tivestes a dita de alimentar e vestir, juntamente com vossa Santíssima Esposa, eu vos suplico me alcanceis o dom inefável de sempre viver em união com Deus pela graça santificante. Obtende também para os pais cristãos a graça do fiel cumprimento de seus graves deveres de educadores e, aos filhos, o respeito e a obediência, segundo o exemplo do Menino Jesus. Amém.</p><p class="mt-4">V/. Rogai por nós, São José, chefe da Sagrada Família.<br/>R/. Para que sejamos dignos das promessas de Cristo.</p><p class="mt-4 font-semibold">Oremos. Ó Deus, que por uma inefável Providência Vos dignastes escolher o bem-aventurado São José para Esposo de vossa Mãe Santíssima, concedei-nos que aquele mesmo que na terra veneramos como protetor, mereçamos tê-lo no céu por nosso intercessor. Vós que viveis e reinais por todos os séculos dos séculos. Amém.</p></div>`
      },
      {
        day: 'Quarto Dia',
        title: 'São José, Exemplo de Fidelidade',
        content: `<div class="day-specific-content"><p>Fidelíssimo São José, que nos destes tão belo exemplo no fiel cumprimento de vossos deveres de protetor da Santíssima Virgem e de pai nutrício do Redentor, rogo-vos me obtenhais a graça de imitar o vosso exemplo na fidelidade a todos os deveres do meu estado de vida. Ajudai-me a ser fiel nas coisas pequenas, para o ser também nas grandes. Alcançai essa mesma graça para todos os que me são caros nesta vida, a fim de chegarmos a gozar no céu o prêmio prometido aos que forem fiéis até a morte. Amém.</p><p class="mt-4">V/. Rogai por nós, São José, exemplo de fidelidade.<br/>R/. Para que sejamos dignos das promessas de Cristo.</p><p class="mt-4 font-semibold">Oremos. Ó Deus, que por uma inefável Providência Vos dignastes escolher o bem-aventurado São José para Esposo de vossa Mãe Santíssima, concedei-nos que aquele mesmo que na terra veneramos como protetor, mereçamos tê-lo no céu por nosso intercessor. Vós que viveis e reinais por todos os séculos dos séculos. Amém.</p></div>`
      },
      {
        day: 'Quinto Dia',
        title: 'São José, Espelho de Paciência',
        content: `<div class="day-specific-content"><p>Bondoso São José, que suportastes com heróica paciência as provações e adversidades na viagem a Belém, na fuga para o Egito e durante a vida oculta em Nazaré e me destes o exemplo de admirável conformidade com a vontade de Deus, obtende-me a virtude da paciência nas dificuldades de cada dia. Alcançai também invencível paciência a todos os que suportam pesadas cruzes, a fim de que se unam sempre mais a Jesus, divino modelo de mansidão e paciência. Amém.</p><p class="mt_4">V/. Rogai por nós, São José, espelho de paciência.<br/>R/. Para que sejamos dignos das promessas de Cristo.</p><p class="mt-4 font-semibold">Oremos. Ó Deus, que por uma inefável Providência Vos dignastes escolher o bem-aventurado São José para Esposo de vossa Mãe Santíssima, concedei-nos que aquele mesmo que na terra veneramos como protetor, mereçamos tê-lo no céu por nosso intercessor. Vós que viveis e reinais por todos os séculos dos séculos. Amém.</p></div>`
      },
      {
        day: 'Sexto Dia',
        title: 'São José, Modelo dos Operários',
        content: `<div class="day-specific-content"><p>Humilde São José, que vivendo em pobreza dignificastes a vossa profissão pelo trabalho constante e vos sentistes feliz em servir a Jesus e a Maria com o fruto de vossos suores, alcançai-me amor ao trabalho, que me foi imposto como dever de estado, procurando cumprir nisto sempre a vontade de Deus. Protegei os lares dos trabalhadores do Brasil contra as influências nefastas dos inimigos de Cristo e da Santa Igreja. Obtende-lhes a graça de santificarem o seu trabalho, pela reta intenção, em tudo conformados com os desígnios da Divina Providência. Amém.</p><p class="mt-4">V/. Rogai por nós, São José, modelo dos operários.<br/>R/. Para que sejamos dignos das promessas de Cristo.</p><p class="mt-4 font-semibold">Oremos. Ó Deus, que por uma inefável Providência Vos dignastes escolher o bem-aventurado São José para Esposo de vossa Mãe Santíssima, concedei-nos que aquele mesmo que na terra veneramos como protetor, mereçamos tê-lo no céu por nosso intercessor. Vós que viveis e reinais por todos os séculos dos séculos. Amém.</p></div>`
      },
      {
        day: 'Sétimo Dia',
        title: 'São José, Protetor da Santa Igreja',
        content: `<div class="day-specific-content"><p>Glorioso Patriarca São José, Protetor e Padroeiro da Igreja Universal, obtende-me a graça de amar a Igreja como Mãe e de a honrar como verdadeiro discípulo de Cristo. Rogo-vos que veleis sobre o seu Corpo Místico, como outrora velastes sobre Jesus e Maria. Protegei o Santo Padre e os Bispos, os Sacerdotes e os Religiosos. Alcançai-lhes santidade de vida e eficácia no apostolado. Guardai a inocência da infância, a castidade da juventude, a honestidade do lar, a ordem e a paz da sociedade. Amém.</p><p class="mt-4">V/. Rogai por nós, São José, protetor da Santa Igreja.<br/>R/. Para que sejamos dignos das promessas de Cristo.</p><p class="mt-4 font-semibold">Oremos. Ó Deus, que por uma inefável Providência Vos dignastes escolher o bem-aventurado São José para Esposo de vossa Mãe Santíssima, concedei-nos que aquele mesmo que na terra veneramos como protetor, mereçamos tê-lo no céu por nosso intercessor. Vós que viveis e reinais por todos os séculos dos séculos. Amém.</p></div>`
      },
      {
        day: 'Oitavo Dia',
        title: 'São José, Consolo dos Enfermos',
        content: `<div class="day-specific-content"><p>Compassivo São José, esperança dos doentes e necessitados, valei-me em todas as enfermidades e tribulações, alcançando-me plena conformidade com os admiráveis desígnios de Deus. Obtende-me também para mim e para todos pelos quais rezo nesta novena, a cura das enfermidades espirituais, que são as paixões desordenadas, fraquezas, faltas e pecados, e protegei-nos contra as tentações do inimigo da nossa salvação. Amém.</p><p class="mt-4">V/. Rogai por nós, São José, consolo dos enfermos.<br/>R/. Para que sejamos dignos das promessas de Cristo.</p><p class="mt-4 font-semibold">Oremos. Ó Deus, que por uma inefável Providência Vos dignastes escolher o bem-aventurado São José para Esposo de vossa Mãe Santíssima, concedei-nos que aquele mesmo que na terra veneramos como protetor, mereçamos tê-lo no céu por nosso intercessor. Vós que viveis e reinais por todos os séculos dos séculos. Amém.</p></div>`
      },
      {
        day: 'Nono Dia',
        title: 'São José, Padroeiro dos Moribundos',
        content: `<div class="day-specific-content"><p>Ditoso São José, que morrendo nos braços de Jesus e Maria, partistes deste mundo ornado de virtudes e enriquecido de méritos, assisti-me na hora suprema e decisiva da minha vida contra os ataques do poder infernal. Obtende-me a graça de morrer confortado com os santos Sacramentos, necessários para a minha salvação. Tende compaixão de todos os agonizantes, alcançando-lhes a graça da salvação por intermédio de Maria, vossa Santíssima Esposa. Amém.</p><p class="mt-4">V/. Rogai por nós, São José, padroeiro dos moribundos.<br/>R/. Para que sejamos dignos das promessas de Cristo.</p><p class="mt-4 font-semibold">Oremos. Ó Deus, que por uma inefável Providência Vos dignastes escolher o bem-aventurado São José para Esposo de vossa Mãe Santíssima, concedei-nos que aquele mesmo que na terra veneramos como protetor, mereçamos tê-lo no céu por nosso intercessor. Vós que viveis e reinais por todos os séculos dos séculos. Amém.</p></div>`
      }
    ]
  },
  sao_jose_operario: {
    saintName: "São José Operário",
    novenaTitle: "Novena a São José Operário",
    description: "Esta é uma novena tradicional em honra a São José, pai virginal de Nosso Senhor. A oração pode ser feita a qualquer tempo do ano, mas é especialmente recomendada do dia 22 ao 30 de abril, véspera da festa de São José Operário.",
    initialPrayer: `<p>Não me lembro de até hoje lhe ter pedido alguma coisa que não me tenha concedido, nem posso pensar sem admiração nas graças que Deus me tem concedido por sua intercessão e nos perigos de que me tem livrado, tanto para a alma como para o corpo. Parece-me que Deus concede aos outros santos a graça de nos auxiliar nesta ou naquela necessidade, mas sei por experiência que São José nos socorre em todas, como se Nosso Senhor quisesse fazer-nos compreender que, assim como Ele lhe era submisso na terra, because estava no lugar de pai e como tal era chamado, também no céu não pode recusar-lhe nada. <em>(Santa Teresa d’Ávila)</em></p>`,
    finalPrayer: `<h4 class="section-title">Oração Final</h4><div class="prayer-block"><p>Glorioso São José, que fostes exaltado pelo Eterno Pai, obedecido pelo Verbo Encarnado, favorecido pelo Espírito Santo e amado pela Virgem Maria; louvo e bendigo a Santíssima Trindade pelos privilégios e méritos com que vos enriqueceu. Sois poderosíssimo e jamais se ouviu dizer que alguém tenha recorrido a vós e fosse por vós desamparado. Sois o consolador dos aflitos, o amparo dos míseros e o advogado dos pecadores. Acolhei, pois, com bondade paternal a quem vos invoca com filial confiança e alcançai-me as graças que vos peço nesta novena. Eu vos escolho por meu especial protetor. Sede, depois de Jesus e Maria, minha consolação nesta terra, meu refúgio nas desgraças, meu guia nas incertezas, meu conforto nas tribulações, meu pai solícito em todas as necessidades. Obtende-me, finalmente, como coroa dos vossos favores, uma boa e santa morte na graça de Nosso Senhor. Amém.</p></div>`,
    days: [
      {
        day: 'Primeiro Dia',
        title: 'São José, Pai Nutrício de Jesus',
        content: `<div class="day-specific-content"><p>Amabilíssimo São José, que tivestes a honra de alimentar, educar e abraçar o Messias, a quem tantos profetas e reis desejaram ver e não viram, obtende-me, com o perdão das minhas culpas, a graça da oração humilde e confiante que tudo alcança de Deus. Acolhei com bondade paternal os pedidos que vos faço nesta novena e apresentai-os a Jesus, que se dignou obedecer-vos na terra. Amém.</p><p class="mt-4">V/. Rogai por nós, São José, pai nutrício de Jesus.<br/>R/. Para que sejamos dignos das promessas de Cristo.</p><p class="mt-4 font-semibold">Oremos: Ó Deus, que por uma inefável Providência Vos dignastes escolher o bem-aventurado São José para Esposo de vossa Mãe Santíssima, concedei-nos que aquele mesmo que na terra veneramos como protetor, mereçamos tê-lo no céu por nosso intercessor. Vós que viveis e reinais por todos os séculos dos séculos. Amém.</p></div>`
      },
      {
        day: 'Segundo Dia',
        title: 'São José, Esposo da Virgem Maria',
        content: `<div class="day-specific-content"><p>São José, castíssimo Esposo da Mãe de Deus e guarda fiel da sua virgindade, obtende-me, por Maria, a pureza do corpo e da alma e a vitória em todas as tentações e dificuldades. Recomendo-vos também os esposos cristãos, para que, unidos com sincero amor e fortalecidos pela graça, amparem-se mutuamente nos sofrimentos e tribulações da vida. Amém.</p><p class="mt-4">V/. Rogai por nós, São José, esposo da Mãe de Deus.<br/>R/. Para que sejamos dignos das promessas de Cristo.</p><p class="mt-4 font-semibold">Oremos. Ó Deus, que por uma inefável Providência Vos dignastes escolher o bem-aventurado São José para Esposo de vossa Mãe Santíssima, concedei-nos que aquele mesmo que na terra veneramos como protetor, mereçamos tê-lo no céu por nosso intercessor. Vós que viveis e reinais por todos os séculos dos séculos. Amém.</p></div>`
      },
      {
        day: 'Terceiro Dia',
        title: 'São José, Chefe da Sagrada Família',
        content: `<div class="day-specific-content"><p>Glorioso São José, que gozastes durante tantos anos da presença e filial afeição de Jesus, a quem tivestes a dita de alimentar e vestir, juntamente com vossa Santíssima Esposa, eu vos suplico me alcanceis o dom inefável de sempre viver em união com Deus pela graça santificante. Obtende também para os pais cristãos a graça do fiel cumprimento de seus graves deveres de educadores e, aos filhos, o respeito e a obediência, segundo o exemplo do Menino Jesus. Amém.</p><p class="mt-4">V/. Rogai por nós, São José, chefe da Sagrada Família.<br/>R/. Para que sejamos dignos das promessas de Cristo.</p><p class="mt-4 font-semibold">Oremos. Ó Deus, que por uma inefável Providência Vos dignastes escolher o bem-aventurado São José para Esposo de vossa Mãe Santíssima, concedei-nos que aquele mesmo que na terra veneramos como protetor, mereçamos tê-lo no céu por nosso intercessor. Vós que viveis e reinais por todos os séculos dos séculos. Amém.</p></div>`
      },
      {
        day: 'Quarto Dia',
        title: 'São José, Exemplo de Fidelidade',
        content: `<div class="day-specific-content"><p>Fidelíssimo São José, que nos destes tão belo exemplo no fiel cumprimento de vossos deveres de protetor da Santíssima Virgem e de pai nutrício do Redentor, rogo-vos me obtenhais a graça de imitar o vosso exemplo na fidelidade a todos os deveres do meu estado de vida. Ajudai-me a ser fiel nas coisas pequenas, para o ser também nas grandes. Alcançai essa mesma graça para todos os que me são caros nesta vida, a fim de chegarmos a gozar no céu o prêmio prometido aos que forem fiéis até a morte. Amém.</p><p class="mt-4">V/. Rogai por nós, São José, exemplo de fidelidade.<br/>R/. Para que sejamos dignos das promessas de Cristo.</p><p class="mt-4 font-semibold">Oremos. Ó Deus, que por uma inefável Providência Vos dignastes escolher o bem-aventurado São José para Esposo de vossa Mãe Santíssima, concedei-nos que aquele mesmo que na terra veneramos como protetor, mereçamos tê-lo no céu por nosso intercessor. Vós que viveis e reinais por todos os séculos dos séculos. Amém.</p></div>`
      },
      {
        day: 'Quinto Dia',
        title: 'São José, Espelho de Paciência',
        content: `<div class="day-specific-content"><p>Bondoso São José, que suportastes com heróica paciência as provações e adversidades na viagem a Belém, na fuga para o Egito e durante a vida oculta em Nazaré e me destes o exemplo de admirável conformidade com a vontade de Deus, obtende-me a virtude da paciência nas dificuldades de cada dia. Alcançai também invencível paciência a todos os que suportam pesadas cruzes, a fim de que se unam sempre mais a Jesus, divino modelo de mansidão e paciência. Amém.</p><p class="mt_4">V/. Rogai por nós, São José, espelho de paciência.<br/>R/. Para que sejamos dignos das promessas de Cristo.</p><p class="mt-4 font-semibold">Oremos. Ó Deus, que por uma inefável Providência Vos dignastes escolher o bem-aventurado São José para Esposo de vossa Mãe Santíssima, concedei-nos que aquele mesmo que na terra veneramos como protetor, mereçamos tê-lo no céu por nosso intercessor. Vós que viveis e reinais por todos os séculos dos séculos. Amém.</p></div>`
      },
      {
        day: 'Sexto Dia',
        title: 'São José, Modelo dos Operários',
        content: `<div class="day-specific-content"><p>Humilde São José, que vivendo em pobreza dignificastes a vossa profissão pelo trabalho constante e vos sentistes feliz em servir a Jesus e a Maria com o fruto de vossos suores, alcançai-me amor ao trabalho, que me foi imposto como dever de estado, procurando cumprir nisto sempre a vontade de Deus. Protegei os lares dos trabalhadores do Brasil contra as influências nefastas dos inimigos de Cristo e da Santa Igreja. Obtende-lhes a graça de santificarem o seu trabalho, pela reta intenção, em tudo conformados com os desígnios da Divina Providência. Amém.</p><p class="mt-4">V/. Rogai por nós, São José, modelo dos operários.<br/>R/. Para que sejamos dignos das promessas de Cristo.</p><p class="mt-4 font-semibold">Oremos. Ó Deus, que por uma inefável Providência Vos dignastes escolher o bem-aventurado São José para Esposo de vossa Mãe Santíssima, concedei-nos que aquele mesmo que na terra veneramos como protetor, mereçamos tê-lo no céu por nosso intercessor. Vós que viveis e reinais por todos os séculos dos séculos. Amém.</p></div>`
      },
      {
        day: 'Sétimo Dia',
        title: 'São José, Protetor da Santa Igreja',
        content: `<div class="day-specific-content"><p>Glorioso Patriarca São José, Protetor e Padroeiro da Igreja Universal, obtende-me a graça de amar a Igreja como Mãe e de a honrar como verdadeiro discípulo de Cristo. Rogo-vos que veleis sobre o seu Corpo Místico, como outrora velastes sobre Jesus e Maria. Protegei o Santo Padre e os Bispos, os Sacerdotes e os Religiosos. Alcançai-lhes santidade de vida e eficácia no apostolado. Guardai a inocência da infância, a castidade da juventude, a honestidade do lar, a ordem e a paz da sociedade. Amém.</p><p class="mt-4">V/. Rogai por nós, São José, protetor da Santa Igreja.<br/>R/. Para que sejamos dignos das promessas de Cristo.</p><p class="mt-4 font-semibold">Oremos. Ó Deus, que por uma inefável Providência Vos dignastes escolher o bem-aventurado São José para Esposo de vossa Mãe Santíssima, concedei-nos que aquele mesmo que na terra veneramos como protetor, mereçamos tê-lo no céu por nosso intercessor. Vós que viveis e reinais por todos os séculos dos séculos. Amém.</p></div>`
      },
      {
        day: 'Oitavo Dia',
        title: 'São José, Consolo dos Enfermos',
        content: `<div class="day-specific-content"><p>Compassivo São José, esperança dos doentes e necessitados, valei-me em todas as enfermidades e tribulações, alcançando-me plena conformidade com os admiráveis desígnios de Deus. Obtende-me também para mim e para todos pelos quais rezo nesta novena, a cura das enfermidades espirituais, que são as paixões desordenadas, fraquezas, faltas e pecados, e protegei-nos contra as tentações do inimigo da nossa salvação. Amém.</p><p class="mt-4">V/. Rogai por nós, São José, consolo dos enfermos.<br/>R/. Para que sejamos dignos das promessas de Cristo.</p><p class="mt-4 font-semibold">Oremos. Ó Deus, que por uma inefável Providência Vos dignastes escolher o bem-aventurado São José para Esposo de vossa Mãe Santíssima, concedei-nos que aquele mesmo que na terra veneramos como protetor, mereçamos tê-lo no céu por nosso intercessor. Vós que viveis e reinais por todos os séculos dos séculos. Amém.</p></div>`
      },
      {
        day: 'Nono Dia',
        title: 'São José, Padroeiro dos Moribundos',
        content: `<div class="day-specific-content"><p>Ditoso São José, que morrendo nos braços de Jesus e Maria, partistes deste mundo ornado de virtudes e enriquecido de méritos, assisti-me na hora suprema e decisiva da minha vida contra os ataques do poder infernal. Obtende-me a graça de morrer confortado com os santos Sacramentos, necessários para a minha salvação. Tende compaixão de todos os agonizantes, alcançando-lhes a graça da salvação por intermédio de Maria, vossa Santíssima Esposa. Amém.</p><p class="mt_4">V/. Rogai por nós, São José, padroeiro dos moribundos.<br/>R/. Para que sejamos dignos das promessas de Cristo.</p><p class="mt-4 font-semibold">Oremos. Ó Deus, que por uma inefável Providência Vos dignastes escolher o bem-aventurado São José para Esposo de vossa Mãe Santíssima, concedei-nos que aquele mesmo que na terra veneramos como protetor, mereçamos tê-lo no céu por nosso intercessor. Vós que viveis e reinais por todos os séculos dos séculos. Amém.</p></div>`
      }
    ]
  },
  martinho_porres: {
    saintName: 'São Martinho de Porres',
    novenaTitle: 'Novena a São Martinho de Porres',
    description: 'Modelo de humildade, caridade e serviço aos pobres. Peça sua intercessão contra o preconceito.',
    initialPrayer: `<div class="prayer-block"><p>Santíssima Trindade, Pai, Filho e Espírito Santo, eu Vos adoro, louvo e dou graças pelos benefícios que me fizestes. Peço-Vos, por tudo que fizeste e sofreste o Vosso servo São Martinho de Porres, que aumenteis em mim a fé, a esperança e a caridade, e Vos dignastes conceder-me a graça que ardentemente almejo. Amém.</p></div>`,
    finalPrayer: `<div class="prayer-block"><p>Ó Deus, que elevastes São Martinho de Porres à glória do céu, fazei que, seguindo seus exemplos de humildade na terra, mereçamos ser exaltados com ele no céu. Por Cristo, nosso Senhor. Amém.</p><p class="mt-4 font-semibold">Rezar um Pai-Nosso, uma Ave-Maria e um Glória.</p></div>`,
    days: Array.from({ length: 9 }, (_, i) => ({
      day: `${i + 1}º Dia`,
      title: 'Oração a São Martinho de Porres',
      content: `<div class="day-specific-content"><p>Ó glorioso São Martinho de Porres, que, em vossa humildade, encontrastes o caminho para a santidade, intercedei por nós. Vós que amastes a Deus com todo o coração e servistes aos irmãos com incansável caridade, especialmente os mais pobres e doentes, ensinai-nos a ver o rosto de Cristo em cada pessoa que sofre. Alcançai-nos de Deus a graça que humildemente vos pedimos nesta novena (pedir a graça), e ajudai-nos a viver sempre no amor e na paz. Amém.</p></div>`
    }))
  },
  isabel_hungria: {
    saintName: 'Santa Isabel da Hungria',
    novenaTitle: 'Novena a Santa Isabel da Hungria',
    description: 'Rainha e terciária franciscana, padroeira da caridade. Peça sua intercessão para amar e servir a Cristo nos pobres.',
    initialPrayer: `<div class="prayer-block"><p>Deus de infinita bondade, que destes a Santa Isabel da Hungria a graça de reconhecer e venerar o Cristo nos pobres, concedei-nos, por sua intercessão, a graça de servir os nossos irmãos necessitados com incansável caridade. Amém.</p></div>`,
    finalPrayer: `<div class="prayer-block"><p>Senhor, que a exemplo de Santa Isabel, possamos nos despojar de nós mesmos para nos revestirmos de Cristo, servindo-O com alegria em cada irmão e irmã. Atendei a prece que confiantes vos fazemos. Por Cristo, nosso Senhor. Amém.</p><p class="mt-4 font-semibold">Rezar um Pai-Nosso, uma Ave-Maria e um Glória.</p></div>`,
    days: [
      { day: '1º Dia', title: '', content: `<div class="day-specific-content"><p>Em nome do Pai, e do Filho, e do Espírito Santo. Amém.</p><p>Santa Isabel, teu coração se comoveu de compaixão por todos os que sofriam. Você até criou dois hospitais para cuidar dos seus entes queridos pobres. Conheço muitas pessoas que estão doentes ou com dor. De resfriados a câncer, parece que a doença me rodeia. Santa Isabel, intercede por eles. Ore a Deus para que alivie sua dor e lhes traga consolo. Ajude-os a usar seu sofrimento para se aproximarem de Cristo. Por favor, inspira-me também com um coração compassivo. Encoraja-me a ajudar todos os que estão doentes. Às vezes, parece que todos os problemas do mundo devem ser resolvidos por uma pessoa, um remédio. No entanto, sei que o simples fato de oferecer uma palabra amável, uma refeição preparada ou uma visita ao médico pode ser a ação que ajuda a mudar o mundo. Tudo o que é preciso é uma pessoa. Deus, sei que estás operando tudo para o nosso bem, e tens um plano que não posso ver. Peço pela cura de todas estas pessoas, por intercessão de Santa Isabel da Hungria: <i>(Indique aqui suas intenções)</i> Mas confiarei em tua vontade para elas. Se for tua intenção que não melhorem, por favor, consola-as. Que seu sofrimento as aproxime de Ti! Em nome do Pai, e do Filho, e do Espírito Santo. Amém.</p></div>` },
      { day: '2º Dia', title: '', content: `<div class="day-specific-content"><p>Em nome do Pai, e do Filho, e do Espírito Santo. Amém.</p><p>Santa Isabel, muitas vezes és representada com pão nas mãos. Você se preocupou tanto com os pobres da sua comunidade! Cozinhar pode ser um trabalho mundano. Trabalho duro todos os dias para alimentar minha família. E cada vez que faço algo, tenho que fazer mais comida algumas hours depois! Santa Isabel, ajuda-me a ver os alimentos que como e sirvo hoje como um exemplo do amor de Deus. Guia-me para tomar decisões sábias e saudáveis que mantenham e expressem a beleza do corpo que Deus me deu. Inspira-me a sentir-me como um belo filho de Deus, não importa como me sinta em relação ao meu peso. Enquanto trabalho para fornecer alimentos à minha família, ajuda-me a ser grato por esta oportunidade de servi-los. Por favor, intercede também por todos aqueles que te são queridos: os pobres, que não têm o que comer. Também peço que tenhas em mente minhas intenções: <i>(Indique aqui suas intenções)</i> Obrigado(a) a Deus por dar a mim e à minha família o suficiente para comer. Abençoa a comida que compartilharemos juntos hoje. Ajuda-me a trabalhar para acabar com a fome no mundo, para que todos possam experimentar esta mesma bênção. Em nome do Pai, e do Filho, e do Espírito Santo. Amém.</p></div>` },
      { day: '3º Dia', title: '', content: `<div class="day-specific-content"><p>Em nome do Pai, e do Filho, e do Espírito Santo. Amém.</p><p>Santa Isabel, apesar do teu jovem casamento, tiveste um matrimônio muito feliz. Teu marido morreu jovem, mas te amou profundamente e permitiu que continuasses com tuas obras de caridade. Em troca, tu o amaste e o aproximaste de Deus. Este é o propósito de todos os casamentos e de todas as vocações! Se sou casado(a), intercede pelo meu casamento. Ora para que seja feliz, o que leva a um exemplo santo. Se não sou casado(a), guia-me no discernimento da minha vocação. Por favor, abençoa minha futura esposa (ou esposo) também, se este for o meu chamado! Por favor, esteja com todas as futuras noivas também. Dá-lhes paz enquanto planejam seus casamentos. Dá-lhes a oportunidade de refletir sobre seu chamado em meio ao caos. Dá-lhes a oportunidade de se preparar para o casamento e para o dia do casamento. Enquanto oras, também oferecerias tua intercessão por minhas intenções? <i>(Indique aqui suas intenções)</i> Deus, sei que o casamento é um sinal do teu amor por nós. Por favor, guia-me no meu chamado e ajuda-me a vivê-lo de uma maneira que reflita teu amor. Em nome do Pai, e do Filho, e do Espírito Santo. Amém.</p></div>` },
      { day: '4º Dia', title: '', content: `<div class="day-specific-content"><p>Em nome do Pai, e do Filho, e do Espírito Santo. Amém.</p><p>Para se tornar santo, milagres devem ser atribuídos a uma pessoa após a morte. Mas Santa Isabel, tiveste dois milagres em tua vida! O primeiro foi when te acusaram de roubar do castelo. No exame, porém, encontraram-se rosas debaixo do teu manto. O segundo foi when deixaste um leproso deitar-se em tua cama. Teu marido foi para se livrar dele, e ali jazia o Cristo crucificado em seu lugar! Estes milagres mostram tua piedade extrema, Santa Isabel. Podes me ajudar a estar tão conectado(a) com Deus como tu? Ajuda-me a conhecê-lo como tu! Sei que nosso Deus é um Deus de milagres. Sei que cada dia é um presente e que no meu dia a dia acontecem pequenos milagres. Por favor, ajuda-me a ser grato(a) por eles! Se eu pudesse ser tão ousado(a), também pediria mais milagres, para mim e para os que amo: <i>(Indique aqui suas intenções)</i> Deus, permite que meu coração se una ao teu! Ajuda-me a reconhecer teus milagres diários. Obrigado por tudo o que fazes por mim! Em nome do Pai, e do Filho, e do Espírito Santo. Amém.</p></div>` },
      { day: '5º Dia', title: '', content: `<div class="day-specific-content"><p>Em nome do Pai, e do Filho, e do Espírito Santo. Amém.</p><p>Santa Isabel, viste Deus nos pobres do teu país. Claro, tinhas uma nature compassiva e generosa. Mas, mais importante, vias teu trabalho como uma extensão da tua fé. Ajuda-me também a viver minha fé assim! Comove-me ver todos os que sofrem com compaixão. Tira toda dúvida, julgamento e cinismo da minha alma. Em vez disso, permite-me ver tudo como tu viste: filhos de Deus, reflexos do nosso Criador. Por favor, ora também por todos os que cuidam dos doentes ou dos pobres. Por favor, mantém uma vigilância especial sobre todos os que trabalham em hospitais e todos os trabalhadores de caridade. Inspira em mim o desejo de ajudar em tudo o que for possível. Por favor, ora por mim também: <i>(Indique aqui suas intenções)</i> Ó Senhor, tu também foste pobre e sofreste em tua vida! E nos lembras que cada vez que ajudamos uma pessoa pobre e sofredora, também te ajudamos. Ajuda-me a ver Teu reflexo em todo o Teu povo. Em nome do Pai, e do Filho, e do Espírito Santo. Amém.</p></div>` },
      { day: '6º Dia', title: '', content: `<div class="day-specific-content"><p>Em nome do Pai, e do Filho, e do Espírito Santo. Amém.</p><p>Santa Isabel, és uma das poucas santas que também foi da realeza. No entanto, em vez de abusar do teu poder, usaste tua posição na sociedade para ajudar os menos afortunados do que tu. Às vezes, aqueles em posições de liderança, desde o trabalho até a religião e o governo, parecem usar seu poder sobre os outros para se beneficiarem, não para ajudar os outros. Santa Isabel, onde quer que eu esteja no poder (no trabalho, na família ou mesmo na sociedade), permite-me usar minha liderança para ajudar os outros. Ajuda-me a não desprezar os outros. Dá-me a graça de contar minhas bênçãos e usar essas bênçãos para ajudar os outros e guiá-los a Cristo. Por favor, intercede também em nome de todos os que têm poder, para que possam ser inspirados a fazer o bem pelo mundo e ser dirigidos pela Vontade e pela Palavra de Deus. Também tem em mente minhas intenções: <i>(Indique aqui suas intenções)</i> Deus, sei que não há poder na terra senão o que é dado por Ti. E não há poder terreno maior do que Tu! Ajuda-me a usar qualquer influência que eu tenha no mundo para te dar glória. Em nome do Pai, e do Filho, e do Espírito Santo. Amém.</p></div>` },
      { day: '7º Dia', title: '', content: `<div class="day-specific-content"><p>Em nome do Pai, e do Filho, e do Espírito Santo. Amém.</p><p>Querida Santa Isabel, certamente viveste bem a tua fé. Adoravas mostrar amor e dignidade às pessoas da tua região, alimentando-as e curando-as de suas doenças. Também conheço outro que viveu assim: Jesus! Podes me ajudar a ser mais generoso(a) e usar minha vida como uma oportunidade para apontar os outros para Deus, Santa Isabel? Encoraja-me a ser generoso(a) com minhas finanças e a dar aos menos afortunados, se puder. Encoraja-me a convidar um amigo para a missa comigo. Em vez de simplesmente assinar um cheque, inspira-me a dar mais de mim mesmo(a), da minha vulnerabilidade, oferecendo-me como voluntário(a) na minha paróquia ou em uma organização local. Ora para que eu possa ter o mesmo espírito inabalavelmente generoso que tu possuías, Santa Isabel! Ajuda-me a viver as Bem-aventuranças como tu! Por favor, ora por mim também: <i>(Explique suas intenções)</i> Jesus, deste-nos um maravilhoso exemplo de como tratar os outros, tanto em ti como em Santa Isabel da Hungria. Por favor, ajuda-me a ser o mesmo tipo de testemunha em minha vida! Em nome do Pai, e do Filho, e do Espírito Santo. Amém.</p></div>` },
      { day: '8º Dia', title: '', content: `<div class="day-specific-content"><p>Em nome do Pai, e do Filho, e do Espírito Santo. Amém.</p><p>Santa Isabel, durante tua vida experimentaste o chamado a muitas vocações e papéis diferentes. Eras um membro da realeza. Foste esposa e mãe. Eras uma cuidadora. Foste até membro de uma Terceira Ordem. Portanto, tiveste que dizer sim a Deus de tantas maneiras diferentes em tua vida. Às vezes, acho difícil confiar em Deus tão plenamente como tu, Santa Isabel. When as coisas não saem como quero, temo que Deus me tenha abandonado. É como se todos os pequenos milagres que ele fez em minha vida todos os dias estivessem desaparecendo, e eu ficasse com medo. Como venceste esse medo, Santa Isabel? Por favor, ensina-me a confiar em Deus como tu fizeste. When surgirem provações em minha vida, dá-me a graça de me entregar a ele. Ajuda-me a afugentar o medo! Além disso, por favor, ajuda-me sempre a dizer sim ao que Deus me chamar. Como experimentaste em tua vida, a vontade de Deus sempre nos traz alegria no final. Mesmo when parece que não o fará, sua vontade sempre trabalha para nossa felicidade! Lembra-me que ele nunca me decepcionará. Inspira-me a dizer sim a Deus tão voluntariamente e com alegria como tu fizeste. Por favor, ora por mim também: <i>(Indique aqui suas intenções)</i> Jesus, em ti confio! Em nome do Pai, e do Filho, e do Espírito Santo. Amém.</p></div>` },
      { day: '9º Dia', title: '', content: `<div class="day-specific-content"><p>Em nome do Pai, e do Filho, e do Espírito Santo. Amém.</p><p>Santa Isabel, alcançaste a meta mais alta de qualquer pessoa: a santidade! Isso não significa que fosses perfeita, claro. Mas Deus ficou tão satisfeito com teu serviço aqui na terra que quis que fosses honrada dessa maneira. Há dias em que o caminho da santidade parece bastante semeado de armadilhas, Santa Isabel. E, além do mais, eu deveria ajudar os outros a serem santos também! Minha esposa (ou esposo), meus filhos, meus amigos, minha família, meus colegas, também tenho que ajudá-los em sua jornada para o céu. Ajuda-me, por favor! Sei que constantemente me falta santidade em minha vida, mas lembra-me da misericórdia e do perdão de Deus. Por favor, dá-me paciência e inspira-me cada vez que eu tiver a oportunidade de ajudar a fé de outra pessoa! Não me deixes hesitar pelo medo, mas protege-me sempre com amor. Também te peço que intercedas pelo meu caminho para a santidade e por minhas outras intenções: <i>(Indique aqui suas intenções)</i> Santa Isabel da Hungria, rogai por nós! Em nome do Pai, e do Filho, e do Espírito Santo. Amém.</p></div>` }
    ]
  },
  apresentacao_ns: {
    saintName: "Apresentação de N.S.",
    novenaTitle: "Novena da Apresentação de Nossa Senhora",
    description: "Celebre a entrega de Maria a Deus ainda criança no Templo e peça a graça de se consagrar totalmente à vontade do Pai.",
    days: [
      {
        day: 'Oração da Novena',
        title: 'Oração da Novena',
        content: `<div class="day-specific-content">
                <h4 class="special-title">Como rezar esta Novena?</h4>
                <p>Inicia-se com o Sinal da Cruz. Reza-se todos os dias as mesmas orações seguidas das 3 Ave-Marias. Finaliza-se com o Sinal da Cruz.</p>
                <div class="w-16 h-px bg-primary/20 my-6 mx-auto"></div>
                <h4 class="special-title">Orações para todos os dias</h4>
                <p>Seja bendita, ó Maria, a prontidão de ânimo com que tão infantinha vos apresentastes no templo. Suplico-vos, Virgem Santíssima, me alcanceis de vosso Filho a graça de servi-lo sempre até à morte. (Reza-se uma Ave-Maria)</p>
                <p>Seja bendito, ó Maria, o fervor de espírito com que soubestes servir e dar gosto a Deus. Suplico-vos, Virgem Santíssima, me alcanceis de vosso Filho a graça de me dar com toda a alma ao seu serviço. (Reza-se uma Ave-Maria)</p>
                <p>Seja bendita, ó Maria, a plenitude da perfeição com que tão cedo vos fizestes modelo completo de santidade. Suplico-vos, Virgem Santíssima, me alcanceis de vosso Filho a graça de aborrecer sempre a culpa e amar de todo o coração a virtude. (Reza-se uma Ave-Maria)</p>
                <div class="w-16 h-px bg-primary/20 my-6 mx-auto"></div>
                <p>℣. Concedei-me que vos louve, Virgem Sagrada.<br>℟. Dai-me valor contra os vossos inimigos.</p>
                <p class="mt-4"><b>Oremos:</b> Ó Deus, que quisestes se apresentasse neste dia no templo a bem-aventurada sempre Virgem Maria, habitáculo do Espírito Santo: concedei-nos que por sua intercessão mereçamos ser apresentados no templo da vossa glória. Por Cristo, Nosso Senhor. ℟. Amém.</p>
            </div>`
      },
      {
        day: 'História da Apresentação',
        title: 'Breve história da Apresentação',
        content: `<div class="day-specific-content">
                <h4>Por Padre João Baptista Lehmann</h4>
                <p>O dia da Apresentação de Nossa Senhora é a despedida das festas marianas no ano eclesiástico. Tudo que sabemos da Apresentação de Maria no templo, sabemo-lo por lendas e informações extrabíblicas. O que não quer dizer que o assunto da festa careça de probabilidade histórica. Segundo uma piedosa lenda, Maria Santíssima, tendo apenas três anos de idade, foi pelos pais, em cumprimento de uma promessa, levada ao templo, para ali, com outras menina, receber educação adequada à sua idade e posição. A Igreja oriental distinguiu este fato com as honras de uma festa litúrgica. A Igreja ocidental conhece a comemoração da Apresentação de Nossa Senhora desde o ano de 1371. Prescrita primeiramente só para a corte papal, então residente em Avignon, em 1585, Sixto V ordenou que fosse celebrada em toda a Igreja.</p>
                <p>A Apresentação de Nossa Senhora encerra dois sacrifícios: a dos pais e o da menina Maria. Diz a lenda que Joaquim e Ana ofereceram a Deus a filhinha no templo, when esta tinha três anos. Sem duvida foi para estas santas pessoas um sacrifício muito grande separar-se da filhinha, que se achava numa idade em que não há pais que queiram confiar os filhos a mãos estranhas. Três anos é a idade em que a criança recompensa já de algum modo os trabalhos e sacrifícios dos pais, formulando palavras e fazendo já exercícios mentais que encantam e divertem, dando ao mesmo tempo provas de gratidão e amor filiais. Joaquim e Ana não teriam experimentado o sacrifício em toda a sua amargura? O coração dos amorosos pais não teria sentido a dor da separação? Que foi que os levou a fazer tal sacrifício? A lenda fala de um voto que tinham feito. Votos desta natureza não eram raros no Antigo Testamento. As crianças eram educadas em colégios anexos ao templo, e ajudavam os múltiplos serviços e funções da casa de Deus. Não erramos em supor que Joaquim e Ana, when levaram a filhinha ao templo, fizeram-no por inspiração sobrenatural, querendo Deus que sua futura esposa e mãe recebesse uma educação e instrução primorosíssima.</p>
                <p>Grande era o sacrifício de Maria: Não resta duvida que para Maria, a criança entre todas mais privilegiada, a cerimonia da apresentação significava mais que a entrada no colégio do templo. Maria reconhecia em tudo uma solene consagração da vida a Deus, a oferta de si mesma ao supremo Senhor. O sacrifício que oferecia, era a oferta das primícias e as primícias, por mais insignificantes que sejam, são preciosas por serem uma demonstração da generosidade do ofertante e uma homenagem a quem as recebe. Maria ofereceu-se sem reserva, para sempre, com contentamento e jubilo d’alma. O que o Salmista cantou, cheio ele entusiasmo, traduziu-se n’alma da bem-aventurada menina: “Quão amáveis são os teus tabernáculos, Senhor dos Exércitos! A minha alma suspira e desfalece pelos átrios no Senhor” (Sl 83, 3) E entrarei junto ao altar de Deus; do Deus que alegra a minha juventude.</p>
                <p>Que espirito, tanto nos santos pais como na santa menina! Que espetáculo para o céu e para os homens! O que encanta a Deus e lhe atrai a graça, em toda a plenitude, edifica e enleva a todos que se ocupam deste mistério, na vida de Nossa Senhora. Poderá haver coisa mais bela que a piedade, o desprendimento completo no serviço do Senhor?</p>
                <p>A vida de Maria Santíssima no templo foi a mais santa, a mais perfeita que se pode imaginar. O templo era a casa de Deus e na proximidade de Deus se sentia bem a bela alma em flor. “O passarinho acha casa para si e a rola ninho nos altares do Senhor dos exércitos, onde um dia é melhor que mil nas tendas dos pecadores” (Sl 83). Santo era o lugar onde Maria vivia. Era o templo onde os antepassados tinham feito orações, celebrando as festas; era o templo onde se achava o santuário do Antigo Testamento, a arca, o trono de Deus no meio do povo; era o templo, afinal, de que as profecias diziam que o Messias nele devia fazer entrada.</p>
                <p>Naquele templo a menina Maria rezava e se preparava para a grande missão, que Deus lhe tinha reservado. “Como os olhos da serva nas mãos da Senhora, assim os olhos de Maria estavam fitos no Senhor seu Deus” (Sl 122). Segundo uma revelação com que Maria agraciou a Santa Izabel de Turíngia, todas as orações feitas naquele tempo se lhe resumiam no seguinte: 1) alcançar as virtudes da humildade, paciência e caridade; 2) conseguir amar e odiar tudo a que Deus tem amor ou ódio; 3) amar ao próximo e tudo que lhe é caro; 4) a conservação da nação e do templo, a paz e a plenitude das graças de Deus e 5) finalmente, ver o Messias e poder servir a sua santa mãe.</p>
                <p>Maria era o modelo de obediência amor e respeito para com os superiores, de caridade e amabilidade para com as companheiras. Tinha o coração alheio à antipatia, à rixa, ao azedume e ao amor próprio. A Maria no templo era aplicáveis as palavras do Salmista (139): “Senhor, meu coração não se ensoberbeceu; nem meus, olhos se elevaram. Não andei em grandeza. nem em magnificências sobre a minha sorte. Se não fosse humilde o meu sentimento, não se elevaria a minha alma (ai de mim!), mas como o menino, apartado já do peito da mãe, lhe fica descansando nos braços, assim está a paz na minha alma”.</p>
                <p>Maria era uma menina humilde, despretensiosa e amante do trabalho. Com afã lia e estudava os santos Livros. Como as meninas do Colégio do templo se ocupavam de outros serviços concernentes ao serviço santo, é provável que Maria tenha recebido instruções sobre diversos trabalhos, como fossem: pintura, trabalhos de agulha, canto e musica. É opinião de muitos que o grande véu do Templo, que na hora da morte de Jesus se partiu de alto a baixo, tinha sido confeccionado por Maria Santíssima e as companheiras.</p>
                <p>Assim foi santíssima a vida de Maria no Templo. O Divino Espírito esmerilhou o coração e o espirito da esposa, mais do que de qualquer outra criatura. Maria poderia aplicar a si as palavras do Eclesiástico (51. 18): “Quando ainda era pequena, procurei a sabedoria na oração. Na entrada elo templo instava por ela… Ela floresceu como uma nova temporã. Meu coração nela se alegrou e desde a minha mocidade procurei seguir-lhe o rastro.” É de admirar que Maria, assim amparada pelos cuidados humanos e divinos, progredisse de virtude em virtude?</p>
                <p>De Nosso Senhor o Evangelho constata diversas vezes esta circunstância. Como Jesus, também Maria cresceu em graça e sabedoria, diante de Deus e dos homens. Este crescimento a Igreja contempla-o em imagens grandiosas, traçadas pelo Eclesiástico (24.17-23): “Sou exaltada qual cedro no Líbano e qual cipreste no monte Sião. Sou exaltada qual palma em Cades e como os rosais em Jericó. Qual oliveira especiosa nos campos e qual plátano, sou exaltada junto da agua nas praças. Assim como o cinamomo e o balsamo que difundem cheiro, exalei fragrância: como a mirra escolhida derramarei odor de suavidade na minha habitação; como uma vide, lancei flores de um agradável perfume e as minhas flores são frutos de honra e de honestidade”. Nunca houve mocidade tão santa e esplendorosa como a de Maria Santíssima. Outra não poderia ser, devendo Maria preparar-se para a realização do mistério dos mistérios; da Encarnação do Verbo Eterno.</p>
            </div>`
      }
    ]
  },
  ns_saude: {
    saintName: 'N.S. da Saúde',
    novenaTitle: 'Novena a Nossa Senhora da Saúde',
    description: 'Invoque a Mãe de Deus sob este título e peça a cura das doenças do corpo e da alma, confiando na Sua materna intercessão.',
    initialPrayer: `<div class="prayer-block">
        <h4 class="section-title">Ritos Iniciais</h4>
        <p>Glória ao Pai, ao Filho e ao Espírito Santo. Como era no princípio agora e sempre, por todos os séculos dos séculos. Amém.</p>
        <p>Vinde, Espírito Santo, enchei os corações dos Vossos fiéis e acendei neles o fogo do Vosso amor. Enviai, Senhor, o Vosso Espírito e tudo será criado e renovareis a face da terra. Oremos: Ó Deus que instruístes os corações dos vossos fiéis com a luz do Espírito Santo, fazei que apreciemos retamente todas as coisas segundo o mesmo Espírito e gozemos sempre da Sua consolação por Cristo Senhor Nosso. Amém.</p>
        <div class="w-16 h-px bg-white/20 my-6 mx-auto"></div>
        <h4 class="section-title">Oração Preparatória</h4>
        <p>Ó, Senhora da Saúde, Mãe, Advogada dos doentes e dos aflitos, vinde nos atender em nossas necessidades, vinde nos socorrer em nossas enfermidades, vinde nos consolar! Volvei vosso olhar magnânimo e piedosíssimo, protegendo-nos nas horas de nossos apuros. Ouvi nossos rogos que com a maior confiança lançamos aos vossos pés, imploramos o auxílio e o perdão. Visitai os nossos lares, quando a dor os rondar insistentemente e perniciosamente. Aliviai-nos e pressurosa nos atendei, ó Senhora da Saúde, quando bater à nossa porta a doença ou a infelicidade. Não fiamos em nossos merecimentos nem em nossas obras, mas sim nos méritos infinitos de Jesus e no vosso maternal amor, because sois a toda poderosa, quando suplicais. Amém.</p>
    </div>`,
    finalPrayer: `<div class="prayer-block">
        <h4 class="section-title">Jaculatória</h4>
        <p>Ó Senhora da Saúde, aos devotos seus ajude, onde seu nome ecoa!</p>
        <p class="mt-2 font-semibold">(Pai – Nosso, Ave – Maria e Glória ao Pai)</p>
    </div>`,
    days: [
      {
        day: '1º Dia',
        title: 'Nascimento de Maria nos esplendores divinos',
        content: `<div class="day-specific-content">
                <p>Deus que fez o Céu, a Terra e tudo que nela contém, no sexto dia criou o homem, à Sua imagem e semelhança para gozar eternamente de um paraíso superabundante de delícias. Cai Adão em pecado, induzido por sua companheira Eva. Acusa-o o demônio e lhe perdoa a Piedade Divina, oferecendo-se à Segunda Pessoa da Santíssima Trindade para satisfazer, por Adão, a culpa que havia cometido. No mesmo instante e hora, surgiu nos desígnios de Deus aquela que haveria de ser Mãe do Filho dEle. Eis, pois, ó alma devota, como Maria já antes dos séculos deveria ser a mais santa, a mais pura e a mais estimada criatura aos olhos do Altíssimo e desde então Advogada e Mãe dos miseráveis pecadores. Nossa Senhora da Saúde, Auxiliadora dos Cristãos, Consoladora dos Aflitos, Saúde dos Enfermos.</p>
                <div class="w-16 h-px bg-white/20 my-6 mx-auto"></div>
                <h4 class="section-title">Oração Final</h4>
                <p>Ó soberana Rainha dos Céus e da Terra, Virgem Senhora da Saúde, escolhida desde a eternidade para ser Mãe de Deus, nós vos oferecemos o limitado obséquio desta novena e súplicas, e vos rogamos, piedosa Senhora, já que poderosa sois diante de Deus, alcanceis uma fé viva, uma esperança firme e uma caridade ardente. Amém.</p>
            </div>`
      },
      {
        day: '2º Dia',
        title: 'Seu nascimento no tempo',
        content: `<div class="day-specific-content">
                <p>Esquecidos os homens de seu Eterno Criador e mais que tudo engolfados no abismo de suas misérias, acode a divindade toda poderosa, abrindo o inefável tesouro de Sua infinita misericórdia, dando ao mundo aquela que haveria de vir como remédio de todo o gênero humano. Manda um anjo anunciar à Santa Ana e a São Joaquim que suas preces foram ouvidas e aceitas as suas lágrimas. Por um parto milagroso, tanto pelo avanço da idade, como pela natural esterilidade, daria Santa Ana ao mundo uma filha que seria a Mãe do Messias Prometido. Nasce aquela brilhante aurora, Maria Santíssima, a mais formosa que a lua, e mais resplandecente que o sol. Alegrem-se os Espíritos Celestes! Confundam-se os homens na Terra e assustem-se os demônios no inferno, pois nasceu aquela que pisaria sobre a cabeça da infernal serpente; aquela mulher forte, que revestida de Sol, calçada da lua apareceria coroada de doze estrelas à frente de um bem ordenado exército de graças e virtudes em triunfos e glórias; aquela Mãe desejada e há tantos séculos, prometida, a Virgem Senhora da Saúde. Junto a seu trono, pleno de misericórdia e bondade e com lágrimas de devoção, peçamos que nos ampare com seu patrocínio, alcançando-nos de Deus eficaz auxílio e um remédio seguro de Sua graça. Amém.</p>
                <div class="w-16 h-px bg-white/20 my-6 mx-auto"></div>
                <h4 class="section-title">Oração Final</h4>
                <p>Ó soberana Rainha dos Céus e da Terra, Virgem Senhora da Saúde, escolhida desde a eternidade para ser Mãe de Deus, nós vos oferecemos o limitado obséquio desta novena e súplicas, e vos rogamos, piedosa Senhora, já que poderosa sois diante de Deus, alcanceis uma fé viva, uma esperança firme e uma caridade ardente. Amém.</p>
            </div>`
      },
      {
        day: '3º Dia',
        title: 'Maria é amor e consolação',
        content: `<div class="day-specific-content">
                <p>Sua vida oculta no templo de Jerusalém por três anos já cantava nossa Puríssima Virgem, when seus pais, Joaquim e Santa Ana, por determinação do Altíssimo se encaminharam ao templo para apresentar ao Senhor nova oferta daquela pomba cândida, entregando-a a São Simão e Santa Ana, a viúva, que viveu anos no templo, sob cujos cuidados viveria Maria até que chegasse o tempo de seus desposórios. Estava a Virgem matriculada na Escola Sacerdotal do Templo de Jerusalém. Despedem-se os pais enternecidos da Filha amada e, sem poderem sustar as lágrimas, apertam-na em amorosos amplexos, lançando lhe as bênçãos por entre suspiros veementes. De joelhos, Maria se despede, beijando-lhes as mãos, deixando-os saudosos, em lágrimas, tristes, voltando para Nazaré.</p>
                <p>Quantas vezes deixamos desconsolada nesta amoríssima Mãe, when por satisfação de nossos desejos deixamos seu Filho e, obstinados na culpa, deixamo-Lo sem o procurar na fonte da Penitência.</p>
                <div class="w-16 h-px bg-white/20 my-6 mx-auto"></div>
                <h4 class="section-title">Oração Final</h4>
                <p>Ó Poderosíssima Senhora da Saúde, aceitai de nossos humildes corações as presentes súplicas que vos fazemos, alcançando-nos de Deus um pequeno raio de Sua divina luz, para que saibamos procurar no Santo Templo o remédio de nossa solução. Amém.</p>
            </div>`
      },
      {
        day: '4º Dia',
        title: 'Seus desposórios',
        content: `<div class="day-specific-content">
                <p>Maria contava catorze anos de idade e seis meses de seus desposórios com São José, when chega o tempo de cumprirem as determinações dos Divinos Oráculos e de se conhecer a grande fineza que por nós obrou no Deus Eterno em se fazer homem. Manda o anjo Gabriel a uma cidadezinha de Nazaré para anunciar à donzela que dela nasceria o Filho de Deus feito homem, para remédio e salvação dos homens, ficando ela virgem, como antes. Entra o anjo no oratório, onde se achava de joelhos a divina senhora em êxtase naquela tardinha tão amena da Palestina. “Ave, cheia de graça, o Senhor é contigo”, disse o anjo. O anjo animou-a, tornando-se a dizer “não temais, Maria, because achaste graça diante do Senhor, digo-vos pois que concederás e darás à luz a um Filho que se chamará Jesus; Este será grande e portentoso em obras e reinará eternamente na casa de Jacob e Seu reino não terá fim. Disse-lhe então Maria “de que modo se fará isto, pois não conheço homem algum?. O anjo respondeu: “O Espírito Santo virá sobre ti e a força do Altíssimo te cobrirá com a Sua sombra, motivo por onde o Fruto que nascer do vosso ventre, será chamado Filho de Deus”. Ante tal locução, Maria Santíssima falou: “Ofereço-me como humilde escrava do Senhor, para que se cumpra em mim o que vós dizeis”. Neste momento, do sangue mais puro de Maria se formaria ao seu ventre o Corpo Santíssimo de Cristo, unindo-se a Ele a um tempo a Alma e a Divindade, numa união hipostática, verdadeiro Deus e verdadeiro Homem. Eis a firmeza que Deus por nós realizou, a fim de que nos abrisse a porta da Glória e nos desse a Sua Mãe por nossa Mãe. Amém.</p>
                <div class="w-16 h-px bg-white/20 my-6 mx-auto"></div>
                <h4 class="section-title">Oração Final</h4>
                <p>Ó, esclarecida Mães de Deus, Senhora da Saúde, Virgem antes o parto, no parto e depois do parto, pela grande alegria que tivestes, when fostes escolhida para Mãe do Divino Verbo, alcanceis de vosso Filho o verdadeiro caminho. Amém.</p>
            </div>`
      },
      {
        day: '5º Dia',
        title: 'Maternidade de Maria',
        content: `<div class="day-specific-content">
                <p>Dois são os grandes motivos que temos para merecermos o título de filhos da Mãe de Deus. Primeiro, por ser a Virgem Maria, Mãe de Deus e Homem verdadeiro; segundo, because assim falou Cristo pregado na Cruz: “Mulher, eis aí teu Filho”, entregando-lhe João por filho, que nos representa e, olhando para João, disse: “Eis aí, filho, a tua Mãe”. Somos filhos de tão doce Mãe. Procuremos com constância sermos fiéis devotos. Conheçamos nossa gratidão e, com as mais enternecidas lágrimas, abracemos seus sagrados pés, prometendo ser, doravante, seus filhos diletos. Amém.</p>
                <div class="w-16 h-px bg-white/20 my-6 mx-auto"></div>
                <h4 class="section-title">Oração Final</h4>
                <p>Ó dulcíssima Virgem Maria, Senhora da Saúde, terníssima Mãe dos desagradados filhos de Eva, reverentes, aos vossos pés, oferecemos nossos votos que, como humildes filhos, fazemos atender piedosíssima Mãe, quão pouco valemos sem a vossa proteção e alcançai-vos de vosso Santíssimo Filho a graça para que saibamos agradecer a grande fineza que nos fez em nos dar a vós por nossa Mãe e Senhora. Amém.</p>
            </div>`
      },
      {
        day: '6º Dia',
        title: 'Vida oculta em Nazaré',
        content: `<div class="day-specific-content">
                <p>Quais seriam os singulares dotes de pureza com que o Eterno Senhor adornaria a alma de Maria que, desde antes dos séculos, se destinaria para Mãe Sua? Quais seriam as grandes excelências em que a Trindade Santíssima a ilustraria mais sublime que os anjos? Jamais a mais leve sombra ofuscou o resplendor de sua pureza; suas ações foram, portanto, Maria, o singular portento de toda pureza, o claríssimo espelho da Santa Virgem da Castidade. Amém.</p>
                <div class="w-16 h-px bg-white/20 my-6 mx-auto"></div>
                <h4 class="section-title">Oração Final</h4>
                <p>Ó, puríssima Virgem, Senhora da Saúde, espelho terníssimo de pureza, aceitai os humildes afetos com que rememoramos vossa Santa Virgindade e Imaculada Conceição. Infundi, ó Virgem pura, em nossos corações, o esplendor da pureza para que em nós prevaleça a virtude da castidade e pureza. Amém.</p>
            </div>`
      },
      {
        day: '7º Dia',
        title: 'Maria, símbolo das virtudes',
        content: `<div class="day-specific-content">
                <p>Desde o instante de sua Conceição puríssima, foi Maria um mar imenso de todas as graças e em grau tão superior que não só excedeu a cada um dos justos, em particular, mas a todos os santos e espíritos celestes. No mesmo instante da Conceição foram-lhes infusos os hábitos de toda virtude. Pela fé, teve logo todo conhecimento da divindade de Deus, das três Pessoas da Santíssima Trindade com todos os Seus atributos e perfeições, por um modo inteiramente altíssimo. Pela virtude da caridade, naquele mesmo momento, amou tão intensamente a Deus que todo amor dos anjos, arcanjos, querubins e serafins. Nessa mesma ocasião resplandeceram sobre ela toda a perfeição, todas as virtudes morais e naturais, as sete dores e os doze frutos do Espírito Santo. Entornou-lhe Deus de imediato uma ciência infusa com que conheceu todas as causas naturais e sobrenaturais com tanta perfeição que superou todas as criaturas do Céu e da Terra. Neste interim foram criados o corpo e a alma de Maria, não só para celeiro da divindade, como para ser o exemplar de todas as virtudes.</p>
                <div class="w-16 h-px bg-white/20 my-6 mx-auto"></div>
                <h4 class="section-title">Oração Final</h4>
                <p>Ó virtuosíssima Virgem, Senhora da Saúde, assim como merecestes receber de Deus o grau superior de todas as virtudes, assim também recebei os humildes rogos que vos fazemos, a fim de que resplandeça em nós especial desejo de seguirmos o exemplo de vossas virtudes, firmes na fé, na esperança e na caridade. Amém.</p>
            </div>`
      },
      {
        day: '8º Dia',
        title: 'Maria coluna firme da Igreja',
        content: `<div class="day-specific-content">
                <p>Que seria da primitiva Igreja se Maria não fosse o grande amparo? Que seria dos Santos Apóstolos, se não tivessem por Mestra, Maria, a Senhora? No tríduo da Paixão de seu benditíssimo Filho, no sacrário de seu puríssimo coração, guardaram-se todos os mistérios da fé e o Evangelho. Por intercessão de Maria, converteu-se Paulo; Pedro chorou seus pecados, os apóstolos se ajuntaram no Cenáculo, onde se animaram na fé, preencheu-se o número do colégio apostólico; os discípulos, os cristãos se purificaram com penitência para esperar a vinda do Divino Paráclito. A Igreja se inicia sob o bafejo da assistência do Espírito Santo, sob a proteção de Maria, espalhando-se por todo orbe. Maria se põe sempre ao lado da Igreja, defendendo-a, protegendo-a e acompanhando-a, como salvaguarda e remédio, no correr dos séculos. Amém.</p>
                <div class="w-16 h-px bg-white/20 my-6 mx-auto"></div>
                <h4 class="section-title">Oração Final</h4>
                <p>Ó Virgem puríssima, Senhora da Saúde, Soberana Mestra da Santa Igreja, único asilo dos desagradados filhos de Adão, olhai piedosa para nossos filhos e aceitai suas preces para que passemos desta para melhor vida. Amém.</p>
            </div>`
      },
      {
        day: '9º Dia',
        title: 'Maria, imperatriz do Céu e da Terra',
        content: `<div class="day-specific-content">
                <p>Toda a vida de Maria não foi outra coisa senão desvelo, empenho por nós, pecadores. Depois da morte de seu Filho, o desenvolvimento, a grandeza e o aumento da Santa Igreja; para os justos, todo o alívio nas aflições; para os pecadores, seu único refúgio; para os tristes e atribulados, auxílio e para os enfermos, a mais pronta saúde foi sempre Maria. Enfim, para o mundo, todo bem. Chega o tempo de chorar. Termina a vida e despede-se dos Apóstolos que, por inspiração divina, vão ter o momento último neste mundo com ela. Assistem ao trânsito de Maria, levados pelos Anjos, pelos coros dos Anjos do Céu. Amém.</p>
                <div class="w-16 h-px bg-white/20 my-6 mx-auto"></div>
                <h4 class="section-title">Oração Final</h4>
                <p>Ó, suprema Imperatriz do Céu e da Terra, Virgem Senhora da Saúde, querida de Deus Pai, doce Mãe de Deus Filho, digníssima Esposa do Espírito Santo, vós que fostes coroada pela Trindade Santa por Suprema Rainha de todo o universo, lembrai-vos de nós, míseros pecadores. Olhai para vossos indignos filhos, derramando-lhes bênção. Nós vos pedimos graças e mais graças para nossa Igreja, para o Sumo Pontífice, para os bispos do mundo inteiro, para os sacerdotes, diáconos e seminaristas. Amém.</p>
            </div>`
      }
    ]
  },
  santa_cecilia: {
    saintName: 'Santa Cecília',
    novenaTitle: 'Novena a Santa Cecília',
    description: 'Padroeira dos músicos e da música sacra, Santa Cecília intercede para que a sua vida seja um cântico de louvor a Deus.',
    initialPrayer: `<div class="prayer-block"><h4>Apresentação</h4><p>Santa Cecília, a padroeira dos músicos como é conhecida, encarnou comp ninguém na história da Igreja não apenas o ideal da virgindade, mas também o da vigilância cristã. Levava sempre em seu peito o evangelho de Cristo e cantava a Deus em seu coração. Foi essa referência ao canto que a tornou padroeira dos músicos.</p><p>Mais tarde, Santo Agostinho apresenta o significado de cantar a Deus com arte e júbilo e o que é cantar com júbilo? É compreender que não se pode exprimir com palavras o que se canta com o coração. Assim que o seu coração exulte sem palavras e que a imensa extensão do júbilo não tenha limite de sílabas.</p><p>Com o ideal da virgindade, Cecília se consagrou a Deus de corpo e mente fazendo Dele o único Senhor de sua vida. Pela vigilância cristã cultivava a oração contínua na busca de rejeitar as obras das trevas e revestir-se das armas da luz.</p><p>São ideais que não perderam nem perderão a validade because o cristão tem a missão de levar o evangelho no coração como fez Santa Cecília. Isso faz dela uma santa cujo exemplo e mensagem de vida continuam atuais, especialmente em nosso mundo secularizado, para o qual a força de um coração puro é sempre um valor a se propor e exaltar.</p><h4 class="mt-4">Oração inicial</h4><p>Ó Santa Cecília, nossa admirável padroeira, rogai a Deus por nós. Que nossa vida seja um hino de louvor e gratidão e que não percamos a pureza de coração a qual nos permite ver Deus em nós mesmos e nos irmãos. Obtende-nos dele a graça de que hoje tanto necessitamos (diga aqui o seu pedido).</p><p class="font-semibold">(Pai- Nosso, Salve Rainha, Ave-Maria, Glória ao Pai…)</p><p>Santa Cecília, rogai por nós.</p></div>`,
    finalPrayer: `<div class="prayer-block"><h4>Oração final</h4><p>Ó Deus de amor, nós vos louvamos por nos terdes dado em Santa Cecília um exemplo admirável a ser imitado na observância da castidade e da vigilância cristã. Ela viveu com todas as forças as palavras do vosso amado Filho, Jesus: “Vigiai e orai, para não cairdes em tentação; pois o Espírito está pronto, mas a carne é fraca” (Mt 26,41). Que ela seja nossa intercessora junto a vós, para que possamos crescer na santidade pela prática do amor solidário.</p></div>`,
    days: [
      { day: 'Primeiro Dia', title: 'Cecília, Virgem e Mártir', content: '<div class="day-specific-content"><h4>Um pouco de história</h4><p>Santa Cecília pertencia a mais antiga nobreza romana. A seu respeito, a Liturgia das Horas diz que o culto a Santa Cecília em honra da qual foi construída uma basílica em Roma no século quinto, difundiu-se por causa de sua paixão. Santa Cecília é exaltada como uma grande mulher cristã que por amor à Cristo, professou a virgindade consagrada e sofreu o martírio. De acordo com os costumes da época, não era necessário o consentimento da noiva para o casamento e seu pai a casou com Valeriano.</p><h4>Leitura Bíblica</h4><p>“Cantai ao Senhor um cântico novo, cantai ao Senhor terra inteira, cantai ao Senhor bendizei o seu nome. Anunciai dia após dia a sua salvação; Entre os povos narrai a sua glória entre todas as nações dizei seus prodígios.” (Sl 96 [95], 1-3)</p><h4>Para refletir</h4><p>“Olhar as coisas com os olhos de Deus, eis um segredo de felicidade.”</p></div>' },
      { day: 'Segundo Dia', title: 'Uma fé que vence e convence', content: '<div class="day-specific-content"><h4>Um pouco de história</h4><p>Cecília tinha tal poder de persuasão que, apesar de ter casado com o príncipe Valeriano, o fez compreender que pertencia inteiramente a Deus e que um anjo a guardava. Ele lhe prometeu que seguiria sua fé se lhe fosse dado ver, com os próprios olhos, esse anjo admirável. E assim foi que tendo a santa conseguido esse milagre, o nobre pagão se converteu á fé cristã da qual também glorioso mártir.</p><h4>Leitura Bíblica</h4><p>“Este é o meu mandamento: amai-vos uns aos outros, como eu vos amei. Ninguém tem amor maior do que aquele que dá a vida por seus amigos. Vós sois meus amigos, se fizerdes o que eu vos mando” (Jo 15, 12-14)</p><h4>Para refletir</h4><p>“Olhar as coisas com os olhos de Deus, eis um segredo de felicidade.”</p></div>' },
      { day: 'Terceiro Dia', title: 'Cecília se entrega a um amor maior', content: '<div class="day-specific-content"><h4>Um pouco de história</h4><p>Após revelar sua consagração a Deus, Cecília aconselhou o marido a visitar o papa Urbano, que se havia refugiado nas catacumbas. Desse encontro, resultou a conversão do marido e de Tibúrcio, irmão dele. Nessa época, era proibido o sepultamento de cristãos em Roma, porém eles se dedicaram a sepultar os cadáveres de cristãos martirizados que se encontravam. Em razão disso, foram levados a julgamento. Nessa ocasião, o imperador garantiu-lhes a liberdade caso adorassem ao Deus Júpiter. Diante de sua negação, foram torturados e decapitados numa região próxima a Roma. Cecília recolheu os corpos de ambos e os sepultou na via Àpia. Não menosprezou o amor do esposo Valeriano e viu triunfar o amor maior para o qual ela se entregara totalmente consagrando-lhe toda a existência.</p><h4>Leitura Bíblica</h4><p>“Nisto meu Pai é glorificado: que deis muitos frutos e vos torneis meus discípulos. Com o meu Pai me ama, assim também eu vos amo.Permanecei no meu amor.” (Jo 15,8-9)</p><h4>Para refletir</h4><p>“Deus pode dar-nos os recursos interiores e necessários para enfrentar as tempestades e os problemas da vida.”</p></div>' },
      { day: 'Quarto Dia', title: 'O martírio: amor até as últimas consequências', content: '<div class="day-specific-content"><h4>Um pouco de história</h4><p>Como também se negara a adorar outros deuses e preferindo a morte à renúncia ao cristianismo, Cecília foi presa por ordem do imperador Severo e condenada a ser decapitada. Porém, por três vezes, a lâmina caiu sobre sua cabeça, sem que esta se soltasse do corpo. O milagre se deveu ao fato de Cecília ter pedido a Deus a graça de ver mais uma vez o papa Urbano. Três dias depois, when ele chegou ao cárcere e a abençoou, ela faleceu devido aos ferimentos no pescoço.</p><h4>Leitura Bíblica</h4><p>“Então Jesus disse aos discípulos: Se alguém quer vir após mim, renuncie a si mesmo, tome sua cruz e siga-me. Pois quem quiser salvar a sua vida a perderá; e quem perder sua vida por causa de mim a encontrará” (Mt 16,24-25)</p><h4>Para refletir</h4><p>“Obra importante é começar a conversão do mundo por nossa própria conversão”</p></div>' },
      { day: 'Quinto Dia', title: 'Padroeira dos Músicos', content: '<div class="day-specific-content"><h4>Um pouco de história</h4><p>Provavelmente a degolação de santa Cecília ocorreu em Roma, em 223. Filha de pais nobres, recebeu uma educação aprimorada, em que a prática da música e da poesia lhe era familiar. Nada, porém, do que se sabe sobre a sua vida nos leva a presumir que a mártir tivesse destaque na música. Há apenas no ofício da santa uma antífona que se refere a instrumentos musicais e cânticos. Possivelmente, tocasse algum instrumento, talvez harpa, saltério ou cítara, que servia para acompanhar seus piedosos cantares a Deus, a quem consagrara sua vida e todo o seu ser.</p><h4>Leitura Bíblica</h4><p>“Cantai ao Senhor um cântico novo, pois ele fez maravilhas. Deu-lhe vitória sua mão direita e seu braço santo. O Senhor manifestou sua salvação, aos olhos dos povo revelou sua justiça” (Sl 98 [97],1-2)</p><h4>Para refletir</h4><p>“Nada mais belo na vida que acender nas almas a luz da alegria”</p></div>' },
      { day: 'Sexto Dia', title: 'Um canto à castidade', content: '<div class="day-specific-content"><h4>Um pouco de história</h4><p>Segundo uma antiga tradição, Santa Cecília cantou para Valeriano a beleza da castidade e o fez de modo tão eficaz que ele decidiu respeitar esse voto. Talvez por isso é que ela seja invocada como padroeira da música e do canto. O certo é que os músicos a adotaram como protetora. Nos primeiros séculos do cristianismo, ela se impôs á veneração daqueles que a conheceram e dela se aproximaram. Muitas associações e a classe dos músicos se organizaram no mundo católico sob η égide protetora de Santa Cecília.</p><h4>Leitura Bíblica</h4><p>“Eu vos exorto: deixai-vos sempre guiar pelo Espírito, e nunca satisfaçais o que deseja uma vida carnal. Pois o que a carne deseja é contra o Espírito, e o que o Espírito deseja é contra a carne: são o oposto um do outro, e por isso nem sempre fazeis o que gostaríeis de fazer.” (Gl 5,16).</p><h4>Para refletir</h4><p>“Um dia sem oração é como um céu sem sol e um jardim sem flores.”</p></div>' },
      { day: 'Sétimo Dia', title: 'Cecília: uma existência inspiradora', content: '<div class="day-specific-content"><h4>Um pouco de história</h4><p>Os mais célebres pintores e escultores procuraram dar a santa Cecília a figura de artista, que a tradição lhe atribui. Uns a imaginaram cantando ou tocando harpa, cítara, rabecão. Outros se limitaram dar-lhe a pureza de linhas no rosto virginal, empunhando a palma simbólica do martírio, num fundo de emblemas musicais. O italiano Carlos Moderno século (XVI-XVII) esculpiu a famosa estátua da santa, caída e com o pescoço parcialmente cortado. Na festa anual, em sua homenagem (22 de novembro), que durante muito tempo se realizou em Paris, era de praxe estrear uma missa, composta especialmente para o evento por um músico famoso como Haendel, Clark, Gounoud, Sains-Saëns, Purcell. Entre os contemporâneos, o inglês Benjamin Britten escreveu uma “Ode a santa Cecília”.</p><h4>Leitura Bíblica</h4><p>“Sabeis em que momento estamos: já é hora de despertardes do sono. Agora, a salvação esta mais perto de nós do que when abraçamos a fé. A noite está quase passando, o dia vem chegando abandonemos as obras das trevas e vistamos as armas da luz” (Rm 13,11-12).</p><h4>Para refletir</h4><p>“O Senhor disse a Josué: ‘Não temas nem te acovardes. Toma contigo todos os guerreiros, levanta-te e sobe a Hai! Vê, estou entregando em tua mão o rei de Hai, junto com o povo, a cidade e a terra. Trata a cidade e o rei conforme tratastes Jericó e seu rei’” (Js 8,1-2a)</p></div>' },
      { day: 'Oitavo Dia', title: 'O culto a santa Cecília', content: '<div class="day-specific-content"><h4>Um pouco de história</h4><p>Santa Cecília foi uma das santas mais veneradas durante a Idade Média e teve seu nome incluído no cânone da missa. Entre as santas, é a que tem maior número de basílicas em Roma. A nenhuma outra santa a cristandade consagrou tantas igrejas quanto ela.</p><h4>Leitura Bíblica</h4><p>“Caríssimos, não estranheis o fogo da provocação que lavra entre nós, como se alguma coisa de estranho vos tivesse acontecendo. Pelo contrário, alegrai-vos por participar dos sofrimentos de Cristo, para que possais exultar de alegria when se revelar a sua glória” (1 Pd 4,12-13)</p><h4>Para refletir</h4><p>“Ler o Evangelho com espírito de fé e humildade é beber em sua fonte a força onipotente de Deus.”</p></div>' },
      { day: 'Nono Dia', title: 'Santa Cecília no Brasil', content: '<div class="day-specific-content"><h4>Um pouco de história</h4><p>Em 1860, por meio de um abaixo- assinado, a população paulista conseguiu seu objetivo: construção da igreja de Santa Cecília. Em 1861, os devotos construíram a capela. A atual igreja, edificada no início do século XX no bairro Santa Cecília, em São Paulo, é decorada com telas de Benedito Calixto e de Oscar Pereira da Silva, reproduzindo o batismo de Valeriano, marido de Santa Cecília, os seus esponsais, a imposição das mãos de santo Urbano em santa Cecília, o julgamento, o martírio e o túmulo – motivos inspirados na vida da padroeira dos músicos.</p><h4>Leitura Bíblica</h4><p>“Quem nos separará do amor de Cristo? Tribulação, angústia, perseguição, fome, nudez, perigo, espada? Pois está escrito: ‘Por tua causa somos entregues à morte, o dia todo; fomos tidos como ovelhas destinadas ao matadouro’. Mas, em tudo isso, somos mais do que vencedores, graças aquele que nos amou” (Rm 8,35-37)</p><h4>Para refletir</h4><p>“Ter medo de amar é ter medo da vida, e os que temem a vida já estão em boa parte mortos.”</p></div>' }
    ]
  },
  cristo_rei: {
    saintName: 'Cristo Rei',
    novenaTitle: 'Novena a Cristo Rei',
    description: 'Prepare-se para a Solenidade de Nosso Senhor Jesus Cristo, Rei do Universo, reconhecendo Sua soberania sobre sua vida e o mundo.',
    initialPrayer: `<div class="prayer-block"><p>Senhor Jesus, ao prepararmo-nos para celebrar a Vossa festa como Rei do Universo, queremos abrir os nossos corações para dizer: "Venha a nós o Vosso Reino!" Concedei-nos a graça de nos identificarmos plenamente Convosco, para que, vendo o mundo com os Vossos olhos e amando-o com o Vosso coração, permitamos que a semente do Vosso Reino cresça nas nossas vidas, na dos nossos irmãos e na sociedade.</p></div>`,
    finalPrayer: `<div class="prayer-block"><p>V/ Cristo Rei nosso!<br/>R/ Fazei o meu coração semelhante ao Vosso.</p><p>Senhor, que sejais sempre o Rei dos nossos corações. Que tenhamos os olhos de um apóstolo, os vossos olhos, para descobrir-Vos sempre presente nas encruzilhadas da vida, no irmão necessitado. Ajudai todos os membros do Regnum Christi a estarem dispostos a aprender convosco a não cair em tentação.<br/>R/ Amém.</p></div>`,
    days: [
      {
        day: 'Dia 1',
        title: '"Meu Reino não é deste mundo" (Jo 18, 33-37)',
        content: `<div class="day-specific-content">
                <p>Pilatos entrou novamente no pretório, chamou Jesus e perguntou-lhe: "És tu o rei dos judeus?" Jesus respondeu: "Dizes isso por ti mesmo ou outros te disseram isso de mim?" Pilatos respondeu: "Acaso sou judeu? Teus compatriotas e os chefes dos sacerdotes te entregaram a mim. O que fizeste?" Jesus respondeu: "Meu Reino não é deste mundo. Se o meu Reino fosse deste mundo, meus servos teriam lutado para que eu não fosse entregue aos judeus. Mas meu Reino não é daqui." Pilatos lhe disse: "Então, és rei?" Jesus respondeu: "Tu dizes que eu sou rei. Para isso nasci e para isso vim ao mundo: para dar testemunho da verdade. Todo aquele que é da verdade ouve a minha voz."</p>
                <p class="italic my-4">(momento de silêncio)</p>
                <h4>Reflexão</h4>
                <p>"Deus é amor" e deseja estabelecer em nosso mundo o Seu Reino de amor, justiça e paz. Este é o Reino onde Cristo é o Rei, que se estende até o fim dos tempos." (Papa Francisco, Angelus, 25 de novembro de 2018)</p>
            </div>`
      },
      {
        day: 'Dia 2',
        title: 'O mundo no qual Cristo deseja reinar (Mt 9, 35-37)',
        content: `<div class="day-specific-content">
                <p>Jesus percorria todas as cidades e vilas, ensinando nas sinagogas, proclamando a Boa Nova do Reino e curando todas as enfermidades e doenças. Ao ver a multidão, teve compaixão, pois estavam cansados e abatidos, como ovelhas sem pastor. Então disse aos discípulos: "A colheita é grande, mas os trabalhadores são poucos."</p>
                <p class="italic my-4">(momento de silêncio)</p>
                <h4>Reflexão</h4>
                <p>"Podemos anunciar Jesus apenas habitando na cultura do nosso tempo (…) O zelo apostólico nunca é uma simples repetição de um estilo adquirido, mas um testemunho de que o Evangelho está vivo hoje e aqui para nós. Conscientes disso, olhamos para nossa época e cultura como um dom. Evangelizá-las não significa julgá-las de longe... mas descer às ruas, ir aos lugares onde se vive... habitar as encruzilhadas dos caminhos... Significa ser, como Igreja, 'fermento de diálogo, de encontro, de unidade'." (Papa Francisco, Catequese, 29 de novembro de 2023).</p>
            </div>`
      },
      {
        day: 'Dia 3',
        title: 'Enfrentar as tentações (Mt 4, 1-11)',
        content: `<div class="day-specific-content">
                <p>Então Jesus foi levado pelo Espírito ao deserto, para ser tentado pelo demônio... "Se és Filho de Deus, manda que estas pedras se transformem em pães". Jesus respondeu: "Está escrito: 'O homem não vive somente de pão, mas de toda palavra que sai da boca de Deus'"... O demônio levou Jesus a uma montanha muito alta; de lá mostrou-lhe todos os reinos do mundo com todo seu esplendor e disse: "Te darei tudo isso, se te prostrares para me adorar". Jesus respondeu: "Vai embora, Satanás, because está escrito: 'Adorarás o Senhor, teu Deus, e só a Ele prestarás culto'".</p>
                <p class="italic my-4">(momento de silêncio)</p>
                <h4>Reflexão</h4>
                <p>"A tentação nos fecha todos os horizontes 'e assim nos conduz ao pecado'. Quando somos tentados, 'somente a Palavra de Deus, a palavra de Jesus nos salva. Ouvir essa Palavra nos abre o horizonte', pois 'Ele está sempre disposto a nos ensinar como sair da tentação. Jesus é grandioso because não apenas nos faz superar a tentação, mas também nos dá mais confiança.'" (Papa Francisco, homilia, 18 de fevereiro de 2014)</p>
            </div>`
      },
      {
        day: 'Dia 4',
        title: 'Ver o mundo com os olhos de Cristo (Lc 19, 1-10)',
        content: `<div class="day-specific-content">
                <p>Tendo entrado em Jericó, Jesus passava pela cidade. Havia ali um homem chamado Zaqueu... Ele correu à frente e subiu num sicômoro, para ver Jesus... Quando chegou ao lugar, Jesus olhou para cima e disse: “Zaqueu, desce depressa! Hoje eu devo ficar na tua casa”... Jesus lhe disse: “Hoje chegou a salvação a esta casa, pois também este é um filho de Abraão. Com efeito, o Filho do Homem veio procurar e salvar o que estava perdido”.</p>
                <p class="italic my-4">(momento de silêncio)</p>
                <h4>Reflexão</h4>
                <p>“Deus não nos olhou do alto para nos humilhar nem julgar, não; pelo contrário, rebaixou-se ao ponto de nos lavar os pés... o cruzar dos olhares entre Zaqueu e Jesus parece resumir toda a história da salvação... o olhar de Deus nunca para no nosso passado cheio de erros, mas olha com infinita confiança para que nos podemos tornar (…). nós, cristãos, devemos ter o olhar de Cristo, que abraça, que procura quem está perdido, com compaixão.” (Papa Francisco. Angelus, 30 de outubro de 2022).</p>
            </div>`
      },
      {
        day: 'Dia 5',
        title: 'Amar o mundo com o Coração de Cristo (Jo 10, 11-18)',
        content: `<div class="day-specific-content">
                <p>“Eu sou o bom pastor. O bom pastor dá sua vida pelas ovelhas... Eu conheço as minhas ovelhas e elas me conhecem, assim como o Pai me conhece e eu conheço o Pai. Eu dou minha vida pelas ovelhas. Tenho ainda outras ovelhas, que não são deste redil; também a essas devo conduzir... Ninguém me tira a vida, mas eu a dou livremente.”</p>
                <p class="italic my-4">(momento de silêncio)</p>
                <h4>Reflexão</h4>
                <p>“O Coração do Bom Pastor diz-nos que o seu amor não tem limites, não se cansa nem se rende jamais. Nele vemos a sua doação incessante, sem limites... nele descobrimos sempre de novo que Jesus nos ama «até ao fim»... O Coração do Bom Pastor está inclinado para nós, concentrado especialmente sobre quem está mais distante; para aí aponta obstinadamente a agulha da sua bússola... because deseja alcançar a todos e não perder ninguém.” (Papa Francisco. Homilia da Solenidade do Sagrado Coração de Jesus, 3 de junho de 2016).</p>
            </div>`
      },
      {
        day: 'Dia 6',
        title: 'Fixar o olhar em Cristo (Mt 14, 22-33)',
        content: `<div class="day-specific-content">
                <p>“...O barco, entretanto, já longe da terra, era sacudido pelas ondas, pois o vento era contrário... Jesus foi até os discípulos, andando sobre o mar... Pedro desceu do barco e começou a andar sobre as águas, em direção a Jesus. Percebendo o vento, porém, ficou com medo e, when começou a afundar, gritou: “Senhor, salva-me!” Jesus logo estendeu a mão, segurou-o e disse-lhe: “Homem fraco na fé, por que duvidaste?”</p>
                <p class="italic my-4">(momento de silêncio)</p>
                <h4>Reflexão</h4>
                <p>“Esta narração é um bonito ícone da fé do apóstolo Pedro. Na voz de Jesus que lhe diz: ”Vem!”, ele reconhece o eco do primeiro encontro... Ao contrário, Pedro começa a afundar no momento em que desvia o seu olhar de Jesus, deixando-se abalar pelas adversidades que o circundam. Mas o Senhor está sempre presente... Na figura de Pedro, com os seus impulsos e as suas debilidades, está descrita a nossa própria fé: sempre frágil e pobre, inquieta e contudo vitoriosa, a fé do cristão caminha ao encontro do Senhor ressuscitado.” (Papa Francisco. Angelus, 10 de agosto de 2014).</p>
            </div>`
      },
      {
        day: 'Dia 7',
        title: 'Que todos sejam um para que o mundo creia (Jo 17, 20-26)',
        content: `<div class="day-specific-content">
                <p>“Eu não rogo somente por eles, mas também por aqueles que hão de crer em mim, pela palavra deles. Que todos sejam um, como tu, Pai, estás em mim, e eu em ti. Que também eles estejam em nós, a fim de que o mundo creia que tu me enviaste. Eu lhes dei a glória que tu me deste, para que eles sejam um, como nós somos um, eu neles e tu em mim.”</p>
                <p class="italic my-4">(momento de silêncio)</p>
                <h4>Reflexão</h4>
                <p>“Ser membros do Corpo de Cristo nos une de forma indissolúvel ao Senhor e, ao mesmo tempo, aos demais. Na Igreja, ‘ninguém deve ser um mero espectador ou, pior ainda, estar à margem’... Somente juntos, na harmonia da diversidade, podemos dar testemunho da beleza do amor que libera, que se dá, que permite sair das dinâmicas negativas do egoísmo, dos conflitos e das oposições” (Papa Francisco, Discurso aos responsáveis da Conf. Episcopal Italiana, 16 de fevereiro de 2023).</p>
            </div>`
      },
      {
        day: 'Dia 8',
        title: 'Sair ao encontro dos outros nas encruzilhadas do caminho (Mt 22, 1-14)',
        content: `<div class="day-specific-content">
                <p>“...‘O Reino dos Céus é como um rei que preparou a festa do casamento de seu filho... ‘A festa do casamento está pronta, mas os convidados não foram dignos dela. Portanto, ide às encruzilhadas dos caminhos e convidai para o casamento todos os que encontrardes’. Os servos saíram pelos caminhos e reuniram todos os que encontraram, maus e bons. E a sala do casamento ficou cheia de convidados.”</p>
                <p class="italic my-4">(momento de silêncio)</p>
                <h4>Reflexão</h4>
                <p>“É necessário estar nas encruzilhadas do hoje. Abandoná-las, empobreceria o Evangelho e reduziria a Igreja a uma seita. Frequentá-las, pelo contrário, ajuda-nos a nós, cristãos, a compreender de forma renovada as razões da nossa esperança, a extrair e a partilhar do tesouro da fé ‘coisas novas e coisas velhas’... Façamos nosso o desejo de Jesus: ajudar os companheiros de viagem a não perder o desejo de Deus, a abrir-lhes o coração e a encontrar o Único que, hoje e sempre, dá a paz e a alegria ao homem.” (Papa Francisco, Catequese - O anúncio é para hoje, 29 de novembro de 2023)</p>
            </div>`
      },
      {
        day: 'Dia 9',
        title: '“O que procuramos?” (Jo 1, 36-39)',
        content: `<div class="day-specific-content">
                <p>“Vendo Jesus passar, ele disse: “Eis o Cordeiro de Deus”! Os dois discípulos ouviram-no dizer isso, e seguiram Jesus. Jesus voltou-se para trás e, vendo que eles o seguiam, perguntou-lhes: “Que procurais?” Eles responderam: “Rabi – que quer dizer Mestre – onde moras?” Ele disse: “Vinde e vereis”! Foram, e viram onde morava, e permaneceram com ele aquele dia.”</p>
                <p class="italic my-4">(momento de silêncio)</p>
                <h4>Reflexão</h4>
                <p>“Jesus propõe-se a envolver-nos na construção do Reino dos Céus, apresentando uma caraterística essencial da vida cristã... aderem plenamente ao Reino aqueles que estão dispostos a apostar tudo, que são corajosos.(...) Somos chamados a assumir a atitude destas duas personagens evangélicas, tornando-nos também nós saudáveis buscadores inquietos do Reino dos Céus. Nos nossos dias... a vida de algumas pessoas pode ser medíocre e monótona because provavelmente não foram em busca de um verdadeiro tesouro.” (Papa Francisco, Angelus, 26 de julho 2020).</p>
            </div>`
      }
    ]
  },
  catarina_alexandria: {
    saintName: 'Santa Catarina de Alexandria',
    novenaTitle: 'Novena a Santa Catarina de Alexandria',
    description: 'Conheça a história inspiradora de Santa Catarina de Alexandria, virgem e mártir. Virgin e mártir da Igreja, exemplo de humildade, coragem e vida de oração.',
    initialPrayer: ` <div class="prayer-block">
        <h4 class="section-title">Oração preparatória</h4>
        <p>Altíssimo e soberano Senhor, sempre admirável em Vossos santos, e que podeis fazer das pedras filhos de Abraão, e de instrumentos fracos e de nenhuma consideração perante os homens, Vos servis para efeitos estupendos continuando até agora a Vossa obra, que já assim começastes com os Vossos Apóstolos, homens de nenhuma consideração perante o mundo. Em S. Catarina, Vossa esposa, virgem e mártir, Vos dignastes, Senhor, manifestar a Vossa onipotência dotando-a, não só do dom da castidade e constância necessária para o martírio, mas também de uma extraordinária sabedoria e inteligência incomuns às pessoas do seu sexo. Nesta novena Vos pedimos a graça de nos dar um ardor à santíssima religião que professamos, a fim de que, se não temos o ânimo e constância de morrer mártires como ela, tenhamos ao menos um ardente zelo para viver na observância dos Vossos preceitos, e dos mandamentos da Santa Madre Igreja. Mostre, ao menos, o nosso procedimento a verdade da religião santa que professamos, já que não a mostramos com invencíveis argumentos teológicos, e filosóficos, como a gloriosa S. Catarina perante os tiranos. Mas não sirvam de obstáculo os nossos pecados à Vossa graça, para o que Vos pedimos humildemente perdão de todos eles pelos merecimentos e intercessão de tão gloriosa santa.</p>
        <p class="mt-4">Seguem-se três Pai-Nossos, Ave-Marias e Glórias ao Pai.</p>
        <p class="mt-4">V. Santa Catarina, mestra dos doutores.<br/>R. Rogai por todos os pecadores.</p>
    </div>`,
    finalPrayer: ` <div class="prayer-block">
        <h4 class="section-title">Oferecimento</h4>
        <p>V. Rogai por nós, Bem-aventurada Catarina.<br/>R. Para que sejamos dignos das promessas de Cristo.</p>
        <p class="mt-4 font-semibold">Oremos: Ó Deus, que destes a Lei a Moisés no alto do monte Sinai, e que milagrosamente colocastes nesse mesmo lugar, por intermédio dos anjos, o corpo da Bem-aventurada Catarina, fazei que, pelos seus merecimentos e intercessão, possamos subir também àquele monte que é Jesus Cristo. Que convosco vive e reina por todos os séculos dos séculos. Amém.</p>
    </div>`,
    days: [
      {
        day: 'Primeiro Dia',
        title: 'Meditação — 1º Dia',
        content: `<div class="day-specific-content"><p>Consideremos que sendo Catarina nascida de nobres pais em Alexandria, foi educada nas artes liberais que ilustram o entendimento e na santa doutrina cristã, aprendendo a fundamento fundo as provas da religião. Que diferente educação tem entre nós muitas senhoras nobres, que só leem os folhetins e novelas? O resultado de tais leituras é funesto, como a experiência o mostra, infelizmente. Em S. Catarina, tão felizes princípios, como preciosa semente, produziram frutos de benção, que vem a ser: a virgindade ilibada, a confusão da idolatria, um glorioso martírio e a eterna felicidade, deixando edificante exemplo à mocidade cristã.</p></div>`
      },
      {
        day: 'Segundo Dia',
        title: 'Meditação — 2º Dia',
        content: `<div class="day-specific-content"><p>Consideremos como S. Catarina, progredindo em seus conhecimentos e principalmente na sagrada teologia, quando chegou aos 18 anos de sua idade tinha já adquirido tal ciência, que facilmente arguia e vencia os sábios daquele tempo. Louvores sejam dados ao Senhor das ciências, que assim soube formar e ilustrar o entendimento de uma donzela, quando as outras gastam seu tempo nas galas e divertimentos profanos, com escândalo do mundo, e prejuízo próprio. A ciência da salvação deve ser a primeira ciência para tudo, como aquela cujas consequências são eternas, e sem a qual todas as outras, cujos efeitos ficam neste mundo, são vaidades e ninharias.</p></div>`
      },
      {
        day: 'Terceiro Dia',
        title: 'Meditação — 3º Dia',
        content: `<div class="day-specific-content"><p>Consideremos como observando S. Catarina que o tirano Maximino, depois de ter atormentado com diversos gêneros de martírios a muitos cristãos por professarem a religião de Jesus Cristo, persistia em sua tirania, encheu-se de ânimo e se apresentou ao tirano, lançando-lhe em rosto a injustiça de fazer sofrer a sujeitos tão inocentes os castigos destinado aos ladrões e facinorosos. Que espetáculo! Que ânimo! Uma delicada donzela lançar em rosto ao imperador, cercado de algozes prontos a fazê-la em pedaços ao primeiro sinal de seu senhor, em seu proceder injusto e tirânico. Oh, como são admiráveis os efeitos do Espírito Santo, que pôde dar tanto valor a uma moça de 18 anos.</p></div>`
      },
      {
        day: 'Quarto Dia',
        title: 'Meditação — 4º Dia',
        content: `<div class="day-specific-content"><p>Consideremos como o imperador, pasmado do valor e eloquência de Catarina, manda-a pôr em custódia, e que sejam chamados os sábios da gentilidade, para argumentarem e disputarem com a santa, a fim de a fazerem renegar a fé cristã, e a converterem ao culto dos falsos deuses. Concorrem, com efeito, os doutores gentios e começam as disputas. Está uma cordeirinha entre lobos. Mas quem é como Deus? Quem poderá pôr abaixo a doutrina daquele Senhor que disse: “Não prepareis as respostas que tendes de dar, porque naquela ocasião se vos inspirará o que haveis do responder.”. Assim aconteceu pontualmente, pois tais coisas disse a nossa santa, que convenceu aqueles sábios da verdade da religião de Santa Catarina.</p></div>`
      },
      {
        day: 'Quinto Dia',
        title: 'Meditação — 5º Dia',
        content: `<div class="day-specific-content"><p>Consideremos como o resultado das disputas de S. Catarina não só foi o vencimento e palma que a santa conseguiu dos doutores gentios, mas tais razões lhe alegou a santa, que de doutores idólatras se tornaram cristãos fervorosos, confessores da fé, de modo que muitos deles morreram mártires, dando a vida por Jesus Cristo Nosso Senhor. Eis aqui os efeitos da sabedoria de S. Catarina. Reconheçamos que a ignorância dos princípios da religião é o motivo por que muitos meio sábios, ou que se persuadem que sabem outras matérias, dão regras sobre o que ignoram, e caem em palpáveis erros sobre matérias de religião, perdendo-se a si, e aos que os seguem, verificando-se que um cego conduz outro cego.</p></div>`
      },
      {
        day: 'Sexto Dia',
        title: 'Meditação — 6º Dia',
        content: `<div class="day-specific-content"><p>Consideremos como o tirano, ao ver que Catarina vencia os sábios, e que deste modo perdia tempo, usou dos meios de brandura e de lisonjeiras promessas. Mas combatia sem fruto contra um rochedo: virou-se, pois, para os rigores que o Demônio lhe sugeria e mandou que a santa fosse açoitada cruelmente. Eis uma santa donzela no meio dos algozes, sofrendo como Jesus Cristo no palco de Pilatos. São inauditas os ardis e indústrias que o Demônio inventou contra os cristãos. Confessavam os sábios a verdade da Religião pelos argumentos e provas invencíveis da nossa santa, e o tirano lhe paga com uma chuva de açoites sobre o virginal e delicado corpo. Seja Deus bendito para sempre. Enchamo-nos de vergonha, pois nada queremos sofrer por Deus.</p></div>`
      },
      {
        day: 'Sétimo Dia',
        title: 'Meditação — 7º Dia',
        content: `<div class="day-specific-content"><p>Consideremos como, depois da rigorosa flagelação da nossa santa, mandou o tirano encerrá-la no cárcere, e que lhe fosse negada toda comida e bebida: e assim esteve reclusa por onze dias; mas teve a consolação de converter a mulher do imperador, que a foi visitar, e a Porfírio, um dos oficiais generais do império, que tão firmes ficaram, que vieram a morrer mártires por ela. De modo que se serviu Deus de uma fraca donzela para converter os sábios do mundo, e os grandes, e até da família do mesmo imperador. Bendito seja o Deus de Israel que, assim por meios desproporcionados, aumentou o seu rebanho e povoou o Céu.</p></div>`
      },
      {
        day: 'Oitavo Dia',
        title: 'Meditação — 8º Dia',
        content: `<div class="day-specific-content"><p>Consideremos como o tirano, não conseguindo o seu intento sobre S. Catarina, mandou armar uma roda de amiudadas navalhas, para dilacerar o santo corpo de Catarina. Começa a trabalhar a máquina, mas apenas a santa fez oração a Deus, tudo se desconjuntou e desfez: e Deus, por Sua misericórdia, se serviu deste desmancho para converter a muitos dos espectadores que ali estavam presentes a este horroroso espetáculo. Assim se servia Nosso Senhor para aumentar o número dos Seus filhos, dos mesmos meios que o Demônio inspirava aos perseguidores para os destruir. À vista do que devemos cada vez mais amar e agradecer a Deus o benefício que nos fez, ao nos chamar à verdadeira fé.</p></div>`
      },
      {
        day: 'Nono Dia',
        title: 'Meditação — 9º Dia',
        content: `<div class="day-specific-content"><p>Consideremos como apesar de tantas provas de razões e milagres com que Deus mostrava a verdade da santa religião por meio de S. Catarina, estava cada vez mais obstinado o ímpio imperador, e assim mandou degolar a S. Catarina, cuja alma voou ao Céu, com a dobrada coroa de virgem e mártir. Dizem que seu corpo fora levado pelos anjos ao Monte Sinai. Veremos no dia do juízo como aparece o ímpio tirano Maximino e como aparece a virgem e mártir S. Catarina. Amemos a religião, que até agora não foi vencida, nem nunca o poderá ser.</p></div>`
      }
    ]
  },
  santo_andre: {
    saintName: 'Santo André Apóstolo',
    novenaTitle: 'Novena a Santo André Apóstolo',
    description: 'Irmão de São Pedro e primeiro a seguir o Cristo, Santo André é padroeiro da Escócia e intercede por todos que buscam vocações.',
    initialPrayer: `<div class="prayer-block"><p>Oração Inicial para todos os dias.</p></div>`,
    finalPrayer: `<div class="prayer-block"><p>Oração Final para todos os dias.</p></div>`,
    days: Array.from({ length: 9 }, (_, i) => ({
      day: `${i + 1}º Dia`,
      title: `Oração do ${i + 1}º Dia`,
      content: `<div class="day-specific-content"><p>Conteúdo da oração para o ${i + 1}º dia da novena.</p></div>`
    }))
  },
  /* imaculada_conceicao moved to the end of novenaData to appear last in lists */
  teresinha: {
    saintName: 'Santa Teresinha',
    novenaTitle: 'Novena Milagrosa de Santa Terezinha do Menino Jesus',
    description: 'A Novena das Rosas',
    initialPrayer: `<div class="initial-prayer-text"><div class="prayer-block"><p>Santíssima Trindade: Pai, Filho e Espírito Santo: eu vos agradeço por todas as graças com que enriqueceste a vida de vossa serva, Santa Terezinha do Menino Jesus e da Sagrada Face, nestes 24 anos que passou na terra. E pelos méritos de tão querida santinha, concedei-me a graça que ardentemente vos peço … (faça aqui o pedido), se for conforme a Vossa Santíssima Vontade e para a salvação de minha alma (ou da pessoa por quem está rezando).</p><p>Ajudai minha fé e minha esperança, Santa Terezinha, cumprindo mais uma vez vossa promessa de que ficareis no Céu a fazer o bem na terra, permitindo que eu ganhe um rosa em sinal de que alcançarei a graça pedida.</p></div></div>`,
    finalPrayer: `<div class="final-prayer-text"><p class="mt-4 font-semibold">Em seguida rezar 24 vezes, por cada ano de Santa Terezinha na terra:<br>“Glória ao Pai, ao Filho e ao Espírito Santo como era no princípio, agora e sempre. Amém.”<br>Santa Terezinha do Menino Jesus e da Sagrada Face, rogai por mim (ou o nome da pessoa por quem está intercedendo).</p><p class="mt-4 font-semibold">Para finalizar rezar: 1 Ave-Maria e 1 Pai-Nosso.</p></div>`,
    days: [
      {
        day: 'Primeiro Dia',
        title: 'Pelo Clero',
        content: '<div class="day-specific-content"><p>Neste dia rezemos pelos que exercem o ministério sacerdotal, pela santificação do Clero e pelas intenções do coração do Santo Padre.</p></div>'
      },
      {
        day: 'Segundo Dia',
        title: 'Pelos Missionários',
        content: '<div class="day-specific-content"><p>Neste dia rezemos pelos missionários espalhados no mundo inteiro e suas necessidades espirituais e materiais.</p></div>'
      },
      {
        day: 'Terceiro Dia',
        title: 'Pelos Cristãos perseguidos e martirizados',
        content: '<div class="day-specific-content"><p>Neste dia rezemos pelos Cristãos que são perseguidos e martirizados por sua fidelidade e amor a Cristo.</p></div>'
      },
      {
        day: 'Quarto Dia',
        title: 'Pelas Famílias',
        content: '<div class="day-specific-content"><p>Neste dia rezemos pela união e santificação das famílias.</p></div>'
      },
      {
        day: 'Quinto Dia',
        title: 'Pelos Jovens',
        content: '<div class="day-specific-content"><p>Neste dia rezemos pelos jovens do Projeto Juventude para Jesus e pela juventude do mundo inteiro.</p></div>'
      },
      {
        day: 'Sexto Dia',
        title: 'Pelos que sofrem de depressão',
        content: '<div class="day-specific-content"><p>Neste dia rezemos pelos que sofrem de depressão, pelos que vivem oprimidos e sem sentido de vida.</p></div>'
      },
      {
        day: 'Sétimo Dia',
        title: 'Para que todos amem a Cristo',
        content: '<div class="day-specific-content"><p>Neste dia rezemos para que todos tenham um coração inflamado de amor a Cristo.</p></div>'
      },
      {
        day: 'Oitavo Dia',
        title: 'Pelos prisioneiros',
        content: '<div class="day-specific-content"><p>Neste dia rezemos por todos os encarcerados e pelos que se encontram presos em si mesmo, pelo pecado.</p></div>'
      },
      {
        day: 'Nono Dia',
        title: 'Pelos incrédulos',
        content: '<div class="day-specific-content"><p>Neste último dia da Novena de Santa Terezinha, rezemos pelos que não creem, não esperam e não confiam em Deus.</p></div>'
      }
    ]
  },
  lucas: {
    saintName: 'S. Lucas',
    novenaTitle: 'Novena a São Lucas pela Saúde',
    description: 'Padroeiro dos médicos e artistas, reze pela saúde e pela inspiração divina.',
    initialPrayer: `<div class="initial-prayer-text"><div class="prayer-block"><p>Comecemos, Em nome do Pai, do Filho e do Espírito Santo. Amém.</p><p>Caro São Lucas, amo-te de todo o coração. Inflamar meu coração com um amor ardente a Deus e adoração à Trindade.</p><p class="italic my-4">Por favor, interceda por mim e ajude-me nesta necessidade: (pense em sua necessidade)</p><p>São Lucas, por favor, ajude-me a crescer na graça e na santidade, mas acima de tudo, para que eu possa descansar contigo na eternidade, ajude-me a fazer a vontade de Deus a cada dia com o melhor de minha capacidade. Ajude-me a ouvir a voz do meu Pai e amar a todos com todo o meu coração. Querido São Lucas, eu te amo.</p></div></div>`,
    finalPrayer: `<div class="final-prayer-text"><p class="mt-4 font-semibold">Rezar um Pai Nosso, uma Ave Maria e um Glória ao Pai.</p></div>`,
    days: [
      { day: 'Primeiro Dia', title: '', content: '' },
      { day: 'Segundo Dia', title: '', content: '' },
      { day: 'Terceiro Dia', title: '', content: '' },
      { day: 'Quarto Dia', title: '', content: '' },
      { day: 'Quinto Dia', title: '', content: '' },
      { day: 'Sexto Dia', title: '', content: '' },
      { day: 'Sétimo Dia', title: '', content: '' },
      { day: 'Oitavo Dia', title: '', content: '' },
      { day: 'Nono Dia', title: '', content: '' }
    ]
  },
  pedro_alcantara: {
    saintName: 'S. Pedro de A.',
    novenaTitle: 'Novena a São Pedro de Alcântara',
    description: 'Reformador da Ordem Franciscana e grande penitente, São Pedro intercede pela conversão e pela busca da santidade.',
    initialPrayer: `<div class="initial-prayer-text"><h4 class="section-title">Oração Inicial</h4><div class="prayer-block"><p>Deus e Senhor nosso, que nos dais, em vossos santos, admiráveis exemplos de virtudes, e que, no bem-aventurado São Pedro de Alcântara, nos apresentais um modelo acabado de oração, de humildade, de penitência e de caridade ardente: Fazei que copiemos, em nosso coração, tão eximias virtudes, e que apenas na cruz e na mortificação, que são chaves do céu, ponhamos, como São Pedro, nossas maiores complacências. Amém.</p></div></div>`,
    finalPrayer: `<div class="final-prayer-text"><div class="w-16 h-px bg-white/20 my-6 mx-auto"></div><p class="mb-4">Pai-Nosso, Ave-Maria, Glória.<br><i>Pede-se a graça que se deseja alcançar com a novena.</i></p><h4 class="section-title">Responsório</h4><div class="prayer-block"><p>Soberano Redentor,<br>a quem Pedro serviu fiel<br>todo o tempo de sua vida,<br>de modo que detida<br>foi vossa ira por ele:<br><br>Fazei, Deus meu, o favor<br>de que seja concedida<br>nossa súplica rendida<br>por seu mérito e vosso amor.<br><br>Pois, Senhor,<br>destes palabra cumprida<br>de que, o que em seu nome peça,<br>vos teria por devedor:<br><br>Fazei, Deus meu, o favor<br>de que seja concedida<br>nossa súplica rendida<br>por seu mérito e vosso amor.<br><br>Rogai, Pedro, por nós<br>à divina Bondade,<br>para que assim consigamos<br>sua soberana Piedade. Amém.</p></div><h4 class="section-title">Oração final</h4><div class="prayer-block"><p>Onipotente e sempre eterno Deus, que, por vossos santos, vos dignas fazer sempre maravilhas: vos rogamos humildemente que, assim como tens prometido escutar, misericordioso, os rogos dos que vos implorem por meio de São Pedro de Alcântara, assim atendas agora, pelos méritos do mesmo, as súplicas que vos fazemos, e derrames, sobre nós, o saudável rocío de vossa bênção, para que, livres de todo mal, mereçamos chegar felizmente ao porto de vossa misericórdia. Por Jesus Cristo nosso Senhor. Amém.</p></div></div>`,
    days: [
      { day: 'Primeiro Dia', title: '', content: '<div class="day-specific-content"><p>Glorioso São Pedro de Alcântara, que, sentindo, em vossa alma, uma grande fome de céu, soubeste renunciar a todas as riquezas e prazeres do mundo: dai-nos força e decisão para apartar de nós tudo quanto impede nossa futura salvação. Amém.</p></div>' },
      { day: 'Segundo Dia', title: '', content: '<div class="day-specific-content"><p>Admirável São Pedro de Alcântara, que, esforçando-vos dia após dia, fostes lavrando, em vossa alma, a efigie de uma grande santidade: ensinai-nos a sermos verdadeiros santos, levando uma vida fervorosa e sem mancha. Amém.</p></div>' },
      { day: 'Terceiro Dia', title: '', content: '<div class="day-specific-content"><p>Penitentíssimo São Pedro de Alcântara, vós, que tiveste sempre a convicção de que, sem mortificação, ninguém se vê livre de pecados; esforça nosso ânimo, para que consigamos imitar vossos rigores e penitencias. Amém.</p></div>' },
      { day: 'Quarto Dia', title: '', content: '<div class="day-specific-content"><p>Piedosíssimo São Pedro de Alcântara, cujos fervores na oração vos arrastaram centenas de vezes ao êxtase e aos arrebatamentos: aquece nossa alma em vosso fervor e ajudai-nos na fidelidade a Deus. Amém.</p></div>' },
      { day: 'Quinto Dia', title: '', content: '<div class="day-specific-content"><p>Caridoso São Pedro de Alcântara, tão solicito sempre pelas necessidades do corpo e alma de vossos próximos; fazei-nos ver que, sem caridade, não seremos discípulos de Cristo nem poderemos entrar no céu. Amém.</p></div>' },
      { day: 'Sexto Dia', title: '', content: '<div class="day-specific-content"><p>Santo benfeitor, São Pedro de Alcântara, que iniciastes a grande Reforma da Ordem Franciscana começando por reformar a fundo a própria vida: fazei que examinemos nossa consciência, para começar ali a reforma que ansiamos ver no mundo. Amém.</p></div>' },
      { day: 'Sétimo Dia', title: '', content: '<div class="day-specific-content"><p>Fervoroso São Pedro de Alcântara, que entraste como franciscano em um convento colocando sob o patrocínio da Santa Mãe de Deus, e designaste com títulos marianos os conventos por vós fundados: Contagiai-nos vosso filial e decisivo amor a Virgem, nossa Mãe. Amém.</p></div>' },
      { day: 'Oitavo Dia', title: '', content: '<div class="day-specific-content"><p>Esforçado discípulo da Santa Cruz, São Pedro de Alcântara, que soubeste cravar-vos nela cada dia de vossa vida: fazei que percamos o medo da cruz, e descubramos, em nossas dores, as imagens dessa cruz que beijamos com devoção. Amém.</p></div>' },
      { day: 'Nono Dia', title: '', content: '<div class="day-specific-content"><p>Bendito São Pedro de Alcântara, filho insigne da Mãe Igreja, e hoje exemplo e glória dos católicos: infundi em nós um vivo e prático amor a Igreja de Jesus Cristo, arca de nossa salvação. Amém.</p></div>' }
    ]
  },
  edwiges: {
    saintName: 'Santa Edwiges',
    novenaTitle: 'Novena a Santa Edwiges',
    description: 'Padroeira dos pobres e endividados, Santa Edwiges é um modelo de caridade e desapego dos bens materiais.',
    initialPrayer: `<div class="initial-prayer-text"><h4 class="section-title">Oração Inicial</h4><div class="prayer-block"><p>Pelo sinal da Santa Cruz, livrai-nos, Deus, nosso Senhor, dos nossos inimigos. Em nome do Pai, e do Filho, e do Espírito Santo. Amém.</p></div></div>`,
    finalPrayer: `<div class="final-prayer-text"><div class="w-16 h-px bg-white/20 my-8 mx-auto"></div><h4 class="section-title">Oração Final</h4><div class="prayer-block"><p>Santa Edwiges, que fostes na Terra amparo para os pobres e desvalidos e socorro dos endividados, confiante vos peço que, no Céu, onde gozais o eterno prêmio da caridade que praticastes, sede minha advogada, concedei-me a graça de que tanto preciso <i>(dizer a graça)</i> e, por fim, a graça suprema da salvação eterna. Amém.</p></div><p class="mt-4 font-semibold">Pai-Nosso; Ave-Maria; Glória ao Pai.<br>Santa Edwiges, rogai por nós!</p></div>`,
    days: [
      {
        day: 'Primeiro Dia',
        title: 'Meditação: o desapego e a mortificação.',
        content: `<div class="day-specific-content"><p>Se alguém deseja ser um cristão verdadeiro, não deve gostar de comodismo. O bem-estar não é condenável, especialmente nos casos de pouca saúde ou when exigido pelas circunstâncias da vida. Mas o que a vida cristã não admite é a procura exagerada do conforto numa exigência esplendorosa e a utilização do dinheiro só para luxos e prazeres.</p><p>Podemos desfrutar de alguma comodidade when temos posses para isso. Ter bens não é contra o Evangelho; a virtude ou o pecado está em saber, ou não, usá-los. Se Deus nos favoreceu com bens terrenos, vamos utilizá-los para o nosso bem e o do próximo. Não permitamos que, por causa do dinheiro, nosso coração fique fechado às necessidades do outro. Esse era o procedimento de Santa Edwiges; era rica em posses, mas tinha o coração livre e desapegado.</p></div>`
      },
      {
        day: 'Segundo Dia',
        title: 'Meditação: saber sofrer como Jesus.',
        content: `<div class="day-specific-content"><p>Quando alguém é atingido na saúde por alguma doença passa a lamentar-se. No entanto, seria conveniente pensar que, em vez de saúde, podia se perder a vida. Sendo assim, todas as vezes que nos vier alguma doença, em vez de ficarmos a reclamar contra tudo e contra todos, abandonemo-nos inteiramente à vontade de Deus.</p><p>Quando se deixa a Providência agir conosco, nunca se é dominado pela inquietação, pelo desgosto ou pelo desânimo. Convém não esquecer que não há somente os males do corpo, mas também os males da alma, por exemplo, o pecado que debemos evitar. Santa Edwiges foi muito provada por Deus em toda a sua vida. Não reclamava, apenas dizia: “Em tuas mãos, Senhor…”</p></div>`
      },
      {
        day: 'Terceiro Dia',
        title: 'Meditação: sorrir sempre.',
        content: `<div class="day-specific-content"><p>O bom filho da Igreja não tem motivo para andar de “cara amarrada”. Por isso, será muito benéfica a resolução de sorrir sempre. Sorrir para Deus, sorrir para o próximo, sorrir para si mesmo. O amigo que nos ajuda, o transeunte que nos cumprimenta, o sorriso de uma criança, a flor de um jardim, o balançar das ondas, o sol a brilhar, a lua que nos encanta, as estrelas que brilham… Tudo isso é motivo de alegria para o nosso coração.</p><p>Se somos jovens, alegremo-nos pela mocidade que possuímos. Se somos de idade madura, exultemos pelos dias que já vivemos. Se já chegamos à velhice, aprendamos que a coisa mais bela é saber envelhecer… Assim era Santa Edwiges: um sorriso para todos que a cercavam.</p></div>`
      },
      {
        day: 'Quarto Dia',
        title: 'Meditação: sempre dar e nunca recuar.',
        content: `<div class="day-specific-content"><p>Nunca debemos perder as ocasiões que Deus nos oferece para que façamos alguma coisa por nosso irmão. Deus nos pede que mantenhamos sempre vivo no interior do coração um desejo ardente de dar e nunca recuar. Se assim procedermos, Deus estará pronto para nos favorecer.</p><p>Se o nosso coração estiver sempre aberto para dar, poderemos esperar de Deus a retribuição. Mas precisamos dar sem egoísmo, sem esperar nada em troca. Dar com alegria e sem constrangimento. A recompensa talvez não venha agora, mas depois será certa. Não era o proceder de Santa Edwiges, dia e noite, fazendo o bem, confiando apenas em Deus.</p></div>`
      },
      {
        day: 'Quinto Dia',
        title: 'Meditação: saber bem falar e saber se calar.',
        content: `<div class="day-specific-content"><p>Diz o apóstolo São Tiago que o homem perfeito é aquele que não peca pela língua. Realmente, quantas pessoas matam sua alma because não sabem controlar a língua? Nosso Senhor dizia que não é pecado o que entra pela boca, mas o que sai do coração. O nome alheio nos deve ser tão caro quanto o nosso. Não debemos divulgar o que os outros não têm o direito de saber. Quantas vezes o silêncio em torno de certos assuntos livra-nos de situações embaraçosas?</p><p>A língua é uma arma de dois gumes: é perigosa e pode fazer muito bem. Na maioria das vezes é melhor calar do que falar. Não se nega, com isso, que há momentos em que podemos e debemos falar. Mas o cuidado no falar deve ser muito grande, because facilmente cometemos exageros e enganos. Esta foi a vida de Santa Edwiges: a tudo e a todos ouvia, mas guardava todas as coisas no coração.</p></div>`
      },
      {
        day: 'Sexto Dia',
        title: 'Meditação: confiança em Deus nas dificuldades.',
        content: `<div class="day-specific-content"><p>Quantas pessoas ficam atemorizadas e cheias de pavor, até o ponto de perderem a confiança em Deus, ao ver os inimigos da fé ameaçarem de morte a Igreja de Cristo? Os que assim procedem começam a esquecer as palavras de Jesus sobre o tratamento dado a Ele próprio: “Se tratam assim o madeiro verde, que farão com o seco?”</p><p>Depois, convém lembrar que Jesus faz das perseguições uma bem-aventurança. Também é palabra d’Ele: “Bem-aventurados os que são perseguidos por amor da justiça!”. Se Deus permite as perseguições à Igreja, também dá a força e a graça para que ela seja vitoriosa. “As portas do inferno não prevalecerão…” Santa Edwiges tinha esta confiança em Deus, total e absoluta.</p></div>`
      },
      {
        day: 'Sétimo Dia',
        title: 'Meditação: saber lutar sem desanimar.',
        content: `<div class="day-specific-content"><p>Na batalha, não debemos fazer questão de vencer, mas de lutar. Lutar é nosso dever, mas a vitória pertence a Deus. Na vida espiritual, as pessoas só pensam no triunfo e no sucesso, sem dar muita importância aos embates que é preciso enfrentar para atingir o fim desejado. Muitos gostam de encontrar o prato pronto, como se diz. Outros acham que, por já haverem conquistado um certo sossego espiritual, não necessitam mais estar alertas. São pessoas que só because fazem certas práticas espirituais pensam estar salvas e livres de qualquer perigo. Coitadas, não sabem que o inimigo não dorme. A Palavra de Cristo continua válida: “Estai vigilantes…”</p><p>Outra coisa não fazia Santa Edwiges, dia e noite, em vigílias constantes, permanecia sempre atenta às investidas do mal.</p></div>`
      },
      {
        day: 'Oitavo Dia',
        title: 'Meditação: dar valor às pequenas coisas.',
        content: `<div class="day-specific-content"><p>O verdadeiro caminho da santidade consiste em fazer sempre com amor as pequenas coisas das quais está cheia a nossa vida. Um alfinete apanhado do chão, com amor, pode salvar uma alma… Animadas pelo amor, essas coisas podem salvar uma alma e se transformarem em um grande ramalhete, do qual Deus tirará a Sua glória.</p><p>A nossa dificuldade está em não sabermos aproveitar as ocasiões que se apresentam diante de nós. Julgamos que só os grandes feitos, os sacrifícios, os grandes sofrimentos é que levam à perfeição. Nada mais errado. Os pequenos momentos de cada dia é que são os degraus que nos levam seguramente a Deus. “Se não vos tornardes como crianças, não entrareis no reino dos céus”, disse o Mestre. Santa Edwiges assim procedeu, não deixava passar nenhuma oportunidade de santificar seu coração.</p></div>`
      },
      {
        day: 'Nono Dia',
        title: 'Meditação: cuidar de si, salvar a própria alma.',
        content: `<div class="day-specific-content"><p>Muitas pessoas, inteiramente dominadas pelo desejo de fazerem o bem aos outros, chegam a negligenciar os próprios interesses espirituais, when o primeiro cuidado do cristão deve ser salvar a sua alma.</p><p>Nosso Senhor disse que de nada valerá ao homem conquistar o mundo inteiro se não conseguir salvar a sua alma. A caridade bem ordenada começa por você mesmo. Para converter outras almas, é indispensável que tenhamos convertido a nós mesmos. Ninguém dá o que não possui. De que adianta querer tirar um cisco do olho de nosso irmão, se temos uma trave em nossos olhos? Os antigos já diziam: “Médico, cura-te a ti mesmo”. Fazer o bem aos outros é uma coisa muito bonita, mas sem prejuízo de nossa própria santificação. Também nesse ponto Santa Edwiges é nosso modelo. Cuidava dos outros, mas sem se descuidar de si mesma.</p></div>`
      },
    ]
  },
  faustina: {
    saintName: "Santa Faustina",
    novenaTitle: "Novena à Santa Faustina",
    description: "Peça a intercessão da secretária da Divina Misericórdia, Apóstola da Misericórdia.",
    days: [
      { day: "Primeiro Dia", title: "Felizes os que põem sua confiança em Deus", content: `<div class="day-specific-content"><blockquote class="brand-border pl-4 italic"><p>A alma que confiar na Minha misericórdia é a mais feliz, because Eu mesmo cuido dela (D. 1273). Concedo-lhe a Minha confiança e dou-lhe tudo o que Me pede (D. 453).</p><p>Não compreendo como é possível não confiar Naquele que tudo pode. Com Ele tudo, e sem Ele — nada. Ele é o Senhor e não permitirá, nem consentirá, que sejam confundidos aqueles que puseram Nele toda a sua confiança (D. 358).</p></blockquote><p>Santa Faustina, obtende para mim a graça da filial confiança no Senhor Deus — que pode realizar todas as coisas. Ele é a própria Sabedoria e nos ama com um eterno amor.</p></div>` },
      { day: "Segundo Dia", title: "A confiança como resposta ao conhecimento do mistério da Misericórdia de Deus", content: `<div class="day-specific-content"><blockquote class="brand-border pl-4 italic"><p>Tudo o que existe está encerrado nas entranhas da Minha misericórdia de uma forma mais profunda que a criança no ventre de sua mãe. Quanta dor Me causa a falta de confiança em Minha bondade. Os pecados que Me ferem mais dolorosamente são os de desconfiança (D. 1076).</p><p>Agora sei que até as almas escolhidas e avançadas na vida religiosa ou espiritual não têm a coragem de confiar plenamente em Deus. E isso acontece because poucas almas conhecem a insondável misericórdia de Deus, a Sua grande bondade (D. 731).</p></blockquote><p>Santa Faustina, ajudai-me a mergulhar mais e mais profundamente no mistério da misericórdia de Deus; ajudai-me a descobrir a bondade de Deus de modo que eu possa confiar Nele cada vez mais e não O fira com minha desconfiança.</p></div>` },
      { day: "Terceiro Dia", title: "Fé", content: `<div class="day-specific-content"><blockquote class="brand-border pl-4 italic"><p>O que tu estás vendo na realidade estas alma veem pela fé. Oh! como Me é agradável a grande fé delas (D. 1420).</p><p>Peço ardentemente ao Senhor que se digne fortalecer a minha fé, para que, na vida cotidiana e monótona eu não me deixe levar pelas disposições humanas, mas pelo espírito. Oh! como tudo atrai o homem para a terra! Mas a fé viva mantém a alma em esferas mais elevadas, e designa para o amor próprio o lugar que lhe convém, isto é — o último (D. 210).</p></blockquote><p>Santa Faustina, obtende para mim a fé forte e viva, a fim de que chegue a conhecer o amor misericordioso de Deus para com as criaturas, de modo que tanto mais eu O conheça, mais eu queira confiar Nele.</p></div>` },
      { day: "Quarto Dia", title: "Esperança", content: `<div class="day-specific-content"><blockquote class="brand-border pl-4 italic"><p>Causam-Me grande alegria as almas que recorrem à Minha misericórdia. A estas almas concedo graças que excedem os seus pedidos (D. 1146).</p><p>Ainda que tivesse sobre a minha consciência os pecados do mundo inteiro e os pecados de todas as almas condenadas, não duvidaria da bondade de Deus, mas sem pensar me lançaria no abismo da misericórdia de Deus, que está sempre aberta para nós, e com o coração reduzido a pó, me lançaria a Seus pés, submetendo-me inteiramente à Sua santa vontade, que é a própria Misericórdia (D. 1552).</p></blockquote><p>Santa Faustina, obtende para mim uma esperança resoluta, de modo que, em meu caminho para o céu, eu possa sempre contar com o perdão de Deus e o auxílio de Sua graça em cada situação, particularmente nos momentos difíceis.</p></div>` },
      { day: "Quinto Dia", title: "Amor", content: `<div class="day-specific-content"><blockquote class="brand-border pl-4 italic"><p>Sou o Amor e a própria Misericórdia e não existe miséria que possa medir-se com a Minha misericórdia, nem a miséria a esgotará, visto que à medida que se dá — aumenta (D.1273). Foi o amor que Me trouxe e o amor Me retém. Minha filha, se soubesses que grande mérito e recompensa tem um só ato de amor puro para Comigo, morrerias de alegria. Digo-te isso, para que te unas continuamente Comigo pelo amor (D. 576).</p><p>Amor, amor e mais uma vez amor a Deus! Superior a isso nada há nem no céu, nem na terra. O mais sublime é o amor a Deus, e a autêntica grandeza está em amá-Lo. Também a verdadeira sabedoria consiste nesse amor a Deus. Tudo o que é nobre e belo — está em Deus; fora de Deus não existe beleza nem grandeza (D. 990).</p></blockquote><p>Santa Faustina, obtende para mim um ardente amor para com Deus, a fim de que eu possa amá-Lo acima de todas as coisas, e amar todas as coisas por amor a Ele.</p></div>` },
      { day: "Sexto Dia", title: "Humildade", content: `<div class="day-specific-content"><blockquote class="brand-border pl-4 italic"><p>Não são grandes prédios e magníficas instalações que Me dão satisfação, mas um coração puro e humilde (D. 532). As torrentes da Minha graça inundam as almas humildes. Os orgulhosos sempre estão na pobreza e miséria, porquanto a Minha graça afasta-se deles para as almas humildes (D. 1602).</p><p>Oh! como é bela a alma humilde. Deus nada nega a uma tal alma. Uma alma assim é onipotente, ela influi no destino do mundo inteiro. Deus exalta semelhante alma até o Seu trono e, quanto mais ela se rebaixa, tanto mais Deus se inclina para ela, persegue-a com Suas graças e a acompanha em todos os momentos com o Seu poder. Uma tal alma está unida com Deus da maneira mais profunda (D. 1306).</p></blockquote><p>Santa Faustina, obtende para mim a graça da verdadeira humildade, para que eu possa aceitar a verdade sobre Deus, sobre o mundo e sobre mim mesmo. Que isso possa me tornar mais confiante, como uma criança em relação ao seu Pai celeste, e me fazer reconhecer minha dependência Dele como Criador, Salvador e santificador.</p></div>` },
      { day: "Sétimo Dia", title: "Contrição", content: `<div class="day-specific-content"><blockquote class="brand-border pl-4 italic"><p>Sou três vezes Santo e abomino o menor pecado. Não posso amar uma alma manchada pelo pecado, mas, when se arrepende, não há limites para a Minha generosidade com ela. A Minha misericórdia a envolve e justifica. Com a Minha misericórdia persigo os pecadores em todos os seus caminhos, e o Meu Coração se alega when eles voltam a Mim (D. 1728).</p><p>O que mais me faz sofrer é when me encontro com a falsidade. Agora Vos compreendo, Salvador meu, por terdes repreendido tão severamente os fariseus pela hipocrisia. Procedestes mais bondosamente com pecadores empedernidos, when recorriam a Vós com contrição (D. 1579).</p></blockquote><p>Santa Faustina, obtende para mim a graça da sincera contrição de todos os pecados, e mesmo da menor infidelidade, uma vez que isto foi a causa da terrível paixão de Jesus. Possa a contrição do meu coração alcançar-me o perdão da minha culpa e fortalecer a minha confiança na misericórdia de Deus.</p></div>` },
      { day: "Oitavo Dia", title: "Vontade de Deus", content: `<div class="day-specific-content"><blockquote class="brand-border pl-4 italic"><p>Minha filha, tu Me dás a maior glória pela paciente submissão à Minha vontade, e para ti acumulas tão grandes méritos que não o conseguirias nem com jejuns, nem com nenhuma espécie de mortificações. Deves saber, Minha filha, que, se submetes a tua vontade à Minha, atraís sobre ti a Minha especial predileção. Este sacrifício Me é agradável e cheio de doçura. Nele Me deleito, ele tem poder (D. 904).</p><p>O Senhor concedeu-me a luz de um conhecimento mais profundo da Sua vontade e, ao mesmo tempo, de uma total submissão a essa santa vontade de Deus. Essa luz me confirmou numa profunda paz, dando-me a compreensão de que nada devo temer, a não ser o pecado. Tudo o que Deus me enviar, o aceito com total submissão à Sua santa vontade. Onde quer que me coloque, procurarei cumprir fielmente a Sua santa vontade e fazer tudo aquilo que agrada a Ele, na medida em que estiver ao meu alcance, ainda que essa vontade de Deus seja para mim tão árdua e penosa (D. 1394). Submetendo-me inteiramente à Sua santa vontade, que é a própria Misericórdia (D. 1552).</p></blockquote><p>Santa Faustina, obtende para mim a graça de cumprir a vontade de Deus fielmente, sempre e em toda a parte, de modo que, eu possa expressar minha confiança no Senhor Deus.</p></div>` },
      { day: "Nono Dia", title: "O Vaso da confiança", content: `<div class="day-specific-content"><blockquote class="brand-border pl-4 italic"><p>As graças da Minha misericórdia colhem-se com um único vaso, que é a confiança. Quanto mais a alma confiar, tanto mais receberá. Grande consolo Me dão as almas de ilimitada confiança, because, em almas assim derramo todos os tesouros das Minhas graças (D. 1578).</p><p>Ó Senhor, meu amor, agradeço-Vos pelo dia de hoje, por me terdes permitido haurir tesouros de graças da fonte da Vossa insondável misericórdia. Ó Jesus, não apenas no dia de hoje, mas em cada instante colho da Vossa insondável misericórdia tudo o que a alma e o corpo possam desejar (D. 1178).</p></blockquote><p>Santa Faustina, ajudai-me a obter um largo vaso de confiança, a fim de que eu possa atrair com ele graças não apenas para mim mesmo, mas também para a Igreja, para a minha pátria, para o mundo inteiro, e especialmente para as almas que duvidam da misericórdia de Deus.</p></div>` }
    ],
    initialPrayer: `<div class="initial-prayer-text"><h4 class="section-title">Oração pedindo graças por intercessão de Santa Faustina</h4><div class="prayer-block"><p>Ó Jesus, que fizeste de Santa Faustina uma grande devota da Vossa ilimitada misericórdia, dignai-Vos, pela sua intercessão, se for do agrado da Vossa santíssima vontade, conceder-me a graça <i>(…petição silenciosa)</i> que Vos peço.</p><p>Eu, pecador, não sou digno da Vossa misericórdia. Peço-Vos, pois, pelo espírito de sacrifício e dedicação de Santa Faustina, e por sua intercessão, atendei os pedidos que, com confiança, Vos apresento.</p></div></div>`,
    finalPrayer: `<div class="final-prayer-text"><div class="w-16 h-px bg-white/20 my-8 mx-auto"></div><h4 class="section-title">Oração de agradecimento</h4><blockquote class="brand-border pl-4 italic"><p>“Ó Jesus, Deus eterno, agradeço-Vos pelas inúmeras graças e benefícios. Que cada batida do meu coração seja um novo hino de ação de graças para Convosco, ó Deus. Que cada gota do meu sangue circule por Vós, Senhor. A minha alma seja um só hino de adoração à Vossa Misericórdia. Amo-Vos, Deus, por Vós mesmo.” (Diário, 1794).</p></blockquote><div class="prayer-block"><p>Deus Misericordioso, acolhei os nosso agradecimentos pelo dom da vida e da missão de Santa Faustina, e ajudai-nos, com a sua intercessão, a crescer na atitude de confiança para Convosco e de misericórdia para com o próximo. Por Cristo Nosso Senhor. Amém.</p></div><div class="w-16 h-px bg-white/20 my-8 mx-auto"></div><h4 class="section-title">Ladainha de Santa Faustina</h4><ul class="list-none p-0 mt-4 text-sm md:text-base"><li class="litany-item"><span>Senhor, tende piedade de nós.</span> <span class="litany-response">Senhor...</span></li><li class="litany-item"><span>Cristo, tende piedade de nós.</span> <span class="litany-response">Cristo...</span></li><li class="litany-item"><span>Senhor, tende piedade de nós.</span> <span class="litany-response">Senhor...</span></li><li class="litany-item"><span>Jesus Cristo, ouvi-nos.</span> <span class="litany-response">Jesus Cristo, atendei-nos.</span></li><li class="litany-item"><span>Deus Pai do Céu,</span> <span class="litany-response">tende piedade de nós.</span></li><li class="litany-item"><span>Deus Filho Redentor do Mundo,</span> <span class="litany-response">tende piedade de nós.</span></li><li class="litany-item"><span>Deus Espírito Santo,</span> <span class="litany-response">tende piedade de nós.</span></li><li class="litany-item"><span>Santíssima Trindade que sois um só Deus,</span> <span class="litany-response">tende piedade de nós.</span></li><li class="litany-item"><span>Santa Maria</span> <span class="litany-response">rogai por nós.</span></li><li class="litany-item"><span>Santa Faustina, testemunha viva da misericórdia do Pai celeste</span> <span class="litany-response">rogai por nós.</span></li><li class="litany-item"><span>Santa Faustina, humilde serva de Jesus, Misericórdia Encarnada</span> <span class="litany-response">rogai por nós.</span></li><li class="litany-item"><span>Santa Faustina, instrumento obediente do Espírito Consolador</span> <span class="litany-response">rogai por nós.</span></li><li class="litany-item"><span>Santa Faustina, filha confiante da Mãe da Misericórdia</span> <span class="litany-response">rogai por nós.</span></li><li class="litany-item"><span>Santa Faustina, confidente da message da misericórdia</span> <span class="litany-response">rogai por nós.</span></li><li class="litany-item"><span>Santa Faustina, secretária fiel das palavras de Jesus Misericordioso</span> <span class="litany-response">rogai por nós.</span></li><li class="litany-item"><span>Santa Faustina, grande Apóstola da Divina Misericórdia</span> <span class="litany-response">rogai por nós.</span></li><li class="litany-item"><span>Santa Faustina, dispensadora do Deus rico em Misericórdia</span> <span class="litany-response">rogai por nós.</span></li><li class="litany-item"><span>Santa Faustina, dom para todo o mundo</span> <span class="litany-response">rogai por nós.</span></li><li class="litany-item"><span>Santa Faustina, conhecedora da bondade de Deus por cada criatura</span> <span class="litany-response">rogai por nós.</span></li><li class="litany-item"><span>Santa Faustina, adoradora de Deus no mistério da Encarnação</span> <span class="litany-response">rogai por nós.</span></li><li class="litany-item"><span>Santa Faustina, participante da Paixão e Ressurreição do Senhor</span> <span class="litany-response">rogai por nós.</span></li><li class="litany-item"><span>Santa Faustina, guia sobre a estrada da Cruz de Jesus</span> <span class="litany-response">rogai por nós.</span></li><li class="litany-item"><span>Santa Faustina, que encontraste Jesus nos sacramentos</span> <span class="litany-response">rogai por nós.</span></li><li class="litany-item"><span>Santa Faustina, unida ao Esposo Divino na própria alma</span> <span class="litany-response">rogai por nós.</span></li><li class="litany-item"><span>Santa Faustina, iluminada pela Misericórdia de Deus na vida de Maria</span> <span class="litany-response">rogai por nós.</span></li><li class="litany-item"><span>Santa Faustina, amante da Igreja, Corpo Místico de Cristo</span> <span class="litany-response">rogai por nós.</span></li><li class="litany-item"><span>Santa Faustina, forte por uma verdadeira fé</span> <span class="litany-response">rogai por nós.</span></li><li class="litany-item"><span>Santa Faustina, constante na esperança inabalável</span> <span class="litany-response">rogai por nós.</span></li><li class="litany-item"><span>Santa Faustina, ardente de amor</span> <span class="litany-response">rogai por nós.</span></li><li class="litany-item"><span>Santa Faustina, bela por uma autêntica humildade</span> <span class="litany-response">rogai por nós.</span></li><li class="litany-item"><span>Santa Faustina, simples na confiança filial</span> <span class="litany-response">rogai por nós.</span></li><li class="litany-item"><span>Santa Faustina, exemplo de cumprimento da vontade de Deus</span> <span class="litany-response">rogai por nós.</span></li><li class="litany-item"><span>Santa Faustina, modelo de serviço e sacrifício</span> <span class="litany-response">rogai por nós.</span></li><li class="litany-item"><span>Santa Faustina, protetora afetuosa dos sacerdotes e dos religiosos</span> <span class="litany-response">rogai por nós.</span></li><li class="litany-item"><span>Santa Faustina, defensora das crianças e dos jovens contra o mal</span> <span class="litany-response">rogai por nós.</span></li><li class="litany-item"><span>Santa Faustina, refúgio dos desviados e desesperados</span> <span class="litany-response">rogai por nós.</span></li><li class="litany-item"><span>Santa Faustina, consolo para os doentes e sofredores</span> <span class="litany-response">rogai por nós.</span></li><li class="litany-item"><span>Santa Faustina, vítima sacrifical pelos pecadores</span> <span class="litany-response">rogai por nós.</span></li><li class="litany-item"><span>Santa Faustina, promotora da confiança nos corações dos agonizantes</span> <span class="litany-response">rogai por nós.</span></li><li class="litany-item"><span>Santa Faustina, preocupada com a salvação da humanidade</span> <span class="litany-response">rogai por nós.</span></li><li class="litany-item"><span>Santa Faustina, protetora das almas do purgatório</span> <span class="litany-response">rogai por nós.</span></li><li class="litany-item"><span>Santa Faustina, que implora a misericórdia divina por todo o mundo</span> <span class="litany-response">rogai por nós.</span></li><li class="litany-item"><span>Cordeiro de Deus que tirais o pecado do mundo,</span> <span class="litany-response">perdoai-nos, Senhor!</span></li><li class="litany-item"><span>Cordeiro de Deus que tirais o pecado do mundo,</span> <span class="litany-response">ouvi-nos, Senhor!</span></li><li class="litany-item"><span>Cordeiro de Deus que tirais o pecado do mundo,</span> <span class="litany-response">tende piedade de nós.</span></li></ul><div class="jaculatory-prayers"><p class="mt-4">V. Rogai por nós, Santa Faustina,<br>Para que com a vida e com as palavras proclamemos ao mundo a message da Misericórdia.</p><p class="mt-4 font-semibold">Pai-Nosso… Ave-Maria… Glória ao Pai…</p></div></div>`
  },
  rosario: {
    saintName: 'N. S. do Rosário',
    novenaTitle: 'Novena a Nossa Senhora do Rosário',
    description: 'Invoque a Mãe de Deus sob este título para que ela ajude você a rezar com mais devoção o Santo Rosário.',
    days: [
      { day: 'Primeiro Dia', title: '“Deus vos salve”', content: '<div class="day-specific-content"><p>Quanto minha alma se alegra, amabilíssima Virgem, com as doces recordações que em mim desperta esta saudação! Enche-se de alegria meu coração ao dizer o “Ave-Maria”, para acompanhar a alegria que teve vosso Espírito ao escutar da boca do anjo, alegrando-me da eleição que de Vós fez o Onipotente para dar-nos o Senhor. Amém.</p></div>' },
      { day: 'Segundo Dia', title: '“Maria” nome Santo!', content: '<div class="day-specific-content"><p>Dignai-vos, amabilíssima Mãe, selar com vosso nome a memória das súplicas nossas, dai-nos a esperança de que nos atenda benignamente vosso Filho Jesus, para que alcancemos o aborrecimento a todas as vaidades do mundo, firme amor a virtude, e ânsias contínuas de nossa eterna salvação. Amém.</p></div>' },
      { day: 'Terceiro Dia', title: '“Cheia sois de graça”', content: '<div class="day-specific-content"><p>Doce Mãe! Deus Vos salve, Maria, sacrário riquíssimo em que descansou corporalmente a plenitude da Divindade: A vossos pés se apresenta desnuda minha pobre alma, pedindo a graça e o amor de Deus, com o que fostes enriquecida, fazendo-te cheia de virtude, cheia de santidade e cheia de graça. Amém.</p></div>' },
      { day: 'Quarto Dia', title: '“O Senhor é contigo”', content: '<div class="day-specific-content"><p>Oh, Santíssima Virgem! Aquele imenso Senhor, que por sua essência fez todas as coisas, está em Vós e convosco por modo muito superior. Mãe minha, venha a nós o Senhor através de Vós. Mas, como tende vir a um coração de tão pouca limpeza como o meu Aquele Senhor que, para fazer de Vós sua habitação, quis com tal prodígio, que não se perdesse vossa virgindade sendo Mãe? Oh! Mora em nós tanta impureza, para que habite em nossa alma o Senhor. Amém.</p></div>' },
      { day: 'Quinto Dia', title: '“Bendita sois entre todas as mulheres”', content: '<div class="day-specific-content"><p>Vós sois a glória de Jerusalém! Vós, a alegria de Israel! Vós, a honra do povo Santo de Deus! Obtende por vossa intercessão a nosso espírito a mais viva fé, para considerar e adorar com vosso Santo Rosário as misericórdias que em Vós e por Vós fez o Filho de Deus. Amém.</p></div>' },
      { day: 'Sexto Dia', title: '“Bendito é o fruto do teu ventre Jesus”', content: '<div class="day-specific-content"><p>Choro, oh Mãe minha, que tenho eu feito tantos pecados, sabendo que eles fizeram morrer na cruz a vosso Filho. Seja o fruto de minha oração, que não termine nunca de chorá-los, até poder bendizer eternamente aquele puríssimo fruto de vosso ventre. Amém.</p></div>' },
      { day: 'Sétimo Dia', title: '“Santa Maria, Mãe de Deus”', content: '<div class="day-specific-content"><p>Não permitais que se perca minha alma comprada com o inestimável preço do sangue de Jesus. Dai-me um coração digno de Vós, para que amando-vos, sejam minhas delícias obsequiar-vos com o Santo Rosário, adorando com ele ao vosso Filho, pelo muito que fez para nossa redenção e pelo que desejou, fazendo-te sua Mãe. Amém.</p></div>' },
      { day: 'Oitavo Dia', title: '“Rogai por nós pecadores”', content: '<div class="day-specific-content"><p>Mãe de piedade! A Vós peço, Mãe do Rei soberano da glória: Vós sois minha Mãe. Alcançai-me humildade e plena confiança, pois deste modo, com o auxílio de Deus, a receber os favores da Divina misericórdia, pelos méritos de vosso Filho e Redentor nosso. Amém.</p></div>' },
      { day: 'Nono Dia', title: '“Agora, e na hora de nossa morte”', content: '<div class="day-specific-content"><p>Estamos sempre prestes a perder a graça de Deus. Fazei com que não se aparte de minha memória ao último momento da vida, que haverá de ser decisivo de minha eterna sorte. Oh, Mãe de piedade! Concedei-me a esperança de morrer sob vossa proteção e no amor de meu Jesus. Amém.</p></div>' }
    ],
    initialPrayer: `<div class="initial-prayer-text"><h4 class="section-title">Oração para todos os dias</h4><div class="prayer-block"><p>Oh, Mãe e clementíssima Virgem do Rosário! Vós que plantastes na Igreja, por meio de vosso privilegiado filho Domingos, o místico remédio do Santo Rosário, fazei que abracemos todos tua santa devoção e obtenhamos seu verdadeiro espírito; De sorte que aquelas místicas rosas sejam em nossos lábios e coração, pelos pecadores, medicina, e pelos justos, aumento de graça. Amém.</p></div><div class="prayer-request"><p class="italic my-4">Peça aqui com confiança a graça que se deseja obter com esta novena.</p></div></div>`,
    finalPrayer: `<div class="final-prayer-text"><div class="w-16 h-px bg-white/20 my-6 mx-auto"></div><h4 class="section-title">Oração final</h4><p>Rezar quatro Ave-Marias e Glórias.</p><div class="prayer-block"><p>Oh, Santíssima Virgem, Mãe de Deus, doce refúgio e esperança piedosa de todos os aflitos! Por aquela confiança e autoridade de Mãe com que podeis apresentar nossos rogos ao que é árbitro soberano de nosso bem, empenhai uma e outra em favor nosso. Consegui-nos o reformar com o Santo Rosário nossas vidas, estudando em tão doce livro a fiel imitação de vosso Filho Jesus, até que possamos adorá-Lo e amá-Lo por todos os séculos dos séculos. Amém.</p></div></div>`
  },
  aparecida: {
    saintName: 'N. S. Aparecida',
    novenaTitle: 'Novena a Nossa Senhora Aparecida',
    description: 'Padroeira do Brasil, a Novena de Nossa Senhora Aparecida é a preparação para a grande Festa do Dia 12 de Outubro.',
    initialPrayer: `<div class="initial-prayer-text"><h4 class="section-title">Oração para todos os dias</h4><div class="prayer-block"><p>℣. Fazei-me digno de vos louvar, Ó Virgem Imaculada.<br>℟. Dai-me força, defendei-me contra os vossos inimigos.</p><p>Glória ao Pai, ao Filho e ao Espírito Santo. Assim como era no princípio, agora, e sempre e por todos os séculos dos séculos. Amém.</p><p>Virgem puríssima, concebida sem pecado, e desde aquele primeiro instante toda bela e sem mancha, gloriosa Maria, cheia de graça, Mãe de meu Deus, Rainha dos anjos e dos homens, Senhora da Conceição Aparecida padroeira Nossa.</p><p>Eu vos saúdo humildemente como Mãe do meu Salvador, que com aquela estima, respeito e submissão, com que vos tratava, me ensinou quais sejam as honras e a veneração que eu devo prestar-vos; dignai-vos, eu vo-lo rogo, de receber as que nesta Novena vos consagro.</p><p>Vós sois o seguro asilo dos pecadores penitentes, e assim tenho razão para recorrer a vós; sois Mãe de misericórdia, e por este título não podeis deixar de enternecer-vos à vista das minhas misérias.</p><p>Sois depois de Jesus Cristo toda a minha esperança, e por esta razão não podereis deixar de reconhecer a terna confiança que tenho em vós; fazei-me digno de chamar-me vosso filho, para que possa confiadamente dizer-vos: mostrai que sois nossa Mãe.</p><p>Atendei-me desde vosso Augusto Santuário, naquela insigne imagem pela qual já nos trouxestes inúmeras bênção e Benefícios. Mostrai que sois a Senhora destas terras e deste povo; confirmai o vosso Padroado sobre nós, nos alcançando as graças e os auxílios que tanto necessitamos.</p></div></div>`,
    finalPrayer: `<div class="final-prayer-text"><div class="w-16 h-px bg-white/20 my-8 mx-auto"></div><h4 class="section-title">Oração final</h4><div class="prayer-block"><p>Ó Maria Santíssima, que em vossa imagem milagrosa de Aparecida, espalhais inúmeros benefícios sobre todo o Brasil.</p><p>Eu, embora indigno de pertencer ao número de vossos filhos, mas cheio do desejo de participar dos benefícios de vossa misericórdia, prostrado a vossos pés, consagro-vos o entendimento, para que sempre pense no amor que mereceis; consagro-vos a língua para que sempre vos louve e propague a vossa devoção; consagro-vos o coração, para que, depois de Deus, vos ame sobre todas as coisas. Recebei-nos, ó Rainha incomparável, no ditoso número de vossos filhos; acolhei-nos debaixo de vossa proteção; socorrei-nos em todas as nossas necessidades, espirituais e temporais, sobretudo na hora de nossa morte. Abençoai-nos, ó Mãe celestial, e com vossa poderosa intercessão, fortalecei-nos em nossas fraquezas, a fim de que, servindo-vos fielmente nesta vida, possamos louvar-vos, amar-vos e dar-vos graças no céu, por toda eternidade.</p><p>Ó Senhora da Conceição Aparecida, mostrai que sois a padroeira da nossa pátria e a mãe querida do povo brasileiro! Abençoai, defendei, salvai o vosso querido Brasil. Amém.</p></div><div class="jaculatory-prayers"><p class="mt-4">℣. Ó Maria Concebida Sem Pecado<br>℟. Rogai por nós que recorremos a Vós.</p><p class="mt-2">℣. Nossa Senhora da Conceição Aparecida<br>℟. Rogai por nós.</p><p class="mt-2">℣. Bendita seja a Santa e Imaculada Conceição da Bem-Aventurada Virgem Mãe de Deus, por todos os séculos dos séculos.<br>℟. Amém.</p><p class="mt-2">℣. Senhora Aparecida, guiai a nossa sorte.<br>℟. Ó doce Mãe querida, na vida e na morte.</p></div></div>`,
    days: [
      { day: 'Primeiro Dia', title: '', content: '<div class="day-specific-content"><p>Eis-me aqui aos vossos santíssimos pés, ó Virgem Imaculada! Convosco me alegro sumamente, because desde a eternidade fostes eleita Mãe do Verbo eterno e preservada da culpa original. Eu bendigo e dou graças à Santíssima Trindade, que vos enriqueceu com este privilégio em vossa Conceição, e humildemente vos suplicamos que alcanceis a graça de vencer os tristes efeitos que em mim produziu o pecado.</p><p>Ah! Senhor, fazei que eu os vença e jamais deixe de amar a meu Deus.</p><p class="mt-4 font-semibold">Reza-se: Pai Nosso, Ave-Maria e Glória ao Pai.</p></div>' },
      { day: 'Segundo Dia', title: '', content: '<div class="day-specific-content"><p>Ó Maria, lírio imaculado de pureza, eu me congratulo convosco, because desde o primeiro instante da vossa Conceição fostes cheia de graça e além disto vos foi conferido o perfeito uso da razão. Dou graças e adoro a Santíssima Trindade, que vos concedeu tão sublimes dons; e me confundo totalmente na vossa presença ao ver-me tão pobre de graça.</p><p>Vós, que de graça celeste fostes tão copiosamente enriquecida, reparti-a com a minha alma e fazei-me participante dos tesouros que começastes a possuir em vossa imaculada Conceição.</p><p class="mt-4 font-semibold">Reza-se: Pai Nosso, Ave-Maria e Glória ao Pai.</p></div>' },
      { day: 'Terceiro Dia', title: '', content: '<div class="day-specific-content"><p>Ó Maria, mística rosa de pureza, eu me alegro convosco, que gloriosamente triunfastes da infernal serpente, na vossa imaculada Conceição.</p><p>E que fostes concebida sem mácula de pecado. Dou graças e louvo a Santíssima Trindade, que tal privilégio vos concedeu e vos suplico que me alcanceis força para superar todas as tentações do inimigo, e para não manchar minha alma com o pecado.</p><p>Ah! Senhora, ajudai-me sempre, e fazei quem com a vossa proteção, sempre triunfe de todos os inimigos de nossa eterna salvação.</p><p class="mt-4 font-semibold">Reza-se: Pai Nosso, Ave-Maria e Glória ao Pai.</p></div>' },
      { day: 'Quarto Dia', title: '', content: '<div class="day-specific-content"><p>Ó espelho de pureza, Imaculada Virgem Maria, eu me encho de sumo gozo ao ver que desde a vossa Conceição, foram em vós infundidas as mais sublimes virtudes e, ao mesmo tempo, todos os dons do Espírito Santo.</p><p>Dou graças e louvo a Santíssima Trindade que com estes privilégios vos favoreceu. E suplico-vos, ó benigna Mãe, que me alcanceis a prática das virtudes, e me façais também digno e receber os dons do Espírito Santo.</p><p class="mt-4 font-semibold">Reza-se: Pai Nosso, Ave-Maria e Glória ao Pai.</p></div>' },
      { day: 'Quinto Dia', title: '', content: '<div class="day-specific-content"><p>Ó Maria, refulgente lua de pureza, eu me congratulo convosco, because o mistério de vossa Imaculada Conceição foi o princípio da salvação de todo o mundo.</p><p>Dou graças e bendigo à Santíssima Trindade, que assim magnificou e glorificou vossa pessoa, e vos suplico me alcanceis a graça de saber aproveitar-me da Paixão e Morte do vosso Jesus, e que não seja para mim inútil o seu sangue derramado na cruz, mas que viva santamente e salve a minha alma.</p><p class="mt-4 font-semibold">Reza-se: Pai Nosso, Ave-Maria e Glória ao Pai.</p></div>' },
      { day: 'Sexto Dia', title: '', content: '<div class="day-specific-content"><p>Ó estrela resplandecente de pureza, Imaculada Conceição causaste um imenso gozo a todos os anjos do paraíso.</p><p>Dou graças e bendigo à Santíssima Trindade, que vos enriqueceu com tão belo privilégio.</p><p>Ah! Senhora, fazei que eu um dia tenha parte nessa alegria e que possa em companhia dos anjos, louvar-vos e bendizer-vos eternamente.</p><p class="mt-4 font-semibold">Reza-se: Pai Nosso, Ave-Maria e Glória ao Pai.</p></div>' },
      { day: 'Sétimo Dia', title: '', content: '<div class="day-specific-content"><p>Ó aurora nascente e pura, Imaculada Maria, eu me alegro e exulto convosco because no mesmo instante da vossa Conceição, fostes confirmada em graça e tornada impecável. Dou graças e exalto a Santíssima Trindade, que somente a vós distinguiu com esse especial privilégio.</p><p>Ah! Virgem Santa, alcançai-me um total e contínuo aborrecimento do pecado sobre todos os outros males, e que antes morra do que torne a cometê-lo.</p><p class="mt-4 font-semibold">Reza-se: Pai Nosso, Ave-Maria e Glória ao Pai.</p></div>' },
      { day: 'Oitavo Dia', title: '', content: '<div class="day-specific-content"><p>Ó sol sem mácula, Virgem Maria, eu me congratulo convosco e me alegro de que em vossa Conceição vos fosse conferida por Deus uma graça maior e mais copiosa do que tiveram todos os Anjos e todos os Santos no auge de seus merecimentos. Dou graças e admiro a suma bondade da Santíssima Trindade, que vos enriqueceu com tal privilégio.</p><p>Ah! Senhora, fazei que eu corresponda à graça divina, e não torne a abusar dela; mudai-me o coração, e fazei que desde agora comece o meu arrependimento.</p><p class="mt-4 font-semibold">Reza-se Pai Nosso, Ave-Maria e Glória ao Pai.</p></div>' },
      { day: 'Nono Dia', title: '', content: '<div class="day-specific-content"><p>Ó viva luz de santidade e exemplo de pureza, Virgem e Mãe, Maria Santíssima, vós, apenas concebida, adorastes profundamente a Deus e lhe destes graças, because, por meio de vós, levantada a antiga maldição, desceu uma grande bênção sobre os filhos de Adão.</p><p>Ah! Senhora, fazei que esta bênção acenda no meu coração um grande amor para com Deus; inflamai-o, para que, constantemente ame o mesmo Senhor, e depois goze eternamente no Paraíso, onde possa dar- lhe as mais vivas graças pelos singulares privilégios a vós concedidos e possa também ver-vos coroada de tamanha vitória.</p><p class="mt-4 font-semibold">Reza-se: Pai Nosso, Ave-Maria e Glória ao Pai.</p></div>' }
    ]
  },
  carlo_acutis: {
    saintName: 'São Carlo Acutis',
    novenaTitle: 'Novena a São Carlo Acutis',
    description: 'Jovem santo que usou a internet para evangelizar, é um modelo de santidade na vida cotidiana e um poderoso intercessor pela juventude.',
    initialPrayer: `<div class="initial-prayer-text"><h4 class="section-title">Oração inicial para todos os dias</h4><div class="prayer-block"><p>Santíssima Trindade, Pai, Filho e Espírito Santo, eu Vos agradeço todos os favores, todas as graças com que enriquecestes a alma de São Carlo Acutis durante os 15 anos que passou nesta terra e pelos méritos, em Cristo Jesus, deste tão querido exemplo para a juventude, concedei-me a graça que ardentemente Vos peço… <i>(faça o pedido da graça que deseja)</i>.</p></div></div>`,
    finalPrayer: `<div class="final-prayer-text"><div class="w-16 h-px bg-white/20 my-6 mx-auto"></div><h4 class="section-title">Oração final</h4><div class="prayer-block"><p>Deus Pai de Misericórdia, pelos méritos do Vosso Filho Nosso Senhor Jesus Cristo, por intercessão de São Carlo Acutis, a fim de que, por ele, Vós sejais mais glorificado, dai-nos chamar de Santo este que em tudo viveu a Vossa vontade e, se for do Vosso agrado, concedei-me a graça que ardentemente desejo. Assim seja. Amém.</p></div><p class="mt-4 font-semibold">5 Pai-Nossos, 5 Ave-Marias e 5 Glórias ao Pai, em honra dos 15 anos de vida de Carlo Acutis nesta terra.</p></div>`,
    days: [
      { day: 'Primeiro Dia', title: '“Não eu, mas Deus”', content: '<div class="day-specific-content"><p>São Carlo Acutis, que fizeste de tua vida uma contínua renúncia e aniquilamento, dá-me a graça de buscar as coisas do Céu e desprezar as que passam. Assim seja. Amém.</p></div>' },
      { day: 'Segundo Dia', title: '“Estar sempre com Jesus, este é o meu projeto de vida”', content: '<div class="day-specific-content"><p>São Carlo Acutis, que viveste na intimidade do Sagrado Coração de Jesus, dá-me a graça de realizar, em tudo, a vontade de Deus em minha vida. Assim seja. Amém.</p></div>' },
      { day: 'Terceiro Dia', title: '“Peça ao seu Anjo da Guarda para ajudá-lo continuamente, de modo que ele se torne seu melhor amigo”', content: '<div class="day-specific-content"><p>São Carlo Acutis, que buscaste, já neste mundo, a companhia dos santos anjos, dá-me a graça de viver na retidão que o meu santo anjo deseja. Assim seja. Amém.</p></div>' },
      { day: 'Quarto Dia', title: '“Nossa alma é como um balão aerostático… Se por acaso existe um pecado mortal, a alma cai por terra. A confissão é como o fogo embaixo do balão que permite que a alma se levante novamente. É importante confessar-se com frequência”', content: '<div class="day-specific-content"><p>São Carlo Acutis, que tão bem viveste este sacramento da Reconciliação, dá-me a graça de buscar sempre a confissão com uma contrição profunda. Assim seja. Amém.</p></div>' },
      { day: 'Quinto Dia', title: '“A felicidade é olhar para Deus e a tristeza é olhar para si mesmo”', content: '<div class="day-specific-content"><p>São Carlo Acutis, que jamais desviaste o teu olhar de Jesus, teu grande amor, dá-me a graça de viver já neste mundo esta verdadeira felicidade. Assim seja. Amém.</p></div>' },
      { day: 'Sexto Dia', title: '“A única coisa que debemos pedir a Deus em oração é o desejo de ser santos”', content: '<div class="day-specific-content"><p>São Carlo Acutis, que soubeste sempre pedir a Deus o essencial, dá-me a graça de um profundo desejo do Céu. Assim seja. Amém.</p></div>' },
      { day: 'Sétimo Dia', title: '“A Virgem Maria é a única mulher na minha vida”', content: '<div class="day-specific-content"><p>São Carlo Acutis, que amaste a Virgem Maria com devoção filial, dá-me a graça de corresponder ao amor desta tão terna e boa Mãe. Assim seja. Amém.</p></div>' },
      { day: 'Eighth Day', title: '“A Eucaristia é a minha estrada para o Céu”', content: '<div class="day-specific-content"><p>São Carlo Acutis, que buscavas sempre teu Jesus escondido no sacrário, dá-me a graça de um profundo ardor eucarístico. Assim seja. Amém.</p></div>' },
      { day: 'Nono Dia', title: '“Eu estou feliz por morrer, because vivi a minha vida sem perder nem mesmo um minuto dela com coisas que não agradam a Deus”', content: '<div class="day-specific-content"><p>São Carlo Acutis, dá-me a graça das graças, que é a perseverança final e uma morte santa. Assim seja. Amém.</p></div>' }
    ]
  },
  teresa_avila: {
    saintName: 'Santa Teresa de Ávila',
    novenaTitle: 'Novena a Santa Teresa de Jesus (Ávila)',
    description: 'Padroeira dos místicos e Doutora da Igreja, Santa Teresa intercede para que possamos aprofundar nossa vida de oração.',
    initialPrayer: `<div class="initial-prayer-text"><h4 class="section-title">Oração para todos os dias</h4><div class="prayer-block"><p>Santa Teresa de Jesus, glória da Igreja e do Carmelo, que ensinastes a grande ciência da oração, ficai conosco em cada dia desta novena que fazemos em vosso louvor. Ensinai-nos o caminho da oração, da intimidade com Deus. Ajudai-nos a praticar as virtudes, atendei os pedidos que fazemos, com toda confiança, pela Santa Igreja, pelas nossas famílias, por toda a humanidade e agradecemos confiantes vossa proteção.</p><p class="mt-2">Santa Teresa de Jesus, Mestra do amor, da oração, Mostrai o caminho que conduz ao Senhor à Salvação.</p></div></div>`,
    finalPrayer: `<div class="final-prayer-text"><div class="w-16 h-px bg-white/20 my-6 mx-auto"></div><h4 class="section-title">Oração final</h4><p>Rezar um Pai Nosso, uma Ave Maria, um Glória ao Pai...</p><div class="prayer-block"><p>Ó Deus, que pelo Espírito Santo fizestes surgir santa Teresa, para recordar à Igreja o caminho da perfeição, dai-nos encontrar sempre alimento em sua doutrina celeste e sentir em nós o desejo da verdadeira santidade. Por nosso Senhor Jesus Cristo vosso Filho na unidade do Espírito Santo. Amém.</p></div><div class="jaculatory-prayers"><p class="mt-4">Santa Teresa de Jesus, rogai por nós.</p></div></div>`,
    days: [
      { day: 'Primeiro Dia', title: 'Meditação: Começar com determinação.', content: '<div class="day-specific-content"><p>A vida não é somente uma aventura terrestre, mas, também uma aventura espiritual, é certainly uma busca, por isso Santa Teresa de Jesus nos exorta a começar com determinação, debemos ousadamente aspirar ao sublime, “pois muitos ficam ao pé da montanha, sendo que poderiam subir até o topo”. Começar bem exige esforço, inicialmente com dificuldades e resistência, mas com o tempo logo as barreiras serão vencidas pelo entusiasmo da busca pelo Amado. O essencial, como aponta Teresa, é perseverar até o fim da caminhada, com coragem e vigilância para não retroceder, é essa determinação inicial que ajuda a prosseguir. Confiantes na misericórdia de Deus, que nos sustenta nas quedas. Coloquemo-nos a caminho…</p><blockquote class="brand-border pl-4 italic"><p>“Digo que muito importa, sobretudo, ter uma grande e muito decidida determinação de não parar enquanto não alcançar a meta, surja o que surgir, aconteça o que acontecer, sofra-se o que se sofrer, murmure quem murmurar, mesmo que não se tenha forças para prosseguir, mesmo que se morra no caminho ou não se suportem os padecimentos que nele há, ainda que o mundo venha abaixo.” (Caminho de Perfeição 21,2)</p></blockquote></div>' },
      { day: 'Segundo Dia', title: 'Meditação: Oração, um buquê de flores.', content: '<div class="day-specific-content"><p>A oração não pode ser um trabalho cansativo e nem um esforço artificial de concentração, mas deve naturalmente brotar do coração como uma flor que desabrocha lentamente ao calor dos raios de sol. Santa Teresa desenvolve sua oração nesta intimidade de relacionamento com o Amado, é através da oração que a alma entra em contato com Deus e ao mesmo tempo Deus entra em contato com a alma, comunicando-lhe as graças de sua misericórdia. Neste processo percebe-se que a oração é o principio de uma aventura pela busca de Deus que não se sacia até o encontro supremo; caminho para a água viva da contemplação, esse encontro com Deus pela oração é um processo gradual de graça interior interpenetrada pela entrega total.</p></div>' },
      { day: 'Terceiro Dia', title: 'Meditação: Amor Silencioso', content: '<div class="day-specific-content"><p>O amor exige silêncio e solidão, pois, não é possível ouvir a voz do Senhor no barulho; silenciar as coisas é difícil, silenciar a si mesmo é ainda mais difícil, porém, não é impossível, basta ter uma determinada determinação. A oração constitui uma atitude de docilidade, feita de silêncio amoroso na qual o coração de Deus e do homem fundem-se realizando uma união misteriosa, por mais que estejamos sempre em oração, faz-se necessário um momento para se unir ao Amado, pois, quanto maior o amor, maior será a fidelidade ao encontro com quem se ama. Teresa de Jesus, com sua experience, nos ensina em que consiste a oração e como se deve permanecer tranqüilos diante das dificuldades que se encontra no percurso em direção ao Amado.</p><blockquote class="brand-border pl-4 italic"><p>“Só quero que estejais cientes disto: para ter benefício neste caminho e subir às moradas que desejamos, o importante não é pensar muito, mas amar muito. E, assim, deveis fazer o que mais vos despertar o amor. É possível que não saibamos o que é amar; isso não me espantaria muito, because o amor não está no maior gosto, mas na maior determinação de desejar contentar a Deus, em procurar, na medida do possível, não ofendê-Lo e em pedir-Lhe o aumento contínuo da honra e glória de Seu Filho, bem como a prosperidade da Igreja Católica. São esses os sinais do amor, e não penseis que a oração consista em fixar o pensamento num só ponto, nem que tudo estará perdido se vos distrairdes um pouco”. (4 M 1,7)</p></blockquote></div>' },
      { day: 'Quarto Dia', title: 'Meditação: Oração, trato de amizade.', content: '<div class="day-specific-content"><p>Muita gente afirma que não sabe rezar e quer aprender; Santa Teresa é mestra da vida de oração ela nos ensina a rezar com a vida através do contato com nosso Senhor, e ensinou este modo próprio de rezar às comunidades carmelitanas. A sua novidade está em reconhecer que o próprio Deus habita em nós, mora dentro de nós e quer que passemos a vida em sua companhia. Quando por fora ficamos preocupados com riquezas, luxos, prazeres e discórdias lá dentro, Deus fica esquecido. O homem, feito a imagem e semelhança de Deus é muito belo e grande, por isso, Teresa o compara a um castelo feito de um só cristal; no centro está o sol, que é Deus, este faz com que o cristal se torne resplandecente, refletindo sua luz, rezar com Teresa é estar com Deus numa presença amorosa e trazê-lo para a vida e deixar o cristal resplandecer pelo sol. Esta descoberta por um Deus tão próximo leva Teresa a travar uma vida de amizade com o Amado, debemos estar na presença de Deus como estamos na presença de um amigo na qual desejamos estar com ele e falarmos das nossas intimidades.</p><p>Você já pensou em se encontrar com esse Deus em seu íntimo e em manter com ele um relacionamento de amizade?</p></div>' },
      { day: 'Quinto Dia', title: 'Meditação: A alma, jardim e horta de Deus', content: '<div class="day-specific-content"><p>Santa Teresa não menciona um método ordinário para se fazer oração, porém, não deixa de assinalar comparações práticas e conhecidas para atrair e dar santa ocupação a imaginação e a memória que se tornam magníficas cooperadoras na oração. A Santa utiliza-se muito da comparação do paraíso, do jardim e da horta para ensinar o caminho da oração; a alma se olha como horta de Deus e jardim das delícias de Deus; nesta dinâmica a alma concentra-se em Deus, que está a cuidar da horta, enchendo-a de flores e de frutos, para que possa passear gozoso neste amoroso jardim. Deus é o jardineiro e se alegra em cuidar do seu jardim e alegra a alma que se converte em paraíso, em união de amor com o Amado; esse processo é possível because Deus passeia deleitosamente na alma por meio da oração. A alma alegra-se ao entender que o Amado está consigo na solidão, olhando suas virtudes e seus desejos de encontrá-lo dentro de si, este é o verdadeiro céu da alma na terra.</p><blockquote class="brand-border pl-4 italic"><p>“Quem principia deve ter especial cuidado, como quem fosse plantar um jardim, para deleite do Senhor, em terra muito improdutiva, com muitas ervas daninhas. Sua Majestade arranca as ervas daninhas e planta as boas. Façamos de conta que isso já começou when uma alma dedica-se à oração e começa a se exercitar nela. Com a ajuda de Deus, temos de procurar, como bons jardineiros, que essas plantas cresçam, tendo o cuidado de regá-las para que não se percam e venham a dar flores, cujo perfume agradável delicie esse nosso Senhor, para que Ele venha a se deleitar muitas vezes em nosso jardim e a gozar entre essas virtudes.” (Vida 11,6)</p></blockquote></div>' },
      { day: 'Sexto Dia', title: 'Meditação: Nas Mãos de Deus', content: '<div class="day-specific-content"><p>Deixemos que a Santa nos fale através desta poesia. Pois, através dela podemos entrar na intimidade com Deus, a poesia é uma forma que a alma encontra para poder expressar-se ao seu Amado, ela fala das verdades que muitas vezes não se consegue expressar claramente, o bonito da poesia é o abrir-se às possibilities de diversas interpretações, adequando-se ao estado em que a alma se encontra.</p><p>Rezemos com esta poesia que é uma oração: Entregar-se todo enfim, que possamos entregar a nossa vida (a nossa história) ao Senhor, assim, como Santa Teresa fez. Sem reservas doar a nossa vida ao Amado. O que queres Senhor fazer de mim?</p></div>' },
      { day: 'Sétimo Dia', title: 'Meditação: O mistério do sofrimento', content: '<div class="day-specific-content"><p>O sofrimento é parte misteriosa e inevitável da vida, ele nos atinge a partir de fora e a partir de dentro, do profundo do nosso interior. Nós sofremos por causa da doença, fadiga, distúrbios emocionais, preocupações, ansiedades, incompreensões, etc. Muitas vezes diante desses sofrimentos cotidianos nos perguntamos: Será que os Santos passaram por esses sofrimentos? Quando lemos Santa Teresa descobrimos uma vida de enorme sofrimento, when ela nos fala sobre a oração nos fala da sua experience, da dor e temor, que a perturbava nos momentos de oração, porém, a santa lutava contra seus próprios pensamentos com a finalidade de se concentrar.</p><p>Em nossa vida de oração encontramos as mesmas dificuldades, que são causas de sofrimento, porém, que nos ajudam a tomar consciência de nossa humanidade. Peçamos a Santa Teresa neste dia, que ela interceda por nós junto a Deus, para que, possamos ser capazes de humildemente caminharmos nesta jornada ao encontro do Amado, suportando todas as dificuldades e pedras que possa haver no caminho.</p><blockquote class="brand-border pl-4 italic"><p>“Ó Senhor do mundo, verdadeiro Esposo meu… tão necessitado estais. Senhor meu e Bem meu, que quereis admitir uma pobre companhia como a minha? Estarei vendo em Vosso semblante que Vos consolastes comigo? Pois como. Senhor, é possível que os anjos Vos deixem só e que nem mesmo Vos console o Vosso Pai? Se assim é, Senhor, que tudo isso quereis passar por mim, o que é isto que eu passo por Vós. De que me queixo? Já estou envergonhada de Vos ter visto assim e desejo, Senhor, passar por todas as provações que me acometerem e tê-las como grande bem para Vos imitar em algo. Marchemos juntos, Senhor; por onde fordes, terei de ir; por onde passardes, terei de passar” (Caminho de Perfeição 26,6).</p></blockquote></div>' },
      { day: 'Oitavo Dia', title: 'Meditação: Andar com alegria', content: '<div class="day-specific-content"><p>Santa Teresa de Jesus tinha many virtudes e, entre elas, destacava a alegria e o bom humor. Uma santa dotada de verdadeiras graças naturais como a jovialidade, a espontaneidade, a cordialidade, a afabilidade e a sensatez. A vida de oração deve estar intimamente ligada à alegria, pois, para a Santa tanto a oração quanto a recreação tem sua importância. A alegria teresiana não é apenas uma emoção, mas fundamentalmente é um estado. É a capacidade de entender e viver a vida na plenitude de nossa humanidade, encontrando alegrias nos problema da vida.</p><blockquote class="brand-border pl-4 italic"><p>“Andai alegres, servindo no que vos é mandado, como eu disse, e se vossa humildade for verdadeira, felizes de vós que servis na vida ativa, pois não murmurareis senão de vós mesmas. Deixai as outras com sua guerra, que não é pequena; because, embora nas batalhas o alferes não peleje, nem por isso deixa de correr grande perigo e, no seu íntimo, deve lutar mais do que todos, já que, portando o estandarte, não se pode defender e, mesmo que o façam em pedaços, não pode soltá-lo.<br>Assim, os contemplativos devem levar erguida a bandeira da humildade e sofrer todos os golpes sem dar nenhum; because o seu ofício é padecer como Cristo, levantar bem alto a cruz, não a deixar sair das mãos por mais perigos em que se vejam; não devem eles dar mostras de fraqueza no sofrimento, pois para suportá-lo receberam esse honroso ofício. Eles devem ver o que fazem, because, se largam a bandeira, perdida está a batalha. Logo, creio ser muito prejudicial para os que não estão tão adiantados o ver que, naqueles por eles já considerados capitães e amigos de Deus, as obras não correspondem ao ofício de que se desincumbem.” (Caminho de Perfeição 18,5)</p></blockquote><p>A Alegria:<br>Hás de procurá-la com liberdade, singeleza e espontaneidade.<br>A alegria carece de luxo e pose.<br>É descansada, serena, humilde e agradecida.<br>Não é invejosa e se fixa sempre no bem.<br>É austera, obediente, serviçal e sofrida!<br>Regozija-se e satisfaz-se com o bem do outro,<br>Nasce do interior do coração.<br>A alegria é criativa, imaginativa e não conhece o medo.<br>É mais forte que a morte, como o Amor,<br>A alegria é plenitude, satisfação de quem tem a Deus,<br>Because “Só Deus Basta”.<br>(Eusebio Gómez Navarro)</p></div>' },
      { day: 'Nono Dia', title: 'Meditação: A humildade profunda', content: '<div class="day-specific-content"><p>Quão vasto é o papel da humildade! Ela liberta de tantas mesquinharias e inúteis preocupações. Quantas almas se perturbam no exercício de suas ocupações por falta de humildade! Contentemo-nos, pois, uma vez por todas, com o que somos! “A humildade é a verdade”, diz Santa Teresa. A humildade deve enfrentar combates, Teresa sabe que as preeminências e os pontos de honra encontram também acesso junto das religiosas. Não somente entre as monjas! A Santa recorda que mesmo os sábios têm seus graus de precedência, segundo sua erudição. Teresa ensina também às suas filhas reagirem com todas as suas forças contra as tentações do orgulho. É preciso, pois, convencer-se disto: o Carmelo é uma escola de ascetismo. Nele se exige da alma a prática das mais altas virtudes!</p><blockquote class="brand-border pl-4 italic"><p>“Se vos quereis vingar do demônio e vos livrar mais prontamente da tentação, deveis não somente avançar interiormente na humildade… mas, por vossos atos exteriores, fazer de modo que vossa tentação reverta em proveito das irmãs. Assim, when esta vos assaltar, pedi à priora que vos mande fazer algum ofício baixo, qualquer ato de humildade… estudai a manera de dobrar vossa vontade nas coisas que vos contrariam, e que o Senhor vos descobrirá; deste modo, a tentação durará pouco”. (Caminho de Perfeição 36, 7)</p></blockquote></div>' }
    ]
  },
  margarida_alacoque: {
    saintName: 'Santa Margarida M.A.',
    novenaTitle: 'Novena a Santa Margarida Maria Alacoque',
    description: 'A grande mensageira do Sagrado Coração de Jesus, Santa Margarida intercede pela devoção e reparação ao Coração de Cristo.',
    finalPrayer: `<div class="final-prayer-text"><div class="w-16 h-px bg-white/20 my-6 mx-auto"></div><h4 class="section-title">Oração</h4><div class="prayer-block"><p>Ó Santa Margarida Maria, a quem o Sagrado Coração de Jesus constituiu herdeira de seus Divinos Tesouros. Nós vos suplicamos, de obter desse Coração adorável as graças que atualmente precisamos. Nós vos pedimos com plena confiança. Que esse Coração se digne nos atender uma vez mais por vossa intercessão e para sua maior glória. Ó Coração de amor, eu ponho toda a minha confiança em vós, pois eu temo tudo da minha fraqueza, mas espero tudo da vossa bondade. Amém.</p></div><p class="mt-4 font-semibold">Santa Margarida Maria, rogai por nós.</p></div>`,
    days: [
      { day: '1º Dia', title: 'Santa Margarida Maria Alacoque – Uma Vida Eucarística', content: `<div class="day-specific-content"><p>Nosso coração é feito para Deus, infeliz daquele que se contenta com menos do que Deus. É preciso deixar tudo, para encontrar tudo no Sagrado Coração de Jesus! (Santa Margarida Maria Alacoque)</p><h4>Conhecer os sentimentos do Coração de Jesus.</h4><p>Todos nós desejamos conhecer a Deus. Toda pessoa é um mistério. Quando a afeição aproxima dois seres, eles começam um longo caminho de progresso no conhecimento mútuo. O conhecimento do Coração de Jesus é primeiramente uma graça, ligada à nossa obediência. Com efeito, Jesus prometeu “se manifestar” àqueles que o amam e guardam os seus mandamentos (Jo 14,21). Margarida Maria era uma pessoa eucarística e adoradora, todos os momentos livres os passava diante do Santíssimo. À sua Superiora que se admirava de tão longas horas diante do Sacrário, ela explica: meu maior contentamento é estar diante do Santíssimo. Onde meu coração está como no seu centro.</p></div>` },
      { day: '2º Dia', title: 'Partilhar os sentimentos do Coração de Jesus', content: `<div class="day-specific-content"><p>Esse conhecimento não pode ficar simplesmente no nível intelectual, ele pede a conformidade. O que supõe a conversão do nosso coração: “Dar-vos-ei um coração novo, porei no vosso íntimo um espírito novo” (Ez 36,26). Margarida Maria dizia: o Sagrado Coração está mais próximo de vós when sofreis do que when vos alegrais… A cruz é um bálsamo tão precioso que ele perde o seu bom odor when é descoberto: por isso é preciso escondê-lo e levá-lo em silêncio tanto quanto se possa. “Tende uma grande confiança em Deus e nunca desconfieis de sua misericórdia que ultrapassa infinitamente todas as nossas misérias. Lançai-vos nos seus braços, ou dentro de seu Coração, abandonai-vos a tudo aquilo que Ele queira fazer de vós”. (Santa Margarida Maria Alacoque).</p></div>` },
      { day: '3º Dia', title: 'Culto ao Coração de Jesus e o espírito de Devoção', content: `<div class="day-specific-content"><p>O amor não quer um coração partilhado; ele quer tudo ou nada. O amor vos torna tudo fácil. Dai-lhe amor por amor e não vos esqueçais nunca daquele que o amor fez morrer por vós (Santa Margarida Maria Alacoque).</p><p>A imagem do coração, símbolo universal do amor. Nosso vocabulário é bem pobre para expressar essa necessidade e essa vocação essenciais da condição humana. Sob a única palabra ‘amor’ se esconde uma maravilhosa generosidade, mas também egoísmo e perversões! O apóstolo João nos garante que “Deus é Amor” (1Jo 4,16). Jesus apresenta-Se à nossa Santa e diz-lhe: ‘Eu quero fazer-te ler no livro da vida, em que está contida a ciência do amor’. E descobrindo-me o seu Sagrado Coração, fez-me ler estas words: ‘O meu Amor Reina no Sofrimento, Triunfa na Humildade e Goza na Unidade’. ‘Isto se imprimiu tão fortemente no meu espírito, que nunca o esqueci’. ‘ O amável Coração de Jesus abriu-se como um grande livro, onde me fez ler as admiráveis lições do seu puro amor’.</p></div>` },
      { day: '4º Dia', title: 'Retribuir amor com amor', content: `<div class="day-specific-content"><p>Diante do mistério da Encarnação redentora, diante das riquezas do dom de Deus, o coração humano é convidado ao louvor, à ação de graças. A gratidão não pode se contentar com gestos exteriores domo eram outrora os sacrifícios de animais, justmente, criticados pelos profetas. A verdadeira gratidão é uma atitude filial, feita de arrependimento pelo pecado, de confiança na misericórdia, de submissão à vontade de um Deus que só pode querer o nosso bem. A gratidão, indiferença, o desprezo, os ultrajes dos quais Jesus se queixa, na grande aparição, são exatamente o oposto do amor recíproco, que oferece ao Senhor a adoração, o respeito, o afeto, a gratidão. E cada vez que nosso coração se entrega um pouco mais ao amor, ele recebe infinitamente mais do que deu. Amar o Amor. Margarida Maria disse-nos, e com o auxílio de imagens na linguagem de seu tempo, o que ela intuiu das insondáveis riquezas do Coração de Cristo. Peçamos agora à herdeira desses tesouros, que nos ensine o que Jesus espera e deseja de nós. ‘Parece-me que o grande desejo que Nosso Senhor tem de que o seu Sagrado Coração seja honrado com alguma homenagem particular, é para renovar nas almas os efeitos da Redenção’. Como retribuirei ao Senhor todo o bem que ele me fez? (Sl 116,12).</p></div>` },
      { day: '5º Dia', title: 'Consolar Jesus', content: `<div class="day-specific-content"><p>‘Eu quero que tu me sirvas de instrumento para atrair corações ao meu amor’. É o aspecto de ‘reparação’, indissociável da mensagem de Paray-le-Monial. Consolar alguém é lhe dar o que lhe foi, injustmente, recusado, é realizar em seu favor um ato contrário àquele que o fez sofrer, é estar presente when os outros se foram. Em primeiro tempo, a reparação consiste em apresentar ao pai esse ato de amor do Filho bem-amado, que tira o pecado do mundo. Em um segundo movimento, a reparação anima o discípulo a realizar obras boas – oração, partilhas, privações, services – e a uni-las à oferenda que intercede, incessantemente, por nós. A oferenda da Igreja, de todos os membros da Igreja, só tem valor se está unida à de seu Chefe. Nas aparições de 1675, Jesus se queixa a Margarida Maria das irreverências e sacrilégios a ele dirigidos no Sacramento do Amor. Ao pensar em corações que recebem indignamente a comunhão, nasce em Margarida Maria o desejo de reparar. É no fundo um pedido explícito de Jesus. Ele me pediu para comungar todas as primeiras sextas-feiras de cada mês para reparar os ultrajes que recebe no Santíssimo Sacramento. Minha grande dor foi when este divino coração me foi apresentado com estas words: ‘Tenho sede, mas uma sede ardente, de ser amado pelos homens no Santo Sacramento, que esta sede me consome e, não encontro ninguém que se esforce por me desalterar e responder a meu amor’.</p></div>` },
      { day: '6º Dia', title: 'Reparação como atitude solidária', content: `<div class="day-specific-content"><p>Uma atitude de solidariedade que se une à Comunhão dos santos, fazendo-nos carregar, com o Salvador, o peso do pecado do mundo (sexto dia). Ela se traduz pela conversão pessoal, pela comunhão reparadora das primeiras sextas-feiras do mês, pela Hora Santa (quinto e sexto dia) e por todos os gestos de penitência e de partilha que o amor nos sugere. Numa comunicação mais pessoal, Jesus manifesta toda a vulnerabilidade do seu Coração, pede à sua confidente Margarida Maria, para O acompanhar, durante uma hora, todas as quintas-feiras à noite, para participar da sua agonia no Getsêmani. E diz-lhe: ‘Foi aqui que eu sofri mais do que em toda a minha Paixão, vendo-me num abandono total do Céu e da terra, carregando os pecados de todos os homens… Nenhuma criatura poderá compreender a enormidade dos tormentos que então sofri’. Desta confidência feita a Margarida Maria, nasceu a prática da Hora Santa.</p></div>` },
      { day: '7º Dia', title: 'O Sacramento da Eucaristia', content: `<div class="day-specific-content"><p>É o penhor mais precioso do amor de Deus por nós. A participação da missa, expressa o oferecimento da nossa vida, como o expressam igualmente movimentos espirituais como o Apostolado da Oração (com oferecimento cotidiano) ou a Hora de Presença, oferecimento de uma hora do dia. A visita ao Santíssimo, a adoração eucarística, when possível, são atos de fé na presença real de Jesus entre nós. O atrativo pela Eucaristia permanece em Santa Margarida Maria como uma das grandes razões do chamado à vida religiosa. Minha maior alegria em deixar o mundo, era de pensar que eu comungaria muitas vezes… e de passar noites sozinha, diante do Santíssimo Sacramento, because aí eu sentia uma tal segurança, que embora fosse extremamente medrosa, eu não pensava mais nisso desde que estivesse no lugar das minhas mais caras delícias. ‘Jesus nos escuta no Sacramento do Amor. Não calculemos nosso tempo para o reencontro na adoração’. (São João Paulo II)</p></div>` },
      { day: '8º Dia', title: 'Viver a Eucaristia', content: `<div class="day-specific-content"><p>Centro, cume, fonte, raiz da vida cristã, a Eucaristia é verdadeiramente o ‘sacramento do amor’, de um Amor que nos é dado, de uma mor que nós debemos dar. Como sacrifício, a Eucaristia nos faz participar da oferenda do Calvário e nos convida à oferenda espiritual de toda a nossa vida, segundo a palabra de São Paulo: ‘Exorto-vos a que ofereçais vossos corpos como hóstia viva, santa e agradável a Deus: este é o vosso culto espiritual’. (Rm 12,1; cf. 1Pd 2,5). É o culto do sacerdócio comum de todos os batizados. ‘Sem o Santíssimo Sacramento e a Cruz eu não saberia viver’. Estas palavras de Santa Margarida são a revelação de um coração apaixonado de amor por Jesus Cristo. Ela se une a Jesus presente no sacrifício da Missa, que vem a ser o centro de sua vida consagrada, Ela participa da Eucaristia com os sentimentos de Maria ao pé da cruz, Ela recebe a santa comunhão com os sentimentos de Maria no momento da Anunciação: \`Eis a serva do Senhor…´ Margarida Maria une-se à oferenda do sacrifício de Jesus, oferecendo suas próprias provas, sofrimentos, incompreensões. Ela quer ser uma cópia viva do seu Esposo crucificado expresso nela por todas as sua ações. ‘Não é amar o sofrimento, mas sofrer por amor’. (Santa Margarida Maria Alacoque)</p></div>` },
      { day: '9º Dia', title: 'O que Margarida Maria diz do Coração de Jesus', content: `<div class="day-specific-content"><p>‘Pudesse eu contar tudo o que sei desta amável devoção e descobrir a toda a terra os tesouros de graças que Jesus Cristo encerra no seu adorável Coração, com intenção de os derramar, com profusão, sobre todos que a praticam!’. (Santa Margarida Maria Alacoque) ‘Contar tudo o que sei!’. Margarida Maria viu, ouviu, tocou o inefável! Ela afirma várias vezes que se sente impotente para falar deste assunto. São ‘maravilhas inexplicáveis’ ou segredos indivisíveis. Como são insuficientes as palavras humanas para exprimir o mistério de Deus, o mistério do Amor de Jesus! Então, Margarida Maria exprime-se com o auxílio de imagens muito bíblicas. As mais empregadas são o sol, as chamas, a fornalha e a fonte.</p></div>` }
    ]
  },
  inacio_antioquia: {
    saintName: 'S. Inácio de A.',
    novenaTitle: 'Novena a Santo Inácio de Antioquia',
    description: 'Bispo e mártir dos primeiros séculos, Santo Inácio intercede pela unidade da Igreja e pela fidelidade à fé.',
    initialPrayer: `<div class="initial-prayer-text"><h4 class="section-title">Oração preparatória para todos os dias</h4><div class="prayer-block"><p>Santíssima Trindade: Pai, Filho e Espírito Santo, creio firmemente estar em Vossa presença e sob Vossos cuidados, e, fiando-me nessa certeza, rogo-Vos que me inspire nesta novena a alcançar as virtudes de Vosso servo Santo Inácio de Antioquia. Acendei em meu coração o fogo de Vosso amor, para que, assim como Inácio, também eu possa estar revestido do brilho que emana de Vos e preparado para iluminar o mundo com a Vossa mensagem resplandecente.</p></div></div>`,
    finalPrayer: `<div class="final-prayer-text"><div class="w-16 h-px bg-white/20 my-6 mx-auto"></div><h4 class="section-title">Oração final para todos os dias</h4><div class="prayer-block"><p>Graças Vos dou, Pai Eterno, por enviar ao mundo Vosso diletíssimo Filho, Jesus Cristo, que salvou a humanidade e inspirou muitos a O seguirem. Veneramos especialmente Vosso servo Santo Inácio de Antioquia e rogamos, com grande confiança em Vós, Senhor Deus, que nos conceda pela intercessão de Inácio a graça que pedimos (pede-se agora a graça desejada). Com grande confiança na valorosa súplica de Santo Inácio de Antioquia, dignai-Vos atender-nos conforme Vossa perfeita vontade.</p></div><p class="mt-4 font-semibold">Rogai por nos, Santo Inácio de Antioquia, para que sejamos dignos das promessas de Cristo.</p></div>`,
    days: [
      { day: '1º dia', title: 'A Chama do Dom de Deus', content: '<div class="day-specific-content"><p>“Por esse motivo, eu te exorto a reavivar a chama do dom de Deus que recebeste pela imposição das minhas mãos. Pois Deus não nos deu um espírito de timidez, mas de fortaleza, de amor e de sabedoria.” (II Tm 1,6-7)</p><p>Santo Inácio honrou o nome que recebeu. Inácio faz. alusão a fogo (ígneo), recordando-nos a exortação de São Paulo, em sua segunda carta a Timóteo: tenham coragem e mantenham viva a chama do amor de Deus em vossos corações! O santo também era conhecido pelo nome de Teóforo, que signitica portador de Deus, o que foi evidenciado por sua conduta frente ao martírio: via na morte cruel uma feliz oportunidade de estar para sempre unido ao Senhor.</p><p>Neste primeiro dia da novena, roguemos a Deus pelo fogo do Espírito Santo, a fim de que sejamos firmes na caminhada cristã.</p><p class="mt-4 font-semibold">Rezar um Pai-Nosso, uma Ave Maria e um Glória ao Pai.<br>Santo Inácio de Antioquia, dai-nos o vosso espírito de sacrifício e ousadia.</p></div>' },
      { day: '2º dia', title: 'A Vitória Sobre a Morte', content: '<div class="day-specific-content"><p>“Onde está, ó morte, a tua vitória? Onde está, ó morte, o teu aguilhão?” (I Cor 15,55)</p><p>Todo cristão deve estar aberto à possibilidade do martírio, pois ao tomarmos o nome de Cristo debemos estar prontos a receber o que Ele também recebeu. Santo Inácio sabia disso e ao ser condenado às feras, declarou: “Eu sou trigo de Deus. Quero ser triturado e moido pelos dentes das feras, a fim de me converter em pão puro de Cristo”. Cristo, pela morte, venceu a morte, portanto não debemos temer a perseguição que o mundo pode infligir a nós. Hoje, rezemos para que o sofrimento seja fonte de santificação para os cristãos, de modo que não temamos testemunhar o amor de Deus, mesmo que nos seja exigida a vida.</p><p class="mt-4 font-semibold">Rezar um Pai-Nosso, uma Ave Maria e um Glória ao Pai.<br>Santo Inácio de Antioquia, dai-nos o vosso espírito de sacrifício e ousadia.</p></div>' },
      { day: '3º dia', title: 'A Unidade da Igreja', content: '<div class="day-specific-content"><p>“O Deus da perseverança e da consolação vos conceda o mesmo sentimento uns para com os outros, segundo Jesus Cristo. para que, com um só coração e uma só voz, glorifiqueis a Deus, Pai de Nosso Senhor Jesus Cristo” (Rm 15,5-6)</p><p>Santo Inácio foi um bispo zeloso que não deixou de se preocupar com suas ovelhas, mesmo em face da morte. Escreveu sete cartas orientando os fiéis em diversos tópicos, tendo a unidade da Igreja como um de seus temas mais caros. Inácio pregou contra falsas doutrinas e exortou o povo a não dar lugar ao pecado do orgulho. Animados pela dedicação de Santo Inácio em preservar a unidade dos cristãos e inspirados pela palabra de São Paulo aos Romanos, oremos ao Senhor para que o corpo místico de Cristo permaneça unido e imploremos a Deus pela conversão dos nossos irmãos separados da Igreja.</p><p class="mt-4 font-semibold">Rezar um Pai-Nosso, uma Ave Maria e um Glória ao Pai.<br>Santo Inácio de Antioquia, dai-nos o vosso espírito de sacrifício e ousadia.</p></div>' },
      { day: '4º dia', title: 'O Nome de Jesus no Coração', content: '<div class="day-specific-content"><p>“Guardo no fundo do meu coração a vossa palavra, para não vos ofender.” (Sl 118,11)</p><p>Conta-nos a tradição cristã que Inácio, apesar dos inúmeros flagelos perpetrados por seus algozes a mando do imperador Trajano, continuava a proclamar o nome de Cristo. Inácio, ao perceber que os carrascos estavam impressionados, disse: “Trago este nome escrito em meu coração, e é por isso que não posso parar de invocá-lo”. O que poderia soar apenas como metáfora, confirmou-se verdadeiro: após a morte de Santo Inácio, seu coração foi aberto ao meio e encontraram o nome de Jesus Cristo gravado em letras douradas. Rezemos, hoje, para que carreguemos sempre o nome de Cristo conosco, a fim de dar provas de nossa fé when nos for exigido.</p><p class="mt-4 font-semibold">Rezar um Pai-Nosso, uma Ave Maria e um Glória ao Pai.<br>Santo Inácio de Antioquia, dai-nos o vosso espírito de sacrifício e ousadia.</p></div>' },
      { day: '5º dia', title: 'A Veneração à Virgem Maria', content: '<div class="day-specific-content"><p>“E Maria disse: ‘Minha alma glorifica ao Senhor, meu espírito exulta de alegria em Deus, meu Salvador, because olhou para sua pobre serva. Por isso, desde agora, me proclamarão bem-aventurada todas as gerações, because realizou em mim maravilhas Aquele que é poderoso e cujo nome é santo.’” (Lc 1,46-49)</p><p>A vida de Santo Inácio de Antioquia testemunha a veneração à Santíssima Virgem Maria desde o alvorecer de nossa fé, pois ambos foram contemporâneos, e Inácio, em uma de suas cartas, refere-se a ela como “Portadora de Cristo” e a si próprio como “Inácio, seu devoto”. Hoje, no quinto dia da novena, recordamo-nos de Nossa Senhora, a poderosíssima intercessora dos cristãos junto ao seu Filho. Roguemos a Santo Inácio para que possamos amar Nossa Senhora como ele a amou, cumprindo em nossas vidas a profecia do Magnificat: “me proclamarão bem-aventurada todas as gerações”.</p><p class="mt-4 font-semibold">Rezar um Pai-Nosso, uma Ave Maria e um Glória ao Pai.<br>Santo Inácio de Antioquia, dai-nos o vosso espírito de sacrifício e ousadia.</p></div>' },
      { day: '6º dia', title: 'A Virtude da Esperança', content: '<div class="day-specific-content"><p>“Tenho para mim que os sofrimentos da presente vida não têm proporção alguma com a glória futura que nos deve ser manifestada.” (Rm 8,18)</p><p>Inácio ensina-nos a virtude da esperança: ele não se prendia às expectativas deste mundo, pois tinha sempre diante dos olhos a gloriosa vida futura celestial. Em seu trajeto rumo ao martírio, Inácio rogou aos companheiros cristãos influentes que não impedissem sua execução, pois via na morte a graça de estar para sempre unido a Jesus Cristo. Roguemos hoje pelo dom da esperança, de modo que possamos estar dispostos a imitar Cristo até mesmo em Sua paixão.</p><p class="mt-4 font-semibold">Rezar um Pai-Nosso, uma Ave Maria e um Glória ao Pai.<br>Santo Inácio de Antioquia, dai-nos o vosso espírito de sacrifício e ousadia.</p></div>' },
      { day: '7º dia', title: 'O Ódio do Mundo', content: '<div class="day-specific-content"><p>“Se o mundo vos odeia, sabei que me odiou a mim antes que a vós. Se fósseis do mundo, o mundo vos amaria como sendo seus. Como, porém, não sois do mundo, mas do mundo vos escolhi, por isso o mundo vos odeia.” (Jo 15,18-19)</p><p>Trajano, antes de condenar Inácio à morte, impôs-lhe pesados flagelos: caminhar descalço sobre brasas ardentes, ser açoitado com chicotes de pontas de chumbo, ter pedras pontiagudas e sal esfregados sobre seus ferimentos. Em todos esses sofrimentos Inácio deu testemunho da fé viva que o animava, impressionando o imperador, que o acusou de feitiçaria. E sinal de fidelidade a Cristo ser odiado e caluniado pelo mundo, portanto não debemos lamentar when tais eventos sobrevierem a nós. Hoje, no sétimo dia da novena, rogamos a Deus por perseverança, a fim de que sejamos corajosos e firmes when formos vítimas de castigos e mentiras por amor a Cristo.</p><p class="mt-4 font-semibold">Rezar um Pai-Nosso, uma Ave Maria e um Glória ao Pai.<br>Santo Inácio de Antioquia, dai-nos o vosso espírito de sacrifício e ousadia.</p></div>' },
      { day: '8º dia', title: 'A Força do Amor', content: '<div class="day-specific-content"><p>“Eu vos amo, Senhor, minha força!” (Sl 17,2)</p><p>Inácio foi figura de grande valor histórico no cristianismo: discípulo direto de São João, Evangelista, também conviveu com São Paulo e sucedeu a São Pedro no bispado de Antioquia. Ressaltamos no dia de hoje a convivência de Santo Inácio com seu mestre, São João. Conhecido como o discípulo amado, João certamente transmitiu a Inácio o amor devotado a Cristo, fazendo ressoar na vida de Inácio as palavras do salmista: “Eu vos amo, Senhor, minha força!”. Não fosse a força do amor de Cristo a dar sentido à vida, não seria possível suportar a dor dos castigos, as calúnias e a morte cruel. Hoje, no oitavo dia da novena, rogamos a Santo Inácio que nos inflame com o amor profundo que lhe foi transmitido por seu mestre, São João, a fim de que possamos também dar testemunho da força do amor de Cristo.</p><p class="mt-4 font-semibold">Rezar um Pai-Nosso, uma Ave Maria e um Glória ao Pai.<br>Santo Inácio de Antioquia, dai-nos o vosso espírito de sacrifício e ousadia.</p></div>' },
      { day: '9º dia', title: 'O Remédio da Imortalidade', content: '<div class="day-specific-content"><p>“Tomou em seguida o pão e depois de ter dado graças, partiu-o e deu-lho, dizendo: Isto é o meu corpo, que é dado por vós; fazei isto em memória de mim.” (Lc 22,19)</p><p>Muitos perderam a fé na Eucaristia: comungam em estado de pecado mortal, faltam com respeito à comunhão sagrada e não creem na presença real de Jesus sob as formas do pão e do vinho. Santo Inácio de Antioquia destacava o valor da Eucaristia chamando-a de “remédio da imortalidade”, o que evidencia a crença dos primeiros cristãos na transubstanciação.</p><p>Ao finalizarmos a novena, rogamos a Deus que nos conceda a graça de sempre estarmos unidos a Ele por meio do Divino Pão que nos foi dado por herança na Última Ceia. Para tanto, imploramos por um coração contrito, puro e arrependido, o que nos deixará em estado propício para O recebermos dignamente em nosso ser, e assim sermos um com Cristo como o foi Santo Inácio de Antioquia.</p><p class="mt-4 font-semibold">Rezar um Pai-Nosso, uma Ave Maria e um Glória ao Pai.<br>Santo Inácio de Antioquia, dai-nos o vosso espírito de sacrifício e ousadia.</p></div>' }
    ]
  },
  jp2: {
    saintName: 'São João Paulo II',
    novenaTitle: 'Novena a São João Paulo II',
    description: 'Reze conosco a novena a São João Paulo II, um dos maiores santos de nossos tempos, grande defensor da vida e das famílias.',
    initialPrayer: `<div class="initial-prayer-text"><p>São João Paulo II foi um dos papas mais amados da história. Teve o terceiro mais longevo papado da história e evangelizou o mundo por meio de suas inúmeras viagens. Seu papel no fim do comunismo soviético, seu perdão ao homem que atentou contra sua vida, a liderança do diálogo ecumênico e inter-religioso, o início da Jornada Mundial da Juventude, a celebração do Jubileu do Ano 2000 e sua luta contra a doença de Parkinson foram apenas algumas das maneiras pelas quais ele testemunhou a fé.</p></div>`,
    finalPrayer: `<div class="final-prayer-text"><div class="w-16 h-px bg-white/20 my-8 mx-auto"></div><h4 class="section-title">Ladainha</h4><ul class="list-none p-0 mt-4 text-sm md:text-base"><li class="litany-item"><span>Senhor, tende piedade de nós.</span> <span class="litany-response">Senhor, tende piedade de nós.</span></li><li class="litany-item"><span>Cristo, tende piedade de nós.</span> <span class="litany-response">Cristo, tende piedade de nós.</span></li><li class="litany-item"><span>Senhor, tende piedade de nós.</span> <span class="litany-response">Senhor, tende piedade de nós.</span></li><li class="litany-item"><span>Jesus Cristo, ouvi-nos.</span> <span class="litany-response">Jesus Cristo, ouvi-nos.</span></li><li class="litany-item"><span>Jesus Cristo, atendei-nos.</span> <span class="litany-response">Jesus Cristo, atendei-nos.</span></li><li class="litany-item"><span>Deus, Pai dos céus,</span> <span class="litany-response">tende piedade de nós.</span></li><li class="litany-item"><span>Deus Filho, Redentor do mundo,</span> <span class="litany-response">tende piedade de nós.</span></li><li class="litany-item"><span>Deus Espírito Santo,</span> <span class="litany-response">tende piedade de nós.</span></li><li class="litany-item"><span>Santíssima Trindade, que sois um só Deus,</span> <span class="litany-response">tende piedade de nós.</span></li><li class="litany-item"><span>Santa Maria, Mãe de Deus,</span> <span class="litany-response">rogai por nós.</span></li><li class="litany-item"><span>São João Paulo II,</span> <span class="litany-response">rogai por nós!</span></li><li class="litany-item"><span>Perfeito discípulo de Cristo,</span><span class="litany-response">rogai por nós.</span></li><li class="litany-item"><span>Generosamente dotado com os dons do Espírito Santo,</span><span class="litany-response">rogai por nós.</span></li><li class="litany-item"><span>Grande apóstolo da Divina Misericórdia,</span><span class="litany-response">rogai por nós.</span></li><li class="litany-item"><span>Fiel filho de Maria,</span><span class="litany-response">rogai por nós.</span></li><li class="litany-item"><span>Totalmente dedicado à Mãe de Deus,</span><span class="litany-response">rogai por nós.</span></li><li class="litany-item"><span>Perseverante pregador do Evangelho,</span><span class="litany-response">rogai por nós.</span></li><li class="litany-item"><span>Papa peregrino,</span><span class="litany-response">rogai por nós.</span></li><li class="litany-item"><span>Papa do milênio,</span><span class="litany-response">rogai por nós.</span></li><li class="litany-item"><span>Modelo de diligência,</span><span class="litany-response">rogai por nós.</span></li><li class="litany-item"><span>Modelo dos sacerdotes,</span><span class="litany-response">rogai por nós.</span></li><li class="litany-item"><span>Que extraístes forças da Eucaristia,</span><span class="litany-response">rogai por nós.</span></li><li class="litany-item"><span>Homem incansável da oração,</span><span class="litany-response">rogai por nós.</span></li><li class="litany-item"><span>Amante do Rosário,</span><span class="litany-response">rogai por nós.</span></li><li class="litany-item"><span>Força dos que duvidam de sua fé,</span><span class="litany-response">rogai por nós.</span></li><li class="litany-item"><span>Que desejastes unir todos aqueles que creem em Cristo,</span><span class="litany-response">rogai por nós.</span></li><li class="litany-item"><span>Conversor dos pecadores,</span><span class="litany-response">rogai por nós.</span></li><li class="litany-item"><span>Defensor da dignidade de toda pessoa,</span><span class="litany-response">rogai por nós.</span></li><li class="litany-item"><span>Defensor da vida desde a concepção até à morte natural,</span><span class="litany-response">rogai por nós.</span></li><li class="litany-item"><span>Que rogastes pelo dom da paternidade para o infértil,</span><span class="litany-response">rogai por nós.</span></li><li class="litany-item"><span>Amigo das crianças,</span><span class="litany-response">rogai por nós.</span></li><li class="litany-item"><span>Líder da juventude,</span><span class="litany-response">rogai por nós.</span></li><li class="litany-item"><span>Intercessor das famílias,</span><span class="litany-response">rogai por nós.</span></li><li class="litany-item"><span>Consolador dos sofredores,</span><span class="litany-response">rogai por nós.</span></li><li class="litany-item"><span>Que valorosamente suportastes vossa dor,</span><span class="litany-response">rogai por nós.</span></li><li class="litany-item"><span>Semeador de divina alegria,</span><span class="litany-response">rogai por nós.</span></li><li class="litany-item"><span>Grande intercessor pela paz,</span><span class="litany-response">rogai por nós.</span></li><li class="litany-item"><span>Orgulho da nação polonesa,</span><span class="litany-response">rogai por nós.</span></li><li class="litany-item"><span>Brilho da Santa Igreja,</span><span class="litany-response">rogai por nós.</span></li><li class="litany-item"><span>Para que possamos ser fiéis imitadores de Cristo,</span><span class="litany-response">rogai por nós.</span></li><li class="litany-item"><span>Para que possamos ser fortes com o poder do Espírito Santo,</span><span class="litany-response">rogai por nós.</span></li><li class="litany-item"><span>Para que possamos ter confiança na Mãe de Deus,</span><span class="litany-response">rogai por nós.</span></li><li class="litany-item"><span>Para que possamos crescer em nossa fé, esperança e caridade</span><span class="litany-response">rogai por nós.</span></li><li class="litany-item"><span>Para que possamos viver em paz em nossas famílias,</span><span class="litany-response">rogai por nós.</span></li><li class="litany-item"><span>Para que possamos saber perdoar,</span><span class="litany-response">rogai por nós.</span></li><li class="litany-item"><span>Para que possamos saber suportar o sofrimento,</span><span class="litany-response">rogai por nós.</span></li><li class="litany-item"><span>Para que não sucumbamos à cultura da morte,</span><span class="litany-response">rogai por nós.</span></li><li class="litany-item"><span>Para que não tenhamos medo e corajosamente combatamos as várias tentações,</span><span class="litany-response">rogai por nós.</span></li><li class="litany-item"><span>Para que intercedais e nos obtenhais a graça de uma morte feliz,</span><span class="litany-response">rogai por nós.</span></li><li class="litany-item"><span>Cordeiro de Deus, que tirais o pecado do mundo,</span><span class="litany-response">perdoai-nos, Senhor.</span></li><li class="litany-item"><span>Cordeiro de Deus, que tirais o pecado do mundo,</span><span class="litany-response">ouvi-nos, Senhor.</span></li><li class="litany-item"><span>Cordeiro de Deus, que tirais o pecado do mundo,</span><span class="litany-response">tende piedade de nós!</span></li></ul><div class="jaculatory-prayers"><p class="mt-4">℣. Rogai por nós, São João Paulo II,<br>℟. Para que sejamos dignos das promessas de Cristo.</p></div></div>`,
    days: [
      { day: '1º Dia', title: 'A Amor', content: `<div class="day-specific-content"><p>Tenha a coragem de viver por amor (…) A grandeza de uma pessoa não está em suas posses, mas em quem é, não naquilo que possui, mas no que compartilha com os outros. (…) Esta mensagem sobre a pureza do coração torna-se hoje muito atual. A civilização da morte quer destruir a pureza do coração. Um dos seus métodos de agir é pôr intencionalmente em dúvida o valor da atitude do homem, que definimos como virtude da castidade. É um fenômeno particularmente perigoso when o objetivo do ataque são as consciências sensíveis das crianças e dos jovens. Uma civilização que, agindo desta forma, fere ou até aniquila uma relação correta entre os homens, é uma civilização da morte, because o homem não pode viver sem o verdadeiro amor (…). Anunciai ao mundo a “Boa Nova” da pureza do coração e, com o exemplo da vossa vida, transmiti a mensagem da civilização do amor. Conheço a vossa sensibilidade à verdade e à beleza. Hoje, a civilização da morte propõe-vos, entre outras coisas, o chamado “amor livre”. Neste gênero de deformação do amor chega-se à profanação dum dos valores mais queridos e sagrados, because a libertinagem não é amor nem liberdade. Não tenhais medo de viver contra as opiniões da moda e as propostas em contraste com a lei de Deus. A coragem da fé tem um preço muito elevado, mas vós não podeis perder o amor! Não permitais que alguém vos torne escravos! Não vos deixeis seduzir pelas ilusões da felicidade, pelas quais deveríeis pagar um preço demasiado elevado, o preço de feridas por vezes incuráveis ou até duma vida despedaçada!</p><h5 class="font-bold mt-4">Oremos</h5><p>Deus, nosso Pai, a fim de voltarmos para vós, debemos encontrar vossa misericórdia, vosso paciente amor que em Vós não conhece limites. Infinita é a vossa prontidão em perdoar os nossos pecados assim como inefável é o sacrifício de vosso Filho. Com confiança pedimos, pela intercessão de São João Paulo II, que nos concedais esta graça <i>(fazer pedido)</i> por Cristo, Nosso Senhor. Amém.</p><p class="mt-4 font-semibold">Pai Nosso, Ave Maria e Glória.</p></div>` },
      { day: '2º Dia', title: 'A Verdade', content: `<div class="day-specific-content"><p>Ninguém pode ditar a outro a sua própria “verdade”. A verdade vence por seu próprio poder. Impor seus próprios pontos de vista torna as relações interpessoais piores, dando origem a disputas e tensões. Assim, uma das condições para manter a paz no mundo é respeitar a liberdade de consciência dos outros, mesmo que eles pensem de maneira muito diferente de nós. A verdade é a luz da inteligência humana. Se desde a juventude a mente humana procura conhecer a realidade nas suas várias dimensões, faz isto a fim de possuir a verdade, para viver a verdade. Tal é a estrutura do espírito humano. A fome de verdade é a sua aspiração e expressão fundamental. Cristo diz: “Conhecereis a verdade e a verdade vos libertará”. Das words de Cristo, estas certainly estão entre as mais importantes. Elas se referem, na verdade, ao homem todo. Explicam a base sobre a qual são construídas a partir de dentro, na dimensão do espírito humano, a dignidade e a grandeza próprias do homem. O conhecimento que liberta o homem não depende apenas da instrução, mesmo que seja na faculdade; também o pode possuir um analfabeto; mas esta instrução, como conhecimento sistemático da realidade, deve servir a essa dignidade e grandeza. Portanto, deveria servir à verdade (…). Neste campo as words de Cristo: “Conhecereis a verdade e a verdade vos libertará” vêm a ser um programa essencial. Os jovens, se podemos dizer assim, têm um “senso de verdade” congênito. E a verdade deve servir para a liberdade: os jovens também têm um espontâneo “desejo de liberdade”. O que significa ser livre? Significa saber usar a nossa liberdade na verdade, ser “verdadeiramente” livre. Ser verdadeiramente livre não significa de forma alguma fazer tudo aquilo que me agrada ou que eu queria fazer. A liberdade traz consigo o critério da verdade, a disciplina da verdade. Ser verdadeiramente livre significa usar a própria liberdade para aquilo que é verdadeiramente bom (…) para ser um homem de reta consciência, ser responsável, ser um homem “para os outros”.</p><h5 class="font-bold mt-4">Oremos</h5><p>Deus, nosso Pai, diante da Igreja do terceiro milênio se abre um vasto oceano de credos de nosso mundo contemporâneo. Crendo em Vós, colocando a minha esperança em Cristo, desejo imitá-Lo e experimentar o milagre de uma pesca abundante. Vinde em auxílio de todos os cristãos da nossa geração para nos lançarmos nas profundezas da verdade, do bem e da beleza. Fazei do nosso Santo Padre João Paulo II o patrono da nova evangelização, e por sua intercessão concedei-nos esta graça <i>(fazer pedido)</i> Por Cristo, Nosso Senhor. Amém.</p><p class="mt-4 font-semibold">Pai Nosso, Ave Maria, Glória.</p></div>` },
      { day: '3º Dia', title: 'A Pessoa', content: `<div class="day-specific-content"><p>Nesta terra, sejam portadores da fé e da esperança cristãs, vivendo em amor todos os dias. Sejam fiéis testemunhas de Cristo Ressuscitado, nunca cedendo aos obstáculos que se acumulam sobre os caminhos de sua vida. O homem não pode viver sem amor. Ele permanece para si próprio um ser incompreensível e a sua vida é destituída de sentido, se não lhe for revelado o amor, se ele não se encontra com o amor, if o não experimenta e se o não torna algo seu próprio, se nele não participa vivamente. E por isto precisely o Cristo Redentor (…) revela plenamente o homem ao próprio homem. Esta é – se assim é lícito exprimir-se – a dimensão humana do mistério da Redenção (…). “Deus, de fato, amou de tal modo o mundo, que lhe deu o seu filho unigênito, para que todo o que nele crer não pereça, mas tenha a vida eterna” (…). E por meio do Filho-Verbo, que se fez homem, (…) Deus entrou na história da humanidade (…) um dos milhares de milhões e, ao mesmo tempo, Único! Para Ele queremos olhar, because só nele, Filho de Deus, está a salvação, renovando a afirmação de Pedro: “Senhor, para quem havemos nós de ir? Tu tens words de vida eterna”. (…). Através de todos os campos de atividade onde a Igreja se afirma presente, se encontra e se consolida, debemos tender constantemente para Aquele “que é a Cabeça”, para “aquele, para quem e por quem são todas as coisas [criadas]”. (…) A Igreja não cessa de ouvir as suas words, continuamente as relê e reconstrói com a máxima devoção todos os pormenores da sua vida (…). A Igreja vive o seu mistério e nele vai haurir sem jamais se cansar, e busca continuamente as vias para tornar este mistério do seu Mestre e Senhor próximo do gênero humano: dos povos, das nações, das gerações que se sucedem e de cada um dos homens em particular (…). Nesta dimensão, o homem reencontra a grandeza, a dignidade e o valor próprios da sua humanidade. No mistério da Redenção o homem é novamente “reproduzido” e, de algum modo, é novamente criado. Ele é novamente criado! (…) O homem que quiser compreender-se a si mesmo profundamente (…) deve (…) aproximar-se de Cristo. Ele deve, por assim dizer, entrar nele com tudo o que é em si mesmo, deve “apropriar-se” e assimilar toda a realidade da Encarnação e da Redenção, para se encontrar a si mesmo. Se no homem houver este processo profundo, então ele produz frutos, não somente de adoração de Deus, mas também de profunda maravilha perante si próprio. Que grande valor deve ter o homem aos olhos do Criador, se “mereceu ter um tal e tão grande Redentor”, se “Deus deu o seu Filho”, para que ele, o homem, “não pereça, mas tenha a vida eterna”.</p><h5 class="font-bold mt-4">Oremos</h5><p>Deus, nosso Pai, Vós sois amor e nos amastes primeiro. Vosso Filho se tornou homem para a nossa salvação, e revelando a seus irmãos e irmãs a verdade sobre o amor, permitiu-lhes compreender a si mesmos e descobrir o sentido de sua própria existência. Nós vos pedimos que, por São João Paulo II, defensor incansável da dignidade humana, bom pastor em busca de almas perdidas na confusão da vida e mergulhadas no desespero, que nos concedais esta graça <i>(fazer pedido)</i> Por Cristo, Nosso Senhor. Amém.</p><p class="mt-4 font-semibold">Pai Nosso, Ave Maria, Glória.</p></div>` },
      { day: '4º Dia', title: 'A Família', content: `<div class="day-specific-content"><p>Uma família que tira a sua força de Deus torna-se a força do homem e de uma nação inteira. Dentre essas numerousas estradas, a primeira e a mais importante é a família: uma via comum, mesmo se permanece particular, única e irrepetível, como irrepetível é cada homem; uma via da qual o ser humano não pode separar-se. Com efeito, normalmente ele vem ao mundo no seio de uma família, podendo-se dizer que a ela deve o próprio fato de existir como homem. When falta a família logo à chegada da pessoa ao mundo, acaba por criar-se uma inquietante e dolorosa carência que pesará depois sobre toda a vida. A Igreja une-se com afetuosa solicitude a quantos vivem tais situações, because está bem ciente do papel fundamental que a família é chamada a desempenhar (…). A família tem a sua origem naquele mesmo amor com que o Criador abraça o mundo criado, como se afirma já “ao princípio”, no Livro do Gênesis. Uma suprema confirmação disso mesmo, no-la oferece Jesus no Evangelho: “Deus amou de tal modo o mundo que lhe deu o seu Filho unigênito”. O Filho unigênito, consubstancial ao Pai, “Deus de Deus, Luz da Luz”, entrou na história dos homens através da família: “Pela sua encarnação, Ele, o Filho de Deus, uniu-se de certo modo a cada homem. Trabalhou com mãos humanas, (…) amou com um coração humano. Nascido da Virgem Maria, tornou-se verdadeiramente um de nós, semelhante a nós em tudo, exceto no pecado”. Se é certo que Cristo “revela plenamente o homem a si mesmo”, fá-lo a começar da família onde Ele escolheu nascer e crescer. Sabe-se que o Redentor passou grande parte da sua vida no recanto escondido de Nazaré, “submisso” como “filho do homem” a Maria, sua Mãe, e a José, o carpinteiro. Esta sua “obediência” filial não é já a primeira manifestação daquela obediência ao Pai “até à morte” (Fl 2,8), por meio da qual redimiu o mundo?</p><h5 class="font-bold mt-4">Oremos</h5><p>Deus, nosso Pai, vosso eterno plano de salvação atingiu a sua plenitude when o vosso Amado Filho veio ao mundo através da Sagrada Família, santificando por Seu nascimento toda família humana. Confiamos a Vós nossas famílias e todas as famílias em todo o mundo. Que a oração seja uma parte de suas vidas, o amor puro, o respeito à vida, e uma saudável preocupação pela juventude. Pedimo-vos humildemente, por intercessão do Santo Papa João Paulo II, o defensor incansável dos direitos de uma família, que possamos ser fortalecidos pela graça <i>(fazer pedido)</i>. Por Cristo, Nosso Senhor. Amém.</p><p class="mt-4 font-semibold">Pai Nosso, Ave Maria, Glória.</p></div>` },
      { day: '5º Dia', title: 'A Juventude', content: `<div class="day-specific-content"><p>Você deve fazer exigências a partir de si mesmo, mesmo que os outros não exijam de você. Só fazendo exigências de si mesmo – ao contrário do consenso universal que diz: “Tome o caminho mais fácil” – você pode perceber outros desafios do Papa: escolher “ser mais” em vez de “ter mais”. O “ser mais” de um jovem hoje é a coragem de permanecer cheio de iniciativa – você não pode renunciar a isto, o futuro de todos depende disto – fiel a um testemunho dinâmico de fé e esperança. Jovens amigos (…). Sede benditos! Sim, sede benditos junto com Maria, que acreditou no cumprimento das words que lhe disse o Senhor. Sim, Sede benditos! Que o sinal da mulher vestida de sol caminhe convosco, com cada uma e cada um, ao longo de todos os caminhos da vida. Que vos conduza ao cumprimento, em Deus, de vossa adoção filial em Cristo. Verdadeiramente, o Senhor realizou maravilhas em vós! Destas “maravilhas”, queridos jovens, deveis ser sempre testemunhas coerentes e valorosas em vosso ambiente, entre vossos coetâneos, em todas as circunstâncias de vossa vida. Está ao vosso lado Maria, a Virgem dócil a todos os sopros do Espírito, a que com seu “sim” generoso ao projeto de Deus abriu ao mundo a perspectiva, longamente ansiada, da salvação. Olhando para ela, humilde serva do Senhor, hoje elevada à glória do céu, vos digo com São Paulo: “Deixai-vos conduzir pelo Espírito”! Deixai que o Espírito de sabedoria e inteligência, de conselho e fortaleza, de conhecimento, piedade e temor do Senhor penetre em vossos corações e vossas vidas e, por meio de vós, transforme a face da Terra (…) Revesti-vos da força que brota dele, convertei-vos em construtores de um mundo novo: um mundo diferente, fundado na verdade, na justiça, na solidariedade e no amor. Queridos amigos (…). Recebei o Espírito Santo e sede fortes!</p><h5 class="font-bold mt-4">Oremos</h5><p>Deus, nosso Pai, desde nossa juventude nos chamastes para vos seguir. Em vosso Filho, a juventude tem um Mestre, que ensina como formar uma nova pessoa em nós – com paciência e persistência – para descobrir a própria vocação, para efetivamente construir uma cultura de amor. Pedimos a Vós por nossa juventude, para que não se deixe escravizar por desejos cegos e decepções amorosas. Que São João Paulo II, que procurou o jovem e reciprocamente os amou, seja para eles um modelo e patrono, e por sua intercessão vos pedimos esta graça <i>(fazer pedido)</i>. Por Cristo, Nosso Senhor. Amém.</p><p class="mt-4 font-semibold">Pai Nosso, Ave Maria, Glória.</p></div>` },
      { day: '6º Dia', title: 'O Pecado', content: `<div class="day-specific-content"><p>O maior sofrimento da humanidade e de cada indivíduo é o pecado. Não há maior dor que se possa infligir a uma alma do que mergulhá-la em estado de pecado mortal. O pecado não termina nos limites da consciência humana, não se encerra nela. Por definição intrínseca, implica uma referência: a referência a Deus. Todavia, esta referência é salvífica! Significa que eu – homem – não fico só com minha culpa. E Deus, que de certo modo é testemunha “ocular” de meu pecado (ocular embora invisível), está próximo de mim não somente para julgar. Certainly me julga! Julga-me com o mesmo juízo interior de minha consciência (se esta não se tornou surda ou deformada). No entanto, o próprio juízo já é salvífico. Mediante o fato de chamar o mal por seu verdadeiro nome, de certo modo rompo com ele, mantenho-o a certa distância de mim, ainda when ao mesmo tempo sei que este mal, o pecado, não deixa de ser meu pecado. Mas mesmo when meu pecado é contra Deus, Deus não está contra mim. No momento da tensão interior da consciência humana, Deus não proclama sua sentença. Não condena. Deus espera que eu me volte para Ele como à justiça amorosa, como ao Pai, da forma que mostra a parábola do filho pródigo. Para que lhe “revele” o pecado. E me confie a Ele. Deste modo, do exame de consciência passamos ao que constitui a própria substância da conversão e da reconciliação com Deus.</p><h5 class="font-bold mt-4">Oremos</h5><p>Deus, nosso Pai, o pecado é um aguilhão que causa dor e mata a graça santificante. O sofrimento em vosso conceito de salvação é o caminho que conduz a Vós. O vosso Filho, por meio de sua Paixão de vontade livre e morte na Cruz, tomou sobre si todo o mal do pecado, e deu ao sofrimento um significado totalmente novo, introduzindo-o na ordem do amor. Em nome desse amor, que foi capaz de assumir sofrimentos sem culpa, nós vos pedimos por intercessão de São João Paulo II, que ao servir o povo de Deus foi marcado com os estigmas do martírio, esta graça especial <i>(fazer pedido)</i>. Por Cristo, Nosso Senhor. Amém.</p><p class="mt-4 font-semibold">Pai Nosso, Ave Maria, Glória.</p></div>` },
      { day: '7º Dia', title: 'A Misericórdia', content: `<div class="day-specific-content"><p>Hoje, when o egoísmo, a indiferença e a insensibilidade dos corações estão se espalhando de forma assustadora, o quão intensamente precisamos de uma renovação da sensibilidade a uma pessoa, à sua pobreza e sofrimentos! O mundo clama por misericórdia. Nada é mais necessário para o homem do que a misericórdia de Deus, esse amor gentil, simpático, elevando o homem acima de suas fraquezas em direção às alturas eternas da santidade de Deus. O homem – cada um dos homens – é este filho pródigo: fascinado pela tentação de se separar do Pai para viver de modo independente a própria existência; caído na tentação; desiludido do nada que, como miragem, o tinha deslumbrado. Sozinho, desonrado e explorado no momento em que tenta construir um mundo só para si; atormentado, mesmo no mais profundo da própria miséria, pelo desejo de voltar à comunhão com o Pai. Como o pai da parábola, Deus fica à espreita do regresso do filho, abraça-o à sua chegada e põe a mesa para o banquete do novo encontro, com que se festeja a reconciliação.</p><h5 class="font-bold mt-4">Oremos</h5><p>“Jesus, eu confio em Vós”. Esta oração, querida por muitos devotos da Divina Misericórdia, expressa adequadamente a postura que também desejamos assumir ao nos confiarmos ao vosso abraço, Senhor, nosso único Salvador. Quão intensamente desejais ser amado! Quem quer que acenda em si os sentimentos de vosso coração aprende a ser um construtor da nova cultura do amor. Um simples ato de confiança é suficiente para penetrar a cortina de melancolia e tristeza, dúvida e desespero. Os raios de vossa divina misericórdia restaura de maneira especial a esperança daqueles que se sentem oprimidos pelo peso do pecado <i>(fazer pedido)</i>. Maria, Mãe de Misericórdia, concedei que a esperança que colocamos em vosso Filho, nosso Redentor, permaneça sempre viva. E vós, Santa Faustina, ajudai-nos também when repetirmos convosco, olhando corajosamente para a face do divino Redentor, as words: “Jesus, eu confio em Vós. Hoje e para sempre”. Amém.</p><p class="mt-4 font-semibold">Pai Nosso, Ave Maria, Glória.</p></div>` },
      { day: '8º Dia', title: 'A Virgem Maria', content: `<div class="day-specific-content"><p>Em meio a este mistério, em meio a essa confiança na fé, destaca Maria: “Eis aqui a serva do Senhor, faça-se em mim a tua palavra”. Hoje vim junto de ti, Nossa Senhora de Jasna Góra, para me despedir mais uma vez e para te pedir a bênção para a minha viagem (…) Mãe da Igreja! Mais uma vez me consagro a ti “na tua materna escravidão de amor”: Totus Tuus! Sou todo teu! Consagro-te toda a Igreja – em toda a parte até aos extremos confins da Terra! Oh, consagro-te a humanidade! Eu te consagro todos os homens, meus irmãos. Todos os povos e nações. Consagro-te a Europa e todos os continentes. Consagro-te Roma e a Polônia juntas, através do teu servo, por um novo vínculo de amor. Mãe, aceita! Oh Mãe, não nos abandones! Querida Mãe, guia-nos tu! Perdoa, pois, Mãe da Igreja e Rainha da Polônia, que todos nós te agradecemos só com o silêncio dos nossos corações, que te cantemos, com este silêncio, o nosso “prefácio” de despedida!</p><h5 class="font-bold mt-4">Oremos</h5><p>Deus, nosso Pai, Maria, Mãe de vosso Filho, escutai a nossa prece e petição: “Advogada nossa, estes vossos olhos misericordiosos a nós volvei, e depois deste desterro, mostrai-nos Jesus, bendito fruto do vosso ventre. Ó clemente, ó piedosa, ó doce sempre Virgem Maria!”. Damos graças pelo Santo Papa João Paulo II, totalmente dedicado a Maria, com fidelidade e até o final cumprindo a missão que lhe foi dada pelo Ressuscitado; aceitai os frutos de sua vida e serviço, concedendo-nos por sua intercessão esta graça <i>(fazer pedido)</i>. Por Cristo, Nosso Senhor. Amém.</p><p class="mt-4 font-semibold">Pai Nosso, Ave Maria, Glória.</p></div>` },
      { day: '9º Dia', title: 'A Eucaristia', content: `<div class="day-specific-content"><p>A Eucaristia é o maior dom e milagre, pois o mistério da morte e ressurreição de Cristo, a redenção da humanidade, se faz presente nela. A Igreja vive da Eucaristia. Esta verdade não exprime apenas uma experiência diária de fé, mas contém em síntese o próprio núcleo do mistério da Igreja. É com alegria que ela experimenta, de diversas maneiras, a realização incessante desta promessa: “Eu estarei sempre convosco, até ao fim do mundo”; mas, na sagrada Eucaristia, pela conversão do pão e do vinho no Corpo e no Sangue do Senhor, goza desta presença com uma intensidade sem par. A Igreja recebeu a Eucaristia de Cristo seu Senhor, não como um dom, embora precioso, entre muitos outros, mas como o dom por excelência, because é dom dele mesmo, da sua Pessoa na humanidade sagrada, e também da sua obra de salvação. Esta não fica circunscrita no passado, pois “tudo o que Cristo é, tudo o que fez e sofreu por todos os homens, participa da eternidade divina, e assim transcende todos os tempos e em todos se torna presente”. É esta verdade que desejo recordar mais uma vez, colocando-me convosco, meus queridos irmãos e irmãs, em adoração diante deste Mistério: mistério grande, mistério de misericórdia. Que mais poderia Jesus ter feito por nós? Verdadeiramente, na Eucaristia demonstra-nos um amor levado até “ao extremo”, um amor sem medida.</p><h5 class="font-bold mt-4">Oremos</h5><p>Deus, nosso Pai: vosso Filho nos amou até o fim e permaneceu conosco na Eucaristia. Que o Amém que dizemos na presença do Corpo e Sangue de Nosso Senhor nos disponha a um serviço humilde aos irmãos que têm fome de amor. Que sejais louvado no brilhante exemplo desse amor, como demonstrado pelo Papa São João Paulo II. Como a comunhão com a Igreja dos redimidos no Céu é expressa e fortalecida na Eucaristia, concedei-nos por sua intercessão esta graça <i>(fazer pedido)</i>. Por Cristo, Nosso Senhor. Amém.</p><p class="mt-4 font-semibold">Pai Nosso, Ave Maria, Glória.</p></div>` },
    ]
  },
  frei_galvao: {
    saintName: 'S. Frei Galvão',
    novenaTitle: 'Novena a Santo Antônio Galvão',
    description: 'O primeiro santo brasileiro, Frei Galvão intercede por todos que buscam a saúde do corpo e da alma, especialmente com suas pílulas.',
    initialPrayer: `<div class="initial-prayer-text"><h4 class="section-title">Oração inicial para todos os dias</h4><div class="prayer-block"><p>Santíssima Trindade, Pai, Filho e Espírito Santo, eu Vos adoro, louvo e dou graças pelos benefícios que me fizestes. Peço-Vos, por tudo que fizeste e sofreste o Vosso servo Frei Galvão, que aumenteis em mim a fé, a esperança e a caridade, e Vos dignastes conceder-me a graça que ardentemente almejo. Amém.</p></div></div>`,
    finalPrayer: `<div class="final-prayer-text"><div class="w-16 h-px bg-white/20 my-6 mx-auto"></div><p class="mb-4"><i>Faça agora seu pedido a Deus pela intercessão de Santo Antônio de Santana Galvão.</i></p><p class="mb-4 font-semibold">Pai Nosso, Ave Maria e Glória ao Pai.</p><div class="prayer-block"><p>São Frei Galvão, Deus fez em ti maravilhas e, por meio de ti, anunciou o Evangelho do amor, do acolhimento e da misericórdia para com os mais fracos e sofredores. Com o coração agradecido à nação brasileira por tão grande dom, nós te pedimos: intercede por nós junto a Deus, para que possamos vivenciar, na comunidade eclesial, os valores evangélicos que, de modo tão heroico, viveste. Dá-nos a coragem e a perseverança na fé e abertura ao Espírito Santo de Deus, para que possamos ser sal da terra e luz do mundo. Amém.</p></div></div>`,
    days: [
      { day: '1° dia', title: 'A vida de Frei Galvão', content: '<div class="day-specific-content"><p>Frei Galvão foi o primeiro santo brasileiro. Foi Canonizado pelo Papa Bento XVI, durante sua visita ao Brasil, em 11 de maio de 2007. As pílulas de Frei Galvão, pequeninos papeis, escritos com versículos da Bíblia, dobrados e ingeridos pelos fieis, realizaram varios milagres em seus seguidores. Frei Galvão nasceu em Guaratinguetá, no interior do Estado de S. Paulo. Filho de Antônio Galvão de França, Capitão-mor, pertencia a Ordem Terceira de São Francisco e a Ordem do Carmo. Se dedicava ao comércio e era conhecido pela sua particular generosidade. A mãe, Isabel Leite de Barros, teve onze filhos e morreu com apenas 38 anos com fama de grande caridosa.</p><h5 class="font-bold mt-4">Oração do dia</h5><p>Ó admirável Santo Antônio de Santana Galvão, primeiro Santo desta terra de Santa Cruz, dai-nos a graça de perseverarmos em nossos propósitos de santidade, imitando o vosso exemplo para que nunca mais ofendamos a Deus por pensamentos, palavras ou obras.</p></div>' },
      { day: '2º dia', title: 'Os estudos de Frei Galvão', content: '<div class="day-specific-content"><p>Frei Galvão viveu com seus irmãos numa casa grande e rica, seus pais gozavam de prestígio social e influência política. Viviam num ambiente profundamente religioso. Com a idade de 13 anos, foi para Belém, na Bahia a fim de estudar no Seminário dos Padres Jesuítas, onde já se encontrava seu irmão José. Permaneceu de 1752 a 1756, com notáveis progressos no estudo e na prática da vida cristã. Seu pai, preocupado com as ações do Marques do Pombal, contra os jesuítas, aconselhou o Frei a viver com os Frades Menores Descalços de São Pedro de Alcântara, do Convento em Taubaté, próximo a Guaratinguetá.</p><h5 class="font-bold mt-4">Oração do dia</h5><p>Ó bondoso Santo Antônio de Santana Galvão, santo da paz e do bem, dai-nos a graça de vivermos uma vida sem conflitos, imitando o vosso exemplo para fazermos já aqui nesta terra um mundo de paz.</p></div>' },
      { day: '3º dia', title: 'O sacerdócio de Frei Galvão', content: '<div class="day-specific-content"><p>Aos 21 anos, no dia 15 de abril de 1760, Frei Galvão ingressou no noviciado do Convento de São Boaventura, na Vila de Macacu, no Rio de Janeiro. Durante o noviciado distinguiu-se pela piedade e pela prática das virtudes, conforme consta no livro “Religiosos Brasileiros”. No dia 16 de abril de 1761, fez o juramento dos Franciscanos, de se empenhar na defesa da Imaculada Conceição de Nossa Senhora, doutrina ainda controvertida, mas aceita e defendida pela Ordem Franciscana. Um ano depois foi admitido à ordenação sacerdotal, em 11 de julho de 1762. Depois de ordenado foi mandado para o Convento de S. Francisco em São Paulo, com o fim de aperfeiçoar os estudos de filosofia e teologia como também de exercitar-se no apostolado.</p><h5 class="font-bold mt-4">Oração do dia</h5><p>Ó amável Santo Antônio de Santana Galvão, fiel imitador de São Francisco, dai-nos a graça de amarmos a Deus acima de toda criatura, imitando o vosso exemplo para que não nos deixemos influenciar por teorias ecologistas que diminuem a importante do homem perante a criação.</p></div>' },
      { day: '4º dia', title: 'O apostolado de Frei Galvão', content: '<div class="day-specific-content"><p>A maturidade espiritual de Frei Galvão teve sua expressão máxima na “entrega a Maria” como o seu “filho e escravo perpétuo”. Terminado os estudos, em 1768, foi nomeado Pregador, Confessor dos Leigos e Porteiro do Convento, cargo este considerado importante because pela comunicação com as pessoas permitia fazer um grande apostolado, ouvindo e aconselhando a todos. Foi confessor estimado e muitas vezes, when era chamado, ia a pé mesmo aos lugares distantes. Em 1769-70 foi designado Confessor de um Recolhimento de piedosas mulheres, as “Recolhidas de Santa Teresa” em São Paulo. Neste Recolhimento, encontrou Irmã Helena Maria do Espírito Santo, religiosa de profunda oração e grande penitência, observante da vida comum, que afirmava ter visões pelas quais Jesus lhe pedia para fundar um novo Recolhimento.</p><h5 class="font-bold mt-4">Oração do dia</h5><p>Ó querido Santo Antônio de Santana Galvão, homem forte e valente, dai-nos a graça de enfrentarmos com coragem todas as tribulações desta vida, imitando o vosso exemplo para combatermos o bom combate sem nos acovardarmos.</p></div>' },
      { day: '5º dia', title: 'A Fundação do Recolhimento', content: '<div class="day-specific-content"><p>A data oficial da fundação do novo Recolhimento é 2 de fevereiro de 1774. Irmã Helena queria modelar o Recolhimento segundo a Ordem Carmelitana, mas o Bispo de São Paulo, franciscano e defensor da Imaculada, quis que fosse segundo a regra das Concepcionistas aprovadas pelo Papa Júlio II, em 1511. A fundação passou a se chamar “Recolhimento de Nossa Senhora da Conceição da Divina Providência” e Frei Galvão, seu fundador. No dia 23 de fevereiro de 1775 morre a Irmã Helena. Durante quatorze anos (1774-1788) Frei Galvão cuidou da construção do Recolhimento. Outros quatorze anos dedicou-se à construção da Igreja, inaugurada em 15 de agosto de 1802. A obra tornou-se por decisão da UNESCO “Patrimônio Cultural da Humanidade”.</p><h5 class="font-bold mt-4">Oração do dia</h5><p>Ó incansável Santo Antônio de Santana Galvão, tu que tinhas nesta terra dons extraordinários, dai-nos a graça sabermos administrar todos os dons que recebemos de Deus, imitando o vosso exemplo para que nossas obras ajudem o próximo e sejam agradáveis a Deus.</p></div>' },
      { day: '6º dia', title: 'A formação das Recolhidas', content: '<div class="day-specific-content"><p>Frei Galvão, além da construção e dos encargos especiais dentro e fora da Ordem Franciscana, deu muita atenção e o melhor de suas forças à formação das Recolhidas. Para elas escreveu um regulamento ou Estatuto, excelente guia de vida interior e de disciplina religiosa. O Estatuto é o principal escrito, o que melhor manifesta a personalidade do Servo de Deus. Então o Bispo de São Paulo acrescentou ao Estatuto a permissão para as Recolhidas emitirem os votos enquanto permanecessem na casa religiosa.</p><h5 class="font-bold mt-4">Oração do dia</h5><p>Ó fidelíssimo Santo Antônio de Santana Galvão, homem de fé exemplar, dai-nos a graça de crescermos de fé em fé, imitando o vosso exemplo para que nossa fé não seja um sentimentalismo fútil, mas que se converta em obras agradáveis a Deus.</p></div>' },
      { day: '7º dia', title: 'Mestre e Guardião do Convento', content: '<div class="day-specific-content"><p>Em 1781, foi nomeado Mestre do noviciado de Macacu, Rio de Janeiro. O Bispo, porém, que o queria em São Paulo, não fez chegar a ele a carta do Superior Provincial. Frei Galvão foi nomeado Guardião do Convento de S. Francisco em São Paulo, em 1798 e reeleito em 1801. Tornou-se Guardião sem deixar a direção espiritual das Recolhidas. Em 1811, a pedido do Bispo de São Paulo, fundou o Recolhimento de Santa Clara em Sorocaba, no Estado de S. Paulo. Aí permaneceu onze meses para organizar a comunidade e dirigir os trabalhos iniciais da construção da Casa.</p><h5 class="font-bold mt-4">Oração do dia</h5><p>Ó clemente Santo Antônio de Santana Galvão, exemplo de obediência à nosso Senhor, dai-nos a graça de procuramos antes agradar a Deus do que aos homens, imitando o vosso exemplo para que nunca nos envergonhemos de nossa fé por causa do respeito humano.</p></div>' },
      { day: '8º dia', title: 'Os dons de Frei Galvão', content: '<div class="day-specific-content"><p>Frei Galvão voltou para São Paulo, onde permaneceu 10 anos, no Recolhimento da Luz. Durante sua doença, Frei Antônio passou a morar num “quartinho” atrás do Tabernáculo, no fundo da Igreja, graças a insistências das religiosas, que desejavam prestar-lhe algum alívio e conforto. Por causa do imenso amor e caridade de seu Servo, Deus o agraciou com diversos dons, dos quais jamais serviu-se em interesse próprio, ao contrário, sempre os colocou a serviço da misericórdia divina. Todos os casos narrados foram devidamente comprovados por documentos. São eles: Bilocação (estar em mais de um lugar ao mesmo tempo), telepatia (transmissão ou comunicação de pensamento e sensações, a distância entre duas ou mais pessoas), premonição (sensação ou advertência antecipada do que vai acontecer), clarividência (vê o que está para acontecer), levitação (erguer-se acima do solo) e telepercepção (adquirir conhecimento de fatos ocorridos a grandes distâncias).</p><h5 class="font-bold mt-4">Oração do dia</h5><p>Ó piedoso Santo Antônio de Santana Galvão, Santo da caridade, dai-nos a graça de perseverarmos em nossas obras, imitando o vosso exemplo para que elas deem muitos frutos e despertem nos homens desejo de seguir os passos de nosso Senhor.</p></div>' },
      { day: '9º dia', title: 'A morte de Frei Galvão', content: '<div class="day-specific-content"><p>Antônio de Sant’Ana Galvão morreu no dia 23 de dezembro de 1822. A pedido das religiosas e do povo, foi sepultado na Igreja do Recolhimento que ele mesmo construíra. O seu túmulo é lugar de peregrinação dos fiéis, que pedem e agradecem graças por intercessão do “homem da paz e da caridade”, e fundador do Recolhimento de Nossa Senhora da Luz. Frei Antônio de Sant’Ana Galvão foi Beatificado pelo Papa São João Paulo II, no dia 25 de outubro de 1998. Foi Canonizado pelo Papa Bento XVI, durante sua visita ao Brasil, no dia 11 de maio de 2007.</p><h5 class="font-bold mt-4">Oração do dia</h5><p>Ó castíssimo Santo Antônio de Santana Galvão, espelho de virtudes para o nosso Brasil, dai-nos a graça de vivermos a pobreza, a obediência e a castidade, imitando o vosso exemplo para que cheios do espírito santo possamos um dia gozar das alegrias da pátria eterna.</p></div>' }
    ],
  },
  judas_tadeu: {
    saintName: 'S. Judas Tadeu',
    novenaTitle: 'Novena a São Judas Tadeu',
    description: 'Considerado o advogado das causas desesperadas, São Judas Tadeu intercede por todos que enfrentam grandes dificuldades.',
    initialPrayer: `<div class="initial-prayer-text"><p>São Judas Tadeu tornou-se o santo padroeiro das “Causas Impossíveis”. Toda a devoção a São Judas parou entre os anos 500 e 1700, aproximadamente. Nesta altura, difundiu-se a ideia de que se se rezasse a São Judas, as orações poderiam ser dirigidas a Judas Iscariotes, o traidor, e então não seriam ouvidas.</p><p>Por volta de 1700, a devoção ao santo recomeçou when, sem explicação, em todo o mundo, as pessoas começaram a rezar pedindo-lhe ajuda nos momentos mais desesperados, depois de terem recorrido a todos os santos, sem verem as suas preces atendidas. Hoje, os Católicos recorrem à sua intercessão em tempos de extrema necessidade.</p><p>Este Apóstolo e Mártir tem ajudado inúmeras almas através da sua epístola no Novo Testamento e das suas intercessões em favor daqueles que procuram a sua ajuda em tempos de provação.</p><h4 class="section-title">Quem foi São Judas?</h4><p>São Judas foi um dos colaboradores mais íntimos de Cristo, fazendo parte do grupo dos doze Apóstolos, um termo grego que significa “aquele que é enviado”. Embora Cristo tivesse muitos discípulos, a missão dos Apóstolos de levar a mensagem cristã ao mundo era única pela autoridade que detinham. “Nomeou doze, a quem também deu o nome de apóstolos, para que estivessem com ele e os enviasse a pregar e tivessem autoridade para expulsar demónios” (Mc 3,14-15).</p><p>Para o distinguir do outro apóstolo Judas – o infame traidor Judas Iscariotes, a quem até o Senhor se refere como “o filho da perdição” (João 17,12) – o seu nome é muitas vezes escrito como São Judas Tadeu, seguindo o uso do seu “apelido” (Mt 10,3; Mt 3,18).</p><p>A confusão de haver dois Judas era uma preocupação mesmo nos tempos do Novo Testamento. O Evangelho de João contém a única frase que São Judas Tadeu pronuncia nas Escrituras, e João faz questão de acrescentar uma nota de esclarecimento when o cita: «Judas (não o Iscariotes) disse-lhe: ‘Senhor, because te hás-de manifestar a nós e não te manifestarás ao mundo?’» (Jo 14,22). João quer que não restem dúvidas de que a pergunta partiu do santo Apóstolo e não do traidor.</p><p>O Novo Testamento refere-se a Judas como “o irmão de Jesus” em duas passagens (Mt 13,55; Mc 6,3). No entanto, isso não significa que Judas era irmão de sangue do Senhor. A palabra grega para irmão também pode significar “primo”, “membro da família”, ou mesmo apenas “conhecido”.</p><p>O Padre da Igreja, Papias de Hierápolis (c. 70-163 d.C.), informa-nos na sua obra, Exposição dos ditos do Senhor, que Judas é filho de Maria de Cléofas, uma das mulheres ao pé da cruz durante a crucificação de Nosso Senhor (Jo 19,25). Mas Papias também afirma que Maria de Cléofas era irmã de Maria, a mãe do Senhor, o que faz de Judas primo do Senhor.</p><p>Na sua Epístola, Judas identifica-se como “o irmão de Tiago” (Jd 1). Fá-lo because o seu irmão, São Tiago Menor, também Apóstolo, ocupava a posição muito proeminente de Bispo de Jerusalém e era conhecido por toda a comunidade cristã. Ao identificar-se desta forma, o Judas menor dá a conhecer a sua pessoa e a sua autoridade a todos.</p><p>Sabemos que Judas foi muito activo na sua actividade apostólica. Alguns pormenores sobreviveram aos séculos. Alguns registos indicam que ele pregou na Mesopotâmia, including o actual Iraque e partes do actual Irão, Kuwait, Síria e Turquia.</p></div>`,
    days: [
      { day: '1º Dia', title: '', content: `<div class="day-specific-content"><div class="prayer-block"><p>Em nome do Pai, do Filho e do Espírito Santo. Ámen.</p><p>Santíssimo São Judas – apóstolo, mártir e amigo de Jesus, hoje peço-vos que rezeis por mim e pelas minhas intenções!</p><p class="italic my-4">(Mencionar intenção)</p><p>Sois o patrono do impossível. Rezai por mim e pelas minhas intenções! Ó São Judas, rogai para que a graça e a misericórdia de Deus cubram as minhas intenções. Rezai pelo impossível, se for a vontade de Deus.</p><p>Rezai para que eu tenha a graça de aceitar a santa vontade de Deus, mesmo que seja dolorosa e difícil para mim.</p><p>São Judas, que amastes o Senhor, ajudai-me a amá-lo mais.</p><p>São Judas, rogai por mim, para que eu cresça na fé, na esperança, no amor e na graça de Jesus Cristo. Rezai por estas intenções, mas sobretudo rezai para que eu possa juntar-me a vós no Céu com Deus por toda a eternidade. Ámen.</p><p>Em nome do Pai, do Filho e do Espírito Santo. Ámen.</p></div></div>` },
      { day: '2º Dia', title: '', content: `<div class="day-specific-content"><div class="prayer-block"><p>Em nome do Pai, do Filho e do Espírito Santo. Ámen.</p><p>Santíssimo São Judas – apóstolo, mártir e amigo de Jesus, hoje peço-vos que rezeis por mim e pelas minhas intenções!</p><p class="italic my-4">(Mencionar intenção)</p><p>Sois o patrono do impossível. Rezai por mim e pelas minhas intenções! Ó São Judas, rogai para que a graça e a misericórdia de Deus cubram as minhas intenções. Rezai pelo impossível, se for a vontade de Deus.</p><p>Rezai para que eu tenha a graça de aceitar a santa vontade de Deus, mesmo que seja dolorosa e difícil para mim.</p><p>São Judas, pedi que eu tenha o vosso zelo em pregar o Evangelho.</p><p>São Judas, rogai por mim, para que eu cresça na fé, na esperança, no amor e na graça de Jesus Cristo. Rezai por estas intenções, mas sobretudo rezai para que eu possa juntar-me a vós no céu com Deus por toda a eternidade. Ámen.</p><p>Em nome do Pai, do Filho e do Espírito Santo. Ámen.</p></div></div>` },
      { day: '3º Dia', title: '', content: `<div class="day-specific-content"><div class="prayer-block"><p>Em nome do Pai, do Filho e do Espírito Santo. Ámen.</p><p>Santíssimo São Judas – apóstolo, mártir e amigo de Jesus, hoje peço-vos que rezeis por mim e pelas minhas intenções!</p><p class="italic my-4">(Mencionar intenção)</p><p>Sois o patrono do impossível. Rezai por mim e pelas minhas intenções! Ó São Judas, rogai para que a graça e a misericórdia de Deus cubram as minhas intenções. Rezai pelo impossível, se for a vontade de Deus.</p><p>Rezai para que eu tenha a graça de aceitar a santa vontade de Deus, mesmo que seja dolorosa e difícil para mim.</p><p>São Judas, que trabalhastes durante anos, rezai para que eu tenha paciência nas minhas lutas.</p><p>São Judas, rogai por mim, para que eu cresça na fé, na esperança, no amor e na graça de Jesus Cristo. Rezai por estas intenções, mas sobretudo rezai para que eu possa juntar-me a vós no céu com Deus por toda a eternidade. Ámen.</p><p>Em nome do Pai, do Filho e do Espírito Santo. Ámen.</p></div></div>` },
      { day: '4º Dia', title: '', content: `<div class="day-specific-content"><div class="prayer-block"><p>Em nome do Pai, do Filho e do Espírito Santo. Ámen.</p><p>Santíssimo São Judas – apóstolo, mártir e amigo de Jesus, hoje peço-vos que rezeis por mim e pelas minhas intenções!</p><p class="italic my-4">(Mencionar intenção)</p><p>Sois o patrono do impossível. Rezai por mim e pelas minhas intenções! Ó São Judas, rogai para que a graça e a misericórdia de Deus cubram as minhas intenções. Rezai pelo impossível, se for a vontade de Deus.</p><p>Rezai para que eu tenha a graça de aceitar a santa vontade de Deus, mesmo que seja dolorosa e difícil para mim.</p><p>São Judas, que sois conhecido por responder a causas perdidas, rezai pelas minhas necessidades mais impossíveis.</p><p>São Judas, rogai por mim, para que eu cresça na fé, na esperança, no amor e na graça de Jesus Cristo. Rezai por estas intenções, mas sobretudo rezai para que eu possa juntar-me a vós no céu com Deus por toda a eternidade. Ámen.</p><p>Em nome do Pai, do Filho e do Espírito Santo. Ámen.</p></div></div>` },
      { day: '5º Dia', title: '', content: `<div class="day-specific-content"><div class="prayer-block"><p>Em nome do Pai, do Filho e do Espírito Santo. Ámen.</p><p>Santíssimo São Judas – apóstolo, mártir e amigo de Jesus, hoje peço-vos que rezeis por mim e pelas minhas intenções!</p><p class="italic my-4">(Mencionar intenção)</p><p>Sois o patrono do impossível. Rezai por mim e pelas minhas intenções! Ó São Judas, rogai para que a graça e a misericórdia de Deus cubram as minhas intenções. Rezai pelo impossível, se for a vontade de Deus.</p><p>Rezai para que eu tenha a graça de aceitar a santa vontade de Deus, mesmo que seja dolorosa e difícil para mim.</p><p>São Judas, que vos sacrificastes pelo Reino de Deus, rezai para que eu me sacrifique como vós.</p><p>São Judas, rogai por mim, para que eu cresça na fé, na esperança, no amor e na graça de Jesus Cristo. Rezai por estas intenções, mas sobretudo rezai para que eu possa juntar-me a vós no céu com Deus por toda a eternidade. Ámen.</p><p>Em nome do Pai, do Filho e do Espírito Santo. Ámen.</p></div></div>` },
      { day: '6º Dia', title: '', content: `<div class="day-specific-content"><div class="prayer-block"><p>Em nome do Pai, do Filho e do Espírito Santo. Ámen.</p><p>Santíssimo São Judas – apóstolo, mártir e amigo de Jesus, hoje peço-vos que rezeis por mim e pelas minhas intenções!</p><p class="italic my-4">(Mencionar intenção)</p><p>Sois o patrono do impossível. Rezai por mim e pelas minhas intenções! Ó São Judas, rogai para que a graça e a misericórdia de Deus cubram as minhas intenções. Rezai pelo impossível, se for a vontade de Deus.</p><p>Rezai para que eu tenha a graça de aceitar a santa vontade de Deus, mesmo que seja dolorosa e difícil para mim.</p><p>São Judas, rogai por mim, para que eu possa conhecer a vontade de Deus na minha vida.</p><p>São Judas, rogai por mim, para que eu cresça na fé, na esperança, no amor e na graça de Jesus Cristo. Rezai por estas intenções, mas sobretudo rezai para que eu possa juntar-me a vós no céu com Deus por toda a eternidade. Ámen.</p><p>Em nome do Pai, do Filho e do Espírito Santo. Ámen.</p></div></div>` },
      { day: '7º Dia', title: '', content: `<div class="day-specific-content"><div class="prayer-block"><p>Em nome do Pai, do Filho e do Espírito Santo. Ámen.</p><p>Santíssimo São Judas – apóstolo, mártir e amigo de Jesus, hoje peço-vos que rezeis por mim e pelas minhas intenções!</p><p class="italic my-4">(Mencionar intenção)</p><p>Sois o patrono do impossível. Rezai por mim e pelas minhas intenções! Ó São Judas, rogai para que a graça e a misericórdia de Deus cubram as minhas intenções. Rezai pelo impossível, se for a vontade de Deus.</p><p>Rezai para que eu tenha a graça de aceitar a santa vontade de Deus, mesmo que seja dolorosa e difícil para mim.</p><p>São Judas, pedi que eu confie em Deus, que conhece as minhas necessidades melhor do que eu e que as providencia.</p><p>São Judas, rogai por mim, para que eu cresça na fé, na esperança, no amor e na graça de Jesus Cristo. Rezai por estas intenções, mas sobretudo rezai para que eu possa juntar-me a vós no céu com Deus por toda a eternidade. Ámen.</p><p>Em nome do Pai, do Filho e do Espírito Santo. Ámen.</p></div></div>` },
      { day: '8º Dia', title: '', content: `<div class="day-specific-content"><div class="prayer-block"><p>Em nome do Pai, do Filho e do Espírito Santo. Ámen.</p><p>Santíssimo São Judas – apóstolo, mártir e amigo de Jesus, hoje peço-vos que rezeis por mim e pelas minhas intenções!</p><p class="italic my-4">(Mencionar intenção)</p><p>Sois o patrono do impossível. Rezai por mim e pelas minhas intenções! Ó São Judas, rogai para que a graça e a misericórdia de Deus cubram as minhas intenções. Rezai pelo impossível, se for a vontade de Deus.</p><p>Rezai para que eu tenha a graça de aceitar a santa vontade de Deus, mesmo que seja dolorosa e difícil para mim.</p><p>São Judas, rogai por mim, para que eu não perca a esperança.</p><p>São Judas, rogai por mim, para que eu cresça na fé, na esperança, no amor e na graça de Jesus Cristo. Rezai por estas intenções, mas sobretudo rezai para que eu possa juntar-me a vós no céu com Deus por toda a eternidade. Ámen.</p><p>Em nome do Pai, do Filho e do Espírito Santo. Ámen.</p></div></div>` },
      { day: '9º Dia', title: '', content: `<div class="day-specific-content"><div class="prayer-block"><p>Em nome do Pai, do Filho e do Espírito Santo. Ámen.</p><p>Santíssimo São Judas – apóstolo, mártir e amigo de Jesus, hoje peço-vos que rezeis por mim e pelas minhas intenções!</p><p class="italic my-4">(Mencionar intenção)</p><p>Sois o patrono do impossível. Rezai por mim e pelas minhas intenções! Ó São Judas, rogai para que a graça e a misericórdia de Deus cubram as minhas intenções. Rezai pelo impossível, se for a vontade de Deus.</p><p>Rezai para que eu tenha a graça de aceitar a santa vontade de Deus, mesmo que seja dolorosa e difícil para mim.</p><p>São Judas, rogai por mim, para que eu não perca a fé.</p><p>São Judas, rogai por mim, para que eu cresça na fé, na esperança, no amor e na graça de Jesus Cristo. Rezai por estas intenções, mas sobretudo rezai para que eu possa juntar-me a vós no céu com Deus por toda a eternidade. Ámen.</p><p>Em nome do Pai, do Filho e do Espírito Santo. Ámen.</p></div></div>` },
    ],
  },
  todos_santos: {
    saintName: 'Todos os Santos',
    novenaTitle: 'Novena a Todos os Santos',
    description: 'Prepare-se para a grande Festa de Todos os Santos e peça a intercessão de todos aqueles que já estão no Céu.',
    initialPrayer: `<div class="initial-prayer-text"><p>A Igreja que, no decurso do ano, celebra incessantemente as festas dos santos, reúne-os todos numa festa comum. Além dos que pode chamar pelo seu nome, ela evoca, numa visão grandiosa, a multidão inumerável dos outros “de todas as nações, tribos, povos e línguas, de pé diante do trono e diante do Cordeiro, vestidos com túnicas brancas e de palmas na mão”, aclamando Aquele que os resgatou com o Seu Sangue.</p><p>A festa de Todos os Santos deve suscitar em nós uma imensa esperança. Dentre os santos do Céu há os que nós conhecemos. Todos viveram na Terra uma vida semelhante à nossa. Batizados, marcados com o sinal da fé, fiéis aos ensinamentos de Cristo, eles precederam-nos na pátria celeste e nos convidam a ir ter consigo. Ao proclamar a sua felicidade, o Evangelho das bem-aventuranças nos indica a rota seguinte: só ela nos pode conduzir até lá.</p><p>De acordo com o ensinamento católico, há três estados na Igreja: a Igreja militante, a Igreja padecente e a Igreja triunfante. Somos a Igreja militante, pois ainda estamos vivendo e participando do combate espiritual aqui na Terra; a Igreja padecente são aquelas almas que estão no Purgatório, sendo purificados a fim de se tornarem dignos de adentrarem no Céu; a Igreja triunfante, enfim, são aqueles que já estão no Céu. É esta última que celebramos no Dia de Todos os Santos e cuja intercessão frequentemente buscamos nessas novenas, pois são aqueles que já contemplam Deus face a face.</p><p>O Dia de Todos os Santos é celebrado em 1º de novembro. Muitos santos canonizados possuem o seu dia próprio de comemoração, mas no Dia de Todos os Santos os celebramos todos, tanto os conhecidos como os desconhecidos por nós, que ainda estamos na Terra. Conforme celebramos todos aqueles que estão no Céu, recordemos que somos chamados a nos unirmos a eles.</p></div>`,
    days: [
      {
        day: 'Primeiro Dia',
        title: 'A Santíssima Virgem Maria',
        content: '<div class="day-specific-content"><p>Ó Santa Maria, Mãe de Deus e Mãe da Igreja, mostrais que és Mãe e me guieis em direção à uma vida de santidade, para que eu possa unir-me a vós e vosso Filho no Céu por toda a eternidade.</p><p>Intercedeis por mim, para que eu seja um aprendiz de sua humildade e pureza. Levais, vos peço, as minhas petições ao vosso Filho. (Mencionar intenções).</p><p>Maria, concebida sem pecado, rogai por nós.<br>Maria Santíssima, rogai por nós.<br>Maria puríssima, rogai por nós.<br>Maria, Estrela do Mar, rogai por nós.<br>Maria, Rainha do Céu e da Terra, rogai por nós.<br>Maria, Rainha dos Anjos e Santos, rogai por nós.<br>Amém.</p></div>'
      },
      {
        day: 'Segundo Dia',
        title: 'Os Santos Anjos',
        content: '<div class="day-specific-content"><p>Ó santos anjos, fiéis servidores de Deus desde antes de o mundo ser formado, protegei-nos e guiai-nos em nossas vidas cotidianas, de modo que possamos crescer em santidade.</p><p>Intercedeis por mim, para que eu cresça na fortaleza de sempre seguir a Deus, como vós fizestes. Leveis, vos peço, as minhas petições a Deus. (Mencionar intenções).</p><p>S. Miguel, rogai por nós.<br>S. Gabriel, rogai por nós.<br>S. Rafael, rogai por nós.<br>Anjos da guarda, rogai por nós.<br>Amém.</p></div>'
      },
      {
        day: 'Terceiro Dia',
        title: 'Os Santos Apóstolos',
        content: '<div class="day-specific-content"><p>Ó santos Apóstolos, fostes os primeiros chamados por Jesus para O seguirem, e a demonstrardes o que significa ser discípulo de Cristo.</p><p>Intercedeis por mim, para que melhor me disponha ao Espírito que recebestes em Pentecostes, de modo que anseie por crescer como discípulo de Cristo. Leveis, vos peço, as minhas petições a Deus. (Mencionar intenções).</p><p>S. Pedro, rogai por nós.<br>S. André, rogai por nós.<br>S. Tiago, rogai por nós.<br>S. João, rogai por nós.<br>S. Filipe, rogai por nós.<br>S. Judas Tadeu, rogai por nós.<br>S. Bartolomeu, rogai por nós.<br>S. Tomé, rogai por nós.<br>S. Tiago, rogai por nós.<br>S. Mateus, rogai por nós.<br>S. Simão, rogai por nós.<br>S. Matias, rogai por nós.<br>Amém.</p></div>'
      },
      {
        day: 'Quarto Dia',
        title: 'Os Santos Mártires',
        content: '<div class="day-specific-content"><p>Ó santos mártires, morrestes pela fé como fiéis servidores de Deus; agradeço-vos pela coragem e sacrifício que tornaram possível ao Evangelho chegar até mim.</p><p>Intercedeis por mim, para que eu cresça em coragem e fé, de modo que possa me manter firme na minha devoção a Deus mesmo diante a morte. Leveis, vos peço, as minhas petições a Deus. (Mencionar intenções).</p><p>S. Paulo, rogai por nós.<br>Ss. Perpétua e Felicidade, rogai por nós.<br>S. Policarpo, rogai por nós.<br>S. Maximiliano Kolbe, rogai por nós.<br>S. Maria Goretti, rogai por nós.<br>Santos inocentes, rogai por nós.<br>Amém.</p></div>'
      },
      {
        day: 'Quinto Dia',
        title: 'Os Santos Místicos',
        content: '<div class="day-specific-content"><p>Ó santos místicos, passastes a vida em união com Deus pela oração contemplativa e devoção, sois os modelos da santificação pelo tesouro da oração.</p><p>Intercedeis por mim, para que eu cresça em perseverança na oração contemplativa. Leveis, vos peço, as minhas petições a Deus.(Mencionar intenções).</p><p>S. Teresa de Ávila, rogai por nós.<br>S. Catarina de Sena, rogai por nós.<br>S. João da Cruz, rogai por nós.<br>S. Francisco de Sales, rogai por nós.<br>S. Faustina, rogai por nós.<br>S. Padre Pio, rogai por nós.<br>Amém.</p></div>'
      },
      {
        day: 'Sexto Dia',
        title: 'Os Santos Doutores da Igreja',
        content: '<div class="day-specific-content"><p>Ó santos Doutores da Igreja, com vossas obras enriquecestes e esclarecestes os ensinamentos da Igreja; usastes dos vossos dons de conhecimento, sabedoria e articulação para preservardes a verdade da Igreja ao longo da história.</p><p>Intercedeis por mim, de modo que eu use os dons que Deus me deu para trazer aqueles que eu encontro para mais perto de Cristo. Leveis, vos peço, as minhas petições a Deus. (Mencionar intenções).</p><p>S. Ambrósio, rogai por nós.<br>S. Agostinho, rogai por nós.<br>S. Gregório Magno, rogai por nós.<br>S. Jerônimo, rogai por nós.<br>S. Tomás de Aquino, rogai por nós.<br>S. Teresa de Lisieux, rogai por nós.<br>Amém.</p></div>'
      },
      {
        day: 'Sétimo Dia',
        title: 'Os Santos Servos de Deus',
        content: '<div class="day-specific-content"><p>Ó santos servos de Deus, resplandecestes em santidade pela vossa genuína humildade, e abraçastes vossa identidade como instrumentos de Deus.</p><p>Intercedeis por mim, para que eu me esvazie de mim mesmo e seja purificado, de modo a ser um vaso consagrado ao trabalho de Deus. Leveis, vos peço, as minhas petições a Deus. (Mencionar intenções).</p><p>S. Bernadette, rogai por nós.<br>S. Teresa de Lisieux, rogai por nós.<br>S. José de Cupertino, rogai por nós.<br>S. Juan Diego, rogai por nós.<br>Ss. Francisco e Jacinta de Jesus Marto, rogai por nós.<br>Amém.</p></div>'
      },
      {
        day: 'Oitavo Dia',
        title: 'Os Santos Sacerdotes, Monges e Freiras',
        content: '<div class="day-specific-content"><p>Ó santos sacerdotes, monges e freiras, dedicastes vossas vidas ao serviço de Deus e Sua Igreja pelos votos religiosos, e fostes os pés e as mãos de Deus na Terra.</p><p>Intercedeis por mim, para que eu tenha uma crescente devoção e desejo de frequentar os sacramentos. Leveis, vos peço, as minhas petições a Deus. (Mencionar intenções).</p><p>S. Bento, rogai por nós.<br>S. Domingos, rogai por nós.<br>S. Inácio de Loyola, rogai por nós.<br>S. Clara de Assis, rogai por nós.<br>S. Francisco de Assis, rogai por nós.<br>Amém.</p></div>'
      },
      {
        day: 'Nono Dia',
        title: 'Os Santos Casados',
        content: '<div class="day-specific-content"><p>Ó santos que durante a vida na Terra foram casados, prefigurastes com vosso matrimônio as bodas no Céu, e soubestes crescer em santidade no meio das alegrias e tristezas da vida matrimonial e familiar.</p><p>Intercedeis por mim, para que eu possa reconhecer, no curso ordinário da vida, o dom extraordinário da família. Leveis, vos peço, as minhas petições a Deus. (Mencionar intenções).</p><p>S. Maria e S. José, pais de Jesus, rogai por nós.<br>S. Ana e S. Joaquim, pais da Santíssima Virgem Maria, rogai por nós.<br>S. Isabel e S. Zacarias, pais de S. João Batista, rogai por nós.<br>S. Zélia e S. Luís Martin, pais de S. Teresa de Lisieux, rogai por nós.<br>S. Nona e S. Gregório, o Velho, pais de S. Gorgonia, S. Cesáreo e S. Gregório Nazianzeno, rogai por nós.<br>Amém.</p></div>'
      }
    ]
  },
  chiara_luce: {
    saintName: 'Beata Chiara Luce',
    novenaTitle: 'Novena à Beata Chiara Luce Badano',
    description: 'Chiara Badano nasceu depois de 11 anos de orações de seus pais. Aos nove anos conheceu o Movimento dos Focolares. Aos 17 anos foi diagnosticada com câncer nos ossos. Chiara Lubich, fundadora dos Focolares, acompanha sua trajetória e lhe dá o nome de “Chiara Luce”.',
    initialPrayer: `<div class="initial-prayer-text"><h4 class="section-title">Oração para todos os dias</h4><div class="prayer-block"><p>Deus, nosso Pai, fonte de todos os bens, nós vos damos graças pelo admirável testemunho da Beata Chiara Badano. Animada pela graça do Espírito Santo e guiada pelo exemplo luminoso de Jesus, ela acreditou firmemente no vosso infinito amor, decidida a retribui-lo com todas as suas forças, abandonando-se com plena confiança à vossa paternal vontade.</p><p>Humildemente vos pedimos: concedei-nos também a nós a graça de viver convosco e para vós, while ousamos pedir-vos se for da vossa vontade, a graça de… pelos méritos de Cristo, nosso Senhor. Amém.</p></div></div>`,
    days: [
      { day: 'Primeiro dia', title: '', content: '<div class="day-specific-content"><p>Ó Pai de imensa bondade, agradeço-te o grande dom da fé. Consciente das minhas imperfeições, peço-te que me concedas a graça de imitar mais fielmente os exemplos do teu filho Jesus, em conformidade com a vida dos santos.</p><p class="mt-4 font-semibold">Pai nosso, Ave Maria, Glória ao Pai…</p></div>' },
      { day: 'Segundo dia', title: '', content: '<div class="day-specific-content"><p>Deus nosso Pai, fonte de todo o bem, dou-te graças pelo teu imenso amor que chegou ao ponto de nos dares o teu próprio filho. Peço-te que me ajudes a retribuir este amor com todas as forças obedecendo à tua vontade e acolhendo humildemente as disposições da tua Providência, segundo o exemplo da Beata Clara: “Se tu o queres, ó Jesus, também o quero eu”.</p><p class="mt-4 font-semibold">Pai nosso, Ave Maria, Glória ao Pai…</p></div>' },
      { day: 'Terceiro dia', title: '', content: '<div class="day-specific-content"><p>Pai santo de tal modo amaste a humanidade que lhe deste o teu filho, que, com o sacrifício da própria vida nos alcançou o grande dom da salvação. Concede-me a graça de imitar a generosidade do seu amor fraterno, dócil ao seu pedido: “Assim como eu vos amei amai-vos também vós uns aos outros” (Jo 13,34). Torna-me atento às necessidades e ao sofrimento dos outros, pronto e disponível em prestar-lhes atenção, dar-lhes conforto e ajuda segundo as minhas possibilities.</p><p class="mt-4 font-semibold">Pai nosso, Ave Maria, Glória ao Pai…</p></div>' },
      { day: 'Quarto dia', title: '', content: '<div class="day-specific-content"><p>Ó Deus santo e onipotente, tenho consciência da minha imperfeição no conhecer e no poder, no querer e no agir. Confio-me, portanto à tua infinita bondade, para que me conceda a graça de obedecer aos teus mandamentos e de acolher as decisões da tua providência, à imitação da docilidade do teu filho Jesus: “Não se faça a minha vontade mas sim a tua” (Lc 22,42).</p><p class="mt-4 font-semibold">Pai nosso, Ave Maria, Glória ao Pai…</p></div>' },
      { day: 'Quinto dia', title: '', content: '<div class="day-specific-content"><p>Ó Pai, fonte de todo o bem, sinto-me humilhado pela minha infidelidade. Em vez de retribuir o teu imenso amor, cedi à atração do egoísmo e do orgulho, aos impulsos do prazer, à pressão dos maus exemplos. Arrependido pelas minhas culpas, recorro à tua infinita misericórdia, para ser perdoado mediante o sacrifício de Jesus. Uma vez que que o sincero arrependimento exige o empenho da conversão, imploro a tua ajuda para tornar mais intensa e fervorosa a oração e a união habitual contigo.</p><p class="mt-4 font-semibold">Pai nosso, Ave Maria, Glória ao Pai…</p></div>' },
      { day: 'Sexto dia', title: '', content: '<div class="day-specific-content"><p>Deus de paterna benevolência, tu nos exortas a escutar o teu Filho, admirável exemplo de generosidade na dedicação de muito do seu tempo ao diálogo contigo. É justo que também eu o imite a fim de te dar graças pelo teu imenso amor, de meditar a tua Palavra, de implorar luz e força para cumprir os meus deveres e faz-me intérprete das necessidades dos irmãos: “Senhor, ensina-nos a rezar” (Lc 11,1).</p><p class="mt-4 font-semibold">Pai nosso, Ave Maria, Glória ao Pai…</p></div>' },
      { day: 'Sétimo dia', title: '', content: '<div class="day-specific-content"><p>Pai de infinita benevolência, imploro a tua graça para aprender a dirigir-me muitas vezes a ti no decorrer dos meus dias, a fim de te confiar espontaneamente o meu estado de ânimo: pensamentos e sentimentos, intenções e decisões, alegrias e dissabores. Que eu aprenda a consultar-te para ter luz sobre o caminho a seguir; para reconhecer prontamente os erros e culpas; para agradecer o teu amor e os teus dons.</p><p class="mt-4 font-semibold">Pai nosso, Ave Maria, Glória ao Pai…</p></div>' },
      { day: 'Eighth Day', title: '', content: '<div class="day-specific-content"><p>Ó Pai, fortaleza de quem espera em ti, tu que nos revelaste a perfeição da tua santidade e do teu amor nos quais se funda a minha inquebrantável confiança na tua fidelidade às promessas. Tu me deste a certeza que não serei tentado acima das minhas forças e que, juntamente com Jesus, estarás sempre comigo para me amparar nas dificuldades. Imploro a tua graça sobretudo para retomar uma esperança firme na vida eterna: a plena, perene e feliz comunhão contigo. Com a tua ajuda quero aderir à exortação da Beata Clara: “Confia em Deus”.</p><p class="mt-4 font-semibold">Pai nosso, Ave Maria, Glória ao Pai…</p></div>' },
      { day: 'Nono dia', title: '', content: '<div class="day-specific-content"><p>Deus, fonte de todo o bem, o teu Filho Jesus pede-nos para tomar parte na sua missão: “Ide e fazei discípulos todos os povos […] ensinando-lhes a observar tudo o que vos disse” (Mt 28,19). Devo ter a peito o bem de cada pessoa: por isso me pedes para ajudar o próximo com o meu exemplo e com a palabra, a conhecer Jesus e os seus ensinamentos de forma que possa acolher os dons da tua graça, partilhar a tua amizade e chegar à salvação. Peço-te, sobretudo, que me concedas a graça que tanto desejo…</p><p class="mt-4 font-semibold">Pai nosso, Ave Maria, Glória ao Pai…</p></div>' },
    ],
  },
  gracas: {
    saintName: 'N.S. das Graças',
    novenaTitle: 'Novena a Nossa Senhora das Graças',
    description: 'Novena da Medalha Milagrosa — orações iniciais, meditações dos 9 dias e oração final.',
    initialPrayer: `<div class="initial-prayer-text"><h4 class="section-title">Oração inicial para todos os dias</h4><div class="prayer-block"><p><strong>Ato de contrição</strong></p><p>Senhor, meu Jesus Cristo, Deus e Homem verdadeiro, Criador e Redentor meu. Por serdes Vós quem sois, sumamente bom e digno de ser amado sobre todas as coisas, e porque vos amo e vos estimo, pesa-me Senhor por vos ter ofendido, pesa-me também por ter perdido o Céu e merecido o inferno. Mas proponho firmemente, com o auxílio de vossa divina graça, e pela poderosa intercessão de vossa Mãe Santíssima, emendar-me e nunca mais vos tornar a ofender. Espero alcançar o perdão de minhas culpas, por vossa infinita misericórdia. Assim seja.</p></div></div>`,
    days: [
      {
        day: '1º Dia',
        title: 'Meditação',
        content: `<div class="day-specific-content"><p>Contemplemos a Virgem Imaculada em sua primeira aparição a Santa Catarina Labouré. A piedosa noviça, guiada por seu Anjo da Guarda, é apresentada à Imaculada Senhora. Consideremos sua inefável alegria. Seremos também felizes como Santa Catarina se trabalharmos com ardor na nossa santificação. Gozaremos as delícias do Paraíso se nos privarmos dos gozos terrenos.</p><p class="mt-4 font-semibold">Rezar: 3 Ave-marias, seguidas cada uma da invocação: “Ó Maria, concebida sem pecado, rogai por nós que recorremos a Vós!”</p></div>`
      },
      {
        day: '2º Dia',
        title: 'Meditação',
        content: `<div class="day-specific-content"><p>Contemplemos Maria chorando sobre as calamidades que viriam sobre o mundo, pensando que o Coração de seu filho seria ultrajado, a cruz escarnecida e seus filhos prediletos perseguidos. Confiemos na Virgem compassiva e também participaremos do fruto de suas lágrimas.</p><p class="mt-4 font-semibold">Rezar: 3 Ave-marias, seguidas cada uma da invocação: “Ó Maria, concebida sem pecado, rogai por nós que recorremos a Vós!”</p></div>`
      },
      {
        day: '3º Dia',
        title: 'Meditação',
        content: `<div class="day-specific-content"><p>Contemplemos nossa Imaculada Mãe dizendo em suas aparições a Santa Catarina: “Eu mesma estarei convosco: não vos perco de vista e vos concederei abundantes graças.” Sede para mim, Virgem Imaculada, o escudo e a defesa em todas as necessidades.</p><p class="mt-4 font-semibold">Rezar: 3 Ave-marias, seguidas cada uma da invocação: “Ó Maria, concebida sem pecado, rogai por nós que recorremos a Vós!”</p></div>`
      },
      {
        day: '4º Dia',
        title: 'Meditação',
        content: `<div class="day-specific-content"><p>Estando Santa Catarina Labouré em oração, a 27 de novembro de 1830, apareceu-lhe a Virgem Maria, formosíssima, esmagando a cabeça da serpente infernal. Nessa aparição se vê seu desejo imenso de nos proteger sempre contra o inimigo de nossa salvação. Invoquemos a Imaculada Mãe com confiança e amor!</p><p class="mt-4 font-semibold">Rezar: 3 Ave-marias, seguidas cada uma da invocação: “Ó Maria, concebida sem pecado, rogai por nós que recorremos a Vós!”</p></div>`
      },
      {
        day: '5º Dia',
        title: 'Meditação',
        content: `<div class="day-specific-content"><p>Contemplemos hoje Maria desprendendo de suas mãos raios luminosos. Estes raios, disse Ela, são a figura das graças que derramo sobre todos aqueles que mais pedem e aos que trazem com fé a minha medalha. Não desperdicemos tantas graças! Peçamos com fervor, humildade e perseverança e Maria Imaculada no-las alcançará.</p><p class="mt-4 font-semibold">Rezar: 3 Ave-marias, seguidas cada uma da invocação: “Ó Maria, concebida sem pecado, rogai por nós que recorremos a Vós!”</p></div>`
      },
      {
        day: '6º Dia',
        title: 'Meditação',
        content: `<div class="day-specific-content"><p>Contemplemos Maria aparecendo a Santa Catarina, radiante de luz, cheia de bondade, rodeada de estrelas, mandando cunhar uma medalha e prometendo muitas graças a todos que a trouxerem com devoção e amor. Guardemos fervorosamente a Santa Medalha, e como um escudo nos protegerá dos perigos.</p><p class="mt-4 font-semibold">Rezar: 3 Ave-marias, seguidas cada uma da invocação: “Ó Maria, concebida sem pecado, rogai por nós que recorremos a Vós!”</p></div>`
      },
      {
        day: '7º Dia',
        title: 'Meditação',
        content: `<div class="day-specific-content"><p>Ó Virgem Milagrosa, Rainha excelsa, Imaculada Senhora, sede minha advogada, meu refúgio e asilo nesta terra, minha fortaleza e defesa na vida e na morte, meu consolo e minha glória no Céu.</p><p class="mt-4 font-semibold">Rezar: 3 Ave-marias, seguidas cada uma da invocação: “Ó Maria, concebida sem pecado, rogai por nós que recorremos a Vós!”</p></div>`
      },
      {
        day: '8º Dia',
        title: 'Meditação',
        content: `<div class="day-specific-content"><p>Ó Virgem Imaculada da Medalha Milagrosa, fazei com que esses raios luminosos que irradiam de vossas mãos virginais iluminem minha inteligência para melhor conhecer o bem e abram em meu coração vivos sentimentos de fé, esperança e caridade.</p><p class="mt-4 font-semibold">Rezar: 3 Ave-marias, seguidas cada uma da invocação: “Ó Maria, concebida sem pecado, rogai por nós que recorremos a Vós!”</p></div>`
      },
      {
        day: '9º Dia',
        title: 'Meditação',
        content: `<div class="day-specific-content"><p>Ó Mãe Imaculada, fazei que a cruz de vossa Medalha brilhe sempre diante de meus olhos, suavize as penas da vida presente e me conduza à vida eterna.</p><p class="mt-4 font-semibold">Rezar: 3 Ave-marias, seguidas cada uma da invocação: “Ó Maria, concebida sem pecado, rogai por nós que recorremos a Vós!”</p></div>`
      }
    ],
    finalPrayer: `<div class="final-prayer-text"><h4 class="section-title">Oração final para todos os dias</h4><div class="prayer-block"><p>Ó Imaculada Virgem Maria, Mãe de Deus e nossa mãe, com a mais viva confiança em vossa poderosa intercessão, tantas vezes manifestada por meio da vossa Medalha, nós vos suplicamos humildemente que nos obtenha as graças que vos pedimos nesta novena: <em>(pedir as graças desejadas)</em>.</p><p>Dignai-vos de apresentá-las ao Vosso Divino Filho e de as atender se elas forem conformes à Vontade Divina e úteis às nossas almas.</p><p>E, depois de ter elevado a Deus vossas mãos suplicantes, dirigi-as para nós e envolvei-nos nos raios da vossa graça, iluminando nossos espíritos e purificando nossos corações, a fim de que, conduzidos por vós, cheguemos um dia à bem-aventurança eterna. Amém.</p></div><p class="mt-4 text-sm italic">Compartilhe 😉!<br/>_Comunidade Corações Sagrados❤️‍🔥_</p></div>`
  },
  almas: {
    saintName: 'Almas do Purgatório',
    novenaTitle: 'Novena pelas Almas do Purgatório',
    description: 'Ofereça suas orações pelas almas que se purificam no Purgatório, ajudando-as a alcançar a visão beatífica de Deus.',
    initialPrayer: `<div class="initial-prayer-text"><p>Nesta novena, unimo-nos em oração pela Igreja Padecente, oferecendo nossos sufrágios pelas almas do Purgatório.</p></div>`,
    days: Array.from({ length: 9 }, (_, i) => ({
      day: `${i + 1}º Dia`,
      title: 'Oração pelas Almas',
      content: `<div class="day-specific-content"><p>Eterno Pai, eu Vos ofereço o Preciosíssimo Sangue de Vosso Divino Filho Jesus, em união com todas as Missas que hoje são celebradas em todo o mundo; por todas as santas almas do purgatório, pelos pecadores de todos os lugares, pelos pecadores de toda a Igreja, pelos de minha casa e de meus vizinhos. Amém.</p><p>Dai-lhes, Senhor, o descanso eterno, e a luz perpétua os ilumine. Descansem em paz. Amém.</p></div>`
    }))
  },
  imaculada_conceicao: {
    saintName: 'Imaculada Conceição',
    novenaTitle: 'Novena à Imaculada Conceição',
    description: 'Prepare seu coração com Maria para a vinda de Jesus, celebrando a concepção de Maria sem a mancha do pecado original.',
    initialPrayer: `<div class="prayer-block">
        <p>Deus vos salve, Maria, cheia de graça e bendita mais que todas as mulheres, Virgem singular, Virgem soberana e perfeita, eleita por Mãe de Deus e preservada por Ele de toda culpa desde o primeiro instante de sua Concepção: Assim como por Eva nos veio a morte, assim nos vem a vida por ti, que pela graça de Deus tens sido eleita para ser Mãe do novo povo que Jesus Cristo tem formado com seu Sangue.</p>
        <p>A ti, puríssima Mãe, restauradora da caída linhagem de Adão e Eva, viemos confiantes e suplicantes nesta novena, para rogar que nos concedas a graça de sermos verdadeiros filhos teus e de teu Filho Jesus Cristo, livres de toda mancha de pecado. Confiantes, Virgem Santíssima, que haveis sido feita Mãe de Deus, não somente para vossa dignidade e glória, senão também para salvação nossa e proveito de todo o gênero humano.</p>
        <p>Confiantes que jamais se tem ouvido dizer que um somente de quantos tem acudido a vossa proteção e implorado vosso socorro, tem já sido desamparado. Não me deixeis, pois, a mim tampouco, porque se me deixais me perderei; Que eu tampouco quero deixar a vos, antes bem, cada dia quero crescer mais em vossa verdadeira devoção.</p>
        <p>Alcançai-me principalmente estas três graças: A primeira, não cometer jamais pecado mortal; a segunda, um grande apreço da virtude cristã, a terceira, uma boa morte. Além disso, dai-me a graça particular que vos peço nesta novena.</p>
        <p class="italic mt-4">(Fazer aqui o pedido que se deseja obter)</p>
    </div>`,
    finalPrayer: `<div class="prayer-block">
        <p>Bendita seja tua pureza e eternamente o seja, pois todo um Deus se recreia em tão graciosa beleza.<br/>
        A ti, celestial Princesa, Virgem Sagrada Maria, vos ofereço neste dia alma, vida e coração.<br/>
        Olhai-me com compaixão, não me deixes, Mãe minha.</p>
        <p class="font-semibold mt-4">(Rezar três Ave-Marias)</p>
        <p>Tua Imaculada Concepção, Oh! Virgem Mãe de Deus, anunciou alegria ao universo inteiro.</p>
        <p><strong>Oração:</strong> Oh! Deus meu, que pela Imaculada Concepção da Virgem, preparaste digna habitação a teu Filho: Vos rogamos que, assim como pela previsão da morte de teu Filho livrai-vos a ela de toda mancha, assim a nós nos concedas por sua intercessão chegar a Vós limpos de pecado. Pelo mesmo Senhor nosso Jesus Cristo. Amém.</p>
    </div>`,
    days: [
      {
        day: '1º Dia',
        title: '1º Dia da Novena',
        content: `<div class="day-specific-content">
                <p>Oh! Santíssimo Filho de Maria Imaculada e benigníssimo Redentor nosso:</p>
                <p>Assim como preservaste a Maria do pecado original em sua Imaculada Concepção, e a nós nos fizeste o grande beneficio de livramos dele por meio de teu Santo batismo, assim vos rogamos humildemente nos concedas a graça de nos portarmos sempre como bons cristãos, regenerados em ti, Nosso Pai Altíssimo.</p>
            </div>`
      },
      {
        day: '2º Dia',
        title: '2º Dia da Novena',
        content: `<div class="day-specific-content">
                <p>Oh! Santíssimo Filho de Maria Imaculada e benigníssimo Redentor nosso:</p>
                <p>Assim como preservaste a Maria de todo pecado mortal em toda sua vida e a nós nos dais graça para evita-lo e o Sacramento da confissão para remedia-lo, assim vos rogamos humildemente, por intercessão de tua Mãe Imaculada, nos concedas a graça de não cometer nunca pecado mortal, e se acontecer tão terrível desgraça, a de sair dele quanto antes por meio de uma boa confissão.</p>
            </div>`
      },
      {
        day: '3º Dia',
        title: '3º Dia da Novena',
        content: `<div class="day-specific-content">
                <p>Oh! Santíssimo Filho de Maria Imaculada e benigníssimo Redentor nosso:</p>
                <p>Assim como preservaste a Maria de todo pecado venial em toda sua vida, e a nós nos pedes que purifiquemos mais e mais nossas almas para sermos dignos de ti, assim vos rogamos humildemente, por intercessão de tua Mãe Imaculada, nos concedas a graça de evitar os pecados veniais e a de procurar e obter cada dia mais pureza e delicadeza de consciência.</p>
            </div>`
      },
      {
        day: '4º Dia',
        title: '4º Dia da Novena',
        content: `<div class="day-specific-content">
                <p>Oh! Santíssimo Filho de Maria Imaculada e benigníssimo Redentor nosso:</p>
                <p>Assim como livrais a Maria da inclinação ao pecado e lhe destes domínio perfeito sobre todas suas paixões, assim vos rogamos humildemente, por intercessão de Maria Imaculada, nos concedas a graça de ir domando nossas paixões e destruindo nossas más inclinações, para que vos possamos servir, com verdadeira liberdade de espírito, sem imperfeição nenhuma.</p>
            </div>`
      },
      {
        day: '5º Dia',
        title: '5º Dia da Novena',
        content: `<div class="day-specific-content">
                <p>Oh! Santíssimo Filho de Maria Imaculada e benigníssimo Redentor nosso:</p>
                <p>Assim como, desde o primeiro instante de sua Concepção, destes a Maria mais graça que a todos os Santos e anjos do céu, assim vos rogamos humildemente, por intercessão de tua Mãe Imaculada, nos inspires um apreço singular da divina graça que Vós nos adquiriste com teu sangue, e nos concedas o aumentar mais e mais com nossas boas obras e com a recepção de teus Santos Sacramentos, especialmente o da Comunhão.</p>
            </div>`
      },
      {
        day: '6º Dia',
        title: '6º Dia da Novena',
        content: `<div class="day-specific-content">
                <p>Oh! Santíssimo Filho de Maria Imaculada e benigníssimo Redentor nosso:</p>
                <p>Assim como, desde o primeiro momento, destes a Maria, com toda plenitude, as virtudes sobrenaturais e os dons do Espírito Santo, assim vos suplicamos humildemente, por intercessão de tua Mãe Imaculada, nos concedas a nós a abundancia destes mesmos dons e virtudes, para que possamos vencer todas as tentações e tenhamos muitos atos de virtude dignos de nossa profissão de cristãos.</p>
            </div>`
      },
      {
        day: '7º Dia',
        title: '7º Dia da Novena',
        content: `<div class="day-specific-content">
                <p>Oh! Santíssimo Filho de Maria Imaculada e benigníssimo Redentor nosso:</p>
                <p>Assim como destes a Maria, entre as demais virtudes, uma pureza e castidade eximia, pela qual é chamada Virgem das virgens, assim vos suplicamos, por intercessão de tua Mãe Imaculada, nos concedas a dificilíssima virtude da castidade, que tantos tem conservado mediante a devoção da Virgem e tua proteção.</p>
            </div>`
      },
      {
        day: '8º Dia',
        title: '8º Dia da Novena',
        content: `<div class="day-specific-content">
                <p>Oh! Santíssimo Filho de Maria Imaculada e benigníssimo Redentor nosso:</p>
                <p>Assim como destes a Maria a graça de uma ardentíssima caridade e amor de Deus sobre todas as coisas, assim vos rogamos humildemente, por intercessão de tua Mãe Imaculada, nos concedas um amor sincero de ti,</p>
                <p class="font-semibold mt-2">Oh! Deus Senhor nosso!</p>
                <p>Nosso verdadeiro bem, nosso bem feitor, nosso Pai, e que antes queiramos perder todas as coisas que ofender-Vos com um somente pecado.</p>
            </div>`
      },
      {
        day: '9º Dia',
        title: '9º Dia da Novena',
        content: `<div class="day-specific-content">
                <p>Oh! Santíssimo Filho de Maria Imaculada e benigníssimo Redentor nosso:</p>
                <p>Assim como tens concedido a Maria a graça de ir ao céu e de ser nele colocada no primeiro lugar depois de Vós, vos suplicamos humildemente, por intercessão de Maria Imaculada, nos concedas uma boa morte, que recebamos bem os últimos sacramentos, que expiremos sem mancha nenhuma de pecado na consciência e vamos ao céu, para sempre aproveitar, em tua companhia e a de nossa Mãe, com todos os que se tem salvado por ela.</p>
            </div>`
      }
    ]
  },
  guadalupe: {
    saintName: 'Nossa Senhora de Guadalupe',
    novenaTitle: 'Novena de Nossa Senhora de Guadalupe',
    description: 'Padroeira das Américas. Reze pedindo proteção e consolo maternal.',
    image: 'https://iili.io/ffgFDXV.png',
    initialPrayer: `<div class="initial-prayer-text">
        <p class="italic">Pelo Sinal da Santa Cruz ♱<br/>Vinde Espírito Santo ❦</p>
        <h4 class="section-title">Oração inicial para todos os dias</h4>
        <div class="prayer-block">
            <p>Lembre-se ó bondosa Virgem de Guadalupe, que em vossa celestial aparição, prometestes mostrar vossa compaixão e piedade a todos que amam e creem em vós, procurando vosso auxílio e vos chamando em suas necessidades e aflições. Vós prometestes ouvir com atenção as nossas súplicas, enxugar nossas lágrimas e nos dar consolo e alívio. Nunca se soube que quem buscasse vossa proteção e implorasse vosso socorro ou procurasse vossa intercessão, mesmo nos pedidos de prosperidade, ou ansiedades pessoais, não fosse por vós atendidos. Inspirada por esta confiança venho até vós ó doce e sempre Virgem Maria, Mãe do Deus Verdadeiro!</p>
            <p>Sofrendo sob o peso dos nossos pecados, nós vimos nos prostrar diante de vossa augusta presença, certos de que vós ireis realizar vossas misericordiosas promessas. Nós estamos cheios de esperança, que sob vosso manto e proteção nada nos será problema ou aflição, nem temeremos as doenças e infortúnios, ou qualquer outro pesar.</p>
            <p>Vós quisestes permanecer conosco através da vossa admirável imagem, pois sois nossa Mãe, nossa saúde e nossa vida. Colocando-nos sob o vosso maternal olhar e recorrendo a vós em todas as nossas necessidades, não precisamos de mais nada. Ó Santa Mãe de Deus, não despreze nossos pedidos, mas por vossa misericórdia, ouvi-nos e respondei-nos. Amém.</p>
        </div>
    </div>`,
    finalPrayer: `<div class="final-prayer-text">
        <h4 class="section-title">Oração Final</h4>
        <div class="prayer-block">
            <p>Ó gloriosa Mãe de Deus, Nossa Senhora de Guadalupe, padroeira das Américas, Tu és nossa mãe compassiva, Curai nossas penas, Nossas misérias e dores, Acolhei-nos no aconchego do Teu manto, Escutai mãe as nossas preces.</p>
            <p>Amparai os doentes e desempregados, Abençoai nossas casas e as nossas famílias, Protegei nossos filhos, Livrando-os das maldades e dos perigos desse mundo, Guardai nossos lares, Escondendo-os dos olhos dos maus, Que neles o nome de Deus seja sempre invocado com respeito e amor, Que os seus mandamentos sejam observados com fidelidade, Que Vosso bendito nome, ó Mãe querida, Seja sempre lembrado com muita devoção, Que a palavra de Deus seja sempre meditada, E seguida todos os dias da nossa vida. Que a nossa obediência a Teu Filho Jesus, Exale tal qual rosa um perfume de santidade. Amém.</p>
        </div>
        <p class="mt-4 font-semibold">(Rezar Pai Nosso, Ave-Maria, Glória ao Pai)</p>
    </div>`,
    days: [
      {
        day: '1º Dia',
        title: '1º Dia',
        content: `<div class="day-specific-content">
            <p>As palavras de Nossa Senhora de Guadalupe ditas ao índio S. Juan Diego a 9 de dezembro de 1531: “Meu querido filho a quem amo ternamente, saiba que eu sou a Virgem Maria, Mãe do Deus Verdadeiro. É Ele quem dá e mantém a vida, Criador de todas as coisas Senhor do céu e da terra, que está em todos os lugares. Eu desejo um templo a ser erguido aqui, onde possa manifestar a compaixão que tenho pelos nativos e por todos que solicitarem meu auxílio”.</p>
            <p>Estas vossas palavras, minha Mãe celestial, enchem meu coração de amor e gratidão com renovada fé, porque elas foram direcionadas à mim também. Por isso eu venho a vos, confiante de obter a vossa intercessão, a graça que me tornará capaz de viver de acordo com os ensinamentos do vosso Divino Filho, Jesus, a quem desejo amar de todo coração.</p>
            <p>Vós compartilhastes com todo o sofrimento do meu Salvador por mim, portanto, eu também vos pertenço, e vós sois minha amada Mãe. Não me abandone neste vale de lágrimas; tende piedade, eu vos procuro na minha pobreza e necessidade; tenha compaixão das minhas ansiedades e inquietações; assista-me nas minhas enfermidades e misérias.</p>
            <p class="italic mt-4">(Coloque suas intenções)</p>
        </div>`
      },
      {
        day: '2º Dia',
        title: '2º Dia',
        content: `<div class="day-specific-content">
            <p>As misericordiosas palavras ditas na quarta e última visita a Juan Diego: “Não deixe nada afligir você, e não tenha medo das doenças, acidentes ou dores. Não estou aqui eu que sou sua Mãe? você não está sob meu manto e proteção? você necessita de mais alguma coisa?”</p>
            <p>Essas vossas palavras foram também dirigidas a mim e elas enchem meu coração de alegria e esperança. Volva então, vossos olhos misericordiosos a mim; aperfeiçoa meu amor a vós.</p>
            <p>Por este amor, que seja possível eu colocar aos vossos pés, todos os meus problemas e preocupações, sabendo que vós ireis se lembrar porque sois minha Mãe, que sob vosso manto e proteção, obtereis para mim a consolação que tanto necessito.</p>
            <p class="italic mt-4">(Coloque suas intenções)</p>
        </div>`
      },
      {
        day: '3º Dia',
        title: '3º Dia',
        content: `<div class="day-specific-content">
            <p>Quando visitastes, Juan Bernardino, o tio moribundo de Juan Diego, curando-o e dizendo o vosso nome: “Imaculada Virgem Maria que esmagou a cabeça da serpente”, vós enchestes os corações dos Índios Nativos de alegria. Dissestes que eles não precisariam mais fazer sacrifícios humanos aos ídolos pagãos.</p>
            <p>Salve Rainha Mãe de misericórdia. Nossa vida, nossa doçura e nossa esperança! Permita-me juntar-me com cânticos e louvores à esta nação, onde muitos vieram de longe, a ofertar ao vosso trono, presentes e preces neste dia.</p>
            <p>Rogai por nós Santa Mãe de Deus, eliminando a serpente do mal de nossas vidas, que possamos ser dignos das promessas de Cristo vosso Divino Filho.</p>
            <p class="italic mt-4">(Coloque suas intenções)</p>
        </div>`
      },
      {
        day: '4º Dia',
        title: '4º Dia',
        content: `<div class="day-specific-content">
            <p>Quando os índios viram a admirável imagem dela deixada no poncho de Juan Diego, eles reconheceram que aquela pintura impressa continha uma mensagem celestial dirigida a eles. Sua régia figura na forma de uma mulher, ensinou-lhes que a sua moradia naquele momento era necessária que fosse na terra.</p>
            <p>Os raios de sol, as nuvens rodeando seu corpo, as estrelas sobre seu manto, a lua crescente sob seus pés, os anjos que a transportam pelo espaço, tudo denota que sua atual permanência é no céu e chama a atenção deles para a imortalidade da alma humana.</p>
            <p>Ó Santa Maria, como a vossa imagem no poncho de Juan Diego ensinou aos índios, ensina-me também nunca esquecer da imortalidade da minha alma, que o céu é meu objetivo e minha herança. No meio das tentações e das misérias desta vida, deixa-me sempre pensar nesta morada de paz, de glória e eterna felicidade.</p>
            <p class="italic mt-4">(Coloque suas intenções)</p>
        </div>`
      },
      {
        day: '5º Dia',
        title: '5º Dia',
        content: `<div class="day-specific-content">
            <p>Por séculos os nativos do México adoraram o sol como deus, sacrificando inúmeros seres humanos em sua honra. Mas quando eles contemplaram a bela imagem onde somente os raios eram bem visíveis, eles entenderam a lição a que estavam sendo conduzidos. Depois dos índios terem ouvido a vossa mensagem e lido o que a vossa imagem contém, eles abandonaram seus falsos deuses e abraçaram a amada doutrina do vosso Divino Filho.</p>
            <p>Nunca eles cessaram de agradecer pela grande misericórdia que o Deus Todo Poderoso lhes mostrou quando Ele vos enviou a eles para ser sua Rainha, sua Mãe e sua mestra.</p>
            <p>Oh Santa Maria, pelo mistério da Encarnação do vosso amado Filho, Nosso Senhor Jesus Cristo, onde nossa salvação começou, conceda-nos luz para entender a grandeza do benefício por Ele a nós concedido tornando-se nosso irmão e nos dando a vossa venerável mãe, para ser também a nossa mãe.</p>
            <p class="italic mt-4">(Coloque suas intenções)</p>
        </div>`
      },
      {
        day: '6º Dia',
        title: '6º Dia',
        content: `<div class="day-specific-content">
            <p>O fogo que ardeu nos altares dos falsos deuses, se extinguiu para sempre depois que os índios contemplaram vossa imagem e viram vosso manto como o firmamento coberto de estrelas.</p>
            <p>Isto lhes mostrou que as estrelas foram criadas pelo Deus Invisível para servir a humanidade e, portanto não poderiam ser por eles divinizadas, adoradas e dadas em sacrifício.</p>
            <p>Santíssima Virgem Maria, que através da imagem estampada no poncho do Índio, trouxe milhões de pagãos à luz da verdadeira fé; eu peço a Vós obter-me a graça do entendimento que esta mensagem contém. Derrama sobre mim a luz do vosso semblante; dirija e santifica meus empreendimentos.</p>
            <p class="italic mt-4">(Coloque suas intenções)</p>
        </div>`
      },
      {
        day: '7º Dia',
        title: '7º Dia',
        content: `<div class="day-specific-content">
            <p>O emblema de nossa redenção estampado sobre o broche dourado preso sobre vossa túnica serviu para dizer aos índios que a religião que eles haviam abraçado era a mesma que a dos seus conquistadores; a cruz sobre a bandeira de Hernando Cortez e a do broche eram as mesmas. Quando eles a viram sobre a imagem, se juntaram ao redor do missionário espanhol ansiosos para saber seu significado.</p>
            <p>Eles lhes contaram como o Salvador veio do céu para redimir a raça humana através da sua morte na cruz e como a Virgem Mãe da Divina Vítima associou a ele no mistério da nossa redenção.</p>
            <p>Feliz a nação a quem Ele se revelou a si mesmo e a Deus. Santa Virgem Maria de Guadalupe, minha rainha e mãe, mais de 400 anos se passaram desde que falastes com S. Juan Diego, e até agora um pequeno número de seus filhos em outras terras ficaram cientes do propósito da vossa imagem sobre o altar do vosso santuário. Inspira-nos então a ver nesta miraculosa pintura, o instrumento para a conversão de todos à Fé Católica e Apostólica, vós que sois a adorável Rainha e Mãe dos Apóstolos e Missionários.</p>
            <p class="italic mt-4">(Coloque suas intenções)</p>
        </div>`
      },
      {
        day: '8º Dia',
        title: '8º Dia',
        content: `<div class="day-specific-content">
            <p>Depois que S. Juan Diego cortou as flores que brotaram repentinamente naquela desoladora colina, ele as trouxe a Vós, no pé da montanha onde o aguardavas. Com vossas próprias mãos, vós as colocastes no poncho dele, atando-o no seu pescoço, dizendo-lhe que as levasse ao bispo Zumarraga, que este sinal o induziria a iniciar a construção do templo. As últimas palavras que ele ouviu dos vossos adoráveis lábios foram: “você é meu embaixador digno de confiança, vá em paz”</p>
            <p>A sagrada pintura sobre aquele poncho de qualidade inferior não poderia ter sido pintada por mãos humanas. Ela convenceu o bispo como convenceu a todas as pessoas que a viram, que a mensagem de Juan Diego era verdadeira.</p>
            <p>Humildemente eu vos imploro, minha Rainha e Mãe, deixa-me ser vossa embaixatriz como Juan Diego, a divulgar a doutrina contida na vossa imagem, a todos meus amigos e convence-los também, acreditem eles ou não.</p>
            <p class="italic mt-4">(Coloque suas intenções)</p>
        </div>`
      },
      {
        day: '9º Dia',
        title: '9º Dia',
        content: `<div class="day-specific-content">
            <p>Óh, Santa Virgem, entronizada no coração de uma nação de idólatras, vós fizestes um maravilhoso trabalho de conversão.</p>
            <p>Depois de verem a vossa imagem sobre o poncho de Juan Diego, os índios tiraram de seus templos, todos os ídolos, construíram belas igrejas em cujas torres as cruzes brilhavam à luz do sol, e os enormes tambores que em inúmeras vezes anunciaram sacrifícios humanos em honra aos seus deuses, não se ouviu nunca mais.</p>
            <p>Como nos remanescentes 17 anos de sua vida, Juan Diego divulgou a mensagem aos índios, permita-me minha amada Mãe, ajudar a humanidade a conhecer vossa celestial mensagem entre os meus conterrâneos. Anima e abençoa a todos os que se juntarem neste Apostolado e Novena, a fim de propagar a religião Católica entre seus amigos, tendo como bandeira vossa admirável imagem sobre o poncho de Juan Diego, junto com a cruz, emblema de nossa redenção.</p>
            <p class="italic mt-4">(Coloque suas intenções)</p>
        </div>`
      }
    ]
  },
  santa_luzia: {
    saintName: 'Santa Luzia',
    novenaTitle: 'Novena a Santa Luzia',
    description: 'Padroeira dos olhos. Peça pela saúde da visão física e espiritual.',
    image: 'https://iili.io/ffgqFiN.png',
    initialPrayer: `<div class="initial-prayer-text">
        <h4 class="section-title">Oração Preparatória</h4>
        <p class="italic mb-4">Reza-se no início de todos os dias da novena, antes da meditação.</p>
        <div class="prayer-block">
            <p>Soberano e Altíssimo Deus e Senhor nosso, que levais a bem e Vos apraz, que honremos os Vossos servos, que depois de nos terem dado exemplo neste mundo de todas as virtudes cristãs, reinam hoje convosco na eterna bem-aventurança. Louvores eternos Vos sejam dados, pois Vós nos mostrais que nos não é impossível a prática dos Vossos mandamentos, e até mesmo sofrer por Vós os tormentos e a morte. Vós, Senhor, no-lo mostrais na gloriosa donzela S. Luzia, a quem destes o ânimo varonil que é necessário para o martírio.</p>
            <p>Dignai-vos, Senhor, vir em nosso auxílio, quando nestes nove dias queremos meditar nas suas ações, e tomá-la por nossa advogada diante de Vós. Fazei com que nos envergonhemos da nossa fraqueza, e falta de ânimo. E, pois, que nos é fácil, hoje, em um país católico, a prática das obrigações cristãs, sem os perigos dos tormentos, dai-nos zelo e ânimo para a observância de vossos mandamentos, pela intercessão desta santa virgem, perdoando-nos primeiro quanto nos serve de obstáculo a imitar os Vossos santos. Amém</p>
        </div>
        <p class="mt-4 font-semibold">(Reza-se três Pai-Nossos, Ave-Marias e Glórias ao Pai.)</p>
        <h4 class="section-title mt-6">Jaculatória</h4>
        <p>℣. Santa Luzia, mártir verdadeira.</p>
        <p>℟. Fazei que sigamos a vossa carreira.</p>
    </div>`,
    finalPrayer: `<div class="final-prayer-text">
        <h4 class="section-title">Oferecimento</h4>
        <div class="prayer-block">
            <p>℣. Ora pro nobis, beáta Lúcia.</p>
            <p>℟. Ut digni efficiámur promissiónibus Christi.</p>
            <p><strong>Oremus:</strong> Exáudi nos, Deus salutáris noster, ut, sicut de beátae Lúciae, Vírginis et Martyris tuae, festivitáte gaudémus, ita piae devotiónis erudiámur afféctu. Per Christum Dominum Nostrum. Ámen.</p>
            <hr class="my-4 border-gray-300 dark:border-gray-700" />
            <p>℣. Rogai por nós, Bem-aventurada Luzia.</p>
            <p>℟. Para que sejamos dignos das promessas de Cristo.</p>
            <p><strong>Oremos:</strong> Ouvi-nos, ó Deus Salvador nosso, e fazei que, celebrando com alegria a festividade da Bem-aventurada Luzia, Vossa virgem e mártir, nos inflamemos em piedosos afetos de devoção. Por Nosso Senhor Jesus Cristo. Amém.</p>
        </div>
    </div>`,
    days: [
      {
        day: '1º Dia',
        title: '1º Dia',
        content: `<div class="day-specific-content">
            <h4 class="section-title">Meditação</h4>
            <p>Consideremos que sendo S. Luzia nobre por geração, muito mais o foi pelo seu amor à virgindade, e pelo desprezo dos gostos e delícias deste mundo. Foi a santa virgem em companhia de sua mãe visitar o sepulcro de S. Águeda, para pedirem por intercessão daquela santa o remédio para uma grave enfermidade que sofria a mãe da nossa santa. Deus Nosso Senhor despachou favoravelmente a sua súplica e a enferma foi curada. “Pedi, que haveis de receber, procurai, que haveis de achar, batei, que vos hão de abrir,” diz Nosso Senhor. Tendo Nosso Senhor assim empenhado a Sua palavra, que é palavra de rei, se o que pedirmos não nos for oposto a nossa salvação, Deus nos há de conceder o que pedirmos.</p>
        </div>`
      },
      {
        day: '2º Dia',
        title: '2º Dia',
        content: `<div class="day-specific-content">
            <h4 class="section-title">Meditação</h4>
            <p>Consideremos como tendo a mãe da nossa santa impetrado a sua saúde, que pedia por sua intercessão e de S. Águeda, pediu S. Luzia à sua boa mãe uma graça, em oposição ao que qualquer outra moça faria em tais circunstâncias. “Minha boa mãe”, diz a santa, “rogo-vos uma graça, a maior que me podereis fazer, e vem a ser que me entregueis desde já o dote que me tínheis destinado para o meu consórcio, quero distribuí-lo de um melhor e mais útil modo: dar-lhe-ei o destino que Jesus Cristo aconselhou a um moço desse as suas riquezas; sou moça, também tomarei, como dito a mim, este conselho que o Redentor deu ao moço.”. Esta petição foi sumamente agradável à boa mãe, que cedeu de boa mente aos rogos de sua santa filha.</p>
        </div>`
      },
      {
        day: '3º Dia',
        title: '3º Dia',
        content: `<div class="day-specific-content">
            <h4 class="section-title">Meditação</h4>
            <p>Consideremos como, recebendo S. Luzia o abundante dote que sua mãe lhe deu, que destino lhe daria a santa moça? Outra qualquer da mesma idade o gastaria em joias e adereços preciosos, que poderiam servir-lhe de laços a sua castidade. Mas a nossa santa tem outros sentimentos. Ela reduz tudo a dinheiro e lhe dá o mesmo destino que S. Lourenço deu às pratas e ouro da igreja, quando o presidente gentio lhas pediu: repartiu tudo com os pobres que é o conselho que Jesus Cristo deu ao moço, que é o mesmo que mandar tudo antecipadamente para o Céu pela mão dos pobres, para lá receber principal e juros abundantes em outro gênero de bens, espirituais e eternos, sólidos e verdadeiros. Parabéns a S. Luzia.</p>
        </div>`
      },
      {
        day: '4º Dia',
        title: '4º Dia',
        content: `<div class="day-specific-content">
            <h4 class="section-title">Meditação</h4>
            <p>Consideremos como, chegando à notícia do moço a quem estava prometida em casamento S. Luzia por seus pais, ainda que contra vontade dela, e exasperado o moço com a resolução da que tinha já por sua prometida esposa, tomou a resolução de a acusar e levá-la até o cadafalso. Era o tempo em que nessa região era crime ser cristão. O mancebo dirige-se ao governador da terra e acusa a Luzia de ser cristã. Infeliz moço, que quando pensava vingar-se da santa, lhe procurou a maior felicidade. Geme ele no Inferno eternamente, se morreu assim como viveu: e a santa goza da eterna felicidade que lhe conseguiu a virgindade e o martírio.</p>
        </div>`
      },
      {
        day: '5º Dia',
        title: '5º Dia',
        content: `<div class="day-specific-content">
            <h4 class="section-title">Meditação</h4>
            <p>Consideremos como, acusada S. Luzia de ser cristã, citada para comparecer perante o governador, aonde depois de muito boas promessas, afagos, vendo o presidente que nada conseguia, diz: “Deixemos palavras, vamos aos tormentos”. A santa responde: “Aos servos de Deus nunca lhe podem faltar palavras, pois que o Espírito Santo que mora neles lhes inspirará o que devem falar”. Então, o tirano disse: “Eu te mandarei para a casa da prostituição, para que o Espírito Santo saia de ti e te desampare.”. Mandou, então, que a santa fosse conduzida para uma dessas casas da maldição, onde mora o Demônio e suas amigas. Que será da nossa santa em tal casa? Não temamos, pois Deus nunca desamparou os Seus servos.</p>
        </div>`
      },
      {
        day: '6º Dia',
        title: '6º Dia',
        content: `<div class="day-specific-content">
            <h4 class="section-title">Meditação</h4>
            <p>Consideremos hoje uma grande maravilha de Nosso Senhor a favor de Sua serva S. Luzia. O tirano a mandou levar para uma casa má, para ali perder a virgindade. Até quanto pode chegar a barbaridade humana! Mas o Senhor deu ao santo corpo de Sua serva um dote de imobilidade, que nenhuma força humana foi capaz de fazer andar um passo: parecia como um esteio pregado e fincado até o profundo, ou uma barra de ferro, ou um rochedo vivo, que forças humanas não podiam abalar. Bendito seja Deus, que assim acode a seus servos. Como estaria, então, a alma da santa, vendo o que Deus obrava em seu favor!</p>
        </div>`
      },
      {
        day: '7º Dia',
        title: '7º Dia',
        content: `<div class="day-specific-content">
            <h4 class="section-title">Meditação</h4>
            <p>Consideremos como se verifica o que o Espírito Santo diz: “Um abismo chama por outro abismo.”. A imobilidade de S. Luzia, que era tão visível milagre e suficiente prova da religião para o tirano gentio cego pela sua seita, cada vez o cegou e exasperou mais, e o Demônio lhe sugeriu o pensamento de a queimar viva no mesmo lugar, de que seu corpo não podia ser abalado: manda cercá-la de muita lenha e matérias combustíveis, untado tudo com pez, resina e azeite, e que a tudo se pegasse fogo. Eis uma delicada moça no meio das labaredas. Que será dela? Deus seja louvado para sempre. Quem a fez imóvel no mesmo lugar, também a livrou das chamas, como noutro tempo aos meninos de Babilônia. Ó poder admirável de Deus! Ó obstinação dos gentios e pecadores! Ó efeitos da divina proteção!</p>
        </div>`
      },
      {
        day: '8º Dia',
        title: '8º Dia',
        content: `<div class="day-specific-content">
            <h4 class="section-title">Meditação</h4>
            <p>Consideremos como, não conseguindo o tirano nem que a santa renegasse da fé, nem que o fogo lhe tirasse a vida, continua, mas em vão, a atormentá-la com suplícios que os demônios lhe faziam vir à cabeça, até que, perdendo toda a esperança, lhe manda atravessar a garganta com uma espada, e tirar-lhe a vida, quando ela estava profetizando a paz que Deus estava para dar à Sua Igreja pela morte de Domiciano e Maximiano, que tantos centos e milhares de cristãos martirizaram. Voa a bem-aventurada alma de Luzia para o Céu, aonde agora goza da eterna felicidade para sempre. Bendita santa, olhai para os vossos devotos, dai-lhes constância nos trabalhos deste mundo, e a vossa companhia na terra dos viventes.</p>
        </div>`
      },
      {
        day: '9º Dia',
        title: '9º Dia',
        content: `<div class="day-specific-content">
            <h4 class="section-title">Meditação</h4>
            <p>Consideremos como o povo cristão, tomando a diversos santos para advogados em diversas moléstias corporais, tem tomado a nossa santa por protetora nas doenças dos olhos, e certamente o não faria, se a experiência lhe não mostrasse que é valiosa a sua proteção. Convém, porém, advertirmos, que os benefícios corporais se devem pedir a Deus por intercessão de seus servos, sempre debaixo da condição que eles sejam úteis à nossa salvação. Muitos cegos se salvaram que, se tivessem vista, se perderiam. S. Luzia, que tanta glória conseguiu no Céu por seus relevantes merecimentos, nos consiga que vejamos a Terra como lugar de desterro, e cheia de laços, que o Demônio arma aos pobres filhos de Adão, e vejamos ao Céu como nossa pátria, lugar de eterno descanso, casa de Deus, onde Jesus Cristo, com Seus merecimentos, nos tem preparado um lugar.</p>
        </div>`
      }
    ]
  },
  joao_cruz: {
    saintName: 'São João da Cruz',
    novenaTitle: 'Novena a São João da Cruz',
    description: 'Doutor da Igreja. Mestre da vida espiritual na busca pela união com Deus.',
    image: 'https://iili.io/ffgFMWN.jpg',
    initialPrayer: `<div class="initial-prayer-text">
        <h4 class="section-title">Oração Inicial</h4>
        <div class="prayer-block">
            <p>Ó Deus, que inspirastes a São João da Cruz, nosso pai, um extraordinário amor da Cruz e uma perfeita abnegação de si mesmo, concedei-nos a graça que vos pedimos… e fazei que, iluminados por sua doutrina, caminhemos para vós na fé, na esperança e na caridade, para chegarmos a perfeita liberdade dos vossos filhos. Por Nosso Senhor Jesus Cristo, vosso Filho, na unidade do Espírito Santo. Amém.</p>
            <p class="mt-2">℣. Rogai por nós Nosso Pai, São João da Cruz,</p>
            <p>℟. Para que sejamos dignos das promessas de Cristo.</p>
        </div>
    </div>`,
    finalPrayer: `<div class="final-prayer-text">
        <h4 class="section-title">Ladainha de São João da Cruz</h4>
        <div class="prayer-block">
            <p>Senhor, tende piedade de nós!<br/>
            Jesus Cristo, tende piedade de nós!<br/>
            Senhor, tende piedade de nós!</p>

            <p class="mt-2">Jesus Cristo, ouvi-nos!<br/>
            Jesus Cristo, atendei-nos!</p>

            <p class="mt-2">Deus Pai do Céu, tende piedade de nós!<br/>
            Deus Filho, Redentor do mundo, tende piedade de nós!<br/>
            Deus Espírito Santo, tende piedade de nós!</p>

            <p class="mt-2">Ssma. Trindade que sois Um só Deus, tende piedade de nós!<br/>
            Nossa Senhora do Monte Carmelo, rogai por nós!<br/>
            São José, patrono do Carmelo, rogai por nós!<br/>
            Santa Madre Teresa de Jesus, rogai por nós!<br/>
            São João da Cruz, nosso pai, rogai por nós!</p>

            <p class="mt-2">Doutor Místico, rogai…<br/>
            Cantor dos Amores de Deus,<br/>
            Pai do Carmelo Descalço,<br/>
            Modelo de Carmelita,<br/>
            Sacerdote de Deus Altíssimo,<br/>
            Serafim de piedade,<br/>
            Mártir de amor,<br/>
            Mestre de espiritualidade,<br/>
            Imagem do Cristo Sofredor,</p>

            <p class="mt-2">Santo da oração e penitência,<br/>
            Santo da desnudez espiritual,<br/>
            Santo do despojamento,</p>

            <p class="mt-2">Glória da Santa Igreja,<br/>
            Glória da Espanha,</p>

            <p class="mt-2">São João da Cruz obedientíssimo,<br/>
            São João da Cruz casto e pobre,<br/>
            São João da Cruz pacientíssimo,</p>

            <p class="mt-2">Cordeiro de Deus, que tirais o pecado do mundo:<br/>
            Perdoai-nos, Senhor!<br/>
            Cordeiro de Deus, que tirais o pecado do mundo:<br/>
            Ouvi-nos, Senhor!<br/>
            Cordeiro de Deus, que tirais o pecado do mundo:<br/>
            Tende piedade de nós!</p>

            <p class="mt-2">℣. Rogai por nós, Nosso Pai São João da Cruz!<br/>
            ℟. Para que sejamos dignos das promessas de Cristo!</p>
            
            <hr class="my-4 border-gray-300 dark:border-gray-700" />
            
            <p><strong>℣. Oremos:</strong><br/>
            Ó Deus que guiastes São João da Cruz, nosso Pai, à santa Montanha que é Cristo, através da noite escura da renúncia e do amor ardente à Cruz, concedei-nos segui-lo como mestre de vida espiritual para atingir a contemplação da vossa glória. Por Cristo, Nosso Senhor.</p>
            <p>℟. Amém.</p>
        </div>
    </div>`,
    days: [
      {
        day: '1º Dia',
        title: '1º Dia',
        content: `<div class="day-specific-content">
            <h4 class="section-title">Amor de Deus / Amor do Próximo</h4>
            <p>«Ame muito aos que a contradizem e não a amam, porque nisso se gera amor no peito onde não o há, como faz Deus conosco, que nos ama mediante o amor que nos tem» (Ct 33*) … «Porque o verdadeiro amante só está contente quando tudo o que ele é, vale, tem e recebe, o emprega no Amado, e quanto mais é tudo isso, tanto mais gosto tem em lho dar» (CH III, 1).</p>
            <p class="mt-4 font-semibold">(Pai Nosso, Ave-Maria, Glória)</p>
        </div>`
      },
      {
        day: '2º Dia',
        title: '2º Dia',
        content: `<div class="day-specific-content">
            <h4 class="section-title">Obediência</h4>
            <p>«Perguntando alguém um dia ao venerável Padre João da Cruz como era que uma pessoa se arrebatava, respondeu: negando a sua vontade e fazendo a de Deus, porque o êxtase não é senão sair a alma de si mesma e arrebatar-se em Deus, e isto faz o que obedece porque é sair de si e do seu próprio querer e assim aliviado submerge-se em Deus» (A 65**).</p>
            <p class="mt-4 font-semibold">(Pai Nosso, Ave-Maria, Glória)</p>
        </div>`
      },
      {
        day: '3º Dia',
        title: '3º Dia',
        content: `<div class="day-specific-content">
            <h4 class="section-title">Castidade</h4>
            <p>«Pensam que, por ter estado tão mudo, as perco de vista e deixo de andar vendo como com grande facilidade podem ser santas e com muito gosto e seguro amparo andar em delícias do Amado Esposo? Pois aí irei e então hão-de ver como não me esquecia e veremos as riquezas ganhas no amor puro e sendas de vida eterna e os passos formosos que dão em Cristo, cujas delícias e coroas são as suas esposas…» (Ct 7*/Ct 5**).</p>
            <p class="mt-4 font-semibold">(Pai Nosso, Ave-Maria, Glória)</p>
        </div>`
      },
      {
        day: '4º Dia',
        title: '4º Dia',
        content: `<div class="day-specific-content">
            <h4 class="section-title">Pobreza</h4>
            <p>«Dizia-se pobre (o rei David, no salmo 87, 16, numa tradução acomodatícia), bem que na verdade fosse rico, porque não tinha nas riquezas a sua vontade e assim era como se na realidade fosse pobre. Mas fosse ele realmente pobre, e a vontade o não fora, não seria verdadeiramente pobre; pois a alma estaria rica e cheia no apetite. Por isso chamamos a esta desnudez noite para a alma, porque não tratamos aqui da carência das coisas, porque isso não despe a alma, se delas tem apetite; senão da desnudez do gosto e apetite delas, pois é o que deixa a alma livre e vazia delas, mesmo que as tenha…» (S I, III, 4).</p>
            <p class="mt-4 font-semibold">(Pai Nosso, Ave-Maria, Glória)</p>
        </div>`
      },
      {
        day: '5º Dia',
        title: '5º Dia',
        content: `<div class="day-specific-content">
            <h4 class="section-title">Assistência ao Coro</h4>
            <p>«Também disto temos figura muito ao vivo no Génesis, onde se lê que o Patriarca Jacob querendo subir ao monte de Betel a fim de aí erguer um altar a Deus, para Lhe oferecer sacrifício, ordenou primeiramente três coisas a toda a sua gente: a primeira, que rejeitassem todos os deuses estranhos, a segunda que se purificassem e a terceira que mudassem as vestes (Gn 35, 2). Por estas três coisas dá-se a entender a toda a alma que quer subir a este monte a fazer de si mesma altar onde ofereça a Deus sacrifício de puro amor, louvor e reverência pura, que antes que suba ao cimo do monte, há-de cumprir perfeitamente as três coisas já referidas» (S I, V, 6-7).</p>
            <p class="mt-4 font-semibold">(Pai Nosso, Ave-Maria, Glória)</p>
        </div>`
      },
      {
        day: '6º Dia',
        title: '6º Dia',
        content: `<div class="day-specific-content">
            <h4 class="section-title">Penitência / Mortificação</h4>
            <p>«Por isso é muito para chorar a ignorância de alguns que se sobrecarregam de penitências extraordinárias (…) e pensam que lhes bastará isto e aquilo para chegar à união com a Sabedoria Divina, e não é assim, se com diligência não procurarem negar os apetites (…) Porque assim como é necessário lavrar a terra para ela dar fruto, e se não for lavrada não produz senão ervas más, assim é necessária a mortificação dos apetites para que haja proveito na alma» (S I, VIII, 4).</p>
            <p class="mt-4 font-semibold">(Pai Nosso, Ave-Maria, Glória)</p>
        </div>`
      },
      {
        day: '7º Dia',
        title: '7º Dia',
        content: `<div class="day-specific-content">
            <h4 class="section-title">Humildade</h4>
            <p>«A alma enamorada é suave, mansa, humilde e paciente» (D 28*/D 27**) «e, para se enamorar de uma alma, não põe Deus os olhos na grandeza dela, mas na grandeza da sua humildade» (PA, D 102*/ PA 24**).</p>
            <p class="mt-4 font-semibold">(Pai Nosso, Ave-Maria, Glória)</p>
        </div>`
      },
      {
        day: '8º Dia',
        title: '8º Dia',
        content: `<div class="day-specific-content">
            <h4 class="section-title">Oração</h4>
            <p>«’Buscai primeiro o reino de Deus e a sua justiça, e tudo o mais se vos dará por acréscimo’. Porque esta é a pretensão e petição mais a Seu gosto; e para alcançar as petições que temos no nosso coração, não há melhor meio de que pôr a força da nossa oração naquilo que é mais do gosto de Deus; porque então, não só nos dará o que Lhe pedimos, que é a salvação, como ainda o que vê que nos convém e nos é bom, embora não Lho peçamos» (S III, XLIV, 1-2); «procure, pois, ser contínuo na oração e no meio dos exercícios exteriores não a deixe. Quer coma, quer beba, quer trate com os de fora, quer faça qualquer outra coisa ande sempre desejando a Deus, pondo n’Ele o afecto do seu coração» (Cons. Rel. 9). «Quem foge da oração, foge de todo o bem» (OA, D 170*/OA, A 11**).</p>
            <p class="mt-4 font-semibold">(Pai Nosso, Ave-Maria, Glória)</p>
        </div>`
      },
      {
        day: '9º Dia',
        title: '9º Dia',
        content: `<div class="day-specific-content">
            <h4 class="section-title">Silêncio / Paz</h4>
            <p>«Veja aquele saber infinito, aquele segredo escondido! Que paz, que amor, que silêncio não está naquele peito divino, que ciência tão elevada a que Deus ali ensina» (PA, D138*/PA 60**), … «em todas as coisas, pois, por adversas que sejam, nos devemos alegrar em vez de perturbar, para não perder o bem maior que toda a prosperidade, isto é, a tranquilidade de ânimo e paz em todas as coisas adversas ou prósperas, levando a todas de igual maneira» (SIII, VI, 4), «pondo todo o cuidado em coisa mais alta que é buscar o reino de Deus isto é, em não faltar a Deus, porque o demais, como Sua Majestade disse, nos será dado por acréscimo, pois não se há-de esquecer de nós Aquele que cuida dos animais. Com isto se adquirirá silêncio e paz» (2ª Cautela contra o mundo).</p>
            <p class="mt-4 font-semibold">(Pai Nosso, Ave-Maria, Glória)</p>
        </div>`
      }
    ]
  },
  natal_sao_leao: {
    saintName: 'São Leão Magno',
    novenaTitle: 'Novena de Natal (São Leão Magno)',
    description: 'Prepare-se para o Natal com as meditações profundas de São Leão Magno.',
    image: 'https://iili.io/ffgFVsI.jpg',
    initialPrayer: `<div class="initial-prayer-text">
        <h4 class="section-title">Oração Inicial</h4>
        <div class="prayer-block">
            <p>Senhor, mostra o Teu poder e vem, a fim de que sejamos protegidos contra os perigos a que nossos pecados nos expõem. Tu que, sendo Deus, vives e reinas com o Pai, na unidade do Espírito Santo, pelos séculos dos séculos. Amém.</p>
            <p class="mt-4 font-semibold">(3 Ave-Marias; 1 Pai-Nosso; 1 Glória)</p>
        </div>
    </div>`,
    finalPrayer: `<div class="final-prayer-text">
        <h4 class="section-title">Oração Final</h4>
        <div class="prayer-block">
            <p>Ó Menino Jesus, a Vós recorro e Vos suplico, pela intercessão de Vossa Mãe Santíssima: assisti-me nesta necessidade, porque creio firmemente que a Vossa divindade pode me socorrer! Espero com toda a confiança obter a Vossa santa graça. Amo-vos de todo o meu coração e com todas as forças de minha alma. Proponho-me não mais Vos ofender e a Vós me ofereço, dispondo-me a sofrer antes de fazer-vos sofrer. Quero de agora em diante Vos servir com toda a fidelidade, e, pelo Vosso Amor, ó Menino Deus, amarei o meu próximo como a mim mesmo. Concedei-me, principalmente, a graça de Vos possuir eternamente na companhia de Maria Santíssima e de São José, para Vos adorar com todos os anjos na Corte Celestial. Amém.</p>
        </div>
    </div>`,
    days: [
      {
        day: '1º Dia',
        title: '1º Dia',
        content: `<div class="day-specific-content">
            <h4 class="section-title">Antífona Inicial</h4>
            <p class="italic mb-4">Tocai a trombeta em Sião, que o dia do Senhor se aproxima! Eis que Ele vem salvar-nos.</p>
            <h4 class="section-title">Meditação de São Leão Magno</h4>
            <p>Caríssimos, deixemo-nos transportar de alegria e demos livre curso ao júbilo espiritual, pois raiou para nós o dia de uma redenção nova, dia longamente preparado, dia de felicidade eterna.</p>
        </div>`
      },
      {
        day: '2º Dia',
        title: '2º Dia',
        content: `<div class="day-specific-content">
            <h4 class="section-title">Antífona Inicial</h4>
            <p class="italic mb-4">Todo monte e colina serão arrasados; tornar-se-ão retos os caminhos tortuosos e planas as estradas. Vem, Senhor, e não tardes!</p>
            <h4 class="section-title">Meditação de São Leão Magno</h4>
            <p>Caríssimos, animados da confiança que nasce de tão grande esperança, permanecei firmes na fé sobre a qual fostes estabelecidos, para que o Tentador, de cujo domínio Cristo vos subtraiu, não vos seduza novamente com algumas de suas ciladas e não corrompa as alegrias próprias desse dia mediante a habilidade de suas mentiras.</p>
        </div>`
      },
      {
        day: '3º Dia',
        title: '3º Dia',
        content: `<div class="day-specific-content">
            <h4 class="section-title">Antífona Inicial</h4>
            <p class="italic mb-4">Tende o espírito alerta; o Senhor nosso Deus se aproxima.</p>
            <h4 class="section-title">Meditação de São Leão Magno</h4>
            <p>Honrai com uma obediência santa e sincera o mistério sagrado e divino da restauração do gênero humano. Uni-vos a Cristo, nascido em nossa carne, a fim de merecerdes ver reinando em Sua majestade esse mesmo Deus de glória que, com o Pai e o Espírito Santo, permanece na unidade da divindade pelos séculos dos séculos.</p>
        </div>`
      },
      {
        day: '4º Dia',
        title: '4º Dia',
        content: `<div class="day-specific-content">
            <h4 class="section-title">Antífona Inicial</h4>
            <p class="italic mb-4">Sabei que o reino de Deus está próximo: sim, ele não tarda.</p>
            <h4 class="section-title">Meditação de São Leão Magno</h4>
            <p>O Filho de Deus, que é Deus como Seu Pai; que recebe do Pai, Criador e Senhor de tudo, Sua mesma natureza; que está presente em toda parte e transcende o universo inteiro na sequência dos tempos, os quais de Sua Providência dependem, escolheu para Si um dia, a fim de em prol da salvação do mundo nele nascer da Bem-aventurada Virgem Maria, conservando intacto o pudor de Sua mãe.</p>
        </div>`
      },
      {
        day: '5º Dia',
        title: '5º Dia',
        content: `<div class="day-specific-content">
            <h4 class="section-title">Antífona Inicial</h4>
            <p class="italic mb-4">Não temais: dentro de quatro dias virá o Senhor.</p>
            <h4 class="section-title">Meditação de São Leão Magno</h4>
            <p>O admirável parto da sagrada Virgem trouxe à luz uma Pessoa que, em Sua unicidade, era verdadeiramente humana e verdadeiramente divina, já que as duas naturezas não conservaram suas propriedades de modo tal que se pudessem distinguir como duas pessoas: não foi apenas ao modo de um habitador em seu habitáculo que o Criador assumiu a Sua criatura, mas, ao contrário, uma natureza como que se adicionou à outra. Embora duas naturezas, uma a assumente e outra a assumida, é tal a unidade que formam que um único e mesmo Filho poderá dizer-se, enquanto verdadeiro homem, menor que o Pai, e enquanto verdadeiro Deus, igual ao Pai.</p>
        </div>`
      },
      {
        day: '6º Dia',
        title: '6º Dia',
        content: `<div class="day-specific-content">
            <h4 class="section-title">Antífona Inicial</h4>
            <p class="italic mb-4">Eis chegada a plenitude dos tempos: Deus envia o Seu Filho à Terra.</p>
            <h4 class="section-title">Meditação de São Leão Magno</h4>
            <p>Assim, para sermos novamente chamados dos grilhões originais e dos erros mundanos à eterna bem-aventurança, Aquele mesmo a quem não podíamos subir desceu até nós. Se realmente muitos eram os que amavam a verdade, a astúcia do Demônio iludia-os na incerteza de suas opiniões, e sua ignorância, ornada com o falso nome de ciência, arrastava-os a sentenças as mais diversas e opostas. A doutrina da Antiga Lei não era bastante para afastar essa ilusão que mantinha as inteligências no cativeiro do soberbo Demônio. Nem tampouco as exortações dos profetas lograriam realizar a restauração de nossa natureza. Era necessário que se acrescentasse às instituições morais uma verdadeira redenção, era necessário que uma natureza corrompida desde os primórdios renascesse em novo início.</p>
        </div>`
      },
      {
        day: '7º Dia',
        title: '7º Dia',
        content: `<div class="day-specific-content">
            <h4 class="section-title">Antífona Inicial</h4>
            <p class="italic mb-4">Eis que se cumpriram todas as coisas que o anjo anunciou à Virgem Maria.</p>
            <h4 class="section-title">Meditação de São Leão Magno</h4>
            <p>Considerai atentamente, caríssimos, sob a luz do Espírito Santo, quem nos recebeu consigo e quem recebemos conosco: sim, como o Senhor se tornou carne nossa nascendo, também nós nos tornamos Seu Corpo renascendo. Somos membros de Cristo e templos do Espírito Santo, e é por isso que o Apóstolo diz: “Glorificai e trazei a Deus no vosso corpo”.</p>
        </div>`
      },
      {
        day: '8º Dia',
        title: '8º Dia',
        content: `<div class="day-specific-content">
            <h4 class="section-title">Antífona Inicial</h4>
            <p class="italic mb-4">Hoje sabereis que o Senhor virá, e amanhã vereis a Sua glória.</p>
            <h4 class="section-title">Meditação de São Leão Magno</h4>
            <p>Com efeito, o Senhor Jesus Cristo veio para eliminar nossa corrupção, não para ser sua vítima; para trazer remédio aos nossos vícios, não para ser sua presa. Ele veio curar toda enfermidade, consequência de nossa corrupção, e todas as úlceras que manchavam nossas almas; como Ele trazia para nossos corpos humanos a graça nova de uma pureza sem mancha, foi necessário que Ele nascesse segundo um modo novo.</p>
        </div>`
      },
      {
        day: '9º Dia',
        title: '9º Dia',
        content: `<div class="day-specific-content">
            <h4 class="section-title">Antífona Inicial</h4>
            <p class="italic mb-4">O Anjo disse aos pastores: “Eu vos anuncio uma grande alegria. Nasceu para vós o Salvador do mundo.”</p>
            <h4 class="section-title">Meditação de São Leão Magno</h4>
            <p>Hoje, amados filhos, nasceu o nosso Salvador. Alegremo-nos. Não pode haver tristeza no dia em que nasce a vida; uma vida que, dissipando o temor da morte, enche-nos de alegria com a promessa da eternidade. Ninguém está excluído da participação nesta felicidade. A causa da alegria é comum a todos, porque Nosso Senhor, vencedor do pecado e da morte, não tendo encontrado ninguém isento de culpa, veio libertar a todos. Exulte o justo, porque se aproxima da vitória; rejubile o pecador, porque lhe é oferecido o perdão; reanime-se o pagão, porque é chamado à vida.</p>
        </div>`
      }
    ]
  },
  natal_familia: {
    saintName: 'Sagrada Família',
    novenaTitle: 'Novena de Natal em Família',
    description: 'Reúna sua família para celebrar o nascimento de Jesus com meditações diárias.',
    image: 'https://iili.io/ffgFVsI.jpg',
    initialPrayer: `<div class="initial-prayer-text">
        <h4 class="section-title">Oração Inicial</h4>
        <div class="prayer-block">
            <p>Deus benigno de infinita caridade que nos amastes tanto e que nos destes em vosso Filho a melhor oferta de vosso amor, para que, encarnado e feito nosso irmão no seio da Virgem, nascesse em um presépio para nossa saúde e remédio; vos damos graças por tão imenso benefício. De volta vos oferecemos, Senhor, o esforço sincero para fazer deste vosso mundo e nosso, um mundo mais justo, mais fiel ao grande mandamento de nos amarmos como irmãos. Conceda-nos, Senhor, vossa ajuda para poder realizá-lo. Pedimos-Vos que este Natal, festa de paz e alegria, seja para nossa comunidade um estímulo a fim de que, vivendo como irmãos, procuremos mais e mais os caminhos da verdade, da justiça, do amor e da paz. Amém.</p>
            <p class="mt-2 font-semibold">(Rezar um Pai Nosso)</p>
        </div>
        <h4 class="section-title mt-4">Oração para a Família</h4>
        <div class="prayer-block">
            <p>Senhor, fazei de nosso lar um lugar de Vosso amor. Que não haja injúria porque nos dais compreensão. Que não haja amargura porque nos abençoais. Que não haja egoísmo porque nos alentais. Que não haja rancor porque nos dais o perdão. Que não haja abandono porque estais conosco. Que saibamos caminhar até vós em nosso viver cotidiano. Que cada manhã amanheça mais um dia de entrega e sacrifício. Que cada noite nos encontre com mais amor. Fazei Senhor com nossas vidas, que quisestes unir, uma página cheia de vós. Fazei, Senhor, de nossos filhos o que desejardes, ajudai-nos a educá-los, orientá-los pelo vosso caminho. Que nos esforcemos no apoio mútuo. Que façamos do amor um motivo para amar-vos mais. Que quando amanhecer o grande dia de ir a seu encontro conceda nos encontrarmos unidos para sempre em vós. Amém.</p>
        </div>
        <h4 class="section-title mt-4">Oração à Virgem</h4>
        <div class="prayer-block">
            <p>Soberana Maria, te pedimos por todas as famílias de nosso país; faz com que cada lar de nossa pátria e do mundo seja fonte de compreensão, de ternura, de verdadeira vida familiar. Que estas festas de Natal, que nos reúnem ao redor do presépio onde nasceu teu Filho, nos unam também no amor, que nos façam esquecer as ofensas e nos deem simplicidade para reconhecer os enganos que tenhamos cometido. Mãe de Deus e Nossa Mãe, intercedei por nós. Amém.</p>
        </div>
        <h4 class="section-title mt-4">Oração a São José</h4>
        <div class="prayer-block">
            <p>Santíssimo São José, esposo de Maria e pai adotivo do Senhor, foste escolhido para fazer as vezes de pai no lar de Nazaré. Ajudai os pais de família; que eles sejam sempre no lar a imagem do pai celestial, a teu exemplo; que cumpram a grande responsabilidade de educar e formar seus filhos, entregando-lhes, com um esforço contínuo, o melhor de si mesmos. Ajudai os filhos a entender e apreciar o abnegado esforço de seus pais. São José, modelo de marido e pai, intercedei por nós. Amém.</p>
            <p class="mt-2 font-semibold">(Rezar um Pai Nosso)</p>
        </div>
    </div>`,
    finalPrayer: `<div class="final-prayer-text">
        <h4 class="section-title">Oração ao Menino Deus</h4>
        <div class="prayer-block">
            <p>Senhor, Natal é a lembrança de teu nascimento entre nós, é a presença de teu amor em nossa família e em nossa sociedade. Natal é certeza de que o Deus do céu e da terra é nosso Pai, que tu, Divino Menino, é nosso irmão. Que esta reunião junto a teu presépio nos aumente a fé em sua bondade, comprometa-nos a viver verdadeiramente como irmãos, nos dê valor para matar o ódio e semear a justiça e a paz. Ó Divino Menino, ensina-nos a compreender que onde há amor e justiça, ali estas tu e ali também é Natal. Amém.</p>
            <p class="mt-2 font-semibold">(Rezar um Glória ao Pai)</p>
        </div>
        <h4 class="section-title mt-4">Novena de Natal – Gozos</h4>
        <div class="prayer-block">
            <p class="italic font-semibold mb-2">Meu doce Jesus, meu menino adorado! Vem a nossas almas! Vem, não demores tanto!</p>
            <p>– Ó sapiência suma de Deus soberano que ao nível de um menino te rebaixaste. Ó Divino infante, vem para nos ensinar a prudência que faz verdadeiros sábios.</p>
            <p class="italic font-semibold my-2">Meu doce Jesus, meu menino adorado! Vem a nossas almas! Vem, não demores tanto!</p>
            <p>– Menino do presépio nosso Deus e irmão, tu sabes e entendes da dor humana; que quando sofrermos dores e angústias sempre lembremos que tu nos salvaste.</p>
            <p class="italic font-semibold my-2">Meu doce Jesus, meu menino adorado! Vem a nossas almas! Vem, não demores tanto!</p>
            <p>– Ó luz do oriente, sol de eternos raios que entre as trevas seu esplendor vejamos, Menino tão precioso, sorte do cristão, ilumina o sorriso de seus doces lábios.</p>
            <p class="italic font-semibold my-2">Meu doce Jesus, meu menino adorado! Vem a nossas almas! Vem, não demores tanto!</p>
            <p>– Rei das nações, ilustre Emanuel, de Israel pastor. Menino que apascenta com suave cajado a ovelha arisca ou o cordeiro manso.</p>
            <p class="italic font-semibold my-2">Meu doce Jesus, meu menino adorado! Vem a nossas almas! Vem, não demores tanto!</p>
            <p>– Abram-se os céus e chova do alto o bom orvalho, como santa irrigação. Venha belo menino, venha Deus encarnado; brilha bela estrela, brota a flor do campo.</p>
            <p class="italic font-semibold my-2">Meu doce Jesus, meu menino adorado! Vem a nossas almas! Vem, não demores tanto!</p>
            <p>– Tu te fizeste Menino em uma família cheia de ternura e calor humano. Que vivam os lares aqui congregados o grande compromisso do amor cristão.</p>
            <p class="italic font-semibold my-2">Meu doce Jesus, meu menino adorado! Vem a nossas almas! Vem, não demores tanto!</p>
            <p>– Do fraco és auxílio, do enfermo és amparo, consolo és do triste, luz do desterrado. Vida de minha vida, meu sonho adorado, meu constante amigo, meu divino irmão.</p>
            <p class="italic font-semibold my-2">Meu doce Jesus, meu menino adorado! Vem a nossas almas! Vem, não demores tanto!</p>
            <p>– Vem diante de meus olhos por ti enamorados, ora beije teus pés, ora beije tuas mãos. Prosternado em terra, te estendo os braços e, mais do que minhas frases, te diz meu pranto.</p>
            <p class="italic font-semibold my-2">Meu doce Jesus, meu menino adorado! Vem a nossas almas! Vem, não demores tanto!</p>
            <p>– Faz de nossa pátria uma grande família; semeia em nosso chão teu amor e tua paz, nos dê fé na vida, nos dê esperança e um sincero amor que nos una mais.</p>
            <p class="italic font-semibold my-2">Meu doce Jesus, meu menino adorado! Vem a nossas almas! Vem, não demores tanto!</p>
            <p>– Vem nosso Salvador, por quem suspiramos! Vem às nossas almas, vem, não demores tanto!</p>
        </div>
    </div>`,
    days: [
      {
        day: '1º Dia',
        title: '17 de Dezembro',
        content: `<div class="day-specific-content">
            <h4 class="section-title">Reconciliação</h4>
            <p>Vamos avaliar nossos valores de modo que o Natal seja o que deve ser: uma festa dedicada à RECONCILIAÇÃO. Dedicada ao perdão generoso e compreensivo que aprenderemos com um Deus compassivo. Com o perdão do Espírito Santo podemos nos reconciliar com Deus e com os irmãos e andar em uma vida nova.</p>
            <p>É a boa notícia que São Paulo exclamou em suas cartas, tal como lemos em sua epístola aos Romanos 5, 1-11.</p>
            <p>Viver o Natal é apagar as ofensas se alguém nos ofendeu e é pedir perdão se tivermos ofendido a outros. Assim, do perdão nasce a harmonia e construímos essa paz que os anjos anunciam em Belém: paz na terra aos homens que amam ao Senhor e se amam entre si. Os seres humanos podem nos ofender com o ódio ou podemos ser felizes em um amor que reconcilia. E essa boa missão é para cada um de nós: ser agentes de reconciliação e não de discórdia, ser instrumento de paz e semeadores de irmandade.</p>
        </div>`
      },
      {
        day: '2º Dia',
        title: '18 de Dezembro',
        content: `<div class="day-specific-content">
            <h4 class="section-title">Compreensão</h4>
            <p>O segundo dia é dedicado à COMPREENSÃO. Compreensão é uma nota distintiva de todo verdadeiro amor. Podemos dizer que a encarnação de um Deus que se faz homem pode ler-se em chave desse grande valor chamado compreensão. É um Deus que fica em nosso lugar, que rompe as distâncias e compartilha nossos afãs e nossas alegrias. É graças a esse amor compreensivo de um Deus pai que somos filhos de Deus e irmãos entre nós. Deus, como afirma São João, nos mostra a grandeza de seu amor e nos chama a viver como filhos dele.</p>
            <p>Ler a primeira carta de João 3, 1-10.</p>
            <p>Se de verdade atuarmos como filhos de Deus não imitamos Caim, mas “dermos a vida pelos irmãos” (3, 16). Com um amor compreensivo, somos capazes de ver as razões dos outros e ser tolerantes com suas falhas. Se o Natal nos tornar compreensivos será um excelente Natal. Feliz Natal é aprender a nos colocarmos no lugar dos demais.</p>
        </div>`
      },
      {
        day: '3º Dia',
        title: '19 de Dezembro',
        content: `<div class="day-specific-content">
            <h4 class="section-title">Respeito</h4>
            <p>O terceiro dia é dedicado ao RESPEITO. Uma qualidade do amor que nos move a aceitar os outros tal como são. Graças ao respeito valorizamos a grande dignidade de toda pessoa humana feita à imagem e semelhança de Deus, embora essa pessoa esteja errada. O respeito é fonte de harmonia porque nos anima a valorizar as diferenças, como o faz um pintor com as cores ou um músico com as notas ou ritmos. Um amor respeitoso nos impede de julgar os outros, manipulá-los ou querer moldá-los a nosso modo.</p>
            <p>Sempre que penso no respeito vejo Jesus conversando amavelmente com a mulher samaritana, tal como o narra São João no capítulo quarto de seu evangelho. É um diálogo sem recriminações, sem condenações e no qual brilha a luz de uma delicada tolerância. Jesus não aprova que a mulher não conviva com seu marido, mas em vez de julgá-la, a felicita por sua sinceridade. Atua como bom pastor e nos ensina a ser respeitosos se de verdade queremos nos entender com os demais.</p>
        </div>`
      },
      {
        day: '4º Dia',
        title: '20 de Dezembro',
        content: `<div class="day-specific-content">
            <h4 class="section-title">Sinceridade</h4>
            <p>O quarto dia é dedicado à SINCERIDADE. Uma qualidade sem a qual o amor não pode subsistir, já que não há amor onde há mentira. Amar é andar na verdade, sem máscaras, sem o peso da hipocrisia e com a força de integridade.</p>
            <p>Só na verdade somos livres como anunciou Jesus Cristo: João 8, 32. Só sobre a rocha firme da verdade pode se sustentar uma relação nas crises e nos problemas. Com a sinceridade ganhamos a confiança e com a confiança chegamos ao entendimento e à unidade. O amor ensina a não agir como os egoístas e os soberbos que acreditam que sua verdade é a verdade.</p>
            <p>Se o Natal nos aproximar da verdade é um bom Natal, é uma festa em que acolhemos Jesus como luz verdadeira que vem a este mundo: João 1, 9. Luz verdadeira que nos afasta das trevas nos move a aceitar Deus como caminho, verdade e vida. Que nosso amor esteja sempre iluminado pela verdade, de modo que esteja também favorecido pela confiança.</p>
        </div>`
      },
      {
        day: '5º Dia',
        title: '21 de Dezembro',
        content: `<div class="day-specific-content">
            <h4 class="section-title">Diálogo</h4>
            <p>O quinto dia é dedicado ao DIÁLOGO. Toda a Bíblia é um diálogo amoroso e salvífico de Deus com os homens. Um diálogo que leva a seu cume e sua plenitude quando a Palavra de Deus que é Seu Filho, se faz carne, se faz homem, tal como narra São João no primeiro capítulo de seu evangelho. De Deus apoiado na sinceridade, assegurado no respeito e enriquecido pela compreensão, é o que necessitamos em todas nossas relações. Um diálogo em que diariamente “nos revestimos de misericórdia, bondade, humildade, mansidão e paciência”. Colossenses 3, 12.</p>
            <p>O diálogo sereno que brota de um sincero amor e de uma alma em paz é o melhor presente que podemos nos dar em dezembro. Assim evitamos que nossa casa seja lugar vazio de afeto onde andamos dispersos como estranhos sob o mesmo teto. Deus concede a todos o dom de nos comunicar sem ofensas, sem julgamentos, sem altivez, e sim com apreço que gera acolhida e aceitação mútua.</p>
        </div>`
      },
      {
        day: '6º Dia',
        title: '22 de Dezembro',
        content: `<div class="day-specific-content">
            <h4 class="section-title">Simplicidade</h4>
            <p>O Sexto dia é para valorizar a SIMPLICIDADE. Simplicidade que é a virtude das almas grandes e das pessoas nobres. Simplicidade que foi o adorno de Maria de Nazaré tal como ela mesma o proclama em seu canto de Magnificat. “Meu espírito se alegra em Deus meu Salvador porque olhou a humildade de sua serva” (Lucas 1, 47-48).</p>
            <p>Natal é uma boa época para desterrar o orgulho e tomar consciência de tantos males que conduzem a soberba. Nenhuma virtude nos aproxima tanto dos demais como a simplicidade e nenhum defeito nos afasta tanto como a arrogância. O amor só reina nos corações humildes, capazes de reconhecer suas limitações e de perdoar sua altivez. É graças à humildade que agimos com delicadeza, sem nos crer mais do que ninguém, imitando a simplicidade de um Deus que “se despojou de si mesmo e tomou a condição de servo” (Filipenses 2, 6-11).</p>
            <p>Crescer em simplicidade é um admirável presente para nossas relações. Recordemos que nesta pequenez há verdadeira grandeza, e que o orgulho acaba com o amor.</p>
        </div>`
      },
      {
        day: '7º Dia',
        title: '23 de Dezembro',
        content: `<div class="day-specific-content">
            <h4 class="section-title">Generosidade</h4>
            <p>Sétimo dia é para crescer em GENEROSIDADE. É a capacidade de dar com desinteresse onde o amor ganha a corrida do egoísmo. É na entrega generosa de nós mesmos que se mostra a profundidade de um amor que não se esgota nas palavras. E isso é o que celebramos no Natal: o gesto sem igual de um Deus que dá a si mesmo. Isso São Paulo destaca: “soberba também na generosidade… pois conheceis a generosidade de Nosso Senhor Jesus Cristo o qual sendo rico, por vós se fez pobre para que vos enriquecêsseis com sua pobreza”. É uma passagem bíblica em que o apóstolo convida aos Coríntios a compartilhar seus bens com os necessitados (2Cor 8, 7-15).</p>
            <p>Sabemos amar quando sabemos compartilhar, sabemos amar quando damos o melhor de nós mesmos em lugar de dar apenas coisas. Tomemos, pois, a melhor decisão: dar carinho, afeto, ternura e perdão; dar tempo e dar alegria e esperança. São os presentes que mais valem e não custam dinheiro. Demos amor, como dizia São João da Cruz: onde não há amor coloques amor, e tirarás amor.</p>
        </div>`
      },
      {
        day: '8º Dia',
        title: '24 de Dezembro',
        content: `<div class="day-specific-content">
            <h4 class="section-title">Fé</h4>
            <p>Oitavo dia é para assegurar a FÉ. Uma fé que é firme quando nasce de uma relação amistosa com o Senhor. Uma fé que é autêntica se está confirmada com as boas obras, de modo que a religião não seja apenas de rezas, ritos e tradições. Precisamos cultivar a fé com a Bíblia, a oração e a prática religiosa porque a fé é nosso melhor apoio na crise. Necessitamos de uma fé grande em nós mesmo, em Deus e nos demais. Uma fé sem vacilações como queria Jesus: Marcos 11, 23. Uma fé que ilumina o amor com a força da confiança, já que “o amor em tudo crê” (1Cor 13, 7).</p>
            <p>A FÉ é a força da vida e sem ela andamos à deriva. De fato, aquele que perdeu a fé, já não tem mais nada a perder. Que bom que cuidamos de nossa fé como se cuida de um tesouro! Que bom que nos possam saudar como à Virgem: “Feliz és tu que acreditaste” (Lc 1, 45).</p>
        </div>`
      },
      {
        day: '9º Dia',
        title: '25 de Dezembro',
        content: `<div class="day-specific-content">
            <h4 class="section-title">Esperança e Amor</h4>
            <p>Nono dia é para avivar a ESPERANÇA e o AMOR. O amor e a esperança sempre vão de mãos dadas com a fé. Por isso, em seu hino ao amor, São Paulo nos mostra que o amor crê sem limites e espera sem limites (1Cor 13, 7). Uma fé viva, um amor sem limites e uma esperança firme são o incenso, o ouro e a mirra que nos dão ânimo para viver e coragem para não cair.</p>
            <p>É graças ao amor que sonhamos com altos ideais e é graças à esperança que os alcançamos. O amor e a esperança são as asas que nos elevam à grandeza, apesar dos obstáculos e das insipidezes. Se amarmos Deus, amamos nós mesmos e amamos os outros, podemos obter o que sugere São Pedro em sua primeira carta: “Estejam sempre dispostos a dar razão de sua esperança. Com doçura, respeito e com uma boa consciência” (3, 15-16). Se acendermos a chama da esperança e o fogo do amor, sua luz radiante brilhará no novo ano depois que se apaguem as luzes do Natal.</p>
        </div>`
      }
    ]
  },
  maria_mae_deus: {
    saintName: 'Santa Maria Mãe de Deus',
    novenaTitle: 'Novena a Santa Maria Mãe de Deus',
    description: 'Comece o ano novo sob a proteção da Mãe de Deus e da Igreja.',
    image: 'https://iili.io/ffrKfol.png',
    initialPrayer: `<div class="initial-prayer-text">
        <p class="italic">Pelo Sinal da Santa Cruz ♱<br/>Em nome do Pai e do Filho e do Espírito Santo.</p>
        <h4 class="section-title">Oração inicial para todos os dias</h4>
        <div class="prayer-block">
            <p>Deus, que enviastes do Céu o vosso Filho, palavra da salvação e pão da vida, ao seio da Santíssima Virgem, concedei que, a seu exemplo, recebamos a Cristo, conservando no coração as suas palavras e celebrando na fé os seus mistérios da salvação. Por Nosso Senhor Jesus Cristo, vosso Filho, que é Deus convosco na unidade do Espírito Santo. Amém.</p>
        </div>
    </div>`,
    finalPrayer: `<div class="final-prayer-text">
        <h4 class="section-title">Oração Final</h4>
        <div class="prayer-block">
            <p>Virgem Mãe de Deus, em vosso seio Se fez homem Aquele que não cabe em todo o universo. Salve, Santa Mãe, que destes à luz o Rei, que governa o céu e a terra pelos séculos dos séculos. Bendita seja a Virgem Maria, que trouxe em seu ventre o Filho de Deus Pai. Amém.</p>
            <p class="mt-4"><b>Oremos:</b> Concedei, Senhor, que, assim como a Virgem Santa Maria concebeu em seu Espírito, antes de conceber em seu ventre, o seu Filho descido do Céu, também nós, tendo-O recebido na fé, O manifestemos com obras dignas de santidade. Ele que é Deus convosco na unidade do Espírito Santo. Amém.</p>
        </div>
        <p class="mt-4 font-semibold italic">Em nome do Pai e do Filho e do Espírito Santo.</p>
    </div>`,
    days: [
      {
        day: '1º Dia',
        title: '1º Dia',
        content: `<div class="day-specific-content">
            <p>Bendita sejais, ó Virgem Maria, que trouxestes no ventre quem fez o universo; vós destes a vida a quem nos criou e virgem sereis para sempre, ó Maria! Maria, alegra-te, ó cheia de graça, o Senhor é contigo. Ó Redentor do mundo, do eterno Pai gerado já antes do universo, qual Filho bem-amado. Do Pai luz e esplendor, nossa esperança eterna, ouvi dos Vossos servos a prece humilde e terna. A glória a Vós, Jesus, nascido de Maria com vosso Pai e o Espírito louvores cada dia.</p>
            <p class="mt-4">℣. Cristo, nascido da Virgem Maria, criança admirável e príncipe da paz, – dai a paz ao mundo inteiro.</p>
            <p>℟. Filho da Virgem Maria, tende piedade de nós!</p>
        </div>`
      },
      {
        day: '2º Dia',
        title: '2º Dia',
        content: `<div class="day-specific-content">
            <p>Bendita sejais, ó Virgem Maria, que trouxestes no ventre quem fez o universo; vós destes a vida a quem nos criou e virgem sereis para sempre, ó Maria! Maria, alegra-te, ó cheia de graça, o Senhor é contigo. Lembrai, autor da vida, nascido de Maria, que nossa forma humana tomastes, neste dia. A glória deste dia atesta um fato novo, que vós, do Pai descendo, salvastes vosso povo. A glória a Vós, Jesus, nascido de Maria com vosso Pai e o Espírito louvores cada dia.</p>
            <p class="mt-4">℣. Cristo, nascido da Virgem Maria, nosso Rei e nosso Deus, que pelo Vosso nascimento elevastes a natureza humana, – dai-nos a graça de Vos honrar todos os dias de nossa vida pela fé e pelas obras.</p>
            <p>℟. Filho da Virgem Maria, tende piedade de nós!</p>
        </div>`
      },
      {
        day: '3º Dia',
        title: '3º Dia',
        content: `<div class="day-specific-content">
            <p>Bendita sejais, ó Virgem Maria, que trouxestes no ventre quem fez o universo; vós destes a vida a quem nos criou e virgem sereis para sempre, ó Maria! Maria, alegra-te, ó cheia de graça, o Senhor é contigo. Saúdam vossa vinda o céu, a terra, o mar, e todo ser que vive entoa o seu cantar. E nós, por Vosso sangue remidos como povo, vos celebramos hoje, cantando um canto novo. A glória a Vós, Jesus, nascido de Maria com vosso Pai e o Espírito louvores cada dia.</p>
            <p class="mt-4">℣. Cristo, nascido da Virgem Maria, vós, que vos tornastes semelhantes a nós, – concedei que nos assemelhemos a Vós.</p>
            <p>℟. Filho da Virgem Maria, tende piedade de nós!</p>
        </div>`
      },
      {
        day: '4º Dia',
        title: '4º Dia',
        content: `<div class="day-specific-content">
            <p>Bendita sejais, ó Virgem Maria, que trouxestes no ventre quem fez o universo; vós destes a vida a quem nos criou e virgem sereis para sempre, ó Maria! Maria, alegra-te, ó cheia de graça, o Senhor é contigo. Eis do Senhor a porta aberta, de toda a graça portadora. Passou o Rei e permanece fechada, como sempre fora. Filho do Pai supremo, o Esposo e Redentor sai, triunfante, do seio virgem de Maria, numa corrida de gigante. Do Pai gerado como Deus, louvor a Vós, Cristo Jesus, a quem, fecunda pelo Espírito, a Virgem Mãe tem dado à luz.</p>
            <p class="mt-4">℣. Cristo, nascido da Virgem Maria, Vós, que Vos tornastes cidadão do nosso mundo, – tornai-nos cidadãos do Vosso reino Celeste.</p>
            <p>℟. Filho da Virgem Maria, tende piedade de nós!</p>
        </div>`
      },
      {
        day: '5º Dia',
        title: '5º Dia',
        content: `<div class="day-specific-content">
            <p>Bendita sejais, ó Virgem Maria, que trouxestes no ventre quem fez o universo; vós destes a vida a quem nos criou e virgem sereis para sempre, ó Maria! Maria, alegra-te, ó cheia de graça, o Senhor é contigo. Da Mãe sois honra e alegria, nossa esperança verdadeira, pedra que desce da montanha, de graça enchendo a terra inteira. Exulte toda a criatura, porque nos veio o Salvador. Para remir os que criara, nasceu do mundo o Criador. Do Pai gerado como Deus, louvor a vós, Cristo Jesus, a quem, fecunda pelo Espírito, a Virgem Mãe tem dado à luz.</p>
            <p class="mt-4">℣. Cristo, nascido da Virgem Maria, Vós concedestes a Maria as alegrias da maternidade; – fazei que todos os pais possam alegrar-se pelo dom dos filhos.</p>
            <p>℟. Filho da Virgem Maria, tende piedade de nós!</p>
        </div>`
      },
      {
        day: '6º Dia',
        title: '6º Dia',
        content: `<div class="day-specific-content">
            <p>Bendita sejais, ó Virgem Maria, que trouxestes no ventre quem fez o universo; vós destes a vida a quem nos criou e virgem sereis para sempre, ó Maria! Maria, alegra-te, ó cheia de graça, o Senhor é contigo. Raiz judaica floresce, a virgem mãe dá à luz. Maria ao mundo oferece Quem vem salvá-lo: Jesus. No manto azul agasalha e envolve o Filho de Deus. Reclina em berço de palha quem com seu Pai fez os céus. Ao Pai e ao Espírito unido, Filho de Deus, luz da luz. Por virgem mãe concedido.</p>
            <p class="mt-4">℣. Cristo, nascido da Virgem Maria, rei pacífico, Vosso reino é justiça e paz; – dai-nos a graça de seguirmos o caminho da paz.</p>
            <p>℟. Filho da Virgem Maria, tende piedade de nós!</p>
        </div>`
      },
      {
        day: '7º Dia',
        title: '7º Dia',
        content: `<div class="day-specific-content">
            <p>Bendita sejais, ó Virgem Maria, trouxestes no ventre quem fez o universo; Vós destes a vida a quem nos criou e virgem sereis para sempre, ó Maria! Maria, alegra-te, ó cheia de graça, o Senhor é contigo. O mesmo que lei nos dera, nasce debaixo da lei. O leite materno espera, escravo torna-se o rei. Desponta um sol mais fecundo, da morte funde os grilhões. Maria traz Deus ao mundo, vinde adorá-lO, nações! Ao Pai e ao Espírito unido, Filho de Deus, luz da luz. Por virgem mãe concedido, Vos adoramos, Jesus!</p>
            <p class="mt-4">℣. Cristo, nascido da Virgem Maria, viestes fazer da humanidade o povo santo de Deus; – congregai todos os povos na unidade.</p>
            <p>℟. Filho da Virgem Maria, tende piedade de nós!</p>
        </div>`
      },
      {
        day: '8º Dia',
        title: '8º Dia',
        content: `<div class="day-specific-content">
            <p>Ó Mãe do Redentor, do céu ó porta, ao povo que caiu, socorre e exorta, pois busca levantar-se, Virgem pura, nascendo o Criador da criatura: tem piedade de nós e ouve, suave, o anjo te saudando com seu Ave! Bendita sejais, ó Virgem Maria. trouxestes no ventre quem fez o universo; Vós destes a vida a quem nos criou e virgem sereis para sempre, ó Maria! Maria, alegra-te, ó cheia de graça, o Senhor é contigo.</p>
            <p class="mt-4">℣. Cristo, nascido da Virgem Maria, pelo Vosso nascimento santificastes a vida familiar; – promovei a paz e a união em todas as famílias.</p>
            <p>℟. Filho da Virgem Maria, tende piedade de nós!</p>
        </div>`
      },
      {
        day: '9º Dia',
        title: '9º Dia',
        content: `<div class="day-specific-content">
            <p>Salve Rainha mãe de Deus, és Senhora nossa mãe, nossa doçura, nossa luz, doce Virgem Maria. Nós a ti clamamos, filhos exilados, nós a ti voltamos nosso olhar confiante. Volta para nós, ó mãe, teu semblante de amor. Dá-nos teu Jesus, ó mãe, quando a noite passar. Salve Rainha Mãe de Deus, és auxílio dos cristãos, ó Mãe clemente, Mãe piedosa, doce Virgem Maria. Bendita sejais, ó Virgem Maria. que trouxestes no ventre quem fez o universo; vós destes a vida a quem nos criou e virgem sereis para sempre, ó Maria! Maria, alegra-te, ó cheia de graça, o Senhor é contigo.</p>
            <p class="mt-4">℣. Cristo, nascido da Virgem Maria, quisestes nascer no tempo; – concedei aos falecidos nascerem para a vossa eternidade.</p>
            <p>℟. Filho da Virgem Maria, tende piedade de nós!</p>
        </div>`
      }
    ]
  },
  epifania: {
    saintName: 'Epifania do Senhor',
    novenaTitle: 'Novena da Epifania',
    description: 'Contemple a manifestação de Jesus aos Reis Magos e a todos os povos.',
    image: 'https://iili.io/ffgF6ge.jpg',
    initialPrayer: `<div class="initial-prayer-text">
        <h4 class="section-title">Oração para todos os dias</h4>
        <div class="prayer-block">
            <p>Em Vosso nascimento, ó Jesus, uma estrela de singular esplendor se apareceu no céu do Oriente e conduziu a Belém os reis, representantes dos longínquos povos pagãos, assim como o anjo radiante de luz havia convocado ao Vosso berço os pastores, representantes do povo eleito. Até os gentios, como os judeus, tiveram de reconhecer em Vós, um pobre e frágil infante, o onipotente Rei dos séculos, o Salvador da humanidade. Nem cetro, nem coroa demonstravam a Vossa dignidade real; nem doces melodias, nem coros de anjos pairando sobre Vosso lugar de repouso revelavam Sua natureza divina; mas a estrela radiante sobre o Vosso mísero teto assinalava o céu, a terra, o universo inteiro como Vossa possessão absoluta, e os reis, que pela inspiração da Vossa graça vieram prontamente desde longe, não curando dos perigos, vencendo dificuldades e abraçando todo sacrifício, chegaram aos Vossos pés, curvando seus joelhos e testas em reverência, adorando-vos e oferecendo-vos ouro, incenso e mirra. Sedentos de Deus, andaram afainados em busca de Vós; e Vós, de fato, Vos revelastes prodigiosamente ainda no berço, enchendo-os de inefável júbilo e transformando-os nos primeiros mensageiros de Vossa glória aos povos do Oriente.</p>
            <p>Após a aparição da estrela, que bastou para tornar os reis Vossos ardentes seguidores, com quantos prodígios, ó Jesus, haveis demonstrado Vossa divindade! Contudo, quanta escuridão domina ainda a nossa pobre mente! Com quanta lentidão nossa vontade cede aos impulsos amorosos de Vossa graça, isso quando não resiste diretamente a Vós! Concede-nos, pois, ó Jesus, a força de responder sempre pronta e generosamente aos Vossos chamados e a deixar que a luz divina da fé, por Vós acesa sobre nós ainda no nosso berço, nos acompanhe sempre no caminho da vida, até que, bem-aventurados, possamos fixar as nossas pupilas em Vós no esplendor da glória.</p>
            <p class="mt-4">℣. Cristo a nós se manifestou. Aleluia.<br/>
            ℟. Vinde, adoremos. Aleluia.</p>
            <p class="mt-4"><b>Oremos:</b> Deus eterno e Todo-poderoso, Senhor do Céu e da Terra, que se revela aos pequeninos, concedei-nos, Vos pedimos, que, venerando os mistérios sacrossantos do Vosso Filho, o divino Infante Jesus, e seguindo-os com digna imitação, possamos alcançar o reino dos céus prometido às criancinhas. Pelo mesmo Cristo, Nosso Senhor. Amém.</p>
        </div>
    </div>`,
    finalPrayer: `<div class="final-prayer-text">
        <h4 class="section-title">Oração à Nossa Senhora da Epifania</h4>
        <div class="prayer-block">
            <p>Ó Senhora da Epifania, pelo vosso poder, glória e amor, mostrai-nos vossa salvação, Jesus Cristo. Assim como os pastores de Belém foram até Vós há tanto tempo, colocamo-nos diante de Vós neste momento. À Jesus Cristo, reinando em vossos braços, prostramo-nos em admiração. Ó Rainha e amiga íntima, lembrai-vos de nossa pobreza. Nós vos suplicamos, ó terna Mãe, tomai-nos pelas mãos e ouçais de perto os desejos e necessidades dos nossos corações. Maria, lembrai-vos … (mencionar intenção).</p>
            <p>Prometemos reformar as nossas vidas. Pela vossa poderosa intercessão, alcançai-nos a magnífica manifestação de vosso divino Filho nas vidas daqueles pelos quais tanto rezamos. Mística, gloriosa mulher coroada de estrelas, alcançai os milagres e sinais celestiais que nossos queridos necessitam para encontrar e abraçar Jesus Cristo, o Rei dos reis. Vos imploramos, revelai a nós, vossos pobres filhos, os tesouros de vosso Coração nesta hora de necessidade. Amém.</p>
        </div>
    </div>`,
    days: [
      {
        day: '1º Dia',
        title: '1º Dia',
        content: `<div class="day-specific-content">
            <p>Ó santos reis, vivíeis em contínua expectativa do nascer da Estrela de Jacó, a qual anunciaria o nascimento do verdadeiro Sol da justiça; alcançai-nos um aumento da fé e da caridade, e a graça de viver em contínua esperança de contemplar um dia a luz da glória celestial e da alegria eterna.</p>
            <p class="mt-4 font-semibold">(Glória ao Pai)</p>
        </div>`
      },
      {
        day: '2º Dia',
        title: '2º Dia',
        content: `<div class="day-specific-content">
            <p>Ó santos reis, que ao primeiro sinal da maravilhosa estrela deixastes vossas pátrias para buscar ao recém-nascido Rei dos judeus, obtende-nos a graça de corresponder com vivacidade a toda inspiração divina.</p>
            <p class="mt-4 font-semibold">(Glória ao Pai)</p>
        </div>`
      },
      {
        day: '3º Dia',
        title: '3º Dia',
        content: `<div class="day-specific-content">
            <p>Ó santos reis, que não considerastes nem a severidade da estação, nem as inconveniências da viagem a fim de encontrarem o recém-nascido Messias, alcançai-nos a graça de não nos deixarmos desencorajar por quaisquer dificuldades que possamos nos deparar no caminho da salvação.</p>
            <p class="mt-4 font-semibold">(Glória ao Pai)</p>
        </div>`
      },
      {
        day: '4º Dia',
        title: '4º Dia',
        content: `<div class="day-specific-content">
            <p>Ó santos reis, que, quando desertados pela estrela na cidade de Jerusalém questionaram, humildemente e sem respeito humano, os chefes da Igreja, sobre o local onde poderiam descobrir o objeto de vossa jornada, obtende-nos a graça de fazer recurso, com fé e humildade, em todas as nossas dúvidas e perplexidades, ao conselho de nossos superiores, que fazem as vezes de Deus na Terra.</p>
            <p class="mt-4 font-semibold">(Glória ao Pai)</p>
        </div>`
      },
      {
        day: '5º Dia',
        title: '5º Dia',
        content: `<div class="day-specific-content">
            <p>Ó santos reis, que se alegraram com o reaparecimento da estrela que vos levou a Belém, alcançai-nos de Deus a graça de, permanecendo-lhe sempre fiéis nas aflições, sermos consolados neste século pela Sua graça, e na eternidade pela Sua glória.</p>
            <p class="mt-4 font-semibold">(Glória ao Pai)</p>
        </div>`
      },
      {
        day: '6º Dia',
        title: '6º Dia',
        content: `<div class="day-specific-content">
            <p>Ó santos reis, que adentrando cheios de fé no estábulo de Belém, prostraram-se por terra para adorar ao recém-nascido Rei dos judeus, apesar de cercado apenas por sinais de pobreza e fragilidade, alcançai-nos do Senhor uma fé viva na presença real de Jesus Cristo no Santíssimo Sacramento, o verdadeiro espírito da pobreza e uma caridade semelhante a de Cristo pelos pobres e aflitos.</p>
            <p class="mt-4 font-semibold">(Glória ao Pai)</p>
        </div>`
      },
      {
        day: '7º Dia',
        title: '7º Dia',
        content: `<div class="day-specific-content">
            <p>Ó santos reis, que ofereceram a Jesus Cristo ouro, incenso e mirra, reconhecendo-o assim como Rei, Deus e Homem, alcançai-nos a graça de nunca nos apresentarmos diante d’Ele com mãos vazias, mas que possamos sempre oferecer-lhe o ouro da caridade, o incenso da oração e a mirra da penitência e mortificação.</p>
            <p class="mt-4 font-semibold">(Glória ao Pai)</p>
        </div>`
      },
      {
        day: '8º Dia',
        title: '8º Dia',
        content: `<div class="day-specific-content">
            <p>Ó santos reis, que, avisados pelo anjo para não regressarem a Herodes, retornaram às suas pátrias por caminho diverso, alcançai-nos do Senhor a graça de, após O termos reencontrado na verdadeira contrição, possamos evitar os perigos de novamente O perdermos.</p>
            <p class="mt-4 font-semibold">(Glória ao Pai)</p>
        </div>`
      },
      {
        day: '9º Dia',
        title: '9º Dia',
        content: `<div class="day-specific-content">
            <p>Ó santos reis, que foram os primeiros dentre os gentios a serem chamados ao conhecimento de Jesus Cristo, e que perseveraram na fé até à morte, alcançai-nos do Senhor a graça de vivermos sempre em conformidade com as nossas promessas do batismo, sempre caminhando para uma vida de fé, para que, como vós, possamos alcançar a visão beatífica do Deus que agora é objeto de nossa fé.</p>
            <p class="mt-4 font-semibold">(Glória ao Pai)</p>
        </div>`
      }
    ]
  },

  // Janeiro Novenas

  santo_antao: {
    saintName: 'Santo Antão',
    novenaTitle: 'Novena a Santo Antão',
    description: 'Pai do monaquismo cristão e protetor contra as tentações.',
    image: 'https://i.pinimg.com/736x/cf/a9/b6/cfa9b672576ad12bf372aecd49d2ef60.jpg',
    initialPrayer: `<div class="initial-prayer-text"><div class="prayer-block"><p>Pelo sinal da Santa Cruz, livrai-nos, Deus, nosso Senhor, dos nossos inimigos. Em nome do Pai, e do Filho, e do Espírito Santo. Amém.</p></div></div>`,
    finalPrayer: `<div class="final-prayer-text"><div class="w-16 h-px bg-white/20 my-6 mx-auto"></div><h4 class="section-title">Oração Final</h4><div class="prayer-block"><p>Ó Deus, que permitistes que, mesmo na solidão de uma gruta, no deserto, o demónio perturbasse Santo Antão com violentas tentações, mas lhe destes força de vencê-las, enviai-me, do céu, o Vosso socorro, because eu vivo num ambiente minado de tentações que me agridem, pelo celular, rádio, televisão, novelas, bailes, cinemas, revistas, propagandas e maus companheiros.</p><p>Santo Antão, ficai sempre ao meu lado; vós que vencestes o demônio, na aparência de um bicho imundo, me dareis força na tentação. Amém.</p><p class="mt-4 font-semibold">Santo Antão, rogai por nós!</p></div></div>`,
    days: [
      {
        day: '1º Dia',
        title: 'A Vocação de Antão',
        content: `<div class="day-specific-content"><p>Santo Antão nasceu em 251 na cidade de Conam no Egito. Seus pais eram de boa linhagem e abastados. Depois da morte de seus pais ficou só com sua única irmã, muito mais jovem. Tinha então uns dezoito a vinte anos, e tomou cuidado da casa e de sua irmã. Menos de seis meses depois da morte de seus pais, ia, como de costume, a caminho da igreja. Enquanto caminhava, ia meditando e refletia como os apóstolos deixaram tudo e seguiram o Salvador; como, segundo se refere nos Atos dos apóstolos, os fiéis vendiam o que tinham e o punham aos pés dos Apóstolos para distribuição entre os necessitados, e quão grande é a esperança prometida nos céus para os que assim fazem. Pensando estas coisas, entrou na igreja. Aconteceu que nesse momento se estava lendo o evangelho, e ouviu a passagem em que o Senhor disse ao jovem rico: “Se queres ser perfeito, vende o que tens e dá-o aos pobres, depois vem, segue-me e terás um tesouro no céu”.</p><p>Mas o demônio, que odeia e inveja o bem, não podia ver tal resolução num jovem, e se pôs a empregar suas velhas táticas também contra ele. Primeiro tratou de fazê-lo desertar da vida ascética, recordando-lhe sua propriedade, o cuidado de sua irmã, os apegos da parentela, o amor do dinheiro, o amor à glória, os inumeráveis prazeres da mesa e todas as demais coisas agradáveis da vida. Finalmente apresentou-lhe a austeridade e tudo o que se segue a essa virtude, sugerindo-lhe que o corpo é fraco e o tempo é longo. Em resumo, despertou em sua mente toda uma nuvem de argumentos, procurando fazê-lo abandonar seu firme propósito. O inimigo viu, no entanto, que era impotente em face da determinação de Antão, e que antes era ele que estava sendo vencido pela firmeza do homem, derrotado por sua sólida fé e sua constante oração.</p></div>`
      },
      {
        day: '2º Dia',
        title: 'Luta contra o Demônio',
        content: `<div class="day-specific-content"><p>Santo Antão estava um dia lutando contra o Demônio e travava com ele uma verdadeira luta física. Então, invocou a presença de Nosso Senhor. Clamou por Jesus, dizendo: “Salvai-me, Senhor!” E, de tanto clamar: “Kyrie Eleison!”, o Demônio, então, se retirou. Naquele momento, que Antão finalmente conseguiu a vitória sobre o Demônio, Jesus apareceu.</p><p>Santo Antão ficou um pouco triste. Olhou para Jesus e disse:</p><p class="italic">“Senhor! Onde estáveis when eu mais necessitava de vós?”</p><p>Então, Jesus com um olhar de misericórdia, olhou para Antão e disse:</p><p class="italic">“Antão, meu filho, Eu estava aqui o tempo todo. Mas, Eu queria te ver lutar.”</p><p>Deus gosta de nos ver lutar. Mesmo que não tenhamos o grau de virtude e não tenhamos recebido esta eleição, a missão específica de lutar fisicamente com o demônio, todos nós temos a missão de lutar. Talvez essa seja a principal razão para que Deus permita isso com esses homens Santos.</p></div>`
      },
      {
        day: '3º Dia',
        title: 'Servir a Deus hoje',
        content: `<div class="day-specific-content"><p>“Nada mais útil pode ser ao Cristão do que pensar todos os dias: Estou começando a servir a Deus e o dia de hoje pode ser o meu último” – Santo Antão.</p><p>O demônio jactando-se de suas tentações carnais, pois são sua preferida artimanha contra os jovens, atacou o jovem molestando-o de noite e instigando-o de dia, de tal modo que até os que viam Antão podiam aperceber-se da luta que se travava entre os dois. O inimigo queria sugerir-lhe pensamentos baixos, mas ele os dissipava com orações; procurava incitá-lo ao prazer, mas Antão, envergonhado, cingia seu corpo com sua fé, orações e jejuns. Atreveu-se então o perverso demônio a disfarçar-se em mulher e fazer-se passar por ela em todas as formas possíveis durante a noite, só para enganar Antão.</p><p>Mas ele encheu seus pensamentos de Cristo, refletiu sobre a nobreza da alma criada por Ele, e sua espiritualidade, e assim apagou o carvão ardente da tentação. E when de novo o inimigo lhe sugeriu o encanto sedutor do prazer, Antão, enfadado com razão, e entristecido, manteve seus propósitos com a ameaça do fogo e dos vermes. Sustentando isto no alto, como escudo, passou por tudo sem se dobrar. Toda essa experiência levou o inimigo a envergonhar-se. Em verdade, ele, que pensara ser como Deus, fez-se louco ante a resistência de um homem. Ele que em sua presunção desdenhava carne e sangue, foi agora derrotado por um homem de carne em sua carne. Verdadeiramente o Senhor trabalhava com este homem, Ele que por nós tornou-se carne e deu a seu corpo a vitória sobre o demônio. Assim, todos os que combatem seriamente podem dizer:</p><p class="italic">“Não eu, mas a graça de Deus comigo”.</p></div>`
      },
      {
        day: '4º Dia',
        title: 'Discernimento dos Espíritos',
        content: `<div class="day-specific-content"><p>Santo Antão havia descido para visitar as celas exteriores. Quando convidado a subir a um barco e orar com os monges, só ele percebeu um mau cheiro horrível e sumamente penetrante. A tripulação disse que havia a bordo pescado e alimento salgado e que o cheiro vinha disso, mas ele insistiu que o odor era diferente.</p><p>Enquanto estava falando, um jovem que tinha um demônio e subira a bordo pouco antes como clandestino, soltou de repente um guincho. Repreendido em nome de nosso Senhor Jesus Cristo, foi-se o demônio, e o homem voltou à normalidade; todos então se aperceberam de que o mau cheiro vinha do demônio.</p></div>`
      },
      {
        day: '5º Dia',
        title: 'Dons de Revelação',
        content: `<div class="day-specific-content"><p>Dois dos irmãos da ordem de Santo Antão estavam em viagem para vê-lo, e no caminho a água acabou. Um morreu e o outro estava a ponto de morrer. Já não tinha forças para andar, mas jazia no chão esperando também a morte. Sentado na montanha, Antão chamou dois monges que casualmente estavam ali e os compeliu a se apressarem:</p><p class="italic">“Tomem um jarro d’água e corram descendo pelo caminho do Egito; vinham dois, um acaba de morrer e o outro também morrerá se vocês não se apressarem. Foi-me revelado isto agora na oração”.</p><p>Foram-se os monges, acharam um morto e o enterraram. Ao outro fizeram-no reviver com água e o levaram ao ancião. A distância era de um dia de viagem. Agora, se alguém pergunta porque não falou antes de morrer o outro, sua pergunta é injustificada. O decreto de morte não passou por Antão, mas por Deus que a determinou para um, enquanto revelava a condição do outro. Quanto a Antão, o admirável é que, enquanto estava na montanha com seu coração tranquilo, mostrou-lhe o Senhor coisas distantes.</p></div>`
      },
      {
        day: '6º Dia',
        title: 'Vitória sobre a Vaidade',
        content: `<div class="day-specific-content"><p>Finalmente, when o dragão não pôde conquistar o jovem Antão nem por estes últimos meios, mas viu-se arrojado de seu coração, rangendo seus dentes, como diz a Escritura, mudou, por assim dizer, sua pessoa. Tal como é seu coração, assim lhe apareceu: como um moço preto; e como inclinando-se diante dele, já não o molestou com pensamentos, pois o impostor tinha sido lançado fora, mas usando voz humana disse-lhe:</p><p>“A muitos enganei e venci; mas agora que te ataquei a ti e teus esforços, como fiz com tantos outros, mostrei-me demasiadamente fraco”. “Quem és tu que me falas assim?”, perguntou-lhe Antão.</p><p>Apressou-se o outro a replicar com a voz lastimosa:</p><p class="italic">“Sou o amante da fornicação. Minha missão é espreitar a juventude e seduzi-la. Chamam-me o espirito de fornicação. A quantos eu enganei, decididos que estavam a cuidar de seus sentidos! A quantas pessoas castas seduzi com minhas lisonjas! Eu sou aquele por cuja causa o profeta censura os decaídos: ‘Foram enganados pelo espírito da fornicação’. Sim, fui eu que os levei à queda. Fui eu que tanto te molestei e tão a miúdo fui vencido por ti”.</p><p>Antão deu, pois, graças ao Senhor e armando-se de coragem contra ele, disse:</p><p>“És então inteiramente desprezível; és negro em tua alma, e tão débil como um menino. Doravante já não me causas nenhuma preocupação, because o Senhor está comigo e me auxilia: ‘Verei a derrota dos meus adversários’ “.</p><p>Ouvindo isto, o negro desapareceu imediatamente, inclinando-se a tais palavras e temendo acercar-se do homem. Mesmo com essa primeira vitória de Antão sobre o demônio; ou melhor, digamos que este singular êxito em Antão foi do Salvador, que “condenou o pecado na carne, a fim de que a justificação, prescrita na Lei fosse realizada em nós, que vivemos não segundo a carne, mas segundo o Espírito”. Mas Antão não se descuidou nem se acreditou garantindo por si mesmo pelo simples fato de se ter o demônio lançado a seus pés; tampouco o inimigo, ainda que vencido no combate, deixou de estar-lhe à espreita. Andava dando voltas em redor, como um leão, buscando uma ocasião contra ele.</p></div>`
      },
      {
        day: '7º Dia',
        title: 'Austeridade e Perseverança',
        content: `<div class="day-specific-content"><p>Antão tendo aprendido nas Escrituras quão diversos são os enganos do maligno, praticou seriamente a vida ascética, tendo em conta que, se não pudesse seduzir seu coração pelo prazer do corpo, trataria certamente de enganá-lo por algum outro método; because o amor do demônio é o pecado. Resolveu, por isso, acostumar-se a um modo mais austero de vida. Mortificou seu corpo sem mais, e o sujeitou, para não acontecer que, tendo vencido uma ocasião, perdesse em outra. Muitos se maravilhavam de suas austeridades, porém ele próprio as suportava com facilidade. O zelo que havia penetrado sua alma por tanto tempo transformou-se pelo costume em segunda natureza, de modo que ainda a menor inspiração recebida de outros levava-o a responder com grande entusiasmo. Por exemplo, observava as vigílias noturnas com tal determinação, que a miúdo passava toda a noite sem dormir, e isso não só uma vez, mas muitas, para admiração de todos. Assim também comia só uma vez ao dia, depois do cair do sol; às vezes cada dois dias, e com frequência tomava seu alimento só depois de quatro dias. Sua alimentação consistia em pão e sal; como bebida tomava só água. Não necessitamos sequer mencionar carne ou vinho, because tais coisas tampouco se encontravam entre os demais ascetas. Contentava-se em dormir sobre uma esteira, embora regularmente o fizesse sobre o simples chão. Desprezava o uso de unguentos para a pele, dizendo que os jovens devem praticar a vida ascética com seriedade e não andar buscando coisas que amolecem o corpo; deviam antes acostumar-se ao trabalho duro, tendo em conta as palavras do Apóstolo: “É na fraqueza que se revela minha força”. Dizia que as energias da alma aumentam quanto mais débeis são os desejos do corpo.</p></div>`
      },
      {
        day: '8º Dia',
        title: 'A Montanha Interior',
        content: `<div class="day-specific-content"><p>Assim esteve sozinho na Montanha Interior, dando seu tempo à oração e à prática da vida ascética. Os irmãos que foram em sua busca rogaram-lhe que lhes permitisse ir cada mês e levar-lhe azeitonas, legumes e azeite, pois agora já era ancião. De seus visitantes soubemos quantos combates teve de suportar enquanto viveu ali, “não contra carne e sangue”, como está escrito, mas em luta com os demônios. Também ali ouviram tumultos e muitas vozes e clamor como de armas.</p><p>À noite viram a montanha encher-se de vida com animais selvagens. Viram-no também lutando como com inimigos visíveis, e orando contra eles. A um que o visitou falou-lhe palavras de alento enquanto ele próprio mantinha-se firme na contenda, de joelhos e orando ao Senhor. Era realmente notável que, sozinho como estava nesse despovoado, nunca desmaiasse ante os ataques dos demônios, nem tampouco, com todos os animais e répteis que havia, tivesse medo de sua ferocidade. Como está na Escritura, ele realmente “confiava no Senhor como o monte de Sião”, com ânimo inquebrantável e intrépido. Assim os demônios antes fugiam dele, e os animais selvagens fizeram paz com ele, como está escrito.</p></div>`
      },
      {
        day: '9º Dia',
        title: 'Vitória Final',
        content: `<div class="day-specific-content"><p>O mau pôs estreita guarda sobre Antão e rangeu os dentes contra ele, como o disse Davi no salmo, mas Antão foi animado pelo Salvador, não sendo danificado por essa vilania e sutil estratégia. Enviou-lhe animais selvagens enquanto estava em suas vigílias noturnas, e em plena noite todas as hienas do deserto saíram de suas tocas e o rodearam. Tendo-o no centro, abriam suas faces e ameaçavam mordê-lo. Ele, porém, conhecendo bem as manhas do inimigo, disse-lhes:</p><p>“Se receberam poder para fazer isto contra mim, estou disposto a ser devorado; mas se foram enviadas pelo demônio, saiam imediatamente, because sou servidor de Cristo”.</p><p>Enquanto Antão dizia isto, fugiram como açoitados pelo látego dessa palavra.</p><p>Poucos dias depois, enquanto estava trabalhando, because o trabalho sempre era parte de seu propósito, alguém chegou à porta e puxou a corda com que trabalhava. Estava fazendo cestos que dava a seus visitantes em troca do que lhe traziam. Levantou-se e viu um monstro que parecia homem até as coxas, mas com pernas e pés de asno. Antão fez simplesmente o sinal da cruz e disse:</p><p class="italic">“Sou servidor de Cristo. Se foste enviado contra mim, aqui estou”.</p><p>O monstro, porém, com seus demônios, fugiu tão rápido que sua própria rapidez o fez cair e morrer. A morte do monstro veio a significar o fracasso dos demônios: fizeram o que puderam para que saísse do deserto e não o conseguiram.</p></div>`
      }
    ]
  },
  sao_sebastiao: {
    saintName: 'São Sebastião',
    novenaTitle: 'Novena a São Sebastião',
    description: 'Mártir e defensor da fé contra a peste e a fome.',
    image: 'https://placehold.co/400x400?text=Sao+Sebastiao',
    initialPrayer: `<div class="initial-prayer-text"><p class="italic">TODO: Inserir oração inicial</p></div>`,
    finalPrayer: `<div class="final-prayer-text"><p class="italic">TODO: Inserir oração final</p></div>`,
    days: Array.from({ length: 9 }, (_, i) => ({
      day: `${i + 1}º Dia`,
      title: 'Meditação do Dia',
      content: `<div class="day-specific-content"><p>TODO: Inserir meditação para o ${i + 1}º dia.</p></div>`
    }))
  },
  sao_francisco_sales: {
    saintName: 'São Francisco de Sales',
    novenaTitle: 'Novena a São Francisco de Sales',
    description: 'Doutor da Igreja e padroeiro dos escritores e jornalistas.',
    image: 'https://placehold.co/400x400?text=Sao+Francisco+Sales',
    initialPrayer: `<div class="initial-prayer-text"><p class="italic">TODO: Inserir oração inicial</p></div>`,
    finalPrayer: `<div class="final-prayer-text"><p class="italic">TODO: Inserir oração final</p></div>`,
    days: Array.from({ length: 9 }, (_, i) => ({
      day: `${i + 1}º Dia`,
      title: 'Meditação do Dia',
      content: `<div class="day-specific-content"><p>TODO: Inserir meditação para o ${i + 1}º dia.</p></div>`
    }))
  },
  santo_tomas_aquino: {
    saintName: 'Santo Tomás de Aquino',
    novenaTitle: 'Novena a Santo Tomás de Aquino',
    description: 'Doutor Angélico, padroeiro dos estudantes e teólogos.',
    image: 'https://placehold.co/400x400?text=Santo+Tomas',
    initialPrayer: `<div class="initial-prayer-text"><p class="italic">TODO: Inserir oração inicial</p></div>`,
    finalPrayer: `<div class="final-prayer-text"><p class="italic">TODO: Inserir oração final</p></div>`,
    days: Array.from({ length: 9 }, (_, i) => ({
      day: `${i + 1}º Dia`,
      title: 'Meditação do Dia',
      content: `<div class="day-specific-content"><p>TODO: Inserir meditação para o ${i + 1}º dia.</p></div>`
    }))
  },
  sao_joao_bosco: {
    saintName: 'São João Bosco',
    novenaTitle: 'Novena a São João Bosco',
    description: 'Pai e mestre da juventude.',
    image: 'https://placehold.co/400x400?text=Dom+Bosco',
    initialPrayer: `<div class="initial-prayer-text"><p class="italic">TODO: Inserir oração inicial</p></div>`,
    finalPrayer: `<div class="final-prayer-text"><p class="italic">TODO: Inserir oração final</p></div>`,
    days: Array.from({ length: 9 }, (_, i) => ({
      day: `${i + 1}º Dia`,
      title: 'Meditação do Dia',
      content: `<div class="day-specific-content"><p>TODO: Inserir meditação para o ${i + 1}º dia.</p></div>`
    }))
  },
  ns_candeias: {
    saintName: 'Nossa Senhora das Candeias',
    novenaTitle: 'Novena a N.S. das Candeias',
    description: 'Celebração da Apresentação do Senhor e Purificação de Maria.',
    image: 'https://placehold.co/400x400?text=NS+Candeias',
    initialPrayer: `<div class="initial-prayer-text"><p class="italic">TODO: Inserir oração inicial</p></div>`,
    finalPrayer: `<div class="final-prayer-text"><p class="italic">TODO: Inserir oração final</p></div>`,
    days: Array.from({ length: 9 }, (_, i) => ({
      day: `${i + 1}º Dia`,
      title: 'Meditação do Dia',
      content: `<div class="day-specific-content"><p>TODO: Inserir meditação para o ${i + 1}º dia.</p></div>`
    }))
  },
  sao_bras: {
    saintName: 'São Brás',
    novenaTitle: 'Novena a São Brás',
    description: 'Protetor contra os males da garganta.',
    image: 'https://placehold.co/400x400?text=Sao+Bras',
    initialPrayer: `<div class="initial-prayer-text"><p class="italic">TODO: Inserir oração inicial</p></div>`,
    finalPrayer: `<div class="final-prayer-text"><p class="italic">TODO: Inserir oração final</p></div>`,
    days: Array.from({ length: 9 }, (_, i) => ({
      day: `${i + 1}º Dia`,
      title: 'Meditação do Dia',
      content: `<div class="day-specific-content"><p>TODO: Inserir meditação para o ${i + 1}º dia.</p></div>`
    }))
  },
  menino_jesus_praga: {
    saintName: 'Menino Jesus de Praga',
    novenaTitle: 'Novena ao Menino Jesus de Praga',
    description: 'Peça as graças da infância espiritual e a proteção do Divino Infante com esta poderosa novena.',
    initialPrayer: `<div class="initial-prayer-text"><h4 class="section-title">Oração Inicial para todos os dias</h4><div class="prayer-block"><p>Ó Jesus, que dissestes no vosso Evangelho: “Pedi e recebereis, procurai e achareis, batei à porta e ela se abrirá”!</p><p>Por intermédio de Maria, vossa Mãe Santíssima, com fé e confiança eu bato à porta do vosso Coração e humildemente peço a vossa Divina Graça. Atendei, Senhor, à humilde prece que nesse dia vos dirijo.</p><p class="italic my-4 font-semibold text-center">(Mencione o seu pedido)</p><p>Ó Jesus, que prometestes: “Tudo que pedirdes ao Meu Pai em Meu Nome, Ele vo-lo concederá”!</p><p>A Deus, vosso Pai e Meu Pai celestial, apresento a minha Oração. Intercedei junto ao Pai de bondade e Deus de toda consolação para que Ele ouça nesta hora a minha súplica.</p><p class="italic my-4 font-semibold text-center">(Glória ao Pai)</p><p>Ó Jesus, que afirmastes: “Passarão o céu e a terra, mas as minhas palavras não passarão”!</p><p>Confio em vossa promessa, Senhor, e tenho a esperança de que vosso poder e imensa bondade me consolarão e me darão o que vos peço nesta momento.</p><p class="italic my-4 font-semibold text-center">(Glória ao Pai)</p><p class="mt-4 font-semibold">Em união com Jesus, rezar um pai-nosso a Deus e, em seguida, três ave-marias pedindo a intercessão de Nossa Senhora junto a Seu Filho, o Menino Jesus.</p></div></div>`,
    finalPrayer: `<div class="final-prayer-text"><div class="w-16 h-px bg-white/20 my-6 mx-auto"></div><h4 class="section-title">Oração Final</h4><div class="prayer-block"><p>Por vossa Divina Infância, ó Jesus, concedei-me a graça que insistentemente vos peço, se for para o meu bem e conforme vossa vontade!</p><p class="italic my-4 font-semibold text-center">(Faça seu pedido)</p><p>Não olheis os meus pecados, mas a minha fé e a vossa grande misericórdia!</p></div><h4 class="section-title">Hino ao Santíssimo Nome de Jesus</h4><div class="prayer-block"><p>Jesus, doce memória,<br/>do coração harmonia,<br/>mais que o vinho, mais que tudo,<br/>tua presença é alegria.</p><p>Teu canto é o mais suave<br/>e o mais agradável ao ouvido;<br/>teu pensamento é o mais doce,<br/>Jesus, Filho de Deus e meu Rei.</p><p>Esperança do penitente,<br/>benigno com quem te invoca,<br/>bondoso com quem te busca,<br/>Como será o encontrar-te?</p><p>A língua não pode dizer,<br/>nem a palavra expressar,<br/>somente quem te encontrou,<br/>sabe o que é amar.</p><p>Jesus, és nossa alegria,<br/>és nosso prêmio eterno;<br/>em Ti está nossa glória<br/>agora e pelos séculos.<br/>Amém.</p><p>Bendito seja o nome do Senhor.<br/>Agora e por todo o sempre.</p></div><h4 class="section-title">Oração</h4><div class="prayer-block"><p>Ó Deus, que constituístes vosso Filho Unigênito como Salvador do gênero humano e lhe destes o nome de Jesus, concedei-nos um dia poder contemplar no céu Aquele cujo Santo Nome veneramos na terra. Amém.</p></div></div>`,
    days: [
      {
        day: 'Primeiro Dia',
        title: 'Oração do 1º Dia',
        content: `<div class="day-specific-content"><p>Ó dulcíssimo Menino Jesus, consciente de minha pequenez, prostrado a vossos pés me dirijo a Vós, que sois todo meu. Tenho grande necessidade de vossa ajuda. Lançai-me o vosso olhar de piedade. Vós, que sois onipotente, vinde socorrer-me em minha necessidade!</p><p class="mt-4 font-semibold">Pai nosso... Ave Maria... Glória ao Pai...</p></div>`
      },
      {
        day: 'Segundo Dia',
        title: 'Oração do 2º Dia',
        content: `<div class="day-specific-content"><p>Ó celeste esplendor do Pai, em quem brilha a divindade, profundamente vos adoro e vos confesso verdadeiro Filho de Deus! Ofereço-vos a humilde homenagem de todo o meu ser. Não permitais que jamais me separe de Vós, meu Sumo Bem!</p><p class="mt-4 font-semibold">Pai nosso... Ave Maria... Glória ao Pai...</p></div>`
      },
      {
        day: 'Terceiro Dia',
        title: 'Oração do 3º Dia',
        content: `<div class="day-specific-content"><p>Ó Menino Jesus, ao contemplar a vossa face, sinto uma grande confiança em Vós. Sim, tudo espero de vossa bondade. Irradiai, ó Jesus, vossas graças sobre mim e meus entes queridos. Assim poderei cantar vossa infinita misericórdia.</p><p class="mt-4 font-semibold">Pai nosso... Ave Maria... Glória ao Pai...</p></div>`
      },
      {
        day: 'Quarto Dia',
        title: 'Oração do 4º Dia',
        content: `<div class="day-specific-content"><p>Ó Jesus, reconheço-vos como meu soberano absoluto. Não quero servir ao demônio, nem às minhas paixões e pecados. Reinai, ó Jesus, neste pobre coração e tornai-o vosso para sempre!</p><p class="mt-4 font-semibold">Pai nosso... Ave Maria... Glória ao Pai...</p></div>`
      },
      {
        day: 'Quinto Dia',
        title: 'Oração do 5º Dia',
        content: `<div class="day-specific-content"><p>Eu vos contemplo, ó Dulcíssimo Redentor, revestido de um manto de púrpura. Este é o vosso uniforme real. Como me evoca o sangue, sangue derramado por mim! Fazei, ó Jesus, que eu corresponda a tamanho sacrifício e não recuse nenhum sofrimento por vossa causa.</p><p class="mt-4 font-semibold">Pai nosso... Ave Maria... Glória ao Pai...</p></div>`
      },
      {
        day: 'Sexto Dia',
        title: 'Oração do 6º Dia',
        content: `<div class="day-specific-content"><p>Ó amabilíssimo Menino, ao contemplar-vos segurando o mundo, meu coração se enche de alegria! Também a mim sustentais em todos os momentos de minha vida e me guardais como vossa propriedade. Cuidai de mim, ó Jesus, e socorrei-me em todas as minhas necessidades!</p><p class="mt-4 font-semibold">Pai nosso... Ave Maria... Glória ao Pai...</p></div>`
      },
      {
        day: 'Sétimo Dia',
        title: 'Oração do 7º Dia',
        content: `<div class="day-specific-content"><p>Sobre vosso peito, ó Menino Jesus, brilha uma cruz; eis o estandarte de nossa redenção! Eu também tenho minha cruz, ó Divino Salvador, bem mais leve que a vossa, mas, ainda assim, ela me angustia. Ajudai-me a carregá-la, para que eu possa colher os seus frutos. Bem sabeis quanto sou fraco!</p><p class="mt-4 font-semibold">Pai nosso... Ave Maria... Glória ao Pai...</p></div>`
      },
      {
        day: 'Oitavo Dia',
        title: 'Oração do 8º Dia',
        content: `<div class="day-specific-content"><p>Junto à Cruz, vislumbro sobre vosso peito, ó Menino Jesus, a imagem de vosso coração. Sois o verdadeiro Amigo, que generosamente vos repartis e imolais por todos os que são objeto de vosso amor. Enchei-me de caridade, ó Jesus, e ensinai-me a corresponder ao vosso Amor!</p><p class="mt-4 font-semibold">Pai nosso... Ave Maria... Glória ao Pai...</p></div>`
      },
      {
        day: 'Nono Dia',
        title: 'Oração do 9º Dia',
        content: `<div class="day-specific-content"><p>Vossa Destra Onipotente, ó Menino Jesus, quantas bênçãos derrama sobre aqueles que vos honram e vos invocam! Abençoai-me também e bendizei toda a minha vida. Abençoai meus bons propósitos e socorrei-me em minhas necessidades. Escutai benigno os meus pedidos e bendirei o vosso Santo Nome cada dia de minha vida.</p><p class="mt-4 font-semibold">Pai nosso... Ave Maria... Glória ao Pai...</p></div>`
      }
    ]
  },
};


export const saints: Saint[] = [
  // Janeiro
  { id: 'menino_jesus_praga', name: 'Menino Jesus de Praga', imageUrl: 'https://imgs.search.brave.com/aoWnxVzI3BjPCBND2O_ui_EIUAUfPJRxBcku8wbnUwE/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi9mL2ZlL0No/aWxkX0plc3VzX29m/X1ByYWd1ZV8lMjhv/cmlnaW5hbF9zdGF0/dWUlMjlfJTI4Y3Jv/cCUyOS5qcGcvNTEy/cHgtQ2hpbGRfSmVz/dXNfb2ZfUHJhZ3Vl/XyUyOG9yaWdpbmFs/X3N0YXR1ZSUyOV8l/Mjhjcm9wJTI5Lmpw/Zw', month: 'Janeiro', startDate: '05/01', endDate: '13/01', feastDay: '14/Jan' }, // Generic feast
  { id: 'santo_antao', name: 'Santo Antão', imageUrl: 'https://i.pinimg.com/736x/cf/a9/b6/cfa9b672576ad12bf372aecd49d2ef60.jpg', month: 'Janeiro', startDate: '08/01', endDate: '16/01', feastDay: '17/Jan' },
  { id: 'sao_sebastiao', name: 'São Sebastião', imageUrl: 'https://iili.io/fWNLcba.png', month: 'Janeiro', startDate: '11/01', endDate: '19/01', feastDay: '20/Jan', isMartyr: true },
  { id: 'sao_francisco_sales', name: 'São Francisco de Sales', imageUrl: 'https://iili.io/fWNLRUP.png', month: 'Janeiro', startDate: '15/01', endDate: '23/01', feastDay: '24/Jan' },
  { id: 'santo_tomas_aquino', name: 'Santo Tomás de Aquino', imageUrl: 'https://iili.io/fWNLA0B.png', month: 'Janeiro', startDate: '19/01', endDate: '27/01', feastDay: '28/Jan' },
  { id: 'sao_joao_bosco', name: 'São João Bosco', imageUrl: 'https://iili.io/fWNLufV.png', month: 'Janeiro', startDate: '22/01', endDate: '30/01', feastDay: '31/Jan' },
  { id: 'ns_candeias', name: 'N.S. das Candeias', imageUrl: 'https://placehold.co/400x400?text=NS+Candeias', month: 'Janeiro', startDate: '24/01', endDate: '01/02', feastDay: '02/Fev' },
  { id: 'sao_bras', name: 'São Brás', imageUrl: 'https://placehold.co/400x400?text=Sao+Bras', month: 'Janeiro', startDate: '25/01', endDate: '02/02', feastDay: '03/Fev', isMartyr: true },

  { id: 'sao_jose_operario', name: 'São José Operário', imageUrl: 'https://i.postimg.cc/9QfFWvTB/image.png', month: 'Maio', startDate: '22/04', endDate: '30/04', feastDay: '01/Mai' },
  // Outubro
  { id: 'teresinha', name: 'S. Teresinha', imageUrl: 'https://i.postimg.cc/G2y7k85b/image.png', month: 'Outubro', startDate: '22/09', endDate: '30/09', feastDay: '01/Out' },
  { id: 'faustina', name: 'Santa Faustina', imageUrl: 'https://i.postimg.cc/qBKkbHTj/39a80df1d720976f7e55e00f40eadc90-1.jpg', month: 'Outubro', startDate: '26/09', endDate: '04/10', feastDay: '05/Out' },
  { id: 'rosario', name: 'N.S. do Rosário', imageUrl: 'https://i.postimg.cc/2669v1gr/nsr.jpg', month: 'Outubro', startDate: '28/09', endDate: '06/10', feastDay: '07/Out' },
  { id: 'aparecida', name: 'N.S. Aparecida', imageUrl: 'https://i.postimg.cc/Lsyj4XMh/4011bde1376c5422265a41f3a652c540.jpg', month: 'Outubro', startDate: '03/10', endDate: '11/10', feastDay: '12/Out' },
  { id: 'carlo_acutis', name: 'S. Carlo Acutis', imageUrl: 'https://i.postimg.cc/CKrbWHjb/8a6ca2d967cbe5b8b65b068da82f495e.jpg', month: 'Outubro', startDate: '03/10', endDate: '11/10', feastDay: '12/Out' },
  { id: 'teresa_avila', name: 'S. Teresa de Ávila', imageUrl: 'https://i.postimg.cc/ht19wsyQ/32654687eb30f846f1f2e9e3edb6f4af.jpg', month: 'Outubro', startDate: '06/10', endDate: '14/10', feastDay: '15/Out' },
  { id: 'edwiges', name: 'S. Edwiges', imageUrl: 'https://i.postimg.cc/pTPYrzkQ/formacao-1600x1200-novena-sta-edwigens.jpg', month: 'Outubro', startDate: '07/10', endDate: '15/10', feastDay: '16/Out' },
  { id: 'margarida_alacoque', name: 'S. Margarida M.A.', imageUrl: 'https://i.postimg.cc/J7QHR03S/66339fa28370276f90d041991767bebd.jpg', month: 'Outubro', startDate: '07/10', endDate: '15/10', feastDay: '16/Out' },
  { id: 'inacio_antioquia', name: 'S. Inácio de A.', imageUrl: 'https://i.postimg.cc/cvWXNVVK/image.png', month: 'Outubro', startDate: '08/10', endDate: '16/10', feastDay: '17/Out', isMartyr: true },
  { id: 'lucas', name: 'S. Lucas', imageUrl: 'https://i.postimg.cc/LXry2CGX/image.png', month: 'Outubro', startDate: '09/10', endDate: '17/10', feastDay: '18/Out', isMartyr: true },
  { id: 'pedro_alcantara', name: 'S. Pedro de A.', imageUrl: 'https://i.postimg.cc/LnDZnwJ2/image.png', month: 'Outubro', startDate: '10/10', endDate: '18/10', feastDay: '19/Out' },
  { id: 'jp2', name: 'S. João Paulo II', imageUrl: 'https://i.postimg.cc/bsw1Hqcq/image.png', month: 'Outubro', startDate: '13/10', endDate: '21/10', feastDay: '22/Out' },
  { id: 'frei_galvao', name: 'S. Frei Galvão', imageUrl: 'https://i.postimg.cc/sBYBCLdn/image.png', month: 'Outubro', startDate: '16/10', endDate: '24/10', feastDay: '25/Out' },
  { id: 'judas_tadeu', name: 'S. Judas Tadeu', imageUrl: 'https://i.postimg.cc/9wrF08KF/image.png', month: 'Outubro', startDate: '19/10', endDate: '27/10', feastDay: '28/Out', isMartyr: true },
  { id: 'chiara_luce', name: 'Beata Chiara Luce', imageUrl: 'https://i.postimg.cc/YSW99892/image.png', month: 'Outubro', startDate: '20/10', endDate: '28/10', feastDay: '29/Out' },
  { id: 'todos_santos', name: 'Todos os Santos', imageUrl: 'https://i.postimg.cc/j29jkK7b/download.jpg', month: 'Outubro', startDate: '23/10', endDate: '31/10', feastDay: '01/Nov' },
  //Novembro
  { id: 'almas', name: 'Almas', imageUrl: 'https://i.postimg.cc/G2DDG2TC/dfed164f02d4d4d2bccaa939385df13b.jpg', month: 'Novembro', startDate: '24/10', endDate: '01/11', feastDay: '02/Nov' },
  { id: 'martinho_porres', name: 'S. M. de Porres', imageUrl: 'https://i.postimg.cc/Y0tMTg84/image.png', month: 'Novembro', startDate: '25/10', endDate: '02/11', feastDay: '03/Nov' },
  { id: 'isabel_hungria', name: 'S. Isabel da Hungria', imageUrl: 'https://iili.io/KpAYfLl.jpg', month: 'Novembro', startDate: '08/11', endDate: '16/11', feastDay: '17/Nov' },
  { id: 'apresentacao_ns', name: 'Apres. de N.S.', imageUrl: 'https://i.postimg.cc/3Js86PzK/image.png', month: 'Novembro', startDate: '12/11', endDate: '20/11', feastDay: '21/Nov' },
  { id: 'ns_saude', name: 'N.S. da Saúde', imageUrl: 'https://i.postimg.cc/RCdhqSqh/image.png', month: 'Novembro', startDate: '12/11', endDate: '20/11', feastDay: '21/Nov' },
  { id: 'santa_cecilia', name: 'S. Cecília', imageUrl: 'https://i.postimg.cc/4xDNjn2c/image.png', month: 'Novembro', startDate: '13/11', endDate: '21/11', feastDay: '22/Nov', isMartyr: true },
  { id: 'gracas', name: 'N.S. das Graças', imageUrl: 'https://i.postimg.cc/SsBDK7HJ/Design-sem-nome-2.png', month: 'Novembro', startDate: '18/11', endDate: '26/11', feastDay: '27/Nov' },
  { id: 'cristo_rei', name: 'Cristo Rei', imageUrl: 'https://iili.io/KpYFw6G.jpg', month: 'Novembro', startDate: '14/11', endDate: '22/11', feastDay: '23/Nov' },
  { id: 'imaculada_conceicao', name: 'Imaculada Conceição', imageUrl: 'https://iili.io/KpAtISf.png', month: 'Novembro/Dezembro', startDate: '29/11', endDate: '07/12', feastDay: '08/Dez' },
  // Dezembro
  { id: 'guadalupe', name: 'N.S. de Guadalupe', imageUrl: 'https://iili.io/ffgFDXV.png', month: 'Dezembro', startDate: '04/12', endDate: '12/12', feastDay: '12/Dez' },
  { id: 'santa_luzia', name: 'Santa Luzia', imageUrl: 'https://iili.io/ffgqFiN.png', month: 'Dezembro', startDate: '04/12', endDate: '12/12', feastDay: '13/Dez', isMartyr: true },
  { id: 'joao_cruz', name: 'S. João da Cruz', imageUrl: 'https://iili.io/ffgFMWN.jpg', month: 'Dezembro', startDate: '05/12', endDate: '13/12', feastDay: '14/Dez' },
  { id: 'natal', name: 'Novena de Natal', imageUrl: 'https://iili.io/ffgFVsI.jpg', month: 'Dezembro', startDate: '16/12', endDate: '24/12', feastDay: '25/Dez' },
  { id: 'maria_mae_deus', name: 'S. Maria Mãe de Deus', imageUrl: '/images/santa-maria-mae-de-deus.jpg', month: 'Dezembro/Janeiro', startDate: '23/12', endDate: '31/12', feastDay: '01/Jan' },
  { id: 'epifania', name: 'Epifania', imageUrl: 'https://iili.io/ffgF6ge.jpg', month: 'Dezembro/Janeiro', startDate: '28/12', endDate: '05/01', feastDay: '06/Jan' },
];

export const months: string[] = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

export const saintsOfTheDay: SaintOfTheDayData[] = [
  {
    day: 1,
    month: 'Janeiro',
    saints: [{
      name: 'Maria, Mãe de Deus',
      imageUrl: '/images/santa-maria-mae-de-deus.jpg',
      story: `<h4>A Maternidade Divina</h4><p>Nesta solenidade, a Igreja celebra o dogma da Maternidade Divina de Maria, proclamado no Concílio de Éfeso em 431. Maria não é apenas a mãe do homem Jesus, mas a "Theotokos" (portadora de Deus), a Mãe de Deus feito homem. Através do seu "Sim" generoso, ela tornou-se a porta por onde a Salvação entrou no mundo. Esta festa recorda-nos que Jesus é verdadeiro Deus e verdadeiro Homem, e que Maria tem um papel único e central na história da redenção.</p><h4>Modelo de Escuta e Meditação</h4><p>O Evangelho deste dia destaca que "Maria guardava todas estas coisas, meditando-as no seu coração". Ela é o modelo da alma contemplativa, que sabe acolher os mistérios de Deus mesmo sem os compreender totalmente de imediato. A sua vida foi uma peregrinação de fé, desde a Anunciação até o pé da Cruz, ensinando-nos a confiar na Providência divina em todos os momentos.</p><h4>Mãe de toda a Igreja</h4><p>Ao celebrarmos Maria como Mãe de Deus, celebramos também a nossa Mãe espiritual. Na Cruz, Jesus confiou-nos a ela, e ela continua a interceder por nós com carinho materno. No início de um novo ano, colocamo-nos sob a sua proteção, pedindo que ela nos guie pelos caminhos da paz e nos conduza sempre mais perto do seu Filho.</p><p class="mt-4"><b>Oração:</b> Santa Maria, Mãe de Deus, rogai por nós pecadores, agora e na hora da nossa morte. Amém.</p>`
    }]
  },
  {
    day: 2,
    month: 'Janeiro',
    saints: [{
      name: 'Santos Basilio Magno e Gregório de Nazianzo',
      imageUrl: 'https://iili.io/fWNqqcF.png',
      story: `<h4>Amigos na Fé e na Sabedoria</h4><p>Basílio e Gregório, dois dos "Padres Capadócios", viveram uma das amizades mais belas e produtivas da história da Igreja no século IV. Conheceram-se em Atenas, onde estudavam, e a sua união baseava-se no amor a Deus e na busca da verdade. "Tínhamos tudo em comum", escreveu Gregório, "especialmente a vontade de sermos cristãos". Juntos, lutaram contra as heresias de seu tempo, especialmente o arianismo, defendendo a divindade de Cristo e do Espírito Santo.</p><h4>Pilares da Igreja Oriental</h4><p>Basílio, conhecido como "Magno", foi um grande organizador, bispo de Cesareia e pai do monaquismo oriental. Suas regras monásticas ainda hoje guiam muitos monges. Gregório, chamado "o Teólogo", destacou-se pela sua profunda oração e eloqüência, sendo um dos maiores poetas e oradores da Igreja primitiva. A sua contribuição para a clarificação do dogma da Santíssima Trindade é inestimável.</p><h4>Legado de Santidade e Doutrina</h4><p>Apesar de personalidades diferentes - Basílio mais ativo e prático, Gregório mais contemplativo e sensível - ambos se dedicaram inteiramente ao serviço de Cristo e da sua Igreja. São Doutores da Igreja e modelos de como o estudo e a amizade podem ser caminhos de santidade. A sua festa conjunta recorda-nos que a fé se fortalece na comunhão e na defesa corajosa da Verdade.</p><p class="mt-4"><b>Oração:</b> Ó Deus, que ilustrastes a vossa Igreja com os exemplos e a doutrina dos vossos santos bispos Basílio e Gregório, fazei que procuremos humildemente a vossa verdade e a pratiquemos fielmente pela caridade.</p>`
    }]
  },
  {
    day: 3,
    month: 'Janeiro',
    saints: [{
      name: 'Santíssimo Nome de Jesus',
      imageUrl: 'https://iili.io/fWNfHBI.png',
      story: `<h4>O Nome Acima de Todo Nome</h4><p>A celebração do Santíssimo Nome de Jesus nos convida a meditar sobre o poder e a beleza do nome dado ao Filho de Deus quando foi circuncidado no oitavo dia após seu nascimento. Como diz São Paulo: <em>"Para que ao nome de Jesus se dobre todo o joelho dos que estão nos céus, na terra e debaixo da terra"</em> (Fl 2,10). O nome <strong>Jesus</strong> (em hebraico: Yeshua) significa <strong>"Javé salva"</strong> ou <strong>"Deus salva"</strong>, revelando perfeitamente a missão do Filho de Deus: salvar a humanidade do pecado e da morte.</p>

<h4>O Monograma IHS</h4><p>O monograma <strong>IHS</strong> é uma das representações mais antigas e veneradas do Nome de Jesus. Este símbolo sagrado possui diferentes interpretações, todas profundamente significativas:</p><ul><li><strong>IHS</strong> são as três primeiras letras do nome de Jesus em grego (ΙΗΣΟΥΣ - Iesous)</li><li>Também interpretado como <em>Iesus Hominum Salvator</em> (Jesus Salvador dos Homens)</li><li>Ou <em>In Hoc Signo</em> (vinces) - "Neste sinal vencerás"</li></ul><p>Este monograma, frequentemente representado em um sol radiante, simboliza Cristo como a Luz do mundo, que dissipa as trevas do pecado e da morte.</p>

<h4>O Poder do Santo Nome</h4><p>A Igreja sempre ensinou sobre o poder extraordinário do Santo Nome de Jesus:</p><ul><li><strong>São Pedro</strong> proclamou: <em>"Não existe debaixo do céu outro nome dado aos homens, pelo qual devamos ser salvos"</em> (At 4,12)</li><li><strong>Jesus mesmo</strong> prometeu: <em>"Tudo o que pedirdes ao Pai em meu nome, ele vo-lo concederá"</em> (Jo 16,23)</li><li>O Nome de Jesus é invocado para curar, libertar e santificar</li></ul>

<h4>Devoção ao Santíssimo Nome</h4><p>Esta devoção foi especialmente promovida por grandes santos:</p><ul><li><strong>São Bernardino de Sena</strong> (1380-1444) - franciscano que difundiu o monograma IHS por toda a Itália, carregando uma tábua com o símbolo em suas pregações</li><li><strong>São João de Capistrano</strong> - discípulo de São Bernardino, continuou a propagar esta devoção</li><li><strong>Santo Inácio de Loyola</strong> - fundador da Companhia de Jesus (Jesuítas), colocou a ordem sob a proteção do Santo Nome</li></ul>

<h4>A Festa Litúrgica</h4><p>Historicamente celebrada no domingo entre 1º e 6 de janeiro, ou no dia 2 de janeiro, esta festa foi fixada em 3 de janeiro após a reforma litúrgica do Concílio Vaticano II. É uma <strong>Memória Opcional</strong> no Tempo do Natal, celebrada com vestes brancas, cor da alegria e da divindade.</p>

<h4>O Catecismo Ensina</h4><p>Como nos recorda o <strong>Catecismo da Igreja Católica</strong> (n. 2666-2668): <em>"O nome de Jesus está no coração da oração cristã. Todas as orações litúrgicas terminam com a fórmula 'Por Nosso Senhor Jesus Cristo'. A Ave-Maria culmina em 'e bendito é o fruto do vosso ventre, Jesus'. A oração do coração, habitual no Oriente cristão e chamada 'oração a Jesus', diz: 'Senhor Jesus Cristo, Filho de Deus, tende piedade de mim, pecador'. Muitos cristãos morrem, como Santa Joana d'Arc, tendo nos lábios uma única palavra: 'Jesus'."</em></p>

<p class="mt-4"><b>Oração:</b> Ó Deus, que constituístes vosso Filho Unigênito Salvador do gênero humano e ordenastes que se chamasse Jesus, concedei propício que, venerando na terra o seu santo Nome, mereçamos também contemplá-lo no céu. Por Nosso Senhor Jesus Cristo, vosso Filho, na unidade do Espírito Santo. Amém.</p>

<p class="mt-2 italic text-center">Que o Santíssimo Nome de Jesus seja sempre bendito, louvado e glorificado! ✝️</p>`
    }]
  },
  {
    day: 4,
    month: 'Janeiro',
    saints: [{
      name: 'Santa Ângela de Foligno',
      imageUrl: 'https://iili.io/fWNIiEx.png',
      story: `<h4>A Mestra dos Teólogos</h4><p>Ângela de Foligno viveu no século XIII e é uma das maiores místicas da tradição franciscana. Após uma vida mundana, ela experimentou uma conversão radical após a perda de sua família, despojando-se de seus bens e ingressando na Ordem Terceira de São Francisco. Suas experiências espirituais foram registradas em seu "Livro de Visões e Instruções", que revela uma profundidade mística extraordinária.</p><h4>União com Cristo Sofredor</h4><p>O centro da espiritualidade de Ângela era a Paixão de Cristo. Ela contemplava incessantemente a humanidade sofredora de Jesus, vendo nela o caminho para a união divina. Sua vida foi marcada por intensas provações e consolações, sendo chamada por muitos de "Mestra dos Teólogos" devido à clareza com que descrevia os mistérios de Deus. Sua mensagem é um convite à humildade e ao amor total ao Amado.</p><p class="mt-4"><b>Oração:</b> Santa Ângela de Foligno, que encontraste no mistério da Cruz a luz e o amor infinitos de Deus, ajuda-nos a caminhar com coragem na via da conversão e a amar a Jesus acima de todas as coisas. Amém.</p>`
    }]
  },
  {
    day: 5,
    month: 'Janeiro',
    saints: [{
      name: 'São João Neumann',
      imageUrl: 'https://iili.io/fWNI4Lb.png',
      story: `<h4>O Bispo Missionário</h4><p>João Neumann nasceu na Boêmia e sentiu um forte chamado missionário para os Estados Unidos. Ordenado sacerdote em Nova York, ele percorria vastas áreas rurais a pé ou a cavalo, levando os sacramentos aos imigrantes. Mais tarde, ingressou na Congregação dos Redentoristas e tornou-se o quarto Bispo de Filadélfia, onde se destacou por seu zelo incansável e sua simplicidade.</p><h4>Pai da Educação Católica</h4><p>Como bispo, ele fundou o primeiro sistema diocesano de escolas católicas nos EUA, entendendo a importância da formação integral da juventude. João era um homem de profunda oração e humildade, vivendo de forma austera para poder ajudar os pobres. Foi o primeiro bispo dos EUA a ser canonizado, sendo um exemplo de como a organização e o zelo pastoral podem transformar a vida de uma diocese.</p><p class="mt-4"><b>Oração:</b> São João Neumann, que dedicaste a tua vida ao serviço de Deus e dos irmãos com coragem e humildade, intercede por nós para que sejamos testemunhas autênticas do Evangelho em todas as circunstâncias. Amém.</p>`
    }]
  },
  {
    day: 6,
    month: 'Janeiro',
    saints: [{
      name: 'Epifania do Senhor',
      imageUrl: 'https://iili.io/fWNIPBj.png',
      story: `<h4>A Manifestação aos Povos</h4><p>A Epifania celebra a manifestação de Jesus como Salvador de todos os povos, representada pela visita dos Magos do Oriente. O ouro reconhece a sua realeza, o incenso a sua divindade e a mirra a sua humanidade destinada ao sofrimento redentor. É a festa da universalidade da salvação: Cristo não veio apenas para um povo, mas para toda a humanidade.</p><h4>A Estrela que nos Guia</h4><p>Os Magos seguiram uma estrela com coragem e determinação, buscando a Verdade. Sua jornada nos ensina que Deus se deixa encontrar por todos os que O buscam com um coração sincero. Ao adorarem o Menino Jesus, eles transformaram sua vida. A Epifania convida-nos a sermos também nós "estrelas" que apontam o caminho para Cristo através do nosso testemunho de alegria e de fé no mundo de hoje.</p><p class="mt-4"><b>Oração:</b> Ó Deus, que hoje revelastes o vosso Filho único às nações, guia-nos na vossa luz para que, conhecendo-vos já pela fé, cheguemos a contemplar a beleza da vossa glória. Amém.</p>`
    }]
  },
  {
    day: 7,
    month: 'Janeiro',
    saints: [{
      name: 'São Raimundo de Peñafort',
      imageUrl: 'https://iili.io/fWNGeea.png',
      story: `<h4>O Mestre do Direito e da Misericórdia</h4><p>São Raimundo foi um dos primeiros membros da Ordem dos Pregadores (Dominicanos) e um jurista brilhante. A pedido do Papa Gregório IX, compilou o "Decretales", que foi a base do Direito Canônico por séculos. No entanto, sua grandeza não estava apenas na lei, mas na compaixão. Ajudou São Pedro Nolasco a fundar a Ordem das Mercês para o resgate de cativos cristãos.</p><h4>Um Farol de Sabedoria</h4><p>Eleito Mestre Geral dos Dominicanos, ele promoveu o estudo das línguas e das ciências para melhor evangelizar. Viveu até quase os 100 anos, sendo um exemplo de humildade e dedicação à Igreja. É o padroeiro dos canonistas e dos advogados, lembrando-nos que a justiça humana deve sempre estar a serviço do amor divino e da verdade que liberta.</p><p class="mt-4"><b>Oração:</b> Ó Deus, que concedestes a São Raimundo de Peñafort o espírito de sabedoria e de misericórdia para guiar os fiéis, ajuda-nos a caminhar no caminho da justiça e do amor. Amém.</p>`
    }]
  },
  {
    day: 8,
    month: 'Janeiro',
    saints: [{
      name: 'São Severino de Nórica',
      imageUrl: 'https://iili.io/fWNGO5g.png',
      story: `<h4>O Apóstolo das Fronteiras</h4><p>São Severino viveu num período de grande instabilidade, during a queda do Império Romano e as invasões bárbaras na região da atual Áustria. Ele surgiu como um farol de esperança e liderança, vivendo como um eremita, mas atuando como um protetor para as populações aterrorizadas. Sua autoridade moral era respeitada tanto pelos romanos quanto pelos líderes bárbaros.</p><h4>Defensor dos Pobres</h4><p>Severino organizou o resgate de prisioneiros, estabeleceu sistemas de caridade para alimentar os famintos e aconselhou governantes com coragem profética. Ele não tinha armas nem exércitos, mas seu poder vinha de sua profunda união com Deus. Sua vida demonstra que, mesmo nos momentos mais sombrios da história, a figura de um santo pode oferecer a estabilidade e a luz que a sociedade necessita.</p><p class="mt-4"><b>Oração:</b> São Severino, que foste força e refúgio para o povo em tempos de grande provação, intercede por nós para que nunca percamos a esperança e saibamos ser sinais da presença de Deus em nosso mundo. Amém.</p>`
    }]
  },
  {
    day: 9,
    month: 'Janeiro',
    saints: [{
      name: 'Santo André Corsini',
      imageUrl: 'https://iili.io/fWNGjg1.png',
      story: `<h4>De Jovem Rebelde a Bispo Santo</h4><p>André nasceu em Florença, numa família nobre. Na juventude, foi rebelde e mundano, mas a conversão veio through um profundo encontro com a graça de Deus e o amor de sua mãe, que o consagrou a Nossa Senhora. Ingressou na Ordem do Carmo e tornou-se um místico zeloso, sendo mais tarde nomeado Bispo de Fiesole, cargo que aceitou apenas por obediência.</p><h4>Anjo da Paz</h4><p>Como bispo, André destacou-se por sua caridade e, especialmente, por seu dom de reconciliador. Ele resolveu inúmeros conflitos civis e eclesiásticos, sendo chamado de "Anjo da Paz". Vivia com extrema simplicidade, lavando os pés dos pobres e cuidando pessoalmente dos doentes. Sua vida ensina que nunca é tarde para mudar o rumo do coração e que a humildade é a base de toda verdadeira liderança.</p><p class="mt-4"><b>Oração:</b> Santo André Corsini, que pelo Teu exemplo de conversão e paz inspiraste tantos corações, ajuda-nos a ser instrumentos de reconciliação em nossas famílias e em nossa sociedade. Amém.</p>`
    }]
  },
  {
    day: 10,
    month: 'Janeiro',
    saints: [{
      name: 'São Gonçalo de Amarante',
      imageUrl: 'https://placehold.co/400x400?text=Goncalo+de+Amarante',
      story: `<h4>O Pregador das Pontes</h4><p>São Gonçalo é um dos santos mais populares de Portugal. Após peregrinar a Roma e Jerusalém, retornou a Portugal e sentiu o chamado para viver como eremita e, depois, como frade dominicano. Dedicou-se à pregação e ao cuidado espiritual do povo de Amarante, onde se tornou famoso não apenas por suas palavras, mas por suas obras em benefício da comunidade.</p><h4>Construtor e Protetor</h4><p>Diz a tradição que ele ajudou pessoalmente na construção da ponte sobre o rio Tâmega para ajudar o povo. Gonçalo unia a vida mística com uma ação social incansável. É venerado como protetor dos noivos e das famílias, e sua festa é marcada por uma profunda alegria popular. Ele nos lembra que a fé deve ser "edificante", construindo pontes entre as pessoas e entre o mundo e Deus.</p><p class="mt-4"><b>Oração:</b> São Gonçalo de Amarante, que uniste a oração fervorosa ao serviço generoso ao próximo, intercede por nós para que saibamos construir caminhos de fraternidade e paz em nossa vida. Amém.</p>`
    }]
  },
  {
    day: 11,
    month: 'Janeiro',
    saints: [{
      name: 'São Vital de Gaza',
      imageUrl: 'https://placehold.co/400x400?text=Vital+de+Gaza',
      story: `<h4>A Caridade Oculta</h4><p>São Vital foi um monge do século VII que viveu uma missão de misericórdia extraordinária e mal compreendida. Ele dedicava suas noites a resgatar mulheres que viviam na prostituição, oferecendo-lhes os recursos para mudarem de vida, while ele mesmo era caluniado e julgado pela sociedade de Alexandria. Ele aceitava as críticas em silêncio, buscando apenas a glória de Deus e a salvação das almas.</p><h4>O Julgamento e a Verdade</h4><p>Apenas após sua morte, when as mulheres por ele resgatadas testemunharam a verdade, é que a sua santidade foi reconhecida por todos. Seu exemplo é um convite radical a não julgar pelas aparências e a viver uma caridade que não busca o aplauso humano. Vital reminds us that God sees the heart and that the highest form of love often acts in the shadows, longe dos holofotes do mundo.</p><p class="mt-4"><b>Oração:</b> São Vital de Gaza, que com coragem e silêncio viveste a caridade mais difícil, ajuda-nos a ter um coração puro e a ver o rosto de Cristo em todos os nossos irmãos, especialmente nos mais sofredores e julgados. Amém.</p>`
    }]
  },
  {
    day: 12,
    month: 'Janeiro',
    saints: [{
      name: 'Santo Elredo de Rievaulx',
      imageUrl: 'https://placehold.co/400x400?text=Elredo',
      story: `<h4>O Mestre da Amizade Espiritual</h4><p>Elredo foi abade da grande abadia cisterciense de Rievaulx, na Inglaterra, no século XII. Conhecido como o "São Bernardo do Norte", ele era um líder amado por sua bondade e sabedoria. Sua obra mais famosa, "De Spirituali Amicitia" (Sobre a Amizade Espiritual), apresenta a amizade como um caminho sagrado para encontrar e amar a Deus: "Deus é Amizade".</p><h4>Um Coração Acolhedor</h4><p>Sob sua liderança, a abadia tornou-se um refúgio de paz para centenas de monges. Elredo ensinava que a vida comunitária deve ser baseada na caridade mútua e no respeito profundo. Apesar de sofrer de doenças crônicas, ele nunca perdeu a doçura e a paciência. Ele nos convida a cultivar relações autênticas e a ver na amizade cristã um reflexo do amor infinito da Santíssima Trindade.</p><p class="mt-4"><b>Oração:</b> Santo Elredo, que nos ensinaste a encontrar a Deus através do amor aos nossos amigos e irmãos, ajuda-nos a cultivar amizades que nos levem sempre mais perto do Senhor. Amém.</p>`
    }]
  },
  {
    day: 13,
    month: 'Janeiro',
    saints: [{
      name: 'Santo Hilário de Poitiers',
      imageUrl: 'https://placehold.co/400x400?text=Hilario',
      story: `<h4>O Atanásio do Ocidente</h4><p>Hilário, Bispo de Poitiers no século IV, foi um dos maiores defensores da divindade de Cristo contra a heresia ariana. Por sua firmeza na fé, foi enviado para o exílio pelo imperador, onde aproveitou para estudar a teologia oriental e escrever sua grande obra "Sobre a Trindade". É chamado de "Doutor da Igreja" pela clareza de seu pensamento e sua coragem inabalável.</p><h4>Firmeza e Mansidão</h4><p>Apesar de sua luta rigorosa pela verdade doutrinária, Hilário era conhecido por sua mansidão e caráter conciliador. Ele entendia que a defesa da fé exige tanto a força da razão quanto a doçura da caridade. Sua vida mostra que o estudo profundo e a fidelidade à Igreja são fundamentais para navegar em tempos de confusão. Ele é um guia seguro para todos os que buscam aprofundar o mistério do Deus Trino.</p><p class="mt-4"><b>Oração:</b> Santo Hilário, fiel defensor da verdade, intercede por nós para que guardemos a fé com coragem e saibamos dar as razões de nossa esperança com mansidão e amor. Amém.</p>`
    }]
  },
  {
    day: 14,
    month: 'Janeiro',
    saints: [{
      name: 'São Félix de Nola',
      imageUrl: 'https://placehold.co/400x400?text=Felix+de+Nola',
      story: `<h4>Confessor de Fé</h4><p>São Félix viveu no século III e foi um presbítero que sofreu intensamente during as perseguições. Diz a tradição que ele foi libertado da prisão milagrosamente por um anjo para cuidar de seu bispo doente. Félix passou o resto de sua vida vivendo em extrema pobreza, cultivando um pequeno jardim, mas sendo um farol de consolo espiritual para todo o povo de Nola.</p><h4>Venerado como Mártir</h4><p>Embora não tenha morrido no suplício, Félix é venerado como mártir devido aos imensos sofrimentos que suportou por Cristo. São Paulino de Nola, que escreveu sobre ele, descreve os inúmeros milagres que ocorriam em seu túmulo. Sua vida ensina que a verdadeira santidade consiste na fidelidade cotidiana e na aceitação alegre da vontade de Deus, mesmo sob as maiores provações. Ele é o padroeiro contra o perjúrio.</p><p class="mt-4"><b>Oração:</b> São Félix de Nola, cuja fé brilhou no meio das perseguições e da pobreza, ajuda-nos a ser fiéis a Cristo em todas as cirunstâncias de nossa vida e a encontrar Nele a nossa única riqueza. Amém.</p>`
    }]
  },
  {
    day: 15,
    month: 'Janeiro',
    saints: [{
      name: 'Santo Amaro',
      imageUrl: 'https://placehold.co/400x400?text=Santo+Amaro',
      story: `<h4>O Discípulo Fiel</h4><p>Santo Amaro foi um dos primeiros e mais amados discípulos de São Bento, o pai do monaquismo ocidental. Desde criança, foi confiado pelos pais aos cuidados do mosteiro de Subiaco. Tornou-se um modelo de obediência e humildade, sendo o braço direito de São Bento em muitas missões. Diz a história que, por obediência, ele chegou a caminhar sobre as águas para salvar um colega de afogamento.</p><h4>Missionário na Gália</h4><p>Segundo a tradição, Amaro foi enviado por São Bento para a França (Gália), onde fundou o importante mosteiro de Glanfeuil. Ele introduziu a Regra de São Bento naquelas terras, sendo um dos pilares da evangelização da Europa medieval. Sua vida é um hino à simplicidade do "Ora et Labora" e à força que nasce da entrega total à vontade de Deus através da vida monástica.</p><p class="mt-4"><b>Oração:</b> Santo Amaro, modelo de obediência e entrega a Deus, ensina-nos a ouvir a voz do Senhor em nosso cotidiano e a servi-Lo com alegria e humildade. Amém.</p>`
    }]
  },
  {
    day: 16,
    month: 'Janeiro',
    saints: [{
      name: 'São Marcelo I',
      imageUrl: 'https://placehold.co/400x400?text=Marcelo+I',
      story: `<h4>O Papa do Reerguimento</h4><p>Eleito Papa após um longo período de perseguição e vacância da Sé Romana, São Marcelo I enfrentou a difícil tarefa de reorganizar a Igreja. Ele estabeleceu 25 títulos (paróquias) em Roma para facilitar a administração dos sacramentos e o cuidado pastoral. Teve que lidar com a complexa questão dos "lapsi" (aqueles que haviam caído na fé during a perseguição), insistindo na necessidade de penitência.</p><h4>Mártir na Adversidade</h4><p>Por sua firmeza em defender a disciplina eclesiástica e a independência da Igreja, foi exilado pelo imperador Maxêncio. Diz a tradição que ele foi condenado a trabalhar nos estábulos públicos. Marcelo morreu como mártir, vítima dos maus tratos e do cansaço. Seu pontificado curto, mas decisivo, lembra-nos que a Igreja se fortalece na ordem e na coragem de seus pastores diante das tiranias do mundo.</p><p class="mt-4"><b>Oração:</b> Senhor, concede-nos que, pela intercessão do Papa São Marcelo, sejamos sempre fiéis à tua Igreja e saibamos defender a nossa fé com firmeza e coragem. Amém.</p>`,
      isMartyr: true
    }]
  },
  {
    day: 17,
    month: 'Janeiro',
    saints: [{
      name: 'Santo Antão',
      imageUrl: 'https://placehold.co/400x400?text=Santo+Antao',
      story: `<h4>O Pai dos Monges</h4><p>Santo Antão (ou Santo Antônio do Deserto) é considerado o fundador do monaquismo cristão. Nascido no Egito, ouviu no Evangelho o chamado de Jesus: "Vai, vende o que tens e dá-o aos pobres". Retirou-se para o deserto, onde viveu décadas em oração, jejum e combate espiritual. Sua fama de santidade atraiu milhares de discípulos, transformando o "deserto em uma cidade".</p><h4>O Combate da Fé</h4><p>Sua biografia, escrita por Santo Atanásio, relata suas famosas "tentações", vividas com uma coragem inabalável. Antão mostrou que o verdadeiro campo de batalha é o coração humano. Ele foi o guia espiritual de seu tempo, aconselhando tanto imperadores quanto camponeses. Sua vida é um convite radical à primazia de Deus e à busca do silêncio como espaço de encontro com o Absoluto. É o padroeiro dos animais.</p><p class="mt-4"><b>Oração:</b> Santo Antão, que encontraste no deserto a plenitude da união com Deus, ajuda-nos a vencer as tentações do mundo e a buscar sempre o que é eterno e verdadeiro. Amém.</p>`
    }]
  },
  {
    day: 18,
    month: 'Janeiro',
    saints: [{
      name: 'Santa Margarida da Hungria',
      imageUrl: 'https://placehold.co/400x400?text=Margarida+Hungria',
      story: `<h4>A Princesa Consagrada</h4><p>Filha do Rei Bela IV da Hungria, Margarida foi oferecida a Deus por seus pais para a libertação do país das invasões mongóis. Desde os quatro anos viveu no mosteiro dominicano na Ilha das Lebres, no Danúbio. Recusou todas as propostas de casamento real, declarando pertencer apenas ao Rei dos Reis. Viveu com uma humildade extraordinária, realizando os serviços mais baixos.</p><h4>Vítima de Amor</h4><p>Margarida oferecia seus jejuns e orações pela paz em sua pátria e pela união das famílias. Sua vida foi marcada por uma penitência austera e um amor ardente pela Eucaristia. Faleceu com apenas 28 anos, mas sua fama de santidade espalhou-se rapidamente. Ela é um exemplo de como a verdadeira nobreza consiste no serviço amoroso a Deus e aos irmãos, independentemente das origens e títulos.</p><p class="mt-4"><b>Oração:</b> Santa Margarida da Hungria, que renunciaste às glórias do mundo pelo amor de Cristo, ajuda-nos a valorizar as coisas celestes e a servir a Deus com um coração despojado e humilde. Amém.</p>`
    }]
  },
  {
    day: 19,
    month: 'Janeiro',
    saints: [{
      name: 'São Vulstano',
      imageUrl: 'https://placehold.co/400x400?text=Vulstano',
      story: `<h4>O Bispo do Povo</h4><p>São Vulstano foi o último bispo anglo-saxão da Inglaterra após a conquista normanda. Bispo de Worcester, ele era amado por sua simplicidade e por sua dedicação incansável ao povo. Embora fosse um homem de pouco brilho acadêmico, sua pregação era poderosa because vinha de um coração profundamente unido a Deus.</p><h4>Defensor da Liberdade</h4><p>Vulstano destacou-se por sua luta vigorosa contra o tráfico de escravos em Bristol, conseguindo a sua proibição. Ele foi um líder que soube unir a fidelidade às suas raízes com a obediência aos novos tempos, sempre buscando o bem comum. Sua vida demonstra que a verdadeira santidade brilha na integridade de caráter e na caridade ativa em favor dos mais oprimidos.</p><p class="mt-4"><b>Oração:</b> São Vulstano, fiel pastor do povo, intercede por nós para que tenhamos a coragem de defender a justiça e a dignidade de todas as pessoas com amor e humildade. Amém.</p>`
    }]
  },
  {
    day: 20,
    month: 'Janeiro',
    saints: [{
      name: 'São Sebastião',
      imageUrl: 'https://iili.io/fWNLcba.png',
      story: `<h4>O Soldado de Cristo</h4><p>São Sebastião nasceu em Narbona e foi educado em Milão. Tornou-se capitão da guarda pretoriana em Roma, usando a sua posição influente para secretamente apoiar os cristãos perseguidos e converter muitos ao cristianismo. A sua vida era um equilíbrio corajoso entre o dever ao imperador e a fidelidade suprema a Deus, num dos períodos mais difíceis da Igreja primitiva.</p><h4>O Primeiro Martírio</h4><p>Descoberto como cristão, o Imperador Diocleciano condenou-o a ser morto por flechas. Amarrado a um poste e crivado de flechas, foi deixado como morto. No entanto, uma piedosa viúva chamada Irene encontrou-o vivo e cuidou das suas feridas. Em vez de fugir, Sebastião apresentou-se novamente diante do imperador para anunciar a injustiça das perseguições, demonstrando uma coragem inabalável que continua a inspirar os fiéis hoje.</p><h4>Defensor contra as Pestes</h4><p>Finalmente martirizado com pancadas, o seu corpo foi lançado na Cloaca Máxima, mas recuperado e sepultado nas catacumbas. Ao longo dos séculos, São Sebastião tem sido invocado como protetor contra a peste e as epidemias, e o seu culto espalhou-se por todo o mundo, sendo um dos santos mais populares, especialmente no Brasil, onde é padroeiro da cidade do Rio de Janeiro.</p><p class="mt-4"><b>Oração:</b> São Sebastião, valoroso soldado de Cristo, que com a vossa vida e morte destes testemunho de fé inabalável, intercedei por nós em nossas necessidades e livrai-nos de todos os males físicos e espirituais.</p>`,
      isMartyr: true
    }]
  },
  {
    day: 21,
    month: 'Janeiro',
    saints: [{
      name: 'Santa Inês',
      imageUrl: 'https://placehold.co/400x400?text=Santa+Ines',
      story: `<h4>A Pureza Corajosa</h4><p>Inês, cujo nome significa "pura" em grego e "cordeiro" em latim, é uma das mártires mais célebres de Roma. Com apenas 12 ou 13 anos, preferiu a morte a renunciar à sua virgindade consagrada a Cristo. Recusando-se a casar com o filho do prefeito romano, declarou: "O meu coração está entregue a outro Amante". O seu testemunho mostra que a força de Deus se manifesta mesmo na fragilidade de uma criança.</p><h4>Firmeza na Provação</h4><p>Submetida a humilhações e ameaçada com o fogo, Inês permaneceu imperturbável. A tradição conta que, ao ser levada para um lugar de pecado, o seu cabelo cresceu milagrosamente para cobrir a sua nudez e um anjo a protegeu. Diante do carrasco, ela não hesitou, vendo na morte a porta para o encontro definitivo com o seu Esposo celeste. O seu martírio causou profunda impressão em toda a cristandade de Roma.</p><h4>Símbolo de Virgindade e Martírio</h4><p>Desde os primeiros séculos, Santa Inês é celebrada como um modelo de pureza e fidelidade. Na sua festa, abençoam-se dois cordeiros, cuja lã é usada para tecer os pálios que o Papa entrega aos arcebispos metropolitanos, simbolizando a união com o Sucessor de Pedro. O seu exemplo recorda-nos que o amor a Deus vale mais do que a própria vida e que a pureza de coração é uma força invencível.</p><p class="mt-4"><b>Oração:</b> Santa Inês, que com a vossa juventude e pureza vencestes as ciladas do mundo e as torturas do martírio, alcançai-nos a graça de amarmos a Cristo sobre todas as coisas e de guardarmos um coração puro e fiel.</p>`,
      isMartyr: true
    }]
  },
  {
    day: 22,
    month: 'Janeiro',
    saints: [
      {
        name: 'São Vicente de Saragoça',
        imageUrl: 'https://placehold.co/400x400?text=Vicente+Saragoca',
        story: `<h4>O Diácono de Ferro</h4><p>Vicente foi o diácono fiel do bispo Valério na Espanha do século IV. During a perseguição de Diocleciano, ele deu testemunho de uma eloquência e firmeza extraordinárias. Submetido a torturas inimagináveis, Vicente cantava hinos de louvor no meio das chamas, transformando sua cama de dor em um púlpito para pregar o amor de Cristo.</p>`,
        isMartyr: true
      },
      {
        name: 'Santa Blesila',
        imageUrl: 'https://placehold.co/400x400?text=Blesila',
        story: `<h4>Discípula de São Jerônimo</h4><p>Blesila era uma jovem viúva romana pertencente ao círculo de São Jerônimo. Em apenas alguns meses de intensa vida espiritual, ela aprendeu hebreu e dedicou-se ao estudo das Escrituras e à penitência. Faleceu muito jovem, sendo considerada um exemplo de como a graça pode transformar uma vida mundana em uma chama ardente de santidade em pouquíssimo tempo.</p>`
      }
    ]
  },
  {
    day: 23,
    month: 'Janeiro',
    saints: [{
      name: 'Santa Emerenciana',
      imageUrl: 'https://placehold.co/400x400?text=Emerenciana',
      story: `<h4>Mártir de Fé</h4><p>Santa Emerenciana era, segundo a tradição, irmã de leite de Santa Inês. Poucos dias após o martírio de Inês, Emerenciana foi encontrada rezando em seu túmulo e repreendendo os pagãos por sua crueldade. Por seu testemunho corajoso, foi apedrejada ali mesmo, recebendo o "batismo de sangue" antes mesmo de ser formalmente batizada com água.</p><h4>Coragem na Oração</h4><p>Seu exemplo mostra a força do vínculo sagrado que une os fiéis em Cristo. Ela preferiu morrer no lugar onde sua amiga deu a vida a viver em um mundo de injustiça. Emerenciana é invocada contra as dores de estômago e de cólicas, sendo um símbolo de fidelidade absoluta e de amizade que transcende a morte.</p><p class="mt-4"><b>Oração:</b> Santa Emerenciana, que com coragem testemunhaste a tua fé diante do túmulo de Santa Inês, ajuda-nos a ser fiéis aos nossos ideais e a testemunhar o amor de Cristo com desassombro. Amém.</p>`,
      isMartyr: true
    }]
  },
  {
    day: 24,
    month: 'Janeiro',
    saints: [{
      name: 'São Francisco de Sales',
      imageUrl: 'https://iili.io/fWNLRUP.png',
      story: `<h4>O Doutor da Mansidão</h4><p>São Francisco de Sales foi Bispo de Genebra during a Reforma Protestante. Conhecido por sua paciência e doçura extrema, ele converteu milhares de almas não por debates agressivos, mas pelo amor: "Uma gota de mel atrai mais moscas que um barril de vinagre". É o autor do clássico "Introdução à Vida Devota", que ensina que a santidade é possível em todos os estados de vida.</p><h4>Padroeiro dos Jornalistas</h4><p>Francisco usou panfletos e a escrita para difundir a fé, sendo um pioneiro nos meios de comunicação. Ele entendia que a comunicação deve ser serva da verdade e da caridade. Sua mensagem de que o coração de Deus é misericórdia continua a ser um farol para a Igreja moderna. É um modelo de pastor que soube unir a firmeza doutrinária com a ternura de um pai.</p><p class="mt-4"><b>Oração:</b> São Francisco de Sales, mestre da mansidão e da caridade, ensina-nos a falar com amor e a buscar a santidade nas pequenas coisas do nosso dia a dia. Amém.</p>`
    }]
  },
  {
    day: 25,
    month: 'Janeiro',
    saints: [{
      name: 'Conversão de São Paulo',
      imageUrl: 'https://placehold.co/400x400?text=Conversao+de+Sao+Paulo',
      story: `<h4>De Perseguidor a Apóstolo</h4><p>A conversão de Saulo de Tarso no caminho de Damasco é um dos eventos mais importantes da história do cristianismo. Saulo, um fariseu zeloso que perseguia violentamente a Igreja, foi derrubado pelo brilho de uma luz celeste e ouviu a voz de Jesus: "Saulo, Saulo, porque me persegues?". Este encontro pessoal com o Ressuscitado transformou radicalmente o seu coração, transformando o perseguidor no maior missionário da fé.</p><h4>O Apóstolo das Nações</h4><p>Após o seu batismo por Ananias, Paulo dedicou o resto da sua vida a anunciar o Evangelho aos gentios. Percorreu milhares de quilômetros, fundou inúmeras comunidades e escreveu cartas que se tornaram a base da teologia cristã. Paulo entendeu que, em Cristo, não há distinção entre judeu e grego, escravo e livre, homem e mulher. A sua vida é um testemunho do poder irresistível da graça de Deus que pode transformar qualquer pecador.</p><h4>Consumação no Amor</h4><p>A vida de Paulo foi marcada por perseguições, prisões e sofrimentos, mas nada o separou do amor de Cristo. O seu lema, "Para mim o viver é Cristo", resume a sua total entrega. A festa de sua conversão encerra a Semana de Oração pela Unidade dos Cristãos, lembrando-nos que a verdadeira unidade nasce da conversão comum ao Senhor. São Paulo ensina-nos que nunca é tarde para recomeçar e que Deus tem uma missão para cada um de nós.</p><p class="mt-4"><b>Oração:</b> Ó Deus, que ensinastes ao mundo inteiro pela pregação do Apóstolo São Paulo, dai-nos, ao celebrar hoje a sua conversão, a graça de caminhar para Vós seguindo os seus exemplos, e de ser testemunhas da vossa verdade.</p>`
    }]
  },
  {
    day: 26,
    month: 'Janeiro',
    saints: [
      {
        name: 'Santa Paula de Roma',
        imageUrl: 'https://placehold.co/400x400?text=Paula+de+Roma',
        story: `<h4>Mãe e Discípula</h4><p>Paula era uma nobre matrona romana que, ao ficar viúva, dedicou sua vida aos pobres e ao estudo das Escrituras sob a guia de São Jerônimo. Fundou mosteiros em Belém, onde passou o resto de sua vida em oração e auxílio ao trabalho de tradução da Bíblia. É um exemplo de como a riqueza pode ser transformada em tesouro no céu através da caridade.</p>`
      },
      {
        name: 'Santos Roberto, Alberico e Estevão',
        imageUrl: 'https://placehold.co/400x400?text=Fundadores+Cister',
        story: `<h4>Fundadores de Cister</h4><p>Estes três santos foram os fundadores da Ordem de Cister. Buscando a pureza da Regra de São Bento, eles fundaram o "Novo Mosteiro" no meio da floresta, focando no silêncio, na pobreza e no trabalho manual. Sua reforma renovou o monaquismo ocidental, focando na oração litúrgica e na vida contemplativa austera e bela.</p>`
      }
    ]
  },
  {
    day: 27,
    month: 'Janeiro',
    saints: [{
      name: 'Santa Angela Merici',
      imageUrl: 'https://placehold.co/400x400?text=Angela+Merici',
      story: `<h4>Pioneira na Educação</h4><p>Angela Merici fundou a Companhia de Santa Úrsula (Ursulinas), a primeira congregação religiosa feminina dedicada especificamente à educação de meninas fora dos mosteiros. Ela entendeu que transformar a família exige a formação completa das mulheres. Sua abordagem era baseada no amor, no respeito e na presença ativa no mundo.</p><h4>Visionária e Reformadora</h4><p>Em uma época em que o papel da mulher era muito restrito, Angela abriu novos horizontes, permitindo que as religiosas vivessem em suas próprias casas while serviam à comunidade. Sua espiritualidade era prática e profunda. Ela é a padroeira dos doentes e das pessoas que perderam a visão, lembrando-nos que o verdadeiro ensino é aquele que ilumina a alma com a luz da verdade divina.</p><p class="mt-4"><b>Oração:</b> Santa Angela Merici, que com sabedoria e coragem abriste caminhos para a educação e o serviço, ajuda-nos a ser promotores da verdade e do amor na educação das gerações futuras. Amém.</p>`
    }]
  },
  {
    day: 28,
    month: 'Janeiro',
    saints: [{
      name: 'Santo Tomás de Aquino',
      imageUrl: 'https://iili.io/fWNLA0B.png',
      story: `<h4>O Boi Mudo que Mugiu para o Mundo</h4><p>Tomás de Aquino, nascido em 1225, é considerado o maior filósofo e teólogo da Igreja Católica. Ingressou na Ordem Dominicana contra a vontade da família, buscando uma vida de estudo e oração. Os seus colegas chamavam-no de "boi mudo" devido ao seu silêncio e constituição robusta, mas o seu mestre, Santo Alberto Magno, profetizou que os seus mugidos seriam ouvidos em todo o mundo. A sua inteligência estava sempre ao serviço da fé.</p><h4>A Harmonia entre Fé e Razão</h4><p>A grande obra de Santo Tomás foi a "Suma Teológica", onde ele articulou com clareza e profundidade a harmonia entre a razão humana e a revelação divina. Ele ensinou que a fé não contradiz a razão, mas a eleva e a completa. Usando o pensamento de Aristóteles, construiu um sistema intelectual que continua a ser o fundamento dos estudos eclesiásticos. Para Tomás, o estudo era uma forma de adoração e uma busca incessante pela Verdade que é Deus.</p><h4>Mística e Humildade</h4><p>Apesar de sua imensa erudição, Santo Tomás era um homem profundamente místico e humilde. Foi ele quem compôs os belíssimos hinos para a festa de Corpus Christi, como o "Pange Lingua". Nos últimos meses de vida, após uma visão mística, parou de escrever, dizendo que tudo o que tinha escrito parecia "palha" diante do que tinha visto. Canonizado e declarado Doutor da Igreja, o "Doutor Angélico" é o padroeiro dos estudantes e das universidades católicas.</p><p class="mt-4"><b>Oração:</b> Deus eterno e todo-poderoso, que fizestes de Santo Tomás de Aquino um modelo de sabedoria e de procura da verdade, concedei-nos a graça de compreender o que ele ensinou e de imitar o que ele viveu.</p>`
    }]
  },
  {
    day: 29,
    month: 'Janeiro',
    saints: [{
      name: 'Santo Andrei Rublev',
      imageUrl: 'https://placehold.co/400x400?text=Andrei+Rublev',
      story: `<h4>O Iconomógrafo de Deus</h4><p>Andrei Rublev foi o maior pintor de ícones da Rússia medieval. Como monge, ele entendia a arte como uma forma de liturgia e de oração. Seu ícone mais famoso, "A Trindade", é uma obra prima que expressa a unidade e o amor infinitos do Deus Trino através da beleza de cores e formas transcendentais.</p><h4>Beleza que Salva</h4><p>Para Rublev, pintar um ícone era janelas abertas para o Céu. Sua vida foi marcada pelo silêncio e pela contemplação da glória de Deus. Ele não buscava a fama artística, mas a glória do Senhor. Seu legado ensina-nos que a beleza é um caminho fundamental para a evangelização e que o artista cristão deve ser, antes de tudo, um homem de oração profunda.</p><p class="mt-4"><b>Oração:</b> Santo Andrei Rublev, que através da tua arte nos permitiste contemplar os mistérios divinos, ajuda-nos a buscar a beleza que conduz à Verdade e a fazer da nossa vida um ícone da glória de Deus. Amém.</p>`
    }]
  },
  {
    day: 30,
    month: 'Janeiro',
    saints: [{
      name: 'Santa Martina',
      imageUrl: 'https://placehold.co/400x400?text=Santa+Martina',
      story: `<h4>Mártir de Roma</h4><p>Martina foi uma virgem romana do século III, filha de um cônsul cristão. Conhecida por sua imensa caridade para com os pobres, ela foi presa during a perseguição de Alexandre Severo. Condenada a adorar ídolos, Martina orava com tanta fé que as estátuas pagãs se despedaçavam. Foi submetida a várias torturas antes de ser decapitada.</p><h4>Testemunho de Fortaleza</h4><p>Sua vida é um hino à fortaleza cristã. Diz a tradição que, when foi lançada aos leões, as feras se deitaram a seus pés como gatinhos. Sua santidade impressionou até mesmo seus algozes. É uma das padroeiras de Roma e sua vida nos recorda que o verdadeiro poder reside na entrega total a Cristo, que fortalece os pequenos para confundir os grandes deste mundo.</p><p class="mt-4"><b>Oração:</b> Santa Martina, cuja fé moveu as montanhas da idolatria e do medo, intercede por nós para que tenhamos a coragem de testemunhar o Evangelho com alegria e firmeza. Amém.</p>`,
      isMartyr: true
    }]
  },
  {
    day: 31,
    month: 'Janeiro',
    saints: [{
      name: 'São João Bosco',
      imageUrl: 'https://iili.io/fWNLufV.png',
      story: `<h4>O Pai e Mestre da Juventude</h4><p>João Bosco nasceu numa pobre família de camponeses no Piemonte, Itália. Desde cedo, sentiu a missão de dedicar a sua vida aos jovens, especialmente aos mais pobres e abandonados. Com o seu "Sistema Preventivo", baseado na razão, na religião e no amor (amorevolezza), transformou a vida de milhares de rapazes em Turim, oferecendo-lhes não apenas instrução e trabalho, mas um lar e uma família espiritual.</p><h4>Fundador e Visionário</h4><p>Para perpetuar a sua obra, fundou a Sociedade de São Francisco de Sales (Salesianos) e, com Santa Maria Domingas Mazzarello, as Filhas de Maria Auxiliadora. Dom Bosco era um homem de sonhos proféticos, mas também de uma ação prática e incansável. Ele entendeu que, para salvar a alma dos jovens, era preciso primeiro conquistar o seu coração através da bondade e da presença alegre entre eles. "Basta que sejais jovens para que eu vos ame", dizia ele.</p><h4>Devoção a Maria Auxiliadora</h4><p>Dom Bosco foi um grande propagador da devoção a Nossa Senhora Auxiliadora e da frequência aos sacramentos da Confissão e da Eucaristia. A sua vida foi marcada por inúmeros milagres e providências divinas que o ajudaram a construir escolas e igrejas sem recursos. Canonizado em 1934, é venerado como o padroeiro dos jovens, dos educadores e dos editores. O seu lema, "Da mihi animas, caetera tolle" (Dai-me almas e ficai com o resto), resume a sua paixão evangelizadora.</p><p class="mt-4"><b>Oração:</b> Senhor nosso Deus, que suscitastes São João Bosco para ser pai e mestre da juventude, fazei que, inflamados pelo mesmo amor, nos dediquemos à salvação dos irmãos e ao vosso serviço. Amém.</p>`
    }]
  },
  {
    day: 8,
    month: 'Fevereiro',
    saints: [{
      name: 'S. Josefina Bakhita',
      imageUrl: 'https://i.postimg.cc/Pr80rRjM/image.png',
      story: `<p>Nascida no Sudão em 1869, Josefina Bakhita (que significa "afortunada") teve uma infância tragicamente marcada pela escravidão. Raptada aos nove anos, conheceu os horrores da brutalidade humana, sendo vendida várias vezes e sofrendo indizíveis torturas físicas e morais. A sua história é um testemunho pungente da crueldade de que o homem é capaz, mas também da extraordinária capacidade de resiliência e perdão que nasce da fé.</p><p>A sua "sorte" mudou when foi comprada por um cônsul italiano, que a levou para Itália e a entregou a uma família amiga. Foi aí que Bakhita conheceu o cristianismo. Ao aprender sobre Jesus, que também foi açoitado e crucificado, sentiu que finalmente tinha encontrado um "Patrão" que a amava incondicionalmente. Em 1890, recebeu o batismo, a crisma e a primeira comunhão, escolhendo o nome Josefina. A liberdade legal que obteve foi apenas um pálido reflexo da profunda liberdade interior que encontrou em Cristo.</p><p>Em 1896, Josefina ingressou nas Irmãs Canossianas, onde passou o resto da sua vida em humildade e serviço, sendo carinhosamente chamada de "Irmã Morena". A sua vida foi um contínuo ato de perdão e de gratidão. Questionada sobre o que faria se encontrasse os seus raptores, respondeu que se ajoelharia para lhes beijar as mãos, pois se não fosse por eles, não teria conhecido Jesus. A sua história ensina-nos que o sofrimento, when unido a Cristo, pode tornar-se um caminho de salvação e de santidade.</p><p class="mt-4"><b>Oração:</b> Ó Santa Josefina Bakhita, que, passando pela escravidão, encontrastes a verdadeira liberdade em Cristo, ajudai-nos a superar todas as formas de escravidão do nosso tempo e a encontrar em Deus a nossa única e verdadeira esperança.</p><p class="mt-2 italic">S. Josefina Bakhita, rogai por nós.</p>`
    }]
  },
  {
    day: 1,
    month: 'Outubro',
    saints: [{
      name: 'S. Teresinha',
      imageUrl: 'https://i.postimg.cc/G2y7k85b/image.png',
      story: `<h4>A Pequena Via para a Santidade</h4><p>Teresa Martin, nascida em Alençon, França, em 1873, viveu uma vida curta mas de imenso impacto espiritual. Entrou para o Carmelo de Lisieux aos 15 anos, onde, longe de grandes feitos externos, desenvolveu a sua famosa "Pequena Via". Este caminho consiste em encontrar Deus não em grandes penitências, mas no amor e na confiança abandonada, expressos nos atos mais simples e rotineiros. A sua espiritualidade da infância espiritual ensina que a santidade é acessível a todos, bastando reconhecer a própria pequenez e entregar-se totalmente à misericórdia de um Deus que é Pai.</p><h4>Amor no Coração da Igreja</h4><p>O maior desejo de Teresinha era "ser o amor no coração da Igreja". Ela compreendeu que, sem o amor, todas as vocações são vazias. Viveu cada momento, desde os trabalhos comunitários até os sofrimentos da sua doença, como um ato de amor por Deus e pela salvação das almas. Em sua autobiografia, "História de uma Alma", revela uma alma ardente, missionária, que prometeu "passar o seu céu a fazer o bem na terra", deixando cair uma "chuva de rosas" de graças sobre o mundo.</p><h4>Doutora da Igreja</h4><p>Apesar de sua vida escondida e de sua morte prematura aos 24 anos, a profundidade de sua doutrina espiritual foi reconhecida por toda a Igreja. Em 1997, o Papa São João Paulo II declarou-a Doutora da Igreja, um título raro, especialmente para uma jovem que não frequentou universidades. A sua ciência, a "ciência do amor", continua a iluminar e a guiar fiéis em todo o mundo, mostrando que a perfeição consiste em fazer a vontade de Deus com um coração inteiramente entregue.</p><p class="mt-4"><b>Oração:</b> Ó Santa Teresinha do Menino Jesus, que prometestes deixar cair uma chuva de rosas, eu vos peço: fazei-me experimentar a vossa intercessão junto de Deus, alcançando-me as graças que necessito e ensinando-me o caminho da confiança e do amor.</p><p class="mt-2 italic">S. Teresinha do Menino Jesus, rogai por nós.</p>`
    }]
  },
  {
    day: 2,
    month: 'Outubro',
    saints: [{
      name: 'Santos Anjos da Guarda',
      imageUrl: 'https://i.postimg.cc/251LGdkn/image.png',
      story: `<h4>Companheiros Celestes</h4><p>A fé católica, baseada na Sagrada Escritura, ensina que cada pessoa é confiada por Deus à proteção de um Anjo da Guarda. O Catecismo da Igreja Católica afirma que "desde a infância até à morte, a vida humana é acompanhada pela sua assistência e intercessão" (CIC 336). Eles não são uma fantasia poética, mas uma presença real e pessoal, um sinal concreto do cuidado paternal de Deus que nunca nos deixa sozinhos na jornada da vida.</p><h4>Guia e Protetor</h4><p>A missão do nosso Anjo da Guarda é múltipla: ele nos protege dos perigos físicos e espirituais, ilumina a nossa consciência para nos ajudar a discernir o bem do mal e apresenta as nossas orações a Deus. Ele é um amigo fiel, um guia seguro no caminho da salvação e um poderoso defensor contra as ciladas do demônio. A devoção aos Santos Anjos fortalece a nossa confiança na Providência Divina e nos incentiva a viver com mais atenção à voz de Deus.</p><h4>Uma Amizade a ser Cultivada</h4><p>A celebração deste dia convida-nos a renovar a nossa amizade e diálogo com o nosso Anjo da Guarda. Podemos invocá-lo nas nossas dificuldades, agradecer-lhe pela sua proteção constante e escutar as suas inspirações. Santos como São Padre Pio e Santa Teresinha tinham uma profunda intimidade com os seus anjos. Que o seu exemplo nos inspire a cultivar esta amizade celeste, que nos conduzirá com segurança ao encontro definitivo com Deus no Céu.</p><p class="mt-4"><b>Oração:</b> Santo Anjo do Senhor, meu zeloso guardador, se a ti me confiou a piedade divina, sempre me rege, me guarda, me governa e ilumina. Amém.</p><p class="mt-2 italic">Santos Anjos da Guarda, rogai por nós.</p>`
    }]
  },
  {
    day: 4,
    month: 'Outubro',
    saints: [{
      name: 'S. Francisco de Assis',
      imageUrl: 'https://i.postimg.cc/fVs0LZz6/sao-francisco-assis.jpg',
      story: `<h4>O Jovem de Assis</h4><p>Nascido em 1182, filho de um rico comerciante de tecidos, Francisco Bernardone viveu uma juventude de luxo e sonhos de glória militar. No entanto, uma profunda crise espiritual, marcada pela prisão durante uma guerra e um encontro transformador com um leproso, mudou o rumo de sua vida. O ponto de viragem definitivo foi when, em oração na capela de São Damião, ouviu a voz do crucifixo que lhe dizia: "Francisco, vai e repara a minha casa que, como vês, está em ruínas".</p><h4>O Abraço à Pobreza</h4><p>Tomando o mandato de Cristo literalmente, Francisco renunciou a toda a sua herança, despojando-se de suas roupas na praça de Assis diante de seu pai e do bispo. Abraçou uma vida de pobreza radical, pregando o Evangelho com simplicidade e alegria, e servindo os mais marginalizados. Fundou a Ordem dos Frades Menores (Franciscanos), a Ordem das Clarissas e a Ordem Terceira, convidando homens e mulheres de todos os estados de vida a seguir os passos de Cristo pobre e humilde.</p><h4>Cântico das Criaturas</h4><p>Francisco é um ícone universal de paz e amor por toda a Criação. No seu "Cântico das Criaturas", ele louva a Deus através do "irmão sol", da "irmã lua" e de todos os elementos da natureza, vendo em cada criatura um reflexo da bondade do Criador. Nos últimos anos de sua vida, no Monte Alverne, recebeu os estigmas, tornando-se um sinal vivo da Paixão de Cristo. Sua vida é um testemunho radical do poder transformador do Evangelho vivido em sua pureza original.</p><p class="mt-4"><b>Oração:</b> Senhor, fazei de mim um instrumento da Vossa paz. Onde houver ódio, que eu leve o amor; onde houver ofensa, que eu leve o perdão; onde houver discórdia, que eu leve a união.</p><p class="mt-2 italic">São Francisco de Assis, rogai por nós.</p>`
    }]
  },
  {
    day: 5,
    month: 'Outubro',
    saints: [{
      name: 'S. Faustina Kowalska',
      imageUrl: 'https://i.postimg.cc/qBKkbHTj/39a80df1d720976f7e55e00f40eadc90-1.jpg',
      story: `<h4>A Apóstola da Misericórdia</h4><p>Helena Kowalska, nascida em 1905 numa pobre família de camponeses na Polónia, foi a terceira de dez filhos. Desde cedo sentiu o chamado à vida religiosa, mas enfrentou a oposição dos pais. Aos 20 anos, após uma visão de Cristo sofredor, entrou para a Congregação das Irmãs de Nossa Senhora da Misericórdia em Varsóvia, recebendo o nome de Irmã Maria Faustina. Sua vida no convento foi simples e humilde, dedicada aos trabalhos mais básicos, mas seu mundo interior era extraordinariamente rico em graças místicas.</p><h4>As Revelações de Jesus Misericordioso</h4><p>A partir de 1931, Jesus começou a aparecer a Santa Faustina, confiando-lhe a missão de ser a "Secretária e Apóstola da Sua Misericórdia". Cristo pediu-lhe que pintasse uma imagem Sua com a inscrição "Jesus, eu confio em Vós", que se celebrasse a Festa da Misericórdia no domingo a seguir à Páscoa, e que se rezasse o Terço da Misericórdia, especialmente pelos pecadores e agonizantes. Jesus revelou-lhe que a Sua Misericórdia é o último refúgio para a humanidade, uma fonte inesgotável de graças para todos os que a ela recorrem com confiança.</p><h4>O Diário: Um Tesouro Espiritual</h4><p>Por ordem de seu diretor espiritual, o Beato Miguel Sopoćko, Santa Faustina escreveu um Diário, registando as suas profundas experiências místicas e os diálogos com Jesus. Este "Diário: A Divina Misericórdia na Minha Alma" tornou-se um dos clássicos da literatura espiritual do século XX. Nele, encontramos um convite urgente à confiança no amor infinito de Deus, que é sempre maior que a nossa miséria. Santa Faustina faleceu de tuberculose aos 33 anos, e a sua message espalhou-se rapidamente, sendo um farol de esperança para o nosso tempo.</p><p class="mt-4"><b>Oração:</b> Ó Sangue e Água que jorrastes do Coração de Jesus como fonte de misericórdia para nós, eu confio em Vós.</p><p class="mt-2 italic">Santa Faustina Kowalska, rogai por nós.</p>`
    }]
  },
  {
    day: 6,
    month: 'Outubro',
    saints: [{
      name: 'S. Bruno',
      imageUrl: 'https://i.postimg.cc/SnbcMCrM/image.png',
      story: `<h4>O Erudito que Buscava a Deus</h4><p>São Bruno, nascido em Colônia, Alemanha, por volta de 1030, foi um dos homens mais cultos de seu tempo. Tornou-se reitor da prestigiosa escola da catedral de Reims, na França, onde formou muitos alunos notáveis, incluindo o futuro Papa Urbano II. No entanto, o seu coração ansiava por algo mais do que o sucesso acadêmico e eclesiástico. Profundamente desiludido com a simonia e a corrupção que via em seu meio, sentiu um chamado irresistível a uma vida de silêncio e solidão para se dedicar inteiramente a Deus.</p><h4>A Fundação da Cartuxa</h4><p>Em 1084, junto com seis companheiros, Bruno retirou-se para um local deserto e inóspito nos Alpes franceses, conhecido como Chartreuse. Ali, eles construíram um eremitério, dando início à Ordem dos Cartuxos. A regra cartusiana, que Bruno ajudou a estabelecer, combina de forma única a vida eremítica (cada monge vive em sua própria cela em silêncio e oração) com a vida cenobítica (reúnem-se para a liturgia e algumas refeições). Esta forma de vida radical busca a união com Deus através da contemplação ininterrupta.</p><h4>Um Legado de Silêncio</h4><p>Mesmo when o Papa Urbano II, seu antigo aluno, o chamou a Roma para ser seu conselheiro, o coração de Bruno permaneceu no deserto. Após algum tempo, obteve permissão para fundar um novo eremitério na Calábria, no sul da Itália, onde viveu até sua morte em 1101. O lema dos cartuxos, "Stat crux dum volvitur orbis" (A Cruz permanece firme while o mundo gira), resume perfeitamente o legado de São Bruno: um testemunho silencioso de que, no meio da agitação do mundo, a única realidade que permanece é a busca do Absoluto.</p><p class="mt-4"><b>Oração:</b> Ó Deus, que chamastes São Bruno para vos servir no silêncio e na solidão, concedei-nos, por sua intercessão, que, no meio da agitação do mundo, saibamos guardar um coração silencioso para Vos encontrar. Amém.</p><p class="mt-2 italic">São Bruno, rogai por nós.</p>`
    }]
  },
  {
    day: 7,
    month: 'Outubro',
    saints: [{
      name: 'N.S. do Rosário',
      imageUrl: 'https://i.postimg.cc/2669v1gr/nsr.jpg',
      story: `<h4>A Oração que Veio do Céu</h4><p>As origens do Santo Rosário remontam ao século XIII, when, segundo a tradição, São Domingos de Gusmão, em sua luta contra a heresia albigense, recebeu da própria Virgem Maria esta oração como uma arma poderosa para a conversão e a paz. A simplicidade de meditar os mistérios da vida de Cristo while se reza as Ave-Marias tornou o Rosário uma "Bíblia dos pobres" e uma escola de oração acessível a todos, difundindo-se rapidamente por toda a cristandade como uma prática de piedade popular e eficaz.</p><h4>A Vitória de Lepanto</h4><p>A festa de hoje foi instituída pelo Papa São Pio V em 1571 para celebrar a milagrosa vitória da frota cristã contra o Império Otomano na Batalha de Lepanto. Enquanto a batalha se desenrolava no mar, o Papa e toda a cristandade rezavam o Rosário, suplicando a intercessão da Virgem. A vitória foi atribuída diretamente à proteção de Maria, "Auxílio dos Cristãos". Em reconhecimento, o Papa estabeleceu a festa de "Nossa Senhora da Vitória", que seu sucessor, Gregório XIII, renomeou para "Nossa Senhora do Rosário".</p><h4>Um Compêndio do Evangelho</h4><p>O Rosário é muito mais do que uma simples repetição de orações. É uma "escola de Maria", um caminho contemplativo onde, na companhia da Mãe, meditamos sobre os principais mistérios da vida, paixão, morte e ressurreição de Jesus Cristo. Nas suas aparições em Lourdes e Fátima, a própria Virgem Maria insistiu na recitação diária do terço como um remédio para os males do mundo, um caminho para a paz e a conversão dos pecadores, reafirmando o seu poder e a sua importância para a vida da Igreja.</p><p class="mt-4"><b>Oração:</b> À Vossa Proteção recorremos, Santa Mãe de Deus. Não desprezeis as nossas súplicas em nossas necessidades, mas livrai-nos sempre de todos os perigos, ó Virgem gloriosa e bendita.</p><p class="mt-2 italic">N.S. do Rosário, rogai por nós.</p>`
    }]
  },
  {
    day: 8,
    month: 'Outubro',
    saints: [{
      name: 'S. Reparata',
      imageUrl: 'https://i.postimg.cc/QN4QQTH8/statue-of-saint-reparata.webp',
      story: `<h4>A Jovem Mártir de Cesareia</h4><p>Santa Reparata é uma jovem virgem e mártir dos primeiros séculos do cristianismo, venerada especialmente em Florença e na Córsega. Embora os detalhes históricos de sua vida sejam escassos e envoltos em lenda, a tradição a apresenta como uma jovem de Cesareia, na Palestina, que enfrentou o martírio durante a perseguição do imperador Décio, por volta do ano 250. Teria apenas doze anos when testemunhou a sua fé com coragem inabalável.</p><h4>A Coragem na Tortura</h4><p>A lenda conta que Reparata foi submetida a terríveis torturas por se recusar a sacrificar aos ídolos pagãos. Foi colocada em fornalhas ardentes, das quais saiu ilesa, e teve os seus seios cortados, mas a sua fé permaneceu firme. A sua constância diante do sofrimento converteu muitos dos que assistiam ao seu suplício. Finalmente, foi decapitada, e a tradição diz que a sua alma foi vista a subir ao céu em forma de uma pomba branca, símbolo da sua pureza e do seu espírito vitorioso.</p><h4>Padroeira de Florença</h4><p>O culto a Santa Reparata espalhou-se pelo Mediterrâneo, e ela tornou-se a padroeira principal de Florença antes da construção da catedral dedicada a Santa Maria del Fiore. A antiga catedral da cidade era dedicada a ela, e as suas relíquias repousam hoje sob o novo Duomo. A sua história, embora lendária, continua a inspirar os fiéis a uma fidelidade corajosa a Cristo, mesmo diante das maiores adversidades, mostrando que a força de Deus se manifesta na fraqueza humana.</p><p class="mt-4"><b>Oração:</b> Ó Deus, que destes a Santa Reparata a coragem de testemunhar a fé até ao martírio, concedei-nos, por sua intercessão, a força para sermos fiéis a Vós em todas as circunstâncias da nossa vida.</p><p class="mt-2 italic">S. Reparata, rogai por nós.</p>`,
      isMartyr: true
    }]
  },
  {
    day: 9,
    month: 'Outubro',
    saints: [{
      name: 'S. John Henry Newman',
      imageUrl: 'https://i.postimg.cc/9fCw5mrL/Photo-of-John-Henry-Newman.jpg',
      story: `<h4>Uma Mente Brilhante</h4><p>John Henry Newman, nascido em Londres em 1801, foi uma das mentes mais brilhantes e influentes do século XIX. Como sacerdote anglicano e líder do Movimento de Oxford, procurou renovar a Igreja da Inglaterra, aprofundando as suas raízes católicas. A sua busca intelectual honesta e incansável pela verdade levou-o a uma profunda crise de fé, que o confrontou com as reivindicações da Igreja Católica Romana.</p><h4>A Jornada para Roma</h4><p>Após anos de estudo, oração e angústia interior, Newman concluiu que a Igreja Católica era a única Igreja fundada por Cristo. Em 1845, aos 44 anos, tomou a corajosa decisão de se converter ao catolicismo, perdendo a sua posição em Oxford, os seus amigos e o seu prestígio. A sua jornada é um testemunho poderoso de que a fé não teme a razão. O seu famoso lema, "Cor ad cor loquitur" (O coração fala ao coração), resume a sua convicção de que a fé é um encontro pessoal com Deus.</p><h4>Cardeal e Santo</h4><p>Como católico, Newman continuou a sua vasta obra intelectual, fundando o Oratório de São Filipe Néri na Inglaterra e escrevendo obras fundamentais sobre teologia, filosofia e educação. Em 1879, foi criado cardeal pelo Papa Leão XIII, um reconhecimento da sua imensa contribuição para a Igreja. Canonizado em 2019, São John Henry Newman é um modelo para todos os que buscam a verdade com um coração sincero, mostrando que o caminho da fé é uma peregrinação contínua guiada pela luz da consciência.</p><p class="mt-4"><b>Oração:</b> Ó Deus, que destes ao Cardeal São John Henry Newman a graça de seguir a luz da Vossa verdade, concedei-nos, por sua intercessão, a coragem de procurar-Vos sempre e a alegria de Vos encontrar.</p><p class="mt-2 italic">São John Henry Newman, rogai por nós.</p>`
    }]
  },
  {
    day: 10,
    month: 'Outubro',
    saints: [{
      name: 'S. Daniel Comboni',
      imageUrl: 'https://i.postimg.cc/wMmh29fg/250px-Daniele-Comboni.jpg',
      story: `<h4>Um Coração para a África</h4><p>Daniel Comboni nasceu em 1831, numa família pobre do norte da Itália. Desde jovem, sentiu um chamado ardente para a missão na África, um continente então conhecido como um lugar de sofrimento e exploração. O seu coração inflamou-se com o desejo de levar o Evangelho e a dignidade humana aos povos africanos, que ele amava profundamente. Tornou-se sacerdote e dedicou toda a sua energia, a sua inteligência e a sua vida a esta causa.</p><h4>"Salvar a África com a África"</h4><p>Comboni foi um visionário. Ele entendeu, muito antes de seu tempo, que a evangelização da África não poderia ser apenas obra de missionários estrangeiros. O seu plano pastoral, resumido no lema "Salvar a África com a África", consistia em formar catequistas, sacerdotes, religiosas e líderes locais que se tornariam os protagonistas da evangelização do seu próprio povo. Fundou os Missionários Combonianos e as Irmãs Missionárias Combonianas para realizar este sonho.</p><h4>Bispo e Pai dos Africanos</h4><p>Nomeado Vigário Apostólico da África Central, enfrentou inúmeras dificuldades: doenças, a hostilidade dos traficantes de escravos e a falta de recursos. No entanto, a sua confiança na Providência e o seu amor pelos africanos nunca vacilaram. Viajou incansavelmente, fundou escolas, hospitais e missões, e lutou vigorosamente contra a escravatura. Morreu em Cartum, no Sudão, em 1881, vítima da malária, entregando a sua vida como semente de uma nova Igreja africana.</p><p class="mt-4"><b>Oração:</b> Ó Deus, que fizestes de São Daniel Comboni um apóstolo incansável da África, acendei em nós o mesmo ardor missionário para que possamos levar o Vosso amor a todos os povos, especialmente aos mais pobres e abandonados.</p><p class="mt-2 italic">São Daniel Comboni, rogai por nós.</p>`
    }]
  },
  {
    day: 11,
    month: 'Outubro',
    saints: [{
      name: 'S. João XXIII',
      imageUrl: 'https://i.postimg.cc/d1zCLzsw/Ioannes-XXIII-by-De-Agostini-1958-1963.jpg',
      story: `<h4>O "Papa de Transição"</h4><p>Angelo Roncalli nasceu numa humilde família de camponeses italianos em 1881. A sua carreira eclesiástica levou-o a servir como diplomata da Santa Sé na Bulgária, Turquia e França, experiências que lhe deram uma visão ampla do mundo e um grande apreço pelo diálogo. Eleito Papa em 1958, aos 76 anos, muitos pensaram que ele seria um "Papa de transição", um pontífice idoso que manteria o status quo. No entanto, o Espírito Santo tinha outros planos.</p><h4>O Concílio Vaticano II</h4><p>Para surpresa de todos, apenas três meses após a sua eleição, São João XXIII anunciou a convocação de um Concílio Ecumênico. Ele sentia que a Igreja precisava de um "aggiornamento", uma atualização, para poder dialogar eficazmente com o mundo moderno. Com a sua famosa imagem, ele queria "abrir as janelas da Igreja" para deixar entrar o ar fresco do Espírito Santo. O Concílio Vaticano II, inaugurado em 1962, transformaria profundamente a face da Igreja Católica no século XX.</p><h4>O "Papa Bom"</h4><p>O seu pontificado foi curto, mas o seu impacto foi imenso. Com a sua bondade, simplicidade e bom humor, conquistou o coração do mundo inteiro, sendo carinhosamente chamado de "Papa Bom". A sua encíclica "Pacem in Terris" (Paz na Terra), dirigida a todos os homens de boa vontade, tornou-se um documento de referência para a paz e os direitos humanos. Faleceu em 1963, antes do fim do Concílio, mas a sua visão profética continua a guiar a Igreja no terceiro milénio.</p><p class="mt-4"><b>Oração:</b> Ó São João XXIII, que com a vossa simplicidade e bondade abristes os corações dos homens à esperança, ajudai-nos a ser, como vós, dóceis ao Espírito Santo e construtores de paz no mundo.</p><p class="mt-2 italic">São João XXIII, rogai por nós.</p>`
    }]
  },
  {
    day: 12,
    month: 'Outubro',
    saints: [
      { name: 'N.S. Aparecida', imageUrl: 'https://i.postimg.cc/Lsyj4XMh/4011bde1376c5422265a41f3a652c540.jpg', story: `<h4>Rainha e Padroeira do Brasil</h4><p>Em 1717, três pescadores, lançando suas redes no Rio Paraíba do Sul, encontraram primeiro o corpo e depois a cabeça de uma pequena imagem de Nossa Senhora da Conceição. A partir daquele momento, a pesca que antes era infrutífera, tornou-se prodigiosamente abundante. Este foi o humilde começo da devoção a Nossa Senhora "Aparecida", que se tornaria o maior santuário mariano do mundo e o coração da fé católica no Brasil.</p><h4>Mãe do Povo Brasileiro</h4><p>A pequena imagem de terracota, com sua cor escura, tornou-se um símbolo poderoso da mãe que acolhe todos os seus filhos, sem distinção de cor, raça ou classe social. Ela é a representação da inculturação do Evangelho na alma do povo brasileiro. Em sua pequenez e simplicidade, ela nos recorda que Deus escolhe o que é fraco e humilde para confundir os fortes.</p><h4>Fonte de Graças e Milagres</h4><p>Ao longo de três séculos, milhões de peregrinos têm acorrido ao seu santuário, buscando consolo, cura e esperança. A história de Aparecida é uma história de milagres e de fé, desde o milagre das velas que se acenderam sozinhas até às inúmeras graças testemunhadas pelos seus devotos. Ela é a prova viva de que Maria é uma mãe sempre presente e atenta às necessidades de seus filhos.</p><p class="mt-4"><b>Oração:</b> Ó incomparável Senhora da Conceição Aparecida, Mãe de Deus, Rainha dos Anjos, Advogada dos pecadores, refúgio e consolação dos aflitos e atribulados, livrai-nos de tudo o que possa ofender-vos e ao vosso Santíssimo Filho, meu Redentor e nosso Senhor Jesus Cristo.</p><p class="mt-2 italic">N.S. Aparecida, rogai por nós.</p>` },
      { name: 'S. Carlo Acutis', imageUrl: 'https://i.postimg.cc/CKrbWHjb/8a6ca2d967cbe5b8b65b068da82f495e.jpg', story: `<h4>Um Jovem do Nosso Tempo</h4><p>Carlo Acutis, nascido em 1991, foi um jovem como tantos outros: gostava de videojogos 🎮, de computadores 💻 e de futebol. No entanto, o que o distinguia era um amor extraordinário e contagiante por Jesus, especialmente na Eucaristia ✝️, que ele chamava de sua "autoestrada para o Céu". Sua vida é um testemunho luminoso de que a santidade não é algo distante ou reservado a poucos, mas um chamado para todos, que pode ser vivido na alegria e na normalidade da vida quotidiana.</p><h4>O Ciberapóstolo da Eucaristia</h4><p>Dotado de um talento notável para a informática, Carlo não usou a internet para se isolar, mas para evangelizar. Criou um website para catalogar todos os milagres eucarísticos reconhecidos pela Igreja em todo o mundo, um trabalho que continua a inspirar e a fortalecer a fé de muitos. Ele entendeu que a tecnologia pode ser uma ferramenta poderosa para o bem e para levar a mensagem de Cristo a todos os cantos do mundo.</p><h4>Ofertório de Vida</h4><p>Diagnosticado com uma forma agressiva de leucemia, Carlo enfrentou a doença com uma serenidade e uma fé desconcertantes. Ofereceu todos os seus sofrimentos pelo Papa e pela Igreja 🙏. Faleceu em 12 de outubro de 2006, aos 15 anos, no dia de Nossa Senhora Aparecida, deixando um legado de alegria e uma certeza: "A nossa meta deve ser o infinito, não o finito. O Infinito é a nossa Pátria. Desde sempre somos esperados no Céu."</p><p class="mt-4"><b>Oração:</b> Ó Deus, nosso Pai, que nos destes no São Carlo Acutis um modelo de amor à Eucaristia e de zelo apostólico, concedei-nos, por sua intercessão, a graça de vivermos sempre unidos a Jesus e de O testemunharmos com alegria aos nossos irmãos.</p><p class="mt-2 italic">S. Carlo Acutis, rogai por nós.</p>` }
    ]
  },
  {
    day: 13,
    month: 'Outubro',
    saints: [{
      name: 'Beata Alexandrina de Balazar',
      imageUrl: 'https://i.postimg.cc/nrFJYLcQ/image.png',
      story: `<h4>A "Santinha de Balazar"</h4><p>Alexandrina Maria da Costa, nascida em 1904 em Balazar, Portugal, foi uma alma mística extraordinária do século XX. Aos 14 anos, para defender a sua pureza de um ataque, saltou de uma janela, ficando com sequelas que a deixaram paralisada aos 21. A partir de então, o seu leito de dor tornou-se um altar, onde ofereceu a sua vida como vítima de amor pela conversão dos pecadores e pela paz no mundo.</p><h4>Alimentada pela Eucaristia</h4><p>A vida de Alexandrina foi marcada por fenómenos místicos impressionantes. Durante quatro anos, todas as sextas-feiras, reviveu fisicamente e espiritualmente a Paixão de Cristo. O mais notável, no entanto, foi o facto de, nos últimos treze anos da sua vida, não ter tomado qualquer alimento ou bebida, alimentando-se exclusivamente da Sagrada Eucaristia. Este milagre, rigorosamente estudado por médicos, é um testemunho eloquente do poder da Eucaristia como verdadeiro "Pão da Vida".</p><h4>"Amar, Sofrer, Reparar"</h4><p>O seu lema era "amar, sofrer, reparar". Viveu cada momento de seu intenso sofrimento em união com Jesus, oferecendo-se como uma hóstia viva. O seu diretor espiritual, um padre jesuíta, documentou as suas palavras e experiências, que revelam uma profunda união com Deus. Beatificada em 2004 pelo Papa São João Paulo II, a Beata Alexandrina de Balazar ensina-nos o valor redentor do sofrimento e a centralidade da Eucaristia na vida cristã.</p><p class="mt-4"><b>Oração:</b> Ó Jesus, que na Beata Alexandrina de Balazar nos destes um testemunho do poder da Eucaristia e do valor do sofrimento unido a Vós, concedei-nos a graça de amar-Vos sobre todas as coisas e de nos oferecermos por amor à salvação do mundo.</p><p class="mt-2 italic">Beata Alexandrina de Balazar, rogai por nós.</p>`
    }]
  },
  {
    day: 14,
    month: 'Outubro',
    saints: [{
      name: 'S. Calisto I',
      imageUrl: 'https://i.postimg.cc/NF9xn60S/image.png',
      story: `<h4>Da Escravidão ao Papado</h4><p>A vida de Calisto, antes de se tornar Papa, é um testemunho notável da misericórdia de Deus. Nascido escravo no final do século II, esteve envolvido em problemas financeiros que o levaram à prisão e ao trabalho forçado nas minas da Sardenha. Libertado graças à intercessão da amante do imperador Cómodo, foi acolhido pelo Papa Vítor I e, mais tarde, pelo Papa Zeferino, que, reconhecendo as suas qualidades, o nomeou seu principal conselheiro e administrador dos bens da Igreja, incluindo o cemitério na Via Ápia que hoje leva o seu nome.</p><h4>O Papa da Misericórdia</h4><p>Eleito Papa em 217, São Calisto I enfrentou forte oposição de um grupo rigorista liderado pelo teólogo Hipólito (que se tornou o primeiro antipapa da história). A principal controvérsia girava em torno da reconciliação dos pecadores. Calisto, defendendo a prática da Igreja, ensinava que mesmo os pecados mais graves, como o adultério e o homicídio, poderiam ser perdoados após uma penitência adequada. Ele mostrou a face de uma Igreja que é mãe e não carrasca, que acolhe os pecadores arrependidos com a mesma misericórdia do Pai do filho pródigo.</p><h4>Mártir da Fé</h4><p>O seu pontificado foi marcado por esta luta em defesa da misericórdia de Deus e da autoridade da Igreja. Governou com sabedoria e compaixão num período de relativa paz para os cristãos, but acabou por ser martirizado por volta do ano 222, durante uma revolta popular anticristã em Roma. O seu legado é um lembrete poderoso de que a Igreja é, por essência, um lugar de perdão e reconciliação, e que o poder das chaves, entregue a Pedro, inclui o poder de desligar as correntes do pecado.</p><p class="mt-4"><b>Oração:</b> Ó Deus, que no Papa São Calisto I nos mostrastes um pastor cheio de misericórdia, dai à vossa Igreja a graça de acolher sempre os pecadores e de ser um sinal do vosso perdão incondicional.</p><p class="mt-2 italic">São Calisto I, rogai por nós.</p>`,
      isMartyr: true
    }]
  },
  {
    day: 15,
    month: 'Outubro',
    saints: [{
      name: 'S. Teresa de Jesus',
      imageUrl: 'https://i.postimg.cc/ht19wsyQ/32654687eb30f846f1f2e9e3edb6f4af.jpg',
      story: `<h4>A Reforma do Carmelo</h4><p>Teresa de Cepeda y Ahumada, nascida em Ávila, Espanha, em 1515, é uma das figuras mais extraordinárias da história da Igreja. Após uma vida religiosa inicialmente morna e superficial, uma profunda experiência de conversão aos 39 anos transformou-a numa gigante espiritual. Inquieta com o relaxamento da vida nos conventos de sua época, sentiu o chamado de Deus para reformar a Ordem do Carmo, fundando, junto com São João da Cruz, os Carmelitas Descalços, que buscavam um retorno à oração contemplativa e à pobreza radical do Evangelho.</p><h4>Mestra da Oração</h4><p>Dotada de um carisma único e de uma personalidade vibrante, Teresa é, acima de tudo, uma mestra da vida de oração. Suas obras, como "O Livro da Vida", "Caminho de Perfeição" e, especialmente, "O Castelo Interior", são guias práticos e profundos para a jornada da alma em direção à união com Deus. Sua famosa definição de oração como "um trato de amizade, estando muitas vezes a sós com Quem sabemos que nos ama" democratizou a mística, mostrando que a intimidade com Deus é acessível a todos que a buscam com um coração sincero.</p><h4>Doutora da Igreja</h4><p>Apesar de ser mulher numa época dominada por homens e de não ter estudos formais em teologia, a profundidade e a solidez de sua doutrina espiritual levaram a Igreja a proclamá-la Doutora em 1970, a primeira mulher a receber tal título. A sua vida, marcada por êxtases místicos, fundações incansáveis e uma humanidade contagiante, continua a inspirar-nos a buscar a santidade com "determinada determinação", sem nunca perder a alegria e o bom humor. Sua famosa máxima, "Só Deus basta", resume a essência de sua espiritualidade.</p><p class="mt-4"><b>Oração:</b> Nada te perturbe, nada te espante. Tudo passa, Deus não muda. A paciência tudo alcança. Quem a Deus tem, nada lhe falta. Só Deus basta.</p><p class="mt-2 italic">Santa Teresa de Ávila, rogai por nós.</p>`
    }]
  },
  {
    day: 16,
    month: 'Outubro',
    saints: [
      {
        name: 'S. Margarida M. Alacoque',
        imageUrl: 'https://i.postimg.cc/J7QHR03S/66339fa28370276f90d041991767bebd.jpg',
        story: `<h4>Uma Vida de Devoção</h4><p>Nascida em 1647, na França, Margarida Maria Alacoque demonstrou desde cedo um profundo amor pela Eucaristia e uma inclinação para a vida religiosa. Superando a oposição da família, entrou para o mosteiro da Visitação de Paray-le-Monial. Sua vida no convento foi marcada por uma intensa busca de união com Cristo, mas também por incompreensões e sofrimentos, que a prepararam para a extraordinária missão que Deus lhe confiaria.</p><h4>As Aparições do Sagrado Coração</h4><p>Entre 1673 e 1675, Jesus apareceu a Santa Margarida, mostrando-lhe o Seu Sagrado Coração, "ardendo em chamas de amor" e "cercado por uma coroa de espinhos". Cristo lamentou-se da ingratidão e da frieza com que o Seu amor era retribuído pelos homens e pediu a Margarida que se tornasse a mensageira desta devoção. Confiou-lhe as "Doze Promessas" para aqueles que honrassem o Seu Coração, pediu a instituição da Festa do Sagrado Coração e a prática da Comunhão reparadora nas primeiras sextas-feiras do mês.</p><h4>Legado de Amor e Reparação</h4><p>A missão de Santa Margarida foi árdua. Enfrentou a desconfiança de sua comunidade e a dúvida de teólogos. No entanto, com a ajuda de seu diretor espiritual, o jesuíta São Cláudio de la Colombière, a devoção ao Sagrado Coração de Jesus começou a difundir-se. Seu legado é um convite perene a contemplar o Coração de Cristo, fonte de todo o bem e símbolo do amor infinito e misericordioso de Deus, e a responder a esse amor com a nossa própria vida, em espírito de adoração e reparação.</p><p class="mt-4"><b>Oração:</b> Ó Sagrado Coração de Jesus, que manifestastes a Santa Margarida Maria o desejo de reinar sobre as famílias cristãs, nós vos escolhemos hoje como Rei e Senhor de nossa família.</p><p class="mt-2 italic">S. Margarida Maria Alacoque, rogai por nós.</p>`
      },
      {
        name: 'S. Edwiges',
        imageUrl: 'https://i.postimg.cc/pTPYrzkQ/formacao-1600x1200-novena-sta-edwigens.jpg',
        story: `<h4>A Princesa dos Pobres</h4><p>Edwiges, nascida em 1174 na nobreza bávara, tornou-se duquesa da Silésia (atual Polónia) pelo seu casamento com Henrique I. Em vez de se deixar levar pelo luxo da corte, usou a sua posição e riqueza para servir a Cristo nos mais necessitados. A sua compaixão era imensa: visitava os doentes, consolava os aflitos e construiu hospitais e mosteiros. O seu coração era especialmente sensível ao drama dos endividados, que eram presos, deixando as suas famílias desamparadas.</p><h4>Libertadora dos Cativos</h4><p>Com grande generosidade, Santa Edwiges usava o seu próprio dinheiro para pagar as dívidas dos prisioneiros, devolvendo-lhes a liberdade e a dignidade. Por este motivo, tornou-se a padroeira dos pobres e endividados. A sua caridade não era apenas material; ela procurava também o bem espiritual de todos, ensinando o catecismo e promovendo a paz. Mesmo na dor da perda do marido e de quase todos os filhos, a sua fé permaneceu inabalável.</p><h4>Refúgio na Vida Monástica</h4><p>Após a morte do marido, Edwiges retirou-se para o mosteiro de Trébnitz, que ela própria havia fundado, vivendo como uma simples monja em oração e penitência até à sua morte em 1243. A sua vida é um testemunho luminoso de que a verdadeira nobreza não está nos títulos ou nas riquezas, mas no serviço humilde e na caridade para com os irmãos, vendo em cada um deles o rosto de Cristo.</p><p class="mt-4"><b>Oração:</b> Ó Santa Edwiges, vós que na terra fostes o amparo dos pobres, o socorro dos desvalidos e o refúgio dos endividados, no céu, onde gozais o eterno prêmio da caridade que praticastes, confiante vo-lo peço: sede a minha advogada.</p><p class="mt-2 italic">S. Edwiges, rogai por nós.</p>`
      }
    ]
  },
  {
    day: 17,
    month: 'Outubro',
    saints: [{
      name: 'S. Inácio de Antioquia',
      imageUrl: 'https://i.postimg.cc/cvWXNVVK/image.png',
      story: `<h4>Discípulo dos Apóstolos</h4><p>Santo Inácio, também chamado de Teóforo ("portador de Deus"), foi uma figura proeminente da Igreja primitiva. Viveu no final do primeiro e início do segundo século, tendo sido o terceiro bispo de Antioquia, sucedendo a Evódio, que por sua vez sucedeu ao próprio Apóstolo Pedro. A tradição diz que ele conheceu pessoalmente os Apóstolos Pedro e João, o que confere aos seus escritos uma autoridade e uma proximidade únicas com a era apostólica.</p><h4>As Sete Cartas</h4><p>Preso durante a perseguição do imperador Trajano, Inácio foi condenado a ser devorado por feras em Roma. Durante a sua longa e penosa viagem para o martírio, escreveu sete cartas a várias Igrejas da Ásia Menor e ao seu amigo São Policarpo. Estas cartas são um tesouro inestimável, oferecendo um vislumbre da teologia, da liturgia e da estrutura da Igreja primitiva. Nelas, Inácio enfatiza a importância da unidade em torno do bispo, a centralidade da Eucaristia como "remédio da imortalidade" e a divindade de Cristo.</p><h4>"Trigo de Deus"</h4><p>O mais impressionante em suas cartas é o seu ardente desejo pelo martírio. Ele não via a morte como uma tragédia, mas como o momento supremo de sua união com Cristo. Suplicou aos cristãos de Roma que não tentassem impedir o seu martírio, para que ele pudesse "imitar a paixão do meu Deus". Sua famosa frase "Sou trigo de Deus, e serei moído pelos dentes das feras, para me apresentar como pão puro de Cristo" revela uma alma completamente apaixonada e configurada com o seu Senhor crucificado.</p><p class="mt-4"><b>Oração:</b> Ó Deus, que iluminastes a Vossa Igreja com as cartas e o martírio de Santo Inácio de Antioquia, dai-nos a graça de amar a unidade da Igreja e de desejar ardentemente a união convosco.</p><p class="mt-2 italic">S. Inácio de Antioquia, rogai por nós.</p>`,
      isMartyr: true
    }]
  },
  {
    day: 18,
    month: 'Outubro',
    saints: [{
      name: 'S. Lucas, Evangelista',
      imageUrl: 'https://i.postimg.cc/LXry2CGX/image.png',
      story: `<h4>O Médico Amado</h4><p>São Lucas, o autor do terceiro Evangelho e dos Atos dos Apóstolos, é uma figura única entre os escritores sagrados. De origem grega e pagã, era médico de profissão, o que se reflete na precisão de suas descrições e no seu interesse pelos doentes. Não conheceu Jesus pessoalmente, mas tornou-se um discípulo fiel e companheiro de viagem de São Paulo, que o chama de "o médico amado" (Col 4,14). Lucas representa a universalidade do Evangelho, aberto a todos os povos.</p><h4>O Evangelho da Misericórdia</h4><p>O Evangelho de Lucas é frequentemente chamado de "Evangelho da Misericórdia". É nele que encontramos algumas das parábolas mais amadas sobre o perdão e a compaixão de Deus, como as do Bom Samaritano, do Filho Pródigo e do Fariseu e do Publicano. Lucas mostra um carinho especial pelos pobres, pelos pecadores, pelas mulheres e por todos os que eram marginalizados na sociedade. O seu Evangelho é uma ode à ternura de um Deus que veio buscar e salvar o que estava perdido.</p><h4>O Historiador do Espírito Santo</h4><p>Nos Atos dos Apóstolos, Lucas continua a sua narrativa, descrevendo o nascimento e a expansão da Igreja primitiva. É por isso que os Atos são por vezes chamados "o Evangelho do Espírito Santo", pois mostram como o Paráclito guiou e fortaleceu os Apóstolos em sua missão. A tradição também atribui a São Lucas a pintura do primeiro ícone de Nossa Senhora, fazendo dele o padroeiro dos artistas e dos médicos. O seu legado é um convite a sermos, como ele, testemunhas da misericórdia de Deus até os confins da terra.</p><p class="mt-4"><b>Oração:</b> Ó São Lucas, que com o teu Evangelho nos revelastes o rosto misericordioso de Jesus e o carinho de Sua Mãe, alcançai-nos a graça de sermos, como vós, médicos dos corpos e das almas.</p><p class="mt-2 italic">S. Lucas, rogai por nós.</p>`,
      isMartyr: true
    }]
  },
  {
    day: 19,
    month: 'Outubro',
    saints: [{
      name: 'S. Pedro de Alcântara',
      imageUrl: 'https://i.postimg.cc/LnDZnwJ2/image.png',
      story: `<h4>O Reformador Franciscano</h4><p>Nascido em 1499 em Alcântara, Espanha, São Pedro foi uma das figuras centrais da reforma católica no século XVI. Entrou para a Ordem Franciscana muito jovem e rapidamente se destacou pela sua inteligência e, acima de tudo, pela sua busca radical da santidade através de uma vida de oração e penitência extraordinárias. Inquieto com o relaxamento da regra em muitos conventos, dedicou a sua vida à reforma da Ordem, fundando os Franciscanos Descalços (ou Alcantarinos), que viviam a pobreza e a austeridade com o máximo rigor.</p><h4>Místico e Penitente</h4><p>A vida de São Pedro de Alcântara foi marcada por fenómenos místicos impressionantes, como levitações, êxtases e o dom da profecia. No entanto, estes dons eram o fruto de uma vida de mortificação extrema. Dormia apenas uma hora e meia por noite, sentado, e passava grande parte do seu tempo em oração. O seu corpo, desgastado pelos jejuns e penitências, era um testemunho vivo de que "só se chega ao paraíso pela senda da tribulação".</p><h4>Diretor de Santos</h4><p>Apesar de sua vida austera, Pedro de Alcântara era um diretor espiritual sábio e procurado. A sua amizade e o seu conselho foram fundamentais para Santa Teresa de Ávila. Foi ele quem, reconhecendo a origem divina das experiências místicas de Teresa, a encorajou e a apoiou na difícil tarefa de reformar o Carmelo. A sua vida ensina-nos que a verdadeira reforma da Igreja começa sempre pela conversão pessoal e por uma profunda vida de oração.</p><p class="mt-4"><b>Oração:</b> Ó Deus, que fizestes de São Pedro de Alcântara um mestre de oração e um modelo de penitência, concedei-nos, por sua intercessão, a graça de dominar o nosso corpo e de nos dedicarmos inteiramente a Vós.</p><p class="mt-2 italic">S. Pedro de Alcântara, rogai por nós.</p>`
    }]
  },
  {
    day: 20,
    month: 'Outubro',
    saints: [{
      name: 'S. Madalena de Nagasaki',
      imageUrl: 'https://i.postimg.cc/XvBd4jWG/image.png',
      story: `<h4>A Flor do Japão</h4><p>Santa Madalena nasceu por volta de 1611 em Nagasaki, Japão, numa família nobre e profundamente cristã. Desde cedo, viveu num ambiente de perseguição feroz contra os católicos. Os seus próprios pais foram martirizados por causa da fé. Em vez de a intimidar, o exemplo deles fortaleceu a sua determinação. Consagrou a sua virgindade a Deus e tornou-se terciária agostiniana e catequista, dedicando a sua vida a ajudar os missionários e a fortalecer a fé dos seus compatriotas.</p><h4>Coragem na Perseguição</h4><p>Num tempo em que ser cristão era um crime punido com a morte, Madalena movia-se clandestinamente, levando consolo espiritual e ajuda material às famílias cristãs. Quando os missionários agostinianos com quem trabalhava foram presos e martirizados, ela não fugiu. Pelo contrário, vestindo o seu hábito de terciária, apresentou-se voluntariamente ao tribunal, declarando-se cristã e pronta para morrer por Cristo.</p><h4>O Martírio da "Fossa"</h4><p>O seu martírio foi particularmente cruel. Foi submetida à tortura da "fossa", sendo pendurada de cabeça para baixo sobre um poço cheio de imundícies, com o corpo firmemente amarrado para retardar a morte. Durante treze dias, ela resistiu, cantando hinos e rezando. A sua extraordinária resistência e serenidade no meio de tal agonia impressionaram os seus carrascos. Finalmente, para acabar com o seu sofrimento, afogaram-na. O seu testemunho é um farol de coragem e fidelidade para a Igreja no Japão e em todo o mundo.</p><p class="mt-4"><b>Oração:</b> Ó Deus, que destes a Santa Madalena de Nagasaki a força para testemunhar o Evangelho até ao derramamento do seu sangue, concedei-nos, por sua intercessão, uma fé corajosa que não tema as perseguições do mundo.</p><p class="mt-2 italic">S. Madalena de Nagasaki, rogai por nós.</p>`,
      isMartyr: true
    }]
  },
  {
    day: 21,
    month: 'Outubro',
    saints: [{
      name: 'S. Úrsula',
      imageUrl: 'https://i.postimg.cc/52C2t6H2/image.png',
      story: `<h4>A Lenda da Princesa Bretã</h4><p>A história de Santa Úrsula e das suas companheiras é uma das lendas mais famosas da Idade Média. Embora os detalhes históricos sejam difíceis de comprovar, a tradição fala de Úrsula, uma piedosa princesa da Bretanha (atual Grã-Bretanha), que foi prometida em casamento a um príncipe pagão. Para adiar o casamento e preservar a sua virgindade consagrada a Deus, ela pediu um período de três anos e onze navios para fazer uma peregrinação a Roma com onze mil virgens companheiras.</p><h4>A Peregrinação e o Martírio</h4><p>Após visitarem Roma, onde foram recebidas pelo Papa, Úrsula e as suas companheiras regressaram pelo rio Reno. Ao chegarem a Colónia, na Alemanha, encontraram a cidade cercada pelos Hunos, um povo bárbaro liderado por Átila. Os Hunos, enfurecidos pela recusa das jovens em ceder aos seus desejos e em renunciar à sua fé cristã, massacraram todo o grupo. Santa Úrsula, pela sua beleza, foi poupada para ser esposa de Átila, mas ao recusar firmemente, foi morta com uma flecha.</p><h4>Símbolo de Pureza e Coragem</h4><p>Apesar da incerteza sobre os números e os detalhes exatos, a base histórica do martírio de um grupo de virgens em Colónia é amplamente aceite. Uma antiga inscription numa igreja da cidade atesta este facto. Independentemente dos pormenores lendários, a história de Santa Úrsula tornou-se um poderoso símbolo da pureza, da coragem e da firmeza na fé. A sua história inspirou a fundação da Ordem das Ursulinas, uma congregação religiosa dedicada à educação das jovens.</p><p class="mt-4"><b>Oração:</b> Senhor, que destes a Santa Úrsula e às suas companheiras a coragem de preferir a morte a trair a sua fé e a sua pureza, concedei-nos, por sua intercessão, a graça de vivermos sempre fiéis a Vós.</p><p class="mt-2 italic">S. Úrsula, rogai por nós.</p>`,
      isMartyr: true
    }]
  },
  {
    day: 22,
    month: 'Outubro',
    saints: [{
      name: 'S. João Paulo II',
      imageUrl: 'https://i.postimg.cc/bsw1Hqcq/image.png',
      story: `<h4>O Papa que Veio de Longe</h4><p>Karol Wojtyła nasceu em Wadowice, Polónia, em 1920. A sua juventude foi marcada pela perda precoce da mãe e do irmão, e pela brutalidade da ocupação nazi, seguida pelo regime comunista. Estas experiências forjaram nele uma profunda sensibilidade para com o sofrimento humano e uma inabalável convicção na dignidade da pessoa. Foi operário, ator e poeta antes de entrar no seminário clandestino. Ordenado sacerdote e depois bispo, destacou-se pela sua inteligência, coragem e proximidade com o povo.</p><h4>Um Pontificado Extraordinário</h4><p>Eleito Papa em 1978, foi o primeiro Papa não italiano em mais de 450 anos. O seu pontificado de quase 27 anos foi um dos mais longos e influentes da história. Com uma energia incansável, realizou 104 viagens apostólicas, visitando 129 países e levando a mensagem do Evangelho a todos os cantos do mundo. A sua famosa exortação inicial, "Não tenhais medo! Abri, ou melhor, escancarai as portas a Cristo!", tornou-se o lema de seu pontificado, inspirando uma nova geração de católicos.</p><h4>Defensor da Vida e da Família</h4><p>São João Paulo II deixou um imenso legado doutrinal, incluindo 14 encíclicas, a promulgação do Catecismo da Igreja Católica e a criação da Jornada Mundial da Juventude. Foi um defensor incansável da "cultura da vida" contra a "cultura da morte", e a sua "Teologia do Corpo" oferece uma visão profunda e bela do amor humano, do casamento e da família. Nos seus últimos anos, o seu testemunho de sofrimento, vivido com fé e dignidade, tornou-se a sua última e mais poderosa encíclica.</p><p class="mt-4"><b>Oração:</b> Ó São João Paulo II, que desde a janela do Céu continuas a interceder por nós, abençoa a Igreja, os jovens e as famílias. Ajuda-nos a não ter medo de sermos santos e a abrir os nossos corações a Cristo.</p><p class="mt-2 italic">S. João Paulo II, rogai por nós.</p>`
    }]
  },
  {
    day: 23,
    month: 'Outubro',
    saints: [{
      name: 'S. João de Capistrano',
      imageUrl: 'https://i.postimg.cc/wxrzs9YF/image.png',
      story: `<h4>De Governador a Frade</h4><p>João, nascido em Capistrano, Itália, em 1386, teve uma carreira promissora como jurista e governador. No entanto, uma experiência de injustiça e prisão durante uma guerra levou-o a uma profunda conversão. Abandonou a sua carreira, a sua jovem esposa e os seus bens, e ingressou na Ordem Franciscana, onde se tornou discípulo do grande pregador São Bernardino de Siena. A sua vida mudou radicalmente, passando da busca de honras mundanas para a pregação incansável do Evangelho.</p><h4>O Pregador da Europa</h4><p>São João de Capistrano tornou-se um dos pregadores mais famosos do seu tempo. Percorreu a pé grande parte da Europa, pregando a multidões e promovendo a paz e a reforma dos costumes. A sua pregação era fervorosa, centrada no Santo Nome de Jesus, e era acompanhada por numerosos milagres. Foi também um reformador dentro da Ordem Franciscana, defendendo um regresso a uma observância mais estrita da regra de São Francisco.</p><h4>O "Santo Soldado"</h4><p>A sua missão mais famosa ocorreu em 1456. A cristandade estava ameaçada pelo avanço do Império Otomano, que cercava a cidade de Belgrado. O Papa Calisto III encarregou João de Capistrano de pregar uma cruzada. Embora já tivesse 70 anos, ele percorreu a Europa e reuniu um exército de camponeses e artesãos. Na batalha decisiva, empunhando um estandarte com a cruz, ele liderou as tropas, infundindo-lhes uma coragem extraordinária que levou a uma vitória milagrosa. Morreu pouco depois, vítima da peste, mas o seu legado como defensor da fé perdura.</p><p class="mt-4"><b>Oração:</b> Ó Deus, que suscitastes São João de Capistrano para confortar o vosso povo na tribulação, concedei à vossa Igreja a paz que tanto deseja e a nós a graça de vencer sempre os inimigos da nossa alma.</p><p class="mt-2 italic">S. João de Capistrano, rogai por nós.</p>`
    }]
  },
  {
    day: 24,
    month: 'Outubro',
    saints: [{
      name: 'S. Antônio Maria Claret',
      imageUrl: 'https://i.postimg.cc/KzNyvp6y/image.png',
      story: `<h4>De Tecelão a Missionário</h4><p>Antônio Maria Claret nasceu em 1807, em Sallent, Espanha, numa família de tecelões. Embora tenha trabalhado na fábrica da família, o seu coração ardia pelo desejo de ser sacerdote. Após a sua ordenação, sentiu um forte chamado para a vida missionária. O seu zelo era tão grande que percorreu a pé grande parte da Catalunha, pregando missões populares que atraíam multidões e produziam inúmeras conversões. A sua pregação era simples, direta e centrada no amor a Jesus e a Maria.</p><h4>Fundador e Arcebispo</h4><p>Para dar continuidade à sua obra missionária, em 1849 fundou a Congregação dos Missionários Filhos do Imaculado Coração de Maria, hoje conhecidos como Claretianos. Pouco depois, para sua surpresa, foi nomeado Arcebispo de Santiago de Cuba. Nesta ilha, encontrou uma situação de grande decadência moral e religiosa. Com uma energia incansável, reformou o clero, promoveu a educação, lutou pelos direitos dos pobres e defendeu os escravos, o que lhe valeu vários atentados contra a sua vida.</p><h4>Apóstolo da Imprensa</h4><p>Santo Antônio Maria Claret foi um apóstolo moderno, que compreendeu o poder dos meios de comunicação. Fundou editoras, bibliotecas populares e escreveu ou editou centenas de livros e folhetos religiosos para difundir a boa doutrina. De regresso a Espanha, tornou-se confessor da Rainha Isabel II. Viveu os seus últimos anos no exílio, em França, continuando a sua obra de oração e escrita até à sua morte em 1870. O seu legado é um exemplo de zelo apostólico e de criatividade na evangelização.</p><p class="mt-4"><b>Oração:</b> Ó Santo Antônio Maria Claret, que durante a vossa vida na terra tanto vos consolastes com o nome de Maria, fazei que eu, vosso devoto, experimente a doçura deste nome e o poder da sua intercessão.</p><p class="mt-2 italic">S. Antônio Maria Claret, rogai por nós.</p>`
    }]
  },
  {
    day: 25,
    month: 'Outubro',
    saints: [{
      name: 'S. Antônio de Sant\'Ana Galvão',
      imageUrl: 'https://i.postimg.cc/sBYBCLdn/image.png',
      story: `<h4>O Primeiro Santo Brasileiro</h4><p>Antônio de Sant'Ana Galvão nasceu em Guaratinguetá, São Paulo, em 1739. De família profundamente cristã, renunciou a uma promissora carreira para se tornar frade franciscano. Conhecido pela sua profunda humildade, caridade incansável e uma intensa vida de oração, Frei Galvão tornou-se uma figura amada e respeitada. Dedicou-se ao serviço dos doentes e dos pobres, e foi um conselheiro espiritual procurado por muitos.</p><h4>O Mosteiro da Luz</h4><p>Um dos seus maiores legados é a fundação do Mosteiro da Luz, em São Paulo, uma obra que iniciou em obediência a uma visão de uma religiosa, Irmã Helena. Superando inúmeras dificuldades e objeções, Frei Galvão dedicou-se de corpo e alma à construção do mosteiro, que se tornou um importante centro de vida espiritual. Ele próprio desenhou a planta do edifício e trabalhou como mestre-de-obras e pedreiro, mostrando que a fé se manifesta em obras concretas.</p><h4>As Pílulas de Frei Galvão</h4><p>Frei Galvão é especialmente conhecido pelas suas famosas "pílulas". Trata-se de pequenos pedaços de papel de arroz onde está escrita uma oração à Virgem Maria: "Depois do parto, ó Virgem, permanecestes intacta: Mãe de Deus, intercedei por nós". Distribuídas com fé, estas pílulas estão associadas a inúmeras curas e graças, especialmente em partos difíceis. Canonizado em 2007 pelo Papa Bento XVI em solo brasileiro, São Frei Galvão é um sinal da santidade que floresce na nossa terra.</p><p class="mt-4"><b>Oração:</b> Ó Santo Frei Galvão, que, movido por ardente caridade, não hesitastes em acolher e cuidar dos doentes e aflitos, intercedei por nós junto de Deus e alcançai-nos a graça de que tanto necessitamos.</p><p class="mt-2 italic">S. Antônio de Sant'Ana Galvão, rogai por nós.</p>`
    }]
  },
  {
    day: 26,
    month: 'Outubro',
    saints: [
      {
        name: 'S. Evaristo',
        imageUrl: 'https://i.postimg.cc/DZmc88Dv/image.png',
        story: `<h4>O Quinto Papa</h4><p>Santo Evaristo foi o quinto Papa da Igreja Católica, sucedendo a São Clemente I por volta do ano 99. O seu pontificado decorreu durante o reinado do imperador Trajano, um período de perseguições esporádicas mas violentas contra os cristãos. As informações sobre a sua vida são escassas, como acontece com muitos dos primeiros Papas, but a tradição descreve-o como um pastor zeloso que governou a Igreja com sabedoria e coragem.</p><h4>Organizador da Igreja de Roma</h4><p>Embora não existam provas documentais definitivas, atribui-se a Santo Evaristo a organização da Igreja de Roma. Diz-se que ele dividiu a cidade em "títulos" (as futuras paróquias) e atribuiu a cada um deles um presbítero. Esta medida foi fundamental para a pastoral e a administração dos sacramentos numa comunidade cristã em rápido crescimento. Ele também terá instituído um grupo de sete diáconos para ajudar o Papa no seu ministério.</p><h4>Testemunho e Martírio</h4><p>A tradição afirma que Santo Evaristo coroou o seu pontificado com o martírio por volta do ano 107. Embora os pormenores do seu martírio sejam desconhecidos, a sua disposição para dar a vida por Cristo é um testemunho poderoso da fé que animava a Igreja primitiva. O seu nome está inscrito no Cânon Romano da Missa, um sinal da veneração que a Igreja sempre lhe dedicou. A sua vida recorda-nos a importância da estrutura e da organização para o bem da missão da Igreja.</p><p class="mt-4"><b>Oração:</b> Ó Deus, que edificastes a Vossa Igreja sobre a rocha de Pedro e a guiastes pelos seus sucessores, concedei-nos, pela intercessão do Papa Santo Evaristo, a graça de permanecermos sempre fiéis à Sé de Roma.</p><p class="mt-2 italic">S. Evaristo, rogai por nós.</p>`,
        isMartyr: true
      }
    ]
  },
  {
    day: 27,
    month: 'Outubro',
    saints: [{
      name: 'S. Gonçalo de Lagos',
      imageUrl: 'https://i.postimg.cc/RZ3sWnzC/image.png',
      story: `<h4>O Bom Frade Agostiniano</h4><p>Gonçalo, nascido em Lagos, Portugal, por volta de 1360, foi uma figura luminosa da vida religiosa portuguesa. Desde jovem, demonstrou uma grande piedade e um desejo de se dedicar a Deus. Entrou para a Ordem dos Eremitas de Santo Agostinho, onde se destacou pela sua inteligência, pela sua humildade e, sobretudo, pelo seu amor à oração e à comunidade. Foi um exemplo vivo do ideal agostiniano de "uma só alma e um só coração orientados para Deus".</p><h4>Pregador e Taumaturgo</h4><p>São Gonçalo tornou-se um pregador famoso, cuja palabra simples e ungida tocava os corações. Foi também prior de vários conventos, incluindo o de Lisboa. A sua vida foi marcada por numerosos milagres, que atraíam a ele multidões em busca de cura e consolo. A sua fama de santidade espalhou-se por todo o país, e o povo recorria a ele com grande confiança. Ele, no entanto, mantinha-se sempre humilde, atribuindo tudo à graça de Deus.</p><h4>Devoção ao Santíssimo Sacramento</h4><p>Um dos traços mais marcantes da sua espiritualidade era a sua profunda devoção à Eucaristia. Passava longas horas em adoração diante do Santíssimo Sacramento, de onde tirava a força para o seu apostolado. Faleceu em Torres Vedras em 1422. O seu culto foi imediatamente aprovado pela aclamação popular e, mais tarde, confirmado pela Igreja. São Gonçalo de Lagos é um modelo de vida religiosa, que une a contemplação e a ação, a oração e o serviço aos irmãos.</p><p class="mt-4"><b>Oração:</b> Ó São Gonçalo de Lagos, que encontrastes na Eucaristia a fonte da vossa força e do vosso amor, ensinai-nos a adorar Jesus Sacramentado com a mesma fé e devoção, para que Ele seja o centro da nossa vida.</p><p class="mt-2 italic">S. Gonçalo de Lagos, rogai por nós.</p>`
    }]
  },
  {
    day: 28,
    month: 'Outubro',
    saints: [{
      name: 'S. Simão & S. Judas',
      imageUrl: 'https://i.postimg.cc/9F3ZdxSS/image.png',
      story: `<h4>Os Apóstolos "Esquecidos"</h4><p>A Igreja celebra hoje, na mesma festa, dois dos doze Apóstolos de Jesus: São Simão e São Judas Tadeu. São talvez dos apóstolos menos conhecidos. Simão é chamado de "o Zelote" ou "o Cananeu" nos Evangelhos, para o distinguir de Simão Pedro. Este apelido sugere que ele poderia ter pertencido ao partido nacionalista dos Zelotes antes de seguir Jesus. Judas, por sua vez, é chamado de "Tadeu" para o diferenciar de Judas Iscariotes, o traidor. É o autor de uma das cartas católicas do Novo Testamento.</p><h4>Missionários na Pérsia</h4><p>As informações sobre a vida missionária de Simão e Judas após o Pentecostes são incertas, mas uma forte e antiga tradição afirma que eles viajaram juntos para pregar o Evangelho na Mesopotâmia e na Pérsia (atual Irão). Ali, enfrentaram a resistência dos sacerdotes pagãos e converteram muitas pessoas à fé cristã. A sua pregação corajosa e os seus milagres atestavam o poder do nome de Jesus.</p><h4>Unidos no Martírio</h4><p>A mesma tradição relata que ambos foram martirizados juntos na cidade de Suanir, na Pérsia. A sua união na missão e no martírio é um belo testemunho da fraternidade apostólica. São Judas Tadeu é hoje universalmente venerado como o "santo das causas desesperadas e impossíveis", um poderoso intercessor para aqueles que enfrentam grandes dificuldades. A sua festa conjunta recorda-nos que a Igreja se funda sobre o testemunho dos Apóstolos, que deram a vida por Cristo.</p><p class="mt-4"><b>Oração:</b> Ó gloriosos Apóstolos São Simão e São Judas, que fostes chamados por Jesus para serdes colunas da Sua Igreja e testemunhas do Seu Evangelho, alcançai-nos a graça de uma fé viva e de um zelo ardente pela salvação das almas.</p><p class="mt-2 italic">Santos Simão e Judas, rogai por nós.</p>`,
      isMartyr: true
    }]
  },
  {
    day: 29,
    month: 'Outubro',
    saints: [{
      name: 'Beata Chiara Luce',
      imageUrl: 'https://i.postimg.cc/YSW99892/image.png',
      story: `<h4>Uma Vida Luminosa</h4><p>Chiara Badano, nascida em 1971 perto de Génova, Itália, foi uma jovem vibrante, cheia de vida, que gostava de desporto, de música e de estar com os amigos. Aos nove anos, encontrou no Movimento dos Focolares um ideal que deu um novo rumo à sua vida: colocar Jesus no centro de tudo. A sua alegria contagiante e o seu amor pelos outros, especialmente pelos mais "pequenos" e marginalizados, eram o reflexo de uma profunda união com Deus.</p><h4>O Encontro com a Dor</h4><p>Aos 17 anos, uma dor aguda no ombro durante um jogo de ténis revelou um osteossarcoma, um dos tipos mais graves de cancro ósseo. A notícia foi um choque, mas após um período de luta interior, Chiara aceitou a doença com uma maturidade espiritual surpreendente. A sua frase "Se tu o queres, Jesus, eu também o quero" tornou-se o seu lema. Recusou a morfina para poder oferecer os seus sofrimentos, consciente e unida a Jesus Abandonado na cruz.</p><h4>"Chiara Luce"</h4><p>A fundadora dos Focolares, Chiara Lubich, ao acompanhar a sua jornada, deu-lhe o nome de "Chiara Luce" (Clara Luz), because a sua vida irradiava a luz de Deus. O seu quarto de hospital tornou-se um lugar de encontro, um santuário onde ela evangelizava médicos, enfermeiros e amigos. Preparou a sua própria "festa de casamento" - o seu funeral - com alegria, escolhendo as músicas e o seu vestido de noiva. Faleceu em 1990, aos 18 anos, deixando um testemunho luminoso de como o sofrimento, vivido por amor, pode ser transformado numa fonte de vida e de alegria.</p><p class="mt-4"><b>Oração:</b> Ó Pai, fonte de todo o bem, que na Beata Chiara Luce nos destes um modelo de fé e de caridade, concedei-nos a graça de viver, como ela, cada momento da nossa vida como um dom do Vosso amor.</p><p class="mt-2 italic">Beata Chiara Luce, rogai por nós.</p>`
    }]
  },
  {
    day: 30,
    month: 'Outubro',
    saints: [{
      name: 'S. Frumêncio',
      imageUrl: 'https://i.postimg.cc/wvWT4r4c/image.png',
      story: `<h4>O Apóstolo da Etiópia</h4><p>A história de São Frumêncio é uma aventura de fé e Providência. Nascido em Tiro, na Fenícia (atual Líbano), no início do século IV, acompanhou o seu tio, um filósofo, numa viagem de exploração. O navio naufragou na costa da Etiópia, e quase toda a tripulação foi massacrada. Frumêncio e seu irmão Edésio foram os únicos sobreviventes, sendo levados como escravos para a corte do rei em Axum.</p><h4>De Escravo a Conselheiro</h4><p>Graças à sua inteligência e integridade, Frumêncio ganhou a confiança do rei, que o nomeou seu secretário e tesoureiro. Após a morte do rei, a rainha pediu-lhe que ficasse como tutor do jovem príncipe herdeiro. Durante este tempo, Frumêncio usou a sua influência para apoiar os comerciantes cristãos que viviam no país, ajudando-os a encontrar lugares para rezar e a praticar a sua fé livremente.</p><h4>O "Abuna" (Nosso Pai)</h4><p>Quando o príncipe atingiu a maioridade, Frumêncio e Edésio foram libertados. Edésio regressou a Tiro, mas Frumêncio viajou para Alexandria, no Egito, onde se encontrou com o grande Santo Atanásio. Contou-lhe a situação da Etiópia e pediu-lhe que enviasse um bispo e missionários. Santo Atanásio, reconhecendo a obra do Espírito Santo, respondeu: "Quem melhor do que tu para esta missão?". Ordenou Frumêncio como primeiro bispo da Etiópia. Frumêncio regressou, batizou o rei e evangelizou grande parte do país, sendo carinhosamente chamado de "Abuna" (Nosso Pai), título que os primazes da Igreja Etíope usam até hoje.</p><p class="mt-4"><b>Oração:</b> Ó Deus, que por caminhos admiráveis levastes São Frumêncio a semear a semente do Evangelho na Etiópia, fazei de nós instrumentos dóceis da Vossa Providência para levar a luz de Cristo aonde quer que vamos.</p><p class="mt-2 italic">S. Frumêncio, rogai por nós.</p>`
    }]
  },
  {
    day: 31,
    month: 'Outubro',
    saints: [{
      name: 'S. Afonso Rodrigues',
      imageUrl: 'https://i.postimg.cc/KjMS7pdw/image.png',
      story: `<h4>Uma Vida de Recomeços</h4><p>Afonso Rodrigues, nascido em Segóvia, Espanha, em 1532, teve uma vida marcada por perdas e recomeços. Casou-se, teve filhos e geria um negócio de tecidos. No entanto, a morte prematura de sua esposa e de seus dois filhos, juntamente com o fracasso do seu negócio, mergulharam-no numa profunda crise. Em vez de se desesperar, Afonso viu nestes acontecimentos um chamado de Deus para uma vida de maior entrega.</p><h4>O Irmão Porteiro</h4><p>Aos 40 anos, decidiu entrar na Companhia de Jesus. Devido à sua idade e falta de estudos, foi admitido como irmão leigo. Após o noviciado, foi enviado para o colégio de Montesión, em Palma de Maiorca, onde passou os restantes 45 anos da sua vida como porteiro. A sua função era humilde e repetitiva: abrir e fechar a porta, receber recados, acolher visitantes. Mas Afonso transformou esta tarefa simples num caminho de santidade.</p><h4>Mestre de Vida Espiritual</h4><p>A portaria de Montesión tornou-se um centro de orientação espiritual. A sua humildade, obediência e, sobretudo, a sua profunda vida de oração e união com Deus, atraíam a ele estudantes, sacerdotes e leigos. Foi diretor espiritual de São Pedro Claver, a quem inspirou a ir em missão para a América. Santo Afonso Rodrigues ensina-nos que a santidade não depende da grandeza das tarefas que realizamos, mas do amor com que as fazemos.</p><p class="mt-4"><b>Oração:</b> Ó Deus, que no humilde serviço de Santo Afonso Rodrigues nos mostrastes um caminho de santidade, concedei-nos a graça de Vos encontrar e de Vos servir nas tarefas mais simples do nosso dia-a-dia.</p><p class="mt-2 italic">S. Afonso Rodrigues, rogai por nós.</p>`
    }]
  },
  // Novembro
  {
    day: 1,
    month: 'Novembro',
    saints: [{
      name: 'Solenidade de Todos os Santos',
      imageUrl: 'https://i.postimg.cc/j29jkK7b/download.jpg',
      story: `<h4>A Igreja Triunfante</h4><p>Nesta grande solenidade, a Igreja na terra (Igreja Militante) celebra com alegria a glória da Igreja no Céu (Igreja Triunfante). Comemoramos não apenas os santos e santas oficialmente canonizados, mas a "multidão imensa, que ninguém podia contar, de todas as nações, tribos, povos e línguas" (Ap 7,9) que já participam da visão beatífica de Deus. É uma festa de esperança, que nos recorda o nosso destino final e a nossa própria vocação universal à santidade.</p><h4>Comunhão dos Santos</h4><p>A festa de Todos os Santos é uma expressão poderosa do dogma da Comunhão dos Santos. Acreditamos que os santos no Céu não estão distantes de nós; pelo contrário, eles intercedem incessantemente por nós, seus irmãos e irmãs que ainda peregrinam na terra. Eles são nossos modelos, amigos e poderosos intercessores. Esta solenidade fortalece os laços que nos unem a toda a família de Deus, no Céu, no Purgatório e na terra, todos membros do mesmo Corpo Místico de Cristo.</p><h4>Um Chamado à Santidade</h4><p>As leituras desta festa, especialmente as Bem-Aventuranças (Mt 5,1-12), apresentam-nos o caminho para a santidade. Os santos não foram super-homens ou mulheres, mas pessoas de carne e osso, com suas lutas e fraquezas, que se deixaram transformar pela graça de Deus e viveram o Evangelho de forma radical. Celebrar Todos os Santos é, portanto, um convite a renovar o nosso desejo de sermos santos, a aspirar à pátria celeste e a viver já aqui na terra como cidadãos do Céu.</p><p class="mt-4"><b>Oração:</b> Deus eterno e todo-poderoso, que nos dais a alegria de celebrar numa só festa os méritos de Todos os Santos, concedei-nos, por sua intercessão, a abundância da vossa misericórdia que tanto esperamos.</p><p class="mt-2 italic">Todos os Santos e Santas de Deus, rogai por nós.</p>`
    }]
  },
  {
    day: 2,
    month: 'Novembro',
    saints: [{
      name: 'Fiéis Defuntos',
      imageUrl: 'https://i.postimg.cc/G2DDG2TC/dfed164f02d4d4d2bccaa939385df13b.jpg',
      story: `<h4>A Igreja Padecente</h4><p>Logo após celebrar a glória da Igreja Triunfante, a Igreja Militante volta seu olhar e seu coração para a Igreja Padecente: as almas dos fiéis que partiram deste mundo na amizade com Deus, mas que ainda precisam de uma purificação final para entrar na alegria plena do Céu. Esta purificação é o que a doutrina católica chama de Purgatório. Não é um "segundo inferno", mas uma antecâmara do Céu, um estado de purificação no amor, onde as almas, já salvas, se preparam para o encontro definitivo com a santidade de Deus.</p><h4>O Vínculo da Oração</h4><p>A Comemoração de Todos os Fiéis Defuntos é um dia de profunda caridade cristã. Acreditamos firmemente, com base na Tradição da Igreja, que as nossas orações, sacrifícios e, sobretudo, a Santa Missa oferecida por eles, podem ajudá-los e aliviar seus sofrimentos. É um poderoso exercício da Comunhão dos Santos, que une a Igreja da terra, do Céu e do Purgatório. Ao rezar pelos que nos precederam, expressamos nossa fé na ressurreição e nossa esperança de reencontrá-los um dia na pátria celeste.</p><h4>Esperança na Vida Eterna</h4><p>Visitar os cemitérios, acender velas, rezar pelos falecidos não são atos de tristeza mórbida, mas de fé e esperança. Recordamos com carinho aqueles que amamos, agradecemos pelo dom de suas vidas e os entregamos à misericórdia infinita de Deus. Este dia nos confronta com a reality da morte, não como um fim, mas como uma passagem para a Vida Eterna, reafirmando a nossa fé em Cristo, que venceu a morte e nos abriu as portas do Céu.</p><p class="mt-4"><b>Oração:</b> Dai-lhes, Senhor, o descanso eterno, e a luz perpétua os ilumine. Que as almas dos fiéis defuntos, pela misericórdia de Deus, descansem em paz. Amém.</p><p class="mt-2 italic">Almas do purgatório, intercedei por nós.</p>`
    }]
  },
  {
    day: 3,
    month: 'Novembro',
    saints: [{
      name: 'São Martinho de Porres',
      imageUrl: 'https://i.postimg.cc/Y0tMTg84/image.png',
      story: '<p>São Martinho de Porres, conhecido como o "santo da vassoura", é um poderoso exemplo de humildade e caridade. Nascido em Lima, Peru, em 1579, filho de um nobre espanhol e de uma ex-escrava panamenha, enfrentou desde cedo o preconceito por ser mulato. Ingressou na Ordem Dominicana como irmão leigo e dedicou sua vida aos serviços mais humildes do convento, como varrer, cozinhar e cuidar da enfermaria. Sua caridade não conhecia limites, estendendo-se a todos os pobres, doentes e até aos animais. Sua vida é um testemunho de que a santidade floresce no serviço humilde e no amor sem distinção.</p>'
    }]
  },
  {
    day: 4,
    month: 'Novembro',
    saints: [{
      name: 'São Carlos Borromeu',
      imageUrl: 'https://i.postimg.cc/zf6wN0G5/image.png',
      story: '<p>São Carlos Borromeu foi um cardeal e arcebispo de Milão no século XVI, uma das figuras mais importantes da Reforma Católica. Sobrinho do Papa Pio IV, renunciou a uma vida de luxo para se dedicar inteiramente à reforma da sua diocese, aplicando com zelo os decretos do Concílio de Trento. Fundou seminários para a formação do clero, visitou todas as paróquias e, durante a peste de 1576, destacou-se pela sua caridade heroica, cuidando pessoalmente dos doentes e gastando toda a sua fortuna para ajudar os necessitados. É um modelo de pastor zeloso e de amor à Igreja.</p>'
    }]
  },
  {
    day: 5,
    month: 'Novembro',
    saints: [{
      name: 'São Zacarias e Santa Isabel',
      imageUrl: 'https://i.postimg.cc/90FQnjHQ/image.png',
      story: '<p>São Zacarias e Santa Isabel são os pais de São João Batista. O Evangelho de Lucas nos apresenta este casal como "justos diante de Deus, que caminhavam irrepreensivelmente em todos os mandamentos e preceitos do Senhor". Apesar da idade avançada e da esterilidade de Isabel, eles nunca perderam a fé e a esperança. Deus recompensou sua fidelidade com o milagre do nascimento de João, o precursor do Messias. Eles são um modelo de casal santo, que viveu a sua fé no dia a dia e acolheu com alegria a vontade de Deus em suas vidas.</p>'
    }]
  },
  {
    day: 6,
    month: 'Novembro',
    saints: [{
      name: 'São Nuno de Santa Maria',
      imageUrl: 'https://i.postimg.cc/cH1WsM9V/image.png',
      story: '<p>São Nuno Álvares Pereira, conhecido como o Santo Condestável, foi um herói nacional português do século XIV. Como comandante militar, liderou o exército português em vitórias decisivas que garantiram a independência de Portugal. Após a morte de sua esposa e o cumprimento de seus deveres para com a pátria, renunciou a todas as suas honras e riquezas e ingressou como irmão leigo na Ordem do Carmo, que ele mesmo havia fundado. Viveu o resto de seus dias em pobreza e oração, mostrando que a santidade pode ser alcançada tanto no campo de batalha quanto no silêncio do claustro.</p>'
    }]
  },
  {
    day: 7,
    month: 'Novembro',
    saints: [{
      name: 'São Vilibrordo',
      imageUrl: 'https://i.postimg.cc/qvBW6MX7/image.png',
      story: '<p>São Vilibrordo, conhecido como o "Apóstolo dos Frísios", foi um monge beneditino inglês que, no século VII, liderou uma missão evangelizadora na Frísia (atuais Holanda e Luxemburgo). Com o apoio do Papa e dos reis francos, ele trabalhou incansavelmente para levar a fé cristã a povos pagãos, enfrentando perigos e incompreensões. Foi consagrado bispo de Utrecht e fundou mosteiros que se tornaram centros de cultura e evangelização. Sua vida é um exemplo de zelo missionário e de inculturação da fé.</p>'
    }]
  },
  {
    day: 8,
    month: 'Novembro',
    saints: [
      {
        name: 'Santa Isabel da Trindade',
        imageUrl: 'https://i.postimg.cc/nzfk73bT/image.png',
        story: '<p>Isabel Catez, carmelita descalça de Dijon, França, viveu uma vida curta (1880-1906) mas de uma intensidade espiritual extraordinária. Sua missão foi descobrir o "segredo da felicidade": a presença da Santíssima Trindade habitando no mais íntimo de sua alma. Ela se via como "louvor de glória" da Trindade, oferecendo sua vida e seus sofrimentos em união com Cristo. Sua espiritualidade, profundamente teológica e acessível, convida-nos a tomar consciência desta presença divina em nós e a viver cada momento como um ato de amor e adoração.</p>'
      },
      {
        name: 'São Deodato I, Papa',
        imageUrl: 'https://i.postimg.cc/zfCWm54m/image.png',
        story: '<p>São Deodato I, Papa no início do século VII, é lembrado pelo seu grande amor ao clero e ao povo de Roma. Foi o primeiro Papa a usar o selo papal de chumbo ("bulla") nos documentos pontifícios, uma prática que continua até hoje. Em um tempo de calamidades, como terremotos e lepra, ele se dedicou com caridade heroica ao cuidado dos doentes e necessitados. Seu pontificado foi um testemunho de serviço humilde e de paternidade espiritual para com a Igreja de Roma.</p>'
      }
    ]
  },
  {
    day: 9,
    month: 'Novembro',
    saints: [{
      name: 'Dedicação da Basílica de Latrão',
      imageUrl: 'https://i.postimg.cc/43JW2rwd/image.png',
      story: '<p>A Basílica de São João de Latrão, em Roma, é a catedral do Papa e, por isso, é considerada a "mãe e cabeça de todas as igrejas do mundo". A festa de sua dedicação celebra não apenas o edifício material, mas o mistério da Igreja como Templo de Deus. Cada igreja é um sinal da Igreja universal, o Povo de Deus reunido em nome de Cristo. Ao celebrar a dedicação de uma igreja, somos convidados a recordar que nós mesmos, pelo Batismo, fomos transformados em templos vivos do Espírito Santo, chamados a ser pedras vivas na construção do Reino de Deus.</p>'
    }]
  },
  {
    day: 10,
    month: 'Novembro',
    saints: [{
      name: 'São Leão Magno',
      imageUrl: 'https://i.postimg.cc/NjYhYCpF/image.png',
      story: '<p>São Leão Magno, Papa no século V, foi um dos maiores defensores da fé católica. Em um tempo de grandes heresias cristológicas, ele defendeu com clareza e autoridade a doutrina das duas naturezas de Cristo, divina e humana, unidas numa só Pessoa. Seu famoso "Tomo a Flaviano" foi a base para a definição dogmática do Concílio de Calcedônia. Além de grande teólogo, foi também um pastor corajoso. Em 452, enfrentou Átila, o Huno, e conseguiu evitar que Roma fosse saqueada. É um modelo de Papa, que une a solidez da doutrina à coragem pastoral.</p>'
    }]
  },
  {
    day: 11,
    month: 'Novembro',
    saints: [{
      name: 'São Martinho de Tours',
      imageUrl: 'https://iili.io/Kpnr9DB.jpg',
      story: '<p>São Martinho de Tours é um dos santos mais populares da Europa. Nascido na Panônia (atual Hungria), era soldado romano. O episódio mais famoso de sua vida ocorreu when, ainda catecúmeno, encontrou um pobre a tremer de frio às portas da cidade de Amiens. Sem hesitar, cortou seu manto ao meio com a espada e deu metade ao pobre. Na noite seguinte, Cristo apareceu-lhe em sonho, vestido com a metade do manto que ele havia dado. Este evento marcou sua conversão. Deixou o exército, foi batizado e tornou-se monge e, mais tarde, bispo de Tours. Sua vida foi um exemplo de caridade e zelo evangelizador.</p>'
    }]
  },
  {
    day: 12,
    month: 'Novembro',
    saints: [{
      name: 'São Josafá Kuncewicz',
      imageUrl: 'https://iili.io/KpzoCFV.png',
      story: '<p>São Josafá, arcebispo de Polotsk no século XVII, foi um ardente apóstolo da unidade dos cristãos. Viveu em uma época de grande divisão entre católicos e ortodoxos na Europa Oriental. Dedicou sua vida a promover a união da Igreja Ortodoxa com Roma, através do diálogo, da pregação e da reforma do clero. Seu zelo pela unidade, no entanto, atraiu o ódio dos que se opunham à união. Foi brutalmente assassinado por uma multidão enfurecida, tornando-se um mártir da unidade da Igreja. Seu sangue derramado é uma semente de esperança para o ecumenismo.</p>',
      isMartyr: true
    }]
  },
  {
    day: 13,
    month: 'Novembro',
    saints: [
      {
        name: 'São Diogo de Alcalá',
        imageUrl: 'https://iili.io/KpuuHiX.png',
        story: '<p>São Diogo, irmão leigo franciscano do século XV, é um exemplo de santidade vivida na humildade e no serviço. Embora analfabeto, possuía uma sabedoria divina que atraía a ele muitas pessoas em busca de conselho. Sua vida foi marcada por uma caridade extraordinária para com os pobres e doentes. O "milagre das flores", em que os pães que levava escondido para os pobres se transformaram em flores, é um belo símbolo de sua caridade, que transformava o simples em extraordinário.</p>'
      },
      {
        name: 'São Nicolau I, Papa',
        imageUrl: 'https://iili.io/KpuYJ8g.png',
        story: '<p>São Nicolau I, conhecido como "o Grande", foi um dos Papas mais enérgicos e influentes da Idade Média. Em um tempo de grande instabilidade política, ele defendeu com firmeza a autoridade da Sé Apostólica contra as interferências dos imperadores e príncipes. Lutou contra a corrupção do clero e defendeu a santidade do matrimônio. Seu pontificado foi um marco na afirmação da independência e da missão universal da Igreja.</p>'
      }
    ]
  },
  {
    day: 14,
    month: 'Novembro',
    saints: [
      {
        name: 'Santos Estêvão T. Cuénot e Mártires',
        imageUrl: 'https://iili.io/KpAYnr7.png',
        story: '<p>A Igreja celebra hoje a memória de um grupo de mártires do Vietnã, liderados pelo bispo Santo Estêvão Teodoro Cuénot. Missionário francês das Missões Estrangeiras de Paris, dedicou 30 anos de sua vida à evangelização do Vietnã, em meio a perseguições ferozes. Preso e condenado à morte, morreu na prisão antes da execução, consumindo seu martírio no sofrimento. Com ele, celebramos a multidão de cristãos vietnamitas que deram a vida por Cristo.</p>',
        isMartyr: true
      },
      {
        name: 'Santo Estanislau Kostka',
        imageUrl: 'https://iili.io/KpAYC1S.jpg',
        story: '<p>Santo Estanislau Kostka, jovem nobre polonês do século XVI, é um modelo para a juventude. Sentindo um forte chamado para a vida religiosa jesuíta, enfrentou a oposição ferrenha de sua família. Para realizar sua vocação, fugiu de casa e caminhou mais de 500 quilômetros a pé até Roma, para ser admitido na Companhia de Jesus. Sua vida no noviciado foi curta, mas intensa em amor a Deus e a Maria. Morreu aos 18 anos, deixando um exemplo de determinação e pureza de coração.</p>'
      }
    ]
  },
  {
    day: 15,
    month: 'Novembro',
    saints: [{
      name: 'Santo Alberto Magno',
      imageUrl: 'https://iili.io/KpAYBB2.jpg',
      story: '<p>Santo Alberto Magno, dominicano alemão do século XIII, foi um dos maiores intelectuais da Idade Média. Conhecido como o "Doutor Universal", seu conhecimento abrangia teologia, filosofia, ciências naturais, astronomia, química e muito mais. Foi um pioneiro no diálogo entre a fé e a razão, mostrando que a ciência e a religião não se opõem, mas se complementam. Foi mestre de São Tomás de Aquino, a quem defendeu e cujo génio reconheceu. Sua vida nos ensina a buscar a verdade em todas as áreas do conhecimento, sempre com o olhar voltado para Deus, a fonte de toda a verdade.</p>'
    }]
  },
  {
    day: 16,
    month: 'Novembro',
    saints: [{
      name: 'Santa Margarida da Escócia',
      imageUrl: 'https://iili.io/KpAYfLl.jpg',
      story: '<p>Santa Margarida, rainha da Escócia no século XI, foi um exemplo luminoso de como a santidade pode florescer na vida familiar e no exercício do poder. Neta do rei da Inglaterra, casou-se com o rei Malcolm III da Escócia. Como rainha, usou sua influência para reformar a Igreja na Escócia, promovendo a disciplina eclesiástica, fundando mosteiros e igrejas, e incentivando a prática dos sacramentos. Ao mesmo tempo, foi uma esposa e mãe exemplar, educando seus oito filhos na fé cristã. Sua vida foi marcada por uma intensa caridade para com os pobres e órfãos, a quem servia pessoalmente todos os dias.</p>'
    }]
  },
  {
    day: 17,
    month: 'Novembro',
    saints: [{
      name: 'Santa Isabel da Hungria',
      imageUrl: 'https://i.postimg.cc/pdDpq2dk/image.png',
      story: '<p>Santa Isabel, princesa da Hungria e duquesa da Turíngia no século XIII, é um dos mais belos exemplos de caridade cristã. Desde jovem, renunciou ao luxo da corte para viver uma vida de simplicidade e serviço aos pobres. Após a morte prematura de seu marido, a quem amava profundamente, dedicou-se inteiramente aos necessitados, fundando um hospital onde ela mesma cuidava dos doentes. O famoso "milagre das rosas" - em que o pão que levava escondido para os pobres se transformou em rosas - simboliza a beleza de sua caridade, que transformava o pão material em alimento para a alma.</p>'
    }]
  },
  {
    day: 18,
    month: 'Novembro',
    saints: [{
      name: 'Dedicação das Basílicas de S. Pedro e S. Paulo',
      imageUrl: 'https://iili.io/f9SNKiB.jpg',
      story: '<p>A celebração da dedicação das basílicas de São Pedro, no Vaticano, e de São Paulo Fora de Muros, em Roma, recorda-nos a importância dos dois Apóstolos que são as colunas da Igreja. Construídas sobre os túmulos dos mártires, estas basílicas são símbolos da fé apostólica, transmitida ao longo dos séculos. A Basílica de São Pedro representa o primado de Pedro, a unidade da Igreja. A Basílica de São Paulo representa a missão universal da Igreja, chamada a levar o Evangelho a todos os povos. Celebrar a sua dedicação é renovar a nossa fé na Igreja una, santa, católica e apostólica.</p>'
    }]
  },
  {
    day: 19,
    month: 'Novembro',
    saints: [
      {
        name: 'S. Roque González e Mártires',
        imageUrl: 'https://iili.io/f9QNVmQ.png',
        story: '<p>São Roque González, jesuíta paraguaio, e seus companheiros Afonso Rodrigues e João de Castilho, foram missionários pioneiros nas "reduções" do Paraguai, aldeias criadas para evangelizar e proteger os índios guaranis da exploração dos colonizadores. Eles aprenderam a língua e os costumes do povo, e criaram comunidades justas e fraternas. O seu sucesso, no entanto, provocou a ira de um feiticeiro local, que os assassinou brutalmente. São os primeiros mártires da América do Sul.</p>',
        isMartyr: true
      },
      {
        name: 'São Rafael Kalinowski',
        imageUrl: 'https://iili.io/f9QXCSR.jpg',
        story: '<p>São Rafael Kalinowski, engenheiro militar e líder de uma insurreição polonesa contra o domínio russo, foi condenado à morte e depois exilado na Sibéria. Após dez anos de trabalhos forçados, onde foi um anjo de consolação para os outros prisioneiros, ingressou na Ordem dos Carmelitas Descalços. Como sacerdote, tornou-se um diretor espiritual muito procurado, conhecido pela sua sabedoria e discernimento. É um modelo de reconciliação e de fé que supera as maiores provações.</p>'
      }
    ]
  },
  {
    day: 20,
    month: 'Novembro',
    saints: [
      {
        name: 'São Félix de Valois',
        imageUrl: 'https://iili.io/fHTsnqv.png',
        story: '<p>São Félix de Valois, príncipe francês, renunciou a uma vida na corte para viver como eremita. Juntamente com São João de Matha, fundou a Ordem da Santíssima Trindade, dedicada à redenção dos cristãos cativos dos mouros. Os trinitários dedicavam-se a recolher esmolas para pagar o resgate dos escravos, arriscando a própria vida em missões perigosas. São Félix é um exemplo de renúncia ao mundo e de amor heróico aos irmãos mais sofredores.</p>'
      }
    ]
  },
  {
    day: 21,
    month: 'Novembro',
    saints: [{
      name: 'Apresentação de N.S.',
      imageUrl: 'https://i.postimg.cc/3Js86PzK/image.png',
      story: '<p>A festa da Apresentação de Nossa Senhora no Templo celebra uma antiga tradição segundo a qual os pais de Maria, São Joaquim e Santa Ana, a levaram ao Templo de Jerusalém when era criança para a consagrarem a Deus. Embora este evento não esteja nos Evangelhos canónicos, tem um profundo significado espiritual. Celebra a total consagração de Maria a Deus desde a sua infância. Ela, que seria o Templo vivo onde o Verbo de Deus habitaria, foi desde sempre preparada para a sua missão única. Esta festa convida-nos a renovar a nossa própria consagração batismal, entregando toda a nossa vida ao serviço de Deus.</p>'
    }]
  },
  {
    day: 22,
    month: 'Novembro',
    saints: [{
      name: 'Santa Cecília',
      imageUrl: 'https://i.postimg.cc/4xDNjn2c/image.png',
      story: '<p>Santa Cecília, virgem e mártir romana dos primeiros séculos, é a padroeira da música e dos músicos. Segundo a tradição, no dia de seu casamento com um nobre pagão, while os instrumentos musicais tocavam, Cecília cantava em seu coração apenas para o Senhor, a quem havia consagrado sua virgindade. Converteu seu marido, Valeriano, e seu cunhado, Tibúrcio, que também foram martirizados. Condenada à morte, sobreviveu a uma tentativa de asfixia e, finally, foi decapitada. Sua vida nos ensina que a verdadeira música é aquela que brota de um coração que ama a Deus sobre todas as coisas.</p>',
      isMartyr: true
    }]
  },
  {
    day: 23,
    month: 'Novembro',
    saints: [
      {
        name: 'São Columbano',
        imageUrl: 'https://iili.io/fHuYjt4.png',
        story: '<p>São Columbano foi um monge e missionário irlandês, uma das figuras mais influentes do cristianismo no início da Idade Média. Fundou numerosos mosteiros na Europa continental, que se tornaram centros de cultura, oração e evangelização. Era conhecido pela sua rigorosa disciplina monástica, mas também pelo seu zelo missionário e pela sua coragem em repreender os vícios dos reis e nobres. É um dos padroeiros da Europa.</p>'
      },
      {
        name: 'São Clemente I, Papa',
        imageUrl: 'https://iili.io/fHuYhNf.jpg',
        story: '<p>São Clemente, terceiro sucessor de São Pedro, governou a Igreja no final do primeiro século. A sua "Carta aos Coríntios" é um dos documentos mais importantes da era pós-apostólica, um testemunho da autoridade do Bispo de Roma e da sua solicitude por todas as Igrejas. Foi martirizado no exílio, segundo a tradição, e é um elo precioso na cadeia da sucessão apostólica, que nos une diretamente a Cristo e aos Apóstolos.</p>',
        isMartyr: true
      }
    ]
  },
  {
    day: 24,
    month: 'Novembro',
    saints: [
      {
        name: 'S. André Dung-Lac e J. Teófanes Venard',
        imageUrl: 'https://iili.io/fHuhIKG.png',
        story: '<p>Santo André Dung-Lac (1795-1839) foi um sacerdote vietnamita e catequista que dedicou sua vida à evangelização e ao serviço pastoral no Vietnã. Como membro do clero nativo, enfrentou perseguições constantes durante o reinado do imperador Minh Mang, que perseguiu brutalmente os cristãos. André Dung-Lac não apenas celebrava os sacramentos secretamente, mas também guiava espiritualmente as comunidades cristãs perseguidas, demonstrando uma coragem extraordinária e uma fé inabalável. Foi capturado, torturado e finalmente martirizado em 1839.</p><p>João Teófanes Venard (1829-1861) foi um sacerdote e missionário francês pertencente à Sociedade das Missões Estrangeiras de Paris. Chegou ao Vietnã como missionário apostólico com o ardor de propagar o Evangelho. Seus escritos, especialmente sua correspondência, revelam uma alma profundamente apaixonada por Cristo e um amor genuíno pelo povo vietnamita. Teófanes trabalhou incansavelmente na evangelização, formando sacerdotes locais como André Dung-Lac. Durante a perseguição, oferecia-se voluntariamente para ser capturado a fim de poupar seus catequistas. Foi martirizado em 1861.</p><p>Estes dois santos, embora separados por gerações, estão unidos na memória da Igreja como símbolos da perseverança cristã no Vietnã. Seu martírio marca a fidelidade de inúmeros cristãos vietnamitas que preferiram a morte a renunciar à fé. Entre os séculos XVII e XIX, 117 mártires vietnamitas foram canonizados, representando bispos, sacerdotes, religiosos e leigos. Sua coragem inspira-nos a viver com autenticidade nossa fé, dispostos a testemunhar Cristo mesmo diante das maiores adversidades. O sangue dos mártires é semente de novos cristãos.</p>',
        isMartyr: true
      }
    ]
  },
  {
    day: 25,
    month: 'Novembro',
    saints: [{
      name: 'Santa Catarina de Alexandria',
      imageUrl: 'https://i.postimg.cc/s2FFt7gs/image.png',
      story: '<p>Santa Catarina de Alexandria, virgem e mártir do século IV, é uma das santas mais veneradas da Igreja. De nobre linhagem e dotada de uma inteligência extraordinária, converteu-se ao cristianismo e dedicou-se ao estudo da filosofia e da teologia. A tradição conta que, durante a perseguição do imperador Maximino, ela confundiu os 50 filósofos mais sábios do império, que tentaram fazê-la renunciar à fé, e acabou por convertê-los. Foi condenada a morrer numa roda com lâminas, que se quebrou milagrosamente ao seu toque. Finalmente, foi decapitada. É a padroeira dos estudantes, filósofos e de todos os que buscam a sabedoria.</p>',
      isMartyr: true
    }]
  },
  {
    day: 26,
    month: 'Novembro',
    saints: [
      {
        name: 'São Leonardo de Porto Maurício',
        imageUrl: 'https://iili.io/fHuDZwN.png',
        story: '<p>São Leonardo, frade franciscano do século XVIII, foi um dos maiores pregadores de missões populares de seu tempo. Percorreu a Itália a pé, pregando com um fervor que convertia multidões. É conhecido sobretudo por sua devoção à Via-Sacra, tendo sido o grande promotor desta prática piedosa, erigindo mais de 500 Vias-Sacras por toda a Itália, incluindo a famosa do Coliseu de Roma. Sua vida nos ensina a importância de meditar na Paixão de Cristo.</p>'
      },
      {
        name: 'Beato Tiago Alberione',
        imageUrl: 'https://iili.io/fHuD8ZP.jpg',
        story: '<p>O Beato Tiago Alberione, sacerdote italiano, foi um apóstolo moderno que compreendeu a importância de evangelizar através dos meios de comunicação. Fundou a Família Paulina, um conjunto de congregações religiosas e institutos seculares dedicados ao apostolado da imprensa, do cinema, da rádio e da televisão. Sua visão profética continua a inspirar a Igreja a usar todas as tecnologias modernas para anunciar o Evangelho a todos os povos.</p>'
      }
    ]
  },
  {
    day: 27,
    month: 'Novembro',
    saints: [{
      name: 'Nossa Senhora das Graças',
      imageUrl: 'https://i.postimg.cc/SsBDK7HJ/Design-sem-nome-2.png',
      story: '<p>Em 1830, a Virgem Maria apareceu a uma humilde freira, Santa Catarina Labouré, em Paris. Nessas aparições, Maria mostrou o desenho de uma medalha. De um lado, a imagem da Virgem com os braços abertos, e raios de luz saindo de suas mãos, com a inscrição: "Ó Maria, concebida sem pecado, rogai por nós que recorremos a vós". Do outro lado, a letra M com uma cruz por cima e os Corações de Jesus e Maria. Nossa Senhora prometeu graças abundantes a todos que usassem a medalha com confiança. A "Medalha Milagrosa", como ficou conhecida, espalhou-se rapidamente pelo mundo, sendo um sinal do amor e da proteção maternal de Maria.</p>'
    }]
  },
  {
    day: 28,
    month: 'Novembro',
    saints: [
      {
        name: 'Santa Catarina Labouré',
        imageUrl: 'https://iili.io/fHuDOyQ.jpg',
        story: '<p>Santa Catarina Labouré, a humilde Filha da Caridade a quem Nossa Senhora apareceu em 1830, viveu o resto de sua vida no anonimato, trabalhando num asilo de idosos em Paris. Ninguém, exceto seu diretor espiritual, sabia que ela era a vidente da Medalha Milagrosa. Sua vida foi um exemplo de humildade, silêncio e serviço. Ela guardou o "segredo da Rainha" em seu coração, mostrando que a verdadeira grandeza está em se apagar para que Deus possa brilhar.</p>'
      },
      {
        name: 'São Tiago da Marca',
        imageUrl: 'https://iili.io/fHuDkuV.webp',
        story: '<p>São Tiago da Marca, franciscano do século XV, foi um pregador incansável e reformador da Ordem. Dotado de uma grande inteligência e de um zelo ardente, combateu as heresias de seu tempo e promoveu a paz entre as cidades italianas. Foi também um dos iniciadores dos "Montes de Piedade", uma espécie de banco de empréstimos sem juros para ajudar os pobres a escapar da usura, um testemunho de sua preocupação social.</p>'
      }
    ]
  },
  {
    day: 29,
    month: 'Novembro',
    saints: [
      {
        name: 'São Francisco Antônio Fasani',
        imageUrl: 'https://iili.io/fHuDi8v.jpg',
        story: '<p>São Francisco Antônio Fasani, frade franciscano conventual do século XVIII, foi um "doutor" para os humildes e um "pai" para os pobres. Dotado de grande sabedoria teológica, preferiu dedicar-se à pregação popular e ao confessionário, onde passava horas a fio. Sua caridade para com os necessitados era lendária. É um modelo de pastor que une a profundidade da doutrina à simplicidade do amor.</p>'
      },
      {
        name: 'São Saturnino de Tolosa',
        imageUrl: 'https://iili.io/fHuDPcJ.jpg',
        story: '<p>São Saturnino foi o primeiro bispo de Tolosa, na Gália (atual França), no século III. Em um ambiente de paganismo dominante, ele pregou corajosamente o Evangelho. A tradição conta que, por se recusar a sacrificar aos ídolos, foi amarrado a um touro furioso e arrastado pelas escadas do Capitólio, consumando seu martírio. Sua coragem e fidelidade foram a semente da fé cristã naquela região.</p>',
        isMartyr: true
      }
    ]
  },
  {
    day: 30,
    month: 'Novembro',
    saints: [{
      name: 'Santo André, Apóstolo',
      imageUrl: 'https://iili.io/KpAtzcG.jpg',
      story: '<p>Santo André, irmão de Simão Pedro, foi o primeiro dos Apóstolos a ser chamado por Jesus. Era discípulo de João Batista e, when este apontou para Jesus dizendo "Eis o Cordeiro de Deus", André seguiu imediatamente o Mestre. A sua primeira ação como discípulo foi levar o seu próprio irmão a Jesus, dizendo: "Encontrámos o Messias". Por isso, é chamado de "Protocleto" (o primeiro chamado). Após o Pentecostes, a tradição diz que ele pregou o Evangelho em várias regiões, incluindo a Grécia, onde foi martirizado em Patras, crucificado numa cruz em forma de X, que hoje leva o seu nome. É um modelo de prontidão em seguir Jesus e de zelo em levar os outros a Ele.</p>',
      isMartyr: true
    }]
  }
];

export const saintsOfTheDayDecember: SaintOfTheDayData[] = [
  { day: 1, month: 'Dezembro', saints: [{ name: 'Santo Elói (ou Elígio)', imageUrl: '/images/santo_eloi.png', story: '<p>Patrono dos ourives e ferreiros.</p>' }] },
  { day: 2, month: 'Dezembro', saints: [{ name: 'Santa Bibiana', imageUrl: '/images/santa_bibiana.png', story: '<p>Mártir e virgem.</p>', isMartyr: true }] },
  {
    day: 3,
    month: 'Dezembro',
    saints: [{
      name: 'São Francisco Xavier',
      imageUrl: '/images/sao_francisco_xavier.png',
      story: `<h4>O Gigante das Missões</h4><p>São Francisco Xavier, nascido em Navarra em 1506, foi um dos primeiros companheiros de Santo Inácio de Loyola e co-fundador da Companhia de Jesus. Enviado para o Oriente, tornou-se o maior missionário dos tempos modernos. Percorreu a Índia, o Japão e outras ilhas, batizando milhares de pessoas e operando inúmeros milagres. Seu zelo pela salvação das almas era tão ardente que ele exclamava: "Senhor, dai-me almas e ficai com o resto!". Morreu às portas da China, consumido pela fadiga e pelo amor a Deus.</p><p class="mt-4"><b>Oração:</b> Ó Deus, que pela pregação e milagres de São Francisco Xavier trouxestes para a vossa Igreja os povos do Oriente, concedei-nos que, imitando as suas virtudes, possamos também nós trabalhar incansavelmente pela propagação da fé.</p><p class="mt-2 italic">São Francisco Xavier, rogai por nós.</p>`
    }]
  },
  {
    day: 4,
    month: 'Dezembro',
    saints: [{
      name: 'Santa Bárbara',
      imageUrl: '/images/santa_barbara.png',
      story: `<h4>A Mártir da Torre</h4><p>Santa Bárbara viveu no século III e é uma das santas mais populares da Igreja. Segundo a tradição, foi trancada numa torre pelo seu pai para a proteger dos pretendentes. Lá, converteu-se ao cristianismo e mandou abrir uma terceira janela em honra da Santíssima Trindade. Furioso, o pai denunciou-a e ela foi martirizada. É invocada contra raios, tempestades e morte repentina, sendo a padroeira dos artilheiros e mineiros.</p><p class="mt-4"><b>Oração:</b> Ó Santa Bárbara, que sois mais forte que a violência dos furacões e o poder das fortalezas, estai sempre ao nosso lado, para que possamos enfrentar com serenidade todas as tempestades da vida.</p><p class="mt-2 italic">Santa Bárbara, rogai por nós.</p>`
    }]
  },
  {
    day: 5,
    month: 'Dezembro',
    saints: [{
      name: 'São Sabas',
      imageUrl: '/images/sao_sabas.png',
      story: `<h4>O Pai dos Monges</h4><p>São Sabas, nascido na Capadócia no ano 439, foi um dos patriarcas do monaquismo oriental. Buscando a solidão do deserto, fundou a Grande Lavra na Palestina, um mosteiro que se tornou um centro de espiritualidade e teologia. Defensor intrépido da fé católica contra as heresias de seu tempo, sua vida foi marcada pela oração, penitência e milagres. Sua influência moldou a liturgia e a vida monástica bizantina.</p><p class="mt-4"><b>Oração:</b> Ó Deus, que no abade São Sabas nos destes um modelo de vida consagrada ao vosso serviço, concedei-nos, por sua intercessão, a graça de buscar sempre as coisas do alto.</p><p class="mt-2 italic">São Sabas, rogai por nós.</p>`
    }]
  },
  {
    day: 6,
    month: 'Dezembro',
    saints: [{
      name: 'São Nicolau de Mira',
      imageUrl: '/images/sao_nicolau.png',
      story: `<h4>O Bispo da Caridade</h4><p>São Nicolau, bispo de Mira (na atual Turquia) no século IV, é um dos santos mais amados da cristandade. Famoso por sua generosidade e amor aos pobres, a lenda conta que ele salvou três irmãs da prostituição atirando bolsas de ouro pela janela de sua casa, origem da tradição dos presentes de Natal. Defensor da fé no Concílio de Niceia, é protetor das crianças, dos marinheiros e dos inocentes.</p><p class="mt-4"><b>Oração:</b> Ó Deus, que fizestes o bispo São Nicolau ilustre por inúmeros milagres e pela sua caridade para com os pobres, concedei-nos, por seus méritos e preces, sermos livres das chamas do inferno e de todos os perigos.</p><p class="mt-2 italic">São Nicolau, rogai por nós.</p>`
    }]
  },
  {
    day: 7,
    month: 'Dezembro',
    saints: [{
      name: 'Santo Ambrósio',
      imageUrl: '/images/santo_ambrosio.png',
      story: `<h4>O Doutor da Melíflua Eloquência</h4><p>Santo Ambrósio, bispo de Milão no século IV, foi um gigante da Igreja. Aclamado bispo pelo povo when ainda era catecúmeno, tornou-se um pastor exemplar, teólogo profundo e defensor da liberdade da Igreja frente ao poder imperial. Suas pregações, doces como o mel (daí o símbolo da colmeia), foram decisivas para a conversão de Santo Agostinho. É um dos quatro grandes Doutores da Igreja Latina.</p><p class="mt-4"><b>Oração:</b> Ó Deus, que fizestes do bispo Santo Ambrósio um doutor da fé católica e um exemplo de coragem apostólica, suscitai na vossa Igreja homens segundo o vosso coração.</p><p class="mt-2 italic">Santo Ambrósio, rogai por nós.</p>`
    }]
  },
  {
    day: 8,
    month: 'Dezembro',
    saints: [{
      name: 'Imaculada Conceição',
      imageUrl: 'https://iili.io/KpAtISf.png',
      story: `<h4>A Toda Pura</h4><p>A Solenidade da Imaculada Conceição celebra o dogma de fé definido pelo Papa Pio IX em 1854: a Virgem Maria, desde o primeiro instante de sua concepção, por singular graça e privilégio de Deus onipotente, em vista dos méritos de Jesus Cristo, Salvador do gênero humano, foi preservada imune de toda mancha de pecado original. Ela é a "Cheia de Graça", a nova Eva, a aurora da salvação.</p><p class="mt-4"><b>Oração:</b> Ó Deus, que pela Imaculada Conceição da Virgem preparastes uma digna morada para o vosso Filho, nós vos rogamos que, assim como a preservastes de toda mancha pela previsão da morte de vosso Filho, nos concedais também a nós chegar até vós purificados por sua intercessão.</p><p class="mt-2 italic">Ó Maria concebida sem pecado, rogai por nós que recorremos a vós.</p>`
    }]
  },
  {
    day: 9,
    month: 'Dezembro',
    saints: [{
      name: 'São João Diego',
      imageUrl: '/images/sao_joao_diego.png',
      story: `<h4>O Mensageiro da Virgem</h4><p>São João Diego Cuauhtlatoatzin, índio asteca convertido, foi o escolhido por Nossa Senhora de Guadalupe para ser seu mensageiro em 1531. Humilde e simples, ele presenciou as aparições no monte Tepeyac e levou ao bispo as rosas de Castela e a sua tilma (manto) onde ficou impressa milagrosamente a imagem da Virgem. Sua vida foi marcada pela devoção e pelo serviço ao santuário que se ergueu.</p><p class="mt-4"><b>Oração:</b> Ó Deus, que por meio de São João Diego mostrastes o amor de vossa Mãe pelos mais humildes, concedei-nos a graça de ouvir com coração atento a vossa palavra e de servir aos nossos irmãos com generosidade.</p><p class="mt-2 italic">São João Diego, rogai por nós.</p>`
    }]
  },
  {
    day: 10,
    month: 'Dezembro',
    saints: [{
      name: 'Nossa Senhora de Loreto',
      imageUrl: '/images/nossa_senhora_loreto.png',
      story: `<h4>A Casa que Voou</h4><p>A devoção a Nossa Senhora de Loreto é uma das mais fascinantes da cristandade, centrada no milagre da "Santa Casa". Segundo uma antiga e piedosa tradição, a casa onde a Virgem Maria nasceu, recebeu o anúncio do Anjo Gabriel e onde Jesus viveu sua infância, foi milagrosamente transportada de Nazaré para evitar a profanação durante as invasões muçulmanas no século XIII.</p>
      <h4>O Milagre do Transporte</h4><p>Conta-se que em 1291, anjos elevaram a casa pelos ares, levando-a primeiro para a Ilíria (atual Croácia) e, finalmente, em 1294, para um bosque de loureiros (daí o nome "Loreto") na Itália. Estudos arqueológicos confirmaram que as pedras e a argamassa da casa em Loreto são típicas da região de Nazaré e desconhecidas na Itália, além de a casa não possuir fundações próprias, estando simplesmente "apoiada" no chão, o que desafia as leis da arquitetura.</p>
      <h4>Padroeira dos Aviadores</h4><p>Devido a este "voo" milagroso da Santa Casa, o Papa Bento XV declarou Nossa Senhora de Loreto a padroeira oficial dos aviadores e viajantes aéreos em 1920. É comum encontrar sua imagem em aeroportos e aviões por todo o mundo.</p>
      <h4>Curiosidades</h4><p>Dentro da Basílica de Loreto, a oração do Ângelus é rezada de forma única: em vez de "O Verbo se fez carne e habitou entre nós", diz-se "O Verbo se fez carne e habitou <b>AQUI</b>", recordando que foi entre aquelas paredes que o mistério da Encarnação aconteceu. A imagem original da Virgem era negra (devido à fumaça das velas e lamparinas de séculos), mas foi destruída num incêndio em 1921, sendo substituída por uma réplica.</p>
      <p class="mt-4"><b>Oração:</b> Ó Deus, que confiastes à proteção dos anjos a Santa Casa da Mãe do vosso Filho, concedei-nos, por intercessão de Nossa Senhora de Loreto, que sejamos protegidos em nossos caminhos e voos, e cheguemos seguros à morada eterna.</p><p class="mt-2 italic">Nossa Senhora de Loreto, rogai por nós.</p>`
    }]
  },
  {
    day: 11,
    month: 'Dezembro',
    saints: [{
      name: 'São Dâmaso I',
      imageUrl: '/images/sao_damaso.jpg',
      story: `<h4>O Papa das Catacumbas</h4><p>São Dâmaso I, papa do século IV, foi um grande defensor da fé e da memória dos mártires. Foi ele quem encarregou São Jerônimo de traduzir a Bíblia para o latim (a Vulgata) e quem restaurou e identificou os túmulos dos mártires nas catacumbas romanas, compondo belos epitáfios em verso. Fortaleceu a autoridade da Sé de Pedro.</p><p class="mt-4"><b>Oração:</b> Ó Deus, que no Papa São Dâmaso nos destes um exemplo de amor à vossa Palavra e aos vossos santos, concedei-nos venerar a memória dos que nos precederam na fé e seguir seus exemplos.</p><p class="mt-2 italic">São Dâmaso, rogai por nós.</p>`
    }]
  },
  {
    day: 12,
    month: 'Dezembro',
    saints: [{
      name: 'Nossa Senhora de Guadalupe',
      imageUrl: 'https://iili.io/ffgFDXV.png',
      story: `<h4>A Imperatriz da América</h4><p>Em dezembro de 1531, a Virgem Maria apareceu ao humilde índio Juan Diego na colina de Tepeyac, no México. Ela pediu que fosse construído um templo naquele local. O bispo, cético, pediu um sinal. A Virgem instruiu Juan Diego a colher rosas no topo da colina árida e em pleno inverno. Ele as encontrou, colheu-as e levou-as em sua tilma (manto) ao bispo. Ao abrir o manto, as rosas caíram e revelaram a imagem milagrosa de Nossa Senhora impressa no tecido.</p>
      <h4>O Mistério da Tilma</h4><p>A tilma de Juan Diego, feita de fibra de cacto (ayate), deveria ter se desintegrado em poucos anos, mas permanece intacta há quase cinco séculos. Estudos científicos revelaram fatos impressionantes: a imagem não possui traços de pintura ou pinceladas; a temperatura do tecido mantém-se constante em 36,6°C (como o corpo humano); e nos olhos da Virgem, ampliações microscópicas revelaram o reflexo de 13 figuras humanas, correspondendo às pessoas presentes no momento do milagre.</p>
      <h4>Curiosidades</h4><p>A disposição das estrelas no manto da Virgem corresponde exatamente à constelação do céu do México no dia da aparição, 12 de dezembro de 1531. Além disso, a imagem sobreviveu a um atentado a bomba em 1921, onde um crucifixo de metal se dobrou, mas o vidro e a tilma permaneceram intactos. Ela é a Padroeira das Américas e a maior devoção mariana do mundo.</p>
      <p class="mt-4"><b>Oração:</b> Ó Deus, Pai de misericórdia, que colocastes o vosso povo sob a especial proteção da Sempre Virgem Maria de Guadalupe, concedei a todos os vossos filhos a graça de se unirem na fé e na caridade, e de serem protegidos por seu manto maternal.</p><p class="mt-2 italic">Nossa Senhora de Guadalupe, rogai por nós.</p>`
    }]
  },
  {
    day: 13,
    month: 'Dezembro',
    saints: [{
      name: 'Santa Luzia',
      imageUrl: 'https://iili.io/ffgqFiN.png',
      story: `<h4>A Portadora da Luz</h4><p>Santa Luzia (cujo nome deriva de "lux", luz) foi uma jovem mártir de Siracusa, na Itália, no século IV. Consagrou sua virgindade a Deus e distribuiu sua fortuna aos pobres, o que enfureceu seu pretendente pagão, que a denunciou. Durante seu julgamento, tentaram levá-la à força para um prostíbulo, mas seu corpo tornou-se tão pesado que nem uma junta de bois conseguiu movê-la.</p>
      <h4>O Milagre dos Olhos</h4><p>A tradição mais famosa conta que, como parte de seu martírio, seus olhos foram arrancados (ou que ela mesma os arrancou para afastar o pretendente). Milagrosamente, Deus lhe restituiu a visão, dando-lhe olhos ainda mais belos antes de sua morte. Por isso, ela é invocada como a protetora da visão e das doenças oculares. Na arte, é frequentemente representada segurando uma bandeja com dois olhos.</p>
      <h4>Curiosidades</h4><p>Santa Luzia é uma das poucas santas celebradas também pelos luteranos, especialmente na Escandinávia, onde sua festa marca o início das celebrações de Natal com procissões de meninas vestidas de branco portando velas (trazendo luz no inverno escuro). Dante Alighieri, na "Divina Comédia", atribui a ela a graça iluminadora que o auxiliou em sua jornada.</p>
      <p class="mt-4"><b>Oração:</b> Ó Santa Luzia, que preferistes que vossos olhos fossem vazados e arrancados antes de negar a fé e contaminar vossa alma; e Deus, com um milagre extraordinário, vos devolveu outros dois olhos sãos e perfeitos para recompensar vossa virtude e vossa fé, e vos constituiu protetora contra as doenças dos olhos, eu recorro a vós.</p><p class="mt-2 italic">Santa Luzia, rogai por nós.</p>`
    }]
  },
  {
    day: 14,
    month: 'Dezembro',
    saints: [{
      name: 'São João da Cruz',
      imageUrl: 'https://iili.io/ffgFMWN.jpg',
      story: `<h4>O Místico do Carmelo</h4><p>São João da Cruz, frade carmelita espanhol, foi o grande reformador da Ordem do Carmo junto com Santa Teresa d'Ávila. Poeta sublime e teólogo profundo, descreveu como ninguém a "Noite Escura" da alma e a subida ao Monte Carmelo para a união de amor com Deus. Doutor da Igreja, ensina que "ao entardecer desta vida, seremos examinados no amor".</p><p class="mt-4"><b>Oração:</b> Ó Deus, que guiastes São João da Cruz à santa montanha que é Cristo através da noite escura da renúncia e do amor ardente, concedei-nos seguir seus passos para chegarmos à glória da vossa face.</p><p class="mt-2 italic">São João da Cruz, rogai por nós.</p>`
    }]
  },
  {
    day: 15,
    month: 'Dezembro',
    saints: [{
      name: 'São Valeriano, Bispo',
      imageUrl: '/images/sao_valeriano.jpg',
      story: `<h4>O Bispo Confessor</h4><p>São Valeriano foi bispo de Abbenza, no norte da África, no século V. Durante a perseguição dos Vândalos, liderada pelo rei Genserico, que era ariano, Valeriano foi intimado a entregar os vasos sagrados da Igreja. O santo bispo recusou-se firmemente a profanar as coisas de Deus. Como punição, foi expulso da cidade aos 80 anos de idade, com a proibição de que alguém lhe desse abrigo ou alimento. Morreu ao relento, como um verdadeiro confessor da fé, preferindo perder a vida a trair o seu sagrado dever.</p><p class="mt-4"><b>Oração:</b> Ó Deus, que concedestes a São Valeriano a graça de defender com coragem os bens da vossa Igreja, dai-nos a força de proteger a nossa fé e de nunca ceder diante das pressões do mundo.</p><p class="mt-2 italic">São Valeriano, rogai por nós.</p>`
    }]
  },
  {
    day: 16,
    month: 'Dezembro',
    saints: [{
      name: 'Santa Adelaide',
      imageUrl: 'https://i.pinimg.com/736x/a7/cc/bf/a7ccbf33c3c75910c8a59922ba576d1d.jpg',
      story: `<h4>A Imperatriz da Caridade</h4><p>Santa Adelaide, imperatriz do Sacro Império Romano-Germânico no século X, teve uma vida marcada por reviravoltas, exílios e sofrimentos. No entanto, nunca perdeu a fé nem a bondade. Usou seu poder para construir igrejas, mosteiros e, principalmente, para socorrer os pobres e necessitados. Terminou seus dias num mosteiro, em oração.</p><p class="mt-4"><b>Oração:</b> Ó Deus, que ornastes Santa Adelaide com a coroa da glória eterna por sua humildade e caridade, ajudai-nos a usar nossos dons para o bem do próximo e para a vossa glória.</p><p class="mt-2 italic">Santa Adelaide, rogai por nós.</p>`
    }]
  },
  {
    day: 17,
    month: 'Dezembro',
    saints: [{
      name: 'São Lázaro',
      imageUrl: 'https://i.pinimg.com/736x/a7/db/aa/a7dbaa1c33184d629e80982c736b8b1a.jpg',
      story: `<h4>O Amigo de Jesus</h4><p>São Lázaro, irmão de Marta e Maria, vivia em Betânia e hospedava Jesus em sua casa. É conhecido pelo milagre de sua ressurreição, when Jesus o chamou para fora do túmulo após quatro dias de morto. A tradição conta que, após a Ascensão de Jesus, tornou-se bispo e morreu mártir. Sua vida nos lembra que Jesus é a Ressurreição e a Vida.</p><p class="mt-4"><b>Oração:</b> Ó Deus, que concedestes a São Lázaro a graça de ser chamado amigo de vosso Filho e de ser por Ele ressuscitado, dai-nos crer firmemente na vida eterna e na vitória sobre a morte.</p><p class="mt-2 italic">São Lázaro, rogai por nós.</p>`
    }]
  },
  {
    day: 18,
    month: 'Dezembro',
    saints: [{
      name: 'Nossa Senhora do Bom Parto',
      imageUrl: 'https://i.pinimg.com/1200x/cc/80/b9/cc80b9f6815e1ec29ad8815d63103fbb.jpg',
      story: `<h4>A Esperança das Mães</h4><p>A devoção a Nossa Senhora do Bom Parto é muito antiga e querida pelas gestantes. Invoca-se a Virgem Maria, que deu à luz o Salvador, para que proteja as mães e seus filhos no momento do nascimento, concedendo um parto feliz e seguro. É um título que celebra a maternidade divina e a proteção de Maria sobre toda vida nascente.</p><p class="mt-4"><b>Oração:</b> Ó Maria, Virgem Mãe, que no parto de Jesus sentistes as alegrias da maternidade divina, olhai com bondade para todas as gestantes e concedei-lhes um bom parto e filhos saudáveis para a glória de Deus.</p><p class="mt-2 italic">Nossa Senhora do Bom Parto, rogai por nós.</p>`
    }]
  },
  {
    day: 19,
    month: 'Dezembro',
    saints: [{
      name: 'Beato Urbano V',
      imageUrl: 'https://i.pinimg.com/736x/21/d5/23/21d523ab078177d84417ab52d2d3a9d5.jpg',
      story: `<h4>O Papa Reformador</h4><p>O Beato Urbano V, papa beneditino do século XIV, foi um homem de grande santidade e cultura. Esforçou-se para reformar os costumes do clero, promover o estudo e, principalmente, trazer a sede do papado de volta a Roma, que estava exilada em Avignon. Embora tenha tido que retornar à França, seu pontificado foi marcado pelo zelo pastoral e pela caridade.</p><p class="mt-4"><b>Oração:</b> Ó Deus, que no Beato Urbano V nos destes um exemplo de zelo pela vossa casa e de amor à Igreja, concedei-nos trabalhar sempre pela unidade e santidade do vosso povo.</p><p class="mt-2 italic">Beato Urbano V, rogai por nós.</p>`
    }]
  },
  {
    day: 20,
    month: 'Dezembro',
    saints: [{
      name: 'São Domingos de Silos',
      imageUrl: 'https://i.pinimg.com/736x/4a/67/d4/4a67d4416911d4dbbbba777d0d17fd15.jpg',
      story: `<h4>O Abade Libertador</h4><p>São Domingos de Silos, abade beneditino espanhol do século XI, foi um grande reformador monástico. Transformou o mosteiro de Silos num centro de espiritualidade e cultura. É famoso pelos milagres de libertação de cristãos cativos dos mouros (daí as correntes em sua iconografia) e é invocado como patrono dos partos difíceis.</p><p class="mt-4"><b>Oração:</b> Ó Deus, que concedestes a São Domingos de Silos a graça de libertar os cativos e socorrer as mães em perigo, ouvi as nossas preces e livrai-nos de todo mal.</p><p class="mt-2 italic">São Domingos de Silos, rogai por nós.</p>`
    }]
  },
  {
    day: 21,
    month: 'Dezembro',
    saints: [{
      name: 'São Pedro Canísio',
      imageUrl: 'https://i.pinimg.com/1200x/89/af/2e/89af2ecc3b58cd0a30fcda8693d59250.jpg',
      story: `<h4>O Segundo Apóstolo da Alemanha</h4><p>São Pedro Canísio, jesuíta holandês e Doutor da Igreja, foi uma figura chave da Contrarreforma católica. Percorreu a Alemanha pregando, fundando colégios e escrevendo catecismos populares que ajudaram a preservar e restaurar a fé católica em muitas regiões. Dizia que "não se deve combater os hereges com palavras ásperas, mas com a caridade e a verdade".</p><p class="mt-4"><b>Oração:</b> Ó Deus, que fortalecestes o sacerdote São Pedro Canísio com a sabedoria e a coragem para defender a fé católica, concedei-nos a graça de buscar a verdade com alegria e testemunhá-la com amor.</p><p class="mt-2 italic">São Pedro Canísio, rogai por nós.</p>`
    }]
  },
  {
    day: 22,
    month: 'Dezembro',
    saints: [{
      name: 'Santa Francisca Xavier Cabrini',
      imageUrl: 'https://i.pinimg.com/1200x/61/ff/b6/61ffb6d0e283cd9c099b77d5fa806982.jpg',
      story: `<h4>A Mãe dos Imigrantes</h4><p>Santa Francisca Xavier Cabrini, primeira cidadã americana a ser canonizada, nasceu na Itália. Fundou as Missionárias do Sagrado Coração e, a pedido do Papa, foi para os Estados Unidos servir os imigrantes italianos. Construiu escolas, orfanatos e hospitais, cruzando o oceano inúmeras vezes. Sua vida foi uma entrega total aos mais necessitados.</p><p class="mt-4"><b>Oração:</b> Ó Deus, que em Santa Francisca Xavier Cabrini nos destes um modelo de caridade incansável para com os migrantes e necessitados, ensinai-nos a ver o Cristo no irmão que sofre e a servi-lo com generosidade.</p><p class="mt-2 italic">Santa Francisca Xavier Cabrini, rogai por nós.</p>`
    }]
  },
  {
    day: 23,
    month: 'Dezembro',
    saints: [{
      name: 'São João Câncio',
      imageUrl: 'https://i.pinimg.com/736x/a2/46/20/a24620abb59490786b9aea3bffbbb573.jpg',
      story: `<h4>O Professor Santo</h4><p>São João Câncio, sacerdote polonês, foi professor de teologia na Universidade de Cracóvia. Destacou-se não apenas pela sua erudição, mas principalmente pela sua profunda humildade, vida de oração e caridade para com os estudantes pobres. Partilhava tudo o que tinha, ensinando que o saber deve levar ao amor.</p><p class="mt-4"><b>Oração:</b> Ó Deus, que fizestes de São João Câncio um modelo de perfeição sacerdotal e acadêmica, concedei-nos progredir na ciência dos santos e na prática da caridade.</p><p class="mt-2 italic">São João Câncio, rogai por nós.</p>`
    }]
  },
  {
    day: 24,
    month: 'Dezembro',
    saints: [{
      name: 'Santa Paula Isabel Cerioli',
      imageUrl: 'https://i.pinimg.com/736x/27/9d/cb/279dcb90b4e313d30649cc53595dd205.jpg',
      story: `<h4>A Mãe dos Órfãos</h4><p>Santa Paula Isabel Cerioli, nobre italiana, experimentou a dor da perda de seus filhos e do marido. Transformou seu luto em amor materno universal, dedicando sua vida e fortuna a acolher crianças órfãs e camponesas, fundando as Irmãs da Sagrada Família. Encontrou na caridade o consolo e a santidade.</p><p class="mt-4"><b>Oração:</b> Ó Deus, que inspirastes Santa Paula Isabel a ver nos órfãos e pobres a imagem de vosso Filho Jesus, concedei-nos um coração compassivo e generoso para com os que sofrem.</p><p class="mt-2 italic">Santa Paula Isabel Cerioli, rogai por nós.</p>`
    }]
  },
  {
    day: 25,
    month: 'Dezembro',
    saints: [{
      name: 'NATAL de N. S. JESUS CRISTO',
      imageUrl: 'https://iili.io/ffgFVsI.jpg',
      story: `<h4>O Verbo se Fez Carne</h4><p>Hoje celebramos o mistério do amor infinito de Deus: o Nascimento de Nosso Senhor Jesus Cristo. O Filho de Deus se fez homem, nascido da Virgem Maria, para nos salvar e nos tornar filhos de Deus. É a festa da luz que dissipa as trevas, da paz que o mundo não pode dar e da alegria que enche os corações. "Glória a Deus nas alturas e paz na terra aos homens por Ele amados!"</p><p class="mt-4"><b>Oração:</b> Ó Deus, que admiravelmente criastes o ser humano e mais admiravelmente ainda o restabelecestes em sua dignidade, concedei-nos participar da divindade daquele que se dignou assumir a nossa humanidade.</p><p class="mt-2 italic">Vinde, adoremos o Salvador!</p>`
    }]
  },
  {
    day: 26,
    month: 'Dezembro',
    saints: [{
      name: 'Santo Estevão',
      imageUrl: 'https://i.pinimg.com/736x/80/b9/87/80b98711d3acd0555d7633c7d9cf27c6.jpg',
      story: `<h4>O Protomártir</h4><p>Santo Estevão foi o primeiro mártir cristão, um dos sete primeiros diáconos escolhidos pelos Apóstolos. Cheio de fé e do Espírito Santo, realizava grandes prodígios. Ao ser apedrejado até a morte, viu o céu aberto e Jesus à direita de Deus, e morreu perdoando seus assassinos, imitando perfeitamente o Mestre. Seu sangue foi semente de novos cristãos.</p><p class="mt-4"><b>Oração:</b> Ó Deus, concedei-nos a graça de imitar o que veneramos, para que aprendamos a amar também os nossos inimigos, pois celebramos o dia natalício daquele que soube rezar pelos seus perseguidores.</p><p class="mt-2 italic">Santo Estevão, rogai por nós.</p>`,
      isMartyr: true
    }]
  },
  {
    day: 27,
    month: 'Dezembro',
    saints: [{
      name: 'São João Evangelista',
      imageUrl: 'https://i.pinimg.com/1200x/3d/10/ba/3d10ba329befc198324840c694cc4dc5.jpg',
      story: `<h4>O Discípulo Amado</h4><p>São João, apóstolo e evangelista, é conhecido como "o discípulo que Jesus amava". Autor do quarto Evangelho, de três epístolas e do Apocalipse, foi quem reclinou a cabeça no peito do Mestre na Última Ceia e quem acolheu Maria como mãe aos pés da cruz. Sua teologia voa alto como a águia, contemplando o mistério do Verbo de Deus.</p><p class="mt-4"><b>Oração:</b> Ó Deus, que pelo apóstolo São João nos revelastes os mistérios do vosso Verbo, tornai-nos capazes de compreender e amar o que ele nos ensinou com tanta excelência.</p><p class="mt-2 italic">São João Evangelista, rogai por nós.</p>`
    }]
  },
  {
    day: 28,
    month: 'Dezembro',
    saints: [{
      name: 'Santos Inocentes',
      imageUrl: 'https://i.pinimg.com/736x/50/f6/a4/50f6a4e3c37cbadcc21019cded0ef610.jpg',
      story: `<h4>As Flores dos Mártires</h4><p>Os Santos Inocentes são as crianças de Belém, de dois anos para baixo, que foram mortas por ordem do rei Herodes, que buscava eliminar o Menino Jesus. São considerados as "primícias dos mártires", pois deram a vida por Cristo não com palavras, mas com o próprio sangue, antes mesmo de poderem falar. A Igreja os venera como tenras flores cortadas antes do tempo.</p><p class="mt-4"><b>Oração:</b> Ó Deus, cujos louvores os mártires Inocentes proclamaram hoje não com palavras, mas com a morte, mortificai em nós os vícios, para que a nossa vida testemunhe a fé que a nossa língua professa.</p><p class="mt-2 italic">Santos Inocentes, rogai por nós.</p>`,
      isMartyr: true
    }]
  },
  {
    day: 29,
    month: 'Dezembro',
    saints: [{
      name: 'São Tomás Becket',
      imageUrl: 'https://i.pinimg.com/736x/e8/05/3c/e8053c153e8ec23ae84ec51cd9473066.jpg',
      story: `<h4>O Defensor da Liberdade da Igreja</h4><p>São Tomás Becket, arcebispo de Cantuária e chanceler da Inglaterra, passou de amigo do rei Henrique II a seu opositor when se tratou de defender os direitos e a liberdade da Igreja. Exilado e depois retornado, foi brutalmente assassinado na sua própria catedral por cavaleiros do rei. Seu martírio comoveu a Europa e tornou seu túmulo um grande centro de peregrinação.</p><p class="mt-4"><b>Oração:</b> Ó Deus, que destes a São Tomás Becket a grandeza de alma para dar a vida por vossa Igreja, concedei-nos, por sua intercessão, que, perdendo a vida por Cristo neste mundo, a encontremos no céu.</p><p class="mt-2 italic">São Tomás Becket, rogai por nós.</p>`,
      isMartyr: true
    }]
  },
  {
    day: 30,
    month: 'Dezembro',
    saints: [{
      name: 'Sagrada Família',
      imageUrl: 'https://i.pinimg.com/1200x/c1/b0/42/c1b0426b2a9ea9e6fd2a241a5be7c24b.jpg',
      story: `<h4>O Modelo de Nossos Lares</h4><p>A festa da Sagrada Família nos apresenta Jesus, Maria e José como o modelo santíssimo de vida doméstica. Na casa de Nazaré, reinava o amor, o trabalho, a oração, a obediência e o silêncio. É a escola do Evangelho, onde aprendemos a viver em comunhão e a buscar a vontade de Deus em todas as coisas. É o ícone da Igreja doméstica.</p><p class="mt-4"><b>Oração:</b> Ó Deus, que nos destes a Sagrada Família como exemplo, concedei-nos imitar em nossos lares as suas virtudes e o seu amor, para que, um dia, possamos nos alegrar na vossa casa eterna.</p><p class="mt-2 italic">Jesus, Maria e José, a nossa família vossa é!</p>`
    }]
  },
  {
    day: 31,
    month: 'Dezembro',
    saints: [{
      name: 'São Silvestre I',
      imageUrl: 'https://i.pinimg.com/736x/81/e6/49/81e649c6691404ba50c1311cdf8d695f.jpg',
      story: `<h4>O Papa da Liberdade</h4><p>São Silvestre I foi o papa que governou a Igreja logo após o Edito de Milão, que deu liberdade aos cristãos. Seu longo pontificado viu a construção das grandes basílicas romanas (São João de Latrão, São Pedro) e a organização da vida litúrgica pública da Igreja. É o santo que encerra o ano civil, convidando-nos a agradecer a Deus pelos benefícios recebidos.</p><p class="mt-4"><b>Oração:</b> Ó Deus, vinde em auxílio do vosso povo, que se alegra com a intercessão do Papa São Silvestre, para que, passando esta vida sob a vossa direção, possa chegar à vida que não tem fim.</p><p class="mt-2 italic">São Silvestre, rogai por nós.</p>`
    }]
  },
];

// Merge December saints into the main array
saintsOfTheDay.push(...saintsOfTheDayDecember);



































