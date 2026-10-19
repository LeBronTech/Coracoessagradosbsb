
import Image from 'next/image';
import Link from 'next/link';
import { getProxiedImageUrl, cn } from '@/lib/utils';

export default function Footer({ className }: { className?: string } = {}) {
  return (
    <footer className={cn("text-center mt-12 pb-10 text-stone-600 dark:text-stone-400", className)}>
      {/* Removido círculos com imagens conforme solicitado */}


      <div className="flex justify-center items-center gap-6 my-6">
        <a href="https://www.instagram.com/coracoessagradosbsb?igsh=MXFvaWJtcW1kZHFtNg==" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity duration-300" title="Siga-nos no Instagram">
          <Image src={getProxiedImageUrl("https://i.postimg.cc/4xX2zVKw/image.png")} alt="Instagram" width={32} height={32} className="w-8 h-8" />
          <span className="sr-only">Instagram</span>
        </a>
        <a href="https://chat.whatsapp.com/La88Os582PHKICHfuxFE09" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity duration-300" title="Entre no nosso grupo do WhatsApp">
          <Image src={getProxiedImageUrl("https://i.postimg.cc/QdgSCt01/image.png")} alt="WhatsApp" width={48} height={48} className="w-12 h-12" />
          <span className="sr-only">WhatsApp</span>
        </a>
        <a href="https://lebrontech.github.io/Portfolio/" target="_blank" rel="noopener noreferrer" className="text-[#333] dark:text-stone-200 hover:opacity-80 transition-opacity duration-300" title="Veja nosso trabalho no GitHub">
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.165 6.839 9.49.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.03-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.82c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.378.203 2.398.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.848-2.338 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.578.688.48A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" /></svg>
          <span className="sr-only">GitHub</span>
        </a>
      </div>

      <p className="inline-flex items-center justify-center flex-wrap gap-1.5 text-xs sm:text-sm text-stone-700 dark:text-stone-300 font-medium px-4 leading-relaxed">
        <span>&copy; {new Date().getFullYear()} Corações Sagrados BSB, a serviço da Santa Igreja Católica Apostólica Romana</span>
        <VaticanFlag className="w-4 h-4 sm:w-5 sm:h-5 inline-block shadow-xs rounded-[2px] border border-stone-300/80 shrink-0" />
      </p>
      <p className="mt-2 text-sm">
        <a href="https://lebrontech.github.io/Portfolio/" target="_blank" rel="noopener noreferrer" className="hover:text-sky-700 dark:hover:text-sky-400 transition-colors">
          Desenvolvido por: LeBronDev-Designer™
        </a>
      </p>
    </footer>
  );
}

function VaticanFlag({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Bandeira do Vaticano"
    >
      <title>Bandeira do Vaticano</title>
      <clipPath id="vatican-clip">
        <rect width="100" height="100" rx="2" />
      </clipPath>
      <g clipPath="url(#vatican-clip)">
        {/* Metade Esquerda: Amarelo Ouro Papal */}
        <rect x="0" y="0" width="50" height="100" fill="#FFE000" />
        {/* Metade Direita: Branco */}
        <rect x="50" y="0" width="50" height="100" fill="#FFFFFF" />

        {/* Tiara Papal */}
        <path d="M75 14 L75 18 M73 16 L77 16" stroke="#D4AF37" strokeWidth="1.5" strokeLinecap="round" />
        <ellipse cx="75" cy="22" rx="4" ry="2.5" fill="#FFE000" stroke="#C59B27" strokeWidth="0.8" />
        <path d="M68 28 C68 24 82 24 82 28 Z" fill="#FFE000" stroke="#C59B27" strokeWidth="0.8" />
        <path d="M66 35 C66 30 84 30 84 35 Z" fill="#FFE000" stroke="#C59B27" strokeWidth="0.8" />
        <path d="M64 42 C64 36 86 36 86 42 Z" fill="#FFE000" stroke="#C59B27" strokeWidth="0.8" />

        {/* Ínfulas (fitas vermelhas da tiara) */}
        <path d="M72 42 C70 48 68 55 65 60" stroke="#C8102E" strokeWidth="1.2" fill="none" strokeLinecap="round" />
        <path d="M78 42 C80 48 82 55 85 60" stroke="#C8102E" strokeWidth="1.2" fill="none" strokeLinecap="round" />

        {/* Chave de Ouro */}
        <g stroke="#D4AF37" strokeWidth="2.5" strokeLinecap="round">
          <line x1="60" y1="72" x2="88" y2="44" />
          <path d="M88 44 L92 48 L90 50 L87 47 L85 49 L83 47" fill="none" stroke="#D4AF37" strokeWidth="1.5" strokeLinejoin="round" />
        </g>
        <circle cx="60" cy="72" r="4.5" fill="none" stroke="#D4AF37" strokeWidth="2" />
        <circle cx="60" cy="72" r="1.5" fill="#D4AF37" />

        {/* Chave de Prata */}
        <g stroke="#9E9E9E" strokeWidth="2.5" strokeLinecap="round">
          <line x1="90" y1="72" x2="62" y2="44" />
          <path d="M62 44 L58 48 L60 50 L63 47 L65 49 L67 47" fill="none" stroke="#9E9E9E" strokeWidth="1.5" strokeLinejoin="round" />
        </g>
        <circle cx="90" cy="72" r="4.5" fill="none" stroke="#9E9E9E" strokeWidth="2" />
        <circle cx="90" cy="72" r="1.5" fill="#9E9E9E" />

        {/* Cordão Vermelho com Nó */}
        <path d="M68 64 C75 58 75 58 82 64" stroke="#C8102E" strokeWidth="1.5" fill="none" />
        <circle cx="75" cy="58" r="2.5" fill="#C8102E" />
        <path d="M75 60 L73 70 M75 60 L77 70" stroke="#C8102E" strokeWidth="1" strokeLinecap="round" />
      </g>
      <rect width="100" height="100" rx="2" fill="none" stroke="rgba(0,0,0,0.12)" strokeWidth="1" />
    </svg>
  );
}
