
import os

file_path = r"c:\Users\Leandro(LeBron)\Documents\Coracoessagradosbsb\Coracoessagradosbsb\src\components\marian-gallery.tsx"

with open(file_path, 'r', encoding='utf-8') as f:
    lines = f.readlines()

# Line 128 is at index 127
line_128 = lines[127]
if '},<h4>A' in line_128:
    lines[127] = '        },\n'
    with open(file_path, 'w', encoding='utf-8') as f:
        f.writelines(lines)
    print("Successfully fixed line 128")
else:
    print("Could not find the problematic text on line 128")
    print(f"Line 128 start: {line_128[:50]}")
