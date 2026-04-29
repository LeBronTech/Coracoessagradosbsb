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
    fullName?: string;
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
                description: "A Libertadora da Rússia - Ícone milagroso encontrado sob as cinzas",
                fullDescription: "O Ícone mais venerado da Rússia, conhecido como 'A Libertadora'. Sua história milagrosa começa em 1579, quando a Virgem Maria apareceu por três vezes à pequena Matrona, de 9 anos, em Kazan, após um incêndio devastador. Ela indicou o local exato onde o ícone estava enterrado sob as cinzas de uma casa. Ao cavar, encontraram o ícone embrulhado num trapo, resplandecente como se fosse novo.\n\nO ícone de Kazan tornou-se o principal símbolo de unidade e resistência nacional russa. Em 1612, acompanhou as tropas que libertaram Moscou dos invasores poloneses. O General Mikhail Kutuzov rezou diante dele antes de derrotar Napoleão em 1812. Em 1904, o original foi tragicamente roubado e destruído (ou possivelmente levado), mas cópias milagrosas continuaram a inspirar o povo. Uma dessas cópias, conhecida como o 'Kazan do Ocidente', foi comprada nos EUA, levada para Fátima e finalmente entregue em mãos ao Patriarca Aléxis II de Moscou por ordem de São João Paulo II em 2004, num gesto extraordinário de ecumenismo e fraternidade entre a Igreja Católica e a Ortodoxa Russa.",
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
                name: "N.S. da Macarena",
                fullName: "N.S. da Esperança Macarena",
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
                name: "N.S. de Garabandal",
                country: "Espanha",
                countryFlag: "🇪🇸",
                date: "18 de Outubro",
                imageUrl: "/images/ns_garabandal.png",
                description: "Aviso e Milagre para o mundo",
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
            },
            {
                id: "loreto",
                name: "N.S. de Loreto",
                country: "Itália",
                countryFlag: "🇮🇹",
                date: "10 de Dezembro",
                imageUrl: "/images/ns_loreto_1.png",
                images: [
                    "/images/ns_loreto_1.png",
                    "/images/ns_loreto_2.jpg",
                    "/images/ns_loreto_3.jpg",
                    "/images/ns_loreto_4.jpg"
                ],
                description: "A Padroeira dos Aviadores e o Mistério da Santa Casa",
                fullDescription: "A CASA QUE VOOU - O MISTÉRIO DE LORETO\n\nA devoção a Nossa Senhora de Loreto é uma das mais fascinantes e antigas da cristandade, centrada no milagre da 'Santa Casa' de Nazaré. Loreto, na Itália, é o local onde, segundo a tradição, encontra-se a autêntica casa de pedra onde a Virgem Maria nasceu, recebeu a Anunciação do Arcanjo Gabriel e onde a Sagrada Família viveu em Nazaré.\n\nO TRANSPORTE PELOS ANJOS\n\nA tradição conta que, em 1291, quando os cristãos estavam sendo expulsos da Terra Santa pelos sarracenos, a Santa Casa correu o risco de ser destruída. Milagrosamente, ela foi elevada da terra por anjos e transportada pelos ares, primeiro para a Dalmácia (atual Croácia) e, finalmente, em 1294, para um bosque de loureiros (lauretum, daí 'Loreto') na costa adriática da Itália. Estudos arqueológicos e científicos modernos feitos nas pedras e na argamassa da casa confirmaram que elas são típicas da região de Nazaré e totalmente estranhas à geologia da Itália.\n\nPADROEIRA DOS AVIADORES\n\nDevido a este 'voo' milagroso através dos mares, o Papa Bento XV declarou Nossa Senhora de Loreto a padroeira oficial de todos os aviadores e viajantes aéreos em 1920. É comum ver sua imagem ou medalhas em cabines de comando de aviões e em aeroportos por todo o mundo, pedindo proteção para os que cruzam os céus.\n\nA BASÍLICA E O ÂNGELUS DE LORETO\n\nEm volta da pequena e humilde casa de tijolos, foi construída uma imponente basílica renascentista que é hoje um dos maiores santuários da Europa. Dentro da Santa Casa, a oração do Ângelus é feita de forma única: em vez de dizer 'O Verbo se fez carne e habitou entre nós', os fiéis dizem 'O Verbo se fez carne e habitou AQUI' (Hic Verbum Caro Factum Est), recordando que foi exatamente entre aquelas paredes que o mistério da Encarnação aconteceu.\n\nMENSAGEM ESPIRITUAL\n\nLoreto nos recorda a santidade da vida familiar e a humildade da casa de Maria. É o lugar onde o divino e o humano se encontraram de forma definitiva. Maria, em Loreto, convida-nos a fazer de nossos próprios corações uma 'santa casa' onde Deus possa habitar. Ela é a protetora das viagens, sejam elas físicas nos céus ou a jornada espiritual da nossa vida rumo ao porto seguro do Céu.\n\nORAÇÃO\n\nÓ Maria, Virgem de Loreto, padroeira dos aviadores, que tivestes vossa santa casa transportada pelos anjos, protegei-nos em todas as nossas viagens e voos. Fazei que, seguindo o vosso exemplo de humildade e obediência, saibamos acolher o Verbo de Deus em nossa própria casa e em nosso coração, para que vivamos sempre na luz da vossa graça. Amém.",
                status: "approved",
                statusNote: "Santuário da Santa Casa; Padroeira dos Aviadores"
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
                description: "A Virgem que chorou no Japão - Mensagens de alerta e conversão",
                fullDescription: "As aparições de Nossa Senhora de Akita (1973-1981) são um dos eventos marianos mais importantes do século XX, ocorridos no convento das Servas da Eucaristia em Yuzawadai, Japão. A vidente, Irmã Agnes Sasagawa, era uma religiosa convertida do budismo que sofria de surdez total.\n\nA MANIFESTAÇÃO DA ESTÁTUA\n\nUma estátua de madeira de Nossa Senhora, esculpida por um artista local, apresentou fenômenos inexplicáveis: verteu sangue de uma ferida em forma de cruz na mão direita, suou um perfume celestial e, o mais famoso, chorou lágrimas humanas por 101 vezes. Estes eventos foram testemunhados por centenas de pessoas, incluindo o bispo diocesano, e as análises científicas confirmaram que o sangue e as lágrimas eram de origem humana.\n\nAS MENSAGENS E A CURA\n\nMaria transmitiu três mensagens graves, alertando sobre uma crise profunda na Igreja ('cardeais contra cardeais, bispos contra bispos') e um castigo sobre a humanidade se não houvesse conversão. No dia 13 de outubro de 1974, a Irmã Agnes foi milagrosamente curada de sua surdez, conforme prometido pela Virgem. As aparições foram aprovadas pelo bispo de Niigata em 1984 e consideradas 'dignas de fé' pelo Cardeal Ratzinger (futuro Bento XVI) em 1988, que as viu como uma continuação da mensagem de Fátima.",
                status: "approved",
                statusNote: "Reconhecida como sobrenatural pela Igreja em 1984 e pelo Vaticano em 1988"
            },
            {
                id: "sheshan",
                name: "N.S. de Sheshan",
                country: "China",
                countryFlag: "🇨🇳",
                date: "24 de Maio",
                imageUrl: "/images/ns_sheshan_1.jpg",
                images: [
                    "/images/ns_sheshan_1.jpg",
                    "/images/ns_sheshan_2.png",
                    "/images/ns_sheshan_3.png"
                ],
                description: "Auxiliadora dos Cristãos e Padroeira da China",
                fullDescription: "A AUXILIADORA DOS CRISTÃOS E O SANTUÁRIO DE SHESHAN\n\nNossa Senhora de Sheshan (ou Zose) é a padroeira da China e um dos símbolos mais fortes da resistência e da fé católica no gigante asiático. O seu santuário, localizado na colina de Sheshan, perto de Xangai, é o principal centro de peregrinação do país e um farol de esperança para a Igreja na China.\n\nORIGEM E O VOTO DOS JESUÍTAS\n\nA devoção nasceu no século XIX, quando missionários jesuítas construíram o primeiro pequeno santuário na colina em 1863. Durante a sangrenta Rebelião Taiping em 1870, que ameaçava dizimar a comunidade católica local, o Superior da Missão fez um voto solene: se Xangai fosse poupada, uma grande basílica seria erguida em honra de Maria Auxiliadora. A cidade foi milagrosamente protegida e a promessa foi cumprida com a construção de uma magnífica basílica neogótica que domina o vale.\n\nA ICONOGRAFIA DO MENINO ERGUIDO\n\nO destaque do santuário é a imensa estátua de bronze que coroa o campanário. Ela representa Maria elevando o Menino Jesus ao céu, com os braços estendidos em forma de cruz, apresentando-O ao mundo como o único Salvador. É uma das representações marianas mais singulares, simbolizando que Maria não apenas 'segura' Jesus, mas O 'oferece' para a salvação da humanidade.\n\nSÍMBOLO DE UNIDADE E PERSEGUIÇÃO\n\nEm 1924, o Primeiro Concílio Chinês consagrou solenemente a China a Maria. Sob o regime comunista, o santuário passou por tempos difíceis, sendo confiscado e fechado por décadas. No entanto, a devoção permaneceu viva no coração dos fiéis. Em 1980, o santuário foi devolvido à Igreja e as peregrinações foram retomadas com vigor. Em 2007, o Papa Bento XVI instituiu o dia 24 de maio (festa de Maria Auxiliadora) como o 'Dia Mundial de Oração pela Igreja na China', reafirmando o papel de N.S. de Sheshan como intercessora dos cristãos perseguidos.\n\nMENSAGEM ESPIRITUAL\n\nMaria, em Sheshan, nos convida à fortaleza na fé. Ela é a 'Dama dos Montes' que cuida de seus filhos em meio às provações ideológicas e políticas. Elevando Jesus, ela nos lembra que, por cima de qualquer império ou regime, Cristo reina para sempre. Ela é a esperança da Igreja silenciosa e o refúgio dos que sofrem por amor ao Evangelho.\n\nORAÇÃO\n\nSenhora de Sheshan, olha para o povo da China e protege a Igreja que ali floresce. Dá coragem aos que são perseguidos, força aos que vacilam e une todos os teus filhos sob o teu manto de Auxiliadora. Que o Menino Jesus, que tu ergues com amor, seja a luz que brilha sobre toda a nação chinesa. Amém.",
                status: "approved",
                statusNote: "Santuário nacional; oração pela China composta pelo Papa Bento XVI"
            },
            {
                id: "velankanni",
                name: "N.S. da Boa Saúde",
                country: "Índia",
                countryFlag: "🇮🇳",
                date: "8 de Setembro",
                imageUrl: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhDzHnHoCCreMtCrjxEK-GNE22zHdYLfwqTidbFdltvt9JTcene2FhjQC0mnsO8LOxC8sxFLVyVzfWjRBFuAfxKaxWJ9XZBXNjPYijrTMe4sffm9TNbac2R9ZfjLK_IAxM72y5f64IfnHwC/s1600/Nossa+Senhora+de+Vailankanni.jpg",
                images: [
                    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhDzHnHoCCreMtCrjxEK-GNE22zHdYLfwqTidbFdltvt9JTcene2FhjQC0mnsO8LOxC8sxFLVyVzfWjRBFuAfxKaxWJ9XZBXNjPYijrTMe4sffm9TNbac2R9ZfjLK_IAxM72y5f64IfnHwC/s1600/Nossa+Senhora+de+Vailankanni.jpg",
                    "https://thumbs.dreamstime.com/b/setembro-de-igreja-nossa-senhora-boa-sa%C3%BAde-velankanni-%C3%ADndia-celebra%C3%A7%C3%A3o-da-natividade-maria-na-161457383.jpg",
                    "https://www.adf.org.br/home/wp-content/uploads/2015/01/Nossa-Senhora-da-Boa-Sa%C3%BAde-de-Vailankanni.jpg"
                ],
                description: "A 'Lourdes do Oriente' - Padroeira da Boa Saúde",
                fullDescription: "A LOURDES DO ORIENTE E OS MILAGRES PROTETORES\n\nNossa Senhora da Boa Saúde de Vailankanni (ou Velankanni) é uma das devoções marianas mais impressionantes da Ásia, localizada em uma pequena cidade costeira em Tamil Nadu, no sul da Índia. O local é frequentemente chamado de 'Lourdes do Oriente' devido às incontáveis graças e curas milagrosas lá alcançadas.\n\nAS APARIÇÕES DO SÉCULO XVI\n\nA devoção teve início com três grandes milagres no século XVI. O primeiro ocorreu quando Maria apareceu a um jovem pastor hindu que adormeceu junto a um lago enquanto levava leite para seu mestre. Maria, com o Menino Jesus, pediu um pouco do leite. Quando o mestre do jovem olhou o recipiente depois, ele milagrosamente transbordava de leite.\n\nO segundo milagre aconteceu anos depois, quando Nossa Senhora apareceu a um menino com deficiência física que vendia soro de leite. Ao pedir-lhe um pouco para o Menino Jesus, o menino foi curado imediatamente e passou a caminhar, emocionando toda a região.\n\nO SALVAMENTO DOS MARINHEIROS\n\nO terceiro grande milagre que consolidou a devoção foi o salvamento de uma embarcação mercantil portuguesa. Durante uma terrível tempestade na Baía de Bengala, os marinheiros portugueses enfrentaram morte certa. Suplicando com fervor a Nossa Senhora, prometeram construir-lhe uma capela onde quer que o mar os levasse a salvo. Eles desembarcaram intactos nas areias de Vailankanni exatamente no dia 8 de setembro. Fiéis à promessa, ergueram a primeira pequena igreja no local.\n\nDEVOÇÃO E ECUMENISMO\n\nHoje, a Basílica de Nossa Senhora da Boa Saúde é um majestoso complexo que recebe milhões de peregrinos anualmente. O mais extraordinário é que a devoção atrai não apenas católicos, mas um número gigantesco de fiéis hindus e muçulmanos, que respeitam profundamente 'Matha' (Mãe) e peregrinam em busca de cura e proteção.\n\nMENSAGEM ESPIRITUAL\n\nNossa Senhora de Vailankanni nos ensina que a misericórdia de Maria é universal e atravessa fronteiras culturais e religiosas. Como a Padroeira da Boa Saúde, Ela está atenta a todas as nossas doenças físicas e espirituais, recordando-nos o valor do milagre e do amor intercessor de Deus.",
                status: "approved",
                statusNote: "Santuário Basílica"
            },
            {
                id: "soufanieh",
                name: "N.S. de Soufanieh",
                country: "Síria",
                countryFlag: "🇸🇾",
                date: "26 de Novembro",
                imageUrl: "/images/ns_soufanieh.jpg",
                description: "O milagre do azeite em Damasco (1982) - Unidade e Paz",
                fullDescription: "O MILAGRE DE SOUFANIEH E O AZEITE DE DAMASCO\n\nA devoção a Nossa Senhora de Soufanieh nasceu de um dos fenômenos místicos mais impressionantes e ecumênicos da era moderna. Tudo começou em 22 de novembro de 1982, na pequena casa de Myrna Nazzour, uma jovem católica melquita casada com um ortodoxo, em Soufanieh, um subúrbio de Damasco, na Síria.\n\nO FENÔMENO DO AZEITE\n\nEnquanto Myrna rezava com outras mulheres por uma cunhada doente, suas mãos começaram a brilhar e a exalar um óleo perfumado (azeite puro). Poucos dias depois, um pequeno ícone da Virgem Maria em sua casa também começou a verter azeite. O fenômeno, que foi testemunhado por milhares de pessoas e filmado diversas vezes, repetiu-se em datas significativas até recentemente. Milagres de cura foram relatados após o uso desse azeite milagroso, que análises científicas comprovaram ser azeite de oliva 100% puro, desafiando qualquer explicação natural.\n\nÊXTASE E ESTIGMAS\n\nAlém do fluxo de óleo, Myrna experimentou vários êxtases e os estigmas da Paixão de Cristo (chagas nas mãos, pés, testa e flanco). Curiosamente, as chagas se abriam principalmente nas Quintas-Feiras Santas em que as igrejas Católica e Ortodoxa celebravam a Páscoa na mesma data (o que ocorre ocasionalmente devido à diferença de calendários), reforçando a mensagem central da aparição.\n\nMENSAGEM DE UNIDADE\n\nA principal mensagem de Maria e de Jesus em Soufanieh é a UNIDADE DOS CRISTÃOS. Maria disse a Myrna: 'As Igrejas que os homens dividiram devem ser unidas'. Ela pediu que os cristãos se amassem, rezassem juntos e unificassem a data da celebração da Páscoa como um sinal de paz. A casa de Myrna tornou-se um local de peregrinação onde católicos, ortodoxos e até muçulmanos rezam lado a lado sob o olhar de Maria.\n\nMENSAGEM ESPIRITUAL\n\nNossa Senhora de Soufanieh nos lembra que o óleo é sinal de benção, cura e unção do Espírito Santo. Em uma Damasco marcada por conflitos históricos e religiosos, ela surge como a 'Mãe da Unidade', pedindo que superemos as divisões para sermos um só coração. Ela é a esperança da paz no Oriente Médio e em todo o mundo cristão.\n\nORAÇÃO\n\nÓ Maria, Senhora de Soufanieh, que fizeste brotar o óleo da benção em tuas mãos para curar os enfermos e unir os teus filhos. Intercede pela paz na Síria e por todos os cristãos, para que possamos em breve celebrar a vitória de Cristo em uma única fé e um só coração. Amém.",
                status: "approved",
                statusNote: "Aprovada pelos bispos locais (Católico e Ortodoxo); Fenômeno do Azeite"
            },
            {
                id: "tra_kieu",
                name: "N.S. de Trà Kiệu",
                country: "Vietnã",
                countryFlag: "🇻🇳",
                date: "31 de Maio",
                imageUrl: "/images/ns_tra_kieu_1.jpg",
                images: [
                    "/images/ns_tra_kieu_1.jpg",
                    "/images/ns_tra_kieu_2.jpg"
                ],
                description: "Nossa Senhora Auxiliadora e Protetora dos Cristãos (1885)",
                fullDescription: "A PROTEÇÃO DE TRÀ KIỆU E A SENHORA GENERAL\n\nA devoção a Nossa Senhora de Trà Kiệu é um testemunho vivo da proteção mariana sobre os cristãos perseguidos no Vietnã. O santuário, localizado no morro Bửu Châu, na província de Quảng Nam, é o centro mariano da Diocese de Đà Nẵng e marca um dos episódios mais heróicos da história da Igreja na Ásia.\n\nO MILAGRE DE 1885\n\nA região de Trà Kiệu recebeu o Evangelho no século XVII por missionários portugueses. No entanto, em 1885, durante a revolta do movimento Cần Vương, os católicos locais foram cercados e atacados por forças que buscavam erradicar o cristianismo. Com armas rudimentares e em minoria esmagadora, os fiéis refugiaram-se na igreja e rezaram pedindo a intercessão de Maria Auxiliadora.\n\nA VIRTUAL 'SENHORA GENERAL'\n\nDurante o cerco, os atacantes relataram ter visto uma bela Senhora vestida de branco no topo da igreja. Eles tentaram disparar canhões e flechas contra o local, mas os projéteis pareciam ser desviados ou 'varridos' pelo manto da Senhora. Os soldados pagãos, aterrorizados, chamavam-na de 'Senhora General', pois ela parecia comandar uma defesa invisível. Graças a esta proteção milagrosa, a comunidade foi poupada do extermínio.\n\nRECONHECIMENTO E SANTUÁRIO\n\nEm memória deste livramento, o Santuário de Nossa Senhora de Trà Kiệu foi construído e tornou-se um grande centro de peregrinação. A imagem de Maria em Trà Kiệu é frequentemente representada de forma majestosa, lembrando seu papel como protetora. Em 1971, o local foi oficialmente designado como o principal centro mariano da região, atraindo milhares de fiéis todos os anos, especialmente na solenidade de 31 de maio.\n\nMENSAGEM ESPIRITUAL\n\nNossa Senhora de Trà Kiệu nos ensina que, mesmo nas situações mais desesperadoras de perseguição e medo, a Mãe de Deus não abandona seus filhos. Ela é a 'Auxiliadora' que se coloca à frente da batalha para defender a fé. Sua presença em Trà Kiệu é um sinal de que a luz de Cristo brilha mesmo na escuridão das ideologias opressoras.\n\nORAÇÃO\n\nÓ Maria, Senhora de Trà Kiệu, que com vosso manto de luz protegestes os cristãos do Vietnã no momento da angústia. Olhai para nós hoje e defendei-nos de todos os perigos da alma e do corpo. Sede nossa General nas batalhas da vida e conduzi-nos sempre à vitória do vosso Filho Jesus. Amém.",
                status: "approved",
                statusNote: "Santuário Diocesano; Aparição de 1885"
            },
            {
                id: "libano",
                name: "N.S. do Líbano",
                country: "Líbano",
                countryFlag: "🇱🇧",
                date: "1 de Maio",
                imageUrl: "/images/ns_libano_1.png",
                images: [
                    "/images/ns_libano_1.png",
                    "/images/ns_libano_2.jpg",
                    "/images/ns_libano_3.jpg"
                ],
                description: "Our Lady of Lebanon (Harissa) - Rainha do Líbano",
                fullDescription: "A RAINHA DO LÍBANO E O SANTUÁRIO DE HARISSA\n\nNossa Senhora do Líbano (Notre-Dame du Liban) é a padroeira do Líbano e um dos títulos mais majestosos da Virgem Maria no Oriente Médio. O seu santuário em Harissa, localizado a 650 metros acima do nível do mar, oferece uma vista deslumbrante sobre a baía de Jounieh e é o coração espiritual do país, unindo cristãos de diferentes ritos e até muçulmanos em veneração.\n\nO MONUMENTO DE HARISSA\n\nO santuário foi fundado em 1904 para comemorar o 50º aniversário do Dogma da Imaculada Conceição. O destaque do local é a imensa estátua de bronze de Maria, com 8,5 metros de altura e pesando 15 toneladas, pintada de branco. Ela está sobre um pedestal em forma de cone que abriga uma pequena capela. Maria aparece com os braços estendidos em direção a Beirute, como se estivesse abraçando e protegendo toda a nação.\n\nSÍMBOLO DE UNIDADE E PAZ\n\nO Líbano é citado diversas vezes na Bíblia, especialmente pelos seus cedros majestosos, que simbolizam a força e a glória de Deus. Maria é frequentemente comparada ao 'Cedro do Líbano' na liturgia. O santuário de Harissa tornou-se um símbolo de unidade nacional em um país marcado por conflitos. É um dos poucos lugares no mundo onde cristãos (maronitas, melquitas, latinos) e muçulmanos rezam lado a lado, reconhecendo Maria como a Mãe Imaculada.\n\nVISITAS PAPAIS E RECONHECIMENTO\n\nO Santuário de Nossa Senhora do Líbano foi visitado por São João Paulo II em 1997, que ali assinou a Exortação Apostólica 'Uma Nova Esperança para o Líbano'. O Papa Bento XVI também visitou o local em 2012. A Rainha do Líbano foi solenemente coroada em 1908 por ordem da Santa Sé, consolidando sua importância como protetora do povo libanês e de toda a região.\n\nMENSAGEM ESPIRITUAL\n\nMaria, em Harissa, nos convida à paz e à concórdia. Do alto da montanha, ela nos ensina a olhar para o céu sem esquecer de estender as mãos para os irmãos na terra. Ela é a 'Dama de Branco' que traz esperança mesmo nos tempos de guerra e divisão, lembrando-nos que o amor de Deus é a única rocha inabalável.\n\nORAÇÃO\n\nÓ Maria, Rainha dos montes e dos mares, Senhora do nosso querido Líbano, cujo candor supera a neve e cujo perfume é como o das flores do Líbano. Vós que vos elevais majestosa como o cedro, protegei nossas famílias, abençoai nossa pátria e fazei de nós instrumentos de vossa paz. Amém.",
                status: "approved",
                statusNote: "Santuário Nacional; Rainha do Líbano coroada em 1908"
            },
            {
                id: "naju",
                name: "N.S. de Naju",
                country: "Coreia do Sul",
                countryFlag: "🇰🇷",
                date: "19 de Outubro",
                imageUrl: "/images/ns_naju.jpg",
                images: ["/images/ns_naju.jpg", "/images/ns_naju_2.png"],
                description: "Lágrimas de sangue e milagres eucarísticos na Coreia do Sul",
                fullDescription: "Um dos fenômenos marianos mais impressionantes e debatidos do século XX, iniciado em 30 de junho de 1985 em Naju, Coreia do Sul. Julia Kim, mãe de quatro filhos e convertida ao catolicismo, viu sua pequena estátua de Nossa Senhora começar a verter lágrimas humanas, que posteriormente se tornaram lágrimas de sangue, por mais de 700 vezes até 1994.\n\nO local é palco de inúmeros fenômenos extraordinários, incluindo 33 milagres eucarísticos documentados, onde a hóstia sagrada transformou-se em carne e sangue reais (em forma de coração) sobre a língua de Julia Kim durante a comunhão. Maria apresenta-se em Naju como a 'Mãe de Misericórdia' que chora pelos pecados de seus filhos e pelo desprezo à Eucaristia. Ela pede oração, sacrifício e reparação, além de fidelidade ao Papa e ao clero.\n\nEmbora o Arcebispo de Gwangju tenha expressado reservas e cautela, multidões de fiéis e sacerdotes de todo o mundo visitam o local, testemunhando profundas conversões e curas espirituais. A mensagem de Naju é um chamado urgente de Maria para que o mundo retorne ao Coração de Deus antes que seja tarde demais.",
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
                description: "A Medianeira de Todas as Graças e o Fenômeno das Pétalas de Rosa",
                fullDescription: "A história de Nossa Senhora em Lipa, Filipinas (1948), é um dos relatos marianos mais fascinantes da Ásia, envolvendo a jovem noviça Teresita Castillo no Mosteiro Carmelita de Lipa. Maria apresentou-se com o título de 'Medianeira de Todas as Graças', trajando uma túnica branca e um cinto dourado.\n\nO MILAGRE DAS PÉTALAS\n\nO fenômeno que mais impressionou o mundo foi a 'chuva de pétalas de rosa' que caíam inexplicavelmente dentro e fora do convento. Muitas dessas pétalas, de beleza e perfume extraordinários, traziam imagens de Jesus e Maria gravadas em sua superfície. Milhares de peregrinos testemunharam o fenômeno, e inúmeras curas foram relatadas após o uso das pétalas.\n\nCONTROVÉRSIA E DEVOÇÃO\n\nApesar da imensa devoção popular, a história de Lipa é marcada por uma longa disputa eclesiástica. Inicialmente aprovado pelo bispo local, o caso foi suprimido em 1951. Décadas depois, houve novas tentativas de reconhecimento, mas em 2016 o Vaticano ratificou a decisão de não-sobrenaturalidade. Contudo, a Santa Sé permite a veneração privada, e Lipa continua sendo um dos maiores centros de fé das Filipinas, onde o povo recorre a Maria como a Mãe que intercede por todas as graças divinas.",
                status: "not-approved",
                statusNote: "Julgamento negativo do Vaticano (2024); Devoção popular permitida"
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
                imageUrl: "https://www.a12.com/source/files/originals/Nossa_Senhora_da_Africa.jpg",
                images: [
                    "https://www.a12.com/source/files/originals/Nossa_Senhora_da_Africa.jpg",
                    "https://i0.wp.com/www.sosfamilia.org.br/wp-content/uploads/2023/08/Otra_imagen_de_la_Virgen_de_Africa.web_.jpg?w=678&ssl=1",
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8d7zt1mlr1T1rxBm-HDZt0UmmvPi4ZsEU2A&s"
                ],
                description: "Madame l'Afrique - Argel",
                fullDescription: "A Basílica de N.S. da África em Argel traz a inscrição: 'N.S. da África, rogai por nós e pelos muçulmanos'. Símbolo de diálogo e proteção no norte da África. A Virgem é um ponto de encontro e devoção para cristãos e muçulmanos.",
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
                imageUrl: "https://images.cdn-files-a.com/uploads/5860772/2000_63cdf81a70b88.jpg",
                images: [
                    "https://images.cdn-files-a.com/uploads/5860772/2000_63cdf81a70b88.jpg",
                    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhZspgQ3ZCqhrnoEsXi2l8xacjsAun9L1J_8DKTAt3ijXlTWjjxezR1HnVACDBXrBr5gHjDZ6ZMikyw0xWqP68Aro0TiXQZ7J8t3KUk_jB0BQMoQv5at1yJ6BwBimAQ7mpfsBA_DfCGTxBt/s1600/Virgem+de+Guadalupe39.jpg",
                    "https://totusmariae.org/wp-content/uploads/2019/10/GuadalupeSinais.jpg"
                ],
                description: "Imperatriz das Américas",
                fullDescription: "A IMPERATRIZ DAS AMÉRICAS\n\nEm dezembro de 1531, a Virgem Maria apareceu ao humilde índio São Juan Diego na colina de Tepeyac, no México, pedindo-lhe que construísse ali um santuário. Como prova de suas aparições perante o bispo, Nossa Senhora ordenou que Juan Diego colhesse rosas perfumadas no alto da colina, mesmo sendo o auge de um inverno árido. Ao se apresentar diante do bispo e abrir a sua 'tilma' (um manto de fibra de cacto rústica) para entregar as flores, a imagem detalhada e colorida da Virgem de Guadalupe apareceu milagrosamente gravada no tecido.\n\nO MISTÉRIO DA TILMA\n\nA ciência moderna realizou diversos estudos na tilma sagrada e não encontrou explicações lógicas. O manto não possui traços de tintas, pinceladas ou corantes conhecidos no planeta. A temperatura do tecido mantém-se sempre constante a 36,6ºC, semelhante ao de um corpo humano. Além disso, oftalmologistas descobriram nas pupilas da Virgem, em tamanho microscópico, o reflexo perfeito de 13 figuras humanas (as pessoas que estavam na sala), tal como um olho vivo faria no instante em que o manto foi aberto.\n\nComo se não bastasse, sua veste reflete a mesma disposição das constelações do céu do México na madrugada do dia 12 de dezembro de 1531. A imagem milagrosa cativou as multidões e em dez anos converteu perto de oito milhões de astecas pacificamente, unindo raízes indígenas e a fé cristã. Ela se consagrou como a Padroeira e Rainha de toda a América e atrai dezenas de milhões de peregrinos anualmente ao maior santuário mariano do mundo.\n\nORAÇÃO\n\nÓ gloriosa Mãe de Deus, Nossa Senhora de Guadalupe, Padroeira das Américas: Tu és a nossa Mãe compassiva. Curai as nossas penas, as nossas misérias e dores. Acolhei-nos no aconchego do teu manto e escutai, ó Mãe amada, as nossas fervorosas preces. Amém.",
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
                name: "N.S. de San Nicolas",
                fullName: "N.S. do Rosário de San Nicolás",
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
                imageUrl: "https://ambientesecostumes.wordpress.com/wp-content/uploads/2018/02/bom-sucesso-ae.jpg?w=544",
                images: [
                    "https://ambientesecostumes.wordpress.com/wp-content/uploads/2018/02/bom-sucesso-ae.jpg?w=544",
                    "https://blog.cancaonova.com/tododemaria/files/2015/11/Nossa_Senhora_Bom-Sucesso_.jpg",
                    "https://blog.cancaonova.com/tododemaria/files/2014/02/As-apari%C3%A7%C3%B5es-de-Nossa-Senhora-do-Bom-Sucesso-220x300.jpg"
                ],
                description: "Profecias de Quito",
                fullDescription: "A VIRGEM DAS PROFECIAS DE QUITO\n\nNossa Senhora do Bom Sucesso (Nuestra Señora del Buen Suceso) apareceu em 1594 à Madre Mariana de Jesus Torres, no convento da Imaculada Conceição em Quito, Equador. A Virgem revelou-lhe detalhes impressionantes sobre acontecimentos futuros, especialmente profetizando uma grande crise de fé, corrupção dos costumes e perseguição à Igreja que ocorreria a partir de meados do século XX.\n\nA imagem foi milagrosamente finalizada por anjos na noite de 16 de janeiro de 1611, enquanto o escultor dormia. Madre Mariana ofereceu sua vida como vítima expiatória pelos pecados do nosso tempo. A Virgem prometeu proteger de forma especial todos os devotos que a invocassem sob este título nos tempos difíceis que ela descreveu.\n\nORAÇÃO\n\nÓ Virgem do Bom Sucesso, Mãe puríssima e Rainha do Céu, que prometestes proteção especial nos tempos de crise e provação. Olhai com misericórdia para nós, fortalecei nossa fé, protegei nossas famílias e a Santa Igreja. Concedei-nos a graça que vos suplicamos e guia-nos sempre ao Coração de vosso Filho Jesus. Amém.",
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
                id: "caridade",
                name: "N.S. da Caridade",
                country: "Cuba",
                countryFlag: "🇨🇺",
                date: "8 de Setembro",
                imageUrl: "https://comeceodiafeliz.com.br/assets/uploads/maria/nossa-senhora-da-caridade-do-cobre.jpg",
                images: [
                    "https://comeceodiafeliz.com.br/assets/uploads/maria/nossa-senhora-da-caridade-do-cobre.jpg",
                    "https://gaudiumpress.org/wp-content/uploads/2021/07/Virgen-de-la-Caridad-1-aspect-ratio-394-290.jpg",
                    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgplFq6e-qNfH1vZDv_34Uv2KA1gHpEkUNfkHVCpLdETR1Y3DHpxGTbBJCY9tuldoi3a6RyHxxWVpKQBk5lEG-X-KbAz4Nh2VWiJHFkomKErJwSQnhrhRPVMoicifOki8DFA4_3yoN0AHs/s1600/73a74f802b63b43f1002aa113dd417bb.jpg"
                ],
                description: "La Mambisa - Padroeira de Cuba",
                fullDescription: "A VIRGEM DA CARIDADE DO COBRE\n\nNossa Senhora da Caridade do Cobre é a padroeira e Rainha de Cuba, sendo o maior símbolo de fé, identidade e resistência do povo cubano. A sua história começa em 1612, na baía de Nipe, quando três trabalhadores das minas de cobre – dois irmãos indígenas e um jovem negro – avistaram algo flutuando no mar agitado. Era uma imagem da Virgem Maria flutuando sobre uma tábua com a inscrição: 'Eu sou a Virgem da Caridade'. Milagrosamente, as vestes da Virgem não estavam molhadas.\n\nA imagem foi levada para o povoado de El Cobre, onde um grande santuário foi construído. A Virgem tornou-se conhecida como 'La Mambisa', padroeira dos soldados que lutaram pela independência de Cuba. Durante séculos, ela tem sido refúgio de todos os cubanos, dentro e fora da ilha, nos tempos de glória e nas épocas mais difíceis de ditadura e exílio.\n\nORAÇÃO\n\nÓ Virgem da Caridade, que viestes a nós pelas águas do mar para ser a Mãe de todos os cubanos. Protegei vossos filhos onde quer que estejam, consolai os aflitos e alcançai-nos de Jesus a graça da paz, da liberdade e do profundo amor fraterno. Amém.",
                status: "approved",
                statusNote: "Padroeira de Cuba; declarada pelo Papa Bento XV em 1916"
            },
            {
                id: "caacupe",
                name: "N.S. de Caacupé",
                country: "Paraguai",
                countryFlag: "🇵🇾",
                date: "8 de Dezembro",
                imageUrl: "https://wp.pt.aleteia.org/wp-content/uploads/sites/5/2018/04/virgen-de-caacupe1.jpg",
                images: [
                    "https://wp.pt.aleteia.org/wp-content/uploads/sites/5/2018/04/virgen-de-caacupe1.jpg",
                    "https://scalabrinianos.com/wp-content/uploads/2023/08/2023-08-08_Virgem-de-Caacupe_mobile.png",
                    "https://www.clickideia.com.br/f2/disc/not/imagem/NOT0911230501_01.jpg"
                ],
                description: "Padroeira do Paraguai",
                fullDescription: "A PADROEIRA DO PARAGUAI\n\nA devoção a Nossa Senhora dos Milagres de Caacupé remonta ao século XVI e é o próprio coração católico do Paraguai. A famosa lenda guarani conta que um indígena convertido, de nome José, viu-se subitamente cercado por guerreiros impiedosos de uma tribo rival, os Mbayás. Correndo sério risco de vida, ele conseguiu se abrigar atrás de um imenso tronco de árvore no meio da mata e prometeu intensamente à Virgem Maria que, se ela o salvasse, ele esculpiria uma imagem dela com a madeira daquela mesmíssima árvore.\n\nO MILAGRE NO TRONCO\n\nMilagrosamente, seus inimigos passaram muito perto do tronco sem sequer notarem sua presença abrigada. Fiel à sua promessa de vida, José esculpiu duas imagens formidáveis de Nossa Senhora a partir daquela madeira. A menor das obras deu origem à grandiosa e definitiva devoção da Virgem de Caacupé, logo após José e seus contemporâneos serem repentinamente salvos de uma perigosíssima inundação.\n\nHoje, a formidável Basílica de Caacupé atrai milhares de fervorosos compatriotas do país e do mundo inteiro todos os anos. A imagem é amplamente inconfundível por conta de seus naturais e densos cabelos escuros e o exuberante manto azul ricamente bordado em ouro, refletindo as estrelas do céu.\n\nORAÇÃO\n\nVirgem Santíssima de Caacupé, ó amada Mãe milagrosa e padroeira de nossas famílias, que escolheste um humilde tronco e o coração simples de um indígena para fazer morada: vede os nossos clamores nas aflições. Acolhei os nossos mais dolorosos pedidos em teu colo protetor e concedei-nos a vossa benção materna. Amém.",
                status: "approved",
                statusNote: "Padroeira unânime do Paraguai; visitada pessoalmente pelo Papa João Paulo II e o Papa Francisco"
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
                imageUrl: "https://m.media-amazon.com/images/I/51BVWFOZi3L._AC_UF894,1000_QL80_.jpg",
                images: [
                    "https://m.media-amazon.com/images/I/51BVWFOZi3L._AC_UF894,1000_QL80_.jpg",
                    "https://m.media-amazon.com/images/I/51K5Z18OFGL.jpg",
                    "https://cdn.sanity.io/images/7kfhaqns/production/3041efcd990b60f04c9e9c4ab2933d608682b39d-640x359.png",
                    "https://www.marypages.com/assets/images/ori/OurLadyofAmericaS.JPG"
                ],
                description: "Pureza e habitação da Trindade",
                fullDescription: "A VIRGEM DA PUREZA E DA AMÉRICA\n\nNossa Senhora da América apareceu nos Estados Unidos durante a década de 1950 à Irmã Mildred Mary Ephrem Neuzil, uma religiosa da Congregação das Irmãs do Preciosíssimo Sangue, em Rome City, Indiana. A Virgem apresentou-se com um grande foco na pureza interior e na santificação da família moderna.\n\nMaria pediu que os Estados Unidos dessem o exemplo para o mundo em pureza de vida, enfatizando a 'Inabitação da Santíssima Trindade' na alma humana como um refúgio de paz. Ela também solicitou que uma estátua com o título de 'Nossa Senhora da América' fosse entronizada solenemente no Santuário Nacional da Imaculada Conceição em Washington, D.C.\n\nORAÇÃO\n\nÓ Virgem Imaculada, Mãe de Deus e Nossa Mãe, Virgem da América, nós nos consagramos à vossa pureza heroica. Livrai as nações das corrupções morais, fortalecei as nossas famílias e ajudai-nos a ser moradas puras da Santíssima Trindade. Conduzi-nos ao Coração Eucarístico do vosso Filho Jesus. Amém.",
                status: "pending",
                statusNote: "Aprovação de culto local"
            },
            {
                id: "cuapa",
                name: "N.S. de Cuapa",
                country: "Nicarágua",
                countryFlag: "🇳🇮",
                date: "8 de Maio",
                imageUrl: "https://i.pinimg.com/474x/12/1b/88/121b8855b2fdee8f4b857157a8d7e623.jpg",
                images: [
                    "https://i.pinimg.com/474x/12/1b/88/121b8855b2fdee8f4b857157a8d7e623.jpg",
                    "https://sagradoscoracoesunidos.org/wp-content/uploads/2021/05/NSra-Cuapa-Nicaragua.jpeg",
                    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiMoh0tMlCXOM7n638Cnfc3TZjC1aGi42zP5vvGThhAqaIJqUJmU_8_Grb0M2hIrEAvY-YqbVkPkjjw3xdVIfUlw3GgTaPeBpia5FYcA_otPWCjMs6lIXMSQ038LODNGvxpZEJvKaaVizdW/s1600/nossa+senhora+de+cuapa.jpg",
                    "https://www.shutterstock.com/image-vector/blessed-virgin-mother-mary-our-260nw-2628205065.jpg"
                ],
                description: "Reconciliação e paz (1980)",
                fullDescription: "A MENSAGEIRA DA PAZ\n\nNossa Senhora de Cuapa é uma devoção nascida das impressionantes aparições em San Francisco de Cuapa, Nicarágua. Em 8 de maio de 1980, um fervoroso camponês e sacristão chamado Bernardo Martinez relatou que, após ter visto uma luz sobrenatural iluminar a capela antiga nos dias anteriores, a própria Virgem Maria manifestou-se a ele em um campo próximo.\n\nNaquela época, a Nicarágua enfrentava dolorosos confrontos de uma guerra civil e enorme instabilidade social. Nossa Senhora emitiu através de suas mensagens não apenas pedidos espirituais, como a reza diária do Santo Rosário em família, mas uma fervorosa conclamação de ordem moral: advertiu que pedir apenas a paz mundial e dos corações a Deus seria inútil se os próprios nicaraguenses e todos os cristãos não se perdoassem, se reconciliassem e construíssem eles mesmos a paz no cotidiano.\n\nAs curas e promessas que envolveram o caso foram submetidas ao episcopado nicaraguense, o qual julgou e reconheceu favoravelmente o caráter autêntico e sobrenatural das aparições de Cuapa em 1982 e 1994, transformando o humilde vale em um santuário concorrido de união regional.\n\nORAÇÃO\n\nRainha da Paz e Virgem de Cuapa, rogamos que voltes teus bondosos olhos maternais para as desavenças do mundo e da nossa vida diária. Instrui-nos para sermos incansáveis pacificadores e defensores da vida e do amor. Fortalecei a nossa fragilidade com a Vossa proteção para que superemos qualquer divisão, servindo a Deus com todo o coração. Amém.",
                status: "approved",
                statusNote: "Reconhecida como sobrenatural pelos bispos da Nicarágua em 1982 e 1994"
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
                name: "N.S. de San Juan",
                fullName: "N.S. de San Juan de los Lagos",
                country: "México",
                countryFlag: "🇲🇽",
                date: "2 de Fevereiro",
                imageUrl: "https://c8.alamy.com/comp/2BWFT4P/nuestra-senora-de-san-juan-de-los-lagos-statue-at-side-altar-immaculate-conception-cathedral-brownsville-rio-grande-valley-texas-usa-2BWFT4P.jpg",
                objectPosition: "top",
                images: [
                    "https://c8.alamy.com/comp/2BWFT4P/nuestra-senora-de-san-juan-de-los-lagos-statue-at-side-altar-immaculate-conception-cathedral-brownsville-rio-grande-valley-texas-usa-2BWFT4P.jpg",
                    "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/VSJL.JPG/250px-VSJL.JPG",
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF3UnTxCWWlCZIYiLjP41Tqmf8L0wQCvpsLQ&s"
                ],
                description: "Segunda maior peregrinação do México",
                fullDescription: "A VIRGEM DOS MILAGRES DE JALISCO\n\nNossa Senhora de San Juan de los Lagos é uma formosa e venerada imagem mariana em Jalisco, no México. Feita de pasta de cana-de-açúcar moldada por mãos artesãs no século XVI, a pequena estátua ganhou imensa devoção mundial a partir do ano de 1623.\n\nNaquela época, uma família de acrobatas estava de passagem e se apresentando na vila. Durante um perigoso salto sobre espadas afiadas, a filha do trapezista se desequilibrou e caiu mortalmente, falecendo no local. Uma mulher idosa pediu aos pais aflitos que levassem a pequena estátua da Virgem de San Juan e a colocassem sobre o corpo sem vida da menina. Após fervorosas orações de todos os presentes, a criança reviveu milagrosamente e sem os ferimentos letais.\n\nDesde esse estonteante milagre da ressurreição, devotos acorrem aos milhões para o santuário para agradecer e pedir amparo, tornando San Juan de los Lagos o segundo santuário mais visitado de todo o México, atrás apenas de Guadalupe.\n\nORAÇÃO\n\nMãe puríssima de San Juan de los Lagos, tu que trazes vida e esperança para aqueles que sofrem. Socorrei-nos em nossos tombos diários. Reerguei-nos da escuridão e curai todas as nossas aflições, concedendo-nos a graça de amarmos perpetuamente o Vosso Filho Jesus. Amém.",
                status: "approved",
                statusNote: "Milagre de 1623 documentado; Imagem coroada pelo Papa Pio X"
            },
            {
                id: "divina_pastora",
                name: "Divina Pastora",
                country: "Venezuela",
                countryFlag: "🇻🇪",
                date: "14 de Janeiro",
                imageUrl: "https://i.pinimg.com/1200x/79/67/df/7967df5f7c26fa60d865267decb6b569.jpg",
                images: [
                    "https://i.pinimg.com/1200x/79/67/df/7967df5f7c26fa60d865267decb6b569.jpg",
                    "https://media.vaticannews.va/media/content/dam-archive/vaticannews/multimedia/2020/01/07/OKI.jpg/_jcr_content/renditions/cq5dam.thumbnail.cropped.1500.844.jpeg",
                    "https://upload.wikimedia.org/wikipedia/commons/3/3f/Pastora_Divina.jpg"
                ],
                description: "A Pastora das Almas - Procissão gigante de Barquisimeto",
                fullDescription: "A PASTORA DAS ALMAS\n\nA Divina Pastora é uma das devoções marianas mais queridas e apaixonantes da Venezuela. A imagem, que representa Nossa Senhora como uma pastora vestida de verde segurando um bordão e um cordeiro, foi esculpida no início do século XVIII pelo frei capuchinho Sevilhano Isidoro de Sevilla, que a presenteou à cidade de Barquisimeto, no Estado de Lara, por volta de 1736.\n\nA MAIOR PROCISSÃO DA AMERICA DO SUL\n\nCada segundo sábado de Janeiro, Barquisimeto presencia a maior procissão mariana da América do Sul. Cerca de dois a três milhões de devotos saem às ruas para acompanhar a imagem sagrada da Divina Pastora desde a cidade de Santa Rosa até a Catedral de Barquisimeto, percorrendo 22 quilômetros num cortejo de fé que dura horas. Este ato de piedade popular é reconhecido como um dos maiores eventos religiosos do continente americano.\n\nO MILAGRE DE 1856\n\nA devoção intensificou-se enormemente após o milagre de 1856, quando uma epidemia de cólera assolava Venezuela. Os moradores de Santa Rosa fizeram uma promessa: se a Divina Pastora os protegesse, levá-la-iam em procissão anual à catedral. A epidemia cessou ao chegar à cidade, sendo atribuída essa graça à intercessão de Nossa Senhora. Desde então, a procissão não parou mais, tornando-se uma tradição secular de gratidão e fé.\n\nORAÇÃO\n\nÓ Divina Pastora, que com tua bondade maternal cuidas de cada ovelha de teu rebanho, guia nossos passos pelos caminhos da virtude. Afasta de nós os lobos do pecado e da desesperança. Conduz-nos, ó Mãe, seguros ao aprisco eterno do Pai Celestial. Amém.",
                status: "approved",
                statusNote: "Procissão oficial reconhecida como Patrimônio Cultural da Venezuela"
            },
            {
                id: "coromoto",
                name: "N.S. de Coromoto",
                country: "Venezuela",
                countryFlag: "🇻🇪",
                date: "11 de Setembro",
                imageUrl: "https://www.sosfamilia.org.br/wp-content/uploads/2023/09/COROMOTO-1-e1694445113595.jpg",
                images: [
                    "https://www.sosfamilia.org.br/wp-content/uploads/2023/09/COROMOTO-1-e1694445113595.jpg",
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6tX4PhZ8bLlDA8H3nrjVkcMYRa9Px88qqyA&s",
                    "https://i0.wp.com/www.sosfamilia.org.br/wp-content/uploads/2023/09/COROMOTO.jpg?w=678&ssl=1"
                ],
                description: "A Padroeira da Venezuela",
                fullDescription: "A PADROEIRA DA VENEZUELA\n\nEm 8 de setembro de 1652, a Virgem Maria apareceu ao Cacique dos índios Coromoto e sua esposa, exortando-os a serem batizados. Diferente de outras aparições, em 11 de setembro de 1652, ela apareceu novamente na humilde cabana do Cacique. Quando ele tentou agarrá-la, ela desapareceu, deixando em sua mão uma pequena relíquia: uma estampa de pergaminho com sua imagem, que hoje é venerada no Santuário Nacional em Guanare.\n\nNossa Senhora de Coromoto é a Padroeira da Venezuela desde 1942. Sua mensagem de conversão e batismo foi fundamental para a evangelização dos povos indígenas da região.\n\nORAÇÃO\n\nNossa Senhora de Coromoto, Padroeira da Venezuela, abençoai nossa nação e nossas famílias. Pedimos vossa intercessão para que vivamos sempre na luz do Evangelho e caminhemos com fé e esperança. Mãe de misericórdia, rogai por nós. Amém.",
                status: "approved",
                statusNote: "Padroeira da Venezuela declarada em 1942 pelo Episcopado venezuelano"
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
                name: "N.S. de Cimbres",
                fullName: "N.S. das Graças de Cimbres",
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
    },
    {
        name: "Oceania",
        emoji: "🌏",
        iconUrl: "/images/oceania_icon.png",
        devotions: [
            {
                id: "auxiliadora_australia",
                name: "N.S. Auxiliadora",
                country: "Austrália",
                countryFlag: "🇦🇺",
                date: "24 de Maio",
                imageUrl: "/images/ns_auxiliadora_australia.png",
                description: "Padroeira da Austrália",
                fullDescription: "A PADROEIRA DA TERRA DO SUL\n\nNossa Senhora Auxiliadora (Our Lady Help of Christians) detém um título singular na história da Igreja: a Austrália foi o primeiro país do mundo a consagrar-se inteiramente a Maria sob esta invocação como sua padroeira principal. Esta escolha, feita em 1844, reflete a profunda confiança dos primeiros católicos australianos — muitos deles imigrantes irlandeses e degredados — na proteção maternal de Maria em uma terra então desconhecida e desafiadora.\n\nHISTÓRIA E PIONEIRISMO\n\nNos primórdios da colonização australiana, a Igreja Católica enfrentou períodos de perseguição e escassez de sacerdotes. Durante anos, a fé foi mantida viva nos lares através da oração do Terço. Em 1844, o Primeiro Sínodo Provincial da Austrália escolheu Nossa Senhora Auxiliadora como padroeira, uma decisão confirmada pela Santa Sé. O título era particularmente significativo para um povo que se sentia isolado e necessitado de 'auxílio' constante. A St. Mary's Cathedral em Sydney, o coração espiritual do país, foi dedicada a ela e abriga uma das estátuas mais belas de Maria Auxiliadora do mundo.\n\nSIMBOLISMO E DEVOÇÃO\n\nNa Austrália, Maria Auxiliadora é vista como a defensora da fé e a guia dos que buscam um novo começo. O dia 24 de maio é um feriado litúrgico de grande importância nacional. A devoção une as diversas etnias que compõem a Austrália moderna, desde as raízes europeias até as comunidades imigrantes mais recentes, todos sob o manto da mesma Mãe que auxiliou os pioneiros nas horas de maior provação.\n\nMENSAGEM ESPIRITUAL\n\nNossa Senhora Auxiliadora nos ensina que nunca estamos sozinhos, mesmo nos 'confins da terra'. Ela é a Mãe que intervém prontamente nas dificuldades, protegendo a família e fortalecendo a fé. Assim como sustentou a pequena comunidade católica australiana em seus começos heróicos, ela continua a ser o porto seguro para todos os que atravessam as incertezas da vida.",
                status: "approved",
                statusNote: "Proclamada Padroeira em 1844"
            },
            {
                id: "assuncao_nz",
                name: "N.S. da Assunção",
                country: "Nova Zelândia",
                countryFlag: "🇳🇿",
                date: "15 de Agosto",
                imageUrl: "/images/ns_assuncao_nz.png",
                description: "Padroeira da Nova Zelândia",
                fullDescription: "A MÃE DE AOTEAROA\n\nA devoção a Nossa Senhora da Assunção na Nova Zelândia (conhecida em língua Maori como Aotearoa) é tão antiga quanto a própria presença organizada da Igreja no país. Em 1838, o primeiro bispo católico, Dom Jean-Baptiste Pompallier, ao celebrar sua primeira missa em solo neozelandês, dedicou toda a nação à Imaculada Virgem Assunta ao Céu. Esta consagração original deu o tom da espiritualidade católica naquelas ilhas.\n\nRENOVAÇÃO E IDENTIDADE\n\nEm 2021, em um gesto histórico de unidade, todos os bispos da Nova Zelândia se reuniram na Igreja de Santa Maria dos Anjos, em Wellington, para renovar solenemente a consagração do país. Maria é carinhosamente chamada de 'Hakihi' (A Santa) por muitas comunidades Maori, que veem nela a protetora da dignidade humana e da criação. A Assunção simboliza, para os neozelandeses, a esperança de que toda a criação será elevada e transfigurada por Deus.\n\nSANTUÁRIO NACIONAL\n\nO Santuário Nacional de Maria Assunta ao Céu, em Wellington, é o ponto focal desta devoção. O edifício é uma joia arquitetônica que resistiu a terremotos, simbolizando a fé resiliente do povo Kiwi. Ali, Maria é honrada como a Rainha que, tendo sido elevada ao céu, não se esquece de seus filhos que habitam as ilhas do oceano meridional.\n\nMENSAGEM ESPIRITUAL\n\nNossa Senhora da Assunção nos convida a olhar para o alto, lembrando-nos de que nosso destino final é a glória de Deus. No contexto da Nova Zelândia, com sua natureza exuberante, Maria Assunta é também a guardiã da beleza do mundo, ensinando-nos que a matéria e o espírito estão destinados à eternidade em Cristo.",
                status: "approved",
                statusNote: "Consagrada em 1838; reconsagrada em 2021"
            },
            {
                id: "paz_oceania",
                name: "N.S. Rainha da Paz",
                country: "Oceania (Geral)",
                countryFlag: "🌏",
                date: "9 de Julho",
                imageUrl: "/images/ns_paz_oceania.png",
                description: "Padroeira da Oceania",
                fullDescription: "A RAINHA DO GRANDE OCEANO\n\nA Oceania é um continente composto por milhares de ilhas espalhadas pela vastidão do oceano Pacífico, abrigando uma diversidade imensa de povos e culturas. Diante das tensões históricas e dos desafios de unidade, os bispos da região, reunidos no Sínodo para a Oceania em 1998 sob o impulso de São João Paulo II, escolheram um título que unisse a todos: Nossa Senhora, Rainha da Paz.\n\nO SÍNODO E A CONSAGRAÇÃO\n\nMaria foi proclamada Padroeira da Oceania para ser a ponte entre as culturas. Em um continente onde as águas muitas vezes isolam os povos, Maria é a força espiritual que os une. O título de Rainha da Paz foi escolhido para pedir sua intercessão contra os conflitos étnicos, as injustiças sociais e as ameaças ambientais (como o aumento do nível do mar) que pesam sobre as ilhas do Pacífico.\n\nUMA PRESENÇA MATERNAL NAS ILHAS\n\nDe Fiji a Papua Nova Guiné, das Ilhas Salomão a Samoa, a imagem da Rainha da Paz é frequentemente adaptada à estética local, mostrando uma Maria que compreende a linguagem do mar e dos ventos. Ela é invocada para trazer harmonia e reconciliação, lembrando a cada comunidade que todos são irmãos no mesmo oceano da misericórdia divina.\n\nMENSAGEM ESPIRITUAL\n\nRainha da Paz da Oceania nos ensina que a paz não é apenas ausência de guerra, mas a presença harmoniosa de Deus em meio à diversidade. Ela nos convida a ser 'ilhas de misericórdia' em um mundo muitas vezes agitado, mantendo a serenidade e a luz mesmo nas tempestades mais fortes.",
                status: "approved",
                statusNote: "Padroeira Continental Proclamada em 1998"
            },
            {
                id: "estrela_mar_pacifico",
                name: "N.S. Estrela do Mar",
                country: "Samoa / Ilhas do Pacífico",
                countryFlag: "🇼🇸",
                date: "27 de Setembro",
                imageUrl: "/images/ns_estrela_do_mar_pacifico.png",
                description: "Guia dos Navegantes do Pacífico",
                fullDescription: "STELLA MARIS NO CORAÇÃO DO PACÍFICO\n\nA devoção a Nossa Senhora Estrela do Mar (Stella Maris) é visceral para os povos da Oceania, cujas vidas dependem inteiramente do oceano. Em Samoa, Fiji e Kiribati, Maria é a estrela espiritual que brilha sobre as águas, guiando as canoas tradicionais e os grandes navios modernos. Para estes povos, o mar é ao mesmo tempo provedor de vida e fonte de perigo, e Maria é a guardiã segura.\n\nA LUZ DO CRUZEIRO DO SUL\n\nHá um simbolismo poético muito forte que une Maria ao Cruzeiro do Sul, a constelação que guiava os antigos navegantes polinésios. Maria é vista como a verdadeira estrela que não se põe, indicando o caminho para o porto seguro que é Jesus Cristo. Em Samoa, a Catedral da Imaculada Conceição em Apia é um testemunho da fé desse povo que vê na pureza de Maria o brilho mais límpido das águas do Pacífico.\n\nPROTETORA DAS COMUNIDADES ISOLADAS\n\nEm muitas ilhas remotas, onde o contato com o mundo exterior é raro, a presença de uma pequena imagem da Estrela do Mar é o que mantém a esperança da comunidade. Ela é a Mãe que atravessa os mares para visitar seus filhos, lembrando-os de que nenhum atol é pequeno demais para o amor de Deus.\n\nMENSAGEM ESPIRITUAL\n\nNossa Senhora Estrela do Mar nos ensina a navegar as águas da vida com confiança. Ela nos lembra de que, mesmo nas noites mais escuras do sofrimento ou da dúvida, existe uma estrela que brilha para nós. Maria é o farol que aponta a direção correta, impedindo que nossa vida naufrague nos recifes do desespero.",
                status: "approved",
                statusNote: "Devoção Tradicional Marítima"
            }
        ]
    }
];
