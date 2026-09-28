import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const imageUrl = searchParams.get('url');

  if (!imageUrl) {
    return new NextResponse('URL de imagem não informada', { status: 400 });
  }

  try {
    let targetUrl = imageUrl;
    if (targetUrl.includes('%25')) {
      try {
        targetUrl = decodeURIComponent(targetUrl);
      } catch (e) {
        // ignora
      }
    }

    // Redireciona diretamente para o CDN de forma imediata sem bloquear o servidor local
    return NextResponse.redirect(targetUrl, 302);
  } catch (error: any) {
    return NextResponse.redirect(imageUrl, 302);
  }
}
