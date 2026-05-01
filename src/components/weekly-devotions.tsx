
'use client';

import { useState, useEffect } from 'react';
import { weeklyDevotions, monthlyDevotions, getLiturgicalInfo } from '@/lib/devotions';
import type { Devotion, LiturgicalInfo } from '@/lib/devotions';
import { cn } from '@/lib/utils';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import React from 'react';
import { Skeleton } from './ui/skeleton';
import { BookOpen, Calendar } from 'lucide-react';
import Image from 'next/image';


function DevotionSkeleton() {
    return (
        <div className="flex justify-center items-center flex-wrap gap-2 md:gap-4 my-6">
            <Skeleton className="h-12 w-36 rounded-full" />
            <Skeleton className="h-12 w-36 rounded-full" />
            <Skeleton className="h-12 w-36 rounded-full" />
        </div>
    )
}

export const LilyIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={cn("w-full h-full", className)}>
        <path d="M12 22a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2h0a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2z"/>
        <path d="M8 18c-1.5-1.5-2-4-2-6V7a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2v5"/>
        <path d="M16 18c1.5-1.5 2-4 2-6V7a2 2 0 0 0-2-2h0a2 2 0 0 0-2 2v5"/>
        <path d="M12 2v2"/>
        <path d="M12 7h.01"/>
    </svg>
);


const Icon = ({ name, className }: { name: string, className?: string }) => {
  const icons: { [key: string]: React.ReactNode } = {
    'sunday': (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={cn("h-8 w-8", className)}>
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
      </svg>
    ),
    'monday': (
       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={cn("h-8 w-8", className)}>
        <path d="M12 5v14"/>
        <path d="M5 12h14"/>
      </svg>
    ),
    'tuesday': (
      <Image src="https://iili.io/KpnvJeI.png" alt="Ícone dos Santos Anjos" width={32} height={32} className={cn("h-8 w-8 object-contain", className)} />
    ),
    'wednesday': (
      <Image src="https://iili.io/KpAs5EG.png" alt="Ícone de São José" width={32} height={32} className={cn("h-8 w-8 object-contain", className)} />
    ),
    'thursday': (
        <Image src="https://i.postimg.cc/VkM9w1DB/8.png" alt="Ícone do Santíssimo Sacramento" width={32} height={32} className={cn("h-8 w-8 object-contain", className)} />
    ),
    'friday': (
      <Image src="https://i.postimg.cc/cLY7WZXF/9.png" alt="Ícone da Paixão de Cristo" width={32} height={32} className={cn("h-8 w-8 object-contain", className)} />
    ),
    'saturday': (
      <Image src="https://i.postimg.cc/VkM9w1Dg/10.png" alt="Ícone de Nossa Senhora" width={32} height={32} className={cn("h-8 w-8 object-contain", className)} />
    ),
  };
  return icons[name] || null;
};

interface WeeklyDevotionsProps {
  onLiturgyClick?: () => void;
}

const WeeklyDevotions = ({ onLiturgyClick }: WeeklyDevotionsProps) => {
  const [today, setToday] = useState<Date | null>(null);
  const [liturgicalInfo, setLiturgicalInfo] = useState<LiturgicalInfo | null>(null);
  const [selectedDevotion, setSelectedDevotion] = useState<'weekly' | 'monthly' | null>(null);

  useEffect(() => {
    // This ensures that the date is consistent and not affected by client-side re-renders.
    const now = new Date();
    setToday(now);
    setLiturgicalInfo(getLiturgicalInfo(now));
  }, []);

  if (!today || !liturgicalInfo) {
    return <DevotionSkeleton />;
  }
  
  const dayOfWeek = today.getDay();
  const month = today.getMonth();

  const weeklyDevotion = weeklyDevotions.find(d => d.dayOfWeek === dayOfWeek);
  const monthlyDevotion = monthlyDevotions.find(d => d.month === month);
  
  if (!weeklyDevotion || !monthlyDevotion) return <DevotionSkeleton />;

  const liturgicalColorClasses: Record<string, string> = {
    'green': 'devotion-item--green',
    'purple': 'devotion-item--purple',
    'red': 'devotion-item--red',
    'white': 'devotion-item--white',
    'rose': 'devotion-item--rose',
  };

  const liturgicalColorEmojis: Record<string, string> = {
    'green': '🟢',
    'purple': '🟣',
    'red': '🔴',
    'white': '⚪️',
    'rose': '🩷',
  };

  const dailyColorClasses: { [key: number]: string } = {
    0: 'devotion-item--sunday',
    1: 'devotion-item--monday',
    2: 'devotion-item--tuesday',
    3: 'devotion-item--wednesday',
    4: 'devotion-item--thursday',
    5: 'devotion-item--friday',
    6: 'devotion-item--saturday',
  };

  return (
    <div className="flex flex-col items-center justify-center gap-2 md:gap-4 my-6">
      <div className="flex justify-center items-start flex-wrap gap-2 md:gap-3">
        <TooltipProvider>
           {/* Liturgical Info Pill */}
          <button 
            onClick={onLiturgyClick}
            className={cn('devotion-item transition-all duration-300 hover:scale-105 active:scale-95', liturgicalColorClasses[liturgicalInfo.color])}
          >
            <BookOpen className="devotion-icon" />
            <div className="text-left">
              <span className="text-sm font-bold">{liturgicalColorEmojis[liturgicalInfo.color]} {liturgicalInfo.season}</span>
              <p className="text-xs">{liturgicalInfo.verse} (Ano {liturgicalInfo.cycle})</p>
            </div>
          </button>
          
          {/* Monthly Devotion */}
          <Tooltip>
            <TooltipTrigger asChild>
              <button 
                onClick={() => setSelectedDevotion(selectedDevotion === 'monthly' ? null : 'monthly')}
                className={cn(
                  "devotion-item devotion-item--default transition-all duration-300",
                  selectedDevotion === 'monthly' && "ring-2 ring-primary ring-offset-2 scale-105"
                )}
              >
                <Calendar className="devotion-icon" />
                <div className="text-left">
                    <span className="text-sm font-bold">{monthlyDevotion.name}</span>
                    <p className="text-xs">{monthlyDevotion.devotion}</p>
                </div>
              </button>
            </TooltipTrigger>
            <TooltipContent className="bg-primary text-primary-foreground border-primary-foreground/20">
              <p className="font-bold">Devoção do Mês: {monthlyDevotion.name}</p>
              <p>{monthlyDevotion.devotion}</p>
            </TooltipContent>
          </Tooltip>

          {/* Weekly Devotion */}
          <Tooltip>
            <TooltipTrigger asChild>
                <div className="devotion-item-wrapper">
                    <button 
                        onClick={() => setSelectedDevotion(selectedDevotion === 'weekly' ? null : 'weekly')}
                        className={cn(
                            'devotion-item group transition-all duration-300', 
                            dailyColorClasses[dayOfWeek],
                            selectedDevotion === 'weekly' && "ring-2 ring-offset-2 scale-105"
                        )}
                    >
                        <div className="relative">
                            <Icon name={weeklyDevotion.icon} className="devotion-icon" />
                        </div>
                        <div className="text-left">
                            <span className="text-sm font-bold">{weeklyDevotion.day}</span>
                            <p className="text-xs">{weeklyDevotion.devotion}</p>
                        </div>
                    </button>
                </div>
            </TooltipTrigger>
            <TooltipContent className={cn('text-white border-primary-foreground/20', dailyColorClasses[dayOfWeek].replace('devotion-item--', 'bg-'))}>
              <p className="font-bold">{weeklyDevotion.title}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>

      {/* Reference text section below */}
      {selectedDevotion && (
        <div className={cn(
          "w-full max-w-lg mt-4 p-4 rounded-xl border-2 text-center animate-in fade-in slide-in-from-top-2 duration-500 shadow-lg text-white font-medium",
          selectedDevotion === 'monthly' && "bg-[#9ca3af] border-[#9ca3af]",
          selectedDevotion === 'weekly' && dayOfWeek === 0 && "bg-[#dc2626] border-[#dc2626]",
          selectedDevotion === 'weekly' && dayOfWeek === 1 && "bg-[#6b7280] border-[#6b7280]",
          selectedDevotion === 'weekly' && dayOfWeek === 2 && "bg-[#b45309] border-[#b45309]",
          selectedDevotion === 'weekly' && dayOfWeek === 3 && "bg-[#16a34a] border-[#16a34a]",
          selectedDevotion === 'weekly' && dayOfWeek === 4 && "bg-[#2e1065] border-[#1e0a45]",
          selectedDevotion === 'weekly' && dayOfWeek === 5 && "bg-[#b91c1c] border-[#b91c1c]",
          selectedDevotion === 'weekly' && dayOfWeek === 6 && "bg-[#38bdf8] border-[#38bdf8]"
        )}>
          <p className="text-xs font-bold mb-2 uppercase tracking-widest opacity-90">
            {selectedDevotion === 'weekly' ? weeklyDevotion.title : `Devoção Mensal: ${monthlyDevotion.name}`}
          </p>
          <div className="text-sm leading-relaxed">
            {selectedDevotion === 'weekly' ? (
              <>
                {dayOfWeek === 0 && "O Domingo é o dia do Senhor, celebrando a Ressurreição de Jesus como base da nossa esperança e fé."}
                {dayOfWeek === 1 && "Dedicada ao Espírito Santo e às Almas do Purgatório, orando pela luz divina e pelo descanso dos fiéis falecidos."}
                {dayOfWeek === 2 && "Honramos os Santos Anjos, mensageiros de Deus e nossos protetores constantes em todos os momentos da vida."}
                {dayOfWeek === 3 && "Dia dedicado a São José, Padroeiro da Igreja e das famílias, modelo de trabalho, silêncio e fé profunda."}
                {dayOfWeek === 4 && "Dia da Eucaristia e do Sacerdócio, lembramos a Última Ceia e adoramos o Santíssimo Sacramento no altar."}
                {dayOfWeek === 5 && "Contemplamos a Paixão de Cristo e o Sagrado Coração de Jesus, expressando nosso amor e reparação pelo Seu sacrifício."}
                {dayOfWeek === 6 && "Tradicionalmente dedicado a Nossa Senhora, nossa Mãe e Medianeira de todas as graças junto ao Seu Filho."}
              </>
            ) : (
              `A Santa Igreja dedica o mês de ${monthlyDevotion.name} à devoção ao ${monthlyDevotion.devotion}, convidando-nos a meditar sobre este mistério.`
            )}
          </div>
        </div>
      )}
    </div>
  );
};

WeeklyDevotions.displayName = 'WeeklyDevotions';
export default WeeklyDevotions;
