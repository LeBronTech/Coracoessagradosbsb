'use client';

import React, { useState, useEffect } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { X, Copy, Check, BookOpen, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface PrayerItem {
  id: string;
  name: string;
  shortName: string;
  icon: string;
  subtitle: string;
  instruction?: string;
  latinName?: string;
  verses: Array<{
    type?: 'verse' | 'response' | 'prayer' | 'text' | 'section';
    text: string;
  }>;
}

export const CATHOLIC_PRAYERS: Record<string, PrayerItem> = {
  'pelo-sinal': {
    id: 'pelo-sinal',
    name: 'Pelo Sinal da Santa Cruz',
    shortName: 'Sinal da Cruz',
    icon: '♱',
    subtitle: 'Signum Crucis — Oração Tradicional de Proteção e Bênção',
    instruction:
      'Com o polegar da mão direita, traça-se uma cruz na fronte, outra sobre a boca e outra sobre o peito. Por fim, faz-se o sinal da cruz habitual.',
    verses: [
      {
        type: 'text',
        text: 'Pelo sinal da Santa Cruz, ♱ (na fronte)',
      },
      {
        type: 'text',
        text: 'livrai-nos, Deus Nosso Senhor, ♱ (na boca)',
      },
      {
        type: 'text',
        text: 'dos nossos inimigos. ♱ (no peito)',
      },
      {
        type: 'prayer',
        text: 'Em nome do Pai, e do Filho, e do Espírito Santo.\nAmém.',
      },
    ],
  },
  'vinde-espirito': {
    id: 'vinde-espirito',
    name: 'Vinde, Espírito Santo',
    shortName: 'Espírito Santo',
    icon: '🕊️',
    subtitle: 'Invocação Litúrgica ao Divino Paráclito',
    instruction: 'Oração tradicional para pedir as luzes, virtudes e dons do Espírito Santo.',
    verses: [
      {
        type: 'text',
        text: 'Vinde, Espírito Santo,\nenchei os corações dos vossos fiéis\ne acendei neles o fogo do vosso amor.',
      },
      {
        type: 'verse',
        text: '℣. Enviai o vosso Espírito e tudo será criado.',
      },
      {
        type: 'response',
        text: '℟. E renovareis a face da terra.',
      },
      {
        type: 'section',
        text: 'Oremos:',
      },
      {
        type: 'prayer',
        text: 'Ó Deus, que instruístes os corações dos vossos fiéis com a luz do Espírito Santo, fazei que apreciemos retamente todas as coisas segundo o mesmo Espírito e gozemos sempre da sua consolação. Por Cristo, Senhor Nosso. Amém.',
      },
    ],
  },
  'pai-nosso': {
    id: 'pai-nosso',
    name: 'Pai Nosso',
    shortName: 'Pai Nosso',
    icon: '✝️',
    subtitle: 'Pater Noster — A Oração Dominical ensinada por Jesus',
    verses: [
      {
        type: 'text',
        text: 'Pai Nosso que estais nos Céus,\nsantificado seja o vosso Nome,\nvenha a nós o vosso Reino,\nseja feita a vossa vontade,\nassim na terra como no Céu.',
      },
      {
        type: 'prayer',
        text: 'O pão nosso de cada dia nos dai hoje;\nperdoai-nos as nossas ofensas,\nassim como nós perdoamos a quem nos tem ofendido;\ne não nos deixeis cair em tentação,\nmas livrai-nos do Mal.\n\nAmém.',
      },
    ],
  },
  'ave-maria': {
    id: 'ave-maria',
    name: 'Ave Maria',
    shortName: 'Ave Maria',
    icon: '🌹',
    subtitle: 'Saudação Angélica à Mãe de Deus',
    verses: [
      {
        type: 'text',
        text: 'Ave Maria, cheia de graça,\no Senhor é convosco,\nbendita sois vós entre as mulheres\ne bendito é o fruto do vosso ventre, Jesus.',
      },
      {
        type: 'prayer',
        text: 'Santa Maria, Mãe de Deus,\nrogai por nós, pecadores,\nagora e na hora da nossa morte.\n\nAmém.',
      },
    ],
  },
  'credo': {
    id: 'credo',
    name: 'Credo (Creio em Deus Pai)',
    shortName: 'Credo',
    icon: '🛡️',
    subtitle: 'Símbolo dos Apóstolos — Profissão de Fé da Igreja',
    verses: [
      {
        type: 'text',
        text: 'Creio em Deus Pai Todo-Poderoso,\nCriador do céu e da terra.',
      },
      {
        type: 'text',
        text: 'E em Jesus Cristo, seu único Filho, nosso Senhor,\nque foi concebido pelo poder do Espírito Santo,\nnasceu da Virgem Maria,\npadeceu sob Pôncio Pilatos,\nfoi crucificado, morto e sepultado;\ndesceu à mansão dos mortos;\nressuscitou ao terceiro dia;\nsubiu aos céus,\nestá sentado à direita de Deus Pai Todo-Poderoso,\ndonde há de vir a julgar os vivos e os mortos.',
      },
      {
        type: 'prayer',
        text: 'Creio no Espírito Santo,\nna Santa Igreja Católica,\nna comunhão dos santos,\nna remissão dos pecados,\nna ressurreição da carne,\nna vida eterna.\n\nAmém.',
      },
    ],
  },
  'gloria': {
    id: 'gloria',
    name: 'Glória ao Pai',
    shortName: 'Glória',
    icon: '✨',
    subtitle: 'Doxologia Menor à Santíssima Trindade',
    verses: [
      {
        type: 'prayer',
        text: 'Glória ao Pai, e ao Filho, e ao Espírito Santo.\nComo era no princípio, agora e sempre.\n\nAmém.',
      },
    ],
  },
  'salve-rainha': {
    id: 'salve-rainha',
    name: 'Salve Rainha',
    shortName: 'Salve Rainha',
    icon: '👑',
    subtitle: 'Salve Regina — Hino à Mãe de Misericórdia',
    verses: [
      {
        type: 'text',
        text: 'Salve, Rainha, Mãe de misericórdia,\nvida, doçura e esperança nossa, salve!\nA vós bradamos os degredados filhos de Eva.\nA vós suspiramos, gemendo e chorando neste vale de lágrimas.',
      },
      {
        type: 'text',
        text: 'Eia, pois, advogada nossa,\nesses vossos olhos misericordiosos a nós volvei,\ne depois deste desterro mostrai-nos Jesus,\nbendito fruto do vosso ventre,\nó clemente, ó piedosa, ó doce sempre Virgem Maria.',
      },
      {
        type: 'verse',
        text: '℣. Rogai por nós, Santa Mãe de Deus.',
      },
      {
        type: 'response',
        text: '℟. Para que sejamos dignos das promessas de Cristo.',
      },
      {
        type: 'prayer',
        text: 'Amém.',
      },
    ],
  },
  'sao-miguel': {
    id: 'sao-miguel',
    name: 'Oração a São Miguel Arcanjo',
    shortName: 'São Miguel',
    icon: '⚔️',
    subtitle: 'Composta pelo Papa Leão XIII para a Batalha Espiritual',
    verses: [
      {
        type: 'text',
        text: 'São Miguel Arcanjo, defendei-nos no combate,\nsede o nosso refúgio contra as maldades e ciladas do demônio.',
      },
      {
        type: 'prayer',
        text: 'Ordene-lhe, Deus, instantemente o pedimos.\nE vós, príncipe da milícia celeste, pela virtude divina, precipitai ao inferno satanás e os outros espíritos malignos, que andam pelo mundo para perder as almas.\n\nAmém.',
      },
    ],
  },
};

interface PrayerModalProps {
  isOpen: boolean;
  prayerId: string | null;
  onClose: () => void;
  onSelectPrayer?: (id: string) => void;
}

export function PrayerModal({ isOpen, prayerId, onClose, onSelectPrayer }: PrayerModalProps) {
  const [activeId, setActiveId] = useState<string>('pelo-sinal');
  const [copied, setCopied] = useState<boolean>(false);

  useEffect(() => {
    if (prayerId && CATHOLIC_PRAYERS[prayerId]) {
      setActiveId(prayerId);
    }
  }, [prayerId]);

  const currentPrayer = CATHOLIC_PRAYERS[activeId] || CATHOLIC_PRAYERS['pelo-sinal'];

  const handleSelectPrayer = (id: string) => {
    setActiveId(id);
    setCopied(false);
    if (onSelectPrayer) onSelectPrayer(id);
  };

  const getFullText = () => {
    return currentPrayer.verses.map((v) => v.text).join('\n\n');
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(
        `${currentPrayer.name}\n\n${getFullText()}`
      );
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent
        showCloseButton={false}
        className="max-w-lg w-[95vw] sm:w-full max-h-[90vh] overflow-hidden p-0 rounded-2xl bg-stone-900/95 text-stone-100 border border-white/20 shadow-2xl backdrop-blur-xl flex flex-col focus:outline-none"
      >
        <DialogHeader className="sr-only">
          <DialogTitle>{currentPrayer.name}</DialogTitle>
          <DialogDescription>{currentPrayer.subtitle}</DialogDescription>
        </DialogHeader>

        {/* Top Header com Ícone, Título e Botão Fechar */}
        <div className="relative px-5 pt-5 pb-3 border-b border-white/10 bg-gradient-to-r from-red-950/40 via-stone-900/60 to-red-950/40">
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white/80 hover:text-white transition-all focus:outline-none cursor-pointer border border-white/15"
            title="Fechar"
            aria-label="Fechar modal de oração"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="flex items-center gap-2.5 pr-8">
            <div className="w-9 h-9 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-lg shrink-0 shadow-inner">
              {currentPrayer.icon}
            </div>
            <div className="min-w-0">
              <h3 className="text-lg sm:text-xl font-bold font-brand tracking-wide text-white leading-tight">
                {currentPrayer.name}
              </h3>
              <p className="text-[11px] sm:text-xs text-white/60 truncate font-sans">
                {currentPrayer.subtitle}
              </p>
            </div>
          </div>

          {/* Abas / Atalhos Rápidos para outras Orações */}
          <div className="flex items-center gap-1.5 overflow-x-auto py-2 mt-3 scrollbar-none border-t border-white/10">
            {Object.values(CATHOLIC_PRAYERS).map((p) => {
              const isSelected = p.id === activeId;
              return (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => handleSelectPrayer(p.id)}
                  className={cn(
                    'px-2.5 py-1 rounded-full text-xs font-medium whitespace-nowrap transition-all flex items-center gap-1 cursor-pointer shrink-0 border',
                    isSelected
                      ? 'bg-rose-700/80 border-rose-400 text-white shadow-md font-semibold'
                      : 'bg-white/5 hover:bg-white/15 border-white/10 text-white/70 hover:text-white'
                  )}
                >
                  <span>{p.icon}</span>
                  <span>{p.shortName}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Corpo com a Oração Formatada */}
        <div className="p-5 sm:p-6 overflow-y-auto flex-1 space-y-4 text-left leading-relaxed">
          {currentPrayer.instruction && (
            <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/25 text-amber-200/90 text-xs flex items-start gap-2">
              <BookOpen className="w-4 h-4 shrink-0 mt-0.5 text-amber-400" />
              <p className="leading-snug italic">{currentPrayer.instruction}</p>
            </div>
          )}

          <div className="space-y-3.5 bg-black/25 rounded-xl p-4 sm:p-5 border border-white/5">
            {currentPrayer.verses.map((verse, idx) => {
              if (verse.type === 'section') {
                return (
                  <p
                    key={idx}
                    className="font-bold text-xs uppercase tracking-widest text-rose-300/80 pt-1"
                  >
                    {verse.text}
                  </p>
                );
              }
              if (verse.type === 'verse') {
                return (
                  <p key={idx} className="text-sm sm:text-base font-serif text-white/90">
                    <strong className="text-rose-400 mr-1">℣.</strong> {verse.text.replace(/^℣\.\s*/, '')}
                  </p>
                );
              }
              if (verse.type === 'response') {
                return (
                  <p key={idx} className="text-sm sm:text-base font-serif text-rose-200 font-medium pl-3">
                    <strong className="text-rose-400 mr-1">℟.</strong> {verse.text.replace(/^℟\.\s*/, '')}
                  </p>
                );
              }
              return (
                <p
                  key={idx}
                  className={cn(
                    'text-sm sm:text-base font-serif whitespace-pre-line',
                    verse.type === 'prayer' ? 'text-white font-medium' : 'text-stone-200'
                  )}
                >
                  {verse.text}
                </p>
              );
            })}
          </div>
        </div>

        {/* Rodapé com botão de copiar e fechar */}
        <div className="px-5 py-3 border-t border-white/10 bg-black/40 flex items-center justify-between gap-3">
          <button
            type="button"
            onClick={handleCopy}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white/80 hover:text-white transition-all text-xs font-medium cursor-pointer border border-white/10"
            title="Copiar texto da oração"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-300 font-semibold">Copiada!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Copiar oração</span>
              </>
            )}
          </button>

          <button
            type="button"
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-rose-700 hover:bg-rose-600 text-white text-xs font-semibold shadow-md transition-all cursor-pointer"
          >
            Concluir
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
