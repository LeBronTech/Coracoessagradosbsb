import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const imageUrl = searchParams.get('url');

  if (!imageUrl) {
    return new NextResponse('URL de imagem não informada', { status: 400 });
  }

  try {
    let targetUrl = imageUrl;
    // Se a URL estiver duplamente encodada (ex: %25C3), decodifica mais uma vez
    if (targetUrl.includes('%25')) {
      try {
        targetUrl = decodeURIComponent(targetUrl);
      } catch (e) {
        // ignora
      }
    }

    const parsedUrl = new URL(targetUrl);
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 8000);

    const response = await fetch(targetUrl, {
      signal: controller.signal,
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
        'Accept': 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
        'Accept-Language': 'pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7',
        'Referer': `${parsedUrl.protocol}//${parsedUrl.host}/`,
      },
    }).finally(() => clearTimeout(timeoutId));

    if (!response.ok) {
      console.warn(`[Proxy Image] Erro ${response.status} ao buscar ${targetUrl}. Redirecionando diretamente...`);
      return NextResponse.redirect(targetUrl, 302);
    }

    const contentType = response.headers.get('content-type') || 'image/jpeg';
    const imageBuffer = await response.arrayBuffer();

    return new NextResponse(imageBuffer, {
      status: 200,
      headers: {
        'Content-Type': contentType,
        'Cache-Control': 'public, max-age=86400, stale-while-revalidate=604800',
      },
    });
  } catch (error: any) {
    console.error('Erro no proxy de imagem:', error);
    // Redireciona diretamente para a imagem original como fallback se o proxy do servidor falhar
    try {
      return NextResponse.redirect(imageUrl, 302);
    } catch {
      return new NextResponse(`Falha ao carregar imagem: ${error.message}`, { status: 500 });
    }
  }
}
