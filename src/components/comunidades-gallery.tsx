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
} from 'lucide-react';

// Gera URL do Google Maps automaticamente a partir dos campos disponíveis
function getMapsUrl(d: { endereco?: string; bairro?: string; paroquia?: string }): string | null {
    const texto = d.endereco || d.bairro || d.paroquia;
    if (!texto) return null;
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(texto + ', Brasília DF')}`;
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
}> = {
    Centro: {
        gradient: 'bg-gradient-to-br from-amber-50 to-yellow-50 border-amber-100',
        titleColor: 'text-amber-800',
        borderColor: 'border-amber-200',
        circleBase: 'border-amber-200',
        circleHover: 'group-hover:border-amber-500',
        badgeBg: 'bg-amber-600',
        emoji: '🟡',
    },
    Norte: {
        gradient: 'bg-gradient-to-br from-sky-50 to-blue-50 border-sky-100',
        titleColor: 'text-sky-800',
        borderColor: 'border-sky-200',
        circleBase: 'border-sky-200',
        circleHover: 'group-hover:border-sky-500',
        badgeBg: 'bg-sky-600',
        emoji: '🔵',
    },
    Sul: {
        gradient: 'bg-gradient-to-br from-green-50 to-emerald-50 border-green-100',
        titleColor: 'text-green-800',
        borderColor: 'border-green-200',
        circleBase: 'border-green-200',
        circleHover: 'group-hover:border-green-500',
        badgeBg: 'bg-green-700',
        emoji: '🟢',
    },
    Leste: {
        gradient: 'bg-gradient-to-br from-rose-50 to-pink-50 border-rose-100',
        titleColor: 'text-rose-800',
        borderColor: 'border-rose-200',
        circleBase: 'border-rose-200',
        circleHover: 'group-hover:border-rose-500',
        badgeBg: 'bg-rose-600',
        emoji: '🔴',
    },
};

// ── Modal de Devoção ────────────────────────────────────────────
function DevocaoDialogWrapper({
    devocao,
    config,
}: {
    devocao: Devocao;
    config: typeof VICARIATO_CONFIG[Vicariato];
}) {
    const [open, setOpen] = useState(false);

    React.useEffect(() => {
        if (open) {
            window.history.pushState({ modal: 'comunidadesGallery' }, '');
            const handlePopState = () => setOpen(false);
            window.addEventListener('popstate', handlePopState);
            return () => window.removeEventListener('popstate', handlePopState);
        }
    }, [open]);

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
                    <p className="text-center mt-6 text-sm font-semibold text-slate-700 line-clamp-2 px-2 h-10 flex items-center justify-center">
                        {devocao.nome}
                    </p>
                </div>
            </DialogTrigger>

            <DialogContent className="max-w-lg w-full rounded-2xl border-0 p-0 overflow-hidden shadow-2xl">
                {/* Header colorido */}
                <div className={`relative h-44 flex items-center justify-center ${config.badgeBg}`}>
                    <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-xl">
                        <Image src={devocao.imageUrl} alt={devocao.nome} fill className="object-cover" sizes="96px" />
                    </div>
                    <DialogClose asChild>
                        <button className="absolute top-3 left-3 flex items-center gap-1 text-white/80 hover:text-white text-sm transition-colors">
                            <ArrowLeft className="h-4 w-4" />
                            Voltar
                        </button>
                    </DialogClose>
                </div>

                <ScrollArea className="max-h-[60vh]">
                    <div className="p-6 space-y-4">
                        <div className="text-center">
                            <DialogHeader>
                                <DialogTitle className="text-xl font-bold text-slate-800 font-brand">{devocao.nome}</DialogTitle>
                            </DialogHeader>
                            <span className={`inline-block mt-1 text-xs px-3 py-1 rounded-full border font-semibold ${tipoColor[devocao.tipo]}`}>
                                {tipoLabel[devocao.tipo]}
                            </span>
                        </div>

                        <p className="text-sm text-gray-700 leading-relaxed text-center">{devocao.descricao}</p>

                        {/* ── Botões de ação: Instagram e Google Maps ── */}
                        {(() => {
                            const mapsUrl = getMapsUrl(devocao);
                            if (!devocao.instagram && !mapsUrl) return null;
                            return (
                                <div className="flex gap-3 justify-center pt-1 flex-wrap">
                                    {devocao.instagram && (
                                        <a
                                            href={`https://instagram.com/${devocao.instagram.replace('@', '')}`}
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
                            {devocao.paroquia && (
                                <div className="flex items-start gap-2 text-sm text-gray-600">
                                    <Building2 className="h-4 w-4 text-amber-600 mt-0.5 shrink-0" />
                                    <span><strong>Paróquia:</strong> {devocao.paroquia}</span>
                                </div>
                            )}
                            {devocao.bairro && (
                                <div className="flex items-start gap-2 text-sm text-gray-600">
                                    <MapPin className="h-4 w-4 text-amber-600 mt-0.5 shrink-0" />
                                    <span>{devocao.bairro}</span>
                                </div>
                            )}
                            {devocao.endereco && (
                                <div className="flex items-start gap-2 text-sm text-gray-600">
                                    <MapPin className="h-4 w-4 text-amber-600 mt-0.5 shrink-0" />
                                    <span>{devocao.endereco}</span>
                                </div>
                            )}
                            {devocao.horarios && (
                                <div className="flex items-start gap-2 text-sm text-gray-600">
                                    <Clock className="h-4 w-4 text-amber-600 mt-0.5 shrink-0" />
                                    <span>{devocao.horarios}</span>
                                </div>
                            )}
                            {devocao.contato && (
                                <div className="flex items-start gap-2 text-sm text-gray-600">
                                    <Phone className="h-4 w-4 text-amber-600 mt-0.5 shrink-0" />
                                    <span>{devocao.contato}</span>
                                </div>
                            )}
                            {devocao.site && (
                                <div className="flex items-start gap-2 text-sm text-gray-600">
                                    <Globe className="h-4 w-4 text-amber-600 mt-0.5 shrink-0" />
                                    <a
                                        href={devocao.site}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-amber-700 hover:underline font-medium"
                                    >
                                        {devocao.site}
                                    </a>
                                </div>
                            )}
                        </div>
                    </div>
                </ScrollArea>
            </DialogContent>
        </Dialog>
    );
}

// ── Galeria Principal ───────────────────────────────────────────
export function ComunidadesGallery({ regioes }: Props) {
    const [busca, setBusca] = useState('');
    const [filtroTipos, setFiltroTipos] = useState<Set<TipoDevocao>>(new Set());
    const [filtroVicariatos, setFiltroVicariatos] = useState<Set<Vicariato>>(new Set());
    const [painelAberto, setPainelAberto] = useState(false);

    const toggleTipo = (t: TipoDevocao) =>
        setFiltroTipos((p) => { const n = new Set(p); n.has(t) ? n.delete(t) : n.add(t); return n; });

    const toggleVic = (v: Vicariato) =>
        setFiltroVicariatos((p) => {
            const n = new Set<Vicariato>();
            if (!p.has(v)) n.add(v);
            return n;
        });

    const limpar = () => { setFiltroTipos(new Set()); setFiltroVicariatos(new Set()); setBusca(''); };

    const totalAtivos = filtroTipos.size + filtroVicariatos.size + (busca ? 1 : 0);
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
            // Quando há filtros ativos ou busca, oculta regiões sem resultados
            .filter((r) => !filtrosAtivos || r.devocoes.length > 0),
        [regioes, filtroTipos, filtroVicariatos, busca, filtrosAtivos, paroquiaSelecionada]
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

    return (
        <section className="mb-12">
            <h2 className="text-4xl font-bold text-amber-900 text-center mb-4 font-brand">
                ✝ Encontre Seu Lugar ✝
            </h2>
            <div className="flex flex-col items-center gap-2 mb-8">
                <p className="text-center text-slate-600 max-w-2xl mx-auto">
                    Explore grupos jovens, movimentos, comunidades e devoções organizados por região do Distrito Federal.
                </p>
            </div>

            {/* ── Busca + Filtros ── */}
            <div className="flex gap-3 mb-4">
                <div className="relative flex-1">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-amber-500" />
                    <input
                        type="text"
                        placeholder="Buscar grupo, paróquia, bairro..."
                        value={busca}
                        onChange={(e) => setBusca(e.target.value)}
                        className="w-full pl-11 pr-4 py-2.5 rounded-xl border-2 border-amber-200 bg-white focus:outline-none focus:border-amber-500 text-sm text-gray-700 placeholder-gray-400 shadow-sm transition-colors"
                    />
                </div>
                <button
                    onClick={() => setPainelAberto((v) => !v)}
                    className={`relative flex items-center gap-2 px-4 py-2.5 rounded-xl border-2 font-semibold text-sm transition-all shadow-sm ${painelAberto || totalAtivos > 0
                        ? 'bg-amber-600 border-amber-600 text-white'
                        : 'bg-white border-amber-200 text-amber-800 hover:bg-amber-50'
                        }`}
                >
                    <SlidersHorizontal className="h-4 w-4" />
                    <span className="hidden sm:inline">Filtros</span>
                    {totalAtivos > 0 && (
                        <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-white text-amber-700 text-[10px] font-bold flex items-center justify-center border border-amber-300 shadow">
                            {totalAtivos}
                        </span>
                    )}
                </button>
            </div>

            {/* ── Painel de Filtros ── */}
            {painelAberto && (
                <div className="mb-8 p-5 rounded-2xl border-2 border-amber-200 bg-amber-50/80 shadow-inner space-y-4">
                    <div>
                        <p className="text-xs font-bold text-amber-700 uppercase tracking-wider mb-2">Vicariato</p>
                        <div className="flex flex-wrap gap-2">
                            {VICARIATOS_ORDER.map((v) => {
                                const cfg = VICARIATO_CONFIG[v];
                                return (
                                    <button key={v} onClick={() => toggleVic(v)}
                                        className={`px-3 py-1.5 rounded-full text-xs font-semibold border-2 transition-all ${filtroVicariatos.has(v)
                                            ? 'bg-amber-700 border-amber-700 text-white scale-105 shadow'
                                            : `${cfg.gradient} ${cfg.titleColor} ${cfg.borderColor}`
                                            }`}
                                    >
                                        {cfg.emoji} {v}
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                    <div>
                        <p className="text-xs font-bold text-amber-700 uppercase tracking-wider mb-2">Tipo de Grupo</p>
                        <div className="flex flex-wrap gap-2">
                            {TIPOS_FILTRO.map((f) => (
                                <button key={f.value} onClick={() => toggleTipo(f.value)}
                                    className={`px-3 py-1.5 rounded-full text-xs font-semibold border-2 transition-all ${filtroTipos.has(f.value)
                                        ? 'bg-amber-700 border-amber-700 text-white scale-105 shadow'
                                        : tipoColor[f.value]
                                        }`}
                                >
                                    {f.label}
                                </button>
                            ))}
                        </div>
                    </div>
                    {totalAtivos > 0 && (
                        <button onClick={limpar} className="text-xs text-amber-700 underline hover:text-amber-900">
                            Limpar todos os filtros
                        </button>
                    )}
                </div>
            )}

            {/* ── Resultado vazio ── */}
            {(statsGlobais.paroquias + statsGlobais.devocoes) === 0 ? (
                <div className="text-center py-20 text-amber-700/50">
                    <Users className="mx-auto h-14 w-14 mb-4 opacity-30" />
                    <p className="text-base font-semibold">Em breve os grupos serão cadastrados aqui!</p>
                    <p className="text-sm mt-1 text-gray-400">Envie as imagens e informações para começarmos.</p>
                </div>
            ) : porVicariato.length === 0 ? (
                <div className="text-center py-16 text-amber-700/50">
                    <Search className="mx-auto h-12 w-12 mb-4 opacity-30" />
                    <p className="text-base font-semibold">Nenhum resultado encontrado.</p>
                    <button onClick={limpar} className="mt-3 text-sm text-amber-700 underline hover:text-amber-900">
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
                                        <div key={regiao.id}>
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
