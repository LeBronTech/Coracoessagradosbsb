'use client';

import { useEffect, useRef, useState } from 'react';

interface Petal {
  x: number;
  y: number;
  size: number;
  speedY: number;
  speedX: number;
  swayAmplitude: number;
  swayFrequency: number;
  swayAngle: number;
  rotation: number;
  rotationSpeed: number;
  flip: number;
  flipSpeed: number;
  color: string;
  opacity: number;
  petalType: number; // 0, 1, 2 for varied shapes
}

const PETAL_COLORS = [
  '#e11d48', // rose-600
  '#be123c', // rose-700
  '#f43f5e', // rose-500
  '#fb7185', // rose-400
  '#fda4af', // rose-300
  '#9f1239', // rose-800
  '#f472b6', // pink-400
];

export function FallingRosePetals({
  isActive = true,
  petalCount = 36,
}: {
  isActive?: boolean;
  petalCount?: number;
}) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animFrameRef = useRef<number | null>(null);
  const petalsRef = useRef<Petal[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !isActive) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    // Cria as pétalas iniciais
    const petals: Petal[] = [];
    for (let i = 0; i < petalCount; i++) {
      petals.push({
        x: Math.random() * width,
        y: Math.random() * height - height * 0.2,
        size: 14 + Math.random() * 16, // 14px a 30px
        speedY: 0.8 + Math.random() * 1.6,
        speedX: (Math.random() - 0.5) * 0.6,
        swayAmplitude: 0.8 + Math.random() * 1.5,
        swayFrequency: 0.015 + Math.random() * 0.025,
        swayAngle: Math.random() * Math.PI * 2,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.03,
        flip: Math.random() * Math.PI * 2,
        flipSpeed: 0.02 + Math.random() * 0.04,
        color: PETAL_COLORS[Math.floor(Math.random() * PETAL_COLORS.length)],
        opacity: 0.7 + Math.random() * 0.28,
        petalType: Math.floor(Math.random() * 3),
      });
    }
    petalsRef.current = petals;

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    const resizeObserver = new ResizeObserver(handleResize);
    if (canvas.parentElement) {
      resizeObserver.observe(canvas.parentElement);
    }

    // Desenha uma pétala orgânica realista
    const drawPetal = (p: Petal) => {
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rotation);
      // Efeito de queda 3D oscilando o flip no eixo X
      const scaleX = Math.cos(p.flip);
      ctx.scale(scaleX, 1);
      ctx.globalAlpha = p.opacity;

      // Gradiente suave de pétala de rosa
      const grad = ctx.createRadialGradient(0, -p.size * 0.2, p.size * 0.1, 0, 0, p.size);
      grad.addColorStop(0, '#ffffff');
      grad.addColorStop(0.25, p.color);
      grad.addColorStop(1, '#881337'); // sombra bordô na borda da pétala

      ctx.fillStyle = grad;
      ctx.beginPath();

      if (p.petalType === 0) {
        // Pétala formato clássico de gota/coração de rosa
        ctx.moveTo(0, p.size * 0.8);
        ctx.bezierCurveTo(-p.size * 0.8, p.size * 0.4, -p.size * 0.7, -p.size * 0.6, 0, -p.size * 0.8);
        ctx.bezierCurveTo(p.size * 0.7, -p.size * 0.6, p.size * 0.8, p.size * 0.4, 0, p.size * 0.8);
      } else if (p.petalType === 1) {
        // Pétala curvada ao vento
        ctx.moveTo(0, p.size * 0.7);
        ctx.bezierCurveTo(-p.size * 0.6, p.size * 0.3, -p.size * 0.9, -p.size * 0.4, -p.size * 0.2, -p.size * 0.9);
        ctx.bezierCurveTo(p.size * 0.6, -p.size * 0.6, p.size * 0.7, p.size * 0.2, 0, p.size * 0.7);
      } else {
        // Pétala suave ondulada
        ctx.moveTo(0, p.size * 0.8);
        ctx.quadraticCurveTo(-p.size * 0.75, p.size * 0.1, -p.size * 0.3, -p.size * 0.8);
        ctx.quadraticCurveTo(0, -p.size * 0.6, p.size * 0.3, -p.size * 0.8);
        ctx.quadraticCurveTo(p.size * 0.75, p.size * 0.1, 0, p.size * 0.8);
      }

      ctx.closePath();
      ctx.fill();

      // Nervura central delicada da pétala
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.35)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(0, p.size * 0.6);
      ctx.quadraticCurveTo(p.size * 0.05, 0, 0, -p.size * 0.5);
      ctx.stroke();

      ctx.restore();
    };

    let lastTime = performance.now();

    const animate = (currentTime: number) => {
      const delta = Math.min((currentTime - lastTime) / 16.667, 2); // normaliza para 60fps
      lastTime = currentTime;

      ctx.clearRect(0, 0, width, height);

      petals.forEach((p) => {
        // Atualiza física
        p.swayAngle += p.swayFrequency * delta;
        p.x += (Math.sin(p.swayAngle) * p.swayAmplitude + p.speedX) * delta;
        p.y += p.speedY * delta;
        p.rotation += p.rotationSpeed * delta;
        p.flip += p.flipSpeed * delta;

        // Reposiciona quando sai da tela pela base ou laterais
        if (p.y > height + p.size) {
          p.y = -p.size * 2;
          p.x = Math.random() * width;
        }
        if (p.x < -p.size * 2) {
          p.x = width + p.size;
        } else if (p.x > width + p.size * 2) {
          p.x = -p.size;
        }

        drawPetal(p);
      });

      animFrameRef.current = requestAnimationFrame(animate);
    };

    animFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current);
      }
      resizeObserver.disconnect();
    };
  }, [isActive, petalCount]);

  if (!isActive) return null;

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-20 w-full h-full"
    />
  );
}

/**
 * Rosas decorativas aplicadas nas bordas e cantos do modal
 */
export function SantaTerezinhaRosesOverlay() {
  return (
    <div className="pointer-events-none absolute inset-0 z-15 overflow-hidden select-none">
      {/* Canto Superior Esquerdo - Buquê de Rosas */}
      <div className="absolute -top-3 -left-3 md:-top-4 md:-left-4 w-28 h-28 md:w-36 md:h-36 opacity-85 transition-transform hover:scale-105 duration-300">
        <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md">
          {/* Folhas verdes */}
          <path d="M 20,40 C 10,25 25,10 40,20 C 30,35 30,35 20,40 Z" fill="#15803d" opacity="0.85" />
          <path d="M 40,20 C 55,10 70,25 60,40 C 45,30 45,30 40,20 Z" fill="#166534" opacity="0.9" />
          <path d="M 15,55 C 5,45 10,30 25,35 C 22,48 22,48 15,55 Z" fill="#14532d" opacity="0.85" />
          {/* Rosa Principal (Vermelha) */}
          <circle cx="38" cy="38" r="22" fill="#be123c" />
          <path d="M 24,38 C 24,30 32,24 38,24 C 44,24 52,30 52,38 C 52,46 44,52 38,52 C 32,52 24,46 24,38 Z" fill="#e11d48" />
          <path d="M 28,34 C 32,28 42,28 46,34 C 48,39 44,45 38,45 C 32,45 28,39 28,34 Z" fill="#f43f5e" />
          <circle cx="38" cy="36" r="6" fill="#fb7185" />
          <circle cx="38" cy="35" r="3" fill="#ffe4e6" />
          {/* Botão de Rosa secundário (Rosa claro) */}
          <circle cx="62" cy="24" r="14" fill="#be123c" />
          <circle cx="62" cy="24" r="10" fill="#fb7185" />
          <circle cx="62" cy="23" r="4" fill="#fff1f2" />
        </svg>
      </div>

      {/* Canto Superior Direito - Buquê de Rosas */}
      <div className="absolute -top-3 -right-3 md:-top-4 md:-right-4 w-28 h-28 md:w-36 md:h-36 opacity-85 transition-transform hover:scale-105 duration-300">
        <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md">
          {/* Folhas verdes espelhadas */}
          <path d="M 80,40 C 90,25 75,10 60,20 C 70,35 70,35 80,40 Z" fill="#15803d" opacity="0.85" />
          <path d="M 60,20 C 45,10 30,25 40,40 C 55,30 55,30 60,20 Z" fill="#166534" opacity="0.9" />
          <path d="M 85,55 C 95,45 90,30 75,35 C 78,48 78,48 85,55 Z" fill="#14532d" opacity="0.85" />
          {/* Rosa Principal (Vermelha) */}
          <circle cx="62" cy="38" r="22" fill="#be123c" />
          <path d="M 76,38 C 76,30 68,24 62,24 C 56,24 48,30 48,38 C 48,46 56,52 62,52 C 68,52 76,46 76,38 Z" fill="#e11d48" />
          <path d="M 72,34 C 68,28 58,28 54,34 C 52,39 56,45 62,45 C 68,45 72,39 72,34 Z" fill="#f43f5e" />
          <circle cx="62" cy="36" r="6" fill="#fb7185" />
          <circle cx="62" cy="35" r="3" fill="#ffe4e6" />
          {/* Botão de Rosa secundário */}
          <circle cx="38" cy="24" r="14" fill="#be123c" />
          <circle cx="38" cy="24" r="10" fill="#fb7185" />
          <circle cx="38" cy="23" r="4" fill="#fff1f2" />
        </svg>
      </div>

      {/* Canto Inferior Esquerdo - Rosa elegante */}
      <div className="absolute -bottom-3 -left-3 md:-bottom-4 md:-left-4 w-24 h-24 md:w-32 md:h-32 opacity-80">
        <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md">
          <path d="M 25,60 C 15,75 30,90 45,80 C 35,65 35,65 25,60 Z" fill="#15803d" opacity="0.8" />
          <path d="M 50,75 C 65,85 75,70 65,55 C 55,65 55,65 50,75 Z" fill="#166534" opacity="0.8" />
          <circle cx="38" cy="62" r="18" fill="#be123c" />
          <circle cx="38" cy="62" r="12" fill="#e11d48" />
          <circle cx="38" cy="61" r="6" fill="#fb7185" />
        </svg>
      </div>

      {/* Canto Inferior Direito - Rosa elegante */}
      <div className="absolute -bottom-3 -right-3 md:-bottom-4 md:-right-4 w-24 h-24 md:w-32 md:h-32 opacity-80">
        <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md">
          <path d="M 75,60 C 85,75 70,90 55,80 C 65,65 65,65 75,60 Z" fill="#15803d" opacity="0.8" />
          <path d="M 50,75 C 35,85 25,70 35,55 C 45,65 45,65 50,75 Z" fill="#166534" opacity="0.8" />
          <circle cx="62" cy="62" r="18" fill="#be123c" />
          <circle cx="62" cy="62" r="12" fill="#e11d48" />
          <circle cx="62" cy="61" r="6" fill="#fb7185" />
        </svg>
      </div>

      {/* Rosas flutuantes decorativas nas bordas laterais */}
      <div className="hidden md:block absolute top-1/3 -left-3 w-10 h-10 opacity-70">
        <span className="text-2xl drop-shadow-md">🌹</span>
      </div>
      <div className="hidden md:block absolute top-2/3 -left-3 w-10 h-10 opacity-70">
        <span className="text-2xl drop-shadow-md">🌸</span>
      </div>
      <div className="hidden md:block absolute top-1/3 -right-3 w-10 h-10 opacity-70">
        <span className="text-2xl drop-shadow-md">🌸</span>
      </div>
      <div className="hidden md:block absolute top-2/3 -right-3 w-10 h-10 opacity-70">
        <span className="text-2xl drop-shadow-md">🌹</span>
      </div>
    </div>
  );
}
