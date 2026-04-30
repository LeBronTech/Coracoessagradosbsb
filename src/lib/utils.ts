import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatSaintName(name: string, abbreviate: boolean = true, full: boolean = false) {
  const isNS = /^(N\.?\s*S\.?\s|Nossa Senhora)/i.test(name);
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
  
  if (isNS) {
    // Identifica o prefixo (N. S. ou Nossa Senhora)
    let nsPrefixCount = 1;
    if (words[0].toLowerCase() === 'nossa' && words[1]?.toLowerCase() === 'senhora') nsPrefixCount = 2;
    else if (/^n\.?s\.?$/i.test(words[0])) nsPrefixCount = 1;
    else if (words[0].toLowerCase() === 'n.' && words[1]?.toLowerCase() === 's.') nsPrefixCount = 2;

    if (words.length > nsPrefixCount) {
      return {
        main: words.slice(0, nsPrefixCount).join(' '),
        additional: words.slice(nsPrefixCount).join(' ')
      };
    }
    return { main: nameToProcess, additional: '' };
  }

  // Lógica para outros santos
  if (words.length > 1) {
    const startsWithS = words[0] === 'S.';
    const startsWithPrefix = prefixes.some(p => p.toLowerCase() === words[0].toLowerCase());

    if (startsWithS || startsWithPrefix) {
      if (words.length > 2) {
        if (!full && words.length > 3) {
          // Se não for "full" e tiver mais de 3 palavras (ex: S. Maria de Jesus)
          // Mostra apenas a primeira parte e o último sobrenome
          return {
            main: words.slice(0, 2).join(' '),
            additional: words[words.length - 1]
          };
        }
        return {
          main: words.slice(0, 2).join(' '),
          additional: words.slice(2).join(' ')
        };
      }
    } else {
      // Sem prefixo S./São/etc
      if (!full && words.length > 2) {
        return {
          main: words[0],
          additional: words[words.length - 1]
        };
      }
      return {
        main: words[0],
        additional: words.slice(1).join(' ')
      };
    }
  }

  return { main: nameToProcess, additional: '' };
}
