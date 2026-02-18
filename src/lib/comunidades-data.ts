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

export type VicariatoMetadata = {
    bispo: string;
    vigario: string;
    secretaria: string;
    telefone: string;
    email: string;
    sede?: string;
};

export const vicariatosInfo: Record<Vicariato, VicariatoMetadata> = {
    Centro: {
        bispo: 'Dom Ricardo Hoepers',
        vigario: 'Padre Carlos Fernando Hernandez Sanchez',
        secretaria: 'Daniele Rodrigues',
        telefone: '61 99428 6645',
        email: 'vicariato.centro@arquidiocesedebrasilia.org.br',
    },
    Norte: {
        bispo: 'Dom Antonio Aparecido de Marcos Filho',
        vigario: 'Padre Rafael Souza dos Santos',
        secretaria: 'Renata',
        telefone: '61 99592 1231',
        email: 'mab.vicariatocentro@arquidiocesedebrasilia.org.br', // Email no texto do usuário diz centro, mas está no bloco Norte. Vou manter o do texto.
        sede: 'Paróquia Nossa Senhora do Rosário de Fátima',
    },
    Sul: {
        bispo: 'Dom Denilson Geraldo, SAC',
        vigario: 'Padre Antônio Carlos de Araújo',
        secretaria: 'Raquel',
        telefone: '61 992942504',
        email: 'mab.vicariatosul@arquidiocesedebrasilia.org.br',
        sede: 'Ao lado da Paróquia Nossa Senhora de Fátima',
    },
    Leste: {
        bispo: 'Dom Vicente Tavares',
        vigario: 'Padre Alex Novais de Brito',
        secretaria: 'Eloy',
        telefone: '61 99322 6709',
        email: 'vicariato.leste@arquidiocesedebrasilia.org.br',
    },
};

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
        id: 'asa_sul_i',
        nome: 'Asa Sul (Setor I)',
        setorArquidiocese: 1,
        setorRCC: 1,
        vicariato: 'Centro',
        devocoes: [
            { id: 'sj_bosco', nome: 'Santuário São João Bosco', tipo: 'paroquia', imageUrl: 'https://iili.io/fjEOxIV.jpg', descricao: 'Santuário do Setor I W/Sul.', bairro: 'Asa Sul' },
            { id: 'santa_cruz_edwiges', nome: 'Paróquia Santa Cruz e Santa Edwiges', tipo: 'paroquia', imageUrl: 'https://iili.io/fjEOxIV.jpg', descricao: 'Paróquia do Setor I W/Sul.', bairro: 'Asa Sul' },
            { id: 'ns_fatima_santuario', nome: 'Santuário Nossa Senhora de Fátima', tipo: 'paroquia', imageUrl: 'https://iili.io/fjEOxIV.jpg', descricao: 'Santuário do Setor I W/Sul.', bairro: 'Asa Sul' },
            { id: 'sj_tadeu_as', nome: 'Paróquia São Judas Tadeu', tipo: 'paroquia', imageUrl: 'https://iili.io/fjEOxIV.jpg', descricao: 'Paróquia do Setor I W/Sul.', bairro: 'Asa Sul' },
            { id: 'santo_antonio_santuario', nome: 'Santuário Santo Antônio', tipo: 'paroquia', imageUrl: 'https://iili.io/fjEOxIV.jpg', descricao: 'Santuário do Setor I W/Sul.', bairro: 'Asa Sul' },
            { id: 'ns_carmo_as', nome: 'Paróquia Nossa Senhora do Carmo', tipo: 'paroquia', imageUrl: 'https://iili.io/fjEOxIV.jpg', descricao: 'Paróquia do Setor I W/Sul.', bairro: 'Asa Sul' },
            { id: 'ns_guadalupe', nome: 'Paróquia Nossa Senhora de Guadalupe', tipo: 'paroquia', imageUrl: 'https://iili.io/fjEOxIV.jpg', descricao: 'Paróquia do Setor I W/Sul.', bairro: 'Asa Sul' },
            { id: 'santo_cura_ars', nome: 'Paróquia Santo Cura D’Ars', tipo: 'paroquia', imageUrl: 'https://iili.io/fjEOxIV.jpg', descricao: 'Paróquia do Setor I W/Sul.', bairro: 'Asa Sul' },
            { id: 'sao_camilo_lellis', nome: 'Paróquia São Camilo Lellis', tipo: 'paroquia', imageUrl: 'https://iili.io/fjEOxIV.jpg', descricao: 'Paróquia do Setor I W/Sul.', bairro: 'Asa Sul' },
        ],
    },
    { id: 'sudoeste', nome: 'Sudoeste', setorArquidiocese: 1, setorRCC: 1, vicariato: 'Centro', devocoes: [{ id: 'sao_pio', nome: 'Paróquia São Pio de Pietrelcina', tipo: 'paroquia', imageUrl: 'https://iili.io/fjEOxIV.jpg', descricao: 'Setor I Sudoeste.', bairro: 'Sudoeste' }] },
    { id: 'cruzeiro_velho', nome: 'Cruzeiro Velho', setorArquidiocese: 1, setorRCC: 1, vicariato: 'Centro', devocoes: [{ id: 'ns_dores_cruzeiro', nome: 'Paróquia Nossa Senhora das Dores', tipo: 'paroquia', imageUrl: 'https://iili.io/fjEOxIV.jpg', descricao: 'Setor I Cruzeiro Velho.', bairro: 'Cruzeiro Velho' }] },
    { id: 'cruzeiro_novo', nome: 'Cruzeiro Novo', setorArquidiocese: 1, setorRCC: 1, vicariato: 'Centro', devocoes: [{ id: 'santa_teresinha_cruzeiro', nome: 'Paróquia Santa Teresinha', tipo: 'paroquia', imageUrl: 'https://iili.io/fjEOxIV.jpg', descricao: 'Setor I Cruzeiro Novo.', bairro: 'Cruzeiro Novo' }] },
    {
        id: 'octogonal',
        nome: 'Octogonal',
        setorArquidiocese: 1,
        setorRCC: 1,
        vicariato: 'Centro',
        devocoes: [
            { id: 'rainha_paz_paroquia', nome: 'Paróquia Rainha da Paz', tipo: 'paroquia', imageUrl: 'https://iili.io/fjEOxIV.jpg', descricao: 'Setor I Octogonal.', bairro: 'Octogonal' },
            { id: 'catedral_militar', nome: 'Catedral Militar Rainha da Paz', tipo: 'paroquia', imageUrl: 'https://iili.io/fjEOxIV.jpg', descricao: 'Catedral Militar - Setor I.', bairro: 'Eixo Monumental' }
        ]
    },
    {
        id: 'asa_sul_l2',
        nome: 'Asa Sul L2',
        setorArquidiocese: 2,
        setorRCC: 2,
        vicariato: 'Centro',
        devocoes: [
            { id: 'catedral_bsb', nome: 'Catedral Nossa Senhora Aparecida', tipo: 'paroquia', imageUrl: 'https://iili.io/fjEOxIV.jpg', descricao: 'Catedral - Setor II L/Sul.', bairro: 'Asa Sul' },
            { id: 'ssmo_sacramento', nome: 'Paróquia Ssmº. Sacramento', tipo: 'paroquia', imageUrl: 'https://iili.io/fjEOxIV.jpg', descricao: 'Paróquia do Setor II L/Sul.', bairro: 'Asa Sul' },
            { id: 'santa_rita_as', nome: 'Paróquia Santa Rita de Cássia', tipo: 'paroquia', imageUrl: 'https://iili.io/fjEOxIV.jpg', descricao: 'Paróquia do Setor II L/Sul.', bairro: 'Asa Sul' },
            { id: 'sagrado_coracao_merces', nome: 'Pª Sagrado Coração de Jesus e N.s das Mercês', tipo: 'paroquia', imageUrl: 'https://iili.io/fjEOxIV.jpg', descricao: 'Paróquia do Setor II L/Sul.', bairro: 'Asa Sul' },
            { id: 'bom_jesus_as', nome: 'Paróquia Bom Jesus', tipo: 'paroquia', imageUrl: 'https://iili.io/fjEOxIV.jpg', descricao: 'Paróquia do Setor II L/Sul.', bairro: 'Asa Sul' },
        ],
    },
    { id: 'vila_planalto', nome: 'Vila Planalto', setorArquidiocese: 2, setorRCC: 2, vicariato: 'Centro', devocoes: [{ id: 'ns_rosario_pompeia', nome: 'Paróquia Nossa Senhora do Rosário de Pompéia', tipo: 'paroquia', imageUrl: 'https://iili.io/fjEOxIV.jpg', descricao: 'Setor II Vila Planalto.', bairro: 'Vila Planalto' }] },
    {
        id: 'lago_sul_ii',
        nome: 'Lago Sul (Setor II)',
        setorArquidiocese: 2,
        setorRCC: 2,
        vicariato: 'Centro',
        devocoes: [
            { id: 'ns_perpetuo_socorro_ls', nome: 'Paróquia Nossa Senhora do Perpétuo Socorro', tipo: 'paroquia', imageUrl: 'https://iili.io/fjEOxIV.jpg', descricao: 'Setor II Lago Sul.', bairro: 'Lago Sul' },
            { id: 'ns_nazare_ls', nome: 'Paróquia Nossa Senhora de Nazaré', tipo: 'paroquia', imageUrl: 'https://iili.io/fjEOxIV.jpg', descricao: 'Setor II Lago Sul.', bairro: 'Lago Sul' },
            { id: 'sao_pedro_alcantara', nome: 'Paróquia S. Pedro Alcântara', tipo: 'paroquia', imageUrl: 'https://iili.io/fjEOxIV.jpg', descricao: 'Setor II Lago Sul.', bairro: 'Lago Sul' },
        ],
    },
    {
        id: 'park_way_ii',
        nome: 'Park Way (Setor II)',
        setorArquidiocese: 2,
        setorRCC: 2,
        vicariato: 'Centro',
        devocoes: [
            { id: 'sagrada_familia_pw', nome: 'Paróquia Sagrada Família', tipo: 'paroquia', imageUrl: 'https://iili.io/fjEOxIV.jpg', descricao: 'Setor II Park Way.', bairro: 'Park Way' },
            { id: 'esp_santo_paraclito', nome: 'Paróquia Div. Esp.Sto Paraclito', tipo: 'paroquia', imageUrl: 'https://iili.io/fjEOxIV.jpg', descricao: 'Setor II Park Way.', bairro: 'Park Way' },
        ],
    },
    { id: 'guara_i', nome: 'Guará I', setorArquidiocese: 4, setorRCC: 4, vicariato: 'Centro', devocoes: [{ id: 'sao_paulo_apostolo_g1', nome: 'Paróquia São Paulo Apóstolo', tipo: 'paroquia', imageUrl: 'https://iili.io/fjEOxIV.jpg', descricao: 'Setor IV Guará I.', bairro: 'Guará I' }] },
    {
        id: 'guara_ii',
        nome: 'Guará II',
        setorArquidiocese: 4,
        setorRCC: 4,
        vicariato: 'Centro',
        devocoes: [
            { id: 'maria_imaculada_g2', nome: 'Paróquia Maria Imaculada', tipo: 'paroquia', imageUrl: 'https://iili.io/fjEOxIV.jpg', descricao: 'Setor IV Guará II.', bairro: 'Guará II' },
            { id: 'divino_esp_santo_g2', nome: 'Paróquia Divino Espírito Santo', tipo: 'paroquia', imageUrl: 'https://iili.io/fjEOxIV.jpg', descricao: 'Set IV Guará II.', bairro: 'Guará II' },
            { id: 'santissima_trindade_g2', nome: 'Paróquia Santíssima Trindade', tipo: 'paroquia', imageUrl: 'https://iili.io/fjEOxIV.jpg', descricao: 'Setor IV Guará II.', bairro: 'Guará II' },
            { id: 'sao_joao_paulo_ii_g2', nome: 'Paróquia São João Paulo II', tipo: 'paroquia', imageUrl: 'https://iili.io/fjEOxIV.jpg', descricao: 'Guará II.', bairro: 'Guará II' },
        ],
    },
    { id: 'lucio_costa', nome: 'Hab. Lúcio Costa', setorArquidiocese: 4, setorRCC: 4, vicariato: 'Centro', devocoes: [{ id: 'sao_jose_lucio_costa', nome: 'Paróquia São José', tipo: 'paroquia', imageUrl: 'https://iili.io/fjEOxIV.jpg', descricao: 'Setor IV Hab. Lúcio Costa.', bairro: 'Lúcio Costa' }] },
    { id: 'nucleo_bandeirante', nome: 'Núcleo Bandeirante', setorArquidiocese: 4, setorRCC: 4, vicariato: 'Centro', devocoes: [{ id: 'sj_bosco_nb', nome: 'Paróquia São João Bosco', tipo: 'paroquia', imageUrl: 'https://iili.io/fjEOxIV.jpg', descricao: 'Setor IV Núcleo Bandeirante.', bairro: 'Núcleo Bandeirante' }] },
    { id: 'park_way_iv', nome: 'Park Way (Setor IV)', setorArquidiocese: 4, setorRCC: 4, vicariato: 'Centro', devocoes: [{ id: 'imaculado_coracao_pw', nome: 'Paróquia Imaculado Coração de Maria', tipo: 'paroquia', imageUrl: 'https://iili.io/fjEOxIV.jpg', descricao: 'Setor IV Park Way.', bairro: 'Park Way' }] },
    { id: 'candangolandia', nome: 'Candangolândia', setorArquidiocese: 4, setorRCC: 4, vicariato: 'Centro', devocoes: [{ id: 'sj_operario_cand', nome: 'Paróquia São José Operário', tipo: 'paroquia', imageUrl: 'https://iili.io/fjEOxIV.jpg', descricao: 'Setor IV Candangolândia.', bairro: 'Candangolândia' }] },
    {
        id: 'estrutural',
        nome: 'Estrutural',
        setorArquidiocese: 4,
        setorRCC: 4,
        vicariato: 'Centro',
        devocoes: [
            { id: 'ns_encontro_deus', nome: 'Paróquia N.Sra.do Encontro com Deus', tipo: 'paroquia', imageUrl: 'https://iili.io/fjEOxIV.jpg', descricao: 'Setor IV Estrutural.', bairro: 'Estrutural' },
            { id: 'jesus_bom_pastor', nome: 'Paróquia Jesus Bom Pastor', tipo: 'paroquia', imageUrl: 'https://iili.io/fjEOxIV.jpg', descricao: 'Setor IV Estrutural.', bairro: 'Estrutural' },
        ],
    },
    {
        id: 'paranoa_xi',
        nome: 'Paranoá',
        setorArquidiocese: 11,
        setorRCC: 11,
        vicariato: 'Centro',
        devocoes: [
            { id: 'santa_maria_pobres', nome: 'Paróquia Santa Maria dos Pobres', tipo: 'paroquia', imageUrl: 'https://iili.io/fjEOxIV.jpg', descricao: 'Setor XI Paranoá.', bairro: 'Paranoá' },
            { id: 'ns_apa_pad_df', nome: 'Paróquia Nossa Senhora Aparecida PAD-DF', tipo: 'paroquia', imageUrl: 'https://iili.io/fjEOxIV.jpg', descricao: 'Setor XI PAD-DF / Paranoá.', bairro: 'Paranoá' },
            { id: 'sj_anchieta', nome: 'Paróquia São José de Anchieta', tipo: 'paroquia', imageUrl: 'https://iili.io/fjEOxIV.jpg', descricao: 'Setor XI Paranoá.', bairro: 'Paranoá' },
            { id: 'rcc_paranoa', nome: 'Grupo de Oração Espírito Santo', tipo: 'rcc', imageUrl: 'https://i.postimg.cc/3Js86PzK/image.png', descricao: 'Grupo de Oração da RCC no Paranoá.', paroquia: 'Paróquia Santa Maria dos Pobres', bairro: 'Paranoá', horarios: 'Sextas-feiras, 19h30' },
        ],
    },
    {
        id: 'sao_sebastiao_xi',
        nome: 'São Sebastião',
        setorArquidiocese: 11,
        setorRCC: 11,
        vicariato: 'Centro',
        devocoes: [
            { id: 'ns_apa_ss', nome: 'Paróquia Nossa Senhora Aparecida', tipo: 'paroquia', imageUrl: 'https://iili.io/fjEOxIV.jpg', descricao: 'Setor XI São Sebastião.', bairro: 'São Sebastião' },
            { id: 'santo_afonso', nome: 'Paróquia Santo Afonso', tipo: 'paroquia', imageUrl: 'https://iili.io/fjEOxIV.jpg', descricao: 'Setor XI São Sebastião.', bairro: 'São Sebastião' },
            { id: 'cristo_redentor_ss', nome: 'Paróquia Cristo Redentor', tipo: 'paroquia', imageUrl: 'https://iili.io/fjEOxIV.jpg', descricao: 'Setor XI São Sebastião.', bairro: 'São Sebastião' },
        ],
    },
    { id: 'lago_sul_xi', nome: 'Lago Sul (Setor XI)', setorArquidiocese: 11, setorRCC: 11, vicariato: 'Centro', devocoes: [{ id: 'ns_rosario_ls_leste', nome: 'Paróquia Nossa Senhora do Rosário', tipo: 'paroquia', imageUrl: 'https://iili.io/fjEOxIV.jpg', descricao: 'Setor XI Lago Sul.', bairro: 'Lago Sul' }] },
    { id: 'nova_betania_xi', nome: 'Nova Betânia', setorArquidiocese: 11, setorRCC: 11, vicariato: 'Centro', devocoes: [{ id: 'sfc_assis_ss', nome: 'Paróquia São Francisco de Assis', tipo: 'paroquia', imageUrl: 'https://iili.io/fjEOxIV.jpg', descricao: 'Setor XI Nova Betânia.', bairro: 'Nova Betânia' }] },
    {
        id: 'itapoa_xi',
        nome: 'Itapoã',
        setorArquidiocese: 11,
        setorRCC: 11,
        vicariato: 'Centro',
        devocoes: [
            { id: 'sj_luis_orione', nome: 'Paróquia São Luís Orione', tipo: 'paroquia', imageUrl: 'https://iili.io/fjEOxIV.jpg', descricao: 'Setor XI Itapoã.', bairro: 'Itapoã' },
            { id: 'ns_aux_itapoa', nome: 'Paróquia Nossa Senhora Auxiliadora', tipo: 'paroquia', imageUrl: 'https://iili.io/fjEOxIV.jpg', descricao: 'Setor XI Itapoã.', bairro: 'Itapoã' },
        ],
    },
    {
        id: 'jardim_botanico_xi',
        nome: 'Jardim Botânico',
        setorArquidiocese: 11,
        setorRCC: 11,
        vicariato: 'Centro',
        devocoes: [
            { id: 'sta_clara_sfc_jb', nome: 'Paróquia Santa Clara e São Francisco de Assis', tipo: 'paroquia', imageUrl: 'https://iili.io/fjEOxIV.jpg', descricao: 'Setor XI Jardim Botânico.', bairro: 'Jardim Botânico' },
            { id: 'scor_jesus_maria_jb', nome: 'Paróquia S. Cor. de Jesus e Maria', tipo: 'paroquia', imageUrl: 'https://iili.io/fjEOxIV.jpg', descricao: 'Setor XI Jardim Botânico.', bairro: 'Jardim Botânico' },
        ],
    },
    { id: 'jardim_mangueiral_xi', nome: 'Jardim Mangueiral', setorArquidiocese: 11, setorRCC: 11, vicariato: 'Centro', devocoes: [{ id: 'sj_paulo_ii_jm', nome: 'Paróquia São João Paulo II', tipo: 'paroquia', imageUrl: 'https://iili.io/fjEOxIV.jpg', descricao: 'Setor XI Jd. Mangueiral.', bairro: 'Jardim Mangueiral' }] },

    // ── VICARIATO NORTE ─────────────────────────────────────────
    {
        id: 'asa_norte',
        nome: 'Asa Norte',
        setorArquidiocese: 3,
        setorRCC: 3,
        vicariato: 'Norte',
        devocoes: [
            { id: 'santuario_saude', nome: 'Santuário Nossa Senhora da Saúde', tipo: 'paroquia', imageUrl: 'https://iili.io/fjEOxIV.jpg', descricao: 'Santuário da Asa Norte.', bairro: 'Asa Norte' },
            { id: 'divino_espirito_santo_an', nome: 'Paróquia Divino Espírito Santo', tipo: 'paroquia', imageUrl: 'https://iili.io/fjEOxIV.jpg', descricao: 'Paróquia da Asa Norte.', bairro: 'Asa Norte' },
            { id: 'ns_gracas_medalha', nome: 'Nossa Senhora das Graças da Medalha Milagrosa', tipo: 'paroquia', imageUrl: 'https://iili.io/fjEOxIV.jpg', descricao: 'Paróquia da Asa Norte.', bairro: 'Asa Norte' },
            { id: 'ns_consolata', nome: 'Paróquia Nossa Senhora Consolata', tipo: 'paroquia', imageUrl: 'https://iili.io/fjEOxIV.jpg', descricao: 'Paróquia da Asa Norte.', bairro: 'Asa Norte' },
            { id: 'sao_francisco_assis_an', nome: 'Santuário Basílica São Francisco de Assis', tipo: 'paroquia', imageUrl: 'https://iili.io/fjEOxIV.jpg', descricao: 'Santuário Basílica da Asa Norte.', bairro: 'Asa Norte' },
            { id: 'ns_esperanca_an', nome: 'Paróquia Nossa Senhora da Esperança', tipo: 'paroquia', imageUrl: 'https://iili.io/fjEOxIV.jpg', descricao: 'Paróquia da Asa Norte.', bairro: 'Asa Norte' },
            { id: 'sj_operario_an_leste', nome: 'Paróquia São José Operário', tipo: 'paroquia', imageUrl: 'https://iili.io/fjEOxIV.jpg', descricao: 'Paróquia da Asa Norte.', bairro: 'Asa Norte' },
            { id: 'verbo_divino_an', nome: 'Paróquia Verbo Divino', tipo: 'paroquia', imageUrl: 'https://iili.io/fjEOxIV.jpg', descricao: 'Paróquia da Asa Norte.', bairro: 'Asa Norte' },
            { id: 'mae_divina_misericordia', nome: 'Paróquia Mãe Divina Misericórdia', tipo: 'paroquia', imageUrl: 'https://iili.io/fjEOxIV.jpg', descricao: 'Paróquia da Asa Norte.', bairro: 'Asa Norte' },
            { id: 'rcc_verbo_divino_an', nome: 'Grupo de Oração Verbo Divino', tipo: 'rcc', imageUrl: 'https://i.postimg.cc/3Js86PzK/image.png', descricao: 'Grupo de Oração às Segundas-Feiras, 20h00.', paroquia: 'Paróquia Verbo Divino', endereco: 'SGAN 609', bairro: 'Asa Norte', horarios: 'Segunda-Feira às 20h00' },
        ],
    },
    {
        id: 'lago_norte',
        nome: 'Lago Norte',
        setorArquidiocese: 3,
        setorRCC: 3,
        vicariato: 'Norte',
        devocoes: [
            { id: 'ns_do_lago', nome: 'Paróquia Nossa Senhora do Lago', tipo: 'paroquia', imageUrl: 'https://iili.io/fjEOxIV.jpg', descricao: 'Paróquia do Setor III Lago Norte.', bairro: 'Lago Norte' },
            { id: 'pai_nosso', nome: 'Paróquia Pai Nosso', tipo: 'paroquia', imageUrl: 'https://iili.io/fjEOxIV.jpg', descricao: 'Paróquia do Setor III Lago Norte.', bairro: 'Lago Norte' },
            { id: 'santo_antonio_galvao', nome: 'Paróquia Santo Antônio de Sant’ana Galvão', tipo: 'paroquia', imageUrl: 'https://iili.io/fjEOxIV.jpg', descricao: 'Paróquia do Setor III Lago Norte.', bairro: 'Lago Norte' },
        ],
    },
    { id: 'granja_torto', nome: 'Granja do Torto', setorArquidiocese: 3, setorRCC: 3, vicariato: 'Norte', devocoes: [{ id: 'ns_fatima_granja', nome: 'Paróquia Nossa Senhora de Fátima', tipo: 'paroquia', imageUrl: 'https://iili.io/fjEOxIV.jpg', descricao: 'Paróquia do Setor III Granja do Torto.', bairro: 'Granja do Torto' }] },
    {
        id: 'sobradinho',
        nome: 'Sobradinho',
        setorArquidiocese: 8,
        setorRCC: 8,
        vicariato: 'Norte',
        devocoes: [
            { id: 'imaculada_sob', nome: 'Paróquia Nossa Senhora da Imaculada Conceição', tipo: 'paroquia', imageUrl: 'https://iili.io/fjEOxIV.jpg', descricao: 'Paróquia do Setor VIII Sobradinho.', bairro: 'Sobradinho' },
            { id: 'bom_jesus_migrantes', nome: 'Paróquia Bom Jesus dos Migrantes', tipo: 'paroquia', imageUrl: 'https://iili.io/fjEOxIV.jpg', descricao: 'Paróquia do Setor VIII Sobradinho.', bairro: 'Sobradinho' },
            { id: 'ns_fatima_sob', nome: 'Paróquia Nossa Senhora de Fátima', tipo: 'paroquia', imageUrl: 'https://iili.io/fjEOxIV.jpg', descricao: 'Paróquia do Setor VIII Sobradinho.', bairro: 'Sobradinho' },
            { id: 'divino_espirito_santo_sob', nome: 'Paróquia Divino Espírito Santo', tipo: 'paroquia', imageUrl: 'https://iili.io/fjEOxIV.jpg', descricao: 'Paróquia do Setor VIII Sobradinho.', bairro: 'Sobradinho' },
            { id: 'ns_conceicao_apa_sob', nome: 'Paróquia Nossa Senhora da Conceição Aparecida', tipo: 'paroquia', imageUrl: 'https://iili.io/fjEOxIV.jpg', descricao: 'Paróquia do Setor VIII Sobradinho.', bairro: 'Sobradinho' },
        ],
    },
    {
        id: 'sobradinho_ii',
        nome: 'Sobradinho II',
        setorArquidiocese: 8,
        setorRCC: 8,
        vicariato: 'Norte',
        devocoes: [
            { id: 'sao_jose_esposo_maria', nome: 'Paróquia São José Esposo de Maria', tipo: 'paroquia', imageUrl: 'https://iili.io/fjEOxIV.jpg', descricao: 'Paróquia do Setor VIII Sobradinho II.', bairro: 'Sobradinho II' },
            { id: 'sao_mateus_sob2', nome: 'Paróquia São Mateus', tipo: 'paroquia', imageUrl: 'https://iili.io/fjEOxIV.jpg', descricao: 'Paróquia do Setor VIII Sobradinho II.', bairro: 'Sobradinho II' },
            { id: 'ns_mae_migrantes', nome: 'Paróquia Nossa Senhora Mãe dos Migrantes', tipo: 'paroquia', imageUrl: 'https://iili.io/fjEOxIV.jpg', descricao: 'Paróquia do Setor VIII Sobradinho II.', bairro: 'Sobradinho II' },
        ],
    },
    { id: 'fercal', nome: 'Fercal', setorArquidiocese: 8, setorRCC: 8, vicariato: 'Norte', devocoes: [{ id: 'ns_apa_fercal', nome: 'Paróquia Nossa Senhora Aparecida', tipo: 'paroquia', imageUrl: 'https://iili.io/fjEOxIV.jpg', descricao: 'Paróquia do Setor VIII Fercal.', bairro: 'Fercal' }] },
    { id: 'contagem', nome: 'Contagem', setorArquidiocese: 8, setorRCC: 8, vicariato: 'Norte', devocoes: [{ id: 'ns_apa_contagem', nome: 'Paróquia Nossa Senhora Aparecida', tipo: 'paroquia', imageUrl: 'https://iili.io/fjEOxIV.jpg', descricao: 'Paróquia do Setor VIII Contagem.', bairro: 'Contagem' }] },
    { id: 'grande_colorado', nome: 'Grande Colorado', setorArquidiocese: 8, setorRCC: 8, vicariato: 'Norte', devocoes: [{ id: 'ns_gracas_colorado', nome: 'Paróquia Nossa Senhora das Graças', tipo: 'paroquia', imageUrl: 'https://iili.io/fjEOxIV.jpg', descricao: 'Paróquia do Setor VIII Grande Colorado.', bairro: 'Grande Colorado' }] },
    {
        id: 'planaltina',
        nome: 'Planaltina',
        setorArquidiocese: 15,
        setorRCC: 15,
        vicariato: 'Norte',
        devocoes: [
            { id: 'sao_sebastiao_plan', nome: 'Paróquia São Sebastião', tipo: 'paroquia', imageUrl: 'https://iili.io/fjEOxIV.jpg', descricao: 'Paróquia do Setor XV Planaltina.', bairro: 'Planaltina' },
            { id: 'santa_rita_plan', nome: 'Paróquia Santa Rita de Cássia', tipo: 'paroquia', imageUrl: 'https://iili.io/fjEOxIV.jpg', descricao: 'Paróquia do Setor XV Planaltina.', bairro: 'Planaltina' },
            { id: 'sao_vicente_paulo_plan', nome: 'Paróquia São Vicente de Paulo', tipo: 'paroquia', imageUrl: 'https://iili.io/fjEOxIV.jpg', descricao: 'Paróquia do Setor XV Planaltina.', bairro: 'Planaltina' },
            { id: 'divino_espirito_santo_plan', nome: 'Paróquia Divino Espírito Santo', tipo: 'paroquia', imageUrl: 'https://iili.io/fjEOxIV.jpg', descricao: 'Paróquia do Setor XV Planaltina.', bairro: 'Planaltina' },
            { id: 'ns_apa_plan', nome: 'Paróquia Nossa Senhora Aparecida', tipo: 'paroquia', imageUrl: 'https://iili.io/fjEOxIV.jpg', descricao: 'Paróquia do Setor XV Planaltina.', bairro: 'Planaltina' },
            { id: 'santa_luzia_plan', nome: 'Paróquia Santa Luzia', tipo: 'paroquia', imageUrl: 'https://iili.io/fjEOxIV.jpg', descricao: 'Paróquia do Setor XV Planaltina.', bairro: 'Planaltina' },
            { id: 'ns_nazare_plan', nome: 'Paróquia Nossa Senhora de Nazaré', tipo: 'paroquia', imageUrl: 'https://iili.io/fjEOxIV.jpg', descricao: 'Paróquia do Setor XV Planaltina.', bairro: 'Planaltina' },
            { id: 'sagrado_coracao_plan', nome: 'Paróquia Sagrado Coração de Jesus', tipo: 'paroquia', imageUrl: 'https://iili.io/fjEOxIV.jpg', descricao: 'Paróquia do Setor XV Planaltina.', bairro: 'Planaltina' },
            { id: 'ns_fatima_plan', nome: 'Paróquia Nossa Senhora de Fátima', tipo: 'paroquia', imageUrl: 'https://iili.io/fjEOxIV.jpg', descricao: 'Paróquia do Setor XV Planaltina.', bairro: 'Planaltina' },
        ],
    },

    // ── VICARIATO SUL ───────────────────────────────────────────
    // ── VICARIATO SUL ───────────────────────────────────────────
    {
        id: 'taguatinga',
        nome: 'Taguatinga',
        setorArquidiocese: 5,
        setorRCC: 5,
        vicariato: 'Sul',
        devocoes: [
            // Setor V
            { id: 'ns_perp_socorro_tag', nome: 'Paróquia Nossa Senhora do Perpétuo Socorro', tipo: 'paroquia', imageUrl: 'https://iili.io/fjEOxIV.jpg', descricao: 'Taguatinga Centro.', bairro: 'Taguatinga' },
            { id: 'sao_joao_bosco_tag', nome: 'Paróquia São João Bosco', tipo: 'paroquia', imageUrl: 'https://iili.io/fjEOxIV.jpg', descricao: 'Taguatinga.', bairro: 'Taguatinga' },
            { id: 'ns_fatima_tag', nome: 'Paróquia Nossa Senhora de Fátima', tipo: 'paroquia', imageUrl: 'https://iili.io/fjEOxIV.jpg', descricao: 'Taguatinga.', bairro: 'Taguatinga' },
            { id: 'ns_providencia_tag', nome: 'Paróquia Nossa Senhora da Providência', tipo: 'paroquia', imageUrl: 'https://iili.io/fjEOxIV.jpg', descricao: 'Taguatinga.', bairro: 'Taguatinga' },
            { id: 'sagrada_familia_tag', nome: 'Paróquia Sagrada Família', tipo: 'paroquia', imageUrl: 'https://iili.io/fjEOxIV.jpg', descricao: 'Taguatinga.', bairro: 'Taguatinga' },
            { id: 'imaculada_conceicao_tag', nome: 'Paróquia Imaculada Conceição', tipo: 'paroquia', imageUrl: 'https://iili.io/fjEOxIV.jpg', descricao: 'Taguatinga.', bairro: 'Taguatinga' },
            { id: 'sao_vicente_paulo_tag', nome: 'Paróquia São Vicente de Paulo', tipo: 'paroquia', imageUrl: 'https://iili.io/fjEOxIV.jpg', descricao: 'Taguatinga.', bairro: 'Taguatinga' },
            { id: 'ns_apa_tag', nome: 'Paróquia Nossa Senhora Aparecida', tipo: 'paroquia', imageUrl: 'https://iili.io/fjEOxIV.jpg', descricao: 'Taguatinga.', bairro: 'Taguatinga' },
            { id: 'santa_teresinha_tag', nome: 'Paróquia Santa Teresinha', tipo: 'paroquia', imageUrl: 'https://iili.io/fjEOxIV.jpg', descricao: 'Taguatinga.', bairro: 'Taguatinga' },
            { id: 'sao_francisco_tag', nome: 'Paróquia São Francisco de Assis', tipo: 'paroquia', imageUrl: 'https://iili.io/fjEOxIV.jpg', descricao: 'Taguatinga.', bairro: 'Taguatinga' },
            { id: 'sao_pedro_tag', nome: 'Paróquia São Pedro e São Paulo', tipo: 'paroquia', imageUrl: 'https://iili.io/fjEOxIV.jpg', descricao: 'Taguatinga.', bairro: 'Taguatinga' },
            { id: 'sao_jose_tag', nome: 'Paróquia São José', tipo: 'paroquia', imageUrl: 'https://iili.io/fjEOxIV.jpg', descricao: 'Taguatinga.', bairro: 'Taguatinga' },
            // Setor X
            { id: 'sj_domingos_savio_tag', nome: 'Paróquia São Domingos Sávio', tipo: 'paroquia', imageUrl: 'https://iili.io/fjEOxIV.jpg', descricao: 'Taguatinga.', bairro: 'Taguatinga' },
            { id: 'sao_paulo_apostolo_tag', nome: 'Paróquia São Paulo Apóstolo', tipo: 'paroquia', imageUrl: 'https://iili.io/fjEOxIV.jpg', descricao: 'Taguatinga.', bairro: 'Taguatinga' },
            { id: 'ns_gracas_tag', nome: 'Paróquia Nossa Senhora das Graças', tipo: 'paroquia', imageUrl: 'https://iili.io/fjEOxIV.jpg', descricao: 'Taguatinga.', bairro: 'Taguatinga' },
            { id: 'santo_antonio_tag', nome: 'Paróquia Santo Antônio', tipo: 'paroquia', imageUrl: 'https://iili.io/fjEOxIV.jpg', descricao: 'Taguatinga.', bairro: 'Taguatinga' },
            { id: 'verbo_de_deus_tag', nome: 'Paróquia Verbo de Deus', tipo: 'paroquia', imageUrl: 'https://iili.io/fjEOxIV.jpg', descricao: 'Taguatinga.', bairro: 'Taguatinga' },
            { id: 'espirito_santo_tag', nome: 'Paróquia Espírito Santo', tipo: 'paroquia', imageUrl: 'https://iili.io/fjEOxIV.jpg', descricao: 'Taguatinga.', bairro: 'Taguatinga' },
            { id: 'ressurreicao_tag', nome: 'Paróquia Ressurreição', tipo: 'paroquia', imageUrl: 'https://iili.io/fjEOxIV.jpg', descricao: 'Taguatinga.', bairro: 'Taguatinga' },
            { id: 'ns_apa_tag_x', nome: 'Paróquia Nossa Senhora Aparecida (Vila)', tipo: 'paroquia', imageUrl: 'https://iili.io/fjEOxIV.jpg', descricao: 'Taguatinga.', bairro: 'Taguatinga' },
            { id: 'sj_evangelista_tag', nome: 'Paróquia São João Evangelista', tipo: 'paroquia', imageUrl: 'https://iili.io/fjEOxIV.jpg', descricao: 'Taguatinga.', bairro: 'Taguatinga' },
            { id: 'sj_tag_x', nome: 'Paróquia São José (QNJ)', tipo: 'paroquia', imageUrl: 'https://iili.io/fjEOxIV.jpg', descricao: 'Taguatinga.', bairro: 'Taguatinga' },
            { id: 'rcc_deus_amor_tag', nome: 'Grupo de Oração Deus é Amor', tipo: 'rcc', imageUrl: 'https://i.postimg.cc/3Js86PzK/image.png', descricao: 'Quinta-Feira às 08h00.', paroquia: 'Santuário Nossa Senhora do Perpétuo Socorro', endereco: 'C7', bairro: 'Taguatinga', horarios: 'Quinta-Feira às 08h00' },
        ],
    },
    {
        id: 'ceilandia',
        nome: 'Ceilândia',
        setorArquidiocese: 6,
        setorRCC: 6,
        vicariato: 'Sul',
        devocoes: [
            // Setor VI
            { id: 'santa_luzia_cei', nome: 'Paróquia Santa Luzia', tipo: 'paroquia', imageUrl: 'https://iili.io/fjEOxIV.jpg', descricao: 'Ceilândia.', bairro: 'Ceilândia' },
            { id: 'maria_mae_igreja_cei', nome: 'Paróquia Maria Mãe da Igreja', tipo: 'paroquia', imageUrl: 'https://iili.io/fjEOxIV.jpg', descricao: 'Ceilândia.', bairro: 'Ceilândia' },
            { id: 'ns_gloria_cei', nome: 'Paróquia Nossa Senhora da Glória', tipo: 'paroquia', imageUrl: 'https://iili.io/fjEOxIV.jpg', descricao: 'Ceilândia.', bairro: 'Ceilândia' },
            { id: 'ns_paz_cei', nome: 'Paróquia Nossa Senhora da Paz', tipo: 'paroquia', imageUrl: 'https://iili.io/fjEOxIV.jpg', descricao: 'Ceilândia.', bairro: 'Ceilândia' },
            { id: 'ns_rosario_cei', nome: 'Paróquia Nossa Senhora do Rosário', tipo: 'paroquia', imageUrl: 'https://iili.io/fjEOxIV.jpg', descricao: 'Ceilândia.', bairro: 'Ceilândia' },
            { id: 'sagrado_cor_jesus_maria_cei', nome: 'Paróquia Sagrado Coração de Jesus e Maria', tipo: 'paroquia', imageUrl: 'https://iili.io/fjEOxIV.jpg', descricao: 'Ceilândia.', bairro: 'Ceilândia' },
            { id: 'sj_operario_cei', nome: 'Paróquia São José Operário', tipo: 'paroquia', imageUrl: 'https://iili.io/fjEOxIV.jpg', descricao: 'Ceilândia.', bairro: 'Ceilândia' },
            { id: 'maria_nazare_cei', nome: 'Paróquia Maria de Nazaré', tipo: 'paroquia', imageUrl: 'https://iili.io/fjEOxIV.jpg', descricao: 'Ceilândia.', bairro: 'Ceilândia' },
            { id: 'jesus_nazare_cei', nome: 'Paróquia Jesus de Nazaré', tipo: 'paroquia', imageUrl: 'https://iili.io/fjEOxIV.jpg', descricao: 'Ceilândia.', bairro: 'Ceilândia' },
            { id: 'ns_fatima_cei', nome: 'Paróquia Nossa Senhora de Fátima', tipo: 'paroquia', imageUrl: 'https://iili.io/fjEOxIV.jpg', descricao: 'Ceilândia.', bairro: 'Ceilândia' },
            { id: 'santo_antonio_cei', nome: 'Paróquia Santo Antônio', tipo: 'paroquia', imageUrl: 'https://iili.io/fjEOxIV.jpg', descricao: 'Ceilândia.', bairro: 'Ceilândia' },
            { id: 'sfc_assis_cei', nome: 'Paróquia São Francisco de Assis', tipo: 'paroquia', imageUrl: 'https://iili.io/fjEOxIV.jpg', descricao: 'Ceilândia.', bairro: 'Ceilândia' },
            // Setor XVI
            { id: 'maria_nazare_cei_xvi', nome: 'Paróquia Maria de Nazaré (Sol Nascente)', tipo: 'paroquia', imageUrl: 'https://iili.io/fjEOxIV.jpg', descricao: 'Sol Nascente.', bairro: 'Ceilândia' },
            { id: 'sao_marcos_lucas_cei_xvi', nome: 'Paróquia São Marcos e São Lucas (Pôr do Sol)', tipo: 'paroquia', imageUrl: 'https://iili.io/fjEOxIV.jpg', descricao: 'Pôr do Sol.', bairro: 'Ceilândia' },
            { id: 'senhora_apa_cei_xvi', nome: 'Paróquia Senhora Aparecida', tipo: 'paroquia', imageUrl: 'https://iili.io/fjEOxIV.jpg', descricao: 'Ceilândia.', bairro: 'Ceilândia' },
            { id: 'cristo_redentor_cei_xvi', nome: 'Paróquia Cristo Redentor', tipo: 'paroquia', imageUrl: 'https://iili.io/fjEOxIV.jpg', descricao: 'Ceilândia.', bairro: 'Ceilândia' },
            { id: 'santo_afonso_cei_xvi', nome: 'Paróquia Santo Afonso', tipo: 'paroquia', imageUrl: 'https://iili.io/fjEOxIV.jpg', descricao: 'Ceilândia.', bairro: 'Ceilândia' },
            { id: 'santa_elisabete_cei_xvi', nome: 'Paróquia Santa Elisabete', tipo: 'paroquia', imageUrl: 'https://iili.io/fjEOxIV.jpg', descricao: 'Ceilândia.', bairro: 'Ceilândia' },
            { id: 'ns_guadalupe_cei', nome: 'Paróquia Nossa Senhora de Guadalupe', tipo: 'paroquia', imageUrl: 'https://iili.io/fjEOxIV.jpg', descricao: 'Ceilândia.', bairro: 'Ceilândia' },
        ],
    },
    {
        id: 'aguas_claras',
        nome: 'Águas Claras',
        setorArquidiocese: 12,
        setorRCC: 12,
        vicariato: 'Sul',
        devocoes: [
            { id: 'ns_guadalupe_sj_diego_ac', nome: 'Paróquia Nossa Senhora de Guadalupe e São João Diego', tipo: 'paroquia', imageUrl: 'https://iili.io/fjEOxIV.jpg', descricao: 'Setor XII Águas Claras.', bairro: 'Águas Claras' },
            { id: 'imaculado_cor_maria_ac', nome: 'Paróquia Imaculado Coração de Maria', tipo: 'paroquia', imageUrl: 'https://iili.io/fjEOxIV.jpg', descricao: 'Setor XII Águas Claras.', bairro: 'Águas Claras' },
            { id: 'sagrada_familia_ac', nome: 'Paróquia Sagrada Família', tipo: 'paroquia', imageUrl: 'https://iili.io/fjEOxIV.jpg', descricao: 'Setor XII Águas Claras.', bairro: 'Águas Claras' },
            { id: 'sj_pantaleao_ss_ac', nome: 'Paróquia São Pantaleão e São Sebastião', tipo: 'paroquia', imageUrl: 'https://iili.io/fjEOxIV.jpg', descricao: 'Setor XII Águas Claras.', bairro: 'Águas Claras' },
        ],
    },
    {
        id: 'vicente_pires',
        nome: 'Vicente Pires',
        setorArquidiocese: 12,
        setorRCC: 12,
        vicariato: 'Sul',
        devocoes: [
            { id: 'ns_vitorias_vp', nome: 'Paróquia Nossa Senhora das Vitórias', tipo: 'paroquia', imageUrl: 'https://iili.io/fjEOxIV.jpg', descricao: 'Setor XII Vicente Pires.', bairro: 'Vicente Pires' },
            { id: 'santa_monica_vp', nome: 'Paróquia Santa Mônica', tipo: 'paroquia', imageUrl: 'https://iili.io/fjEOxIV.jpg', descricao: 'Setor XII Vicente Pires.', bairro: 'Vicente Pires' },
            { id: 'ns_fatima_vp', nome: 'Paróquia Nossa Senhora de Fátima', tipo: 'paroquia', imageUrl: 'https://iili.io/fjEOxIV.jpg', descricao: 'Setor XII Vicente Pires.', bairro: 'Vicente Pires' },
        ],
    },
    {
        id: 'riacho_fundo_i',
        nome: 'Riacho Fundo I',
        setorArquidiocese: 12,
        setorRCC: 12,
        vicariato: 'Sul',
        devocoes: [
            { id: 'sj_domingos_savio_rf', nome: 'Paróquia São Domingos Sávio', tipo: 'paroquia', imageUrl: 'https://iili.io/fjEOxIV.jpg', descricao: 'Setor XII Riacho Fundo.', bairro: 'Riacho Fundo' },
            { id: 'sao_miguel_rf', nome: 'Paróquia São Miguel Arcanjo', tipo: 'paroquia', imageUrl: 'https://iili.io/fjEOxIV.jpg', descricao: 'Setor XII Riacho Fundo.', bairro: 'Riacho Fundo' },
        ],
    },
    { id: 'arniqueiras', nome: 'Arniqueiras', setorArquidiocese: 12, setorRCC: 12, vicariato: 'Sul', devocoes: [{ id: 'maria_aux_arniqueiras', nome: 'Paróquia Maria Auxiliadora', tipo: 'paroquia', imageUrl: 'https://iili.io/fjEOxIV.jpg', descricao: 'Setor XII Arniqueiras.', bairro: 'Arniqueiras' }] },
    { id: 'samambaia_sul', nome: 'Samambaia (Colônia Agrícola)', setorArquidiocese: 12, setorRCC: 12, vicariato: 'Sul', devocoes: [{ id: 'ns_aux_colagrisam', nome: 'Paróquia Nossa Senhora Auxiliadora', tipo: 'paroquia', imageUrl: 'https://iili.io/fjEOxIV.jpg', descricao: 'Setor XII Col. Agr. Samambaia.', bairro: 'Samambaia' }] },
    { id: 'areal', nome: 'Areal', setorArquidiocese: 12, setorRCC: 12, vicariato: 'Sul', devocoes: [{ id: 'sfc_assis_areal', nome: 'Paróquia São Francisco de Assis', tipo: 'paroquia', imageUrl: 'https://iili.io/fjEOxIV.jpg', descricao: 'Setor XII Areal.', bairro: 'Areal' }] },

    // ── VICARIATO LESTE ─────────────────────────────────────────
    {
        id: 'gama',
        nome: 'Gama',
        setorArquidiocese: 7,
        setorRCC: 7,
        vicariato: 'Leste',
        devocoes: [
            { id: 'ns_apa_gama', nome: 'Paróquia Nossa Senhora Aparecida', tipo: 'paroquia', imageUrl: 'https://iili.io/fjEOxIV.jpg', descricao: 'Setor VII Gama.', bairro: 'Gama' },
            { id: 'ns_conceicao_gama', nome: 'Paróquia Nossa Senhora Conceição', tipo: 'paroquia', imageUrl: 'https://iili.io/fjEOxIV.jpg', descricao: 'Setor VII Gama.', bairro: 'Gama' },
            { id: 'ns_fatima_gama', nome: 'Paróquia Nossa Senhora de Fátima', tipo: 'paroquia', imageUrl: 'https://iili.io/fjEOxIV.jpg', descricao: 'Setor VII Gama.', bairro: 'Gama' },
            { id: 'sj_batista_gama', nome: 'Paróquia São João Batista', tipo: 'paroquia', imageUrl: 'https://iili.io/fjEOxIV.jpg', descricao: 'Setor VII Gama.', bairro: 'Gama' },
            { id: 'sao_sebastiao_gama', nome: 'Paróquia São Sebastião', tipo: 'paroquia', imageUrl: 'https://iili.io/fjEOxIV.jpg', descricao: 'Setor VII Gama.', bairro: 'Gama' },
            { id: 'santissima_trindade_gama', nome: 'Paróquia Santíssima Trindade', tipo: 'paroquia', imageUrl: 'https://iili.io/fjEOxIV.jpg', descricao: 'Setor VII Gama.', bairro: 'Gama' },
            { id: 'ns_carmo_gama', nome: 'Paróquia Nossa Senhora do Carmo', tipo: 'paroquia', imageUrl: 'https://iili.io/fjEOxIV.jpg', descricao: 'Setor VII Gama.', bairro: 'Gama' },
            { id: 'ns_aux_cristaos_gama', nome: 'Paróquia Nossa Senhora Auxiliadora dos Cristãos', tipo: 'paroquia', imageUrl: 'https://iili.io/fjEOxIV.jpg', descricao: 'Setor VII Gama.', bairro: 'Gama' },
            { id: 'ns_paz_gama', nome: 'Paróquia Nossa Senhora da Paz', tipo: 'paroquia', imageUrl: 'https://iili.io/fjEOxIV.jpg', descricao: 'Setor VII Gama.', bairro: 'Gama' },
        ],
    },
    { id: 'engenho_das_lajes', nome: 'Engenho das Lajes', setorArquidiocese: 7, setorRCC: 7, vicariato: 'Leste', devocoes: [{ id: 'sao_sebastiao_lajes', nome: 'Paróquia São Sebastião', tipo: 'paroquia', imageUrl: 'https://iili.io/fjEOxIV.jpg', descricao: 'Setor VII Eng. Lajes.', bairro: 'Engenho das Lajes' }] },
    {
        id: 'samambaia_leste',
        nome: 'Samambaia',
        setorArquidiocese: 9,
        setorRCC: 9,
        vicariato: 'Leste',
        devocoes: [
            { id: 'maria_nazare_sam', nome: 'Paróquia Maria de Nazaré', tipo: 'paroquia', imageUrl: 'https://iili.io/fjEOxIV.jpg', descricao: 'Setor IX Samambaia.', bairro: 'Samambaia' },
            { id: 'ns_gracas_sam', nome: 'Paróquia Nossa Senhora das Graças', tipo: 'paroquia', imageUrl: 'https://iili.io/fjEOxIV.jpg', descricao: 'Setor IX Samambaia.', bairro: 'Samambaia' },
            { id: 'ns_apa_sam', nome: 'Paróquia Nossa Senhora Aparecida', tipo: 'paroquia', imageUrl: 'https://iili.io/fjEOxIV.jpg', descricao: 'Setor IX Samambaia.', bairro: 'Samambaia' },
            { id: 'santa_luzia_sam', nome: 'Paróquia Santa Luzia', tipo: 'paroquia', imageUrl: 'https://iili.io/fjEOxIV.jpg', descricao: 'Setor IX Samambaia.', bairro: 'Samambaia' },
            { id: 'ns_fatima_sam', nome: 'Paróquia Nossa Senhora de Fátima', tipo: 'paroquia', imageUrl: 'https://iili.io/fjEOxIV.jpg', descricao: 'Setor IX Samambaia.', bairro: 'Samambaia' },
            { id: 'sto_inacio_loyola_sam', nome: 'Paróquia Santo Inácio de Loyola', tipo: 'paroquia', imageUrl: 'https://iili.io/fjEOxIV.jpg', descricao: 'Setor IX Samambaia.', bairro: 'Samambaia' },
            { id: 'sj_evangelista_sam', nome: 'Paróquia São João Evangelista', tipo: 'paroquia', imageUrl: 'https://iili.io/fjEOxIV.jpg', descricao: 'Setor IX Samambaia.', bairro: 'Samambaia' },
            { id: 'jesus_nazare_sam', nome: 'Paróquia Jesus de Nazaré', tipo: 'paroquia', imageUrl: 'https://iili.io/fjEOxIV.jpg', descricao: 'Setor IX Samambaia.', bairro: 'Samambaia' },
            { id: 'sj_operario_sam_leste', nome: 'Paróquia São José Operário', tipo: 'paroquia', imageUrl: 'https://iili.io/fjEOxIV.jpg', descricao: 'Setor IX Samambaia.', bairro: 'Samambaia' },
            { id: 'ns_dores_sam', nome: 'Paróquia Nossa Senhora das Dores', tipo: 'paroquia', imageUrl: 'https://iili.io/fjEOxIV.jpg', descricao: 'Setor IX Samambaia.', bairro: 'Samambaia' },
            { id: 'sao_bento_sam', nome: 'Paróquia São Bento', tipo: 'paroquia', imageUrl: 'https://iili.io/fjEOxIV.jpg', descricao: 'Setor IX Samambaia.', bairro: 'Samambaia' },
            {
                id: 'rcc_ns_apa_sam_leste',
                nome: 'Grupo de Oração Nossa Senhora Aparecida',
                tipo: 'rcc',
                imageUrl: 'https://i.postimg.cc/3Js86PzK/image.png',
                descricao: 'Terça-Feira às 19h30.',
                paroquia: 'Paróquia Nossa Senhora Aparecida',
                endereco: 'QN 406 - Samambaia Norte',
                bairro: 'Samambaia - Setor 9',
                horarios: 'Terça-Feira às 19h30',
            },
        ],
    },
    {
        id: 'recanto_emas',
        nome: 'Recanto das Emas',
        setorArquidiocese: 13,
        setorRCC: 13,
        vicariato: 'Leste',
        devocoes: [
            { id: 'sj_gabriel_rec', nome: 'Paróquia São Gabriel Arcanjo', tipo: 'paroquia', imageUrl: 'https://iili.io/fjEOxIV.jpg', descricao: 'Setor XIII Rec.das Emas.', bairro: 'Recanto das Emas' },
            { id: 'sj_operario_rec', nome: 'Paróquia São José Operário', tipo: 'paroquia', imageUrl: 'https://iili.io/fjEOxIV.jpg', descricao: 'Setor XIII Rec.das Emas.', bairro: 'Recanto das Emas' },
            { id: 'sj_miguel_rec', nome: 'Paróquia São Miguel Arcanjo', tipo: 'paroquia', imageUrl: 'https://iili.io/fjEOxIV.jpg', descricao: 'Setor XIII Rec.das Emas.', bairro: 'Recanto das Emas' },
            { id: 'sf_assis_rec', nome: 'Paróquia São Francisco de Assis', tipo: 'paroquia', imageUrl: 'https://iili.io/fjEOxIV.jpg', descricao: 'Setor XIII Rec.das Emas.', bairro: 'Recanto das Emas' },
            { id: 'sj_rafael_rec', nome: 'Paróquia São Rafael Arcanjo', tipo: 'paroquia', imageUrl: 'https://iili.io/fjEOxIV.jpg', descricao: 'Setor XIII Rec.das Emas.', bairro: 'Recanto das Emas' },
        ],
    },
    { id: 'riacho_fundo_ii_leste', nome: 'Riacho Fundo II', setorArquidiocese: 13, setorRCC: 13, vicariato: 'Leste', devocoes: [{ id: 'ns_medalha_rf2', nome: 'Paróquia Nossa Senhora da Medalha Milagrosa', tipo: 'paroquia', imageUrl: 'https://iili.io/fjEOxIV.jpg', descricao: 'Setor XIII Riacho Fundo II.', bairro: 'Riacho Fundo II' }] },
    {
        id: 'santa_maria',
        nome: 'Santa Maria',
        setorArquidiocese: 14,
        setorRCC: 14,
        vicariato: 'Leste',
        devocoes: [
            { id: 'santa_mae_deus_sm', nome: 'Paróquia Santa Mãe de Deus', tipo: 'paroquia', imageUrl: 'https://iili.io/fjEOxIV.jpg', descricao: 'Setor XIV Santa Maria.', bairro: 'Santa Maria' },
            { id: 'sj_sm', nome: 'Paróquia São José', tipo: 'paroquia', imageUrl: 'https://iili.io/fjEOxIV.jpg', descricao: 'Setor XIV Santa Maria.', bairro: 'Santa Maria' },
            { id: 'sagrada_familia_sm', nome: 'Paróquia Sagrada Família de Nazaré', tipo: 'paroquia', imageUrl: 'https://iili.io/fjEOxIV.jpg', descricao: 'Setor XIV Santa Maria.', bairro: 'Santa Maria' },
            { id: 'ns_providencia_sm', nome: 'Paróquia Nossa Senhora da Providência', tipo: 'paroquia', imageUrl: 'https://iili.io/fjEOxIV.jpg', descricao: 'Setor XIV Santa Maria.', bairro: 'Santa Maria' },
            { id: 'ns_dores_sm', nome: 'Paróquia Nossa Senhora das Dores', tipo: 'paroquia', imageUrl: 'https://iili.io/fjEOxIV.jpg', descricao: 'Setor XIV Santa Maria.', bairro: 'Santa Maria' },
            {
                id: 'rcc_anuncio_anjo_sm',
                nome: 'Grupo de Oração Anúncio do Anjo',
                tipo: 'rcc',
                imageUrl: 'https://i.postimg.cc/3Js86PzK/image.png',
                descricao: 'Segunda-Feira às 19h30.',
                paroquia: 'Capela São Vicente de Paulo',
                endereco: 'AE 209/309',
                bairro: 'Santa Maria - Setor 14',
                horarios: 'Segunda-Feira às 19h30',
            },
        ],
    },
];
