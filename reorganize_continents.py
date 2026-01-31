#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Script para reorganizar os continentes no arquivo world-devotions-data.ts
Move Américas para ser o primeiro continente
"""

import re

# Ler o arquivo
with open(r'c:\Users\Leandro(LeBron)\Documents\Coracoessagradosbsb\Coracoessagradosbsb\src\lib\world-devotions-data.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# Encontrar os blocos de cada continente usando regex
# Padrão: capturar desde "name: " até o fechamento do bloco "]"
europa_pattern = r'(\{\s*name: "Europa",.*?devotions: \[.*?\]\s*\})'
asia_pattern = r'(\{\s*name: "Ásia",.*?devotions: \[.*?\]\s*\})'
africa_pattern = r'(\{\s*name: "África e Oriente Médio",.*?devotions: \[.*?\]\s*\})'
americas_pattern = r'(\{\s*name: "Américas",.*?devotions: \[.*?\]\s*\})'

# Extrair os blocos
europa_match = re.search(europa_pattern, content, re.DOTALL)
asia_match = re.search(asia_pattern, content, re.DOTALL)
africa_match = re.search(africa_pattern, content, re.DOTALL)
americas_match = re.search(americas_pattern, content, re.DOTALL)

if all([europa_match, asia_match, africa_match, americas_match]):
    europa_block = europa_match.group(1)
    asia_block = asia_match.group(1)
    africa_block = africa_match.group(1)
    americas_block = americas_match.group(1)
    
    # Reconstruir o arquivo com a nova ordem
    # Encontrar o início do array de continentes
    array_start = content.find('export const worldMarianDevotions: Continent[] = [')
    array_end = content.rfind('];')
    
    before_array = content[:array_start + len('export const worldMarianDevotions: Continent[] = [')]
    after_array = content[array_end:]
    
    # Nova ordem: Américas, Europa, Ásia, África
    new_content = before_array + '\n    ' + americas_block + ',\n    ' + europa_block + ',\n    ' + asia_block + ',\n    ' + africa_block + '\n' + after_array
    
    # Salvar o arquivo
    with open(r'c:\Users\Leandro(LeBron)\Documents\Coracoessagradosbsb\Coracoessagradosbsb\src\lib\world-devotions-data.ts', 'w', encoding='utf-8') as f:
        f.write(new_content)
    
    print("✅ Arquivo reorganizado com sucesso!")
    print("Nova ordem: Américas → Europa → Ásia → África e Oriente Médio")
else:
    print("❌ Erro: Não foi possível encontrar todos os blocos de continentes")
