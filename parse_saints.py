"""
Script para extrair santos do CSV e gerar código TypeScript
Processa Fevereiro a Setembro de 2026
"""

import re
from datetime import datetime

# CSV data fornecido pelo usuário (apenas Fev-Set)
csv_data = """
"⚪ Santa Brígida da Irlanda | 📢 Intro: Lourdes","2026-02-01","True"
"⚪ Apresentação (Candeias) | ▶️ Início: Lourdes","2026-02-02","True"
"🟢 São Brás (Garganta)","2026-02-03","True"
"🟢 São João de Brito","2026-02-04","True"
"🔴 Santa Águeda (Ágata)","2026-02-05","True"
"🔴 São Paulo Miki e Comp.","2026-02-06","True"
"🟢 Beato Pio IX | 📢 Intro: Sagrada Face","2026-02-07","True"
"🟢 Santa Josefina Bakhita | ▶️ Início: S. Face","2026-02-08","True"
"🟢 Santa Apolônia","2026-02-09","True"
"⚪ Santa Escolástica | 🏁 Fim: Lourdes","2026-02-10","True"
"🟢 N. Sra. de Lourdes","2026-02-11","True"
"🟢 Santa Eulália | 📢 Intro: Cátedra Pedro","2026-02-12","True"
"🟢 Santa Catarina Ricci | ▶️ Início: Cátedra Pedro","2026-02-13","True"
"⚪ Santos Cirilo e Metódio","2026-02-14","True"
"🟢 Santos Faustino e Jovita","2026-02-15","True"
"🟢 Santa Juliana | 🏁 Fim: Sagrada Face","2026-02-16","True"
"🟢 Sagrada Face (Terça Carnaval)","2026-02-17","True"
"🟣 QUARTA-FEIRA DE CINZAS","2026-02-18","True"
"🟣 São Conrado","2026-02-19","True"
"🟣 Santos Francisco e Jacinta","2026-02-20","True"
"🟣 São Pedro Damião | 🏁 Fim: Cátedra Pedro","2026-02-21","True"
"🟣 Cátedra de São Pedro","2026-02-22","True"
"🟣 São Policarpo","2026-02-23","True"
"🟣 São Sérgio","2026-02-24","True"
"🟣 São Cesário de Nazianzo","2026-02-25","True"
"🟣 Santo Alexandre","2026-02-26","True"
"🟣 São Gabriel das Dores","2026-02-27","True"
"🟣 São Romão","2026-02-28","True"
"""

def extract_saint_name(subject):
    """Extrai o nome do santo do subject"""
    # Remove emojis e ações de novena
    subject = re.sub(r'[⚪🟢🔴🟣🌸]', '', subject)
    subject = re.sub(r'\|.*$', '', subject)  # Remove tudo após |
    subject = subject.strip()
    return subject

def parse_csv_line(line):
    """Parse uma linha do CSV"""
    match = re.match(r'"([^"]+)","(\d{4}-\d{2}-\d{2})"', line)
    if match:
        subject = match.group(1)
        date_str = match.group(2)
        date = datetime.strptime(date_str, '%Y-%m-%d')
        saint_name = extract_saint_name(subject)
        return {
            'day': date.day,
            'month': date.month,
            'saint': saint_name
        }
    return None

# Processar CSV
saints_by_month = {}
for line in csv_data.strip().split('\n'):
    if line.strip():
        data = parse_csv_line(line)
        if data:
            month = data['month']
            if month not in saints_by_month:
                saints_by_month[month] = []
            saints_by_month[month].append(data)

# Gerar código TypeScript
month_names = {
    2: 'Fevereiro', 3: 'Março', 4: 'Abril', 5: 'Maio',
    6: 'Junho', 7: 'Julho', 8: 'Agosto', 9: 'Setembro'
}

print("// Generated saints data for February to September 2026\n")

for month_num in sorted(saints_by_month.keys()):
    month_name = month_names.get(month_num, f'Month{month_num}')
    print(f"// {month_name}")
    for saint_data in sorted(saints_by_month[month_num], key=lambda x: x['day']):
        day = saint_data['day']
        saint = saint_data['saint']
        print(f"  {{ day: {day}, month: '{month_name}', saints: [{{ name: '{saint}', imageUrl: 'https://i.pinimg.com/736x/placeholder.jpg', story: '<h4>{saint}</h4><p>Santo do dia.</p>' }}] }},")
    print()
