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
  '#dc2626', // Vermelho vivo
  '#b91c1c', // Vermelho carmesim
  '#ef4444', // Vermelho escarlate brilhante
  '#991b1b', // Vermelho rubi profundo
  '#be123c', // Vermelho carmim aveludado
  '#7f1d1d', // Vermelho bordô intenso
];

export function FallingRosePetals({
  isActive = true,
  petalCount = 38,
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

    // Cria as pétalas vermelhas iniciais
    const petals: Petal[] = [];
    for (let i = 0; i < petalCount; i++) {
      petals.push({
        x: Math.random() * width,
        y: Math.random() * height - height * 0.2,
        size: 13 + Math.random() * 17, // 13px a 30px
        speedY: 0.9 + Math.random() * 1.5,
        speedX: (Math.random() - 0.5) * 0.7,
        swayAmplitude: 0.9 + Math.random() * 1.6,
        swayFrequency: 0.016 + Math.random() * 0.024,
        swayAngle: Math.random() * Math.PI * 2,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.028,
        flip: Math.random() * Math.PI * 2,
        flipSpeed: 0.02 + Math.random() * 0.038,
        color: PETAL_COLORS[Math.floor(Math.random() * PETAL_COLORS.length)],
        opacity: 0.75 + Math.random() * 0.23,
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

    // Desenha uma pétala vermelha realista
    const drawPetal = (p: Petal) => {
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rotation);
      // Efeito de queda 3D oscilando o flip no eixo X
      const scaleX = Math.cos(p.flip);
      ctx.scale(scaleX, 1);
      ctx.globalAlpha = p.opacity;

      // Gradiente aveludado de pétala de rosa vermelha
      const grad = ctx.createRadialGradient(-p.size * 0.15, -p.size * 0.2, p.size * 0.08, 0, 0, p.size);
      grad.addColorStop(0, '#fca5a5'); // reflexo suave na curva
      grad.addColorStop(0.2, p.color);
      grad.addColorStop(0.75, p.color);
      grad.addColorStop(1, '#450a0a'); // borda aveludada bordô escura

      ctx.fillStyle = grad;
      ctx.beginPath();

      if (p.petalType === 0) {
        // Pétala clássica de rosa vermelha: topo bilobado com base afilada
        ctx.moveTo(0, p.size * 0.85);
        ctx.bezierCurveTo(-p.size * 0.85, p.size * 0.35, -p.size * 0.75, -p.size * 0.55, -p.size * 0.2, -p.size * 0.85);
        ctx.quadraticCurveTo(0, -p.size * 0.65, p.size * 0.2, -p.size * 0.85);
        ctx.bezierCurveTo(p.size * 0.75, -p.size * 0.55, p.size * 0.85, p.size * 0.35, 0, p.size * 0.85);
      } else if (p.petalType === 1) {
        // Pétala em concha / curva ao vento
        ctx.moveTo(0, p.size * 0.8);
        ctx.bezierCurveTo(-p.size * 0.7, p.size * 0.3, -p.size * 0.95, -p.size * 0.3, -p.size * 0.3, -p.size * 0.88);
        ctx.bezierCurveTo(p.size * 0.5, -p.size * 0.65, p.size * 0.75, p.size * 0.15, 0, p.size * 0.8);
      } else {
        // Pétala suave ondulada
        ctx.moveTo(0, p.size * 0.85);
        ctx.quadraticCurveTo(-p.size * 0.8, p.size * 0.1, -p.size * 0.35, -p.size * 0.85);
        ctx.quadraticCurveTo(0, -p.size * 0.7, p.size * 0.35, -p.size * 0.85);
        ctx.quadraticCurveTo(p.size * 0.8, p.size * 0.1, 0, p.size * 0.85);
      }

      ctx.closePath();
      ctx.fill();

      // Sombra sutil de volume da pétala
      ctx.strokeStyle = 'rgba(69, 10, 10, 0.4)';
      ctx.lineWidth = 0.75;
      ctx.stroke();

      // Nervura central delicada translúcida
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.28)';
      ctx.lineWidth = 0.8;
      ctx.beginPath();
      ctx.moveTo(0, p.size * 0.65);
      ctx.quadraticCurveTo(p.size * 0.06, 0, 0, -p.size * 0.5);
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

const ROSE_CORNER_IMAGE_URL = 'https://www.pngarts.com/files/4/Rose-PNG-Pic.png';
const ROSE_CORNER_LOCAL_FALLBACK = '/images/rose-png-pic.png';

/**
 * Rosas decorativas aplicadas nos 4 cantos do modal de Santa Terezinha
 * Utiliza a imagem oficial Rose-PNG-Pic com acabamento e posicionamento estético
 */
export function SantaTerezinhaRosesOverlay() {
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    if (e.currentTarget.src !== ROSE_CORNER_LOCAL_FALLBACK) {
      e.currentTarget.src = ROSE_CORNER_LOCAL_FALLBACK;
    }
  };

  return (
    <div className="pointer-events-none absolute inset-0 z-20 overflow-hidden select-none">
      {/* Canto Superior Esquerdo */}
      <div className="absolute -top-3 -left-3 md:-top-5 md:-left-5 w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 opacity-95 transition-transform hover:scale-105 duration-300">
        <img
          src={ROSE_CORNER_IMAGE_URL}
          onError={handleImageError}
          alt="Rosa de Santa Terezinha"
          loading="eager"
          className="w-full h-full object-contain drop-shadow-[0_4px_14px_rgba(0,0,0,0.4)] -rotate-12 transform-gpu"
        />
      </div>

      {/* Canto Superior Direito */}
      <div className="absolute -top-3 -right-3 md:-top-5 md:-right-5 w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 opacity-95 transition-transform hover:scale-105 duration-300">
        <img
          src={ROSE_CORNER_IMAGE_URL}
          onError={handleImageError}
          alt="Rosa de Santa Terezinha"
          loading="eager"
          className="w-full h-full object-contain drop-shadow-[0_4px_14px_rgba(0,0,0,0.4)] scale-x-[-1] rotate-12 transform-gpu"
        />
      </div>

      {/* Canto Inferior Esquerdo */}
      <div className="absolute -bottom-3 -left-3 md:-bottom-5 md:-left-5 w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 opacity-90 transition-transform hover:scale-105 duration-300">
        <img
          src={ROSE_CORNER_IMAGE_URL}
          onError={handleImageError}
          alt="Rosa de Santa Terezinha"
          loading="lazy"
          className="w-full h-full object-contain drop-shadow-[0_4px_14px_rgba(0,0,0,0.4)] scale-y-[-1] -rotate-12 transform-gpu"
        />
      </div>

      {/* Canto Inferior Direito */}
      <div className="absolute -bottom-3 -right-3 md:-bottom-5 md:-right-5 w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 opacity-90 transition-transform hover:scale-105 duration-300">
        <img
          src={ROSE_CORNER_IMAGE_URL}
          onError={handleImageError}
          alt="Rosa de Santa Terezinha"
          loading="lazy"
          className="w-full h-full object-contain drop-shadow-[0_4px_14px_rgba(0,0,0,0.4)] scale-[-1] rotate-12 transform-gpu"
        />
      </div>
    </div>
  );
}
