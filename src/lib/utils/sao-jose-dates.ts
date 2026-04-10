import { addDays, subDays, startOfYear, endOfYear, eachDayOfInterval, isWednesday, nextSunday, isSunday, getYear, isLeapYear } from "date-fns";

/**
 * Calcula o domingo da Páscoa para um dado ano (Algoritmo de Meeus/Jones/Butcher)
 */
export function getEasterDate(year: number): Date {
  const a = year % 19;
  const b = Math.floor(year / 100);
  const c = year % 100;
  const d = Math.floor(b / 4);
  const e = b % 4;
  const f = Math.floor((b + 8) / 25);
  const g = Math.floor((b - f + 1) / 3);
  const h = (19 * a + b - d - g + 15) % 30;
  const i = Math.floor(c / 4);
  const k = c % 4;
  const l = (32 + 2 * e + 2 * i - h - k) % 7;
  const m = Math.floor((a + 11 * h + 22 * l) / 451);
  const month = Math.floor((h + l - 7 * m + 114) / 31);
  const day = ((h + l - 7 * m + 114) % 31) + 1;
  return new Date(year, month - 1, day);
}

/**
 * Calcula a Solenidade do Sagrado Coração de Jesus (19 dias após Pentecostes)
 * Pentecostes é 50 dias após a Páscoa (ou 49 dias adicionados)
 */
export function getSacredHeartDate(year: number): Date {
  const easter = getEasterDate(year);
  // Pentecostes = Páscoa + 49 dias
  // Sagrado Coração = Pentecostes + 19 dias
  // Total = Páscoa + 68 dias
  return addDays(easter, 68);
}

/**
 * Calcula a Quarta-feira que antecede a Solenidade do Sagrado Coração de Jesus
 * (Castíssimo Coração de São José)
 */
export function getCastissimoCoracaoJoseDate(year: number): Date {
  const sacredHeart = getSacredHeartDate(year);
  // Sagrado Coração é sempre uma Sexta-feira. A quarta-feira anterior é -2 dias.
  return subDays(sacredHeart, 2);
}

/**
 * Calcula o Domingo da Sagrada Família (domingo entre o Natal e o Ano Novo)
 */
export function getHolyFamilyDate(year: number): Date {
  const christmas = new Date(year, 11, 25);
  if (isSunday(christmas)) {
    // Se o Natal é Domingo, a Sagrada Família é celebrada em 30 de dezembro.
    return new Date(year, 11, 30);
  }
  return nextSunday(christmas);
}

export type ConsecrationPreset = {
  id: string;
  name: string;
  feastDate: Date;
  startDate: Date;
  isCustom?: boolean;
};

export function getConsecrationPresets(year: number): ConsecrationPreset[] {
  const presets = [
    { id: "santos_esposos", name: "Santos Esposos (23 Jan)", feast: new Date(year, 0, 23) },
    { id: "apresentacao", name: "Apresentação do Senhor (02 Fev)", feast: new Date(year, 1, 2) },
    { id: "solenidade_sj", name: "Solenidade de São José (19 Mar)", feast: new Date(year, 2, 19) },
    { id: "sj_operario", name: "São José Operário (01 Mai)", feast: new Date(year, 4, 1) },
    { id: "ns_fatima", name: "Nossa Senhora de Fátima (13 Mai)", feast: new Date(year, 4, 13) },
    { id: "ns_knock", name: "Nossa Senhora de Knock (17 Ago)", feast: new Date(year, 7, 17) },
    { id: "todos_santos", name: "Todos os Santos (01 Nov)", feast: new Date(year, 10, 1) },
    { id: "ns_loreto", name: "Nossa Senhora de Loreto (10 Dez)", feast: new Date(year, 11, 10) },
    { id: "sagrada_familia", name: "Sagrada Família (Festa Móvel)", feast: getHolyFamilyDate(year) },
    { id: "coracao_sj", name: "Coração de São José (Festa Móvel)", feast: getCastissimoCoracaoJoseDate(year) },
  ];

  return presets.map(p => ({
    id: p.id,
    name: p.name,
    feastDate: p.feast,
    startDate: subDays(p.feast, 32),
  }));
}

export function getCustomPreset(startDate: Date): ConsecrationPreset {
    return {
        id: "custom",
        name: "Escolha Livre (Personalizada)",
        startDate: startDate,
        feastDate: addDays(startDate, 32),
        isCustom: true
    };
}
