<div align="center">

# ✝️ Corações Sagrados BSB
### Portal Católico de Devoção, Novenas, Liturgia e Espiritualidade

<p align="center">
  <img width="1359" height="900" alt="Corações Sagrados BSB" src="https://github.com/user-attachments/assets/dbba8dee-2b71-48e5-b3e8-7fd09c1b0ed7" />
</p>

[![Next.js](https://img.shields.io/badge/Next.js-16.0-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Google Gemini](https://img.shields.io/badge/Genkit-Google_Gemini-4285F4?style=for-the-badge&logo=google)](https://firebase.google.com/docs/genkit)

<p align="center">
  <strong>Um santuário digital católico: novenas completas, santo do dia, liturgia diária, espaço mariano, consagração a São José, mapa de comunidades do Distrito Federal e inteligência teológica assistida por IA.</strong>
</p>

[Visão Geral](#-sobre-o-projeto) •
[Funcionalidades](#-funcionalidades-principais) •
[Tecnologias](#-tecnologias-utilizadas) •
[Estrutura](#-estrutura-do-projeto) •
[Como Executar](#-como-executar-o-projeto) •
[Variáveis de Ambiente](#-variáveis-de-ambiente)

---

</div>

## 📖 Sobre o Projeto

O **Corações Sagrados BSB** é uma plataforma web católica concebida para oferecer aos fiéis um espaço digital centralizado, esteticamente solene e espiritualmente enriquecedor. Desenvolvido com foco na tradição católica, respeito litúrgico e modernidade tecnológica, o projeto reúne hagiografias, orações diárias, novenas completas organizadas por meses, diretório de confissões e paróquias do Distrito Federal, além de recursos gerados com Inteligência Artificial para meditações teológicas e áudios de oração.

---

## ✨ Funcionalidades Principais

### 📿 1. Portal de Novenas Católicas
- **Mais de uma centena de novenas completas** catalogadas e organizadas mês a mês.
- Acompanhamento dinâmico dia a dia, com orações preparatórias, orações diárias, jaculatórias e bênção final.
- Seletor estilo *stories* e filtros temporais rápidos.
- Personalização de temas visuais (Litúrgico Padrão, Escuro, Cinza Suave, Vermelho Sacro e Verde).

### ☀️ 2. Santo do Dia & Liturgia Diária
- Apresentação do Santo do Dia com imagem sacra, data litúrgica, história/hagiografia e orações próprias.
- Calendário litúrgico sincronizado com as memórias, festas e solenidades da Igreja Católica.

### 🌹 3. Espaço Mariano
- **Galeria Mariana**: Acervo visual e histórico de aparições e títulos de Nossa Senhora no Brasil e no mundo.
- **Santo Rosário Interativo**: Guia meditativo dos mistérios (Gozosos, Luminosos, Dolorosos e Gloriosos) correspondentes a cada dia da semana.
- **Consagração a Nossa Senhora**: Itinerário espiritual com textos formativos e fórmulas de consagração.
- Efeito contemplativo de pétalas de rosas caindo suavemente pela tela.

### ⚒️ 4. Espaço São José & Consagração dos 33 Dias
- Dedicado ao Patrono da Igreja Universal e Terror dos Demônios.
- Roteiro completo para a **Consagração a São José** (método dos 33 dias), com cálculo automático da data de início para as principais festas josefinas (19 de Março, 1º de Maio, etc.).
- Linha do tempo interativa e histórica da devoção e magistério sobre São José.

### ⛪ 5. Encontre Seu Lugar (Paróquias e Comunidades - BSB)
- Diretório completo de paróquias, capelas e comunidades católicas organizadas pelas Regiões Administrativas do Distrito Federal.
- Consulta simplificada de **horários de Confissões** e Santas Missas.

### 🤖 6. Assistente & Recursos com IA (Genkit & Gemini)
- **Reflexões Teológicas**: Insights e aprofundamento das leituras e orações utilizando modelos Google Gemini (`gemini-2.5-flash`).
- **Geração de Áudio (TTS)**: Síntese de voz sacra para orações e novenas em formato de áudio.

---

## 🛠️ Tecnologias Utilizadas

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router, Turbopack)
- **Linguagem**: [TypeScript](https://www.typescriptlang.org/)
- **Biblioteca de Interface**: [React 19](https://react.dev/)
- **Estilização & Componentes**:
  - [Tailwind CSS](https://tailwindcss.com/)
  - [Radix UI](https://www.radix-ui.com/) (primitivos acessíveis via shadcn/ui)
  - [Lucide Icons](https://lucide.dev/)
  - [Embla Carousel](https://www.embla-carousel.com/)
- **Tipografia Sacra**: Google Fonts (*Cinzel Decorative* & *EB Garamond*)
- **Inteligência Artificial**: [Firebase Genkit](https://firebase.google.com/docs/genkit) integrado ao Google Gemini API (`@genkit-ai/googleai`)
- **Manipulação de Datas**: [date-fns](https://date-fns.org/) com localização em Português (`pt-BR`)
- **Deploy**: Firebase App Hosting / Vercel

---

## 📂 Estrutura do Projeto

```text
Coracoessagradosbsb/
├── public/                 # Favicons, ícones e assets estáticos
├── src/
│   ├── ai/                 # Configuração do Genkit e fluxos de IA (reflexões e TTS)
│   │   ├── flows/          # generate-theological-reflection.ts, generate-prayer-audio.ts
│   │   └── genkit.ts       # Inicialização do Google AI
│   ├── app/                # Rotas da aplicação (Next.js App Router)
│   │   ├── api/            # Endpoints de API (ex: proxy-image)
│   │   ├── assistente/     # Painel de gestão e assistente
│   │   ├── encontre-seu-lugar/  # Guia de comunidades e paróquias do DF
│   │   ├── espaco-mariano/      # Galeria, Rosário e Devoções Marianas
│   │   ├── sao-jose/            # Novenas, Timeline e Consagração a São José
│   │   ├── layout.tsx      # Layout raiz com fontes e metadados
│   │   └── page.tsx        # Página principal (Portal de Novenas e Santo do Dia)
│   ├── components/         # Componentes reutilizáveis
│   │   ├── ui/             # Componentes de base (botões, modais, cards, tabs)
│   │   ├── novena-display.tsx       # Exibição interativa da novena ativa
│   │   ├── saint-of-the-day.tsx     # Componente do Santo do Dia
│   │   ├── saint-selector.tsx       # Carrossel e seletor de santos/novenas
│   │   ├── confession-times-modal.tsx # Modal de horários de confissões
│   │   └── falling-rose-petals.tsx  # Animação de pétalas de rosa
│   ├── hooks/              # Hooks customizados do React (use-toast, etc.)
│   └── lib/                # Dados estáticos, tipos litúrgicos e utilitários
│       ├── data.ts                  # Base central de santos e orações
│       ├── comunidades-data.ts      # Dados das paróquias e comunidades do DF
│       ├── confession-data.ts       # Grade de horários de confissões
│       └── liturgical-calendar.ts   # Calendário e memórias litúrgicas
├── apphosting.yaml         # Configuração de deploy no Firebase App Hosting
├── package.json            # Dependências e scripts npm
├── tailwind.config.ts      # Configurações de design tokens e cores sacras
└── tsconfig.json           # Configuração do compilador TypeScript
```

---

## 🚀 Como Executar o Projeto

### Pré-requisitos
- **Node.js**: versão 18.x ou superior instalada (recomendado Node 20+)
- Gerenciador de pacotes: **npm**, **yarn** ou **pnpm**

### Passo a Passo

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/seu-usuario/Coracoessagradosbsb.git
   cd Coracoessagradosbsb
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Configure as variáveis de ambiente:**
   Crie um arquivo `.env.local` na raiz do projeto conforme indicado na seção abaixo.

4. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```
   Abra no seu navegador: [http://localhost:9005](http://localhost:9005)

5. **Para construir para produção:**
   ```bash
   npm run build
   npm run start
   ```

---

## 🔐 Variáveis de Ambiente

Crie um arquivo `.env.local` na raiz do projeto com as seguintes chaves caso utilize os recursos de IA:

```env
# Chave da API do Google AI Studio para Genkit / Gemini
GEMINI_API_KEY=sua_chave_aqui
```

---

## 🤝 Contribuição

Contribuições para enriquecer as orações, corrigir dados hagiográficos ou adicionar novas paróquias são muito bem-vindas!

1. Faça um **Fork** do projeto
2. Crie uma branch para a sua modificação (`git checkout -b feature/nova-novena`)
3. Faça o commit das alterações (`git commit -m 'Adiciona Novena a Santa Teresinha'`)
4. Envie para o branch (`git push origin feature/nova-novena`)
5. Abra um **Pull Request**

---

## 📜 Licença e Propósito

Este projeto foi desenvolvido com a finalidade de evangelização e promoção da oração e devoção católica.

> *"Tudo por Jesus, nada sem Maria!"*  
> *"São José, rogai por nós!"*
