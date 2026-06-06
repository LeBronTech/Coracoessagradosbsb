'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from '@/components/ui/carousel';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight, Copy, ChevronDown, ChevronLeft, ChevronRight, Check, Maximize2, X, Hand } from 'lucide-react';
import { cn, formatSaintName } from '@/lib/utils';
import type { Saint, Novena, NovenaVersion } from '@/lib/data';
import type { Theme } from '@/app/page';
import Image from 'next/image';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogClose } from '@/components/ui/dialog';


const themeClasses: Record<Theme, string> = {
  'theme-default': 'bg-[#949da4] text-white',
  'theme-dark-gray': 'bg-gray-700 text-white',
  'theme-light-gray': 'bg-gray-100 text-stone-800',
  'theme-red': 'bg-primary text-white',
  'theme-green': 'bg-[#14532d] text-white',
};

const themeDotClasses: Record<Theme, string> = {
  'theme-default': 'bg-[#949da4]',
  'theme-dark-gray': 'bg-gray-700',
  'theme-light-gray': 'bg-gray-100',
  'theme-red': 'bg-primary',
  'theme-green': 'bg-[#14532d]',
};

// Gradient overlay for the blurred image background - lighter at top, theme color at bottom
const themeGradientOverlay: Record<Theme, string> = {
  'theme-default': 'from-[#949da4]/40 via-[#949da4]/75 to-[#949da4]/95',
  'theme-dark-gray': 'from-gray-700/40 via-gray-700/75 to-gray-700/95',
  'theme-light-gray': 'from-gray-100/40 via-gray-100/80 to-gray-100/95',
  'theme-red': 'from-[#8B0000]/40 via-[#8B0000]/75 to-[#8B0000]/95',
  'theme-green': 'from-[#15803d]/80 via-[#052e16]/95 to-[#011a11]/100',
};

// Gradient overlay for the header cover - specific colors per theme
const themeHeaderOverlay: Record<Theme, string> = {
  'theme-default': 'from-black/30 via-black/50 to-black/65',
  'theme-dark-gray': 'from-black/30 via-black/50 to-black/65',
  'theme-light-gray': 'from-black/20 via-black/40 to-black/60',
  'theme-red': 'from-[#8B0000]/30 via-[#5a0000]/60 to-[#3a0000]/85',
  'theme-green': 'from-[#16a34a]/30 via-[#14532d]/60 to-[#052e16]/85',
};

interface NovenaDisplayProps {
  saint: Saint | null;
  novena: Novena | null;
  theme: Theme;
  setTheme: (theme: Theme | ((prev: Theme) => Theme)) => void;
}

function ThemeSelector({ theme, setTheme }: { theme: Theme, setTheme: (theme: Theme | ((prev: Theme) => Theme)) => void }) {
  return (
    <div className="flex justify-end gap-2.5 bg-background/50 backdrop-blur-sm px-3 py-1.5 rounded-full z-30 mb-4 w-fit ml-auto">
      {(['theme-dark-gray', 'theme-default', 'theme-light-gray', 'theme-red', 'theme-green'] as Theme[]).map((t) => (
        <button
          key={t}
          onClick={() => setTheme(t)}
          title={`Tema ${t.split('-')[1]}`}
          className={cn(
            'w-5 h-5 rounded-full cursor-pointer transition-all duration-200 border-2 border-white/70 shadow-md',
            'hover:scale-115',
            theme === t ? 'scale-125 shadow-lg ring-2 ring-white/90 ring-offset-2 ring-offset-transparent' : '',
            themeDotClasses[t]
          )}
        />
      ))}
    </div>
  );
}

function NovenaContent({ htmlContent }: { htmlContent: string }) {
  return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;
}

const HIGH_RES_MAPPING: Record<string, string> = {
  "https://i.postimg.cc/T1H1QJ47/africa-icon.jpg": "https://i.postimg.cc/13mwvvXv/africa-icon.jpg",
  "https://i.postimg.cc/dQWhqJVJ/americas-icon.jpg": "https://i.postimg.cc/g2z8ggjs/americas-icon.jpg",
  "https://i.postimg.cc/KjsjQDHk/anunciacao.png": "https://i.postimg.cc/pLWzssrQ/anunciacao.png",
  "https://i.postimg.cc/qqZqQx5R/apresentacao-do-senhor.jpg": "https://i.postimg.cc/JzrZpp0Z/apresentacao-do-senhor.jpg",
  "https://i.postimg.cc/XN2rVnY6/asia-icon.jpg": "https://i.postimg.cc/c4Mf7pxH/asia-icon.jpg",
  "https://i.postimg.cc/wxW169jQ/europa-icon-white.jpg": "https://i.postimg.cc/KvynMGy0/europa-icon-white.jpg",
  "https://i.postimg.cc/VvN5jVDf/europe-icon.jpg": "https://i.postimg.cc/CLVjqhVj/europe-icon.jpg",
  "https://i.postimg.cc/Y0Sj1sbt/fra-angelico.png": "https://i.postimg.cc/Y2F604Tf/fra-angelico.png",
  "https://i.postimg.cc/DZ684TQR/imaculado-coracao-maria.jpg": "https://i.postimg.cc/xjmv8kBd/imaculado-coracao-maria.jpg",
  "https://i.postimg.cc/fWHVwMRX/nome-maria.png": "https://i.postimg.cc/L5jLb7jQ/nome-maria.png",
  "https://i.postimg.cc/MT5vfS00/nossa-senhora-loreto.jpg": "https://i.postimg.cc/mk7C5q7X/nossa-senhora-loreto.jpg",
  "https://i.postimg.cc/W1Zz6r67/ns-abadia.png": "https://i.postimg.cc/rs5xPb5N/ns-abadia.png",
  "https://i.postimg.cc/fygy5frd/ns-akita.png": "https://i.postimg.cc/rs5xPb5S/ns-akita.png",
  "https://i.postimg.cc/0yKMWhxK/ns-anjos.jpg": "https://i.postimg.cc/Bb2HVy2F/ns-anjos.jpg",
  "https://i.postimg.cc/rsh03kKj/ns-anunciacao.jpg": "https://i.postimg.cc/nrqBP5q9/ns-anunciacao.jpg",
  "https://i.postimg.cc/tTpsgT6g/ns-assuncao.jpg": "https://i.postimg.cc/0j7DB376/ns-assuncao.jpg",
  "https://i.postimg.cc/qMbyZ8KH/ns-assuncao-nz.jpg": "https://i.postimg.cc/qq2y5Y2R/ns-assuncao-nz.jpg",
  "https://i.postimg.cc/qqQyrKZy/ns-auxiliadora.jpg": "https://i.postimg.cc/FRM0GmkS/ns-auxiliadora.jpg",
  "https://i.postimg.cc/854jfSdv/ns-auxiliadora-australia.jpg": "https://i.postimg.cc/FRM0GmkY/ns-auxiliadora-australia.jpg",
  "https://i.postimg.cc/QCnCSJyV/ns-banneux.png": "https://i.postimg.cc/cHpfTZgp/ns-banneux.png",
  "https://i.postimg.cc/Y9RhLHN8/ns-boa-morte.png": "https://i.postimg.cc/mDzQQhDJ/ns-boa-morte.png",
  "https://i.postimg.cc/50g6QV57/ns-boa-viagem.jpg": "https://i.postimg.cc/LXYzzhXV/ns-boa-viagem.jpg",
  "https://i.postimg.cc/cH0vJH3m/ns-bom-conselho.jpg": "https://i.postimg.cc/qRh88gRx/ns-bom-conselho.jpg",
  "https://i.postimg.cc/J7Ts1Rzy/ns-bom-despacho.jpg": "https://i.postimg.cc/MTMyyXTR/ns-bom-despacho.jpg",
  "https://i.postimg.cc/2yXyT7Kd/ns-cafe.png": "https://i.postimg.cc/N0P69Rg1/ns-cafe.png",
  "https://i.postimg.cc/mkdzJstC/ns-cana.jpg": "https://i.postimg.cc/DzYrJ12X/ns-cana.jpg",
  "https://i.postimg.cc/d1wh01Cn/ns-candeias.jpg": "https://i.postimg.cc/GpSF8vcB/ns-candeias.jpg",
  "https://i.postimg.cc/769fJk1V/ns-caravaggio.jpg": "https://i.postimg.cc/Ls0tYjHh/ns-caravaggio.jpg",
  "https://i.postimg.cc/65yyqF8C/ns-consolacao.png": "https://i.postimg.cc/g0BVX3Yc/ns-consolacao.png",
  "https://i.postimg.cc/9MCDfM9r/ns-consolata.jpg": "https://i.postimg.cc/jjkHwysR/ns-consolata.jpg",
  "https://i.postimg.cc/MKNXQtRp/ns-copacabana.png": "https://i.postimg.cc/TPPj3tXp/ns-copacabana.png",
  "https://i.postimg.cc/W1qFWxjc/ns-covadonga.png": "https://i.postimg.cc/1zz03vZ4/ns-covadonga.png",
  "https://i.postimg.cc/pTCp5HQB/ns-desatadora.jpg": "https://i.postimg.cc/YSSNCdw0/ns-desatadora.jpg",
  "https://i.postimg.cc/nLvsZ7Cy/ns-desterro.jpg": "https://i.postimg.cc/R001ZgzF/ns-desterro.jpg",
  "https://i.postimg.cc/DZ684TQY/ns-divina-providencia.jpg": "https://i.postimg.cc/jjj6SMrR/ns-divina-providencia.jpg",
  "https://i.postimg.cc/3R1d0Tjt/ns-dores-semana-santa.jpg": "https://i.postimg.cc/YSSNCdwM/ns-dores-semana-santa.jpg",
  "https://i.postimg.cc/mkrhQ58s/ns-dores-setembro.jpg": "https://i.postimg.cc/bvv0wmj8/ns-dores-setembro.jpg",
  "https://i.postimg.cc/NMD52c8V/ns-estrela.jpg": "https://i.postimg.cc/mrr3gmGG/ns-estrela.jpg",
  "https://i.postimg.cc/qvNyfzcB/ns-estrela-do-mar-pacifico.jpg": "https://i.postimg.cc/Jhh3zpC9/ns-estrela-do-mar-pacifico.jpg",
  "https://i.postimg.cc/cH0vJH31/ns-fatima.jpg": "https://i.postimg.cc/k55NgTPz/ns-fatima.jpg",
  "https://i.postimg.cc/RVNNh2WP/ns-filipinas.png": "https://i.postimg.cc/nh2Yx6gg/ns-filipinas.png",
  "https://i.postimg.cc/52zyqvqY/ns-gloria.png": "https://i.postimg.cc/GmKJRZVM/ns-gloria.png",
  "https://i.postimg.cc/J7Ts1RzW/ns-gracas-cimbres.png": "https://i.postimg.cc/Bnpc3dkm/ns-gracas-cimbres.png",
  "https://i.postimg.cc/NfSLHbTw/ns-impossiveis.jpg": "https://i.postimg.cc/XYLcWTmQ/ns-impossiveis.jpg",
  "https://i.postimg.cc/bwnrHbHn/ns-itauna.png": "https://i.postimg.cc/qvwXr9SX/ns-itauna.png",
  "https://i.postimg.cc/RZthQfQc/ns-kibeho.png": "https://i.postimg.cc/GmKJRZVy/ns-kibeho.png",
  "https://i.postimg.cc/Y2XvptCK/ns-la-salette.jpg": "https://i.postimg.cc/7Z9M4pd5/ns-la-salette.jpg",
  "https://i.postimg.cc/ZRSdyHGJ/ns-la-vang.png": "https://i.postimg.cc/Z54F1T7P/ns-la-vang.png",
  "https://i.postimg.cc/jdmC7vNY/ns-lagrimas.jpg": "https://i.postimg.cc/7ZwMpxsS/ns-lagrimas.jpg",
  "https://i.postimg.cc/rsYsgNPp/ns-laus.png": "https://i.postimg.cc/qv4X9kbn/ns-laus.png",
  "https://i.postimg.cc/J7Ts1Rzr/ns-loreto-1.png": "https://i.postimg.cc/13scL9Cz/ns-loreto-1.png",
  "https://i.postimg.cc/RF4W0Ftw/ns-lourdes.jpg": "https://i.postimg.cc/g2mqfYSG/ns-lourdes.jpg",
  "https://i.postimg.cc/vHkDVXnq/ns-lujan.png": "https://i.postimg.cc/vZbLpQqF/ns-lujan.png",
  "https://i.postimg.cc/jq8DsRS7/ns-luz.png": "https://i.postimg.cc/8PhmKFHT/ns-luz.png",
  "https://i.postimg.cc/sXsM2XWG/ns-mae-rainha.jpg": "https://i.postimg.cc/sDp46BcR/ns-mae-rainha.jpg",
  "https://i.postimg.cc/TYwWmp4b/ns-medianeira.jpg": "https://i.postimg.cc/yYqTyh0G/ns-medianeira.jpg",
  "https://i.postimg.cc/J7Ts1Rz8/ns-medjugorje.png": "https://i.postimg.cc/VLyFW9XF/ns-medjugorje.png",
  "https://i.postimg.cc/mkrhQ58t/ns-mel.png": "https://i.postimg.cc/X7MgkK9f/ns-mel.png",
  "https://i.postimg.cc/kGhGwvpf/ns-merces.png": "https://i.postimg.cc/Kc3NTp3T/ns-merces.png",
  "https://i.postimg.cc/0ySjdmdn/ns-monte-serrat.png": "https://i.postimg.cc/SQYr91YJ/ns-monte-serrat.png",
  "https://i.postimg.cc/y6TF0qY8/ns-naju-2.png": "https://i.postimg.cc/ZYvcNsvq/ns-naju-2.png",
  "https://i.postimg.cc/xdrkWgTH/ns-natividade.jpg": "https://i.postimg.cc/XNB851B0/ns-natividade.jpg",
  "https://i.postimg.cc/tCTVPYMY/ns-nazareth.png": "https://i.postimg.cc/pV5Zjc5N/ns-nazareth.png",
  "https://i.postimg.cc/Hsx75VhP/ns-neves.jpg": "https://i.postimg.cc/vTntdDwt/ns-neves.jpg",
  "https://i.postimg.cc/T1H1QJ40/ns-oceania-1.png": "https://i.postimg.cc/8cvmVsgd/ns-oceania-1.png",
  "https://i.postimg.cc/7Yffhj5V/ns-oceania-2.jpg": "https://i.postimg.cc/8cvmVsgL/ns-oceania-2.jpg",
  "https://i.postimg.cc/sDvvxbM4/ns-oceania-geral.jpg": "https://i.postimg.cc/C58sVdpD/ns-oceania-geral.jpg",
  "https://i.postimg.cc/KjY4nHJk/ns-patrocinio.png": "https://i.postimg.cc/NFXkwLv9/ns-patrocinio.png",
  "https://i.postimg.cc/sxnQqrvj/ns-paz-oceania.jpg": "https://i.postimg.cc/hvm1qhRd/ns-paz-oceania.jpg",
  "https://i.postimg.cc/FznzGVB0/ns-pellevoisin.png": "https://i.postimg.cc/NFXkwLvy/ns-pellevoisin.png",
  "https://i.postimg.cc/cCdwPhh5/ns-penha.jpg": "https://i.postimg.cc/J0X5WtCz/ns-penha.jpg",
  "https://i.postimg.cc/jSf2QNQ7/ns-penha-sp.png": "https://i.postimg.cc/j5m49Pm5/ns-penha-sp.png",
  "https://i.postimg.cc/G3jkv0hd/ns-perpetuo-socorro.jpg": "https://i.postimg.cc/wvZQPLZB/ns-perpetuo-socorro.jpg",
  "https://i.postimg.cc/vBhcxs75/ns-piedade.jpg": "https://i.postimg.cc/vBktjfkd/ns-piedade.jpg",
  "https://i.postimg.cc/yYdS9kbX/ns-pilar.jpg": "https://i.postimg.cc/rmK9QQh7/ns-pilar.jpg",
  "https://i.postimg.cc/SQZnymxY/ns-primavera.jpg": "https://i.postimg.cc/BvhgTdCF/ns-primavera.jpg",
  "https://i.postimg.cc/RVyqHGfh/ns-quinche.jpg": "https://i.postimg.cc/s2ncYtJf/ns-quinche.jpg",
  "https://i.postimg.cc/nrnBN22P/ns-rainha.jpg": "https://i.postimg.cc/bvYg2z1Y/ns-rainha.jpg",
  "https://i.postimg.cc/Kz2Mgf6h/ns-rainha-paz.jpg": "https://i.postimg.cc/pLJkT9hJ/ns-rainha-paz.jpg",
  "https://i.postimg.cc/qMzzqWNw/ns-remedios.jpg": "https://i.postimg.cc/52Sp0HYt/ns-remedios.jpg",
  "https://i.postimg.cc/28VVyg1b/ns-revelacao.png": "https://i.postimg.cc/HkgBd0xy/ns-revelacao.png",
  "https://i.postimg.cc/v8P4QGZ5/ns-rocio.png": "https://i.postimg.cc/8zStNd5C/ns-rocio.png",
  "https://i.postimg.cc/xC5cN2Gp/ns-rosa-mistica.jpg": "https://i.postimg.cc/mgs8B3DB/ns-rosa-mistica.jpg",
  "https://i.postimg.cc/VLddv2JT/ns-rosario-argentina.jpg": "https://i.postimg.cc/VvXnVTXF/ns-rosario-argentina.jpg",
  "https://i.postimg.cc/ZRxyP3mD/ns-sagrado-coracao.jpg": "https://i.postimg.cc/MKRdC3zs/ns-sagrado-coracao.jpg",
  "https://i.postimg.cc/6q1qzfmd/ns-santa-cabeca.png": "https://i.postimg.cc/gc1gBbbD/ns-santa-cabeca.jpg",
  "https://i.postimg.cc/L4yJHm8R/ns-saude-agosto.png": "https://i.postimg.cc/wxnwbYYs/ns-saude-agosto.png",
  "https://i.postimg.cc/FznzGVBc/ns-sheshan.png": "https://i.postimg.cc/9XsLNHHF/ns-sheshan.png",
  "https://i.postimg.cc/3JddNzy5/ns-sheshan-1.jpg": "https://i.postimg.cc/3rkLBJVk/ns-sheshan-1.jpg",
  "https://i.postimg.cc/BQktKND0/ns-sheshan-2.png": "https://i.postimg.cc/ryDhJF3M/ns-sheshan-2.png",
  "https://i.postimg.cc/HnTXFzzq/ns-sheshan-3.png": "https://i.postimg.cc/ZYWfcK25/ns-sheshan-3.png",
  "https://i.postimg.cc/bNssr4Zb/ns-soufanieh.jpg": "https://i.postimg.cc/8k7yHP30/ns-soufanieh.jpg",
  "https://i.postimg.cc/mZdPbTgb/ns-walsingham.png": "https://i.postimg.cc/RqrJ1T8w/ns-walsingham.png",
  "https://i.postimg.cc/d3S3njxj/oceania-icon.jpg": "https://i.postimg.cc/xqrNGP7N/oceania-icon.jpg",
  "https://i.postimg.cc/2jH1zCS5/sagrada-familia.jpg": "https://i.postimg.cc/RqrJ1T80/sagrada-familia.jpg",
  "https://i.postimg.cc/FKjfmc7P/santa-ana.jpg": "https://i.postimg.cc/bdXS0RMz/santa-ana.jpg",
  "https://i.postimg.cc/LXp1ZDc5/santa-barbara.jpg": "https://i.postimg.cc/pyN5QB7x/santa-barbara.jpg",
  "https://i.postimg.cc/5twH1vXt/santa-bibiana.jpg": "https://i.postimg.cc/c6qt7cjS/santa-bibiana.jpg",
  "https://i.postimg.cc/K8TjrLrZ/santa-brigida.png": "https://i.postimg.cc/WzqJJy5H/santa-brigida.png",
  "https://i.postimg.cc/W1Zz6r6p/santa-brigida-irlanda.png": "https://i.postimg.cc/j2nJJ1MZ/santa-brigida-irlanda.png",
  "https://i.postimg.cc/XN2rVnYw/santa-catarina-ricci.png": "https://i.postimg.cc/3N0DDqtt/santa-catarina-ricci.png",
  "https://i.postimg.cc/02FrwZmk/santa-eulalia.png": "https://i.postimg.cc/B6VKb3B7/santa-eulalia.png",
  "https://i.postimg.cc/7Yffhj5g/santa-juliana.png": "https://i.postimg.cc/mD5Hk4yd/santa-juliana.png",
  "https://i.postimg.cc/vTmDWNXj/santo-ambrosio.jpg": "https://i.postimg.cc/QtyTCDJM/santo-ambrosio.jpg",
  "https://i.postimg.cc/wBKtSFTw/santo-andre-bobola.jpg": "https://i.postimg.cc/3RRG3Nm0/santo-andre-bobola.jpg",
  "https://i.postimg.cc/pVkFpDq8/santo-eloi.jpg": "https://i.postimg.cc/MTTBzHVH/santo-eloi.jpg",
  "https://i.postimg.cc/3JSmbgvb/sao-bento.png": "https://i.postimg.cc/j2nJJ18R/sao-bento.png",
  "https://i.postimg.cc/W3vkJ8BT/sao-bernardino-sena.jpg": "https://i.postimg.cc/TPTmHCPQ/sao-bernardino-sena.jpg",
  "https://i.postimg.cc/bNssr4GX/sao-bras.jpg": "https://i.postimg.cc/8CwW8MFm/sao-bras.jpg",
  "https://i.postimg.cc/7hLbgWm6/sao-damaso.jpg": "https://i.postimg.cc/Sx6CrwkZ/sao-damaso.jpg",
  "https://i.postimg.cc/ydsDNdRR/sao-francisco-xavier.jpg": "https://i.postimg.cc/3xXmBPYS/sao-francisco-xavier.jpg",
  "https://i.postimg.cc/nVdXHnhY/sao-joao-brito.png": "https://i.postimg.cc/6QzRsn7h/sao-joao-brito.png",
  "https://i.postimg.cc/fRdyjXj8/sao-joao-diego.png": "https://i.postimg.cc/4NhzKYM1/sao-joao-diego.png",
  "https://i.postimg.cc/x1NJxBYf/sao-joao-i.jpg": "https://i.postimg.cc/y8400V4h/sao-joao-i.jpg",
  "https://i.postimg.cc/3xkmMdXV/sao-joao-nepomuceno.jpg": "https://i.postimg.cc/YCKQQpKx/sao-joao-nepomuceno.jpg",
  "https://i.postimg.cc/vBb4mBnv/sao-nicolau.jpg": "https://i.postimg.cc/vH6W14jf/sao-nicolau.jpg",
  "https://i.postimg.cc/4dsY3dcZ/sao-pascoal-bailao.jpg": "https://i.postimg.cc/8PrhF73p/sao-pascoal-bailao.jpg",
  "https://i.postimg.cc/DwG0dsdS/sao-paulo-miki.png": "https://i.postimg.cc/kMHQXQj9/sao-paulo-miki.png",
  "https://i.postimg.cc/59pC6wnj/sao-pedro-celestino.jpg": "https://i.postimg.cc/dQf2t25z/sao-pedro-celestino.jpg",
  "https://i.postimg.cc/x8F8g34T/sao-sabas.jpg": "https://i.postimg.cc/XNPf7fs1/sao-sabas.jpg",
  "https://i.postimg.cc/qq7g85jg/sao-valeriano.jpg": "https://i.postimg.cc/KcWPvP0s/sao-valeriano.jpg",
  "https://i.postimg.cc/ydsDNdRy/visitacao-ns.jpg": "https://i.postimg.cc/J7FN4NpF/visitacao-ns.jpg"
};

function getHighResUrl(url: string): string {
  if (!url) return '';
  return HIGH_RES_MAPPING[url] || url;
}

export default function NovenaDisplay({ saint, novena, theme, setTheme }: NovenaDisplayProps) {
  const [animationState, setAnimationState] = useState<'idle' | 'out' | 'in'>('idle');
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const [selectedVersionId, setSelectedVersionId] = useState<string>('tradicional');
  const [completedDays, setCompletedDays] = useState<Record<number, boolean>>({});
  const [isChanging, setIsChanging] = useState(false);
  const [currentOfficialDayIndex, setCurrentOfficialDayIndex] = useState<number | null>(null);
  
  const [alertInfo, setAlertInfo] = useState<{ title: string, description: React.ReactNode } | null>(null);
  const [isAlertExpanded, setIsAlertExpanded] = useState(false);
  const [isAutoDisplay, setIsAutoDisplay] = useState(false);
  const alertTimerRef = useRef<NodeJS.Timeout | null>(null);
  const alertContainerRef = useRef<HTMLDivElement>(null);
  const novenaContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleInteraction(event: Event) {
      if (isAutoDisplay || !isAlertExpanded) return;

      if (event.type === 'scroll') {
        setIsAlertExpanded(false);
      } else if (event.type === 'mousedown' || event.type === 'touchstart') {
        if (alertContainerRef.current && !alertContainerRef.current.contains(event.target as Node)) {
          setIsAlertExpanded(false);
        }
      }
    }

    if (isAlertExpanded && !isAutoDisplay) {
      document.addEventListener('mousedown', handleInteraction);
      document.addEventListener('touchstart', handleInteraction);
      window.addEventListener('scroll', handleInteraction, { passive: true });
    }

    return () => {
      document.removeEventListener('mousedown', handleInteraction);
      document.removeEventListener('touchstart', handleInteraction);
      window.removeEventListener('scroll', handleInteraction);
    };
  }, [isAlertExpanded, isAutoDisplay]);

  useEffect(() => {
    // Reset alert state when saint changes
    setIsAlertExpanded(false);
    setIsAutoDisplay(false);
    if (alertTimerRef.current) clearTimeout(alertTimerRef.current);

    if (saint && saint.startDate) {
      const todayOnlyDate = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate());
      
      const [startDayStr, startMonthStr] = saint.startDate.split('/');
      const [endDayStr, endMonthStr] = saint.endDate.split('/');
      const startMonth = Number(startMonthStr);
      const endMonth = Number(endMonthStr);
      
      let startD = new Date(todayOnlyDate.getFullYear(), startMonth - 1, Number(startDayStr));
      let endD = new Date(todayOnlyDate.getFullYear(), endMonth - 1, Number(endDayStr));
      
      if (endMonth < startMonth) {
        if (todayOnlyDate.getMonth() < 6) {
          startD.setFullYear(todayOnlyDate.getFullYear() - 1);
        } else {
          endD.setFullYear(todayOnlyDate.getFullYear() + 1);
        }
      }

      const diffStart = Math.ceil((todayOnlyDate.getTime() - startD.getTime()) / (1000 * 60 * 60 * 24));
      const diffEnd = Math.ceil((endD.getTime() - todayOnlyDate.getTime()) / (1000 * 60 * 60 * 24));

      if (diffStart >= 0 && diffStart < (novena?.days?.length || 9)) {
        setCurrentOfficialDayIndex(diffStart);
      } else {
        setCurrentOfficialDayIndex(null);
      }

      // Detectar se é trezena baseado no título
      const isTrezena = novena?.novenaTitle?.toLowerCase().includes('trezena');
      const devocaoLabel = isTrezena ? 'trezena' : 'novena';
      const devocaoLabelCap = isTrezena ? 'Trezena' : 'Novena';

      let title = "";
      let description: React.ReactNode = "";

      if (diffStart === 0) {
        title = "Inicia Hoje!";
        description = `Esta ${devocaoLabel} começou oficialmente hoje. É o momento perfeito para iniciá-la.`;
      } else if (diffEnd === 0) {
        title = `Último dia (${diffStart + 1}º Dia)`;
        description = <>Atenção: hoje é o último dia oficial (<strong>{diffStart + 1}º Dia</strong>) desta {devocaoLabel} antes da sua grande festa.</>;
      } else if (diffStart > 0 && diffEnd > 0) {
        title = `${devocaoLabelCap} em andamento`;
        description = <>A {devocaoLabel} está atualmente no <strong>{diffStart + 1}º dia</strong>. Junte-se às orações!</>;
      } else {
        title = "Aviso";
        description = <>A data oficial inicia em <strong>{saint.startDate}</strong>, mas você pode iniciar e rezar esta {devocaoLabel} em qualquer época ou momento!</>;
      }

      setAlertInfo({ title, description });

      // Delay auto-expand to avoid conflict with main entrance animation
      const openTimer = setTimeout(() => {
        // Only auto-expand if the user hasn't interacted yet (isAutoDisplay would be true or we check isAlertExpanded)
        // But more importantly, if alertTimerRef is not set by a manual click
        setAlertInfo(prev => {
          if (prev) {
            setIsAlertExpanded(true);
            setIsAutoDisplay(true);

            alertTimerRef.current = setTimeout(() => {
              setIsAlertExpanded(false);
              setIsAutoDisplay(false);
              alertTimerRef.current = null;
            }, 5000);
          }
          return prev;
        });
      }, 2000);

      return () => {
        clearTimeout(openTimer);
        if (alertTimerRef.current) clearTimeout(alertTimerRef.current);
      };
    }
  }, [saint, novena]);

  const onSelect = useCallback(() => {
    if (!api) return;
    const newCurrent = api.selectedScrollSnap();
    setCurrent(newCurrent);
    if (saint && typeof window !== 'undefined') {
      const storageKey = `novena_current_day_${saint.id}_${selectedVersionId}`;
      localStorage.setItem(storageKey, newCurrent.toString());
    }
  }, [api, saint, selectedVersionId]);

  const scrollTo = useCallback((index: number) => {
    api?.scrollTo(index);
  }, [api]);

  useEffect(() => {
    if (novena) {
      setIsChanging(true);
      setAnimationState('out');
      
      const outTimer = setTimeout(() => {
        setAnimationState('in');
        setIsChanging(false);
        if (api) {
          if (saint && typeof window !== 'undefined') {
            const storageKey = `novena_current_day_${saint.id}_${selectedVersionId}`;
            const saved = localStorage.getItem(storageKey);
            if (saved !== null) {
              const savedIndex = parseInt(saved, 10);
              if (!isNaN(savedIndex) && savedIndex >= 0) {
                api.scrollTo(savedIndex, true);
              } else {
                api.scrollTo(0, true);
              }
            } else {
              api.scrollTo(0, true);
            }
          } else {
            api.scrollTo(0, true);
          }
        }
      }, 400); // Wait a bit more for scroll sync

      const inTimer = setTimeout(() => {
        setAnimationState('idle');
      }, 400 + 600);

      return () => {
        clearTimeout(outTimer);
        clearTimeout(inTimer);
      };
    }
  }, [saint, novena, api, selectedVersionId]);

  // Reset version when novena changes
  useEffect(() => {
    setSelectedVersionId('tradicional');
  }, [saint]);

  // Handle completed days state
  useEffect(() => {
    if (saint && typeof window !== 'undefined') {
      const storageKey = `novena_completed_${saint.id}_${selectedVersionId}`;
      const saved = localStorage.getItem(storageKey);
      if (saved) {
        try {
          setCompletedDays(JSON.parse(saved));
        } catch (e) {
          setCompletedDays({});
        }
      } else {
        setCompletedDays({});
      }
    }
  }, [saint, selectedVersionId]);

  const toggleCompleted = useCallback((index: number) => {
    setCompletedDays(prev => {
      const newState = { ...prev, [index]: !prev[index] };
      if (saint && typeof window !== 'undefined') {
        const storageKey = `novena_completed_${saint.id}_${selectedVersionId}`;
        localStorage.setItem(storageKey, JSON.stringify(newState));
      }
      return newState;
    });
  }, [saint, selectedVersionId]);



  useEffect(() => {
    if (!api) {
      return;
    }
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());
    api.on("select", onSelect);

    return () => {
      api.off("select", onSelect);
    };
  }, [api, onSelect]);

  // O localStorage.setItem para o current day foi movido para o onSelect
  // para evitar sobrescrever o estado ao trocar de santo (quando current ainda é do santo anterior).

  const copyNovenaText = () => {
    if (!novena) return;

    const stripHtml = (html: string) => {
      let text = html
        .replace(/<p[^>]*>/g, '\n')
        .replace(/<\/p>/g, '\n')
        .replace(/<br\s*\/?>/g, '\n')
        .replace(/<h4[^>]*>/g, '\n\n')
        .replace(/<\/h4>/g, '\n')
        .replace(/<[^>]*>/g, '');

      text = text
        .replace(/&nbsp;/g, ' ')
        .replace(/&amp;/g, '&')
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&quot;/g, '"')
        .replace(/&#39;/g, "'");

      return text.split('\n').map(line => line.trim()).filter(line => line.length > 0).join('\n');
    };

    let fullText = `*${novena.novenaTitle.toUpperCase()}*\n\n`;

    if (novena.initialPrayer) {
      fullText += `*ORAÇÃO INICIAL*\n\n${stripHtml(novena.initialPrayer)}\n\n`;
    }

    novena.days.forEach((day, index) => {
      fullText += `*${day.day.toUpperCase()} - ${day.title.toUpperCase()}*\n\n${stripHtml(day.content)}\n\n`;
    });

    if (novena.finalPrayer) {
      fullText += `*ORAÇÃO FINAL*\n\n${stripHtml(novena.finalPrayer)}\n\n`;
    }

    fullText += `\n_Fonte: Portal Corações Sagrados_`;

    navigator.clipboard.writeText(fullText).then(() => {
      alert('Texto completo da novena copiado com sucesso!');
    }).catch(err => {
      console.error('Erro ao copiar texto:', err);
    });
  };

  const scrollToNovenaStart = () => {
    if (novenaContentRef.current) {
      novenaContentRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };


  if (!novena || !saint) {
    return (
      <main className="flex flex-col items-center justify-center p-16 text-center bg-transparent border-2 border-dashed rounded-2xl">
        <div className="font-headline text-5xl text-primary/50 mb-4">✝</div>
        <h2 className="font-headline text-2xl tracking-wide">Bem-vindo ao Portal Corações Sagrados</h2>
        <p className="mt-2 text-muted-foreground max-w-md">
          Selecione uma novena na barra acima para iniciar sua jornada de oração e reflexão.
        </p>
      </main>
    );
  }

  const activeVersion: NovenaVersion | null =
    novena?.versions?.find(v => v.id === selectedVersionId) ?? null;

  const { novenaTitle, description } = novena;
  const days = activeVersion?.days ?? novena.days;
  const initialPrayer = activeVersion?.initialPrayer ?? novena.initialPrayer;
  const finalPrayer = activeVersion?.finalPrayer ?? novena.finalPrayer;

  const completedCount = Object.values(completedDays).filter(Boolean).length;
  const progress = (completedCount / (days.length || 1)) * 100;
  const isAllCompleted = completedCount === days.length && days.length > 0;

  const handleResetNovena = () => {
    if (saint && typeof window !== 'undefined') {
      const storageKey = `novena_completed_${saint.id}_${selectedVersionId}`;
      localStorage.removeItem(storageKey);
      setCompletedDays({});
      api?.scrollTo(0);
    }
  };

  const isLightTheme = theme === 'theme-light-gray';

  const getAnimationClass = () => {
    switch (animationState) {
      case 'out': return 'animate-fade-out';
      case 'in': return 'animate-fade-in';
      default: return '';
    }
  }

  const arrowClasses = isLightTheme
    ? "text-primary border-primary/50 hover:bg-primary hover:text-white"
    : "text-primary border-primary/50 hover:bg-primary hover:text-white";

  const isSpecialNovena = days.length === 2 && (days[0].title === 'Oração da Novena' || days[1].title === 'Breve história da Apresentação');

  const proseClasses = cn(
    "prose max-w-none prose-blockquote:text-inherit",
    isLightTheme ? "text-stone-800" : "text-white",
    isLightTheme ? "prose-blockquote:text-primary/90" : "prose-blockquote:text-white/90",
    isLightTheme ? "[&_.litany-response]:text-primary/90" : "[&_.litany-response]:text-white/80"
  );


  return (
    <main
      id="main-card"
      className={cn(
        'main-card glass-card rounded-3xl p-6 md:p-10 relative shadow-[0_20px_50px_rgba(0,0,0,0.3)] overflow-hidden flex flex-col gap-6',
        themeClasses[theme],
        theme,
        getAnimationClass()
      )}
      style={theme === 'theme-green' ? { backgroundColor: '#011a11', color: 'white' } : undefined}
    >
      {/* === Blurred image background for the entire card === */}
      {saint && (
        <>
          <img
            src={(novena as any)?.image || saint.imageUrl}
            alt=""
            aria-hidden
            className="absolute inset-0 w-full h-full object-cover blur-[50px] opacity-40 pointer-events-none transition-all duration-1000"
            style={{ objectPosition: (novena as any)?.imageObjectPosition || (saint as any)?.imageObjectPosition || 'center' }}
          />
          <div className={cn('absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/60 pointer-events-none', themeGradientOverlay[theme])} />
        </>
      )}

      <div className="flex items-center justify-between relative z-50 w-full px-2">
        <Button
          onClick={copyNovenaText}
          variant="ghost"
          size="icon"
          className={cn(
            'rounded-full h-10 w-10 shrink-0 border-2 bg-white/10 backdrop-blur-md transition-all hover:scale-110 active:scale-95',
            theme === 'theme-light-gray' || theme === 'theme-default'
              ? 'border-stone-200 hover:bg-black/5 text-stone-600' 
              : 'border-white/20 hover:bg-white/10 text-white'
          )}
          title={days.length === 1 ? 'Copiar oração' : `Copiar texto dos ${days.length} dias`}
        >
          <Copy className="w-5 h-5" />
        </Button>

        <ThemeSelector theme={theme} setTheme={setTheme} />
      </div>

      {/* Seletor de versão da novena */}
      {novena.versions && novena.versions.length > 0 && (
        <div className="mb-6 mt-2 relative z-10">
          <p className={cn('text-xs uppercase tracking-widest font-bold text-center mb-3 opacity-70')}>Escolha a versão da novena</p>
          <div className="flex flex-wrap justify-center gap-2">
            <button
              onClick={() => setSelectedVersionId('tradicional')}
              className={cn(
                'px-4 py-2 rounded-full text-sm font-semibold border-2 transition-all',
                selectedVersionId === 'tradicional'
                  ? 'bg-white text-[#14532d] border-white shadow-lg scale-105'
                  : 'bg-white/10 text-white border-white/30 hover:bg-white/20'
              )}
            >
              ✝ Tradicional
            </button>
            {novena.versions.map(v => (
              <button
                key={v.id}
                onClick={() => setSelectedVersionId(v.id)}
                className={cn(
                  'px-4 py-2 rounded-full text-sm font-semibold border-2 transition-all',
                  selectedVersionId === v.id
                    ? 'bg-white text-[#14532d] border-white shadow-lg scale-105'
                    : 'bg-white/10 text-white border-white/30 hover:bg-white/20'
                )}
              >
                {v.name}
              </button>
            ))}
          </div>
        </div>
      )}
      <header id="novena-header" className="w-full relative rounded-3xl mb-10 z-20 shadow-2xl border border-white/10">
        {/* === Container for blurred image background === */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-3xl">
          <Image
            src={(novena as any)?.image || saint.imageUrl}
            alt=""
            aria-hidden
            fill
            className="object-cover blur-2xl opacity-60"
            style={{ objectPosition: (novena as any)?.imageObjectPosition || (saint as any)?.imageObjectPosition || 'center' }}
            priority
          />
          <div className={cn("absolute inset-0 bg-gradient-to-br from-black/70 via-black/40 to-transparent", themeHeaderOverlay[theme])} />
        </div>

        {/* === Content layer === */}
        <div className="relative z-10 flex flex-col p-6 md:p-8">
          {/* Título apenas para mobile - aparece no topo */}
          <div className="md:hidden w-full text-center mb-6">
            <div className="flex flex-col items-center leading-tight">
              <span className="text-xs font-medium uppercase tracking-[0.2em] mb-1 text-white/70 drop-shadow">{novena?.novenaTitle?.toLowerCase().includes('trezena') ? 'Trezena' : 'Novena'}</span>
              <h2 className="text-2xl font-bold font-brand text-white drop-shadow-lg">
                {formatSaintName(saint.name, false, true).main}
              </h2>
              {formatSaintName(saint.name, false, true).additional && (
                <p className="text-sm font-normal mt-0.5 text-white/80 drop-shadow">
                  {formatSaintName(saint.name, false, true).additional}
                </p>
              )}
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10 text-center md:text-left">
          {/* Square image with rounded corners — with zoom on hover and modal on click */}
          <div className="flex flex-col items-center gap-2">
            <Dialog>
              <DialogTrigger asChild>
                <div className="relative group/img cursor-zoom-in flex-shrink-0">
                  <Image
                    src={(novena as any)?.image || saint.imageUrl}
                    alt={saint.name}
                    width={200}
                    height={280}
                    className="w-40 h-56 md:w-48 md:h-64 rounded-2xl object-cover border-4 border-white/30 shadow-2xl transition-all duration-500 group-hover/img:scale-105 group-hover/img:shadow-white/20 ring-1 ring-white/10"
                    style={{ objectPosition: (novena as any)?.imageObjectPosition || (saint as any)?.imageObjectPosition || 'top center' }}
                    priority
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 rounded-2xl flex items-center justify-center">
                    <Maximize2 className="w-6 h-6 text-white drop-shadow-lg" />
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-[95vw] sm:max-w-[90vw] lg:max-w-[85vw] p-0 overflow-hidden bg-transparent border-none shadow-none focus:outline-none">
                <DialogHeader className="sr-only">
                  <DialogTitle>{saint.name}</DialogTitle>
                </DialogHeader>
                
                <div className="relative flex flex-col items-center justify-center gap-4">
                  <div className="relative flex items-center justify-center w-full min-h-[75vh] sm:min-h-[85vh] pt-12">
                    <div className="relative w-fit max-w-full">
                      {/* Custom Close Button — anchored to the image wrapper */}
                      <DialogClose className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 z-[110] p-2 rounded-full bg-black/60 hover:bg-black/80 backdrop-blur-md border-2 border-white/30 text-white transition-all hover:scale-110 active:scale-95 shadow-xl">
                        <X className="w-5 h-5" />
                      </DialogClose>
                      
                      <div className="relative">
                        <Image
                          src={getHighResUrl((novena as any)?.image || saint.imageUrl)}
                          alt={saint.name}
                          width={1200}
                          height={1600}
                          className="max-h-[75vh] sm:max-h-[85vh] w-auto max-w-[95vw] object-contain rounded-lg drop-shadow-[0_0_50px_rgba(0,0,0,0.8)] animate-in zoom-in-95 duration-500"
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-black/40 backdrop-blur-md px-6 py-2 rounded-full border border-white/10">
                    <h3 className="text-white font-brand text-lg sm:text-2xl drop-shadow-lg text-center">
                      {saint.name}
                    </h3>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
            <p className="text-[10px] md:text-xs font-bold text-white/60 uppercase tracking-widest flex items-center gap-1.5 animate-pulse">
              <Hand className="w-3 h-3" /> Clique para ver a imagem
            </p>
          </div>

          <div className="flex-1 min-w-0">
            {/* Título apenas para desktop - aparece ao lado da imagem */}
            <div className="hidden md:flex flex-col items-start leading-tight mb-4">
              <span className="text-sm md:text-base font-medium uppercase tracking-[0.2em] mb-1 text-white/70 drop-shadow">{novena?.novenaTitle?.toLowerCase().includes('trezena') ? 'Trezena' : 'Novena'}</span>
              <h2 className="text-3xl md:text-4xl font-bold font-brand text-white drop-shadow-lg">
                {formatSaintName(saint.name, false, true).main}
              </h2>
              {formatSaintName(saint.name, false, true).additional && (
                <p className="text-base md:text-lg font-normal mt-0.5 text-white/80 drop-shadow">
                  {formatSaintName(saint.name, false, true).additional}
                </p>
              )}
            </div>
            
            <p className="italic text-white/85 drop-shadow text-sm md:text-base leading-relaxed">
              {description || ''}
            </p>
            {saint.startDate && (
              <div ref={alertContainerRef} className="mt-1 relative w-full sm:w-fit mx-auto sm:mx-0">
                {/* Linha de data e status — Mártir tem prioridade */}
                <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-0 relative">
                  {saint.isMartyr && (
                    <span className="text-[10px] font-bold px-3 py-0.5 rounded-full bg-red-700 text-white shadow-lg animate-in fade-in zoom-in duration-300 uppercase tracking-widest z-10">
                      Mártir
                    </span>
                  )}
                  <span className={cn(
                    "inline-block text-xs font-bold px-4 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white border border-white/15 shadow-sm",
                    saint.isMartyr && "-mt-1.5 sm:mt-0 sm:-ml-2"
                  )}>
                    {novena?.novenaTitle?.toLowerCase().includes('trezena') ? 'Trezena' : 'Novena'}: {saint.startDate} a {saint.endDate}
                  </span>
                  {alertInfo && (
                    <button
                      onClick={() => {
                        setIsAlertExpanded(!isAlertExpanded);
                        setIsAutoDisplay(false);
                        if (alertTimerRef.current) clearTimeout(alertTimerRef.current);
                      }}
                      className="w-7 h-7 rounded-full border-[#D4AF37] border-[1.5px] bg-black/20 backdrop-blur-sm text-[#D4AF37] hover:bg-[#D4AF37]/20 flex items-center justify-center flex-shrink-0 transition-all duration-200 ml-1"
                    >
                      <div className="hidden sm:block">
                        {isAlertExpanded ? <ChevronLeft className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
                      </div>
                      <div className="sm:hidden">
                        <ChevronDown className={cn(
                          "w-4 h-4 transition-transform duration-300",
                          isAlertExpanded ? "rotate-180" : "rotate-0"
                        )} />
                      </div>
                    </button>
                  )}
                </div>

                {/* Bloco de aviso — Agora como um Pop-up flutuante */}
                {alertInfo && (
                  <div
                    className={cn(
                      "absolute z-[150] transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]",
                      // Mobile: below the date capsule
                      "top-full left-1/2 -translate-x-1/2 w-[88vw] max-w-[260px] mt-2 origin-top",
                      // Desktop: exactly to the side of the button
                      "sm:top-1/2 sm:left-full sm:-translate-y-1/2 sm:translate-x-4 sm:w-[320px] sm:origin-left",
                      isAlertExpanded 
                        ? "opacity-100 translate-y-0 sm:translate-x-4 scale-100" 
                        : "opacity-0 -translate-y-4 sm:translate-y-0 sm:translate-x-0 scale-95 pointer-events-none"
                    )}
                  >
                    <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl border flex flex-col items-center justify-center text-center gap-1.5 sm:gap-2 bg-black/85 border-white/20 text-white backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] ring-1 ring-white/10">
                      <div className="w-8 h-1 rounded-full bg-white/20 mb-1 sm:hidden" />
                      <h4 className="font-bold font-brand text-sm sm:text-base mb-0.5 text-[#D4AF37]">
                        {alertInfo.title}
                      </h4>
                      <p className="text-[12px] sm:text-sm text-center opacity-95 leading-relaxed">
                        {alertInfo.description}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            )}

          </div>
        </div>
      </div>
    </header>

      <div className="relative w-full">
        {isChanging && (
          <div className="absolute inset-0 z-[50] flex items-center justify-center bg-black/5 backdrop-blur-[2px] rounded-2xl min-h-[400px]">
            <div className="w-12 h-12 border-4 border-white/20 border-t-white rounded-full animate-spin" />
          </div>
        )}

        <div className="flex flex-col items-center justify-center gap-2 mb-6">
          <a
            href="https://chat.whatsapp.com/D08lyjhVqL8KyZfIovKYk5?mode=ems_copy_t"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              'inline-flex items-center gap-2 rounded-lg px-4 py-2 transition-all duration-200',
              theme === 'theme-light-gray' ? 'bg-black/10 hover:bg-black/20 text-stone-800' : 'bg-white/10 hover:bg-white/20 text-white'
            )}
          >
            <Image src="https://i.postimg.cc/g24cJdKG/whatsapp-icone-5.png" alt="WhatsApp" width={20} height={20} className="w-5 h-5" />
            <span className="text-sm font-semibold">{novena?.novenaTitle?.toLowerCase().includes('trezena') ? 'Trezena' : 'Novena'} também disponível no nosso grupo do WhatsApp. (clique aqui)</span>
          </a>
          <a
            href="https://www.instagram.com/coracoessagradosbsb"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              'inline-flex items-center gap-2 rounded-lg px-4 py-2 transition-all duration-200',
              theme === 'theme-light-gray' ? 'bg-black/10 hover:bg-black/20 text-stone-800' : 'bg-white/10 hover:bg-white/20 text-white'
            )}
          >
            <Image src="https://iili.io/Kpy9S3P.png" alt="Instagram" width={20} height={20} className="w-5 h-5" />
            <span className="text-sm font-semibold">Segue a gente no Insta</span>
          </a>
        </div>

        <Carousel setApi={setApi} className={cn("w-full transition-opacity duration-500", isChanging ? "opacity-0" : "opacity-100")} opts={{ watchDrag: false }}>

        {isAllCompleted && (
          <div className="mb-8 animate-in fade-in zoom-in duration-500">
            <div className={cn(
              "p-6 rounded-2xl text-center border-2 border-primary/50 flex flex-col items-center gap-4",
              isLightTheme ? "bg-red-50 text-red-900" : "bg-red-900/30 text-white backdrop-blur-sm"
            )}>
              <div className="text-4xl">🙏</div>
              <h3 className="text-xl font-bold font-brand">Parabéns! Você concluiu esta novena.</h3>
              <p className="text-sm opacity-90">Deseja reiniciar sua jornada de oração para esta novena?</p>
              <Button 
                onClick={handleResetNovena}
                className={cn(
                  "rounded-full px-6 py-2 text-xs font-bold uppercase tracking-widest transition-all hover:scale-105 shadow-md",
                  "bg-primary text-white border border-white/20 hover:bg-red-800"
                )}
              >
                Sim, começar de novo
              </Button>
            </div>
          </div>
        )}

        {days.length > 1 && (
          <div ref={novenaContentRef} className="flex flex-col gap-3 mb-4">
            <div className="flex flex-col items-center gap-2 w-full">
              {/* Primeira Linha: Dias 1 a 5 */}
              <div className="flex flex-wrap gap-2 justify-center">
                {days.slice(0, 5).map((day, index) => {
                  const isToday = currentOfficialDayIndex === index;
                  const isCurrent = current === index;
                  return (
                    <button
                      key={index}
                      onClick={() => scrollTo(index)}
                      className={cn(
                        'px-3 py-1 flex items-center gap-1.5 text-sm font-semibold rounded-full transition-all duration-200 border border-transparent',
                        isCurrent
                          ? (theme === 'theme-light-gray' ? 'bg-primary text-white' : 'bg-white text-primary')
                          : (theme === 'theme-light-gray' ? 'bg-black/10 text-stone-600 hover:bg-black/20' : 'bg-white/10 text-white hover:bg-white/20'),
                        isToday && !isCurrent ? (theme === 'theme-light-gray' ? 'border-primary/50 bg-primary/10' : 'border-white/50 bg-white/20') : ''
                      )}
                    >
                      {isSpecialNovena ? (index === 0 ? 'Oração' : 'História') : `Dia ${index + 1}`}
                      {completedDays[index] && <Check className="w-3.5 h-3.5" />}
                    </button>
                  );
                })}
              </div>
              {/* Segunda Linha: Dias 6+ */}
              {days.length > 5 && (
                <div className="flex flex-wrap gap-2 justify-center">
                  {days.slice(5).map((day, idx) => {
                    const index = idx + 5;
                    const isToday = currentOfficialDayIndex === index;
                    const isCurrent = current === index;
                    return (
                      <button
                        key={index}
                        onClick={() => scrollTo(index)}
                        className={cn(
                          'px-3 py-1 flex items-center gap-1.5 text-sm font-semibold rounded-full transition-all duration-200 border border-transparent',
                          isCurrent
                            ? (theme === 'theme-light-gray' ? 'bg-primary text-white' : 'bg-white text-primary')
                            : (theme === 'theme-light-gray' ? 'bg-black/10 text-stone-600 hover:bg-black/20' : 'bg-white/10 text-white hover:bg-white/20'),
                          isToday && !isCurrent ? (theme === 'theme-light-gray' ? 'border-primary/50 bg-primary/10' : 'border-white/50 bg-white/20') : ''
                        )}
                      >
                        {isSpecialNovena ? (index === 0 ? 'Oração' : 'História') : `Dia ${index + 1}`}
                        {completedDays[index] && <Check className="w-3.5 h-3.5" />}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            <div className="flex flex-col gap-3">
              {/* BARRA DE PROGRESSO SEGMENTADA */}
              <div className="flex gap-1.5 w-full h-2.5 mb-2">
                {Array.from({ length: days.length || 9 }).map((_, i) => (
                  <div 
                    key={i}
                    className={cn(
                      "h-full flex-1 rounded-full transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] border border-white/10",
                      i < completedCount 
                        ? "bg-primary shadow-[0_0_15px_rgba(var(--primary-rgb),0.6)] scale-y-125 translate-y-[-1px]" 
                        : "bg-black/30 backdrop-blur-sm"
                    )}
                  />
                ))}
              </div>
            </div>
          </div>
        )}



        <CarouselContent>
          {days.map((day, index) => (
            <CarouselItem key={`content-${index}`}>
              <div className="animate-fade-in">
                {initialPrayer && (
                  <div className={proseClasses}>
                    <div className={cn('initial-prayer-text', !isLightTheme ? '[&_strong]:text-white' : '')}>
                      <NovenaContent htmlContent={initialPrayer} />
                    </div>
                  </div>
                )}

                {initialPrayer && <div className="w-16 h-px bg-white/20 my-8 mx-auto"></div>}

                {days.length > 1 && (
                  <div className="flex items-center justify-center gap-4 mb-4">
                    <CarouselPrevious className={cn("relative -left-0 top-0 translate-y-0", arrowClasses)} />
                    <p className="text-sm font-bold">
                      {isSpecialNovena ? (current === 0 ? 'Oração' : 'História') : `Dia ${current + 1}`}
                    </p>
                    <CarouselNext className={cn("relative -right-0 top-0 translate-y-0", arrowClasses)} />
                  </div>
                )}

                <div className={proseClasses}>
                  {day.day && !isSpecialNovena && <h3 className={cn("section-title text-2xl font-bold font-brand mb-2")}>{day.day}</h3>}
                  {day.title && <h4 className={cn("text-xl italic mb-4", isLightTheme ? 'text-stone-500' : 'text-stone-300')}>{day.title}</h4>}

                  <div className="day-specific-content">
                    <NovenaContent htmlContent={day.content} />
                  </div>
                </div>

                {finalPrayer && (
                  <div className={proseClasses}>
                    <div className='final-prayer-text'>
                      <NovenaContent htmlContent={finalPrayer} />
                    </div>
                  </div>
                )}

                <div className="mt-4 flex flex-col items-center gap-3">
                  <Button 
                    onClick={() => toggleCompleted(index)}
                    className={cn(
                      'inline-flex items-center gap-2 rounded-xl px-8 py-3.5 transition-all duration-300 shadow-lg font-bold text-sm uppercase tracking-wider',
                      completedDays[index] 
                        ? 'bg-green-600 hover:bg-green-700 text-white border-transparent scale-105 shadow-green-500/20' 
                        : (isLightTheme 
                            ? 'bg-white hover:bg-stone-50 text-stone-800 border-2 border-stone-200 hover:shadow-md' 
                            : 'bg-white/10 hover:bg-white/20 text-white border-2 border-white/20 hover:shadow-white/5')
                    )}
                  >
                    {completedDays[index] ? <><Check className="w-5 h-5 animate-in zoom-in duration-300" /> Concluído</> : "Marcar como concluído"}
                  </Button>

                  {/* BARRA MENOR DE FEEDBACK SEGMENTADA */}
                  <div className="flex gap-1 w-56 h-2 mt-2">
                    {Array.from({ length: days.length || 9 }).map((_, i) => (
                      <div 
                        key={i}
                        className={cn(
                          "h-full flex-1 rounded-full transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] border border-white/5",
                          i < completedCount 
                            ? "bg-green-500 shadow-[0_0_12px_rgba(34,197,94,0.5)] scale-y-125" 
                            : "bg-black/25 backdrop-blur-sm"
                        )}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        {days.length > 1 && (
          <div className="flex items-center justify-center gap-4 mt-8">
            <CarouselPrevious 
              onClick={() => { api?.scrollPrev(); scrollToNovenaStart(); }}
              className={cn("relative -left-0 top-0 translate-y-0", arrowClasses)} 
            />
            <p className="text-sm font-bold">
              {isSpecialNovena ? (current === 0 ? 'Oração' : 'História') : `Dia ${current + 1}`}
            </p>
            <CarouselNext 
              onClick={() => { api?.scrollNext(); scrollToNovenaStart(); }}
              className={cn("relative -right-0 top-0 translate-y-0", arrowClasses)} 
            />
          </div>
        )}
      </Carousel>

      </div>
    </main>
  );
}
