'use client';

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogClose,
} from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';
import {
    MapPin,
    Clock,
    Phone,
    Instagram,
    Globe,
    ArrowLeft,
    Building2,
    Search,
    SlidersHorizontal,
    Users,
    User,
    Mail,
    Shield,
    ChevronRight,
    XCircle,
} from 'lucide-react';
import { cn } from '@/lib/utils';

// Gera URL do Google Maps automaticamente a partir dos campos disponíveis
function getMapsUrl(d: { endereco?: string; bairro?: string; paroquia?: string; enderecoMaps?: string }): string | null {
    if (d.enderecoMaps) return d.enderecoMaps;
    const texto = d.endereco || d.bairro || d.paroquia;
    if (!texto) return null;
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(texto + ', Brasília DF')}`;
}

// Formata o nome para exibição inicial (siglas ou nome do grupo RCC)
function getDisplayName(nome: string, tipo: string, isInitial: boolean): string {
    if (isInitial) {
        // Regra para Grupos de Oração (RCC): remover o prefixo "Grupo de Oração"
        if (tipo === 'rcc') {
            const cleanName = nome.replace(/Grupo de Oração/gi, '').trim();
            if (cleanName.includes(' - ') || cleanName.includes(' — ') || cleanName.includes(' (')) {
                const parts = cleanName.split(/ - | — | \(/);
                return parts[0].trim();
            }
            return cleanName;
        }
        
        // Regra para siglas: pegar o que vem antes de hifens, travessões ou parênteses
        if (nome.includes(' - ') || nome.includes(' — ') || nome.includes(' (')) {
            const parts = nome.split(/ - | — | \(/);
            return parts[0].trim();
        }
    }
    return nome;
}

function getSimilares(atual: Devocao, lista: Devocao[]): Devocao[] {
    const nomeLower = atual.nome.toLowerCase();
    const idLower = atual.id.toLowerCase();

    // 1. Família Regnum Christi (RC, COR, ECyD Feminino, ECyD Masculino, J&FM)
    const isRegnumChristi = 
        idLower.includes('ecyd') || 
        idLower.includes('rc_bsb') || 
        idLower.includes('cor_bsb') || 
        idLower.includes('jfm_bsb') ||
        nomeLower.includes('regnum') ||
        nomeLower.includes('ecyd') ||
        nomeLower.includes('cor missionária') ||
        nomeLower.includes('juventude & família missionária');

    if (isRegnumChristi) {
        return lista.filter(d => 
            d.id !== atual.id && (
                d.id.includes('ecyd') || 
                d.id.includes('rc_bsb') || 
                d.id.includes('cor_bsb') || 
                d.id.includes('jfm_bsb') ||
                d.nome.toLowerCase().includes('regnum') ||
                d.nome.toLowerCase().includes('ecyd') ||
                d.nome.toLowerCase().includes('cor missionária') ||
                d.nome.toLowerCase().includes('juventude & família missionária')
            )
        );
    }

    // 2. Família Novas Comunidades (Shalom, Canção Nova, Obra de Maria)
    const isNovaComunidade =
        nomeLower.includes('shalom') ||
        nomeLower.includes('canção nova') ||
        nomeLower.includes('obra de maria') ||
        idLower.includes('shalom') ||
        idLower.includes('cancao_nova') ||
        idLower.includes('obra_de_maria');

    if (isNovaComunidade) {
        return lista.filter(d =>
            d.id !== atual.id && (
                d.nome.toLowerCase().includes('shalom') ||
                d.nome.toLowerCase().includes('canção nova') ||
                d.nome.toLowerCase().includes('obra de maria') ||
                d.id.includes('shalom') ||
                d.id.includes('cancao_nova') ||
                d.id.includes('obra_de_maria')
            )
        );
    }

    // 3. Família Movimentos de Jovens / Encontros (EJC, EJOC, JUAC, FAC)
    const isJovemEncontro =
        nomeLower.includes('ejc') ||
        nomeLower.includes('ejoc') ||
        nomeLower.includes('juac') ||
        nomeLower.includes('fac') ||
        atual.tipo === 'grupo_jovem' ||
        atual.tipo === 'movimento';

    if (isJovemEncontro) {
        const preferidos = lista.filter(d =>
            d.id !== atual.id && (
                d.nome.toLowerCase().includes('ejc') ||
                d.nome.toLowerCase().includes('ejoc') ||
                d.nome.toLowerCase().includes('juac') ||
                d.nome.toLowerCase().includes('fac')
            )
        );
        if (preferidos.length > 0) {
            return preferidos.slice(0, 4);
        }
        return lista.filter(d =>
            d.id !== atual.id && (d.tipo === 'grupo_jovem' || d.tipo === 'movimento')
        ).slice(0, 4);
    }

    // 4. Fallback padrão: Devoções/Paróquias do mesmo tipo
    return lista.filter(d => d.id !== atual.id && d.tipo === atual.tipo).slice(0, 4);
}

const HISTORIAS: Record<string, string> = {
    // 1. Regnum Christi e apostolados
    'regnum': `O Regnum Christi é um movimento eclesial de apostolado dentro da Igreja Católica, fundado em 1959. Busca propagar o Reino de Cristo na sociedade por meio da santificação de seus membros e de uma ação apostólica pessoal e comunitária organizada. É composto por leigos, consagradas, consagrados e pelos sacerdotes Legionários de Cristo.`,
    'ecyd': `O ECyD surgiu nos anos 1970 como o ramo de adolescentes do Regnum Christi. A sigla significa "Encontros, Convicções e Decisões". É uma organização católica internacional de adolescentes que fazem uma aliança com Cristo e entre si para construir um mundo melhor. Vivem seu estilo de vida por meio de encontros de formação, oração e realização de apostolados.`,
    'jfm': `A Juventude e Família Missionária (J&FM) surgiu nos anos 1980 a partir do desejo de jovens e famílias do Regnum Christi de irem a locais carentes e de difícil acesso para evangelizar, especialmente no período da Semana Santa. Hoje, move milhares de missionários pelo mundo em missões rurais, urbanas e médicas, testemunhando a alegria do Evangelho de Cristo.`,
    'cor': `O COR (Cor Missionária) é um apostolado juvenil do Regnum Christi focado na experiência de missões de compaixão e serviço. Ele nasceu da necessidade de aproximar os jovens das realidades periféricas e necessitadas, oferecendo-lhes uma formação humana e espiritual sólida por meio do encontro com os mais vulneráveis e com a beleza de colorir o mundo com o amor de Deus.`,
    // 2. Novas Comunidades
    'shalom': `A Comunidade Católica Shalom foi fundada em 9 de julho de 1982 por Moysés Azevedo, em Fortaleza (CE), durante a visita do Papa São João Paulo II ao Brasil. Inicialmente, o projeto nasceu como uma lanchonete e livraria para atrair e evangelizar jovens que estavam distantes da Igreja. Com o tempo, a comunidade se expandiu pelo mundo inteiro, recebendo aprovação pontifícia e atuando em diversas frentes de evangelização, artes, mídia e promoção humana.`,
    'cancao_nova': `A Comunidade Canção Nova foi fundada por Monsenhor Jonas Abib em 2 de fevereiro de 1978, em Cachoeira Paulista (SP), a partir de um apelo para colocar em prática o documento da Igreja "Evangeli Nuntiandi" sobre a evangelização. Tem como característica principal o uso dos meios de comunicação social (rádio, TV e internet) para levar a Boa Nova de Cristo a todos os lares, vivendo a espiritualidade carismática em comunidade de vida e de aliança.`,
    'obra_de_maria': `A Comunidade Obra de Maria foi fundada por Gilberto Gomes Barbosa em 1990, em Recife (PE). Com um carisma focado na evangelização de todas as formas e na prestação de serviços de caridade, a comunidade organiza peregrinações aos santuários marianos do mundo inteiro e desenvolve obras sociais e missionárias expressivas no Brasil e no exterior (especialmente no continente africano).`,
    // 3. Encontros de Jovens
    'ejc': `O Encontro de Jovens com Cristo (EJC) foi idealizado pelo Padre Alfonso Pastore em 1970, na Paróquia Nossa Senhora da Lapa, em São Paulo. O objetivo central é a evangelização de jovens na faixa de 15 a 25 anos, proporcionando-lhes um encontro pessoal com Jesus e integrando-os na vida paroquial e familiar. O movimento se espalhou rapidamente pelas arquidioceses de todo o Brasil e é hoje uma das maiores forças de juventude católica do país.`,
    'ejoc': `O EJOC (Encontro de Jovens com Cristo) originou-se a partir de metodologias inspiradas nos encontros de jovens com Cristo tradicionais, focando em aprofundar os laços de fraternidade, o engajamento na liturgia e a formação humana dos membros. Na Arquidiocese de Brasília, possui forte representatividade e o lema marcante "A juventude é uma semente... que Deus na terra semeou!", plantando a semente da fé em centenas de jovens.`,
    // 4. RCC
    'rcc': `A Renovação Carismática Católica (RCC) teve origem em um retiro de estudantes e professores da Universidade de Duquesne (Pittsburgh, EUA) em fevereiro de 1967, onde vivenciaram uma forte efusão do Espírito Santo. O movimento valoriza a oração espontânea, os carismas e os grupos de oração semanais. Chegou ao Brasil no final da década de 1969, espalhando-se rapidamente e renovando a experiência pessoal de fé de milhões de católicos.`
};

function getHistoriaTexto(d: Devocao): string | null {
    const id = d.id.toLowerCase();
    const nome = d.nome.toLowerCase();

    if (id.includes('ecyd') || nome.includes('ecyd')) return HISTORIAS.ecyd;
    if (id.includes('rc_bsb') || nome.includes('regnum')) return HISTORIAS.regnum;
    if (id.includes('jfm') || nome.includes('juventude & família')) return HISTORIAS.jfm;
    if (id.includes('cor_bsb') || nome.includes('cor missionária')) return HISTORIAS.cor;
    if (id.includes('shalom') || nome.includes('shalom')) return HISTORIAS.shalom;
    if (id.includes('cancao_nova') || nome.includes('canção nova')) return HISTORIAS.cancao_nova;
    if (id.includes('obra_de_maria') || nome.includes('obra de maria')) return HISTORIAS.obra_de_maria;
    if (id.includes('ejoc') || nome.includes('ejoc')) return HISTORIAS.ejoc;
    if (id.includes('ejc') || nome.includes('ejc')) return HISTORIAS.ejc;
    if (id.includes('rcc') || nome.includes('grupo de oração') || nome.includes('rcc')) return HISTORIAS.rcc;

    return null;
}

function getComoParticiparTexto(d: Devocao): { titulo: string; descricao: string; destaque?: string } | null {
    const id = d.id.toLowerCase();
    const nome = d.nome.toLowerCase();
    const tipo = d.tipo;

    // 1. RCC
    if (id.includes('rcc') || nome.includes('grupo de oração') || nome.includes('rcc')) {
        return {
            titulo: "Como Participar do Grupo de Oração?",
            descricao: "Todos os grupos de oração da Renovação Carismática Católica (RCC) são totalmente abertos à participação de qualquer pessoa. Para participar, basta saber o dia e o horário do encontro (geralmente ocorrem após a missa semanal na paróquia correspondente) e comparecer para rezar conosco.",
            destaque: "🔥 Fique atento! Eventualmente, realizamos os Seminários de Vida no Espírito Santo e fins de semana de Aprofundamento para uma vivência e batismo no Espírito Santo ainda mais intensos."
        };
    }

    // 2. Shalom
    if (id.includes('shalom') || nome.includes('shalom')) {
        return {
            titulo: "Como Participar da Comunidade Shalom?",
            descricao: "A forma mais comum de começar a participar é através dos Grupos de Oração abertos da Obra Shalom (com grupos voltados para jovens, casais ou mistos). Além disso, o Centro de Evangelização Shalom fica aberto todos os dias durante o período da tarde para visitas, momentos de oração espontânea e acompanhamento espiritual com os missionários.",
            destaque: "🌱 Quer ir além? Realizamos também os Seminários de Vida no Espírito Santo para iniciar a caminhada na comunidade. Além disso, a obra possui o Caminho Vocacional Shalom, que abre encontros e inscrições anualmente (geralmente no final do ano) para quem deseja ingressar e discernir sua vocação dentro do carisma Shalom."
        };
    }

    // 3. Canção Nova
    if (id.includes('cancao_nova') || nome.includes('canção nova')) {
        return {
            titulo: "Como Participar da Canção Nova?",
            descricao: "Você pode participar dos encontros e grupos de oração abertos semanais que a comunidade realiza. É um espaço de louvor, pregação da Palavra e Adoração ao Santíssimo Sacramento aberto para toda a família. Assim como a RCC, também promovemos os Seminários de Vida no Espírito Santo.",
            destaque: "⛪ Quer fazer parte? A Canção Nova conta com o Caminho Vocacional anual (com encontros iniciando no final do ano) para aqueles que sentem o chamado a consagrar a vida como comunidade de aliança ou de vida."
        };
    }

    // 4. Obra de Maria e CCVN (Vida Nova)
    if (id.includes('obra_de_maria') || nome.includes('obra de maria') || id.includes('ccvn') || nome.includes('vida nova')) {
        const cNome = (id.includes('ccvn') || nome.includes('vida nova')) ? "Comunidade Vida Nova" : "Obra de Maria";
        return {
            titulo: `Como Participar da ${cNome}?`,
            descricao: `A comunidade realiza de forma aberta cenáculos de oração, missas e vigílias abertas a todo o público, além de organizar peregrinações regulares para locais sagrados do mundo inteiro e encontros carismáticos periódicos.`,
            destaque: `🌟 Fique atento! Para aqueles que sentem atração pelo carisma da ${cNome}, o Caminho Vocacional inicia anualmente perto do final do ano.`
        };
    }

    // 5. Movimentos (ex: casais ou retiros fechados com sigilo)
    if (tipo === 'movimento') {
        return {
            titulo: "Como Ingressar neste Movimento?",
            descricao: "Por ser um movimento estruturado e focado na vivência comunitária profunda, a participação ativa nos grupos regulares exige a realização de um retiro de iniciação. A maioria desses movimentos possui caráter de sigilo sobre o retiro inicial e sua experiência, promovendo uma vivência única para o participante.",
            destaque: "🗓️ Inscrição Anual: É necessário aguardar a abertura da inscrição anual para realizar o retiro de admissão. Após concluí-lo, você será integrado a um grupo permanente do movimento."
        };
    }

    // 6. Grupos Jovens (geralmente abertos com retiros 1x ao ano)
    if (tipo === 'grupo_jovem') {
        return {
            titulo: "Como Participar do Grupo Jovem?",
            descricao: "Nossos grupos de jovens são totalmente abertos e acolhedores! Qualquer jovem pode começar a frequentar as reuniões semanais a qualquer momento do ano para partilhar a fé, fazer amigos e louvar a Deus.",
            destaque: "⚡ Retiro Anual: Além das reuniões abertas semanais, promovemos um retiro de jovens especial uma vez por ano, sendo um marco na nossa caminhada espiritual e de fraternidade."
        };
    }

    return null;
}

import {
    type Devocao,
    type RegiaoAdministrativa,
    type TipoDevocao,
    type Vicariato,
    tipoLabel,
    tipoColor,
    vicariatosInfo,
} from '@/lib/comunidades-data';

type Props = {
    regioes: RegiaoAdministrativa[];
};

const TIPOS_FILTRO: { label: string; value: TipoDevocao }[] = [
    { label: 'Grupos Jovens', value: 'grupo_jovem' },
    { label: 'Movimentos', value: 'movimento' },
    { label: 'Comunidades', value: 'comunidade' },
    { label: 'RCC', value: 'rcc' },
    { label: 'Mosteiros', value: 'mosteiro' },
    { label: 'Fraternidades', value: 'fraternidade' },
    { label: 'Institutos', value: 'instituto' },
    { label: 'Paróquias', value: 'paroquia' },
    { label: 'Escolas', value: 'escola' },
];

const VICARIATOS_ORDER: Vicariato[] = ['Centro', 'Norte', 'Sul', 'Leste'];

const VICARIATO_CONFIG: Record<Vicariato, {
    gradient: string;
    titleColor: string;
    borderColor: string;
    circleBase: string;
    circleHover: string;
    badgeBg: string;
    emoji: string;
    thumbColor: string;
}> = {
    Centro: {
        gradient: 'bg-gradient-to-br from-amber-50 to-yellow-50 border-amber-100',
        titleColor: 'text-amber-800',
        borderColor: 'border-amber-200',
        circleBase: 'border-amber-200',
        circleHover: 'group-hover:border-amber-500',
        badgeBg: 'bg-amber-600',
        emoji: '🟡',
        thumbColor: 'bg-amber-600/75 hover:bg-amber-600',
    },
    Norte: {
        gradient: 'bg-gradient-to-br from-sky-50 to-blue-50 border-sky-100',
        titleColor: 'text-sky-800',
        borderColor: 'border-sky-200',
        circleBase: 'border-sky-200',
        circleHover: 'group-hover:border-sky-500',
        badgeBg: 'bg-sky-600',
        emoji: '🔵',
        thumbColor: 'bg-sky-600/75 hover:bg-sky-600',
    },
    Sul: {
        gradient: 'bg-gradient-to-br from-green-50 to-emerald-50 border-green-100',
        titleColor: 'text-green-800',
        borderColor: 'border-green-200',
        circleBase: 'border-green-200',
        circleHover: 'group-hover:border-green-500',
        badgeBg: 'bg-green-700',
        emoji: '🟢',
        thumbColor: 'bg-green-700/75 hover:bg-green-700',
    },
    Leste: {
        gradient: 'bg-gradient-to-br from-rose-50 to-pink-50 border-rose-100',
        titleColor: 'text-rose-800',
        borderColor: 'border-rose-200',
        circleBase: 'border-rose-200',
        circleHover: 'group-hover:border-rose-500',
        badgeBg: 'bg-rose-600',
        emoji: '🔴',
        thumbColor: 'bg-rose-600/75 hover:bg-rose-600',
    },
};

const VICARIATO_BORDERS: Record<Vicariato, string> = {
    Centro: 'border-amber-400 text-slate-800 hover:border-amber-600 hover:bg-amber-50/30 focus:ring-amber-200',
    Norte: 'border-sky-400 text-slate-800 hover:border-sky-600 hover:bg-sky-50/30 focus:ring-sky-200',
    Sul: 'border-green-400 text-slate-800 hover:border-green-600 hover:bg-green-50/30 focus:ring-green-200',
    Leste: 'border-rose-400 text-slate-800 hover:border-rose-600 hover:bg-rose-50/30 focus:ring-rose-200',
};

// ── Modal de Devoção ────────────────────────────────────────────
function DevocaoDialogWrapper({
    devocao,
    config,
    todasDevocoes,
    devocaoParaCidade,
}: {
    devocao: Devocao;
    config: typeof VICARIATO_CONFIG[Vicariato];
    todasDevocoes: Devocao[];
    devocaoParaCidade: Map<string, string>;
}) {
    const [open, setOpen] = useState(false);
    const [activeDevocao, setActiveDevocao] = useState<Devocao>(devocao);
    const [activeTab, setActiveTab] = useState<'inicio' | 'historia' | 'comoParticipar'>('inicio');

    // Quando o modal abre ou a prop devocao muda, sincroniza o estado ativo
    React.useEffect(() => {
        if (open) {
            setActiveDevocao(devocao);
        }
    }, [open, devocao]);

    // Reseta para a aba 'inicio' quando a devoção muda
    React.useEffect(() => {
        setActiveTab('inicio');
    }, [activeDevocao]);

    React.useEffect(() => {
        if (open) {
            window.history.pushState({ modal: 'comunidadesGallery' }, '');
            const handlePopState = () => setOpen(false);
            window.addEventListener('popstate', handlePopState);
            return () => window.removeEventListener('popstate', handlePopState);
        }
    }, [open]);

    const similares = useMemo(() => {
        return getSimilares(activeDevocao, todasDevocoes);
    }, [activeDevocao, todasDevocoes]);

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <div className="cursor-pointer group flex flex-col items-center">
                    <div className="relative w-full max-w-[140px]">
                        <Image
                            src={devocao.imageUrl}
                            alt={devocao.nome}
                            width={200}
                            height={200}
                            className={`aspect-square rounded-full object-cover border-4 transition-all duration-300 shadow-md group-hover:shadow-xl group-hover:scale-105 ${config.circleBase} ${config.circleHover}`}
                        />
                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 z-10">
                            <span className={`inline-block px-2 py-0.5 text-white text-[9px] font-bold rounded-full shadow-sm whitespace-nowrap ${config.badgeBg}`}>
                                {tipoLabel[devocao.tipo]}
                            </span>
                        </div>
                    </div>
                    <p className="text-center mt-6 text-sm font-semibold text-slate-700 line-clamp-2 px-2 h-10 flex items-center justify-center leading-snug">
                        {getDisplayName(devocao.nome, devocao.tipo, true)}
                    </p>
                </div>
            </DialogTrigger>

            <DialogContent className="max-w-lg w-full rounded-2xl border-0 p-0 overflow-hidden shadow-2xl">
                {/* Header colorido */}
                <div className={cn(
                    "relative h-44 flex items-center justify-center overflow-hidden",
                    config.badgeBg
                )}>
                    {/* Imagem de background se for Shalom, Canção Nova ou RCC */}
                    {(() => {
                        const isShalom = activeDevocao.id.toLowerCase().includes('shalom') || activeDevocao.nome.toLowerCase().includes('shalom');
                        const isCN = activeDevocao.id.toLowerCase().includes('cancao_nova') || activeDevocao.nome.toLowerCase().includes('canção nova');
                        const isRCC = activeDevocao.id.toLowerCase().includes('rcc') || activeDevocao.nome.toLowerCase().includes('grupo de oração') || activeDevocao.nome.toLowerCase().includes('rcc');
                        
                        if (!isShalom && !isCN && !isRCC) return null;
                        
                        let bgUrl = "";
                        if (isShalom) {
                            bgUrl = "https://imgs.search.brave.com/HSSRGZnAraLzkm5LHAmnz6EIRGyRTbstABIloBtYK48/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzdiLzBh/L2VlLzdiMGFlZWRm/NjNlNmI0Nzk5YzVh/MjRhYmNiODQ0MjJj/LmpwZw";
                        } else if (isCN) {
                            bgUrl = "https://i.pinimg.com/736x/91/df/d3/91dfd3a4345563d23ec6e6ca3e28dcb8.jpg";
                        } else if (isRCC) {
                            bgUrl = "https://i.pinimg.com/736x/e0/e5/25/e0e525929ae9a7a4f0538c81ce09c868.jpg";
                        }

                        return (
                            <div className="absolute inset-0 z-0">
                                <Image 
                                    src={bgUrl}
                                    alt={`${activeDevocao.nome} Background`}
                                    fill
                                    className="object-cover object-center opacity-80"
                                    priority
                                />
                                {/* Overlay escuro/gradiente suave para garantir boa visibilidade */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-black/10" />
                            </div>
                        );
                    })()}

                    <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-xl z-10">
                        <Image src={activeDevocao.imageUrl} alt={activeDevocao.nome} fill className="object-cover" sizes="96px" />
                    </div>
                    <DialogClose asChild>
                        <button className="absolute top-3 left-3 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/30 hover:bg-black/50 text-white text-xs font-semibold backdrop-blur-sm transition-all z-20 shadow-sm border border-white/10">
                            <ArrowLeft className="h-3.5 w-3.5" />
                            Voltar
                        </button>
                    </DialogClose>
                </div>

                <ScrollArea className="max-h-[60vh]" scrollbarClassName="w-1.5" thumbClassName={config.thumbColor}>
                    <div className="p-6 space-y-4">
                        <div className="text-center">
                            <DialogHeader>
                                <DialogTitle className="text-xl font-bold text-slate-800 font-brand">{activeDevocao.nome}</DialogTitle>
                            </DialogHeader>
                            <span className={`inline-block mt-1 text-xs px-3 py-1 rounded-full border font-semibold ${tipoColor[activeDevocao.tipo]}`}>
                                {tipoLabel[activeDevocao.tipo]}
                            </span>
                        </div>

                        {/* ── Abas de Navegação ── */}
                        <div className="flex border-b border-gray-100 my-4">
                            {(['inicio', 'historia', 'comoParticipar'] as const).map((tab) => {
                                const labels = {
                                    inicio: 'Início',
                                    historia: 'História',
                                    comoParticipar: 'Como Participar',
                                };
                                const isActive = activeTab === tab;
                                return (
                                    <button
                                        key={tab}
                                        onClick={() => {
                                            setActiveTab(tab);
                                            // Rola o scroll-area de volta para o topo do modal
                                            const scrollContainer = document.querySelector('[data-radix-scroll-area-viewport]');
                                            if (scrollContainer) {
                                                scrollContainer.scrollTo({ top: 0, behavior: 'smooth' });
                                            }
                                        }}
                                        className={cn(
                                            "flex-1 py-2 text-xs font-bold text-center border-b-2 transition-all cursor-pointer",
                                            isActive
                                                ? "border-red-600 text-red-600 font-extrabold"
                                                : "border-transparent text-slate-500 hover:text-slate-700 hover:border-gray-200"
                                        )}
                                    >
                                        {labels[tab]}
                                    </button>
                                );
                            })}
                        </div>

                        {/* ── Conteúdo da Aba Ativa ── */}
                        {activeTab === 'inicio' && (
                            <div className="space-y-4 animate-fade-in duration-300">
                                <p className="text-sm text-gray-700 leading-relaxed text-center">{activeDevocao.descricao}</p>

                                {/* ── Botões de ação: Instagram e Google Maps ── */}
                                {(() => {
                                    const mapsUrl = getMapsUrl(activeDevocao);
                                    if (!activeDevocao.instagram && !mapsUrl) return null;
                                    return (
                                        <div className="flex gap-3 justify-center pt-1 flex-wrap">
                                            {activeDevocao.instagram && (
                                                <a
                                                    href={`https://instagram.com/${activeDevocao.instagram.replace('@', '')}`}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 text-white text-xs font-bold shadow hover:opacity-90 transition-opacity"
                                                >
                                                    <Instagram className="h-4 w-4" />
                                                    Instagram
                                                </a>
                                            )}
                                            {mapsUrl && (
                                                <a
                                                    href={mapsUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600 text-white text-xs font-bold shadow hover:bg-blue-700 transition-colors"
                                                >
                                                    <MapPin className="h-4 w-4" />
                                                    Ver no Maps
                                                </a>
                                            )}
                                        </div>
                                    );
                                })()}

                                {/* ── Detalhes ── */}
                                <div className="space-y-2 pt-2 border-t border-gray-100">
                                    {activeDevocao.paroquia && (
                                        <div className="flex items-start gap-2 text-sm text-gray-600">
                                            <Building2 className="h-4 w-4 text-red-600 mt-0.5 shrink-0" />
                                            <span><strong>Paróquia:</strong> {activeDevocao.paroquia}</span>
                                        </div>
                                    )}
                                    {activeDevocao.bairro && (
                                        <div className="flex items-start gap-2 text-sm text-gray-600">
                                            <MapPin className="h-4 w-4 text-red-600 mt-0.5 shrink-0" />
                                            <span>{activeDevocao.bairro}</span>
                                        </div>
                                    )}
                                    {activeDevocao.endereco && (
                                        <div className="flex items-start gap-2 text-sm text-gray-600">
                                            <MapPin className="h-4 w-4 text-red-600 mt-0.5 shrink-0" />
                                            <span>{activeDevocao.endereco}</span>
                                        </div>
                                    )}
                                    {activeDevocao.horarios && (
                                        <div className="flex items-start gap-2 text-sm text-gray-600">
                                            <Clock className="h-4 w-4 text-red-600 mt-0.5 shrink-0" />
                                            <span>{activeDevocao.horarios}</span>
                                        </div>
                                    )}
                                    {activeDevocao.contato && (
                                        <div className="flex items-start gap-2 text-sm text-gray-600">
                                            <Phone className="h-4 w-4 text-red-600 mt-0.5 shrink-0" />
                                            <span>{activeDevocao.contato}</span>
                                        </div>
                                    )}
                                    {activeDevocao.site && (
                                        <div className="flex items-start gap-2 text-sm text-gray-600">
                                            <Globe className="h-4 w-4 text-red-600 mt-0.5 shrink-0" />
                                            <a
                                                href={activeDevocao.site}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-red-700 hover:underline font-medium"
                                            >
                                                {activeDevocao.site}
                                            </a>
                                        </div>
                                    )}
                                </div>

                                {/* ── Comunidades Similares ── */}
                                {similares.length > 0 && (
                                    <div className="pt-4 border-t border-gray-100 space-y-3">
                                        <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider flex items-center gap-1.5">
                                            <Users className="h-3.5 w-3.5 text-red-600" />
                                            Similares
                                        </h4>
                                        <div className="grid grid-cols-2 gap-2">
                                            {similares.map((sim) => (
                                                <button
                                                    key={sim.id}
                                                    onClick={() => {
                                                        setActiveDevocao(sim);
                                                        // Rola o scroll-area de volta para o topo do modal
                                                        const scrollContainer = document.querySelector('[data-radix-scroll-area-viewport]');
                                                        if (scrollContainer) {
                                                            scrollContainer.scrollTo({ top: 0, behavior: 'smooth' });
                                                        }
                                                    }}
                                                    className="flex items-center gap-2.5 p-2 rounded-xl border border-gray-100 bg-gray-50/50 hover:bg-red-50/30 hover:border-red-200 transition-all text-left group/sim cursor-pointer"
                                                >
                                                    <div className="relative w-8 h-8 rounded-full overflow-hidden shrink-0 border border-gray-200 shadow-sm group-hover/sim:scale-105 transition-transform">
                                                        <Image src={sim.imageUrl} alt={sim.nome} fill className="object-cover" sizes="32px" />
                                                    </div>
                                                    <div className="min-w-0 flex-1">
                                                        <p className="text-[10px] font-bold text-slate-700 truncate leading-snug group-hover/sim:text-red-900 transition-colors">
                                                            {getDisplayName(sim.nome, sim.tipo, true)}
                                                        </p>
                                                        <span className="text-[8px] font-semibold text-slate-500 uppercase tracking-wider block mt-0.5 truncate">
                                                            {tipoLabel[sim.tipo]} • {devocaoParaCidade.get(sim.id) || ''}
                                                        </span>
                                                    </div>
                                                    <ChevronRight className="h-3 w-3 text-slate-400 shrink-0 group-hover/sim:text-red-600 group-hover/sim:translate-x-0.5 transition-all" />
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        )}

                        {activeTab === 'historia' && (
                            <div className="animate-fade-in duration-300">
                                {(() => {
                                    const historia = getHistoriaTexto(activeDevocao);
                                    if (historia) {
                                        return (
                                            <div className="space-y-4">
                                                <h3 className="text-sm font-bold text-slate-800 border-b pb-2 flex items-center gap-2">
                                                    <Building2 className="h-4 w-4 text-red-600" />
                                                    Origem & História
                                                </h3>
                                                <p className="text-sm text-gray-700 leading-relaxed text-justify whitespace-pre-wrap">{historia}</p>
                                            </div>
                                        );
                                    }
                                    return (
                                        <div className="relative min-h-[300px] flex flex-col items-center justify-center p-8 text-center overflow-hidden">
                                            {/* Imagem do logo com marca d'água */}
                                            <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none select-none">
                                                <Image 
                                                    src="https://i.postimg.cc/ZRrzGs1g/Capa-para-facebook-arquitetura-moderno-vermelho-1.png"
                                                    alt="Logo Marca d'água"
                                                    width={350}
                                                    height={130}
                                                    className="object-contain"
                                                />
                                            </div>
                                            
                                            {/* Texto de marca d'água grande */}
                                            <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
                                                <span className="text-gray-300/40 font-black text-6xl tracking-widest uppercase select-none rotate-[-15deg]">
                                                    Em Breve
                                                </span>
                                            </div>

                                            {/* Conteúdo principal */}
                                            <div className="relative z-10 space-y-3">
                                                <h3 className="text-base font-bold text-slate-700">História da Devoção</h3>
                                                <p className="text-xs text-gray-500 max-w-xs leading-relaxed">
                                                    Estamos coletando as informações históricas e relatórios sobre esta paróquia/comunidade. Retorne em breve para saber mais!
                                                </p>
                                            </div>
                                        </div>
                                    );
                                })()}
                            </div>
                        )}

                        {activeTab === 'comoParticipar' && (
                            <div className="animate-fade-in duration-300">
                                {(() => {
                                    const info = getComoParticiparTexto(activeDevocao);
                                    if (info) {
                                        return (
                                            <div className="space-y-4">
                                                <h3 className="text-sm font-bold text-slate-800 border-b pb-2 flex items-center gap-2">
                                                    <Users className="h-4 w-4 text-red-600" />
                                                    {info.titulo}
                                                </h3>
                                                <p className="text-sm text-gray-700 leading-relaxed text-justify">{info.descricao}</p>
                                                {info.destaque && (
                                                    <div className="bg-red-50/50 border border-red-100 rounded-2xl p-4 text-xs text-red-900 font-medium leading-relaxed">
                                                        {info.destaque}
                                                    </div>
                                                )}
                                                {activeDevocao.instagram && (
                                                    <div className="flex justify-center pt-2">
                                                        <a
                                                            href={`https://instagram.com/${activeDevocao.instagram.replace('@', '')}`}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 text-white text-xs font-bold shadow hover:opacity-90 transition-opacity"
                                                        >
                                                            <Instagram className="h-4 w-4" />
                                                            Saber Mais via Instagram
                                                        </a>
                                                    </div>
                                                )}
                                            </div>
                                        );
                                    }
                                    return (
                                        <div className="relative min-h-[300px] flex flex-col items-center justify-center p-8 text-center overflow-hidden">
                                            {/* Imagem do logo com marca d'água */}
                                            <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none select-none">
                                                <Image 
                                                    src="https://i.postimg.cc/ZRrzGs1g/Capa-para-facebook-arquitetura-moderno-vermelho-1.png"
                                                    alt="Logo Marca d'água"
                                                    width={350}
                                                    height={130}
                                                    className="object-contain"
                                                />
                                            </div>

                                            {/* Texto de marca d'água grande */}
                                            <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
                                                <span className="text-gray-300/40 font-black text-6xl tracking-widest uppercase select-none rotate-[-15deg]">
                                                    Em Breve
                                                </span>
                                            </div>

                                            {/* Conteúdo principal */}
                                            <div className="relative z-10 space-y-4">
                                                <h3 className="text-base font-bold text-slate-700">Como Participar?</h3>
                                                <p className="text-xs text-gray-500 max-w-sm leading-relaxed">
                                                    As datas de encontros, inscrições e reuniões regulares desta comunidade estarão disponíveis aqui.
                                                </p>
                                                <div className="bg-red-50/50 border border-red-100 rounded-2xl p-4 text-xs text-red-900 font-medium">
                                                    ✨ Enquanto isso, para saber como participar, envie uma mensagem no direct do nosso Instagram oficial!
                                                </div>
                                                {activeDevocao.instagram && (
                                                    <a
                                                        href={`https://instagram.com/${activeDevocao.instagram.replace('@', '')}`}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 text-white text-xs font-bold shadow hover:opacity-90 transition-opacity"
                                                    >
                                                        <Instagram className="h-4 w-4" />
                                                        Chamar no Direct
                                                    </a>
                                                )}
                                            </div>
                                        </div>
                                    );
                                })()}
                            </div>
                        )}
                    </div>
                </ScrollArea>
            </DialogContent>
        </Dialog>
    );
}

// ── Galeria Principal ───────────────────────────────────────────
export function ComunidadesGallery({ regioes }: Props) {
    const todasDevocoes = useMemo(() => {
        const list: Devocao[] = [];
        regioes.forEach(r => {
            r.devocoes.forEach(d => {
                if (!list.some(item => item.id === d.id)) {
                    list.push(d);
                }
            });
        });
        return list;
    }, [regioes]);

    const devocaoParaCidade = useMemo(() => {
        const mapa = new Map<string, string>();
        regioes.forEach(r => {
            r.devocoes.forEach(d => {
                mapa.set(d.id, r.nome);
            });
        });
        return mapa;
    }, [regioes]);

    const [busca, setBusca] = useState('');
    const [filtroTipos, setFiltroTipos] = useState<Set<TipoDevocao>>(new Set());
    const [filtroVicariatos, setFiltroVicariatos] = useState<Set<Vicariato>>(new Set());
    const [filtroRegioes, setFiltroRegioes] = useState<Set<string>>(new Set());
    const [painelAberto, setPainelAberto] = useState(false);

    const toggleTipo = (t: TipoDevocao) =>
        setFiltroTipos((p) => {
            const n = new Set<TipoDevocao>();
            if (!p.has(t)) n.add(t);
            return n;
        });

    const toggleVic = (v: Vicariato) => {
        setFiltroVicariatos((p) => {
            const n = new Set<Vicariato>();
            if (!p.has(v)) n.add(v);
            return n;
        });
        setFiltroRegioes(new Set());
    };

    const toggleRegiao = (id: string) =>
        setFiltroRegioes((p) => {
            const n = new Set<string>();
            if (!p.has(id)) n.add(id);
            return n;
        });

    const limpar = () => {
        setFiltroTipos(new Set());
        setFiltroVicariatos(new Set());
        setFiltroRegioes(new Set());
        setBusca('');
    };

    const totalAtivos = filtroTipos.size + filtroVicariatos.size + filtroRegioes.size + (busca ? 1 : 0);
    const filtrosAtivos = totalAtivos > 0;

    // Cálculos de totais globais
    const statsGlobais = useMemo(() => {
        let paroquias = 0;
        let devocoes = 0;
        regioes.forEach(r => {
            r.devocoes.forEach(d => {
                if (d.tipo === 'paroquia') paroquias++;
                else devocoes++;
            });
        });
        return { paroquias, devocoes };
    }, [regioes]);

    const paroquiaSelecionada = filtroTipos.has('paroquia');
    const apenasUmTipo = filtroTipos.size === 1;

    // Filtra regiões e devoções
    const regioesFiltradas = useMemo(() =>
        regioes
            .filter((r) => filtroVicariatos.size === 0 || filtroVicariatos.has(r.vicariato))
            .filter((r) => filtroRegioes.size === 0 || filtroRegioes.has(r.id))
            .map((r) => ({
                ...r,
                devocoes: r.devocoes.filter((d) => {
                    const q = busca.toLowerCase();

                    // Regra: Paróquias só aparecem se o filtro "paroquia" estiver ATIVO
                    if (d.tipo === 'paroquia' && !paroquiaSelecionada) return false;

                    return (
                        (filtroTipos.size === 0 || filtroTipos.has(d.tipo)) &&
                        (!busca || d.nome.toLowerCase().includes(q) ||
                            (d.paroquia?.toLowerCase().includes(q) ?? false) ||
                            (d.bairro?.toLowerCase().includes(q) ?? false))
                    );
                }),
            }))
            // Regra: Oculta cidades sem conteúdo por padrão, 
            // a menos que o vicariato ou a própria cidade esteja selecionada no filtro
            .filter((r) => {
                if (r.devocoes.length > 0) return true;
                if (filtroVicariatos.has(r.vicariato)) return true;
                if (filtroRegioes.has(r.id)) return true;
                return false;
            }),
        [regioes, filtroTipos, filtroVicariatos, filtroRegioes, busca, filtrosAtivos, paroquiaSelecionada]
    );

    // Agrupa por vicariato
    const porVicariato = useMemo(() =>
        VICARIATOS_ORDER.map((vic) => {
            const regs = regioesFiltradas.filter((r) => r.vicariato === vic);
            const countParoquias = regs.reduce((a, r) => a + r.devocoes.filter(d => d.tipo === 'paroquia').length, 0);
            return {
                vic,
                regioes: regs,
                countParoquias
            };
        }).filter((g) => g.regioes.length > 0),
        [regioesFiltradas]
    );

    const cidadesAtivas = useMemo(() => {
        const ativas = regioes.filter(r => r.devocoes.length > 0);
        return [...ativas].sort((a, b) => a.nome.localeCompare(b.nome));
    }, [regioes]);

    return (
        <section className="mb-12">
            <h2 className="text-4xl font-bold text-red-900 text-center mb-4 font-brand">
                ✝ Encontre Seu Lugar ✝
            </h2>
            <div className="flex flex-col items-center gap-2 mb-8">
                <p className="text-center text-slate-600 max-w-2xl mx-auto">
                    Explore grupos jovens, movimentos, comunidades e devoções mais perto de você.
                </p>
            </div>

            {/* ── Busca + Filtros ── */}
            <div className="flex gap-3 mb-4">
                <div className="relative flex-1">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-red-500" />
                    <input
                        type="text"
                        placeholder="Buscar grupo, paróquia, bairro..."
                        value={busca}
                        onChange={(e) => setBusca(e.target.value)}
                        className="w-full pl-11 pr-4 py-2.5 rounded-xl border-2 border-red-200 bg-white focus:outline-none focus:border-red-500 text-sm text-gray-700 placeholder-gray-400 shadow-sm transition-colors"
                    />
                </div>
                <button
                    onClick={() => setPainelAberto((v) => !v)}
                    className={`relative flex items-center gap-2 px-4 py-2.5 rounded-xl border-2 font-semibold text-sm transition-all shadow-sm ${painelAberto || totalAtivos > 0
                        ? 'bg-red-600 border-red-600 text-white'
                        : 'bg-white border-red-200 text-red-800 hover:bg-red-50'
                        }`}
                >
                    <SlidersHorizontal className="h-4 w-4" />
                    <span className="hidden sm:inline">Filtros</span>
                    {totalAtivos > 0 && (
                        <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-white text-red-700 text-[10px] font-bold flex items-center justify-center border border-red-300 shadow">
                            {totalAtivos}
                        </span>
                    )}
                </button>
            </div>

            {/* ── Carrossel de Cidades do DF ── */}
            {cidadesAtivas.length > 0 && (
                <div className="mb-6 animate-in fade-in duration-300">
                    <p className="text-[10px] font-bold text-red-700/80 uppercase tracking-wider mb-2 flex items-center gap-1 px-1">
                        <MapPin className="h-3 w-3 text-red-500" />
                        Ir para a cidade:
                    </p>
                    <div className="relative">
                        {/* Container com scroll horizontal */}
                        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-thin-red px-1" style={{ scrollBehavior: 'smooth' }}>
                            {cidadesAtivas.map((cidade) => {
                                const cfg = VICARIATO_CONFIG[cidade.vicariato];
                                return (
                                    <button
                                        key={cidade.id}
                                        onClick={() => {
                                            // Se a cidade pertence a um vicariato que está filtrado fora, ajustamos os filtros
                                            if (filtroVicariatos.size > 0 && !filtroVicariatos.has(cidade.vicariato)) {
                                                setFiltroVicariatos(new Set([cidade.vicariato]));
                                                setFiltroRegioes(new Set());
                                            } else if (filtroRegioes.size > 0 && !filtroRegioes.has(cidade.id)) {
                                                setFiltroRegioes(new Set());
                                            }

                                            // Rolagem com um pequeno delay se o filtro precisou mudar
                                            const delay = (filtroVicariatos.size > 0 && !filtroVicariatos.has(cidade.vicariato)) ? 150 : 0;
                                            
                                            setTimeout(() => {
                                                const element = document.getElementById(`cidade-${cidade.id}`);
                                                if (element) {
                                                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                                    element.classList.add('bg-red-50/70', 'ring-2', 'ring-red-500/20');
                                                    setTimeout(() => {
                                                        element.classList.remove('bg-red-50/70', 'ring-2', 'ring-red-500/20');
                                                    }, 1500);
                                                }
                                            }, delay);
                                        }}
                                        className={cn(
                                            "flex-shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold transition-all shadow-sm border-2 bg-white hover:shadow-md hover:scale-105 active:scale-95 cursor-pointer focus:outline-none focus:ring-2",
                                            VICARIATO_BORDERS[cidade.vicariato]
                                        )}
                                    >
                                        <span className="text-sm leading-none">{cfg.emoji}</span>
                                        <span>{cidade.nome}</span>
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                </div>
            )}

            {/* ── Painel de Filtros ── */}
            {painelAberto && (
                <div className="mb-8 p-5 rounded-2xl border-2 border-red-200 bg-red-50/80 shadow-inner space-y-6">
                    {/* Vicariatos - Modo Foco */}
                    <div className="space-y-4">
                        <div className="flex items-center justify-between">
                            <p className="text-xs font-bold text-red-700 uppercase tracking-wider">Filtrar por Vicariato</p>
                            {filtroVicariatos.size > 0 && (
                                <button 
                                    onClick={() => { setFiltroVicariatos(new Set()); setFiltroRegioes(new Set()); }} 
                                    className="text-[10px] font-bold text-red-600 hover:text-red-800 flex items-center gap-1 bg-white px-2 py-1 rounded-full shadow-sm border border-red-100 transition-all hover:scale-105"
                                >
                                    <XCircle className="h-3 w-3" /> VER TODOS OS VICARIATOS
                                </button>
                            )}
                        </div>
                        <div className="flex flex-wrap gap-3">
                            {VICARIATOS_ORDER.map((v) => {
                                const isSelected = filtroVicariatos.has(v);
                                const isFocused = filtroVicariatos.size > 0;
                                
                                // Se algo está selecionado e este não é o selecionado, some (Modo Foco)
                                if (isFocused && !isSelected) return null;
                                
                                const cfg = VICARIATO_CONFIG[v];
                                return (
                                    <button 
                                        key={v} 
                                        onClick={() => toggleVic(v)}
                                        className={cn(
                                            "px-4 py-2.5 rounded-2xl text-sm font-bold border-2 transition-all flex items-center gap-3 shadow-sm",
                                            isSelected
                                                ? "bg-red-700 border-red-700 text-white scale-100"
                                                : `${cfg.gradient} ${cfg.titleColor} ${cfg.borderColor} hover:scale-105 hover:shadow-md`
                                        )}
                                    >
                                        <span className="text-lg">{cfg.emoji}</span>
                                        Vicariato {v}
                                        {isSelected && <XCircle className="h-4 w-4 opacity-50 ml-1" />}
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    {/* Regiões / Cidades - Modo Foco */}
                    {filtroVicariatos.size === 1 && (
                        <div className="space-y-4 animate-in fade-in slide-in-from-top-4 duration-500 border-t border-red-100 pt-6">
                            <div className="flex items-center justify-between">
                                <p className="text-xs font-bold text-red-700 uppercase tracking-wider">Região Administrativa</p>
                                {filtroRegioes.size > 0 && (
                                    <button 
                                        onClick={() => setFiltroRegioes(new Set())} 
                                        className="text-[10px] font-bold text-red-600 hover:text-red-800 flex items-center gap-1 bg-white px-2 py-1 rounded-full shadow-sm border border-red-100 transition-all hover:scale-105"
                                    >
                                        <XCircle className="h-3 w-3" /> TODAS DO VICARIATO
                                    </button>
                                )}
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {regioes
                                    .filter(r => filtroVicariatos.has(r.vicariato))
                                    .filter(r => {
                                        // HIDE cities without content unless filtered
                                        if (r.devocoes.length > 0) return true;
                                        if (filtroRegioes.has(r.id)) return true;
                                        return false;
                                    })
                                    .map(r => {
                                        const isSelected = filtroRegioes.has(r.id);
                                        const isAnyRegSelected = filtroRegioes.size > 0;
                                        
                                        if (isAnyRegSelected && !isSelected) return null;

                                        return (
                                            <button 
                                                key={r.id} 
                                                onClick={() => toggleRegiao(r.id)}
                                                className={cn(
                                                    "px-3 py-2 rounded-xl text-xs font-bold border-2 transition-all flex items-center gap-2",
                                                    isSelected
                                                        ? "bg-red-800 border-red-800 text-white shadow-md scale-100"
                                                        : "bg-white border-red-100 text-red-800 hover:border-red-300 hover:shadow-sm"
                                                )}
                                            >
                                                {r.nome}
                                                {isSelected && <XCircle className="h-3 w-3 opacity-50" />}
                                            </button>
                                        );
                                    })
                                }
                            </div>
                        </div>
                    )}

                    {/* Tipo de Conteúdo */}
                    <div className="space-y-4 border-t border-red-100 pt-6">
                        <div className="flex items-center justify-between">
                            <p className="text-xs font-bold text-red-700 uppercase tracking-wider">O que você procura?</p>
                            {filtroTipos.size > 0 && (
                                <button 
                                    onClick={() => setFiltroTipos(new Set())} 
                                    className="text-[10px] font-bold text-red-600 hover:text-red-800 flex items-center gap-1 bg-white px-2 py-1 rounded-full shadow-sm border border-red-100 transition-all hover:scale-105"
                                >
                                    <XCircle className="h-3 w-3" /> VER TUDO
                                </button>
                            )}
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {TIPOS_FILTRO.map((f) => {
                                const isSelected = filtroTipos.has(f.value);
                                if (filtroTipos.size > 0 && !isSelected) return null;
                                return (
                                    <button 
                                        key={f.value} 
                                        onClick={() => toggleTipo(f.value)}
                                        className={cn(
                                            "px-4 py-2 rounded-xl text-xs font-bold border-2 transition-all flex items-center gap-2",
                                            isSelected
                                                ? "bg-red-700 border-red-700 text-white shadow-md"
                                                : `${tipoColor[f.value]} hover:border-red-300 hover:shadow-sm`
                                        )}
                                    >
                                        {f.label}
                                        {isSelected && <XCircle className="h-3 w-3 opacity-50" />}
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    {totalAtivos > 0 && (
                        <div className="pt-2">
                            <button onClick={limpar} className="text-xs font-bold text-red-700 hover:text-red-900 border-b border-red-700 border-dotted">
                                Limpar todos os filtros selecionados
                            </button>
                        </div>
                    )}
                </div>
            )}

            {/* ── Resultado vazio ── */}
            {(statsGlobais.paroquias + statsGlobais.devocoes) === 0 ? (
                <div className="text-center py-20 text-red-700/50">
                    <Users className="mx-auto h-14 w-14 mb-4 opacity-30" />
                    <p className="text-base font-semibold">Em breve os grupos serão cadastrados aqui!</p>
                    <p className="text-sm mt-1 text-gray-400">Envie as imagens e informações para começarmos.</p>
                </div>
            ) : porVicariato.length === 0 ? (
                <div className="text-center py-16 text-red-700/50">
                    <Search className="mx-auto h-12 w-12 mb-4 opacity-30" />
                    <p className="text-base font-semibold">Nenhum resultado encontrado.</p>
                    <button onClick={limpar} className="mt-3 text-sm text-red-700 underline hover:text-red-900">
                        Limpar filtros
                    </button>
                </div>
            ) : (
                /* ── Blocos por Vicariato — mesmo padrão da galeria mariana ── */
                <div className="space-y-12">
                    {porVicariato.map(({ vic, regioes: regs, countParoquias }) => {
                        const cfg = VICARIATO_CONFIG[vic];
                        return (
                            <div
                                key={vic}
                                className={`p-8 rounded-3xl shadow-lg border transition-all duration-500 ${cfg.gradient}`}
                            >
                                <div className="space-y-4">
                                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-white/50 pb-4">
                                        <div className="flex items-center gap-4">
                                            <div>
                                                <h2 className={`text-3xl font-black flex items-center gap-3 ${cfg.titleColor}`}>
                                                    <span className="text-4xl">{cfg.emoji}</span> Vicariato {vic}
                                                </h2>
                                                <div className="flex items-center gap-3 mt-1 ml-1">
                                                    <p className="text-gray-600 font-medium text-sm">Arquidiocese de Brasília</p>
                                                    {paroquiaSelecionada && (
                                                        <span className={`px-2 py-0.5 rounded-full text-[10px] text-white font-bold ${cfg.badgeBg}`}>
                                                            {countParoquias} Paróquias
                                                        </span>
                                                    )}
                                                </div>
                                            </div>
                                        </div>

                                        {/* Infocard do Vicariato - SÓ APARECE SE FILTRAR POR PARÓQUIA */}
                                        {paroquiaSelecionada && vicariatosInfo[vic as Vicariato] && (
                                            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-4 border border-white/80 shadow-inner text-xs space-y-2 min-w-[300px]">
                                                <div className="flex items-center gap-2 text-gray-800">
                                                    <Shield className="h-3.5 w-3.5 text-blue-600" />
                                                    <span className="font-bold">Bispo:</span> {vicariatosInfo[vic as Vicariato].bispo}
                                                </div>
                                                <div className="flex items-center gap-2 text-gray-700">
                                                    <User className="h-3.5 w-3.5 text-gray-500" />
                                                    <span className="font-bold">Vigário Episcopal:</span> {vicariatosInfo[vic as Vicariato].vigario}
                                                </div>
                                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 border-t border-gray-200/50">
                                                    <div className="flex items-center gap-2">
                                                        <Phone className="h-3 w-3 text-green-600" />
                                                        <span>{vicariatosInfo[vic as Vicariato].telefone} ({vicariatosInfo[vic as Vicariato].secretaria})</span>
                                                    </div>
                                                    <div className="flex items-center gap-2">
                                                        <Mail className="h-3 w-3 text-red-500" />
                                                        <span className="truncate">{vicariatosInfo[vic as Vicariato].email}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* Sub-blocos por Região Administrativa */}
                                <div className="space-y-10">
                                    {regs.map((regiao) => (
                                        <div key={regiao.id} id={`cidade-${regiao.id}`} className="scroll-mt-12 transition-all duration-500 rounded-2xl p-2 -m-2">
                                            {/* Cabeçalho da RA */}
                                            <div className="flex items-center gap-3 mb-6 flex-wrap">
                                                <h4 className={`text-lg font-bold ${cfg.titleColor}`}>{regiao.nome}</h4>
                                                {paroquiaSelecionada && (
                                                    <span className={`text-xs font-bold text-white px-2 py-0.5 rounded-full ${cfg.badgeBg}`}>
                                                        {regiao.devocoes.filter(d => d.tipo === 'paroquia').length} Paróquias
                                                    </span>
                                                )}
                                                {!paroquiaSelecionada && (
                                                    <span className={`text-xs font-bold text-white px-2 py-0.5 rounded-full ${cfg.badgeBg}`}>
                                                        Setor RCC {regiao.setorRCC}
                                                    </span>
                                                )}
                                            </div>

                                            {/* Grid de círculos — mesmo formato da galeria mariana */}
                                            {regiao.devocoes.length === 0 ? (
                                                <p className="text-sm text-gray-400 italic text-center py-4">
                                                    Nenhuma devoção cadastrada nesta região ainda.
                                                </p>
                                            ) : (
                                                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
                                                    {regiao.devocoes.map((devocao) => (
                                                        <DevocaoDialogWrapper
                                                            key={devocao.id}
                                                            devocao={devocao}
                                                            config={cfg}
                                                            todasDevocoes={todasDevocoes}
                                                            devocaoParaCidade={devocaoParaCidade}
                                                        />
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}
        </section>
    );
}
