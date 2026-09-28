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

      setIsAnimating(true);
      setTimeout(() => setIsAnimating(false), 240);

      const newParticle = {
        id: Date.now() + Math.random(),
        x: (Math.random() - 0.5) * 36,
        y: -12 - Math.random() * 16,
      };
      setParticles(prev => [...prev.slice(-3), newParticle]);
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

  return (
    <div
      className={cn(
        'relative my-4 overflow-hidden rounded-2xl border transition-all duration-500 select-none',
        isCompleted
          ? 'bg-gradient-to-b from-red-950/60 via-red-900/40 to-red-950/60 border-2 border-white/70 shadow-[0_8px_30px_rgba(255,255,255,0.2)]'
          : 'bg-gradient-to-b from-rose-950/15 via-black/20 to-rose-950/25 border-rose-400/25 shadow-md',
        className
      )}
    >
      <div className="p-3.5 sm:p-4 flex flex-col items-center text-center">
        {/* Caixa com fundo branco contendo a própria oração das 24 vezes */}
        <div 
          className="w-full rounded-xl p-4 shadow-md border mb-4 text-left terezinha-prayer-box" 
          style={{ backgroundColor: '#ffffff', borderColor: '#e5e7eb', color: '#1c1917' }}
        >
          <div 
            className="font-bold mb-1.5 leading-relaxed text-xs sm:text-sm" 
            style={{ color: '#1c1917', fontWeight: 700 }}
          >
            Em seguida rezar 24 vezes, por cada ano de Santa Terezinha na terra:
          </div>
          <div 
            className="italic font-bold leading-relaxed text-xs sm:text-sm gloria-text" 
            style={{ color: '#9f1239', fontWeight: 700 }}
          >
            “Glória ao Pai, ao Filho e ao Espírito Santo como era no princípio, agora e sempre. Amém.”
          </div>
        </div>

        {/* Display do contador: botão (-), Pétala Central Clicável e botão (+) */}
        <div className="flex items-center justify-center gap-4 sm:gap-6 my-1 relative">
          {/* Partículas de feedback de clique */}
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
              'w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center border transition-all duration-200 shadow-md',
              'bg-white/10 hover:bg-white/20 active:scale-95 border-rose-300/30 text-rose-100',
              count === 0 && 'opacity-30 cursor-not-allowed hover:bg-white/10 active:scale-100'
            )}
            title="Diminuir uma oração (-)"
            aria-label="Diminuir oração"
          >
            <Minus className="w-5 h-5" />
          </button>

          {/* Pétala Central Clicável com silhueta realista de pétala de rosa */}
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
              title={isCompleted ? '24 orações completadas!' : 'Toque na pétala para somar +1'}
              aria-label="Toque na pétala para contar uma oração"
            >
              {/* Brilho suave difuso de fundo (estático sem pisca-pisca) */}
              <div
                className={cn(
                  'absolute -inset-2 rounded-full transition-opacity duration-300 blur-md pointer-events-none',
                  isCompleted
                    ? 'bg-white/50 opacity-100'
                    : 'bg-rose-500/35 opacity-70 group-hover:opacity-100'
                )}
              />

              {/* Pétala com tamanho compacto anterior e gradiente carmim aveludado */}
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center drop-shadow-[0_6px_14px_rgba(190,18,60,0.5)]">
                <svg
                  viewBox="0 0 100 100"
                  className={cn(
                    'w-full h-full transition-transform duration-300',
                    isAnimating ? 'rotate-3 scale-105' : 'rotate-0'
                  )}
                >
                  <defs>
                    <radialGradient id="roseVelvetGrad" cx="50%" cy="35%" r="65%">
                      <stop offset="0%" stopColor="#fb7185" />
                      <stop offset="30%" stopColor="#e11d48" />
                      <stop offset="70%" stopColor="#9f1239" />
                      <stop offset="100%" stopColor="#4c0519" />
                    </radialGradient>

                    <linearGradient id="roseEdgeHighlight" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#ffe4e6" stopOpacity="0.8" />
                      <stop offset="40%" stopColor="#f43f5e" stopOpacity="0.2" />
                      <stop offset="100%" stopColor="#881337" stopOpacity="0" />
                    </linearGradient>

                    <radialGradient id="redCompletedGrad" cx="50%" cy="35%" r="65%">
                      <stop offset="0%" stopColor="#ef4444" />
                      <stop offset="35%" stopColor="#dc2626" />
                      <stop offset="75%" stopColor="#b91c1c" />
                      <stop offset="100%" stopColor="#7f1d1d" />
                    </radialGradient>
                  </defs>

                  {/* Silhueta anatômica de pétala de rosa */}
                  <path
                    d="M 50 12
                       C 60 4, 82 6, 88 28
                       C 94 50, 78 78, 50 94
                       C 22 78, 6 50, 12 28
                       C 18 6, 40 4, 50 12 Z"
                    fill={isCompleted ? 'url(#redCompletedGrad)' : 'url(#roseVelvetGrad)'}
                    stroke={isCompleted ? '#ffffff' : '#fecdd3'}
                    strokeWidth={isCompleted ? "2" : "1.2"}
                    strokeOpacity={isCompleted ? "1" : "0.75"}
                  />

                  {/* Curva de relevo superior simulando a dobra aveludada da pétala */}
                  <path
                    d="M 50 16
                       C 58 9, 78 11, 83 30
                       C 87 48, 73 72, 50 86
                       C 27 72, 13 48, 17 30
                       C 22 11, 42 9, 50 16 Z"
                    fill="url(#roseEdgeHighlight)"
                  />

                  {/* Nervura central delicada da pétala */}
                  <path
                    d="M 50 20 C 49 42, 50 68, 50 88"
                    fill="none"
                    stroke={isCompleted ? '#ffffff' : '#fda4af'}
                    strokeWidth={isCompleted ? "1.5" : "1"}
                    strokeDasharray="2 3"
                    strokeOpacity={isCompleted ? "0.9" : "0.4"}
                  />
                </svg>

                {/* Número do contador perfeitamente legível no centro da pétala */}
                <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none pt-0.5">
                  <span className="text-xl sm:text-2xl font-extrabold font-brand text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
                    {count}
                  </span>
                  <span className="text-[9px] sm:text-[10px] font-bold text-rose-100 drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)]">
                    de {TOTAL_GLORIAS}
                  </span>
                </div>
              </div>
            </button>
          </div>

          {/* Botão Aumentar (+) */}
          <button
            type="button"
            onClick={handleIncrement}
            disabled={isCompleted}
            className={cn(
              'w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center border transition-all duration-200 shadow-md',
              'bg-rose-600 hover:bg-rose-500 active:scale-95 border-rose-300/40 text-white shadow-rose-900/40',
              isCompleted && 'opacity-30 cursor-not-allowed bg-white/10 hover:bg-white/10 active:scale-100'
            )}
            title="Adicionar uma oração (+)"
            aria-label="Adicionar oração"
          >
            <Plus className="w-5 h-5" />
          </button>
        </div>

        {/* Apenas os 24 Círculos (sem barra de progresso horizontal) */}
        <div className="w-full max-w-xs mt-3 flex flex-wrap justify-center gap-1.5 sm:gap-2 px-1">
          {Array.from({ length: TOTAL_GLORIAS }).map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => updateCount(i + 1)}
              title={`Glória ${i + 1} de 24`}
              className={cn(
                'w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full transition-all duration-300 border flex items-center justify-center focus:outline-none cursor-pointer',
                i < count
                  ? (isCompleted
                      ? 'bg-red-600 border-2 border-white shadow-[0_0_10px_rgba(255,255,255,0.95)] scale-110'
                      : 'bg-rose-500 border-rose-300 shadow-[0_0_6px_rgba(244,63,94,0.8)] scale-110')
                  : 'bg-black/25 dark:bg-white/10 border-white/25 hover:border-rose-400/60'
              )}
              aria-label={`Glória ${i + 1}`}
            />
          ))}
        </div>

        {/* Feedback especial ao atingir 24 orações */}
        {isCompleted && (
          <div className="mt-3 px-4 py-2 rounded-xl bg-red-600/40 border-2 border-white/90 text-white text-xs sm:text-sm font-bold flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(255,255,255,0.35)] animate-in fade-in zoom-in duration-300">
            <Sparkles className="w-4 h-4 text-white shrink-0 drop-shadow-[0_0_8px_rgba(255,255,255,1)]" />
            <span className="drop-shadow">Concluído!</span>
          </div>
        )}

        {/* Botão sutil para zerar o contador */}
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
