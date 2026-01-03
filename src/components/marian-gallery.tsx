"use client";

import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { BookOpen } from "lucide-react";
import Image from "next/image";

interface MarianDevotion {
    id: string;
    name: string;
    date: string;
    month: string;
    imageUrl: string;
    description: string;
    fullDescription?: string;
    novenaId?: string;
}

export function MarianGallery() {
    const devotions: MarianDevotion[] = [
        // JANEIRO
        { id: "mae_deus", name: "Santa Maria, Mãe de Deus", date: "01/01", month: "Janeiro", imageUrl: "/images/santa-maria-mae-de-deus.jpg", description: "Solenidade mariana mais antiga e importante, celebrada na Oitava do Natal (Theotokos)", fullDescription: "A Solenidade de Santa Maria, Mãe de Deus (Theotokos) é celebrada no dia 1º de janeiro, dentro da Oitava do Natal. É a festa mariana mais antiga da Igreja e celebra o dogma proclamado no Concílio de Éfeso (431 d.C.) de que Maria é verdadeiramente Mãe de Deus, pois deu à luz Jesus Cristo, que é verdadeiro Deus e verdadeiro homem." },
        { id: "cana", name: "Nossa Senhora de Caná", date: "06/01", month: "Janeiro", imageUrl: "https://via.placeholder.com/200?text=N.S.+de+Caná", description: "Lembrada na Epifania, celebrando a intercessão de Maria nas Bodas de Caná", fullDescription: "Nas Bodas de Caná, Maria demonstrou sua poderosa intercessão junto a Jesus. Ao perceber que faltava vinho, ela disse aos servos: 'Fazei tudo o que Ele vos disser'. Este primeiro milagre de Jesus, realizado a pedido de sua Mãe, manifesta o poder da intercessão mariana e nos ensina a confiar em Maria como medianeira de todas as graças." },
        { id: "bom_parto", name: "Nossa Senhora do Bom Parto", date: "Último domingo", month: "Janeiro", imageUrl: "https://i.pinimg.com/1200x/cc/80/b9/cc80b9f6815e1ec29ad8815d63103fbb.jpg", description: "Devoção muito antiga, ligada à proteção das mães", fullDescription: "Esta devoção remonta aos primeiros séculos do cristianismo e invoca Maria como protetora das gestantes e mães. A imagem representa Maria grávida, prestes a dar à luz o Salvador. É especialmente invocada por mulheres que esperam um filho, pedindo proteção durante a gravidez e um parto seguro. A devoção nos lembra que Maria também passou pela experiência da maternidade humana." },

        // FEVEREIRO
        { id: "candeias", name: "Nossa Senhora das Candeias", date: "02/02", month: "Fevereiro", imageUrl: "https://via.placeholder.com/200?text=Candeias", description: "Apresentação do Senhor no templo. Também Nossa Senhora dos Navegantes", fullDescription: "Celebrada 40 dias após o Natal, esta festa comemora a Apresentação de Jesus no Templo, quando Maria e José levaram o Menino para ser consagrado a Deus. O profeta Simeão reconheceu em Jesus a 'Luz para iluminar as nações', daí o nome 'Candeias' (velas). É também invocada como Nossa Senhora dos Navegantes, especialmente no Brasil, onde grandes procissões marítimas são realizadas." },
        { id: "lourdes", name: "Nossa Senhora de Lourdes", date: "11/02", month: "Fevereiro", imageUrl: "https://via.placeholder.com/200?text=Lourdes", description: "Padroeira dos enfermos. Aparições a Santa Bernadette em 1858", fullDescription: "Entre 11 de fevereiro e 16 de julho de 1858, a Virgem Maria apareceu 18 vezes a Bernadette Soubirous em Lourdes, França. Na 16ª aparição, Maria revelou: 'Eu sou a Imaculada Conceição'. Lourdes tornou-se um dos maiores centros de peregrinação do mundo, conhecido pelos milagres e curas." },
        { id: "desterro", name: "Nossa Senhora do Desterro", date: "17/02", month: "Fevereiro", imageUrl: "/images/ns_desterro.png", description: "Lembra a fuga da Sagrada Família para o Egito. Proteção para a casa, viagens e emigrantes.", fullDescription: "Esta devoção recorda a fuga da Sagrada Família para o Egito, quando José foi avisado em sonho para fugir da perseguição de Herodes. Maria, com o Menino Jesus nos braços, enfrentou o exílio e a incerteza, tornando-se padroeira de todos os refugiados, emigrantes e viajantes. É invocada para proteção da casa, das viagens e de todos que vivem longe de sua terra natal." },

        // MARÇO
        { id: "anunciacao", name: "Nossa Senhora da Anunciação", date: "25/03", month: "Março", imageUrl: "https://via.placeholder.com/200?text=Anunciação", description: "Marca o 'Sim' (Fiat) de Maria à Encarnação", fullDescription: "A Anunciação celebra o momento em que o Arcanjo Gabriel anunciou a Maria que ela seria a Mãe de Deus. Seu 'Fiat' ('Faça-se') foi o sim que mudou a história da humanidade, permitindo a Encarnação do Verbo. Esta solenidade, celebrada nove meses antes do Natal, nos ensina a importância da obediência confiante à vontade de Deus." },
        { id: "dores_marco", name: "Nossa Senhora das Dores", date: "Semana Santa", month: "Março", imageUrl: "https://via.placeholder.com/200?text=Dores", description: "Celebrada intensamente na Semana Santa", fullDescription: "Durante a Semana Santa, contemplamos Maria ao pé da Cruz, compartilhando as dores de seu Filho. As sete dores de Maria incluem a profecia de Simeão, a fuga para o Egito, a perda de Jesus no templo, o encontro no caminho do Calvário, a crucifixão, a descida da cruz e o sepultamento. Maria é modelo de fé e fortaleza no sofrimento." },

        // ABRIL
        { id: "penha", name: "Nossa Senhora da Penha", date: "08/04", month: "Abril", imageUrl: "https://via.placeholder.com/200?text=Penha", description: "Padroeira do Espírito Santo e de grande devoção no Rio de Janeiro", fullDescription: "O Santuário de Nossa Senhora da Penha, no Rio de Janeiro, é um dos mais antigos do Brasil, fundado em 1635. A devoção começou quando um devoto português foi curado de uma doença grave após prometer construir uma capela no alto de um rochedo. A subida de 382 degraus é feita por milhares de romeiros anualmente, demonstrando fé e penitência." },
        { id: "bom_conselho", name: "Nossa Senhora do Bom Conselho", date: "26/04", month: "Abril", imageUrl: "https://via.placeholder.com/200?text=Bom+Conselho", description: "Padroeira de muitas prefeituras e advogada para tomadas de decisão difíceis.", fullDescription: "Esta devoção tem origem em Genazzano, Itália, onde uma imagem de Maria apareceu milagrosamente em 1467. Maria é invocada como 'Mãe do Bom Conselho' por aqueles que enfrentam decisões difíceis e buscam a sabedoria divina. É especialmente venerada por estudantes, políticos e todos que precisam de discernimento." },

        // MAIO
        { id: "estrela", name: "Nossa Senhora da Estrela", date: "08/05", month: "Maio", imageUrl: "https://via.placeholder.com/200?text=Estrela", description: "Também Nossa Senhora de Luján, padroeira da Argentina", fullDescription: "Nossa Senhora de Luján é a padroeira da Argentina. Em 1630, uma imagem de Maria estava sendo transportada quando a carreta parou misteriosamente e não conseguia mais se mover. Interpretando isso como um sinal divino, construíram uma capela no local. Maria é chamada de 'Estrela' porque guia os fiéis no caminho da salvação." },
        { id: "fatima", name: "Nossa Senhora de Fátima", date: "13/05", month: "Maio", imageUrl: "https://via.placeholder.com/200?text=Fátima", description: "Uma das devoções mais populares no Brasil", fullDescription: "Em 1917, Nossa Senhora apareceu a três pastorinhos em Fátima, Portugal. Pediu oração do Rosário, penitência e consagração ao seu Imaculado Coração. O Milagre do Sol em 13 de outubro foi presenciado por 70 mil pessoas. Os segredos de Fátima incluem visões do inferno e profecias sobre a Rússia." },
        { id: "auxiliadora", name: "Nossa Senhora Auxiliadora", date: "24/05", month: "Maio", imageUrl: "https://via.placeholder.com/200?text=Auxiliadora", description: "Padroeira da Família Salesiana, de Goiânia e de Palmas", fullDescription: "O título 'Auxiliadora dos Cristãos' foi dado a Maria pelo Papa Pio V após a vitória de Lepanto. São João Bosco tinha profunda devoção a Nossa Senhora Auxiliadora e construiu uma basílica em sua honra em Turim. É a padroeira dos salesianos e de muitas cidades brasileiras, sendo invocada como auxilio poderoso em todas as necessidades." },
        { id: "caravaggio", name: "Nossa Senhora de Caravaggio", date: "26/05", month: "Maio", imageUrl: "https://via.placeholder.com/200?text=Caravaggio", description: "Grande devoção no sul do Brasil (imigrantes italianos)", fullDescription: "Em 1432, Maria apareceu a uma camponesa em Caravaggio, Itália, pedindo penitência e oração. A devoção foi trazida ao Brasil pelos imigrantes italianos, especialmente no Rio Grande do Sul, Santa Catarina e Paraná. Grandes romarias são realizadas anualmente, mantendo viva a fé e as tradições dos antepassados." },
        { id: "visitacao", name: "Visitação de Nossa Senhora", date: "31/05", month: "Maio", imageUrl: "https://via.placeholder.com/200?text=Visitação", description: "Festa que encerra o mês de Maria, lembrando a visita a Santa Isabel", fullDescription: "Após a Anunciação, Maria foi apressadamente visitar sua prima Isabel, que estava grávida de João Batista. Ao ouvir a saudação de Maria, Isabel foi cheia do Espírito Santo e exclamou: 'Bendita és tu entre as mulheres!'. Maria respondeu com o Magnificat, o cântico de louvor que exalta a humildade e a misericórdia de Deus. Esta festa nos ensina a caridade e o serviço ao próximo." },

        // JUNHO
        { id: "imaculado_coracao", name: "Imaculado Coração de Maria", date: "Sábado após Sagrado Coração", month: "Junho", imageUrl: "https://via.placeholder.com/200?text=Imaculado+Coração", description: "Memória obrigatória" },
        { id: "consolata", name: "Nossa Senhora da Consolata", date: "20/06", month: "Junho", imageUrl: "/images/ns_consolata.png", description: "Padroeira dos missionários da Consolata e de Turim. Muito venerada em São Paulo." },
        { id: "perpetuo_socorro", name: "Nossa Senhora do Perpétuo Socorro", date: "27/06", month: "Junho", imageUrl: "https://via.placeholder.com/200?text=Perpétuo+Socorro", description: "Título oriental (ícone bizantino) difundido pelos Redentoristas" },

        // JULHO
        { id: "rainha_paz", name: "Rainha da Paz", date: "09/07", month: "Julho", imageUrl: "https://iili.io/fjEnxxn.jpg", description: "Muito invocada para o fim de guerras e conflitos familiares." },
        { id: "carmo", name: "Nossa Senhora do Carmo", date: "16/07", month: "Julho", imageUrl: "https://iili.io/fjGdG4I.jpg", description: "Festa do Escapulário. Padroeira de Recife", fullDescription: "Em 16 de julho de 1251, Nossa Senhora apareceu a São Simão Stock entregando o Escapulário do Carmo, prometendo: 'Quem morrer revestido dele não padecerá o fogo eterno'. O Escapulário é um dos sacramentais mais difundidos da Igreja." },
        { id: "santana", name: "Sant'Ana (Mãe de Maria)", date: "26/07", month: "Julho", imageUrl: "https://via.placeholder.com/200?text=Sant'Ana", description: "Devoção intrinsecamente ligada à 'Menina Maria'" },

        // AGOSTO
        { id: "anjos", name: "Nossa Senhora dos Anjos", date: "02/08", month: "Agosto", imageUrl: "https://via.placeholder.com/200?text=Anjos", description: "Festa franciscana do perdão de Assis (Porciúncula)" },
        { id: "saude_agosto", name: "N.S. da Saúde", date: "05/08", month: "Agosto", imageUrl: "https://freeimage.host/i/fjEn7J2", description: "Invocada contra pestes e doenças. Muitas igrejas históricas no Brasil com este título." },
        { id: "neves", name: "Nossa Senhora das Neves", date: "05/08", month: "Agosto", imageUrl: "https://via.placeholder.com/200?text=Neves", description: "Padroeira da Paraíba (João Pessoa)" },
        { id: "assuncao", name: "Assunção de Nossa Senhora", date: "15/08", month: "Agosto", imageUrl: "https://via.placeholder.com/200?text=Assunção", description: "Solenidade. Elevação ao Céu em corpo e alma", fullDescription: "Em 1º de novembro de 1950, o Papa Pio XII proclamou o dogma da Assunção, declarando que Maria foi elevada ao Céu em corpo e alma ao fim de sua vida terrena. Este privilégio único antecipa a ressurreição prometida a todos os fiéis." },
        { id: "rainha", name: "Nossa Senhora Rainha", date: "22/08", month: "Agosto", imageUrl: "https://via.placeholder.com/200?text=Rainha", description: "Oitava da Assunção, celebrando a realeza de Maria" },

        // SETEMBRO
        { id: "natividade", name: "Natividade de Nossa Senhora", date: "08/09", month: "Setembro", imageUrl: "https://via.placeholder.com/200?text=Natividade", description: "O aniversário de Maria. Também Nossa Senhora da Luz" },
        { id: "dores", name: "Nossa Senhora das Dores", date: "15/09", month: "Setembro", imageUrl: "https://via.placeholder.com/200?text=Dores", description: "Memória oficial. Padroeira de Minas Gerais" },
        { id: "piedade", name: "Nossa Senhora da Piedade (Pietá)", date: "15/09", month: "Setembro", imageUrl: "https://iili.io/fjEOxIV.jpg", description: "Padroeira de Minas Gerais. Invocada em sua imagem com Jesus morto nos braços (Pietà)." },
        { id: "la_salette", name: "Nossa Senhora de La Salette", date: "19/09", month: "Setembro", imageUrl: "https://via.placeholder.com/200?text=La+Salette", description: "Aparição aprovada (França), devoção 'reconciliadora'" },
        { id: "merces", name: "Nossa Senhora das Mercês", date: "24/09", month: "Setembro", imageUrl: "https://via.placeholder.com/200?text=Mercês", description: "Ordem Mercedária, libertação dos cativos" },
        { id: "desatadora", name: "Nossa Senhora Desatadora dos Nós", date: "28/09", month: "Setembro", imageUrl: "/images/ns_desatadora.png", description: "Devoção alemã que explodiu no Brasil nos anos 2000. O dia 28 é o dia mensal de devoção." },

        // OUTUBRO
        { id: "rosario", name: "Nossa Senhora do Rosário", date: "07/10", month: "Outubro", imageUrl: "https://i.postimg.cc/2669v1gr/nsr.jpg", description: "Memória do terço e vitória de Lepanto", fullDescription: "A devoção a Nossa Senhora do Rosário remonta ao século XIII, ligada a São Domingos de Gusmão. A festa de 7 de outubro comemora a Vitória de Lepanto (1571), atribuída à intercessão da Virgem através do Rosário. Em Pompeia, Itália, o Beato Bartolo Longo construiu um grande santuário e se tornou o 'Apóstolo do Rosário'." },
        { id: "aparecida", name: "Nossa Senhora Aparecida", date: "12/10", month: "Outubro", imageUrl: "https://i.postimg.cc/Lsyj4XMh/4011bde1376c5422265a41f3a652c540.jpg", description: "Solenidade. Padroeira e Rainha do Brasil", fullDescription: "Em outubro de 1717, pescadores encontraram nas águas do Rio Paraíba uma imagem de Nossa Senhora da Conceição. Após o achado, a pesca foi abundante. Declarada Padroeira do Brasil em 1930, seu santuário é o segundo maior do mundo, recebendo milhões de peregrinos anualmente." },
        { id: "pilar", name: "Nossa Senhora do Pilar", date: "12/10", month: "Outubro", imageUrl: "/images/ns_pilar.png", description: "Celebra a primeira aparição de Maria na história (em vida mortal), ao Apóstolo Tiago na Espanha." },
        { id: "schoenstatt", name: "Mãe Rainha de Schoenstatt", date: "18/10", month: "Outubro", imageUrl: "https://iili.io/fjEnRUl.jpg", description: "A 'Mãe Peregrina' que visita as casas (Schoenstatt). O dia 18 celebra a Aliança de Amor." },
        { id: "nazare", name: "Nossa Senhora de Nazaré", date: "2º Domingo", month: "Outubro", imageUrl: "https://via.placeholder.com/200?text=Nazaré", description: "Círio de Nazaré (Belém/PA), maior manifestação católica do Brasil" },

        // NOVEMBRO
        { id: "medianeira", name: "N.S. Medianeira de Todas as Graças", date: "08/11", month: "Novembro", imageUrl: "/images/ns_medianeira.png", description: "Padroeira do Rio Grande do Sul. Título teológico profundo que afirma que todas as graças passam pelas mãos de Maria." },
        { id: "divina_providencia", name: "Nossa Senhora da Divina Providência", date: "16/11", month: "Novembro", imageUrl: "/images/ns_divina_providencia.png", description: "Padroeira dos Padres Barnabitas. A imagem é famosa por Maria segurar a mão do Menino Jesus, que aponta para a 'providência'." },
        { id: "apresentacao", name: "Apresentação de Nossa Senhora", date: "21/11", month: "Novembro", imageUrl: "https://i.postimg.cc/3Js86PzK/image.png", description: "Memória da entrega de Maria ao templo quando criança" },
        { id: "saude", name: "Nossa Senhora da Saúde", date: "21/11", month: "Novembro", imageUrl: "https://i.postimg.cc/RCdhqSqh/image.png", description: "Invocada como protetora da saúde física e espiritual" },
        { id: "gracas", name: "Nossa Senhora das Graças", date: "27/11", month: "Novembro", imageUrl: "https://i.postimg.cc/SsBDK7HJ/Design-sem-nome-2.png", description: "Medalha Milagrosa. Extremamente popular", fullDescription: "Em 1830, Nossa Senhora apareceu a Santa Catarina Labouré em Paris, mostrando o desenho da Medalha Milagrosa. Maria prometeu grandes graças aos que a usassem com fé. Milhões de conversões e milagres foram atribuídos a esta medalha." },

        // DEZEMBRO
        { id: "imaculada", name: "Imaculada Conceição", date: "08/12", month: "Dezembro", imageUrl: "https://iili.io/KpAtISf.png", description: "Solenidade (Dogma). Padroeira de Portugal", fullDescription: "Em 8 de dezembro de 1854, o Papa Pio IX proclamou o dogma da Imaculada Conceição, declarando que Maria foi preservada do pecado original desde o primeiro instante de sua concepção. Este privilégio único foi concedido em vista dos méritos de Jesus Cristo." },
        { id: "loreto", name: "Nossa Senhora de Loreto", date: "10/12", month: "Dezembro", imageUrl: "/images/nossa_senhora_loreto.png", description: "Padroeira da aviação e das casas", fullDescription: "A Santa Casa de Loreto, na Itália, é venerada como a casa onde a Sagrada Família viveu em Nazaré. Segundo a tradição, foi miraculosamente transportada por anjos em 1291 para protegê-la da profanação." },
        { id: "guadalupe", name: "Nossa Senhora de Guadalupe", date: "12/12", month: "Dezembro", imageUrl: "https://iili.io/ffgFDXV.png", description: "Padroeira da América Latina", fullDescription: "Em 1531, a Virgem Maria apareceu a Juan Diego no México, deixando sua imagem milagrosamente impressa em seu manto (tilma). A imagem permanece inexplicável pela ciência. Esta aparição levou à conversão de milhões de indígenas e é símbolo da evangelização das Américas." },
        { id: "boa_viagem", name: "Nossa Senhora da Boa Viagem", date: "12/12", month: "Dezembro", imageUrl: "/images/ns_boa_viagem.png", description: "Padroeira de Belo Horizonte e dos navegantes portugueses." },
        { id: "expectacao", name: "Nossa Senhora do Bom Parto", date: "18/12", month: "Dezembro", imageUrl: "https://i.pinimg.com/1200x/cc/80/b9/cc80b9f6815e1ec29ad8815d63103fbb.jpg", description: "Celebrando a gravidez de Maria prestes a dar à luz" },
        { id: "nss_coracao", name: "Nossa Senhora do Sagrado Coração", date: "27/12", month: "Dezembro", imageUrl: "/images/ns_sagrado_coracao.png", description: "Advogada das causas difíceis e desesperadas." },
    ];

    const months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

    const devotionsByMonth = months.map((month, index) => ({
        month,
        items: devotions.filter(d => d.month === month),
        isPink: index % 2 !== 0 // Alternating index for colors
    }));

    return (
        <section className="mb-12">
            <h2 className="text-4xl font-bold text-blue-900 dark:text-blue-100 text-center mb-10 font-brand">
                🌹 Galeria de Devoções Marianas 🌹
            </h2>

            <div className="space-y-12">
                {devotionsByMonth.map(({ month, items, isPink }) => (
                    items.length > 0 && (
                        <div
                            key={month}
                            className={`p-8 rounded-3xl shadow-lg border transition-all duration-500 ${isPink
                                ? 'bg-gradient-to-br from-pink-50 to-rose-50 border-pink-100 dark:from-pink-950/20 dark:to-rose-950/20 dark:border-pink-900/30'
                                : 'bg-gradient-to-br from-blue-50 to-sky-50 border-blue-100 dark:from-blue-950/20 dark:to-sky-950/20 dark:border-blue-900/30'
                                }`}
                        >
                            <h3 className={`text-2xl font-bold mb-8 flex items-center gap-3 ${isPink ? 'text-pink-800 dark:text-pink-300' : 'text-blue-800 dark:text-blue-300'
                                }`}>
                                <span className="w-2 h-8 bg-current rounded-full"></span>
                                {month}
                            </h3>

                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
                                {items.map((devotion) => (
                                    <Dialog key={devotion.id}>
                                        <DialogTrigger asChild>
                                            <div className="cursor-pointer group flex flex-col items-center">
                                                <div className="relative w-full max-w-[140px]">
                                                    <Image
                                                        src={devotion.imageUrl}
                                                        alt={devotion.name}
                                                        width={200}
                                                        height={200}
                                                        className={`aspect-square rounded-full object-cover border-4 transition-all duration-300 shadow-md group-hover:shadow-xl group-hover:scale-105 ${isPink ? 'border-pink-200 group-hover:border-pink-400' : 'border-blue-200 group-hover:border-blue-400'
                                                            }`}
                                                    />
                                                    <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 z-10`}>
                                                        <span className={`inline-block px-3 py-1 text-white text-[10px] font-bold rounded-full shadow-sm ${isPink ? 'bg-pink-600' : 'bg-blue-600'
                                                            }`}>
                                                            {devotion.date}
                                                        </span>
                                                    </div>
                                                </div>
                                                <p className="text-center mt-6 text-sm font-semibold text-slate-700 dark:text-slate-300 line-clamp-2 px-2 h-10 flex items-center justify-center">
                                                    {devotion.name}
                                                </p>
                                            </div>
                                        </DialogTrigger>

                                        <DialogContent className="sm:max-w-2xl bg-gradient-to-br from-white to-blue-50 dark:from-slate-900 dark:to-blue-950 border-none shadow-2xl">
                                            <DialogHeader>
                                                <div className="flex flex-col items-center mb-6 pt-4">
                                                    <div className="relative">
                                                        <Image
                                                            src={devotion.imageUrl}
                                                            alt={devotion.name}
                                                            width={200}
                                                            height={200}
                                                            className="w-40 h-40 rounded-full object-cover border-4 border-blue-100 shadow-xl"
                                                        />
                                                    </div>
                                                    <DialogTitle className="text-3xl font-bold text-blue-900 dark:text-blue-100 text-center mt-6 font-brand">
                                                        {devotion.name}
                                                    </DialogTitle>
                                                    <div className="flex items-center gap-2 mt-2">
                                                        <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 text-sm font-bold rounded-full">
                                                            {devotion.date}
                                                        </span>
                                                        <span className="text-slate-400">•</span>
                                                        <span className="text-slate-600 dark:text-slate-400 font-medium">
                                                            {devotion.month}
                                                        </span>
                                                    </div>
                                                </div>
                                            </DialogHeader>

                                            <ScrollArea className="max-h-[50vh] pr-4">
                                                <div className="space-y-6">
                                                    <div className="bg-blue-50/50 dark:bg-blue-900/10 p-6 rounded-2xl border border-blue-100 dark:border-blue-900/20">
                                                        <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-center italic">
                                                            "{devotion.description}"
                                                        </p>
                                                    </div>

                                                    {devotion.fullDescription && (
                                                        <div className="space-y-3">
                                                            <h4 className="text-lg font-bold text-blue-800 dark:text-blue-200 flex items-center gap-2 px-1">
                                                                <BookOpen className="w-5 h-5" />
                                                                História e Significado
                                                            </h4>
                                                            <p className="text-slate-700 dark:text-slate-300 leading-relaxed px-1 text-sm md:text-base">
                                                                {devotion.fullDescription}
                                                            </p>
                                                        </div>
                                                    )}

                                                    {devotion.novenaId && (
                                                        <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-xl border border-green-100 dark:border-green-900/30 flex items-center gap-3">
                                                            <div className="w-10 h-10 bg-green-100 dark:bg-green-900/50 rounded-full flex items-center justify-center">
                                                                <span className="text-xl">✨</span>
                                                            </div>
                                                            <p className="text-sm text-green-800 dark:text-green-200 font-semibold">
                                                                Esta devoção possui novena disponível em nosso site!
                                                            </p>
                                                        </div>
                                                    )}
                                                </div>
                                            </ScrollArea>
                                        </DialogContent>
                                    </Dialog>
                                ))}
                            </div>
                        </div>
                    )
                ))}
            </div>
        </section>
    );
}
