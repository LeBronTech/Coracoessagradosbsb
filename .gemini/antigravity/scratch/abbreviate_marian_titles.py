import os
import re

files_to_process = [
    'src/lib/santos-completo-fev-set.ts',
    'src/lib/novenas-fev-set.ts',
    'src/lib/liturgical-calendar.ts',
    'src/lib/data.ts',
    'src/lib/world-devotions-data.ts',
    'src/lib/confession-data.ts'
]

def process_file(file_path):
    abs_path = os.path.join('/home/lebron/Coracoessagradosbsb-main', file_path)
    if not os.path.exists(abs_path):
        print(f"File not found: {abs_path}")
        return

    with open(abs_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Step 1: Replace all "Nossa Senhora" with "N.S."
    # We use a placeholder for Visitação to avoid double replacement or confusion
    content = content.replace("Visitação - Nossa Senhora", "VISITACAO_PLACEHOLDER")
    content = content.replace("Nossa Senhora da Visitação", "VISITACAO_PLACEHOLDER_2")
    
    content = content.replace("Nossa Senhora", "N.S.")
    
    # Step 2: Restore Visitação
    content = content.replace("VISITACAO_PLACEHOLDER", "Visitação - Nossa Senhora")
    content = content.replace("VISITACAO_PLACEHOLDER_2", "Nossa Senhora da Visitação")

    with open(abs_path, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"Processed: {file_path}")

for f in files_to_process:
    process_file(f)
