"use client";

import React, { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, MessageCircle, Copy, Check, Calendar as CalendarIcon, Info, Bell } from "lucide-react";
import Link from "next/link";
import Footer from "@/components/footer";
import { format, addDays, startOfDay, parseISO } from "date-fns";
import { ptBR } from "date-fns/locale";
import { getConsecrationPresets } from "@/lib/utils/sao-jose-dates";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

export default function CompartilharSaoJose() {
    const { toast } = useToast();
    const [selectedGoalId, setSelectedGoalId] = useState<string>("santos_esposos");
    const [customStartDate, setCustomStartDate] = useState<Date>(new Date());
    const [tempDate, setTempDate] = useState<string>(format(new Date(), "yyyy-MM-dd"));
    const [copiedId, setCopiedId] = useState<string | null>(null);
    const [historyCopied, setHistoryCopied] = useState<string[]>([]);
    const [year] = useState(new Date().getFullYear());
    const [showResetConfirm, setShowResetConfirm] = useState(false);
    const [pendingGoalId, setPendingGoalId] = useState<string | null>(null);

    const presets = getConsecrationPresets(year);
    
    const selectedPreset = selectedGoalId === "custom" 
        ? { id: "custom", name: "Escolha Livre (Personalizada)", feastDate: addDays(customStartDate, 32), startDate: customStartDate }
        : (presets.find(p => p.id === selectedGoalId) || presets[0]);

    const today = startOfDay(new Date());
    const diffInDays = Math.floor((today.getTime() - startOfDay(selectedPreset.startDate).getTime()) / (1000 * 60 * 60 * 24));
    const currentDay = diffInDays >= 0 && diffInDays < 33 ? diffInDays + 1 : null;

    // Carregar histórico do localStorage
    useEffect(() => {
        const saved = localStorage.getItem("sao-jose-share-history");
        if (saved) {
            try {
                const history = JSON.parse(saved);
                setHistoryCopied(history);
                // Se já copiou o dia 33, pergunta se quer resetar
                if (history.includes("dia-33")) {
                    setShowResetConfirm(true);
                }
            } catch (e) {
                console.error("Erro ao carregar histórico", e);
            }
        }
    }, []);

    const handleReset = () => {
        setHistoryCopied([]);
        localStorage.removeItem("sao-jose-share-history");
        setShowResetConfirm(false);
        if (pendingGoalId) {
            setSelectedGoalId(pendingGoalId);
            setPendingGoalId(null);
        }
        toast({
            title: "Histórico resetado",
            description: "Você pode começar sua nova caminhada!",
        });
    };

    const onDateSelect = (id: string) => {
        if (historyCopied.length > 0) {
            setPendingGoalId(id);
            setShowResetConfirm(true);
        } else {
            setSelectedGoalId(id);
        }
    };

    const diasConsagracao = [
        { dia: 1, titulo: "Por que uma consagração a São José?", paginas: "27-28", video: "https://youtu.be/SlYCkv2V3GM?si=Geizwd3WCbjrJyMc" },
        { dia: 2, titulo: "Ladainha de São José", paginas: "29-31", video: "https://youtu.be/oFKZPoaoFf0?si=7iqLnBzhCKZO-gLT" },
        { dia: 3, titulo: "Deus Pai do céu, tende piedade de nós", paginas: "33-34", video: "https://youtu.be/PYlBIwrBPvo?si=Ct6GWi27afwBcRzH" },
        { dia: 4, titulo: "Deus Filho Redentor do mundo", paginas: "35-37", video: "https://youtu.be/-_cPKDAnGk8?si=LwLoGYJFxjwPPf3t" },
        { dia: 5, titulo: "Deus Espírito Santo", paginas: "39-41", video: "https://youtu.be/jzcnGDsUqC0?si=RJFvdIbqoZHWhYhc" },
        { dia: 6, titulo: "Santíssima Trindade", paginas: "43-44", video: "https://youtu.be/7iylkxKggKs?si=5vFAc1hgTHEFzm2d" },
        { dia: 7, titulo: "Santa Maria, rogai por nós", paginas: "45-47", video: "https://youtu.be/jKPYxNDK-as?si=fUrZChUsIBZX8Mhv" },
        { dia: 8, titulo: "São José, rogai por nós", paginas: "49-50", video: "https://youtu.be/soIQ7iwbYe0?si=9R49tKT6xMLhyiA1" },
        { dia: 9, titulo: "Ilustre Filho de Davi", paginas: "51-53", video: "https://youtu.be/v9vyQxi2f0k?si=93ypI61cV0On68gJ" },
        { dia: 10, titulo: "Luz dos Patriarcas", paginas: "55-57", video: "https://youtu.be/rxDkkuJzGZw?si=3sgCJfFxYghB6a6n" },
        { dia: 11, titulo: "Esposo da Mãe de Deus", paginas: "59-60", video: "https://youtu.be/EgJ_bAdaOKk?si=glcT5UiKtqm6ypdR" },
        { dia: 12, titulo: "Casto guarda da Virgem", paginas: "61-62", video: "https://youtu.be/GoFg0QteH08?si=NHijOaJcGg52Crqq" },
        { dia: 13, titulo: "Pai adotivo do Filho de Deus", paginas: "63-65", video: "https://youtu.be/6SEBJYV81F0?si=Jv1VtD9RH8E0CPbv" },
        { dia: 14, titulo: "Zeloso defensor de Cristo", paginas: "67-69", video: "https://youtu.be/yjD-6vHcFMg?si=CKYMI0UKIj9GIOjr" },
        { dia: 15, titulo: "Chefe da Sagrada Família", paginas: "71-72", video: "https://youtu.be/RvQZMCgXV50?si=b1Zfojz4yxRLJqVH" },
        { dia: 16, titulo: "José Justíssimo", paginas: "73-75", video: "https://youtu.be/Up3Epb2B3ck?si=Gu2UNn8VLIUzg3i0" },
        { dia: 17, titulo: "José Castíssimo", paginas: "77-78", video: "https://youtu.be/SpaOD7TDXTo?si=Q9wojP_SgqPBHb-p" },
        { dia: 18, titulo: "José Prudentíssimo", paginas: "79-81", video: "https://youtu.be/4bRzlotHG8s?si=0ix69kcjiwNRRJ-x" },
        { dia: 19, titulo: "José Fortíssimo", paginas: "83-85", video: "https://youtu.be/gVS_IWAiFOU?si=efvUu7IDogpBmQk6" },
        { dia: 20, titulo: "José Obedientíssimo", paginas: "87-88", video: "https://youtu.be/Uu1YHtagM54?si=6SCIdYyguN3EWGKt" },
        { dia: 21, titulo: "José Fidelíssimo", paginas: "91-92", video: "https://youtu.be/F9UnjYhXBUw?si=WKA8fYMyH60cJ-oz" },
        { dia: 22, titulo: "Espelho de Paciência", paginas: "93-95", video: "https://youtu.be/FLrGFJoTDow?si=ivULePpIUx4JJcha" },
        { dia: 23, titulo: "Amante da Pobreza", paginas: "97-99", video: "https://youtu.be/YKVijyMWY7s?si=F1XJ52U1qORfFoEv" },
        { dia: 24, titulo: "Modelo dos trabalhadores", paginas: "101-103", video: "https://youtu.be/fGZ8_mPyPUQ?si=V9_Wh23Gc837RJot" },
        { dia: 25, titulo: "Honra da vida de família", paginas: "105-106", video: "https://youtu.be/2msN0ElyMic?si=vluCiKZ1Ax3O20q4" },
        { dia: 26, titulo: "Guarda das Virgens", paginas: "107-109", video: "https://youtu.be/tm_WYSJWGgI?si=sJ33PFBuGQL11vtP" },
        { dia: 27, titulo: "Sustentáculo das Famílias", paginas: "111-113", video: "https://youtu.be/0pL7ooT5YD4?si=h3BjzMjqan26L2k8" },
        { dia: 28, titulo: "Alívio dos miseráveis", paginas: "115-117", video: "https://youtu.be/ekEPW4k5vHc?si=bGCldBp7gzrIw-k3" },
        { dia: 29, titulo: "Esperança dos Doentes", paginas: "119-120", video: "https://youtu.be/PQLrxEQzK98?si=NSbSDNOqKXteUYAq" },
        { dia: 30, titulo: "Patrono dos moribundos", paginas: "121-123", video: "https://youtu.be/g-sUpYeTi-g?si=Pv8Li_Wl1CYSY7wD" },
        { dia: 31, titulo: "Terror dos demônios", paginas: "125-127", video: "https://youtu.be/W9960fzskng?si=13psTBULuIL51GBB" },
        { dia: 32, titulo: "Protetor da Santa Igreja", paginas: "129-131", video: "https://youtu.be/dPE8-alpwFE?si=xlEdlC2KL6cwgb4k" },
        { dia: 33, titulo: "Dia da Consagração", paginas: "133-135", video: "https://youtu.be/bWSkt73pwqo" },
    ];

    const novenaTradicional = [
        { dia: 1, titulo: "São José, Pai Nutrício de Jesus", oracao: "Amabilíssimo São José, que tivestes a honra de alimentar, educar e abraçar o Messias, a quem tantos profetas e reis desejaram ver e não viram, obtende-me, com o perdão das minhas culpas, a graça da oração humilde e confiante que tudo alcança de Deus. Acolhei com bondade paternal os pedidos que vos faço nesta novena e apresentai-os a Jesus, que se dignou obedecer-vos na terra. Amém.", v: "Rogai por nós, São José, pai nutrício de Jesus." },
        { dia: 2, titulo: "São José, Esposo da Virgem Maria", oracao: "São José, castíssimo Esposo da Mãe de Deus e guarda fiel da sua virgindade, obtende-me, por Maria, a pureza do corpo e da alma e a vitória em todas as tentações e dificuldades. Recomendo-vos também os esposos cristãos, para que, unidos com sincero amor e fortalecidos pela graça, amparem-se mutuamente nos sofrimentos e tribulações da vida. Amém.", v: "Rogai por nós, São José, esposo da Mãe de Deus." },
        { dia: 3, titulo: "São José, Chefe da Sagrada Família", oracao: "Glorioso São José, que gozastes durante tantos anos da presença e filial afeição de Jesus, a quem tivestes a dita de alimentar e vestir, juntamente com vossa Santíssima Esposa, eu vos suplico me alcanceis o dom inefável de sempre viver em união com Deus pela graça santificante. Obtende também para os pais cristãos a graça do fiel cumprimento de seus graves deveres de educadores e, aos filhos, o respeito e a obediência, segundo o exemplo do Menino Jesus. Amém.", v: "Rogai por nós, São José, chefe da Sagrada Família." },
        { dia: 4, titulo: "São José, Exemplo de Fidelidade", oracao: "Fidelíssimo São José, que nos destes tão belo exemplo no fiel cumprimento de vossos deveres de protetor da Santíssima Virgem e de pai nutrício do Redentor, rogo-vos me obtenhais a graça de imitar o vosso exemplo na fidelidade a todos os deveres do meu estado de vida. Ajudai-me a ser fiel nas coisas pequenas, para o ser também nas grandes. Alcançai essa mesma graça para todos os que me são caros nesta vida, a fim de chegarmos a gozar no céu o prêmio prometido aos que forem fiéis até a morte. Amém.", v: "Rogai por nós, São José, exemplo de fidelidade." },
        { dia: 5, titulo: "São José, Espelho de Paciência", oracao: "Bondoso São José, que suportastes com heróica paciência as provações e adversadversidades na viagem a Belém, na fuga para o Egito e durante a vida oculta em Nazaré e me destes o exemplo de admirável conformidade com a vontade de Deus, obtende-me a virtude da paciência nas dificuldades de cada dia. Alcançai também invencível paciência a todos os que suportam pesadas cruzes, a fim de que se unam sempre mais a Jesus, divino modelo de mansidão e paciência. Amém.", v: "Rogai por nós, São José, espelho de paciência." },
        { dia: 6, titulo: "São José, Modelo dos Operários", oracao: "Humilde São José, que vivendo em pobreza dignificastes a vossa profissão pelo trabalho constante e vos sentistes feliz em servir a Jesus e a Maria com o fruto de vossos suores, alcançai-me amor ao trabalho, que me foi imposto como dever de estado, procurando cumprir nisto sempre a vontade de Deus. Protegei os lares dos trabalhadores do Brasil contra as influências nefastas dos inimigos de Cristo e da Santa Igreja. Obtende-lhes a graça de santificarem o seu trabalho, pela reta intenção, em tudo conformados com os desígnios da Divina Providência. Amém.", v: "Rogai por nós, São José, modelo dos operários." },
        { dia: 7, titulo: "São José, Protetor da Santa Igreja", oracao: "Glorioso Patriarca São José, Protetor e Padroeiro da Igreja Universal, obtende-me a graça de amar a Igreja como Mãe e de a honrar como verdadeiro discípulo de Cristo. Rogo-vos que veleis sobre o seu Corpo Místico, como outrora velastes sobre Jesus e Maria. Protegei o Santo Padre e os Bispos, os Sacerdotes e os Religiosos. Alcançai-lhes santidade de vida e eficácia no apostolado. Guardai a inocência da infância, a castidade da juventude, a honestidade do lar, a ordem e a paz da sociedade. Amém.", v: "Rogai por nós, São José, protetor da Santa Igreja." },
        { dia: 8, titulo: "São José, Consolo dos Enfermos", oracao: "Compassivo São José, esperança dos doentes e necessitados, valei-me em todas as enfermidades e tribulações, alcançando-me plena conformidade com os admiráveis desígnios de Deus. Obtende-me também para mim e para todos pelos quais rezo nesta novena, a cura das enfermidades espirituais, que são as paixões desordenadas, fraquezas, faltas e pecados, e protegei-nos contra as tentações do inimigo da nossa salvação. Amém.", v: "Rogai por nós, São José, consolo dos enfermos." },
        { dia: 9, titulo: "São José, Padroeiro dos Moribundos", oracao: "Ditoso São José, que morrendo nos braços de Jesus e Maria, partistes deste mundo ornado de virtudes e enriquecido de méritos, assisti-me na hora suprema e decisiva da minha vida contra os ataques do poder infernal. Obtende-me a graça de morrer confortado com os santos Sacramentos, necessários para a minha salvação. Tende compaixão de todos os agonizantes, alcançando-lhes a graça da salvação por intermédio de Maria, vossa Santíssima Esposa. Amém.", v: "Rogai por nós, São José, padroeiro dos moribundos." },
    ];

    const oracaoFinalNovenaInner = `*Oração Final (Para todos os dias)*

Oremos. Ó Deus, que por uma inefável Providência Vos dignastes escolher o bem-aventurado São José para Esposo de vossa Mãe Santíssima, concedei-nos que aquele mesmo que na terra veneramos como protetor, mereçamos tê-lo no céu por nosso intercessor. Vós que viveis e reinais por todos os séculos dos séculos. Amém.`;

    const lembretesText = `📢 *Lembretes Importantes*

✅ Nossa consagração é amanhã, escolha uma Paróquia Excepcionalmente dedicada a São José para participar da missa esse dia;

✅ Vejam a possibilidade de fazerem a Confissão antes da consagração;

✅ A respeito da vestimenta para o dia da Consagração e Renovação, sugerimos:

*HOMENS:* calça preta e camisa branca;
*MULHERES:* calça preta ou saia preta (longa ou abaixo dos joelhos) e blusa branca (não pode ser transparente, de alça, barriga de fora);

✅ Levaremos impressa a fórmula de consagração 📄 Pedimos que cada um leve a sua caneta ✍️ para assinar a fórmula.

✅ Para as pessoas de fora de Brasília e aquelas que não puderem estar conosco neste momento, nos procurem no privado no decorrer da última semana de preparação, para que possamos enviar o Ato de consagração.

✅ Nesta consagração, não é necessário usar um sinal externo. O propósito da consagração é sermos uma aparição de São José no mundo!

https://youtu.be/bWSkt73pwqo

Download do ato: https://drive.google.com/file/d/1vj1OWZ6I1MvoBaTjfdk922LnuTu57Ruj/view?usp=sharing

_*Projeto Corações Sagrados ❤️‍🔥*_`;

    const introText = `Bom dia meus irmãos!
Começamos hoje nossa consagração ✝️, que felicidade pelo sim de vocês. Essa preparação, que é baseada na consagração a Nossa Senhora, é uma devoção recente desenvolvida pelo Padre Donald Calloway, que visa apontar problemas que nossa sociedade vive e como superá-los com o auxílio de São José.

Se possível, leia a introdução do livro falando sobre a história do Padre e como se deu a formulação desse ato.

Hoje conheceremos a Ladainha

Esta litania em honra de São José foi aprovada para uso público pelo Papa São Pio X, em 1909. Sua composição tem como base a Ladainha de Nossa Senhora. Trata-se de invocações a São José, descrevendo suas virtudes e o papel que ele desempenhou no mistério da Redenção, sendo pai adotivo de Jesus.

*Quem recita devotamente esta oração lucra indulgências parciais.*

⚜️🕯️⚜️🕯️⚜️🕯️⚜️

*Ladainha de São José*

Senhor, _*tende piedade de nós.*_
Jesus Cristo, _*tende piedade de nós.*_ 
Senhor, _*tende piedade de nós.*_    
Jesus Cristo, _*ouvi-nos.*_  
Jesus Cristo, _*atendei-nos.*_    
Deus, Pai dos Céus, _*tende piedade de nós*_ 
Deus Filho, Redentor do mundo, _*tende piedade de nós*_
Deus Espírito Santo, _*tende piedade de nós*_
Santíssima Trindade, que sois um só Deus, _*tende piedade de nós*_   
Santa Maria, _*rogai por nós*_
São José, _*rogai por nós*_
Ilustre filho de Davi, _*rogai por nós*_
Luz dos Patriarcas, _*rogai por nós*_ 
Esposo da Mãe de Deus, _*rogai por nós*_
Casto guarda da Virgem, _*rogai por nós*_
Sustentador do Filho de Deus, _*rogai por nós*_
Zeloso defensor de Jesus Cristo, _*rogai por nós*_
Chefe da Sagrada Família, _*rogai por nós*_
José justíssimo, _*rogai por nós*_
José castíssimo, _*rogai por nós*_
José prudentíssimo, _*rogai por nós*_
José fortíssimo, _*rogai por nós*_
José obedientíssimo, _*rogai por nós*_
José fidelíssimo, _*rogai por nós*_
Espelho de paciência, _*rogai por nós*_
Amante da pobreza, _*rogai por nós*_
Modelo dos operários, _*rogai por nós*_
Honra da vida de família, _*rogai por nós*_
Guarda das virgens, _*rogai por nós*_
Sustentáculo das famílias, _*rogai por nós*_
Alívio dos miseráveis, _*rogai por nós*_
Esperança dos doentes, _*rogai por nós*_
Patrono dos moribundos, _*rogai por nós*_
Terror dos demônios, _*rogai por nós*_
Protetor da Santa Igreja, _*rogai por nós*_ 

Cordeiro de Deus, que tirais o pecado do mundo,  
R. _*perdoai-nos, Senhor.*_    

Cordeiro de Deus, que tirais o pecado do mundo R. _*tende piedade de nós.*_    

V. Ele constituiu-o senhor da sua casa.  
R. _*E fê-lo príncipe de todos os seus bens.*_   

*Oremos*: Ó Deus, que por inefável providência Vos dignastes escolher a São José por esposo de vossa Mãe Santíssima; concedei-nos, Vo-lo pedimos, que mereçamos ter por intercessor no Céu, aquele que veneramos na Terra como protetor. Vós que viveis e reinais por todos os séculos dos séculos. Amém.

⚜️🕯️⚜️🕯️⚜️🕯️⚜️
_*Projeto Corações Sagrados ❤️‍🔥*_`;

    const getWhatsAppText = (dia: number, titulo: string, paginas: string, video?: string) => {
        if (dia === 2) {
            return `Bom dia meus irmãos, seguimos com o nosso 2° dia, onde no livro conheceremos um pouco mais sobre a ladainha

*2° Dia, Ladainha de São José*

⚜️ *Faça a oração do Vinde Espírito Santo*
⚜️ *Leitura da página 29-31*
⚜️ *Ladainha de São José, na mensagem fixada*

Nesse dia rezamos também uma oração chamada _Memorare_ a São José, essa que por sua vez é baseada em uma oração que São Bernardo fez a Virgem Maria no século 12, com o tempo foi adaptada para São José

⚜️ *_Memorare_*

Lembrai-vos, ó castíssimo Esposo da Virgem Maria, que nunca se ouviu dizer que algum daqueles que têm recorrido à vossa proteção, implorado a vossa assistência e reclamado vosso socorro, fosse por vós desamparado.

Animado, pois, com igual confiança, a vós recorro, ó pai espiritual, e imploro a vossa proteção. Não rejeiteis as minhas súplicas, ó pai adotivo do Redentor, mas dignai-vos de as ouvir propiciamente e de me alcançar o que vos rogo.

Amém.

${video || ""}

_*Projeto Corações Sagrados ❤️‍🔥*_`;
        }

        if (dia === 33) {
            return `*Dia da Consagração (33.º Dia)*

Você conseguiu! Hoje será a sua consagração total a São José. A Santíssima Trindade quer que São José seja mais conhecido e amado. Você foi convidado a imitar as virtudes e a santidade do coração puro de São José. Com ele ao seu lado, você terá um crescimento em virtude e santidade. Com o manto paternal de São José a cobri-lo, estará protegido de males espirituais.

Ame, honre e confie em São José pelo resto de sua vida. Ele será seu guardião, sua força e a certeza de que você não se perderá. Se você se cansar ou ficar ansioso, vá até São José. Nunca se esqueça do que aprendeu nesses dias de preparação. Renove sua consagração frequentemente.

⚜️ *Reze o Ato de Consagração a São José (p. 315)*

${video || ""}

_*Projeto Corações Sagrados ❤️‍🔥*_`;
        }

        let text = `*Consagração a São José*\n`;
        text += `*Dia ${dia} - ${titulo}*\n\n`;
        text += `⚜️ *Faça a oração do Vinde Espírito Santo*\n`;
        text += `⚜️ *Leitura das páginas ${paginas}*\n`;
        text += `⚜️ *Ladainha de São José*\n\n`;
        
        // Integrar Novena Tradicional (Dias 24 a 32)
        if (dia >= 24 && dia <= 32) {
            const novenaIndex = dia - 24;
            const item = novenaTradicional[novenaIndex];
            text += `*---------------------------------*\n`;
            text += `*Novena Tradicional - ${item.dia}º Dia*\n`;
            text += `_${item.titulo}_\n\n`;
            text += `${item.oracao}\n\n`;
            text += `V/. ${item.v}\n`;
            text += `R/. _*Para que sejamos dignos das promessas de Cristo.*_\n\n`;
            text += `${oracaoFinalNovenaInner}\n`;
            text += `*---------------------------------*\n\n`;
        }

        if (video) text += `${video}\n\n`;

        text += `_*Projeto Corações Sagrados ❤️‍🔥*_`;
        return text;
    };

    const handleCopy = (id: string, text: string, label: string) => {
        const performCopy = async () => {
            try {
                if (navigator.clipboard && window.isSecureContext) {
                    await navigator.clipboard.writeText(text);
                } else {
                    // Fallback para contextos não seguros ou navegadores antigos
                    const textArea = document.createElement("textarea");
                    textArea.value = text;
                    textArea.style.position = "fixed";
                    textArea.style.left = "-9999px";
                    textArea.style.top = "0";
                    document.body.appendChild(textArea);
                    textArea.focus();
                    textArea.select();
                    document.execCommand('copy');
                    textArea.remove();
                }

                setCopiedId(id);
                
                // Atualizar histórico
                const newHistory = Array.from(new Set([...historyCopied, id]));
                setHistoryCopied(newHistory);
                localStorage.setItem("sao-jose-share-history", JSON.stringify(newHistory));

                toast({
                    title: "Copiado!",
                    description: `${label} copiado para o WhatsApp.`,
                });
                
                setTimeout(() => setCopiedId(null), 2000);
            } catch (err) {
                console.error("Erro ao copiar", err);
                toast({
                    variant: "destructive",
                    title: "Erro ao copiar",
                    description: "Não foi possível copiar o texto automaticamente.",
                });
            }
        };

        performCopy();
    };

    const handleConfirmCustomDate = () => {
        const parsed = parseISO(tempDate);
        if (!isNaN(parsed.getTime())) {
            setCustomStartDate(parsed);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50 dark:from-slate-950 dark:via-slate-900 dark:to-green-950">
            <style jsx global>{`
                @keyframes pulse-border {
                    0% { border-color: rgb(34 197 94 / 0.5); box-shadow: 0 0 0 0px rgb(34 197 94 / 0.2); }
                    50% { border-color: rgb(34 197 94 / 1); box-shadow: 0 0 0 8px rgb(34 197 94 / 0); }
                    100% { border-color: rgb(34 197 94 / 0.5); box-shadow: 0 0 0 0px rgb(34 197 94 / 0); }
                }
                .animate-pulse-green {
                    animation: pulse-border 2s infinite;
                }
            `}</style>
            <header className="bg-gradient-to-r from-green-800 via-green-700 to-green-800 text-white py-12 px-4 shadow-2xl relative">
                <div className="container mx-auto max-w-7xl">
                    <Link href="/sao-jose" className="inline-flex items-center text-green-100 hover:text-white mb-6 transition-colors">
                        <ChevronLeft className="mr-2 h-5 w-5" />
                        Voltar ao Espaço São José
                    </Link>
                    <div className="text-center">
                        <h1 className="text-4xl font-bold mb-4 flex items-center justify-center gap-3">
                            <MessageCircle className="h-10 w-10" />
                            Compartilhar São José
                        </h1>
                        <p className="text-green-100">Textos formatados para o seu grupo de WhatsApp</p>
                    </div>
                </div>
            </header>

            <main className="container mx-auto max-w-4xl px-4 py-12 space-y-8">
                {/* Seletor de Data (Sincronização) */}
                <Card className="border-green-300 shadow-xl overflow-hidden mb-12">
                    <div className="bg-green-700 p-4 text-white">
                        <h3 className="text-xl font-bold flex items-center gap-2">
                            <CalendarIcon className="h-5 w-5" />
                            Sincronize sua Consagração
                        </h3>
                    </div>
                    <CardContent className="pt-6">
                        <div className="grid md:grid-cols-2 gap-6 items-end">
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-green-800 dark:text-green-300">
                                    Data da sua Consagração:
                                </label>
                                <Select value={selectedGoalId} onValueChange={onDateSelect}>
                                    <SelectTrigger className="w-full border-2 border-green-100 h-12">
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {presets.map((p) => (
                                            <SelectItem key={p.id} value={p.id}>
                                                {p.name}
                                            </SelectItem>
                                        ))}
                                        <SelectItem value="custom">Escolha Livre (Personalizada)</SelectItem>
                                    </SelectContent>
                                </Select>
                                {selectedGoalId === "custom" && (
                                    <div className="mt-2 flex gap-2">
                                        <Input type="date" value={tempDate} onChange={(e) => setTempDate(e.target.value)} className="h-10" />
                                        <Button onClick={handleConfirmCustomDate} className="bg-green-700">Confirmar</Button>
                                    </div>
                                )}
                            </div>
                            <div className="bg-green-50 dark:bg-green-950/40 rounded-xl p-4 border-2 border-green-100 text-center">
                                {currentDay ? (
                                    <p className="text-lg font-bold text-green-900 dark:text-green-100">
                                        Hoje: <span className="text-green-600 underline">Dia {currentDay}</span>
                                    </p>
                                ) : (
                                    <p className="text-slate-500 italic">Fora do período de consagração</p>
                                )}
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Confirmação de Reset */}
                {showResetConfirm && (
                    <Card className="border-2 border-amber-500 bg-amber-50 shadow-lg animate-in fade-in slide-in-from-top-4 duration-500">
                        <CardContent className="pt-6">
                            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                                <div className="flex items-center gap-3">
                                    <div className="bg-amber-100 p-2 rounded-full">
                                        <Info className="h-6 w-6 text-amber-600" />
                                    </div>
                                    <div>
                                        <p className="font-bold text-amber-900">Deseja começar do início?</p>
                                        <p className="text-sm text-amber-700">Detectamos que você trocou a data ou concluiu a jornada anterior. Quer limpar o histórico de marcações?</p>
                                    </div>
                                </div>
                                <div className="flex gap-2">
                                    <Button variant="outline" className="border-amber-300 text-amber-700" onClick={() => setShowResetConfirm(false)}>Não, manter</Button>
                                    <Button className="bg-amber-600 hover:bg-amber-700 text-white" onClick={handleReset}>Sim, começar do início</Button>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                )}

                <div className="space-y-4">
                    {diasConsagracao.map((dia) => {
                        const isToday = currentDay === dia.dia;
                        const isCopied = historyCopied.includes(`dia-${dia.dia}`);
                        const whatsAppText = getWhatsAppText(dia.dia, dia.titulo, dia.paginas, dia.video);

                        return (
                            <React.Fragment key={dia.dia}>
                                <Card className={cn(
                                    "border-2 transition-all duration-500 overflow-hidden",
                                    isToday ? "border-green-500 animate-pulse-green shadow-green-200/50 shadow-xl" : "border-slate-200",
                                    isCopied ? "bg-green-50/50" : "bg-white"
                                )}>
                                    <div className={cn(
                                        "absolute inset-0 bg-green-500/10 pointer-events-none transition-opacity duration-1000",
                                        copiedId === `dia-${dia.dia}` ? "opacity-100" : "opacity-0"
                                    )}></div>
                                    <CardHeader className="py-3 px-4 relative z-10">
                                        <div className="flex justify-between items-center">
                                            <div className="flex flex-col">
                                                <span className={cn(
                                                    "font-bold transition-colors duration-500",
                                                    isToday ? "text-green-700" : (isCopied ? "text-green-600" : "text-slate-700")
                                                )}>
                                                    Dia {dia.dia}: {dia.titulo}
                                                </span>
                                                {isCopied && <span className="text-[10px] font-bold text-green-600 uppercase tracking-widest">Copiado anteriormente</span>}
                                            </div>
                                            <Button 
                                                size="sm"
                                                variant={isToday ? "default" : (isCopied ? "outline" : "ghost")}
                                                className={cn(
                                                    "transition-all duration-300",
                                                    isToday ? "bg-green-600 shadow-lg shadow-green-200" : (isCopied ? "border-green-200 text-green-600" : "")
                                                )}
                                                onClick={() => handleCopy(`dia-${dia.dia}`, whatsAppText, `Dia ${dia.dia}`)}
                                            >
                                                {isCopied ? <Check className="h-4 w-4 mr-2" /> : <Copy className="h-4 w-4 mr-2" />}
                                                {isCopied ? "Copiado" : "Copiar"}
                                            </Button>
                                        </div>
                                    </CardHeader>
                                </Card>

                                {/* Inserir Ladainha depois do Dia 1 */}
                                {dia.dia === 1 && (
                                    <Card className={cn(
                                        "border-2 transition-all duration-500 mx-4",
                                        historyCopied.includes("intro") ? "border-amber-200 bg-amber-50/30" : "border-amber-400 shadow-lg"
                                    )}>
                                        <CardHeader className="bg-amber-50/50 py-3 px-4">
                                            <div className="flex justify-between items-center">
                                                <CardTitle className="text-base text-amber-800">Introdução e Ladainha</CardTitle>
                                                <Button 
                                                    size="sm"
                                                    variant="outline"
                                                    className="border-amber-600 text-amber-700"
                                                    onClick={() => handleCopy("intro", introText, "Introdução e Ladainha")}
                                                >
                                                    {historyCopied.includes("intro") ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                                                </Button>
                                            </div>
                                        </CardHeader>
                                    </Card>
                                )}

                                {/* Inserir Lembretes depois do Dia 32 */}
                                {dia.dia === 32 && (
                                    <Card className={cn(
                                        "border-2 transition-all duration-500 mx-4",
                                        historyCopied.includes("lembretes") ? "border-red-200 bg-red-50/30" : "border-red-400 shadow-xl"
                                    )}>
                                        <CardHeader className="bg-red-50/50 py-3 px-4">
                                            <div className="flex justify-between items-center">
                                                <div className="flex items-center gap-2">
                                                    <Bell className="h-4 w-4 text-red-600" />
                                                    <CardTitle className="text-base text-red-800">Lembretes Importantes</CardTitle>
                                                </div>
                                                <Button 
                                                    size="sm"
                                                    variant="destructive"
                                                    className={historyCopied.includes("lembretes") ? "opacity-70" : ""}
                                                    onClick={() => handleCopy("lembretes", lembretesText, "Lembretes")}
                                                >
                                                    {historyCopied.includes("lembretes") ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                                                </Button>
                                            </div>
                                        </CardHeader>
                                    </Card>
                                )}
                            </React.Fragment>
                        );
                    })}
                </div>
            </main>

            <Footer />
        </div>
    );
}
