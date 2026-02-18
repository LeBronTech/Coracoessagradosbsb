'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronLeft, Users } from 'lucide-react';
import { ComunidadesGallery } from '@/components/comunidades-gallery';
import { regioesAdministrativas } from '@/lib/comunidades-data';

export default function EncontreSeuLugarPage() {
    // Calculando estatísticas para o cabeçalho
    const stats = regioesAdministrativas.reduce((acc, r) => {
        r.devocoes.forEach(d => {
            if (d.tipo === 'paroquia') acc.paroquias++;
            else acc.devocoes++;
        });
        return acc;
    }, { paroquias: 0, devocoes: 0 });

    return (
        <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-yellow-50">
            {/* ── Header ── */}
            <header className="bg-gradient-to-r from-amber-700 via-amber-600 to-amber-700 text-white py-16 px-4 shadow-2xl relative overflow-hidden">
                {/* Padrão decorativo */}
                <div className="absolute inset-0 opacity-10 pointer-events-none select-none">
                    <div className="absolute top-4 left-8 text-6xl">✝</div>
                    <div className="absolute top-8 right-16 text-4xl">✝</div>
                    <div className="absolute bottom-4 left-1/4 text-5xl">✝</div>
                    <div className="absolute bottom-8 right-1/3 text-3xl">✝</div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-9xl opacity-20">✝</div>
                </div>

                <div className="container mx-auto max-w-7xl relative z-10">
                    <Link
                        href="/"
                        className="inline-flex items-center text-amber-100 hover:text-white mb-6 transition-colors"
                    >
                        <ChevronLeft className="mr-2 h-5 w-5" />
                        Voltar ao Início
                    </Link>

                    <div className="text-center">
                        <div className="flex justify-center mb-4">
                            <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-lg">
                                <Users className="h-8 w-8 text-white" />
                            </div>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight drop-shadow-lg font-brand">
                            Encontre Seu Lugar
                        </h1>
                        <p className="text-xl text-amber-100 max-w-3xl mx-auto mb-3">
                            Grupos Jovens, Movimentos, Comunidades e Devoções no Distrito Federal
                        </p>
                        <p className="text-base text-amber-50 italic">
                            "Onde dois ou três estiverem reunidos em meu nome, ali estou eu no meio deles" — Mt 18,20
                        </p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-10 mt-8">
                        <div className="text-center group">
                            <p className="text-4xl font-black text-white group-hover:scale-110 transition-transform">
                                {stats.paroquias}
                            </p>
                            <p className="text-amber-200 text-xs font-bold uppercase tracking-widest mt-1">Paróquias</p>
                        </div>
                        <div className="w-px h-12 bg-white/20 hidden sm:block self-center" />
                        <div className="text-center group">
                            <p className="text-4xl font-black text-white group-hover:scale-110 transition-transform">
                                {stats.devocoes}
                            </p>
                            <p className="text-amber-200 text-xs font-bold uppercase tracking-widest mt-1">Devoções & Grupos</p>
                        </div>
                    </div>
                </div>
            </header>



            {/* ── Conteúdo Principal ── */}
            <main className="container mx-auto max-w-7xl px-4 py-10">
                <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-xl p-6 md:p-10 border border-amber-100">
                    <ComunidadesGallery regioes={regioesAdministrativas} />
                </div>

                <p className="mt-8 text-center text-amber-700/60 text-sm">
                    Quer cadastrar seu grupo ou movimento? Entre em contato com a administração.
                </p>
            </main>
        </div>
    );
}
