import React from 'react';
import { cn } from '@/lib/utils';

export function MartyrSymbol({ className = 'w-3 h-3', title = 'Mártir da Fé (Martírio)' }: { className?: string; title?: string }) {
  return (
    <span
      className={cn('inline-flex items-center justify-center select-none align-middle shrink-0', className)}
      title={title}
      aria-label={title}
    >
      <svg
        viewBox="0 0 24 24"
        className="w-full h-full overflow-visible drop-shadow-[0_0.5px_1px_rgba(0,0,0,0.3)]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Letra M estilizada simbolizando o Martírio */}
        <path
          d="M4 19V5.5h3.2l4.8 7.5 4.8-7.5H20V19h-2.8V9.8l-4.4 6.7h-1.6L6.8 9.8V19H4z"
          fill="#991b1b"
        />

        {/* Linha branca de contraste/incisão simulando o corte no M */}
        <line
          x1="2"
          y1="22"
          x2="20"
          y2="4"
          stroke="#ffffff"
          strokeWidth="3.2"
          strokeLinecap="round"
        />

        {/* Haste da lança vermelha */}
        <line
          x1="2"
          y1="22"
          x2="20"
          y2="4"
          stroke="#dc2626"
          strokeWidth="1.8"
          strokeLinecap="round"
        />

        {/* Ponta da lança vermelha (lâmina perfurante) */}
        <polygon
          points="23.5,1 18,3 19.5,4.5 21,6.5"
          fill="#ef4444"
          stroke="#991b1b"
          strokeWidth="0.6"
        />
      </svg>
    </span>
  );
}
