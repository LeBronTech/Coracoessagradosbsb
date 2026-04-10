'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface LoadingScreenProps {
  isLoading: boolean;
  onFinished?: () => void;
}

export const LoadingScreen = ({ isLoading, onFinished }: LoadingScreenProps) => {
  const [isExiting, setIsExiting] = useState(false);
  const [shouldRender, setShouldRender] = useState(true);

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
        'fixed inset-0 z-[100] flex items-center justify-center transition-all',
        isExiting ? 'animate-gate-up' : 'opacity-100'
      )}
      style={{ 
          backgroundImage: 'linear-gradient(to bottom, #ffffff 0%, #e0e0e0 25%, #c3c3c3 50%, #949da4 100%)',
          pointerEvents: isExiting ? 'none' : 'auto'
      }}
    >
      <div className={cn(
          'transform transition-all duration-700 ease-in-out', 
          !isExiting ? 'scale-100 animate-pulse-and-shrink' : 'scale-75 opacity-0'
      )}>
        <Image
          src="https://i.postimg.cc/ZRrzGs1g/Capa-para-facebook-arquitetura-moderno-vermelho-1.png"
          alt="Logo Corações Sagrados"
          width={448}
          height={166}
          className="w-full max-w-md rounded-md"
          priority
        />
      </div>
    </div>
  );
};
