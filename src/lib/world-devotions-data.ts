export interface MarianDevotion {
    id: string;
    name: string;
    country: string;
    countryFlag: string;
    date: string;
    imageUrl: string;
    images?: string[]; // múltiplas imagens para galeria
    description: string;
    fullDescription: string;
    status?: "approved" | "pending" | "not-approved" | "complex";
    statusNote?: string;
}

export interface Continent {
    name: string;
    emoji: string;
    iconUrl?: string;
    devotions: MarianDevotion[];
}

export const worldMarianDevotions: Continent[] = [
    {
        name: "Europa",
        emoji: "🇪🇺",
        iconUrl: "/images/europa_icon_white.png",
        devotions: [
            // PRIORIDADE ALTA / FASE 1 & 2
            {
                id: "knock",
                name: "N.S. de Knock",
                country: "Irlanda",
                countryFlag: "🇮🇪",
                date: "21 de Agosto",
                imageUrl: "/images/ns_knock.png",
                description: "A Aparição Silenciosa (1879)",
                fullDescription: "Em 1879, Maria, São José e São João Evangelista apareceram em uma parede da igreja de Knock. Não disseram uma palavra. A aparição silenciosa é interpretada como contemplação do Cordeiro de Deus (que também apareceu num altar). É o santuário nacional da Irlanda.",
                status: "approved",
                statusNote: "Aprovada em 1879; Reconhecida por São João Paulo II em 1979"
            },
            {
                id: "beauraing",
                name: "N.S. de Beauraing",
                country: "Bélgica",
                countryFlag: "🇧🇪",
                date: "29 de Novembro",
                imageUrl: "/images/ns_beauraing.png",
                description: "A Virgem do Coração de Ouro (1932)",
                fullDescription: "Apareceu a 5 crianças em 1932-1933. Mostrou seu Coração de Ouro e pediu: 'Eu converterei os pecadores'. A mensagem simples e a imagem do coração dourado atraem milhares de peregrinos.",
                status: "approved",
                statusNote: "Aprovada em 1949 pelo Bispo de Namur; confirmada pela Santa Sé"
            },
            {
                id: "todas_nacoes",
                name: "N.S. de Todas as Nações",
                country: "Holanda",
                countryFlag: "🇳🇱",
                date: "31 de Maio",
                imageUrl: "/images/ns_todas_nacoes.png",
                description: "Aparição em Amsterdã - Mensagem de unidade",
                fullDescription: "Aparições a Ida Peerdeman (1945-1959). Maria pediu o dogma de 'Corredentora, Medianeira e Advogada'. Embora o dogma não tenha sido proclamado, a devoção e a oração foram aprovadas pelo bispo local em 2002.",
                status: "approved",
                statusNote: "Devoção/Culto aprovado em 2002 pelo Bispo de Haarlem-Amsterdam"
            },
            {
                id: "siluva",
                name: "N.S. de Šiluva",
                country: "Lituânia",
                countryFlag: "🇱🇹",
                date: "8 de Setembro",
                imageUrl: "/images/ns_siluva.png",
                description: "Primeira aparição mariana aprovada na Europa (1608)",
                fullDescription: "É considerada a primeira aparição mariana aprovada na Europa, ocorrida em 1608. Em um período onde a Lituânia se tornava calvinista (protestante), Maria apareceu chorando, lamentando que seu Filho não era mais adorado naquele lugar. É o coração católico do Báltico.",
                status: "approved",
                statusNote: "Primeira aparição aprovada na Europa; Santuário confirmado pelo Papa Pio VI em 1775"
            },
            {
                id: "walsingham",
                name: "N.S. de Walsingham",
                country: "Inglaterra",
                countryFlag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
                date: "24 de Setembro",
                imageUrl: "/images/ns_walsingham.png",
                description: "A 'Nazaré' da Inglaterra (Séc. XI)",
                fullDescription: "A NAZARÉ DA INGLATERRA\n\nNossa Senhora de Walsingham é uma das devoções marianas mais antigas e veneradas da Inglaterra, com raízes que remontam ao século XI. O santuário de Walsingham, localizado em Norfolk, foi durante a Idade Média um dos maiores centros de peregrinação mariana da Europa, rivalizando com Santiago de Compostela e até mesmo com Roma. Era conhecido como 'a Nazaré da Inglaterra' devido à réplica da Santa Casa de Nazaré que ali foi construída.\n\nA VISÃO DE RICHELDIS\n\nEm 1061, uma nobre viúva chamada Richeldis de Faverches teve uma série de visões de Nossa Senhora. Nestas visões, Maria a transportou espiritualmente para Nazaré e mostrou-lhe a casa onde o Anjo Gabriel anunciou que ela seria a Mãe de Deus. Maria pediu a Richeldis que construísse uma réplica exata daquela casa em Walsingham, para que os fiéis ingleses pudessem venerar o mistério da Encarnação sem precisar viajar à Terra Santa. Richeldis obedeceu e construiu a 'Santa Casa' de madeira, que se tornou o coração do santuário.\n\nA IDADE DE OURO DAS PEREGRINAÇÕES\n\nDurante os séculos XII a XVI, Walsingham tornou-se o principal santuário mariano da Inglaterra. Reis, rainhas, nobres e plebeus peregrinavam a pé até Walsingham, muitas vezes percorrendo centenas de quilômetros. Entre os peregrinos ilustres estavam o Rei Henrique III, Eduardo I, Eduardo II, Eduardo III, Henrique VII e até mesmo o jovem Henrique VIII (antes de sua ruptura com Roma). O santuário era tão importante que havia uma estrada de peregrinação oficial, a 'Via Walsingham', que partia de Londres. Milagres abundantes eram relatados, especialmente curas de doenças.\n\nA DESTRUIÇÃO NA REFORMA\n\nA tragédia chegou em 1538, durante a Reforma Protestante de Henrique VIII. O santuário foi saqueado, a Santa Casa foi destruída, a estátua milagrosa de Nossa Senhora foi queimada publicamente em Londres, e os monges que cuidavam do santuário foram executados. Por quase 400 anos, Walsingham permaneceu em ruínas, um testemunho silencioso da fé católica perdida da Inglaterra.\n\nA RESTAURAÇÃO NO SÉCULO XX\n\nEm 1897, a devoção a N.S. de Walsingham começou a renascer quando Charlotte Boyd, uma convertida católica, comprou a antiga Slipper Chapel (Capela do Chinelo), onde os peregrinos medievais tiravam os sapatos para caminhar descalços o último quilômetro até o santuário. Em 1934, uma nova estátua de N.S. de Walsingham foi entronizada, e as peregrinações foram retomadas. Curiosamente, a Igreja Anglicana também restaurou sua própria versão do santuário em 1931, fazendo de Walsingham um raro local de devoção mariana compartilhada por católicos e anglicanos.\n\nDEVOÇÃO E SIGNIFICADO\n\nA devoção a N.S. de Walsingham centra-se no mistério da Encarnação - o momento em que o Verbo se fez carne no ventre de Maria. A Santa Casa de Nazaré é o lugar onde tudo começou, onde Maria disse 'sim' a Deus. Walsingham nos convida a meditar sobre a humildade de Deus que escolheu nascer numa casa simples, de uma Virgem humilde. A devoção nos ensina que Maria é a porta através da qual Cristo entrou no mundo, e continua sendo o caminho mais seguro para chegarmos a Ele. Hoje, Walsingham é novamente um importante centro de peregrinação, com milhares de fiéis visitando anualmente, rezando pela conversão da Inglaterra e pela unidade dos cristãos.",
                status: "approved",
                statusNote: "Santuário Histórico"
            },
            {
                id: "kazan",
                name: "N.S. de Kazan",
                country: "Rússia",
                countryFlag: "🇷🇺",
                date: "4 de Novembro",
                imageUrl: "/images/ns_kazan.png",
                description: "Padroeira da Rússia - Ícone milagroso",
                fullDescription: "O ícone mais venerado da Rússia, 'A Libertadora'. Salvou a Rússia de invasões polonesas e napoleônicas. Desapareceu em 1904 e uma cópia antiga foi devolvida por São João Paulo II à Igreja Ortodoxa Russa em 2004, num gesto histórico de ecumenismo.",
                status: "approved",
                statusNote: "Ícone Ortodoxo e Católico"
            },
            {
                id: "banneux",
                name: "N.S. de Banneux",
                country: "Bélgica",
                countryFlag: "🇧🇪",
                date: "15 de Janeiro",
                imageUrl: "/images/ns_banneux.png",
                description: "Virgem dos Pobres (1933)",
                fullDescription: "Apareceu logo após Beauraing, em 1933, a uma menina pobre. Apresentou-se como 'A Virgem dos Pobres' e indicou uma fonte para 'aliviar o sofrimento'. Aprovada pela Igreja em 1949.",
                status: "approved",
                statusNote: "Aprovada em 1949 pelo Bispo de Liège; confirmada pela Santa Sé"
            },
            {
                id: "pontmain",
                name: "N.S. de Pontmain",
                country: "França",
                countryFlag: "🇫🇷",
                date: "17 de Janeiro",
                imageUrl: "/images/ns_pontmain.png",
                description: "N.S. da Esperança - 'Mas rezai, meus filhos...'",
                fullDescription: "A APARIÇÃO NO CÉU ESTRELADO\n\nEm 17 de janeiro de 1871, durante um dos momentos mais sombrios da Guerra Franco-Prussiana, Nossa Senhora apareceu de forma extraordinária na pequena aldeia de Pontmain, na região de Mayenne, noroeste da França. A aparição ocorreu no céu estrelado, visível apenas para crianças, num fenômeno que durou cerca de três horas e mudou o destino da França.\n\nAS CRIANÇAS VIDENTES\n\nPor volta das 17h30, dois irmãos, Eugène Barbedette (12 anos) e Joseph Barbedette (10 anos), estavam ajudando seu pai no celeiro quando viram no céu, acima da casa vizinha, uma 'bela Senhora' vestida com um vestido azul escuro coberto de estrelas douradas, um véu negro na cabeça e uma coroa de ouro com uma faixa vermelha. Ela sorria para eles com ternura maternal. Os adultos presentes não conseguiam ver nada, mas outras crianças da aldeia foram chamadas e também viram a aparição: Françoise Richer (11 anos) e Jeanne-Marie Lebossé (9 anos).\n\nA MENSAGEM ESCRITA NO CÉU\n\nDurante a aparição, palavras foram se formando lentamente no céu, em letras douradas, compondo uma mensagem: 'Mais priez mes enfants, Dieu vous exaucera en peu de temps. Mon Fils se laisse toucher' (Mas rezai, meus filhos. Deus vos ouvirá em pouco tempo. Meu Filho se deixa tocar). A mensagem era um apelo urgente à oração em meio à guerra devastadora que ameaçava destruir a França. As crianças também viram um grande crucifixo vermelho aparecer sobre o coração de Maria, e quatro velas se acenderem ao redor dela.\n\nO MILAGRE DA PAZ\n\nA aparição ocorreu num momento crítico: as tropas prussianas avançavam inexoravelmente em direção a Pontmain e toda a região estava aterrorizada. Milagrosamente, naquela mesma noite de 17 de janeiro, o exército prussiano parou seu avanço sem explicação militar lógica. Dez dias depois, em 28 de janeiro de 1871, foi assinado o armistício que pôs fim à guerra. Pontmain foi poupada, e nenhum dos 38 jovens da aldeia que estavam na guerra morreu ou foi ferido gravemente.\n\nRECONHECIMENTO E DEVOÇÃO\n\nA aparição foi reconhecida oficialmente pela Igreja em 1872, apenas um ano após os eventos, pelo Bispo de Laval, Mons. Wicart, que conduziu uma investigação rigorosa. O reconhecimento rápido deveu-se à clareza dos fatos, à credibilidade das testemunhas e aos frutos espirituais imediatos. Uma magnífica basílica foi construída no local da aparição, tornando-se um importante centro de peregrinação. Nossa Senhora de Pontmain é invocada como 'Nossa Senhora da Esperança' e 'Nossa Senhora da Oração'. A devoção nos ensina o poder da oração, especialmente em tempos de guerra, crise e desespero, e que Maria é a Mãe que intercede por seus filhos nas horas mais difíceis, trazendo esperança e paz.",
                status: "approved",
                statusNote: "Aprovada em 1872 pelo Bispo de Laval após o fim da guerra"
            },
            {
                id: "pellevoisin",
                name: "N.S. de Pellevoisin",
                country: "França",
                countryFlag: "🇫🇷",
                date: "19 de Fevereiro",
                imageUrl: "/images/ns_pellevoisin.png",
                description: "Mãe Todo-Misericordiosa e o Escapulário do Sagrado Coração",
                fullDescription: "Uma aparição aprovada que ocorreu em 1876. Maria apareceu a uma mulher doente que foi curada e pediu a divulgação do Escapulário do Sagrado Coração. Enfatiza a misericórdia através do Coração de Jesus.",
                status: "approved",
                statusNote: "Culto e Escapulário aprovados pelo Papa Pio IX em 1876"
            },
            {
                id: "lagrimas_siracusa",
                name: "N.S. das Lágrimas",
                country: "Itália",
                countryFlag: "🇮🇹",
                date: "29 de Agosto",
                imageUrl: "/images/ns_lagrimas.png",
                description: "Lágrimas humanas em uma imagem de gesso (1953)",
                fullDescription: "Em 1953, em Siracusa, Sicília, uma imagem de gesso do Imaculado Coração de Maria derramou lágrimas humanas por quatro dias. O fenômeno foi confirmado cientificamente e aprovado pela Igreja.",
                status: "approved",
                statusNote: "Reconhecida pelos bispos da Sicília (1953); Mensagem abençoada por Pio XII em 1954"
            },
            {
                id: "revelacao",
                name: "N.S. da Revelação",
                country: "Itália",
                countryFlag: "🇮🇹",
                date: "12 de Abril",
                imageUrl: "/images/ns_revelacao.png",
                description: "Tre Fontane - Conversão de um anticlerical",
                fullDescription: "A CONVERSÃO MILAGROSA DE BRUNO CORNACCHIOLA\n\nA história de Nossa Senhora da Revelação é uma das mais extraordinárias conversões do século XX, ocorrida em 12 de abril de 1947, no local chamado Tre Fontane (Três Fontes), nos arredores de Roma, Itália. Este local é historicamente significativo, pois é onde, segundo a tradição, São Paulo Apóstolo foi decapitado, e sua cabeça, ao tocar o chão três vezes, fez brotar três fontes de água.\n\nO PERSEGUIDOR DO PAPA\n\nBruno Cornacchiola (1913-2001) era um ex-católico que se tornara protestante radical e anticlerical fervoroso. Ele odiava profundamente a Igreja Católica, o Papa e especialmente a Virgem Maria. Bruno havia sido membro das Brigadas Negras fascistas e lutara na Guerra Civil Espanhola ao lado dos republicanos contra os católicos. Sua obsessão era matar o Papa Pio XII. Ele havia preparado meticulosamente um plano: escreveu um discurso violento contra a Igreja e planejava assassinar o Papa durante uma audiência pública. Naquele dia de abril, ele estava finalizando seu discurso de ódio enquanto seus três filhos pequenos brincavam próximo a uma gruta.\n\nA APARIÇÃO DA VIRGEM\n\nDe repente, seus filhos começaram a gritar que viam uma 'bela Senhora' vestida de branco na gruta. Bruno, irritado, foi até lá para trazê-los de volta, mas ao chegar perto da gruta, foi derrubado por uma força invisível e caiu de joelhos. Uma voz suave disse: 'Eu sou Aquela que está na Divina Trindade. Sou a Virgem da Revelação. Você me persegue. Agora chega! Entre no redil sagrado, a corte celestial na terra'. Bruno viu então a Virgem Maria, de beleza indescritível, segurando uma Bíblia contra o peito e pisando sobre um manto negro rasgado (simbolizando o erro e o pecado).\n\nA MENSAGEM E A CONVERSÃO\n\nMaria revelou a Bruno várias verdades de fé, corrigindo seus erros doutrinários sobre a virgindade perpétua de Maria, a Eucaristia e a autoridade da Igreja. Ela lhe disse: 'Não se pode ir a Deus senão através de mim'. Pediu oração e penitência pela conversão dos pecadores e alertou sobre os perigos do comunismo ateísta. A aparição durou cerca de uma hora. Quando terminou, Bruno estava completamente transformado. O homem que planejava matar o Papa tornou-se um dos mais fervorosos devotos de Maria. Ele rasgou seu discurso de ódio, confessou-se, reconciliou-se com a Igreja e dedicou o resto de sua vida a testemunhar a misericórdia de Maria.\n\nRECONHECIMENTO E SANTUÁRIO\n\nO Papa Pio XII, ao saber da aparição e da conversão de Bruno (o homem que planejava matá-lo!), ficou profundamente comovido e abençoou pessoalmente a estátua de N.S. da Revelação em 1947. O santuário foi confiado aos Frades Franciscanos Conventuais. Embora não haja uma aprovação formal das aparições, o culto é permitido e encorajado. Bruno viveu até os 88 anos, sempre testemunhando incansavelmente sobre a misericórdia de Maria. Seu processo de beatificação foi aberto.\n\nMENSAGEM ESPIRITUAL\n\nA devoção a N.S. da Revelação nos ensina que ninguém está além da misericórdia de Deus. Mesmo o maior inimigo da Igreja pode ser transformado pela graça. Maria é a Mãe que nunca desiste de nenhum filho, por mais perdido que esteja. Ela é a 'Virgem da Revelação' porque revela a verdade de Deus aos corações endurecidos pelo erro e pelo ódio, transformando-os em corações de amor e fé.",
                status: "approved",
                statusNote: "Culto abençoado por Pio XII em 1947; Santuário confiado aos Franciscanos"
            },
            {
                id: "impossiveis",
                name: "N.S. dos Impossíveis",
                country: "Itália",
                countryFlag: "🇮🇹",
                date: "22 de Maio",
                imageUrl: "/images/ns_impossiveis.jpg",
                description: "Padroeira das causas impossíveis (Cascia)",
                fullDescription: "A MÃE DAS CAUSAS IMPOSSÍVEIS\n\nNossa Senhora dos Impossíveis é uma devoção mariana profundamente enraizada na cidade de Cássia (Cascia), na Úmbria, Itália, intimamente ligada à vida e ao santuário de Santa Rita de Cássia (1381-1457), a 'Santa dos Impossíveis'. A devoção nasceu da profunda relação de Santa Rita com a Virgem Maria e dos inúmeros milagres atribuídos à intercessão de ambas nas situações humanamente impossíveis.\n\nSANTA RITA E MARIA\n\nSanta Rita viveu uma vida marcada por sofrimentos que pareciam impossíveis de suportar: casou-se com um homem violento e cruel, sofreu abusos durante 18 anos, viu seus dois filhos planejarem vingar o assassinato do pai (e rezou para que morressem antes de cometerem o crime, e eles morreram perdoando), foi rejeitada três vezes pelas freiras agostinianas antes de ser aceita no convento, e recebeu o estigma da coroa de espinhos que a fez sofrer intensamente por 15 anos. Em cada uma dessas situações 'impossíveis', Rita recorria à Virgem Maria, sua Mãe e consoladora. Maria sempre a sustentou, deu-lhe força para perdoar, amor para amar os inimigos e paciência para suportar o sofrimento.\n\nO SANTUÁRIO DE CÁSSIA\n\nO Santuário de Santa Rita em Cássia é um dos mais visitados da Itália, recebendo milhões de peregrinos anualmente. Dentro do santuário, além do túmulo de Santa Rita, há uma belíssima imagem de Nossa Senhora dos Impossíveis, venerada com grande devoção. Os fiéis vêm de todo o mundo trazendo suas 'causas impossíveis': doenças incuráveis, casamentos destruídos, filhos afastados da fé, problemas financeiros insolúveis, situações de injustiça, vícios aparentemente invencíveis. As paredes do santuário estão cobertas de ex-votos - testemunhos de graças alcançadas através da intercessão de Santa Rita e de Nossa Senhora.\n\nPOR QUE 'DOS IMPOSSÍVEIS'?\n\nO título 'dos Impossíveis' não significa que Maria realiza coisas que Deus não pode fazer (pois para Deus nada é impossível), mas sim que Ela intercede por nós nas situações que, humanamente falando, parecem sem solução, sem esperança, sem saída. São as situações onde já esgotamos todos os recursos humanos, onde os médicos já disseram 'não há mais nada a fazer', onde os relacionamentos parecem irremediavelmente quebrados, onde a esperança humana acabou. É exatamente aí que Maria age com poder maternal, levando nossas causas ao Coração de seu Filho Jesus.\n\nDEVOÇÃO E CONFIANÇA\n\nA devoção a N.S. dos Impossíveis nos ensina a confiança absoluta na intercessão de Maria. Quando tudo parece perdido, quando não há mais nada a fazer humanamente, é hora de entregar tudo nas mãos de Maria e confiar. Ela é a Mãe que nunca abandona seus filhos nas horas mais difíceis. Como disse Santa Rita: 'Nada é impossível para quem reza'. E podemos acrescentar: nada é impossível para quem confia em Maria, a Mãe dos Impossíveis. A festa de Santa Rita (22 de maio) é também o dia de veneração especial a N.S. dos Impossíveis.",
                status: "approved",
                statusNote: "Devoção Tradicional"
            },
            {
                id: "rocio_espanha",
                name: "N.S. do Rocio",
                country: "Espanha",
                countryFlag: "🇪🇸",
                date: "Pentecostes",
                imageUrl: "/images/ns_rocio.png",
                description: "A 'Branca Pomba' da Andaluzia",
                fullDescription: "A VIRGEM DO ROCÍO - RAINHA DE ANDALUZIA\n\nNossa Senhora do Rocío (Nuestra Señora del Rocío) é uma das devoções marianas mais profundas e emocionantes da Espanha, venerada no santuário de Almonte, província de Huelva, na Andaluzia. O nome 'Rocío' significa 'orvalho', evocando a suavidade e frescor da presença maternal de Maria.\n\nA ROMARIA DO ROCÍO - EL CAMINO\n\nA Romaria do Rocío (Romería del Rocío) é a maior manifestação de fé popular da Espanha e uma das maiores da Europa, reunindo mais de um milhão de peregrinos anualmente durante o fim de semana de Pentecostes. Dezenas de irmandades (hermandades) de toda a Andaluzia e de outras regiões da Espanha percorrem a pé, a cavalo e em carroças decoradas o caminho até Almonte, numa jornada que pode durar vários dias. O ambiente é de festa, oração, canto de sevillanas (canções tradicionais) e profunda devoção mariana.\n\nA BLANCA PALOMA\n\nA Virgem do Rocío é carinhosamente chamada de 'Blanca Paloma' (Pomba Branca), título imortalizado em inúmeras canções populares andaluzas. A imagem mostra Maria ricamente vestida com um manto triangular bordado em ouro, coroada e segurando o Menino Jesus. A devoção expressa a alma andaluza: alegre, emotiva, festiva e profundamente católica.\n\nHISTÓRIA E TRADIÇÃO\n\nA origem da devoção remonta ao século XIII, quando, segundo a tradição, um caçador de Almonte encontrou a imagem escondida num tronco de árvore. Tentativas de levá-la para outros lugares falharam, pois a imagem sempre 'voltava' milagrosamente ao local original, indicando seu desejo de permanecer ali. O santuário atual foi construído no local e tornou-se o coração espiritual da Andaluzia.\n\nDEVOÇÃO E IDENTIDADE CULTURAL\n\nA devoção a N.S. do Rocío transcende o religioso e se entrelaça profundamente com a identidade cultural andaluza. Famílias inteiras participam das irmandades há gerações, transmitindo a fé e as tradições de pais para filhos. O momento mais emocionante da romaria é a 'Presentación', quando a imagem da Virgem é carregada em procissão pelos devotos em êxtase de fé e alegria. A devoção nos ensina que a fé pode ser vivida com alegria, festa e profunda emoção, sem perder a reverência e o amor a Maria.",
                status: "approved",
                statusNote: "Devoção Tradicional"
            },
            {
                id: "covadonga",
                name: "N.S. de Covadonga",
                country: "Espanha",
                countryFlag: "🇪🇸",
                date: "8 de Setembro",
                imageUrl: "/images/ns_covadonga.png",
                description: "A 'Santina' - Reconquista da Espanha",
                fullDescription: "A SANTINA DAS ASTÚRIAS\n\nNossa Senhora de Covadonga, carinhosamente chamada de 'La Santina' (a Santinha) pelos asturianos, é a padroeira do Principado das Astúrias e uma das devoções marianas mais antigas e veneradas da Espanha. Seu santuário está localizado numa gruta natural nas montanhas dos Picos de Europa, em Cangas de Onís, Astúrias, num cenário de beleza natural impressionante.\n\nA BATALHA DE COVADONGA (722)\n\nA devoção a N.S. de Covadonga está intimamente ligada a um dos momentos mais decisivos da história da Espanha e da Europa: a Batalha de Covadonga, travada em 722 d.C. Após a invasão muçulmana da Península Ibérica em 711, que conquistou quase todo o território em poucos anos, um pequeno grupo de cristãos refugiou-se nas montanhas das Astúrias sob a liderança do nobre visigodo Dom Pelayo (Pelágio).\n\nO MILAGRE DA VITÓRIA\n\nSegundo a tradição, quando as tropas muçulmanas atacaram os cristãos refugiados na gruta de Covadonga, Dom Pelayo e seus guerreiros invocaram a proteção da Virgem Maria. Milagrosamente, as flechas e pedras lançadas pelos invasores voltavam-se contra eles mesmos, e uma avalanche de rochas caiu sobre o exército muçulmano, causando sua derrota. Esta vitória, embora pequena em termos militares, teve imenso significado simbólico: foi o início da Reconquista cristã da Espanha, que duraria quase 800 anos até a tomada de Granada em 1492.\n\nA GRUTA SAGRADA\n\nA Santa Caverna (Santa Cueva) de Covadonga é um lugar de profunda espiritualidade. Dentro da gruta, escavada na rocha viva da montanha, encontra-se o altar com a imagem da Virgem, iluminada por inúmeras velas e lâmpadas votivas. Ao lado, jorra uma fonte de água cristalina considerada milagrosa pelos devotos. A gruta é acessada por uma escadaria íngreme, e o ambiente é de recolhimento e oração.\n\nSÍMBOLO DE IDENTIDADE NACIONAL\n\nN.S. de Covadonga é muito mais que uma devoção regional; é um símbolo da identidade cristã e nacional espanhola. A vitória de Covadonga é vista como o momento fundacional do Reino das Astúrias e, posteriormente, da Espanha cristã. Dom Pelayo é considerado o primeiro rei das Astúrias, e seu túmulo encontra-se na própria gruta. A devoção nos ensina que Maria é a protetora dos que confiam nela, mesmo nas situações mais desesperadoras, e que a fé pode mover montanhas e mudar o curso da história.",
                status: "approved",
                statusNote: "Santuário Histórico"
            },
            {
                id: "macarena",
                name: "N.S. da Esperança Macarena",
                country: "Espanha",
                countryFlag: "🇪🇸",
                date: "18 de Dezembro",
                imageUrl: "/images/ns_macarena.png",
                description: "Rainha de Sevilha - Semana Santa",
                fullDescription: "A VIRGEM DA ESPERANÇA DE SEVILHA\n\nNossa Senhora da Esperança Macarena (Nuestra Señora de la Esperanza Macarena) é uma das imagens marianas mais veneradas, amadas e emocionantes da Espanha. Ela é a Rainha absoluta de Sevilha e protagonista de uma das procissões mais impressionantes da Semana Santa sevilhana, que é considerada a mais importante e espetacular do mundo católico.\n\nA IMAGEM DA MATER DOLOROSA\n\nA imagem da Macarena representa Maria como Mater Dolorosa (Mãe Dolorosa), contemplando o sofrimento de seu Filho Jesus na Paixão. Esculpida provavelmente no século XVII (embora a autoria seja debatida, muitos a atribuem a Luisa Roldán, 'La Roldana'), a imagem é de uma beleza comovente e dramática. Maria é representada com o rosto inclinado, olhos lacrimejantes de vidro que parecem chorar lágrimas reais, lábios entreabertos em expressão de dor contida, e mãos postas em oração. Seu manto verde bordado em ouro e sua coroa de ouro e pedras preciosas contrastam com a expressão de profundo sofrimento.\n\nA MADRUGADA DA SEXTA-FEIRA SANTA\n\nA procissão da Macarena ocorre na madrugada da Sexta-Feira Santa (Madrugá), saindo de sua basílica no bairro da Macarena por volta da meia-noite e percorrendo as ruas de Sevilha até o amanhecer. Centenas de milhares de pessoas acompanham a procissão, muitas chorando de emoção. O momento mais intenso é quando a imagem passa pela Ponte de Triana e entra na Catedral de Sevilha, ao som de saetas (cantos flamencos religiosos) cantados espontaneamente pelos devotos.\n\nDEVOÇÃO APAIXONADA\n\nA devoção à Macarena é visceral, emocional e profundamente enraizada na alma sevilhana. Ela não é apenas uma imagem religiosa, mas a Mãe, a Rainha, a Esperança do povo. Sevilhanos de todas as classes sociais, incluindo toureiros famosos (muitos dedicam suas touradas à Macarena), artistas e políticos, professam devoção fervorosa a ela. A Hermandad (Irmandade) da Macarena é uma das mais antigas e prestigiadas de Sevilha.\n\nESPERANÇA NA DOR\n\nO título 'Esperança' é profundamente significativo: mesmo na dor mais profunda da Paixão de Cristo, Maria mantém a esperança na Ressurreição. Suas lágrimas não são de desespero, mas de amor e esperança. A devoção à Macarena nos ensina que Maria acompanha todos os que sofrem, chorando conosco em nossas dores, mas sempre apontando para a esperança da salvação e da vida eterna. Ela é a Mãe que nunca abandona seus filhos, mesmo nos momentos mais escuros.",
                status: "approved",
                statusNote: "Devoção Tradicional"
            },
            {
                id: "guia_portugal",
                name: "N.S. da Guia",
                country: "Portugal",
                countryFlag: "🇵🇹",
                date: "02 de Fevereiro",
                imageUrl: "/images/ns_guia.png",
                images: [
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2KLj5AsV5UIwqT8pExjPi6k8emqEYvaTi1w&s",
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQskL9z31pYLsKuIDa6PjofqTQx8xuSCpVfIw&s",
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt_cqIt0p-ATctX7BYuhs_Z57HXGNES9l3CQ&s"
                ],
                description: "Estrela do Mar e Guia segura para os navegantes e para o porto seguro da alma.",
                fullDescription: "A ESTRELA DO MAR E O PORTO SEGURO\n\nNossa Senhora da Guia é um dos títulos mais antigos e amados da Virgem Maria, profundamente ligado à história das navegações e à confiança cristã em Maria como a 'Estrela do Mar' (Stella Maris). Sua devoção nasceu da necessidade dos navegantes de encontrar um guia seguro em meio às tempestades e incertezas dos oceanos, transpondo essa necessidade para a jornada espiritual de cada cristão rumo ao Céu.\n\nORIGENS EM PORTUGAL E AS NAVEGAÇÕES\n\nA devoção consolidou-se em Portugal durante a Era das Descobertas. Antes de partirem para mares desconhecidos, marinheiros e exploradores recorriam a Nossa Senhora da Guia, pedindo proteção contra naufrágios e um retorno seguro. Em Cascais, o Santuário de Nossa Senhora da Guia tornou-se um farol de fé para os que cruzavam o Atlântico. Diz a tradição que, em momentos de perigo extremo, uma luz misteriosa vinda do local da capela guiava os navios perdidos para a segurança do porto.\n\nA DEVOÇÃO NO BRASIL\n\nCom os colonizadores portugueses, a devoção chegou ao Brasil, estabelecendo-se com força em diversas regiões. Em Várzea Grande e Cuiabá (Mato Grosso), ela é venerada como a padroeira que guiou os primeiros exploradores e hoje guia o povo nas dificuldades da vida. Sua festa é marcada por barqueatas e procissões que celebram a proteção divina sobre os que viajam e trabalham.\n\nSIMBOLISMO E MENSAGEM ESPIRITUAL\n\nA iconografia de Nossa Senhora da Guia geralmente a representa segurando o Menino Jesus no colo esquerdo, enquanto sua mão direita aponta para Ele ou segura um cetro/guia. O Menino Jesus, por sua vez, muitas vezes segura um globo ou faz um gesto de benção. A mensagem é clara: Maria nos guia até Jesus, que é o Caminho, a Verdade e a Vida. Ela é a Estrela que não se apaga, brilhando na noite escura da dúvida e do pecado, conduzindo-nos ao porto seguro da salvação.\n\nORAÇÃO\n\nÓ Maria, Nossa Senhora da Guia, Estrela que brilha no mar da vida, protegei-nos em todas as nossas viagens e guiai nossos corações nos caminhos da paz e da justiça. Quando as tempestades do mundo nos cercarem, sede vós o nosso farol, conduzindo-nos com segurança até o encontro definitivo com vosso Filho Jesus. Amém.",
                status: "approved",
                statusNote: "Devoção Tradicional"
            },
            {
                id: "sameiro",
                name: "N.S. do Sameiro",
                country: "Portugal",
                countryFlag: "🇵🇹",
                date: "12 de Junho",
                imageUrl: "/images/ns_sameiro.png",
                description: "O Altar de Portugal - Segundo maior santuário mariano do país",
                fullDescription: "O SANTUÁRIO DO IMACULADO CORAÇÃO\n\nNossa Senhora do Sameiro é uma das maiores e mais profundas devoções de Portugal, possuindo o segundo maior santuário mariano do país, localizado no topo do Monte do Sameiro, em Braga. Esta devoção é um marco histórico, pois nasceu antes mesmo da proclamação oficial do Dogma da Imaculada Conceição.\n\nORIGEM E O PAI DA DEVOÇÃO\n\nA história do Sameiro está ligada ao Padre Martinho da Silva, que em 1863 decidiu erguer um monumento à Imaculada Conceição. O fervor cresceu tão rapidamente que o Papa Pio IX enviou uma coroa de ouro para a imagem em 1876. O imponente santuário, de arquitetura neoclássica, domina a paisagem de Braga e é visível a muitos quilômetros de distância.\n\nA COROAÇÃO E O RECONHECIMENTO\n\nA imagem de Nossa Senhora do Sameiro foi solenemente coroada em 1904, durante o cinquentenário do dogma. O santuário tornou-se um centro de peregrinação tão vital que recebeu a visita de São João Paulo II em 1982 e de Bento XVI em 2010. A Rosa de Ouro, alta distinção pontifícia, foi-lhe atribuída por João Paulo II, testemunhando a importância espiritual deste 'Altar de Portugal'.\n\nMENSAGEM ESPIRITUAL\n\nSituado no alto do monte, o Sameiro simboliza a elevação do espírito. Maria, sob este título, convida os fiéis à pureza de coração e à firmeza na fé. É o local onde o povo português renova anualmente sua consagração à Virgem Maria, pedindo sua proteção sobre a nação e as famílias. Nossa Senhora do Sameiro é a Mãe que acolhe, protege e guia o povo português com seu coração imaculado.\n\nORAÇÃO\n\nNossa Senhora do Sameiro, Mãe de bondade e de misericórdia, volvei para nós os vossos olhos de compaixão. Do alto deste monte sagrado, abençoai as nossas famílias, protegei a juventude e intercedei por todos os que sofrem. Que sob vossa guia, possamos sempre caminhar na luz de vosso Filho Jesus. Amém.",
                status: "approved",
                statusNote: "Devoção Tradicional"
            },
            {
                id: "luz_portugal",
                name: "N.S. da Luz",
                country: "Portugal",
                countryFlag: "🇵🇹",
                date: "02 de Fevereiro",
                imageUrl: "/images/ns_luz.png",
                description: "A Mãe da Luz Verdadeira",
                fullDescription: "Devoção de Lisboa que celebra a Candelária. Maria apresenta a Luz (Jesus) ao mundo.",
                status: "approved",
                statusNote: "Devoção Tradicional"
            },
            {
                id: "gietrzwald",
                name: "N.S. de Gietrzwałd",
                country: "Polônia",
                countryFlag: "🇵🇱",
                date: "27 de Junho",
                imageUrl: "https://upload.wikimedia.org/wikipedia/commons/9/92/Gietrzwald_09.jpg",
                description: "Única aparição aprovada na Polônia (1877)",
                fullDescription: "A Única aparição Aprovada na Polônia\n\nGietrzwałd, pequena aldeia na Warmía (nordeste da Polônia), foi o cenário das únicas aparições marianas aprovadas em solo polones pela Santa Sé. Em 1977, cem anos após os eventos, o Bispo de Warmía confirmou oficialmente a sobrenaturalidade das aparições.\n\nAS APARIÇÕES (1877)\n\nEntre 27 de junho e 16 de setembro de 1877, a Virgem Maria apareceu a duas meninas: Justina Szafryńska (12 anos) e Barbara Samulowska (13 anos). Maria sentava sobre uma cadeira de ouro, cercada de luz, sobre um bordo branco (planta local). Usando um vestido branco e um manto azul, segurava o Menino Jesus no colo. Ao redor havia anjos.\n\nA MENSAGEM E O IDIOMA POLONÊS\n\nA escolha do lugar e do idioma foi politicamente significativa: a região estava sob domínio prussiano, e o uso do polones nas escolas e na Igreja havia sido proibido pelo governo. Maria apareceu falando POLONÊS, fortalecendo a identidade nacional e religiosa do povo. A principal mensagem foi: \"Rezai o Rosário todos os dias.\" Uma fonte brotou no local, cujas águas produziram inumeráveis curas.\n\nFRUTOS HISTÓRICOS\n\nAs aparições provocaram uma grande renovação espiritual na Polônia. O Santuário de Gietrzwałd tornou-se um dos maiores centros de peregrinação do país, visitado por São João Paulo II em 1991. A imagem de N.S. de Gietrzwałd foi solenemente coroada pelo Primáz da Polônia.\n\nÓ Maria de Gietrzwałd, que falastepolones num tempo de opressão, ensinai-nos a preservar nossa identidade de filhos de Deus. Intercedei pela Polônia e por todos os povos que sofrem opressão. Amém.",
                status: "approved",
                statusNote: "Única aparição na Polônia aprovada pela Santa Sé (1977)"
            },
            {
                id: "lichen",
                name: "N.S. de Licheń",
                country: "Polônia",
                countryFlag: "🇵🇱",
                date: "2 de Julho",
                imageUrl: "https://i.pinimg.com/564x/17/a9/61/17a9611565c00296f6034664e12b42a4.jpg",
                description: "Dolorosa Rainha da Polônia",
                fullDescription: "A DOLOROSA RAINHA DA POLÔNIA\n\nNossa Senhora de Lichęń é uma das devoções marianas mais comoventes da Polônia. A história desta devoção abrange dois séculos e está ligada ao maior santuário do país.\n\nA PRIMEIRA APARIÇÃO - 1813\n\nDurante a Batalha de Leipzig (1813), um soldado polones gravemente ferido teve uma visão de Nossa Senhora. Ela segurava um escudo com a águia polonesa e prometeu proteger a Polônia se o povo fizesse penitência e se convertesse. O soldado sobreviveu e foi buscar a imagem que havia visto, encontrando-a no santuário de Charlupi.\n\nA SEGUNDA APARIÇÃO - 1850\n\nEm 1850, um pastor chamado Michał Sikatka teve várias aparições de uma Mulher Dolorosa na floresta de Grablin, próxima a Lichęń. Maria, com lágrimas nos olhos e as mãos abertas, pediu que sua imagem fosse encontrada e venerada. O pastor encontrou justamente o quadro do soldado, que havia sido guardado numa floresta. A imagem foi transladada para Lichęń em 1852 e os milagres se multiplicaram.\n\nO MAIOR SANTUÁRIO DA POLÔNIA\n\nO Santuário de Lichęń abriga a maior Basílica da Polônia, concluída em 2004, com capacidade para 7.000 fiéis. Anualmente recebe mais de 1 milhão de peregrinos. A imagem foi solenemente coroada com coroas papais em 1967 e 1999.\n\nÓ Nossa Senhora de Lichęń, Dolorosa Rainha da Polônia, que chorastes pelos pecados do povo, intercedei por toda a nação polonesa e pelos que recorrem a vós. Amém.",
                status: "approved",
                statusNote: "Devoção aprovada e imagem coroada pela Santa Sé em 1967"
            },
            {
                id: "medjugorje",
                name: "Rainha da Paz",
                country: "Bósnia e Herzegovina",
                countryFlag: "🇧🇦",
                date: "25 de Junho",
                imageUrl: "/images/ns_medjugorje.png",
                description: "Centro de espiritualidade e conversão",
                fullDescription: "As aparições iniciaram em 1981. O Papa Francisco autorizou peregrinações oficiais, reconhecendo os frutos espirituais, embora o estudo sobre as aparições continue.",
                status: "complex",
                statusNote: "Peregrinações oficialmente autorizadas pelo Vaticano (2019); Aparições em estudo"
            },
            {
                id: "garabandal",
                name: "N.S. do Carmo de Garabandal",
                country: "Espanha",
                countryFlag: "🇪🇸",
                date: "18 de Junho",
                imageUrl: "/images/ns_garabandal.png",
                description: "Mensagens de conversão (anos 60)",
                fullDescription: "AS APARIÇÕES EM SAN SEBASTIÁN DE GARABANDAL\n\nEntre 1961 e 1965, quatro meninas camponesas - Conchita González, Jacinta González, Mari Cruz González e Mari Loli Mazón - relataram mais de 2.000 aparições de Nossa Senhora na pequena aldeia de San Sebastián de Garabandal, nas montanhas da Cantábria, norte da Espanha. Maria se apresentou como 'Nossa Senhora do Monte Carmelo' (N.S. do Carmo), aparecendo com o hábito carmelita e o escapulário.\n\nAS MENSAGENS PRINCIPAIS\n\nMaria transmitiu duas mensagens principais através das meninas. A primeira mensagem (18 de outubro de 1961) dizia: 'Devemos fazer muitos sacrifícios, fazer muita penitência. Devemos visitar frequentemente o Santíssimo Sacramento. Mas antes de tudo, devemos ser muito bons. Se não fizermos isso, virá um castigo. O cálice já está se enchendo, e se não mudarmos, virá um grande castigo'. A segunda mensagem (18 de junho de 1965) foi ainda mais urgente: 'Muitos cardeais, bispos e sacerdotes estão no caminho da perdição e levam muitas almas com eles. À Eucaristia está sendo dada cada vez menos importância. Devemos evitar a ira de Deus sobre nós com nossos esforços. Se pedirmos Seu perdão com almas sinceras, Ele nos perdoará'.\n\nFENÔMENOS EXTRAORDINÁRIOS\n\nAs aparições foram acompanhadas de fenômenos extraordinários que impressionaram milhares de testemunhas: as meninas entravam em êxtase simultaneamente, caindo de joelhos de forma instantânea; caminhavam de costas em alta velocidade por caminhos rochosos e íngremes sem tropear ou cair; seus rostos se transfiguravam com beleza angelical durante os êxtases; objetos religiosos (terços, medalhas) eram 'beijados' pela Virgem através das meninas e depois exalavam perfume celestial; houve comunhões milagrosas onde hóstias consagradas apareciam visivelmente na língua das videntes, dadas por um anjo. Tudo isso foi testemunhado e documentado por médicos, cientistas, sacerdotes e milhares de peregrinos.\n\nO GRANDE MILAGRE PROFETIZADO\n\nConchita anunciou que haveria um 'Grande Milagre' em Garabandal, que seria o maior milagre que Jesus já realizou para o mundo, visível a todos os presentes e transmitido pela televisão, deixando um sinal permanente que poderá ser fotografado e filmado mas não tocado. Ela sabe a data exata mas só pode anunciá-la 8 dias antes. Este milagre ainda não ocorreu.\n\nPOSIÇÃO DA IGREJA\n\nA posição oficial da Igreja tem sido de prudência e ceticismo. Vários bispos de Santander emitiram declarações negativas (Non constat de supernaturalitate - 'Não consta sobrenaturalidade'). No entanto, a Igreja nunca condenou as aparições definitivamente, e muitos sacerdotes, bispos e cardeais (incluindo o Cardeal Ratzinger, futuro Papa Bento XVI) visitaram Garabandal e expressaram opiniões favoráveis privadamente. As quatro videntes permaneceram fiéis aos seus testemunhos até hoje, vivendo vidas simples e piedosas.\n\nMENSAGEM ESPIRITUAL\n\nIndependentemente do status oficial, as mensagens de Garabandal são profundamente católicas e urgentes: chamado à conversão, à penitência, ao sacrifício, à devoção eucarística, à oração do Rosário, ao uso do Escapulário do Carmo. A devoção nos alerta sobre a gravidade dos tempos e a necessidade de viver em estado de graça, pois não sabemos o dia nem a hora.",
                status: "not-approved",
                statusNote: "Não consta sobrenaturalidade (Non constat)"
            },
            {
                id: "bonate",
                name: "N.S. de Bonate",
                country: "Itália",
                countryFlag: "🇮🇹",
                date: "13 de Maio",
                imageUrl: "/images/ns_bonate.png",
                description: "Rainha da Família (1944)",
                fullDescription: "AS APARIÇÕES A ADELAIDE RONCALLI\n\nEntre maio e outubro de 1944, durante os últimos meses da Segunda Guerra Mundial, Nossa Senhora teria aparecido 13 vezes a Adelaide Roncalli, uma jovem camponesa de 7 anos, na pequena aldeia de Bonate Sotto, perto de Bérgamo, no norte da Itália. As aparições ocorreram num campo de milho, onde Maria se apresentou como 'Rainha da Família' e pediu oração, penitência e a construção de uma capela.\n\nAS MENSAGENS MARIANAS\n\nMaria transmitiu mensagens focadas na santidade da família, na oração do Rosário em família, na importância da penitência e do sacrifício, e na necessidade de viver os sacramentos, especialmente a Confissão e a Eucaristia. Ela alertou sobre os perigos que ameaçavam as famílias cristãs e pediu que as famílias se consagrassem ao seu Imaculado Coração. As mensagens eram simples, diretas e profundamente católicas, adequadas para uma criança transmitir.\n\nO CONTEXTO HISTÓRICO\n\nAs aparições ocorreram num momento dramático da história italiana: a Itália estava dividida pela guerra, famílias estavam sendo destruídas, havia fome, medo e sofrimento generalizado. Além disso, o comunismo ateísta estava avançando na Itália, ameaçando a fé católica e a estrutura familiar tradicional. Neste contexto, as mensagens de Maria sobre a família tinham uma relevância profunda e profética.\n\nA INVESTIGAÇÃO DA IGREJA\n\nO caso de Bonate é complexo e controverso. Inicialmente, houve grande entusiasmo popular, com milhares de peregrinos visitando o local. Uma capela foi construída conforme o pedido de Maria. No entanto, a investigação oficial da Igreja foi longa e complicada. Em 1948, o Bispo de Bérgamo emitiu um decreto negativo, declarando que 'não consta a sobrenaturalidade' das aparições. Fatores que contribuíram para esta decisão incluíram: a pouca idade da vidente (apenas 7 anos), contradições em alguns relatos, pressões políticas da época, e a prudência da Igreja em não aprovar aparições rapidamente.\n\nDEVOÇÃO POPULAR PERSISTENTE\n\nApesar da não aprovação oficial, a devoção a N.S. de Bonate como 'Rainha da Família' persistiu entre muitos fiéis, especialmente na região de Bérgamo. A capela continua sendo visitada por peregrinos que buscam a proteção de Maria para suas famílias. Adelaide Roncalli viveu uma vida simples e piedosa, casou-se, teve filhos e permaneceu fiel ao seu testemunho até sua morte.\n\nMENSAGEM SOBRE A FAMÍLIA\n\nIndependentemente do status oficial das aparições, o título 'Rainha da Família' e as mensagens sobre a santidade da família são profundamente relevantes hoje, quando a instituição familiar enfrenta ataques sem precedentes. Maria é verdadeiramente a Rainha e Protetora de todas as famílias cristãs, e podemos invocá-la sob este título, pedindo sua intercessão para que nossas famílias sejam santuários de amor, fé e oração.",
                status: "not-approved",
                statusNote: "Não aprovada"
            },
            {
                id: "czestochowa",
                name: "N.S. de Częstochowa",
                country: "Polônia",
                countryFlag: "🇵🇱",
                date: "26 de Agosto",
                imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMeNMEJ1EF7ug6VhCbRR0FdKZww-rquE1wJQ&s",
                description: "A Virgem Negra de Jasna Góra - Rainha da Polônia",
                fullDescription: "A VIRGEM NEGRA DE JASNA GÓRA\n\nNossa Senhora de Częstochowa é a padroeira e Rainha da Polônia, venerada no mosteiro de Jasna Góra ('Montanha Luminosa'), em Częstochowa. É o maior santuário mariano do mundo eslavo.\n\nA SAGRADA IMAGEM\n\nO ícone é uma pintura de estilo bizant-oriental, representando Maria como Theotokos (Mãe de Deus) com o Menino Jesus. O rosto de Maria apresenta duas cicatrizes na bochecha direita, resultado de ataques de hussitas em 1430. Ao tentarem restaurar as marcas, os pintores perceberam que elas sempre voltavam, e a Igreja decidiu preservá-las como sinal da participação de Maria nos sofrimentos de seu povo.\n\nO DILÚvio SUECO E A VICTÓRIA MILAGROSA\n\nO episódio mais notável é o 'Dilúvio Sueco' (1655-1660): quando tropas suecas conquistaram quase toda a Polônia, o pequeno mosteiro de Jasna Góra, com apenas 70 soldados e 160 monges, resistiu a 3.000 soldados suecos por 40 dias. A vitória inesperada foi atribuída à intercessão de Nossa Senhora e gerou uma profunda renovação espiritual nacional.\n\nRAINHA DA POLÔNIA\n\nEnergizado pela vitória de Jasna Góra, o Rei João II Casimiro consagrou solenemente a Polônia a Nossa Senhora e a proclamou Rainha da Polônia em 1656. A imagem foi coroada com coroas de ouro pelo Papa Clemente XI em 1717. São João Paulo II, polones de nascimento, tinha profunda devoção à Virgem Negra e visitou o santuário várias vezes como Papa.\n\nÓ Nossa Senhora de Częstochowa, Rainha e Mãe da Polônia, que fostes luz e esperança do povo nos momentos mais escuros de sua história, intercedei por nós. Amém.",
                status: "approved",
                statusNote: "Coroada solenemente pelo Papa Clemente XI em 1717; Rainha da Polônia"
            },
            {
                id: "laus",
                name: "N.S. de Laus",
                country: "França",
                countryFlag: "🇫🇷",
                date: "1 de Maio",
                imageUrl: "/images/ns_laus.png",
                description: "Refúgio dos pecadores (1664-1718)",
                fullDescription: "AS APARIÇÕES MAIS LONGAS DA HISTÓRIA\n\nNossa Senhora de Laus (Notre-Dame du Laus) é protagonista de uma das histórias de aparições marianas mais extraordinárias e únicas da história da Igreja: as aparições duraram 54 anos consecutivos (1664-1718), tornando-se as mais longas aparições marianas já registradas. Elas ocorreram nos Alpes franceses, perto da cidade de Gap, no Vale de Avançon, região de Hautes-Alpes.\n\nBENOÎTE RENCUREL - A PASTORINHA VIDENTE\n\nA vidente foi Benoîte Rencurel (1647-1718), uma humilde pastorinha órfã e analfabeta que vivia em extrema pobreza. Aos 16 anos, em maio de 1664, enquanto cuidava de suas ovelhas, Benoîte teve a primeira aparição de Maria, que se apresentou como 'Minha Mãe de Laus' e lhe disse: 'Vai a Laus, encontrarás uma capela onde sentirás bons perfumes'. Benoîte obedeceu e encontrou uma pequena capela em ruínas dedicada a N.S. da Boa Encontro (Notre-Dame de Bon Rencontre), onde sentiu um perfume celestial.\n\nA MISSÃO DE CONVERSÃO\n\nMaria revelou a Benoîte sua missão: 'Quero que aqui seja construído um santuário onde meu Filho será muito honrado e onde muitos pecadores se converterão'. As aparições continuaram regularmente por décadas, e Maria instruiu Benoîte sobre a importância da conversão dos pecadores, da confissão sacramental, da oração e da penitência. Benoîte tornou-se uma conselheira espiritual procurada por milhares de pessoas, incluindo bispos e nobres, embora ela mesma permanecesse analfabeta e humilde.\n\nO ÓLEO MILAGROSO\n\nUm dos aspectos mais notáveis da devoção a N.S. de Laus é o óleo da lâmpada do santuário, que Maria indicou como sinal de cura. Inúmeros milagres de cura física e espiritual foram atribuídos a este óleo ao longo dos séculos. Até hoje, peregrinos levam pequenas ampolas do óleo benzido como sacramental.\n\nRECONHECIMENTO APÓS SÉCULOS\n\nEmbora a devoção tenha florescido desde o século XVII, o reconhecimento oficial das aparições pela Igreja demorou séculos. Somente em 4 de maio de 2008, após um rigoroso estudo histórico e teológico, o Bispo de Gap e Embrun, Mons. Jean-Michel di Falco Léandri, declarou oficialmente que as aparições de N.S. de Laus têm caráter sobrenatural. Este reconhecimento tardio deveu-se à necessidade de investigar meticulosamente documentos históricos de quatro séculos. O Santuário de N.S. de Laus é hoje um importante centro de peregrinação nos Alpes franceses, conhecido como 'Santuário da Reconciliação'. A devoção nos ensina que Maria é refúgio e esperança para todos os pecadores, e que nunca é tarde para a conversão e para experimentar a misericórdia de Deus através da intercessão maternal de Nossa Senhora.",
                status: "approved",
                statusNote: "Aprovada em 2008 pelo Bispo de Gap após longo estudo histórico"
            },
            {
                id: "vagos",
                name: "N.S. de Vagos",
                country: "Portugal",
                countryFlag: "🇵🇹",
                date: "Segunda-feira de Pentecostes",
                imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfYZHeySKQyS7CFhFPtAlLKHfVu0I5NDNmig&s",
                description: "A Padroeira dos Pescadores e da Ria de Aveiro",
                fullDescription: "A SENHORA QUE VEIO PELAS ONDAS\n\nA devoção a Nossa Senhora de Vagos é uma das mais singulares de Portugal, profundamente ligada à identidade dos pescadores e trabalhadores da Ria de Aveiro. O seu santuário em Vagos é um centro de fé que remonta a lendas medievais e milagres costeiros.\n\nO ACHADO MILAGROSO\n\nSegundo a tradição, a imagem de Nossa Senhora de Vagos foi encontrada nas dunas da praia por pescadores no século XII. Diz a lenda que a imagem teria sido trazida pelas ondas do mar e, por diversas vezes, ao ser levada para outras igrejas, voltava misteriosamente para o local onde foi encontrada. Compreendendo ser este o desejo da Virgem, o povo ergueu ali uma ermida que, com o tempo, tornou-se o grande santuário atual.\n\nA SEGUNDA-FEIRA DE PENTECOSTES\n\nA festa de Nossa Senhora de Vagos celebra-se na Segunda-feira de Pentecostes, atraindo multidões de toda a região centro de Portugal. É famosa pela 'Benção dos Gados' e das embarcações, onde os devotos pedem proteção para suas subsistências. A imagem é considerada 'Milagrosa' e 'Eficaz', especialmente em tempos de tempestades no mar ou secas na terra.\n\nSIMBOLISMO E FÉ\n\nMaria em Vagos é a Mãe que não abandona aqueles que enfrentam o mar bravio. Ela representa a porto seguro onde os pescadores, após longas e perigosas jornadas, encontram descanso e gratidão. A devoção ensina que, mesmo nas ondas mais violentas da vida, Maria permanece ao nosso lado, guiando-nos até a margem segura.\n\nORAÇÃO\n\nÓ Virgem de Vagos, Mãe dos navegantes e protetora das nossas famílias, vós que viestes pelo mar para nos abençoar, olhai por nós nas tempestades da vida. Dai-nos coragem, protegei nosso trabalho e guiai-nos sempre para o porto seguro que é Jesus. Amém.",
                status: "approved",
                statusNote: "Devoção Tradicional"
            },
            {
                id: "lapa_portugal",
                name: "N.S. da Lapa",
                country: "Portugal",
                countryFlag: "🇵🇹",
                date: "15 de Agosto",
                imageUrl: "https://lojasaojose.pt/8039-large_default/nossa-senhora-da-lapa.jpg",
                images: [
                    "https://anastpaul.com/wp-content/uploads/2021/06/our-lady-of-the-grotto-da-lapa.jpg?w=510",
                    "https://lojasaojose.pt/8039-large_default/nossa-senhora-da-lapa.jpg",
                    "https://upload.wikimedia.org/wikipedia/commons/8/84/Lapa_Our_Lady.JPG"
                ],
                description: "A Senhora da Gruta e o Brilho da Fé Jesuíta",
                fullDescription: "A PROFUNDA DEVOÇÃO DA GRUTA\n\nNossa Senhora da Lapa é uma das devoções mais tradicionais e influentes do mundo luso-brasileiro. Sua história começou em 1498, em Sernancelhe (Portugal), quando uma pequena pastorinha chamada Joana encontrou uma imagem escondida em uma 'lapa' (uma fenda na rocha ou gruta).\n\nJOANA E O MILAGRE DA ROCHA\n\nJoana era muda de nascimento. Ao encontrar a imagem e limpá-la com carinho, ela milagrosamente recuperou a fala para contar à sua mãe sobre o 'brilho' que vira na gruta. A imagem havia sido escondida ali séculos antes por cristãos que fugiam de perseguições. A notícia do milagre espalhou-se, e o local tornou-se um dos santuários mais importantes de Portugal, rivalizando em importância com Santiago de Compostela na época.\n\nOS JESUÍTAS E O PADRE ANCHIETA\n\nA Ordem dos Jesuítas assumiu o santuário e tornou-se a grande propagadora da devoção. O Padre José de Anchieta, o 'Apóstolo do Brasil', tinha uma devoção pessoal imensa a Nossa Senhora da Lapa. Ele trouxe o título para as terras brasileiras, fundando igrejas e colégios sob sua proteção. A Lapa tornou-se símbolo da educação e da evangelização jesuíta, marcando a história de cidades como Rio de Janeiro, São Paulo e Minas Gerais.\n\nMENSAGEM ESPIRITUAL\n\nMaria na Lapa nos lembra que a fé pode brilhar mesmo nos lugares mais escondidos e escuros. Assim como a imagem foi preservada na rocha, nossa fé deve ser sólida e inabalável. Ela é a 'Doutora da Fé' que nos ensina a encontrar Deus na simplicidade e no silêncio do coração.\n\nORAÇÃO\n\nÓ Senhora da Lapa, que na escuridão da gruta preservastes vossa luz para a pequena pastorinha, iluminai as nossas mentes e corações. Pela intercessão de São José de Anchieta, vosso servo fiel, ajudai-nos a ser verdadeiros discípulos de vosso Filho e a levar o brilho da fé a todos os que vivem nas sombras. Amém.",
                status: "approved",
                statusNote: "Devoção Tradicional"
            }
        ]
    },
    {
        name: "Ásia",
        emoji: "🌏",
        iconUrl: "/images/asia_icon.png",
        devotions: [
            {
                id: "la_vang",
                name: "N.S. de La Vang",
                country: "Vietnã",
                countryFlag: "🇻🇳",
                date: "15 de Agosto",
                imageUrl: "/images/ns_la_vang.png",
                description: "Símbolo da resistência católica vietnamita",
                fullDescription: "Em 1798, Maria consolou católicos perseguidos na floresta de La Vang. É o grande santuário nacional do Vietnã.",
                status: "approved",
                statusNote: "Santuário elevado a Basílica pelo Papa João XXIII em 1961"
            },
            {
                id: "akita",
                name: "N.S. de Akita",
                country: "Japão",
                countryFlag: "🇯🇵",
                date: "13 de Outubro",
                imageUrl: "/images/ns_akita.png",
                description: "Estátua que chorou (1973)",
                fullDescription: "Aprovada pelo bispo local. Uma estátua chorou lágrimas e sangue 101 vezes. As mensagens alertam sobre a crise na fé e no mundo.",
                status: "approved",
                statusNote: "Reconhecida como sobrenatural pelo Bispo de Niigata em 1984"
            },
            {
                id: "sheshan",
                name: "N.S. de Sheshan",
                country: "China",
                countryFlag: "🇨🇳",
                date: "24 de Maio",
                imageUrl: "/images/ns_sheshan.png",
                description: "Auxiliadora dos Cristãos da China",
                fullDescription: "O Santuário de Sheshan em Xangai é o centro da fé católica na China. Em 24 de maio, a Igreja universal reza pela Igreja na China.",
                status: "approved",
                statusNote: "Santuário nacional; oração pela China composta pelo Papa Bento XVI"
            },
            {
                id: "velankanni",
                name: "N.S. da Boa Saúde",
                country: "Índia",
                countryFlag: "🇮🇳",
                date: "8 de Setembro",
                imageUrl: "/images/ns_velankanni.png",
                description: "A 'Lourdes do Oriente'",
                fullDescription: "Vailankanni (Velankanni) é um dos maiores centros de peregrinação da Ásia. Três milagres (aparições e salvamento de marinheiros) no século XVI deram origem à devoção.",
                status: "approved",
                statusNote: "Santuário Basílica"
            },
            {
                id: "soufanieh",
                name: "N.S. de Soufanieh",
                country: "Síria",
                countryFlag: "🇸🇾",
                date: "26 de Novembro",
                imageUrl: "/images/ns_soufanieh.png",
                description: "O milagre do azeite em Damasco (1982)",
                fullDescription: "Fenômeno recente em Damasco. Um ícone e as mãos da vidente Myrna Nazzour exalam azeite puro. As mensagens pedem a unidade entre católicos e ortodoxos (a Páscoa unificada).",
                status: "pending",
                statusNote: "Aprovada pelos bispos locais (Católico e Ortodoxo)"
            },
            {
                id: "libano",
                name: "N.S. do Líbano",
                country: "Líbano",
                countryFlag: "🇱🇧",
                date: "1 de Maio",
                imageUrl: "/images/ns_libano.png",
                description: "Harissa - Rainha do Líbano",
                fullDescription: "O santuário de Harissa, com a imensa estátua de Maria dominando a baía de Jounieh, é o símbolo da fé cristã no Líbano e local de peregrinação também para muçulmanos.",
                status: "approved",
                statusNote: "Santuário Nacional; Rainha do Líbano coroada em 1908"
            },
            {
                id: "naju",
                name: "N.S. de Naju",
                country: "Coreia do Sul",
                countryFlag: "🇰🇷",
                date: "19 de Outubro",
                imageUrl: "/images/ns_naju.png",
                description: "Lágrimas de sangue e milagres eucarísticos",
                fullDescription: "Fenômenos iniciados em 1985 com Julia Kim. A estátua chorou sangue e hóstias se transformaram em carne. A Igreja local (Arcebispo de Gwangju) emitiu decretos negativos, não reconhecendo a sobrenaturalidade.",
                status: "not-approved",
                statusNote: "Rejeitada pela Igreja Local"
            },
            {
                id: "lipa",
                name: "Maria, Medianeira de Todas as Graças",
                country: "Filipinas",
                countryFlag: "🇵🇭",
                date: "12 de Setembro",
                imageUrl: "/images/ns_filipinas.png",
                description: "Fenômeno das pétalas (1948)",
                fullDescription: "Chuva de pétalas em 1948. Devoção imensa, mas o Vaticano declarou recentemente (2024) que não consta sobrenaturalidade.",
                status: "not-approved",
                statusNote: "Julgamento negativo do Vaticano (2024)"
            },
            {
                id: "tra_kieu",
                name: "N.S. de Trà Kiệu",
                country: "Vietnã",
                countryFlag: "🇻🇳",
                date: "31 de Maio",
                imageUrl: "/images/ns_tra_kieu.png",
                description: "Proteção contra canhões (1885)",
                fullDescription: "Durante a perseguição aos cristãos em 1885, a Virgem apareceu sobre a igreja de Trà Kiệu, protegendo-a dos ataques de canhão do exército inimigo. Os soldados viam uma 'mulher de branco' no telhado que impedia os projéteis de atingir o alvo.",
                status: "approved",
                statusNote: "Santuário Diocesano Milagroso"
            }
        ]
    },
    {
        name: "África e Oriente Médio",
        emoji: "🌍",
        iconUrl: "/images/africa_icon.png",
        devotions: [
            {
                id: "kibeho",
                name: "N.S. de Kibeho",
                country: "Ruanda",
                countryFlag: "🇷🇼",
                date: "28 de Novembro",
                imageUrl: "/images/ns_kibeho.png",
                description: "Mãe do Verbo - Única aparição aprovada na África",
                fullDescription: "Aparições (1981-1989) que profetizaram o genocídio de Ruanda. Mensagem urgente de conversão, oração e jejum.",
                status: "approved",
                statusNote: "Aprovada em 2001 pelo Bispo de Gikongoro; única na África"
            },
            {
                id: "zeitoun",
                name: "N.S. de Zeitoun",
                country: "Egito",
                countryFlag: "🇪🇬",
                date: "2 de Abril",
                imageUrl: "/images/ns_zeitoun.png",
                description: "A Virgem de Luz (1968)",
                fullDescription: "Aparições públicas e silenciosas sobre a cúpula de uma igreja no Cairo, vistas por milhões. Aprovada pela Igreja Copta e respeitada pela Católica.",
                status: "approved",
                statusNote: "Aprovada pela Igreja Ortodoxa Copta"
            },
            {
                id: "africa",
                name: "N.S. da África",
                country: "Argélia",
                countryFlag: "🇩🇿",
                date: "30 de Abril",
                imageUrl: "/images/ns_africa.png",
                description: "Madame l'Afrique - Argel",
                fullDescription: "A Basílica de N.S. da África em Argel traz a inscrição: 'N.S. da África, rogai por nós e pelos muçulmanos'. Símbolo de diálogo e proteção no norte da África.",
                status: "approved",
                statusNote: "Basílica Histórica"
            }
        ]
    },
    {
        name: "Américas",
        emoji: "🌎",
        iconUrl: "/images/americas_icon.png",
        devotions: [
            // BRASIL - REGIONAIS
            {
                id: "mel",
                name: "N.S. do Mel",
                country: "Brasil (Paraná)",
                countryFlag: "🇧🇷",
                date: "13 de Maio",
                imageUrl: "/images/ns_mel.png",
                description: "Fenômeno em Mirassol/SP e devoção PR",
                fullDescription: "Imagem que verte mel, sal e azeite. Fenômeno impressionante acompanhado com prudência pela Igreja.",
                status: "pending",
                statusNote: "Em Estudo"
            },
            // REINADO DAS AMÉRICAS
            {
                id: "guadalupe",
                name: "N.S. de Guadalupe",
                country: "México",
                countryFlag: "🇲🇽",
                date: "12 de Dezembro",
                imageUrl: "/images/ns_guadalupe.png",
                description: "Imperatriz das Américas",
                fullDescription: "A aparição que mudou a história do continente em 1531. A imagem milagrosa na tilma de Juan Diego permanece inexplicável pela ciência.",
                status: "approved",
                statusNote: "Milagre de 1531; Padroeira das Américas declarada por diversos Papas"
            },
            {
                id: "lujan",
                name: "N.S. de Luján",
                country: "Argentina",
                countryFlag: "🇦🇷",
                date: "8 de Maio",
                imageUrl: "/images/ns_lujan.png",
                description: "Padroeira da Argentina - Protetora das Américas",
                fullDescription: "A imagem de Nossa Senhora de Luján tem uma história milagrosa que remonta a 1630. Um carregamento de duas imagens de Maria estava sendo levado de Buenos Aires para Santiago del Estero. No meio do caminho, em Luján, a carroça parou e não quis mais andar. Só quando retiraram uma das caixas, que continha a pequena imagem da Imaculada Conceição, é que os bois voltaram a caminhar. Entendeu-se que a Virgem desejava ficar ali. Hoje, seu santuário é o maior centro de peregrinação da Argentina, visitado por milhões que buscam sua intercessão como Mãe e Padroeira da nação.",
                status: "approved",
                statusNote: "Milagre de 1630; Imagem coroada pelo Papa Leão XIII em 1887"
            },
            {
                id: "copacabana",
                name: "N.S. de Copacabana",
                country: "Bolívia",
                countryFlag: "🇧🇴",
                date: "5 de Agosto",
                imageUrl: "/images/ns_copacabana.png",
                description: "Rainha da Bolívia - Padroeira dos Andes",
                fullDescription: "Venerada no majestoso santuário às margens do Lago Titicaca. A imagem foi esculpida pelo índio Francisco Tito Yupanqui em 1582, inspirada em uma visão. É o coração espiritual da Bolívia e símbolo da união entre a fé cristã e as raízes profundas do povo andino. Seus milagres atravessam séculos, atraindo peregrinos de todo o continente.",
                status: "approved",
                statusNote: "Padroeira da Bolívia; imagem coroada em 1925"
            },
            {
                id: "rosario_san_nicolas",
                name: "N.S. do Rosário de San Nicolás",
                country: "Argentina",
                countryFlag: "🇦🇷",
                date: "25 de Setembro",
                imageUrl: "/images/ns_rosario_san_nicolas.png",
                description: "San Nicolás - Mensagem de esperança e conversão",
                fullDescription: "Nossa Senhora do Rosário de San Nicolás é uma devoção nascida de uma série de aparições a Gladys Quiroga de Motta, iniciadas em 1983. Maria pediu a construção de um grande santuário às margens do Rio Paraná e a renovação da oração do Rosário. As mensagens, focadas na paz, na fé e na volta a Deus, foram oficialmente reconhecidas pela Igreja como de caráter sobrenatural em 2016, tornando-se um dos maiores fenômenos de fé da Argentina contemporânea.",
                status: "approved",
                statusNote: "Reconhecida como sobrenatural pelo Bispo de San Nicolás em 2016"
            },
            {
                id: "bom_sucesso",
                name: "N.S. do Bom Sucesso",
                country: "Equador",
                countryFlag: "🇪🇨",
                date: "2 de Fevereiro",
                imageUrl: "/images/ns_bom_sucesso.png",
                description: "Profecias de Quito",
                fullDescription: "Aparições do século XVII com profecias impressionantes sobre a crise da fé no século XX.",
                status: "approved",
                statusNote: "Aprovação de culto secular; profecias históricas reconhecidas"
            },
            {
                id: "quinche",
                name: "N.S. do Quinche",
                country: "Equador",
                countryFlag: "🇪🇨",
                date: "21 de Novembro",
                imageUrl: "/images/ns_quinche.jpg",
                description: "Padroeira do Equador",
                fullDescription: "Devoção popular equatoriana, protetora contra desastres naturais.",
                status: "approved",
                statusNote: "Padroeira do Equador; imagem coroada em 1943"
            },
            {
                id: "coromoto",
                name: "N.S. de Coromoto",
                country: "Venezuela",
                countryFlag: "🇻🇪",
                date: "11 de Setembro",
                imageUrl: "/images/ns_coromoto.png",
                description: "Padroeira da Venezuela (1652)",
                fullDescription: "Apareceu ao cacique Coromoto e sua família. Uma minúscula imagem ficou nas mãos do cacique. Símbolo da fé venezuelana.",
                status: "approved",
                statusNote: "Padroeira da Venezuela; declarada pelo Papa Pio XII em 1942"
            },
            {
                id: "caridade",
                name: "N.S. da Caridade",
                country: "Cuba",
                countryFlag: "🇨🇺",
                date: "8 de Setembro",
                imageUrl: "/images/ns_caridade_cobre.png",
                description: "La Mambisa - Padroeira de Cuba",
                fullDescription: "Encontrada no mar por três homens (dois índios e um escravo negro) em 1612. Símbolo de identidade e esperança para todos os cubanos.",
                status: "approved",
                statusNote: "Padroeira de Cuba; declarada pelo Papa Bento XV em 1916"
            },
            {
                id: "caacupe",
                name: "N.S. de Caacupé",
                country: "Paraguai",
                countryFlag: "🇵🇾",
                date: "8 de Dezembro",
                imageUrl: "/images/ns_caacupe.png",
                description: "Padroeira do Paraguai",
                fullDescription: "Imagem esculpida por um índio guarani convertido em gratidão por ter sido salvo de inimigos.",
                status: "approved",
                statusNote: "Padroeira do Paraguai; visitada por São João Paulo II e Papa Francisco"
            },
            {
                id: "champion",
                name: "N.S. do Bom Socorro",
                country: "Estados Unidos",
                countryFlag: "🇺🇸",
                date: "9 de Outubro",
                imageUrl: "/images/ns_bom_socorro.png",
                description: "Única aparição aprovada nos EUA",
                fullDescription: "Em Wisconsin (1859), Maria pediu a educação religiosa das crianças. 'Rezem e ensinem'.",
                status: "approved",
                statusNote: "Primeira aparição nos EUA aprovada por um bispo (2010)"
            },
            {
                id: "america",
                name: "N.S. da América",
                country: "Estados Unidos",
                countryFlag: "🇺🇸",
                date: "26 de Setembro",
                imageUrl: "/images/ns_america.png",
                description: "Pureza e habitação da Trindade",
                fullDescription: "Aparições a Irmã Mildred Neuzil (anos 50). Foco na pureza interior e na família. Reconhecida por muitos bispos americanos.",
                status: "pending",
                statusNote: "Aprovação de culto local"
            },
            {
                id: "cuapa",
                name: "N.S. de Cuapa",
                country: "Nicarágua",
                countryFlag: "🇳🇮",
                date: "8 de Maio",
                imageUrl: "/images/ns_cuapa.png",
                description: "Reconciliação e paz (1980)",
                fullDescription: "Aparições a Bernardo Martinez, camponês e sacristão. Mensagem de paz numa Nicarágua dividida pela guerra civil. Aprovada pelos bispos.",
                status: "approved",
                statusNote: "Reconhecida como sobrenatural pelos bispos da Nicarágua em 1982"
            },
            {
                id: "itati",
                name: "N.S. de Itatí",
                country: "Argentina",
                countryFlag: "🇦🇷",
                date: "9 de Julho",
                imageUrl: "/images/ns_itati.png",
                description: "Rainha do Rio Paraná - A Virgem Guarani",
                fullDescription: "Nossa Senhora de Itatí é uma das devoções mais amadas da Argentina. A imagem, encontrada no século XVII perto do Rio Paraná, é venerada na majestosa Basílica de Itatí, em Corrientes. O nome 'Itatí' vem do guarani e significa 'ponta de pedra' ou 'pedra branca'. Maria é invocada como protetora contra secas e inundações, e sua beleza com traços indígenas simboliza a evangelização do povo guarani.",
                status: "approved",
                statusNote: "Santuário Histórico; Imagem coroada em 1900"
            },
            {
                id: "san_juan_lagos",
                name: "N.S. de San Juan de los Lagos",
                country: "México",
                countryFlag: "🇲🇽",
                date: "2 de Fevereiro",
                imageUrl: "/images/ns_san_juan_lagos.png",
                description: "Segunda maior peregrinação do México",
                fullDescription: "Depois de Guadalupe, é o santuário mais visitado do México. A pequena imagem milagrosa é famosa por reviver uma menina trapezista em 1623.",
                status: "approved"
            },
            {
                id: "divina_pastora",
                name: "Divina Pastora",
                country: "Venezuela",
                countryFlag: "🇻🇪",
                date: "14 de Janeiro",
                imageUrl: "/images/ns_divina_pastora.png",
                description: "A Pastora das Almas - Procissão gigante",
                fullDescription: "A procissão da Divina Pastora em Barquisimeto reúne milhões de pessoas, sendo uma das maiores do mundo. A devoção nasceu na Espanha (Sevilha) mas encontrou na Venezuela seu maior fervor.",
                status: "approved"
            },
            // BRASIL - MAIS TÍTULOS
            {
                id: "itauna",
                name: "N.S. de Itaúna",
                country: "Brasil (MG)",
                countryFlag: "🇧🇷",
                date: "27 de Julho",
                imageUrl: "/images/ns_itauna.png",
                description: "Aparição na Gruta (1955)",
                fullDescription: "A APARIÇÃO NA GRUTA DE ITAÚNA\n\nNossa Senhora de Itaúna é venerada devido a uma série de aparições marianas que teriam ocorrido em 1955 na cidade de Itaúna, Minas Gerais, em uma gruta natural localizada em uma região rural da cidade. As aparições foram relatadas por três crianças humildes, que afirmavam ver e conversar com a Virgem Maria, causando grande comoção na região e atraindo milhares de devotos.\n\nAS CRIANÇAS VIDENTES\n\nEm julho de 1955, três crianças - cujos nomes foram preservados pela comunidade local - estavam brincando próximo a uma gruta quando viram uma 'bela Senhora' vestida de branco e azul, com um rosário nas mãos e cercada de luz. A Senhora sorria para elas com ternura maternal e lhes falava com voz suave. As crianças, inicialmente assustadas, logo se sentiram envolvidas por profunda paz e amor. As aparições se repetiram várias vezes ao longo de semanas, sempre no mesmo local e horário.\n\nAS MENSAGENS DE PAZ\n\nSegundo os relatos das crianças, Nossa Senhora transmitiu mensagens simples mas profundas: pediu oração constante, especialmente o Rosário em família; alertou sobre a necessidade de conversão e penitência; pediu paz para o mundo, que na época vivia as tensões da Guerra Fria; e solicitou que fosse construída uma capela no local das aparições para que os fiéis pudessem vir rezar e buscar consolo. As mensagens eram típicas das aparições marianas: chamado à oração, à conversão, à paz e ao amor.\n\nA INVESTIGAÇÃO E A PRUDÊNCIA DA IGREJA\n\nComo é procedimento padrão em casos de alegadas aparições, a Diocese de Divinópolis iniciou uma investigação cuidadosa. Foram ouvidas as crianças, testemunhas, e analisados os frutos espirituais. Embora não tenha havido uma aprovação formal declarando a sobrenaturalidade das aparições, a Igreja permitiu o culto no local, reconhecendo os frutos de conversão, oração e devoção mariana que floresceram. O status atual é de 'culto permitido', o que significa que os fiéis podem venerar Nossa Senhora no local, mas sem obrigação de crer nas aparições.\n\nA GRUTA E O SANTUÁRIO\n\nNo local das aparições foi construída uma capela e posteriormente um santuário que acolhe os devotos. A gruta natural tornou-se um lugar de oração e peregrinação, especialmente durante o mês de julho, quando se celebra a festa de N.S. de Itaúna. Milhares de fiéis visitam o santuário anualmente, buscando graças, curas e paz espiritual. O ambiente da gruta, cercado pela natureza, convida ao recolhimento e à oração contemplativa.\n\nDEVOÇÃO E FRUTOS ESPIRITUAIS\n\nIndependentemente do status oficial das aparições, a devoção a N.S. de Itaúna produziu frutos espirituais abundantes: conversões, curas espirituais e físicas relatadas, fortalecimento da fé, aumento da prática da oração do Rosário, e um renovado amor à Virgem Maria. Muitos devotos testemunham graças recebidas através da intercessão de Nossa Senhora venerada neste título.\n\nMENSAGEM DE PAZ PARA NOSSO TEMPO\n\nA mensagem central de N.S. de Itaúna - oração e paz - permanece profundamente relevante. Em um mundo marcado por violência, divisões, guerras e inquietação, Maria nos chama à oração como caminho para a paz verdadeira. A paz que Maria oferece não é a ausência de conflitos externos, mas a paz interior que vem de Deus e que nenhuma circunstância pode tirar. Nossa Senhora de Itaúna nos ensina que a paz no mundo começa com a paz nos corações, e esta paz se alcança através da oração, da conversão e da confiança em Deus.",
                status: "pending",
                statusNote: "Culto permitido"
            },
            {
                id: "brotas",
                name: "N.S. das Brotas",
                country: "Brasil (PR/SP)",
                countryFlag: "🇧🇷",
                date: "27 de Dezembro",
                imageUrl: "/images/ns_brotas.jpg",
                description: "Padroeira do Gado e da Agricultura",
                fullDescription: "O MILAGRE DO INCÊNDIO E DOS BROTOS VERDES\n\nNossa Senhora das Brotas é uma devoção mariana de origem portuguesa que se enraizou profundamente no Brasil, especialmente na região de Piraí do Sul, no Paraná, e em algumas localidades de São Paulo. O nome 'Brotas' (ou 'Brotos') refere-se a um milagre extraordinário relacionado a um incêndio e ao renascimento da vegetação, simbolizando a proteção de Maria e a renovação da vida.\n\nA ORIGEM PORTUGUESA\n\nA devoção a Nossa Senhora das Brotas tem raízes em Portugal, onde existe um santuário mariano com este título. Segundo a tradição portuguesa, a devoção surgiu quando uma imagem de Nossa Senhora foi encontrada milagrosamente em meio a brotos verdes que cresciam em um local improvável. A devoção foi trazida ao Brasil pelos colonizadores e imigrantes portugueses, que a estabeleceram em suas novas terras, especialmente em regiões agrícolas e de criação de gado.\n\nO MILAGRE EM PIRAÍ DO SUL\n\nA história mais conhecida de N.S. das Brotas no Brasil ocorreu em Piraí do Sul, Paraná. Segundo a tradição local, havia uma capela ou casa onde se venerava um quadro ou imagem de Nossa Senhora das Brotas. Um grande incêndio devastou o local, destruindo tudo. Quando os moradores foram verificar os destroços, encontraram o quadro de Nossa Senhora completamente intacto, sem nenhum sinal de queimadura ou dano, em meio às cinzas e ruínas. Mais impressionante ainda: ao redor do quadro, brotavam pequenos ramos verdes, sinais de vida nova em meio à destruição. Este duplo milagre - a preservação da imagem e o surgimento dos brotos - foi interpretado como um sinal claro da proteção maternal de Maria e de sua promessa de renovação e esperança.\n\nPADROEIRA DO GADO E DA AGRICULTURA\n\nDevido à sua associação com a vegetação (brotos verdes) e à proteção milagrosa demonstrada, Nossa Senhora das Brotas foi adotada como padroeira dos agricultores, pecuaristas e criadores de gado na região. Os fazendeiros consagravam suas terras, plantações e rebanhos à proteção de Maria sob este título. Festas eram realizadas, especialmente em 27 de dezembro, com procissões pelos campos e fazendas, benção dos animais e das colheitas, e renovação da consagração a Nossa Senhora.\n\nSIMBOLISMO DOS BROTOS\n\nO simbolismo dos 'brotos' é profundamente espiritual e esperançoso. Os brotos representam vida nova, renovação, ressurreição, esperança. Mesmo após a destruição do incêndio (símbolo das provações, pecados, sofrimentos da vida), Maria faz brotar vida nova. Ela é a Mãe que renova, que traz esperança onde parecia haver apenas cinzas, que faz florescer a graça onde havia morte espiritual. Os brotos verdes também simbolizam a fertilidade da terra abençoada por Deus através da intercessão de Maria.\n\nDEVOÇÃO RURAL E FÉ SIMPLES\n\nA devoção a N.S. das Brotas expressa a fé simples, profunda e confiante do povo rural brasileiro. Os agricultores e pecuaristas, dependentes das condições climáticas e dos ciclos da natureza, encontram em Maria uma mãe protetora que cuida de suas necessidades materiais e espirituais. A devoção nos ensina a confiar na Providência Divina, a consagrar nosso trabalho a Deus através de Maria, e a crer que, mesmo nas situações mais devastadoras (como um incêndio que destrói tudo), Maria pode fazer brotar vida nova, esperança e bênçãos.\n\nMENSAGEM DE RENOVAÇÃO\n\nNossa Senhora das Brotas nos convida a crer na possibilidade de recomeço, de renovação espiritual. Não importa quão destruída esteja nossa vida pelo pecado, pelo sofrimento ou pelas circunstâncias adversas - Maria pode fazer brotar em nós a vida nova da graça. Ela é a Mãe que protege o que é essencial (como protegeu sua própria imagem do fogo) e que faz florescer a esperança mesmo em meio às cinzas. A devoção nos ensina que com Maria, sempre há esperança de renovação.",
                status: "approved"
            },
            {
                id: "santa_cabeca",
                name: "N.S. de Santa Cabeça",
                country: "Brasil (SP)",
                countryFlag: "🇧🇷",
                date: "8 de Dezembro",
                imageUrl: "/images/ns_santa_cabeca.jpg",
                description: "A cabeça milagrosa do rio Tietê",
                fullDescription: "Em 1829, pescadores encontraram apenas a cabeça de uma imagem no Rio Tietê. Milagres começaram a acontecer e um santuário foi construído em Cachoeira Paulista. É invocada para curar dores de cabeça e doenças mentais.",
                status: "approved",
                statusNote: "Santuário Diocesano"
            },
            {
                id: "bom_despacho",
                name: "N.S. do Bom Despacho",
                country: "Brasil (MG)",
                countryFlag: "🇧🇷",
                date: "Mai",
                imageUrl: "/images/ns_bom_despacho.png",
                description: "Padroeira de Bom Despacho",
                fullDescription: "Devoção portuguesa (dedicada à prontidão de Maria em atender, 'despachar' os pedidos). Muito forte em Minas Gerais.",
                status: "approved"
            },
            {
                id: "cafe",
                name: "N.S. do Café",
                country: "Brasil (SP/MG)",
                countryFlag: "🇧🇷",
                date: "15 de Agosto",
                imageUrl: "/images/ns_cafe.png",
                description: "Protetora dos Cafeicultores",
                fullDescription: "A PADROEIRA DOS CAFEZAIS\n\nNossa Senhora do Café é uma devoção mariana tipicamente brasileira, nascida no coração das regiões cafeeiras de São Paulo e Minas Gerais durante o auge do ciclo do café no Brasil, entre os séculos XIX e XX. Esta devoção expressa a fé profunda dos agricultores e trabalhadores rurais que confiavam à proteção de Maria suas plantações, colheitas e sustento familiar.\n\nORIGEM DA DEVOÇÃO\n\nA devoção surgiu espontaneamente entre os colonos imigrantes italianos, portugueses e brasileiros que trabalhavam nas grandes fazendas de café do interior paulista e sul de Minas Gerais. Estes trabalhadores, em sua maioria católicos fervorosos, trouxeram consigo a tradição de consagrar suas atividades laborais à Virgem Maria. Diante dos desafios da agricultura - pragas, secas, geadas, oscilações de preços - os cafeicultores encontraram em Maria uma mãe protetora e intercessora. Muitas capelas rurais foram erguidas nas fazendas, onde a imagem de Nossa Senhora era venerada, frequentemente coroada e cercada por ramos de café.\n\nSIMBOLISMO E ICONOGRAFIA\n\nA iconografia de N.S. do Café geralmente apresenta Maria com o Menino Jesus, rodeada por elementos que simbolizam a cultura cafeeira: grãos de café, ramos com frutos vermelhos (cerejas do café), e por vezes ferramentas agrícolas. Em algumas representações, Maria aparece abençoando os cafezais ou segurando um cesto com grãos de café. A imagem transmite a mensagem de que o trabalho honesto, quando consagrado a Deus através de Maria, é abençoado e frutífero.\n\nFESTAS E ROMARIAS\n\nEm várias cidades do interior paulista e mineiro, especialmente naquelas com forte tradição cafeeira, são realizadas festas em honra a N.S. do Café, geralmente coincidindo com o período da colheita (maio a agosto). Nestas festas, os agricultores trazem os primeiros frutos da safra para serem benzidos, em sinal de gratidão e pedido de proteção para a colheita. Procissões percorrem os cafezais, com cânticos e orações, renovando a consagração das terras e do trabalho a Maria.\n\nMENSAGEM ESPIRITUAL E SOCIAL\n\nA devoção a N.S. do Café nos ensina o valor sagrado do trabalho e a importância de consagrar nossas atividades diárias a Deus. Maria, que trabalhou humildemente em Nazaré, compreende as dificuldades, o suor e as preocupações dos trabalhadores rurais. Ela é a Mãe que intercede para que o trabalho seja digno, justo e frutífero. A devoção também carrega uma dimensão de justiça social, lembrando-nos de rezar pelos direitos dos trabalhadores rurais, muitos dos quais ainda vivem em condições difíceis. Nossa Senhora do Café nos convida a valorizar o pão de cada dia, fruto do trabalho humano abençoado por Deus, e a ser gratos por cada xícara de café que tomamos, lembrando das mãos que o cultivaram sob o olhar maternal de Maria.",
                status: "approved",
                statusNote: "Devoção Popular Regional"
            },
            {
                id: "seringueira",
                name: "N.S. da Seringueira",
                country: "Brasil (AC/AM)",
                countryFlag: "🇧🇷",
                date: "12 de Outubro",
                imageUrl: "/images/ns_seringueira.png",
                description: "Padroeira dos Seringueiros da Amazônia",
                fullDescription: "A MÃE DOS SERINGUEIROS\n\nNossa Senhora da Seringueira é uma devoção mariana profundamente enraizada na cultura e na história dos seringueiros da Amazônia brasileira, especialmente nos estados do Acre e Amazonas. Esta devoção nasceu no coração da floresta, entre os trabalhadores que extraíam o látex das seringueiras (Hevea brasiliensis) durante os ciclos da borracha, enfrentando condições extremamente difíceis e perigosas.\n\nCONTEXTO HISTÓRICO - OS CICLOS DA BORRACHA\n\nDurante o primeiro ciclo da borracha (1879-1912) e o segundo ciclo (1942-1945, durante a Segunda Guerra Mundial), milhares de nordestinos migraram para a Amazônia em busca de trabalho nos seringais. Estes homens, chamados 'soldados da borracha', deixaram suas famílias e enfrentaram a selva hostil, doenças tropicais (malária, febre amarela), animais perigosos (onças, cobras, jacarés), e um sistema de trabalho muitas vezes explorador. Isolados na imensidão da floresta, longe de igrejas e padres, estes seringueiros levavam consigo apenas sua fé e pequenas imagens de santos, especialmente de Nossa Senhora.\n\nA DEVOÇÃO NA FLORESTA\n\nNos barracões dos seringais, em meio à floresta, os seringueiros erguiam pequenos altares com imagens de Nossa Senhora, geralmente N.S. Aparecida ou N.S. da Conceição. Com o tempo, desenvolveu-se uma devoção específica: Nossa Senhora da Seringueira. A imagem era venerada antes das perigosas jornadas de extração do látex, que começavam de madrugada. Os seringueiros rezavam o terço, pedindo proteção contra os perigos da mata e sucesso na colheita do látex. Muitos relatavam que, em momentos de perigo extremo - perdidos na floresta, atacados por animais, ou doentes - sentiam a presença maternal de Maria guiando-os e protegendo-os.\n\nICONOGRAFIA E SIMBOLISMO\n\nA iconografia de N.S. da Seringueira é única e tocante: Maria é representada muitas vezes em pé ou sentada junto a uma seringueira, por vezes com o Menino Jesus no colo, cercada pela exuberante vegetação amazônica. Em algumas imagens, ela segura uma tigela de látex ou está sob a copa de uma seringueira. A cor verde da floresta predomina, simbolizando a vida e a esperança em meio às dificuldades. A imagem transmite a mensagem de que Maria está presente até nos lugares mais remotos e difíceis, acompanhando e protegendo seus filhos trabalhadores.\n\nCHICO MENDES E A DEVOÇÃO\n\nO famoso líder seringueiro e ambientalista Chico Mendes (1944-1988), assassinado por defender a floresta e os direitos dos seringueiros, era devoto de Nossa Senhora. Sua luta pela justiça social e pela preservação da Amazônia estava profundamente enraizada em sua fé católica e em sua devoção mariana. Chico Mendes via em Maria a defensora dos pobres e da criação de Deus.\n\nMENSAGEM ATUAL - ECOLOGIA E JUSTIÇA\n\nHoje, a devoção a N.S. da Seringueira ganha novo significado no contexto da crise ecológica e da destruição da Amazônia. Maria, venerada como protetora dos seringueiros, é também invocada como protetora da floresta amazônica, 'pulmão do mundo'. A devoção nos chama a cuidar da criação de Deus, a defender os povos da floresta (indígenas, ribeirinhos, seringueiros) e a lutar por justiça socioambiental. Nossa Senhora da Seringueira nos ensina que a fé cristã não pode ser separada do cuidado com a Casa Comum e da defesa dos mais vulneráveis.",
                status: "approved",
                statusNote: "Devoção Popular Amazônica"
            },
            {
                id: "rainha_sertao",
                name: "N.S. Rainha do Sertão",
                country: "Brasil (BA/CE/PE)",
                countryFlag: "🇧🇷",
                date: "2 de Fevereiro",
                imageUrl: "/images/ns_rainha_sertao.png",
                description: "Padroeira do Sertão Nordestino",
                fullDescription: "A RAINHA DO SERTÃO BRASILEIRO\n\nNossa Senhora Rainha do Sertão é uma devoção mariana profundamente enraizada na alma do povo sertanejo do Nordeste brasileiro, especialmente nos estados da Bahia, Ceará, Pernambuco, Paraíba e Rio Grande do Norte. Esta devoção expressa a fé resiliente e esperançosa de um povo que enfrenta as adversidades do clima semiárido - secas prolongadas, fome, pobreza - mas nunca perde a confiança na proteção maternal de Maria.\n\nO SERTÃO E SUA FÉ\n\nO sertão nordestino é uma região de contrastes: beleza árida, sol escaldante, vegetação de caatinga, e um povo de fé profunda e inquebrantável. Historicamente marcado por secas devastadoras que causaram grandes sofrimentos e migrações, o sertão é também terra de santos, beatos, romeiros e devoções populares intensas. Neste contexto, Maria é venerada como a Rainha e Mãe do sertão, aquela que acompanha seu povo nas provações e intercede por chuva, alimento e esperança.\n\nORIGEM DA DEVOÇÃO\n\nA devoção a N.S. Rainha do Sertão não tem uma origem histórica precisa documentada, mas nasceu espontaneamente do coração do povo sertanejo ao longo dos séculos. Em muitas capelas rurais, fazendas e pequenas cidades do sertão, imagens de Nossa Senhora - geralmente sob os títulos de N.S. da Conceição, N.S. das Dores, N.S. do Perpétuo Socorro ou N.S. Aparecida - eram veneradas com o título adicional de 'Rainha do Sertão'. O povo reconhecia em Maria a única Rainha verdadeira de sua terra sofrida, mais poderosa que qualquer autoridade terrena, capaz de interceder junto a Deus pelos necessitados.\n\nROGATIVAS E PROCISSÕES DA CHUVA\n\nUma das manifestações mais tocantes da devoção são as 'rogativas' ou 'procissões da chuva', realizadas durante períodos de seca prolongada. O povo se reúne, muitas vezes caminhando descalço sob o sol causticante, carregando a imagem de Nossa Senhora Rainha do Sertão, rezando o terço, cantando benditos e ladainhas, implorando por chuva. Estas procissões são verdadeiras expressões de fé coletiva, onde ricos e pobres, jovens e velhos, caminham juntos em súplica. Muitos testemunhos relatam que, após as rogativas, as chuvas vieram, salvando plantações e vidas.\n\nSIMBOLISMO E ICONOGRAFIA\n\nA iconografia de N.S. Rainha do Sertão frequentemente apresenta Maria coroada, vestida com mantos em tons de azul e branco, por vezes cercada por elementos do sertão: mandacarus (cactos típicos), sol radiante, nuvens de chuva, estrelas. Em algumas representações, ela segura espigas de milho ou ramos de algodão, simbolizando a fertilidade da terra abençoada por Deus. A imagem transmite simultaneamente a realeza de Maria e sua proximidade maternal com o povo sofrido.\n\nPADROEIRO CELESTINO E A DEVOÇÃO\n\nO Beato Padre Cícero Romão Batista (Padim Ciço), grande devoto de Nossa Senhora e pai espiritual do povo sertanejo, promovia intensamente a devoção mariana. Em Juazeiro do Norte (CE), um dos maiores centros de romaria do Brasil, a devoção a N.S. das Dores (padroeira da cidade) se funde com a devoção a N.S. Rainha do Sertão. Padre Cícero ensinava: 'Reze sempre o terço de Maria, que Ela nunca abandona seus filhos'.\n\nMENSAGEM DE ESPERANÇA E RESISTÊNCIA\n\nA devoção a N.S. Rainha do Sertão nos ensina a esperança que não desanima, mesmo nas circunstâncias mais adversas. O sertanejo, diante da seca, da fome, da migração forçada, não perde a fé. Maria é a Rainha que reina não com poder mundano, mas com amor maternal, compartilhando o sofrimento de seu povo e intercedendo incansavelmente. A devoção também nos chama à solidariedade com o povo do sertão, a lutar por políticas públicas justas de convivência com o semiárido, e a valorizar a cultura e a fé sertaneja. Nossa Senhora Rainha do Sertão é a Mãe dos retirantes, dos flagelados, dos esquecidos, e sua coroa é tecida com as orações e lágrimas de seu povo fiel.",
                status: "approved",
                statusNote: "Devoção Popular Nordestina"
            },
            {
                id: "gracas_cimbres",
                name: "N.S. das Graças de Cimbres",
                country: "Brasil (PE)",
                countryFlag: "🇧🇷",
                date: "27 de Novembro",
                imageUrl: "/images/ns_gracas_cimbres.png",
                description: "Santuário Mariano de Pernambuco",
                fullDescription: "O SANTUÁRIO DE CIMBRES\n\nNossa Senhora das Graças de Cimbres é venerada em um dos mais importantes santuários marianos do Nordeste brasileiro, localizado no município de Pesqueira, no agreste de Pernambuco. O Santuário de Cimbres é um centro de peregrinação que atrai milhares de romeiros anualmente, especialmente durante a festa da padroeira em novembro, sendo considerado um dos principais santuários marianos de Pernambuco.\n\nORIGEM HISTÓRICA\n\nA devoção a Nossa Senhora das Graças em Cimbres remonta ao século XIX. Segundo a tradição, por volta de 1870, uma imagem de Nossa Senhora das Graças foi trazida para a região por missionários ou devotos. A imagem foi colocada em uma pequena capela na localidade de Cimbres, então uma área rural e de difícil acesso no agreste pernambucano. Desde o início, a devoção atraiu os fiéis da região, que vinham buscar graças e milagres através da intercessão de Maria.\n\nMILAGRES E CRESCIMENTO DA DEVOÇÃO\n\nAo longo das décadas, inúmeros milagres e graças foram atribuídos à intercessão de N.S. das Graças de Cimbres: curas de doenças graves, proteção em acidentes, conversões, graças familiares e materiais. Os testemunhos dos devotos se multiplicaram, e a fama do santuário se espalhou por todo o Nordeste. A pequena capela inicial tornou-se insuficiente para acolher os romeiros, e ao longo do século XX, foi construída uma igreja maior e, posteriormente, o atual santuário, com capacidade para milhares de fiéis.\n\nA ROMARIA E A FESTA\n\nA festa de Nossa Senhora das Graças de Cimbres, celebrada em 27 de novembro, é um dos eventos religiosos mais importantes de Pernambuco. Durante a novena e a festa, o santuário recebe dezenas de milhares de romeiros vindos de todo o Nordeste, especialmente de Pernambuco, Paraíba, Alagoas e Bahia. Muitos vêm a pé, em longas caminhadas de penitência e devoção, percorrendo dezenas ou até centenas de quilômetros. A romaria é marcada por procissões, missas solenes, cânticos marianos, e uma atmosfera de profunda fé popular. Os romeiros trazem ex-votos (fotografias, objetos, placas de agradecimento) testemunhando as graças recebidas.\n\nA MEDALHA MILAGROSA E O TÍTULO 'DAS GRAÇAS'\n\nO título 'Nossa Senhora das Graças' está intimamente ligado às aparições de Maria a Santa Catarina Labouré em Paris (1830), quando a Virgem pediu a cunhagem da Medalha Milagrosa com a inscrição 'Ó Maria concebida sem pecado, rogai por nós que recorremos a vós'. Maria prometeu que todos que usassem a medalha com fé receberiam grandes graças. A devoção a N.S. das Graças se espalhou pelo mundo católico, chegando ao Brasil no século XIX. Em Cimbres, esta devoção encontrou solo fértil no coração do povo nordestino, que reconhece em Maria a medianeira de todas as graças.\n\nO SANTUÁRIO HOJE\n\nO Santuário de Cimbres é administrado pela Diocese de Pesqueira e conta com uma estrutura que acolhe os romeiros: igreja santuário, casa de retiros, centro de atendimento aos peregrinos, e espaços para oração. O santuário promove não apenas a devoção mariana, mas também obras sociais de assistência aos pobres da região. Missas são celebradas diariamente, e o santuário está sempre aberto para acolher os devotos que vêm buscar consolo, paz e graças.\n\nMENSAGEM ESPIRITUAL\n\nA devoção a N.S. das Graças de Cimbres nos ensina a confiar na intercessão maternal de Maria. Ela é a Mãe cheia de graça (kecharitomene), que recebeu de Deus a plenitude da graça e agora a distribui generosamente a seus filhos que a invocam com fé. Nenhum pedido sincero é ignorado por Maria. Ela conhece nossas necessidades antes mesmo de as expressarmos e intercede junto a seu Filho Jesus. A devoção também nos convida à peregrinação interior: assim como os romeiros caminham até Cimbres, devemos caminhar espiritualmente em direção a Deus, com Maria como guia e companheira. Nossa Senhora das Graças de Cimbres é a Mãe que derrama graças sobre o povo nordestino e sobre todos que a invocam com fé e amor.",
                status: "approved",
                statusNote: "Santuário Diocesano - Diocese de Pesqueira"
            },
            {
                id: "escada",
                name: "N.S. da Escada",
                country: "Brasil (PE)",
                countryFlag: "🇧🇷",
                date: "8 de Setembro",
                imageUrl: "/images/ns_escada.png",
                description: "Padroeira da Cidade de Escada-PE",
                fullDescription: "O SANTUÁRIO DA PEDRA\n\nNossa Senhora da Escada é venerada em um dos santuários marianos mais singulares e impressionantes do Brasil, localizado na cidade de Escada, na Zona da Mata Sul de Pernambuco. O santuário é construído em uma formação rochosa natural, onde a imagem de Nossa Senhora está encravada em uma gruta na pedra, acessada por uma escadaria esculpida na rocha, daí o nome 'Nossa Senhora da Escada'.\n\nORIGEM LENDÁRIA E HISTÓRICA\n\nSegundo a tradição popular, no século XVIII, uma imagem de Nossa Senhora teria sido encontrada milagrosamente em uma gruta natural na grande pedra que domina a paisagem da região. Pescadores ou agricultores locais teriam descoberto a imagem e, ao tentarem removê-la para uma capela na vila, a imagem teria 'voltado' misteriosamente para a gruta, indicando seu desejo de permanecer ali. Reconhecendo o sinal divino, o povo decidiu construir uma escadaria na rocha para facilitar o acesso à gruta e permitir a veneração da imagem no local escolhido por Maria.\n\nA PEDRA E A ESCADARIA\n\nA formação rochosa onde está o santuário é uma enorme pedra de granito que se eleva majestosamente na paisagem. Uma escadaria de mais de 100 degraus foi esculpida na própria rocha, levando os devotos até a gruta onde está a imagem de Nossa Senhora. A subida é íngreme e exige esforço físico, tornando-se um ato de penitência e devoção para os romeiros. Ao chegar ao topo, os fiéis encontram a gruta sagrada, um espaço de profundo recolhimento e oração, com a imagem de Maria iluminada por velas e cercada de ex-votos.\n\nA IMAGEM E A DEVOÇÃO\n\nA imagem de Nossa Senhora da Escada representa Maria em pé, com o Menino Jesus nos braços, em estilo barroco colonial. A devoção cresceu ao longo dos séculos, e inúmeros milagres foram atribuídos à intercessão de N.S. da Escada: curas de doenças, proteção em viagens, graças familiares, conversões. A cidade de Escada, que cresceu ao redor do santuário, adotou Nossa Senhora da Escada como sua padroeira celestial.\n\nFESTA E ROMARIA\n\nA festa de Nossa Senhora da Escada é celebrada em 8 de setembro (Natividade de Maria) e atrai milhares de romeiros de todo Pernambuco e estados vizinhos. Durante a novena e a festa, o santuário fica repleto de devotos que sobem a escadaria, muitos de joelhos em sinal de penitência e gratidão. Procissões, missas, cânticos marianos e manifestações de fé popular marcam a celebração. A subida da escadaria torna-se uma verdadeira via-sacra mariana, onde cada degrau é uma oração, cada passo é um ato de amor a Maria.\n\nSIMBOLISMO DA ESCADA\n\nO simbolismo da 'escada' é profundamente bíblico e espiritual. Remete à escada de Jacó (Gênesis 28:12), que ligava a terra ao céu, por onde os anjos de Deus subiam e desciam. Na tradição cristã, Maria é vista como a 'Escada do Céu' (Scala Coeli), pois através dela Deus desceu até nós na Encarnação, e através dela nós podemos subir até Deus. A escadaria física do santuário simboliza a jornada espiritual de ascensão a Deus, com Maria como guia e mediadora. Cada degrau representa um passo de conversão, de purificação, de aproximação do divino.\n\nMENSAGEM ESPIRITUAL\n\nA devoção a N.S. da Escada nos ensina que a vida espiritual é uma subida, um esforço constante de elevação moral e espiritual. Não há atalhos para a santidade; é preciso subir degrau por degrau, com perseverança, humildade e confiança em Maria. A escadaria íngreme nos lembra que o caminho para o céu é estreito e exige renúncia, mas Maria está sempre ao nosso lado, estendendo sua mão maternal para nos ajudar a subir. Ao chegarmos ao topo, encontramos não apenas a imagem de Maria, mas o próprio Cristo, pois Maria sempre nos conduz a seu Filho. Nossa Senhora da Escada é a Mãe que nos eleva, que nos tira das planícies do pecado e nos conduz às alturas da graça e da santidade.",
                status: "approved",
                statusNote: "Santuário Histórico - Padroeira de Escada/PE"
            }
        ]
    }
];
