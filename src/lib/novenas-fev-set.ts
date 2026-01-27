// Novenas de Fevereiro a Setembro - Apenas estrutura (sem conteúdo dos dias)
type Novena = {
    saintName: string;
    novenaTitle: string;
    description: string;
    initialPrayer: string;
    finalPrayer: string;
    image?: string;
    days: {
        day: string;
        title: string;
        content: string;
    }[];
};

export const novenasFevereiroSetembro: Record<string, Novena> = {
    // FEVEREIRO
    nossa_senhora_lourdes: {
        saintName: "Nossa Senhora de Lourdes",
        novenaTitle: "Novena a Nossa Senhora de Lourdes",
        description: "Novena em preparação à festa de Nossa Senhora de Lourdes (11 de fevereiro).",
        image: "/images/ns_lourdes.png",
        initialPrayer: "",
        finalPrayer: "",
        days: Array.from({ length: 9 }, (_, i) => ({
            day: `Dia ${i + 1}`,
            title: `Dia ${i + 1} - Nossa Senhora de Lourdes`,
            content: ""
        }))
    },

    sagrada_face: {
        saintName: "Sagrada Face",
        novenaTitle: "Novena à Sagrada Face",
        description: "Novena em honra à Sagrada Face de Nosso Senhor Jesus Cristo.",
        initialPrayer: "",
        finalPrayer: "",
        days: Array.from({ length: 9 }, (_, i) => ({
            day: `Dia ${i + 1}`,
            title: `Dia ${i + 1} - Sagrada Face`,
            content: ""
        }))
    },

    catedra_sao_pedro: {
        saintName: "Cátedra de São Pedro",
        novenaTitle: "Novena à Cátedra de São Pedro",
        description: "Novena em preparação à festa da Cátedra de São Pedro (22 de fevereiro).",
        initialPrayer: "",
        finalPrayer: "",
        days: Array.from({ length: 9 }, (_, i) => ({
            day: `Dia ${i + 1}`,
            title: `Dia ${i + 1} - Cátedra de São Pedro`,
            content: ""
        }))
    },

    // MARÇO
    sao_patricio: {
        saintName: "São Patrício",
        novenaTitle: "Novena a São Patrício",
        description: "Novena em honra a São Patrício, apóstolo da Irlanda (17 de março).",
        initialPrayer: "",
        finalPrayer: "",
        days: Array.from({ length: 9 }, (_, i) => ({
            day: `Dia ${i + 1}`,
            title: `Dia ${i + 1} - São Patrício`,
            content: ""
        }))
    },

    sao_jose_marco: {
        saintName: "São José",
        novenaTitle: "Novena a São José (Março)",
        description: "Novena em preparação à festa de São José, esposo de Maria (19 de março).",
        initialPrayer: "",
        finalPrayer: "",
        days: Array.from({ length: 9 }, (_, i) => ({
            day: `Dia ${i + 1}`,
            title: `Dia ${i + 1} - São José`,
            content: ""
        }))
    },

    anunciacao: {
        saintName: "Anunciação do Senhor",
        novenaTitle: "Novena da Anunciação",
        description: "Novena em preparação à solenidade da Anunciação do Senhor (25 de março).",
        initialPrayer: "",
        finalPrayer: "",
        days: Array.from({ length: 9 }, (_, i) => ({
            day: `Dia ${i + 1}`,
            title: `Dia ${i + 1} - Anunciação`,
            content: ""
        }))
    },

    // ABRIL
    divina_misericordia: {
        saintName: "Divina Misericórdia",
        novenaTitle: "Novena da Divina Misericórdia",
        description: "Novena iniciada na Sexta-feira Santa em preparação ao Domingo da Divina Misericórdia.",
        initialPrayer: "",
        finalPrayer: "",
        days: Array.from({ length: 9 }, (_, i) => ({
            day: `Dia ${i + 1}`,
            title: `Dia ${i + 1} - Divina Misericórdia`,
            content: ""
        }))
    },

    santo_expedito: {
        saintName: "Santo Expedito",
        novenaTitle: "Novena a Santo Expedito",
        description: "Novena em honra a Santo Expedito (19 de abril).",
        initialPrayer: "",
        finalPrayer: "",
        days: Array.from({ length: 9 }, (_, i) => ({
            day: `Dia ${i + 1}`,
            title: `Dia ${i + 1} - Santo Expedito`,
            content: ""
        }))
    },

    sao_jorge: {
        saintName: "São Jorge",
        novenaTitle: "Novena a São Jorge",
        description: "Novena em honra a São Jorge, mártir e guerreiro da fé (23 de abril).",
        initialPrayer: "",
        finalPrayer: "",
        days: Array.from({ length: 9 }, (_, i) => ({
            day: `Dia ${i + 1}`,
            title: `Dia ${i + 1} - São Jorge`,
            content: ""
        }))
    },

    sao_marcos: {
        saintName: "São Marcos Evangelista",
        novenaTitle: "Novena a São Marcos",
        description: "Novena em honra a São Marcos Evangelista (25 de abril).",
        initialPrayer: "",
        finalPrayer: "",
        days: Array.from({ length: 9 }, (_, i) => ({
            day: `Dia ${i + 1}`,
            title: `Dia ${i + 1} - São Marcos`,
            content: ""
        }))
    },

    santa_gianna_beretta: {
        saintName: "Santa Gianna Beretta",
        novenaTitle: "Novena a Santa Gianna Beretta",
        description: "Novena em honra a Santa Gianna Beretta Molla (28 de abril).",
        initialPrayer: "",
        finalPrayer: "",
        days: Array.from({ length: 9 }, (_, i) => ({
            day: `Dia ${i + 1}`,
            title: `Dia ${i + 1} - Santa Gianna Beretta`,
            content: ""
        }))
    },

    santa_catarina_siena: {
        saintName: "Santa Catarina de Siena",
        novenaTitle: "Novena a Santa Catarina de Siena",
        description: "Novena em honra a Santa Catarina de Siena, Doutora da Igreja (29 de abril).",
        initialPrayer: "",
        finalPrayer: "",
        days: Array.from({ length: 9 }, (_, i) => ({
            day: `Dia ${i + 1}`,
            title: `Dia ${i + 1} - Santa Catarina de Siena`,
            content: ""
        }))
    },

    sao_jose_operario: {
        saintName: "São José Operário",
        novenaTitle: "Novena a São José Operário",
        description: "Novena em honra a São José Operário (1º de maio).",
        initialPrayer: "",
        finalPrayer: "",
        days: Array.from({ length: 9 }, (_, i) => ({
            day: `Dia ${i + 1}`,
            title: `Dia ${i + 1} - São José Operário`,
            content: ""
        }))
    },

    // MAIO
    nossa_senhora_fatima: {
        saintName: "Nossa Senhora de Fátima",
        novenaTitle: "Novena a Nossa Senhora de Fátima",
        description: "Novena em preparação à festa de Nossa Senhora de Fátima (13 de maio).",
        image: "/images/ns_fatima.png",
        initialPrayer: "",
        finalPrayer: "",
        days: Array.from({ length: 9 }, (_, i) => ({
            day: `Dia ${i + 1}`,
            title: `Dia ${i + 1} - Nossa Senhora de Fátima`,
            content: ""
        }))
    },

    santa_rita_cassia: {
        saintName: "Santa Rita de Cássia",
        novenaTitle: "Novena a Santa Rita de Cássia",
        description: "Novena em honra a Santa Rita de Cássia, santa das causas impossíveis (22 de maio).",
        initialPrayer: "",
        finalPrayer: "",
        days: Array.from({ length: 9 }, (_, i) => ({
            day: `Dia ${i + 1}`,
            title: `Dia ${i + 1} - Santa Rita de Cássia`,
            content: ""
        }))
    },

    pentecostes: {
        saintName: "Pentecostes",
        novenaTitle: "Novena de Pentecostes",
        description: "Novena em preparação à solenidade de Pentecostes.",
        initialPrayer: "",
        finalPrayer: "",
        days: Array.from({ length: 9 }, (_, i) => ({
            day: `Dia ${i + 1}`,
            title: `Dia ${i + 1} - Pentecostes`,
            content: ""
        }))
    },

    nossa_senhora_auxiliadora: {
        saintName: "Nossa Senhora Auxiliadora",
        novenaTitle: "Novena a Nossa Senhora Auxiliadora",
        description: "Novena em honra a Nossa Senhora Auxiliadora (24 de maio).",
        image: "/images/ns_auxiliadora.png",
        initialPrayer: "",
        finalPrayer: "",
        days: Array.from({ length: 9 }, (_, i) => ({
            day: `Dia ${i + 1}`,
            title: `Dia ${i + 1} - Nossa Senhora Auxiliadora`,
            content: ""
        }))
    },

    sao_filipe_neri: {
        saintName: "São Filipe Néri",
        novenaTitle: "Novena a São Filipe Néri",
        description: "Novena em honra a São Filipe Néri (26 de maio).",
        initialPrayer: "",
        finalPrayer: "",
        days: Array.from({ length: 9 }, (_, i) => ({
            day: `Dia ${i + 1}`,
            title: `Dia ${i + 1} - São Filipe Néri`,
            content: ""
        }))
    },

    visitacao: {
        saintName: "Visitação de Maria",
        novenaTitle: "Novena da Visitação",
        description: "Novena em preparação à festa da Visitação de Maria (31 de maio).",
        initialPrayer: "",
        finalPrayer: "",
        days: Array.from({ length: 9 }, (_, i) => ({
            day: `Dia ${i + 1}`,
            title: `Dia ${i + 1} - Visitação`,
            content: ""
        }))
    },

    // JUNHO
    santo_antonio_padua: {
        saintName: "Santo Antônio de Pádua",
        novenaTitle: "Trezena de Santo Antônio",
        description: "Trezena (13 dias) em honra a Santo Antônio de Pádua (13 de junho).",
        initialPrayer: "",
        finalPrayer: "",
        days: Array.from({ length: 13 }, (_, i) => ({
            day: `Dia ${i + 1}`,
            title: `Dia ${i + 1} - Santo Antônio`,
            content: ""
        }))
    },

    sagrado_coracao: {
        saintName: "Sagrado Coração de Jesus",
        novenaTitle: "Novena ao Sagrado Coração",
        description: "Novena em preparação à solenidade do Sagrado Coração de Jesus.",
        initialPrayer: "",
        finalPrayer: "",
        days: Array.from({ length: 9 }, (_, i) => ({
            day: `Dia ${i + 1}`,
            title: `Dia ${i + 1} - Sagrado Coração`,
            content: ""
        }))
    },

    imaculado_coracao: {
        saintName: "Imaculado Coração de Maria",
        novenaTitle: "Novena ao Imaculado Coração",
        description: "Novena em honra ao Imaculado Coração de Maria.",
        initialPrayer: "",
        finalPrayer: "",
        days: Array.from({ length: 9 }, (_, i) => ({
            day: `Dia ${i + 1}`,
            title: `Dia ${i + 1} - Imaculado Coração`,
            content: ""
        }))
    },

    sao_joao_batista: {
        saintName: "São João Batista",
        novenaTitle: "Novena a São João Batista",
        description: "Novena em preparação à natividade de São João Batista (24 de junho).",
        initialPrayer: "",
        finalPrayer: "",
        days: Array.from({ length: 9 }, (_, i) => ({
            day: `Dia ${i + 1}`,
            title: `Dia ${i + 1} - São João Batista`,
            content: ""
        }))
    },

    sao_pedro_paulo: {
        saintName: "São Pedro e São Paulo",
        novenaTitle: "Novena a São Pedro e São Paulo",
        description: "Novena em honra aos apóstolos São Pedro e São Paulo (29 de junho).",
        initialPrayer: "",
        finalPrayer: "",
        days: Array.from({ length: 9 }, (_, i) => ({
            day: `Dia ${i + 1}`,
            title: `Dia ${i + 1} - São Pedro e São Paulo`,
            content: ""
        }))
    },

    // JULHO
    nossa_senhora_carmo: {
        saintName: "Nossa Senhora do Carmo",
        novenaTitle: "Novena a Nossa Senhora do Carmo",
        description: "Novena em honra a Nossa Senhora do Carmo (16 de julho).",
        initialPrayer: "",
        finalPrayer: "",
        days: Array.from({ length: 9 }, (_, i) => ({
            day: `Dia ${i + 1}`,
            title: `Dia ${i + 1} - Nossa Senhora do Carmo`,
            content: ""
        }))
    },

    santa_ana_joaquim: {
        saintName: "Sant'Ana e São Joaquim",
        novenaTitle: "Novena a Sant'Ana e São Joaquim",
        description: "Novena em honra a Sant'Ana e São Joaquim, pais de Maria (26 de julho).",
        initialPrayer: "",
        finalPrayer: "",
        days: Array.from({ length: 9 }, (_, i) => ({
            day: `Dia ${i + 1}`,
            title: `Dia ${i + 1} - Sant'Ana e São Joaquim`,
            content: ""
        }))
    },

    // AGOSTO
    assuncao_nossa_senhora: {
        saintName: "Assunção de Nossa Senhora",
        novenaTitle: "Novena da Assunção",
        description: "Novena em preparação à solenidade da Assunção de Nossa Senhora (15 de agosto).",
        image: "/images/ns_assuncao.png",
        initialPrayer: "",
        finalPrayer: "",
        days: Array.from({ length: 9 }, (_, i) => ({
            day: `Dia ${i + 1}`,
            title: `Dia ${i + 1} - Assunção`,
            content: ""
        }))
    },

    // SETEMBRO
    natividade_nossa_senhora: {
        saintName: "Natividade de Nossa Senhora",
        novenaTitle: "Novena da Natividade de Maria",
        description: "Novena em preparação à festa da Natividade de Nossa Senhora (8 de setembro).",
        image: "/images/ns_natividade.png",
        initialPrayer: "",
        finalPrayer: "",
        days: Array.from({ length: 9 }, (_, i) => ({
            day: `Dia ${i + 1}`,
            title: `Dia ${i + 1} - Natividade de Maria`,
            content: ""
        }))
    },

    nossa_senhora_dores: {
        saintName: "Nossa Senhora das Dores",
        novenaTitle: "Novena a Nossa Senhora das Dores",
        description: "Novena em honra a Nossa Senhora das Dores (15 de setembro).",
        image: "/images/ns_dores_setembro.png",
        initialPrayer: "",
        finalPrayer: "",
        days: Array.from({ length: 9 }, (_, i) => ({
            day: `Dia ${i + 1}`,
            title: `Dia ${i + 1} - Nossa Senhora das Dores`,
            content: ""
        }))
    },

    sao_miguel_arcanjo: {
        saintName: "São Miguel Arcanjo",
        novenaTitle: "Novena a São Miguel Arcanjo",
        description: "Novena em honra a São Miguel, São Gabriel e São Rafael, arcanjos (29 de setembro).",
        initialPrayer: "",
        finalPrayer: "",
        days: Array.from({ length: 9 }, (_, i) => ({
            day: `Dia ${i + 1}`,
            title: `Dia ${i + 1} - São Miguel Arcanjo`,
            content: ""
        }))
    },

    // NOVENAS ADICIONAIS
    santa_josefina_bakhita: {
        saintName: "Santa Josefina Bakhita",
        novenaTitle: "Novena a Santa Josefina Bakhita",
        description: "Ex-escrava e santa da esperança. Peça libertação das amarras.",
        initialPrayer: "",
        finalPrayer: "",
        days: Array.from({ length: 9 }, (_, i) => ({
            day: `Dia ${i + 1}`,
            title: `Dia ${i + 1} - Santa Josefina Bakhita`,
            content: ""
        }))
    },

    sao_bento_transito: {
        saintName: "São Bento (Trânsito)",
        novenaTitle: "Novena a São Bento (Trânsito)",
        description: "Pai dos monges. Peça proteção contra o mal e ciladas do inimigo.",
        initialPrayer: "",
        finalPrayer: "",
        days: Array.from({ length: 9 }, (_, i) => ({
            day: `Dia ${i + 1}`,
            title: `Dia ${i + 1} - São Bento`,
            content: ""
        }))
    },

    sao_matias: {
        saintName: "São Matias",
        novenaTitle: "Novena a São Matias",
        description: "O apóstolo escolhido para completar os doze. Fidelidade ao chamado.",
        initialPrayer: "",
        finalPrayer: "",
        days: Array.from({ length: 9 }, (_, i) => ({
            day: `Dia ${i + 1}`,
            title: `Dia ${i + 1} - São Matias`,
            content: ""
        }))
    },

    nossa_senhora_caravaggio: {
        saintName: "Nossa Senhora de Caravaggio",
        novenaTitle: "Novena a N.S. de Caravaggio",
        description: "Aparição na Itália. Peça consolo nas aflições e bonança.",
        image: "/images/ns_caravaggio.png",
        initialPrayer: "",
        finalPrayer: "",
        days: Array.from({ length: 9 }, (_, i) => ({
            day: `Dia ${i + 1}`,
            title: `Dia ${i + 1} - N.S. de Caravaggio`,
            content: ""
        }))
    },

    santo_onofre: {
        saintName: "Santo Onofre",
        novenaTitle: "Novena a Santo Onofre",
        description: "Eremita do deserto. Intercessor contra vícios e pelo sustento.",
        initialPrayer: "",
        finalPrayer: "",
        days: Array.from({ length: 9 }, (_, i) => ({
            day: `Dia ${i + 1}`,
            title: `Dia ${i + 1} - Santo Onofre`,
            content: ""
        }))
    },

    nossa_senhora_perpetuo_socorro: {
        saintName: "Nossa Senhora do Perpétuo Socorro",
        novenaTitle: "Novena a N.S. do Perpétuo Socorro",
        description: "O auxílio materno e constante em todas as aflições e necessidades.",
        image: "/images/ns_perpetuo_socorro.png",
        initialPrayer: "",
        finalPrayer: "",
        days: Array.from({ length: 9 }, (_, i) => ({
            day: `Dia ${i + 1}`,
            title: `Dia ${i + 1} - N.S. Perpétuo Socorro`,
            content: ""
        }))
    },

    sao_tome_apostolo: {
        saintName: "São Tomé Apóstolo",
        novenaTitle: "Novena a São Tomé",
        description: "Peça a fé para crer no Ressuscitado: 'Meu Senhor e meu Deus'.",
        initialPrayer: "",
        finalPrayer: "",
        days: Array.from({ length: 9 }, (_, i) => ({
            day: `Dia ${i + 1}`,
            title: `Dia ${i + 1} - São Tomé`,
            content: ""
        }))
    },

    santa_paulina: {
        saintName: "Santa Paulina",
        novenaTitle: "Novena a Santa Paulina",
        description: "Primeira santa do Brasil. Dedicação total aos doentes e pobres.",
        initialPrayer: "",
        finalPrayer: "",
        days: Array.from({ length: 9 }, (_, i) => ({
            day: `Dia ${i + 1}`,
            title: `Dia ${i + 1} - Santa Paulina`,
            content: ""
        }))
    },

    sao_jose_anchieta: {
        saintName: "São José de Anchieta",
        novenaTitle: "Novena a São José de Anchieta",
        description: "Apóstolo do Brasil. Exemplo de evangelização e amor à cultura.",
        initialPrayer: "",
        finalPrayer: "",
        days: Array.from({ length: 9 }, (_, i) => ({
            day: `Dia ${i + 1}`,
            title: `Dia ${i + 1} - São José de Anchieta`,
            content: ""
        }))
    }
};
