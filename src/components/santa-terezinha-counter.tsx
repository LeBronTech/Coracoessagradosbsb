'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { Plus, Minus, RotateCcw, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SantaTerezinhaCounterProps {
  dayIndex: number;
  className?: string;
}

export function SantaTerezinhaGloryCounter({ dayIndex, className }: SantaTerezinhaCounterProps) {
  const TOTAL_GLORIAS = 24;
  const storageKey = `terezinha_glorias_day_${dayIndex}`;

  const [count, setCount] = useState<number>(0);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number }>>([]);

  // Carrega contagem salva no localStorage
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem(storageKey);
      if (saved !== null) {
        const parsed = parseInt(saved, 10);
        if (!isNaN(parsed) && parsed >= 0 && parsed <= TOTAL_GLORIAS) {
          setCount(parsed);
        }
      }
    }
  }, [storageKey]);

  // Salva no localStorage a cada alteração
  const updateCount = useCallback((newVal: number) => {
    setCount(newVal);
    if (typeof window !== 'undefined') {
      localStorage.setItem(storageKey, newVal.toString());
    }
  }, [storageKey]);

  const triggerHaptic = () => {
    if (typeof window !== 'undefined' && 'navigator' in window && navigator.vibrate) {
      navigator.vibrate(20);
    }
  };

  const handleIncrement = () => {
    if (count < TOTAL_GLORIAS) {
      const nextVal = count + 1;
      updateCount(nextVal);
      triggerHaptic();

      // Animação de pulso e efeito na pétala
      setIsAnimating(true);
      setTimeout(() => setIsAnimating(false), 260);

      // Gera pequenas pétalas flutuantes como feedback de clique
      const newParticle = {
        id: Date.now() + Math.random(),
        x: (Math.random() - 0.5) * 40,
        y: -10 - Math.random() * 20,
      };
      setParticles(prev => [...prev.slice(-4), newParticle]);
      setTimeout(() => {
        setParticles(prev => prev.filter(p => p.id !== newParticle.id));
      }, 700);
    }
  };

  const handleDecrement = () => {
    if (count > 0) {
      updateCount(count - 1);
      triggerHaptic();
    }
  };

  const handleReset = () => {
    updateCount(0);
    triggerHaptic();
  };

  const isCompleted = count >= TOTAL_GLORIAS;
  const progressPercent = Math.min(100, Math.round((count / TOTAL_GLORIAS) * 100));

  return (
    <div
      className={cn(
        'relative my-4 overflow-hidden rounded-2xl border transition-all duration-500 select-none',
        isCompleted
          ? 'bg-gradient-to-b from-rose-950/40 via-red-950/30 to-amber-950/30 border-amber-400/50 shadow-[0_10px_35px_rgba(244,63,94,0.25)]'
          : 'bg-gradient-to-b from-rose-950/20 via-black/25 to-rose-950/30 border-rose-400/30 shadow-lg',
        className
      )}
    >
      {/* Brilho decorativo sutil no topo */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-rose-300/50 to-transparent pointer-events-none" />

      <div className="p-4 sm:p-5 flex flex-col items-center text-center">
        {/* Título com ícone */}
        <div className="flex items-center justify-center gap-2 mb-1">
          <span className="text-base sm:text-lg animate-pulse">🌹</span>
          <h4 className="text-sm sm:text-base font-bold text-rose-100 font-brand tracking-wide">
            Contador das 24 Glórias
          </h4>
          <span className="text-base sm:text-lg animate-pulse">🌹</span>
        </div>

        <p className="text-[11px] sm:text-xs text-rose-200/80 mb-3 max-w-sm">
          Toque no botão <strong className="text-rose-100">+</strong> ou <strong className="text-rose-100 font-semibold">direto na pétala central</strong> para cada Glória rezada pelos 24 anos de Santa Terezinha.
        </p>

        {/* Display do contador e controles principais (+, pétala central, -) */}
        <div className="flex items-center justify-center gap-4 sm:gap-6 my-2 relative">
          {/* Partículas de pétalas que sobem ao clicar */}
          {particles.map(p => (
            <span
              key={p.id}
              className="absolute pointer-events-none text-rose-400 font-bold text-xs animate-out fade-out zoom-out duration-700 -translate-y-8"
              style={{ transform: `translate(${p.x}px, ${p.y}px)` }}
            >
              🌹 +1
            </span>
          ))}

          {/* Botão Diminuir (-) */}
          <button
            type="button"
            onClick={handleDecrement}
            disabled={count === 0}
            className={cn(
              'w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center border transition-all duration-200 shadow-md',
              'bg-white/10 hover:bg-white/20 active:scale-95 border-rose-300/30 text-rose-100',
              count === 0 && 'opacity-30 cursor-not-allowed hover:bg-white/10 active:scale-100'
            )}
            title="Diminuir uma oração (-)"
            aria-label="Diminuir oração"
          >
            <Minus className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Pétala Central Clicável com Efeito de Pulso e Número */}
          <div className="flex flex-col items-center">
            <button
              type="button"
              onClick={handleIncrement}
              disabled={isCompleted}
              className={cn(
                'group relative flex items-center justify-center transition-transform duration-200 focus:outline-none',
                isCompleted ? 'cursor-default' : 'cursor-pointer hover:scale-105 active:scale-90',
                isAnimating && 'scale-110'
              )}
              title={isCompleted ? '24 orações completadas!' : 'Clique na pétala para somar +1'}
              aria-label="Clique na pétala para contar uma oração"
            >
              {/* Anel de brilho suave ao redor da pétala */}
              <div
                className={cn(
                  'absolute -inset-2 rounded-full transition-opacity duration-300 blur-md pointer-events-none',
                  isCompleted
                    ? 'bg-amber-400/40 opacity-100 animate-pulse'
                    : 'bg-rose-500/30 opacity-70 group-hover:opacity-100'
                )}
              />

              {/* Desenho da Pétala em SVG com degradê hiper-realista */}
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center drop-shadow-[0_8px_16px_rgba(225,29,72,0.45)]">
                <svg
                  viewBox="0 0 100 100"
                  className={cn(
                    'w-full h-full transition-transform duration-300',
                    isAnimating ? 'rotate-6 scale-105' : 'rotate-0'
                  )}
                >
                  <defs>
                    {/* Gradiente da pétala de rosa */}
                    <linearGradient id="rosePetalGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#f43f5e" />
                      <stop offset="35%" stopColor="#e11d48" />
                      <stop offset="75%" stopColor="#be123c" />
                      <stop offset="100%" stopColor="#881337" />
                    </linearGradient>
                    {/* Brilho da borda da pétala */}
                    <linearGradient id="petalHighlight" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#fda4af" stopOpacity="0.8" />
                      <stop offset="60%" stopColor="#f43f5e" stopOpacity="0.2" />
                      <stop offset="100%" stopColor="#9f1239" stopOpacity="0" />
                    </linearGradient>
                    {/* Gradiente dourado se completou */}
                    <linearGradient id="goldPetalGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#fbbf24" />
                      <stop offset="50%" stopColor="#f59e0b" />
                      <stop offset="100%" stopColor="#b45309" />
                    </linearGradient>
                  </defs>

                  {/* Silhueta realista da pétala de rosa */}
                  <path
                    d="M 50 8 
                       C 68 8, 92 25, 92 52 
                       C 92 78, 68 94, 50 94 
                       C 32 94, 8 78, 8 52 
                       C 8 25, 32 8, 50 8 Z"
                    fill={isCompleted ? 'url(#goldPetalGrad)' : 'url(#rosePetalGrad)'}
                    stroke={isCompleted ? '#fef08a' : '#fecdd3'}
                    strokeWidth="1.5"
                    strokeOpacity="0.7"
                  />

                  {/* Nervura e curva central da pétala */}
                  <path
                    d="M 50 14 C 48 35, 49 65, 50 88"
                    fill="none"
                    stroke={isCompleted ? '#fde047' : '#fda4af'}
                    strokeWidth="1"
                    strokeDasharray="2 2"
                    strokeOpacity="0.4"
                  />

                  {/* Curvatura de volume superior da pétala */}
                  <path
                    d="M 28 26 C 42 16, 58 16, 72 26"
                    fill="none"
                    stroke={isCompleted ? '#fef9c3' : '#ffe4e6'}
                    strokeWidth="1.5"
                    strokeOpacity="0.6"
                  />
                </svg>

                {/* Número do contador no centro da pétala */}
                <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                  <span className="text-xl sm:text-2xl font-extrabold font-brand text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                    {count}
                  </span>
                  <span className="text-[10px] font-semibold text-rose-100/90 drop-shadow">
                    de {TOTAL_GLORIAS}
                  </span>
                </div>
              </div>
            </button>

            {/* Texto de apoio sob a pétala */}
            <span className="text-[10px] sm:text-xs font-semibold text-rose-200 mt-1 uppercase tracking-wider flex items-center gap-1">
              {isCompleted ? 'Completado!' : 'Toque na pétala'}
            </span>
          </div>

          {/* Botão Aumentar (+) */}
          <button
            type="button"
            onClick={handleIncrement}
            disabled={isCompleted}
            className={cn(
              'w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center border transition-all duration-200 shadow-md',
              'bg-rose-600 hover:bg-rose-500 active:scale-95 border-rose-300/40 text-white shadow-rose-900/40',
              isCompleted && 'opacity-30 cursor-not-allowed bg-white/10 hover:bg-white/10 active:scale-100'
            )}
            title="Adicionar uma oração (+)"
            aria-label="Adicionar oração"
          >
            <Plus className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>

        {/* Barra e Grade com os 24 Anos / Pétalas */}
        <div className="w-full max-w-md mt-3 px-2">
          {/* Barra de progresso contínua */}
          <div className="w-full h-2 rounded-full bg-black/40 overflow-hidden border border-white/10 p-[1px]">
            <div
              className={cn(
                'h-full rounded-full transition-all duration-300 ease-out',
                isCompleted
                  ? 'bg-gradient-to-r from-amber-400 via-rose-400 to-amber-300 shadow-[0_0_12px_rgba(251,191,36,0.8)]'
                  : 'bg-gradient-to-r from-rose-600 to-rose-400 shadow-[0_0_8px_rgba(244,63,94,0.6)]'
              )}
              style={{ width: `${progressPercent}%` }}
            />
          </div>

          {/* 24 marcadores discretos representando cada ano na terra */}
          <div className="grid grid-cols-12 gap-1 mt-2">
            {Array.from({ length: TOTAL_GLORIAS }).map((_, i) => (
              <div
                key={i}
                title={`Glória ${i + 1} de 24`}
                className={cn(
                  'h-1.5 rounded-full transition-all duration-300',
                  i < count
                    ? (isCompleted ? 'bg-amber-400 shadow-[0_0_4px_#fbbf24]' : 'bg-rose-400 shadow-[0_0_4px_#f43f5e]')
                    : 'bg-white/15'
                )}
              />
            ))}
          </div>
        </div>

        {/* Feedback especial ao atingir 24 orações */}
        {isCompleted && (
          <div className="mt-3.5 px-4 py-2 rounded-xl bg-amber-500/20 border border-amber-300/40 text-amber-100 text-xs sm:text-sm font-medium flex items-center justify-center gap-2 animate-in fade-in zoom-in duration-300">
            <Sparkles className="w-4 h-4 text-amber-300 shrink-0" />
            <span>
              <strong>Glória completada!</strong> 24 orações rezadas pelos 24 anos terrenos de Santa Terezinha.
            </span>
          </div>
        )}

        {/* Botão sutil para reiniciar contagem caso o fiel queira rezar novamente */}
        {count > 0 && (
          <button
            type="button"
            onClick={handleReset}
            className="mt-2 text-[11px] text-rose-300/70 hover:text-rose-200 transition-colors flex items-center gap-1 cursor-pointer py-1"
            title="Reiniciar contador para 0"
          >
            <RotateCcw className="w-3 h-3" />
            <span>Zerar contador</span>
          </button>
        )}
      </div>
    </div>
  );
}
