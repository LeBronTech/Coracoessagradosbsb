import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

export default function NovenaImaculadaConceicao() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
      {/* Header / Hero Section */}
      <header className="bg-blue-600 text-white py-12 px-4 shadow-lg relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1544178378-438f196325ea?q=80&w=2574&auto=format&fit=crop')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
        <div className="container mx-auto max-w-4xl relative z-10">
          <Link href="/" className="inline-flex items-center text-blue-100 hover:text-white mb-6 transition-colors">
            <ChevronLeft className="mr-2 h-4 w-4" />
            Voltar ao Início
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Novena à Imaculada Conceição</h1>
          <p className="text-xl text-blue-100 max-w-2xl">
            "Bendita seja tua pureza e eternamente o seja, pois todo um Deus se recreia em tão graciosa beleza."
          </p>
        </div>
      </header>

      <main className="container mx-auto max-w-4xl py-8 px-4 space-y-8">
        
        {/* Oração Inicial */}
        <section>
          <Card className="border-blue-100 shadow-sm">
            <CardHeader className="bg-blue-50/50 dark:bg-blue-950/20">
              <CardTitle className="text-2xl text-blue-800 dark:text-blue-300">Oração para todos os dias</CardTitle>
            </CardHeader>
            <CardContent className="pt-6 prose dark:prose-invert max-w-none text-slate-700 dark:text-slate-300 leading-relaxed">
              <p>
                Deus vos salve, Maria, cheia de graça e bendita mais que todas as mulheres, Virgem singular, Virgem soberana e perfeita, eleita por Mãe de Deus e preservada por Ele de toda culpa desde o primeiro instante de sua Concepção: Assim como por Eva nos veio a morte, assim nos vem a vida por ti, que pela graça de Deus tens sido eleita para ser Mãe do novo povo que Jesus Cristo tem formado com seu Sangue.
              </p>
              <p>
                A ti, puríssima Mãe, restauradora da caída linhagem de Adão e Eva, viemos confiantes e suplicantes nesta novena, para rogar que nos concedas a graça de sermos verdadeiros filhos teus e de teu Filho Jesus Cristo, livres de toda mancha de pecado. Confiantes, Virgem Santíssima, que haveis sido feita Mãe de Deus, não somente para vossa dignidade e glória, senão também para salvação nossa e proveito de todo o gênero humano.
              </p>
              <p>
                Confiantes que jamais se tem ouvido dizer que um somente de quantos tem acudido a vossa proteção e implorado vosso socorro, tem já sido desamparado. Não me deixeis, pois, a mim tampouco, porque se me deixais me perderei; Que eu tampouco quero deixar a vos, antes bem, cada dia quero crescer mais em vossa verdadeira devoção.
              </p>
              <p className="font-medium text-blue-900 dark:text-blue-200 mt-4">
                Alcançai-me principalmente estas três graças: A primeira, não cometer jamais pecado mortal; a segunda, um grande apreço da virtude cristã, a terceira, uma boa morte. Além disso, dai-me a graça particular que vos peço nesta novena.
              </p>
              <div className="my-6 p-4 bg-yellow-50 dark:bg-yellow-950/30 border border-yellow-100 dark:border-yellow-900/50 rounded-lg text-center italic text-yellow-800 dark:text-yellow-200">
                (Fazer aqui o pedido que se deseja obter)
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Dias da Novena */}
        <section id="dias-novena">
          <h2 className="text-2xl font-semibold mb-6 text-slate-800 dark:text-slate-100 flex items-center">
            <span className="bg-blue-600 w-1 h-8 mr-3 rounded-full"></span>
            Orações Diárias
          </h2>
          
          <Tabs defaultValue="day-1" className="w-full">
            <ScrollArea className="w-full whitespace-nowrap rounded-md border bg-white dark:bg-slate-900 p-1 mb-6">
              <TabsList className="flex w-full h-auto p-0 bg-transparent">
                {Array.from({ length: 9 }).map((_, i) => (
                  <TabsTrigger 
                    key={i} 
                    value={`day-${i + 1}`}
                    className="flex-1 min-w-[100px] py-3 data-[state=active]:bg-blue-100 data-[state=active]:text-blue-900 dark:data-[state=active]:bg-blue-900/40 dark:data-[state=active]:text-blue-100 rounded-md transition-all"
                  >
                    {i + 1}º Dia
                  </TabsTrigger>
                ))}
              </TabsList>
            </ScrollArea>

            {/* Conteúdo dos Dias */}
            <div className="mt-2">
              <TabsContent value="day-1">
                <DayCard day="1º Dia" content={
                  <>
                    <p className="mb-4">Oh! Santíssimo Filho de Maria Imaculada e benigníssimo Redentor nosso:</p>
                    <p>Assim como preservaste a Maria do pecado original em sua Imaculada Concepção, e a nós nos fizeste o grande beneficio de livramos dele por meio de teu Santo batismo, assim vos rogamos humildemente nos concedas a graça de nos portarmos sempre como bons cristãos, regenerados em ti, Nosso Pai Altíssimo.</p>
                  </>
                } />
              </TabsContent>

              <TabsContent value="day-2">
                <DayCard day="2º Dia" content={
                  <>
                    <p className="mb-4">Oh! Santíssimo Filho de Maria Imaculada e benigníssimo Redentor nosso:</p>
                    <p>Assim como preservaste a Maria de todo pecado mortal em toda sua vida e a nós nos dais graça para evita-lo e o Sacramento da confissão para remedia-lo, assim vos rogamos humildemente, por intercessão de tua Mãe Imaculada, nos concedas a graça de não cometer nunca pecado mortal, e se acontecer tão terrível desgraça, a de sair dele quanto antes por meio de uma boa confissão.</p>
                  </>
                } />
              </TabsContent>

              <TabsContent value="day-3">
                <DayCard day="3º Dia" content={
                  <>
                    <p className="mb-4">Oh! Santíssimo Filho de Maria Imaculada e benigníssimo Redentor nosso:</p>
                    <p>Assim como preservaste a Maria de todo pecado venial em toda sua vida, e a nós nos pedes que purifiquemos mais e mais nossas almas para sermos dignos de ti, assim vos rogamos humildemente, por intercessão de tua Mãe Imaculada, nos concedas a graça de evitar os pecados veniais e a de procurar e obter cada dia mais pureza e delicadeza de consciência.</p>
                  </>
                } />
              </TabsContent>

              <TabsContent value="day-4">
                <DayCard day="4º Dia" content={
                  <>
                    <p className="mb-4">Oh! Santíssimo Filho de Maria Imaculada e benigníssimo Redentor nosso:</p>
                    <p>Assim como livrais a Maria da inclinação ao pecado e lhe destes domínio perfeito sobre todas suas paixões, assim vos rogamos humildemente, por intercessão de Maria Imaculada, nos concedas a graça de ir domando nossas paixões e destruindo nossas más inclinações, para que vos possamos servir, com verdadeira liberdade de espírito, sem imperfeição nenhuma.</p>
                  </>
                } />
              </TabsContent>

              <TabsContent value="day-5">
                <DayCard day="5º Dia" content={
                  <>
                    <p className="mb-4">Oh! Santíssimo Filho de Maria Imaculada e benigníssimo Redentor nosso:</p>
                    <p>Assim como, desde o primeiro instante de sua Concepção, destes a Maria mais graça que a todos os Santos e anjos do céu, assim vos rogamos humildemente, por intercessão de tua Mãe Imaculada, nos inspires um apreço singular da divina graça que Vós nos adquiriste com teu sangue, e nos concedas o aumentar mais e mais com nossas boas obras e com a recepção de teus Santos Sacramentos, especialmente o da Comunhão.</p>
                  </>
                } />
              </TabsContent>

              <TabsContent value="day-6">
                <DayCard day="6º Dia" content={
                  <>
                    <p className="mb-4">Oh! Santíssimo Filho de Maria Imaculada e benigníssimo Redentor nosso:</p>
                    <p>Assim como, desde o primeiro momento, destes a Maria, com toda plenitude, as virtudes sobrenaturais e os dons do Espírito Santo, assim vos suplicamos humildemente, por intercessão de tua Mãe Imaculada, nos concedas a nós a abundancia destes mesmos dons e virtudes, para que possamos vencer todas as tentações e tenhamos muitos atos de virtude dignos de nossa profissão de cristãos.</p>
                  </>
                } />
              </TabsContent>

              <TabsContent value="day-7">
                <DayCard day="7º Dia" content={
                  <>
                    <p className="mb-4">Oh! Santíssimo Filho de Maria Imaculada e benigníssimo Redentor nosso:</p>
                    <p>Assim como destes a Maria, entre as demais virtudes, uma pureza e castidade eximia, pela qual é chamada Virgem das virgens, assim vos suplicamos, por intercessão de tua Mãe Imaculada, nos concedas a dificilíssima virtude da castidade, que tantos tem conservado mediante a devoção da Virgem e tua proteção.</p>
                  </>
                } />
              </TabsContent>

              <TabsContent value="day-8">
                <DayCard day="8º Dia" content={
                  <>
                    <p className="mb-4">Oh! Santíssimo Filho de Maria Imaculada e benigníssimo Redentor nosso:</p>
                    <p>Assim como destes a Maria a graça de uma ardentíssima caridade e amor de Deus sobre todas as coisas, assim vos rogamos humildemente, por intercessão de tua Mãe Imaculada, nos concedas um amor sincero de ti,</p>
                    <p className="mb-2 font-semibold">Oh! Deus Senhor nosso!</p>
                    <p>Nosso verdadeiro bem, nosso bem feitor, nosso Pai, e que antes queiramos perder todas as coisas que ofender-Vos com um somente pecado.</p>
                  </>
                } />
              </TabsContent>

              <TabsContent value="day-9">
                <DayCard day="9º Dia" content={
                  <>
                    <p className="mb-4">Oh! Santíssimo Filho de Maria Imaculada e benigníssimo Redentor nosso:</p>
                    <p>Assim como tens concedido a Maria a graça de ir ao céu e de ser nele colocada no primeiro lugar depois de Vós, vos suplicamos humildemente, por intercessão de Maria Imaculada, nos concedas uma boa morte, que recebamos bem os últimos sacramentos, que expiremos sem mancha nenhuma de pecado na consciência e vamos ao céu, para sempre aproveitar, em tua companhia e a de nossa Mãe, com todos os que se tem salvado por ela.</p>
                  </>
                } />
              </TabsContent>
            </div>
          </Tabs>
        </section>

        {/* Orações Finais */}
        <section>
          <Card className="bg-gradient-to-br from-blue-50 to-white dark:from-slate-900 dark:to-slate-950 border-blue-100">
            <CardHeader>
              <CardTitle className="text-2xl text-blue-800 dark:text-blue-300">Orações Finais</CardTitle>
              <CardDescription>Para rezar ao final de cada dia</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6 text-slate-700 dark:text-slate-300">
              <div className="bg-white dark:bg-slate-900 p-6 rounded-lg shadow-sm border border-slate-100 dark:border-slate-800">
                <p className="italic text-lg mb-4 text-center">
                  "Bendita seja tua pureza e eternamente o seja, pois todo um Deus se recreia em tão graciosa beleza.
                  A ti, celestial Princesa, Virgem Sagrada Maria, vos ofereço neste dia alma, vida e coração.
                  Olhai-me com compaixão, não me deixes, Mãe minha."
                </p>
                <p className="text-center font-medium text-blue-600 dark:text-blue-400 text-sm uppercase tracking-wide">
                  (Rezar três Ave-Marias)
                </p>
              </div>

              <div>
                <p className="font-medium mb-2">Tua Imaculada Concepção, Oh! Virgem Mãe de Deus, anunciou alegria ao universo inteiro.</p>
                <p className="mb-4"><span className="font-bold">Oração:</span> Oh! Deus meu, que pela Imaculada Concepção da Virgem, preparaste digna habitação a teu Filho: Vos rogamos que, assim como pela previsão da morte de teu Filho livrai-vos a ela de toda mancha, assim a nós nos concedas por sua intercessão chegar a Vós limpos de pecado. Pelo mesmo Senhor nosso Jesus Cristo. Amém.</p>
              </div>
            </CardContent>
          </Card>
        </section>

      </main>
    </div>
  );
}

function DayCard({ day, content }: { day: string, content: React.ReactNode }) {
  return (
    <Card className="border-none shadow-md bg-white dark:bg-slate-900">
      <CardHeader className="pb-2">
        <CardTitle className="text-xl text-blue-700 dark:text-blue-400">{day}</CardTitle>
      </CardHeader>
      <CardContent className="text-slate-700 dark:text-slate-300 leading-relaxed">
        {content}
        <Separator className="my-6" />
        <p className="text-sm text-slate-500 italic text-center">
          Após esta oração, rezar as Orações Finais abaixo.
        </p>
      </CardContent>
    </Card>
  );
}
