import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatSaintName(name: string, abbreviate: boolean = true) {
  const isNS = /^(N\.S\.|Nossa Senhora)/i.test(name);
  const prefixes = ['São', 'Santa', 'Santo', 'Santas', 'Santos', 'STA.'];
  const prefixRegex = new RegExp(`^(${prefixes.join('|')})\\s+`, 'i');
  
  let nameToProcess = name;
  let prefix = '';
  
  const match = name.match(prefixRegex);
  if (match) {
    prefix = match[1].trim();
    if (abbreviate) {
      nameToProcess = name.replace(prefixRegex, 'S. ');
    }
  }

  const words = nameToProcess.split(' ').filter(w => w.length > 0);
  const connectors = ['de', 'da', 'do', 'dos', 'das', "d'"];
  
  if (isNS) {
    // Lógica específica para Nossa Senhora: Título principal é longo
    if (words.length > 2) {
      const lastWord = words[words.length - 1];
      const secondToLast = words[words.length - 2].toLowerCase().replace('.', '');
      
      // Se a penúltima palavra for um conector, o título fica todo no Main
      if (connectors.includes(secondToLast)) {
        return { main: words.join(' '), additional: '' };
      }
      
      // Caso contrário, apenas a última palavra fica menor (ex: N.S. da Imaculada Conceição)
      return {
        main: words.slice(0, -1).join(' '),
        additional: lastWord
      };
    }
    return { main: nameToProcess, additional: '' };
  }

  // Lógica para outros santos: S. + Primeiro Nome ficam grandes, o resto fica pequeno
  if (words.length > 1) {
    // Verifica se começa com S. ou um prefixo original
    const startsWithS = words[0] === 'S.';
    const startsWithPrefix = prefixes.some(p => p.toLowerCase() === words[0].toLowerCase());

    if ((startsWithS || startsWithPrefix) && words.length > 2) {
      return {
        main: words.slice(0, 2).join(' '),
        additional: words.slice(2).join(' ')
      };
    } else if (!startsWithS && !startsWithPrefix && words.length > 1) {
      return {
        main: words[0],
        additional: words.slice(1).join(' ')
      };
    }
  }

  return { main: nameToProcess, additional: '' };
}
