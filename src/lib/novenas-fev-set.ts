// Novenas de Fevereiro a Setembro - Apenas estrutura (sem conteúdo dos dias)
type Novena = {
    saintName: string;
    novenaTitle: string;
    description: string;
    initialPrayer: string;
    finalPrayer: string;
    image?: string;
    days: {
        day: string;
        title: string;
        content: string;
    }[];
};

export const novenasFevereiroSetembro: Record<string, Novena> = {
    // FEVEREIRO
    nossa_senhora_lourdes: {
        saintName: "Nossa Senhora de Lourdes",
        novenaTitle: "Novena a Nossa Senhora de Lourdes",
        description: "Novena em preparação à festa de Nossa Senhora de Lourdes (11 de fevereiro).",
        image: "/images/ns_lourdes.png",
        initialPrayer: "Rezar a oração inicial para todos os dias.",
        finalPrayer: "Oh, Deus eterno e compassivo, concedei-nos a graça de viver santa e cristãmente, venerando a Virgem Santíssima de Lourdes, para que sejamos dignos de sua intercessão na vida e na hora da morte. Por Cristo nosso Senhor. Amém.\n\n**Oração Final (Debaixo de vosso amparo)**\nDebaixo de vosso amparo, acolhemo-nos, Santa Mãe de Deus. Não desprezeis nossas súplicas nas necessidades, mas sim livrai-nos de todos os perigos.\n\nOh, sempre Virgem gloriosa e bendita!\n\nV. Rogai por nós, Oh, Virgem de Lourdes!\n\nR. Para que sejamos dignos das promessas de Jesus Cristo.",
        days: [
            {
                day: "Dia 1",
                title: "Primeiro Dia - Nossa Senhora de Lourdes",
                content: "Rainha Imaculada que, aparecendo pessoalmente tal qual nascestes, a Senhora, na gruta de Lourdes, honrastes com vosso benigno olhar e com a comunicação de vossos segredos a pobre e enferma Bernadete, tanto menos estimada dos homens pela falta de toda cultura, quanto mais aceita por Vós pela pureza de sua inocência e o fervor de sua devoção.\n\nObtende para nós a graça de que, pondo sempre nossa glória em fazer-nos gratos ao Senhor com uma vida inteiramente conforme a nossos deveres, nós sejamos, ao mesmo tempo, merecedores sempre de vossas especiais bênçãos. Amém.\n\nTrês Ave-Marias e um Glória.\n\nPedir a graça que se deseja obter com esta novena."
            },
            {
                day: "Dia 2",
                title: "Segundo Dia - Nossa Senhora de Lourdes",
                content: "Oh, Virgem de Lourdes! Escolhida por Deus para ser Mãe de Jesus, tesoureira das divinas graças, refúgio e advogada dos pecadores! Prostrado humildemente a vossos pés, suplico-vos que sejais minha guia e saúde neste vale de lágrimas, porque nada posso nem devo fazer sem vós. Alcançai-me de vosso divino Filho o perdão de meus pecados, a perseverança no bem e a salvação de minha alma, para ser eternamente feliz e com sorte em vossa doce companhia nas mansões da glória. Amém.\n\nTrês Ave-Marias e um Glória.\n\nPedir a graça que se deseja obter com esta novena."
            },
            {
                day: "Dia 3",
                title: "Terceiro Dia - Nossa Senhora de Lourdes",
                content: "Oh, Virgem de Lourdes e Mãe minha, vida e esperança dos pobres, ancora dos náufragos, saúde dos enfermos e esperança dos que agonizam e morrem! Oh, Mãe minha! Depois de Deus, vós sois e serás minha única esperança nas tentações e perigos, na vida e na hora de minha morte.\n\nNão me deixes, oh, Maria! Amém.\n\nTrês Ave-Marias e um Glória.\n\nPedir a graça que se deseja obter com esta novena."
            },
            {
                day: "Dia 4",
                title: "Quarto Dia - Nossa Senhora de Lourdes",
                content: "Oh, Virgem puríssima de Lourdes! Vida de minha alma, alívio de minhas penas, suavidade e doçura de minhas aflições! As portas de vosso coração, oh, Mãe minha, chama este pecador enfermo, cuja dor, neste momento, é tão grande como seus pecados.\n\nCompadecei-Vos de mim, não me deixes, olhai com olhos de compaixão. Sanai-me, como Jesus aos leprosos, curai-me para que adore a Deus eternamente. Amém.\n\nTrês Ave-Marias e um Glória.\n\nPedir a graça que se deseja obter com esta novena."
            },
            {
                day: "Dia 5",
                title: "Quinto Dia - Nossa Senhora de Lourdes",
                content: "Oh, Virgem de Lourdes e rainha dos anjos, em cujos olhos brilha a fé que abrasa vosso Espírito! Ensinai-me a crer, mas a crer trabalhando, porque a fé sem obras é morta; porque os que estão cheios de pecados, que não fazem conforme a crença católica, estão nos calabouços do inferno.\n\nAjudai-me a crer na palavra divina e a trabalhar como Deus e a Igreja me mandam crer e trabalhar, pois a fé é luz e tem que iluminar minha alma e a conduzir pela senda da eterna bem-aventurança. Amém.\n\nTrês Ave-Marias e um Glória.\n\nPedir a graça que se deseja obter com esta novena."
            },
            {
                day: "Dia 6",
                title: "Sexto Dia - Nossa Senhora de Lourdes",
                content: "Oh, Virgem de Lourdes e Virgem das virgens, açucena candíssima, Virgem Imaculada, pomba sem mancha! Vós, que fostes concebida sem pecado, que tanto amais a castidade e tanto quereis a vossos filhos, tende compaixão de mim e livrai-me desta penosa concupiscência que me afunda em um mar de pecados.\n\nAlcançai-me de vosso Filho a graça da castidade, para viver na terra como os anjos do Céu. Amém.\n\nTrês Ave-Marias e um Glória.\n\nPedir a graça que se deseja obter com esta novena."
            },
            {
                day: "Dia 7",
                title: "Sétimo Dia - Nossa Senhora de Lourdes",
                content: "Oh, Virgem de Lourdes e soberana imperatriz dos céus, que, por amor a pobreza, vos sujeitastes a todas as privações e escassez dos pobres, ensinai-me a depreciar os luxos e presentes, e inspirai-me amor e compaixão aos pobres para conseguir com a isso o reino dos céus. Amém.\n\nTrês Ave-Marias e um Glória.\n\nPedir a graça que se deseja obter com esta novena."
            },
            {
                day: "Dia 8",
                title: "Oitavo Dia - Nossa Senhora de Lourdes",
                content: "Oh, Virgem de Lourdes, exemplar sublime de obediência, que se fazendo escrava do Senhor e humilhando-vos até viver sem própria vontade, merecestes que vos chamassem de bendita todas as gerações! Ensinai-me e ajudai-me, como a menina Bernadete, a ser obediente até a morte, porque a obediência é melhor que os sacrifícios, e quem segue obedecendo a Deus conseguirá chegar até o céu. Amém.\n\nTrês Ave-Marias e um Glória.\n\nPedir a graça que se deseja obter com esta novena."
            },
            {
                day: "Dia 9",
                title: "Nono Dia - Nossa Senhora de Lourdes",
                content: "Oh, Virgem de Lourdes, rainha dos mártires e esperança dos aflitos! Pela heroica paciência que resplandeceu em todos os atos de vossa vida mortal, desde Belém ao Calvário, desde a profecia de Simão até que Vos arrancaram dos braços o cadáver ensanguentado de vosso divino Filho, tende misericórdia de mim e ajudai-me a levar com cristã resignação o peso das cruzes que o Senhor tenha a enviar-me, para ganhar minha eterna felicidade na glória e viver em vossa doce companhia por todos os séculos. Amém.\n\nTrês Ave-Marias e um Glória.\n\nPedir a graça que se deseja obter com esta novena."
            }
        ]
    },

    sagrada_face: {
        saintName: "Sagrada Face",
        novenaTitle: "Novena à Sagrada Face",
        description: "Novena de reparação a Nosso Senhor ultrajado por nossos pecados. Festa: Terça-feira de Carnaval.",
        image: "/images/sagrada_face.png",
        initialPrayer: `<div class="prayer-block"><h4 class="section-title">Sobre a Devoção</h4><p>A devoção à Sagrada Face tem como objetivo principal fazer reparação a Nosso Senhor ultrajado por nossos pecados. Diz-se que o próprio Senhor incentivou esta devoção, ao deixar impressa Sua Sagrada Face no lenço da piedosa Verônica. Santa Teresinha do Menino Jesus foi grande incentivadora dessa devoção. O Papa Pio XI chegou a dizer: "Em toda casa e toda igreja haja um quadro da Santa Síndone".</p><p class="mt-4 italic">Esta versão em português da "Alpha Omega Novena" é de responsabilidade da Comunidade Totus Mariae e é publicada com permissão da Holy Face Association.</p><h4 class="section-title mt-6">Oração Preparatória Diária</h4><p>Oh Santíssima e Bendita Trindade, pela intercessão da Virgem Maria, cuja alma foi traspassada por uma espada de dor à vista da Paixão de Seu Divino Filho, suplicamos vosso auxílio para fazermos uma perfeita novena de reparação com Jesus, unidos com todas as Suas dores, amor e total abandono. Imploramos agora que todos os Anjos e Santos intercedam por nós enquanto rezamos esta Santa Novena à Sacratíssima Face de Jesus e para glória da Santíssima Trindade, Pai, Filho e Espírito Santo. Amém.</p></div>`,
        finalPrayer: `<div class="prayer-block"><h4 class="section-title">Ato de Consagração</h4><p>Oh Senhor Jesus, cremos firmemente em Vós e Vos amamos. Vós sois o Filho Eterno de Deus e o Filho Encarnado da Bem-Aventurada Sempre Virgem Maria. Vós sois o Senhor e Absoluto Condutor de toda criação. Nós Vos reconhecemos, portanto, como o Soberano Universal de todas as criaturas. Vós sois o Senhor e Supremo Governante de toda humanidade, e em reconhecimento de Vosso domínio nós nos consagramos a Vós agora e para sempre.</p><p class="mt-4">Amável Jesus, nós colocamos nossa família sob a proteção de Vossa Sagrada Face, e de Vossa Virgem Mãe Dolorosíssima. Prometemos ser fiéis a Vós pelo resto de nossas vidas e observar com fidelidade Vossos Santos Mandamentos. Diante dos homens jamais negaremos a Vós e a Vossos Divinos direitos sobre nós e toda a humanidade.</p><p class="mt-4">Concedei-nos a graça de não pecar novamente; no entanto, se cairmos, oh Divino Salvador, tende misericórdia de nós e restaurai-nos na Vossa graça. Irradiai Vosso Divino Semblante sobre nós e abençoai-nos agora e sempre. Acolhei-nos na hora de nossa morte em Vosso Reino por toda eternidade, pela intercessão de Vossa Mãe Santíssima, de todos os Vossos Santos que Vos contemplam no Céu, e os justos que Vos glorificam na terra.</p><p class="mt-4">Oh Jesus, cuidai de nós sempre e jamais Vos esqueçais de nós; protegei nossa família. Oh Mãe das Dores, pela glória eterna que desfrutais no Céu, pelos méritos de vossa amarga angústia na Sagrada Paixão de Vosso Amado Filho, nosso Senhor Jesus Cristo, obtende-nos a graça de que o Precioso Sangue derramado por Jesus pela redenção de nossas almas não tenha sido em vão. Nós Vos amamos, oh Mãe. Acolhei-nos e abençoai-nos. Protegei-nos na vida e na morte. Amém.</p><p class="mt-4 font-semibold">Glória ao Pai e ao Filho e ao Espírito Santo, como era no princípio, agora e sempre. Amém.</p></div>`,
        days: [
            {
                day: "Dia 1",
                title: "Primeiro Dia - Misericórdia e Purificação",
                content: `<div class="day-specific-content"><h4 class="section-title">Salmo 51, 3-4</h4><p class="italic">Tende piedade, ó meu Deus, misericórdia! Na imensidão de vosso amor, purificai-me! Lavai-me todo inteiro do pecado, e apagai completamente a minha culpa.</p><p class="mt-4">Oh Santíssima Face de Jesus, olhai com ternura sobre nós, pecadores. Sois um Deus Misericordioso, cheio de amor e compaixão. Mantende-nos puros de coração, para que sempre possamos Vos contemplar.</p><p class="mt-4">Maria, nossa Mãe, intercedei por nós; são José, rogai por nós.</p><p class="mt-4 font-semibold">Pelos méritos de vosso precioso Sangue e vossa Santa Face, oh Jesus, concedei-nos a graça (mencionar a graça pedida)… Perdão e misericórdia.</p><h4 class="section-title mt-6">Oração ao nosso Pai Todo-Poderoso</h4><p>Pai Altíssimo, vinde em nossos corações e preenchei-nos com vosso amor, para que, renunciando a todos os maus desejos, nós abracemos a Vós, nosso único bem. Dizei às nossas almas: "Eu sou vossa salvação"; dizei para que possamos ouvir. Nossos corações estão diante de Vós; abri nossos ouvidos; fazei que sigamos pressurosos vossa voz. Suplicamos que não escondais vossa Face de nós, oh Senhor! Abri nossos corações para que possais entrar. Reparai as mansões arruinadas, para que possais habitar em nós. Ouvi-nos, ó Pai Celeste, por vosso Filho Único, nosso Senhor Jesus Cristo, que vive e reina convosco e o Espírito Santo, Deus Único, agora e para sempre. Amém. <span class="italic">(Santo Agostinho)</span></p><p class="mt-4 font-semibold">Pai Nosso, 3 Ave-Marias, Glória</p><p class="mt-2 font-semibold">Oh Face Ensanguentada, oh Face Divina, a Vós toda adoração! (3 vezes)</p><p class="mt-2 italic">Recitar o Ato de Consagração</p></div>`
            },
            {
                day: "Dia 2",
                title: "Segundo Dia - Arrependimento",
                content: `<div class="day-specific-content"><h4 class="section-title">Salmo 51, 5-6a</h4><p class="italic">Eu reconheço toda a minha iniquidade, o meu pecado está sempre à minha frente. Foi contra vós, só contra vós, que eu pequei, e pratiquei o que é mau aos vossos olhos!</p><p class="mt-4">Santíssima Face de Jesus, nós estamos verdadeiramente arrependidos de Vos ter ferido tanto, fazendo constantemente o que é errado, e por todas as boas obras que falhamos em fazer. Imaculado Coração de Maria, São José, intercedei por nós, ajudai-nos a consolar a Sacratíssima Face de Jesus. Rogai para que possamos partilhar do tremendo amor que tendes um pelo outro, e pela Santíssima Trindade. Amém.</p><p class="mt-4 font-semibold">Pelos méritos de vosso precioso Sangue e vossa Santa Face, oh Jesus, concedei-nos a graça (mencionar a graça pedida)… Perdão e misericórdia.</p><h4 class="section-title mt-6">Oração ao Espírito Santo</h4><p>Vinde, Espírito Santo santificador, todo-poderoso Deus de amor, que cumulastes a Virgem Maria de graça, que maravilhosamente transformastes os corações dos apóstolos, que dotastes todos os vossos mártires com um milagroso heroísmo, vinde e santificai-nos, iluminai nossas mentes, fortalecei nossa vontade, purificai nossas consciências, retificai nossos julgamentos, incendiai nossos corações e preservai-nos da desgraça de resistir a vossas inspirações.</p><p class="mt-4">Consagramos a Vós nosso entendimento, nosso coração e nossa vontade, todo nosso ser no tempo e na eternidade. Que nosso entendimento seja sempre submisso às vossas celestes inspirações e aos ensinamentos de Vossa Santa Igreja Católica, da qual Vós sois o guia infalível; que nosso coração seja sempre inflamado do amor de Deus e ao próximo; que nossa vontade sempre se conforme à divina vontade, e toda nossa vida seja uma fiel imitação da vida e virtudes de nosso Senhor e Salvador, Jesus Cristo, a quem, com o Pai e convosco, seja a honra e a glória para sempre. Amém.</p><p class="mt-4 font-semibold">Pai Nosso, 3 Ave-Marias, Glória</p><p class="mt-2 font-semibold">Oh Face Ensanguentada, oh Face Divina, a Vós toda adoração! (3 vezes)</p><p class="mt-2 italic">Recitar o Ato de Consagração</p></div>`
            },
            {
                day: "Dia 3",
                title: "Terceiro Dia - Misericórdia Divina",
                content: `<div class="day-specific-content"><h4 class="section-title">Salmo 51, 6b-7</h4><p class="italic">Mostrais assim quanto sois justo na sentença, e quanto é reto o julgamento que fazeis. Vede, Senhor, que eu nasci na iniquidade e pecador já minha mãe me concebeu.</p><h4 class="section-title mt-6">Oração do Papa Pio IX</h4><p>Oh, meu Jesus, lançai sobre nós um olhar de misericórdia! Volvei Vossa Face para cada um de nós, como fizeste à Verônica, não para que A vejamos com os olhos corporais, pois não o merecemos. Mas volvei-A para os nossos corações, a fim de que, amparados sempre em Vós, possamos haurir nesta fonte inesgotável as forças necessárias para nos entregarmos ao combate que temos que sustentar. Amém.</p><p class="mt-4">Maria, nossa Mãe, intercedei por nós; são José, rogai por nós.</p><p class="mt-4 font-semibold">Pelos méritos de vosso precioso Sangue e vossa Santa Face, oh Jesus, concedei-nos a graça (mencionar a graça pedida)… Perdão e misericórdia.</p><h4 class="section-title mt-6">Oração de São Francisco</h4><p>Oh glorioso Deus altíssimo, iluminai as trevas do meu coração; concedei-me uma fé verdadeira, uma esperança firme, um amor perfeito e profunda humildade, para que com sabedoria, coragem e conhecimento, oh Senhor, eu possa fazer o que é verdadeiramente vossa santa vontade. Amém.</p><h4 class="section-title mt-6">Aos Anjos e Santos</h4><p>Nós Vos saudamos pela Sagrada Face e Sagrado Coração de Jesus, oh todos os Santos e Anjos de Deus. Nós nos alegramos em vossa glória e damos graças a nosso Senhor por todos os benefícios que Ele derramou sobre vós: nós O louvamos e glorificamos e vos oferecemos, para aumento de vossa alegria e glória, a Santíssima Face e o terno Coração de Jesus. Rogai para que sejamos formados segundo o Coração de Deus. Amém.</p><p class="mt-4 font-semibold">Pai Nosso, 3 Ave-Marias, Glória</p><p class="mt-2 font-semibold">Oh Face Ensanguentada, oh Face Divina, a Vós toda adoração! (3 vezes)</p><p class="mt-2 italic">Recitar o Ato de Consagração</p></div>`
            },
            {
                day: "Dia 4",
                title: "Quarto Dia - Humildade e Ternura",
                content: `<div class="day-specific-content"><h4 class="section-title">Salmo 51, 8-9</h4><p class="italic">Mas vós amais os corações que são sinceros, na intimidade me ensinais sabedoria. Aspergi-me e serei puro do pecado, e mais branco do que a neve ficarei.</p><p class="mt-4">Oh Senhor Jesus, que dissestes: "aprendei de Mim que sou manso e humilde de coração", e que manifestastes em Vossa Santa Face os sentimentos de Vosso divino coração, concedei que amemos ir com freqüência meditar sobre Vossa Face divina. Que nela possamos ler Vossa ternura e humildade, e aprendamos a formar nossos corações na prática destas duas virtudes que desejais ver brilhar em vossos servos.</p><p class="mt-4">Maria, nossa Mãe, intercedei por nós; são José, rogai por nós.</p><p class="mt-4 font-semibold">Pelos méritos de vosso precioso Sangue e vossa Santa Face, oh Jesus, concedei-nos a graça (mencionar a graça pedida)… Perdão e misericórdia.</p><h4 class="section-title mt-6">Oração em honra das Dores da Santíssima Virgem</h4><p>Oh Santíssima e aflita Virgem, Rainha dos Mártires, que permanecestes de pé junto à cruz, testemunhando a agonia de vosso Filho agonizante, olhai com ternura e piedade de Mãe para nós, ajoelhados diante de Vós para venerar vossas dores e apresentar nossos pedidos, com filial confiança, no santuário de vosso coração ferido. Apresentai-os por nós a Jesus, pelos méritos de Sua sacratíssima Paixão e morte, juntamente com vossos sofrimentos ao pé da cruz, e pela eficácia unida de ambos, obtende o favor que humildemente suplicamos. A quem iremos em nossas necessidades e misérias, senão a vós? Oh Mãe de Misericórdia, que tendo bebido tão profundamente do cálice de vosso Filho, aliviai misericordiosamente os sofrimentos daqueles que ainda suspiram nesta terra de exílio. Amém.</p><h4 class="section-title mt-6">Oração pelas Almas do Purgatório</h4><p>Meu Jesus, pelas dores que sofrestes em vossa agonia no jardim, em vossa flagelação e coroação de espinhos, no caminho do Calvário, em vossa crucifixão e morte, tende misericórdia das almas do Purgatório, e especialmente daquelas mais esquecidas. Livrai-as dos terríveis tormentos. Chamai-as e recebei-as no vosso doce abraço no Paraíso. Amém.</p><p class="mt-4 font-semibold">Pai Nosso, 3 Ave-Marias, Glória</p><p class="mt-2 font-semibold">Oh Face Ensanguentada, oh Face Divina, a Vós toda adoração! (3 vezes)</p><p class="mt-2 italic">Recitar o Ato de Consagração</p></div>`
            },
            {
                day: "Dia 5",
                title: "Quinto Dia - Paciência e Perdão",
                content: `<div class="day-specific-content"><h4 class="section-title">Salmo 51, 10-11</h4><p class="italic">Fazei-me ouvir cantos de festa e de alegria, e exultarão estes meus ossos que esmagastes. Desviai o vosso olhar dos meus pecados e apagai todas as minhas transgressões!</p><p class="mt-4">Sagrada Face de Jesus, Sagrado Semblante de Deus, quão grande é vossa paciência com a humanidade, quão infinito vosso perdão! Somos pecadores, não obstante nos amais. Isto nos dá coragem. Para a glória de vossa Santa Face e da Santíssima Trindade, ouvi-nos e atendei-nos.</p><p class="mt-4">Maria, nossa Mãe, intercedei por nós; são José, rogai por nós.</p><p class="mt-4 font-semibold">Pelos méritos de vosso precioso Sangue e vossa Santa Face, oh Jesus, concedei-nos a graça (mencionar a graça pedida)… Perdão e misericórdia.</p><h4 class="section-title mt-6">Oração a São José</h4><p>Querido são José! Adotai-nos como vossos filhos, cuidai de nossa salvação; olhai-nos dia e noite; preservai-nos das ocasiões de pecado; alcançai-nos a pureza de corpo e alma e o espírito de oração; por vossa intercessão junto a Jesus, concedei-nos um espírito de sacrifício, de humildade e de renúncia; obtende-nos um amor ardente a Jesus no Santíssimo Sacramento e um doce e terno amor a Maria, nossa Mãe. São José, permanecei conosco na vida, ficai conosco na morte e obtende-nos um julgamento favorável de Jesus, nosso misericordioso Salvador. Amém.</p><p class="mt-4 font-semibold">Pai Nosso, 3 Ave-Marias, Glória</p><p class="mt-2 font-semibold">Oh Face Ensanguentada, oh Face Divina, a Vós toda adoração! (3 vezes)</p><p class="mt-2 italic">Recitar o Ato de Consagração</p></div>`
            },
            {
                day: "Dia 6",
                title: "Sexto Dia - Pureza de Coração",
                content: `<div class="day-specific-content"><h4 class="section-title">Salmo 51, 12-13</h4><p class="italic">Criai em mim um coração que seja puro, dai-me de novo um espírito decidido. Ó Senhor, não me afasteis de vossa face, nem retireis de mim o vosso Santo Espírito.</p><p class="mt-4">Sejam nossos corações purificados, oh Senhor, pelo derramamento do Espírito Santo, e que Ele os torne fecundos pela aspersão de Seu orvalho divino.</p><p class="mt-4">Maria, castíssima esposa do Espírito Santo, intercedei por nós; são José, rogai por nós.</p><p class="mt-4 font-semibold">Pelos méritos de vosso precioso Sangue e vossa Santa Face, oh Jesus, concedei-nos a graça (mencionar a graça pedida)… Perdão e misericórdia.</p><h4 class="section-title mt-6">Oração a São Miguel Arcanjo</h4><p>Oh Vitorioso Príncipe, humilíssimo guardião da Igreja de Deus e das almas fiéis, que com tal caridade e zelo tomastes parte em tantos conflitos e tivestes tão grandes vitórias sobre o inimigo, pela conservação e proteção da honra e glória que todos devemos a Deus, bem como pela promoção da nossa salvação; vinde, nós vos rogamos, em nosso auxílio, porque somos continuamente sitiados por tão grandes perigos por nossos inimigos: a carne, o mundo e o demônio. E assim como fostes um líder para o povo de Deus no deserto, sede também nosso fiel líder e companheiro pelo deserto deste mundo, até que nos conduzais com segurança à feliz terra dos viventes, a pátria abençoada da qual somos todos exilados. Amém. <span class="italic">(Santo Aloísio)</span></p><p class="mt-4 font-semibold">Pai Nosso, 3 Ave-Marias, Glória</p><p class="mt-2 font-semibold">Oh Face Ensanguentada, oh Face Divina, a Vós toda adoração! (3 vezes)</p><p class="mt-2 italic">Recitar o Ato de Consagração</p></div>`
            },
            {
                day: "Dia 7",
                title: "Sétimo Dia - Conversão e Reparação",
                content: `<div class="day-specific-content"><h4 class="section-title">Salmo 51, 14-15</h4><p class="italic">Dai-me de novo a alegria de ser salvo e confirmai-me com espírito generoso! Ensinarei vosso caminho aos pecadores, e para vós se voltarão os transviados.</p><p class="mt-4">Senhor Jesus! Depois de contemplar vossa Face, desfigurada de dor, depois de meditar sobre Vossa Paixão com compunção e amor, como podem nossos corações não ser inflamados de um santo ódio ao pecado, que ainda hoje ultraja Vossa Adorável Face? Senhor, que não nos contentemos em ter apenas compaixão, mas que nos dês a graça de seguir-Vos tão de perto neste Calvário, que o opróbrio destinado a Vós caia sobre nós, oh Jesus, e que assim tenhamos uma parte, pequena que seja, em expiação do pecado. Amém.</p><p class="mt-4">Maria, nossa Mãe, intercedei por nós; são José, rogai por nós.</p><p class="mt-4 font-semibold">Pelos méritos de vosso precioso Sangue e vossa Santa Face, oh Jesus, concedei-nos a graça (mencionar a graça pedida)… Perdão e misericórdia.</p><h4 class="section-title mt-6">Oração em honra de Maria</h4><p>Ave, Maria, Filha de Deus Pai. Ave, Maria, Mãe de Deus Filho. Ave, Maria, Esposa do Espírito Santo. Ave, Maria, templo da Santíssima Trindade. Ave, Maria, Senhora minha, meu bem, meu amor, Rainha do meu coração, Mãe, vida, doçura e esperança minha mui querida, meu coração e minha alma. Sou todo vosso, e tudo que possuo é vosso, ó Virgem sobre todos bendita. Esteja, pois, em mim vossa alma, para engrandecer o Senhor, esteja em mim vosso espírito, para rejubilar em Deus. Colocai-vos, ó Virgem fiel, como selo sobre meu coração, para que, em vós e por vós, seja eu achado fiel a Deus. Concedei, ó Mãe de misericórdia, que me encontre no número dos que amais, ensinais, guiais, sustentais e protegeis como filhos. Fazei que, por vosso amor, despreze todas as consolações da terra e aspire só às celestes; até que, para a glória do Pai, Jesus Cristo, vosso Filho, seja formado em mim, pelo Espírito Santo, vosso Esposo fidelíssimo, e por vós, sua Esposa mui fiel. Assim seja. <span class="italic">(São Luís Maria Grignon de Montfort)</span></p><p class="mt-4 font-semibold">Pai Nosso, 3 Ave-Marias, Glória</p><p class="mt-2 font-semibold">Oh Face Ensanguentada, oh Face Divina, a Vós toda adoração! (3 vezes)</p><p class="mt-2 italic">Recitar o Ato de Consagração</p></div>`
            },
            {
                day: "Dia 8",
                title: "Oitavo Dia - Proteção e Cura",
                content: `<div class="day-specific-content"><h4 class="section-title">Salmo 51, 16-17</h4><p class="italic">Da morte como pena, libertai-me, e minha língua exaltará vossa justiça! Abri meus lábios, ó Senhor, para cantar, e minha boca anunciará vosso louvor.</p><p class="mt-4">Misericordiosíssima Face de Jesus, que neste vale de lágrimas fostes tão tocado por nosso infortúnio para serdes chamado curador dos doentes e bom Pastor das ovelhas perdidas, não permitais que Satanás nos leve para longe de vós, mas mantende-nos sob vossa amável proteção, junto com todas as almas que se empenham em Vos consolar.</p><p class="mt-4">Maria, nossa Mãe, intercedei por nós; são José, rogai por nós.</p><p class="mt-4 font-semibold">Pelos méritos de vosso precioso Sangue e vossa Santa Face, oh Jesus, concedei-nos a graça (mencionar a graça pedida)… Perdão e misericórdia.</p><h4 class="section-title mt-6">Oração a São Pedro</h4><p>Ó glorioso São Pedro, que por vossa vibrante e generosa fé, profunda e sincera humildade e vosso flamejante amor, foi honrado por Nosso Senhor com singulares privilégios e em especial a liderança dos outros apóstolos e o primado de toda a Sua Igreja, da qual fostes feito a pedra angular. Obtende-nos a graça de uma fé viva, que não tema professar-se abertamente e em plenitude e em todas as suas manifestações, mesmo até o derramamento de sangue, se preciso for, e até o sacrifício da própria vida para não renunciá-la. Obtende-nos também uma lealdade sincera à nossa Santa Madre Igreja. Concedei-nos que permaneçamos cada vez mais próximos e unidos ao Santo Padre, que é o herdeiro de vossa fé e de vossa autoridade, única e verdadeira cabeça visível da Igreja Católica. Concedei-nos ainda que sigamos, com toda humildade e mansidão, o ensinamento e conselho da Igreja e sejamos obedientes a todos os seus preceitos, para que sejamos capazes de desfrutar na terra da paz que é verdadeira e imperturbável, e para conseguirmos um dia no céu a felicidade eterna. Amém.</p><p class="mt-4 font-semibold">Pai Nosso, 3 Ave-Marias, Glória</p><p class="mt-2 font-semibold">Oh Face Ensanguentada, oh Face Divina, a Vós toda adoração! (3 vezes)</p><p class="mt-2 italic">Recitar o Ato de Consagração</p></div>`
            },
            {
                day: "Dia 9",
                title: "Nono Dia - Gratidão e Confiança",
                content: `<div class="day-specific-content"><h4 class="section-title">Salmo 51, 18-21</h4><p class="italic">Pois não são de vosso agrado os sacrifícios, e, se oferto um holocausto, o rejeitais. Meu sacrifício é minha alma penitente, não desprezeis um coração arrependido! Sede benigno com Sião, por vossa graça, reconstruí Jerusalém e os seus muros! E aceitareis o verdadeiro sacrifício, os holocaustos e oblações em vosso altar!</p><p class="mt-4">Sagrada Face de nosso Senhor e nosso Deus, que palavras teremos para expressar nossa gratidão? Como podemos falar de nossa alegria? Que vos dignastes ouvir-nos, que escolhestes atender-nos em nossa hora de necessidade. Dizemos isto porque sabemos que nossas orações serão atendidas. Sabemos que Vós, em vossa amorosa ternura, ouvistes nossos corações suplicantes, e nos dareis, de vossa plenitude, a resposta para nossos problemas.</p><p class="mt-4">Maria, nossa Mãe, intercedei por nós; são José, rogai por nós.</p><p class="mt-4 font-semibold">Pelos méritos de vosso precioso Sangue e vossa Santa Face, oh Jesus, concedei-nos a graça (mencionar a graça pedida)… Perdão e misericórdia.</p><h4 class="section-title mt-6">Oração à Santíssima Trindade</h4><p>Santíssima Trindade, Divindade indivisível, Pai, Filho e Espírito Santo, nosso primeiro começo e nosso último fim. Como nos fizestes segundo Vossa própria imagem e semelhança, concedei-nos que todos os pensamentos de nossas mentes, todas as palavras de nossas bocas, todas as afeições de nossos corações e todas as nossas ações sejam sempre conformes a vossa Santíssima Vontade, para que depois de Vos vermos aqui na terra sob aparências e de maneira nebulosa por meio da fé, por fim cheguemos a contemplar-Vos face a face, na posse perfeita de Vós para sempre no Paraíso. Amém.</p><p class="mt-4 font-semibold">Pai Nosso, 3 Ave-Marias, Glória</p><p class="mt-2 font-semibold">Oh Face Ensanguentada, oh Face Divina, a Vós toda adoração! (3 vezes)</p><p class="mt-2 italic">Recitar o Ato de Consagração</p></div>`
            }
        ]
    },

    catedra_sao_pedro: {
        saintName: "Cátedra de São Pedro",
        novenaTitle: "Novena à Cátedra de São Pedro",
        description: "Novena em preparação à festa da Cátedra de São Pedro (22 de fevereiro).",
        image: "/images/catedra_sao_pedro.png",
        initialPrayer: `<div class="prayer-block"><h4 class="section-title">Oração Inicial</h4><p>Ó Deus, que confiastes a São Pedro as chaves do Reino e o constituístes como pedra fundamental da Igreja, concedei-nos, por sua intercessão, a graça de permanecer firmes na fé e unidos ao Sucessor de Pedro. Que ele, que foi escolhido por Cristo para apascentar o Seu rebanho, nos inspire a amar e servir a Igreja com fidelidade e coragem.</p><p class="mt-4 italic">Neste momento, apresento a Vós, Senhor, as minhas intenções particulares: (faça aqui o seu pedido ou coloque suas intenções).</p><p class="mt-4">Concedei-me, por intercessão de São Pedro, a graça de crescer na fé, na esperança e no amor, e de ser um verdadeiro discípulo de Cristo. Amém.</p></div>`,
        finalPrayer: `<div class="prayer-block"><h4 class="section-title">Oração Final</h4><p>Ó Deus, que confiastes a São Pedro as chaves do Reino e o constituístes como fundamento da Igreja, concedei-nos, por sua intercessão, a graça de permanecer firmes na fé e unidos ao Sucessor de Pedro. Que ele, que foi escolhido por Cristo para apascentar o Seu rebanho, nos inspire a amar e servir a Igreja com fidelidade e coragem.</p><p class="mt-4">Lembrai-Vos, Senhor, das minhas intenções que Vos apresentei nesta novena, e concedei-me as graças que Vos peço, se forem para a Vossa maior glória e o bem da minha alma. Por Cristo, Nosso Senhor. Amém.</p></div>`,
        days: [
            {
                day: "Dia 1",
                title: "Primeiro Dia - A Escolha de Pedro",
                content: `<div class="day-specific-content"><h4 class="section-title">A Escolha de Pedro</h4><p>Jesus escolheu Simão, a quem chamou de Pedro, para ser o fundamento da Sua Igreja. Ele não escolheu o mais sábio ou o mais forte, mas aquele que, apesar de suas fraquezas, tinha um coração aberto ao amor de Deus. A vida de Pedro nos ensina que Deus chama os humildes e os transforma em instrumentos de Sua graça.</p><p class="mt-4 font-semibold">Ó São Pedro, que fostes escolhido por Cristo para ser a pedra sobre a qual Ele edificou a Sua Igreja, ajuda-me a acolher o chamado de Deus com humildade e generosidade. Ensina-me a confiar na Sua graça, que transforma as fraquezas em força. Amém.</p><p class="mt-4 font-semibold">Pai Nosso, Ave Maria, Glória ao Pai</p></div>`
            },
            {
                day: "Dia 2",
                title: "Segundo Dia - A Confissão de Fé de Pedro",
                content: `<div class="day-specific-content"><h4 class="section-title">A Confissão de Fé de Pedro</h4><p>Pedro foi o primeiro a confessar que Jesus era o Messias, o Filho do Deus vivo. Essa confissão de fé é o fundamento da Igreja e nos lembra da importância de professarmos nossa fé com coragem, mesmo diante das dificuldades.</p><p class="mt-4 font-semibold">Ó São Pedro, que confessastes com firmeza a divindade de Cristo, ajuda-me a professar minha fé com coragem e convicção. Aumenta em mim a confiança em Jesus, o Filho de Deus, e fortalece minha fidelidade à Igreja que Ele fundou. Amém.</p><p class="mt-4 font-semibold">Pai Nosso, Ave Maria, Glória ao Pai</p></div>`
            },
            {
                day: "Dia 3",
                title: "Terceiro Dia - A Fragilidade e o Perdão de Pedro",
                content: `<div class="day-specific-content"><h4 class="section-title">A Fragilidade e o Perdão de Pedro</h4><p>Pedro, apesar de seu amor por Jesus, negou-O três vezes durante a Paixão. Mas, ao olhar de Jesus, ele se arrependeu e chorou amargamente. Esse momento nos mostra que, mesmo em nossas quedas, o amor e o perdão de Deus estão sempre disponíveis para nós.</p><p class="mt-4 font-semibold">Ó São Pedro, que experimentastes a misericórdia de Cristo após as tuas negações, ensina-me a confiar no perdão de Deus. Ajuda-me a levantar-me sempre que eu cair e a nunca perder a esperança na Sua infinita misericórdia. Amém.</p><p class="mt-4 font-semibold">Pai Nosso, Ave Maria, Glória ao Pai</p></div>`
            },
            {
                day: "Dia 4",
                title: "Quarto Dia - O Pastor do Rebanho",
                content: `<div class="day-specific-content"><h4 class="section-title">O Pastor do Rebanho</h4><p>Jesus confiou a Pedro a missão de apascentar Seu rebanho, dizendo: "Apascenta as minhas ovelhas". Pedro assumiu essa missão com amor e dedicação, guiando a Igreja com coragem e fé. Sua vida nos inspira a servir a Deus e ao próximo com generosidade.</p><p class="mt-4 font-semibold">Ó São Pedro, que recebestes de Cristo a missão de apascentar o Seu rebanho, ajuda-me a ser um servo fiel e generoso. Ensina-me a amar a Igreja e a trabalhar pela unidade e santidade do povo de Deus. Amém.</p><p class="mt-4 font-semibold">Pai Nosso, Ave Maria, Glória ao Pai</p></div>`
            },
            {
                day: "Dia 5",
                title: "Quinto Dia - A Cátedra de Pedro",
                content: `<div class="day-specific-content"><h4 class="section-title">A Cátedra de Pedro</h4><p>A Cátedra de Pedro simboliza a autoridade e a unidade da Igreja. Pedro, como primeiro Papa, foi o guardião da fé e o ponto de referência para todos os cristãos. Sua vida nos lembra da importância de permanecermos unidos ao Sucessor de Pedro, o Papa.</p><p class="mt-4 font-semibold">Ó São Pedro, que fostes constituído por Cristo como fundamento da Igreja, ajuda-me a amar e respeitar o Papa, o Sucessor de Pedro. Ensina-me a viver em comunhão com a Igreja e a defender a unidade da fé. Amém.</p><p class="mt-4 font-semibold">Pai Nosso, Ave Maria, Glória ao Pai</p></div>`
            },
            {
                day: "Dia 6",
                title: "Sexto Dia - A Coragem de Pedro",
                content: `<div class="day-specific-content"><h4 class="section-title">A Coragem de Pedro</h4><p>Pedro foi um homem corajoso, que enfrentou perseguições e desafios para anunciar o Evangelho. Ele não temeu as ameaças do mundo, pois confiava na força de Cristo. Sua vida nos inspira a sermos corajosos na fé e na missão de evangelizar.</p><p class="mt-4 font-semibold">Ó São Pedro, que destes testemunho de Cristo com coragem e ousadia, ajuda-me a vencer o medo e a anunciar o Evangelho com entusiasmo. Fortalece minha fé e minha confiança na presença de Jesus em minha vida. Amém.</p><p class="mt-4 font-semibold">Pai Nosso, Ave Maria, Glória ao Pai</p></div>`
            },
            {
                day: "Dia 7",
                title: "Sétimo Dia - O Martírio de Pedro",
                content: `<div class="day-specific-content"><h4 class="section-title">O Martírio de Pedro</h4><p>Pedro deu sua vida por Cristo, sendo crucificado de cabeça para baixo por amor ao Senhor. Seu martírio é um testemunho de fidelidade até o fim e nos lembra de que o amor a Cristo deve ser maior do que qualquer outra coisa.</p><p class="mt-4 font-semibold">Ó São Pedro, que derramastes o teu sangue por amor a Cristo, ajuda-me a ser fiel até o fim. Ensina-me a amar Jesus acima de tudo e a estar disposto a sacrificar-me por Ele. Amém.</p><p class="mt-4 font-semibold">Pai Nosso, Ave Maria, Glória ao Pai</p></div>`
            },
            {
                day: "Dia 8",
                title: "Oitavo Dia - A Unidade da Igreja",
                content: `<div class="day-specific-content"><h4 class="section-title">A Unidade da Igreja</h4><p>Pedro foi o ponto de união para os primeiros cristãos, e hoje o Sucessor de Pedro continua a ser o sinal visível da unidade da Igreja. Sua vida nos inspira a trabalhar pela união e pela paz entre todos os fiéis.</p><p class="mt-4 font-semibold">Ó São Pedro, que fostes o sinal da unidade da Igreja, ajuda-me a promover a comunhão e a harmonia entre os irmãos. Ensina-me a amar a Igreja e a trabalhar pela sua unidade. Amém.</p><p class="mt-4 font-semibold">Pai Nosso, Ave Maria, Glória ao Pai</p></div>`
            },
            {
                day: "Dia 9",
                title: "Nono Dia - A Intercessão de Pedro",
                content: `<div class="day-specific-content"><h4 class="section-title">A Intercessão de Pedro</h4><p>Pedro, agora no céu, intercede por nós como um grande santo e amigo de Jesus. Ele conhece nossas lutas e fraquezas e nos ajuda a permanecer firmes na fé. Sua intercessão é um dom para a Igreja.</p><p class="mt-4 font-semibold">Ó São Pedro, que intercedeis por nós junto a Cristo, apresenta-Lhe as minhas necessidades e intenções. Ajuda-me a crescer na fé, na esperança e no amor, e a ser um verdadeiro discípulo de Jesus. Amém.</p><p class="mt-4 font-semibold">Pai Nosso, Ave Maria, Glória ao Pai</p></div>`
            }
        ]
    },

    sao_casimiro: {
        saintName: "São Casimiro",
        novenaTitle: "Novena a São Casimiro",
        description: "Novena em honra a São Casimiro, príncipe da Polônia e modelo de pureza. Reza-se de 24 de fevereiro a 3 de março, preparando a festa de 4 de março.",
        image: "/images/sao_casimiro.png",
        initialPrayer: `<div class="prayer-block"><h4 class="section-title">Sinal da Cruz</h4><h4 class="section-title mt-4">Oração Inicial</h4><p>Ó Deus, que destes a São Casimiro o dom da santidade e o zelo pela salvação das almas, concedei-nos, por sua intercessão, a graça de viver segundo o Vosso Santo Evangelho. Que ele, que foi um exemplo de pureza, devoção e amor aos pobres, nos inspire a buscar a santidade em nossa vida.</p><p class="mt-4 italic">Neste momento, apresento a Vós, Senhor, as minhas intenções particulares: (faça aqui o seu pedido ou coloque suas intenções).</p></div>`,
        finalPrayer: `<div class="prayer-block"><h4 class="section-title">Oração Final</h4><p>Ó Deus, que fizestes de São Casimiro um modelo de pureza, devoção e amor aos pobres, concedei-nos, por sua intercessão, a graça de viver segundo o Vosso Santo Evangelho. Que ele, que tanto amou a Eucaristia e a Virgem Maria, nos inspire a buscar sempre a santidade e a renovação de nossas vidas.</p><p class="mt-4">Lembrai-Vos, Senhor, das minhas intenções que Vos apresentei nesta novena, e concedei-me as graças que Vos peço, se forem para a Vossa maior glória e o bem da minha alma. Por Cristo, Nosso Senhor. Amém.</p><p class="mt-4 font-semibold">Sinal da Cruz</p></div>`,
        days: [
            {
                day: "Dia 1",
                title: "Primeiro Dia - A Pureza de Coração",
                content: `<div class="day-specific-content"><h4 class="section-title">A Pureza de Coração</h4><p>São Casimiro é um modelo de pureza e castidade. Ele guardou seu coração puro, dedicando-se inteiramente a Deus e à Virgem Maria. Sua vida nos ensina que a pureza é um caminho de santidade e felicidade.</p><p class="mt-4 font-semibold">Ó São Casimiro, que guardastes a pureza de coração como um tesouro precioso, ajuda-me a viver uma vida casta e pura, longe das tentações do mundo. Ensina-me a amar a Deus com todo o meu ser e a buscar a santidade em minha juventude. Amém.</p><p class="mt-4">Concedei-me, por intercessão de São Casimiro, a graça de crescer na fé, na esperança e no amor, e de ser um verdadeiro discípulo de Cristo. Amém.</p><p class="mt-4 font-semibold">Pai Nosso, Ave Maria, Glória ao Pai</p></div>`
            },
            {
                day: "Dia 2",
                title: "Segundo Dia - A Devoção à Eucaristia",
                content: `<div class="day-specific-content"><h4 class="section-title">A Devoção à Eucaristia</h4><p>São Casimiro tinha uma profunda devoção à Eucaristia, encontrando nela a força para sua vida espiritual. Ele nos ensina que Jesus Eucarístico é o alimento da alma e a fonte de toda graça.</p><p class="mt-4 font-semibold">Ó São Casimiro, que amastes a Eucaristia com todo o teu coração, ajuda-me a valorizar a Santa Missa e a Comunhão. Ensina-me a adorar Jesus no Santíssimo Sacramento e a recebê-Lo com fé e amor. Amém.</p><p class="mt-4">Concedei-me, por intercessão de São Casimiro, a graça de crescer na fé, na esperança e no amor, e de ser um verdadeiro discípulo de Cristo. Amém.</p><p class="mt-4 font-semibold">Pai Nosso, Ave Maria, Glória ao Pai</p></div>`
            },
            {
                day: "Dia 3",
                title: "Terceiro Dia - O Amor à Virgem Maria",
                content: `<div class="day-specific-content"><h4 class="section-title">O Amor à Virgem Maria</h4><p>São Casimiro tinha uma devoção especial à Virgem Maria, a quem chamava de "Minha Mãe". Ele via nela o modelo perfeito de fé e obediência a Deus. Sua vida nos inspira a confiar na intercessão de Maria e a imitar suas virtudes.</p><p class="mt-4 font-semibold">Ó São Casimiro, que amastes a Virgem Maria com todo o teu coração, ensina-me a confiar em sua intercessão e a imitar suas virtudes. Ajuda-me a consagrar minha vida a ela e a buscar sua proteção em todos os momentos. Amém.</p><p class="mt-4">Concedei-me, por intercessão de São Casimiro, a graça de crescer na fé, na esperança e no amor, e de ser um verdadeiro discípulo de Cristo. Amém.</p><p class="mt-4 font-semibold">Pai Nosso, Ave Maria, Glória ao Pai</p></div>`
            },
            {
                day: "Dia 4",
                title: "Quarto Dia - A Caridade para com os Pobres",
                content: `<div class="day-specific-content"><h4 class="section-title">A Caridade para com os Pobres</h4><p>São Casimiro era conhecido por sua caridade para com os pobres e necessitados. Ele distribuía seus bens e usava sua posição para ajudar os mais vulneráveis. Sua vida nos inspira a ser generosos e solidários com os que sofrem.</p><p class="mt-4 font-semibold">Ó São Casimiro, que amastes os pobres como a Cristo, ensina-me a ser generoso e compassivo com os que sofrem. Ajuda-me a ver Jesus em cada irmão necessitado e a servir com amor e dedicação. Amém.</p><p class="mt-4">Concedei-me, por intercessão de São Casimiro, a graça de crescer na fé, na esperança e no amor, e de ser um verdadeiro discípulo de Cristo. Amém.</p><p class="mt-4 font-semibold">Pai Nosso, Ave Maria, Glória ao Pai</p></div>`
            },
            {
                day: "Dia 5",
                title: "Quinto Dia - A Obediência e a Humildade",
                content: `<div class="day-specific-content"><h4 class="section-title">A Obediência e a Humildade</h4><p>São Casimiro viveu com obediência e humildade, seguindo os ensinamentos de Cristo e os conselhos de seus superiores. Ele nos mostra que a verdadeira grandeza está em servir com amor e simplicidade.</p><p class="mt-4 font-semibold">Ó São Casimiro, que viveste a obediência e a humildade como caminho de santidade, ajuda-me a ser obediente à vontade de Deus e humilde no serviço aos irmãos. Ensina-me a desprezar o orgulho e a buscar a simplicidade de coração. Amém.</p><p class="mt-4">Concedei-me, por intercessão de São Casimiro, a graça de crescer na fé, na esperança e no amor, e de ser um verdadeiro discípulo de Cristo. Amém.</p><p class="mt-4 font-semibold">Pai Nosso, Ave Maria, Glória ao Pai</p></div>`
            },
            {
                day: "Dia 6",
                title: "Sexto Dia - A Devoção à Paixão de Cristo",
                content: `<div class="day-specific-content"><h4 class="section-title">A Devoção à Paixão de Cristo</h4><p>São Casimiro meditava com frequência sobre a Paixão de Cristo, encontrando na Cruz a fonte de seu amor e sacrifício. Ele nos ensina que a Cruz é o caminho para a ressurreição e a vida eterna.</p><p class="mt-4 font-semibold">Ó São Casimiro, que contemplastes com amor a Paixão de Cristo, ajuda-me a amar a Cruz e a encontrar nela a força para vencer as dificuldades da vida. Ensina-me a oferecer meus sofrimentos unidos aos de Jesus pela salvação das almas. Amém.</p><p class="mt-4">Concedei-me, por intercessão de São Casimiro, a graça de crescer na fé, na esperança e no amor, e de ser um verdadeiro discípulo de Cristo. Amém.</p><p class="mt-4 font-semibold">Pai Nosso, Ave Maria, Glória ao Pai</p></div>`
            },
            {
                day: "Dia 7",
                title: "Sétimo Dia - A Alegria na Vida Cristã",
                content: `<div class="day-specific-content"><h4 class="section-title">A Alegria na Vida Cristã</h4><p>São Casimiro encontrou na vida cristã uma fonte de alegria e paz. Ele nos mostra que a verdadeira felicidade está em seguir a Cristo e viver em comunhão com os irmãos.</p><p class="mt-4 font-semibold">Ó São Casimiro, que encontraste na vida cristã a alegria de servir a Deus, ajuda-me a encontrar a verdadeira felicidade em Cristo. Ensina-me a viver em comunhão com os irmãos e a buscar a santidade em minha vocação. Amém.</p><p class="mt-4">Concedei-me, por intercessão de São Casimiro, a graça de crescer na fé, na esperança e no amor, e de ser um verdadeiro discípulo de Cristo. Amém.</p><p class="mt-4 font-semibold">Pai Nosso, Ave Maria, Glória ao Pai</p></div>`
            },
            {
                day: "Dia 8",
                title: "Oitavo Dia - A Perseverança na Fé",
                content: `<div class="day-specific-content"><h4 class="section-title">A Perseverança na Fé</h4><p>São Casimiro perseverou até o fim na fé, deixando um legado de santidade e amor a Deus. Ele nos inspira a manter-nos firmes na caminhada cristã, mesmo diante das dificuldades.</p><p class="mt-4 font-semibold">Ó São Casimiro, que perseverastes na fé até o fim, ajuda-me a manter-me firme na caminhada cristã, mesmo diante das dificuldades. Concede-me a graça da perseverança final, para que eu possa um dia estar contigo na glória do céu. Amém.</p><p class="mt-4">Concedei-me, por intercessão de São Casimiro, a graça de crescer na fé, na esperança e no amor, e de ser um verdadeiro discípulo de Cristo. Amém.</p><p class="mt-4 font-semibold">Pai Nosso, Ave Maria, Glória ao Pai</p></div>`
            },
            {
                day: "Dia 9",
                title: "Nono Dia - O Amor à Igreja",
                content: `<div class="day-specific-content"><h4 class="section-title">O Amor à Igreja</h4><p>São Casimiro amava a Igreja e dedicou sua vida ao serviço do Reino de Deus. Ele nos inspira a amar e servir a Igreja com fidelidade e dedicação.</p><p class="mt-4 font-semibold">Ó São Casimiro, que amastes a Igreja com todo o teu coração, ajuda-me a amar e servir a Igreja com fidelidade e dedicação. Ensina-me a trabalhar pela unidade e santidade do povo de Deus. Amém.</p><p class="mt-4">Concedei-me, por intercessão de São Casimiro, a graça de crescer na fé, na esperança e no amor, e de ser um verdadeiro discípulo de Cristo. Amém.</p><p class="mt-4 font-semibold">Pai Nosso, Ave Maria, Glória ao Pai</p></div>`
            }
        ]
    },

    // MARÇO
    sao_patricio: {
        saintName: "São Patrício",
        novenaTitle: "Novena a São Patrício",
        description: "Novena em honra a São Patrício, apóstolo da Irlanda. Reza-se de 8 a 16 de março, preparando a festa de 17 de março.",
        image: "/images/sao_patricio.png",
        initialPrayer: `<div class="prayer-block"><h4 class="section-title">Apresentação</h4><p>Patrício da Irlanda, Apóstolo da Irlanda ou Saint Patrick (em inglês: Patrick; em latim: Patricius) (Banwen - 17 de março de 493, Irlanda), foi um missionário cristão, depois bispo e santo padroeiro da Irlanda, juntamente com Santa Brígida de Kildare e São Columba.</p><p>Quando tinha dezesseis anos foi capturado e vendido como escravo para a Irlanda (piratas pagãos irlandeses), de onde escapou e retornou à casa de sua família seis anos mais tarde, iniciando então sua vida religiosa. Posteriormente retornou à ilha de onde fugira para pregar o evangelho. Quando voltou para sua terra natal, Patrício sonhou com as crianças irlandesas implorando para que ele levasse a elas o evangelho. "Imploramos que você venha e caminhe entre nós uma vez mais". Como achava que não tinha a compreensão adequada da fé, Patrício voltou para a França a fim de estudar em um mosteiro. Por volta do ano 432, ele voltou à Irlanda.</p><p>Para explicar como a Santíssima Trindade era três e um ao mesmo tempo utilizava o trevo de três folhas, tornando-se parte da cultura Irlandesa. Foi incentivador do sacramento de confissão particular, tal como conhecemos hoje, visto que antes o mesmo era realizado de forma pública. Um século mais tarde essa prática se propagou na Europa.</p></div>`,
        finalPrayer: `<div class="prayer-block"><p class="font-semibold">Rogai por nós, ó glorioso São Patrício e interceda por nós na intenção que vos apresento nesta Novena.</p><p class="mt-4 font-semibold">Pai Nosso…<br/>Ave Maria…<br/>Glória ao Pai…</p></div>`,
        days: [
            {
                day: "Dia 1",
                title: "Primeiro Dia - Cristo esteja comigo",
                content: `<div class="day-specific-content"><h4 class="section-title">Cristo esteja comigo Cristo dentro de mim</h4><p>Obrigado Deus pela minha família e amigos. Nunca me deixe esquecer que Jesus também é constantemente comigo como meu amigo e companheiro.</p><h4 class="section-title mt-4">ORAÇÃO:</h4><p>São Patrício, dai-me a graça de amar a Deus com todo o meu coração, para servi-lo com toda a minha força, e perseverar em bons propósitos até o fim, ó fiel pastor do rebanho irlandês, que teria depositado mil vidas para salvar uma alma, tome minha alma e as almas de meus conterrâneos sob seu cuidado especial. Permita que todos os corações possam compartilhar os frutos abençoados do Evangelho que você plantou e pregou.</p><p class="mt-4"><strong>Cristo comigo,<br/>Cristo dentro de mim,<br/>Cristo a minha frente,<br/>Cristo atrás de mim,<br/>Cristo abaixo, Cristo acima de mim,<br/>Cristo à minha direita, Cristo à minha esquerda,<br/>Cristo quando durmo,<br/>Cristo quando descanso,<br/>Cristo quando me levanto,<br/>Cristo no coração de todo homem que pense em mim<br/>Cristo na boca de quem fale de mim,<br/>Cristo em todos os olhos que me veem,<br/>Cristo em todo ouvido que me ouve.</strong></p><p class="mt-4">Hoje me levanto com a poderosa força e invoco à Santíssima Trindade com a trinitária fé professando a unidade do Criador e da criatura. Amém!</p></div>`
            },
            {
                day: "Dia 2",
                title: "Segundo Dia - Cristo a minha frente",
                content: `<div class="day-specific-content"><h4 class="section-title">Cristo a minha frente, Cristo atrás de mim</h4><p>Deus compreende toda a minha vida passada, com seus momentos brilhantes e escuros. Ao olhar para o futuro que eu nunca deixe Cristo desaparecer da minha vista.</p><h4 class="section-title mt-4">ORAÇÃO:</h4><p>São Patrício, dai-me a graça de amar a Deus com todo o meu coração, para servi-lo com toda a minha força, e perseverar em bons propósitos até o fim, ó fiel pastor do rebanho irlandês, que teria depositado mil vidas para salvar uma alma, tome minha alma e as almas de meus conterrâneos sob seu cuidado especial. Permita que todos os corações possam compartilhar os frutos abençoados do Evangelho que você plantou e pregou.</p><p class="mt-4"><strong>Cristo comigo,<br/>Cristo dentro de mim,<br/>Cristo a minha frente,<br/>Cristo atrás de mim,<br/>Cristo abaixo, Cristo acima de mim,<br/>Cristo à minha direita, Cristo à minha esquerda,<br/>Cristo quando durmo,<br/>Cristo quando descanso,<br/>Cristo quando me levanto,<br/>Cristo no coração de todo homem que pense em mim<br/>Cristo na boca de quem fale de mim,<br/>Cristo em todos os olhos que me veem,<br/>Cristo em todo ouvido que me ouve.</strong></p><p class="mt-4">Hoje me levanto com a poderosa força e invoco à Santíssima Trindade com a trinitária fé professando a unidade do Criador e da criatura. Amém!</p></div>`
            },
            {
                day: "Dia 3",
                title: "Terceiro Dia - Cristo abaixo e Cristo acima",
                content: `<div class="day-specific-content"><h4 class="section-title">Cristo abaixo e Cristo acima</h4><p>A medida que o tempo passa, tantas mudanças deixaram-me confuso e inseguro. Que eu nunca esqueça que Cristo é o alicerce da minha vida é sempre o mesmo ontem, hoje e sempre.</p><h4 class="section-title mt-4">ORAÇÃO:</h4><p>São Patrício, dai-me a graça de amar a Deus com todo o meu coração, para servi-lo com toda a minha força, e perseverar em bons propósitos até o fim, ó fiel pastor do rebanho irlandês, que teria depositado mil vidas para salvar uma alma, tome minha alma e as almas de meus conterrâneos sob seu cuidado especial. Permita que todos os corações possam compartilhar os frutos abençoados do Evangelho que você plantou e pregou.</p><p class="mt-4"><strong>Cristo comigo,<br/>Cristo dentro de mim,<br/>Cristo a minha frente,<br/>Cristo atrás de mim,<br/>Cristo abaixo, Cristo acima de mim,<br/>Cristo à minha direita, Cristo à minha esquerda,<br/>Cristo quando durmo,<br/>Cristo quando descanso,<br/>Cristo quando me levanto,<br/>Cristo no coração de todo homem que pense em mim<br/>Cristo na boca de quem fale de mim,<br/>Cristo em todos os olhos que me veem,<br/>Cristo em todo ouvido que me ouve.</strong></p><p class="mt-4">Hoje me levanto com a poderosa força e invoco à Santíssima Trindade com a trinitária fé professando a unidade do Criador e da criatura. Amém!</p></div>`
            },
            {
                day: "Dia 4",
                title: "Quarto Dia - Cristo à minha direita",
                content: `<div class="day-specific-content"><h4 class="section-title">Cristo à minha direita Cristo à minha esquerda</h4><p>Deus veio morar conosco nesta terra e por isso está presente em volta de mim. Posso ver sua presença no sofrimento e pobreza dos meus irmãos e irmãs que me rodeiam.</p><h4 class="section-title mt-4">ORAÇÃO:</h4><p>São Patrício, dai-me a graça de amar a Deus com todo o meu coração, para servi-lo com toda a minha força, e perseverar em bons propósitos até o fim, ó fiel pastor do rebanho irlandês, que teria depositado mil vidas para salvar uma alma, tome minha alma e as almas de meus conterrâneos sob seu cuidado especial. Permita que todos os corações possam compartilhar os frutos abençoados do Evangelho que você plantou e pregou.</p><p class="mt-4"><strong>Cristo comigo,<br/>Cristo dentro de mim,<br/>Cristo a minha frente,<br/>Cristo atrás de mim,<br/>Cristo abaixo, Cristo acima de mim,<br/>Cristo à minha direita, Cristo à minha esquerda,<br/>Cristo quando durmo,<br/>Cristo quando descanso,<br/>Cristo quando me levanto,<br/>Cristo no coração de todo homem que pense em mim<br/>Cristo na boca de quem fale de mim,<br/>Cristo em todos os olhos que me veem,<br/>Cristo em todo ouvido que me ouve.</strong></p><p class="mt-4">Hoje me levanto com a poderosa força e invoco à Santíssima Trindade com a trinitária fé professando a unidade do Criador e da criatura. Amém!</p></div>`
            },
            {
                day: "Dia 5",
                title: "Quinto Dia - Cristo quando me levanto",
                content: `<div class="day-specific-content"><h4 class="section-title">Cristo quando me levanto, caminho e descanso</h4><p>Cada novo dia e cada nova noite é um dom precioso de Deus. Todas as manhãs e todas as noites eu quero te agradecer Senhor pelo dom da minha vida. Que meus dias sejam santo e salutar.</p><h4 class="section-title mt-4">ORAÇÃO:</h4><p>São Patrício, dai-me a graça de amar a Deus com todo o meu coração, para servi-lo com toda a minha força, e perseverar em bons propósitos até o fim, ó fiel pastor do rebanho irlandês, que teria depositado mil vidas para salvar uma alma, tome minha alma e as almas de meus conterrâneos sob seu cuidado especial. Permita que todos os corações possam compartilhar os frutos abençoados do Evangelho que você plantou e pregou.</p><p class="mt-4"><strong>Cristo comigo,<br/>Cristo dentro de mim,<br/>Cristo a minha frente,<br/>Cristo atrás de mim,<br/>Cristo abaixo, Cristo acima de mim,<br/>Cristo à minha direita, Cristo à minha esquerda,<br/>Cristo quando durmo,<br/>Cristo quando descanso,<br/>Cristo quando me levanto,<br/>Cristo no coração de todo homem que pense em mim<br/>Cristo na boca de quem fale de mim,<br/>Cristo em todos os olhos que me veem,<br/>Cristo em todo ouvido que me ouve.</strong></p><p class="mt-4">Hoje me levanto com a poderosa força e invoco à Santíssima Trindade com a trinitária fé professando a unidade do Criador e da criatura. Amém!</p></div>`
            },
            {
                day: "Dia 6",
                title: "Sexto Dia - Cristo no coração",
                content: `<div class="day-specific-content"><h4 class="section-title">Cristo no coração de cada homem que pense em mim</h4><p>Há tantas mensagens conflitantes e mensageiros que lutam para controlar as nossas emoções e desejos mais profundos. Que Cristo e a sua mensagem encontre espaço em todos os corações, especialmente os dos jovens.</p><h4 class="section-title mt-4">ORAÇÃO:</h4><p>São Patrício, dai-me a graça de amar a Deus com todo o meu coração, para servi-lo com toda a minha força, e perseverar em bons propósitos até o fim, ó fiel pastor do rebanho irlandês, que teria depositado mil vidas para salvar uma alma, tome minha alma e as almas de meus conterrâneos sob seu cuidado especial. Permita que todos os corações possam compartilhar os frutos abençoados do Evangelho que você plantou e pregou.</p><p class="mt-4"><strong>Cristo comigo,<br/>Cristo dentro de mim,<br/>Cristo a minha frente,<br/>Cristo atrás de mim,<br/>Cristo abaixo, Cristo acima de mim,<br/>Cristo à minha direita, Cristo à minha esquerda,<br/>Cristo quando durmo,<br/>Cristo quando descanso,<br/>Cristo quando me levanto,<br/>Cristo no coração de todo homem que pense em mim<br/>Cristo na boca de quem fale de mim,<br/>Cristo em todos os olhos que me veem,<br/>Cristo em todo ouvido que me ouve.</strong></p><p class="mt-4">Hoje me levanto com a poderosa força e invoco à Santíssima Trindade com a trinitária fé professando a unidade do Criador e da criatura. Amém!</p></div>`
            },
            {
                day: "Dia 7",
                title: "Sétimo Dia - Cristo na boca",
                content: `<div class="day-specific-content"><h4 class="section-title">Cristo na boca de quem fale de mim</h4><p>A tecnologia moderna nos deu tantas novas maneiras de falar, muitas vezes apenas 'fofoca' destrutiva como diz o Papa Francisco. Que possamos usar nossos dons de comunicação para construir o mundo, olhando para Jesus, para "Palavra de Jesus".</p><h4 class="section-title mt-4">ORAÇÃO:</h4><p>São Patrício, dai-me a graça de amar a Deus com todo o meu coração, para servi-lo com toda a minha força, e perseverar em bons propósitos até o fim, ó fiel pastor do rebanho irlandês, que teria depositado mil vidas para salvar uma alma, tome minha alma e as almas de meus conterrâneos sob seu cuidado especial. Permita que todos os corações possam compartilhar os frutos abençoados do Evangelho que você plantou e pregou.</p><p class="mt-4"><strong>Cristo comigo,<br/>Cristo dentro de mim,<br/>Cristo a minha frente,<br/>Cristo atrás de mim,<br/>Cristo abaixo, Cristo acima de mim,<br/>Cristo à minha direita, Cristo à minha esquerda,<br/>Cristo quando durmo,<br/>Cristo quando descanso,<br/>Cristo quando me levanto,<br/>Cristo no coração de todo homem que pense em mim<br/>Cristo na boca de quem fale de mim,<br/>Cristo em todos os olhos que me veem,<br/>Cristo em todo ouvido que me ouve.</strong></p><p class="mt-4">Hoje me levanto com a poderosa força e invoco à Santíssima Trindade com a trinitária fé professando a unidade do Criador e da criatura. Amém!</p></div>`
            },
            {
                day: "Dia 8",
                title: "Oitavo Dia - Cristo em todos olhos",
                content: `<div class="day-specific-content"><h4 class="section-title">Cristo em todos olhos que me veem</h4><p>Assim, muitos dos opositores de Jesus olharam para ele para condenar e rejeitá-lo. Devemos observar a vida das outras pessoas através da lente da compaixão, misericórdia e compreensão.</p><h4 class="section-title mt-4">ORAÇÃO:</h4><p>São Patrício, dai-me a graça de amar a Deus com todo o meu coração, para servi-lo com toda a minha força, e perseverar em bons propósitos até o fim, ó fiel pastor do rebanho irlandês, que teria depositado mil vidas para salvar uma alma, tome minha alma e as almas de meus conterrâneos sob seu cuidado especial. Permita que todos os corações possam compartilhar os frutos abençoados do Evangelho que você plantou e pregou.</p><p class="mt-4"><strong>Cristo comigo,<br/>Cristo dentro de mim,<br/>Cristo a minha frente,<br/>Cristo atrás de mim,<br/>Cristo abaixo, Cristo acima de mim,<br/>Cristo à minha direita, Cristo à minha esquerda,<br/>Cristo quando durmo,<br/>Cristo quando descanso,<br/>Cristo quando me levanto,<br/>Cristo no coração de todo homem que pense em mim<br/>Cristo na boca de quem fale de mim,<br/>Cristo em todos os olhos que me veem,<br/>Cristo em todo ouvido que me ouve.</strong></p><p class="mt-4">Hoje me levanto com a poderosa força e invoco à Santíssima Trindade com a trinitária fé professando a unidade do Criador e da criatura. Amém!</p></div>`
            },
            {
                day: "Dia 9",
                title: "Nono Dia - Cristo em todo ouvido",
                content: `<div class="day-specific-content"><h4 class="section-title">Cristo em todo ouvido que me ouve</h4><p>Quando o povo irlandês escutou São Patrício, eles ouviram a voz de Cristo. Somos mensageiros de Jesus, que o som da nossa voz possa experienciar o amor de Cristo entrando plenamente em nossas vidas.</p><h4 class="section-title mt-4">ORAÇÃO:</h4><p>São Patrício, dai-me a graça de amar a Deus com todo o meu coração, para servi-lo com toda a minha força, e perseverar em bons propósitos até o fim, ó fiel pastor do rebanho irlandês, que teria depositado mil vidas para salvar uma alma, tome minha alma e as almas de meus conterrâneos sob seu cuidado especial. Permita que todos os corações possam compartilhar os frutos abençoados do Evangelho que você plantou e pregou.</p><p class="mt-4"><strong>Cristo comigo,<br/>Cristo dentro de mim,<br/>Cristo a minha frente,<br/>Cristo atrás de mim,<br/>Cristo abaixo, Cristo acima de mim,<br/>Cristo à minha direita, Cristo à minha esquerda,<br/>Cristo quando durmo,<br/>Cristo quando descanso,<br/>Cristo quando me levanto,<br/>Cristo no coração de todo homem que pense em mim<br/>Cristo na boca de quem fale de mim,<br/>Cristo em todos os olhos que me veem,<br/>Cristo em todo ouvido que me ouve.</strong></p><p class="mt-4">Hoje me levanto com a poderosa força e invoco à Santíssima Trindade com a trinitária fé professando a unidade do Criador e da criatura. Amém!</p></div>`
            }
        ]
    },

    sao_jose_marco: {
        saintName: "São José",
        novenaTitle: "Novena a São José (Março)",
        description: "Novena em preparação à festa de São José, esposo de Maria (19 de março).",
        initialPrayer: "",
        finalPrayer: "",
        days: Array.from({ length: 9 }, (_, i) => ({
            day: `Dia ${i + 1}`,
            title: `Dia ${i + 1} - São José`,
            content: ""
        }))
    },

    anunciacao: {
        saintName: "Anunciação do Senhor",
        novenaTitle: "Novena da Anunciação",
        description: "Novena em preparação à solenidade da Anunciação do Senhor (25 de março).",
        initialPrayer: "",
        finalPrayer: "",
        days: Array.from({ length: 9 }, (_, i) => ({
            day: `Dia ${i + 1}`,
            title: `Dia ${i + 1} - Anunciação`,
            content: ""
        }))
    },

    // ABRIL
    divina_misericordia: {
        saintName: "Divina Misericórdia",
        novenaTitle: "Novena da Divina Misericórdia",
        description: "Novena iniciada na Sexta-feira Santa em preparação ao Domingo da Divina Misericórdia.",
        initialPrayer: "",
        finalPrayer: "",
        days: Array.from({ length: 9 }, (_, i) => ({
            day: `Dia ${i + 1}`,
            title: `Dia ${i + 1} - Divina Misericórdia`,
            content: ""
        }))
    },

    santo_expedito: {
        saintName: "Santo Expedito",
        novenaTitle: "Novena a Santo Expedito",
        description: "Novena em honra a Santo Expedito (19 de abril).",
        initialPrayer: "",
        finalPrayer: "",
        days: Array.from({ length: 9 }, (_, i) => ({
            day: `Dia ${i + 1}`,
            title: `Dia ${i + 1} - Santo Expedito`,
            content: ""
        }))
    },

    sao_jorge: {
        saintName: "São Jorge",
        novenaTitle: "Novena a São Jorge",
        description: "Novena em honra a São Jorge, mártir e guerreiro da fé (23 de abril).",
        initialPrayer: "",
        finalPrayer: "",
        days: Array.from({ length: 9 }, (_, i) => ({
            day: `Dia ${i + 1}`,
            title: `Dia ${i + 1} - São Jorge`,
            content: ""
        }))
    },

    sao_marcos: {
        saintName: "São Marcos Evangelista",
        novenaTitle: "Novena a São Marcos",
        description: "Novena em honra a São Marcos Evangelista (25 de abril).",
        initialPrayer: "",
        finalPrayer: "",
        days: Array.from({ length: 9 }, (_, i) => ({
            day: `Dia ${i + 1}`,
            title: `Dia ${i + 1} - São Marcos`,
            content: ""
        }))
    },

    santa_gianna_beretta: {
        saintName: "Santa Gianna Beretta",
        novenaTitle: "Novena a Santa Gianna Beretta",
        description: "Novena em honra a Santa Gianna Beretta Molla (28 de abril).",
        initialPrayer: "",
        finalPrayer: "",
        days: Array.from({ length: 9 }, (_, i) => ({
            day: `Dia ${i + 1}`,
            title: `Dia ${i + 1} - Santa Gianna Beretta`,
            content: ""
        }))
    },

    santa_catarina_siena: {
        saintName: "Santa Catarina de Siena",
        novenaTitle: "Novena a Santa Catarina de Siena",
        description: "Novena em honra a Santa Catarina de Siena, Doutora da Igreja (29 de abril).",
        initialPrayer: "",
        finalPrayer: "",
        days: Array.from({ length: 9 }, (_, i) => ({
            day: `Dia ${i + 1}`,
            title: `Dia ${i + 1} - Santa Catarina de Siena`,
            content: ""
        }))
    },

    sao_jose_operario: {
        saintName: "São José Operário",
        novenaTitle: "Novena a São José Operário",
        description: "Novena em honra a São José Operário (1º de maio).",
        initialPrayer: "",
        finalPrayer: "",
        days: Array.from({ length: 9 }, (_, i) => ({
            day: `Dia ${i + 1}`,
            title: `Dia ${i + 1} - São José Operário`,
            content: ""
        }))
    },

    // MAIO
    nossa_senhora_fatima: {
        saintName: "Nossa Senhora de Fátima",
        novenaTitle: "Novena a Nossa Senhora de Fátima",
        description: "Novena em preparação à festa de Nossa Senhora de Fátima (13 de maio).",
        image: "/images/ns_fatima.png",
        initialPrayer: "",
        finalPrayer: "",
        days: Array.from({ length: 9 }, (_, i) => ({
            day: `Dia ${i + 1}`,
            title: `Dia ${i + 1} - Nossa Senhora de Fátima`,
            content: ""
        }))
    },

    santa_rita_cassia: {
        saintName: "Santa Rita de Cássia",
        novenaTitle: "Novena a Santa Rita de Cássia",
        description: "Novena em honra a Santa Rita de Cássia, santa das causas impossíveis (22 de maio).",
        initialPrayer: "",
        finalPrayer: "",
        days: Array.from({ length: 9 }, (_, i) => ({
            day: `Dia ${i + 1}`,
            title: `Dia ${i + 1} - Santa Rita de Cássia`,
            content: ""
        }))
    },

    pentecostes: {
        saintName: "Pentecostes",
        novenaTitle: "Novena de Pentecostes",
        description: "Novena em preparação à solenidade de Pentecostes.",
        initialPrayer: "",
        finalPrayer: "",
        days: Array.from({ length: 9 }, (_, i) => ({
            day: `Dia ${i + 1}`,
            title: `Dia ${i + 1} - Pentecostes`,
            content: ""
        }))
    },

    nossa_senhora_auxiliadora: {
        saintName: "Nossa Senhora Auxiliadora",
        novenaTitle: "Novena a Nossa Senhora Auxiliadora",
        description: "Novena em honra a Nossa Senhora Auxiliadora (24 de maio).",
        image: "/images/ns_auxiliadora.png",
        initialPrayer: "",
        finalPrayer: "",
        days: Array.from({ length: 9 }, (_, i) => ({
            day: `Dia ${i + 1}`,
            title: `Dia ${i + 1} - Nossa Senhora Auxiliadora`,
            content: ""
        }))
    },

    sao_filipe_neri: {
        saintName: "São Filipe Néri",
        novenaTitle: "Novena a São Filipe Néri",
        description: "Novena em honra a São Filipe Néri (26 de maio).",
        initialPrayer: "",
        finalPrayer: "",
        days: Array.from({ length: 9 }, (_, i) => ({
            day: `Dia ${i + 1}`,
            title: `Dia ${i + 1} - São Filipe Néri`,
            content: ""
        }))
    },

    visitacao: {
        saintName: "Visitação de Maria",
        novenaTitle: "Novena da Visitação",
        description: "Novena em preparação à festa da Visitação de Maria (31 de maio).",
        initialPrayer: "",
        finalPrayer: "",
        days: Array.from({ length: 9 }, (_, i) => ({
            day: `Dia ${i + 1}`,
            title: `Dia ${i + 1} - Visitação`,
            content: ""
        }))
    },

    // JUNHO
    santo_antonio_padua: {
        saintName: "Santo Antônio de Pádua",
        novenaTitle: "Trezena de Santo Antônio",
        description: "Trezena (13 dias) em honra a Santo Antônio de Pádua (13 de junho).",
        initialPrayer: "",
        finalPrayer: "",
        days: Array.from({ length: 13 }, (_, i) => ({
            day: `Dia ${i + 1}`,
            title: `Dia ${i + 1} - Santo Antônio`,
            content: ""
        }))
    },

    sagrado_coracao: {
        saintName: "Sagrado Coração de Jesus",
        novenaTitle: "Novena ao Sagrado Coração",
        description: "Novena em preparação à solenidade do Sagrado Coração de Jesus.",
        initialPrayer: "",
        finalPrayer: "",
        days: Array.from({ length: 9 }, (_, i) => ({
            day: `Dia ${i + 1}`,
            title: `Dia ${i + 1} - Sagrado Coração`,
            content: ""
        }))
    },

    imaculado_coracao: {
        saintName: "Imaculado Coração de Maria",
        novenaTitle: "Novena ao Imaculado Coração",
        description: "Novena em honra ao Imaculado Coração de Maria.",
        initialPrayer: "",
        finalPrayer: "",
        days: Array.from({ length: 9 }, (_, i) => ({
            day: `Dia ${i + 1}`,
            title: `Dia ${i + 1} - Imaculado Coração`,
            content: ""
        }))
    },

    sao_joao_batista: {
        saintName: "São João Batista",
        novenaTitle: "Novena a São João Batista",
        description: "Novena em preparação à natividade de São João Batista (24 de junho).",
        initialPrayer: "",
        finalPrayer: "",
        days: Array.from({ length: 9 }, (_, i) => ({
            day: `Dia ${i + 1}`,
            title: `Dia ${i + 1} - São João Batista`,
            content: ""
        }))
    },

    sao_pedro_paulo: {
        saintName: "São Pedro e São Paulo",
        novenaTitle: "Novena a São Pedro e São Paulo",
        description: "Novena em honra aos apóstolos São Pedro e São Paulo (29 de junho).",
        initialPrayer: "",
        finalPrayer: "",
        days: Array.from({ length: 9 }, (_, i) => ({
            day: `Dia ${i + 1}`,
            title: `Dia ${i + 1} - São Pedro e São Paulo`,
            content: ""
        }))
    },

    // JULHO
    nossa_senhora_carmo: {
        saintName: "Nossa Senhora do Carmo",
        novenaTitle: "Novena a Nossa Senhora do Carmo",
        description: "Novena em honra a Nossa Senhora do Carmo (16 de julho).",
        initialPrayer: "",
        finalPrayer: "",
        days: Array.from({ length: 9 }, (_, i) => ({
            day: `Dia ${i + 1}`,
            title: `Dia ${i + 1} - Nossa Senhora do Carmo`,
            content: ""
        }))
    },

    santa_ana_joaquim: {
        saintName: "Sant'Ana e São Joaquim",
        novenaTitle: "Novena a Sant'Ana e São Joaquim",
        description: "Novena em honra a Sant'Ana e São Joaquim, pais de Maria (26 de julho).",
        initialPrayer: "",
        finalPrayer: "",
        days: Array.from({ length: 9 }, (_, i) => ({
            day: `Dia ${i + 1}`,
            title: `Dia ${i + 1} - Sant'Ana e São Joaquim`,
            content: ""
        }))
    },

    // AGOSTO
    assuncao_nossa_senhora: {
        saintName: "Assunção de Nossa Senhora",
        novenaTitle: "Novena da Assunção",
        description: "Novena em preparação à solenidade da Assunção de Nossa Senhora (15 de agosto).",
        image: "/images/ns_assuncao.png",
        initialPrayer: "",
        finalPrayer: "",
        days: Array.from({ length: 9 }, (_, i) => ({
            day: `Dia ${i + 1}`,
            title: `Dia ${i + 1} - Assunção`,
            content: ""
        }))
    },

    // SETEMBRO
    natividade_nossa_senhora: {
        saintName: "Natividade de Nossa Senhora",
        novenaTitle: "Novena da Natividade de Maria",
        description: "Novena em preparação à festa da Natividade de Nossa Senhora (8 de setembro).",
        image: "/images/ns_natividade.png",
        initialPrayer: "",
        finalPrayer: "",
        days: Array.from({ length: 9 }, (_, i) => ({
            day: `Dia ${i + 1}`,
            title: `Dia ${i + 1} - Natividade de Maria`,
            content: ""
        }))
    },

    nossa_senhora_dores: {
        saintName: "Nossa Senhora das Dores",
        novenaTitle: "Novena a Nossa Senhora das Dores",
        description: "Novena em honra a Nossa Senhora das Dores (15 de setembro).",
        image: "/images/ns_dores_setembro.png",
        initialPrayer: "",
        finalPrayer: "",
        days: Array.from({ length: 9 }, (_, i) => ({
            day: `Dia ${i + 1}`,
            title: `Dia ${i + 1} - Nossa Senhora das Dores`,
            content: ""
        }))
    },

    sao_miguel_arcanjo: {
        saintName: "São Miguel Arcanjo",
        novenaTitle: "Novena a São Miguel Arcanjo",
        description: "Novena em honra a São Miguel, São Gabriel e São Rafael, arcanjos (29 de setembro).",
        initialPrayer: "",
        finalPrayer: "",
        days: Array.from({ length: 9 }, (_, i) => ({
            day: `Dia ${i + 1}`,
            title: `Dia ${i + 1} - São Miguel Arcanjo`,
            content: ""
        }))
    },

    // NOVENAS ADICIONAIS
    santa_josefina_bakhita: {
        saintName: "Santa Josefina Bakhita",
        novenaTitle: "Novena a Santa Josefina Bakhita",
        description: "Ex-escrava e santa da esperança. Peça libertação das amarras.",
        image: "/images/santa_josefina_bakhita.png",
        initialPrayer: `<div class="prayer-block"><p>Josefina Bakhita (também conhecida como Giuseppina Bakhita, Mãe Moretta, Irmã Moretta) foi uma freira sudanesa nacionalizada italiano. Nasceu na região de Darfur, no Sudão em 1869, ainda criança, ela foi sequestrada e vendida em vários mercados de escravos africanos, sofrendo severo cativeiro. Ao obter a liberdade, abraçou a fé cristã e entrou no Instituto das Filhas Canosianas da Caridade, e passou o resto de sua vida em Schio, no território italiano de Vicenza, dedicada a Cristo e ao serviço do próximo onde morreu em 1947.</p></div>`,
        finalPrayer: `<div class="prayer-block"><p class="mt-4 font-semibold">Ao final de cada dia, reze:</p><p>Pai Nosso, Ave Maria, Glória ao Pai.</p></div>`,
        days: [
            {
                day: "Dia 1",
                title: "Primeiro Dia - Pelas crianças sequestradas",
                content: `<div class="day-specific-content"><p>Querida Santa Josefina, você foi separada de sua família ainda jovem, perdendo toda a sua identidade. Pedimos-lhe por todas as crianças que foram sequestradas e por seus pais e familiares que sofrem sem saber o que aconteceu com eles. Que eles sejam consolados e que um dia possam se reencontrar.</p><p class="mt-4 italic">Peço especialmente a você (acrescente sua intenção).</p><p class="mt-4 font-semibold">Pai Nosso, Ave Maria, Glória ao Pai.</p></div>`
            },
            {
                day: "Dia 2",
                title: "Segundo Dia - Pelas vítimas da escravidão",
                content: `<div class="day-specific-content"><p>Querida Santa Josefina, você sabia como era ser escrava, não ter direitos, tendo até perdido seu nome. Pedimos-lhe pelas vítimas de traficantes de pessoas e por todos aqueles que se encontram em qualquer tipo de escravidão. Que este mal seja apagado de nosso mundo.</p><p class="mt-4 italic">Peço especialmente a você (acrescente sua intenção).</p><p class="mt-4 font-semibold">Pai Nosso, Ave Maria, Glória ao Pai.</p></div>`
            },
            {
                day: "Dia 3",
                title: "Terceiro Dia - Pelas vítimas de tortura",
                content: `<div class="day-specific-content"><p>Querida Santa Josefina, um dos seus "donos" marcou todo o seu corpo com cicatrizes. Você conhecia essa dor terrível. Pedimos por todas as vítimas de tortura. Ajude-os a curar no corpo, mente e espírito. Que todos os governos abandonem esta prática.</p><p class="mt-4 italic">Peço especialmente a você (acrescente sua intenção).</p><p class="mt-4 font-semibold">Pai Nosso, Ave Maria, Glória ao Pai.</p></div>`
            },
            {
                day: "Dia 4",
                title: "Quarto Dia - Pela contemplação da beleza",
                content: `<div class="day-specific-content"><p>Querida Santa Josefina, até no terrível sofrimento da sua vida, você sabia ver a beleza no mundo e acreditava que Deus deveria existir como consequência dessa beleza. Que também tenhamos um pouco do seu amor pela beleza e pelo mundo natural.</p><p class="mt-4 italic">Peço especialmente a você (acrescente sua intenção).</p><p class="mt-4 font-semibold">Pai Nosso, Ave Maria, Glória ao Pai.</p></div>`
            },
            {
                day: "Dia 5",
                title: "Quinto Dia - Pela coragem de seguir a vontade de Deus",
                content: `<div class="day-specific-content"><p>Querida Santa Josefina, quando a família que te resgatou queria que você fosse embora com os canósios, você teve a coragem de recusar, mesmo estando verdadeiramente grata a eles. Ajude-nos a colocar nossa vontade de Deus acima de todas as coisas, até mesmo de nossas afeições naturais.</p><p class="mt-4 italic">Peço especialmente a você (acrescente sua intenção).</p><p class="mt-4 font-semibold">Pai Nosso, Ave Maria, Glória ao Pai.</p></div>`
            },
            {
                day: "Dia 6",
                title: "Sexto Dia - Pela gratidão à fé",
                content: `<div class="day-specific-content"><p>Querida Santa Josefina, você estava tão grata por conhecer a Deus e por fazer parte da sua Igreja que frequentemente beijava a pia batismal. Que nunca tomemos como garantida a fé que nos foi dada e dê-nos um pouco da sua humildade e gratidão por tudo o que Deus faz.</p><p class="mt-4 italic">Peço especialmente a você (acrescente sua intenção).</p><p class="mt-4 font-semibold">Pai Nosso, Ave Maria, Glória ao Pai.</p></div>`
            },
            {
                day: "Dia 7",
                title: "Sétimo Dia - Pela compaixão e alegria",
                content: `<div class="day-specific-content"><p>Querida Santa Josefina, seus sofrimentos lhe deram grande compaixão pelos outros. Você estava sempre sorrindo e aberta para aqueles que vinham até você, não importava o quão inconveniente fosse. Santa Josefina, que possamos ter um pouco da sua doçura e disponibilidade, um pouco da sua alegria.</p><p class="mt-4 italic">Peço especialmente a você (acrescente sua intenção).</p><p class="mt-4 font-semibold">Pai Nosso, Ave Maria, Glória ao Pai.</p></div>`
            },
            {
                day: "Dia 8",
                title: "Oitavo Dia - Pelos que sofrem",
                content: `<div class="day-specific-content"><p>Querida Santa Josefina, em sua última doença dolorosa você reviveu sua escravidão, implorando à enfermeira para soltar suas correntes. Pedimos-lhe por todos aqueles que estão sobrecarregados pela dor, e também pedimos que possamos enfrentar nossos sofrimentos com fé e com o conhecimento de que Deus não nos abandonou.</p><p class="mt-4 italic">Peço especialmente a você (acrescente sua intenção).</p><p class="mt-4 font-semibold">Pai Nosso, Ave Maria, Glória ao Pai.</p></div>`
            },
            {
                day: "Dia 9",
                title: "Nono Dia - Pela consolação de Nossa Senhora",
                content: `<div class="day-specific-content"><p>Querida Santa Josefina, suas últimas palavras foram "Nossa Senhora, Nossa Senhora". Que também conheçamos a consolação da Mãe de Deus, agora e na hora da nossa morte.</p><p class="mt-4 italic">Peço especialmente a você (acrescente sua intenção).</p><p class="mt-4 font-semibold">Pai Nosso, Ave Maria, Glória ao Pai.</p></div>`
            }
        ]
    },

    sao_bento_transito: {
        saintName: "São Bento (Trânsito)",
        novenaTitle: "Novena a São Bento (Trânsito)",
        description: "Pai dos monges. Peça proteção contra o mal e ciladas do inimigo.",
        initialPrayer: "",
        finalPrayer: "",
        days: Array.from({ length: 9 }, (_, i) => ({
            day: `Dia ${i + 1}`,
            title: `Dia ${i + 1} - São Bento`,
            content: ""
        }))
    },

    sao_matias: {
        saintName: "São Matias",
        novenaTitle: "Novena a São Matias",
        description: "O apóstolo escolhido para completar os doze. Fidelidade ao chamado.",
        initialPrayer: "",
        finalPrayer: "",
        days: Array.from({ length: 9 }, (_, i) => ({
            day: `Dia ${i + 1}`,
            title: `Dia ${i + 1} - São Matias`,
            content: ""
        }))
    },

    nossa_senhora_caravaggio: {
        saintName: "Nossa Senhora de Caravaggio",
        novenaTitle: "Novena a N.S. de Caravaggio",
        description: "Aparição na Itália. Peça consolo nas aflições e bonança.",
        image: "/images/ns_caravaggio.png",
        initialPrayer: "",
        finalPrayer: "",
        days: Array.from({ length: 9 }, (_, i) => ({
            day: `Dia ${i + 1}`,
            title: `Dia ${i + 1} - N.S. de Caravaggio`,
            content: ""
        }))
    },

    santo_onofre: {
        saintName: "Santo Onofre",
        novenaTitle: "Novena a Santo Onofre",
        description: "Eremita do deserto. Intercessor contra vícios e pelo sustento.",
        initialPrayer: "",
        finalPrayer: "",
        days: Array.from({ length: 9 }, (_, i) => ({
            day: `Dia ${i + 1}`,
            title: `Dia ${i + 1} - Santo Onofre`,
            content: ""
        }))
    },

    nossa_senhora_perpetuo_socorro: {
        saintName: "Nossa Senhora do Perpétuo Socorro",
        novenaTitle: "Novena a N.S. do Perpétuo Socorro",
        description: "O auxílio materno e constante em todas as aflições e necessidades.",
        image: "/images/ns_perpetuo_socorro.png",
        initialPrayer: "",
        finalPrayer: "",
        days: Array.from({ length: 9 }, (_, i) => ({
            day: `Dia ${i + 1}`,
            title: `Dia ${i + 1} - N.S. Perpétuo Socorro`,
            content: ""
        }))
    },

    sao_tome_apostolo: {
        saintName: "São Tomé Apóstolo",
        novenaTitle: "Novena a São Tomé",
        description: "Peça a fé para crer no Ressuscitado: 'Meu Senhor e meu Deus'.",
        initialPrayer: "",
        finalPrayer: "",
        days: Array.from({ length: 9 }, (_, i) => ({
            day: `Dia ${i + 1}`,
            title: `Dia ${i + 1} - São Tomé`,
            content: ""
        }))
    },

    santa_paulina: {
        saintName: "Santa Paulina",
        novenaTitle: "Novena a Santa Paulina",
        description: "Primeira santa do Brasil. Dedicação total aos doentes e pobres.",
        initialPrayer: "",
        finalPrayer: "",
        days: Array.from({ length: 9 }, (_, i) => ({
            day: `Dia ${i + 1}`,
            title: `Dia ${i + 1} - Santa Paulina`,
            content: ""
        }))
    },

    sao_jose_anchieta: {
        saintName: "São José de Anchieta",
        novenaTitle: "Novena a São José de Anchieta",
        description: "Apóstolo do Brasil. Exemplo de evangelização e amor à cultura.",
        initialPrayer: "",
        finalPrayer: "",
        days: Array.from({ length: 9 }, (_, i) => ({
            day: `Dia ${i + 1}`,
            title: `Dia ${i + 1} - São José de Anchieta`,
            content: ""
        }))
    },
    nossa_senhora_lujan: {
        saintName: "Nossa Senhora de Luján",
        novenaTitle: "Novena a Nossa Senhora de Luján",
        description: "Peça a intercessão da Padroeira da Argentina para suas necessidades.",
        image: "/images/ns_lujan.png",
        initialPrayer: "",
        finalPrayer: "",
        days: Array.from({ length: 9 }, (_, i) => ({
            day: `Dia ${i + 1}`,
            title: `Dia ${i + 1} - N.S. de Luján`,
            content: ""
        }))
    },
    nossa_senhora_itati: {
        saintName: "Nossa Senhora de Itatí",
        novenaTitle: "Novena a Nossa Senhora de Itatí",
        description: "Novena em honra à Virgem de Itatí, Rainha do Rio Paraná.",
        image: "/images/ns_itati.png",
        initialPrayer: "",
        finalPrayer: "",
        days: Array.from({ length: 9 }, (_, i) => ({
            day: `Dia ${i + 1}`,
            title: `Dia ${i + 1} - N.S. de Itatí`,
            content: ""
        }))
    },
    nossa_senhora_copacabana: {
        saintName: "Nossa Senhora de Copacabana",
        novenaTitle: "Novena a Nossa Senhora de Copacabana",
        description: "Peça o auxílio da Rainha da Bolívia e das Américas.",
        image: "/images/ns_copacabana.png",
        initialPrayer: "",
        finalPrayer: "",
        days: Array.from({ length: 9 }, (_, i) => ({
            day: `Dia ${i + 1}`,
            title: `Dia ${i + 1} - N.S. de Copacabana`,
            content: ""
        }))
    },
    nossa_senhora_rosario_san_nicolas: {
        saintName: "Nossa Senhora do Rosário de San Nicolás",
        novenaTitle: "Novena a N.S. do Rosário de San Nicolás",
        description: "Novena em honra às aparições de Maria em San Nicolás de los Arroyos.",
        image: "/images/ns_rosario_san_nicolas.png",
        initialPrayer: "",
        finalPrayer: "",
        days: Array.from({ length: 9 }, (_, i) => ({
            day: `Dia ${i + 1}`,
            title: `Dia ${i + 1} - N.S. de San Nicolás`,
            content: ""
        }))
    },

    sao_bento: {
        saintName: "São Bento",
        novenaTitle: "Novena a São Bento",
        description: "Novena em honra a São Bento, patriarca dos monges do Ocidente. Serve para ambas as festas: 11 de julho (São Bento) e 21 de março (Trânsito de São Bento).",
        image: "/images/sao_bento.png",
        initialPrayer: `<div class="prayer-block"><h4 class="section-title">Oração da Medalha de São Bento</h4><p>A Cruz Sagrada seja a minha luz, não seja o dragão o meu guia. Retira-te, satanás! Nunca me aconselhes coisas vãs. É mau o que tu me ofereces, bebe tu mesmo o teu veneno!</p><h4 class="section-title mt-4">Oração para Obter Qualquer Graça</h4><p>Ó glorioso patriarca São Bento, que vos mostrastes sempre compassivo com os necessitados, fazei que também nós, recorrendo à vossa poderosa intercessão, obtenhamos auxílio em todas as nossas aflições.</p><p class="mt-4">Que nas famílias reine a paz e a tranquilidade, afastem-se todas as desgraças, tanto corporais como espirituais, especialmente o pecado.</p><p class="mt-4">Alcançai do Senhor a graça que vos suplicamos, obtendo-nos finalmente para que, ao terminar nossa vida nesse vale de lágrimas, possamos louvar a Deus convosco no Paraíso.</p><p class="mt-4 font-semibold">Rogai por nós, glorioso patriarca São Bento, para que sejamos dignos das promessas de Cristo.</p></div>`,
        finalPrayer: `<div class="prayer-block"><h4 class="section-title">Oração Conclusiva</h4><p>Ó Deus, que fizestes o abade São Bento preclaro mestre na escola do Vosso serviço. Concedei que, nada preferindo ao Vosso amor, corramos de coração dilatado no caminho dos Vossos mandamentos.</p><p class="mt-4">Por Nosso Senhor Jesus Cristo, na unidade do Espírito Santo. Amém.</p></div>`,
        days: [
            {
                day: "Dia 1",
                title: "Primeiro Dia - Seguir Jesus é comprometer-se",
                content: `<div class="day-specific-content"><h4 class="section-title">Palavra de Deus</h4><p>"Ao passar pela beira do mar da Galileia, Jesus viu Simão e seu irmão André; estavam jogando a rede ao mar, pois eram pescadores. Jesus disse para eles: 'Sigam-Me e Eu farei vocês se tornarem pescadores de homens'. Eles imediatamente deixaram as redes e seguiram Jesus" (Mc 1,16-18).</p><h4 class="section-title mt-4">Reflexão</h4><p>O chamado dos primeiros discípulos é um convite aberto a todos os que ouvem as palavras de Jesus. Simão e André deixam a profissão, pois, seguir Jesus implica deixar as seguranças que possam impedir o compromisso com uma ação transformadora.</p><h4 class="section-title mt-4">Conhecendo a Regra de São Bento</h4><p>O primeiro grau da humildade é a pronta obediência, peculiar àqueles que nada amam acima de Cristo (…).</p><p class="mt-4">Essa mesma obediência somente será digna da aceitação de Deus e suave para os homens, se a ordem for executada sem delongas, sem hesitações, sem morosidade, sem murmuração ou qualquer palavra de resistência (…).</p><p class="mt-4">Se o discípulo obedecer de má vontade e se murmurar, ainda que não o faça com a boca, mas só no coração, ainda que cumpra a ordem recebida, sua obra não será agradável a Deus, que vê o íntimo dos corações; e longe de obter alguma graça por tal ação, incorrerá na pena dos murmuradores se não fizer reparação e não se corrigir (cap.5, Obediência).</p></div>`
            },
            {
                day: "Dia 2",
                title: "Segundo Dia - Jesus rejeita a popularidade fácil",
                content: `<div class="day-specific-content"><h4 class="section-title">Palavra de Deus</h4><p>"De madrugada, quando ainda estava escuro, Jesus se levantou e foi rezar num lugar deserto. Simão e seus companheiros foram atrás de Jesus e, quando O encontraram, disseram: 'Todos estão Te procurando'. Jesus respondeu: 'Vamos para outros lugares, às aldeias da redondeza. Devo pregar também ali, pois foi para isso que Eu vim'. E Jesus andava por toda a Galileia, pregando nas sinagogas e expulsando os demônios" (Mc 1,35-39).</p><h4 class="section-title mt-4">Reflexão</h4><p>O deserto é o ponto de partida para a missão.</p><p class="mt-4">Jesus encontra o Pai, que O envia para salvar os homens, mas encontra também a tentação: Pedro sugere que Jesus aproveite a popularidade conseguida num dia. É o primeiro diálogo com os discípulos e já se nota tensão.</p><h4 class="section-title mt-4">Conhecendo a Regra de São Bento</h4><p>Quando temos alguma coisa a solicitar aos homens poderosos, nós nos aproximamos com humildade e respeito. Com quanto maior razão devemos apresentar nossas súplicas com toda humildade e pureza de devoção ao Senhor Deus do Universo!</p><p class="mt-4">Saibamos que não é pela multiplicidade de palavras que seremos atendidos, mas sim pela pureza do coração e a compunção das lágrimas. A prece deve ser, portanto, curta e pura, salvo se, porventura, venha a prolongar-se por afeto inspirado pela graça divina. Mas, em comunidade, que a oração seja curta e, dado o sinal pelo superior, levantem-se todos ao mesmo tempo (cap.20, reverência na oração).</p></div>`
            },
            {
                day: "Dia 3",
                title: "Terceiro Dia - A cura do leproso",
                content: `<div class="day-specific-content"><h4 class="section-title">Palavra de Deus</h4><p>"Um leproso chegou perto de Jesus e pediu de joelhos: 'Se queres, Tu tens o poder de me purificar'. Jesus ficou cheio de ira, estendeu a mão, tocou nele e disse: 'Eu quero, fique purificado'. No mesmo instante, a lepra desapareceu e o homem ficou purificado. Então, Jesus o mandou logo embora, ameaçando-o severamente: 'Não conte nada para ninguém! Vá pedir ao sacerdote para examinar você e, depois, ofereça pela sua purificação o sacrifício que Moisés ordenou, para que seja um testemunho para eles'. Mas, o homem foi embora e começou a pregar muito e a espalhar a notícia. Por isso, Jesus não podia mais entrar publicamente numa cidade; Ele ficava fora, em lugares desertos. E de toda parte as pessoas iam procurá-Lo" (Mc 1,40-45).</p><h4 class="section-title mt-4">Reflexão</h4><p>O leproso era marginalizado, devendo viver fora da cidade, longe do convívio social, por motivos higiênicos e religiosos (Lv 13,45-46). Jesus fica irado contra uma sociedade que produz a marginalização. Por isso, o homem curado deve apresentar-se para dar testemunho contra um sistema que não cura, mas só declara quem pode ou não participar da vida social. O marginalizado agora se torna testemunho vivo que anuncia Jesus, Aquele que purifica. E Jesus está fora da cidade, lugar que se torna o centro de nova relação social: o lugar dos marginalizados é o lugar onde se pode encontrar o Senhor.</p><h4 class="section-title mt-4">Conhecendo a Regra de São Bento</h4><p>Durma cada um em uma cama.</p><p class="mt-4">Tenham seus leitos de acordo com a profissão do monge e segundo as ordens do abade. Se for possível, durmam todos no mesmo lugar; porém, se o grande número não o permitir, durmam dez ou vinte juntamente, tendo com eles monges mais velhos para vigiá-los.</p><p class="mt-4">Uma lâmpada iluminará o dormitório, sem interrupção, até o amanhecer.</p><p class="mt-4">Os monges dormirão vestidos, cingidos com os cintos ou cordões, mas não terão faca a seu lado, para que não se firam enquanto dormem e sempre estejam prontos e, assim, dado o sinal, levantem-se sem demora, apressem-se mutuamente e antecipem-se no oficio divino, mas com toda a gravidade e modéstia (cap.22, o sono dos monges).</p></div>`
            },
            {
                day: "Dia 4",
                title: "Quarto Dia - Jesus rejeita a hipocrisia social",
                content: `<div class="day-specific-content"><h4 class="section-title">Palavra de Deus</h4><p>"Jesus saiu de novo para a beira do mar. Toda a multidão ia ao Seu encontro e Ele a ensinava. Enquanto ia caminhando, Jesus viu Levi, o filho de Alfeu, sentado na coletoria de impostos. Então, disse-lhe: 'Siga-Me'. Levi se levantou e O seguiu. Mais tarde, Jesus estava comendo na casa de Levi.</p><p class="mt-4">Havia vários cobradores de impostos e pecadores na mesa com Jesus e Seus discípulos; com efeito, eram muitos os que O seguiam. Alguns doutores da lei, que eram fariseus, viram que Jesus estava comendo com pecadores e cobradores de impostos. Então, eles perguntaram aos discípulos: 'Por que Jesus come e bebe junto com os cobradores de impostos e pecadores?'. Jesus ouviu e respondeu: "As pessoas que têm saúde não precisam de médico, mas só as que estão doentes. Eu não vim para chamar os justos e, sim, os pecadores" (Mc 2,13-17).</p><h4 class="section-title mt-4">Reflexão</h4><p>Os cobradores de impostos eram desprezados e marginalizados, porque colaboravam com a dominação romana, cobrando imposto e, em geral, aproveitando para roubar. Jesus rompe os esquemas sociais que dividem os homens em bons e maus, puros e impuros.</p><p class="mt-4">Chamando um cobrador de impostos para ser Seu discípulo, e comendo com os pecadores, Ele mostra que Sua missão é reunir e salvar aqueles que a sociedade hipócrita rejeita como maus.</p><h4 class="section-title mt-4">Conhecendo a Regra de São Bento</h4><p>Zele-se, com grande cuidado, para que esse vício da propriedade seja arrancado pela raiz no mosteiro. Ninguém ouse dar ou receber coisa alguma sem a autorização do abade, nem possuir algo próprio, absolutamente nada, nem livro, nem tabuinha (de escrever), nem estilete.</p><p class="mt-4">Em uma palavra: coisa nenhuma, já que não lhes é lícito ter a seu arbítrio sequer o próprio corpo nem a própria vontade. Mas devem esperar do pai do mosteiro tudo de que necessitam.</p><p class="mt-4">Não seja lícito a ninguém possuir o que não lhe seja dado pelo abade ou por ele permitido ter. Seja tudo comum a todos, como está escrito e, que ninguém tenha a ousadia de tornar seu qualquer objeto, nem mesmo por palavras (cap.33, se os monges devem ter alguma coisa de próprio).</p></div>`
            },
            {
                day: "Dia 5",
                title: "Quinto Dia - O sábado foi feito para o homem",
                content: `<div class="day-specific-content"><h4 class="section-title">Palavra de Deus</h4><p>"Num dia de sábado, Jesus estava passando por uns campos de trigo. Os discípulos iam abrindo caminho e arrancando as espigas. Então, os fariseus perguntaram a Jesus: 'Vocês nunca leram o que Davi e seus companheiros fizeram quando estavam passando necessidade e sentindo fome? Davi entrou na casa de Deus, no tempo em que Abiatar era Sumo Sacerdote, comeu dos pães oferecidos a Deus e os deu também para os seus companheiros. No entanto, só os sacerdotes podem comer desses pães'".</p><p class="mt-4">Jesus acrescentou: "O sábado foi feito para servir ao homem e não o homem para servir ao sábado. Portanto, o Filho do Homem é Senhor até mesmo no Sábado" (Mc 2,23-28).</p><h4 class="section-title mt-4">Reflexão</h4><p>O centro da obra de Deus é o homem e cultuar Deus é fazer o bem a ele. Não se trata de estreitar ou alargar a lei do sábado, mas de dar sentido totalmente novo a todas as estruturas e leis que regem as relações entre os homens, porque só é bom aquilo que faz o homem crescer e ter mais vida.</p><p class="mt-4">Toda lei que oprime o homem é lei contra a própria vontade de Deus e deve ser abolida.</p><h4 class="section-title mt-4">Conhecendo a Regra de São Bento</h4><p>Antes de tudo e acima de tudo, deve-se cuidar dos enfermos, que deverão ser servidos como se fossem o Cristo em pessoa (…).</p><p class="mt-4">De seu lado, os doentes considerem que são servidos em honra de Deus e não entristeçam, com exigências supérfluas, os irmãos que os servem. Contudo, os doentes devem ser suportados com paciência, porque, por meio deles, adquire-se maior recompensa.</p><p class="mt-4">O abade vigie, portanto, com todo o cuidado, para que não sofram nenhuma negligência (cap.36, dos irmãos enfermos).</p></div>`
            },
            {
                day: "Dia 6",
                title: "Sexto Dia - A verdadeira família de Jesus",
                content: `<div class="day-specific-content"><h4 class="section-title">Palavra de Deus</h4><p>"Nisso chegaram a mãe e os irmãos de Jesus; ficaram do lado de fora e mandaram chamá-Lo. Havia uma multidão sentada ao redor de Jesus. Então, lhe disseram: 'Olha, tua mãe e teus irmãos estão aí fora e te procuram'. Jesus perguntou: 'Quem é Minha mãe e Meus irmãos?" Então, Jesus olhou para as pessoas que estavam sentadas ao seu redor e disse: 'Aqui estão Minha mãe e Meus irmãos. Quem faz a vontade de Deus, esse é Meu irmão, minha irmã e Minha mãe'" (Mc 3,31-35).</p><h4 class="section-title mt-4">Reflexão</h4><p>Enquanto a família, segundo a carne, está "fora", a família segundo o compromisso da fé está "dentro", ao redor de Jesus.</p><p class="mt-4">Sua verdadeira família é formada por aqueles que realizam, na própria vida, a vontade de Deus, que consiste em continuar a missão de Jesus.</p><h4 class="section-title mt-4">Conhecendo a Regra de São Bento</h4><p>Se bem que o homem, já por natureza, seja levado à compaixão para com essas duas idades, a velhice e a infância, também a autoridade da regra deve intervir no que lhes diz respeito.</p><p class="mt-4">Tenha-se, pois, sempre em vista, sua fraqueza e não se mantenha, em relação a eles, o rigor da regra no que diz respeito à alimentação;</p><p class="mt-4">Mas se use, em seu favor, condescendência misericordiosa, permitindo que antecipem as horas regulares das refeições (cap.37, dos anciãos e das crianças).</p></div>`
            },
            {
                day: "Dia 7",
                title: "Sétimo Dia - O mistério da missão de Jesus",
                content: `<div class="day-specific-content"><h4 class="section-title">Palavra de Deus</h4><p>"Quando se acharam a sós, os que O cercavam e os doze, perguntaram a Jesus o que significavam as parábolas. Ele disse para eles: 'Para vocês, foi dado o mistério do Reino de Deus; para os que estão fora, tudo acontece em parábolas, para que olhem, mas não vejam; escutem, mas não compreendam; para que não se convertam e não sejam perdoados'" (Mc 4,10-12).</p><h4 class="section-title mt-4">Reflexão</h4><p>As parábolas são histórias que ajudam a ler e compreender toda a missão de Jesus. Mas é preciso "estar dentro", isto é, seguir Jesus para perceber que o Reino de Deus está se aproximando por meio de Sua ação. Os que não seguem Jesus ficam "por fora" e nada podem compreender.</p><h4 class="section-title mt-4">Conhecendo a Regra de São Bento</h4><p>A vida de um monge deve ser, em todo tempo, observância da Quaresma. Como, todavia, essa perfeição apenas se encontra em pequeno número, exortamos os irmãos a que conservem vida muito pura durante os dias da Quaresma e apaguem, nesses santos dias, todas as negligências dos outros tempos, o que faremos dignamente, abstendo-nos à oração com lágrimas, à leitura, à compunção do coração e à abstinência.</p><p class="mt-4">Acrescentemos, pois, nestes dias, alguma coisa ao nosso encargo habitual: orações particulares, alguma privação no comer e no beber, de forma que cada um, por sua livre vontade, oferece a Deus, na alegria do Espírito Santo, alguma coisa mais do que lhe seja ordenado (cap.49, da observância da Quaresma).</p></div>`
            },
            {
                day: "Dia 8",
                title: "Oitavo Dia - O escândalo da encarnação",
                content: `<div class="day-specific-content"><h4 class="section-title">Palavra de Deus</h4><p>"Jesus foi para Nazaré, Sua terra, e Seus discípulos O acompanharam. Quando chegou o sábado, Jesus começou a ensinar na sinagoga. Muitos que O escutavam ficavam admirados e diziam: 'De onde vem tudo isso? Onde foi que arranjou tanta sabedoria? E esses milagres que são realizados pelas mãos d'Ele? Esse homem não é o carpinteiro, filho de Maria e irmão de Tiago, de Joset, de Judas e de Simão? E suas irmãs não moram aqui conosco?' E ficaram escandalizados por causa de Jesus. Então, Cristo dizia para eles que um profeta só não é estimado em sua própria pátria, entre seus parentes e em sua família. Jesus não pôde fazer milagres em Nazaré. Apenas curou alguns doentes, pondo as mãos sobre eles. E ficou admirado com a falta de fé deles" (Mc 6,1-6).</p><h4 class="section-title mt-4">Reflexão</h4><p>Os conterrâneos de Jesus se escandalizam, não querem admitir que alguém como eles possa ter sabedoria superior à dos profissionais e realize ações que indiquem a presença de Deus. Para eles, o empecilho para a fé é a encarnação: Deus feito homem, situado num contexto social.</p><h4 class="section-title mt-4">Conhecendo a Regra de São Bento</h4><p>Ponha-se à porta do mosteiro um ancião prudente que saiba receber e transmitir recado e, cuja maturidade, não lhe permita vaguear. O porteiro deve ficar alojado perto da porta, a fim de que, os que chegam encontrem-no sempre presente para os atender.</p><p class="mt-4">Logo que alguém bater ou um pobre chamar, ele responderá: 'Deo gratias' ou 'Benedicite'. Com toda a mansidão oriunda do temor a Deus, responda com presteza e fervorosa caridade (cap.66, do porteiro dos mosteiros).</p></div>`
            },
            {
                day: "Dia 9",
                title: "Nono Dia - A missão dos discípulos",
                content: `<div class="day-specific-content"><h4 class="section-title">Palavra de Deus</h4><p>"Jesus começou a percorrer as redondezas ensinando nos povoados. Chamou os doze discípulos, começou a enviá-los dois a dois e dava-lhes poder sobre os espíritos maus. Jesus recomendou que não levassem nada pelo caminho, além de um bastão; nem pão, nem sacola, nem dinheiro na cintura. Mandou que andassem de sandálias e que não levassem duas túnicas. E, Jesus disse ainda: 'Quando vocês entrarem numa casa, fiquem aí até partirem. Se vocês forem mal recebidos num lugar e o povo não escutar vocês, quando saírem, sacudam a poeira dos pés como protesto contra eles'. Então, os discípulos partiram e pregaram para que as pessoas se convertessem. Expulsavam muitos demônios e curavam muitos doentes, ungindo-os com óleo" (Mc 6,6b-13).</p><h4 class="section-title mt-4">Reflexão</h4><p>Os discípulos são enviados para continuar a missão de Jesus: pedir mudança radical da orientação de vida (conversão), desalienar as pessoas (libertar dos demônios), restaurar a vida humana (curas).</p><p class="mt-4">Os discípulos devem estar livres, ter bom senso e estar conscientes de que a missão vai provocar choque com os que não querem transformações.</p><h4 class="section-title mt-4">Conhecendo a Regra de São Bento</h4><p>Assim, como há um zelo mau de amargura que separa de Deus e conduz ao inferno, também existe o zelo bom que afasta dos vícios, conduz a Deus e à vida eterna.</p><p class="mt-4">Exerçam, portanto, os monges esse zelo com amor fraterno, isto é, antecipem-se uns aos outros em honra e atenções.</p><p class="mt-4">Tolerem com grande paciência as enfermidades de outrem, quer corporais, quer espirituais. Obedeçam uns aos outros à porfia. Nenhum procure aquilo que lhe parece vantajoso para si, mas sim, o que for útil para os outros.</p><p class="mt-4">Ponham em ação, castamente, a caridade fraterna. Temam a Deus. Amem seu abade com afeição humilde e sincera.</p><p class="mt-4">Nada, absolutamente nada, anteponham a Cristo, o qual se digne levar-nos, todos juntos, à vida eterna (cap.72, do bom zelo que os monges devem ter).</p></div>`
            }
        ]
    },

    sao_bento_transito: {
        saintName: "São Bento",
        novenaTitle: "Novena a São Bento (Trânsito)",
        description: "Novena em honra a São Bento, patriarca dos monges do Ocidente. Celebração do Trânsito de São Bento (21 de março).",
        image: "/images/sao_bento.png",
        initialPrayer: `<div class="prayer-block"><h4 class="section-title">Oração da Medalha de São Bento</h4><p>A Cruz Sagrada seja a minha luz, não seja o dragão o meu guia. Retira-te, satanás! Nunca me aconselhes coisas vãs. É mau o que tu me ofereces, bebe tu mesmo o teu veneno!</p><h4 class="section-title mt-4">Oração para Obter Qualquer Graça</h4><p>Ó glorioso patriarca São Bento, que vos mostrastes sempre compassivo com os necessitados, fazei que também nós, recorrendo à vossa poderosa intercessão, obtenhamos auxílio em todas as nossas aflições.</p><p class="mt-4">Que nas famílias reine a paz e a tranquilidade, afastem-se todas as desgraças, tanto corporais como espirituais, especialmente o pecado.</p><p class="mt-4">Alcançai do Senhor a graça que vos suplicamos, obtendo-nos finalmente para que, ao terminar nossa vida nesse vale de lágrimas, possamos louvar a Deus convosco no Paraíso.</p><p class="mt-4 font-semibold">Rogai por nós, glorioso patriarca São Bento, para que sejamos dignos das promessas de Cristo.</p></div>`,
        finalPrayer: `<div class="prayer-block"><h4 class="section-title">Oração Conclusiva</h4><p>Ó Deus, que fizestes o abade São Bento preclaro mestre na escola do Vosso serviço. Concedei que, nada preferindo ao Vosso amor, corramos de coração dilatado no caminho dos Vossos mandamentos.</p><p class="mt-4">Por Nosso Senhor Jesus Cristo, na unidade do Espírito Santo. Amém.</p></div>`,
        days: [
            {
                day: "Dia 1",
                title: "Primeiro Dia - Seguir Jesus é comprometer-se",
                content: `<div class="day-specific-content"><h4 class="section-title">Palavra de Deus</h4><p>"Ao passar pela beira do mar da Galileia, Jesus viu Simão e seu irmão André; estavam jogando a rede ao mar, pois eram pescadores. Jesus disse para eles: 'Sigam-Me e Eu farei vocês se tornarem pescadores de homens'. Eles imediatamente deixaram as redes e seguiram Jesus" (Mc 1,16-18).</p><h4 class="section-title mt-4">Reflexão</h4><p>O chamado dos primeiros discípulos é um convite aberto a todos os que ouvem as palavras de Jesus. Simão e André deixam a profissão, pois, seguir Jesus implica deixar as seguranças que possam impedir o compromisso com uma ação transformadora.</p><h4 class="section-title mt-4">Conhecendo a Regra de São Bento</h4><p>O primeiro grau da humildade é a pronta obediência, peculiar àqueles que nada amam acima de Cristo (…).</p><p class="mt-4">Essa mesma obediência somente será digna da aceitação de Deus e suave para os homens, se a ordem for executada sem delongas, sem hesitações, sem morosidade, sem murmuração ou qualquer palavra de resistência (…).</p><p class="mt-4">Se o discípulo obedecer de má vontade e se murmurar, ainda que não o faça com a boca, mas só no coração, ainda que cumpra a ordem recebida, sua obra não será agradável a Deus, que vê o íntimo dos corações; e longe de obter alguma graça por tal ação, incorrerá na pena dos murmuradores se não fizer reparação e não se corrigir (cap.5, Obediência).</p></div>`
            },
            {
                day: "Dia 2",
                title: "Segundo Dia - Jesus rejeita a popularidade fácil",
                content: `<div class="day-specific-content"><h4 class="section-title">Palavra de Deus</h4><p>"De madrugada, quando ainda estava escuro, Jesus se levantou e foi rezar num lugar deserto. Simão e seus companheiros foram atrás de Jesus e, quando O encontraram, disseram: 'Todos estão Te procurando'. Jesus respondeu: 'Vamos para outros lugares, às aldeias da redondeza. Devo pregar também ali, pois foi para isso que Eu vim'. E Jesus andava por toda a Galileia, pregando nas sinagogas e expulsando os demônios" (Mc 1,35-39).</p><h4 class="section-title mt-4">Reflexão</h4><p>O deserto é o ponto de partida para a missão.</p><p class="mt-4">Jesus encontra o Pai, que O envia para salvar os homens, mas encontra também a tentação: Pedro sugere que Jesus aproveite a popularidade conseguida num dia. É o primeiro diálogo com os discípulos e já se nota tensão.</p><h4 class="section-title mt-4">Conhecendo a Regra de São Bento</h4><p>Quando temos alguma coisa a solicitar aos homens poderosos, nós nos aproximamos com humildade e respeito. Com quanto maior razão devemos apresentar nossas súplicas com toda humildade e pureza de devoção ao Senhor Deus do Universo!</p><p class="mt-4">Saibamos que não é pela multiplicidade de palavras que seremos atendidos, mas sim pela pureza do coração e a compunção das lágrimas. A prece deve ser, portanto, curta e pura, salvo se, porventura, venha a prolongar-se por afeto inspirado pela graça divina. Mas, em comunidade, que a oração seja curta e, dado o sinal pelo superior, levantem-se todos ao mesmo tempo (cap.20, reverência na oração).</p></div>`
            },
            {
                day: "Dia 3",
                title: "Terceiro Dia - A cura do leproso",
                content: `<div class="day-specific-content"><h4 class="section-title">Palavra de Deus</h4><p>"Um leproso chegou perto de Jesus e pediu de joelhos: 'Se queres, Tu tens o poder de me purificar'. Jesus ficou cheio de ira, estendeu a mão, tocou nele e disse: 'Eu quero, fique purificado'. No mesmo instante, a lepra desapareceu e o homem ficou purificado. Então, Jesus o mandou logo embora, ameaçando-o severamente: 'Não conte nada para ninguém! Vá pedir ao sacerdote para examinar você e, depois, ofereça pela sua purificação o sacrifício que Moisés ordenou, para que seja um testemunho para eles'. Mas, o homem foi embora e começou a pregar muito e a espalhar a notícia. Por isso, Jesus não podia mais entrar publicamente numa cidade; Ele ficava fora, em lugares desertos. E de toda parte as pessoas iam procurá-Lo" (Mc 1,40-45).</p><h4 class="section-title mt-4">Reflexão</h4><p>O leproso era marginalizado, devendo viver fora da cidade, longe do convívio social, por motivos higiênicos e religiosos (Lv 13,45-46). Jesus fica irado contra uma sociedade que produz a marginalização. Por isso, o homem curado deve apresentar-se para dar testemunho contra um sistema que não cura, mas só declara quem pode ou não participar da vida social. O marginalizado agora se torna testemunho vivo que anuncia Jesus, Aquele que purifica. E Jesus está fora da cidade, lugar que se torna o centro de nova relação social: o lugar dos marginalizados é o lugar onde se pode encontrar o Senhor.</p><h4 class="section-title mt-4">Conhecendo a Regra de São Bento</h4><p>Durma cada um em uma cama.</p><p class="mt-4">Tenham seus leitos de acordo com a profissão do monge e segundo as ordens do abade. Se for possível, durmam todos no mesmo lugar; porém, se o grande número não o permitir, durmam dez ou vinte juntamente, tendo com eles monges mais velhos para vigiá-los.</p><p class="mt-4">Uma lâmpada iluminará o dormitório, sem interrupção, até o amanhecer.</p><p class="mt-4">Os monges dormirão vestidos, cingidos com os cintos ou cordões, mas não terão faca a seu lado, para que não se firam enquanto dormem e sempre estejam prontos e, assim, dado o sinal, levantem-se sem demora, apressem-se mutuamente e antecipem-se no oficio divino, mas com toda a gravidade e modéstia (cap.22, o sono dos monges).</p></div>`
            },
            {
                day: "Dia 4",
                title: "Quarto Dia - Jesus rejeita a hipocrisia social",
                content: `<div class="day-specific-content"><h4 class="section-title">Palavra de Deus</h4><p>"Jesus saiu de novo para a beira do mar. Toda a multidão ia ao Seu encontro e Ele a ensinava. Enquanto ia caminhando, Jesus viu Levi, o filho de Alfeu, sentado na coletoria de impostos. Então, disse-lhe: 'Siga-Me'. Levi se levantou e O seguiu. Mais tarde, Jesus estava comendo na casa de Levi.</p><p class="mt-4">Havia vários cobradores de impostos e pecadores na mesa com Jesus e Seus discípulos; com efeito, eram muitos os que O seguiam. Alguns doutores da lei, que eram fariseus, viram que Jesus estava comendo com pecadores e cobradores de impostos. Então, eles perguntaram aos discípulos: 'Por que Jesus come e bebe junto com os cobradores de impostos e pecadores?'. Jesus ouviu e respondeu: "As pessoas que têm saúde não precisam de médico, mas só as que estão doentes. Eu não vim para chamar os justos e, sim, os pecadores" (Mc 2,13-17).</p><h4 class="section-title mt-4">Reflexão</h4><p>Os cobradores de impostos eram desprezados e marginalizados, porque colaboravam com a dominação romana, cobrando imposto e, em geral, aproveitando para roubar. Jesus rompe os esquemas sociais que dividem os homens em bons e maus, puros e impuros.</p><p class="mt-4">Chamando um cobrador de impostos para ser Seu discípulo, e comendo com os pecadores, Ele mostra que Sua missão é reunir e salvar aqueles que a sociedade hipócrita rejeita como maus.</p><h4 class="section-title mt-4">Conhecendo a Regra de São Bento</h4><p>Zele-se, com grande cuidado, para que esse vício da propriedade seja arrancado pela raiz no mosteiro. Ninguém ouse dar ou receber coisa alguma sem a autorização do abade, nem possuir algo próprio, absolutamente nada, nem livro, nem tabuinha (de escrever), nem estilete.</p><p class="mt-4">Em uma palavra: coisa nenhuma, já que não lhes é lícito ter a seu arbítrio sequer o próprio corpo nem a própria vontade. Mas devem esperar do pai do mosteiro tudo de que necessitam.</p><p class="mt-4">Não seja lícito a ninguém possuir o que não lhe seja dado pelo abade ou por ele permitido ter. Seja tudo comum a todos, como está escrito e, que ninguém tenha a ousadia de tornar seu qualquer objeto, nem mesmo por palavras (cap.33, se os monges devem ter alguma coisa de próprio).</p></div>`
            },
            {
                day: "Dia 5",
                title: "Quinto Dia - O sábado foi feito para o homem",
                content: `<div class="day-specific-content"><h4 class="section-title">Palavra de Deus</h4><p>"Num dia de sábado, Jesus estava passando por uns campos de trigo. Os discípulos iam abrindo caminho e arrancando as espigas. Então, os fariseus perguntaram a Jesus: 'Vê: por que os teus discípulos estão fazendo o que não é permitido em dia de sábado?'. Jesus perguntou aos fariseus: 'Vocês nunca leram o que Davi e seus companheiros fizeram quando estavam passando necessidade e sentindo fome? Davi entrou na casa de Deus, no tempo em que Abiatar era Sumo Sacerdote, comeu dos pães oferecidos a Deus e os deu também para os seus companheiros. No entanto, só os sacerdotes podem comer desses pães'".</p><p class="mt-4">Jesus acrescentou: "O sábado foi feito para servir ao homem e não o homem para servir ao sábado. Portanto, o Filho do Homem é Senhor até mesmo no Sábado" (Mc 2,23-28).</p><h4 class="section-title mt-4">Reflexão</h4><p>O centro da obra de Deus é o homem e cultuar Deus é fazer o bem a ele. Não se trata de estreitar ou alargar a lei do sábado, mas de dar sentido totalmente novo a todas as estruturas e leis que regem as relações entre os homens, porque só é bom aquilo que faz o homem crescer e ter mais vida.</p><p class="mt-4">Toda lei que oprime o homem é lei contra a própria vontade de Deus e deve ser abolida.</p><h4 class="section-title mt-4">Conhecendo a Regra de São Bento</h4><p>Antes de tudo e acima de tudo, deve-se cuidar dos enfermos, que deverão ser servidos como se fossem o Cristo em pessoa (…).</p><p class="mt-4">De seu lado, os doentes considerem que são servidos em honra de Deus e não entristeçam, com exigências supérfluas, os irmãos que os servem. Contudo, os doentes devem ser suportados com paciência, porque, por meio deles, adquire-se maior recompensa.</p><p class="mt-4">O abade vigie, portanto, com todo o cuidado, para que não sofram nenhuma negligência (cap.36, dos irmãos enfermos).</p></div>`
            },
            {
                day: "Dia 6",
                title: "Sexto Dia - A verdadeira família de Jesus",
                content: `<div class="day-specific-content"><h4 class="section-title">Palavra de Deus</h4><p>"Nisso chegaram a mãe e os irmãos de Jesus; ficaram do lado de fora e mandaram chamá-Lo. Havia uma multidão sentada ao redor de Jesus. Então, lhe disseram: 'Olha, tua mãe e teus irmãos estão aí fora e te procuram'. Jesus perguntou: 'Quem é Minha mãe e Meus irmãos?" Então, Jesus olhou para as pessoas que estavam sentadas ao seu redor e disse: 'Aqui estão Minha mãe e Meus irmãos. Quem faz a vontade de Deus, esse é Meu irmão, minha irmã e Minha mãe'" (Mc 3,31-35).</p><h4 class="section-title mt-4">Reflexão</h4><p>Enquanto a família, segundo a carne, está "fora", a família segundo o compromisso da fé está "dentro", ao redor de Jesus.</p><p class="mt-4">Sua verdadeira família é formada por aqueles que realizam, na própria vida, a vontade de Deus, que consiste em continuar a missão de Jesus.</p><h4 class="section-title mt-4">Conhecendo a Regra de São Bento</h4><p>Se bem que o homem, já por natureza, seja levado à compaixão para com essas duas idades, a velhice e a infância, também a autoridade da regra deve intervir no que lhes diz respeito.</p><p class="mt-4">Tenha-se, pois, sempre em vista, sua fraqueza e não se mantenha, em relação a eles, o rigor da regra no que diz respeito à alimentação;</p><p class="mt-4">Mas se use, em seu favor, condescendência misericordiosa, permitindo que antecipem as horas regulares das refeições (cap.37, dos anciãos e das crianças).</p></div>`
            },
            {
                day: "Dia 7",
                title: "Sétimo Dia - O mistério da missão de Jesus",
                content: `<div class="day-specific-content"><h4 class="section-title">Palavra de Deus</h4><p>"Quando se acharam a sós, os que O cercavam e os doze, perguntaram a Jesus o que significavam as parábolas. Ele disse para eles: 'Para vocês, foi dado o mistério do Reino de Deus; para os que estão fora, tudo acontece em parábolas, para que olhem, mas não vejam; escutem, mas não compreendam; para que não se convertam e não sejam perdoados'" (Mc 4,10-12).</p><h4 class="section-title mt-4">Reflexão</h4><p>As parábolas são histórias que ajudam a ler e compreender toda a missão de Jesus. Mas é preciso "estar dentro", isto é, seguir Jesus para perceber que o Reino de Deus está se aproximando por meio de Sua ação. Os que não seguem Jesus ficam "por fora" e nada podem compreender.</p><h4 class="section-title mt-4">Conhecendo a Regra de São Bento</h4><p>A vida de um monge deve ser, em todo tempo, observância da Quaresma. Como, todavia, essa perfeição apenas se encontra em pequeno número, exortamos os irmãos a que conservem vida muito pura durante os dias da Quaresma e apaguem, nesses santos dias, todas as negligências dos outros tempos, o que faremos dignamente, abstendo-nos à oração com lágrimas, à leitura, à compunção do coração e à abstinência.</p><p class="mt-4">Acrescentemos, pois, nestes dias, alguma coisa ao nosso encargo habitual: orações particulares, alguma privação no comer e no beber, de forma que cada um, por sua livre vontade, oferece a Deus, na alegria do Espírito Santo, alguma coisa mais do que lhe seja ordenado (cap.49, da observância da Quaresma).</p></div>`
            },
            {
                day: "Dia 8",
                title: "Oitavo Dia - O escândalo da encarnação",
                content: `<div class="day-specific-content"><h4 class="section-title">Palavra de Deus</h4><p>"Jesus foi para Nazaré, Sua terra, e Seus discípulos O acompanharam. Quando chegou o sábado, Jesus começou a ensinar na sinagoga. Muitos que O escutavam ficavam admirados e diziam: 'De onde vem tudo isso? Onde foi que arranjou tanta sabedoria? E esses milagres que são realizados pelas mãos d'Ele? Esse homem não é o carpinteiro, filho de Maria e irmão de Tiago, de Joset, de Judas e de Simão? E suas irmãs não moram aqui conosco?' E ficaram escandalizados por causa de Jesus. Então, Cristo dizia para eles que um profeta só não é estimado em sua própria pátria, entre seus parentes e em sua família. Jesus não pôde fazer milagres em Nazaré. Apenas curou alguns doentes, pondo as mãos sobre eles. E ficou admirado com a falta de fé deles" (Mc 6,1-6).</p><h4 class="section-title mt-4">Reflexão</h4><p>Os conterrâneos de Jesus se escandalizam, não querem admitir que alguém como eles possa ter sabedoria superior à dos profissionais e realize ações que indiquem a presença de Deus. Para eles, o empecilho para a fé é a encarnação: Deus feito homem, situado num contexto social.</p><h4 class="section-title mt-4">Conhecendo a Regra de São Bento</h4><p>Ponha-se à porta do mosteiro um ancião prudente que saiba receber e transmitir recado e, cuja maturidade, não lhe permita vaguear. O porteiro deve ficar alojado perto da porta, a fim de que, os que chegam encontrem-no sempre presente para os atender.</p><p class="mt-4">Logo que alguém bater ou um pobre chamar, ele responderá: 'Deo gratias' ou 'Benedicite'. Com toda a mansidão oriunda do temor a Deus, responda com presteza e fervorosa caridade (cap.66, do porteiro dos mosteiros).</p></div>`
            },
            {
                day: "Dia 9",
                title: "Nono Dia - A missão dos discípulos",
                content: `<div class="day-specific-content"><h4 class="section-title">Palavra de Deus</h4><p>"Jesus começou a percorrer as redondezas ensinando nos povoados. Chamou os doze discípulos, começou a enviá-los dois a dois e dava-lhes poder sobre os espíritos maus. Jesus recomendou que não levassem nada pelo caminho, além de um bastão; nem pão, nem sacola, nem dinheiro na cintura. Mandou que andassem de sandálias e que não levassem duas túnicas. E, Jesus disse ainda: 'Quando vocês entrarem numa casa, fiquem aí até partirem. Se vocês forem mal recebidos num lugar e o povo não escutar vocês, quando saírem, sacudam a poeira dos pés como protesto contra eles'. Então, os discípulos partiram e pregaram para que as pessoas se convertessem. Expulsavam muitos demônios e curavam muitos doentes, ungindo-os com óleo" (Mc 6,6b-13).</p><h4 class="section-title mt-4">Reflexão</h4><p>Os discípulos são enviados para continuar a missão de Jesus: pedir mudança radical da orientação de vida (conversão), desalienar as pessoas (libertar dos demônios), restaurar a vida humana (curas).</p><p class="mt-4">Os discípulos devem estar livres, ter bom senso e estar conscientes de que a missão vai provocar choque com os que não querem transformações.</p><h4 class="section-title mt-4">Conhecendo a Regra de São Bento</h4><p>Assim, como há um zelo mau de amargura que separa de Deus e conduz ao inferno, também existe o zelo bom que afasta dos vícios, conduz a Deus e à vida eterna.</p><p class="mt-4">Exerçam, portanto, os monges esse zelo com amor fraterno, isto é, antecipem-se uns aos outros em honra e atenções.</p><p class="mt-4">Tolerem com grande paciência as enfermidades de outrem, quer corporais, quer espirituais. Obedeçam uns aos outros à porfia. Nenhum procure aquilo que lhe parece vantajoso para si, mas sim, o que for útil para os outros.</p><p class="mt-4">Ponham em ação, castamente, a caridade fraterna. Temam a Deus. Amem seu abade com afeição humilde e sincera.</p><p class="mt-4">Nada, absolutamente nada, anteponham a Cristo, o qual se digne levar-nos, todos juntos, à vida eterna (cap.72, do bom zelo que os monges devem ter).</p></div>`
            }
        ]
    },

    anunciacao: {
        saintName: "Anunciação do Senhor",
        novenaTitle: "Novena da Anunciação do Senhor",
        description: "Novena em preparação à Solenidade da Anunciação do Senhor (25 de março).",
        image: "/images/anunciacao.png",
        initialPrayer: `<div class="prayer-block"><h4 class="section-title">Oração Inicial para Todos os Dias</h4><p>Pelo sinal da Santa Cruz ✞ livrai-nos Deus de nossos inimigos.</p><p class="mt-4">✞ Em nome do Pai, ✞ do Filho e do ✞ Espírito Santo. Amém.</p><h4 class="section-title mt-6">Oração do Ângelus</h4><p>O Anjo do Senhor anunciou a Maria.</p><p class="italic">E ela concebeu do Espírito Santo.</p><p class="mt-2 font-semibold">Ave Maria…</p><p class="mt-4">Eis aqui a serva do Senhor.</p><p class="italic">Faça-se em mim segundo a vossa palavra.</p><p class="mt-2 font-semibold">Ave Maria…</p><p class="mt-4">E o Verbo se fez carne.</p><p class="italic">E habitou entre nós.</p><p class="mt-2 font-semibold">Ave Maria…</p><p class="mt-4">Rogai por nós, Santa Mãe de Deus.</p><p class="italic">Para que sejamos dignos das promessas de Cristo.</p><h4 class="section-title mt-6">Oremos</h4><p>Infundi Senhor a vossa graça em nossos corações, para que, conhecendo, pela mensagem do Anjo, a encarnação do Cristo, vosso Filho, cheguemos, por sua paixão e cruz, à glória da ressurreição pela intercessão da Virgem Maria. Pelo mesmo Cristo, Senhor Nosso. Amém.</p><p class="mt-4">Bendito seja, ó Maria, o tão esperado momento no qual se iniciou a salvação humana com a Encarnação do Filho de Deus. Amém.</p></div>`,
        finalPrayer: `<div class="prayer-block"><h4 class="section-title">Oração Final para Todos os Dias</h4><p>Eis que desejando que o Filho de Deus que quis nascer em Vós, nasça também em meu coração e conceda-nos o perdão de nossos pecados, prostramo-nos aos vossos pés e vos imploro, com todo o fervor da alma, que vos digneis alcançar-nos, do vosso Filho, a graça que tanto necessitamos…<span class="italic">(colocar a graça)</span></p><p class="mt-4">Queremos ser gestados no ventre de Nossa Senhora, para assim, sermos homens novos, santos, como Jesus.</p><p class="mt-4 font-semibold">"Benditas sejam a Santa Gravidez e a Imaculada Conceição da bem-aventurada sempre virgem Maria, Mãe de Deus e nossa Mãe. Amém"</p></div>`,
        days: [
            {
                day: "Dia 1",
                title: "Primeiro Dia",
                content: `<div class="day-specific-content"><p>"Ó Maria, virgem Imaculada, Porta do Céu e causa da nossa alegria, respondendo com generosidade ao anúncio do Arcanjo São Gabriel, vós pudestes dar curso ao plano de Deus para nossa salvação.</p><p class="mt-4 font-semibold">Ave Maria...</p><p class="mt-4 italic">Nossa Senhora da Anunciação, rogai por nós</p></div>`
            },
            {
                day: "Dia 2",
                title: "Segundo Dia",
                content: `<div class="day-specific-content"><p>Vós fostes, pela Providência Santíssima desde toda a eternidade, constituída vaso de eleição e moradia digna do Verbo Encarnado. Pelo vosso "sim" e fidelidade ao Pai celeste, o Espírito Santo teceu em vossas entranhas Jesus, nosso Senhor e Salvador.</p><p class="mt-4 font-semibold">Ave Maria...</p><p class="mt-4 italic">Nossa Senhora da Anunciação, rogai por nós</p></div>`
            },
            {
                day: "Dia 3",
                title: "Terceiro Dia",
                content: `<div class="day-specific-content"><p>Ouvi minha súplica, ó Virgem Santíssima, Nossa Senhora de Caná e de Pentecostes, Vós que, perante o trono da Graça, sois a "Onipotência Suplicante", enquanto meditamos, com reverência e filial afeto, todos os momentos de dor e de alegria, de desolação e de providência, que vos acompanharam em vossa bendita e singular gestação, na qual trouxestes em vosso ventre por nove meses o Filho do Deus Altíssimo.</p><p class="mt-4 font-semibold">Ave Maria...</p><p class="mt-4 italic">Nossa Senhora da Anunciação, rogai por nós</p></div>`
            },
            {
                day: "Dia 4",
                title: "Quarto Dia",
                content: `<div class="day-specific-content"><p>Mãe da obediência e Medianeira de todas as graças, Vós esperastes o tempo necessário para trazer ao mundo o Rei do universo. Eis que, com fé e fidelidade, aguardamos a graça que vos suplicamos, embora pareça muito difícil de acontecer, impossível ou até demorada para chegar.</p><p class="mt-4 font-semibold">Ave Maria...</p><p class="mt-4 italic">Nossa Senhora da Anunciação, rogai por nós</p></div>`
            },
            {
                day: "Dia 5",
                title: "Quinto Dia",
                content: `<div class="day-specific-content"><p>Ajudai-nos, pois, ó Mãe da ternura, virgem do silêncio e da escuta, a sofrer em santa espera o tempo e as demoras de Deus, com sobriedade de vida, alegria e perseverança. Fazei que jamais desanimemos ou sejamos vencidos pelo inimigo.</p><p class="mt-4 font-semibold">Ave Maria...</p><p class="mt-4 italic">Nossa Senhora da Anunciação, rogai por nós.</p></div>`
            },
            {
                day: "Dia 6",
                title: "Sexto Dia",
                content: `<div class="day-specific-content"><p>Oh! Maria, que fostes escolhida por Deus entre todas as mulheres para serdes a Mãe do Redentor: Alcançai-nos a graça de pertencer ao número dos escolhidos, que hão de estar no céu tendo os frutos da Redenção.</p><p class="mt-4 font-semibold">Ave Maria...</p><p class="mt-4 italic">Nossa Senhora da Anunciação, rogai por nós</p></div>`
            },
            {
                day: "Dia 7",
                title: "Sétimo Dia",
                content: `<div class="day-specific-content"><p>Oh! Maria, que sendo escolhida para Mãe de Deus, preferistes a esta excelsa dignidade a vossa virgindade, e só quando o Anjo vos assegurou com que ser Mãe não deixaríeis de ser Virgem anuístes à sua proposta: Concedei-nos um amor tão grande à pureza, que por nenhum bem deste mundo consintamos em perdê-la.</p><p class="mt-4 font-semibold">Ave Maria...</p><p class="mt-4 italic">Nossa Senhora da Anunciação, rogai por nós</p></div>`
            },
            {
                day: "Dia 8",
                title: "Oitavo Dia",
                content: `<div class="day-specific-content"><p>E se não bastassem os pecados, Ó Senhora dos Remédios, do Bom parto e do Perpétuo Socorro, ainda vos pedimos, em virtude dos vossos cuidados e suplícios para com Jesus em Vosso ventre, por todas as mães grávidas, para que tenham uma boa hora, e também por todas aquelas que passam por uma gestação delicada, pelas que são atormentadas pela ideia de abortar seus filhos e pelas que não podem ou não conseguem tê-los.</p><p class="mt-4 font-semibold">Ave Maria...</p><p class="mt-4 italic">Nossa Senhora da Anunciação, rogai por nós</p></div>`
            },
            {
                day: "Dia 9",
                title: "Nono Dia",
                content: `<div class="day-specific-content"><p>Ó Senhora do Carmo, das Dores e da Defesa, mão e colo que embalaram Jesus, consolai todas as mães que rezam pela volta de seus filhos ao lar e aos bons costumes. Recompensai as mães que geram filhos para Deus, instruindo-os na fé e entregando-os a vida sacerdotal e religiosa.</p><p class="mt-4 font-semibold">Ave Maria...</p><p class="mt-4 italic">Nossa Senhora da Anunciação, rogai por nós</p></div>`
            }
        ]
    }
};
