const fs = require('fs');

const data = [
  // ARNIQUEIRAS & RIACHO FUNDO I
  {
    region: "Arniqueiras & Riacho Fundo I",
    title: "Paróquia Maria Auxiliadora",
    instagram: "@maria_auxiliadora_arniqueira",
    schedules: [
      { days: ["terca", "quinta"], text: "Terça e quinta: a partir das 19:00" },
      { days: ["quarta"], text: "Capela N. Sra. das Graças - Quarta: a partir das 19:00" },
      { days: ["sexta"], text: "Capela Maria Mãe do Bom Pastor - Sexta: a partir das 19:00" }
    ]
  },
  {
    region: "Arniqueiras & Riacho Fundo I",
    title: "Paróquia São Miguel Arcanjo",
    instagram: "@saomiguelr1",
    schedules: [
      { days: ["terca"], text: "Terça: 20:00 às 21:00" },
      { days: ["quinta"], text: "Quinta: 18:00 às 19:15" },
      { days: ["sexta"], text: "Sexta: 08:00 às 09:30" },
      { days: ["sabado"], text: "Primeiro sábado do mês: após a missa das 19:30" }
    ]
  },
  {
    region: "Arniqueiras & Riacho Fundo I",
    title: "Paróquia São Domingos Sávio",
    instagram: "@paroquiasaodomingossavio",
    schedules: [
      { days: ["quarta", "quinta"], text: "Quarta e quinta: 18:00 às 19:15" }
    ]
  },

  // FERCAL & ITAPOÃ
  {
    region: "Fercal & Itapoã",
    title: "Paróquia Nossa Senhora Aparecida",
    instagram: "@pnsafercal",
    schedules: [
      { days: ["quinta", "sexta"], text: "Quinta e sexta: de 17:00 às 18:30" },
      { days: ["sabado"], text: "Sábado: de 10:00 às 12:00" }
    ]
  },
  {
    region: "Fercal & Itapoã",
    title: "Paróquia São Luís Orione",
    instagram: "@paroquiaslo",
    schedules: [
      { days: ["terca", "quinta"], text: "Terça e quinta: 09:00 às 11:00 e 15:00 às 16:00" },
      { days: ["sabado"], text: "Sábado: por agendamento" }
    ]
  },

  // VICENTE PIRES & 26 DE SETEMBRO
  {
    region: "Vicente Pires & 26 de Setembro",
    title: "Paróquia Nossa Senhora das Vitórias",
    instagram: "@pnsdasvitorias",
    schedules: [
      { days: ["terca"], text: "Terça: depois da missa das 19:30" },
      { days: ["quarta"], text: "Quarta: a partir das 09:30" },
      { days: ["sexta", "sabado"], text: "Sexta e sábado: depois da missa das 07:00" }
    ]
  },
  {
    region: "Vicente Pires & 26 de Setembro",
    title: "Paróquia Nossa Senhora da Esperança",
    instagram: "@pnse_vp",
    schedules: [
      { days: ["terca", "sexta"], text: "Terça e sexta: a partir de 18:30" },
      { days: ["quinta"], text: "Quinta: depois da missa das 19:30" },
      { days: ["quinta"], text: "Capela N. Sra. Aparecida - Quinta: depois da missa das 07:00" }
    ]
  },
  {
    region: "Vicente Pires & 26 de Setembro",
    title: "Paróquia Nossa Senhora Auxiliadora",
    instagram: "@pnsauxiliadora.brasilia",
    schedules: [
      { days: ["terca", "quarta", "quinta", "sexta"], text: "Terça a sexta: 14:30 às 17:00" }
    ]
  },
  {
    region: "Vicente Pires & 26 de Setembro",
    title: "Paróquia São Francisco de Assis",
    instagram: "@saofranciscovp",
    schedules: [
      { days: ["terca", "quinta"], text: "Terça e quinta: de 17:00 às 19:00" },
      { days: ["sabado"], text: "Sábado: de 17:00 às 18:30" }
    ]
  },
  {
    region: "Vicente Pires & 26 de Setembro",
    title: "Paróquia São José Operário",
    instagram: "@paroquiasaojose.vp",
    schedules: [
      { days: ["quinta"], text: "Quinta: de 18:00 às 19:16" }
    ]
  },
  {
    region: "Vicente Pires & 26 de Setembro",
    title: "Paróquia Santa Bernadete",
    instagram: "@pnsantabernadete",
    schedules: [
      { days: ["terca", "quarta", "quinta", "sexta", "sabado", "domingo"], text: "Terça a domingo: 40 min antes das missas" },
      { days: ["terca", "domingo"], text: "Capela N. Sra. das Lágrimas - Terça e domingo: 40 min antes das missas" },
      { days: ["terca", "quarta", "quinta", "sexta", "sabado", "domingo"], text: "Capela Santa Rita / Divina Misericórdia / N. Sra. Aparecida: 40 min antes das missas" }
    ]
  },

  // CEILÂNDIA & SOL NASCENTE
  {
    region: "Ceilândia & Sol Nascente",
    title: "Paróquia Nossa Senhora da Glória",
    instagram: "@pnsg.oficial",
    schedules: [
      { days: ["terca", "quarta", "quinta", "sexta"], text: "Terça a sexta: 30 min antes/depois das missas" },
      { days: ["sabado", "domingo"], text: "Sábado e domingo: depois das missas" },
      { days: ["terca"], text: "Capela São José Operário - Terça a sexta: depois das missas" }
    ]
  },
  {
    region: "Ceilândia & Sol Nascente",
    title: "Paróquia São Francisco de Assis",
    instagram: "@psfranciscocsccul",
    schedules: [
      { days: ["quarta", "quinta", "sexta", "sabado"], text: "Quarta a sábado: de 17:30 às 19:00" },
      { days: ["terca"], text: "Capela N. Sra. de Fátima - Terça: de 17:30 às 19:00" }
    ]
  },
  {
    region: "Ceilândia & Sol Nascente",
    title: "Paróquia da Ressurreição",
    instagram: "@paroquiadaressurreicao",
    schedules: [
      { days: ["terca", "quinta", "sexta"], text: "Terça, quinta e sexta: a partir das 16:00" },
      { days: ["quarta"], text: "Quarta: depois da missa das 19:00" },
      { days: ["sabado"], text: "Sábado: a partir de 09:00" },
      { days: ["quinta"], text: "Capela do Divino Espírito Santo - Quinta: a partir de 17:00" }
    ]
  },
  {
    region: "Ceilândia & Sol Nascente",
    title: "Paróquia São Marcos e São Lucas",
    instagram: "@psmsl_ofm",
    schedules: [
      { days: ["quinta", "sexta"], text: "Quinta e sexta: a partir de 19:00" },
      { days: ["sexta"], text: "Sexta: a partir de 15:00" },
      { days: ["sabado"], text: "Sábado: a partir de 17:00" },
      { days: ["domingo"], text: "Domingo: 17:00 e 19:00" }
    ]
  },
  {
    region: "Ceilândia & Sol Nascente",
    title: "Paróquia Nossa Senhora da Natividade",
    instagram: "@psnatividade",
    schedules: [
      { days: ["terca", "quarta", "quinta", "sexta"], text: "Terça a sexta: a partir de 18:00" }
    ]
  },
  {
    region: "Ceilândia & Sol Nascente",
    title: "Paróquia Nossa Senhora do Perpétuo Socorro",
    instagram: "@perpetuo_socorro_capuchinhos",
    schedules: [
      { days: ["terca", "quarta", "quinta"], text: "Terça a quinta: 09:30 às 11:00 e 14:30 às 17:00" },
      { days: ["sabado"], text: "Sábado: 09:00 às 11:00" }
    ]
  },
  {
    region: "Ceilândia & Sol Nascente",
    title: "Paróquia São Pedro Apóstolo",
    instagram: "@paroquiasaopedropsul",
    schedules: [
      { days: ["terca"], text: "Terça: 09:30 às 11:00" },
      { days: ["quarta", "quinta", "sexta"], text: "Quarta, quinta e sexta: 17:05 às 18:30" },
      { days: ["sabado"], text: "Sábado: 10:00 às 12:00" }
    ]
  },
  {
    region: "Ceilândia & Sol Nascente",
    title: "Paróquia Cristo Rei",
    instagram: "@paroquia_cristorei",
    schedules: [
      { days: ["terca", "quarta", "sexta"], text: "Terça, quarta e sexta: 08:00 às 12:00 e 15:00 às 18:00" },
      { days: ["quinta"], text: "Quinta: 15:00 às 18:00" },
      { days: ["sabado"], text: "Sábado: 09:00 às 12:00" }
    ]
  },
  {
    region: "Ceilândia & Sol Nascente",
    title: "Paróquia Senhor Bom Jesus",
    instagram: "@p.senhorbomjesus",
    schedules: [
      { days: ["terca", "quarta", "quinta", "sexta"], text: "Terça a sexta: a partir de 18:00" },
      { days: ["domingo"], text: "Domingo: a partir de 09:00" },
      { days: ["sabado"], text: "Capela Sta. Ana e São Joaquim - Sábado: a partir de 16:00" }
    ]
  },
  {
    region: "Ceilândia & Sol Nascente",
    title: "Paróquia Nossa Senhora da Assunção",
    instagram: "@pnsassuncaoceilandia",
    schedules: [
      { days: ["terca", "quarta", "quinta", "sexta"], text: "Terça a sexta: 16:00 às 18:00" },
      { days: ["sabado"], text: "Sábado: 09:00 às 12:00" }
    ]
  },
  {
    region: "Ceilândia & Sol Nascente",
    title: "Paróquia Santo Antônio",
    instagram: "@paroquiasantoantoniodf",
    schedules: [
      { days: ["terca", "quarta", "quinta", "sexta"], text: "Terça a sexta: 17:00 às 18:45" },
      { days: ["sabado"], text: "Sábado: 10:00 às 12:00" }
    ]
  },
  {
    region: "Ceilândia & Sol Nascente",
    title: "Paróquia Santíssima Trindade",
    instagram: "@santissimatrinda.df",
    schedules: [
      { days: ["terca", "quarta", "quinta"], text: "Terça a quinta: 10:00 às 12:00 e 16:30 às 18:15" },
      { days: ["quarta", "sexta"], text: "Capela Todos os Santos - Quarta e sexta: 18:00 às 19:15" }
    ]
  },
  {
    region: "Ceilândia & Sol Nascente",
    title: "Paróquia Sagrado Coração de Jesus e São José",
    instagram: "@sagrado.coracao",
    schedules: [
      { days: ["terca", "sexta"], text: "Terça a sexta: 17:00 às 19:00" }
    ]
  },
  {
    region: "Ceilândia & Sol Nascente",
    title: "Paróquia São José Operário",
    instagram: "@sjoseoperario",
    schedules: [
      { days: ["quarta", "sexta", "sabado"], text: "Quarta, sexta e sábado: 16:00 às 18:00" },
      { days: ["terca"], text: "Comunidade Espírito Santo - Terça: 16:00 às 18:00" },
      { days: ["terca"], text: "Comunidade Santo Antônio - Terça: 19:00 às 20:00" },
      { days: ["quinta"], text: "Comunidade N. Sra. da Anunciação - Quinta: 18:00 às 20:00" },
      { days: ["sexta"], text: "Comunidade Santa Clara - Sexta: 19:00 às 20:00" },
      { days: ["sabado"], text: "Comunidade N. Sra. da Abadia - Sábado: antes da missa" }
    ]
  },
  {
    region: "Ceilândia & Sol Nascente",
    title: "Paróquia Nossa Senhora de Lourdes",
    instagram: "@paroquianourdes",
    schedules: [
      { days: ["terca", "quinta", "sexta"], text: "Terça, quinta e sexta: 18:00 às 19:00" },
      { days: ["sabado"], text: "Capela São José - Sábado: 18:00 às 19:00" },
      { days: ["domingo"], text: "Capela N. Sra. Aparecida - Domingo: 11:00 às 12:00" }
    ]
  },
  {
    region: "Ceilândia & Sol Nascente",
    title: "Paróquia Nossa Senhora da Paz",
    instagram: "@enhoradapaz",
    schedules: [
      { days: ["terca", "quarta"], text: "Terça e quarta: depois da missa" },
      { days: ["quinta"], text: "Quinta: a partir de 17:00 e depois da missa" }
    ]
  },

  // PARANOÁ
  {
    region: "Paranoá",
    title: "Paróquia Santa Maria dos Pobres",
    instagram: "@santamariadospobres",
    schedules: [
      { days: ["terca", "quinta", "sexta"], text: "Terça, quinta e sexta: de 16:00 às 18:00" },
      { days: ["sabado"], text: "Sábado: de 10:00 às 12:00" }
    ]
  },
  {
    region: "Paranoá",
    title: "Paróquia Nossa Senhora Aparecida",
    instagram: "@paroquian.sraaparecidapadf",
    schedules: [
      { days: ["quinta"], text: "Quinta: de 15:00 às 17:00" },
      { days: ["sexta"], text: "Sexta: de 15:00 às 17:00 e depois da missa" },
      { days: ["sabado"], text: "Sábado: de 09:00 às 12:00" }
    ]
  },
  {
    region: "Paranoá",
    title: "Paróquia São José de Anchieta",
    instagram: "@paroquiasaojosedeanchieta",
    schedules: [
      { days: ["terca", "sexta"], text: "Terça a sexta: de 17:30 às 19:00" }
    ]
  },

  // ÁGUAS CLARAS
  {
    region: "Águas Claras",
    title: "Paróquia Nossa Senhora da Assunção",
    instagram: "@paroquiaassuncaoaguasclaras",
    schedules: [
      { days: ["terca", "sexta"], text: "Terça a sexta: de 16:00 às 18:00" },
      { days: ["sabado"], text: "Sábado: de 10:00 às 12:00" }
    ]
  },
  {
    region: "Águas Claras",
    title: "Paróquia Bom Jesus dos Aflitos",
    instagram: "@paroquiaaflitos",
    schedules: [
      { days: ["terca", "quinta"], text: "Terça e quinta: de 17:00 às 19:00" },
      { days: ["sabado"], text: "Sábado: de 09:30 às 11:00" },
      { days: ["quarta"], text: "Capela N. Sra. do Amparo - Quarta: de 17:00 às 19:00" },
      { days: ["sexta"], text: "Capela Santa Clara - Sexta: de 17:00 às 19:00" }
    ]
  },
  {
    region: "Águas Claras",
    title: "Paróquia São João Paulo II",
    instagram: "@psjp_ii",
    schedules: [
      { days: ["terca", "quinta"], text: "Terça a quinta: de 17:00 às 18:45" }
    ]
  },

  // SAMAMBAIA
  {
    region: "Samambaia",
    title: "Paróquia Maria de Nazaré",
    instagram: "@pmariadenazare",
    schedules: [
      { days: ["quinta"], text: "Quinta: a partir de 18:00" }
    ]
  },
  {
    region: "Samambaia",
    title: "Paróquia Santa Luzia",
    instagram: "@santaluzia13",
    schedules: [
      { days: ["terca", "quinta"], text: "Terça e quinta: 09:00 às 11:00 e 15:00 às 17:00" }
    ]
  },
  {
    region: "Samambaia",
    title: "Paróquia São João Evangelista",
    instagram: "@psje.sam",
    schedules: [
      { days: ["quinta"], text: "Quinta: depois da missa das 19:30" },
      { days: ["sexta"], text: "Sexta: 08:30 às 12:00 e 14:30 às 16:00" }
    ]
  },
  {
    region: "Samambaia",
    title: "Paróquia Santo Inácio de Loyola",
    instagram: "@psfloyola",
    schedules: [
      { days: ["terca", "quinta"], text: "Terça e quinta: 16:00 às 18:00" },
      { days: ["sabado"], text: "Sábado: 09:30 às 11:30" }
    ]
  },
  {
    region: "Samambaia",
    title: "Paróquia Imaculada Conceição de Maria",
    instagram: "@imaculadaconceicaodemaria",
    schedules: [
      { days: ["terca"], text: "Terça: depois da missa" },
      { days: ["sabado"], text: "Sábado: de 08:00 às 11:00" }
    ]
  },
  {
    region: "Samambaia",
    title: "Paróquia Nossa Senhora das Graças",
    instagram: "@paroquia_nsg",
    schedules: [
      { days: ["terca", "sexta"], text: "Terça a sexta: a partir das 19:00" },
      { days: ["sabado"], text: "Sábado: a partir das 18:00" }
    ]
  },
  {
    region: "Samambaia",
    title: "Paróquia Nossa Senhora das Dores",
    instagram: "@pnsdoresdf",
    schedules: [
      { days: ["terca", "quarta", "sexta", "sabado"], text: "Terça, quarta, sexta e sábado: 18:00 às 19:00" },
      { days: ["quinta"], text: "Quinta: a partir de 19:30" }
    ]
  },
  {
    region: "Samambaia",
    title: "Paróquia São José Operário",
    instagram: "@psojo_sam",
    schedules: [
      { days: ["terca", "sexta"], text: "Terça a sexta: a partir de 18:00" }
    ]
  },
  {
    region: "Samambaia",
    title: "Paróquia Nossa Senhora Aparecida",
    instagram: "@paroquia_nsaparecida",
    schedules: [
      { days: ["terca", "sexta"], text: "Terça a sexta: de 18:00 às 18:50" },
      { days: ["quinta"], text: "Quinta e sexta: de 17:00 às 19:00" },
      { days: ["sabado"], text: "Sábado: de 10:30 às 12:00" }
    ]
  },

  // GAMA
  {
    region: "Gama",
    title: "Paróquia São Sebastião (Setor Leste)",
    instagram: "@saosebastiaogama",
    schedules: [
      { days: ["terca", "quarta"], text: "Terça e quarta: a partir de 07:00" },
      { days: ["terca", "quinta", "sexta"], text: "Terça, quinta e sexta: de 18:00 às 19:00" }
    ]
  },
  {
    region: "Gama",
    title: "Paróquia São Lázaro (Engenho das Lajes)",
    instagram: "@paroquiasaolazaroengenho",
    schedules: [
      { days: ["quinta"], text: "Quinta: de 18:00 às 19:30 ou por agendamento" }
    ]
  },
  {
    region: "Gama",
    title: "Paróquia Imaculada Conceição",
    instagram: "@paroquiaimaculadagama",
    schedules: [
      { days: ["quinta"], text: "Quinta: a partir de 17:00" }
    ]
  },
  {
    region: "Gama",
    title: "Paróquia Nossa Senhora Aparecida",
    instagram: "@paroquia_nsra_aparecida",
    schedules: [
      { days: ["terca"], text: "Terça: de 09:30 às 11:00, 16:00 às 18:00 e 18:00 às 19:00" },
      { days: ["quarta"], text: "Quarta: de 09:30 às 11:00" },
      { days: ["domingo"], text: "Domingo: de 17:00 às 18:30" }
    ]
  },
  {
    region: "Gama",
    title: "Paróquia Nossa Senhora Auxiliadora dos Cristãos",
    instagram: "@auxiliadoradoscristaos",
    schedules: [
      { days: ["terca", "quinta"], text: "Terça e quinta: de 14:00 às 18:00" }
    ]
  },
  {
    region: "Gama",
    title: "Paróquia Nossa Senhora de Fátima",
    instagram: "@pnsfatimagamadf",
    schedules: [
      { days: ["quarta", "sexta"], text: "Quarta e sexta: de 15:00 às 17:30" }
    ]
  },
  {
    region: "Gama",
    title: "Paróquia Nossa Senhora do Carmo",
    instagram: "@paroquianossasenhoradocarmo",
    schedules: [
      { days: ["quarta", "sexta"], text: "Quarta e sexta: de 09:36 às 11:30" }
    ]
  },
  {
    region: "Gama",
    title: "Paróquia Santíssima Trindade",
    instagram: "@strindadegama",
    schedules: [
      { days: ["quarta", "sexta"], text: "Quarta e sexta: de 14:30 às 16:30 (confissões por agendamento)" }
    ]
  },

  // NÚCLEO BANDEIRANTE & CANDANGOLÂNDIA
  {
    region: "Núcleo Bandeirante & Candangolândia",
    title: "Paróquia São João Bosco",
    instagram: "@dombosconb",
    schedules: [
      { days: ["terca", "quarta", "quinta", "sexta"], text: "Verificar na secretaria da paróquia a disponibilidade dos padres" }
    ]
  },
  {
    region: "Núcleo Bandeirante & Candangolândia",
    title: "Paróquia São José Operário",
    instagram: "@paroquiasfcandanga",
    schedules: [
      { days: ["terca"], text: "Terça: depois da missa" },
      { days: ["quarta", "sexta"], text: "Quarta a sexta: de 15:00 às 17:00" }
    ]
  },

  // SOBRADINHO
  {
    region: "Sobradinho",
    title: "Paróquia Nossa Senhora Aparecida",
    instagram: "@paroquiansaparecidasob2",
    schedules: [
      { days: ["segunda", "terca", "quarta", "quinta", "sexta", "sabado"], text: "Segunda a sábado: 17:00 às 18:50" },
      { days: ["domingo"], text: "Domingo: 07:00 às 07:50, 09:30 às 09:50 e 17:00 às 18:50" }
    ]
  },
  {
    region: "Sobradinho",
    title: "Paróquia Nossa Senhora da Conceição Aparecida",
    instagram: "@nsca.paroquia",
    schedules: [
      { days: ["quinta"], text: "Quinta: a partir de 20:00" },
      { days: ["domingo"], text: "Domingo: a partir de 18:00" },
      { days: ["quinta"], text: "Capela N. Sra. de Fátima - Quinta: a partir de 20:00" },
      { days: ["sexta"], text: "Capela Sagrado Coração de Jesus - Sexta: a partir de 18:30" }
    ]
  },
  {
    region: "Sobradinho",
    title: "Paróquia Nossa Senhora da Imaculada Conceição",
    instagram: "@comunica.imaculada",
    schedules: [
      { days: ["terca", "quarta"], text: "Terça e quarta: de 17:30 às 18:30" },
      { days: ["sabado"], text: "Sábado: de 09:30 às 10:30" }
    ]
  },
  {
    region: "Sobradinho",
    title: "Paróquia Bom Jesus dos Migrantes",
    instagram: "@paroquia_bjm",
    schedules: [
      { days: ["sexta"], text: "Sexta: de 09:00 às 11:00" }
    ]
  },
  {
    region: "Sobradinho",
    title: "Paróquia Nossa Senhora do Rosário de Fátima",
    instagram: "@nsrf_sobradinho",
    schedules: [
      { days: ["terca", "sexta"], text: "Terça e sexta: de 15:00 às 17:00" }
    ]
  },

  // BRAZLÂNDIA
  {
    region: "Brazlândia",
    title: "Santuário Menino Jesus",
    instagram: "@santuariomeninojesus",
    schedules: [
      { days: ["terca", "quarta", "sexta"], text: "Terça, quarta e sexta: 09:00 às 11:00 e 15:00 às 17:00" },
      { days: ["quinta"], text: "Quinta: de 19:00 às 20:00" }
    ]
  },
  {
    region: "Brazlândia",
    title: "Paróquia São José",
    instagram: "@psjbrazlandia",
    schedules: [
      { days: ["terca", "quinta"], text: "Terça e quinta: de 16:30 às 19:00" },
      { days: ["sabado"], text: "Sábado: de 09:30 às 12:00" }
    ]
  },
  {
    region: "Brazlândia",
    title: "Paróquia São Sebastião",
    instagram: "@pssbrazx",
    schedules: [
      { days: ["terca"], text: "Terça: depois da missa" },
      { days: ["quinta"], text: "Quinta: a partir de 17:00" }
    ]
  },
  {
    region: "Brazlândia",
    title: "Paróquia São Paulo",
    instagram: "@psaopaulo8",
    schedules: [
      { days: ["terca", "sexta"], text: "Terça e sexta: horários por agendamento" },
      { days: ["sabado"], text: "Sábado: de 09:00 às 12:00" }
    ]
  },

  // RIACHO FUNDO II
  {
    region: "Riacho Fundo II",
    title: "Paróquia Nossa Senhora da Medalha Milagrosa",
    instagram: "@raiosdamedalha",
    schedules: [
      { days: ["quinta", "sexta"], text: "Quinta e sexta: de 15:00 às 16:30" },
      { days: ["sabado"], text: "Sábado: de 09:00 às 11:00" }
    ]
  },

  // ASA NORTE
  {
    region: "Asa Norte",
    title: "Basílica São Francisco de Assis",
    instagram: "@basilicasaofranciscodf",
    schedules: [
      { days: ["segunda"], text: "Segunda: de 18:30 às 20:00" },
      { days: ["terca", "sexta"], text: "Terça a sexta: 09:00 às 11:30 e 15:30 às 20:00" },
      { days: ["sabado"], text: "Sábado: de 17:30 às 19:00" },
      { days: ["domingo"], text: "Domingo: 08:00 às 13:00 e 16:30 às 20:30" }
    ]
  },
  {
    region: "Asa Norte",
    title: "Santuário Nossa Senhora da Saúde",
    instagram: "@nossasenhoradasaudedf",
    schedules: [
      { days: ["terca", "sexta"], text: "Terça a sexta: 10:00 às 12:00 e 17:00 às 18:00" }
    ]
  },
  {
    region: "Asa Norte",
    title: "Paróquia Nossa Senhora das Graças da Medalha Milagrosa",
    instagram: "@pnsg.asanorte",
    schedules: [
      { days: ["terca", "sexta"], text: "Terça a sexta: a partir de 17:00" }
    ]
  },
  {
    region: "Asa Norte",
    title: "Paróquia Nossa Senhora Consolata",
    instagram: "@pnsconsolata",
    schedules: [
      { days: ["terca", "sexta"], text: "Terça a sexta: 08:00 às 10:00 e 14:30 às 17:30" }
    ]
  },
  {
    region: "Asa Norte",
    title: "Paróquia São José Operário",
    instagram: "@saojoseoperariobsb",
    schedules: [
      { days: ["terca", "quarta", "quinta", "sexta", "sabado", "domingo"], text: "30 minutos antes das missas" }
    ]
  },
  {
    region: "Asa Norte",
    title: "Paróquia Nossa Senhora da Esperança",
    instagram: "@pnse_esperanca",
    schedules: [
      { days: ["terca", "sexta"], text: "Terça a sexta: de 16:00 às 18:00" }
    ]
  },
  {
    region: "Asa Norte",
    title: "Paróquia Nossa Senhora do Rosário de Pompéia",
    instagram: "@rosariodepompeiavp",
    schedules: [
      { days: ["quinta"], text: "Quinta: de 15:00 às 18:00" },
      { days: ["sexta"], text: "Primeira sexta do mês: de 16:00 às 18:00" }
    ]
  },
  {
    region: "Asa Norte",
    title: "Paróquia Divino Espírito Santo",
    instagram: "@divinoespiritosantonorte",
    schedules: [
      { days: ["terca", "sexta"], text: "Terça a sexta: de 08:00 às 11:00" },
      { days: ["sabado"], text: "Sábado: de 14:00 às 16:00 (confissões por agendamento)" }
    ]
  },
  {
    region: "Asa Norte",
    title: "Paróquia do Verbo Divino",
    instagram: "@paroquiaverbodivino",
    schedules: [
      { days: ["terca", "sexta"], text: "Terça a sexta: de 16:15 às 18:45" }
    ]
  },
  {
    region: "Asa Norte",
    title: "Capelania Militar São Miguel Arcanjo e Santo Expedito",
    instagram: "@capelaniasaomiguel303",
    schedules: [
      { days: ["terca", "quinta"], text: "Terça e quinta (por agendamento): de 09:00 às 11:00 e de 15:00 às 17:00" },
      { days: ["quarta"], text: "Quarta (por agendamento): de 16:00 às 20:00" },
      { days: ["sexta"], text: "Sexta: de 17:00 às 19:00" }
    ]
  },

  // PLANALTINA
  {
    region: "Planaltina",
    title: "Paróquia Divino Espírito Santo",
    instagram: "@paroquiadivinodf",
    schedules: [
      { days: ["quinta", "sabado"], text: "Quinta e sábado: a partir de 17:00" },
      { days: ["sexta"], text: "Capela São Miguel - Sexta: de 18:00 às 19:00" }
    ]
  },
  {
    region: "Planaltina",
    title: "Paróquia Nossa Senhora de Nazaré",
    instagram: "@pns.nazare",
    schedules: [
      { days: ["terca", "quinta", "sexta"], text: "Terça, quinta e sexta: de 18:00 às 19:15" },
      { days: ["quarta"], text: "Capela Santo Agostinho - Quarta: a partir de 19:15" }
    ]
  },
  {
    region: "Planaltina",
    title: "Paróquia Nossa Senhora de Fátima",
    instagram: "@nsradefatima_pascom",
    schedules: [
      { days: ["terca", "quinta", "sexta"], text: "Terça, quinta e sexta: de 18:00 até começar a missa" }
    ]
  },
  {
    region: "Planaltina",
    title: "Paróquia Sagrado Coração de Jesus",
    instagram: "@paroquia_sgresus",
    schedules: [
      { days: ["quarta"], text: "Quarta: de 17:30 até a missa e depois da missa até 21:00" }
    ]
  },
  {
    region: "Planaltina",
    title: "Paróquia Santa Luzia",
    instagram: "@pascom._santaluzia",
    schedules: [
      { days: ["quinta"], text: "Quinta: depois das missas e de 17:30 às 19:30" },
      { days: ["quarta"], text: "Capela São Vicente - Quarta: depois da missa" },
      { days: ["quarta"], text: "Capela Nossa Senhora das Graças - Quarta: depois da missa" },
      { days: ["quarta"], text: "Capela Nossa Senhora da Esperança - Quarta: a partir de 18:00" }
    ]
  },
  {
    region: "Planaltina",
    title: "Paróquia Santa Rita de Cássia",
    instagram: "@paroquiasantarita22",
    schedules: [
      { days: ["terca"], text: "Terça: durante a missa (50 senhas)" },
      { days: ["quarta", "sexta"], text: "Quarta e sexta: de 08:30 às 10:30 (10 senhas)" },
      { days: ["quinta"], text: "Quinta: de 15:00 às 16:00 (10 senhas)" },
      { days: ["segunda"], text: "Capela São José - Segunda segunda-feira do mês: a partir de 19:00" },
      { days: ["sexta"], text: "Capela São Francisco de Assis - Terceira sexta-feira do mês: a partir de 19:00" },
      { days: ["quarta"], text: "Capela Imaculada Conceição - Quarta quarta-feira do mês: a partir de 19:00" }
    ]
  },
  {
    region: "Planaltina",
    title: "Paróquia Nossa Senhora Aparecida",
    instagram: "@Pascom_PNSA",
    schedules: [
      { days: ["quinta"], text: "Quinta: de 15:00 às 18:00" }
    ]
  },
  {
    region: "Planaltina",
    title: "Paróquia São Sebastião",
    instagram: "@pascom__sstaosebastiao",
    schedules: [
      { days: ["terca", "sexta"], text: "Terça e sexta: de 17:30 às 19:00" },
      { days: ["quarta"], text: "Quarta: a partir de 08:00" },
      { days: ["quinta"], text: "Quinta: de 19:30 às 21:00" },
      { days: ["domingo"], text: "Capela Santa Teresinha do Menino Jesus - Primeiro domingo do mês: 18:00 às 19:00 (de 2 em 2 semanas)" }
    ]
  },
  {
    region: "Planaltina",
    title: "Paróquia São Vicente de Paulo",
    instagram: "@psvicentedepaulodf",
    schedules: [
      { days: ["terca", "quinta", "sexta"], text: "Terça, quinta e sexta: de 17:00 às 19:00" },
      { days: ["quarta"], text: "Capela N. Sra. das Graças - Quarta: depois da missa" }
    ]
  },

  // PARK WAY
  {
    region: "Park Way",
    title: "Santuário do Imaculado Coração de Maria",
    instagram: "@imaculadocoracaodf",
    schedules: [
      { days: ["terca", "sexta"], text: "Terça a sexta: de 17:00 às 19:00 e de 20:15 às 21:30" },
      { days: ["sabado"], text: "Sábado: de 08:30 às 10:30" }
    ]
  },
  {
    region: "Park Way",
    title: "Paróquia Sagrada Família",
    instagram: "@sagradafamiliaparkway",
    schedules: [
      { days: ["terca", "quarta", "quinta", "sexta", "sabado", "domingo"], text: "30 minutos antes das missas" }
    ]
  },
  {
    region: "Park Way",
    title: "Paróquia Divino Espírito Santo Paráclito",
    instagram: "@paroquiaguarabonita",
    schedules: [
      { days: ["terca", "quinta"], text: "Terça e quinta: de 15:30 às 19:00" }
    ]
  },

  // SETOR MILITAR URBANO
  {
    region: "Setor Militar Urbano",
    title: "Catedral Militar Rainha da Paz",
    instagram: "@catedralmilitarrainhadapaz",
    schedules: [
      { days: ["quarta", "sexta"], text: "Quarta e sexta: de 17:00 às 18:00" }
    ]
  },
  {
    region: "Setor Militar Urbano",
    title: "Capelania Militar São Francisco de Assis (Oratório do Soldado)",
    instagram: "@oratorio_soldado_df",
    schedules: [
      { days: ["terca", "quinta"], text: "Terça e quinta: de 17:00 às 18:00" },
      { days: ["quarta", "domingo"], text: "Quarta e domingo: de 18:00 às 18:50" },
      { days: ["sexta"], text: "Primeira sexta-feira do mês: de 18:00 às 18:50" }
    ]
  },

  // NOROESTE
  {
    region: "Noroeste",
    title: "Paróquia São Charbel",
    instagram: "@paroquiasaocharbel",
    schedules: [
      { days: ["terca", "quarta", "quinta", "sexta", "sabado", "domingo"], text: "Antes e depois das missas (também durante as missas quando 2 padres estão na paróquia)" }
    ]
  },

  // JARDIM BOTÂNICO
  {
    region: "Jardim Botânico",
    title: "Paróquia Santa Clara e São Francisco de Assis",
    instagram: "@paroquiacsf",
    schedules: [
      { days: ["quinta", "sexta"], text: "Quinta e sexta: de 18:00 às 19:00" }
    ]
  },
  {
    region: "Jardim Botânico",
    title: "Paróquia Sagrados Corações de Jesus e Maria",
    instagram: "@sagradoscoracoesdejesusemaria",
    schedules: [
      { days: ["terca", "quinta", "sexta"], text: "Terça, quinta e sexta: de 15:00 às 17:30" }
    ]
  },
  {
    region: "Jardim Botânico",
    title: "Paróquia São João Paulo II",
    instagram: "@paroquia_sjoaopaulo2jb",
    schedules: [
      { days: ["terca", "sexta"], text: "Terça a sexta: de 19:00 às 20:00" },
      { days: ["sabado"], text: "Sábado: de 09:30 às 11:00" }
    ]
  },

  // CRUZEIRO
  {
    region: "Cruzeiro",
    title: "Paróquia Nossa Senhora das Dores",
    instagram: "@nsdores",
    schedules: [
      { days: ["terca", "sexta"], text: "Terça a sexta: a partir de 08:00 e a partir de 18:15" },
      { days: ["sabado", "domingo"], text: "Sábado e domingo: a partir de 07:15 e a partir de 18:15" },
      { days: ["sabado"], text: "Primeiro sábado do mês: 08:15" }
    ]
  },
  {
    region: "Cruzeiro",
    title: "Paróquia Santa Teresinha",
    instagram: "@santateresinhacruzeiro",
    schedules: [
      { days: ["terca", "sexta"], text: "Terça a sexta: de 14:30 às 17:00" }
    ]
  },
  {
    region: "Cruzeiro",
    title: "Paróquia São Pio de Pietrelcina",
    instagram: "@psao",
    schedules: [
      { days: ["terca", "sexta"], text: "Terça a sexta: de 17:00 às 18:40" },
      { days: ["sabado"], text: "Sábado: de 10:00 às 12:00" }
    ]
  },

  // GUARÁ & LÚCIO COSTA
  {
    region: "Guará & Lúcio Costa",
    title: "Paróquia Santíssima Trindade",
    instagram: "@santissimanaweb",
    schedules: [
      { days: ["quarta"], text: "Quarta: de 14:00 às 14:45" },
      { days: ["domingo"], text: "Domingo: de 09:00 às 09:45" }
    ]
  },
  {
    region: "Guará & Lúcio Costa",
    title: "Paróquia São Paulo Apóstolo",
    instagram: "@pspa_argbrasilia",
    schedules: [
      { days: ["terca", "quarta", "quinta", "sexta", "sabado"], text: "Terça a sábado: a partir de 09:00 (com senhas) e a partir de 14:30 (com senhas)" }
    ]
  },
  {
    region: "Guará & Lúcio Costa",
    title: "Paróquia Maria Imaculada",
    instagram: "@paroquiamariaimaculada",
    schedules: [
      { days: ["terca", "quarta", "sexta"], text: "Terça, quarta e sexta: de 18:00 às 18:45" },
      { days: ["quinta"], text: "Quinta: de 07:00 às 08:00, de 18:00 às 18:45 e de 20:00 às 21:00" },
      { days: ["sabado"], text: "Sábado: de 07:30 às 09:00" },
      { days: ["sexta"], text: "Primeira sexta-feira do mês: de 20:00 às 21:00" }
    ]
  },
  {
    region: "Guará & Lúcio Costa",
    title: "Paróquia São João Paulo II",
    instagram: "@capelasaogp2guara",
    schedules: [
      { days: ["terca", "sexta"], text: "Terça a sexta: de 18:30 às 19:20" }
    ]
  },

  // RECANTO DAS EMAS
  {
    region: "Recanto das Emas",
    title: "Paróquia São Rafael Arcanjo",
    instagram: "@psaorafael",
    schedules: [
      { days: ["quinta"], text: "Quinta: de 18:00 às 19:00 e depois da missa" },
      { days: ["sexta"], text: "Sexta: de 16:00 às 17:00" },
      { days: ["sabado"], text: "Primeiro e terceiro sábados do mês: de 10:00 às 12:00" },
      { days: ["terca"], text: "Capela São Pio de Pietrelcina - Terça: de 18:00 às 19:00" }
    ]
  },
  {
    region: "Recanto das Emas",
    title: "Paróquia São Gabriel Arcanjo",
    instagram: "@psaogabrielarcanjo",
    schedules: [
      { days: ["terca", "quinta"], text: "Terça e quinta: depois da missa" },
      { days: ["sabado"], text: "Sábado: de 09:00 às 11:30" },
      { days: ["segunda"], text: "Segunda a sexta: solicitar a visita do padre à sua casa na secretaria" },
      { days: ["terca", "sexta"], text: "Capela Santos Anjos da Guarda - Terça a sexta: depois da missa das 07:30" }
    ]
  },
  {
    region: "Recanto das Emas",
    title: "Paróquia São Miguel Arcanjo",
    instagram: "@psmarecanto",
    schedules: [
      { days: ["quarta"], text: "Quarta: de 15:00 às 17:00" },
      { days: ["quinta"], text: "Quinta: depois da missa das 19:30 até 22:00" },
      { days: ["sexta"], text: "Sexta: aconselhamento espiritual agendado na secretaria" },
      { days: ["quarta"], text: "Capela São Francisco de Assis - Quarta: depois da missa" }
    ]
  },
  {
    region: "Recanto das Emas",
    title: "Paróquia São José Operário",
    instagram: "@saojoseoperariodf",
    schedules: [
      { days: ["terca", "sexta"], text: "Terça a sexta: de 10:00 às 12:00 e de 15:00 às 18:00" },
      { days: ["sabado"], text: "Sábado: de 10:00 às 12:00" }
    ]
  },
  {
    region: "Recanto das Emas",
    title: "Paróquia São Francisco de Assis",
    instagram: "@psfranciscorecanto",
    schedules: [
      { days: ["quarta"], text: "Quarta: de 18:00 às 19:30" },
      { days: ["sabado"], text: "Primeiro sábado do mês: de 08:00 às 09:00" },
      { days: ["quarta"], text: "Capela São Josemaria Escrivá - Quarta: de 18:00 às 19:30" }
    ]
  },

  // SÃO SEBASTIÃO
  {
    region: "São Sebastião",
    title: "Paróquia Nossa Senhora Aparecida",
    instagram: "@paroquia.maeaparecida",
    schedules: [
      { days: ["terca", "quinta", "sexta"], text: "Terça, quinta e sexta: de 18:00 às 19:00" },
      { days: ["quarta"], text: "Quarta: de 16:00 às 18:30" }
    ]
  },
  {
    region: "São Sebastião",
    title: "Paróquia Santo Afonso",
    instagram: "@paroquia.santo.afonso",
    schedules: [
      { days: ["quinta", "sexta"], text: "Quinta e sexta: de 15:00 às 17:00" }
    ]
  },
  {
    region: "São Sebastião",
    title: "Paróquia São Francisco de Assis",
    instagram: "@psfatororoo",
    schedules: [
      { days: ["terca", "quinta", "sexta"], text: "Terça, quinta e sexta: de 17:00 às 19:00" }
    ]
  },
  {
    region: "São Sebastião",
    title: "Paróquia Cristo Redentor",
    instagram: "@paroquia_cristo_redentor_ss",
    schedules: [
      { days: ["quinta"], text: "Quinta: de 15:00 às 17:30" }
    ]
  },

  // SANTA MARIA
  {
    region: "Santa Maria",
    title: "Paróquia São José",
    instagram: "@psaojose",
    schedules: [
      { days: ["quinta", "sexta"], text: "Quinta e sexta: de 16:00 às 18:00" },
      { days: ["sabado"], text: "Sábado: de 09:00 às 11:30" }
    ]
  },
  {
    region: "Santa Maria",
    title: "Paróquia Santa Mãe de Deus",
    instagram: "@paroquiasantamaededeus",
    schedules: [
      { days: ["terca", "quinta", "sexta"], text: "Terça, quinta e sexta: de 15:00 às 18:00" },
      { days: ["sabado"], text: "Sábado: de 09:00 às 12:00" }
    ]
  },
  {
    region: "Santa Maria",
    title: "Paróquia Nossa Senhora da Providência",
    instagram: "@paroquiadaprovidencia",
    schedules: [
      { days: ["terca", "quarta", "sexta"], text: "Terça, quarta e sexta: 15:00 às 17:00" }
    ]
  },
  {
    region: "Santa Maria",
    title: "Paróquia Sagrada Família de Nazaré",
    instagram: "@paroquiasagradafamiliasanta",
    schedules: [
      { days: ["terca", "quinta"], text: "Terça e quinta: a partir de 18:30" },
      { days: ["quarta", "sexta"], text: "Capela Cristo Rei - Quarta e sexta: a partir de 18:30" }
    ]
  },

  // LAGO SUL
  {
    region: "Lago Sul",
    title: "Paróquia Nossa Senhora do Perpétuo Socorro",
    instagram: "@pscorrolagosul",
    schedules: [
      { days: ["terca", "quarta", "sexta"], text: "Terça, quarta e sexta: de 09:00 às 11:00 e de 14:00 às 17:00" },
      { days: ["quinta"], text: "Quinta: a partir de 18:30" }
    ]
  },
  {
    region: "Lago Sul",
    title: "Paróquia Nossa Senhora de Nazaré",
    instagram: "@pnsnazarelagosul",
    schedules: [
      { days: ["quarta"], text: "Quarta: de 08:00 às 10:30 e após a missa das 19:30" }
    ]
  },
  {
    region: "Lago Sul",
    title: "Paróquia Nossa Senhora do Rosário",
    instagram: "@rosario_lagosul26",
    schedules: [
      { days: ["terca", "quinta"], text: "Terça e quinta: a partir das 09:30 e a partir das 18:00" },
      { days: ["quarta"], text: "Quarta: a partir das 18:00" },
      { days: ["sexta"], text: "Sexta: a partir das 18:00" }
    ]
  },
  {
    region: "Lago Sul",
    title: "Paróquia São Pedro de Alcântara",
    instagram: "@paroquiasaopedrodealcantara",
    schedules: [
      { days: ["terca", "quarta", "quinta", "sexta"], text: "Terça a sexta: das 17:00 às 18:00" }
    ]
  },

  // TAGUATINGA
  {
    region: "Taguatinga",
    title: "Santuário Nossa Senhora do Perpétuo Socorro",
    instagram: "@perpetuosocorrodff",
    schedules: [
      { days: ["terca", "sexta"], text: "Terça a sexta: a partir de 17:30" }
    ]
  },
  {
    region: "Taguatinga",
    title: "Paróquia São José",
    instagram: "@alosaojose",
    schedules: [
      { days: ["terca", "domingo"], text: "Terça a domingo: a partir de 18:00" }
    ]
  },
  {
    region: "Taguatinga",
    title: "Paróquia Nossa Senhora de Fátima",
    instagram: "@pnsfatima",
    schedules: [
      { days: ["terca", "sexta"], text: "Terça a sexta: de 09:00 às 11:00 e de 15:00 às 17:00" },
      { days: ["sabado"], text: "Sábado: a partir de 09:00 com limite de 100 senhas" }
    ]
  },
  {
    region: "Taguatinga",
    title: "Paróquia Nossa Senhora do Carmo",
    instagram: "@pnsc_taguatinga",
    schedules: [
      { days: ["quinta"], text: "Quinta: de 15:00 às 17:00" },
      { days: ["sexta", "sabado"], text: "Sexta e sábado: de 10:00 às 12:00" }
    ]
  },
  {
    region: "Taguatinga",
    title: "Paróquia Imaculada Conceição",
    instagram: "@paroquiaimaculadatag",
    schedules: [
      { days: ["terca", "quinta"], text: "Terça e quinta: de 16:00 às 18:00" },
      { days: ["sexta"], text: "Sexta: de 10:00 às 11:30" },
      { days: ["sabado"], text: "Sábado: de 09:30 às 11:30" }
    ]
  },
  {
    region: "Taguatinga",
    title: "Paróquia Imaculado Coração de Maria",
    instagram: "@psicm_taguatinga",
    schedules: [
      { days: ["quarta", "sexta"], text: "Quarta e sexta-feira: de 09:00 às 11:00" }
    ]
  },
  {
    region: "Taguatinga",
    title: "Paróquia Nossa Senhora de Lourdes",
    instagram: "@pnsdelourdes_df",
    schedules: [
      { days: ["quarta"], text: "Quarta: de 20:00 às 21:00" },
      { days: ["quarta"], text: "Quarta: depois da missa" },
      { days: ["sabado"], text: "Sábado: de 16:30 às 17:30" }
    ]
  },
  {
    region: "Taguatinga",
    title: "Paróquia São Pedro",
    instagram: "@paroquiasaopedrotagdf",
    schedules: [
      { days: ["terca", "quarta", "quinta", "sexta", "sabado", "domingo"], text: "Confissões por agendamento" }
    ]
  },
  {
    region: "Taguatinga",
    title: "Paróquia São Pedro e São Paulo",
    instagram: "@paroquiaspsmnorte",
    schedules: [
      { days: ["terca", "sexta"], text: "Terça a sexta: das 17:00 às 18:00" },
      { days: ["quinta"], text: "Quinta: depois da missa até 21:45" }
    ]
  },
  {
    region: "Taguatinga",
    title: "Paróquia São Vicente de Paulo",
    instagram: "@psvp.taqua",
    schedules: [
      { days: ["terca", "sabado"], text: "Terça a sábado: de 09:00 às 11:00" },
      { days: ["quarta"], text: "Quarta: de 15:00 às 17:00" },
      { days: ["quinta"], text: "Quinta: depois da missa das 19:30 (durante a adoração)" }
    ]
  },
  {
    region: "Taguatinga",
    title: "Paróquia Cristo Redentor",
    instagram: "@paroquiacristoredentordf",
    schedules: [
      { days: ["terca", "quinta", "sexta"], text: "Terça, quinta e sexta: de 16:00 às 19:00" },
      { days: ["sabado"], text: "Sábado: de 10:00 às 11:00" }
    ]
  },
  {
    region: "Taguatinga",
    title: "Paróquia Santa Teresinha",
    instagram: "@santateresinhataguatinga",
    schedules: [
      { days: ["quarta", "sexta"], text: "Quarta e sexta: de 09:30 às 12:00" }
    ]
  },
  {
    region: "Taguatinga",
    title: "Paróquia São Judas Tadeu",
    instagram: "@ostdf",
    schedules: [
      { days: ["terca", "sexta"], text: "Terça a sexta: a partir de 18:30" }
    ]
  },
  {
    region: "Taguatinga",
    title: "Paróquia Sagrada Família",
    instagram: "@sfam.de.taguatinga",
    schedules: [
      { days: ["terca"], text: "Terça: de 15:00 às 17:00" },
      { days: ["quinta"], text: "Quinta: de 20:30 às 21:30" },
      { days: ["sexta", "sabado"], text: "Sexta e sábado: de 10:00 às 11:50" }
    ]
  },

  // ESTRUTURAL
  {
    region: "Estrutural",
    title: "Paróquia Nossa Senhora do Encontro com Deus",
    instagram: "@pnsed",
    schedules: [
      { days: ["terca", "sabado"], text: "Terça a sábado: de 17:30 às 18:45" },
      { days: ["domingo"], text: "Domingo: de 07:15 às 07:55; de 09:30 às 10:00; de 18:30 às 19:00" }
    ]
  },
  {
    region: "Estrutural",
    title: "Paróquia Jesus Bom Pastor",
    instagram: "@paroquiaibp_estrutural",
    schedules: [
      { days: ["segunda", "terca", "quarta", "quinta", "sexta", "sabado"], text: "Segunda a sábado: de 17:45 às 18:45" }
    ]
  },

  // LAGO NORTE
  {
    region: "Lago Norte",
    title: "Santuário da Mãe e Rainha Três Vezes Admirável de Schoenstatt",
    instagram: "@tabor.daspromessas",
    schedules: [
      { days: ["terca", "sexta"], text: "Terça a sexta: a partir de 18:30" },
      { days: ["sabado"], text: "Sábado: a partir de 15:00" },
      { days: ["domingo"], text: "Domingo: a partir de 09:30; a partir de 15:00" }
    ]
  },
  {
    region: "Lago Norte",
    title: "Paróquia Nossa Senhora do Lago",
    instagram: "@nossasenhoradolago",
    schedules: [
      { days: ["sabado"], text: "Sábado: de 09:30 às 11:00" }
    ]
  },
  {
    region: "Lago Norte",
    title: "Paróquia Pai Nosso",
    instagram: "@paroquiapainosso",
    schedules: [
      { days: ["terca", "quarta", "quinta", "sexta", "sabado", "domingo"], text: "Confissões por agendamento" }
    ]
  },
  {
    region: "Lago Norte",
    title: "Paróquia Santo Antônio e Sant'Anna Galvão",
    instagram: "@paasgalvao",
    schedules: [
      { days: ["terca", "sexta"], text: "Terça a sexta: depois da missa das 06:30" },
      { days: ["quarta"], text: "Quarta: de 18:30 às 19:30" },
      { days: ["terca"], text: "Capela N. Sra. dos Migrantes - Terça: de 18:30 às 19:30" }
    ]
  },

  // ASA SUL
  {
    region: "Asa Sul",
    title: "Catedral Metropolitana Nossa Senhora Aparecida",
    instagram: "@catedralbrasilia",
    schedules: [
      { days: ["terca", "sexta"], text: "Terça a sexta: de 10:00 às 12:45" },
      { days: ["sabado"], text: "Sábado: de 10:00 às 12:00" }
    ]
  },
  {
    region: "Asa Sul",
    title: "Santuário Nossa Senhora de Fátima",
    instagram: "@pnsfatimabsb",
    schedules: [
      { days: ["terca", "sexta"], text: "Terça a sexta: de 14:30 às 16:00 (por agendamento)" }
    ]
  },
  {
    region: "Asa Sul",
    title: "Santuário Nossa Senhora do Carmo",
    instagram: "@santuario.docarmo",
    schedules: [
      { days: ["terca", "sexta"], text: "Terça a sexta: de 15:00 às 17:00" }
    ]
  },
  {
    region: "Asa Sul",
    title: "Santuário do Santíssimo Sacramento",
    instagram: "@santissimobsb",
    schedules: [
      { days: ["segunda", "terca", "quarta", "quinta", "sexta", "sabado", "domingo"], text: "Segunda a sábado: 30 minutos antes das missas" },
      { days: ["terca", "sexta"], text: "Terça a sexta: de 09:30 às 11:00" },
      { days: ["terca", "quinta"], text: "Terça e quinta: de 15:00 às 16:30" }
    ]
  },
  {
    region: "Asa Sul",
    title: "Santuário São João Bosco",
    instagram: "@santuariosaojoaobosco",
    schedules: [
      { days: ["terca", "sexta"], text: "Terça a sexta: de 17:30 às 19:00" }
    ]
  },
  {
    region: "Asa Sul",
    title: "Santuário Santo Antônio",
    instagram: "@santoantoniobsb",
    schedules: [
      { days: ["domingo"], text: "Domingo: durante as missas" }
    ]
  },
  {
    region: "Asa Sul",
    title: "Paróquia Nossa Senhora de Guadalupe",
    instagram: "@guadalupe_bsb",
    schedules: [
      { days: ["terca", "sexta"], text: "Terça a sexta: de 17:00 às 19:00" }
    ]
  },
  {
    region: "Asa Sul",
    title: "Paróquia São Camilo de Lélis",
    instagram: "@paroquiasaocamilodf",
    schedules: [
      { days: ["segunda", "terca", "quarta", "quinta", "sexta"], text: "Segunda a sexta: de 15:30 e 17:00" }
    ]
  },
  {
    region: "Asa Sul",
    title: "Paróquia Santa Cruz e Santa Edwiges",
    instagram: "@paroquiasantacruzesantaedwiges",
    schedules: [
      { days: ["terca", "quarta", "sexta"], text: "Terça, quarta e sexta: de 15:00 às 16:30" }
    ]
  },
  {
    region: "Asa Sul",
    title: "Paróquia Sagrado Coração de Jesus e Nossa Senhora das Mercês",
    instagram: "@sagrado_merces",
    schedules: [
      { days: ["segunda", "terca", "quarta", "quinta", "sexta", "sabado", "domingo"], text: "Todos os dias: 30 minutos antes das missas" },
      { days: ["sexta"], text: "Primeira sexta-feira do mês: das 14:00 às 18:45" }
    ]
  },
  {
    region: "Asa Sul",
    title: "Paróquia Santa Rita de Cássia",
    instagram: "@psrc_df",
    schedules: [
      { days: ["quinta", "sexta"], text: "Quinta e sexta: de 17:00 às 18:00" },
      { days: ["sabado"], text: "Sábado: de 09:00 às 11:00" }
    ]
  },
  {
    region: "Asa Sul",
    title: "Paróquia Santo Cura d'Ars",
    instagram: "@curadarsdf",
    schedules: [
      { days: ["terca"], text: "Terça e sexta: depois das missas das 06:00, das 12:15 e das 18:00" }
    ]
  },
  {
    region: "Asa Sul",
    title: "Paróquia Bom Jesus",
    instagram: "@paroquiabomjesusbsb",
    schedules: [
      { days: ["sexta"], text: "Sexta: de 16:00 às 18:00" }
    ]
  },
  {
    region: "Asa Sul",
    title: "Capelania Militar do Espírito Santo",
    instagram: "@capelania_espirito_santo",
    schedules: [
      { days: ["segunda", "terca", "quarta", "quinta", "sexta"], text: "Segunda a sexta: antes ou depois da missa das 12:00 (confirmar na secretaria)" },
      { days: ["sabado"], text: "Sábado: durante a missa das 18:10" }
    ]
  }
];

const mapped = {};
data.forEach(item => {
    if (!mapped[item.region]) {
        mapped[item.region] = [];
    }
    const times = item.schedules.map(s => s.text).join(' | ');
    let instagram = item.instagram ? `https://www.instagram.com/${item.instagram.replace('@', '')}` : undefined;
    
    mapped[item.region].push({
        name: item.title,
        address: item.region,
        times: times,
        instagram: instagram
    });
});

const cityData = Object.keys(mapped).map(region => {
    return {
        city: region,
        parishes: mapped[region]
    };
});

fs.writeFileSync('scratch/confessionDataBrasilia.json', JSON.stringify(cityData, null, 2));
