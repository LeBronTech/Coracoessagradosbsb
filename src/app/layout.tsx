import type { Metadata } from 'next';
import { Toaster } from '@/components/ui/toaster';
import './globals.css';

export const metadata: Metadata = {
  title: 'Corações Sagrados - Novenas',
  description: 'Um local centralizado e elegante para os fiéis rezarem diversas novenas católicas.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning className="bg-[#ede4d8]">
      <head>
        <link rel="icon" href="/favicon.ico?v=2" sizes="any" />
        <link rel="icon" href="/icon.svg?v=2" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png?v=2" />
        <link rel="manifest" href="/manifest.webmanifest" />
        <link rel="preload" href="/images/bg-main.jpg" as="image" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=UnifrakturMaguntia&family=Cinzel+Decorative:wght@400;700;900&family=EB+Garamond:ital,wght@0,400..800;1,400..800&family=Great+Vibes&family=Dancing+Script:wght@600;700&display=swap" rel="stylesheet" />
        <meta name="msapplication-TileColor" content="#ede4d8"/>
        <meta name="theme-color" content="#ede4d8"/>
      </head>
      <body className="font-body antialiased bg-[#ede4d8] text-foreground min-h-screen relative" suppressHydrationWarning>
        {/* Fundo de pergaminho fixo com aceleração por hardware (nítido no iPhone e sem renderização de fundo azul) */}
        <div
          id="site-background-fixed"
          className="fixed inset-0 w-full h-full pointer-events-none -z-50 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/bg-main.jpg')",
            transform: 'translateZ(0)',
            WebkitTransform: 'translateZ(0)',
          }}
          aria-hidden="true"
        />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
