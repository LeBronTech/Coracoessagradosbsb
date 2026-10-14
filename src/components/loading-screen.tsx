'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { cn, getProxiedImageUrl } from '@/lib/utils';

export type LoadingTheme = 'default' | 'sao-jose' | 'espaco-mariano' | 'encontre-seu-lugar' | string;

export interface LoadingScreenProps {
  isLoading: boolean;
  theme?: LoadingTheme;
  targetPath?: string;
  onFinished?: () => void;
}

export function resolveLoadingTheme(theme?: string, path?: string): 'sao-jose' | 'espaco-mariano' | 'encontre-seu-lugar' | 'default' {
  const candidate = (theme || path || '').toLowerCase();
  if (candidate.includes('sao-jose') || candidate.includes('sao_jose')) return 'sao-jose';
  if (candidate.includes('espaco-mariano') || candidate.includes('mariano')) return 'espaco-mariano';
  if (candidate.includes('encontre-seu-lugar') || candidate.includes('encontre')) return 'encontre-seu-lugar';
  return 'default';
}

export const LoadingScreen = ({ isLoading, theme = 'default', targetPath, onFinished }: LoadingScreenProps) => {
  const [isExiting, setIsExiting] = useState(false);
  const [shouldRender, setShouldRender] = useState(true);

  const activeTheme = resolveLoadingTheme(theme, targetPath);
  const isDark = activeTheme !== 'default';

  useEffect(() => {
    if (!isLoading) {
      // Start exit animation after a small delay to ensure pulsing is seen
      const timer = setTimeout(() => {
          setIsExiting(true);
      }, 500);
      
      // Remove from DOM after animation completes
      const removeTimer = setTimeout(() => {
          setShouldRender(false);
          if (onFinished) onFinished();
      }, 500 + 850); // 500 wait + 800 animation + buffer

      return () => {
          clearTimeout(timer);
          clearTimeout(removeTimer);
      };
    } else {
        setIsExiting(false);
        setShouldRender(true);
    }
  }, [isLoading, onFinished]);

  if (!shouldRender) return null;

  return (
    <div
      className={cn(
        'fixed inset-0 z-[200] flex items-center justify-center transition-all overflow-hidden',
        isExiting ? 'animate-gate-up' : 'opacity-100',
        activeTheme === 'sao-jose' && 'bg-gradient-to-r from-green-800 via-green-700 to-green-800 text-white',
        activeTheme === 'espaco-mariano' && 'bg-gradient-to-r from-blue-800 via-blue-700 to-blue-800 text-white',
        activeTheme === 'encontre-seu-lugar' && 'bg-gradient-to-r from-red-800 via-red-700 to-red-800 text-white'
      )}
      style={{ 
          backgroundImage: activeTheme === 'default' 
            ? 'linear-gradient(to bottom, #ffffff 0%, #e0e0e0 25%, #c3c3c3 50%, #949da4 100%)' 
            : undefined,
          pointerEvents: isExiting ? 'none' : 'auto'
      }}
    >
      {/* Imagem de fundo e detalhes correspondentes ao cabeçalho de cada espaço */}
      {activeTheme === 'sao-jose' && (
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10 mix-blend-overlay pointer-events-none select-none"
          style={{ backgroundImage: `url('${getProxiedImageUrl('https://iili.io/fj7jrtj.png')}')` }}
        />
      )}

      {activeTheme === 'espaco-mariano' && (
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10 mix-blend-overlay pointer-events-none select-none"
          style={{ backgroundImage: `url('${getProxiedImageUrl('https://iili.io/fj0D5Ga.png')}')` }}
        />
      )}

      {activeTheme === 'encontre-seu-lugar' && (
        <div className="absolute inset-0 opacity-10 pointer-events-none select-none text-white overflow-hidden">
          <div className="absolute top-4 left-8 text-6xl">✝</div>
          <div className="absolute top-8 right-16 text-4xl">✝</div>
          <div className="absolute bottom-4 left-1/4 text-5xl">✝</div>
          <div className="absolute bottom-8 right-1/3 text-3xl">✝</div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-9xl opacity-20">✝</div>
        </div>
      )}

      <div className={cn(
          'relative z-10 transform transition-all duration-700 ease-in-out', 
          !isExiting ? 'scale-100 animate-pulse-and-shrink' : 'scale-75 opacity-0'
      )}>
        <Image
          src={isDark 
            ? "/images/logo-coracoes-silhueta-branca.png" 
            : getProxiedImageUrl("https://i.postimg.cc/ZRrzGs1g/Capa-para-facebook-arquitetura-moderno-vermelho-1.png")
          }
          alt="Logo Corações Sagrados"
          width={448}
          height={166}
          className="w-full max-w-xs sm:max-w-md rounded-md object-contain block"
          style={isDark ? {
            filter: 'drop-shadow(0 3px 10px rgba(0, 0, 0, 0.5))'
          } : undefined}
          priority
        />
      </div>
    </div>
  );
};
