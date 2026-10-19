import { addDays, subDays } from "date-fns";

export type MarianConsecrationPreset = {
  id: string;
  name: string;
  feastDate: Date;
  startDate: Date;
  feastTitle: string;
  isCustom?: boolean;
};

/**
 * Retorna os presets das principais festas marianas para a Consagração de 33 Dias
 * segundo o método de São Luís Maria Grignion de Montfort
 */
export function getMarianConsecrationPresets(year: number): MarianConsecrationPreset[] {
  const presets = [
    { id: "anunciacao", name: "Anunciação do Senhor (25 Mar)", feastTitle: "Solenidade da Anunciação do Senhor", feast: new Date(year, 2, 25) },
    { id: "fatima", name: "Nossa Senhora de Fátima (13 Mai)", feastTitle: "Festa de Nossa Senhora de Fátima", feast: new Date(year, 4, 13) },
    { id: "visitacao", name: "Visitação de Nossa Senhora (31 Mai)", feastTitle: "Festa da Visitação de Nossa Senhora", feast: new Date(year, 4, 31) },
    { id: "perpetuo", name: "Nossa Senhora do Perpétuo Socorro (27 Jun)", feastTitle: "Festa de Nossa Senhora do Perpétuo Socorro", feast: new Date(year, 5, 27) },
    { id: "carmo", name: "Nossa Senhora do Carmo (16 Jul)", feastTitle: "Solenidade de Nossa Senhora do Carmo", feast: new Date(year, 6, 16) },
    { id: "assuncao", name: "Assunção de Nossa Senhora (15 Ago)", feastTitle: "Solenidade da Assunção de Maria", feast: new Date(year, 7, 15) },
    { id: "rainha", name: "Nossa Senhora Rainha (22 Ago)", feastTitle: "Memória de Nossa Senhora Rainha", feast: new Date(year, 7, 22) },
    { id: "natividade", name: "Natividade de Nossa Senhora (08 Set)", feastTitle: "Festa da Natividade de Nossa Senhora", feast: new Date(year, 8, 8) },
    { id: "dores", name: "Nossa Senhora das Dores (15 Set)", feastTitle: "Memória de Nossa Senhora das Dores", feast: new Date(year, 8, 15) },
    { id: "rosario", name: "Nossa Senhora do Rosário (07 Out)", feastTitle: "Memória de Nossa Senhora do Rosário", feast: new Date(year, 9, 7) },
    { id: "aparecida", name: "Nossa Senhora Aparecida (12 Out)", feastTitle: "Solenidade de Nossa Senhora da Conceição Aparecida", feast: new Date(year, 9, 12) },
    { id: "gracas", name: "Nossa Senhora das Graças (27 Nov)", feastTitle: "Festa de Nossa Senhora da Medalha Milagrosa", feast: new Date(year, 10, 27) },
    { id: "imaculada", name: "Imaculada Conceição (08 Dez)", feastTitle: "Solenidade da Imaculada Conceição", feast: new Date(year, 11, 8) },
    { id: "guadalupe", name: "Nossa Senhora de Guadalupe (12 Dez)", feastTitle: "Festa de Nossa Senhora de Guadalupe", feast: new Date(year, 11, 12) },
    { id: "mae_deus", name: "Santa Maria, Mãe de Deus (01 Jan)", feastTitle: "Solenidade de Santa Maria, Mãe de Deus", feast: new Date(year + 1, 0, 1) },
    { id: "lourdes", name: "Nossa Senhora de Lourdes (11 Fev)", feastTitle: "Memória de Nossa Senhora de Lourdes", feast: new Date(year, 1, 11) },
  ];

  return presets.map(p => ({
    id: p.id,
    name: p.name,
    feastTitle: p.feastTitle,
    feastDate: p.feast,
    // A preparação é de 33 dias, portanto o início é 32 dias antes da festa
    startDate: subDays(p.feast, 32),
  }));
}

export function getCustomMarianPreset(startDate: Date): MarianConsecrationPreset {
  return {
    id: "custom",
    name: "Escolha Livre (Personalizada)",
    feastTitle: "Dia Escolhido da Consagração",
    startDate: startDate,
    feastDate: addDays(startDate, 32),
    isCustom: true
  };
}
