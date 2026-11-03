
import Image from 'next/image';
import { getProxiedImageUrl } from '@/lib/utils';

export default function Header() {
  return (
    <header className="text-center mb-6">
      <Image 
        src={getProxiedImageUrl("https://i.postimg.cc/ZRrzGs1g/Capa-para-facebook-arquitetura-moderno-vermelho-1.png")} 
        alt="Logo Corações Sagrados" 
        width={448} 
        height={166}
        className="mx-auto mb-4 w-full max-w-md rounded-md"
        priority
      />
    </header>
  );
}
