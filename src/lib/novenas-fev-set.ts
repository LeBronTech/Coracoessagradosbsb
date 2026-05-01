// Novenas de Fevereiro a Setembro - Apenas estrutura (sem conteúdo dos dias)
type Novena = {
    saintName: string;
    novenaTitle: string;
    description: string;
    initialPrayer: string;
    finalPrayer: string;
    image?: string;
    imageObjectPosition?: string;
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
                content: `<div class="day-specific-content"><h4 class="section-title">Salmo 51, 3-4</h4><p class="italic">Tende piedade, ó meu Deus, misericórdia! Na imensidão de vosso amor, purificai-me! Lavai-me todo inteiro do pecado, e apagai completamente a minha culpa.</p><p class="mt-4">Oh Santíssima Face de Jesus, olhai com ternura sobre nós, pecadores. Sois um Deus Misericordioso, cheio de amor e compaixão. Mantende-nos puros de coração, para que sempre possamos Vos contemplar.</p><p class="mt-4">Maria, nossa Mãe, intercedei por nós; são José, rogai por nós.</p><p class="mt-4 font-semibold">Pelos méritos de vosso precioso Sangue e vossa Santa Face, oh Jesus, concedei-nos a graça (mencionar a graça pedida)… Perdão e misericórdia.</p><h4 class="section-title mt-6">Oração ao nosso Pai Todo-Poderoso</h4><p>Pai Altíssimo, vinde em nossos corações e preenchei-nos com vosso amor, para que, renunciando a todos os maus desejos, nós abracemos a Vós, nosso único bem. Dizei às nossas almas: "Eu sou vossa salvação"; dizei para que possamos ouvir. Nossos corações estão diante de Vós; abri nossos ouvidos; fazei que sigamos pressurosos vossa voz. Suplicamos que não escondais vossa Face de nós, oh Senhor! Abri nossos corações para que possais entrar. Reparai as mansões arruinadas, para que possais habitar em nós. Ouvi-nos, ó Pai Celeste, por vosso Filho Único, nosso Senhor Jesus Cristo, que vive e reina convosco e o Espírito Santo, Deus Único, agora e para sempre. Amém. <span class="italic">(Santo Agostinho)</span></p><p class="mt-6 font-bold text-white text-lg tracking-wide uppercase">Pai Nosso, 3 Ave-Marias, Glória</p><p class="mt-2 font-semibold">Oh Face Ensanguentada, oh Face Divina, a Vós toda adoração! (3 vezes)</p><p class="mt-2 italic">Recitar o Ato de Consagração</p></div>`
            },
            {
                day: "Dia 2",
                title: "Segundo Dia - Arrependimento",
                content: `<div class="day-specific-content"><h4 class="section-title">Salmo 51, 5-6a</h4><p class="italic">Eu reconheço toda a minha iniquidade, o meu pecado está sempre à minha frente. Foi contra vós, só contra vós, que eu pequei, e pratiquei o que é mau aos vossos olhos!</p><p class="mt-4">Santíssima Face de Jesus, nós estamos verdadeiramente arrependidos de Vos ter ferido tanto, fazendo constantemente o que é errado, e por todas as boas obras que falhamos em fazer. Imaculado Coração de Maria, São José, intercedei por nós, ajudai-nos a consolar a Sacratíssima Face de Jesus. Rogai para que possamos partilhar do tremendo amor que tendes um pelo outro, e pela Santíssima Trindade. Amém.</p><p class="mt-4 font-semibold">Pelos méritos de vosso precioso Sangue e vossa Santa Face, oh Jesus, concedei-nos a graça (mencionar a graça pedida)… Perdão e misericórdia.</p><h4 class="section-title mt-6">Oração ao Espírito Santo</h4><p>Vinde, Espírito Santo santificador, todo-poderoso Deus de amor, que cumulastes a Virgem Maria de graça, que maravilhosamente transformastes os corações dos apóstolos, que dotastes todos os vossos mártires com um milagroso heroísmo, vinde e santificai-nos, iluminai nossas mentes, fortalecei nossa vontade, purificai nossas consciências, retificai nossos julgamentos, incendiai nossos corações e preservai-nos da desgraça de resistir a vossas inspirações.</p><p class="mt-4">Consagramos a Vós nosso entendimento, nosso coração e nossa vontade, todo nosso ser no tempo e na eternidade. Que nosso entendimento seja sempre submisso às vossas celestes inspirações e aos ensinamentos de Vossa Santa Igreja Católica, da qual Vós sois o guia infalível; que nosso coração seja sempre inflamado do amor de Deus e ao próximo; que nossa vontade sempre se conforme à divina vontade, e toda nossa vida seja uma fiel imitação da vida e virtudes de nosso Senhor e Salvador, Jesus Cristo, a quem, com o Pai e convosco, seja a honra e a glória para sempre. Amém.</p><p class="mt-6 font-bold text-white text-lg tracking-wide uppercase">Pai Nosso, 3 Ave-Marias, Glória</p><p class="mt-2 font-semibold">Oh Face Ensanguentada, oh Face Divina, a Vós toda adoração! (3 vezes)</p><p class="mt-2 italic">Recitar o Ato de Consagração</p></div>`
            },
            {
                day: "Dia 3",
                title: "Terceiro Dia - Misericórdia Divina",
                content: `<div class="day-specific-content"><h4 class="section-title">Salmo 51, 6b-7</h4><p class="italic">Mostrais assim quanto sois justo na sentença, e quanto é reto o julgamento que fazeis. Vede, Senhor, que eu nasci na iniquidade e pecador já minha mãe me concebeu.</p><h4 class="section-title mt-6">Oração do Papa Pio IX</h4><p>Oh, meu Jesus, lançai sobre nós um olhar de misericórdia! Volvei Vossa Face para cada um de nós, como fizeste à Verônica, não para que A vejamos com os olhos corporais, pois não o merecemos. Mas volvei-A para os nossos corações, a fim de que, amparados sempre em Vós, possamos haurir nesta fonte inesgotável as forças necessárias para nos entregarmos ao combate que temos que sustentar. Amém.</p><p class="mt-4">Maria, nossa Mãe, intercedei por nós; são José, rogai por nós.</p><p class="mt-4 font-semibold">Pelos méritos de vosso precioso Sangue e vossa Santa Face, oh Jesus, concedei-nos a graça (mencionar a graça pedida)… Perdão e misericórdia.</p><h4 class="section-title mt-6">Oração de São Francisco</h4><p>Oh glorioso Deus altíssimo, iluminai as trevas do meu coração; concedei-me uma fé verdadeira, uma esperança firme, um amor perfeito e profunda humildade, para que com sabedoria, coragem e conhecimento, oh Senhor, eu possa fazer o que é verdadeiramente vossa santa vontade. Amém.</p><h4 class="section-title mt-6">Aos Anjos e Santos</h4><p>Nós Vos saudamos pela Sagrada Face e Sagrado Coração de Jesus, oh todos os Santos e Anjos de Deus. Nós nos alegramos em vossa glória e damos graças a nosso Senhor por todos os benefícios que Ele derramou sobre vós: nós O louvamos e glorificamos e vos oferecemos, para aumento de vossa alegria e glória, a Santíssima Face e o terno Coração de Jesus. Rogai para que sejamos formados segundo o Coração de Deus. Amém.</p><p class="mt-6 font-bold text-white text-lg tracking-wide uppercase">Pai Nosso, 3 Ave-Marias, Glória</p><p class="mt-2 font-semibold">Oh Face Ensanguentada, oh Face Divina, a Vós toda adoração! (3 vezes)</p><p class="mt-2 italic">Recitar o Ato de Consagração</p></div>`
            },
            {
                day: "Dia 4",
                title: "Quarto Dia - Humildade e Ternura",
                content: `<div class="day-specific-content"><h4 class="section-title">Salmo 51, 8-9</h4><p class="italic">Mas vós amais os corações que são sinceros, na intimidade me ensinais sabedoria. Aspergi-me e serei puro do pecado, e mais branco do que a neve ficarei.</p><p class="mt-4">Oh Senhor Jesus, que dissestes: "aprendei de Mim que sou manso e humilde de coração", e que manifestastes em Vossa Santa Face os sentimentos de Vosso divino coração, concedei que amemos ir com freqüência meditar sobre Vossa Face divina. Que nela possamos ler Vossa ternura e humildade, e aprendamos a formar nossos corações na prática destas duas virtudes que desejais ver brilhar em vossos servos.</p><p class="mt-4">Maria, nossa Mãe, intercedei por nós; são José, rogai por nós.</p><p class="mt-4 font-semibold">Pelos méritos de vosso precioso Sangue e vossa Santa Face, oh Jesus, concedei-nos a graça (mencionar a graça pedida)… Perdão e misericórdia.</p><h4 class="section-title mt-6">Oração em honra das Dores da Santíssima Virgem</h4><p>Oh Santíssima e aflita Virgem, Rainha dos Mártires, que permanecestes de pé junto à cruz, testemunhando a agonia de vosso Filho agonizante, olhai com ternura e piedade de Mãe para nós, ajoelhados diante de Vós para venerar vossas dores e apresentar nossos pedidos, com filial confiança, no santuário de vosso coração ferido. Apresentai-os por nós a Jesus, pelos méritos de Sua sacratíssima Paixão e morte, juntamente com vossos sofrimentos ao pé da cruz, e pela eficácia unida de ambos, obtende o favor que humildemente suplicamos. A quem iremos em nossas necessidades e misérias, senão a vós? Oh Mãe de Misericórdia, que tendo bebido tão profundamente do cálice de vosso Filho, aliviai misericordiosamente os sofrimentos daqueles que ainda suspiram nesta terra de exílio. Amém.</p><h4 class="section-title mt-6">Oração pelas Almas do Purgatório</h4><p>Meu Jesus, pelas dores que sofrestes em vossa agonia no jardim, em vossa flagelação e coroação de espinhos, no caminho do Calvário, em vossa crucifixão e morte, tende misericórdia das almas do Purgatório, e especialmente daquelas mais esquecidas. Livrai-as dos terríveis tormentos. Chamai-as e recebei-as no vosso doce abraço no Paraíso. Amém.</p><p class="mt-6 font-bold text-white text-lg tracking-wide uppercase">Pai Nosso, 3 Ave-Marias, Glória</p><p class="mt-2 font-semibold">Oh Face Ensanguentada, oh Face Divina, a Vós toda adoração! (3 vezes)</p><p class="mt-2 italic">Recitar o Ato de Consagração</p></div>`
            },
            {
                day: "Dia 5",
                title: "Quinto Dia - Paciência e Perdão",
                content: `<div class="day-specific-content"><h4 class="section-title">Salmo 51, 10-11</h4><p class="italic">Fazei-me ouvir cantos de festa e de alegria, e exultarão estes meus ossos que esmagastes. Desviai o vosso olhar dos meus pecados e apagai todas as minhas transgressões!</p><p class="mt-4">Sagrada Face de Jesus, Sagrado Semblante de Deus, quão grande é vossa paciência com a humanidade, quão infinito vosso perdão! Somos pecadores, não obstante nos amais. Isto nos dá coragem. Para a glória de vossa Santa Face e da Santíssima Trindade, ouvi-nos e atendei-nos.</p><p class="mt-4">Maria, nossa Mãe, intercedei por nós; são José, rogai por nós.</p><p class="mt-4 font-semibold">Pelos méritos de vosso precioso Sangue e vossa Santa Face, oh Jesus, concedei-nos a graça (mencionar a graça pedida)… Perdão e misericórdia.</p><h4 class="section-title mt-6">Oração a São José</h4><p>Querido são José! Adotai-nos como vossos filhos, cuidai de nossa salvação; olhai-nos dia e noite; preservai-nos das ocasiões de pecado; alcançai-nos a pureza de corpo e alma e o espírito de oração; por vossa intercessão junto a Jesus, concedei-nos um espírito de sacrifício, de humildade e de renúncia; obtende-nos um amor ardente a Jesus no Santíssimo Sacramento e um doce e terno amor a Maria, nossa Mãe. São José, permanecei conosco na vida, ficai conosco na morte e obtende-nos um julgamento favorável de Jesus, nosso misericordioso Salvador. Amém.</p><p class="mt-6 font-bold text-white text-lg tracking-wide uppercase">Pai Nosso, 3 Ave-Marias, Glória</p><p class="mt-2 font-semibold">Oh Face Ensanguentada, oh Face Divina, a Vós toda adoração! (3 vezes)</p><p class="mt-2 italic">Recitar o Ato de Consagração</p></div>`
            },
            {
                day: "Dia 6",
                title: "Sexto Dia - Pureza de Coração",
                content: `<div class="day-specific-content"><h4 class="section-title">Salmo 51, 12-13</h4><p class="italic">Criai em mim um coração que seja puro, dai-me de novo um espírito decidido. Ó Senhor, não me afasteis de vossa face, nem retireis de mim o vosso Santo Espírito.</p><p class="mt-4">Sejam nossos corações purificados, oh Senhor, pelo derramamento do Espírito Santo, e que Ele os torne fecundos pela aspersão de Seu orvalho divino.</p><p class="mt-4">Maria, castíssima esposa do Espírito Santo, intercedei por nós; são José, rogai por nós.</p><p class="mt-4 font-semibold">Pelos méritos de vosso precioso Sangue e vossa Santa Face, oh Jesus, concedei-nos a graça (mencionar a graça pedida)… Perdão e misericórdia.</p><h4 class="section-title mt-6">Oração a São Miguel Arcanjo</h4><p>Oh Vitorioso Príncipe, humilíssimo guardião da Igreja de Deus e das almas fiéis, que com tal caridade e zelo tomastes parte em tantos conflitos e tivestes tão grandes vitórias sobre o inimigo, pela conservação e proteção da honra e glória que todos devemos a Deus, bem como pela promoção da nossa salvação; vinde, nós vos rogamos, em nosso auxílio, porque somos continuamente sitiados por tão grandes perigos por nossos inimigos: a carne, o mundo e o demônio. E assim como fostes um líder para o povo de Deus no deserto, sede também nosso fiel líder e companheiro pelo deserto deste mundo, até que nos conduzais com segurança à feliz terra dos viventes, a pátria abençoada da qual somos todos exilados. Amém. <span class="italic">(Santo Aloísio)</span></p><p class="mt-6 font-bold text-white text-lg tracking-wide uppercase">Pai Nosso, 3 Ave-Marias, Glória</p><p class="mt-2 font-semibold">Oh Face Ensanguentada, oh Face Divina, a Vós toda adoração! (3 vezes)</p><p class="mt-2 italic">Recitar o Ato de Consagração</p></div>`
            },
            {
                day: "Dia 7",
                title: "Sétimo Dia - Conversão e Reparação",
                content: `<div class="day-specific-content"><h4 class="section-title">Salmo 51, 14-15</h4><p class="italic">Dai-me de novo a alegria de ser salvo e confirmai-me com espírito generoso! Ensinarei vosso caminho aos pecadores, e para vós se voltarão os transviados.</p><p class="mt-4">Senhor Jesus! Depois de contemplar vossa Face, desfigurada de dor, depois de meditar sobre Vossa Paixão com compunção e amor, como podem nossos corações não ser inflamados de um santo ódio ao pecado, que ainda hoje ultraja Vossa Adorável Face? Senhor, que não nos contentemos em ter apenas compaixão, mas que nos dês a graça de seguir-Vos tão de perto neste Calvário, que o opróbrio destinado a Vós caia sobre nós, oh Jesus, e que assim tenhamos uma parte, pequena que seja, em expiação do pecado. Amém.</p><p class="mt-4">Maria, nossa Mãe, intercedei por nós; são José, rogai por nós.</p><p class="mt-4 font-semibold">Pelos méritos de vosso precioso Sangue e vossa Santa Face, oh Jesus, concedei-nos a graça (mencionar a graça pedida)… Perdão e misericórdia.</p><h4 class="section-title mt-6">Oração em honra de Maria</h4><p>Ave, Maria, Filha de Deus Pai. Ave, Maria, Mãe de Deus Filho. Ave, Maria, Esposa do Espírito Santo. Ave, Maria, templo da Santíssima Trindade. Ave, Maria, Senhora minha, meu bem, meu amor, Rainha do meu coração, Mãe, vida, doçura e esperança minha mui querida, meu coração e minha alma. Sou todo vosso, e tudo que possuo é vosso, ó Virgem sobre todos bendita. Esteja, pois, em mim vossa alma, para engrandecer o Senhor, esteja em mim vosso espírito, para rejubilar em Deus. Colocai-vos, ó Virgem fiel, como selo sobre meu coração, para que, em vós e por vós, seja eu achado fiel a Deus. Concedei, ó Mãe de misericórdia, que me encontre no número dos que amais, ensinais, guiais, sustentais e protegeis como filhos. Fazei que, por vosso amor, despreze todas as consolações da terra e aspire só às celestes; até que, para a glória do Pai, Jesus Cristo, vosso Filho, seja formado em mim, pelo Espírito Santo, vosso Esposo fidelíssimo, e por vós, sua Esposa mui fiel. Assim seja. <span class="italic">(São Luís Maria Grignon de Montfort)</span></p><p class="mt-6 font-bold text-white text-lg tracking-wide uppercase">Pai Nosso, 3 Ave-Marias, Glória</p><p class="mt-2 font-semibold">Oh Face Ensanguentada, oh Face Divina, a Vós toda adoração! (3 vezes)</p><p class="mt-2 italic">Recitar o Ato de Consagração</p></div>`
            },
            {
                day: "Dia 8",
                title: "Oitavo Dia - Proteção e Cura",
                content: `<div class="day-specific-content"><h4 class="section-title">Salmo 51, 16-17</h4><p class="italic">Da morte como pena, libertai-me, e minha língua exaltará vossa justiça! Abri meus lábios, ó Senhor, para cantar, e minha boca anunciará vosso louvor.</p><p class="mt-4">Misericordiosíssima Face de Jesus, que neste vale de lágrimas fostes tão tocado por nosso infortúnio para serdes chamado curador dos doentes e bom Pastor das ovelhas perdidas, não permitais que Satanás nos leve para longe de vós, mas mantende-nos sob vossa amável proteção, junto com todas as almas que se empenham em Vos consolar.</p><p class="mt-4">Maria, nossa Mãe, intercedei por nós; são José, rogai por nós.</p><p class="mt-4 font-semibold">Pelos méritos de vosso precioso Sangue e vossa Santa Face, oh Jesus, concedei-nos a graça (mencionar a graça pedida)… Perdão e misericórdia.</p><h4 class="section-title mt-6">Oração a São Pedro</h4><p>Ó glorioso São Pedro, que por vossa vibrante e generosa fé, profunda e sincera humildade e vosso flamejante amor, foi honrado por Nosso Senhor com singulares privilégios e em especial a liderança dos outros apóstolos e o primado de toda a Sua Igreja, da qual fostes feito a pedra angular. Obtende-nos a graça de uma fé viva, que não tema professar-se abertamente e em plenitude e em todas as suas manifestações, mesmo até o derramamento de sangue, se preciso for, e até o sacrifício da própria vida para não renunciá-la. Obtende-nos também uma lealdade sincera à nossa Santa Madre Igreja. Concedei-nos que permaneçamos cada vez mais próximos e unidos ao Santo Padre, que é o herdeiro de vossa fé e de vossa autoridade, única e verdadeira cabeça visível da Igreja Católica. Concedei-nos ainda que sigamos, com toda humildade e mansidão, o ensinamento e conselho da Igreja e sejamos obedientes a todos os seus preceitos, para que sejamos capazes de desfrutar na terra da paz que é verdadeira e imperturbável, e para conseguirmos um dia no céu a felicidade eterna. Amém.</p><p class="mt-6 font-bold text-white text-lg tracking-wide uppercase">Pai Nosso, 3 Ave-Marias, Glória</p><p class="mt-2 font-semibold">Oh Face Ensanguentada, oh Face Divina, a Vós toda adoração! (3 vezes)</p><p class="mt-2 italic">Recitar o Ato de Consagração</p></div>`
            },
            {
                day: "Dia 9",
                title: "Nono Dia - Gratidão e Confiança",
                content: `<div class="day-specific-content"><h4 class="section-title">Salmo 51, 18-21</h4><p class="italic">Pois não são de vosso agrado os sacrifícios, e, se oferto um holocausto, o rejeitais. Meu sacrifício é minha alma penitente, não desprezeis um coração arrependido! Sede benigno com Sião, por vossa graça, reconstruí Jerusalém e os seus muros! E aceitareis o verdadeiro sacrifício, os holocaustos e oblações em vosso altar!</p><p class="mt-4">Sagrada Face de nosso Senhor e nosso Deus, que palavras teremos para expressar nossa gratidão? Como podemos falar de nossa alegria? Que vos dignastes ouvir-nos, que escolhestes atender-nos em nossa hora de necessidade. Dizemos isto porque sabemos que nossas orações serão atendidas. Sabemos que Vós, em vossa amorosa ternura, ouvistes nossos corações suplicantes, e nos dareis, de vossa plenitude, a resposta para nossos problemas.</p><p class="mt-4">Maria, nossa Mãe, intercedei por nós; são José, rogai por nós.</p><p class="mt-4 font-semibold">Pelos méritos de vosso precioso Sangue e vossa Santa Face, oh Jesus, concedei-nos a graça (mencionar a graça pedida)… Perdão e misericórdia.</p><h4 class="section-title mt-6">Oração à Santíssima Trindade</h4><p>Santíssima Trindade, Divindade indivisível, Pai, Filho e Espírito Santo, nosso primeiro começo e nosso último fim. Como nos fizestes segundo Vossa própria imagem e semelhança, concedei-nos que todos os pensamentos de nossas mentes, todas as palavras de nossas bocas, todas as afeições de nossos corações e todas as nossas ações sejam sempre conformes a vossa Santíssima Vontade, para que depois de Vos vermos aqui na terra sob aparências e de maneira nebulosa por meio da fé, por fim cheguemos a contemplar-Vos face a face, na posse perfeita de Vós para sempre no Paraíso. Amém.</p><p class="mt-6 font-bold text-white text-lg tracking-wide uppercase">Pai Nosso, 3 Ave-Marias, Glória</p><p class="mt-2 font-semibold">Oh Face Ensanguentada, oh Face Divina, a Vós toda adoração! (3 vezes)</p><p class="mt-2 italic">Recitar o Ato de Consagração</p></div>`
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
                content: `<div class="day-specific-content"><h4 class="section-title">A Escolha de Pedro</h4><p>Jesus escolheu Simão, a quem chamou de Pedro, para ser o fundamento da Sua Igreja. Ele não escolheu o mais sábio ou o mais forte, mas aquele que, apesar de suas fraquezas, tinha um coração aberto ao amor de Deus. A vida de Pedro nos ensina que Deus chama os humildes e os transforma em instrumentos de Sua graça.</p><p class="mt-4 font-semibold">Ó São Pedro, que fostes escolhido por Cristo para ser a pedra sobre a qual Ele edificou a Sua Igreja, ajuda-me a acolher o chamado de Deus com humildade e generosidade. Ensina-me a confiar na Sua graça, que transforma as fraquezas em força. Amém.</p><p class="mt-6 font-bold text-white text-lg tracking-wide uppercase">Pai Nosso, Ave Maria, Glória ao Pai</p></div>`
            },
            {
                day: "Dia 2",
                title: "Segundo Dia - A Confissão de Fé de Pedro",
                content: `<div class="day-specific-content"><h4 class="section-title">A Confissão de Fé de Pedro</h4><p>Pedro foi o primeiro a confessar que Jesus era o Messias, o Filho do Deus vivo. Essa confissão de fé é o fundamento da Igreja e nos lembra da importância de professarmos nossa fé com coragem, mesmo diante das dificuldades.</p><p class="mt-4 font-semibold">Ó São Pedro, que confessastes com firmeza a divindade de Cristo, ajuda-me a professar minha fé com coragem e convicção. Aumenta em mim a confiança em Jesus, o Filho de Deus, e fortalece minha fidelidade à Igreja que Ele fundou. Amém.</p><p class="mt-6 font-bold text-white text-lg tracking-wide uppercase">Pai Nosso, Ave Maria, Glória ao Pai</p></div>`
            },
            {
                day: "Dia 3",
                title: "Terceiro Dia - A Fragilidade e o Perdão de Pedro",
                content: `<div class="day-specific-content"><h4 class="section-title">A Fragilidade e o Perdão de Pedro</h4><p>Pedro, apesar de seu amor por Jesus, negou-O três vezes durante a Paixão. Mas, ao olhar de Jesus, ele se arrependeu e chorou amargamente. Esse momento nos mostra que, mesmo em nossas quedas, o amor e o perdão de Deus estão sempre disponíveis para nós.</p><p class="mt-4 font-semibold">Ó São Pedro, que experimentastes a misericórdia de Cristo após as tuas negações, ensina-me a confiar no perdão de Deus. Ajuda-me a levantar-me sempre que eu cair e a nunca perder a esperança na Sua infinita misericórdia. Amém.</p><p class="mt-6 font-bold text-white text-lg tracking-wide uppercase">Pai Nosso, Ave Maria, Glória ao Pai</p></div>`
            },
            {
                day: "Dia 4",
                title: "Quarto Dia - O Pastor do Rebanho",
                content: `<div class="day-specific-content"><h4 class="section-title">O Pastor do Rebanho</h4><p>Jesus confiou a Pedro a missão de apascentar Seu rebanho, dizendo: "Apascenta as minhas ovelhas". Pedro assumiu essa missão com amor e dedicação, guiando a Igreja com coragem e fé. Sua vida nos inspira a servir a Deus e ao próximo com generosidade.</p><p class="mt-4 font-semibold">Ó São Pedro, que recebestes de Cristo a missão de apascentar o Seu rebanho, ajuda-me a ser um servo fiel e generoso. Ensina-me a amar a Igreja e a trabalhar pela unidade e santidade do povo de Deus. Amém.</p><p class="mt-6 font-bold text-white text-lg tracking-wide uppercase">Pai Nosso, Ave Maria, Glória ao Pai</p></div>`
            },
            {
                day: "Dia 5",
                title: "Quinto Dia - A Cátedra de Pedro",
                content: `<div class="day-specific-content"><h4 class="section-title">A Cátedra de Pedro</h4><p>A Cátedra de Pedro simboliza a autoridade e a unidade da Igreja. Pedro, como primeiro Papa, foi o guardião da fé e o ponto de referência para todos os cristãos. Sua vida nos lembra da importância de permanecermos unidos ao Sucessor de Pedro, o Papa.</p><p class="mt-4 font-semibold">Ó São Pedro, que fostes constituído por Cristo como fundamento da Igreja, ajuda-me a amar e respeitar o Papa, o Sucessor de Pedro. Ensina-me a viver em comunhão com a Igreja e a defender a unidade da fé. Amém.</p><p class="mt-6 font-bold text-white text-lg tracking-wide uppercase">Pai Nosso, Ave Maria, Glória ao Pai</p></div>`
            },
            {
                day: "Dia 6",
                title: "Sexto Dia - A Coragem de Pedro",
                content: `<div class="day-specific-content"><h4 class="section-title">A Coragem de Pedro</h4><p>Pedro foi um homem corajoso, que enfrentou perseguições e desafios para anunciar o Evangelho. Ele não temeu as ameaças do mundo, pois confiava na força de Cristo. Sua vida nos inspira a sermos corajosos na fé e na missão de evangelizar.</p><p class="mt-4 font-semibold">Ó São Pedro, que destes testemunho de Cristo com coragem e ousadia, ajuda-me a vencer o medo e a anunciar o Evangelho com entusiasmo. Fortalece minha fé e minha confiança na presença de Jesus em minha vida. Amém.</p><p class="mt-6 font-bold text-white text-lg tracking-wide uppercase">Pai Nosso, Ave Maria, Glória ao Pai</p></div>`
            },
            {
                day: "Dia 7",
                title: "Sétimo Dia - O Martírio de Pedro",
                content: `<div class="day-specific-content"><h4 class="section-title">O Martírio de Pedro</h4><p>Pedro deu sua vida por Cristo, sendo crucificado de cabeça para baixo por amor ao Senhor. Seu martírio é um testemunho de fidelidade até o fim e nos lembra de que o amor a Cristo deve ser maior do que qualquer outra coisa.</p><p class="mt-4 font-semibold">Ó São Pedro, que derramastes o teu sangue por amor a Cristo, ajuda-me a ser fiel até o fim. Ensina-me a amar Jesus acima de tudo e a estar disposto a sacrificar-me por Ele. Amém.</p><p class="mt-6 font-bold text-white text-lg tracking-wide uppercase">Pai Nosso, Ave Maria, Glória ao Pai</p></div>`
            },
            {
                day: "Dia 8",
                title: "Oitavo Dia - A Unidade da Igreja",
                content: `<div class="day-specific-content"><h4 class="section-title">A Unidade da Igreja</h4><p>Pedro foi o ponto de união para os primeiros cristãos, e hoje o Sucessor de Pedro continua a ser o sinal visível da unidade da Igreja. Sua vida nos inspira a trabalhar pela união e pela paz entre todos os fiéis.</p><p class="mt-4 font-semibold">Ó São Pedro, que fostes o sinal da unidade da Igreja, ajuda-me a promover a comunhão e a harmonia entre os irmãos. Ensina-me a amar a Igreja e a trabalhar pela sua unidade. Amém.</p><p class="mt-6 font-bold text-white text-lg tracking-wide uppercase">Pai Nosso, Ave Maria, Glória ao Pai</p></div>`
            },
            {
                day: "Dia 9",
                title: "Nono Dia - A Intercessão de Pedro",
                content: `<div class="day-specific-content"><h4 class="section-title">A Intercessão de Pedro</h4><p>Pedro, agora no céu, intercede por nós como um grande santo e amigo de Jesus. Ele conhece nossas lutas e fraquezas e nos ajuda a permanecer firmes na fé. Sua intercessão é um dom para a Igreja.</p><p class="mt-4 font-semibold">Ó São Pedro, que intercedeis por nós junto a Cristo, apresenta-Lhe as minhas necessidades e intenções. Ajuda-me a crescer na fé, na esperança e no amor, e a ser um verdadeiro discípulo de Jesus. Amém.</p><p class="mt-6 font-bold text-white text-lg tracking-wide uppercase">Pai Nosso, Ave Maria, Glória ao Pai</p></div>`
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
                content: `<div class="day-specific-content"><h4 class="section-title">A Pureza de Coração</h4><p>São Casimiro é um modelo de pureza e castidade. Ele guardou seu coração puro, dedicando-se inteiramente a Deus e à Virgem Maria. Sua vida nos ensina que a pureza é um caminho de santidade e felicidade.</p><p class="mt-4 font-semibold">Ó São Casimiro, que guardastes a pureza de coração como um tesouro precioso, ajuda-me a viver uma vida casta e pura, longe das tentações do mundo. Ensina-me a amar a Deus com todo o meu ser e a buscar a santidade em minha juventude. Amém.</p><p class="mt-4">Concedei-me, por intercessão de São Casimiro, a graça de crescer na fé, na esperança e no amor, e de ser um verdadeiro discípulo de Cristo. Amém.</p><p class="mt-6 font-bold text-white text-lg tracking-wide uppercase">Pai Nosso, Ave Maria, Glória ao Pai</p></div>`
            },
            {
                day: "Dia 2",
                title: "Segundo Dia - A Devoção à Eucaristia",
                content: `<div class="day-specific-content"><h4 class="section-title">A Devoção à Eucaristia</h4><p>São Casimiro tinha uma profunda devoção à Eucaristia, encontrando nela a força para sua vida espiritual. Ele nos ensina que Jesus Eucarístico é o alimento da alma e a fonte de toda graça.</p><p class="mt-4 font-semibold">Ó São Casimiro, que amastes a Eucaristia com todo o teu coração, ajuda-me a valorizar a Santa Missa e a Comunhão. Ensina-me a adorar Jesus no Santíssimo Sacramento e a recebê-Lo com fé e amor. Amém.</p><p class="mt-4">Concedei-me, por intercessão de São Casimiro, a graça de crescer na fé, na esperança e no amor, e de ser um verdadeiro discípulo de Cristo. Amém.</p><p class="mt-6 font-bold text-white text-lg tracking-wide uppercase">Pai Nosso, Ave Maria, Glória ao Pai</p></div>`
            },
            {
                day: "Dia 3",
                title: "Terceiro Dia - O Amor à Virgem Maria",
                content: `<div class="day-specific-content"><h4 class="section-title">O Amor à Virgem Maria</h4><p>São Casimiro tinha uma devoção especial à Virgem Maria, a quem chamava de "Minha Mãe". Ele via nela o modelo perfeito de fé e obediência a Deus. Sua vida nos inspira a confiar na intercessão de Maria e a imitar suas virtudes.</p><p class="mt-4 font-semibold">Ó São Casimiro, que amastes a Virgem Maria com todo o teu coração, ensina-me a confiar em sua intercessão e a imitar suas virtudes. Ajuda-me a consagrar minha vida a ela e a buscar sua proteção em todos os momentos. Amém.</p><p class="mt-4">Concedei-me, por intercessão de São Casimiro, a graça de crescer na fé, na esperança e no amor, e de ser um verdadeiro discípulo de Cristo. Amém.</p><p class="mt-6 font-bold text-white text-lg tracking-wide uppercase">Pai Nosso, Ave Maria, Glória ao Pai</p></div>`
            },
            {
                day: "Dia 4",
                title: "Quarto Dia - A Caridade para com os Pobres",
                content: `<div class="day-specific-content"><h4 class="section-title">A Caridade para com os Pobres</h4><p>São Casimiro era conhecido por sua caridade para com os pobres e necessitados. Ele distribuía seus bens e usava sua posição para ajudar os mais vulneráveis. Sua vida nos inspira a ser generosos e solidários com os que sofrem.</p><p class="mt-4 font-semibold">Ó São Casimiro, que amastes os pobres como a Cristo, ensina-me a ser generoso e compassivo com os que sofrem. Ajuda-me a ver Jesus em cada irmão necessitado e a servir com amor e dedicação. Amém.</p><p class="mt-4">Concedei-me, por intercessão de São Casimiro, a graça de crescer na fé, na esperança e no amor, e de ser um verdadeiro discípulo de Cristo. Amém.</p><p class="mt-6 font-bold text-white text-lg tracking-wide uppercase">Pai Nosso, Ave Maria, Glória ao Pai</p></div>`
            },
            {
                day: "Dia 5",
                title: "Quinto Dia - A Obediência e a Humildade",
                content: `<div class="day-specific-content"><h4 class="section-title">A Obediência e a Humildade</h4><p>São Casimiro viveu com obediência e humildade, seguindo os ensinamentos de Cristo e os conselhos de seus superiores. Ele nos mostra que a verdadeira grandeza está em servir com amor e simplicidade.</p><p class="mt-4 font-semibold">Ó São Casimiro, que viveste a obediência e a humildade como caminho de santidade, ajuda-me a ser obediente à vontade de Deus e humilde no serviço aos irmãos. Ensina-me a desprezar o orgulho e a buscar a simplicidade de coração. Amém.</p><p class="mt-4">Concedei-me, por intercessão de São Casimiro, a graça de crescer na fé, na esperança e no amor, e de ser um verdadeiro discípulo de Cristo. Amém.</p><p class="mt-6 font-bold text-white text-lg tracking-wide uppercase">Pai Nosso, Ave Maria, Glória ao Pai</p></div>`
            },
            {
                day: "Dia 6",
                title: "Sexto Dia - A Devoção à Paixão de Cristo",
                content: `<div class="day-specific-content"><h4 class="section-title">A Devoção à Paixão de Cristo</h4><p>São Casimiro meditava com frequência sobre a Paixão de Cristo, encontrando na Cruz a fonte de seu amor e sacrifício. Ele nos ensina que a Cruz é o caminho para a ressurreição e a vida eterna.</p><p class="mt-4 font-semibold">Ó São Casimiro, que contemplastes com amor a Paixão de Cristo, ajuda-me a amar a Cruz e a encontrar nela a força para vencer as dificuldades da vida. Ensina-me a oferecer meus sofrimentos unidos aos de Jesus pela salvação das almas. Amém.</p><p class="mt-4">Concedei-me, por intercessão de São Casimiro, a graça de crescer na fé, na esperança e no amor, e de ser um verdadeiro discípulo de Cristo. Amém.</p><p class="mt-6 font-bold text-white text-lg tracking-wide uppercase">Pai Nosso, Ave Maria, Glória ao Pai</p></div>`
            },
            {
                day: "Dia 7",
                title: "Sétimo Dia - A Alegria na Vida Cristã",
                content: `<div class="day-specific-content"><h4 class="section-title">A Alegria na Vida Cristã</h4><p>São Casimiro encontrou na vida cristã uma fonte de alegria e paz. Ele nos mostra que a verdadeira felicidade está em seguir a Cristo e viver em comunhão com os irmãos.</p><p class="mt-4 font-semibold">Ó São Casimiro, que encontraste na vida cristã a alegria de servir a Deus, ajuda-me a encontrar a verdadeira felicidade em Cristo. Ensina-me a viver em comunhão com os irmãos e a buscar a santidade em minha vocação. Amém.</p><p class="mt-4">Concedei-me, por intercessão de São Casimiro, a graça de crescer na fé, na esperança e no amor, e de ser um verdadeiro discípulo de Cristo. Amém.</p><p class="mt-6 font-bold text-white text-lg tracking-wide uppercase">Pai Nosso, Ave Maria, Glória ao Pai</p></div>`
            },
            {
                day: "Dia 8",
                title: "Oitavo Dia - A Perseverança na Fé",
                content: `<div class="day-specific-content"><h4 class="section-title">A Perseverança na Fé</h4><p>São Casimiro perseverou até o fim na fé, deixando um legado de santidade e amor a Deus. Ele nos inspira a manter-nos firmes na caminhada cristã, mesmo diante das dificuldades.</p><p class="mt-4 font-semibold">Ó São Casimiro, que perseverastes na fé até o fim, ajuda-me a manter-me firme na caminhada cristã, mesmo diante das dificuldades. Concede-me a graça da perseverança final, para que eu possa um dia estar contigo na glória do céu. Amém.</p><p class="mt-4">Concedei-me, por intercessão de São Casimiro, a graça de crescer na fé, na esperança e no amor, e de ser um verdadeiro discípulo de Cristo. Amém.</p><p class="mt-6 font-bold text-white text-lg tracking-wide uppercase">Pai Nosso, Ave Maria, Glória ao Pai</p></div>`
            },
            {
                day: "Dia 9",
                title: "Nono Dia - O Amor à Igreja",
                content: `<div class="day-specific-content"><h4 class="section-title">O Amor à Igreja</h4><p>São Casimiro amava a Igreja e dedicou sua vida ao serviço do Reino de Deus. Ele nos inspira a amar e servir a Igreja com fidelidade e dedicação.</p><p class="mt-4 font-semibold">Ó São Casimiro, que amastes a Igreja com todo o teu coração, ajuda-me a amar e servir a Igreja com fidelidade e dedicação. Ensina-me a trabalhar pela unidade e santidade do povo de Deus. Amém.</p><p class="mt-4">Concedei-me, por intercessão de São Casimiro, a graça de crescer na fé, na esperança e no amor, e de ser um verdadeiro discípulo de Cristo. Amém.</p><p class="mt-6 font-bold text-white text-lg tracking-wide uppercase">Pai Nosso, Ave Maria, Glória ao Pai</p></div>`
            }
        ]
    },

    sao_gabriel_dores: {
        saintName: "São Gabriel das Dores",
        novenaTitle: "Novena a São Gabriel de Nossa Senhora das Dores",
        description: "Jovem passionista, modelo de obediência, desprendimento e amor à Paixão de Cristo. Intercessor da juventude. Reza-se de 18 a 26 de fevereiro, preparando a festa de 27 de fevereiro.",
        image: "/images/sao_gabriel_dores.png",
        initialPrayer: `<div class="prayer-block"><h4 class="section-title">Oração Preparatória (todos os dias)</h4><p>Ó soberano Senhor e santificador das almas, prostrados ante a vossa infinita majestade, louvamos e bendizemos a incomparável grandeza e liberalidade com que elevastes São Gabriel ao supremo grau da perfeição, por meio de um amor fervorosíssimo à Rainha dos Mártires. Pelos méritos deste amantíssimo servo de Maria, pela glória de tão excelsa Senhora e de São Gabriel, imploramos a graça particular que por este exercício esperamos obter <em>(pedir a graça)</em> e principalmente a de imitarmos este admirável Santo, a fim de podermos conquistar a sua graça na terra e sua glória por toda eternidade. Amém.</p></div>`,
        finalPrayer: `<div class="prayer-block"><h4 class="section-title">Oração Final</h4><p>Senhor, muitas vezes temos com os nossos pecados merecido a morte do pecador em vez da do justo, mas confiando na vossa infinita misericórdia, na vossa Paixão e Morte, nas dores de Maria, nos méritos de São Gabriel, imploramos misericórdia e perdão, agora mas principalmente na hora da nossa morte para gozarmos, eternamente, com São Gabriel, a glória que nos merecestes. Amém.</p><p class="mt-4 font-semibold">São Gabriel das Dores, rogai por nós!</p></div>`,
        days: [
            {
                day: "Dia 1",
                title: "Primeiro Dia - Obediência de São Gabriel",
                content: `<div class="day-specific-content"><h4 class="section-title">Obediência de São Gabriel</h4><p>Maria ouviu a profecia de Simeão e o seu coração foi transpassado por uma grande dor. Submeteu-se, entretanto à Ssma. Vontade do Pai, aceitando a imolação e o sacrifício do seu divino Filho. Esta dor foi mais cruel e pungente do que a morte e acompanhou a Ssma. Mãe durante toda a sua vida.</p><p class="mt-4">Consideremos como São Gabriel, a exemplo de Maria, viveu profundamente esta virtude que é a obediência à vontade do Pai. Obedeceu em tudo e sempre, sem diferenciar o prazer do sofrimento, embora sentindo muitas vezes repugnância e dificuldade. Os Santos de ontem e de hoje, estão convictos destas verdades evangélicas e seguem sempre resolutos o caminho da crucifixão, que é caminho da glorificação e ressurreição com Cristo. Assim fez o nosso querido coirmão.</p><p class="mt-4 font-semibold">Pai Nosso, Ave Maria e Glória.</p></div>`
            },
            {
                day: "Dia 2",
                title: "Segundo Dia - Desprendimento do Mundo",
                content: `<div class="day-specific-content"><h4 class="section-title">Desprendimento do Mundo</h4><p>Numa pobre casa em Belém, acompanhada pelo seu esposo São José, Maria usufruía os carinhos do seu adorado Filho, quando uma ordem de Deus os obriga a deixar repentinamente sua casa e partir para o Egito. Deixa tudo e vai com Jesus e José.</p><p class="mt-4">São Gabriel, à semelhança de Maria, estando em plena mocidade, onde tudo lhe sorria, deixa tudo seguindo o chamado do seu Senhor.</p><p class="mt-4">Se desejarmos ter esta felicidade de São Gabriel, vivamos com fidelidade o amor, esquecendo-nos de tudo o que já renunciamos: ter, ser, poder, apegando-nos unicamente no Amado. No Crucificado, com quem nos comprometemos.</p><p class="mt-4 font-semibold">Pai Nosso, Ave Maria e Glória.</p></div>`
            },
            {
                day: "Dia 3",
                title: "Terceiro Dia - Amor a Deus",
                content: `<div class="day-specific-content"><h4 class="section-title">Amor a Deus</h4><p>Maria perdeu Jesus em Jerusalém e a grande diligência em procurá-lo foi a manifestação do seu imenso amor por Ele. Jesus era a vida de sua vida e ela não podia viver sem Ele, daí a pungente dor que a fez procurá-lo sem cessar, durante três dias. Inspirando-se na Mãe das Dores, Gabriel era um apaixonado por Deus, vivendo constantemente em sua presença. Estar em Deus era-lhe natural e isto o levou a perfeição da caridade com todos.</p><p class="mt-4">Com a graça de Deus e o seu esforço para praticar as santas virtudes, tornou-se um jovem caridoso e muito querido pelos coirmãos e por todos que dele se aproximavam.</p><p class="mt-4 font-semibold">Pai Nosso, Ave Maria e Glória.</p></div>`
            },
            {
                day: "Dia 4",
                title: "Quarto Dia - Amor à Cruz e à Penitência",
                content: `<div class="day-specific-content"><h4 class="section-title">Amor à Cruz e à Penitência</h4><p>Maria, quando soube que seu divino Filho, carregando a Cruz se dirigia para o Calvário, no mesmo instante saiu de casa e se encaminhou para o lugar onde Jesus deveria passar, a fim de revê-lo e participar das suas afrontas. Assim ela abraça espiritual e moralmente uma crucifixão bem mais dolorosa do que se a sofresse fisicamente.</p><p class="mt-4">Gabriel, apenas se conscientizou do chamado de Deus à Congregação da Paixão de Jesus Cristo, a mais austera que conhecia, aceitou o convite abraçando a Cruz.</p><p class="mt-4">A exemplo de São Gabriel abracemos com amor tudo aquilo que se nos apresenta no cotidiano de nossa vida, plasmando assim, a nova criatura que Deus quer para sua maior glória e bem da Igreja de Cristo que conta conosco.</p><p class="mt-4 font-semibold">Pai Nosso, Ave Maria e Glória.</p></div>`
            },
            {
                day: "Dia 5",
                title: "Quinto Dia - Devoção de São Gabriel à Paixão de Cristo",
                content: `<div class="day-specific-content"><h4 class="section-title">Devoção de São Gabriel à Paixão de Cristo</h4><p>O assunto predileto das meditações de São Gabriel foi sempre à presença intrépida de Maria, assistindo a terrível agonia e morte do seu divino Filho.</p><p class="mt-4">Este foi o segredo da sua santidade, a origem da sua perfeição e vida espiritual. Comprazia-se em acompanhar Maria até a Cruz e chorar com ela imersa no grande mar de dor e de amor de Jesus.</p><p class="mt-4">Gabriel era incansável no cumprimento do voto que fizera de propagar a Paixão de Cristo e as Dores de Maria Ssma. Em seu livro de Divino Ofício conservava estas duas imagens para beijá-las e não se esquecer da "Memória Passionis".</p><p class="mt-4 font-semibold">Pai Nosso, Ave Maria e Glória.</p></div>`
            },
            {
                day: "Dia 6",
                title: "Sexto Dia - Devoção de São Gabriel à Ssma. Virgem Maria",
                content: `<div class="day-specific-content"><h4 class="section-title">Devoção de São Gabriel à Ssma. Virgem Maria</h4><p>Na 6ª dor contemplamos Maria tendo nos braços maternos o corpo de Jesus descido da Cruz. Esta dor constitui o quadro mais terno e capaz de converter até o coração mais endurecido.</p><p class="mt-4">Desde criança Gabriel tinha um singular amor à Mãe Dolorosa, amor que se tornou depois um abismo insondável... Quando alguém se apaixona por um grande ideal, não se contém e é impelido a se expandir. Gabriel foi o apóstolo de Maria, quando dela falava era com grande eloquência. A devoção à Mãe de Deus lhe imprimiu fisionomia de todo própria; o amor saiu dele para se fundir no amor de Maria, para formar um só coração.</p><p class="mt-4 font-semibold">Pai Nosso, Ave Maria e Glória.</p></div>`
            },
            {
                day: "Dia 7",
                title: "Sétimo Dia - Vida Interior de São Gabriel",
                content: `<div class="day-specific-content"><h4 class="section-title">Vida Interior de São Gabriel</h4><p>Maria, tendo a alma transpassada por pungentíssima dor, após as exéquias do seu divino Filho, retirou-se para casa, pensando sempre no seu Jesus, no suplício da crucifixão, lembranças que constituíam a vida do seu coração. De acordo com o sentir comum, pessoa ativa é a que se ocupa exclusivamente em obras exteriores. Descurando a atividade reflexiva, não se recolhe, não medita, não reza nem contempla a Deus.</p><p class="mt-4">Gabriel nos indica um caminho de vida interior profunda, vivida no interior do claustro e de todo voltada para o cumprimento dos seus deveres religiosos sendo fiel até nos mínimos detalhes.</p><p class="mt-4 font-semibold">Pai Nosso, Ave Maria e Glória.</p></div>`
            },
            {
                day: "Dia 8",
                title: "Oitavo Dia - Caridade Fraterna de São Gabriel",
                content: `<div class="day-specific-content"><h4 class="section-title">Caridade Fraterna de São Gabriel</h4><p>Maria após a Paixão, Morte e Ressurreição de Jesus, levou uma vida oculta e a Bíblia pouco a nomeia. Em companhia do apóstolo São João, passou fazendo o bem e animando a comunidade da Igreja nascente, sem alarde e no silêncio da prece, considerando tudo o que sucedera na Paixão do seu divino Filho. Gabriel, seu devotado filho a imitou, perseverando na meditação da Paixão e praticando a virtude da caridade para com todos, em especial, com seus coirmãos.</p><p class="mt-4">A caridade maior é a que se exerce em prol da salvação dos irmãos, o apostolado. O comportamento virtuoso de Gabriel, seu porte humilde, modesto e recolhido estimulava a todos a prática da virtude e suas palavras eram um verdadeiro bálsamo para os corações.</p><p class="mt-4 font-semibold">Pai Nosso, Ave Maria e Glória.</p></div>`
            },
            {
                day: "Dia 9",
                title: "Nono Dia - Morte Preciosa de São Gabriel",
                content: `<div class="day-specific-content"><h4 class="section-title">Morte Preciosa de São Gabriel</h4><p>Maria, após uma vida santíssima, viu chegar a sua "hora", com o maior consolo e alegria. Foi o triunfo do Amor, a coroa de suas vitórias, o princípio do seu gozo eterno com o saudosíssimo Filho. São Gabriel sempre esteve a espera do seu Deus. Se o anúncio de sua chegada viesse na cama?... Continuaria a dormir. Se fosse enquanto comia?... Continuaria a comer, etc.</p><p class="mt-4">Com alegria Gabriel viu chegar a hora de sua morte. Os assistentes vendo-o tão jubiloso admiravam-se; estava tranquilo, feliz, com o pensamento em Deus e em Maria. Imóvel, extático, com o mesmo sorriso e olhar aberto, apertando ao peito a imagem do Crucificado e da Mãe Dolorosa, Gabriel espera a chegada do seu Deus e Senhor. Maria se antecipa, consolando-o e na quarta-feira de cinzas, dia 27 de fevereiro ele deixa este vale de lágrimas voando para o banquete das núpcias eternas com o seu Bem Amado.</p><p class="mt-4 font-semibold">Pai Nosso, Ave Maria e Glória.</p><p class="mt-4 font-semibold">São Gabriel das Dores, rogai por nós!</p></div>`
            }
        ]
    },

    sao_joao_de_deus: {
        saintName: "São João de Deus",
        novenaTitle: "Novena a São João de Deus",
        description: "Confessor, Fundador da Ordem Hospitaleira, Padroeiro dos doentes, dos enfermeiros e dos hospitais. Reza-se de 27 de fevereiro a 7 de março, preparando a festa de 8 de março.",
        image: "/images/sao_joao_de_deus.png",
        initialPrayer: `<div class="prayer-block"><h4 class="section-title">Oração Inicial (todos os dias)</h4><p>Pelo sinal da Santa Cruz, livrai-me Deus nosso Senhor, dos nossos inimigos.</p><p>Em nome do Pai e do Filho e do Espírito Santo. Amém.</p><h5 class="font-semibold mt-4">Ato de Contrição</h5><p>Senhor meu, Jesus Cristo, Deus e homem verdadeiro, Criador e Redentor meu, por serdes Vós quem sois, sumamente bom e digno de ser amado sobre todas as coisas, e porque Vos amo e estimo, pesa-me, Senhor, de todo o meu coração, de Vos ter ofendido; pesa-me, também, de ter perdido o Céu e merecido o Inferno; e proponho-me firmemente, ajudado com o auxílio da vossa divina graça, emendar-me e nunca mais Vos tornar a ofender. Espero alcançar o perdão de minhas culpas pela vossa infinita misericórdia. Amém.</p><h5 class="font-semibold mt-4">Oração a São João de Deus</h5><p>A ti me dirijo, São João de Deus, Padroeiro dos Bombeiros. Tu que partilhaste os sofrimentos dos outros e que agora estás junto ao Salvador para intercederes por nós.</p><p class="mt-4">Senhor, nosso Pai, quantos males atingem a humanidade, quantos são os desvalidos que sofrem, são tão desprezados e muitos até excluídos. Perdoa nossa omissão, nossa falta de sensibilidade, nossa ignorância por separarmos os sofridos de vós.</p><p class="mt-4">Sabemos que a falta de amor agrava muitas doenças e acidentes, por isso pedimos, pelos méritos de São João de Deus, o dom da compaixão, da paciência para com os necessitados e, acima de tudo, que tenhamos um grande amor por eles.</p><p class="mt-4">Peço que me acompanhes sempre, São João de Deus, para que me lembre de pôr Deus no centro da minha vida, todos os dias.</p><p class="mt-4 font-semibold">São João de Deus, rogai por nós.<br/>São José, pai protetor, rogai por nós.<br/>Maria, Consoladora dos Aflitos, rogai por nós. Amém.</p></div>`,
        finalPrayer: `<div class="prayer-block"><h4 class="section-title">Oração Final</h4><p>Senhor, que inflamastes São João de Deus no fogo da caridade – para que fosse na terra o Apóstolo dos pecadores, Socorro dos pobres e Saúde dos doentes – no céu o constituístes Alívio dos que sofrem e Padroeiro dos bombeiros.</p><p class="mt-4">Concedei-nos, por sua intercessão, a graça que neste momento vos pedimos <em>(pedir a graça)</em>, prometendo imitá-lo nas suas virtudes, na santidade, na construção do Vosso Reino de Paz, Justiça, Amor e Misericórdia. Por nosso Senhor Jesus Cristo Vosso Filho na unidade do Espírito Santo. Amém.</p><p class="mt-6 font-bold text-white text-lg tracking-wide uppercase">Pai Nosso, Ave Maria e Glória ao Pai.</p><p>Glória ao Pai e ao Filho e ao Espírito Santo. Como era no princípio, agora e sempre. Amém.</p><p class="mt-4 font-semibold">São João de Deus, rogai por nós!</p></div>`,
        days: [
            {
                day: "Dia 1",
                title: "Primeiro Dia - Fé de João de Deus em Cristo e na Igreja",
                content: `<div class="day-specific-content"><h4 class="section-title">Fé de João de Deus em Cristo e na Igreja</h4><p>Para ti, São João, o Deus que te criou foi, desde a tua conversão, o centro da tua existência: "vendo a Deus todos os dias" e "sendo forte e constante ao seu serviço". Esse "Deus, preferido a todas as coisas do mundo" era Deus encarnado em Cristo, "a quem desejavas servir e agradar". Assim reafirmavas tua fé em Deus, por Cristo, com a Igreja: "aceitando tudo o que tinha e acreditava a Santa Madre Igreja; daqui não fugias, firmavas com o teu selo e fechavas com a tua chave". Esta era a tua fé feita vida. Concede-me que eu a compreenda e viva como tu. Amém.</p></div>`
            },
            {
                day: "Dia 2",
                title: "Segundo Dia - Esperança feita confiança",
                content: `<div class="day-specific-content"><h4 class="section-title">Esperança feita confiança</h4><p>Tu, São João de Deus, expressas assim a tua esperança: "o vosso irmão menor, João de Deus, se Deus quiser, morrendo, mas aceitando e em Deus esperando". Para ti, Deus é o Senhor, nosso destino: "Eu espero em Deus, que um dia será descanso para as nossas almas". A tua esperança era confiança existencial e salvífica em Deus e desconfiança em nós: "não confiar em si próprio, mas sim e só em Jesus Cristo, pois Ele conhece o meu coração e me dará a vida eterna". Com a tua esperança e a tua fé ajuda-me a ver Deus como pai e a confiar no seu amor. Amém.</p></div>`
            },
            {
                day: "Dia 3",
                title: "Terceiro Dia - Caridade de João de Deus",
                content: `<div class="day-specific-content"><h4 class="section-title">Caridade de João de Deus</h4><p>Tu, São João de Deus, escreveste isto: "tende sempre caridade, que onde não há caridade não há Deus". Esta caridade será misericordiosa: "se víssemos quão grande é a misericórdia de Deus, nunca deixaríamos de fazer o bem enquanto pudéssemos". A tua espiritualidade refere-se aos necessitados como representantes de Cristo sofredor. Que grande mistério e que grande fé! São João de Deus, ajuda-me a aceitá-lo, ainda que o não compreenda. Amém.</p></div>`
            },
            {
                day: "Dia 4",
                title: "Quarto Dia - João de Deus e a salvação",
                content: `<div class="day-specific-content"><h4 class="section-title">João de Deus e a salvação</h4><p>Tu, S. João de Deus, desejavas a salvação de todos como a tua própria. Essa salvação é dom: "Jesus Cristo vos guarde e salve"; e é responsabilidade do homem: "viver santamente para aquele que quer salvar-se". Para ti, "esta vida é uma contínua guerra com o mundo, o demônio e a carne"; e se "o Senhor nos julgará tal como nos encontrar, então será bom que nos emendemos enquanto é tempo". Ajuda-me, S. João de Deus, a dar sentido à minha vida. Amém.</p></div>`
            },
            {
                day: "Dia 5",
                title: "Quinto Dia - João de Deus, pobre, mas confiado",
                content: `<div class="day-specific-content"><h4 class="section-title">João de Deus, pobre, mas confiado</h4><p>Que matemáticas eram as tuas? "Estou com muita necessidade, empenhado e cativo só por Jesus Cristo. São muitos os pobres, e como não os posso socorrer, estou muito triste". Mas depois acrescentas: "confio apenas em Jesus Cristo, que me desempenhará; Deus tudo mantém e a tudo provê em cada dia. Dar aqui, dar além, é sempre ganhar". Que eu aprenda a tua sensibilidade, o teu critério transcendente e saiba imitar-te. Amém.</p></div>`
            },
            {
                day: "Dia 6",
                title: "Sexto Dia - João de Deus, esmoler de Deus",
                content: `<div class="day-specific-content"><h4 class="section-title">João de Deus, esmoler de Deus</h4><p>Em cada dia, João de Deus, o teu pregão era: "fazei o bem a vós próprios, dando esmola aos pobres". Para ti, a esmola enriquece quem dá e a quem recebe. "A esmola está diante de Jesus, rogando por vós; e os anjos escrevem-na no livro da tua vida. Quem não dá do que tem a este bendito mercador, que faz tão boa mercadoria!". São João de Deus, abre a minha mente, o meu coração e a minha mão. Amém.</p></div>`
            },
            {
                day: "Dia 7",
                title: "Sétimo Dia - João de Deus, escravo de Jesus e Maria",
                content: `<div class="day-specific-content"><h4 class="section-title">João de Deus, escravo de Jesus e Maria</h4><p>Jesus e Maria estavam no centro do teu ser, São João: "em nome de Nosso Senhor, e de Nossa Senhora, o menor escravo de todos os escravos". Na tua vida, desejavas sempre servi-Los e agradar-Lhes: "seja tudo para o Seu serviço". Como ideal, querias tomar como exemplo a Virgem Maria, a qual tecia e trabalhava todo o dia e à noite e parte do dia rezava no seu retiro. São João de Deus, que eu saiba refugiar-me em Jesus e Maria e Eles sejam o meu ideal de cristão. Amém.</p></div>`
            },
            {
                day: "Dia 8",
                title: "Oitavo Dia - João de Deus, fundador para os pobres",
                content: `<div class="day-specific-content"><h4 class="section-title">João de Deus, fundador para os pobres</h4><p>Para ti, São João de Deus, pobres eram os maltratados, abandonados, enfermos, incuráveis, chagados, que, ao vê-los, te quebravam o coração. Escreveste: "desvelar-se em cuidar deles, fazer-lhes bem e caridade, vesti-los e curá-los". Do teu exemplo, nascem os teus Irmãos Hospitaleiros e surge a tua obra de caridade; e desde há 4 séculos que continuas entre os pobres por meio dos que continuam a tua missão. Que o teu exemplo não se desvirtue e os pobres possam contar com mãos e corações a seu lado. Amém.</p></div>`
            },
            {
                day: "Dia 9",
                title: "Nono Dia - João de Deus, padroeiro dos bombeiros",
                content: `<div class="day-specific-content"><h4 class="section-title">João de Deus, padroeiro dos bombeiros</h4><p>Deste o teu exemplo, São João de Deus, com tua coragem, abnegação e desapego da própria vida. Por isso fostes proclamado patrono dos bombeiros. Sê nosso intercessor, para que, antes dos interesses sociais, econômicos e políticos, sejamos anjos de resgate para aqueles que sofrem; que as nossas viaturas sejam santuários; e para que atuemos com responsabilidade e ética, com profissionalismo e técnica, com espírito de serviço, com respeito na defesa da vida. Amém.</p><p class="mt-4 font-semibold">São João de Deus, rogai por nós!</p></div>`
            }
        ]
    },

    // MARÇO
    sao_patricio: {
        saintName: "São Patrício",
        novenaTitle: "Novena a São Patrício",
        description: "Novena em honra a São Patrício, apóstolo da Irlanda. Reza-se de 8 a 16 de março, preparando a festa de 17 de março.",
        image: "https://i.pinimg.com/1200x/de/2b/43/de2b43f9bae8de756f6c18660e63f48a.jpg",
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



    // ABRIL
    sao_vicente_ferrer: {
        saintName: "São Vicente Ferrer",
        novenaTitle: "Novena de São Vicente Ferrer",
        description: "Novena em honra a São Vicente Ferrer, religioso dominicano aclamado como 'Anjo do Apocalipse'. Festa: 5 de abril.",
        image: "https://i.pinimg.com/736x/e9/43/97/e943975488f8321ecfebee550dd3435c.jpg",
        initialPrayer: `<div class="prayer-block">
            <h4 class="section-title">Ato de Contrição</h4>
            <p>Meu Senhor Jesus Cristo, Deus e homem verdadeiro, meu Criador e Redentor, em cujos mistérios de fé creio; de quem espero, por vossa misericórdia e pelos méritos infinitos de vossa Paixão e Morte, ser eternamente feliz; a quem amo sobre todas as coisas, mais do que à minha própria vida: pesa-me, meu Deus, de vos ter ofendido por serdes vós quem sois e por vossa infinita bondade. Quisera antes perder mil vidas, se as tivesse, que tornar a vos ofender. Proponho firmemente satisfazer, com o auxílio da vossa divina graça, por minhas ofensas, confessar-me e afastar-me de todas as ocasiões de vos ofender. Espero, por vossa infinita misericórdia, que me haveis de perdoar todos os meus pecados e me dareis a graça de perseverar firme nestes propósitos, empenhando-me no vosso santo serviço até a morte. Amém.</p>
            <h4 class="section-title mt-4">Oração para todos os dias</h4>
            <p>Glorioso pai São Vicente, digníssimo filho de São Domingos, destinado por Deus a serdes pregador das nações! Vós merecestes que vossa alma fosse adornada com todas as virtudes e dons do Espírito Santo, para que, com vossa doutrina e exemplo, convertêsseis os pecadores à verdadeira penitência e atraísseis os infiéis à fé de Jesus Cristo: humildemente vos peço que intercedais, por vossos poderosos méritos, junto ao nosso Deus e Senhor, para que, afastando de mim tudo o que lhe desagrada, me conceda a graça de imitar vossas virtudes e com elas me empenhar no seu santo serviço até o último momento da minha vida. Amém. </p>
        </div>`,
        finalPrayer: `<div class="prayer-block">
            <h4 class="section-title">Oração Final (Glorioso apóstolo de Valência)</h4>
            <p>Glorioso apóstolo de Valência, São Vicente! Vós conheceis as necessidades de minha alma e o consolo de que necessita, por isso vos suplico humildemente que, por vossos poderosos méritos, intercedais por mim a Deus, a fim de que a piedade divina me conceda as virtudes e a graça que peço nesta novena e, na hora da minha morte, me conserve a consciência e a fala para confessar minhas culpas, me conceda uma perfeita contrição delas e uma caridade ardente, de sorte que eu possa dizer com toda a segurança e de coração puro: “Em vossas mãos, Senhor, entrego o meu espírito. Vós, que sois bendito e glorioso pelos séculos dos séculos”. Amém.</p>
        </div>`,
        days: [
            {
                day: "Dia 1",
                title: "Primeiro Dia - Temor de Deus",
                content: `<div class="day-specific-content">
                    <h4 class="section-title">Oração do Dia</h4>
                    <p>Dulcíssimo Jesus, que, desejando que todos os homens, com a ajuda da vossa divina graça, trabalhassem com temor e tremor por sua eterna felicidade, lhes haveis manifestado sempre, com vossas palavras e exemplos, o fundamento da verdadeira sabedoria neste mesmo temor, e que em vosso servo São Vicente Ferrer lhes oferecestes um modelo prático deste precioso dom do Espírito Santo, mandando-o anunciar a todos os povos a proximidade do vosso Juízo, para que os pecadores se retratassem de suas ofensas e fizessem uma salutar penitência: concedei-me, meu Deus, pela intercessão do mesmo santo, que, penetrada minh’alma deste santo temor, e tendo diante dos olhos vossos altos juízos, fuja de todas as ocasiões de pecar e me faça digno de vossas misericórdias. Amém.</p>
                    <p class="mt-4 italic">Medita-se o dia do Juízo e procura-se imprimir na alma o santo temor de Deus.</p>
                    <h4 class="section-title mt-4">Versos de Misericórdia</h4>
                    <p class="mt-2">Misericórdia, Senhor, e olhai com piedade para o meu coração.</p>
                    <p>Misericórdia, meu Deus, pois está enferma a minha alma, e desmaiadas e perdidas as suas virtudes.</p>
                    <p>Misericórdia, Senhor, e atendei-me, humilhado e abatido por meus inimigos.</p>
                    <p>Misericórdia, Senhor, pois estou em angústias e, tendo provocado contra mim a vossa justiça, me acho confundido, e se estremece o meu corpo.</p>
                    <p>Misericórdia, Senhor, pois me atormenta o inimigo, e todo dia se levanta contra mim.</p>
                    <p>Misericórdia, Senhor, pois em vós confia a minha alma e se alegra em vós o meu coração. Glória ao Pai etc.</p>
                    <h4 class="section-title mt-4">Oração a São Vicente</h4>
                    <p>Amado pai São Vicente, que, possuído do santo temor de Deus, destes frutos abundantes de verdadeira sabedoria e, pregando aos pecadores e infiéis, os alumiastes nos verdadeiros caminhos da eterna felicidade: alcançai-me a graça de, temendo a Deus, trilhar o caminho das virtudes de que tantos e tão repetidos exemplos nos destes, o único que conduz ao objeto de minha felicidade, que consiste em possuir a Deus mesmo. Amém.</p>
                    <p class="mt-4 font-semibold">Rezar 3 Pai-nosso, Ave-Maria e Glória.</p>
                </div>`
            },
            {
                day: "Dia 2",
                title: "Segundo Dia - Humildade",
                content: `<div class="day-specific-content">
                    <h4 class="section-title">Oração do Dia</h4>
                    <p>Dulcíssimo Jesus, que desejoso de plantar no coração dos homens a verdadeira humildade, não duvidastes em tomar forma de servo, humilhando-vos até a morte, e morte de Cruz, e que em vosso servo São Vicente renovastes frequentemente exemplos de humildade com os quais eu abatesse meu amor próprio: iluminai, meu Deus, minh’alma, para que, conhecendo a minha miséria, fuja do orgulho e da vaidade, seus inimigos capitais, e deseje unicamente o desprezo e a humilhação, para que assim, segundo a vossa promessa, eu seja um dia exaltado e glorificado por vós entre os verdadeiros humildes na glória. Amém.</p>
                    <p class="mt-4 italic">Medita-se sobre o nada que cada um é, e pede-se a Deus a verdadeira humildade.</p>
                    <h4 class="section-title mt-4">Versos de Misericórdia</h4>
                    <p class="mt-2">Misericórdia, Senhor, e olhai com piedade para o meu coração. (Repetir os versos do primeiro dia)</p>
                    <h4 class="section-title mt-4">Oração a São Vicente</h4>
                    <p>Amado pai São Vicente, espelho claríssimo de humildade, que, louvado e aclamado por pontífices, reis, príncipes e povos, que porfiavam em vos cumular de honras, soubestes conservar-vos humilde, despido de todo orgulho e vaidade: alcançai-me esta virtude, com a qual, a vosso exemplo, eu despreze o vício da soberba e, vendo o meu nada e a minha miséria, conheça que só Deus é grande, o único a quem se devem a honra e a glória, e dele espere a glória que tem preparada para os humildes e mansos de coração. Amém.</p>
                    <p class="mt-4 font-semibold">Rezar 3 Pai-nosso, Ave-Maria e Glória.</p>
                </div>`
            },
            {
                day: "Dia 3",
                title: "Terceiro Dia - Caridade",
                content: `<div class="day-specific-content">
                    <h4 class="section-title">Oração do Dia</h4>
                    <p>Dulcíssimo Jesus, que por amor aos homens descestes do céu à terra, vos vestistes de nossa natureza humana e padecestes morte atroz em uma Cruz, para deste modo lhes chamar a atenção, à força de benefícios, ao vosso amor e serviço, dando-lhes além disso um modelo de caridade heroica em vosso servo São Vicente, com cuja virtude tanto soube ele vos agradar e servir: vos suplico inflameis minha vontade com o fogo desta caridade, para que somente a vós ame, somente a vós sirva e por vós despreze minha própria vida, lucrando-a assim para minha própria felicidade. Amém.</p>
                    <p class="mt-4 italic">Medita-se o amor que nos tem Deus e a obrigação que temos nós de corresponder a ele. </p>
                    <h4 class="section-title mt-4">Versos de Misericórdia</h4>
                    <p class="mt-2">Misericórdia, Senhor... (Repetir os versos do primeiro dia)</p>
                    <h4 class="section-title mt-4">Oração a São Vicente</h4>
                    <p>Amado pai São Vicente, que, qual serafim abrasado de amor a Deus, dia e noite meditáveis sua santa Lei, a fim de em tudo lhe serdes grato; indagáveis sua divina vontade para a cumprir e em contínuos louvores ao Senhor manifestáveis vossa caridade: abrasai minh’alma com o fogo desta heroica virtude, para que, imitando a vós, eu sirva a Deus e o ame com todo o meu coração, a fim de que, desprezando todas as coisas por amor a Ele, mereça alcançar sua graça e sua glória. Amém.</p>
                    <p class="mt-4 font-semibold">Rezar 3 Pai-nosso, Ave-Maria e Glória.</p>
                </div>`
            },
            {
                day: "Dia 4",
                title: "Quarto Dia - Castidade",
                content: `<div class="day-specific-content">
                    <h4 class="section-title">Oração do Dia</h4>
                    <p>Dulcíssimo Jesus, que, agradando-vos de tal modo da virtude da castidade, nascestes de Mãe Virgem e distinguistes com particular amor ao vosso virginal discípulo São João, e, sobre estes exemplos, nos destes em vosso servo São Vicente um anjo nesta santa virtude, para que, a exemplo dele, sejamos puros e castos em obras, palavras e pensamentos: concedei-me, meu Jesus, por sua poderosa intercessão, afastar do meu coração todo desejo impuro, ser casto em obras e palavras e, assim, me tornar digno de entoar aquele doce cântico que cantam os puros e castos nos Céu. Amém.</p>
                    <p class="mt-4 italic">Medita-se a beleza da pureza, e pede-se ao Senhor que no-la dê de corpo e de alma.</p>
                    <h4 class="section-title mt-4">Versos de Misericórdia</h4>
                    <p class="mt-2">Misericórdia, Senhor... (Repetir os versos do primeiro dia)</p>
                    <h4 class="section-title mt-4">Oração a São Vicente</h4>
                    <p>Amado pai São Vicente, espelho claríssimo de pureza e castidade, que conservastes com o auxílio da graça todo o transcurso de vossa vida, afastando-vos das ocasiões perigosas que os inimigos da alma escolhem para a enredar e perder, vivendo sempre mortificado em vossos sentidos e contendo vossas paixões com o jejum e a penitência: alcançai-me que, mortificando minhas paixões e apetites e mantendo-me sempre puro e casto em obras, palavras e pensamentos, seja templo vivo do Espírito Santo. Amém.</p>
                    <p class="mt-4 font-semibold">Rezar 3 Pai-nosso, Ave-Maria e Glória.</p>
                </div>`
            },
            {
                day: "Dia 5",
                title: "Quinto Dia - Mortificação",
                content: `<div class="day-specific-content">
                    <h4 class="section-title">Oração do Dia</h4>
                    <p>Dulcíssimo Jesus, que, tendo vindo ao mundo para redimir o homem e lhe ensinar os caminhos da salvação com vossos exemplos e doutrinas, o guiastes pelo da mortificação, jejuando, velando, passando fome, nudez e cansaço, e lhe destes por modelo desta virtude o vosso servo São Vicente, para que, como ele, mortificássemos nossa carne e seus apetites: infundi, meu Salvador, em minha alma vivos desejos de vos imitar, para que, mortificados meus apetites e paixões, e macerada minha carne com a penitência, satisfaça de algum modo à vossa justiça por minhas culpas, e mereça se inscrito no Livro da Vida. Amém.</p>
                    <p class="mt-4 italic">Medita-se a necessidade de mortificar a carne para que ela não se rebele contra o espírito.</p>
                    <h4 class="section-title mt-4">Versos de Misericórdia</h4>
                    <p class="mt-2">Misericórdia, Senhor... (Repetir os versos do primeiro dia)</p>
                    <h4 class="section-title mt-4">Oração a São Vicente</h4>
                    <p>Amado pai São Vicente, que, para ter sempre sujeitos os vossos apetites e paixões, os tivestes durante toda a vida cravados na Cruz de Jesus Cristo, mortificando-os com jejuns, abstinências, cilícios, disciplinas e demais gêneros de penitência com os quais pudestes vencer os inimigos da nossa salvação: alcançai-me aquele espírito de mortificação que Jesus Cristo nos veio ensinar, para que, crucificado com Ele na terra, mereça ressuscitar com Ele em sua glória. Amém. </p>
                    <p class="mt-4 font-semibold">Rezar 3 Pai-nosso, Ave-Maria e Glória.</p>
                </div>`
            },
            {
                day: "Dia 6",
                title: "Sexto Dia - Paciência",
                content: `<div class="day-specific-content">
                    <h4 class="section-title">Oração do Dia</h4>
                    <p>Dulcíssimo Jesus, homem de dores e sofrimentos, que os tolerastes com a mais heroica paciência sob o peso dos pecados dos homens; que, longe de abrir a boca para vos queixar dos golpes, injúrias, opróbrios e contusões com que indignamente fostes tratado, rezastes pelos mesmos inimigos que assim vos mortificavam e crucificavam; que, por sobre isso, nos quisestes dar por admirável modelo de paciência o vosso servo São Vicente nos trabalhos que padeceu, a fim de que nos envergonhássemos do nosso pouco sofrimento: dai-me, meu Deus, esta paciência, para que, imitando a vós, eu sofra resignado em vossa divina vontade as ofensas e injúrias dos meus semelhantes e os trabalhos que de um modo ou de outro me sobrevenham, e assim se cumpra em mi o que disse vosso Apóstolo: “Se com Cristo padecemos, com Cristo seremos glorificados”. Amém.</p>
                    <p class="mt-4 italic">Medita-se a resignação que teve Jesus Cristo em meio aos seus tormentos e à sua morte, e o pouco sofrimento que temos em nossos trabalhos.</p>
                    <h4 class="section-title mt-4">Versos de Misericórdia</h4>
                    <p class="mt-2">Misericórdia, Senhor... (Repetir os versos do primeiro dia)</p>
                    <h4 class="section-title mt-4">Oração a São Vicente</h4>
                    <p>Amado pai São Vicente, perfeito imitador de Jesus Cristo crucificado, que sofrestes com a maior paciência e mansidão tanto os grandes trabalhos e doenças com que Deus punha à prova a vossa virtude quanto os maus-tratos, os falsos testemunhos, as calúnias e as burlas grosseiras de homens perdidos, de mulheres escandalosas e até de alguns de vossos discípulos, perdoando-os, à semelhança do mesmo Jesus Cristo, e dispensando-lhes favores e benefícios: alcançai-me imitar esta mesma mansidão e paciência, a fim de dizer verdadeiramente ao meu Deus: “Perdoai-nos as nossas ofensas assim como nós perdoamos a quem nos tem ofendido”. Amém.</p>
                    <p class="mt-4 font-semibold">Rezar 3 Pai-nosso, Ave-Maria e Glória.</p>
                </div>`
            },
            {
                day: "Dia 7",
                title: "Sétimo Dia - Oração",
                content: `<div class="day-specific-content">
                    <h4 class="section-title">Oração do Dia</h4>
                    <p>Dulcíssimo Jesus, que, tendo persuadido os homens da necessidade de orar, e havendo lhes ensinado como fazê-lo, lhes destes contínuos exemplos de oração e quisestes que, dedicado sempre a esta virtude, se verificasse no vosso servo São Vicente o que dizia São Paulo: “Somos cidadãos do céu”, para que nós, seguindo-lhe os passos, nos acostumássemos a este santo exercício: movei, meu Jesus, minh’alma a dedicar-se toda à oração, merecendo por meio dela vencer os inimigos de minha salvação eterna e suportar as tribulações por que devo passar para ser feliz. Amém.</p>
                    <p class="mt-4 italic">Medita-se a necessidade que temos dos auxílios de Deus, que se conseguem por meio da oração.</p>
                    <h4 class="section-title mt-4">Versos de Misericórdia</h4>
                    <p class="mt-2">Misericórdia, Senhor... (Repetir os versos do primeiro dia)</p>
                    <h4 class="section-title mt-4">Oração a São Vicente</h4>
                    <p>Amado pai, São Vicente, que, penetrado da bondade e misericórdia do Senhor para com os homens, e certo de que somente de suas benéficas mãos lhes hão de vir os auxílios e a graça para o amarem, servirem e vencerem os inimigos da salvação, vos eleváveis à mais alta contemplação a fim de lhe render graças por tão incomparáveis benefícios: alcançai-me que, penetrado também eu destes mesmos sentimentos, seja homem de oração de tal modo fervorosa, que consiga quanto me for necessário à salvação de minha alma. Amém.</p>
                    <p class="mt-4 font-semibold">Rezar 3 Pai-nosso, Ave-Maria e Glória.</p>
                </div>`
            },
            {
                day: "Dia 8",
                title: "Oitavo Dia - Amor ao Próximo",
                content: `<div class="day-specific-content">
                    <h4 class="section-title">Oração do Dia</h4>
                    <p>Dulcíssimo Jesus, que por amor aos homens quisestes, sendo Deus, nascer verdadeiro homem, viver e conversar com eles, lhes ensinar os caminhos da verdadeira felicidade e morrer por eles, exemplo que, unido ao do vosso servo São Vicente, que se desfazia pelo bem de seus semelhantes, nos atesta o amor mútuo que deve reinar entre os homens: comunicai-me, meu Deus, desejos eficazes de amar os meus semelhantes, incluídos meus próprios inimigos, e de lhes fazer todo o bem possível, assim temporal como espiritual, de modo que eu mereça ouvir um dia de vossa boca o que hão de ouvir os vossos eleitos: “Vinde, benditos de meu Pai, para o reino que vos tenho preparado”. Amém.</p>
                    <p class="mt-4 italic">Medita-se a obrigação que temos de amar ao próximo, pois todos somos filhos do mesmo Pai, que é Deus. </p>
                    <h4 class="section-title mt-4">Versos de Misericórdia</h4>
                    <p class="mt-2">Misericórdia, Senhor... (Repetir os versos do primeiro dia)</p>
                    <h4 class="section-title mt-4">Oração a São Vicente</h4>
                    <p>Amado pai São Vicente, que, abrasado de amor aos vossos semelhantes, lhes procuráveis todos os bens possíveis por meio de vossa pregação, orações e penitências pela salvação eterna delas, e com vossos estupendos milagres por seu bem temporal: vos suplico me alcanceis do Senhor iguais desejos de me empenhar na salvação de meus irmãos, ainda que sejam os meus maiores inimigos, amando-os de todo o coração e procurando-lhes a verdadeira felicidade, a fim de que eu receba o prêmio devido no reino dos céus. Amém.</p>
                    <p class="mt-4 font-semibold">Rezar 3 Pai-nosso, Ave-Maria e Glória.</p>
                </div>`
            },
            {
                day: "Dia 9",
                title: "Nono Dia - Penitência",
                content: `<div class="day-specific-content">
                    <h4 class="section-title">Oração do Dia</h4>
                    <p>Dulcíssimo Jesus, que, cheio de bondade, não quereis a morte do pecador, mas que se converta e viva, proporcionando-lhe o remédio da conversão pela penitência e a detestação de suas culpas, e dando-lhe um vivo exemplo no vosso servo São Vicente, o qual, sendo embora inocente, castigava continuamente o corpo e o reduzia à obediência para que eu aprendesse a castigar o meu, que tantas vezes tem pecado: concedei-me, Senhor, fortaleza para satisfazer com obras de penitência as muitas ofensas que vos tenho feito e, assim justificado como o publicano, mereça o vosso perdão, a vossa graça e a vossa glória.</p>
                    <p class="mt-4 italic">Medita-se a necessidade de fazer penitência em satisfação dos próprios pecados.</p>
                    <h4 class="section-title mt-4">Versos de Misericórdia</h4>
                    <p class="mt-2">Misericórdia, Senhor... (Repetir os versos do primeiro dia)</p>
                    <h4 class="section-title mt-4">Oração a São Vicente</h4>
                    <p>Amado pai São Vicente, espelho claríssimo de inocência, que, não tendo culpa grave de que chorar, derramáveis por defeitos leves e para deles vos precaver copiosas lágrimas de dor e castigáveis o vosso inocente corpo com o jejum, o cilício e as disciplinas, no mais das vezes até ao sangue: alcançai-me verdadeiro conhecimento de meus pecados, dor intensíssima de ter ofendido a Deus e ânimo resoluto de satisfazer ao Senhor com obras de penitência, a fim de que eu pague nesta vida as penas que por eles mereço e, assim purificado e santificado, possa entrar no reino da glória. Amém.</p>
                    <p class="mt-4 font-semibold">Rezar 3 Pai-nosso, Ave-Maria e Glória.</p>
                </div>`
            }
        ]
    },

    joao_batista_la_salle: {
        saintName: "São João Batista de La Salle",
        novenaTitle: "Novena a São João Batista de La Salle",
        description: "Padroeiro dos Educadores e Fundador dos Irmãos Lassalistas. (29 de março a 7 de abril)",
        image: "https://th.bing.com/th/id/R.4ff119f01df9bff97b9baf010591458f?rik=0JiQUu13fapdgw&pid=ImgRaw&r=0",
        imageObjectPosition: "top",
        initialPrayer: `<div class="prayer-block">
            <h4 class="section-title">Oração Inicial para todos os dias</h4>
            <p>Ó Deus, que para educar os pobres na vida cristã e confirmar os jovens no caminho da verdade, escolhestes o vosso fiel servo São João Batista de La Salle e por meio dele fundastes na Igreja uma nova família religiosa, concedei-nos, por sua intercessão e exemplo, buscar a vossa glória na salvação das almas para podermos participar com ele da vossa felicidade no céu. Por Cristo nosso Senhor. Amém.</p>
        </div>`,
        finalPrayer: `<div class="prayer-block">
            <h4 class="section-title">Oração Final para todos os dias</h4>
            <p>São João Batista de La Salle, rogai por nós! Viva Jesus em nossos corações para sempre! Amém.</p>
        </div>`,
        days: [
            {
                day: "Dia 1",
                title: "Primeiro Dia - Vocação e Entrega",
                content: `<div class="day-specific-content">
                    <p>São João Batista de La Salle, que desde cedo ouvistes o chamado de Deus e, embora de família nobre, soubestes renunciar a todas as honras para servir aos mais humildes. Ensinai-nos a ouvir a voz do Senhor em nossos corações e a responder com a mesma generosidade e prontidão.</p>
                    <p class="mt-4"><strong>Pai Nosso, Ave Maria e Glória ao Pai.</strong></p>
                </div>`
            },
            {
                day: "Dia 2",
                title: "Segundo Dia - Amor aos Pobres",
                content: `<div class="day-specific-content">
                    <p>São João Batista de La Salle, que vistes no rosto de cada criança pobre a imagem do próprio Cristo. Alcançai-nos a graça de um coração compassivo, que saiba ver as necessidades do próximo e agir com caridade verdadeira, sem buscar recompensa humana.</p>
                    <p class="mt-4"><strong>Pai Nosso, Ave Maria e Glória ao Pai.</strong></p>
                </div>`
            },
            {
                day: "Dia 3",
                title: "Terceiro Dia - Zelo pela Educação",
                content: `<div class="day-specific-content">
                    <p>São João Batista de La Salle, que compreendestes que a educação é o caminho para a libertação e a santidade. Intercedei por todos os professores e educadores, para que exerçam sua missão com paciência, sabedoria e amor aos seus alunos.</p>
                    <p class="mt-4"><strong>Pai Nosso, Ave Maria e Glória ao Pai.</strong></p>
                </div>`
            },
            {
                day: "Dia 4",
                title: "Quarto Dia - Humildade e Abnegação",
                content: `<div class="day-specific-content">
                    <p>São João Batista de La Salle, que para estar mais próximo dos teus mestres e alunos, fizeste-te pobre com os pobres. Dai-nos a virtude da humildade, para que não busquemos os primeiros lugares, mas saibamos servir com alegria escondida.</p>
                    <p class="mt-4"><strong>Pai Nosso, Ave Maria e Glória ao Pai.</strong></p>
                </div>`
            },
            {
                day: "Dia 5",
                title: "Quinto Dia - Fé e Providência",
                content: `<div class="day-specific-content">
                    <p>São João Batista de La Salle, que confiaste inteiramente na Divina Providência, mesmo nos momentos de maior provação e escassez. Aumentai nossa fé, para que em meio às dificuldades da vida, saibamos que Deus nunca nos abandona.</p>
                    <p class="mt-4"><strong>Pai Nosso, Ave Maria e Glória ao Pai.</strong></p>
                </div>`
            },
            {
                day: "Dia 6",
                title: "Sexto Dia - Espírito de Oração",
                content: `<div class="day-specific-content">
                    <p>São João Batista de La Salle, que fazias de cada ação uma oração e buscavas no silêncio a força para o trabalho. Ensinai-nos a arte de rezar sempre, transformando nossa rotina em um diálogo contínuo com o Criador.</p>
                    <p class="mt-4"><strong>Pai Nosso, Ave Maria e Glória ao Pai.</strong></p>
                </div>`
            },
            {
                day: "Dia 7",
                title: "Sétimo Dia - Formação de Professores",
                content: `<div class="day-specific-content">
                    <p>São João Batista de La Salle, que fundaste escolas normais para que os mestres pudessem ensinar com excelência e santidade. Pedimos por todos os que formam as novas gerações, para que sejam luz e sal na vida de seus discípulos.</p>
                    <p class="mt-4"><strong>Pai Nosso, Ave Maria e Glória ao Pai.</strong></p>
                </div>`
            },
            {
                day: "Dia 8",
                title: "Oitavo Dia - Fidelidade à Igreja",
                content: `<div class="day-specific-content">
                    <p>São João Batista de La Salle, que mesmo incompreendido por muitos, permaneceste sempre fiel à Santa Madre Igreja e obediente aos teus superiores. Concedei-nos o amor à nossa fé e a coragem de defendê-la com mansidão.</p>
                    <p class="mt-4"><strong>Pai Nosso, Ave Maria e Glória ao Pai.</strong></p>
                </div>`
            },
            {
                day: "Dia 9",
                title: "Nono Dia - Perseverança Final",
                content: `<div class="day-specific-content">
                    <p>São João Batista de La Salle, que terminaste a tua carreira terrena com as palavras: 'Adoro em tudo a conduta de Deus para comigo'. Alcançai-nos a graça da perseverança final, para que possamos um dia louvar a Deus eternamente convosco no céu.</p>
                    <p class="mt-4"><strong>Pai Nosso, Ave Maria e Glória ao Pai.</strong></p>
                </div>`
            }
        ]
    },

    santa_julia_billiart: {
        saintName: "Santa Júlia Billiart",
        novenaTitle: "Novena a Santa Júlia Billiart",
        description: "A Santa do Sorriso e fundadora das Irmãs de Nossa Senhora. (30 de março a 8 de abril)",
        image: "https://institutohesed.org.br/wp-content/uploads/2019/04/Santa-Julia-Billiart.jpg",
        imageObjectPosition: "top",
        initialPrayer: `<div class="prayer-block">
            <h4 class="section-title">Oração Inicial para todos os dias</h4>
            <p>Ó Deus, que cumulastes Santa Júlia Billiart com o dom de uma caridade sem limites e de uma confiança heróica na vossa bondade paternal, concedei-nos, por sua intercessão, a graça de servir-vos fielmente nos nossos irmãos e de saber descobrir em todos os acontecimentos da vida a vossa mão providente. Ensinai-nos a repetir com ela, de todo o coração: “Quão bom é o bom Deus!”. Por Cristo nosso Senhor. Amém.</p>
        </div>`,
        finalPrayer: `<div class="prayer-block">
            <h4 class="section-title">Oração Final para todos os dias</h4>
            <p>Santa Júlia Billiart, intercedei por nós junto ao Pai, para que tenhamos um coração alegre e generoso no serviço ao próximo. Amém.</p>
        </div>`,
        days: [
            {
                day: "Dia 1",
                title: "Primeiro Dia - Confiança no 'Bom Deus'",
                content: `<div class="day-specific-content">
                    <p>Santa Júlia, que repetias constantemente 'Quão bom é o bom Deus!', alcançai-nos a graça de uma confiança filial e absoluta na Divina Providência, especialmente nos momentos de escuridão e incerteza.</p>
                    <p class="mt-4"><strong>Pai Nosso, Ave Maria e Glória ao Pai.</strong></p>
                </div>`
            },
            {
                day: "Dia 2",
                title: "Segundo Dia - Paciência na Enfermidade",
                content: `<div class="day-specific-content">
                    <p>Santa Júlia, que durante 22 anos de paralisia aceitastes o sofrimento com serenidade e fé, ensinai-nos a oferecer nossas dores e limitações como um sacrifício de amor pela salvação das almas.</p>
                    <p class="mt-4"><strong>Pai Nosso, Ave Maria e Glória ao Pai.</strong></p>
                </div>`
            },
            {
                day: "Dia 3",
                title: "Terceiro Dia - Zelo Apostólico",
                content: `<div class="day-specific-content">
                    <p>Santa Júlia, que mesmo acamada ensináveis o catecismo às crianças, despertai em nós o desejo ardoroso de transmitir a fé e o amor de Cristo a todos aqueles que cruzarem o nosso caminho.</p>
                    <p class="mt-4"><strong>Pai Nosso, Ave Maria e Glória ao Pai.</strong></p>
                </div>`
            },
            {
                day: "Dia 4",
                title: "Quarto Dia - Coragem nas Perseguições",
                content: `<div class="day-specific-content">
                    <p>Santa Júlia, que enfrentastes com bravura os perigos da Revolução para proteger a Igreja e os sacerdotes, dai-nos a coragem de professar nossa fé com firmeza diante dos desafios do mundo moderno.</p>
                    <p class="mt-4"><strong>Pai Nosso, Ave Maria e Glória ao Pai.</strong></p>
                </div>`
            },
            {
                day: "Dia 5",
                title: "Quinto Dia - Gratitude pela Cura",
                content: `<div class="day-specific-content">
                    <p>Santa Júlia, que ao ser curada miraculosamente dedicastes cada passo e cada fôlego à glória de Deus, ensinai-nos a ser gratos por todas as graças recebidas e a usá-las para o bem comum.</p>
                    <p class="mt-4"><strong>Pai Nosso, Ave Maria e Glória ao Pai.</strong></p>
                </div>`
            },
            {
                day: "Dia 6",
                title: "Sexto Dia - O Sorriso Santo",
                content: `<div class="day-specific-content">
                    <p>Santa Júlia, cujo sorriso irradiava a paz de Cristo, ajudai-nos a manter a alegria interior mesmo nas provações, sendo testemunhas da esperança cristã para os que sofrem.</p>
                    <p class="mt-4"><strong>Pai Nosso, Ave Maria e Glória ao Pai.</strong></p>
                </div>`
            },
            {
                day: "Dia 7",
                title: "Sétimo Dia - Amor à Eucaristia",
                content: `<div class="day-specific-content">
                    <p>Santa Júlia, que buscavas na Santa Comunhão a força para tua missão educadora, fazei com que amemos cada vez mais Jesus Sacramentado, centro e fonte de toda a vida cristã.</p>
                    <p class="mt-4"><strong>Pai Nosso, Ave Maria e Glória ao Pai.</strong></p>
                </div>`
            },
            {
                day: "Dia 8",
                title: "Oitavo Dia - Fundadora e Mãe",
                content: `<div class="day-specific-content">
                    <p>Santa Júlia, que fundastes as Irmãs de Nossa Senhora para educar os pobres, intercedei pelas vocações religiosas, para que muitos jovens respondam ao chamado de servir a Deus nos mais necessitados.</p>
                    <p class="mt-4"><strong>Pai Nosso, Ave Maria e Glória ao Pai.</strong></p>
                </div>`
            },
            {
                day: "Dia 9",
                title: "Nono Dia - Perseverança Final",
                content: `<div class="day-specific-content">
                    <p>Santa Júlia, que viveste em constante união com o Sagrado Coração de Jesus, alcançai-nos a graça da perseverança final para que, após esta vida, possamos cantar convosco: 'Quão bom é o bom Deus' por toda a eternidade.</p>
                    <p class="mt-4"><strong>Pai Nosso, Ave Maria e Glória ao Pai.</strong></p>
                </div>`
            }
        ]
    },
    valtrudes: {
        saintName: "Santa Valtrudes",
        novenaTitle: "Novena a Santa Valtrudes",
        description: "Mãe de santos e fundadora em Mons. (31 de março a 9 de abril)",
        image: "https://gaudiumpress.org/wp-content/uploads/2021/11/Historia-Oracao-e-Frases-de-Santa-Gertrudes-3-768x432.jpg",
        imageObjectPosition: "top",
        initialPrayer: `<div class="prayer-block">
            <h4 class="section-title">Oração Inicial para todos os dias</h4>
            <p>Ó Deus, que na vossa providência divina fizestes de Santa Valtrudes um exemplo admirável de virtude em todos os estados de vida, concedei-nos, por sua intercessão, a graça de Vos servir com um coração puro e generoso, buscando sempre a Vossa vontade na nossa família e no nosso trabalho. Por Cristo nosso Senhor. Amém.</p>
        </div>`,
        finalPrayer: `<div class="prayer-block">
            <h4 class="section-title">Oração Final para todos os dias</h4>
            <p>Santa Valtrudes, rogai por nós e pelas nossas famílias, para que vivamos sempre na vossa paz. Amém.</p>
        </div>`,
        days: [
            {
                day: "Dia 1",
                title: "Primeiro Dia - Santidade na Família",
                content: `<div class="day-specific-content">
                    <p>Santa Valtrudes, que fizestes do vosso lar uma escola de santidade para vossos filhos, ajudai-nos a cultivar no seio de nossas famílias o amor a Deus e o respeito mútuo, para que sejamos luz para o mundo.</p>
                    <p class="mt-4"><strong>Pai Nosso, Ave Maria e Glória ao Pai.</strong></p>
                </div>`
            },
            {
                day: "Dia 2",
                title: "Segundo Dia - Fidelidade Vocacional",
                content: `<div class="day-specific-content">
                    <p>Santa Valtrudes, que soubestes discernir a vontade de Deus em cada fase de vossa vida, dai-nos a clareza para compreender nosso chamado e a coragem para segui-lo com total fidelidade.</p>
                    <p class="mt-4"><strong>Pai Nosso, Ave Maria e Glória ao Pai.</strong></p>
                </div>`
            },
            {
                day: "Dia 3",
                title: "Terceiro Dia - Desapego e Renúncia",
                content: `<div class="day-specific-content">
                    <p>Santa Valtrudes, que renunciastes às glórias do mundo para servir ao Rei Eterno, ensinai-nos a não colocar nosso coração nas riquezas passageiras, mas em Deus, nosso único bem.</p>
                    <p class="mt-4"><strong>Pai Nosso, Ave Maria e Glória ao Pai.</strong></p>
                </div>`
            },
            {
                day: "Dia 4",
                title: "Quarto Dia - Amor aos Pobres",
                content: `<div class="day-specific-content">
                    <p>Santa Valtrudes, que viestes em auxílio dos necessitados com o coração aberto, dai-nos a graça da caridade operosa, para que saibamos reconhecer Cristo em cada irmão que sofre.</p>
                    <p class="mt-4"><strong>Pai Nosso, Ave Maria e Glória ao Pai.</strong></p>
                </div>`
            },
            {
                day: "Dia 5",
                title: "Quinto Dia - Espírito de Oração",
                content: `<div class="day-specific-content">
                    <p>Santa Valtrudes, cuja vida era um diálogo constante com o Criador, ensinai-nos a arte da oração contemplativa, fonte de toda a força e paz para nossa caminhada terrena.</p>
                    <p class="mt-4"><strong>Pai Nosso, Ave Maria e Glória ao Pai.</strong></p>
                </div>`
            },
            {
                day: "Dia 6",
                title: "Sexto Dia - Fortaleza nas Provações",
                content: `<div class="day-specific-content">
                    <p>Santa Valtrudes, que enfrentastes as dificuldades da fundação de vossa comunidade com firmeza e confiança, dai-nos a fortaleza necessária para não desfalecermos diante dos obstáculos da vida.</p>
                    <p class="mt-4"><strong>Pai Nosso, Ave Maria e Glória ao Pai.</strong></p>
                </div>`
            },
            {
                day: "Dia 7",
                title: "Sétimo Dia - Humildade de Coração",
                content: `<div class="day-specific-content">
                    <p>Santa Valtrudes, que embora nobre de nascimento, fizeste-te pequena diante do Senhor, alcançai-nos a virtude da humildade, fundamento de todas as outras virtudes cristãs.</p>
                    <p class="mt-4"><strong>Pai Nosso, Ave Maria e Glória ao Pai.</strong></p>
                </div>`
            },
            {
                day: "Dia 8",
                title: "Oitavo Dia - Zelo pelas Almas",
                content: `<div class="day-specific-content">
                    <p>Santa Valtrudes, que trabalhastes incansavelmente pela salvação do próximo, despertai em nós o zelo apostólico para que possamos, pelo exemplo e pela palavra, atrair muitos para o Reino de Deus.</p>
                    <p class="mt-4"><strong>Pai Nosso, Ave Maria e Glória ao Pai.</strong></p>
                </div>`
            },
            {
                day: "Dia 9",
                title: "Nono Dia - Paz e Eternidade",
                content: `<div class="day-specific-content">
                    <p>Santa Valtrudes, que agora gozais da glória eterna junto a vossa família de santos, intercedei por nós para que, no final de nossa vida, possamos também contemplar a face de Deus para sempre.</p>
                    <p class="mt-4"><strong>Pai Nosso, Ave Maria e Glória ao Pai.</strong></p>
                </div>`
            }
        ]
    },

    madalena_canossa: {
        saintName: "Santa Madalena de Canossa",
        novenaTitle: "Novena a Santa Madalena de Canossa",
        description: "Fundadora das Filhas e Filhos da Caridade. (1 a 10 de abril)",
        image: "https://tse1.explicit.bing.net/th/id/OIP.olSSpkMIxL2-abgq8gz9igHaFj?rs=1&pid=ImgDetMain&o=7&rm=3",
        imageObjectPosition: "top",
        initialPrayer: `<div class="prayer-block">
            <h4 class="section-title">Oração Inicial para todos os dias</h4>
            <p>Deus Pai de misericórdia, que em Santa Madalena de Canossa nos destes um modelo luminoso de amor ao Cristo Crucificado e de dedicação total aos mais pobres, concedei-nos, por sua intercessão, a graça de vivermos o Evangelho com audácia e ternura, revelando aos homens o Vosso Coração compassivo. Por Cristo nosso Senhor. Amém.</p>
        </div>`,
        finalPrayer: `<div class="prayer-block">
            <h4 class="section-title">Oração Final para todos os dias</h4>
            <p>Santa Madalena de Canossa, ensinai-nos a amar Jesus como vós o amastes e a servi-Lo nos pobres e abandonados. Amém.</p>
        </div>`,
        days: [
            {
                day: "Dia 1",
                title: "Primeiro Dia - O Olhar no Crucificado",
                content: `<div class="day-specific-content">
                    <p>Santa Madalena, que encontrastes no Cristo de braços abertos na Cruz a fonte de toda a vossa força, ensinai-nos a olhar para as nossas cruzes diárias com esperança e a descobrir nelas o amor infinito de Deus.</p>
                    <p class="mt-4"><strong>Pai Nosso, Ave Maria e Glória ao Pai.</strong></p>
                </div>`
            },
            {
                day: "Dia 2",
                title: "Segundo Dia - Renúncia Radical",
                content: `<div class="day-specific-content">
                    <p>Santa Madalena, que deixastes o conforto do palácio para habitar entre os pobres, dai-nos o desapego necessário para que possamos colocar a vontade de Deus acima de qualquer segurança humana.</p>
                    <p class="mt-4"><strong>Pai Nosso, Ave Maria e Glória ao Pai.</strong></p>
                </div>`
            },
            {
                day: "Dia 3",
                title: "Terceiro Dia - Compaixão pelos Sofredores",
                content: `<div class="day-specific-content">
                    <p>Santa Madalena, que não ficastes indiferente aos males de vossa época, alcançai-nos um coração sensível, que saiba chorar com os que choram e socorrer os que estão em agonia.</p>
                    <p class="mt-4"><strong>Pai Nosso, Ave Maria e Glória ao Pai.</strong></p>
                </div>`
            },
            {
                day: "Dia 4",
                title: "Quarto Dia - Educação como Libertação",
                content: `<div class="day-specific-content">
                    <p>Santa Madalena, que acreditastes na educação das crianças como caminho de dignidade, intercedei por todos os educadores para que formem não apenas cidadãos, mas verdadeiros filhos de Deus.</p>
                    <p class="mt-4"><strong>Pai Nosso, Ave Maria e Glória ao Pai.</strong></p>
                </div>`
            },
            {
                day: "Dia 5",
                title: "Quinto Dia - Humildade e Serviço",
                content: `<div class="day-specific-content">
                    <p>Santa Madalena, que vos dedicastes aos serviços mais humildes nos hospitais, ensinai-nos que o maior no Reino de Deus é aquele que se faz servo de todos por amor.</p>
                    <p class="mt-4"><strong>Pai Nosso, Ave Maria e Glória ao Pai.</strong></p>
                </div>`
            },
            {
                day: "Dia 6",
                title: "Sexto Dia - Filial Devoção a Maria",
                content: `<div class="day-specific-content">
                    <p>Santa Madalena, que colocastes vossa Congregação sob a proteção de Maria ao pé da Cruz, dai-nos um amor terno e filial à Nossa Senhora das Dores, nossa Mãe e Consoladora.</p>
                    <p class="mt-4"><strong>Pai Nosso, Ave Maria e Glória ao Pai.</strong></p>
                </div>`
            },
            {
                day: "Dia 7",
                title: "Sétimo Dia - Audácia Missionária",
                content: `<div class="day-specific-content">
                    <p>Santa Madalena, que buscastes novas formas de levar o Evangelho aos corações feridos, concedei-nos a ousadia de anunciar Cristo em todos os lugares, sem medo e com criatividade caritativa.</p>
                    <p class="mt-4"><strong>Pai Nosso, Ave Maria e Glória ao Pai.</strong></p>
                </div>`
            },
            {
                day: "Dia 8",
                title: "Oitavo Dia - Amor à Igreja",
                content: `<div class="day-specific-content">
                    <p>Santa Madalena, que viveu em total sintonia com o coração da Igreja, ajudai-nos a amar e defender nossa fé católica, mantendo-nos unidos ao nosso Santo Padre e aos pastores.</p>
                    <p class="mt-4"><strong>Pai Nosso, Ave Maria e Glória ao Pai.</strong></p>
                </div>`
            },
            {
                day: "Dia 9",
                title: "Nono Dia - Glória e Santidade",
                content: `<div class="day-specific-content">
                    <p>Santa Madalena, que agora contemplais face a face Aquele que amastes na terra, intercedei por nós para que sejamos perseverantes no caminho da santidade até o dia do nosso encontro definitivo com Ele. Amém.</p>
                    <p class="mt-4"><strong>Pai Nosso, Ave Maria e Glória ao Pai.</strong></p>
                </div>`
            }
        ]
    },

    divina_misericordia: {
        saintName: "Divina Misericórdia",
        novenaTitle: "Novena da Divina Misericórdia",
        description: "Novena iniciada na Sexta-feira Santa em preparação ao Domingo da Divina Misericórdia.",
        image: "https://i.pinimg.com/736x/07/32/73/073273a0d0f34f3e0241377c516aa140.jpg",
        imageObjectPosition: "top",
        initialPrayer: "",
        finalPrayer: "",
        days: [
            {
                day: "Dia 1",
                title: "1º Dia - Pela humanidade inteira",
                content: `<div class="day-specific-content">
                    <p class="italic text-lg font-medium">“Hoje, traze-Me a humanidade inteira, especialmente todos os pecadores, e mergulha-os no oceano da Minha Misericórdia. Com isso Me consolarás na amarga tristeza em que a perda das almas Me afunda.”</p>
                    <p class="mt-4">Misericordiosíssimo Jesus, de quem é próprio ter compaixão de nós e nos perdoar, não olheis os nossos pecados, mas a confiança que depositamos em Vossa infinita bondade. Acolhei-nos na mansão do Vosso compassivo Coração e nunca nos deixeis sair dele. Nós Vô-lo pedimos pelo amor que Vos une ao Pai e ao Espírito Santo. Ó onipotência da Misericórdia Divina, socorro para o homem pecador, Vós sois o oceano de misericórdia e de compaixão, e ajudais a quem Vos pede humildemente.</p>
                    <p class="mt-4">Eterno Pai, olhai com misericórdia para toda humanidade, encerrada no Coração compassivo de Jesus, mas especialmente para os pobres pecadores.</p>
                    <p class="mt-4">Pela Vossa dolorosa Paixão, mostrai-nos a Vossa Misericórdia, para que glorifiquemos a onipotência da Vossa misericórdia, pelos séculos dos séculos. Amém.</p>
                </div>`
            },
            {
                day: "Dia 2",
                title: "2º Dia - Pelas almas dos sacerdotes e religiosos",
                content: `<div class="day-specific-content">
                    <p class="italic text-lg font-medium">“Hoje, traze-Me as almas dos sacerdotes e religiosos e mergulha-as na Minha insondável misericórdia. Elas me deram força para suportar a amarga Paixão. Por elas, como que por canais, corre para a humanidade a Minha misericórdia.”</p>
                    <p class="mt-4">Misericordiosíssimo Jesus, de quem provém tudo que é bom, aumentai em nós a graça, para que pratiquemos dignas obras de misericórdia, a fim de que aqueles que olham para nós glorifiquem o Pai da Misericórdia que está no céu.</p>
                    <p class="mt-4">A fonte do amor Divino mora nos corações puros, banhados no mar de misericórdia, brilhantes como as estrelas, luminosos como a aurora.</p>
                    <p class="mt-4">Eterno Pai, dirigi o olhar da Vossa Misericórdia para a porção eleita da Vossa vinha: para as almas dos sacerdotes e religiosos. Concedei-lhes o poder da Vossa bênção e, pelos sentimentos do Coração de Vosso Filho, no qual estão encerradas, dai-lhes a força da Vossa luz, para que possam guiar os outros nos caminhos da salvação e juntamente com eles cantar a glória da Vossa insondável misericórdia, pelos séculos eternos. Amém.</p>
                </div>`
            },
            {
                day: "Dia 3",
                title: "3º Dia - Pelas almas piedosas e fiéis",
                content: `<div class="day-specific-content">
                    <p class="italic text-lg font-medium">“Hoje, traze-Me todas as almas piedosas e fiéis e mergulha-as no oceano da Minha misericórdia. Essas almas consolaram-Me na Via-Sacra; foram aquela gota de consolações em meio ao mar de amarguras.”</p>
                    <p class="mt-4">Misericordiosíssimo Jesus, que concedeis prodigamente todas as graças do tesouro da Vossa Misericórdia, acolhei-nos na mansão do Vosso compassivo Coração e não nos deixeis sair Dele pelos séculos. Nós Vos suplicamos pelo amor inconcebível de que está inflamado o Vosso Coração para com o Pai celestial.</p>
                    <p class="mt-4">As maravilhas da misericórdia são insondáveis; nem o pecador nem o justo as entenderá; para todos olhais com o olhar da compaixão e a todos atraís para o Vosso amor.</p>
                    <p class="mt-4">Eterno Pai, olhai com o olhar da Vossa misericórdia para as almas fiéis, como a herança do Vosso Filho. Pela Vossa dolorosa paixão, concedei-lhes a Vossa bênção e cercai-as da Vossa incessante proteção, para que não percam o amor e o tesouro da santa fé, mas, com toda a multidão dos anjos e santos, glorifiquem a Vossa imensa misericórdia por toda a eternidade. Amém.</p>
                </div>`
            },
            {
                day: "Dia 4",
                title: "4º Dia - Pelos pagãos e não crentes",
                content: `<div class="day-specific-content">
                    <p class="italic text-lg font-medium">“Hoje, traze-Me os pagãos e aqueles que ainda não Me conhecem e nos quais pensei na Minha amarga Paixão. O seu futuro zelo consolou o Meu coração. Mergulha-os no mar da Minha misericórdia.”</p>
                    <p class="mt-4">Misericordiosíssimo Jesus, que sois a luz de todo o mundo, aceitai, na mansão do Vosso compassivo Coração, as almas dos pagãos que ainda não Vos conhecem. Que os raios da Vossa graça os iluminem, para que também eles, juntamente conosco, glorifiquem as maravilhas da Vossa misericórdia, e não os deixeis sair da mansão do Vosso compassivo Coração.</p>
                    <p class="mt-4">Que a luz do Vosso amor ilumine as trevas das almas! Fazei que essas almas Vos conheçam e glorifiquem a Vossa Misericórdia juntamente conosco!</p>
                    <p class="mt-4">Eterno Pai, olhai com misericórdia para as almas dos pagãos e daqueles que ainda não Vos conhecem e que estão encerrados no Coração compassivo de Jesus. Atrai-as à luz do Evangelho. Essas almas não sabem que grande felicidade é amar-Vos. Fazei com que também elas glorifiquem a riqueza da Vossa Misericórdia, por toda a eternidade. Amém.</p>
                </div>`
            },
            {
                day: "Dia 5",
                title: "5º Dia - Pelos cristãos afastados da unidade",
                content: `<div class="day-specific-content">
                    <p class="italic text-lg font-medium">“Hoje, traze-Me as almas dos cristãos separados da unidade da Igreja e mergulha-as no mar da Minha misericórdia. Na minha amarga Paixão, dilaceravam o Meu Corpo e o Meu Coração, isto é, a minha Igreja. Quando voltam à unidade da Igreja, cicatrizam-se as Minhas Chagas e dessa maneira eles aliviam a Minha Paixão.”</p>
                    <p class="mt-4">Misericordiosíssimo Jesus que sois a própria bondade, Vós não negais a luz àqueles que Vos pedem, aceitai na mansão do Vosso compassivo Coração as almas dos nossos irmãos separados, e atraí-os pela Vossa luz à unidade da Igreja e não os deixeis sair da mansão do Vosso compassivo Coração, mas fazei com que também eles glorifiquem a riqueza da Vossa misericórdia.</p>
                    <p class="mt-4">Mesmo para aqueles que rasgaram o manto da Vossa Unidade flui do Vosso Coração uma fonte de compaixão; o poder da Vossa misericórdia, ó Deus, pode tirar também essas almas do erro.</p>
                    <p class="mt-4">Eterno Pai, olhai com misericórdia para as almas dos nossos irmãos separados que esbanjaram os Vossos bens e abusaram das Vossas graces, permanecendo teimosamente nos seus erros. Não olheis para os seus erros, mas para o amor do Vosso Filho e para a Vossa amarga Paixão que suportou por eles, pois também eles estão encerrados no Coração compassivo de Jesus. Fazei com que também eles glorifiquem a Vossa Misericórdia por todos os séculos. Amém.</p>
                </div>`
            },
            {
                day: "Dia 6",
                title: "6º Dia - Pelas almas mansas, humildes e criancinhas",
                content: `<div class="day-specific-content">
                    <p class="italic text-lg font-medium">“Hoje, traze-Me as almas mansas e humildes, assim como as almas das criancinhas, e mergulha-as na Minha misericórdia. Essas almas são as mais semelhantes ao Meu Coração. Elas Me confortaram na amarga Paixão da Minha agonia. Eu as vi quais anjos terrestres que futuramente iriam velar junto aos meus altares. Sobre elas derramo torrentes de graças. Só a alma humilde é capaz de aceitar a Minha graça. Às almas humildes favoreço com a Minha Confiança.”</p>
                    <p class="mt-4">Misericordiosíssimo Jesus, que dissestes: “Aprendei de Mim, que sou manso e humilde de coração”, aceitai na mansão do Vosso compassivo Coração as almas mansas e humildes e as almas das criancinhas. Essas almas encantam o céu todo e são a especial predileção do Pai Celestial. São como um ramalhete diante do trono de Deus, com cujo perfume o próprio Deus se deleita. Essas almas têm a mansão permanente no Vosso Coração compassivo de Jesus e cantam sem cessar um hino de amor e misericórdia pelos séculos.</p>
                    <p class="mt-4">A alma verdadeiramente humilde e mansa já respira aqui na terra o ar do paraíso, e o perfume do seu coração humilde encanta o próprio Criador.</p>
                    <p class="mt-4">Eterno Pai, olhai com Misericórdia para as almas mansas e humildes e também para as almas das criancinhas, que estão encerradas na mansão compassiva do Coração de Jesus. Estas almas são as mais semelhantes ao Vosso Filho. O perfume destas almas eleva-se da terra e alcança o Vosso trono. Pai de Misericórdia e de toda bondade, suplico-Vos pelo amor e predileção que tendes para com estas almas: abençoai o mundo todo, para que todas cantem juntamente a glória a Vossa misericórdia pelos séculos eternos. Amém.</p>
                </div>`
            },
            {
                day: "Dia 7",
                title: "7º Dia - Pelas almas devotas da Misericórdia",
                content: `<div class="day-specific-content">
                    <p class="italic text-lg font-medium">“Hoje, traze-Me as almas que veneram e glorificam de maneira especial a Minha misericórdia e mergulha-as na Minha misericórdia. Essas almas foram as que mais sofreram por causa da minha Paixão e penetraram mais profundamente no Meu espírito. Elas são a imagem viva do Meu Coração compassivo. Estas almas brilharão com especial fulgor na vida futura. Nenhuma delas irá ao fogo do inferno. Defenderei cada uma delas de maneira especial na hora da morte.”</p>
                    <p class="mt-4">Misericordiosíssimo Jesus, cujo Coração é o próprio Amor, aceitai na mansão do Vosso compassivo Coração as almas que honram e glorificam de maneira especial a grandeza da Vossa misericórdia.</p>
                    <p class="mt-4">Estas almas, tornadas poderosas pela força do próprio Deus, avançam entre penas e adversidades, confiando na Vossa misericórdia. Estas almas estão unidas a Vós e carregam sobre os seus ombros a humanidade toda. Elas não serão julgadas severamente, mas a Vossa misericórdia as envolverá no momento da morte. A alma que glorifica a bondade do Senhor é por Ele especialmente amada; ela está sempre próxima da fonte viva e bebe as graças da misericórdia Divina.</p>
                    <p class="mt-4">Eterno Pai, olhai com misericórdia para as almas que glorificam e honram o Vosso maior atributo, isto é, a Vossa insondável misericórdia. Elas estão encerradas no Coração compassivo de Jesus. Estas almas são o Evangelho vivo, e as suas mãos estão cheias de obras de misericórdia; suas almas repletas de alegria cantam um hino de misericórdia ao Altíssimo. Suplico-Vos, ó Deus, mostrai-lhes a Vossa misericórdia segundo a esperança e confiança que em Vós colocaram. Que se cumpra nelas a promessa de Jesus, que disse: “As almas que veneram a minha insondável Misericórdia, Eu mesmo as defenderei durante a vida, especialmente na hora da morte, como minha glória”. Amém.</p>
                </div>`
            },
            {
                day: "Dia 8",
                title: "8º Dia - Pelas almas do Purgatório",
                content: `<div class="day-specific-content">
                    <p class="italic text-lg font-medium">“Hoje, traze-Me as almas que se encontram na prisão do Purgatório e mergulha-as no abismo da Minha misericórdia. Que as torrentes do Meu Sangue refresquem o seu ardor. Todas estas almas são muito amadas por Mim. Elas pagam as dívidas à Minha Justiça. Está em teu alcance trazer-lhes alívio. Tira do tesouro da minha Igreja todas as indulgências e oferece-as por elas. Oh, se conhecesses o seu tormento, incessantemente oferecerias por elas a esmola do espírito e pagarias as suas dívidas à Minha Justiça.”</p>
                    <p class="mt-4">Misericordiosíssimo Jesus, que dissestes que quereis misericórdia, eis que estou trazendo à mansão do Vosso compassivo Coração as almas do Purgatório, almas que Vos são muito queridas e que, no entanto, devem dar reparação à Vossa justiça. Que as torrentes de Sangue e Água que brotaram do Vosso Coração apaguem as chamas do fogo do purgatório, para que também ali seja glorificado o poder da Vossa Misericórdia.</p>
                    <p class="mt-4">Do terrível ardor do fogo do purgatório ergue-se um lamento à Vossa misericórdia; e recebem consolo, alívio e conforto na torrente derramada do Sangue e da Água.</p>
                    <p class="mt-4">Eterno Pai, olhai com Misericórdia para as almas que sofrem no purgatório e que estão encerradas no Coração compassivo de Jesus. Suplico-Vos que, pela dolorosa Paixão de Jesus, Vosso Filho, e por toda a amargura de que estava inundada a Vossa Santíssima Alma, mostreis Vossa Misericórdia às almas que se encontram sob o olhar da Vossa Justiça. Não olheis para elas de outra forma senão através das Chagas de Jesus, Vosso Filho muito amado, porque nós cremos que a Vossa bondade e misericórdia são incomensuráveis. Amém.</p>
                </div>`
            },
            {
                day: "Dia 9",
                title: "9º Dia - Pelas almas tíbias",
                content: `<div class="day-specific-content">
                    <p class="italic text-lg font-medium">“Hoje, traze-Me as almas tíbias e mergulha-as no abismo da Minha misericórdia. Essas almas ferem mais dolorosamente o Meu Coração. Foi da alma tíbia que a Minha alma sentiu repugnância no Jardim das Oliveiras. Elas Me levaram a dizer: “Pai, afasta de Mim este cálice, se assim for a Vossa vontade”. Para elas, a última tábua de salvação é recorrer à minha Misericórdia.”</p>
                    <p class="mt-4">Ó compassivo Jesus, que sois a própria compaixão, trago à mansão do Vosso compassivo Coração as almas tíbias; que se aqueçam no fogo do Vosso amor puro estas almas geladas que, semelhantes a cadáveres, Vos enchem de tanta repugnância. Ó Jesus, muito compassivo, usai a onipotência da Vossa Misericórdia e atraí-as até o fogo do Vosso amor e concedei-lhes o amor santo, porque Vós tudo podeis.</p>
                    <p class="mt-4">O fogo e o gelo não podem ser unidos, porque ou o fogo se apaga, ou o gelo se derrete; mas a Vossa misericórdia, ó Deus, pode auxiliar indigências ainda maiores.</p>
                    <p class="mt-4">Eterno Pai, olhai com Vossa misericórdia para as almas tíbias e que estão encerradas no Coração compassivo de Jesus. Pai de Misericórdia, suplico-Vos pela amargura da Paixão do Vosso Filho e por Vossa agonia de três horas na Cruz, permiti que também elas glorifiquem o abismo da Vossa misericórdia. Amém.</p>
                </div>`
            }
        ]
    },

    santo_expedito: {
        saintName: "Santo Expedito",
        novenaTitle: "Novena a Santo Expedito",
        description: "Novena em honra a Santo Expedito (19 de abril).",
        image: "https://i.pinimg.com/1200x/b7/44/62/b7446207d5dd9ed23c8adba86d6f432f.jpg",
        imageObjectPosition: "top",
        initialPrayer: `<h4 class="section-title">Ato de Contrição</h4><p>Meu Pai e Meu Senhor Jesus Cristo, caridade sem fim, eu sinceramente me arrependo dos meus pecados. Concedei-me, portanto, o perdão dos meus pecados e a graça que peço pelos méritos das dores de Sua Mãe amorosa e pelas virtudes de Seu mártir Santo Expedito.</p><h4 class="section-title mt-4">Oração a Santo Expedito</h4><p>Oh, Santo Expedito, meu protetor! Eu coloco a minha esperança no fato de que minhas petições podem ser concedidas se forem para o meu próprio bem. Por favor, pedi ao Senhor, por intercessão da Virgem Santíssima, o perdão dos meus pecados e a graça de mudar a minha vida, particularmente a graça que agora desejo. Eu prometo seguir Seus exemplos e propagar esta devoção.</p>`,
        finalPrayer: `<h4 class="section-title">Oração Final</h4><p class="font-semibold">Rezar três Pais-Nossos em honra a Santíssima Trindade</p><p class="mt-4">Lembre-se, graciosa Virgem Maria, que nunca se ouviu dizer que qualquer um que se refugiou sob Vossa proteção, implorou a Vossa ajuda e procurou Vossa intercessão foi deixado desamparado. Inspirado por essa confiança, eu recorro a Vós, Virgem das virgens, minha Mãe. Para Vós eu venho, diante de Vós estou, pecador e triste. Mãe do Verbo Encarnado, não desprezeis as minhas palavras, mas graciosamente ouvi-me e atendei a minha oração. Amém.</p><p class="mt-4 font-semibold">Rezar uma Ave-Maria em honra a Nossa Senhora das Dores.</p>`,
        days: [
            {
                day: "Dia 1",
                title: "1º Dia",
                content: `<div class="day-specific-content"><p>Oh, glorioso mártir Santo Expedito! Pela fé viva que foi concedida por Deus, peço-lhe para despertar a mesma fé no meu coração, para que eu também acredite, sinceramente, que há Deus, mas muito especialmente para que eu possa ser salvo de pecar contra Ele.</p></div>`
            },
            {
                day: "Dia 2",
                title: "2º Dia",
                content: `<div class="day-specific-content"><p>Oh, glorioso mártir Santo Expedito! Pela esperança dada por Deus, orai para que aqueles de pouca fé possam ser modificados por alguns raios de esperança, para que eles também recebam as coisas eternas. Por favor, orai para que ardente esperança em Deus seja também me dada e me segure firme no meio de sofrimentos.</p></div>`
            },
            {
                day: "Dia 3",
                title: "3º Dia",
                content: `<div class="day-specific-content"><p>Oh, glorioso mártir Santo Expedito! Pelo amor infinito que Nosso Senhor plantou em seu coração, por favor, retire do meu todos os grilhões atados pelo mundanismo, que sem eles eu possa amar somente a Deus em toda a eternidade. Amém.</p></div>`
            },
            {
                day: "Dia 4",
                title: "4º Dia",
                content: `<div class="day-specific-content"><p>Oh, glorioso mártir Santo Expedito, que sabia perfeitamente bem o ensinamento do Mestre Divino para carregar a Cruz e segui-Lo! Peça-Lhe as graças de que eu preciso para que possa lutar contra as minhas próprias paixões.</p></div>`
            },
            {
                day: "Dia 5",
                title: "5º Dia",
                content: `<div class="day-specific-content"><p>Oh, glorioso mártir Santo Expedito, pelas graças abundantes que recebeste do céu, que possa me conservar todas as suas virtudes, concedei-me também que possa ser livre de todos os sentimentos que bloqueiam o meu caminho para o Céu.</p></div>`
            },
            {
                day: "Dia 6",
                title: "6º Dia",
                content: `<div class="day-specific-content"><p>Oh, glorioso mártir Santo Expedito! Pelos sofrimentos e humilhações que recebeste para o amor de Deus, concedei-me esta graça também que é muito agradável a Deus e me liberta da raiva e da dureza de coração, que é a pedra de tropeço da minha alma.</p></div>`
            },
            {
                day: "Dia 7",
                title: "7º Dia",
                content: `<div class="day-specific-content"><p>Oh, glorioso mártir Santo Expedito! Tu sabes que a oração é a chave de ouro que abrirá o Reino dos Céus, ensinai-me a orar de uma forma que é desejável a Nosso Senhor e ao Seu coração, para que eu possa viver somente para Ele, que eu possa morrer sendo d’Ele, e que eu possa orar somente a Ele em toda a eternidade.</p></div>`
            },
            {
                day: "Dia 8",
                title: "8º Dia",
                content: `<div class="day-specific-content"><p>Oh, glorioso mártir Santo Expedito! Por meio de um desejo puro, que reinou em todos os seus sentimentos, palavras e ações, por favor, guiai-me na minha busca incessante para a glória de Deus e o bem dos meus semelhantes.</p></div>`
            },
            {
                day: "Dia 9",
                title: "9º Dia",
                content: `<div class="day-specific-content"><p>Oh, glorioso mártir Santo Expedito, que foi muito amado pela Rainha do Céu, que nada lhe foi negado, pedi a Ela, por favor, oh meu advogado, que, pelos sofrimentos de seu Filho Divino e Suas próprias tristezas, eu possa receber, neste dia, a graça que peço, mas acima de tudo, a graça de morrer sem cometer algum pecado mortal. Amém.</p></div>`
            }
        ]
    },

    sao_jorge: {
        saintName: "São Jorge",
        novenaTitle: "Novena a São Jorge",
        description: "Novena em honra a São Jorge, mártir e guerreiro da fé. (Fonte: Devocionário e Novena a São Jorge. 8ª edição: 2014. Editora Loyola.)",
        image: "https://i.pinimg.com/736x/5a/04/7d/5a047d8750cc4fced440dbc6d3c6e40a.jpg",
        initialPrayer: "",
        finalPrayer: `<div class="prayer-block">
            <h4 class="section-title">Oração</h4>
            <p>Glorioso São Jorge, valoroso Soldado de Cristo, que mataste o dragão, ouvi meu apelo e apresentai minha prece ao Senhor Deus, Todo-Poderoso. Confiante em vossos méritos e em vosso poder, eu vos peço, Intrépido São Jorge, a vossa proteção, abrindo meus caminhos, aplainando minhas estradas, afastando obstáculos aos meus passos. De noite ou de dia, não me falteis com vosso socorro e vossa assistência. Considerai minha aflição e vinde em meu socorro (fazer aqui seu pedido). Dai-me coragem e esperança, fortalecei minha fé e auxiliai-me nesta necessidade. Com o poder de Deus, de Jesus Cristo e do Divino Espírito Santo. Amém!</p>
            <p class="mt-4 font-semibold">Pai-Nosso, Ave-Maria e Glória ao Pai.</p>
        </div>

        <div class="prayer-block mt-8">
            <h4 class="section-title">Ladainha de São Jorge</h4>
            <div class="space-y-1 text-sm">
                <p>Senhor, tende piedade de nós.</p>
                <p>Cristo, tende piedade de nós.</p>
                <p>Senhor, tente piedade de nós.</p>
                <p>Cristo, ouvi-nos.</p>
                <p>Cristo, atendei-nos.</p>
                <p>Deus pai do Céu, <strong>tende piedade de nós.</strong></p>
                <p>Deus Filho redentor do mundo, <strong>tende piedade de nós.</strong></p>
                <p>Deus Espírito Santo, <strong>tende piedade de nós.</strong></p>
                <p>Santíssima Trindade, que sois um só Deus, <strong>tende piedade, piedade de nós.</strong></p>
                <p>Santa Maria, Rainha dos Mártires, <strong>rogai por nós.</strong></p>
                <p>Santa Mãe de Deus, <strong>rogai por nós.</strong></p>
                <p>Santa Virgem dos céus, que recebeu o Senhor Jesus Cristo, <strong>rogai por nós.</strong></p>
                <p>São Jorge, que do Senhor recebestes a coroa da justiça, <strong>rogai por nós.</strong></p>
                <p>São Jorge, patrono da juventude, <strong>rogai por nós.</strong></p>
                <p>São Jorge, guarda dos soldados, <strong>rogai por nós.</strong></p>
                <p>São Jorge, esperança dos encarcerados, <strong>rogai por nós.</strong></p>
                <p>São Jorge, fiel mártir da fé, <strong>rogai por nós.</strong></p>
                <p>São Jorge, fiel seguidor do Cristo, <strong>rogai por nós.</strong></p>
                <p>São Jorge, fiel a Cristo até a morte, <strong>rogai por nós.</strong></p>
                <p>São Jorge, invencível defensor da fé, <strong>rogai por nós.</strong></p>
                <p>São Jorge, que, renunciando ao mundo, ganhastes a Cristo, <strong>rogai por nós.</strong></p>
                <p>São Jorge, que pela espada entregastes a Cristo o vosso sangue, <strong>rogai por nós.</strong></p>
                <p>São Jorge, libertador dos cativos, <strong>rogai por nós.</strong></p>
                <p>São Jorge, em Cristo, alívio dos doentes, <strong>rogai por nós.</strong></p>
                <p>São Jorge, em Cristo, auxílio dos enfermos, <strong>rogai por nós.</strong></p>
                <p>São Jorge, em Cristo, consolo dos aflitos, <strong>rogai por nós.</strong></p>
                <p>São Jorge, apoio fidelíssimo de todos os congregados, <strong>rogai por nós.</strong></p>
                <p>São Jorge, dos congregados exemplar mestre da fé, <strong>rogai por nós.</strong></p>
                <p>São Jorge, em Cristo, destruidor de todas as vibrações malignas, <strong>rogai por nós.</strong></p>
                <p>São Jorge, em Cristo, vitorioso de todos os malefícios, <strong>rogai por nós.</strong></p>
                <p>São Jorge, em Cristo, neutralizador de toda a magia, <strong>rogai por nós.</strong></p>
                <p>São Jorge, vencedor, em Cristo, de toda a contenda do demônio, <strong>rogai por nós.</strong></p>
                <p>São Jorge, que elevai ao senhor as nossas preces, <strong>rogai por nós.</strong></p>
                <p>São Jorge, que pisai e esmagai a maldade dos nosso inimigos, <strong>rogai por nós.</strong></p>
                <p>São Jorge, sede em Cristo nosso escudo e protetor, <strong>rogai por nós.</strong></p>
                <p>São Jorge, sede nossa vitória sobre os nossos oponentes, <strong>rogai por nós.</strong></p>
                <p>São Jorge, radiante luzeiro dos espíritos bem-aventurados, <strong>rogai por nós.</strong></p>
                <p>São Jorge, auxílio nos negócios de rapidez e brevidade, <strong>rogai por nós.</strong></p>
                <p>São Jorge, sede nosso auxílio urgente, <strong>rogai por nós.</strong></p>
                <p>São Jorge, fonte de esperança e fé, <strong>rogai por nós.</strong></p>
                <p>São Jorge, príncipe dos mártires militares, <strong>rogai por nós.</strong></p>
                <p>São Jorge, mediador dos processos urgentes, <strong>rogai por nós.</strong></p>
                <p>São Jorge, que, delegado, deixaste este mundo, <strong>rogai por nós.</strong></p>
                <p>São Jorge, nosso glorioso padroeiro, <strong>rogai por nós.</strong></p>
                <p>Cordeiro de Deus, que tirais o pecado do mundo, <strong>perdoai-nos, Senhor.</strong></p>
                <p>Cordeiro de Deus, que tirais o pecado do mundo, <strong>ouvi-nos, senhor.</strong></p>
                <p>Cordeiro de Deus, que tirais o pecado do mundo, <strong>tende piedade de nós.</strong></p>
                <p>Cristo, ouvi-nos. Cristo, atendei-nos.</p>
            </div>
        </div>

        <div class="prayer-block mt-8">
            <h4 class="section-title">Hino a São Jorge</h4>
            <div class="space-y-4 italic">
                <p>Lá do Céu, o Senhor nos mandou um amigo e protetor. Valente guerreiro, Amigo sincero nas horas difíceis e de duro labor.</p>
                <p>Ó São Jorge, protetor glorioso que do Céu, tão bondoso, o Senhor quis mandar! Aqui vide a teus pés venturoso o teu povo humilde que te quer muito amar.</p>
                <p>Nossa fé em Cristo repousa. nosso amor nele também, é fonte de vida, esperança e alegria de sempre vivermos em sua família.</p>
                <p>Nossa luta é toda de Cristo, na estrada do amor queremos viver na caridade unidos, como lá no céu havemos de estar.</p>
                <p>Nossa Glória é estarmos bem juntos, no amor que nos congrega. Lutando na Igreja, como Povo de Deus. pelo santo ideal que Cristo ensinou.</p>
            </div>
        </div>`,
        days: [
            {
                day: "Dia 1",
                title: "Primeiro Dia - São Jorge, o dom da fé",
                content: `<div class="day-specific-content">
                    <p class="italic text-blue-800">“A vida eterna consiste em que vos reconheçam, o verdadeiro e único Deus, e a Jesus Cristo que enviastes” (Jo 17, 3). “Seu mandamento é este: que tenhamos fé no nome de seu filho, Jesus Cristo, e nos amemos uns aos outros, como ele mandou” (1Jo 3,23).</p>
                    <h5 class="mt-6 font-bold text-lg">Reflexão:</h5>
                    <p>A fé é um dom de Deus oferecido a todos e que necessita ser cultivada no espírito. No Antigo Testamento, a fé dirige-se ao povo de Israel como fidelidade ao Deus único, visto que eram tentados a passar para o culto dos deuses pagãos que os cercavam. O Novo Testamento mostra-nos a fé que tem como centro Jesus Cristo, o ungido e enviado de Deus a este mundo. Hoje, os deuses pagãos mudaram de nome. Há muitas pessoas que adoram o dinheiro, a ganância, o poder que oprime, a prática das injustiças e das maldades, o deus do prazer e do orgulho.</p>
                    <p class="mt-4">São Jorge, iluminado pela fé, encontrou este Jesus e se propôs amá-Lo de coração, desde sua infância. Invoque São Jorge quando sua fé em Deus vacilar, quando seu coração ficar entristecido, quando o desânimo cair em sua vida. Quando você achar que tudo está perdido, invoque São Jorge.</p>
                </div>`
            },
            {
                day: "Dia 2",
                title: "Segundo Dia - São Jorge, convertido a Deus",
                content: `<div class="day-specific-content">
                    <p class="italic text-blue-800">“Se vos voltardes para Ele de todo coração e em presença praticardes a verdade, Ele também se voltará para vós e não mais vos ocultará a sua face” (Tb 13,6). “Filho, pecaste? Não o faças mais, e, pelas faltas passadas, pede perdão” (Eclo 21,1).</p>
                    <h5 class="mt-6 font-bold text-lg">Reflexão:</h5>
                    <p>São Jorge encontrou-se com Jesus desde menino, pelos ensinamentos de seus pais. Sua alma ficou em paz. As vaidades do mundo, os prazeres do pecado, os impulsos de violência não dominavam seu espírito. Isso lhe custou muitos sofrimentos pelo nome de Jesus. Como soldado, aprendeu a ser corajoso nas decisões, mesmo que lhe custasse a vida. Foi, dessa forma, movido por Deus que converteu muitos cristão e mártires de seu tempo, e até hoje continua mudando o coração de muitos. Para você também se converter, é preciso tomar uma firme decisão. Como São jorge, você deve ser fiel nas práticas da fé de sua vida de cristão.</p>
                    <p class="mt-4">São Jorge, ajudai-me no momento de minha morte a ser também uma alma possuída, não pelo mundo, que passa, mas por Deus, que permanece.</p>
                </div>`
            },
            {
                day: "Dia 3",
                title: "Terceiro Dia - São Jorge e os dois caminhos",
                content: `<div class="day-specific-content">
                    <p class="italic text-blue-800">“Irmãos, vivam segundo o Espírito e assim não farão mais o que os instintos egoístas desejam. Porque os instintos egoístas têm desejos que estão contra o Espírito, e o Espírito contra os instintos egoístas; os dois estão em conflito, de modo que vocês não fazem o que querem”. (Gl 5, 16-17).</p>
                    <h5 class="mt-6 font-bold text-lg">Reflexão:</h5>
                    <p>Quando uma pessoa se converte para Deus, ela se coloca diante de uma definição no projeto de vida que deseja realizar. Há dois caminhos: “a vida segundo a carne”, na qual a ganância de acumular, o roubo, a esperteza, as impurezas, o ódio, as discórdias e o prazer estão acima de tudo e tornam-se deuses em nós (ver Gl 5, 19-21), e o caminho do Espírito, “a vida segundo o Espírito”, que não nos livra do peso e das tribulações, mas organiza a vida a partir de Deus, nEle encontramos os frutos do Espírito: “amor, alegria, paz, paciência, sabedoria, prosperidade e domínio de si mesmo” (ver Gl 5, 22).</p>
                    <p class="mt-4">São Jorge assumiu sua escolha: “a vida segundo o Espírito de Deus” e sofreu, como consequência dessa escolha, o martírio. A vida em Deus não é só um ato, mas é a atitude e um processo de busca constante de Deus. Para Ele dirigimos e a partir dEle organizamos nossa vida. São Jorge fez assim e deseja tanto que você faça o mesmo! Cuide de sua fé pela oração e receba as bençãos que Deus tem para você.</p>
                </div>`
            },
            {
                day: "Dia 4",
                title: "Quarto Dia - São Jorge resiste às tentações e às provações",
                content: `<div class="day-specific-content">
                    <p class="italic text-blue-800">“Que ninguém, ao ser tentado, diga: 'é Deus que me tenta!'. Deus não pode ser tentado a fazer o mal. Ele não tenta ninguém. Cada um é tentado por sua própria luxúria que o atrai e o conduz. Depois a luxúria, tendo concebido, dará à luz o pecado e, atingindo seu termo final, gera a morte. Portanto não vos enganeis”. (Tg 1, 13-16).</p>
                    <h5 class="mt-6 font-bold text-lg">Reflexão:</h5>
                    <p>Chama-se “tentação” ou “provação” o momento de escolha de nossa vontade diante do mal que podemos praticar. È o momento precioso em que dizemos “sim” ao bem e “não” ao pecado; nem sempre seguimos o bom caminho. Nesses momentos é importante para o cristão invocar a força e a luz de Deus por meio da oração e, mais ainda, evitar toda ocasião que possa levá-lo a ser tentado para o mal. A tentação não nos mancha, por mais persistente que seja, a menos que demos nosso consentimento.</p>
                    <p class="mt-4">São Jorge foi tentado pelo demônio a trocar o seu amor a Cristo por bens materiais e resistiu a todos eles. Muita gente também é tentada a “deixar para amanhã” aquilo que a voz de Deus lhe fala no coração: o perdão de uma ofensa, a busca do perdão de Deus no Sacramento da confissão, a correção de um defeito ou vício, a tentativa de voltar a ser mais assíduo na religião... São Jorge é exemplo de prontidão em ouvir a voz de Deus no interior. Certamente ele rezou muitas vezes: “Pai, não me deixeis cair na tentação, mas livrai-me do mal. Amém!”.</p>
                </div>`
            },
            {
                day: "Dia 5",
                title: "Quinto Dia - São Jorge, fiel seguidor de Cristo",
                content: `<div class="day-specific-content">
                    <p class="italic text-blue-800">“Se alguém que me seguir, renuncie a si mesmo, tome sua cruz e me siga. Se alguém quiser salvar sua vida, vai perdê-la; mas quem perder sua vida por causa de mim vai salvá-la. O que adianta ao homem ganhar o mundo inteiro, mas perder sua vida?” (Mt 16, 24-26).</p>
                    <h5 class="mt-6 font-bold text-lg">Reflexão:</h5>
                    <p>São Jorge seguiu Jesus até o martírio e perdeu sua vida por causa dEle. A participação na vida e no destino de Jesus inclui “carregar a cruz” e sempre “segui-lo”, sem dEle se afastar. Quem segue Jesus vai com Ele aonde Ele for; vai com Ele até a morte, passando pelas cruzes da vida, pelas dificuldades e pelos obstáculos. O motivo dessa exigência é a união de vida nova que se estabelece entre o mestre e o discípulo. Seguimos Jesus com amor e por amor.</p>
                    <p class="mt-4">São Jorge quis e decidiu-se por esse caminho. Essa escolha e determinação foram muito importantes e fizeram crescer em São Jorge o amor pessoal, a amizade profunda, sua identificação com Jesus pelo modo novo de vida que Ele havia ensinado (ver Jo 15, 1-11). O exemplo desse Santo Mártir nos adverte para seguir Jesus no que Ele nos ensinou e nos meios que Ele nos deixou. Reclamamos dos deveres de cristãos e tudo nos parece difícil. Não somos cristãos praticantes, nem ajudamos nossa Igreja onde nos reunimos ao redor de Jesus. Fazemos o que Jesus mandou? Vivemos como discípulos de Jesus?</p>
                </div>`
            },
            {
                day: "Dia 6",
                title: "Sexto Dia - São Jorge, testemunho de Jesus",
                content: `<div class="day-specific-content">
                    <p class="italic text-blue-800">“Todo aquele que der testemunho de mim diante dos homens, também eu darei testemunho dele diante do meu Pai, que está no céu. Aquele que me renegar diante dos homens, eu também o renegarei diante do meu Pai que está no céu”. (Mt 10, 32).</p>
                    <h5 class="mt-6 font-bold text-lg">Reflexão:</h5>
                    <p>São Jorge viveu em uma época em que os cristãos eram perseguidos e cuja vida mostrava valores de bondade, perdão às injustiças, compreensão, ajuda mútua. Esses cristãos se reuniam para rezar, louvar, agradecer e ouvir a palavra de Deus em suas comunidades. A honestidade, a sinceridade, a união entre eles demonstravam um estilo de vida diferente daquele que ele vivia. São Jorge também viveu assim, com os valores do Evangelho de Jesus; testemunhou e valorizou o modo de vida do cristão, quando era ordenado a matá-los, e por eles entregou sua vida.</p>
                </div>`
            },
            {
                day: "Dia 7",
                title: "Sétimo Dia - São Jorge, fiel na fé",
                content: `<div class="day-specific-content">
                    <p class="italic text-blue-800">“É preciso que vocês perseverem na fé, firmados sobre bases sólidas, sem se deixar desviar da esperança prometida pelo evangelho que vocês ouviram”. (Cl 1,23). “Cuidado com falsos profetas que vêm a vocês com aparência de ovelhas, mas por dentro são lobos vorazes”. (Mt 7,15).</p>
                    <h5 class="mt-6 font-bold text-lg">Reflexão:</h5>
                    <p>São Jorge teve momentos de duras provocações em sua vida. Diante das adversidades, das perseguições, das calúnias e do desprezo de seus companheiros da guarda militar, ele conservou sua fidelidade na fé. Uma pessoa é fiel quando se monstra honrada, leal com aquilo que acredita e promete; quando não vacila e não falha, mas é pontual e exata em tudo o que faz. São José e Maria, a mãe de Jesus, são chamados assim porque, em todos os momentos que Deus se manifestou a eles, abraçaram Sua vontade sem vacilar e com prontidão. São Jorge foi também fiel na fé que depositou em Jesus. Guardou a fé até o fim, como fizeram muitos mártires naquela época.</p>
                    <p class="mt-4">Para conservar a fidelidade a Deus, é preciso a graça da perseverança que se alcança com a oração. É preciso conhecer e estudar, acolher e pôr em prática a palavra de Deus (ver Mt 7, 24-27). “De que adianta – diz São Tiago – alguém dizer que tem fé se não tiver obras? A fé, se não estiver acompanhada pelas obras, está absolutamente morta” (Tg 2,14s.). É preciso realizar obras para manter viva a fé.</p>
                </div>`
            },
            {
                day: "Dia 8",
                title: "Oitavo Dia - São Jorge, poderoso em oração",
                content: `<div class="day-specific-content">
                    <p class="italic text-blue-800">“Em todas as necessidades recorreram à oração e à prece, com agradecimentos, para apresentar seus pedidos a Deus”. (Fl 4,6). “Recomenda-se que peçam, rezem sempre, supliquem e agradeçam a Deus. Por isso, devemos rezar em todo lugar, erguendo para o céu mãos puras, sem ódio, sem desavenças!” (1Tm 2, 1-8).</p>
                    <h5 class="mt-6 font-bold text-lg">Reflexão:</h5>
                    <p>É certo que São Jorge fazia suas orações e suas preces e, principalmente, nas tentações, era a Deus que ele recorria. A oração é uma conversa com Deus. Rezar é falar ao Senhor, com a mente ou com a voz, tudo aquilo que se passa em nossa vida. Devemos rezar todos os dias a oração Pai-Nosso, pois foi Jesus que nos ensinou a dizer: “Quem reza se salva, quem não reza se perde. No momento em que nos deixamos de nos recomendar a Deus, o demônio nos vencerá”. Jesus também recomendou-nos rezar sempre e nunca deixar de o fazer (ver Lc 18,1). Quando você reza, é importante estar com o coração aberto à paz, ao amor. O ódio, o rancor, as mágoas, a desilusão, as ofensas que não se perdoam, o orgulho que nos impede de pedir desculpas, tudo isso prejudica nossa conversa de amor com Deus.</p>
                </div>`
            },
            {
                day: "Dia 9",
                title: "Nono Dia - São Jorge luta com os dons de Deus",
                content: `<div class="day-specific-content">
                    <p class="italic text-blue-800">“Nada trouxemos a este mundo e nada dele podemos levar. Aqueles que querem juntar riquezas caem na tentação, na armadilha, numa multidão de desejos insensatos e funestos, que mergulham os homens na ruína e na perdição. Por se terem entregado a ele, alguns se afastaram para longe da fé e transpassaram sua alma de tormentos sem fim”. (1Tm 6, 7-10).</p>
                    <h5 class="mt-6 font-bold text-lg">Reflexão:</h5>
                    <p>São Jorge defende e favorece a todos que a ele recorrem com fé e devoção, vencendo batalhas e demandas, questões complicadas, perseguições, injustiças, disputas e desentendimentos, como protetor das causas difíceis e que nos preocupam quanto a uma boa solução. Em geral, essas preocupações estão mais ligadas a negócios materiais. É importante, no entanto, a clareza do que nos pede Jesus: nunca colocar as riquezas no lugar de Deus! Os dons de Deus não se podem transformar em “deuses” em nosso coração. A raiz de todo o mal é a dependência que a riqueza gera em nós.</p>
                    <p class="mt-4">“O homem pode e deve querer bem as coisas criadas por Deus. Recebeu-as de Deus, guarda e vencerás como se momento saíssem das mãos de Deus. Agradece o seu Benfeitor e, usando e gozando das criaturas, em pobreza e liberdade de espírito, é introduzido na posse verdadeira do mundo, como se nada possuísse e tudo possuísse ao mesmo tempo” (Gaudium et spes, 37). Mais vale o pouco com o temor do Senhor do que uma grande riqueza cheia de ansiedade e preocupações. “Que adianta ao homem ganhar o mundo inteiro e arruinar sua vida?” (Mt 16, 26).</p>
                </div>`
            }
        ]
    },

    sao_marcos: {
        saintName: "São Marcos Evangelista",
        novenaTitle: "Novena a São Marcos Evangelista",
        description: "Novena em honra a São Marcos, o autor do Evangelho do Leão, padroeiro de Veneza, dos advogados, tabeliães e de todos os que propagam a Palavra de Deus (25 de abril).",
        image: "https://i.pinimg.com/1200x/13/d9/a0/13d9a05cfc1153588391d66d6ce20c88.jpg",
        initialPrayer: `<div class="prayer-block">
            <h4 class="section-title">Oração Inicial</h4>
            <p>Ó glorioso São Marcos, que por vossa humildade e prontidão em servir a Deus, fostes escolhido para escrever as palavras de salvação em vosso Santo Evangelho. Pedimos vossa intercessão para que nossos corações sejam terra fértil onde a semente da Palavra de Deus possa crescer e dar muitos frutos. Ensinai-nos a ser discípulos fiéis como fostes de São Pedro e São Paulo, anunciando com coragem que Jesus Cristo é o Senhor. Amém.</p>
        </div>`,
        finalPrayer: `<div class="prayer-block">
            <h4 class="section-title">Oração Final</h4>
            <p>Deus onipotente, que exaltastes o vosso evangelista São Marcos com a graça de anunciar a Boa Nova, concedei-nos a nós, por sua intercessão, a firmeza nos seus ensinamentos para que possamos seguir fielmente os passos de Jesus Cristo, vosso Filho. Protegei-nos de todos os males e guiai nossos passos no caminho da verdade. Por Cristo, nosso Senhor. Amém.</p>
            <p class="mt-4 font-semibold text-center">Pai-Nosso, Ave-Maria e Glória ao Pai.</p>
        </div>`,
        days: [
            {
                day: "Dia 1",
                title: "Primeiro Dia - A Voz que Clama no Deserto",
                content: `<div class="day-specific-content">
                    <p class="italic text-blue-800">“Princípio do Evangelho de Jesus Cristo, Filho de Deus. Conforme está escrito no profeta Isaías: 'Eis que envio o meu mensageiro à tua frente, para preparar o teu caminho'.” (Mc 1, 1-2)</p>
                    <h5 class="mt-6 font-bold text-lg">Reflexão:</h5>
                    <p>São Marcos começa seu relato com a voz de João Batista no deserto. Ele nos ensina que para receber Jesus, precisamos preparar o caminho através da conversão. O símbolo do leão, associado a São Marcos, representa o rugido desta voz que desperta os corações para o Reino de Deus. Hoje, peçamos a graça de silenciar o barulho do mundo para ouvir a voz do Senhor.</p>
                    <p class="mt-4">São Marcos, ajudai-nos a preparar o caminho para o Senhor em nossas famílias e em nossa sociedade.</p>
                </div>`
            },
            {
                day: "Dia 2",
                title: "Segundo Dia - O Chamado à Prontidão",
                content: `<div class="day-specific-content">
                    <p class="italic text-blue-800">“Jesus disse-lhes: 'Segui-me e eu farei de vós pescadores de homens'. Eles deixaram imediatamente as redes e seguiram-no.” (Mc 1, 17-18)</p>
                    <h5 class="mt-6 font-bold text-lg">Reflexão:</h5>
                    <p>São Marcos foi companheiro de São Pedro e aprendeu com ele a importância da prontidão. Em seu Evangelho, ele registra como os discípulos deixaram tudo "imediatamente" para seguir Jesus. Ser cristão exige de nós uma resposta rápida e decidida aos apelos de Deus. Não podemos adiar nossa santidade.</p>
                    <p class="mt-4">São Marcos, rogai para que tenhamos a coragem de deixar para trás tudo o que nos impede de seguir Jesus com total liberdade.</p>
                </div>`
            },
            {
                day: "Dia 3",
                title: "Terceiro Dia - Autoridade sobre o Mal",
                content: `<div class="day-specific-content">
                    <p class="italic text-blue-800">“Jesus ordenou-lhe com autoridade: 'Cala-te e sai desse homem!' E o espírito impuro, sacudindo-o violentamente e soltando um forte grito, saiu dele.” (Mc 1, 25-26)</p>
                    <h5 class="mt-6 font-bold text-lg">Reflexão:</h5>
                    <p>O Evangelho de Marcos enfatiza a vitória de Jesus sobre as forças do mal. Como padroeiro invocado contra tempestades e perigos, São Marcos nos mostra que Cristo tem poder absoluto sobre tudo o que nos oprime. Quando sentimos medo ou tentação, devemos recorrer ao nome de Jesus, o Leão de Judá que venceu o mundo.</p>
                    <p class="mt-4">São Marcos, protegei-nos de todas as ciladas do inimigo e guardai nossa fé nas horas de provação.</p>
                </div>`
            },
            {
                day: "Dia 4",
                title: "Quarto Dia - A Compaixão que Restaura",
                content: `<div class="day-specific-content">
                    <p class="italic text-blue-800">“Um leproso aproximou-se d’Ele... Jesus, compadecido, estendeu a mão, tocou-o e disse: 'Quero, fica limpo'.” (Mc 1, 40-41)</p>
                    <h5 class="mt-6 font-bold text-lg">Reflexão:</h5>
                    <p>São Marcos nos descreve um Cristo profundamente humano e compassivo. Ao tocar o leproso, Jesus quebra barreiras para trazer dignidade e cura. Marcos nos ensina que o Evangelho não é apenas palavras, mas ação concreta em favor dos que sofrem. Como ele serviu à Igreja primitiva nas necessidades básicas, somos chamados a ser o "toque" de Jesus para o próximo.</p>
                    <p class="mt-4">São Marcos, intercedei por todos os que sofrem no corpo e na alma, para que sintam a mão restauradora de Deus em suas vidas.</p>
                </div>`
            },
            {
                day: "Dia 5",
                title: "Quinto Dia - Semeadores da esperança",
                content: `<div class="day-specific-content">
                    <p class="italic text-blue-800">“O semeador saiu para semear... Outras sementes caíram em terra boa, deram fruto e cresceram.” (Mc 4, 3-8)</p>
                    <h5 class="mt-6 font-bold text-lg">Reflexão:</h5>
                    <p>Marcos nos lembra que somos o terreno de Deus. Como evangelista e fundador da Igreja em Alexandria, ele semeou a Palavra em terras distantes sob grandes riscos. Padroeiro dos que escrevem, registram e comunicam a verdade, ele nos convida a ser "terra boa" onde a mensagem de Cristo possa florescer e alimentar a muitos.</p>
                    <p class="mt-4">São Marcos, que vossa pregação inspire nossos diálogos e escritos para que sempre transmitam a luz da verdade divina.</p>
                </div>`
            },
            {
                day: "Dia 6",
                title: "Sexto Dia - Confiança nas Tempestades",
                content: `<div class="day-specific-content">
                    <p class="italic text-blue-800">“Jesus despertou, ordenou ao vento e disse ao mar: 'Cala-te, emudece!' O vento parou e fez-se uma grande bonança.” (Mc 4, 39)</p>
                    <h5 class="mt-6 font-bold text-lg">Reflexão:</h5>
                    <p>Muitos cristãos recorrem a São Marcos durante tempestades físicas e também nos momentos de turbulência emocional ou espiritual. Ele registrou o poder de Jesus em acalmar o mar para nos ensinar que, se Cristo está no barco da nossa vida, não há razão para o desespero. O rugido do leão é a voz que silencia os medos.</p>
                    <p class="mt-4">São Marcos, protegei nossas cidades das calamidades naturais e trazei paz às tempestades que agitam nosso coração.</p>
                </div>`
            },
            {
                day: "Dia 7",
                title: "Sétimo Dia - O Pão da Caridade",
                content: `<div class="day-specific-content">
                    <p class="italic text-blue-800">“Jesus viu uma grande multidão e teve compaixão deles... Tomou os cinco pães e os dois peixes, elevou os olhos ao céu, deu graças, partiu os pães e deu-os aos discípulos para que os distribuíssem.” (Mc 6, 34-41)</p>
                    <h5 class="mt-6 font-bold text-lg">Reflexão:</h5>
                    <p>O Evangelho de Marcos mostra Jesus como aquele que cuida da fome do povo. Marcos serviu pessoalmente à hospitalidade na casa de sua mãe em Jerusalém, onde os primeiros cristãos se reuniam. Ele nos ensina que a fé e a Eucaristia nos levam necessariamente à caridade e à partilha com os mais necessitados.</p>
                    <p class="mt-4">São Marcos, rogai para que nunca nos falte o Pão da Vida e que sejamos generosos em repartir nossos dons com os irmãos.</p>
                </div>`
            },
            {
                day: "Dia 8",
                title: "Oitavo Dia - A Coragem da Verdade",
                content: `<div class="day-specific-content">
                    <p class="italic text-blue-800">“Jesus perguntou-lhes: 'E vós, quem dizeis que eu sou?' Pedro respondeu: 'Tu és o Messias'.” (Mc 8, 29)</p>
                    <h5 class="mt-6 font-bold text-lg">Reflexão:</h5>
                    <p>São Marcos escreveu seu Evangelho para responder a esta pergunta central: Quem é Jesus? Como padroeiro dos advogados e tabeliães, ele nos ensina a ser defensores da verdade e a professar nossa fé com clareza. Não basta saber quem é Jesus por teoria, é preciso proclamá-lo como o único Salvador de nossa história pessoal.</p>
                    <p class="mt-4">São Marcos, dai-nos a firmeza de Pedro para confessar Cristo diante dos homens, através de nossas palavras e de nossa vida honesta.</p>
                </div>`
            },
            {
                day: "Dia 9",
                title: "Nono Dia - Enviados em Missão",
                content: `<div class="day-specific-content">
                    <p class="italic text-blue-800">“Ide por todo o mundo e pregai o Evangelho a toda criatura. O Senhor Jesus, depois de lhes ter falado, foi elevado ao céu e sentou-se à direita de Deus.” (Mc 16, 15-19)</p>
                    <h5 class="mt-6 font-bold text-lg">Reflexão:</h5>
                    <p>Concluímos a novena contemplando São Marcos como o grande missionário que levou a fé ao Egito e testemunhou até o martírio em Alexandria. Ele nos recorda que o Evangelho deve ser pregado a "toda criatura". Terminamos pedindo que, a exemplo de Marcos, sejamos portadores da Boa Nova no mundo digital e presencial, espalhando esperança.</p>
                    <p class="mt-4">São Marcos, fazei de nós missionários do vosso Evangelho e protegei-nos até o dia em que nos encontraremos na glória eterna do Pai. Amém.</p>
                </div>`
            }
        ]
    },

    sao_luis_montfort: {
        saintName: "São Luís Maria Grignion de Montfort",
        novenaTitle: "Novena de São Luís Maria Grignion de Montfort",
        description: "Grande propagador da devoção à Virgem Maria e autor do Tratado da Verdadeira Devoção. (19 a 27 de abril)",
        image: "https://i.pinimg.com/736x/de/a5/30/dea530bc046eef333dcde4daec597717.jpg",
        initialPrayer: `<div class="prayer-block">
            <h4 class="section-title">Oração Inicial</h4>
            <p><strong>Salve Maria!</strong></p>
            <p>Pelo sinal da Santa Cruz, livrai-me Deus nosso Senhor, dos nossos inimigos. Em nome do Pai e do Filho e do Espírito Santo. Amém.</p>
            <div class="mt-4 p-4 bg-primary/10 rounded-lg border-l-4 border-primary italic">
                <p><strong>Ato de Contrição</strong> (Refletir sobre seus pecados)</p>
                <p>Senhor meu, Jesus Cristo, Deus e homem verdadeiro, Criador e Redentor meu, por serdes Vós quem sois, sumamente bom e digno de ser amado sobre todas as coisas, e porque Vos amo e estimo, pesa-me, Senhor, de todo o meu coração, de Vos ter ofendido; pesa-me, também, de ter perdido o Céu e merecido o Inferno; e proponho-me firmemente, ajudado com o auxílio da vossa divina graça, emendar-me e nunca mais Vos tornar a ofender. Espero alcançar o perdão de minhas culpas pela vossa infinita misericórdia. Amém.</p>
            </div>
        </div>`,
        finalPrayer: "",
        days: [
            {
                day: "Dia 1",
                title: "1º Dia - Um homem para nossos tempos",
                content: `<div class="day-specific-content">
                    <h5 class="font-bold text-lg">Meditação:</h5>
                    <p>São Luís Maria foi um homem de convicção, homem de fé e compromisso. Fala sobre Deus porque antes tomou tempo para falar com Ele no recolhimento e no silêncio da vida interior. Um homem de profunda oração e um grande observador. Cheio de ousadia e entusiasmo, apaixonado por Jesus, por Maria e pela Cruz. Missionário fervoroso e zeloso, incansável na salvação das almas... Pobre e amante da santa pobreza de Cristo.</p>
                    <p class="mt-4">Que Ele nos conceda nesse primeiro dia de novena sua coragem e audácia. Hoje nos diz São Luís: <em>"Se não se arriscar algo por Deus, nada de grande se fará"</em>.</p>
                    <div class="mt-6 text-center font-bold text-white text-lg tracking-wide uppercase">
                        <p>Pai Nosso, 3 Ave-Marias, Glória.</p>
                    </div>
                    <div class="mt-8 p-6 bg-stone-100/50 rounded-xl border border-stone-200">
                        <h4 class="section-title text-center">Oração Final</h4>
                        <p>Ó meu Amado Jesus, olho nesse momento para Vós, e peço-Vos por intercessão de São Luís Maria Grignion de Montfort que foi digno ser exaltado como <strong>UM HOMEM PARA NOSSOS TEMPOS</strong> a graça que necessito (peça aqui a graça). Desde já vos agradeço Senhor, pela vossa bondade em escutar a minha oração.</p>
                        <p class="mt-4 text-center font-bold">São Luís Maria Grignion de Montfort, rogai por nós!</p>
                        <p class="text-center text-sm opacity-70">Glória ao Pai e ao Filho e ao Espírito Santo. Como era no princípio, agora e sempre. Amém.</p>
                    </div>
                </div>`
            },
            {
                day: "Dia 2",
                title: "2º Dia - Amante da Santíssima Virgem Maria",
                content: `<div class="day-specific-content">
                    <h5 class="font-bold text-lg">Meditação:</h5>
                    <blockquote class="brand-border pl-4 italic my-4">
                        <p>"Quando chegará, meu irmão, esse feliz tempo, esse século de Maria, em que muitas almas escolhidas e obtidas do Altíssimo por Maria, perdendo-se a si mesmas no abismo de seu interior, se transformem em cópias vivas da Santíssima Virgem para amar e glorificar a Jesus Cristo?! Esse tempo só chegará quando os corações conhecerem e viverem a devoção que eu ensino: “Para que venha o Reino de Jesus, venha o Reino de Maria!!!”" (T.V.D 217)</p>
                    </blockquote>
                    <p>Peçamos à São Luís, nesse segundo dia de novena, a graça de um amor filial e verdadeiro à Nossa Senhora. <em>“Se queres ser um grande santo, seja um grande devoto da Santíssima Virgem Maria”</em>.</p>
                    <div class="mt-6 text-center font-bold text-white text-lg tracking-wide uppercase">
                        <p>Pai Nosso, 3 Ave-Marias, Glória.</p>
                    </div>
                    <div class="mt-8 p-6 bg-stone-100/50 rounded-xl border border-stone-200">
                        <h4 class="section-title text-center">Oração Final</h4>
                        <p>Ó meu Amado Jesus, olho nesse momento para Vós, e peço-Vos por intercessão de São Luís Maria Grignion de Montfort que foi digno ser exaltado como <strong>AMANTE DA SANTÍSSIMA VIRGEM MARIA</strong> a graça que necessito (peça aqui a graça). Desde já vos agradeço Senhor, pela vossa bondade em escutar a minha oração.</p>
                        <p class="mt-4 text-center font-bold">São Luís Maria Grignion de Montfort, rogai por nós!</p>
                        <p class="text-center text-sm opacity-70">Glória ao Pai e ao Filho e ao Espírito Santo. Como era no princípio, agora e sempre. Amém.</p>
                    </div>
                </div>`
            },
            {
                day: "Dia 3",
                title: "3º Dia - Perfeito escravo de amor",
                content: `<div class="day-specific-content">
                    <h5 class="font-bold text-lg">Meditação:</h5>
                    <p>Nesses tempos modernos pode ser difícil falar de “escravidão de amor”, porém, sabemos que existe "uma liberdade que escraviza e uma escravidão que liberta". Tal é a escravidão Mariana, que transforma nossas correntes não em um peso, mas em asas que nos fazem voar para Deus. Tal escravidão não é outra coisa que a imitação que o verdadeiro cristão faz da sua Boa Mãe a Virgem Maria.</p>
                    <p class="mt-2">Escravo é aquele que está totalmente dedicado ao seu dono, de tal forma que ele não precisa dizer uma palavra, pois basta que o seu dono faça um sinal; e rapidamente executa a sua ordem. A vontade do escravo é a vontade do seu Senhor.</p>
                    <p class="mt-4 italic">Diz-nos São Luís: "Queres chegar a ser santo, muito santo? Não se preocupe demais com o que fazer ou o que não fazer, olha para Maria, torne-te seu escravo de Amor, abandonando-te como uma pequena criança em seu colo, que teus olhos não se afaste de Maria."</p>
                    <div class="mt-6 text-center font-bold text-white text-lg tracking-wide uppercase">
                        <p>Pai Nosso, 3 Ave-Marias, Glória.</p>
                    </div>
                    <div class="mt-8 p-6 bg-stone-100/50 rounded-xl border border-stone-200">
                        <h4 class="section-title text-center">Oração Final</h4>
                        <p>Ó meu Amado Jesus, olho nesse momento para Vós, e peço-Vos por intercessão de São Luís Maria Grignion de Montfort que foi digno ser exaltado como <strong>PERFEITO ESCRAVO DE AMOR</strong> a graça que necessito (peça aqui a graça). Desde já vos agradeço Senhor, pela vossa bondade em escutar a minha oração.</p>
                        <p class="mt-4 text-center font-bold">São Luís Maria Grignion de Montfort, rogai por nós!</p>
                        <p class="text-center text-sm opacity-70">Glória ao Pai e ao Filho e ao Espírito Santo. Como era no princípio, agora e sempre. Amém.</p>
                    </div>
                </div>`
            },
            {
                day: "Dia 4",
                title: "4º Dia - Apaixonado da cruz",
                content: `<div class="day-specific-content">
                    <h5 class="font-bold text-lg">Meditação:</h5>
                    <p>Apoiando-se naquela máxima de Jesus Cristo, de que para pertencer ao números de seus discípulos deve-se renunciar a si mesmo, carregar a sua cruz todos os dias e segui-Lo, São Luís procurava inspirar à todas as pessoas ao amor à cruz seja da natureza que fosse: enfermidades, injúrias, humilhações, desprezos, etc.</p>
                    <blockquote class="brand-border pl-4 italic my-4">
                        <p>“Um amigo da Cruz é um homem escolhido por Deus para ser unicamente um homem todo divino e elevado acima da razão, e todo em oposição aos sentimentos, por uma vida e uma luz de pura fé e por um amor ardente pela Cruz."</p>
                    </blockquote>
                    <p>Pelo amor às humilhações, esmaga o orgulho de Satanás; pelo amor à pobreza, triunfa da avareza do mundo; pelo amor à dor, amortece a sensualidade da carne.</p>
                    <div class="mt-6 text-center font-bold text-white text-lg tracking-wide uppercase">
                        <p>Pai Nosso, 3 Ave-Marias, Glória.</p>
                    </div>
                    <div class="mt-8 p-6 bg-stone-100/50 rounded-xl border border-stone-200">
                        <h4 class="section-title text-center">Oração Final</h4>
                        <p>Ó meu Amado Jesus, olho nesse momento para Vós, e peço-Vos por intercessão de São Luís Maria Grignion de Montfort que foi digno ser exaltado como <strong>APAIXONADO DA CRUZ</strong> a graça que necessito (peça aqui a graça). Desde já vos agradeço Senhor, pela vossa bondade em escutar a minha oração.</p>
                        <p class="mt-4 text-center font-bold">São Luís Maria Grignion de Montfort, rogai por nós!</p>
                        <p class="text-center text-sm opacity-70">Glória ao Pai e ao Filho e ao Espírito Santo. Como era no princípio, agora e sempre. Amém.</p>
                    </div>
                </div>`
            },
            {
                day: "Dia 5",
                title: "5º Dia - Modelo de sacerdote e amante da Eucaristia",
                content: `<div class="day-specific-content">
                    <h5 class="font-bold text-lg">Meditação:</h5>
                    <p>No dia da sua ordenação sacerdotal, depois da cerimônia, passou o restante do dia diante do sacrário, um sacrário solitário e escondido. Desde a sua ordenação até a sua primeira Missa passou oito dias em retiro absoluto.</p>
                    <p class="mt-4 p-4 bg-stone-50 rounded italic text-center">“Assisti a sua primeira Missa, disse Blain, no altar parecia mais um anjo do que um homem”.</p>
                    <div class="mt-6 text-center font-bold text-white text-lg tracking-wide uppercase">
                        <p>Pai Nosso, 3 Ave-Marias, Glória.</p>
                    </div>
                    <div class="mt-8 p-6 bg-stone-100/50 rounded-xl border border-stone-200">
                        <h4 class="section-title text-center">Oração Final</h4>
                        <p>Ó meu Amado Jesus, olho nesse momento para Vós, e peço-Vos por intercessão de São Luís Maria Grignion de Montfort que foi digno ser exaltado como <strong>MODELO DE SACERDOTE E AMANTE DA EUCARISTIA</strong> a graça que necessito (peça aqui a graça). Desde já vos agradeço Senhor, pela vossa bondade em escutar a minha oração.</p>
                        <p class="mt-4 text-center font-bold">São Luís Maria Grignion de Montfort, rogai por nós!</p>
                        <p class="text-center text-sm opacity-70">Glória ao Pai e ao Filho e ao Espírito Santo. Como era no princípio, agora e sempre. Amém.</p>
                    </div>
                </div>`
            },
            {
                day: "Dia 6",
                title: "6º Dia - Incansável missionário",
                content: `<div class="day-specific-content">
                    <h5 class="font-bold text-lg">Meditação:</h5>
                    <p>Era todo fogo na pregação!!! Onde Montfort chegava o pecado teria que sair correndo. Mas não era ele que conseguia as conversões, era a Virgem Maria a quem ele invocava constantemente. Ela rogava a Jesus e Jesus tocava os corações.</p>
                    <p class="mt-4">São Luís deixou escrito: <em>"Nasceu em mim uma grande confiança sem limites em Jesus e na sua Santíssima Mãe. Não tenho medo em ir nas fazendas, nos campos, nos jogos, nem nos lugares de perdições"</em>. E viajava com muita confiança pois sabia que nunca estava só. Levava sempre consigo um crucifixo e uma imagem da Virgem Maria; Jesus e Maria se comportavam como os seus defensores!</p>
                    <div class="mt-6 text-center font-bold text-white text-lg tracking-wide uppercase">
                        <p>Pai Nosso, 3 Ave-Marias, Glória.</p>
                    </div>
                    <div class="mt-8 p-6 bg-stone-100/50 rounded-xl border border-stone-200">
                        <h4 class="section-title text-center">Oração Final</h4>
                        <p>Ó meu Amado Jesus, olho nesse momento para Vós, e peço-Vos por intercessão de São Luís Maria Grignion de Montfort que foi digno ser exaltado como <strong>INCANSÁVEL MISSIONÁRIO</strong> a graça que necessito (peça aqui a graça). Desde já vos agradeço Senhor, pela vossa bondade em escutar a minha oração.</p>
                        <p class="mt-4 text-center font-bold">São Luís Maria Grignion de Montfort, rogai por nós!</p>
                        <p class="text-center text-sm opacity-70">Glória ao Pai e ao Filho e ao Espírito Santo. Como era no princípio, agora e sempre. Amém.</p>
                    </div>
                </div>`
            },
            {
                day: "Dia 7",
                title: "7º Dia - Homem de vida interior",
                content: `<div class="day-specific-content">
                    <h5 class="font-bold text-lg">Meditação:</h5>
                    <p>São Luís passava horas e horas em oração, tinha uma fé viva. Em seu livro, “O Amor à Sabedoria Eterna”, ele nos diz: <em>“devemos rezar com uma fé viva e perseverante, sem titubear, com uma Fé Pura, sem necessidade em consolações sensíveis, sem visões ou revelações privadas”</em>.</p>
                    <p class="mt-2">A oração é um dialogo com Deus, e o meio que São Luís nos dá é Maria Santíssima. Ela é o caminho fácil, curto, perfeito e seguro. É Nela que São Luís vivia uma contínua oração e nos diz: <em>“Maria Santíssima é o Santuário onde encontramos o Divino Salvador”</em>.</p>
                    <p class="mt-4">Peçamos a São Luís a graça de sermos almas de uma profunda vida interior, mantendo nossas mentes nas verdades espirituais.</p>
                    <div class="mt-6 text-center font-bold text-white text-lg tracking-wide uppercase">
                        <p>Pai Nosso, 3 Ave-Marias, Glória.</p>
                    </div>
                    <div class="mt-8 p-6 bg-stone-100/50 rounded-xl border border-stone-200">
                        <h4 class="section-title text-center">Oração Final</h4>
                        <p>Ó meu Amado Jesus, olho nesse momento para Vós, e peço-Vos por intercessão de São Luís Maria Grignion de Montfort que foi digno ser exaltado como <strong>HOMEM DE VIDA INTERIOR</strong> a graça que necessito (peça aqui a graça). Desde já vos agradeço Senhor, pela vossa bondade em escutar a minha oração.</p>
                        <p class="mt-4 text-center font-bold">São Luís Maria Grignion de Montfort, rogai por nós!</p>
                        <p class="text-center text-sm opacity-70">Glória ao Pai e ao Filho e ao Espírito Santo. Como era no princípio, agora e sempre. Amém.</p>
                    </div>
                </div>`
            },
            {
                day: "Dia 8",
                title: "8º Dia - Devoto de Jesus e Maria",
                content: `<div class="day-specific-content">
                    <h5 class="font-bold text-lg">Meditação:</h5>
                    <p>O maior mistério que se honra e se celebra na devoção da escravidão de amor é o Mistério da Encarnação. O mistério de Jesus Cristo presente no seio da Virgem Maria. Nele contemplamos a escravidão de Jesus em Maria, e pedimos a graça de viver como Jesus em Maria, segundo aquela bonita oração: <em>“Ó Jesus que viveis em Maria, vinde a viver em vossos servos"</em>.</p>
                    <p class="mt-2">Eles estão tão intimamente unidos, que um está totalmente unido ao outro. Jesus está todo em Maria, e Maria toda em Jesus; ou melhor Ela não vive mais, é Jesus que vive nela. Antes separamos a luz do Sol do que Maria de Jesus.</p>
                    <div class="mt-6 text-center font-bold text-white text-lg tracking-wide uppercase">
                        <p>Pai Nosso, 3 Ave-Marias, Glória.</p>
                    </div>
                    <div class="mt-8 p-6 bg-stone-100/50 rounded-xl border border-stone-200">
                        <h4 class="section-title text-center">Oração Final</h4>
                        <p>Ó meu Amado Jesus, olho nesse momento para Vós, e peço-Vos por intercessão de São Luís Maria Grignion de Montfort que foi digno ser exaltado como <strong>DEVOTO DE JESUS E MARIA</strong> a graça que necessito (peça aqui a graça). Desde já vos agradeço Senhor, pela vossa bondade em escutar a minha oração.</p>
                        <p class="mt-4 text-center font-bold">São Luís Maria Grignion de Montfort, rogai por nós!</p>
                        <p class="text-center text-sm opacity-70">Glória ao Pai e ao Filho e ao Espírito Santo. Como era no princípio, agora e sempre. Amém.</p>
                    </div>
                </div>`
            },
            {
                day: "Dia 9",
                title: "9º Dia - Homem de caridade ardente",
                content: `<div class="day-specific-content">
                    <h5 class="font-bold text-lg">Meditação:</h5>
                    <p>Havia no coração do santo uma caridade ardente pelo próximo. Por isso Montfort amava ardentemente os pobres materialmente e espiritualmente. Dos primeiros estava sempre à disposição, fazia-se seu escravo e buscava ajudá-los como podia. Muitas vezes trocava suas roupas com os pobres, chegando um dia a ser confundido como mendigo.</p>
                    <p class="mt-4 text-center italic font-brand text-xl text-primary">O reino de Jesus Cristo por Maria.</p>
                    <p class="mt-4">Fazê-la conhecida e amada, para fazer Jesus conhecido e amado. Conduzir as almas acorrentadas pelo amor aos pés de Maria, para que esta boa Mãe as conduza a seu Divino filho: é o belo programa que Montfort idealizou e ao qual consagrou sua existência.</p>
                    <div class="mt-6 text-center font-bold text-white text-lg tracking-wide uppercase">
                        <p>Pai Nosso, 3 Ave-Marias, Glória.</p>
                    </div>
                    <div class="mt-8 p-6 bg-stone-100/50 rounded-xl border border-stone-200">
                        <h4 class="section-title text-center">Oração Final</h4>
                        <p>Ó meu Amado Jesus, olho nesse momento para Vós, e peço-Vos por intercessão de São Luís Maria Grignion de Montfort que foi digno ser exaltado como <strong>HOMEM DE CARIDADE ARDENTE</strong> a graça que necessito (peça aqui a graça). Desde já vos agradeço Senhor, pela vossa bondade em escutar a minha oração.</p>
                        <p class="mt-4 text-center font-bold">São Luís Maria Grignion de Montfort, rogai por nós!</p>
                        <p class="text-center text-sm opacity-70">Glória ao Pai e ao Filho e ao Espírito Santo. Como era no princípio, agora e sempre. Amém.</p>
                    </div>
                </div>`
            }
        ]
    },

    santa_gianna_beretta: {
        saintName: "Santa Gianna Beretta Molla",
        novenaTitle: "Novena a Santa Gianna Beretta Molla",
        description: "Médica, esposa, mãe e mártir. Uma mulher como tantas outras, mas com alguma coisa a mais. (19 a 27 de abril)",
        image: "https://i.pinimg.com/1200x/3e/f0/b2/3ef0b28700ca5d1dbeba832b30a43ff3.jpg",
        initialPrayer: `<div class="prayer-block"><h4 class="section-title">Oração para todos os dias</h4><p>Ó Deus, nosso Pai, Tu que tens dado à Tua Igreja Santa Gianna Beretta Molla, que na juventude Te procurou amorosamente e Te levou a outros jovens, empenhando-os apostolicamente como testemunha na Ação Católica e colocando-os ao lado dos doentes e idosos para ser para eles ajuda e conforto.</p><p class="mt-4">Nós Te agradecemos por este dom de jovem amorosamente empenhada. Com seu exemplo, dá-nos a graça de consagrar nossa vida a Teu serviço, para alegria de nossos irmãos.</p><p class="mt-4 text-center font-semibold">Glória ao Pai…</p><p class="mt-4">Ó Jesus, Redentor dos homens, Tu chamaste Santa Gianna a desenvolver a missão de médica, conforto dos corpos e das almas, vendo a Ti mesmo nos irmãos e nos pequenos indefesos. Nós Te agradecemos por Te haveres mostrado nesta Tua serva como "o que serve" e acalma a dor dos homens. Acolhendo sua lição, fazei-nos generosos cristãos a serviço dos irmãos, particularmente daqueles que participam de tua Cruz.</p><p class="mt-4 text-center font-semibold">Glória ao Pai…</p><p class="mt-4">Ó Deus, Espírito santificador, que amas a Igreja como Tua Esposa, Tu infundiste no coração de Santa Gianna um pouco do Teu amor para colaborar no Teu maravilhoso plano de salvação, dando-Te novos filhos, para que pudessem conhecer-Te e amar-Te. Nós Te agradecemos por este modelo de esposa e por seu corajoso testemunho. Dá às nossas famílias a serena e a cristã presença de esposas empenhadas em transformar nossas casas de homens em cenáculos de fé e de amor, com generoso trabalho e santificante serviço.</p><p class="mt-4 text-center font-semibold">Glória ao Pai…</p><p class="mt-4">Ó Deus criador e amante do ser vivente, Tu estavas ao lado de Santa Gianna quando se encontrou no dilema de salvar a própria vida ou a vida da criança que, qual dom esperado, levava em seu seio. Confiando só em Ti e reclamando o mandamento de defesa da vida, ela encontrou a coragem de cumprir o seu dever de mãe e de dizer "sim" à nova vida, sacrificando generosamente a própria, coroando uma vida cristã exemplar.</p><p class="mt-4">Por intercessão de Maria, Mãe de Jesus, e segundo o exemplo de Gianna, dispõe todas as mães a acolherem, com amor, cada vida nascente, e sustentarem a todos no respeito à vida.</p><div class="mt-6 text-center font-bold text-white text-lg tracking-wide uppercase"><p>Ave Maria…</p></div></div>`,
        finalPrayer: "",
        days: [
            {
                day: "Dia 1",
                title: "1º Dia – Pelas famílias",
                content: `<div class="day-specific-content"><h5 class="font-bold text-lg">Meditação:</h5><p>Gianna foi esposa e mãe amorosa, por isso edificou sua família. Casou-se com o engenheiro Pietro Molla em 1955, assumindo total doação <em>"para formar uma família realmente cristã"</em>. Tiveram quatro filhos. Também por meio do martírio, Gianna tornou fecundo o seu lar.</p><p class="mt-4">Neste primeiro dia, rezemos por todas as famílias necessitadas de reencontrar o caminho do amor, do perdão e da abertura à vida. E pelas que já vivem em harmonia, para que Deus, pela intercessão desta santa, conserve-as na caridade e no testemunho. Que o Senhor providencie aquilo que cada uma mais necessita para cumprir sua missão no mundo.</p><div class="mt-8 p-6 bg-stone-100/50 rounded-xl border border-stone-200"><h4 class="section-title text-center">Intenção do dia</h4><p class="text-center italic">Pelas famílias — que encontrem o caminho do amor, do perdão e da abertura à vida.</p><p class="mt-4 text-center font-bold">Santa Gianna Beretta Molla, rogai por nós!</p></div></div>`
            },
            {
                day: "Dia 2",
                title: "2º Dia – Pelos jovens",
                content: `<div class="day-specific-content"><h5 class="font-bold text-lg">Meditação:</h5><p>Desde a juventude, Gianna acolheu plenamente o dom da fé e a educação cristã recebidos de seus pais. Esta formação ensinou-lhe a considerar a vida como um dom maravilhoso de Deus, a ter confiança na Providência e a estimar a necessidade e a eficácia da oração.</p><p class="mt-4">Durante os anos de estudos escolares e depois, na faculdade de medicina, enquanto se dedicava aos seus deveres, vinculava sua fé a um compromisso generoso de apostolado entre os jovens da Ação Católica e de caridade para com os idosos e os necessitados nas Conferências de São Vicente.</p><p class="mt-4">Neste segundo dia da novena, rezemos pelos jovens, para que encontrem Aquele que dá pleno sentido à vida: <strong>Jesus Cristo</strong>.</p><div class="mt-8 p-6 bg-stone-100/50 rounded-xl border border-stone-200"><h4 class="section-title text-center">Intenção do dia</h4><p class="text-center italic">Pelos jovens — que encontrem em Jesus Cristo o pleno sentido da vida.</p><p class="mt-4 text-center font-bold">Santa Gianna Beretta Molla, rogai por nós!</p></div></div>`
            },
            {
                day: "Dia 3",
                title: "3º Dia – Pelos vocacionados",
                content: `<div class="day-specific-content"><h5 class="font-bold text-lg">Meditação:</h5><p>Gianna ingressou na Universidade de Milão e de Pavia. Formou-se em medicina e cirurgia em 1949. Especializou-se em pediatria, dada a sua paixão de servir as crianças. E agora? Que fazer da sua vida? Consagrar-se a Deus na vida religiosa e ajudar seu irmão, padre Alberto, que trabalhava em Grajaú, no Maranhão? Este era o seu sonho.</p><p class="mt-4">Mas uma misteriosa reviravolta colocou-a em outro caminho. Deus lhe havia preparado um esposo. Sua vocação seria a de esposa e mãe. Encontrou um jovem engenheiro, honesto, trabalhador, piedoso e apostólico. Seu nome era Pietro Molla. Seguindo os conselhos de seu diretor espiritual e o parecer de seus parentes, Gianna convenceu-se de que sua vocação era o matrimônio. Casou-se em 24 de setembro de 1955.</p><p class="mt-4">Hoje peçamos a Santa Gianna sua intercessão pelas pessoas que trilham um caminho de discernimento vocacional e do estado de vida. Que o Senhor ajude seus filhos a descobrirem e acolherem todos os dons que Ele lhes concede para serem felizes e santos.</p><div class="mt-8 p-6 bg-stone-100/50 rounded-xl border border-stone-200"><h4 class="section-title text-center">Intenção do dia</h4><p class="text-center italic">Pelos vocacionados — no discernimento da vocação e do estado de vida.</p><p class="mt-4 text-center font-bold">Santa Gianna Beretta Molla, rogai por nós!</p></div></div>`
            },
            {
                day: "Dia 4",
                title: "4º Dia – Pelos noivos",
                content: `<div class="day-specific-content"><h5 class="font-bold text-lg">Meditação:</h5><blockquote class="brand-border pl-4 italic my-4"><p>"Quero formar uma família verdadeiramente cristã; um pequeno cenáculo onde o Senhor reine nos nossos corações, ilumine as nossas decisões, guie os nossos programas."</p></blockquote><p>Assim escrevia Gianna a Pietro Molla nos meses que antecederam o casamento. Em 11 de abril de 1955, ela iniciou seu noivado com Pietro e preparou-se para o matrimônio com expansiva alegria. Ao Senhor tudo agradecia e orava.</p><p class="mt-4">Neste quarto dia da novena, peçamos pelos noivos, para que o Senhor, pela intercessão de Santa Gianna, prepare-os com Sua graça para as bênçãos e desafios do matrimônio, caminho de santificação e de felicidade. Que Deus purifique seus corações de todo mundanismo e lhes dê perseverança no verdadeiro amor.</p><div class="mt-8 p-6 bg-stone-100/50 rounded-xl border border-stone-200"><h4 class="section-title text-center">Intenção do dia</h4><p class="text-center italic">Pelos noivos — preparação para o matrimônio com fé, pureza e amor verdadeiro.</p><p class="mt-4 text-center font-bold">Santa Gianna Beretta Molla, rogai por nós!</p></div></div>`
            },
            {
                day: "Dia 5",
                title: "5º Dia – Pelos profissionais de saúde",
                content: `<div class="day-specific-content"><h5 class="font-bold text-lg">Meditação:</h5><p>Gianna fez de sua profissão uma missão: servir a Cristo na pessoa do irmão doente. Formada em medicina e cirurgia em 1949, abriu seu consultório em Mêsero em 1950. Especializou-se em pediatria na Universidade de Milão em 1952.</p><p class="mt-4">No consultório, transformado em lugar de afeto e amor, ela não buscava apenas curar enfermidades, mas também ouvir e aconselhar as mães. Suas palavras eram de conforto e ânimo, capazes de cicatrizar as feridas da alma.</p><blockquote class="brand-border pl-4 italic my-4"><p>"A santidade é o cotidiano da vida vivida à luz de Deus."</p></blockquote><p>Hoje rezemos por todos os profissionais de saúde, para que trabalhem não somente em vista de garantir seu sustento material, mas de amar o próximo, exercendo a caridade de Cristo para com cada um. Que encontrem verdadeiro sentido em suas profissões e abracem o compromisso de respeito à vida humana.</p><div class="mt-8 p-6 bg-stone-100/50 rounded-xl border border-stone-200"><h4 class="section-title text-center">Intenção do dia</h4><p class="text-center italic">Pelos profissionais de saúde — que sirvam a Cristo em cada paciente.</p><p class="mt-4 text-center font-bold">Santa Gianna Beretta Molla, rogai por nós!</p></div></div>`
            },
            {
                day: "Dia 6",
                title: "6º Dia – Pelas gestantes",
                content: `<div class="day-specific-content"><h5 class="font-bold text-lg">Meditação:</h5><p>Em setembro de 1961, no final do segundo mês de gravidez, Gianna viu-se atingida pelo sofrimento e pela dor. Apareceu um fibroma no útero. Antes de ser operada, embora sabendo o grave perigo de prosseguir com a gravidez, suplicou ao cirurgião que salvasse a vida que trazia em seu seio e, então, entregou-se à Divina Providência e à oração.</p><p class="mt-4">Alguns dias antes do parto, sempre com grande confiança na Providência, demonstrou-se pronta a sacrificar sua vida para salvar a do filho:</p><blockquote class="brand-border pl-4 italic my-4"><p>"Se deveis decidir entre mim e o filho, nenhuma hesitação: escolhei – e isto o exijo – a criança. Salvai-a."</p></blockquote><p>Na manhã de 21 de abril de 1962, nasce Gianna Emanuela. Em 28 de abril, repetindo <em>"Jesus, eu te amo, eu te amo"</em>, Gianna morre santamente, aos 39 anos.</p><p class="mt-4">Neste sexto dia, peçamos por todas as gestantes, para que sejam renovadas na coragem e confiança na providência divina. Que pela intercessão de Santa Gianna, sejam assistidas em suas necessidades materiais e espirituais durante a gravidez e o parto.</p><div class="mt-8 p-6 bg-stone-100/50 rounded-xl border border-stone-200"><h4 class="section-title text-center">Intenção do dia</h4><p class="text-center italic">Pelas gestantes — coragem, confiança e proteção na gravidez e no parto.</p><p class="mt-4 text-center font-bold">Santa Gianna Beretta Molla, rogai por nós!</p></div></div>`
            },
            {
                day: "Dia 7",
                title: "7º Dia – Pelas crianças",
                content: `<div class="day-specific-content"><h5 class="font-bold text-lg">Meditação:</h5><p>Mesmo antes de ser mãe, Gianna demonstrava grande amor pelas crianças que evangelizava durante as colônias paroquiais e a quem se dedicava enquanto médica pediatra. Mais tarde, educou seus filhos Pierluigi, Mariolina e Laura na fé e na caridade.</p><blockquote class="brand-border pl-4 italic my-4"><p>"Comportem-se bem, obedeçam a Mariuccia e a Savina. Pierluigi, que é o mais velho, brigue com suas duas irmãzinhas sem implicar. Mariolina, que é 'a maior', seja boa e complacente com Lauretta. Trago vocês no coração e penso em vocês a cada momento. Rezem uma Ave Maria por mim, assim Nossa Senhorinha me fará ficar boa logo e poderei retornar para abraçar vocês e ficarmos sempre juntos."</p></blockquote><p>Hoje, no sétimo dia da novena, rezemos pelas crianças do mundo inteiro, em especial as que sofrem a falta de amor. Que Deus, através da intercessão de Santa Gianna, conserve-lhes a pureza e as livre do mal.</p><div class="mt-8 p-6 bg-stone-100/50 rounded-xl border border-stone-200"><h4 class="section-title text-center">Intenção do dia</h4><p class="text-center italic">Pelas crianças — pureza, proteção e amor.</p><p class="mt-4 text-center font-bold">Santa Gianna Beretta Molla, rogai por nós!</p></div></div>`
            },
            {
                day: "Dia 8",
                title: "8º Dia – Pelos idosos e pobres",
                content: `<div class="day-specific-content"><h5 class="font-bold text-lg">Meditação:</h5><p>Os idosos e os pobres eram, junto às crianças, os pacientes por quem Gianna demonstrava especial cuidado.</p><blockquote class="brand-border pl-4 italic my-4"><p>"Com seus pacientes, ela tinha uma maneira especial de atendê-los, ouvindo as suas dores e necessidades. Após a sua morte, foi descoberto que eles não saíam do consultório sem que seus problemas tivessem sido resolvidos. Gianna procurava emprego aos que não tinham ou doava remédios aos necessitados."</p></blockquote><p class="mt-4">Rezemos hoje pelos idosos e pobres, pedindo a intercessão de Santa Gianna para que sejam amparados em suas necessidades e encontrem consolo na providência divina. Que o Espírito Santo aja no coração de cada homem e de cada mulher para que reconheçam neles a face de Cristo, e usem de generosidade e misericórdia.</p><div class="mt-8 p-6 bg-stone-100/50 rounded-xl border border-stone-200"><h4 class="section-title text-center">Intenção do dia</h4><p class="text-center italic">Pelos idosos e pobres — acolhimento, cuidado e reconhecimento da face de Cristo neles.</p><p class="mt-4 text-center font-bold">Santa Gianna Beretta Molla, rogai por nós!</p></div></div>`
            },
            {
                day: "Dia 9",
                title: "9º Dia – Pela Igreja",
                content: `<div class="day-specific-content"><h5 class="font-bold text-lg">Meditação:</h5><p>A santidade de homens e mulheres de todos os tempos é o tesouro da Igreja, porque vem da santidade de Cristo, o Esposo, e se derrama em graças sobre todo o seu corpo místico.</p><p class="mt-4">Por isso, a vida e o martírio de Gianna, unidos à paixão, morte e ressurreição de Jesus, gerará frutos na Igreja até o fim dos tempos.</p><blockquote class="brand-border pl-4 italic my-4"><p>"No apostolado, não devemos nos colocar em primeiro lugar, anunciar a si mesmo, mas ao contrário, devemos desaparecer e dar sempre o primeiro lugar a Jesus Cristo."</p></blockquote><p class="mt-4">No último dia da novena, peçamos por toda a Igreja, pelo Papa, pelos sacerdotes e cada batizado. Que o heroísmo silencioso de Santa Gianna inspire em cada cristão a coragem de viver o Evangelho até o fim — na medicina, no lar, no trabalho, na oração.</p><div class="mt-8 p-6 bg-stone-100/50 rounded-xl border border-stone-200"><h4 class="section-title text-center">Intenção do dia</h4><p class="text-center italic">Pela Igreja — pelo Papa, pelos sacerdotes e por todo batizado.</p><p class="mt-4 text-center font-bold">Santa Gianna Beretta Molla, rogai por nós!</p></div></div>`
            }
        ]
    },


    santa_catarina_siena: {
        saintName: "Santa Catarina de Siena",
        novenaTitle: "Novena a Santa Catarina de Siena",
        description: "Doutora da Igreja e Padroeira da Europa. Novena de 20 a 28 de abril.",
        image: "https://i.pinimg.com/736x/fc/e8/7d/fce87d41f3daf1f431638303ccb0d14c.jpg",
        initialPrayer: `<div class="prayer-block"><h4 class="section-title">Oração para todos os dias</h4><p>Ó notável maravilha da Igreja, serva virgem, que por causa de suas extraordinárias virtudes e pelo que conseguistes para a Igreja e a Sociedade fostes aclamada e abençoada por todos. Vire teu bondoso olhar para mim, que confiante na tua poderosa proteção peço com todo o ardor da afeição e súplica a ti que obtenha pelas tuas preces o favor que ardentemente desejo.</p><p class="mt-4">Com tua imensa caridade recebestes de Deus os mais estupendos milagres e tornou-se a alegria e a esperança de todos nós que oramos a ti, e rogamos ao teu coração, que tudo recebestes do Divino Redentor. Serva e virgem, demonstre de novo a sua graça e sua caridade; e, consiga para nós a graça suplicada com a eficácia de sua intercessão junto a Jesus. E, ainda a graça especial de que um dia estejamos juntos no Paraíso em eterna alegria e felicidade. Amém.</p><p class="mt-4 italic text-center">(Faça agora o seu pedido a Deus por intercessão de Santa Catarina de Siena)</p><div class="mt-4 text-center font-semibold"><p>Pai Nosso, Ave-Maria, Glória.</p></div><p class="mt-4 text-center text-sm">℣. Rogai por nós, Santa Catarina de Siena.<br/>℟. Para que sejamos dignos das promessas de Cristo.</p><p class="mt-4 italic text-sm">Oremos: Fazei, ó Deus onipotente, com que, venerando o nascimento da Bem-Aventurada virgem Catarina, nos alegremos com esta solenidade anual, e devidamente aproveitemos de tão alto exemplo de virtude. Por Nosso Senhor Jesus Cristo. Amém.</p></div>`,
        finalPrayer: "",
        days: [
            {
                day: "Dia 1",
                title: "1º Dia – A chamada de Deus desde a infância",
                content: `<div class="day-specific-content"><h5 class="font-bold text-lg">Meditação:</h5><p>Nascida em Siena, na Itália, por volta de 1347, <em>"Catarina ouvira o chamamento de Deus desde a mais tenra infância, numa idade em que, normalmente, só se pensa em brincar"</em>. Passava sua infância aproveitando o silêncio e a solidão de sua casa para rezar e, em segredo, flagelar seus ombros com uma corda, por amor a Deus.</p><p class="mt-4">Desde criança, Deus a preparava para uma vida de extraordinária santidade. Que possamos também nós escutar a voz de Deus que nos chama, em qualquer idade e circunstância da vida.</p><div class="mt-8 p-6 bg-stone-100/50 rounded-xl border border-stone-200"><p class="text-center font-bold">Santa Catarina de Siena, rogai por nós!</p></div></div>`
            },
            {
                day: "Dia 2",
                title: "2º Dia – O amor à solidão e à oração",
                content: `<div class="day-specific-content"><h5 class="font-bold text-lg">Meditação:</h5><p><em>"O desejo de isolamento e as lendas dos padres do deserto, que tanto lhe ocupavam a imaginação, levaram-na a sonhar com uma gruta solitária onde pudesse esconder-se para entreter-se exclusivamente com Deus"</em>. De fato, um dia, cruzando o portão de sua cidade, Catarina saiu à procura de uma dessas grutas onde se escondiam os eremitas.</p><p class="mt-4">Achando uma, entrou e, pondo-se de joelhos, rezou fervorosamente. Nessa experiência, aconteceu-lhe de <em>"ser levantada do solo e flutuar livremente sob a abóbada"</em>. A humilde criança, <em>"temendo tratar-se de uma tentação do diabo para impedi-la de rezar, redobrou de ardor e de firmeza na oração"</em>.</p><p class="mt-4">A humildade e perseverança na oração são o caminho de Deus. Que Santa Catarina nos ensine a amar o silêncio e a buscar a Deus com igual ardor.</p><div class="mt-8 p-6 bg-stone-100/50 rounded-xl border border-stone-200"><p class="text-center font-bold">Santa Catarina de Siena, rogai por nós!</p></div></div>`
            },
            {
                day: "Dia 3",
                title: "3º Dia – A consagração virginal",
                content: `<div class="day-specific-content"><h5 class="font-bold text-lg">Meditação:</h5><p>A pequena Catarina não se preocupava com as coisas com que normalmente dispendiam seus familiares. Ainda com sete anos, ansiando entregar-se exclusivamente a Deus, sem nenhuma ligação com o mundo aborrecedor dos homens, Catarina suplicou à Virgem Maria que a conservasse casta, a fim de tornar-se esposa de Jesus.</p><blockquote class="brand-border pl-4 italic my-4"><p>"Amo-O com toda minha alma – dizia a Nossa Senhora – e prometo a Ele e a ti jamais aceitar outro esposo."</p></blockquote><p>Que o exemplo de Santa Catarina nos inspire a consagrar a Deus não apenas nossa virgindade, mas toda a nossa vida e vontade.</p><div class="mt-8 p-6 bg-stone-100/50 rounded-xl border border-stone-200"><p class="text-center font-bold">Santa Catarina de Siena, rogai por nós!</p></div></div>`
            },
            {
                day: "Dia 4",
                title: "4º Dia – A cela interior da alma",
                content: `<div class="day-specific-content"><h5 class="font-bold text-lg">Meditação:</h5><p>Para fugir de seus pais, que queriam vê-la casada, Catarina cortou sua longa cabeleira. Para castigá-la, a mãe impediu-a de ter um quarto próprio. Mas nem isso a podia afastar de seu Bem-Amado. Durante o dia ela orava, e à noite passava longas vigílias em oração, enquanto todos dormiam.</p><blockquote class="brand-border pl-4 italic my-4"><p>"Construí uma cela no fundo de vossa alma e de lá não vos afasteis mais."</p></blockquote><p>Catarina prefigurava a bela analogia de Santa Teresa de Ávila, ao comparar a alma a um castelo em cujo centro está Jesus. Que possamos construir em nós essa cela interior e nela habitar com o Senhor.</p><div class="mt-8 p-6 bg-stone-100/50 rounded-xl border border-stone-200"><p class="text-center font-bold">Santa Catarina de Siena, rogai por nós!</p></div></div>`
            },
            {
                day: "Dia 5",
                title: "5º Dia – A vocação dominicana",
                content: `<div class="day-specific-content"><h5 class="font-bold text-lg">Meditação:</h5><p>Visitada em sonho por São Domingos de Gusmão, Catarina tomou a firme resolução de tornar-se <em>"mantelata"</em> – como eram chamadas as leigas da ordem dominicana. Quando comunicou a decisão aos familiares, as reações foram as mais negativas possíveis. O seu virtuoso pai, no entanto, acalmou a todos com maturidade:</p><blockquote class="brand-border pl-4 italic my-4"><p>"Deixem-na inteiramente livre para servir a seu Esposo e rezar assiduamente por nós. Não nos lamentemos, pois, se, ao invés de tomar por esposo um homem mortal, ela se entregar ao Deus feito homem, que é eterno."</p></blockquote><p>A sabedoria do pai de Catarina é um modelo para todos os pais cristãos: reconhecer e apoiar o chamado de Deus em seus filhos.</p><div class="mt-8 p-6 bg-stone-100/50 rounded-xl border border-stone-200"><p class="text-center font-bold">Santa Catarina de Siena, rogai por nós!</p></div></div>`
            },
            {
                day: "Dia 6",
                title: "6º Dia – A penitência e o amor a Jesus",
                content: `<div class="day-specific-content"><h5 class="font-bold text-lg">Meditação:</h5><p>Voltando a ter um quarto só para si, Catarina entregou-se com assiduidade à vida de penitência. Consciente de que, como ela mesma escreveu mais tarde:</p><blockquote class="brand-border pl-4 italic my-4"><p>"A satisfação se dá pelo amor, pelo arrependimento e pelo desprezo do pecado" e que "os gestos finitos são insuficientes para punir ou satisfazer, sem a força da caridade."</p></blockquote><p>Catarina unia às suas severas mortificações corporais e a seus rigorosos jejuns um amor filial a Jesus. A penitência sem amor é vazia — mas o amor verdadeiro sempre busca reparar o pecado com generosidade.</p><div class="mt-8 p-6 bg-stone-100/50 rounded-xl border border-stone-200"><p class="text-center font-bold">Santa Catarina de Siena, rogai por nós!</p></div></div>`
            },
            {
                day: "Dia 7",
                title: "7º Dia – A \"dolcissima mamma\" espiritual",
                content: `<div class="day-specific-content"><h5 class="font-bold text-lg">Meditação:</h5><p>Admitida na Ordem Terceira de São Domingos, não demorou muito para que sua vida de virtudes atraísse as pessoas à sua volta. Em torno dela, <em>"foi-se constituindo uma verdadeira família espiritual. Tratava-se de pessoas fascinadas pela respeitabilidade moral desta jovem mulher de elevadíssimo nível de vida, e por vezes impressionadas também pelos fenômenos místicos aos quais assistiam, como os frequentes êxtases."</em></p><p class="mt-4">Muitos puseram-se ao seu serviço e sobretudo consideraram um privilégio ser orientados espiritualmente por Catarina. Todos carinhosamente a chamavam de <strong>"dolcissima mamma"</strong> — dulcíssima mãe — pois se consideravam seus filhos espirituais.</p><p class="mt-4">A santidade verdadeira atrai, não afasta. Que Santa Catarina nos forme como filhos espirituais verdadeiros.</p><div class="mt-8 p-6 bg-stone-100/50 rounded-xl border border-stone-200"><p class="text-center font-bold">Santa Catarina de Siena, rogai por nós!</p></div></div>`
            },
            {
                day: "Dia 8",
                title: "8º Dia – A serva da Igreja",
                content: `<div class="day-specific-content"><h5 class="font-bold text-lg">Meditação:</h5><p>Ao lado de uma sólida vida interior, Santa Catarina de Siena desempenhou um papel fundamental na história da Igreja, ao pedir ao Papa Gregório XI o fim do terrível <em>"grande cisma do Ocidente"</em>. Ela exortou o Sumo Pontífice a sair do exílio em Avinhão e voltar para Roma, a fim de devolver a unidade ao povo católico.</p><p class="mt-4">Fê-lo por amor à Igreja, ao Papa — a quem chamava carinhosamente de <em>"doce Cristo na terra"</em> — e aos sacerdotes, que ela tinha em altíssima conta, mesmo consciente de suas faltas humanas.</p><p class="mt-4">Catarina nos ensina a amar a Igreja com coragem, falando a verdade com caridade, movidos pelo amor e não pelo orgulho.</p><div class="mt-8 p-6 bg-stone-100/50 rounded-xl border border-stone-200"><p class="text-center font-bold">Santa Catarina de Siena, rogai por nós!</p></div></div>`
            },
            {
                day: "Dia 9",
                title: "9º Dia – Os estigmas e a glória eterna",
                content: `<div class="day-specific-content"><h5 class="font-bold text-lg">Meditação:</h5><p>Ao fim de sua vida, a santa de Siena configurou-se inteiramente a Nosso Senhor, sendo coroada com os santos estigmas. Ela — <em>"que era capaz de não tomar, durante cinquenta e cinco dias, outro alimento senão uma hóstia"</em> — converteu-se em um milagre vivo de Deus.</p><p class="mt-4">Por isso, ainda em 1461, menos de um século depois de seu nascimento para o Céu, foi canonizada pelo Papa Pio II. Em 1970, o Papa Paulo VI a proclamou <strong>Doutora da Igreja</strong>, e o Papa João Paulo II a nomeou co-padroeira da Europa.</p><p class="mt-4">Que a sua intercessão nos torne fiéis e perseverantes na oração e na penitência e fortaleça os nossos laços com a Igreja triunfante, de cuja plenitude pretendemos, com a graça de Deus, participar.</p><div class="mt-8 p-6 bg-stone-100/50 rounded-xl border border-stone-200"><h4 class="section-title text-center">Oração Final</h4><p>Fazei, ó Deus onipotente, com que, venerando o nascimento da Bem-Aventurada virgem Catarina, nos alegremos com esta solenidade anual, e devidamente aproveitemos de tão alto exemplo de virtude. Por Nosso Senhor Jesus Cristo. Amém.</p><p class="mt-4 text-center font-bold">Santa Catarina de Siena, rogai por nós!</p></div></div>`
            }
        ]
    },

    ns_africa: {
        saintName: "Nossa Senhora da África",
        novenaTitle: "Novena a Nossa Senhora da África",
        description: "Devoção a Nossa Senhora da África e pelo diálogo entre os povos. A mesma oração é rezada nos 9 dias. (21 a 29 de abril)",
        image: "https://www.a12.com/source/files/originals/Nossa_Senhora_da_Africa.jpg",
        initialPrayer: "",
        finalPrayer: "",
        days: [
            {
                day: "Dias 1 a 9",
                title: "Oração a Nossa Senhora da África",
                content: `<div class="day-specific-content">
                <div class="mb-4 p-1.5 px-3 rounded-full inline-flex items-center gap-2 border border-[#9ca3af] bg-white/80 backdrop-blur-sm shadow-sm">
                    <span class="text-sm" style="filter: grayscale(100%) brightness(30%);">🌍</span>
                    <p class="text-xs sm:text-sm font-bold leading-none" style="color: #292524 !important;">A oração a seguir é a mesma para todos os 9 dias da novena, boa oração!</p>
                </div>
                <p>Ó Nossa Senhora da África, Padroeira e esperança de todo o continente, a Vós elevamos nossos corações. Nós vos pedimos humildemente que derrameis Vossa bênção e misericórdia sobre todos os povos e nações, intercedendo sempre pela paz, justiça e fraternidade humana.</p>
                <p class="mt-4">Vós, cuja Basílica em Argel traz a bela invocação <em>"Nossa Senhora da África, rogai por nós e pelos muçulmanos"</em>, ensinai-nos as virtudes do diálogo sincero, alivia as chagas do ódio e aproximai todos os filhos de Deus.</p>
                <p class="mt-4">Protegei as famílias, curai os enfermos e amparai aqueles que se encontram sozinhos. Que Vossa intercessão conceda luz e esperança aos que mais sofrem.</p>
                <div class="mt-8 p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl text-stone-900 border-none">
                    <p class="italic font-medium" style="color: black !important;"><strong style="color: black !important;">Ó bondosa e compassiva Mãe,</strong> rogo-Lhe que obtenha para minha vida e para minha família a seguinte graça que Lhe suplico: <em>(faça seu pedido).</em></p>
                </div>
                <div class="mt-6 text-center font-bold text-white text-lg tracking-wide uppercase">
                    <p>Pai Nosso, Ave-Maria, Glória ao Pai.</p>
                </div>
                <p class="mt-4 text-center font-bold">Nossa Senhora da África, rogai por nós!</p>
            </div>`
            }
        ]
    },

    santo_atanasio: {
        saintName: "Santo Atanásio",
        novenaTitle: "Novena a Santo Atanásio",
        description: "Pai da Ortodoxia e defensor da divindade de Cristo. (23 de abril a 1º de maio)",
        image: "https://i.pinimg.com/1200x/d6/90/61/d69061c1e40057ed9e54e0cd189b1e5e.jpg",
        imageObjectPosition: "top",
        initialPrayer: "",
        finalPrayer: "",
        days: [
            {
                day: "Dia 1",
                title: "Exemplo de Santidade desde a Infância",
                content: `<div class="day-specific-content">
                    <p>Em nome do Pai, e do Filho, e do Espírito Santo. Amém.</p>
                    <p class="mt-4">Querido Senhor, agradecemos-Te por nos dares o Teu servo, Santo Atanásio, como exemplo de santidade. Ajude-nos a imitar a virtude que ele demonstrou desde a sua santa infância até à sua morte.</p>
                    <p class="mt-4">São Atanásio, você cresceu com o benefício de pais cristãos devotos. Eles garantiram que você recebesse uma educação sólida na Fé e crescesse avidamente in sua Fé e serviço a Deus.</p>
                    <p class="mt-4">Por favor, leve minhas petições diante de Deus, a quem você serviu! Seu conhecimento precoce com monges santos durante sua infância deve ter feito muito para inspirá-lo no caminho da santidade. Você logo seguiu os passos deles e escolheu dedicar sua vida a Deus.</p>
                    <p class="mt-4">Ore por mim, para que eu possa sempre buscar maneiras de crescer em santidade em minha vida. Ore para que eu esteja ansioso para me dedicar ao serviço de Deus em todas as oportunidades.</p>
                    <p class="mt-4">Por favor, ore também por (mencione suas intenções aqui).</p>
                    <p class="mt-4 italic">São Atanásio, rogai por nós!</p>
                    <p class="mt-4">Em nome do Pai, e do Filho, e do Espírito Santo. Amém.</p>
                </div>`
            },
            {
                day: "Dia 2",
                title: "Devoto Serviço como Diácono",
                content: `<div class="day-specific-content">
                    <p>Em nome do Pai, e do Filho, e do Espírito Santo. Amém.</p>
                    <p class="mt-4">Querido Senhor, agradecemos-Te por nos dares o Teu servo, Santo Atanásio, como exemplo de santidade. Ajude-nos a imitar a devoção a Ti que ele demonstrou durante seu serviço à Igreja como diácono.</p>
                    <p class="mt-4">São Atanásio, durante seu tempo como diácono, você serviu como secretário do bispo de Alexandria. Sempre ansioso para encontrar mais maneiras de servir a Deus, você começou seu trabalho em escritos teológicos.</p>
                    <p class="mt-4">Por favor, leve minhas petições diante de Deus, a quem você serviu tão avidamente! Você acompanhou seu bispo ao Concílio de Niceia e serviu como seu secretário enquanto a Igreja trabalhava para definir a doutrina da divindade de Cristo contra os arianos.</p>
                    <p class="mt-4">Rezem por mim, para que eu possa sempre procurar servir à Igreja sempre que puder. Ore para que eu esteja sempre ansioso para trabalhar pela promoção da Fé.</p>
                    <p class="mt-4">Por favor, ore também por (mencione suas intenções aqui).</p>
                    <p class="mt-4 italic">São Atanásio, rogai por nós!</p>
                    <p class="mt-4">Em nome do Pai, e do Filho, e do Espírito Santo. Amém.</p>
                </div>`
            },
            {
                day: "Dia 3",
                title: "Amor pela Verdade Teológica",
                content: `<div class="day-specific-content">
                    <p>Em nome do Pai, e do Filho, e do Espírito Santo. Amém.</p>
                    <p class="mt-4">Querido Senhor, agradecemos-Te por nos dares o Teu servo, Santo Atanásio, como exemplo de santidade. Ajude-nos a imitar o amor que Ele demonstrou por Ti ao escolher se dedicar ao estudo e à escrita sobre teologia.</p>
                    <p class="mt-4">São Atanásio, quando você ainda era diácono, escreveu sua primeira obra teológica, um tratado sobre a Encarnação que ainda é frequentemente citado hoje. Depois disso, você continuou o trabalho de estudar e escrever sobre Deus e Sua Igreja.</p>
                    <p class="mt-4">Por favor, continue a levar minhas petições diante de Deus! Tornaste-te doutor da Igreja, e o teu trabalho em teologia fez muito para ajudar a Igreja na luta contra a heresia ariana.</p>
                    <p class="mt-4">Rezem por mim, para que eu possa sempre procurar servir a Igreja em minha vida. Ore para que eu nunca me canse de aprender mais sobre Deus.</p>
                    <p class="mt-4">Por favor, ore também por (mencione suas intenções aqui).</p>
                    <p class="mt-4 italic">São Atanásio, rogai por nós!</p>
                    <p class="mt-4">Em nome do Pai, e do Filho, e do Espírito Santo. Amém.</p>
                </div>`
            },
            {
                day: "Dia 4",
                title: "Coragem Contra a Heresia",
                content: `<div class="day-specific-content">
                    <p>Em nome do Pai, e do Filho, e do Espírito Santo. Amém.</p>
                    <p class="mt-4">Querido Senhor, agradecemos-Te por nos dares o Teu servo, Santo Atanásio, como exemplo de santidade. Ajude-nos a imitar a devoção a Ti que ele demonstrou ao pregar contra a heresia, apesar da dificuldade que isso lhe causou.</p>
                    <p class="mt-4">São Atanásio, você viveu numa época em que uma heresia perigosa estava se tornando muito popular ao seu redor. Embora isso tenha feito de vocês muitos inimigos, vocês se manifestaram contra essa mentira pelo amor de Deus.</p>
                    <p class="mt-4">Por favor, continue a levar minhas petições diante de Deus, a quem você amava! Por causa da sua corajosa pregação contra o arianismo, você suportou muito sofrimento. Mas você se apegou à verdade e trabalhou para trazer as pessoas de volta à verdadeira Fé.</p>
                    <p class="mt-4">Ore por mim, para que eu possa me apegar à verdade como você fez. Ore para que eu nunca permita que o sofrimento me impeça de servir a Deus.</p>
                    <p class="mt-4">Por favor, ore também por (mencione suas intenções aqui).</p>
                    <p class="mt-4 italic">São Atanásio, rogai por nós!</p>
                    <p class="mt-4">Em nome do Pai, e do Filho, e do Espírito Santo. Amém.</p>
                </div>`
            },
            {
                day: "Dia 5",
                title: "Firmeza nas Provações e Falsas Acusações",
                content: `<div class="day-specific-content">
                    <p>Em nome do Pai, e do Filho, e do Espírito Santo. Amém.</p>
                    <p class="mt-4">Querido Senhor, agradecemos-Te por nos dares o Teu servo, Santo Atanásio, como exemplo de santidade. Ajude-nos a imitar a virtude que ele demonstrou ao manter-se firme em sua Fé durante os muitos julgamentos de falsas acusações.</p>
                    <p class="mt-4">São Atanásio, fizeste muitos inimigos ao falares contra a heresia ariana que se espalhava na sociedade à tua volta. Mas você perseverou em falar a verdade, apesar das dificuldades que enfrentou.</p>
                    <p class="mt-4">Por favor, persevere em levar minhas petições diante de Deus! Seus inimigos o acusaram falsamente de muitos crimes terríveis, na tentativa de silenciar sua pregação contra o arianismo. Através de muitos sofrimentos, você se manteve firme em sua Fé e continuou pregando a verdade.</p>
                    <p class="mt-4">Ore por mim, para que eu possa me apegar à minha Fé em meio a todas as dificuldades. Ore para que eu nunca permita que nenhuma provação me desvie de falar a verdade.</p>
                    <p class="mt-4">Por favor, ore também por (mencione suas intenções aqui).</p>
                    <p class="mt-4 italic">São Atanásio, rogai por nós!</p>
                    <p class="mt-4">Em nome do Pai, e do Filho, e do Espírito Santo. Amém.</p>
                </div>`
            },
            {
                day: "Dia 6",
                title: "Perseverança no Exílio",
                content: `<div class="day-specific-content">
                    <p>Em nome do Pai, e do Filho, e do Espírito Santo. Amém.</p>
                    <p class="mt-4">Querido Senhor, agradecemos-Te por nos dares o Teu servo, Santo Atanásio, como exemplo de santidade. Ajude-nos a imitar o amor que Ele demonstrou por Ti ao se apegar à Sua Fé durante seus muitos anos difíceis de exílio.</p>
                    <p class="mt-4">São Atanásio, seus inimigos fizeram de tudo para tentar silenciar sua pregação contra o arianismo. Apesar de ter sido forçado a deixar sua casa e se exilar diversas vezes, você continuou a pregar a verdade e a servir a Deus.</p>
                    <p class="mt-4">Por favor, continue a levar minhas petições diante de Deus a quem você serviu! Você acabou passando dezessete anos de sua vida no exílio, por causa de sua destemida proclamação da verdade contra os inimigos da Fé.</p>
                    <p class="mt-4">Ore por mim, para que eu seja tão destemido na defesa da Fé quanto você foi. Ore para que eu possa perseverar em minha Fé contra todas as dificuldades.</p>
                    <p class="mt-4">Por favor, ore também por (mencione suas intenções aqui).</p>
                    <p class="mt-4 italic">São Atanásio, rogai por nós!</p>
                    <p class="mt-4">Em nome do Pai, e do Filho, e do Espírito Santo. Amém.</p>
                </div>`
            },
            {
                day: "Dia 7",
                title: "Coragem Inabalável",
                content: `<div class="day-specific-content">
                    <p>Em nome do Pai, e do Filho, e do Espírito Santo. Amém.</p>
                    <p class="mt-4">Querido Senhor, agradecemos-Te por nos dares o Teu servo, Santo Atanásio, como exemplo de santidade. Ajude-nos a imitar a devoção a Ti que ele demonstrou em sua coragem ao longo das muitas provações que enfrentou.</p>
                    <p class="mt-4">São Atanásio, você sofreu muito por causa da sua proclamação da verdade. Seus inimigos forçaram você a fugir de sua casa muitas vezes, mas você perseverou na verdade e em servir a Deus.</p>
                    <p class="mt-4">Por favor, persevere in levar minhas petições diante do trono de Deus! Você sofreu falsas acusações, ataques físicos e um total de dezessete anos de exílio. Apesar dessas muitas provações, você se manteve firme em sua Fé e na verdadeira doutrina da Igreja.</p>
                    <p class="mt-4">Ore por mim, para que eu seja tão firme na minha Fé quanto você foi. Ore para que eu nunca permita que as provações me afastem de servir a Deus.</p>
                    <p class="mt-4">Por favor, ore também por (mencione suas intenções aqui).</p>
                    <p class="mt-4 italic">São Atanásio, rogai por nós!</p>
                    <p class="mt-4">Em nome do Pai, e do Filho, e do Espírito Santo. Amém.</p>
                </div>`
            },
            {
                day: "Dia 8",
                title: "Zelo como Bispo e Pastor",
                content: `<div class="day-specific-content">
                    <p>Em nome do Pai, e do Filho, e do Espírito Santo. Amém.</p>
                    <p class="mt-4">Querido Senhor, agradecemos-Te por nos dares o Teu servo, Santo Atanásio, como exemplo de santidade. Ajude-nos a imitar o amor que Ele demonstrou por Ti por meio de seu santo serviço como bispo em Tua Igreja.</p>
                    <p class="mt-4">São Atanásio, você foi eleito bispo de Alexandria numa época em que a heresia estava ganhando destaque. Como bispo, você se opôs fortemente a esse falso ensinamento e trabalhou para levar seu povo ao verdadeiro ensinamento da Igreja de Deus.</p>
                    <p class="mt-4">Por favor, continue a levar minhas petições diante de Deus! Você enfrentou grande oposição em seu trabalho como bispo, mas perseverou em servir a Deus e ao seu povo. Mesmo quando você foi forçado a sair de casa repetidas vezes, você nunca vacilou na verdade.</p>
                    <p class="mt-4">Ore por mim, para que eu possa sempre procurar servir a Deus e à Sua Igreja em minha vida. Ore para que eu nunca permita que as provações me afastem de servir a Deus.</p>
                    <p class="mt-4">Por favor, ore também por (mencione suas intenções aqui).</p>
                    <p class="mt-4 italic">São Atanásio, rogai por nós!</p>
                    <p class="mt-4">Em nome do Pai, e do Filho, e do Espírito Santo. Amém.</p>
                </div>`
            },
            {
                day: "Dia 9",
                title: "Compromisso com a Verdadeira Fé",
                content: `<div class="day-specific-content">
                    <p>Em nome do Pai, e do Filho, e do Espírito Santo. Amém.</p>
                    <p class="mt-4">Querido Senhor, agradecemos-Te por nos dares o Teu servo, Santo Atanásio, como exemplo de santidade. Ajude-nos a imitar a devoção a Ti que ele demonstrou ao longo de sua vida de serviço à Tua Igreja.</p>
                    <p class="mt-4">São Atanásio, você vivia em uma sociedade atormentada pela disseminação da heresia. Ansiosos por servir a Deus e à Sua Igreja, vocês fizeram tudo o que podiam para combater a propagação da heresia e pregar a verdade.</p>
                    <p class="mt-4">Por favor, continue a levar minhas petições diante de Deus a quem você serviu! Sua devoção a Deus e seu compromisso em pregar a verdade levaram a muito sofrimento para você. Apesar de ter sido exilado muitas vezes e até sofrido ataques físicos, você se apegou à verdadeira Fé.</p>
                    <p class="mt-4">Ore por mim, para que eu possa perseverar em minha Fé tão firmemente quanto você. Ore para que eu nunca vacile em meu compromisso com Deus e Sua Igreja.</p>
                    <p class="mt-4">Por favor, ore também por (mencione suas intenções aqui).</p>
                    <p class="mt-4 italic">São Atanásio, rogai por nós!</p>
                    <p class="mt-4">Em nome do Pai, e do Filho, e do Espírito Santo. Amém.</p>
                </div>`
            }
        ]
    },
    sao_jose_operario: {
        saintName: "São José Operário",
        novenaTitle: "Novena a São José Operário",
        description: "Padroeiro dos trabalhadores. A mesma oração é rezada nos 9 dias. (22 de abril a 1º de maio)",
        image: "https://i.postimg.cc/9QfFWvTB/image.png",
        initialPrayer: "",
        finalPrayer: "",
        days: [
            {
                day: "Dia 1",
                title: "Novena a São José Operário",
                content: `<div class="day-specific-content">
                <div class="mb-4 p-1.5 px-3 rounded-full inline-flex items-center gap-2 border border-[#9ca3af] bg-white/80 backdrop-blur-sm shadow-sm">
                    <span class="text-sm" style="filter: grayscale(100%) brightness(30%);">⚒️</span>
                    <p class="text-xs sm:text-sm font-bold leading-none" style="color: #292524 !important;">A oração a seguir é a mesma para todos os 9 dias da novena, boa oração!</p>
                </div>
                <p>São José, pelo trabalho das tuas mãos e pelo suor do teu rosto, sustentaste Jesus e Maria, e tiveste o Filho de Deus como teu aprendiz.</p>
                <p class="mt-4">Ensina-me a trabalhar como você fez, com paciência e perseverança, por Deus e por aqueles a quem Deus me deu para sustentar.</p>
                <p class="mt-4">Ensina-me a ver nos meus funcionários e colegas de trabalho o Cristo que deseja estar neles, para que eu seja sempre caridoso e tolerante com todos.</p>
                <p class="mt-4">Concede-me que olhe para o trabalho com os olhos da fé, para que nele reconheça a minha participação na atividade criativa de Deus e na obra de Cristo para a nossa redenção, e assim me orgulhe dele.</p>
                <p class="mt-4">Quando for agradável e produtivo, lembre-me de agradecer a Deus por isso. E quando for pesado, ensina-me a oferecê-lo a Deus, em reparação pelos meus pecados e pelos pecados do mundo.</p>
                <div class="mt-8 p-6 bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl text-black border-none" style="color: black !important;">
                    <p class="italic"><strong>Ó bom pai, São José!</strong> Rogo-lhe, com todos os seus sofrimentos, tristezas e alegrias, que obtenha para mim o que agora peço: <em>(faça seu pedido).</em></p>
                    <p class="mt-3">Obtenha para todos aqueles que pediram minhas orações tudo o que lhes for útil no plano de Deus. Esteja perto de mim nos meus últimos momentos para que eu cante eternamente louvores a Jesus, Maria e José. Amém.</p>
                </div>
                <div class="mt-6 text-center font-bold text-white text-lg tracking-wide uppercase">
                    <p>Pai Nosso, Ave-Maria, Glória ao Pai.</p>
                </div>
                <p class="mt-4 text-center font-bold">São José Operário, rogai por nós!</p>
            </div>`
            }
        ]
    },




    // MAIO
    nossa_senhora_fatima: {
        saintName: "Nossa Senhora de Fátima",
        novenaTitle: "Novena a Nossa Senhora de Fátima",
        description: "Apresente seus pedidos a Deus por meio da novena a Nossa Senhora de Fátima e conte com a poderosa intercessão de nossa Mãe Santíssima. (4 a 12 de maio)",
        image: "/images/ns_fatima.png",
        initialPrayer: `<div class="prayer-block">
            <h4 class="section-title">Oferecimento</h4>
            <p>Santíssima Trindade, Pai, Filho e Espírito Santo! Adoro-vos profundamente e ofereço-vos o preciosíssimo corpo, sangue, alma e divindade de Jesus Cristo, presente em todos os sacrários da terra, em reparação dos ultrajes, sacrilégios e indiferenças com que Ele mesmo é ofendido. E pelos méritos infinitos de seu Santíssimo Coração e do Coração Imaculado de Maria, peço-vos a conversão dos pobres pecadores.</p>
            <p class="mt-4">Meu Deus! Eu creio, adoro, espero e amo-vos. Peço-vos perdão para os que não creem, não adoram, não esperam e Vos não amam. <em>(3x)</em></p>
            <div class="w-16 h-px bg-white/20 my-6 mx-auto"></div>
            <h4 class="section-title">Oração Preparatória</h4>
            <p>Oh! Santíssima Virgem Maria, Rainha do Céu, Rosário e Mãe de Misericórdia, que vos dignastes manifestar em Fátima a ternura de Vosso imaculado coração, trazendo-nos mensagens de salvação e de paz.</p>
            <p class="mt-4">Confiados em vossa misericórdia maternal e agradecidos das bondades de vosso amantíssimo coração viemos a vossos pés para rendermos o tributo de nossa veneração e amor.</p>
            <p class="mt-4">Concedei-nos as graças que necessitamos para cumprir fielmente vossa mensagem de amor e as que vos pedimos nesta novena, se tem de ser para maior glória de Deus, honra vossa e proveito de nossas almas. Assim seja.</p>
        </div>`,
        finalPrayer: `<div class="prayer-block">
            <h4 class="section-title">Oração Final</h4>
            <p>Oh! Deus, cujo Unigênito com sua vida, morte e ressurreição nos mereceu o prêmio da salvação eterna!</p>
            <p class="mt-4">Vos suplicamos nos concedas que, meditando os mistérios do santíssimo Rosário da bem-aventurada Virgem Maria, imitemos os exemplos que nos ensinam e alcancemos o prêmio que prometem. Pelo mesmo Jesus Cristo Nosso Senhor. Amém.</p>
        </div>`,
        days: [
            {
                day: "Dia 1",
                title: "Maria, Mãe dos pobres pecadores",
                content: `<div class="day-specific-content">
                    <h5 class="font-bold text-lg">Oração do Dia</h5>
                    <p>Oh! Santíssima Virgem Maria, Mãe dos pobres pecadores! Que aparecendo em Fátima, deixastes transparecer em vosso rosto celestial uma leve sombra de tristeza para indicar a dor que vos causam os pecados dos homens e que com maternal compaixão exortastes a não afligir mais a vosso Filho com a culpa e a reparar os pecados com a mortificação e a penitência.</p>
                    <p class="mt-4">Dá-nos a graça de uma sincera dor dos pecados cometidos e a resolução generosa de reparar com obras de penitência e mortificação todas as ofensas que se inferem a vosso Divino Filho e a vosso Coração Imaculado.</p>
                </div>`
            },
            {
                day: "Dia 2",
                title: "Maria, Mãe da divina graça",
                content: `<div class="day-specific-content">
                    <h5 class="font-bold text-lg">Oração do Dia</h5>
                    <p>Oh! Santíssima Virgem Maria, Mãe da divina graça. Que vestida de nívea brancura vos aparecestes a uns pastorinhos singelos e inocentes, ensinando-os assim quanto devemos amar e procurar a inocência da alma e que pedistes por meio deles a emenda dos costumes e a santidade de uma vida cristã perfeita.</p>
                    <p class="mt-4">Concedei-nos misericordiosamente a graça de saber apreciar a dignidade de nossa condição de cristãos e de levar uma vida em tudo de acordo as promessas batismais.</p>
                </div>`
            },
            {
                day: "Dia 3",
                title: "Maria, Vaso insigne de devoção",
                content: `<div class="day-specific-content">
                    <h5 class="font-bold text-lg">Oração do Dia</h5>
                    <p>Oh! Santíssima Virgem Maria, vaso insigne de devoção! Que vos aparecestes em Fátima tendo pendente de vossas mãos o santo Rosário, e que insistentemente repetias: "Orai, orai muito", para afastar por meio da Oração os males que nos cercam.</p>
                    <p class="mt-4">Concedei-nos o dom e o espírito de oração, a graça de sermos fiéis no cumprimento do grande preceito de orar, fazendo-o todos os dias, para assim poder observar bem os santos mandamentos, vencer as tentações e chegar ao conhecimento e amor de Jesus Cristo nesta vida e a união feliz com Ele na outra.</p>
                </div>`
            },
            {
                day: "Dia 4",
                title: "Maria, Rainha da Igreja",
                content: `<div class="day-specific-content">
                    <h5 class="font-bold text-lg">Oração do Dia</h5>
                    <p>Oh! Santíssima Virgem Maria, Rainha da Igreja! Que exortastes aos pastorinhos de Fátima a rogar pelo Papa, e infundistes em suas almas singelas uma grande veneração e amor a ele, como Vigário de vosso Filho e seu representante na terra.</p>
                    <p class="mt-4">Infunde também em nós o espírito de veneração e docilidade ante a autoridade do Romano Pontífice, de adesão inquebrantável a seus ensinamentos, e nele e com ele um grande amor e respeito a todos os ministros da Santa Igreja, por meio dos quais participamos a vida da graça nos sacramentos.</p>
                </div>`
            },
            {
                day: "Dia 5",
                title: "Maria, Saúde dos Enfermos",
                content: `<div class="day-specific-content">
                    <h5 class="font-bold text-lg">Oração do Dia</h5>
                    <p>Oh! Santíssima Virgem Maria, Saúde dos enfermos e consoladora dos aflitos! Que movida pelo rogo dos pastorinhos, fizestes curas em vossas aparições em Fátima e haveis convertido este lugar santificado, por vossa presença, em oficina de vossas misericórdias maternais em favor de todos os aflitos. A vosso Coração Maternal acudimos cheios de filial confiança, mostrando as enfermidades de nossas almas e as aflições e dolências todas de nossa vida.</p>
                    <p class="mt-4">Deixai sobre elas uma olhada de compaixão e que possas remedia-las com a ternura de vossas mãos para que assim possamos servir-vos e amar-vos com todo nosso coração e com todo nosso ser.</p>
                </div>`
            },
            {
                day: "Dia 6",
                title: "Maria, Refúgio dos Pecadores",
                content: `<div class="day-specific-content">
                    <h5 class="font-bold text-lg">Oração do Dia</h5>
                    <p>Oh! Santíssima Virgem Maria, Refúgio dos Pecadores! Que ensinastes aos pastorinhos de Fátima a rogar incessantemente ao Senhor para que esses desgraçados não caiam nas penas eternas do inferno e que manifestastes a um dos três que os pecados da carne são os que mais almas arrastam a aquelas terríveis chamas.</p>
                    <p class="mt-4">Infunde em nossas almas um grande horror ao pecado e o temor santo da justiça divina e ao mesmo tempo despertai nelas a compaixão pela sorte dos pobres pecadores e um santo zelo para trabalhar com nossas orações, exemplos e palavras por sua conversão.</p>
                </div>`
            },
            {
                day: "Dia 7",
                title: "Maria, Rainha do Purgatório",
                content: `<div class="day-specific-content">
                    <h5 class="font-bold text-lg">Oração do Dia</h5>
                    <p>Oh! Santíssima Virgem Maria, Rainha do Céu e do Purgatório! Que ensinastes aos pastorinhos de Fátima a rogar a Deus pelas almas do purgatório, especialmente pelas mais abandonadas. Encomendamos a inesgotável ternura de vosso maternal coração todas as almas que padecem naquele lugar de purificação, em particular as de todos os nossos amigos e familiares e as mais abandonadas e necessitadas.</p>
                    <p class="mt-4">Aliviai suas penas e levai-as a região da luz e da paz para cantar ali perpetuamente vossas misericórdias.</p>
                </div>`
            },
            {
                day: "Dia 8",
                title: "Maria, Rainha do Santíssimo Rosário",
                content: `<div class="day-specific-content">
                    <h5 class="font-bold text-lg">Oração do Dia</h5>
                    <p>Oh! Santíssima Virgem Maria! Que em vossa última aparição vos destes a conhecer como a Rainha do Céu, Santíssimo Rosário, e em todas elas recomendastes a reza desta devoção como o remédio mais seguro e eficaz para todos os males e calamidades que nos afligem, tanto da alma como do corpo.</p>
                    <p class="mt-4">Infunde em nossas almas uma profunda estima dos mistérios de nossa Redenção que se comemoram na reza do rosário, para assim vivermos sempre de seus frutos.</p>
                    <p class="mt-4">Concedei-nos a graça de sermos sempre fiéis a prática de rezá-lo diariamente para honrarmos a Vós, acompanhando vossas alegrias, dores e glórias e assim merecer vossa maternal proteção e assistência em todos os momentos da vida, mas especialmente na hora da morte.</p>
                </div>`
            },
            {
                day: "Dia 9",
                title: "Maria, Mãe nossa dulcíssima",
                content: `<div class="day-specific-content">
                    <h5 class="font-bold text-lg">Oração do Dia</h5>
                    <p>Oh! Santíssima Virgem Maria, Mãe nossa dulcíssima! Que escolhestes aos pastorinhos de Fátima para mostrar ao mundo as ternuras de vosso Coração misericordioso e lhes colocastes a devoção ao mesmo como o meio com o qual Deus quer dar a paz ao mundo, como o caminho para levar as almas a Deus e como uma prenda suprema de salvação.</p>
                    <p class="mt-4">Fazei, oh! Coração da Mais Terna das Mães! que possamos compreender vossa mensagem de amor e de misericórdia, que a abracemos com filial adesão e que a pratiquemos sempre com fervor. E assim seja vosso Coração nosso refugio, nossa alegria e o caminho que nos conduza ao amor e a união com vosso Filho Jesus.</p>
                </div>`
            }
        ]
    },

    santa_rita_cassia: {
        saintName: "Santa Rita de Cássia",
        novenaTitle: "Novena a Santa Rita de Cássia",
        description: "Santa das causas impossíveis e desesperadas. Peça sua intercessão pelas causas que parecem sem solução. (13 a 21 de maio)",
        image: "https://i.pinimg.com/736x/db/68/3f/db683f0e1b68ee4b60800f26ae5ca7f0.jpg",
        initialPrayer: `<div class="prayer-block">
            <h4 class="section-title">Oração de todos os dias</h4>
            <p>Ó Poderosa e gloriosa Santa Rita, eis a vossos pés uma alma desamparada que, necessitando de auxílio, a vós recorre com a doce esperança de ser atendida por vós, que tem o título de santa dos casos impossíveis e desesperados.</p>
            <p class="mt-4">Ó cara santa, interessai-vos pela minha causa, intercedei junto a Deus para que me conceda a graça de que tanto necessito <em>(faça o pedido)</em>.</p>
            <p class="mt-4">Não permitais que eu tenha de me afastar de vossos pés sem ser atendido.</p>
            <p class="mt-4">Se houver em mim algum obstáculo que me impeça de alcançar a graça que imploro, auxiliai-me para que o afaste.</p>
            <p class="mt-4">Envolvei o meu pedido em vossos preciosos méritos e apresentai-o a vosso celeste Esposo, Jesus, em união com a vossa prece. Ó Santa Rita, eu ponho em vós toda a minha confiança. Por vosso intermédio, espero tranquilamente a graça que vos peço.</p>
            <div class="mt-4 text-center font-semibold">
                <p>Pai Nosso, Ave-Maria, Glória ao Pai.</p>
            </div>
            <p class="mt-4 text-center font-bold">Santa Rita, Advogada dos Impossíveis, rogai por nós!</p>
        </div>`,
        finalPrayer: "",
        days: [
            {
                day: "Dia 1",
                title: "A Esperança em Deus",
                content: `<div class="day-specific-content">
                    <h5 class="font-bold text-lg">Meditação do 1º Dia</h5>
                    <p>Santa Rita nasceu em um tempo de conflitos e, desde cedo, enfrentou obstáculos aos seus desejos mais profundos, como o de se consagrar a Deus. Mesmo quando as circunstâncias pareciam contrárias, ela nunca perdeu a esperança e a fé na providência divina.</p>
                    <p class="mt-4">Hoje, olhemos para as nossas próprias dificuldades, aquelas que nos parecem becos sem saída.</p>
                    <p class="mt-4 italic">Peçamos a Santa Rita a graça de manter a esperança acesa, confiando que Deus tem um plano maior, mesmo quando não o compreendemos. Que a esperança nos mova a não desistir.</p>
                    <p class="mt-6 text-center font-bold">Santa Rita de Cássia, rogai por nós!</p>
                </div>`
            },
            {
                day: "Dia 2",
                title: "Paciência no Sofrimento",
                content: `<div class="day-specific-content">
                    <h5 class="font-bold text-lg">Meditação do 2º Dia</h5>
                    <p>Rita viveu um casamento arranjado com um homem de temperamento difícil e violento. Por muitos anos, suportou maus-tratos com paciência heróica, rezando incessantemente pela conversão do marido. Ela nos ensina que o amor paciente e a oração perseverante podem transformar corações e situações. Pensemos nas nossas relações familiares, nos desafios e conflitos.</p>
                    <p class="mt-4 italic">Peçamos a Santa Rita a virtude da paciência, a sabedoria para lidar com as tensões e a força para amar e rezar por aqueles que nos magoam ou nos desafiam.</p>
                    <p class="mt-6 text-center font-bold">Santa Rita de Cássia, rogai por nós!</p>
                </div>`
            },
            {
                day: "Dia 3",
                title: "O Perdão Radical",
                content: `<div class="day-specific-content">
                    <h5 class="font-bold text-lg">Meditação do 3º Dia</h5>
                    <p>Após a conversão e posterior assassinato do marido, os filhos de Rita desejaram vingança. Temendo por suas almas, Rita pediu a Deus que os levasse antes que cometessem um pecado mortal. Ela mesma perdoou os assassinos do esposo. O perdão de Rita foi radical e libertador. Reflitamos sobre as mágoas que guardamos em nosso coração. O rancor nos aprisiona.</p>
                    <p class="mt-4 italic">Peçamos a Santa Rita a graça de perdoar, não por merecimento do outro, mas para nossa própria paz e para seguir o exemplo de Cristo.</p>
                    <p class="mt-6 text-center font-bold">Santa Rita de Cássia, rogai por nós!</p>
                </div>`
            },
            {
                day: "Dia 4",
                title: "A Perseverança na Fé",
                content: `<div class="day-specific-content">
                    <h5 class="font-bold text-lg">Meditação do 4º Dia</h5>
                    <p>Viúva e sem os filhos, Rita finalmente buscou realizar seu sonho de infância: entrar no convento Agostiniano. No entanto, foi rejeitada várias vezes. Ela não desistiu. Sua perseverança e fé foram recompensadas com uma entrada milagrosa no convento. Quantas vezes desistimos dos nossos sonhos ou da nossa vocação (seja ela qual for) diante das primeiras dificuldades?</p>
                    <p class="mt-4 italic">Peçamos a Santa Rita a força da perseverança na fé e nos propósitos que Deus coloca em nosso coração, mesmo quando as portas parecem fechadas.</p>
                    <p class="mt-6 text-center font-bold">Santa Rita de Cássia, rogai por nós!</p>
                </div>`
            },
            {
                day: "Dia 5",
                title: "A Vida de Oração",
                content: `<div class="day-specific-content">
                    <h5 class="font-bold text-lg">Meditação do 5º Dia</h5>
                    <p>A vida de Santa Rita foi marcada por uma profunda vida de oração. Era na conversa íntima com Deus que ela encontrava força, consolo e direção. A oração era seu refúgio e sua fortaleza. Como está a nossa vida de oração? Dedicamos tempo para estar a sós com Deus, para ouvir Sua voz e entregar nossas vidas a Ele?</p>
                    <p class="mt-4 italic">Peçamos a Santa Rita que nos ensine a rezar com fervor, confiança e constância, fazendo da oração o centro do nosso dia.</p>
                    <p class="mt-6 text-center font-bold">Santa Rita de Cássia, rogai por nós!</p>
                </div>`
            },
            {
                day: "Dia 6",
                title: "O Valor Redentor do Sofrimento",
                content: `<div class="day-specific-content">
                    <h5 class="font-bold text-lg">Meditação do 6º Dia</h5>
                    <p>Em profunda oração diante do crucifixo, Rita pediu para compartilhar das dores da Paixão de Cristo. Recebeu, então, um estigma na testa, a marca de um espinho da coroa de Jesus, que a acompanhou por muitos anos com dor e sofrimento, mas também como sinal visível de sua união com o Senhor. Reflitamos sobre como encaramos nossos próprios sofrimentos.</p>
                    <p class="mt-4 italic">Conseguimos uni-los aos sofrimentos de Cristo na Cruz, oferecendo-os pela salvação das almas? Peçamos a Santa Rita a graça de compreender o valor redentor do sofrimento vivido com fé e amor.</p>
                    <p class="mt-6 text-center font-bold">Santa Rita de Cássia, rogai por nós!</p>
                </div>`
            },
            {
                day: "Dia 7",
                title: "O Milagre da Rosa",
                content: `<div class="day-specific-content">
                    <h5 class="font-bold text-lg">Meditação do 7º Dia</h5>
                    <p>Já idosa e doente no convento, em pleno inverno, Rita pediu a uma visitante que lhe trouxesse uma rosa e dois figos de sua antiga casa. Milagrosamente, a rosa e os figos foram encontrados florescendo na neve. Este milagre é visto como um sinal da bondade de Deus para com aqueles que O amam e Lhe são fiéis, mesmo em meio às adversidades. Santa Rita também foi exemplo de obediência, como quando regou um galho seco por ordem da superiora, e ele floresceu.</p>
                    <p class="mt-4 italic">Peçamos a graça de sermos dóceis à vontade de Deus, atentos aos Seus sinais e obedientes aos Seus mandamentos, confiando que Ele pode fazer florescer o impossível.</p>
                    <p class="mt-6 text-center font-bold">Santa Rita de Cássia, rogai por nós!</p>
                </div>`
            },
            {
                day: "Dia 8",
                title: "A Santa das Causas Impossíveis",
                content: `<div class="day-specific-content">
                    <h5 class="font-bold text-lg">Meditação do 8º Dia</h5>
                    <p>A fama de santidade de Rita e os milagres atribuídos à sua intercessão, tanto em vida quanto após a morte, a consagraram como a "Santa das Causas Impossíveis". Pessoas de todos os lugares recorrem a ela em momentos de grande aflição e desespero, quando tudo parece perdido. Hoje, renovemos nossa confiança na intercessão de Santa Rita.</p>
                    <p class="mt-4 italic">Apresentemos a ela, com fé inabalável, aquela causa que nos parece impossível, aquele problema que nos tira a paz. Peçamos que ela seja nossa advogada junto a Deus.</p>
                    <p class="mt-6 text-center font-bold">Santa Rita de Cássia, rogai por nós!</p>
                </div>`
            },
            {
                day: "Dia 9",
                title: "A Busca pela Santidade",
                content: `<div class="day-specific-content">
                    <h5 class="font-bold text-lg">Meditação do 9º Dia</h5>
                    <p>Santa Rita partiu para a casa do Pai em paz, deixando um legado de fé, perdão, paciência e amor perseverante. Seu corpo incorrupto é um sinal da glória que Deus reserva aos seus santos. Sua vida nos aponta para a meta final: a vida eterna com Deus. Ao concluir esta novena, peçamos a Santa Rita que nos ajude a viver de tal forma que mereçamos alcançar o Céu.</p>
                    <p class="mt-4 italic">Que seu exemplo nos inspire a buscar a santidade no nosso dia a dia e que, por sua intercessão, alcancemos as graças que pedimos, se forem da vontade de Deus, e a perseverança final na fé.</p>
                    <div class="mt-8 p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl text-stone-900 border-none">
                        <p class="text-center font-bold">Santa Rita de Cássia, rogai por nós!</p>
                        <p class="mt-2 text-center text-sm italic">Reze a Novena a Santa Rita de Cássia e peça sua intercessão pelas causas impossíveis da sua vida.</p>
                    </div>
                </div>`
            }
        ]
    },

    pentecostes: {
        saintName: "Pentecostes",
        novenaTitle: "Novena de Pentecostes",
        description: "Peça os dons do Espírito Santo e prepare-se para viver a Solenidade de Pentecostes. (15 a 23 de maio)",
        image: "https://i.pinimg.com/736x/a8/8d/d8/a88dd8930bd3ecfa5be8cdff0601516d.jpg",
        initialPrayer: `<div class="prayer-block">
            <h4 class="section-title">Oração inicial — Veni Creator</h4>
            <p>Vinde Espírito Criador, a nossa alma visitai e enchei os corações com vossos dons celestiais.</p>
            <p class="mt-4">Vós sois chamado o Intercessor de Deus excelso dom sem par, a fonte viva, o fogo, o amor, a unção divina e salutar.</p>
            <p class="mt-4">Sois o doador dos sete dons e sois poder na mão do Pai, por Ele prometido a nós, por nós seus feitos proclamai.</p>
            <p class="mt-4">A nossa mente iluminai, os corações enchei de amor, nossa fraqueza encorajai, qual força eterna e protetor.</p>
            <p class="mt-4">Nosso inimigo repeli, e concedei-nos a vossa paz, se pela graça nos guiais, o mal deixamos para trás.</p>
            <p class="mt-4">Ao Pai e ao Filho Salvador, por vós possamos conhecer que procedeis do Seu amor, fazei-nos sempre firmes crer.</p>
            <p class="mt-4 font-semibold">Amém!</p>
        </div>
        <div class="prayer-block mt-6">
            <h4 class="section-title">Oração da Novena — Os Sete Dons</h4>
            <p class="font-semibold">Vinde, Espírito de Sabedoria!</p>
            <p>Instrui o meu coração, para que eu saiba estimar e amar os bens celestes e antepô-los a todos os bens da Terra. <em>(Glória ao Pai…)</em></p>
            <p class="mt-4 font-semibold">Vinde, Espírito de Inteligência!</p>
            <p>Iluminai a minha mente, para que eu entenda e abrace todos os mistérios e mereça alcançar um pleno conhecimento Vosso, do Pai e do Filho. <em>(Glória ao Pai…)</em></p>
            <p class="mt-4 font-semibold">Vinde, Espírito de Conselho!</p>
            <p>Assisti-me em todos os assuntos desta vida instável, tornai-me dócil às Vossas inspirações e guiai-me sempre pelo direito caminho dos divinos mandamentos. <em>(Glória ao Pai…)</em></p>
            <p class="mt-4 font-semibold">Vinde, Espírito de Fortaleza!</p>
            <p>Fortalecei o meu coração em todas as perturbações e adversidades, e dai à minha alma o vigor necessário para resistir a todos os meus inimigos. <em>(Glória ao Pai…)</em></p>
            <p class="mt-4 font-semibold">Vinde, Espírito de Ciência!</p>
            <p>Fazei-me ver a vaidade de todos os bens caducos deste mundo, para que não use deles senão para Vossa maior glória e salvação da minha alma. <em>(Glória ao Pai…)</em></p>
            <p class="mt-4 font-semibold">Vinde, Espírito de Piedade!</p>
            <p>Vinde morar no meu coração e inclinai-o para a verdadeira piedade e santo amor de Deus. <em>(Glória ao Pai…)</em></p>
            <p class="mt-4 font-semibold">Vinde, Espírito de Temor de Deus!</p>
            <p>Repassai a minha carne com o Vosso santo temor, de modo que tenha sempre Deus presente e evite tudo o que possa desagradar aos olhos de Sua divina majestade. <em>(Glória ao Pai…)</em></p>
        </div>`,
        finalPrayer: `<div class="prayer-block">
            <h4 class="section-title">Oração Final</h4>
            <p>Divino Espírito Santo, eu vos ofereço todas as preces da Santíssima Virgem e dos apóstolos reunidos no cenáculo, e a essas uno todas as minhas orações, suplicando-Vos que Vos apresseis em vir renovar a face da terra.</p>
            <p class="mt-4 font-semibold">– Enviai o Vosso Espírito e tudo será criado.</p>
            <p class="font-semibold">– E renovareis a face da Terra.</p>
            <p class="mt-4"><strong>Oremos:</strong> Ó Deus, que instruístes os corações dos fiéis com a luz do Espírito Santo, dai-nos, pelo mesmo Espírito, o conhecimento e o amor da justiça, e que gozemos sempre da Sua consolação. Amém.</p>
            <p class="mt-4 italic">Rezar três Ave-Marias a Nossa Senhora de Pentecostes com a invocação: "Rainha dos Apóstolos, rogai por nós!".</p>
        </div>`,
        days: [
            {
                day: "Dia 1",
                title: "O Dom da Sabedoria",
                content: `<div class="day-specific-content">
                    <p>O Espírito Santo nos chama a clamar o dom da Sabedoria, que é a verdadeira "arte de saber viver", para que saibamos estimar os bens do céu e colocá-los acima de todas as coisas passageiras da terra.</p>
                </div>`
            },
            {
                day: "Dia 2",
                title: "O Dom do Entendimento",
                content: `<div class="day-specific-content">
                    <p>O Espírito Santo nos chama a abrir nossa inteligência através do dom do Entendimento, permitindo que conheçamos Jesus e compreendamos as verdades espirituais que só Ele pode nos revelar.</p>
                </div>`
            },
            {
                day: "Dia 3",
                title: "O Dom do Conselho",
                content: `<div class="day-specific-content">
                    <p>O Espírito Santo nos chama a buscar o dom do Conselho, cultivando uma intimidade profunda com Ele — que é a "alma da nossa alma" — para que possamos orientar e aconselhar o próximo retamente.</p>
                </div>`
            },
            {
                day: "Dia 4",
                title: "O Dom da Fortaleza",
                content: `<div class="day-specific-content">
                    <p>O Espírito Santo nos chama a revestir-nos com o dom da Fortaleza, pedindo que Sua presença seja renovada diariamente para que tenhamos a "têmpera" e a resiliência necessárias para vencer todas as adversidades e inimigos espirituais.</p>
                </div>`
            },
            {
                day: "Dia 5",
                title: "O Dom da Ciência",
                content: `<div class="day-specific-content">
                    <p>O Espírito Santo nos chama a exercer o dom da Ciência, aprendendo a olhar todas as coisas com o olhar de Deus e a reconhecer a vaidade dos bens deste mundo em relação à glória eterna.</p>
                </div>`
            },
            {
                day: "Dia 6",
                title: "O Dom da Piedade",
                content: `<div class="day-specific-content">
                    <p>O Espírito Santo nos chama a cultivar o dom da Piedade, despertando em nós um zelo fervoroso e amor pelas coisas divinas e pela liturgia, impedindo que a Igreja seja apenas uma organização humana e tornando-a viva e orante.</p>
                </div>`
            },
            {
                day: "Dia 7",
                title: "O Dom do Temor de Deus",
                content: `<div class="day-specific-content">
                    <p>O Espírito Santo nos chama ao santo Temor de Deus, inspirando-nos um respeito profundo que nos leva a ter "nojo do pecado" e a preferir a morte antes que ofender a Majestade Divina.</p>
                </div>`
            },
            {
                day: "Dia 8",
                title: "Preparação no Cenáculo",
                content: `<div class="day-specific-content">
                    <p>O Espírito Santo nos chama à preparação no Cenáculo, motivando-nos a identificar qual dom mais necessitamos e a suplicar com fervor, enquanto nos unimos em intercessão por todos aqueles que sofrem.</p>
                </div>`
            },
            {
                day: "Dia 9",
                title: "Um Novo Pentecostes",
                content: `<div class="day-specific-content">
                    <p>O Espírito Santo nos chama a clamar o batismo no Espírito e a desejar um novo Pentecostes que nos tire do comodismo e nos transforme em homens e mulheres "de fogo", que transbordam a presença de Deus para o mundo.</p>
                </div>`
            }
        ]
    },

    nossa_senhora_auxiliadora: {
        saintName: "Nossa Senhora Auxiliadora",
        novenaTitle: "Novena a Nossa Senhora Auxiliadora",
        description: "Peça o poderoso auxílio de Maria Santíssima nesta novena em preparação à festa de Nossa Senhora Auxiliadora. (15 a 23 de maio)",
        image: "https://i.pinimg.com/736x/13/4d/b4/134db4459382d5e9ecc6f4ce276edd5e.jpg",
        initialPrayer: "",
        finalPrayer: `<div class="prayer-block">
            <h4 class="section-title">Oração final para todos os dias</h4>
            <p>Três Pais-Nossos, Ave-Marias e Glórias ao Santíssimo Sacramento com a prece:</p>
            <p class="mt-2 italic">"Graças e louvores se deem, a todo o momento, ao Santíssimo e Diviníssimo Sacramento".</p>
            <p class="mt-4">Em seguida, três Salve-Rainhas a Maria Santíssima Auxiliadora:</p>
            <p class="mt-2 italic">"Salve, Rainha, Mãe de misericórdia, vida, doçura, esperança nossa. Salve! A vós bradamos os degredados filhos de Eva, a vós suspiramos gemendo e chorando neste vale de lágrimas. Eia, pois, Advogada nossa, esses vossos olhos misericordiosos a nós volvei. E depois deste desterro, mostrai-nos Jesus, bendito fruto do vosso ventre. Oh, Clemente! Oh, Piedosa! Oh, doce sempre Virgem Maria".</p>
            <p class="mt-4 font-semibold">Maria, Auxílio dos cristãos, rogai por nós.</p>
            <p class="font-semibold">Nossa Senhora Auxiliadora, rogai por nós!</p>
            <p class="mt-4 font-semibold">Em nome do Pai, do Filho e do Espírito Santo. Amém!</p>
        </div>`,
        days: [
            {
                day: "Dia 1",
                title: "Ave do Mar Estrela",
                content: `<div class="day-specific-content">
                    <p class="italic font-semibold">"Ave do mar Estrela, bendita Mãe de Deus, fecunda e sempre virgem, Portal feliz dos céu."</p>
                    <h4 class="section-title mt-4">Oração do Dia</h4>
                    <p>Ó, Virgem Santíssima, poderoso auxílio dos cristãos, que recorrem confiados ao trono da vossa misericórdia, ouvi as preces desse pobre pecador, que implora o vosso socorro, para poder fugir sempre do pecado e das ocasiões de pecar. Eis a primeira graça que desejo receber nesta novena.</p>
                    <h4 class="section-title mt-4">Leitura Bíblica e Pequena Promessa</h4>
                    <p>"Um sinal grandioso apareceu no céu: uma Mulher vestida com o sol, tendo a lua sob os pés e sobre a cabeça uma coroa de doze estrelas" (Ap. 12,1). "Enfurecido por causa da Mulher, o Dragão foi então guerrear contra o resto dos seus descendentes, os que observam os mandamentos de Deus e mantêm o Testemunho de Jesus" (Ap. 12,17)</p>
                    <p class="mt-4">Duplo sinal distintivo fiéis autênticos: Jesus e Maria. Salvação dos que creem e auxílio dos cristãos. Até a morte, prometo permanecer fiel a minha religião: Santa, Católica, Apostólica e Romana.</p>
                </div>`
            },
            {
                day: "Dia 2",
                title: "A Paz do Céu",
                content: `<div class="day-specific-content">
                    <p class="italic font-semibold">"Ouvindo aquela Ave do Anjo Gabriel, mudando de Eva o nome, trazei-nos paz do céu"</p>
                    <h4 class="section-title mt-4">Oração do Dia</h4>
                    <p>Maria Santíssima, Mãe de bondade e misericórdia, que, muitas vezes, com o vosso visível Patrocínio, livrastes o povo cristão dos assaltos e da barbárie dos muçulmanos, livrai, eu vô-lo peço, a minha alma dos assaltos do demônio, do mundo e da carne, e fazei que eu possa, em todo tempo, obter completa vitória sobre os inimigos da minha alma.</p>
                    <h4 class="section-title mt-4">Leitura Bíblica e Pequena Promessa</h4>
                    <p>"Disse então, Maria: 'Eu sou a serva do Senhor. Faça-se em mim segundo a tua palavra'". (Lc 1,18)</p>
                    <p class="mt-4">Em poucas palavras, Maria Santíssima nos oferece um exemplo da humildade, obediência e disponibilidade para fazer a vontade de Deus e colaborar na realização do seu plano de salvação.</p>
                    <p class="mt-4 italic">"Senhor, que queres que eu faça? Fazei-me instrumento da vossa paz".</p>
                </div>`
            },
            {
                day: "Dia 3",
                title: "Guardai-nos Contra o Mal",
                content: `<div class="day-specific-content">
                    <p class="italic font-semibold">"Ao cego iluminai, ao réu livrai também, de todo mal guardai-nos e dai-nos todo o bem."</p>
                    <h4 class="section-title mt-4">Oração do Dia</h4>
                    <p>Oh Maria, Rainha poderosíssima, que sozinha triunfaste das múltiplas heresias que procuravam arrancar tantos filhos do Grêmio da Santa Madre Igreja, ajudai-me, eu vô-lo peço, a manter e conservar firme a minha fé, e puro o meu coração no meio de tantas insídias e do veneno de tão perversas doutrinas.</p>
                    <h4 class="section-title mt-4">Leitura Bíblica e Pequena Promessa</h4>
                    <p>"Naqueles dias, Maria pôs-se a caminho para a região montanhosa, dirigindo-se apressadamente a uma cidade de Judá. Entrou em casa de Zacarias e saudou Isabel. Maria permaneceu com ela mais ou menos três meses, e voltou para sua casa" (Lc 1,39-40, 56).</p>
                    <p class="mt-4">Com certeza, Maria permaneceu até o nascimento de São João Batista, porque soube que, neste período, precisam as mulheres grávidas de ajuda e auxílio especial. Aqui, temos um belo exemplo da caridade.</p>
                    <p class="mt-4 italic">Eu também prometo praticar sempre a caridade e as obras de misericórdia.</p>
                </div>`
            },
            {
                day: "Dia 4",
                title: "Mostrai Ser Nossa Mãe",
                content: `<div class="day-specific-content">
                    <p class="italic font-semibold">"Mostrai ser nossa Mãe, levando a nossa voz a quem, por nós nascido, dignou-se a vir de vós."</p>
                    <h4 class="section-title mt-4">Oração do Dia</h4>
                    <p>Oh Maria, minha Mãe dulcíssima, vós que sóis a Rainha dos Mártires, por tantos atos heroicos de coragem e de fortaleza que tivestes na terra, dignai-vos infundir, no meu coração, a força necessária para conservar-me constante do vosso serviço, a fim de que, desprezando todo o respeito humano, possa praticar abertamente e sem envergonhar-me todos os meus deveres religiosos e mostrar-me sempre e em todas as ocasiões vosso devoto filho até a morte.</p>
                    <h4 class="section-title mt-4">Leitura Bíblica e Pequena Promessa</h4>
                    <p>"Meu filho, por que agiste assim conosco? Olha que teu pai e eu, aflitos te procurávamos" (Lc 2,48). Com que admirável delicadeza Maria admoesta seu Filho perdido e achado no templo. Um belo exemplo para os pais de família.</p>
                    <p class="mt-4">Os filhos crescem em sabedoria, estatura e em graça, diante de Deus e diante dos homens, quando recebem bom exemplo dos pais. Na educação dos filhos, prometo sempre praticar a paciência, a prudência e a seriedade.</p>
                </div>`
            },
            {
                day: "Dia 5",
                title: "Guardai-nos Contra o Mal",
                content: `<div class="day-specific-content">
                    <p class="italic font-semibold">"Suave mais que todas, Oh, Virgem sem igual, fazei-nos mansos, puros, guardai-nos contra o mal."</p>
                    <h4 class="section-title mt-4">Oração do Dia</h4>
                    <p>Oh, Maria, Mãe querida, que, no triunfo do Papa Pio VII, mostrastes o vosso valioso patrocínio, estendei o vosso manto piedoso por sobre toda a Santa Igreja, especialmente sobre o seu Augusto Chefe, o Papa, contra os assaltos de tantos inimigos, livrai-o dos sofrimentos temporais e assisti-o sempre, a fim de que possa conduzir seguramente ao porto a barca de São Pedro, e triunfar das ondas orgulhosas que tentam fazê-la soçobrar.</p>
                    <h4 class="section-title mt-4">Leitura Bíblica e Pequena Promessa</h4>
                    <p>"Naquele tempo, houve bodas em Caná da Galileia, e a mãe de Jesus estava presente. Jesus também fora convidado para as bodas assim como seus discípulos" (Jo 6,1-11). Vindo a faltar o vinho das bodas, Jesus fez milagre a pedido confiante de Sua Mãe. Ela também a nós convida a obedecer de modo especial Jesus, dizendo: "O que Ele disser, fazei-o".</p>
                    <p class="mt-4 italic">"Felizes os que ouvem a Palavra de Deus e a praticam".</p>
                </div>`
            },
            {
                day: "Dia 6",
                title: "Guiai-nos Para a Luz",
                content: `<div class="day-specific-content">
                    <p class="italic font-semibold">"Oh, dai-nos vida pura, guiai-nos para a luz, e um dia, ao vosso lado, possamos ver Jesus."</p>
                    <h4 class="section-title mt-4">Oração do Dia</h4>
                    <p>Oh, Maria, Rainha dos Apóstolos, tomai sob a vossa valiosa proteção os Sagrados Ministros e todos os fiéis da Igreja Católica, alcançai-lhes o espírito de união, de perfeita obediência ao Sumo Pontífice e de zelo fervoroso para a salvação das almas, e especialmente dignai-vos estender a vossa amorável assistência aos missionários, para que possam conduzir todos os povos da terra à fé verdadeira, a fim de que, assim, o mundo todo se torne um só aprisco debaixo do guia de um só Pastor, Jesus Cristo Nosso Senhor.</p>
                    <h4 class="section-title mt-4">Leitura Bíblica e Pequena Promessa</h4>
                    <p>"O Senhor é o teu louvor e o teu Deus, é ele quem operou para ti coisas grandiosas" (Dt 10,21a).</p>
                    <p class="mt-4">Na verdade, Deus, olhando a humildade de sua serva fiel, Maria Santíssima, deu-nos por meio dela o Salvador de todos os homens, Jesus Cristo, Senhor Nosso.</p>
                    <p class="mt-4 italic">"Oh, Maria, dai-nos graça de imitar seu amor de Deus e do próximo".</p>
                </div>`
            },
            {
                day: "Dia 7",
                title: "Louvor à Santíssima Trindade",
                content: `<div class="day-specific-content">
                    <p class="italic font-semibold">"Louvor a Deus, ao Pai e ao Filho, Sumo Bem, com seu Divino Espírito agora e sempre. Amém"</p>
                    <h4 class="section-title mt-4">Oração do Dia</h4>
                    <p>Ó Maria, Mãe de piedade e clemência, que tantas vezes, com a vossa eficaz intercessão, salvastes os cristãos da peste e de outros flagelos do corpo, socorrei-os e livrai-os agora da peste da impiedade e da irreligião, que de mil maneiras se insinua em suas almas, para afastá-los da Igreja e das práticas da piedade, especialmente por meio das seitas, da imprensa e das escolas perversas.</p>
                    <p class="mt-4">Peço-vos, humildemente, amparai os bons, que possam perseverar; fortificai os fracos, chamai à penitência os transviados e os pecadores, para que triunfe, aqui na Terra, a Verdade e o Reino de Jesus Cristo, e assim cresça a vossa glória e o número dos eleitos no Céu.</p>
                    <h4 class="section-title mt-4">Leitura Bíblica e Pequena Promessa</h4>
                    <p>"Eles perseveravam na oração com Maria, mãe de Jesus". (At 1,12;14)</p>
                    <p class="mt-4 italic">Oh! Maria, ensina-nos a rezar, a confiar e perseverar.</p>
                </div>`
            },
            {
                day: "Dia 8",
                title: "Senhora Gloriosa",
                content: `<div class="day-specific-content">
                    <p class="italic font-semibold">"Senhora gloriosa, bem mais que o sol brilhais. O Deus que vos criou ao seio amamentais."</p>
                    <h4 class="section-title mt-4">Oração do Dia</h4>
                    <p>Oh, Maria, coluna espiritual da Igreja e Socorro dos Cristãos, rogo-vos me conserveis firme na Divina Fé e mantenhais em mim a liberdade e dignidade dos filhos de Deus. De minha parte, prometo-vos não manchar a minha alma com o pecado, nunca fazer parte de sociedade condenadas pela Santa Sé.</p>
                    <p class="mt-4">Prometo-vos obedecer ao Sumo Pontífice e aos bispos que estão em comunhão com ele, pois quero viver e morrer no seio da religião católica, na qual somente posso esperar, com certeza, a minha eterna salvação.</p>
                    <h4 class="section-title mt-4">Leitura Bíblica e Pequena Promessa</h4>
                    <p>"Junto à cruz de Jesus estava, em pé, sua Mãe." (Jo 19,25-27).</p>
                    <p class="mt-4">Jamais podemos nos esquecer das palavras de Jesus agonizante: "Mãe, eis o teu filho. Filho, eis tua Mãe".</p>
                    <p class="mt-4 italic">"Agonizante, ao discípulo por sua mãe destes Maria. Para os fiéis terem tal Mãe presente à última agonia".</p>
                </div>`
            },
            {
                day: "Dia 9",
                title: "Portal Feliz dos Céus",
                content: `<div class="day-specific-content">
                    <p class="italic font-semibold">"O que Eva destruiu, no Filho recriais, do céu abris a porta e os tristes abrigais"</p>
                    <h4 class="section-title mt-4">Oração do Dia</h4>
                    <p>Oh! Maria, minha Mãe piedosíssima, que em todos os tempos quisestes ser o Auxílio dos Cristãos, assisti-me com o vosso poderoso Patrocínio durante a vida toda, mas especialmente na hora da morte e fazei com que eu, depois de haver-vos amado e venerado na terra, possa ir cantar as vossas misericórdias no Céu. Assim seja.</p>
                    <p class="mt-4">Oh, Deus, que constituístes a Mãe de vosso Filho querido, Mãe e Auxílio do Povo Cristão, concedei, nós vos rogamos, que vivamos sob a sua proteção e a Igreja se alegre em vossa Paz perpétua.</p>
                    <p class="mt-4">Por Nosso Senhor Jesus Cristo, Vosso Filho, na Unidade do Espírito Santo. Amém.</p>
                    <h4 class="section-title mt-4">Leitura Bíblica e Pequena Promessa</h4>
                    <p>"Mulher, eis aí teu filho" (Jo 19, 26-27)</p>
                    <p class="mt-4">Maria Santíssima com ânimo materno, consentindo com amor na imolação da vítima por ela gerada, pelo próprio Jesus moribundo na cruz, foi dada como mãe ao discípulo e a todos nós.</p>
                    <p class="mt-4">A Virgem Maria é para a Igreja o modelo da fé e da caridade. Maria Auxiliadora, coopera na obra do Salvador para a restauração da vida sobrenatural das almas.</p>
                    <p class="mt-4 italic font-semibold">"Eis aí a tua Mãe".</p>
                </div>`
            }
        ]
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
        description: "Novena em preparação à festa da Visitação de Maria. A mesma oração é rezada nos 9 dias. (22 a 30 de maio)",
        image: "https://i.pinimg.com/736x/46/49/63/464963169ef6da9d7829305e5e6727e8.jpg",
        imageObjectPosition: "top",
        initialPrayer: "",
        finalPrayer: "",
        days: [
            {
                day: "Dias 1 a 9",
                title: "Oração da Visitação de Maria",
                content: `<div class="day-specific-content">
                <div class="mb-4 p-1.5 px-3 rounded-full inline-flex items-center gap-2 border border-[#9ca3af] bg-white/80 backdrop-blur-sm shadow-sm">
                    <span class="text-sm" style="filter: grayscale(100%) brightness(30%);">🙏</span>
                    <p class="text-xs sm:text-sm font-bold leading-none" style="color: #292524 !important;">A oração a seguir é a mesma para todos os 9 dias da novena, boa oração!</p>
                </div>

                <h5 class="font-bold text-lg mt-6">Oração</h5>
                <p>Ó Virgem Maria! Que, movida do Espírito Santo, Vos pusestes a caminho para visitar Vossa prima Santa Isabel, a fim de que a presença do Verbo encarnado livrasse o Batista do pecado original, alcançai-me do mesmo Vosso Filho o perdão de todos os meus pecados e um tal horror a eles que nunca mais torne a cometê-los para o futuro.</p>
                <p class="mt-4">Infinitas graças vos damos, soberana Rainha, pelos benefícios que todos os dias recebemos de vossas mãos liberais. Dignai-vos, agora e para sempre, tomar-nos debaixo de vosso poderoso amparo, e para mais vos obrigar, vos saudamos com uma Salve Rainha:</p>

                <div class="mt-8 p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border-none">
                    <h5 class="font-bold text-center mb-3" style="color: #292524 !important;">Salve Rainha</h5>
                    <p style="color: #292524 !important;">Salve Rainha, Mãe de misericórdia. Vida, doçura e esperança nossa, salve! A Vós bradamos os degradados filhos de Eva; por Vós suspiramos, gemendo e chorando neste vale de lágrimas. Eia, pois, Advogada nossa, esses Vossos olhos misericordiosos a nós volvei, e depois deste desterro, mostrai-nos a Jesus, bendito fruto do Vosso ventre. Ó clemente, ó piedosa, ó doce sempre Virgem Maria.</p>
                    <p class="mt-4" style="color: #292524 !important;">Rogai por nós Santa Mãe de Deus,<br/>Para que sejamos dignos das promessas de Cristo. Amém.</p>
                </div>

                <div class="mt-6 p-5 bg-stone-100/50 rounded-xl border border-stone-200">
                    <h5 class="font-bold text-center mb-3">Ladainha de Nossa Senhora</h5>
                    <p>Senhor, tende piedade de nós.<br/>Jesus Cristo, tende piedade de nós.<br/>Senhor, tende piedade de nós.<br/>Jesus Cristo, ouvi-nos.<br/>Jesus Cristo, atendei-nos.<br/>Pai celeste que sois Deus, <em>tende piedade de nós.</em><br/>Filho, Redentor do mundo, que sois Deus, <em>tende piedade de nós.</em><br/>Espírito Santo, que sois Deus, <em>tende piedade de nós.</em><br/>Santíssima Trindade, que sois um só Deus, <em>tende piedade de nós.</em></p>

                    <p class="mt-4">Santa Maria, <em>rogai por nós.</em><br/>Santa Mãe de Deus, <em>rogai por nós.</em><br/>Santa Virgem das Virgens, <em>rogai por nós.</em><br/>Mãe de Jesus Cristo, <em>rogai por nós.</em><br/>Mãe da divina graça, <em>rogai por nós.</em><br/>Mãe puríssima, <em>rogai por nós.</em><br/>Mãe castíssima, <em>rogai por nós.</em><br/>Mãe imaculada, <em>rogai por nós.</em><br/>Mãe intacta, <em>rogai por nós.</em><br/>Mãe intemerata, <em>rogai por nós.</em><br/>Mãe amável, <em>rogai por nós.</em><br/>Mãe admirável, <em>rogai por nós.</em><br/>Mãe do bom conselho, <em>rogai por nós.</em><br/>Mãe do Criador, <em>rogai por nós.</em><br/>Mãe do Salvador, <em>rogai por nós.</em></p>

                    <p class="mt-4">Virgem prudentíssima, <em>rogai por nós.</em><br/>Virgem venerável, <em>rogai por nós.</em><br/>Virgem louvável, <em>rogai por nós.</em><br/>Virgem poderosa, <em>rogai por nós.</em><br/>Virgem clemente, <em>rogai por nós.</em><br/>Virgem fiel, <em>rogai por nós.</em></p>

                    <p class="mt-4">Espelho de justiça, <em>rogai por nós.</em><br/>Sede de sabedoria, <em>rogai por nós.</em><br/>Causa da nossa alegria, <em>rogai por nós.</em><br/>Vaso espiritual, <em>rogai por nós.</em><br/>Vaso honorífico, <em>rogai por nós.</em><br/>Vaso insígne de devoção, <em>rogai por nós.</em><br/>Rosa mística, <em>rogai por nós.</em><br/>Torre de David, <em>rogai por nós.</em><br/>Torre de marfim, <em>rogai por nós.</em><br/>Casa de ouro, <em>rogai por nós.</em><br/>Arca da aliança, <em>rogai por nós.</em><br/>Porta do céu, <em>rogai por nós.</em><br/>Estrela da manhã, <em>rogai por nós.</em></p>

                    <p class="mt-4">Saúde dos enfermos, <em>rogai por nós.</em><br/>Refúgio dos pecadores, <em>rogai por nós.</em><br/>Consoladora dos aflitos, <em>rogai por nós.</em><br/>Auxílio dos cristãos, <em>rogai por nós.</em></p>

                    <p class="mt-4">Rainha dos anjos, <em>rogai por nós.</em><br/>Rainha dos patriarcas, <em>rogai por nós.</em><br/>Rainha dos profetas, <em>rogai por nós.</em><br/>Rainha dos apóstolos, <em>rogai por nós.</em><br/>Rainha dos mártires, <em>rogai por nós.</em><br/>Rainha dos confessores, <em>rogai por nós.</em><br/>Rainha das virgens, <em>rogai por nós.</em><br/>Rainha de todos os santos, <em>rogai por nós.</em><br/>Rainha concebida sem pecado original, <em>rogai por nós.</em><br/>Rainha elevada ao céu, <em>rogai por nós.</em><br/>Rainha do sacratíssimo Rosário, <em>rogai por nós.</em><br/>Rainha da paz, <em>rogai por nós.</em></p>

                    <p class="mt-4">Cordeiro de Deus, que tirais os pecados do mundo, <em>perdoai-nos Senhor.</em><br/>Cordeiro de Deus, que tirais os pecados do mundo, <em>ouvi-nos Senhor.</em><br/>Cordeiro de Deus, que tirais os pecados do mundo, <em>tende piedade de nós.</em></p>

                    <p class="mt-4">℣. Rogai por nós, Santa Mãe de Deus,<br/>℟. Para que sejamos dignos das promessas de Cristo.</p>

                    <p class="mt-4"><strong>Oremos:</strong> Senhor Deus, nós Vos suplicamos que concedais aos vossos servos perpétua saúde de alma e de corpo; e que, pela gloriosa intercessão da bem-aventurada sempre Virgem Maria, sejamos livres da presente tristeza e gozemos da eterna alegria. Por Cristo Nosso Senhor. Amém.</p>
                </div>

                <p class="mt-6 text-center font-bold">Nossa Senhora da Visitação, rogai por nós!</p>
            </div>`
            }
        ]
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

    ns_india: {
        saintName: "N.S. da Boa Saúde (Índia)",
        novenaTitle: "Novena a N.S. da Boa Saúde",
        description: "Novena em honra a Nossa Senhora de Vailankanni, a Lourdes do Oriente (8 de setembro).",
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhDzHnHoCCreMtCrjxEK-GNE22zHdYLfwqTidbFdltvt9JTcene2FhjQC0mnsO8LOxC8sxFLVyVzfWjRBFuAfxKaxWJ9XZBXNjPYijrTMe4sffm9TNbac2R9ZfjLK_IAxM72y5f64IfnHwC/s1600/Nossa+Senhora+de+Vailankanni.jpg",
        initialPrayer: "",
        finalPrayer: "",
        days: Array.from({ length: 9 }, (_, i) => ({
            day: `Dia ${i + 1}`,
            title: `Dia ${i + 1} - N.S. da Boa Saúde`,
            content: ""
        }))
    },

    ns_caridade: {
        saintName: "N.S. da Caridade (Cuba)",
        novenaTitle: "Novena a N.S. da Caridade",
        description: "Novena em honra a Nossa Senhora da Caridade do Cobre, padroeira de Cuba (8 de setembro).",
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgplFq6e-qNfH1vZDv_34Uv2KA1gHpEkUNfkHVCpLdETR1Y3DHpxGTbBJCY9tuldoi3a6RyHxxWVpKQBk5lEG-X-KbAz4Nh2VWiJHFkomKErJwSQnhrhRPVMoicifOki8DFA4_3yoN0AHs/s1600/73a74f802b63b43f1002aa113dd417bb.jpg",
        initialPrayer: "",
        finalPrayer: "",
        days: Array.from({ length: 9 }, (_, i) => ({
            day: `Dia ${i + 1}`,
            title: `Dia ${i + 1} - N.S. da Caridade`,
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
    },
    santa_gemma_galgani: {
        saintName: "Santa Gemma Galgani",
        novenaTitle: "Novena a Santa Gemma Galgani",
        description: "Jovem mística e estigmatizada. Intercessora nas tentações e pureza.",
        image: "https://i.pinimg.com/1200x/8a/e9/88/8ae9882bcb83a868f759277dc575965d.jpg",
        imageObjectPosition: "top",
        initialPrayer: "Ó Divino Senhor, humildemente nos prostramos diante da Vossa Infinita Majestade, adorando-Vos e dedicando à Vossa glória as fervorosas orações que agora Vos apresentamos, como acto de devoção à Vossa serva, Santa Gemma Galgani, cuja intercessão imploramos.",
finalPrayer: "Ó Deus, que moldastes a Vossa serva Santa Gemma à semelhança de Vosso Filho Crucificado, concedei-nos, por sua intercessão, a graça que humildemente Vos suplicamos e, pela Paixão, Morte e Ressurreição de Vosso Filho, possamos permanecer unidos a Vós por toda a eternidade. Isto Vos suplicamos, por Jesus Cristo, nosso Senhor. Amém.",
        days: [
            {
                day: "Dia 1",
                title: "1º Dia",
                content: `<div class="day-specific-content"><p>Virgem mais compassiva Santa Gemma, durante a vossa curta vida na terra, vós destes um exemplo incrivelmente belo de inocência angelical e amor seráfico, e fostes considerada digna de trazer em vossa carne as marcas da Paixão de nosso Senhor. Tende piedade de nós, que nos encontramos em tão grande necessidade da Misericórdia de Deus, e obtende, através dos vossos méritos e intercessão, a graça especial que agora fervorosamente imploramos.</p><p class="mt-4 font-semibold">Pai Nosso, Ave-Maria, Glória.</p><p class="mt-4 italic">Orai por nós, Santa Gemma, para que sejamos dignos das promessas de Cristo.</p></div>`
            },
            {
                day: "Dia 2",
                title: "2º Dia",
                content: `<div class="day-specific-content"><p>Ó digna Esposa do Cordeiro de Deus, virgem fiel Santa Gemma, vós preservastes a inocência e esplendor da virgindade, dando ao mundo um brilhante exemplo de pureza e das mais excelsas virtudes. Olhai com compaixão para nós, que confiamos em vós, do vosso lugar elevado no Céu, ao vos implorarmos a graça que tão ardentemente desejamos.</p><p class="mt-4 font-semibold">Pai Nosso, Ave-Maria, Glória.</p><p class="mt-4 italic">Orai por nós, Santa Gemma, para que sejamos dignos das promessas de Cristo.</p></div>`
            },
            {
                day: "Dia 3",
                title: "3º Dia",
                content: `<div class="day-specific-content"><p>Ó amorosíssima virgem Santa Gemma, com um fervoroso amor por Jesus, vós sofrestes imensamente pela conversão dos pecadores, como vítima expiatória, e amastes os outros intensamente, à luz do amor de Deus. Não vos esqueçais de nós, que permanecemos aqui na terra, e olhai com bondade para aqueles que, entre nós, vos suplicam, na esperança confiante de receber esta graça, por vossa amorosa intercessão.</p><p class="mt-4 font-semibold">Pai Nosso, Ave-Maria, Glória.</p><p class="mt-4 italic">Orai por nós, Santa Gemma, para que sejamos dignos das promessas de Cristo.</p></div>`
            },
            {
                day: "Dia 4",
                title: "4º Dia",
                content: `<div class="day-specific-content"><p>Bem-aventurada Santa Gemma, vós que, pela vontade de Deus, sofrestes, ainda jovem, a perda de vossos pais, tendo também padecido inúmeras dores no corpo e no espírito, ensinai-nos a sacrificar-nos e a sofrermos por amor de Deus, para que também nós possamos expiar os nossos pecados aqui na terra e, desse modo, sejamos mais dignos do infinito tesouro da união com Deus no Céu.</p><p class="mt-4 font-semibold">Pai Nosso, Ave-Maria, Glória.</p><p class="mt-4 italic">Orai por nós, Santa Gemma, para que sejamos dignos das promessas de Cristo.</p></div>`
            },
            {
                day: "Dia 5",
                title: "5º Dia",
                content: `<div class="day-specific-content"><p>Ó gloriosa Santa Gemma, durante anos vós desejastes imensamente entrar na vida religiosa consagrada, mas Deus desejou algo diferente, dizendo-vos, muitos anos depois, que tal não aconteceria, causando-vos, desse modo, uma grande desilusão. Ainda assim, vós aceitastes este grande sacrifício e resignaste-vos à vontade de Deus. Ensinai-nos, portanto, querida Santa Gemma, a aceitar todos os sacrifícios e sofrimentos que Deus permita nas nossas vidas, especialmente aqueles que muito contrariam a nossa própria vontade e desejos.</p><p class="mt-4 font-semibold">Pai Nosso, Ave-Maria, Glória.</p><p class="mt-4 italic">Orai por nós, Santa Gemma, para que sejamos dignos das promessas de Cristo.</p></div>`
            },
            {
                day: "Dia 6",
                title: "6º Dia",
                content: `<div class="day-specific-content"><p>Querida Jóia de Cristo, Santa Gemma, cujo coração ardia inteiramente no amor de Deus, ensinai-nos a amar a Deus com todo o nosso coração, mente e alma, e a colocar Deus, fervorosamente, acima de todas as coisas, "porque onde estiver o vosso tesouro, aí estará também o vosso coração".</p><p class="mt-4 font-semibold">Pai Nosso, Ave-Maria, Glória.</p><p class="mt-4 italic">Orai por nós, Santa Gemma, para que sejamos dignos das promessas de Cristo.</p></div>`
            },
            {
                day: "Dia 7",
                title: "7º Dia",
                content: `<div class="day-specific-content"><p>Ó santa da Paixão de Jesus, Santa Gemma, enquanto alma vítima, suplicáveis sempre pela salvação dos pecadores. Obtende, nós vos suplicamos, não apenas a graça que pedimos, se for essa a vontade de Deus, mas, principalmente, a conversão e salvação das nossas almas, para que, algum dia, possamos unir-nos a Jesus, Maria e a vós por toda a eternidade.</p><p class="mt-4 font-semibold">Pai Nosso, Ave-Maria, Glória.</p><p class="mt-4 italic">Orai por nós, Santa Gemma, para que sejamos dignos das promessas de Cristo.</p></div>`
            },
            {
                day: "Dia 8",
                title: "8º Dia",
                content: `<div class="day-specific-content"><p>Ó fervorosíssima Santa Gemma, derramastes tantas vezes inúmeras lágrimas por causa dos vossos pecados, procurando constantemente fazer penitência e reparação por eles. A nós, tão propensos ao deleite, procurando sempre gratificar os nossos sentidos e arranjar desculpas para evitar qualquer penitência, ajudai-nos a reconhecer os sofrimentos infinitos que Jesus padeceu pelos nossos pecados, bem como as dores que Lhe causámos, e, com a Paixão de Jesus em mente, obtende para nós uma grande tristeza e o desejo de nunca mais cometer tais pecados.</p><p class="mt-4 font-semibold">Pai Nosso, Ave-Maria, Glória.</p><p class="mt-4 italic">Orai por nós, Santa Gemma, para que sejamos dignos das promessas de Cristo.</p></div>`
            },
            {
                day: "Dia 9",
                title: "9º Dia",
                content: `<div class="day-specific-content"><p>Ó amorosíssima Santa Gemma, nós vos pedimos que sejais nossa padroeira e amiga especial, hoje e para sempre. Assisti-nos diariamente nas nossas necessidades espirituais e materiais, e ensinai-nos a conhecer, amar e servir o Senhor, nosso Deus, com todo o nosso coração. Acompanhai-nos, em conjunto com o nosso Anjo-da-guarda, em todos os nossos caminhos, e guiai-nos amorosamente até ao Céu. Ajudai-nos na hora da nossa morte, com Jesus, Maria e José, defendendo a nossa causa diante de Deus; e, confiando na Sua grande misericórdia e na Paixão de Jesus, vosso Esposo, obtende a salvação das nossas almas, bem como a graça que humildemente pedimos.</p><p class="mt-4 font-semibold">Pai Nosso, Ave-Maria, Glória.</p><p class="mt-4 italic">Orai por nós, Santa Gemma, para que sejamos dignos das promessas de Cristo.</p></div>`
            }
        ]
    },

    // OCEANIA
    nossa_senhora_auxiliadora_australia: {
        saintName: "Nossa Senhora Auxiliadora (Austrália)",
        novenaTitle: "Novena a Nossa Senhora Auxiliadora",
        description: "Padroeira da Austrália. Invocada como socorro dos cristãos em todas as batalhas da vida.",
        image: "/images/ns_auxiliadora_australia.png",
        initialPrayer: `<div class="prayer-block"><h4 class="section-title">Oração Inicial</h4><p>Ó Maria, Auxiliadora dos Cristãos, que fostes proclamada Padroeira da Austrália, nós nos voltamos para Vós com confiança. Vós que assististes a Igreja em seus momentos mais difíceis, socorrei-nos hoje em nossas necessidades. Que vossa proteção maternal nos guie e nos fortaleça na fé.</p><p class="mt-4 italic">Apresente agora suas intenções particulares...</p></div>`,
        finalPrayer: `<div class="prayer-block"><h4 class="section-title">Oração Final</h4><p>Ó Maria, Virgem poderosa, Tu és a grande e ilustre defensora da Igreja. Tu és o auxílio maravilhoso dos cristãos. Tu és terrível como um exército em ordem de batalha. Tu só destruíste todos os erros do mundo. Nas nossas angústias, em nossos combates, em nossas necessidades, defende-nos do inimigo e, na hora da morte, acolhe a nossa alma no paraíso. Amém.</p><p class="mt-4 font-semibold">Nossa Senhora Auxiliadora, rogai por nós e pela Oceania.</p></div>`,
        days: [
            { day: "Dia 1", title: "O Auxílio de Lepanto", content: `<div class="day-specific-content"><p>Recordamos a vitória de Lepanto, onde o Papa São Pio V invocou Vosso nome para proteger a cristandade. Mãe Auxiliadora, ajudai-nos a vencer as batalhas espirituais de cada dia.</p><p class="mt-4 font-semibold">Pai Nosso, Ave Maria e Glória.</p></div>` },
            { day: "Dia 2", title: "Padroeira da Austrália", content: `<div class="day-specific-content"><p>Primeira padroeira oficial da nação australiana, Vós sois o farol que guia os povos das terras do sul. Abençoai todas as famílias e comunidades da Austrália e da Oceania.</p><p class="mt-4 font-semibold">Pai Nosso, Ave Maria e Glória.</p></div>` },
            { day: "Dia 3", title: "Socorro nas Tribulações", content: `<div class="day-specific-content"><p>Mãe querida, que nunca desamparais quem Vos invoca. Nas horas de dor e incerteza, sede nosso consolo e nossa força. Que nunca nos falte a esperança.</p><p class="mt-4 font-semibold">Pai Nosso, Ave Maria e Glória.</p></div>` },
            { day: "Dia 4", title: "Refúgio da Igreja", content: `<div class="day-specific-content"><p>Como ajudastes a Igreja primitiva, protegei hoje o Santo Padre e todos os pastores. Que a Igreja cresça em santidade e ardor missionário na Oceania.</p><p class="mt-4 font-semibold">Pai Nosso, Ave Maria e Glória.</p></div>` },
            { day: "Dia 5", title: "Auxiliadora das Famílias", content: `<div class="day-specific-content"><p>Protegei nossos lares. Que em cada família reine a paz, o perdão e o amor de Cristo. Sede a guardiã de nossos filhos e jovens.</p><p class="mt-4 font-semibold">Pai Nosso, Ave Maria e Glória.</p></div>` },
            { day: "Dia 6", title: "Mãe da Esperança", content: `<div class="day-specific-content"><p>Num mundo marcado por divisões, ensinai-nos a semear a unidade. Que vossa materna intercessão nos alcance a paz que vem de Deus.</p><p class="mt-4 font-semibold">Pai Nosso, Ave Maria e Glória.</p></div>` },
            { day: "Dia 7", title: "Saúde dos Enfermos", content: `<div class="day-specific-content"><p>Intercedei pelos que sofrem no corpo e na alma. Que vossa mão auxiliadora traga alívio aos sofredores e coragem aos profissionais de saúde.</p><p class="mt-4 font-semibold">Pai Nosso, Ave Maria e Glória.</p></div>` },
            { day: "Dia 8", title: "Consoladora dos Aflitos", content: `<div class="day-specific-content"><p>Enxugai as lágrimas dos que choram e fortalecei os que estão desanimados. Que sintamos sempre Vossa presença carinhosa ao nosso lado.</p><p class="mt-4 font-semibold">Pai Nosso, Ave Maria e Glória.</p></div>` },
            { day: "Dia 9", title: "Rainha dos Apóstolos", content: `<div class="day-specific-content"><p>Ao final desta novena, renovamos nossa entrega a Vós. Guiai-nos até Jesus, para que sejamos verdadeiros discípulos e missionários do Seu Reino. Amém.</p><p class="mt-4 font-semibold">Pai Nosso, Ave Maria e Glória.</p></div>` }
        ]
    },

    nossa_senhora_assuncao_nz: {
        saintName: "Nossa Senhora da Assunção (Nova Zelândia)",
        novenaTitle: "Novena a Nossa Senhora da Assunção",
        description: "Padroeira da Nova Zelândia (Aotearoa). Celebramos a subida de Maria ao céu em corpo e alma.",
        image: "/images/ns_assuncao_nz.png",
        initialPrayer: `<div class="prayer-block"><h4 class="section-title">Oração Inicial</h4><p>Deus onipotente e eterno, que elevastes à glória do céu em corpo e alma a imaculada Virgem Maria, Mãe do vosso Filho, concedei-nos a graça de estarmos sempre atentos às coisas do alto para merecermos participar da sua glória.</p><p class="mt-4 italic">Colocamos sob vossa proteção a toda a nação da Nova Zelândia (Aotearoa)...</p></div>`,
        finalPrayer: `<div class="prayer-block"><h4 class="section-title">Oração Final</h4><p>Ó Maria, elevada aos céus, Tu és o sinal de esperança e de consolação para o povo de Deus em caminho. Intercedei por nós junto ao Vosso Filho, para que um dia possamos nos unir a Ti na pátria eterna. Amém.</p><p class="mt-4 font-semibold">Nossa Senhora da Assunção, rogai por nós.</p></div>`,
        days: [
            { day: "Dia 1", title: "A Escolha de Deus", content: `<div class="day-specific-content"><p>Contemplamos a humildade de Maria, que sendo pequena aos próprios olhos, foi elevada por Deus à maior das glórias. Que busquemos sempre a humildade de coração.</p><p class="mt-4 font-semibold">Pai Nosso, Ave Maria e Glória.</p></div>` },
            { day: "Dia 2", title: "Padroeira de Aotearoa", content: `<div class="day-specific-content"><p>Dedicamos este dia à Nova Zelândia. Que as luzes do Sul sejam abençoadas por vossa presença maternal e que a paz de Cristo reine em todas as ilhas do Pacífico.</p><p class="mt-4 font-semibold">Pai Nosso, Ave Maria e Glória.</p></div>` },
            { day: "Dia 3", title: "Plenitude da Graça", content: `<div class="day-specific-content"><p>Maria, cheia de graça, vossa assunção antecipa a nossa própria ressurreição. Fortalecei nossa fé na vida eterna e na vitória de Cristo sobre a morte.</p><p class="mt-4 font-semibold">Pai Nosso, Ave Maria e Glória.</p></div>` },
            { day: "Dia 4", title: "Mãe das Estrelas do Sul", content: `<div class="day-specific-content"><p>Vós que brilhais como a Estrela da manhã, guiai os navegantes e os povos da Oceania pelos caminhos da justiça e da verdade.</p><p class="mt-4 font-semibold">Pai Nosso, Ave Maria e Glória.</p></div>` },
            { day: "Dia 5", title: "Consolo dos Peregrinos", content: `<div class="day-specific-content"><p>Nesta terra de exílio, olhamos para o céu onde estais. Sede o nosso amparo nas dificuldades do caminho e a doçura de nossas vidas.</p><p class="mt-4 font-semibold">Pai Nosso, Ave Maria e Glória.</p></div>` },
            { day: "Dia 6", title: "União com Deus", content: `<div class="day-specific-content"><p>Maria, unida plenamente ao Seu Filho, ensinai-nos a buscar somente a vontade de Deus em todas as nossas ações e decisões.</p><p class="mt-4 font-semibold">Pai Nosso, Ave Maria e Glória.</p></div>` },
            { day: "Dia 7", title: "Rainha do Universo", content: `<div class="day-specific-content"><p>Exaltamos vossa realeza materna. Que vossa proteção se estenda sobre os mais pobres e esquecidos, trazendo-lhes a dignidade de filhos de Deus.</p><p class="mt-4 font-semibold">Pai Nosso, Ave Maria e Glória.</p></div>` },
            { day: "Dia 8", title: "Exemplo de Santidade", content: `<div class="day-specific-content"><p>Vossa subida ao céu nos convida à santidade. Ajudai-nos a purificar nossos corações de todo egoísmo para melhor servir aos irmãos.</p><p class="mt-4 font-semibold">Pai Nosso, Ave Maria e Glória.</p></div>` },
            { day: "Dia 9", title: "Alegria Eterna", content: `<div class="day-specific-content"><p>Concluímos esta novena com os olhos fixos na glória que nos espera. Que vossa intercessão nos acompanhe até o encontro final com Jesus. Amém.</p><p class="mt-4 font-semibold">Pai Nosso, Ave Maria e Glória.</p></div>` }
        ]
    },

    nossa_senhora_paz_oceania: {
        saintName: "Nossa Senhora Rainha da Paz (Oceania)",
        novenaTitle: "Novena a Nossa Senhora Rainha da Paz",
        description: "Invocada por toda a Oceania como a guardiã da harmonia e do entendimento entre os povos das ilhas.",
        image: "/images/ns_paz_oceania.png",
        initialPrayer: `<div class="prayer-block"><h4 class="section-title">Oração Inicial</h4><p>Senhor Jesus Cristo, Vós sois a nossa paz. Por intercessão de Vossa Mãe Santíssima, Rainha da Paz, pedimos que derrameis sobre a Oceania e sobre o mundo inteiro o dom da concórdia e do amor fraterno.</p><p class="mt-4 italic">Pedimos especialmente pela paz em nossos corações e em nossas casas...</p></div>`,
        finalPrayer: `<div class="prayer-block"><h4 class="section-title">Oração Final</h4><p>Ó Maria, Rainha da Paz, Tu que estiveste firme aos pés da Cruz, ensina-nos a manter a paz mesmo nas maiores tribulações. Que vossa benção proteja todos os povos da Oceania. Amém.</p><p class="mt-4 font-semibold">Rainha da Paz, rogai por nós.</p></div>`,
        days: [
            { day: "Dia 1", title: "O Dom da Paz", content: `<div class="day-specific-content"><p>A paz é um dom do Espírito Santo. Maria, que vivestes em total harmonia com Deus, alcançai-nos a serenidade interior que o mundo não pode dar.</p><p class="mt-4 font-semibold">Pai Nosso, Ave Maria e Glória.</p></div>` },
            { day: "Dia 2", title: "Paz na Oceania", content: `<div class="day-specific-content"><p>Rezamos pelas inúmeras ilhas do Pacífico. Que a diversidade de povos e culturas seja motivo de enriquecimento mútuo e nunca de conflito.</p><p class="mt-4 font-semibold">Pai Nosso, Ave Maria e Glória.</p></div>` },
            { day: "Dia 3", title: "Harmonia nas Famílias", content: `<div class="day-specific-content"><p>A paz começa no lar. Rainha da Paz, afastai de nossas famílias as discussões amargas e as divisões, fazendo crescer o perdão e o diálogo.</p><p class="mt-4 font-semibold">Pai Nosso, Ave Maria e Glória.</p></div>` },
            { day: "Dia 4", title: "Justiça e Paz", content: `<div class="day-specific-content"><p>Não há verdadeira paz sem justiça. Intercedei para que os governantes da Oceania trabalhem pelo bem comum e pela defesa dos mais fracos.</p><p class="mt-4 font-semibold">Pai Nosso, Ave Maria e Glória.</p></div>` },
            { day: "Dia 5", title: "Superação do Ódio", content: `<div class="day-specific-content"><p>Maria, transformai os sentimentos de rancor em amor. Que saibamos perdoar como Jesus perdoou na Cruz, construindo pontes de reconciliação.</p><p class="mt-4 font-semibold">Pai Nosso, Ave Maria e Glória.</p></div>` },
            { day: "Dia 6", title: "A Paz da Consciência", content: `<div class="day-specific-content"><p>Alcançai-nos a graça de viver em paz com nossa própria consciência, buscando sempre a retidão e a verdade em nossas palavras e ações.</p><p class="mt-4 font-semibold">Pai Nosso, Ave Maria e Glória.</p></div>` },
            { day: "Dia 7", title: "Unidade dos Cristãos", content: `<div class="day-specific-content"><p>Rezamos pela unidade de todos os que acreditam em Cristo na Oceania. Que o testemunho de amor seja o maior vínculo entre nós.</p><p class="mt-4 font-semibold">Pai Nosso, Ave Maria e Glória.</p></div>` },
            { day: "Dia 8", title: "Preservação da Natureza", content: `<div class="day-specific-content"><p>Nesta região de mares e águas, rezamos pela proteção da criação. Que vivamos em paz com o meio ambiente, cuidando do dom da vida.</p><p class="mt-4 font-semibold">Pai Nosso, Ave Maria e Glória.</p></div>` },
            { day: "Dia 9", title: "Triunfo do Amor", content: `<div class="day-specific-content"><p>Que o Vosso Coração Imaculado triunfe trazendo a paz definitiva. Entrega-nos ao Teu Filho como instrumentos de Sua paz no mundo. Amém.</p><p class="mt-4 font-semibold">Pai Nosso, Ave Maria e Glória.</p></div>` }
        ]
    },

    nossa_senhora_estrela_mar_pacifico: {
        saintName: "Nossa Senhora Estrela do Mar (Pacífico)",
        novenaTitle: "Novena a Nossa Senhora Estrela do Mar",
        description: "Invocada pelos navegantes e povos das ilhas do Pacífico como a guia segura nas tempestades da vida.",
        image: "/images/ns_estrela_do_mar_pacifico.png",
        initialPrayer: `<div class="prayer-block"><h4 class="section-title">Oração Inicial</h4><p>Salve, Estrela do Mar! Mãe de Deus e sempre Virgem, porta feliz do céu. Vós que sois a guia segura nos oceanos, sede também a nossa guia no mar agitado desta existência.</p><p class="mt-4 italic">Volvei vosso olhar sobre as ilhas do Pacífico e sobre todos que nelas habitam...</p></div>`,
        finalPrayer: `<div class="prayer-block"><h4 class="section-title">Oração Final</h4><p>Ó Maria, Estrela do Mar, não permitais que naufraguemos no pecado. Conduzi-nos ao porto seguro da salvação, que é Vosso Filho Jesus Cristo. Amém.</p><p class="mt-4 font-semibold">Estrela do Mar, guiai-nos nas trevas e na luz.</p></div>`,
        days: [
            { day: "Dia 1", title: "Estrela Guia", content: `<div class="day-specific-content"><p>Como a estrela guia os navegantes na noite escura, Maria nos guia até Jesus. Que nunca percamos de vista a Vossa luz protetora.</p><p class="mt-4 font-semibold">Pai Nosso, Ave Maria e Glória.</p></div>` },
            { day: "Dia 2", title: "Proteção nos Mares", content: `<div class="day-specific-content"><p>Rezamos por todos os que vivem do mar no Pacífico: pescadores e marinheiros. Que vossa mão poderosa os livre de todos os perigos das águas.</p><p class="mt-4 font-semibold">Pai Nosso, Ave Maria e Glória.</p></div>` },
            { day: "Dia 3", title: "Refúgio nas Tempestades", content: `<div class="day-specific-content"><p>Quando as ondas das provações parecerem nos submergir, chamamos por Vós. Estendei Vosso manto e acalmai o mar agitado de nossos corações.</p><p class="mt-4 font-semibold">Pai Nosso, Ave Maria e Glória.</p></div>` },
            { day: "Dia 4", title: "Misericórdia Infinita", content: `<div class="day-specific-content"><p>Maria, Estrela do Mar, vossa doçura é como a brisa suave. Alcançai-nos a misericórdia de Deus para nossas faltas e fraquezas.</p><p class="mt-4 font-semibold">Pai Nosso, Ave Maria e Glória.</p></div>` },
            { day: "Dia 5", title: "Porto de Salvação", content: `<div class="day-specific-content"><p>A vida é uma travessia rumo à eternidade. Sede a bússola que aponta para o Reino dos Céus, nosso porto definitivo.</p><p class="mt-4 font-semibold">Pai Nosso, Ave Maria e Glória.</p></div>` },
            { day: "Dia 6", title: "Mãe dos Navegantes", content: `<div class="day-specific-content"><p>Invocamos vossa proteção sobre todas as viagens, físicas e espirituais. Que em cada jornada sintamos vossa companhia maternal.</p><p class="mt-4 font-semibold">Pai Nosso, Ave Maria e Glória.</p></div>` },
            { day: "Dia 7", title: "Esperança do Pacífico", content: `<div class="day-specific-content"><p>Que os povos das ilhas vejam em Vós a esperança de um futuro melhor, pautado na solidariedade e no amor cristão.</p><p class="mt-4 font-semibold">Pai Nosso, Ave Maria e Glória.</p></div>` },
            { day: "Dia 8", title: "Luz na Escuridão", content: `<div class="day-specific-content"><p>Nascida do mar de nossa humanidade, Vós brilhais com a luz de Deus. Afastai as trevas da dúvida e do desespero de nossas mentes.</p><p class="mt-4 font-semibold">Pai Nosso, Ave Maria e Glória.</p></div>` },
            { day: "Dia 9", title: "Rumo ao Pai", content: `<div class="day-specific-content"><p>Ao fim desta novena, pedimos que nos ajudeis a navegar com coragem e fé, até que alcancemos a visão beatífica com todos os santos. Amém.</p><p class="mt-4 font-semibold">Pai Nosso, Ave Maria e Glória.</p></div>` }
        ]
    }
};
