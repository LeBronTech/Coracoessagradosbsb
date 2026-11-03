const fs = require('fs');
const newBrasiliaData = require('./confessionDataBrasilia.json');

// We will read the existing ts file and use string replacement to update the array.
// But first, let's parse the Entorno part from the ts file. Actually we can just keep the Entorno structure literal.

const entornoStr = `
  {
    city: 'Entorno (GO)',
    parishes: [],
    isGroup: true,
    subCities: [
      {
        city: 'Cidade Ocidental',
        parishes: [
          {
            name: 'Santuário Jardim da Imaculada',
            address: 'Cidade Ocidental - GO',
            times: 'Segunda, Quarta e Sexta: Às 19h (durante o horário da Santa Missa). Domingo: Durante as missas das 06:30, 09:00 e 16:00',
            instagram: 'https://www.instagram.com/santuariojardimdaimaculada'
          }
        ]
      },
      {
        city: 'Novo Gama',
        parishes: [
          {
            name: 'Paróquia N.S. Imaculada Conceição',
            address: 'Novo Gama - GO',
            times: 'Sexta-feira: De 09:00 às 11:00, de 14:30 às 17:00 e de 19:00 às 21:00',
            instagram: 'https://www.instagram.com/imaculadanovogama'
          },
          {
            name: 'Paróquia N.S. do Perpétuo Socorro',
            address: 'Novo Gama - GO',
            times: 'Quarta, Quinta e Sexta: Às 18:00'
          }
        ]
      },
      {
        city: 'Valparaíso de Goiás',
        parishes: [
          {
            name: 'A Paróquia Franciscana (São Francisco de Assis)',
            address: 'Valparaíso de Goiás - GO',
            times: 'Quarta, Quinta e Sexta: Às 09:00 e às 15:00. Sábado: Às 09:00',
            instagram: 'https://www.instagram.com/aparoquiafranciscana'
          }
        ]
      },
      {
        city: 'Luziânia',
        parishes: [
          {
            name: 'Paróquia N.S. de Lourdes',
            address: 'Luziânia - GO',
            times: 'Quarta e Sexta: De 14:00 às 17:00'
          }
        ]
      },
      {
        city: 'Santo Antônio do Descoberto',
        parishes: [
          {
            name: 'Paróquia Santo Antônio do Descoberto',
            address: 'Santo Antônio do Descoberto - GO',
            times: 'Quarta: De 14:00 às 16:00. Quinta: De 08:00 às 12:00'
          }
        ]
      },
      {
        city: 'Águas Lindas de Goiás',
        parishes: [
          {
            name: 'Paróquia São Maximiliano Maria Kolbe',
            address: 'Águas Lindas de Goiás - GO',
            times: 'Terça e Quarta: De 08:30 às 11:30 e de 14:30 às 16:30'
          },
          {
            name: 'Paróquia São Francisco de Assis',
            address: 'Águas Lindas de Goiás - GO',
            times: 'Quarta a Sábado: De 17:30 às 19:00'
          }
        ]
      },
      {
        city: 'Planaltina de Goiás',
        parishes: [
          {
            name: 'Paróquia Divino Espírito Santo',
            address: 'Planaltina de Goiás - GO',
            times: 'Segunda: De 14:30 às 18:00. Terça: De 09:30 às 12:00 e de 14:30 às 18:00. Quinta: De 18:00 às 19:00. Sexta e Sábado: De 09:30 às 12:00'
          },
          {
            name: 'Paróquia Santo Antônio',
            address: 'Planaltina de Goiás - GO',
            times: 'Quinta: De 15:00 às 17:00 e de 18:00 às 18:45. Outros horários por agendamento'
          }
        ]
      },
      {
        city: 'Formosa',
        parishes: [
          {
            name: 'Paróquia São Sebastião',
            address: 'Formosa - GO',
            times: 'Terça, Quarta e Quinta: De 20:00 às 22:00'
          }
        ]
      },
      {
        city: 'Cristalina',
        parishes: [
          {
            name: 'Paróquia N.S. Aparecida',
            address: 'Cristalina - GO',
            times: 'Confissões por agendamento na secretaria paroquial'
          }
        ]
      }
    ]
  }
`;

function formatString(obj) {
  let str = JSON.stringify(obj, null, 2);
  // Remove quotes around keys
  str = str.replace(/"([^"]+)":/g, '$1:');
  // replace double quotes with single quotes for strings except for times string where we might need double quotes but single is preferred
  str = str.replace(/"/g, "'");
  return str;
}

const allCities = newBrasiliaData;
let outData = 'export const confessionData: CityData[] = [\n';
for (let i = 0; i < allCities.length; i++) {
  outData += formatString(allCities[i]) + ',\n';
}
outData += entornoStr + '\n];\n';

const newContent = `interface Parish {
  name: string;
  address: string;
  times: string;
  location?: string;
  instagram?: string;
}

interface CityData {
  city: string;
  parishes: Parish[];
  isGroup?: boolean;
  subCities?: CityData[];
}

${outData}
`;

fs.writeFileSync('src/lib/confession-data.ts', newContent);
console.log('done!');
