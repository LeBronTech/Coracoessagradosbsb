export interface MarianDevotion {
    id: string;
    name: string;
    country: string;
    countryFlag: string;
    date: string;
    imageUrl: string;
    description: string;
    fullDescription: string;
    status?: "approved" | "pending" | "not-approved" | "complex";
    statusNote?: string;
}

export interface Continent {
    name: string;
    emoji: string;
    devotions: MarianDevotion[];
}

export const worldMarianDevotions: Continent[] = [
    {
        name: "Europa",
        emoji: "🇪🇺",
        devotions: [
            // PRIORIDADE ALTA / FASE 1 & 2
            {
                id: "knock",
                name: "Nossa Senhora de Knock",
                country: "Irlanda",
                countryFlag: "🇮🇪",
                date: "21 de Agosto",
                imageUrl: "/images/ns_knock.png",
                description: "A Aparição Silenciosa (1879)",
                fullDescription: "Em 1879, Maria, São José e São João Evangelista apareceram em uma parede da igreja de Knock. Não disseram uma palavra. A aparição silenciosa é interpretada como contemplação do Cordeiro de Deus (que também apareceu num altar). É o santuário nacional da Irlanda.",
                status: "approved"
            },
            {
                id: "beauraing",
                name: "Nossa Senhora de Beauraing",
                country: "Bélgica",
                countryFlag: "🇧🇪",
                date: "29 de Novembro",
                imageUrl: "/images/ns_beauraing.png",
                description: "A Virgem do Coração de Ouro (1932)",
                fullDescription: "Apareceu a 5 crianças em 1932-1933. Mostrou seu Coração de Ouro e pediu: 'Eu converterei os pecadores'. A mensagem simples e a imagem do coração dourado atraem milhares de peregrinos.",
                status: "approved"
            },
            {
                id: "todas_nacoes",
                name: "Nossa Senhora de Todas as Nações",
                country: "Holanda",
                countryFlag: "🇳🇱",
                date: "31 de Maio",
                imageUrl: "/images/ns_todas_nacoes.png",
                description: "Aparição em Amsterdã - Mensagem de unidade",
                fullDescription: "Aparições a Ida Peerdeman (1945-1959). Maria pediu o dogma de 'Corredentora, Medianeira e Advogada'. Embora o dogma não tenha sido proclamado, a devoção e a oração foram aprovadas pelo bispo local em 2002.",
                status: "approved",
                statusNote: "Devoção aprovada, dogma em estudo"
            },
            {
                id: "siluva",
                name: "Nossa Senhora de Šiluva",
                country: "Lituânia",
                countryFlag: "🇱🇹",
                date: "8 de Setembro",
                imageUrl: "/images/ns_siluva.png",
                description: "Primeira aparição mariana aprovada na Europa (1608)",
                fullDescription: "É considerada a primeira aparição mariana aprovada na Europa, ocorrida em 1608. Em um período onde a Lituânia se tornava calvinista (protestante), Maria apareceu chorando, lamentando que seu Filho não era mais adorado naquele lugar. É o coração católico do Báltico.",
                status: "approved"
            },
            {
                id: "walsingham",
                name: "Nossa Senhora de Walsingham",
                country: "Inglaterra",
                countryFlag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
                date: "24 de Setembro",
                imageUrl: "/images/ns_walsingham.png",
                description: "A 'Nazaré' da Inglaterra (Séc. XI)",
                fullDescription: "Em 1061, a nobre Richeldis de Faverches teve uma visão da Santa Casa de Nazaré e construiu uma réplica. Tornou-se um dos maiores santuários medievais. Destruído na Reforma e restaurado no século XX, é hoje santuário católico e anglicano.",
                status: "approved",
                statusNote: "Santuário Histórico"
            },
            {
                id: "kazan",
                name: "Nossa Senhora de Kazan",
                country: "Rússia",
                countryFlag: "🇷🇺",
                date: "4 de Novembro",
                imageUrl: "/images/ns_kazan.png",
                description: "Padroeira da Rússia - Ícone milagroso",
                fullDescription: "O ícone mais venerado da Rússia, 'A Libertadora'. Salvou a Rússia de invasões polonesas e napoleônicas. Desapareceu em 1904 e uma cópia antiga foi devolvida por São João Paulo II à Igreja Ortodoxa Russa em 2004, num gesto histórico de ecumenismo.",
                status: "approved",
                statusNote: "Ícone Ortodoxo e Católico"
            },
            {
                id: "banneux",
                name: "Nossa Senhora de Banneux",
                country: "Bélgica",
                countryFlag: "🇧🇪",
                date: "15 de Janeiro",
                imageUrl: "/images/ns_banneux.png",
                description: "Virgem dos Pobres (1933)",
                fullDescription: "Apareceu logo após Beauraing, em 1933, a uma menina pobre. Apresentou-se como 'A Virgem dos Pobres' e indicou uma fonte para 'aliviar o sofrimento'. Aprovada pela Igreja em 1949.",
                status: "approved"
            },
            {
                id: "pontmain",
                name: "Nossa Senhora de Pontmain",
                country: "França",
                countryFlag: "🇫🇷",
                date: "17 de Janeiro",
                imageUrl: "/images/ns_pontmain.png",
                description: "Nossa Senhora da Esperança - 'Mas rezai, meus filhos...'",
                fullDescription: "Em 17 de janeiro de 1871, durante a Guerra Franco-Prussiana, Maria apareceu no céu estrelado de Pontmain. A mensagem escrita no céu dizia: 'Mas rezai, meus filhos. Deus vos ouvirá em pouco tempo'. O armistício foi assinado dias depois.",
                status: "approved"
            },
            {
                id: "pellevoisin",
                name: "Nossa Senhora de Pellevoisin",
                country: "França",
                countryFlag: "🇫🇷",
                date: "19 de Fevereiro",
                imageUrl: "/images/ns_pellevoisin.png",
                description: "Mãe Todo-Misericordiosa e o Escapulário do Sagrado Coração",
                fullDescription: "Uma aparição aprovada que ocorreu em 1876. Maria apareceu a uma mulher doente que foi curada e pediu a divulgação do Escapulário do Sagrado Coração. Enfatiza a misericórdia através do Coração de Jesus.",
                status: "approved"
            },
            {
                id: "lagrimas_siracusa",
                name: "Nossa Senhora das Lágrimas",
                country: "Itália",
                countryFlag: "🇮🇹",
                date: "29 de Agosto",
                imageUrl: "/images/ns_lagrimas.png",
                description: "Lágrimas humanas em uma imagem de gesso (1953)",
                fullDescription: "Em 1953, em Siracusa, Sicília, uma imagem de gesso do Imaculado Coração de Maria derramou lágrimas humanas por quatro dias. O fenômeno foi confirmado cientificamente e aprovado pela Igreja.",
                status: "approved"
            },
            {
                id: "revelacao",
                name: "Nossa Senhora da Revelação",
                country: "Itália",
                countryFlag: "🇮🇹",
                date: "12 de Abril",
                imageUrl: "/images/ns_revelacao.png",
                description: "Tre Fontane - Conversão de um anticlerical",
                fullDescription: "Em 1947, Bruno Cornacchiola, um protestante radical que planejava matar o Papa, teve uma visão de Maria em Roma (Tre Fontane). Ela se apresentou como a 'Virgem da Revelação'. Ele se converteu instantaneamente. O Papa Pio XII abençoou a estátua.",
                status: "approved",
                statusNote: "Culto permitido (Santuário confiado aos Franciscanos)"
            },
            {
                id: "impossiveis",
                name: "Nossa Senhora dos Impossíveis",
                country: "Itália",
                countryFlag: "🇮🇹",
                date: "22 de Maio",
                imageUrl: "/images/ns_impossiveis.png",
                description: "Padroeira das causas impossíveis (Cascia)",
                fullDescription: "Venerada no Santuário de Santa Rita de Cássia. Invocada como a mãe que intercede pelas causas humanamente impossíveis.",
                status: "approved",
                statusNote: "Devoção Tradicional"
            },
            {
                id: "rocio_espanha",
                name: "Nossa Senhora do Rocio",
                country: "Espanha",
                countryFlag: "🇪🇸",
                date: "Pentecostes",
                imageUrl: "/images/ns_rocio_espanha.png",
                description: "A 'Branca Pomba' da Andaluzia",
                fullDescription: "A Virgem do Rocio é venerada em Almonte, Huelva. Sua romaria reúne um milhão de pessoas na maior festa popular da Espanha.",
                status: "approved",
                statusNote: "Devoção Tradicional"
            },
            {
                id: "covadonga",
                name: "Nossa Senhora de Covadonga",
                country: "Espanha",
                countryFlag: "🇪🇸",
                date: "8 de Setembro",
                imageUrl: "/images/ns_covadonga.png",
                description: "A 'Santina' - Reconquista da Espanha",
                fullDescription: "Padroeira das Astúrias. A batalha de Covadonga (722) marcou o início da Reconquista cristã da Espanha. A vitória foi atribuída à proteção da Virgem na caverna sagrada.",
                status: "approved",
                statusNote: "Santuário Histórico"
            },
            {
                id: "macarena",
                name: "Nossa Senhora da Esperança Macarena",
                country: "Espanha",
                countryFlag: "🇪🇸",
                date: "18 de Dezembro",
                imageUrl: "/images/ns_macarena.png",
                description: "Rainha de Sevilha - Semana Santa",
                fullDescription: "Uma das imagens mais dolorosas e belas da Semana Santa de Sevilha. A 'Macarena' é venerada com paixão imensa pelos sevilhanos.",
                status: "approved",
                statusNote: "Devoção Tradicional"
            },
            {
                id: "guia_portugal",
                name: "Nossa Senhora da Guia",
                country: "Portugal",
                countryFlag: "🇵🇹",
                date: "02 de Fevereiro",
                imageUrl: "/images/ns_guia.png",
                description: "Protetora dos navegantes",
                fullDescription: "Título antigo, Estrela do Mar que guia os navegantes e as almas.",
                status: "approved",
                statusNote: "Devoção Tradicional"
            },
            {
                id: "sameiro",
                name: "Nossa Senhora do Sameiro",
                country: "Portugal",
                countryFlag: "🇵🇹",
                date: "12 de Junho",
                imageUrl: "/images/ns_sameiro.png",
                description: "Imaculada Conceição de Braga - Segundo maior santuário",
                fullDescription: "O Santuário do Sameiro, em Braga, é o segundo maior santuário mariano de Portugal (após Fátima). Celebra o dogma da Imaculada Conceição.",
                status: "approved",
                statusNote: "Devoção Tradicional"
            },
            {
                id: "luz_portugal",
                name: "Nossa Senhora da Luz",
                country: "Portugal",
                countryFlag: "🇵🇹",
                date: "02 de Fevereiro",
                imageUrl: "/images/ns_luz.png",
                description: "A Mãe da Luz Verdadeira",
                fullDescription: "Devoção de Lisboa que celebra a Candelária. Maria apresenta a Luz (Jesus) ao mundo.",
                status: "approved",
                statusNote: "Devoção Tradicional"
            },
            {
                id: "gietrzwald",
                name: "Nossa Senhora de Gietrzwałd",
                country: "Polônia",
                countryFlag: "🇵🇱",
                date: "27 de Junho",
                imageUrl: "/images/ns_gietrzwald.png",
                description: "Única aparição aprovada na Polônia (1877)",
                fullDescription: "Maria apareceu falando polonês (idioma proibido pelos prussianos na época) pedindo a oração do Rosário. Fortaleceu a fé e a identidade nacional polonesa.",
                status: "approved"
            },
            {
                id: "lichen",
                name: "Nossa Senhora de Licheń",
                country: "Polônia",
                countryFlag: "🇵🇱",
                date: "2 de Julho",
                imageUrl: "/images/ns_lichen.png",
                description: "Dolorosa Rainha da Polônia",
                fullDescription: "Aparições a um soldado ferido em 1813 e depois a um pastor em 1850. O Santuário de Licheń é hoje a maior igreja da Polônia.",
                status: "approved"
            },
            {
                id: "medjugorje",
                name: "Rainha da Paz",
                country: "Bósnia e Herzegovina",
                countryFlag: "🇧🇦",
                date: "25 de Junho",
                imageUrl: "/images/ns_medjugorje.png",
                description: "Centro de espiritualidade e conversão",
                fullDescription: "As aparições iniciaram em 1981. O Papa Francisco autorizou peregrinações oficiais, reconhecendo os frutos espirituais, embora o estudo sobre as aparições continue.",
                status: "complex",
                statusNote: "Peregrinações autorizadas / Em estudo"
            },
            {
                id: "garabandal",
                name: "Nossa Senhora do Carmo de Garabandal",
                country: "Espanha",
                countryFlag: "🇪🇸",
                date: "18 de Junho",
                imageUrl: "/images/ns_garabandal.png",
                description: "Mensagens de conversão (anos 60)",
                fullDescription: "Aparições nos anos 60, não reconhecidas oficialmente, mas com forte devoção popular focada nas mensagens de conversão e penitência.",
                status: "not-approved",
                statusNote: "Não consta sobrenaturalidade (Non constat)"
            },
            {
                id: "bonate",
                name: "Nossa Senhora de Bonate",
                country: "Itália",
                countryFlag: "🇮🇹",
                date: "13 de Maio",
                imageUrl: "/images/ns_bonate.png",
                description: "Rainha da Família (1944)",
                fullDescription: "Aparições a Adelaide Roncalli em 1944. Maria pediu oração pela santidade da família. O caso é complexo e não houve aprovação definitiva.",
                status: "not-approved",
                statusNote: "Não aprovada"
            },
            {
                id: "czestochowa",
                name: "Nossa Senhora de Częstochowa",
                country: "Polônia",
                countryFlag: "🇵🇱",
                date: "26 de Agosto",
                imageUrl: "/images/ns_czestochowa.png",
                description: "A Virgem Negra de Jasna Góra",
                fullDescription: "Ícone bizantino venerado no mosteiro de Jasna Góra. A Virgem Negra é a Rainha e Padroeira da Polônia, símbolo de resistência e fé nacional. As cicatrizes no rosto da imagem lembram os ataques sofridos ao longo da história.",
                status: "approved"
            },
            {
                id: "laus",
                name: "Nossa Senhora de Laus",
                country: "França",
                countryFlag: "🇫🇷",
                date: "1 de Maio",
                imageUrl: "/images/ns_laus.png",
                description: "Refúgio dos pecadores (1664-1718)",
                fullDescription: "Aparições a Benoîte Rencurel que duraram 54 anos. Maria pediu um santuário para a conversão dos pecadores, oferecendo óleo da lâmpada do santuário como sinal de cura.",
                status: "approved"
            },
            {
                id: "vagos",
                name: "Nossa Senhora de Vagos",
                country: "Portugal",
                countryFlag: "🇵🇹",
                date: "Segunda-feira de Pentecostes",
                imageUrl: "/images/ns_vagos.png",
                description: "Padroeira dos pescadores da Ria de Aveiro",
                fullDescription: "Antiga devoção portuguesa. A imagem teria sido encontrada na praia, trazida pelo mar. É muito venerada na região de Aveiro.",
                status: "approved",
                statusNote: "Devoção Tradicional"
            },
            {
                id: "lapa_portugal",
                name: "Nossa Senhora da Lapa",
                country: "Portugal",
                countryFlag: "🇵🇹",
                date: "15 de Agosto",
                imageUrl: "/images/ns_lapa.png",
                description: "Encontrada na lapa (gruta) por uma pastorinha",
                fullDescription: "Em 1498, a menina Joana encontrou a imagem escondida numa gruta (lapa). Os jesuítas, incluindo Padre Anchieta, difundiram muito esta devoção.",
                status: "approved",
                statusNote: "Devoção Tradicional"
            }
        ]
    },
    {
        name: "Ásia",
        emoji: "🌏",
        devotions: [
            {
                id: "la_vang",
                name: "Nossa Senhora de La Vang",
                country: "Vietnã",
                countryFlag: "🇻🇳",
                date: "15 de Agosto",
                imageUrl: "/images/ns_la_vang.png",
                description: "Símbolo da resistência católica vietnamita",
                fullDescription: "Em 1798, Maria consolou católicos perseguidos na floresta de La Vang. É o grande santuário nacional do Vietnã.",
                status: "approved"
            },
            {
                id: "akita",
                name: "Nossa Senhora de Akita",
                country: "Japão",
                countryFlag: "🇯🇵",
                date: "13 de Outubro",
                imageUrl: "/images/ns_akita.png",
                description: "Estátua que chorou (1973)",
                fullDescription: "Aprovada pelo bispo local. Uma estátua chorou lágrimas e sangue 101 vezes. As mensagens alertam sobre a crise na fé e no mundo.",
                status: "approved"
            },
            {
                id: "sheshan",
                name: "Nossa Senhora de Sheshan",
                country: "China",
                countryFlag: "🇨🇳",
                date: "24 de Maio",
                imageUrl: "/images/ns_sheshan.png",
                description: "Auxiliadora dos Cristãos da China",
                fullDescription: "O Santuário de Sheshan em Xangai é o centro da fé católica na China. Em 24 de maio, a Igreja universal reza pela Igreja na China.",
                status: "approved"
            },
            {
                id: "velankanni",
                name: "Nossa Senhora da Boa Saúde",
                country: "Índia",
                countryFlag: "🇮🇳",
                date: "8 de Setembro",
                imageUrl: "/images/ns_velankanni.png",
                description: "A 'Lourdes do Oriente'",
                fullDescription: "Vailankanni (Velankanni) é um dos maiores centros de peregrinação da Ásia. Três milagres (aparições e salvamento de marinheiros) no século XVI deram origem à devoção.",
                status: "approved",
                statusNote: "Santuário Basílica"
            },
            {
                id: "soufanieh",
                name: "Nossa Senhora de Soufanieh",
                country: "Síria",
                countryFlag: "🇸🇾",
                date: "26 de Novembro",
                imageUrl: "/images/ns_soufanieh.png",
                description: "O milagre do azeite em Damasco (1982)",
                fullDescription: "Fenômeno recente em Damasco. Um ícone e as mãos da vidente Myrna Nazzour exalam azeite puro. As mensagens pedem a unidade entre católicos e ortodoxos (a Páscoa unificada).",
                status: "pending",
                statusNote: "Aprovada pelos bispos locais (Católico e Ortodoxo)"
            },
            {
                id: "libano",
                name: "Nossa Senhora do Líbano",
                country: "Líbano",
                countryFlag: "🇱🇧",
                date: "1 de Maio",
                imageUrl: "/images/ns_libano.png",
                description: "Harissa - Rainha do Líbano",
                fullDescription: "O santuário de Harissa, com a imensa estátua de Maria dominando a baía de Jounieh, é o símbolo da fé cristã no Líbano e local de peregrinação também para muçulmanos.",
                status: "approved"
            },
            {
                id: "naju",
                name: "Nossa Senhora de Naju",
                country: "Coreia do Sul",
                countryFlag: "🇰🇷",
                date: "19 de Outubro",
                imageUrl: "/images/ns_naju.png",
                description: "Lágrimas de sangue e milagres eucarísticos",
                fullDescription: "Fenômenos iniciados em 1985 com Julia Kim. A estátua chorou sangue e hóstias se transformaram em carne. A Igreja local (Arcebispo de Gwangju) emitiu decretos negativos, não reconhecendo a sobrenaturalidade.",
                status: "not-approved",
                statusNote: "Rejeitada pela Igreja Local"
            },
            {
                id: "lipa",
                name: "Maria, Medianeira de Todas as Graças",
                country: "Filipinas",
                countryFlag: "🇵🇭",
                date: "12 de Setembro",
                imageUrl: "/images/ns_filipinas.png",
                description: "Fenômeno das pétalas (1948)",
                fullDescription: "Chuva de pétalas em 1948. Devoção imensa, mas o Vaticano declarou recentemente (2024) que não consta sobrenaturalidade.",
                status: "not-approved",
                statusNote: "Julgamento negativo do Vaticano (2024)"
            },
            {
                id: "tra_kieu",
                name: "Nossa Senhora de Trà Kiệu",
                country: "Vietnã",
                countryFlag: "🇻🇳",
                date: "31 de Maio",
                imageUrl: "/images/ns_tra_kieu.png",
                description: "Proteção contra canhões (1885)",
                fullDescription: "Durante a perseguição aos cristãos em 1885, a Virgem apareceu sobre a igreja de Trà Kiệu, protegendo-a dos ataques de canhão do exército inimigo. Os soldados viam uma 'mulher de branco' no telhado que impedia os projéteis de atingir o alvo.",
                status: "approved"
            }
        ]
    },
    {
        name: "África e Oriente Médio",
        emoji: "🌍",
        devotions: [
            {
                id: "kibeho",
                name: "Nossa Senhora de Kibeho",
                country: "Ruanda",
                countryFlag: "🇷🇼",
                date: "28 de Novembro",
                imageUrl: "/images/ns_kibeho.png",
                description: "Mãe do Verbo - Única aparição aprovada na África",
                fullDescription: "Aparições (1981-1989) que profetizaram o genocídio de Ruanda. Mensagem urgente de conversão, oração e jejum.",
                status: "approved"
            },
            {
                id: "zeitoun",
                name: "Nossa Senhora de Zeitoun",
                country: "Egito",
                countryFlag: "🇪🇬",
                date: "2 de Abril",
                imageUrl: "/images/ns_zeitoun.png",
                description: "A Virgem de Luz (1968)",
                fullDescription: "Aparições públicas e silenciosas sobre a cúpula de uma igreja no Cairo, vistas por milhões. Aprovada pela Igreja Copta e respeitada pela Católica.",
                status: "approved",
                statusNote: "Aprovada pela Igreja Ortodoxa Copta"
            },
            {
                id: "africa",
                name: "Nossa Senhora da África",
                country: "Argélia",
                countryFlag: "🇩🇿",
                date: "30 de Abril",
                imageUrl: "/images/ns_africa.png",
                description: "Madame l'Afrique - Argel",
                fullDescription: "A Basílica de Nossa Senhora da África em Argel traz a inscrição: 'Nossa Senhora da África, rogai por nós e pelos muçulmanos'. Símbolo de diálogo e proteção no norte da África.",
                status: "approved",
                statusNote: "Basílica Histórica"
            }
        ]
    },
    {
        name: "Américas",
        emoji: "🌎",
        devotions: [
            // BRASIL - REGIONAIS
            {
                id: "seringueira",
                name: "N.S. da Seringueira",
                country: "Brasil (Acre)",
                countryFlag: "🇧🇷",
                date: "27 de Janeiro",
                imageUrl: "/images/ns_seringueira.png",
                description: "Padroeira dos Seringueiros",
                fullDescription: "Devoção amazônica profunda, protegendo os trabalhadores dos seringais. Símbolo da inculturação da fé na Amazônia.",
                status: "approved",
                statusNote: "Aprovação Local"
            },
            {
                id: "rainha_sertao",
                name: "N.S. Rainha do Sertão",
                country: "Brasil (Nordeste)",
                countryFlag: "🇧🇷",
                date: "11 de Fevereiro",
                imageUrl: "/images/ns_rainha_sertao.png",
                description: "Esperança do povo sertanejo",
                fullDescription: "Venerada no Santuário de Quixadá (CE), é a mãe que caminha com o povo nas dificuldades da seca e da vida no sertão.",
                status: "approved",
                statusNote: "Aprovação Local"
            },
            {
                id: "mel",
                name: "Nossa Senhora do Mel",
                country: "Brasil (Paraná)",
                countryFlag: "🇧🇷",
                date: "13 de Maio",
                imageUrl: "/images/ns_mel.png",
                description: "Fenômeno em Mirassol/SP e devoção PR",
                fullDescription: "Imagem que verte mel, sal e azeite. Fenômeno impressionante acompanhado com prudência pela Igreja.",
                status: "pending",
                statusNote: "Em Estudo"
            },
            {
                id: "cimbres",
                name: "N.S. das Graças de Cimbres",
                country: "Brasil (PE)",
                countryFlag: "🇧🇷",
                date: "6 de Agosto",
                imageUrl: "/images/ns_cimbres.png",
                description: "Aparicão profética (1936)",
                fullDescription: "Aparição a duas camponesas no agreste pernambucano, alertando sobre perigos políticos e sociais para o Brasil. Devoção crescente.",
                status: "pending",
                statusNote: "Em processo de reconhecimento"
            },
            {
                id: "cafe",
                name: "Nossa Senhora do Café",
                country: "Brasil (SP)",
                countryFlag: "🇧🇷",
                date: "9 de Agosto",
                imageUrl: "/images/ns_cafe.png",
                description: "Padroeira dos Cafeicultores",
                fullDescription: "Padroeira da riqueza agrícola do café, venerada em Espírito Santo do Pinhal (SP).",
                status: "approved",
                statusNote: "Aprovação Local"
            },
            {
                id: "escada",
                name: "Nossa Senhora da Escada",
                country: "Brasil (Barueri/SP)",
                countryFlag: "🇧🇷",
                date: "21 de Novembro",
                imageUrl: "/images/ns_escada.png",
                description: "Primeira oração de Anchieta",
                fullDescription: "Devoção jesuítica antiga. A lenda diz que São José de Anchieta esculpiu a imagem.",
                status: "approved",
                statusNote: "Histórica"
            },

            // REINADO DAS AMÉRICAS
            {
                id: "guadalupe",
                name: "Nossa Senhora de Guadalupe",
                country: "México",
                countryFlag: "🇲🇽",
                date: "12 de Dezembro",
                imageUrl: "/images/ns_guadalupe.png",
                description: "Imperatriz das Américas",
                fullDescription: "A aparição que mudou a história do continente em 1531. A imagem milagrosa na tilma de Juan Diego permanece inexplicável pela ciência.",
                status: "approved"
            },
            {
                id: "lujan",
                name: "Nossa Senhora de Luján",
                country: "Argentina",
                countryFlag: "🇦🇷",
                date: "8 de Maio",
                imageUrl: "/images/ns_lujan.png",
                description: "Padroeira da Argentina",
                fullDescription: "A imagem que escolheu ficar na Argentina em 1630. Coração espiritual da nação vizinha.",
                status: "approved"
            },
            {
                id: "copacabana",
                name: "Nossa Senhora de Copacabana",
                country: "Bolívia",
                countryFlag: "🇧🇴",
                date: "5 de Agosto",
                imageUrl: "/images/ns_copacabana.png",
                description: "Rainha da Bolívia",
                fullDescription: "Santuário no Lago Titicaca, unindo fé e cultura andina desde 1580.",
                status: "approved"
            },
            {
                id: "rosario_san_nicolas",
                name: "Nossa Senhora do Rosário",
                country: "Argentina",
                countryFlag: "🇦🇷",
                date: "25 de Setembro",
                imageUrl: "/images/ns_san_nicolas.png",
                description: "San Nicolás - Aparição recente (1983)",
                fullDescription: "Mensagens dadas a Gladys Motta entre 1983-1990 sobre a esperança e a consagração. Aprovada em 2016.",
                status: "approved"
            },
            {
                id: "bom_sucesso",
                name: "Nossa Senhora do Bom Sucesso",
                country: "Equador",
                countryFlag: "🇪🇨",
                date: "2 de Fevereiro",
                imageUrl: "/images/ns_bom_sucesso.png",
                description: "Profecias de Quito",
                fullDescription: "Aparições do século XVII com profecias impressionantes sobre a crise da fé no século XX.",
                status: "approved"
            },
            {
                id: "quinche",
                name: "Nossa Senhora do Quinche",
                country: "Equador",
                countryFlag: "🇪🇨",
                date: "21 de Novembro",
                imageUrl: "/images/ns_quinche.jpg",
                description: "Padroeira do Equador",
                fullDescription: "Devoção popular equatoriana, protetora contra desastres naturais.",
                status: "approved"
            },
            {
                id: "coromoto",
                name: "Nossa Senhora de Coromoto",
                country: "Venezuela",
                countryFlag: "🇻🇪",
                date: "11 de Setembro",
                imageUrl: "/images/ns_coromoto.png",
                description: "Padroeira da Venezuela (1652)",
                fullDescription: "Apareceu ao cacique Coromoto e sua família. Uma minúscula imagem ficou nas mãos do cacique. Símbolo da fé venezuelana.",
                status: "approved"
            },
            {
                id: "caridade",
                name: "Nossa Senhora da Caridade",
                country: "Cuba",
                countryFlag: "🇨🇺",
                date: "8 de Setembro",
                imageUrl: "/images/ns_caridade_cobre.png",
                description: "La Mambisa - Padroeira de Cuba",
                fullDescription: "Encontrada no mar por três homens (dois índios e um escravo negro) em 1612. Símbolo de identidade e esperança para todos os cubanos.",
                status: "approved"
            },
            {
                id: "caacupe",
                name: "Nossa Senhora de Caacupé",
                country: "Paraguai",
                countryFlag: "🇵🇾",
                date: "8 de Dezembro",
                imageUrl: "/images/ns_caacupe.png",
                description: "Padroeira do Paraguai",
                fullDescription: "Imagem esculpida por um índio guarani convertido em gratidão por ter sido salvo de inimigos.",
                status: "approved"
            },
            {
                id: "champion",
                name: "Nossa Senhora do Bom Socorro",
                country: "Estados Unidos",
                countryFlag: "🇺🇸",
                date: "9 de Outubro",
                imageUrl: "/images/ns_bom_socorro.png",
                description: "Única aparição aprovada nos EUA",
                fullDescription: "Em Wisconsin (1859), Maria pediu a educação religiosa das crianças. 'Rezem e ensinem'.",
                status: "approved"
            },
            {
                id: "america",
                name: "Nossa Senhora da América",
                country: "Estados Unidos",
                countryFlag: "🇺🇸",
                date: "26 de Setembro",
                imageUrl: "/images/ns_america.png",
                description: "Pureza e habitação da Trindade",
                fullDescription: "Aparições a Irmã Mildred Neuzil (anos 50). Foco na pureza interior e na família. Reconhecida por muitos bispos americanos.",
                status: "pending",
                statusNote: "Aprovação de culto local"
            },
            {
                id: "cuapa",
                name: "Nossa Senhora de Cuapa",
                country: "Nicarágua",
                countryFlag: "🇳🇮",
                date: "8 de Maio",
                imageUrl: "/images/ns_cuapa.png",
                description: "Reconciliação e paz (1980)",
                fullDescription: "Aparições a Bernardo Martinez, camponês e sacristão. Mensagem de paz numa Nicarágua dividida pela guerra civil. Aprovada pelos bispos.",
                status: "approved"
            },
            {
                id: "itati",
                name: "Nossa Senhora de Itatí",
                country: "Argentina",
                countryFlag: "🇦🇷",
                date: "9 de Julho",
                imageUrl: "/images/ns_itati.png",
                description: "Rainha do Rio Paraná",
                fullDescription: "Venerada na província de Corrientes. O nome guarani significa 'pedra branca'. É uma das devoções mais antigas da Argentina, datando do século XVII.",
                status: "approved"
            },
            {
                id: "san_juan_lagos",
                name: "N.S. de San Juan de los Lagos",
                country: "México",
                countryFlag: "🇲🇽",
                date: "2 de Fevereiro",
                imageUrl: "/images/ns_san_juan_lagos.png",
                description: "Segunda maior peregrinação do México",
                fullDescription: "Depois de Guadalupe, é o santuário mais visitado do México. A pequena imagem milagrosa é famosa por reviver uma menina trapezista em 1623.",
                status: "approved"
            },
            {
                id: "divina_pastora",
                name: "Divina Pastora",
                country: "Venezuela",
                countryFlag: "🇻🇪",
                date: "14 de Janeiro",
                imageUrl: "/images/ns_divina_pastora.png",
                description: "A Pastora das Almas - Procissão gigante",
                fullDescription: "A procissão da Divina Pastora em Barquisimeto reúne milhões de pessoas, sendo uma das maiores do mundo. A devoção nasceu na Espanha (Sevilha) mas encontrou na Venezuela seu maior fervor.",
                status: "approved"
            },
            // BRASIL - MAIS TÍTULOS
            {
                id: "itauna",
                name: "Nossa Senhora de Itaúna",
                country: "Brasil (MG)",
                countryFlag: "🇧🇷",
                date: "27 de Julho",
                imageUrl: "/images/ns_itauna.png",
                description: "Aparição na Gruta (1955)",
                fullDescription: "Aparição a três crianças em 1955 na cidade de Itaúna. Maria pediu oração e paz para o mundo.",
                status: "pending",
                statusNote: "Culto permitido"
            },
            {
                id: "brotas",
                name: "Nossa Senhora das Brotas",
                country: "Brasil (PR/SP)",
                countryFlag: "🇧🇷",
                date: "27 de Dezembro",
                imageUrl: "/images/ns_brotas.png",
                description: "Padroeira do Gado e da Agricultura",
                fullDescription: "Devoção trazida de Portugal para Piraí do Sul (PR). Um quadro de Nossa Senhora resistiu a um incêndio e foi encontrado intacto entre brotos verdes.",
                status: "approved"
            },
            {
                id: "santa_cabeca",
                name: "Nossa Senhora de Santa Cabeça",
                country: "Brasil (SP)",
                countryFlag: "🇧🇷",
                date: "8 de Dezembro",
                imageUrl: "/images/ns_santa_cabeca.png",
                description: "A cabeça milagrosa do rio Tietê",
                fullDescription: "Em 1829, pescadores encontraram apenas a cabeça de uma imagem no Rio Tietê. Milagres começaram a acontecer e um santuário foi construído em Cachoeira Paulista. É invocada para curar dores de cabeça e doenças mentais.",
                status: "approved",
                statusNote: "Santuário Diocesano"
            },
            {
                id: "bom_despacho",
                name: "Nossa Senhora do Bom Despacho",
                country: "Brasil (MG)",
                countryFlag: "🇧🇷",
                date: "Mai",
                imageUrl: "/images/ns_bom_despacho.png",
                description: "Padroeira de Bom Despacho",
                fullDescription: "Devoção portuguesa (dedicada à prontidão de Maria em atender, 'despachar' os pedidos). Muito forte em Minas Gerais.",
                status: "approved"
            }
        ]
    }
];
