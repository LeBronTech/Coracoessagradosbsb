
interface Parish {
  name: string;
  address: string;
  times: string;
  location?: string;
  instagram?: string;
}

interface CityData {
  city: string;
  parishes: Parish[];
  isGroup?: boolean;
  subCities?: CityData[];
}

export const confessionData: CityData[] = [
  {
    city: 'Águas Claras',
    parishes: [
      {
        name: 'Paróquia Nossa Senhora da Assunção',
        address: 'Águas Claras',
        times: 'Terça a sexta: de 16:00 às 18:00. Sábado: de 10:00 às 12:00',
        instagram: 'https://www.instagram.com/paroquiaassuncaoaguasclaras'
      },
      {
        name: 'Paróquia Bom Jesus dos Aflitos',
        address: 'Águas Claras',
        times: 'Terça e quinta: de 17:00 às 19:00. Sábado: de 09:30 às 11:00',
        instagram: 'https://www.instagram.com/paroquiabja'
      },
      {
        name: 'Capela Nossa Senhora do Amparo',
        address: 'Águas Claras',
        times: 'Quarta: de 17:00 às 19:00'
      },
      {
        name: 'Capela Santa Clara',
        address: 'Águas Claras',
        times: 'Sexta: de 17:00 às 19:00'
      },
      {
        name: 'Paróquia São João Paulo II',
        address: 'Águas Claras',
        times: 'Terça e quinta: de 17:00 às 18:45. Quarta e sexta: de 18:00 às 18:45. Sábado: de 09:30 às 11:00',
        instagram: 'https://www.instagram.com/psjpii_'
      }
    ]
  },
  {
    city: 'Arniqueiras & Riacho Fundo',
    parishes: [
      {
        name: 'Paróquia Maria Auxiliadora',
        address: 'Arniqueiras',
        times: 'Terça e quinta: a partir de 19:00',
        location: 'https://www.google.com/maps/search/?api=1&query=Paróquia+Maria+Auxiliadora+Arniqueiras',
        instagram: 'https://www.instagram.com/maria_auxiliadora_arniqueira'
      },
      {
        name: 'Capela Nossa Senhora das Graças',
        address: 'Arniqueiras',
        times: 'Quarta: a partir de 19:00',
        location: 'https://www.google.com/maps/search/?api=1&query=Capela+Nossa+Senhora+das+Graças+Arniqueiras'
      },
      {
        name: 'Capela Maria Mãe do Bom Pastor',
        address: 'Arniqueiras',
        times: 'Sexta: a partir de 19:00',
        location: 'https://www.google.com/maps/search/?api=1&query=Capela+Maria+Mãe+do+Bom+Pastor+Arniqueiras'
      },
      {
        name: 'Paróquia São Miguel Arcanjo',
        address: 'Riacho Fundo I',
        times: 'Terça de 20:00 às 21:00, Quinta de 18:00 às 19:15, Sexta de 08:00 às 09:30, Primeiro sábado do mês: depois da missa das 19:30',
        location: 'https://www.google.com/maps/search/?api=1&query=Paróquia+São+Miguel+Arcanjo+Riacho+Fundo+I',
        instagram: 'https://www.instagram.com/saomiguelrf1'
      },
      {
        name: 'Paróquia São Domingos Sávio',
        address: 'Riacho Fundo I',
        times: 'Quarta e quinta de 18:00 às 19:15',
        location: 'https://www.google.com/maps/search/?api=1&query=Paróquia+São+Domingos+Sávio+Riacho+Fundo+I',
        instagram: 'https://www.instagram.com/paroquiasaodomingossavio'
      }
    ]
  },
  {
    city: 'Asa Norte',
    parishes: [
      {
        name: 'Basílica São Francisco de Assis',
        address: 'Asa Norte',
        times: 'Segunda: de 18:30 às 20:00. Terça a sexta: de 09:00 às 11:30 e de 15:30 às 20:00. Sábado: de 17:30 às 19:00. Domingo: de 08:00 às 13:00 e de 16:30 às 20:30',
        instagram: 'https://www.instagram.com/basicasaofranciscodf'
      },
      {
        name: 'Santuário Nossa Senhora da Saúde',
        address: 'Asa Norte',
        times: 'Terça a sexta: de 10:00 às 12:00 e de 17:00 às 18:00',
        instagram: 'https://www.instagram.com/nossasenhoradasaudedf'
      },
      {
        name: 'Paróquia Nossa Senhora das Graças da Medalha Milagrosa',
        address: 'Asa Norte',
        times: 'Terça a sexta: a partir de 17:00',
        instagram: 'https://www.instagram.com/pnsg.asanorte'
      },
      {
        name: 'Paróquia Nossa Senhora Consolata',
        address: 'Asa Norte',
        times: 'Terça a sexta: de 08:00 às 10:00 e de 14:30 às 17:30',
        instagram: 'https://www.instagram.com/nsconsolata'
      },
      {
        name: 'Paróquia São José Operário',
        address: 'Asa Norte',
        times: '30 minutos antes das missas',
        instagram: 'https://www.instagram.com/saojoseoperariobsb'
      },
      {
        name: 'Paróquia Mãe da Divina Misericórdia',
        address: 'Asa Norte',
        times: 'Terça a sexta: de 17:00 às 17:45',
        instagram: 'https://www.instagram.com/maedadivinamisericordiabsb'
      },
      {
        name: 'Paróquia Nossa Senhora da Esperança',
        address: 'Asa Norte',
        times: 'Terça a sexta: de 16:00 às 18:00',
        instagram: 'https://www.instagram.com/pnse_esperanca'
      },
      {
        name: 'Paróquia Nossa Senhora do Rosário de Pompeia',
        address: 'Asa Norte',
        times: 'Quinta: de 15:00 às 18:00. Primeira sexta do mês: de 16:00 às 18:00',
        instagram: 'https://www.instagram.com/rosariodepompeiavp'
      },
      {
        name: 'Paróquia Divino Espírito Santo',
        address: 'Asa Norte',
        times: 'Terça a sexta: de 08:00 às 11:00 e de 14:00 às 16:00 (confissões por agendamento)',
        instagram: 'https://www.instagram.com/divinoespiritosantonorte'
      },
      {
        name: 'Paróquia do Verbo Divino',
        address: 'Asa Norte',
        times: 'Terça a sexta: de 18:15 às 18:45',
        instagram: 'https://www.instagram.com/paroquiadoverbodivino'
      },
      {
        name: 'Capelania Militar São Miguel Arcanjo e Santo Expedito',
        address: 'Asa Norte',
        times: 'Terça e quinta (por agendamento): de 09:00 às 11:00 e de 15:00 às 17:00. Quarta (por agendamento): de 16:00 às 20:30. Sexta: de 09:00 às 11:30 e de 15:00 às 18:00',
        instagram: 'https://www.instagram.com/capelaniasaomiguel303'
      },
      {
        name: 'Capelania Militar São Luís Gonzaga e Santa Rita de Cássia',
        address: 'Asa Norte',
        times: 'Checar na secretaria a disponibilidade do padre.',
        instagram: 'https://www.instagram.com/capelania.cmb'
      }
    ]
  },
  {
    city: 'Asa Sul',
    parishes: [
      {
        name: 'Catedral Metropolitana Nossa Senhora Aparecida',
        address: 'Asa Sul',
        times: 'Terça a sexta: de 10:00 às 12:45',
        location: 'https://www.google.com/maps/search/?api=1&query=Catedral+Metropolitana+Nossa+Senhora+Aparecida+Asa+Sul',
        instagram: 'https://www.instagram.com/catedralbrasilia'
      },
      {
        name: 'Santuário Nossa Senhora de Fátima',
        address: 'Asa Sul',
        times: 'Terça a sexta: de 14:30 às 16:00 (por agendamento)',
        location: 'https://www.google.com/maps/search/?api=1&query=Santuário+Nossa+Senhora+de+Fátima+Asa+Sul',
        instagram: 'https://www.instagram.com/pnsfatimabsb'
      },
      {
        name: 'Santuário Nossa Senhora do Carmo',
        address: 'Asa Sul',
        times: 'Terça e sexta: de 09:00 às 11:00 e de 14:00 às 17:00',
        location: 'https://www.google.com/maps/search/?api=1&query=Santuário+Nossa+Senhora+do+Carmo+Asa+Sul',
        instagram: 'https://www.instagram.com/santuario.docarmo'
      },
      {
        name: 'Santuário do Santíssimo Sacramento',
        address: 'Asa Sul',
        times: 'Segunda a sábado: 30 minutos antes das missas. Terça a sexta: de 09:00 às 11:00. Terça e quinta: de 15:00 às 16:30',
        location: 'https://www.google.com/maps/search/?api=1&query=Santuário+do+Santíssimo+Sacramento+Asa+Sul',
        instagram: 'https://www.instagram.com/santissimobsb'
      },
      {
        name: 'Santuário São João Bosco',
        address: 'Asa Sul',
        times: 'Terça a sexta: de 17:30 às 19:00',
        location: 'https://www.google.com/maps/search/?api=1&query=Santuário+São+João+Bosco+Asa+Sul',
        instagram: 'https://www.instagram.com/santuariosaojoaobosco'
      },
      {
        name: 'Santuário Santo Antônio',
        address: 'Asa Sul',
        times: 'Domingo: durante as missas',
        location: 'https://www.google.com/maps/search/?api=1&query=Santuário+Santo+Antônio+Asa+Sul',
        instagram: 'https://www.instagram.com/santontonioasasul'
      },
      {
        name: 'Paróquia Nossa Senhora de Guadalupe',
        address: 'Asa Sul',
        times: 'Terça a sexta: de 17:00 às 19:00. sabado e domingo: de 17:00 às 18:30',
        location: 'https://www.google.com/maps/search/?api=1&query=Paróquia+Nossa+Senhora+de+Guadalupe+Asa+Sul',
        instagram: 'https://www.instagram.com/Pnsg12'
      },
      {
        name: 'Paróquia Sagrado Coração de Jesus e Nossa Senhora das Mercês',
        address: 'Asa Sul',
        times: 'Todos os dias: 15 minutos antes das missas. Primeira sexta do mês: de 14:00 às 18:45',
        location: 'https://www.google.com/maps/search/?api=1&query=Paróquia+Sagrado+Coração+de+Jesus+e+Nossa+Senhora+das+Mercês+Asa+Sul',
        instagram: 'https://www.instagram.com/sagrado_merces'
      },
      {
        name: 'Paróquia Santa Cruze e Santa Edwiges',
        address: 'Asa Sul',
        times: 'Terça, quarta e sexta: de 15:00 as 10:30',
        location: 'https://www.google.com/maps/search/?api=1&query=Paróquia+Santa+Cruze+e+Santa+Edwiges+Asa+Sul',
        instagram: 'https://www.instagram.com/paroquiasantacruzesantaedwiges'
      },
      {
        name: 'Paróquia Santa Rita de Cássia',
        address: 'Asa Sul',
        times: 'Quinta e sexta: de 17:00 as 18:00. Sábado: de 09:00às 1:00',
        location: 'https://www.google.com/maps/search/?api=1&query=Paróquia+Santa+Rita+de+Cássia+Asa+Sul',
        instagram: 'https://www.instagram.com/psre_df'
      },
      {
        name: 'Paróquia São Camilo de Lélis',
        address: 'Asa Sul',
        times: 'Segunda a sexta: de 15:30 às 17:00',
        location: 'https://www.google.com/maps/search/?api=1&query=Paróquia+São+Camilo+de+Lélis+Asa+Sul',
        instagram: 'https://www.instagram.com/paroqulasaocamilodf'
      },
      {
        name: 'Paróquia São Judas Tadeu',
        address: 'Asa Sul',
        times: 'Terça a sexta: de 16.00 as 18:00. Sábado: a partir de 10:30. Domingo: 10:30 e 18:30',
        location: 'https://www.google.com/maps/search/?api=1&query=Paróquia+São+Judas+Tadeu+Asa+Sul',
        instagram: 'https://www.instagram.com/psjt908sul'
      },
      {
        name: 'Paróquia Santo Cura d Ars',
        address: 'Asa Sul',
        times: 'Terça e sexta: depois das missas',
        location: 'https://www.google.com/maps/search/?api=1&query=Paróquia+Santo+Cura+d+Ars+Asa+Sul',
        instagram: 'https://www.instagram.com/curadarsdf'
      },
      {
        name: 'Paróquia Bom Jesus',
        address: 'Asa Sul',
        times: 'Sexta: de 16:00 às 18:00',
        location: 'https://www.google.com/maps/search/?api=1&query=Paróquia+Bom+Jesus+Asa+Sul',
        instagram: 'https://www.instagram.com/paroquiabomjesusbsb'
      }
    ]
  },
  {
    city: 'Brazlândia',
    parishes: [
      {
        name: 'Santuário Menino Jesus',
        address: 'Brazlândia',
        times: 'Terça, quarta e sexta: de 09:00 às 11:00 e de 15:00 às 17:00. Quinta: de 19:00 às 20:00',
        instagram: 'https://www.instagram.com/santuariomeninojesus'
      },
      {
        name: 'Paróquia São José',
        address: 'Brazlândia',
        times: 'Terça e quinta: de 16:30 às 19:00. Sábado: de 09:30 às 12:00',
        instagram: 'https://www.instagram.com/psjbrazlandia'
      },
      {
        name: 'Paróquia São Sebastião',
        address: 'Brazlândia',
        times: 'Terça: depois da missa. Quinta: a partir de 17:00',
        instagram: 'https://www.instagram.com/pssbrazx'
      },
      {
        name: 'Paróquia São Paulo',
        address: 'Brazlândia',
        times: 'Terça e sexta: horários por agendamento. Sábado: de 09:00 às 12:00',
        instagram: 'https://www.instagram.com/paroquiasaopauloincra8'
      }
    ]
  },
  {
    city: 'Ceilândia & Sol Nascente',
    parishes: [
      {
        name: 'Paróquia Nossa Senhora da Glória',
        address: 'Ceilândia',
        times: 'Terça a Sexta: 30 minutos antes das missas e logo após as missas. Sábado e Domingo: Depois das missas.',
        instagram: 'https://www.instagram.com/pnsg.oficial'
      },
      {
        name: 'Paróquia São José Operário',
        address: 'Ceilândia',
        times: 'Terça a Sexta: Depois das missas.'
      },
      {
        name: 'Capela São José Operário',
        address: 'Ceilândia',
        times: 'Quarta, Sexta e Sábado: De 16:00 às 18:00.'
      },
      {
        name: 'Comunidade Espírito Santo',
        address: 'Ceilândia',
        times: 'Terça: De 16:00 às 18:00.'
      },
      {
        name: 'Comunidade Santo Antônio',
        address: 'Ceilândia',
        times: 'Terça: De 19:00 às 20:00.'
      },
      {
        name: 'Comunidade Nossa Senhora da Anunciação',
        address: 'Ceilândia',
        times: 'Quinta: De 19:00 às 20:00.'
      },
      {
        name: 'Comunidade Santa Clara',
        address: 'Ceilândia',
        times: 'Sexta: De 19:00 às 20:00.'
      },
      {
        name: 'Comunidade Nossa Senhora da Abadia',
        address: 'Ceilândia',
        times: 'Sábado: Antes da missa.'
      },
      {
        name: 'Paróquia São Francisco de Assis',
        address: 'Ceilândia',
        times: 'Quarta a Sábado: De 17:30 às 19:00.',
        instagram: 'https://www.instagram.com/psfranciscocsul'
      },
      {
        name: 'Capela Nossa Senhora de Fátima',
        address: 'Ceilândia',
        times: 'Terça: De 17:30 às 19:00.'
      },
      {
        name: 'Paróquia da Ressurreição',
        address: 'Ceilândia',
        times: 'Terça, Quinta e Sexta: A partir das 16:00. Quarta: Depois da missa das 19:00. Sábado: A partir de 09:00.',
        instagram: 'https://www.instagram.com/paroquia daressurreicaop'
      },
      {
        name: 'Capela do Divino Espírito Santo',
        address: 'Ceilândia',
        times: 'Quinta: A partir de 17:00.'
      },
      {
        name: 'Paróquia São Marcos e São Lucas',
        address: 'Ceilândia',
        times: 'Quarta e Quinta: A partir de 19:00. Sexta: A partir de 15:00. Sábado: A partir de 17:00. Domingo: 17:00 e 19:00.',
        instagram: 'https://www.instagram.com/psmsl.qfm'
      },
      {
        name: 'Paróquia Nossa Senhora da Natividade',
        address: 'Ceilândia',
        times: 'Terça a Sexta: A partir de 16:00.'
      },
      {
        name: 'Paróquia Sagrado Coração de Jesus e São José',
        address: 'Ceilândia',
        times: 'Terça a Sexta: De 17:00 às 19:00.',
        instagram: 'https://www.instagram.com/sagrado.coracao'
      },
      {
        name: 'Paróquia Nossa Senhora de Lourdes',
        address: 'Ceilândia',
        times: 'Terça, Quinta e Sexta: De 18:00 às 19:00.',
        instagram: 'https://www.instagram.com/paroquialourdes'
      },
      {
        name: 'Capela São José',
        address: 'Ceilândia',
        times: 'Sábado: De 18:00 às 19:00.'
      },
      {
        name: 'Capela Nossa Senhora Aparecida',
        address: 'Ceilândia',
        times: 'Domingo: De 11:00 às 12:00.'
      },
      {
        name: 'Paróquia Nossa Senhora da Paz',
        address: 'Ceilândia',
        times: 'Terça e Quarta: Depois da missa. Quinta: A partir de 17:00 e depois da missa. Sábado: A partir de 09:00 (confissões por agendamento).',
        instagram: 'https://www.instagram.com/nsenhoradapaz'
      },
      {
        name: 'Paróquia Santa Clara de Assis',
        address: 'Ceilândia',
        times: 'Sexta: De 15:00 às 19:00. Sábado: A partir de 09:00.',
        instagram: 'https://www.instagram.com/p.santaclara.oiconv'
      },
      {
        name: 'Paróquia Nossa Senhora do Perpétuo Socorro',
        address: 'Ceilândia',
        times: 'Terça e Quinta: De 09:00 às 11:00 e de 14:30 às 17:00. Sábado: De 09:00 às 11:00.',
        instagram: 'https://www.instagram.com/perpetuo_socorro_capuchinhos'
      },
      {
        name: 'Paróquia São Pedro Apóstolo',
        address: 'Ceilândia',
        times: 'Terça: De 09:30 às 11:00. Quarta, Quinta e Sexta: De 17:00 às 18:30. Sábado: De 10:00 às 12:00.',
        instagram: 'https://www.instagram.com/paroquiasaopedropsul'
      },
      {
        name: 'Paróquia Cristo Rei',
        address: 'Ceilândia',
        times: 'Terça, Quarta e Sexta: De 09:00 às 12:00 e de 15:00 às 18:00. Quinta: De 15:00 às 18:00. Sábado: De 09:00 às 12:00.',
        instagram: 'https://www.instagram.com/paroquia_cristorei'
      },
      {
        name: 'Paróquia Senhor Bom Jesus',
        address: 'Ceilândia',
        times: 'Terça a Sexta: A partir de 18:00. Domingo: A partir de 09:00.',
        instagram: 'https://www.instagram.com/p.senhorbomjesus'
      },
      {
        name: 'Capela Sant\'Ana e São Joaquim',
        address: 'Ceilândia',
        times: 'Sábado: A partir de 18:00.'
      },
      {
        name: 'Paróquia Nossa Senhora da Expectação',
        address: 'Ceilândia',
        times: 'Terça a Sexta: De 16:00 às 18:00. Sábado: De 09:00 às 12:00.',
        instagram: 'https://www.instagram.com/paroquiaexpectacaodeceilandia'
      },
      {
        name: 'Paróquia Santo Antônio',
        address: 'Ceilândia',
        times: 'Terça a Sexta: De 17:00 às 18:45. Sábado: De 10:00 às 12:00.',
        instagram: 'https://www.instagram.com/paroquiasantoantoniodf'
      },
      {
        name: 'Paróquia Santíssima Trindade',
        address: 'Ceilândia',
        times: 'Terça e Quinta: De 10:00 às 12:00 e de 18:00 às 19:15.',
        instagram: 'https://www.instagram.com/santissima.trindade'
      },
      {
        name: 'Capela de Todos os Santos',
        address: 'Ceilândia',
        times: 'Quarta e Sexta: De 18:00 às 19:15.'
      }
    ]
  },
  {
    city: 'Cruzeiro',
    parishes: [
      {
        name: 'Paróquia Nossa Senhora das Dores',
        address: 'Cruzeiro',
        times: 'Terça a Sexta: 08:00+ e 18:15+. Sábado: 1º do mês 08:15+, outros 07:15+ e 18:15+. Domingo: 07:15+ e 18:15+',
        instagram: 'https://www.instagram.com/pnsdoresdf'
      },
      {
        name: 'Paróquia Santa Teresinha',
        address: 'Cruzeiro',
        times: 'Terça a Sexta: 14:30 às 17:00'
      },
      {
        name: 'Paróquia São Pio de Pietrelcina',
        address: 'Cruzeiro',
        times: 'Terça a Sexta: 17:00 às 18:40. Sábado: 10:00 às 12:00'
      },
      {
        name: 'Paróquia Rainha da Paz',
        address: 'Cruzeiro',
        times: 'Terça, Quinta e Sexta: 07:30 às 08:00. Quarta: 07:30 às 08:00 e 17:00 às 18:30. Sábado: 17:00 às 17:30'
      }
    ]
  },
  {
    city: 'Estrutural',
    parishes: [
      {
        name: 'Paróquia Nossa Senhora do Encontro com Deus',
        address: 'Estrutural',
        times: 'Terça a domingo: 30 minutos antes e depois das missas',
        location: 'https://www.google.com/maps/search/?api=1&query=Paróquia+Nossa+Senhora+do+Encontro+com+Deus+Estrutural',
        instagram: 'https://www.instagram.com/pnsed'
      },
      {
        name: 'Capela Nossa Senhora da Esperança',
        address: 'Estrutural',
        times: 'Domingo: 30 minutos antes da missa das 17:00',
        location: 'https://www.google.com/maps/search/?api=1&query=Capela+Nossa+Senhora+da+Esperança+Estrutural'
      },
      {
        name: 'Paróquia Jesus Bom Pastor',
        address: 'Estrutural',
        times: 'Segunda a sábado de 17.45 às 18:45',
        location: 'https://www.google.com/maps/search/?api=1&query=Paróquia+Jesus+Bom+Pastor+Estrutural',
        instagram: 'https://www.instagram.com/paroquiajbp_estrutural'
      }
    ]
  },
  {
    city: 'Entorno (GO)',
    parishes: [],
    isGroup: true,
    subCities: [
      {
        city: 'Cidade Ocidental',
        parishes: [
          {
            name: 'Santuário Jardim da Imaculada',
            address: 'Cidade Ocidental - GO',
            times: 'Segunda, Quarta e Sexta: Às 19h (durante o horário da Santa Missa). Domingo: Durante as missas das 06:30, 09:00 e 16:00',
            instagram: 'https://www.instagram.com/santuariojardimdaimaculada'
          }
        ]
      },
      {
        city: 'Novo Gama',
        parishes: [
          {
            name: 'Paróquia Nossa Senhora Imaculada Conceição',
            address: 'Novo Gama - GO',
            times: 'Sexta-feira: De 09:00 às 11:00, de 14:30 às 17:00 e de 19:00 às 21:00',
            instagram: 'https://www.instagram.com/imaculadanovogama'
          },
          {
            name: 'Paróquia Nossa Senhora do Perpétuo Socorro',
            address: 'Novo Gama - GO',
            times: 'Quarta, Quinta e Sexta: Às 18:00'
          }
        ]
      },
      {
        city: 'Valparaíso de Goiás',
        parishes: [
          {
            name: 'A Paróquia Franciscana (São Francisco de Assis)',
            address: 'Valparaíso de Goiás - GO',
            times: 'Quarta, Quinta e Sexta: Às 09:00 e às 15:00. Sábado: Às 09:00',
            instagram: 'https://www.instagram.com/aparoquiafranciscana'
          }
        ]
      },
      {
        city: 'Luziânia',
        parishes: [
          {
            name: 'Paróquia Nossa Senhora de Lourdes',
            address: 'Luziânia - GO',
            times: 'Quarta e Sexta: De 14:00 às 17:00'
          }
        ]
      },
      {
        city: 'Santo Antônio do Descoberto',
        parishes: [
          {
            name: 'Paróquia Santo Antônio do Descoberto',
            address: 'Santo Antônio do Descoberto - GO',
            times: 'Quarta: De 14:00 às 16:00. Quinta: De 08:00 às 12:00'
          }
        ]
      },
      {
        city: 'Águas Lindas de Goiás',
        parishes: [
          {
            name: 'Paróquia São Maximiliano Maria Kolbe',
            address: 'Águas Lindas de Goiás - GO',
            times: 'Terça e Quarta: De 08:30 às 11:30 e de 14:30 às 16:30'
          },
          {
            name: 'Paróquia São Francisco de Assis',
            address: 'Águas Lindas de Goiás - GO',
            times: 'Quarta a Sábado: De 17:30 às 19:00'
          }
        ]
      },
      {
        city: 'Planaltina de Goiás',
        parishes: [
          {
            name: 'Paróquia Divino Espírito Santo',
            address: 'Planaltina de Goiás - GO',
            times: 'Segunda: De 14:30 às 18:00. Terça: De 09:30 às 12:00 e de 14:30 às 18:00. Quinta: De 18:00 às 19:00. Sexta e Sábado: De 09:30 às 12:00'
          },
          {
            name: 'Paróquia Santo Antônio',
            address: 'Planaltina de Goiás - GO',
            times: 'Quinta: De 15:00 às 17:00 e de 18:00 às 18:45. Outros horários por agendamento'
          }
        ]
      },
      {
        city: 'Formosa',
        parishes: [
          {
            name: 'Paróquia São Sebastião',
            address: 'Formosa - GO',
            times: 'Terça, Quarta e Quinta: De 20:00 às 22:00'
          }
        ]
      },
      {
        city: 'Cristalina',
        parishes: [
          {
            name: 'Paróquia Nossa Senhora Aparecida',
            address: 'Cristalina - GO',
            times: 'Confissões por agendamento na secretaria paroquial'
          }
        ]
      }
    ]
  },
  {
    city: 'Fercal & Itapoã',
    parishes: [
      {
        name: 'Paróquia Nossa Senhora Aparecida',
        address: 'Fercal',
        times: 'Quintas e sextas-feiras, das 17h00 às 18h30, e aos sábados, das 10h00 às 12h00. Outors horarios por agendamento na secretaria',
        instagram: 'https://www.instagram.com/pnsafercal'
      },
      {
        name: 'Paróquia São Luís Orione',
        address: 'Itapoã',
        times: 'Terças e quintas-feiras, das 09h00 às 11h00 e das 15h00 às 16h00. sabado por agendamento',
        instagram: 'https://www.instagram.com/paroquiaslo'
      }
    ]
  },
  {
    city: 'Gama',
    parishes: [
      {
        name: 'Paróquia São Sebastião (Setor Leste)',
        address: 'Gama',
        times: 'Terça e quarta: a partir de 07:00. Terça, quinta e sexta: de 18:00 às 19:00',
        instagram: 'https://www.instagram.com/saosebastiaogama'
      },
      {
        name: 'Paróquia São Sebastião (Engenho das Lajes)',
        address: 'Gama',
        times: 'Quinta: de 18:00 às 19:30 ou por agendamento',
        instagram: 'https://www.instagram.com/paroquiasaosebastiaoengenho'
      },
      {
        name: 'Paróquia Imaculada Conceição',
        address: 'Gama',
        times: 'Quinta: a partir de 17:00',
        instagram: 'https://www.instagram.com/paroquiaimaculadagama'
      },
      {
        name: 'Paróquia Nossa Senhora Aparecida',
        address: 'Gama',
        times: 'Terça: de 09:30 às 11:00, de 16:30 às 18:00 e de 20:00 às 21:30. Quarta e sexta: de 16:30 às 18:00. Quinta: de 16:30 às 18:00 e de 20:00 às 21:30. Sábado: de 09:30 às 11:00. Domingo: de 17:00 às 18:30',
        instagram: 'https://www.instagram.com/paroquia_nsra_aparecida'
      },
      {
        name: 'Paróquia Nossa Senhora Auxiliadora dos Cristãos',
        address: 'Gama',
        times: 'Terça e quinta: de 14:00 às 18:00',
        instagram: 'https://www.instagram.com/auxiliadoradoscristaos'
      },
      {
        name: 'Paróquia Nossa Senhora de Fátima',
        address: 'Gama',
        times: 'Quarta e sexta: de 15:00 às 17:30',
        instagram: 'https://www.instagram.com/pnsfatimagamadf'
      },
      {
        name: 'Paróquia Nossa Senhora do Carmo',
        address: 'Gama',
        times: 'Terça e quinta: de 09:30 às 11:30',
        instagram: 'https://www.instagram.com/paroquianossasenhora.carmo'
      },
      {
        name: 'Paróquia Santíssima Trindade',
        address: 'Gama',
        times: 'Quarta e sexta: de 14:30 às 16:30 (confissões por agendamento)',
        instagram: 'https://www.instagram.com/unisstrindadegama'
      },
      {
        name: 'Paróquia São João Batista',
        address: 'Gama',
        times: 'Quinta: a partir de 17:30',
        instagram: 'https://www.instagram.com/prosjbgamadf'
      }
    ]
  },
  {
    city: 'Guará & Lúcio Costa',
    parishes: [
      {
        name: 'Paróquia Santíssima Trindade',
        address: 'Guará',
        times: 'Quarta: A partir de 18:00. Quinta: 14:00 às 14:45. Domingo: 09:00 às 09:45',
        instagram: 'https://www.instagram.com/santissimanaweb'
      },
      {
        name: 'Paróquia São Paulo Apóstolo',
        address: 'Guará',
        times: 'Terça a Sábado: A partir de 09:00 e a partir de 14:30 (Fichas limitadas)',
        instagram: 'https://www.instagram.com/pspa_arqbrasilia'
      },
      {
        name: 'Paróquia Maria Imaculada',
        address: 'Guará',
        times: 'Terça, Quarta e Sexta: 18:00 às 18:45. Quinta: 07:00 às 08:00, 18:00 às 18:45 e 20:00 às 21:00. Sábado: 07:30 às 09:00. 1ª Sexta do mês: 20:00 às 21:00',
        instagram: 'https://www.instagram.com/paroquiamaria'
      },
      {
        name: 'Capela São João Paulo II',
        address: 'Guará',
        times: 'Terça a Sexta 18:30 às 19:20'
      },
      {
        name: 'Paróquia Divino Espírito Santo',
        address: 'Guará',
        times: 'Terça a Sexta: 18:00 às 18:50',
        instagram: 'https://www.instagram.com/divinorog'
      },
      {
        name: 'Paróquia São José',
        address: 'Lúcio Costa',
        times: 'Terça e Sexta: 15:00 às 17:30. Quarta: 09:00 às 12:00',
        instagram: 'https://www.instagram.com/paroquiasaojose.lc'
      }
    ]
  },
  {
    city: 'Jardim Botânico',
    parishes: [
      {
        name: 'Paróquia Santa Clara e São Francisco de Assis',
        address: 'Jardim Botânico',
        times: 'Quinta e Sexta: 18:00 às 19:00'
      },
      {
        name: 'Paróquia Sagrados Corações de Jesus e Maria',
        address: 'Jardim Botânico',
        times: 'Terça, Quinta e Sexta: 15:00 às 17:30'
      },
      {
        name: 'Paróquia São João Paulo II',
        address: 'Jardim Botânico',
        times: 'Terça a Sexta: 19:00 às 20:00. Sábado: 09:30 às 11:00'
      }
    ]
  },
  {
    city: 'Lago Norte',
    parishes: [
      {
        name: 'Santuário da Mãe e Rainha Três Vezes Admirável de Schoenstatt',
        address: 'Lago Norte',
        times: '1 hora antes das missas',
        location: 'https://www.google.com/maps/search/?api=1&query=Santuário+da+Mãe+e+Rainha+Três+Vezes+Admirável+de+Schoenstatt+Lago+Norte',
        instagram: 'https://www.instagram.com/tabordaesperanca'
      },
      {
        name: 'Paróquia Nossa Senhora do Lago',
        address: 'Lago Norte',
        times: 'Terça: de 20:00 às 22:00. Quinta: de 09:00 às 11:00',
        location: 'https://www.google.com/maps/search/?api=1&query=Paróquia+Nossa+Senhora+do+Lago+Lago+Norte',
        instagram: 'https://www.instagram.com/nossasenhoradolago'
      },
      {
        name: 'Paróquia Pai Nosso',
        address: 'Lago Norte',
        times: 'Confissões por agendamento',
        location: 'https://www.google.com/maps/search/?api=1&query=Paróquia+Pai+Nosso+Lago+Norte',
        instagram: 'https://www.instagram.com/paroquiapainosso'
      },
      {
        name: 'Paróquia Santo Antônio de Sant\'Ana Galvão',
        address: 'Lago Norte',
        times: 'Domingo: a partir de 18:30',
        location: 'https://www.google.com/maps/search/?api=1&query=Paróquia+Santo+Antônio+de+Sant\'Ana+Galvão+Lago+Norte',
        instagram: 'https://www.instagram.com/psasgalvao'
      },
      {
        name: 'Capela Nossa Senhora Mae dos Migrantes',
        address: 'Lago Norte',
        times: 'Quarta e sexta: 18:30',
        location: 'https://www.google.com/maps/search/?api=1&query=Capela+Nossa+Senhora+Mae+dos+Migrantes+Lago+Norte',
        instagram: 'https://www.instagram.com/capelamaedosmigrantes'
      },
      {
        name: 'Paróquia Nossa Senora de Fátima',
        address: 'Lago Norte',
        times: 'Quinta: depois da missa. Sábado: depois da missa das 08:00',
        location: 'https://www.google.com/maps/search/?api=1&query=Paróquia+Nossa+Senora+de+Fátima+Lago+Norte',
        instagram: 'https://www.instagram.com/pnsfatima.gt'
      }
    ]
  },
  {
    city: 'Lago Sul',
    parishes: [
      {
        name: 'Paróquia N. Sra. do Perpétuo Socorro',
        address: 'Lago Sul',
        times: 'Terça, Quarta e Sexta: 09:00 às 11:00 e 14:00 às 17:00. Quinta: A partir de 18:30',
        instagram: 'https://www.instagram.com/psocorrolagosul'
      },
      {
        name: 'Paróquia N. Sra. de Nazaré',
        address: 'Lago Sul',
        times: 'Quarta: 08:00 às 10:30 e após a missa das 19:30',
        instagram: 'https://www.instagram.com/pnsnazarelagosul'
      },
      {
        name: 'Paróquia N. Sra. do Rosário',
        address: 'Lago Sul',
        times: 'Terça e Quinta: A partir das 09:00 e a partir das 18:00. Quarta: A partir das 15:00. Sexta: A partir das 18:00',
        instagram: 'https://www.instagram.com/rosario_lagosul26'
      },
      {
        name: 'Paróquia São Pedro de Alcântara',
        address: 'Lago Sul',
        times: 'Terça e Quinta: 14:30 às 17:30. Quarta: 09:00 às 12:00 (Por agendamento)',
        instagram: 'https://www.instagram.com/paroquia_saopedrodealcantara'
      }
    ]
  },
  {
    city: 'Núcleo Bandeirante & Candangolândia',
    parishes: [
      {
        name: 'Paróquia São João Bosco',
        address: 'Núcleo Bandeirante',
        times: 'Aviso: Checar na secretaria da paróquia a disponibilidade dos padres.',
        instagram: 'https://www.instagram.com/dombosconb'
      },
      {
        name: 'Paróquia São José Operário',
        address: 'Candangolândia',
        times: 'Terça: depois da missa. Quarta a sexta: de 15:00 às 17:00',
        instagram: 'https://www.instagram.com/paroquiasjocandanga'
      }
    ]
  },
  {
    city: 'Noroeste',
    parishes: [
      {
        name: 'Paróquia São Charbel',
        address: 'Noroeste',
        times: 'Antes e depois das missas.'
      }
    ]
  },
  {
    city: 'Paranoá',
    parishes: [
      {
        name: 'Paróquia Santa Maria dos Pobres',
        address: 'Paranoá',
        times: 'Terça, quinta e sexta: de 16:00 às 18:00. Sábado: de 10:00 às 12:00',
        instagram: 'https://www.instagram.com/santamariadospobres'
      },
      {
        name: 'Paróquia Nossa Senhora Aparecida',
        address: 'Paranoá',
        times: 'Quinta: de 15:00 às 17:00. Sexta: de 15:00 às 17:00 e depois da missa. Sábado: de 09:00 às 12:00',
        instagram: 'https://www.instagram.com/paroquian.sraaparecidapadf'
      },
      {
        name: 'Paróquia São José de Anchieta',
        address: 'Paranoá',
        times: 'Terça a sexta: de 17:30 às 19:00',
        instagram: 'https://www.instagram.com/paroquiasaojosedeanchieta'
      },
      {
        name: 'Paróquia Nossa Senhora Auxiliadora',
        address: 'Paranoá',
        instagram: 'https://www.instagram.com/auxiliadoragomel'
      }
    ]
  },
  {
    city: 'Park Way',
    parishes: [
      {
        name: 'Santuário Imaculado Coração de Maria',
        address: 'Park Way',
        times: 'Terça a Sexta: 17:00-19:00 e 20:15-21:30. Sábado: 08:30-10:30'
      },
      {
        name: 'Paróquia Sagrada Família',
        address: 'Park Way',
        times: '30 min antes das missas'
      },
      {
        name: 'Paróquia Divino Espírito Santo Paráclito',
        address: 'Park Way',
        times: 'Terça e Quinta: 15:30 às 19:00'
      }
    ]
  },
  {
    city: 'Planaltina',
    parishes: [
      {
        name: 'Paróquia Santa Rita de Cássia',
        address: 'Planaltina',
        times: 'Terça: Durante a missa (50 fichas). Quarta e Sexta: 08:30 às 10:30 (10 fichas). Quinta: 15:00 às 16:00 (10 fichas)'
      },
      {
        name: 'Capela São José',
        address: 'Planaltina',
        times: '2ª quarta do mês (19:00+)'
      },
      {
        name: 'Capela São Francisco de Assis',
        address: 'Planaltina',
        times: '3ª sexta do mês (19:00+)'
      },
      {
        name: 'Capela Imaculada Conceição',
        address: 'Planaltina',
        times: '4ª quinta do mês (19:00+)'
      },
      {
        name: 'Paróquia Nossa Senhora Aparecida',
        address: 'Planaltina',
        times: 'Quinta: 15:00 às 18:00'
      },
      {
        name: 'Paróquia São Sebastião',
        address: 'Planaltina',
        times: 'Terça e Sexta: 17:30 às 19:00. Quarta: A partir de 08:00. Quinta: 19:30 às 21:00'
      },
      {
        name: 'Capela Santa Teresinha',
        address: 'Planaltina',
        times: 'Quinta 18:00 às 19:00 (quinzenal)'
      },
      {
        name: 'Paróquia São Vicente de Paulo',
        address: 'Planaltina',
        times: 'Terça, Quinta e Sexta: 17:00 às 18:30. Quarta: 17:00 às 17:40'
      },
      {
        name: 'Capela N. Sra. das Graças',
        address: 'Planaltina',
        times: 'Quarta depois da missa'
      },
      {
        name: 'Paróquia Divino Espírito Santo',
        address: 'Planaltina',
        times: 'Quinta e Sábado: A partir de 17:00'
      },
      {
        name: 'Capela São Miguel',
        address: 'Planaltina',
        times: 'Sexta 18:00 às 19:20'
      },
      {
        name: 'Paróquia Nossa Senhora de Nazaré',
        address: 'Planaltina',
        times: 'Terça, Quinta e Sexta: 18:00 às 19:15'
      },
      {
        name: 'Capela Santo Agostinho',
        address: 'Planaltina',
        times: 'Quarta 18:00 às 19:15'
      },
      {
        name: 'Paróquia Nossa Senhora de Fátima',
        address: 'Planaltina',
        times: 'Terça, Quinta e Sexta: 18:00 até começar a missa'
      },
      {
        name: 'Paróquia Sagrado Coração de Jesus',
        address: 'Planaltina',
        times: 'Quarta: 17:30 até a missa e depois da missa até 21:00'
      },
      {
        name: 'Paróquia Santa Luzia',
        address: 'Planaltina',
        times: 'Quinta: Depois das missas e 17:30 às 19:00. Sexta: A partir de 17:30'
      },
      {
        name: 'Capela N. Sra. da Esperança',
        address: 'Planaltina',
        times: 'Quarta a partir de 18:00'
      }
    ]
  },
  {
    city: 'Recanto das Emas',
    parishes: [
      {
        name: 'Paróquia São Rafael Arcanjo',
        address: 'Recanto das Emas',
        times: 'Quinta: 18:00 às 19:00 e depois da missa. Sexta: 15:00 às 17:00. 1º e 3º Sábado: 10:00 às 12:00',
        instagram: 'https://www.instagram.com/psaorafael'
      },
      {
        name: 'Capela São Pio',
        address: 'Recanto das Emas',
        times: 'Terça 18:00 às 19:00'
      },
      {
        name: 'Paróquia São Gabriel Arcanjo',
        address: 'Recanto das Emas',
        times: 'Terça e Quinta: Depois da missa. Sábado: 09:00 às 11:30',
        instagram: 'https://www.instagram.com/psaogabrielarcanjo'
      },
      {
        name: 'Capela Santos Anjos',
        address: 'Recanto das Emas',
        times: 'Terça a Sexta depois da missa das 07:30'
      },
      {
        name: 'Paróquia São Miguel Arcanjo',
        address: 'Recanto das Emas',
        times: 'Quarta: 15:00 às 17:00. Quinta: Depois da missa das 19:30 até 22:00',
        instagram: 'https://www.instagram.com/psmarecanto'
      },
      {
        name: 'Capela São Francisco',
        address: 'Recanto das Emas',
        times: 'Quarta depois da missa'
      },
      {
        name: 'Paróquia São José Operário',
        address: 'Recanto das Emas',
        times: 'Terça a Sexta: 10:00 às 12:00 e 15:00 às 18:00. Sábado: 10:00 às 12:00',
        instagram: 'https://www.instagram.com/psaojoseoperario'
      },
      {
        name: 'Paróquia São Francisco de Assis',
        address: 'Recanto das Emas',
        times: 'Terça: 20:00 às 22:00. Quinta e Sexta: 18:00 às 19:30. Sábado: 10:00 às 12:00',
        instagram: 'https://www.instagram.com/psfdeassis'
      },
      {
        name: 'Capela Imaculado Coração',
        address: 'Recanto das Emas',
        times: 'Quarta 18:00 às 19:30, 1º Sábado 08:00 às 09:00'
      }
    ]
  },
  {
    city: 'Riacho Fundo 2',
    parishes: [
      {
        name: 'Paróquia Nossa Senhora da Medalha Milagrosa',
        address: 'Riacho Fundo 2',
        times: 'Quinta e sexta: de 15:00 às 16:30. Sábado: de 09:00 às 11:00',
        instagram: 'https://www.instagram.com/raiosdamedalha'
      }
    ]
  },
  {
    city: 'Samambaia',
    parishes: [
      {
        name: 'Paróquia Maria de Nazaré',
        address: 'Samambaia',
        times: 'Quinta: a partir de 18:00',
        instagram: 'https://www.instagram.com/pmariadenazare'
      },
      {
        name: 'Paróquia Santa Luzia',
        address: 'Samambaia',
        times: 'Terça e quinta: de 09:00 às 11:00 e de 15:00 às 17:00',
        instagram: 'https://www.instagram.com/santaluzia13'
      },
      {
        name: 'Paróquia São João Evangelista',
        address: 'Samambaia',
        times: 'Quinta: depois da missa das 19:30. Sexta: de 08:30 às 12:00 e de 14:30 às 18:00',
        instagram: 'https://www.instagram.com/psje.sam'
      },
      {
        name: 'Paróquia Santo Inácio de Loyola',
        address: 'Samambaia',
        times: 'Terça e quinta: de 16:00 às 18:00. Sábado: de 09:30 às 11:30',
        instagram: 'https://www.instagram.com/psiloyola'
      },
      {
        name: 'Paróquia Imaculada Conceição de Maria',
        address: 'Samambaia',
        times: 'Terça: depois da missa. Sábado: de 08:00 às 11:00',
        instagram: 'https://www.instagram.com/imaculadaconceicaodemaria'
      },
      {
        name: 'Paróquia Nossa Senhora de Fátima',
        address: 'Samambaia',
        times: 'Terça e sábado: a partir de 09:00. Quarta: a partir de 15:00',
        instagram: 'https://www.instagram.com/pnsfatimasamambaia'
      },
      {
        name: 'Paróquia Nossa Senhora das Graças',
        address: 'Samambaia',
        times: 'Terça a sexta: a partir das 19:00. Sábado: a partir das 18:00',
        instagram: 'https://www.instagram.com/paroquia_nsg'
      },
      {
        name: 'Paróquia Nossa Senhora das Dores',
        address: 'Samambaia',
        times: 'Terça, quarta, sexta e sábado: de 18:00 às 19:00. Quinta: a partir de 19:30',
        instagram: 'https://www.instagram.com/pnsdoresdf'
      },
      {
        name: 'Paróquia São José Operário',
        address: 'Samambaia',
        times: 'Terça a sexta: a partir de 18:00',
        instagram: 'https://www.instagram.com/psjosam'
      },
      {
        name: 'Paróquia Nossa Senhora Aparecida',
        address: 'Samambaia',
        times: 'Terça a sexta: de 18:00 às 18:50',
        instagram: 'https://www.instagram.com/pnsadf'
      },
      {
        name: 'Paróquia Jesus de Nazaré',
        address: 'Samambaia',
        times: 'Terça, quinta e sexta: de 18:30 às 19:25',
        instagram: 'https://www.instagram.com/paroquiajesusdenazarebsb'
      },
      {
        name: 'Paróquia São Bento',
        address: 'Samambaia',
        times: 'Quinta e sexta: de 17:00 às 19:00. Sábado: de 10:30 às 12:00',
        instagram: 'https://www.instagram.com/paroquiasaobentodf'
      }
    ]
  },
  {
    city: 'Santa Maria',
    parishes: [
      {
        name: 'Paróquia São José',
        address: 'Santa Maria',
        times: 'Quinta e Sexta: 16:00 às 18:00. Sábado: 09:00 às 11:30',
        instagram: 'https://www.instagram.com/psaojose'
      },
      {
        name: 'Paróquia Santa Mãe de Deus',
        address: 'Santa Maria',
        times: 'Terça, Quinta e Sexta: 15:00 às 18:00. Sábado: 09:00 às 12:00',
        instagram: 'https://www.instagram.com/paroquiasantamaededeus'
      },
      {
        name: 'Paróquia N. Sra. da Providência',
        address: 'Santa Maria',
        times: 'Terça, Quarta e Sexta: 15:00 às 17:00',
        instagram: 'https://www.instagram.com/paroquiadaprovidencia'
      },
      {
        name: 'Paróquia Sagrada Família de Nazaré',
        address: 'Santa Maria',
        times: 'Terça e Quinta: A partir de 18:30',
        instagram: 'https://www.instagram.com/paroq.sagradafamiliadenazare'
      },
      {
        name: 'Capela Cristo Rei',
        address: 'Santa Maria',
        times: 'Quarta e Sexta a partir de 18:30'
      },
      {
        name: 'Paróquia N. Sra. das Dores',
        address: 'Santa Maria',
        times: 'Terça, Quinta e Sexta: A partir de 18:00',
        instagram: 'https://www.instagram.com/paroquia_nsd'
      },
      {
        name: 'Convento e Casa de Formação Santa Maria dos Anjos',
        address: 'Santa Maria - DF',
        times: 'Quarta-feira: De 14h às 16h. Sexta-feira: De 14h às 16h',
        instagram: 'https://www.instagram.com/santamariadosanjos'
      }
    ]
  },
  {
    city: 'São Sebastião',
    parishes: [
      {
        name: 'Paróquia N. Sra. Aparecida',
        address: 'São Sebastião',
        times: 'Terça, Quinta e Sexta: 18:00 às 19:00. Quarta: 16:00 às 18:30',
        instagram: 'https://www.instagram.com/paroquia.maeaparecida'
      },
      {
        name: 'Paróquia Santo Afonso',
        address: 'São Sebastião',
        times: 'Quinta e Sexta: 15:00 às 17:00',
        instagram: 'https://www.instagram.com/paroquia.santo.afonso'
      },
      {
        name: 'Paróquia São Francisco de Assis',
        address: 'São Sebastião',
        times: 'Terça, Quinta e Sexta: 17:00 às 19:00',
        instagram: 'https://www.instagram.com/psfatororo'
      },
      {
        name: 'Paróquia Cristo Redentor',
        address: 'São Sebastião',
        times: 'Quinta: 15:00 às 17:30',
        instagram: 'https://www.instagram.com/paroquia_cristo_redentor_ssdf'
      }
    ]
  },
  {
    city: 'Setor Militar Urbano (SMU)',
    parishes: [
      {
        name: 'Catedral Militar Rainha da Paz',
        address: 'SMU',
        times: 'Quarta e Sexta: 17:00 às 18:00'
      },
      {
        name: 'Oratório do Soldado (Capelania S. Francisco)',
        address: 'SMU',
        times: 'Terça e Quinta: 17:00 às 18:00. Quarta e Domingo: 18:00 às 18:50. 1ª Sexta do mês: 18:00 às 18:50'
      }
    ]
  },
  {
    city: 'Sobradinho',
    parishes: [
      {
        name: 'Paróquia Nossa Senhora Aparecida',
        address: 'Sobradinho',
        times: 'Segunda a sábado: de 17:00 às 18:50. Domingo: de 07:00 às 07:50, de 09:30 às 09:50, de 17:00 às 18:50',
        instagram: 'https://www.instagram.com/paroquiansaparecidasob2'
      },
      {
        name: 'Paróquia Nossa Senhora da Conceição Aparecida',
        address: 'Sobradinho',
        times: 'Quinta: a partir de 20:00. Domingo: a partir de 18:00',
        instagram: 'https://www.instagram.com/nsca.paroquia'
      },
      {
        name: 'Capela N. Sra. de Fátima',
        address: 'Sobradinho',
        times: 'Quinta a partir de 20:00'
      },
      {
        name: 'Capela Sagrado Coração de Jesus',
        address: 'Sobradinho',
        times: 'Sexta a partir de 18:30'
      },
      {
        name: 'Paróquia Nossa Senhora da Imaculada Conceição',
        address: 'Sobradinho',
        times: 'Terça e quarta: de 17:30 às 18:30. Sábado: de 09:30 às 10:30',
        instagram: 'https://www.instagram.com/comunica.imaculada'
      },
      {
        name: 'Paróquia Bom Jesus dos Migrantes',
        address: 'Sobradinho',
        times: 'Sexta: de 09:00 às 11:00',
        instagram: 'https://www.instagram.com/paroquia_bjm'
      },
      {
        name: 'Paróquia São José Esposo de Maria',
        address: 'Sobradinho',
        times: 'Quarta: a partir de 15:00. Quinta: a partir de 10:00. Sexta: a partir de 20:30',
        instagram: 'https://www.instagram.com/psjemdf'
      },
      {
        name: 'Paróquia Nossa Senhora do Rosário de Fátima',
        address: 'Sobradinho',
        times: 'Terça e sexta: de 15:00 às 17:00',
        instagram: 'https://www.instagram.com/nsrf_sobradinho'
      },
      {
        name: 'Paróquia Nossa Senhora Mãe dos Migrantes',
        address: 'Sobradinho',
        times: 'Terça a sexta: a partir de 15:00. Sábado: a partir de 10:00',
        instagram: 'https://www.instagram.com/pascommaedosmigrantes'
      },
      {
        name: 'Paróquia Nossa Senhora das Graças',
        address: 'Sobradinho',
        times: 'Quarta e quinta: de 18:30 às 19:30. Sábado: de 09:00 às 11:30',
        instagram: 'https://www.instagram.com/paroquiansgracasgcoloradodf'
      },
      {
        name: 'Capela N. Sra. Rainha da Paz',
        address: 'Sobradinho',
        times: 'Terça e sexta de 18:30 às 19:30'
      },
      {
        name: 'Paróquia São Mateus',
        address: 'Sobradinho',
        times: 'Terça e quinta: a partir de 18:00',
        instagram: 'https://www.instagram.com/paroquiasaomateusdf'
      },
      {
        name: 'Capela Santo Antônio',
        address: 'Sobradinho',
        times: 'Sexta depois da missa das 19:30'
      },
      {
        name: 'Paróquia Divino Espírito Santo',
        address: 'Sobradinho',
        times: 'Terça, quinta e domingo: depois das missas'
      }
    ]
  },
  {
    city: 'Taguatinga',
    parishes: [
      {
        name: 'Paróquia São Pedro',
        address: 'Taguatinga',
        times: 'Agendamento: Confissões por agendamento.',
        instagram: 'https://www.instagram.com/paroquiasaopedrotagdf'
      },
      {
        name: 'Paróquia São Pedro e São Paulo',
        address: 'Taguatinga',
        times: 'Terça a Sexta: 17:00 às 19:00. Quinta: Depois da missa até 21:45',
        instagram: 'https://www.instagram.com/paroquiaspspmnorte'
      },
      {
        name: 'Paróquia São Vicente de Paulo',
        address: 'Taguatinga',
        times: 'Terça e Sábado: 09:00 às 11:00. Quarta: 15:00 às 17:00. Quinta: Depois da missa das 19:30 (durante a adoração)',
        instagram: 'https://www.instagram.com/psvp.tagua'
      },
      {
        name: 'Paróquia Cristo Redentor',
        address: 'Taguatinga',
        times: 'Terça, Quinta e Sexta: 18:00 às 19:00. Sábado: 10:00 às 11:30',
        instagram: 'https://www.instagram.com/paroquiacristoredentordf'
      },
      {
        name: 'Paróquia Santa Teresinha',
        address: 'Taguatinga',
        times: 'Quarta, Quinta e Sexta: 09:30 às 12:00',
        instagram: 'https://www.instagram.com/santateresinhataguatinga'
      },
      {
        name: 'Paróquia São Judas Tadeu',
        address: 'Taguatinga',
        times: 'Terça a Sexta: A partir de 18:30',
        instagram: 'https://www.instagram.com/psjtdf'
      },
      {
        name: 'Paróquia Sagrada Família',
        address: 'Taguatinga',
        times: 'Terça: 15:00 às 17:00. Quinta: 20:30 às 21:30. Sexta e Sábado: 10:00 às 11:50',
        instagram: 'https://www.instagram.com/sagrada.familia_tag'
      },
      {
        name: 'Capela Nossa Senhora Aparecida',
        address: 'Taguatinga',
        times: 'Quarta de 16:30 às 19:00'
      },
      {
        name: 'Paróquia São João Batista',
        address: 'Taguatinga',
        times: 'Terça a Sexta: 18:00 às 19:00',
        instagram: 'https://www.instagram.com/saojoaobatistataguatinga'
      },
      {
        name: 'Capelania Militar São Jorge',
        address: 'Taguatinga',
        times: 'Quinta: 14:00 às 18:00 (agendamento). Outros: Antes das missas (por ordem de chegada)',
        instagram: 'https://www.instagram.com/capela.saojorge'
      },
      {
        name: 'Santuário Nossa Senhora do Perpétuo Socorro',
        address: 'Taguatinga',
        times: 'Terça a Sexta: A partir de 17:30',
        instagram: 'https://www.instagram.com/perpetuosocorrodf'
      },
      {
        name: 'Paróquia São José',
        address: 'Taguatinga',
        times: 'Terça a Domingo: A partir de 18:00',
        instagram: 'https://www.instagram.com/alosaojose'
      },
      {
        name: 'Paróquia Nossa Senhora de Fátima',
        address: 'Taguatinga',
        times: 'Terça a Sexta: 09:00 às 11:00 e 15:00 às 17:00. Sábado: A partir de 09:00 (limite de 100 fichas)',
        instagram: 'https://www.instagram.com/pnsfatima'
      },
      {
        name: 'Paróquia Nossa Senhora do Carmo',
        address: 'Taguatinga',
        times: 'Quinta: 15:00 às 17:00. Sexta e Sábado: 10:00 às 12:00',
        instagram: 'https://www.instagram.com/pnsc_taguatinga'
      },
      {
        name: 'Paróquia Imaculada Conceição',
        address: 'Taguatinga',
        times: 'Terça e Quinta: 16:00 às 18:00. Sexta: 10:00 às 11:30. Sábado: 09:30 às 11:30',
        instagram: 'https://www.instagram.com/paroquiaimaculadamnorte'
      },
      {
        name: 'Paróquia Imaculado Coração de Maria',
        address: 'Taguatinga',
        times: 'Quinta e Sábado: 09:00 às 11:00',
        instagram: 'https://www.instagram.com/icm.paroquia'
      },
      {
        name: 'Paróquia Nossa Senhora de Lourdes',
        address: 'Taguatinga',
        times: 'Quarta: 20:00 às 21:00. Quinta e Sexta: 18:00 às 19:20. Sábado: 09:30 às 11:30',
        instagram: 'https://www.instagram.com/pnslourdes_df'
      },
      {
        name: 'Paróquia São Sebastião',
        address: 'Taguatinga',
        times: 'Terça e Quinta: 16:30 às 18:00. Quarta: Depois da missa. Sábado: 16:30 às 17:30',
        instagram: 'https://www.instagram.com/paroquiasaosebastiaodf'
      }
    ]
  },
  {
    city: 'Vicente Pires & 26 de Setembro',
    parishes: [
      {
        name: 'Paróquia Nossa Senhora das Vitórias',
        address: 'Vicente Pires',
        times: 'Terça: após a missa das 19:30. Quarta: a partir das 09:30. Sexta e Sábado: após a missa das 07:00.',
        instagram: 'https://www.instagram.com/pnsdasvitorias'
      },
      {
        name: 'Paróquia Nossa Senhora da Esperança',
        address: 'Vicente Pires',
        times: 'Terça e Sexta: a partir das 18:30. Quinta: após a missa das 19:30.',
        instagram: 'https://www.instagram.com/pnse_vp'
      },
      {
        name: 'Capela Nossa Senhora Aparecida (pertence a P. N. S. da Esperança)',
        address: 'Vicente Pires',
        times: 'Quinta: após a missa das 07:00.'
      },
      {
        name: 'Paróquia Nossa Senhora Auxiliadora',
        address: 'Vicente Pires',
        times: 'Terça a Sexta: de 14:30 às 17:00.',
        instagram: 'https://www.instagram.com/pnsauxiliadora.brasilia'
      },
      {
        name: 'Paróquia São Francisco de Assis',
        address: 'Vicente Pires',
        times: 'Terça e Sexta: após a missa. Quarta e Quinta: de 17:00 às 19:00. Sábado: de 17:00 às 18:30.',
        instagram: 'https://www.instagram.com/saofranciscovp'
      },
      {
        name: 'Paróquia São José Operário',
        address: 'Vicente Pires',
        times: 'Quinta: de 18:00 às 19:15.',
        instagram: 'https://www.instagram.com/paroquiasaojose.vp'
      },
      {
        name: 'Paróquia Santa Bernardete',
        address: '26 de Setembro',
        times: 'Terça a Domingo: 40 minutos antes das missas.'
      },
      {
        name: 'Capela Nossa Senhora das Lágrimas (pertence a P. Santa Bernardete)',
        address: '26 de Setembro',
        times: 'Terça a Sexta e Domingo: 40 minutos antes das missas.'
      },
      {
        name: 'Capela Santa Dulce dos Pobres (pertence a P. Santa Bernardete)',
        address: '26 de Setembro',
        times: 'Sábado: 40 minutos antes da missa.'
      },
      {
        name: 'Capela Divina Misericórdia (pertence a P. Santa Bernardete)',
        address: '26 de Setembro',
        times: 'Domingo: 40 minutos antes da missa.'
      },
      {
        name: 'Capela Nossa Senhora da Piedade (pertence a P. Santa Bernardete)',
        address: '26 de Setembro',
        times: 'Domingo: 40 minutos antes da missa.'
      }
    ]
  }
];
