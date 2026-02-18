// ============================================================
// ESTRUTURA DO DISTRITO FEDERAL
// Arquidiocese de Brasília: 4 Vicariatos, 15 Setores
// RCC DF: 15 Setores (numeração própria)
// ============================================================

export type TipoDevocao =
    | 'grupo_jovem'
    | 'movimento'
    | 'comunidade'
    | 'mosteiro'
    | 'fraternidade'
    | 'instituto'
    | 'rcc'
    | 'escola'
    | 'paroquia';

export const tipoLabel: Record<TipoDevocao, string> = {
    grupo_jovem: 'Grupo Jovem',
    movimento: 'Movimento',
    comunidade: 'Comunidade',
    mosteiro: 'Mosteiro / Convento',
    fraternidade: 'Fraternidade',
    instituto: 'Instituto',
    rcc: 'Grupo de Oração (RCC)',
    escola: 'Escola / Catequese',
    paroquia: 'Paróquia',
};

export const tipoColor: Record<TipoDevocao, string> = {
    grupo_jovem: 'bg-orange-100 text-orange-800 border-orange-300',
    movimento: 'bg-purple-100 text-purple-800 border-purple-300',
    comunidade: 'bg-teal-100 text-teal-800 border-teal-300',
    mosteiro: 'bg-stone-100 text-stone-800 border-stone-300',
    fraternidade: 'bg-indigo-100 text-indigo-800 border-indigo-300',
    instituto: 'bg-blue-100 text-blue-800 border-blue-300',
    rcc: 'bg-yellow-100 text-yellow-800 border-yellow-300',
    escola: 'bg-rose-100 text-rose-800 border-rose-300',
    paroquia: 'bg-amber-100 text-amber-800 border-amber-300',
};

export type Devocao = {
    id: string;
    nome: string;
    tipo: TipoDevocao;
    imageUrl: string;
    descricao: string;
    paroquia?: string;
    bairro?: string;
    horarios?: string;
    endereco?: string;
    enderecoMaps?: string; // URL do Google Maps
    contato?: string;
    instagram?: string;
    site?: string;
};

export type Vicariato = 'Norte' | 'Sul' | 'Centro' | 'Leste';

export const vicariatolColor: Record<Vicariato, string> = {
    Norte: 'bg-sky-100 text-sky-800 border-sky-300',
    Sul: 'bg-green-100 text-green-800 border-green-300',
    Centro: 'bg-amber-100 text-amber-800 border-amber-300',
    Leste: 'bg-rose-100 text-rose-800 border-rose-300',
};

export type RegiaoAdministrativa = {
    id: string;
    nome: string;
    setorArquidiocese: number;
    setorRCC: number;
    vicariato: Vicariato;
    devocoes: Devocao[];
};

// ============================================================
// TODAS AS REGIÕES ADMINISTRATIVAS DO DF
// 33 RAs oficiais + agrupamentos pastorais
// ============================================================
export const regioesAdministrativas: RegiaoAdministrativa[] = [

    // ── VICARIATO CENTRO ────────────────────────────────────────
    {
        id: 'asa_sul',
        nome: 'Asa Sul',
        setorArquidiocese: 1,
        setorRCC: 1,
        vicariato: 'Centro',
        devocoes: [
            {
                id: 'shalom_asa_sul',
                nome: 'Comunidade Shalom',
                tipo: 'comunidade',
                imageUrl: 'https://i.postimg.cc/RCdhqSqh/image.png',
                descricao: 'Comunidade Católica de vida e missão, com presença em toda a Asa Sul. Evangelização, formação e vida comunitária.',
                paroquia: 'Paróquia Nossa Senhora de Fátima',
                bairro: 'Asa Sul — SQS 308',
                horarios: 'Reuniões às quintas-feiras, 19h30',
                instagram: '@comunidadeshalom.bsb',
            },
            {
                id: 'cancao_nova_bsb',
                nome: 'Canção Nova Brasília',
                tipo: 'movimento',
                imageUrl: 'https://i.postimg.cc/SsBDK7HJ/Design-sem-nome-2.png',
                descricao: 'Comunidade de vida e missão com foco em evangelização pelos meios de comunicação. Transmissões ao vivo, retiros e eventos.',
                bairro: 'Asa Sul — SCS',
                horarios: 'Programação diária na TV e rádio',
                instagram: '@cancaonova',
                site: 'https://cancaonova.com',
            },
            {
                id: 'rcc_asa_sul',
                nome: 'Grupo de Oração RCC',
                tipo: 'rcc',
                imageUrl: 'https://i.postimg.cc/3Js86PzK/image.png',
                descricao: 'Grupo de Oração da Renovação Carismática Católica. Louvor, adoração, intercessão e evangelização.',
                paroquia: 'Paróquia São Francisco de Assis',
                bairro: 'Asa Sul — SQS 412',
                horarios: 'Sextas-feiras, 19h30',
            },
            {
                id: 'opus_dei_bsb',
                nome: 'Opus Dei',
                tipo: 'instituto',
                imageUrl: 'https://i.postimg.cc/Lsyj4XMh/4011bde1376c5422265a41f3a652c540.jpg',
                descricao: 'Prelazia pessoal da Igreja Católica. Santificação do trabalho e das atividades cotidianas. Círculos de formação e retiros.',
                bairro: 'Asa Sul',
                site: 'https://opusdei.org/pt-br',
            },
        ],
    },
    {
        id: 'asa_norte',
        nome: 'Asa Norte',
        setorArquidiocese: 3,
        setorRCC: 3,
        vicariato: 'Centro',
        devocoes: [
            {
                id: 'gj_catedral',
                nome: 'Grupo Jovem da Catedral',
                tipo: 'grupo_jovem',
                imageUrl: 'https://iili.io/KpAtISf.png',
                descricao: 'Grupo de jovens vinculado à Catedral Metropolitana de Brasília. Formação, missão e fraternidade para jovens de 15 a 30 anos.',
                paroquia: 'Catedral Metropolitana Nossa Senhora Aparecida',
                bairro: 'Asa Norte — Esplanada dos Ministérios',
                horarios: 'Sábados, 16h',
                instagram: '@gjcatedral.bsb',
            },
            {
                id: 'focolare_bsb',
                nome: 'Movimento Focolares',
                tipo: 'movimento',
                imageUrl: 'https://i.postimg.cc/2669v1gr/nsr.jpg',
                descricao: 'Movimento eclesial fundado por Chiara Lubich. Espiritualidade da unidade, diálogo e fraternidade universal.',
                bairro: 'Asa Norte',
                site: 'https://focolare.org/brasil',
            },
            {
                id: 'legiao_maria_bsb',
                nome: 'Legião de Maria',
                tipo: 'movimento',
                imageUrl: 'https://iili.io/fjEnxxn.jpg',
                descricao: 'Associação de leigos católicos que servem à Igreja sob a direção de Maria. Visitas domiciliares, evangelização e apostolado.',
                paroquia: 'Paróquia Nossa Senhora de Lourdes',
                bairro: 'Asa Norte — SQN 108',
                horarios: 'Reuniões semanais às terças-feiras, 19h',
            },
        ],
    },
    {
        id: 'cruzeiro',
        nome: 'Cruzeiro',
        setorArquidiocese: 2,
        setorRCC: 2,
        vicariato: 'Centro',
        devocoes: [
            {
                id: 'fraternidade_cruzeiro',
                nome: 'Fraternidade da Aliança',
                tipo: 'fraternidade',
                imageUrl: 'https://iili.io/fjGdG4I.jpg',
                descricao: 'Fraternidade de leigos consagrados que vivem em comunidade de vida e missão, com votos de pobreza, castidade e obediência.',
                paroquia: 'Paróquia São João Batista',
                bairro: 'Cruzeiro Velho',
                horarios: 'Missas comunitárias aos domingos, 10h',
            },
        ],
    },
    {
        id: 'sudoeste_octogonal',
        nome: 'Sudoeste / Octogonal',
        setorArquidiocese: 2,
        setorRCC: 2,
        vicariato: 'Centro',
        devocoes: [
            {
                id: 'gj_sudoeste',
                nome: 'Grupo Jovem Sudoeste',
                tipo: 'grupo_jovem',
                imageUrl: 'https://iili.io/fjEnRUl.jpg',
                descricao: 'Grupo de jovens católicos do Sudoeste. Encontros de formação, retiros, missões e celebrações.',
                paroquia: 'Paróquia Nossa Senhora do Perpétuo Socorro',
                bairro: 'Sudoeste — SQSW 302',
                horarios: 'Sábados, 17h',
                instagram: '@gjsudoeste.bsb',
            },
        ],
    },
    {
        id: 'lago_sul',
        nome: 'Lago Sul',
        setorArquidiocese: 11,
        setorRCC: 11,
        vicariato: 'Centro',
        devocoes: [
            {
                id: 'comunidade_sao_jose_lago_sul',
                nome: 'Comunidade São José',
                tipo: 'comunidade',
                imageUrl: 'https://iili.io/fjEOxIV.jpg',
                descricao: 'Comunidade de famílias católicas do Lago Sul. Encontros de oração, formação familiar e serviço aos pobres.',
                paroquia: 'Paróquia São José do Lago Sul',
                bairro: 'Lago Sul — QL 14',
                horarios: 'Quintas-feiras, 20h',
            },
        ],
    },
    {
        id: 'lago_norte',
        nome: 'Lago Norte',
        setorArquidiocese: 3,
        setorRCC: 3,
        vicariato: 'Centro',
        devocoes: [],
    },
    {
        id: 'varjao',
        nome: 'Varjão',
        setorArquidiocese: 3,
        setorRCC: 3,
        vicariato: 'Centro',
        devocoes: [],
    },
    {
        id: 'park_way',
        nome: 'Park Way',
        setorArquidiocese: 4,
        setorRCC: 4,
        vicariato: 'Centro',
        devocoes: [],
    },
    {
        id: 'jardim_botanico',
        nome: 'Jardim Botânico',
        setorArquidiocese: 11,
        setorRCC: 11,
        vicariato: 'Centro',
        devocoes: [],
    },
    {
        id: 'jardim_mangueiral',
        nome: 'Jardim Mangueiral',
        setorArquidiocese: 11,
        setorRCC: 11,
        vicariato: 'Centro',
        devocoes: [],
    },
    {
        id: 'scia_estrutural',
        nome: 'SCIA / Estrutural',
        setorArquidiocese: 4,
        setorRCC: 4,
        vicariato: 'Centro',
        devocoes: [],
    },

    // ── VICARIATO NORTE ─────────────────────────────────────────
    {
        id: 'sobradinho',
        nome: 'Sobradinho',
        setorArquidiocese: 8,
        setorRCC: 8,
        vicariato: 'Norte',
        devocoes: [],
    },
    {
        id: 'sobradinho_ii',
        nome: 'Sobradinho II',
        setorArquidiocese: 8,
        setorRCC: 8,
        vicariato: 'Norte',
        devocoes: [],
    },
    {
        id: 'planaltina',
        nome: 'Planaltina',
        setorArquidiocese: 15,
        setorRCC: 15,
        vicariato: 'Norte',
        devocoes: [],
    },
    {
        id: 'arapoanga',
        nome: 'Arapoanga / Planaltina Norte',
        setorArquidiocese: 15,
        setorRCC: 15,
        vicariato: 'Norte',
        devocoes: [],
    },
    {
        id: 'brazlandia',
        nome: 'Brazlândia',
        setorArquidiocese: 10,
        setorRCC: 10,
        vicariato: 'Norte',
        devocoes: [],
    },
    {
        id: 'fercal',
        nome: 'Fercal',
        setorArquidiocese: 8,
        setorRCC: 8,
        vicariato: 'Norte',
        devocoes: [],
    },

    // ── VICARIATO SUL ───────────────────────────────────────────
    {
        id: 'taguatinga',
        nome: 'Taguatinga',
        setorArquidiocese: 5,
        setorRCC: 5,
        vicariato: 'Sul',
        devocoes: [],
    },
    {
        id: 'ceilandia',
        nome: 'Ceilândia',
        setorArquidiocese: 6,
        setorRCC: 6,
        vicariato: 'Sul',
        devocoes: [],
    },
    {
        id: 'samambaia',
        nome: 'Samambaia',
        setorArquidiocese: 9,
        setorRCC: 9,
        vicariato: 'Sul',
        devocoes: [],
    },
    {
        id: 'aguas_claras',
        nome: 'Águas Claras',
        setorArquidiocese: 12,
        setorRCC: 12,
        vicariato: 'Sul',
        devocoes: [],
    },
    {
        id: 'vicente_pires',
        nome: 'Vicente Pires',
        setorArquidiocese: 12,
        setorRCC: 12,
        vicariato: 'Sul',
        devocoes: [],
    },
    {
        id: 'guara',
        nome: 'Guará',
        setorArquidiocese: 4,
        setorRCC: 4,
        vicariato: 'Sul',
        devocoes: [],
    },
    {
        id: 'gama',
        nome: 'Gama',
        setorArquidiocese: 7,
        setorRCC: 7,
        vicariato: 'Sul',
        devocoes: [],
    },
    {
        id: 'santa_maria',
        nome: 'Santa Maria',
        setorArquidiocese: 14,
        setorRCC: 14,
        vicariato: 'Sul',
        devocoes: [],
    },
    {
        id: 'recanto_emas',
        nome: 'Recanto das Emas',
        setorArquidiocese: 13,
        setorRCC: 13,
        vicariato: 'Sul',
        devocoes: [],
    },
    {
        id: 'riacho_fundo',
        nome: 'Riacho Fundo I',
        setorArquidiocese: 13,
        setorRCC: 13,
        vicariato: 'Sul',
        devocoes: [],
    },
    {
        id: 'riacho_fundo_ii',
        nome: 'Riacho Fundo II',
        setorArquidiocese: 13,
        setorRCC: 13,
        vicariato: 'Sul',
        devocoes: [],
    },
    {
        id: 'nucleo_bandeirante',
        nome: 'Núcleo Bandeirante',
        setorArquidiocese: 4,
        setorRCC: 4,
        vicariato: 'Sul',
        devocoes: [],
    },
    {
        id: 'candangolandia',
        nome: 'Candangolândia',
        setorArquidiocese: 4,
        setorRCC: 4,
        vicariato: 'Sul',
        devocoes: [],
    },
    {
        id: 'sol_nascente',
        nome: 'Sol Nascente / Pôr do Sol',
        setorArquidiocese: 6,
        setorRCC: 6,
        vicariato: 'Sul',
        devocoes: [],
    },

    // ── VICARIATO LESTE ─────────────────────────────────────────
    {
        id: 'paranoa',
        nome: 'Paranoá',
        setorArquidiocese: 11,
        setorRCC: 11,
        vicariato: 'Leste',
        devocoes: [
            {
                id: 'rcc_paranoa',
                nome: 'Grupo de Oração Espírito Santo',
                tipo: 'rcc',
                imageUrl: 'https://i.postimg.cc/3Js86PzK/image.png',
                descricao: 'Grupo de Oração da RCC com forte presença no Paranoá. Louvor, adoração, cura e libertação.',
                paroquia: 'Paróquia São Geraldo',
                bairro: 'Paranoá — Quadra 4',
                horarios: 'Sextas-feiras, 19h30',
                enderecoMaps: 'https://maps.google.com/?q=Paranoá,+Brasília+DF',
            },
            {
                id: 'gj_paranoa',
                nome: 'Grupo Jovem Paranoá',
                tipo: 'grupo_jovem',
                imageUrl: 'https://iili.io/KpAtISf.png',
                descricao: 'Grupo de jovens católicos do Paranoá. Formação humana e cristã, missão e fraternidade.',
                paroquia: 'Paróquia São Geraldo',
                bairro: 'Paranoá',
                horarios: 'Sábados, 15h',
                instagram: '@gjparanoa',
                enderecoMaps: 'https://maps.google.com/?q=Paranoá,+Brasília+DF',
            },
        ],
    },
    {
        id: 'itapoa',
        nome: 'Itapoã',
        setorArquidiocese: 11,
        setorRCC: 11,
        vicariato: 'Leste',
        devocoes: [
            {
                id: 'comunidade_itapoa',
                nome: 'Comunidade Filhos do Pai Eterno',
                tipo: 'comunidade',
                imageUrl: 'https://iili.io/fjEOxIV.jpg',
                descricao: 'Comunidade de vida e missão com foco na evangelização das periferias. Ação social, catequese e grupos de oração.',
                paroquia: 'Paróquia Nossa Senhora da Paz',
                bairro: 'Itapoã — Conjunto 5',
                horarios: 'Domingos, 9h (Missa comunitária)',
                instagram: '@comunidadeitapoa',
                enderecoMaps: 'https://maps.google.com/?q=Itapoã,+Brasília+DF',
            },
        ],
    },
    {
        id: 'sao_sebastiao',
        nome: 'São Sebastião',
        setorArquidiocese: 11,
        setorRCC: 11,
        vicariato: 'Leste',
        devocoes: [
            {
                id: 'movimento_ssebastiao',
                nome: 'Movimento Encontro de Casais com Cristo',
                tipo: 'movimento',
                imageUrl: 'https://i.postimg.cc/2669v1gr/nsr.jpg',
                descricao: 'Movimento de renovação matrimonial. Retiros de fim de semana para casais que desejam aprofundar a fé e o amor conjugal.',
                paroquia: 'Paróquia São Sebastião Mártir',
                bairro: 'São Sebastião — Trecho 3',
                horarios: 'Retiros mensais (consultar agenda)',
                instagram: '@eccbrasilia',
                enderecoMaps: 'https://maps.google.com/?q=São+Sebastião,+Brasília+DF',
            },
            {
                id: 'rcc_ssebastiao',
                nome: 'Grupo de Oração Maranathá',
                tipo: 'rcc',
                imageUrl: 'https://i.postimg.cc/RCdhqSqh/image.png',
                descricao: 'Grupo de Oração RCC com carisma de evangelização e cura. Reuniões abertas a todos.',
                paroquia: 'Paróquia São Sebastião Mártir',
                bairro: 'São Sebastião',
                horarios: 'Quintas-feiras, 19h30',
                enderecoMaps: 'https://maps.google.com/?q=São+Sebastião,+Brasília+DF',
            },
        ],
    },
    {
        id: 'nova_betania',
        nome: 'Nova Betânia',
        setorArquidiocese: 11,
        setorRCC: 11,
        vicariato: 'Leste',
        devocoes: [
            {
                id: 'fraternidade_betania',
                nome: 'Fraternidade Betânia',
                tipo: 'fraternidade',
                imageUrl: 'https://iili.io/fjGdG4I.jpg',
                descricao: 'Fraternidade de leigos consagrados inspirada na espiritualidade de Marta, Maria e Lázaro. Acolhida, oração e serviço.',
                paroquia: 'Paróquia Nossa Senhora de Betânia',
                bairro: 'Nova Betânia',
                horarios: 'Terças e sábados, 18h',
                instagram: '@fraternidadebetania.bsb',
                enderecoMaps: 'https://maps.google.com/?q=Nova+Betânia,+Brasília+DF',
            },
        ],
    },
];
