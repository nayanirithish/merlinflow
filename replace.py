import os
import re

directory = r'c:\Users\nayan\Desktop\merlinflow\src'

def replace_preserve_case(match):
    text = match.group(0)
    if text.isupper():
        return 'MERLINFLOW'
    elif text.islower():
        return 'merlinflow'
    elif text.istitle() or (text[0].isupper() and text[1:].islower()):
        return 'MerlinFlow'
    else:
        return 'MerlinFlow'

def process_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    new_content = re.sub(r'(?i)oryol', replace_preserve_case, content)
    
    if content != new_content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Updated {filepath}")

for root, _, files in os.walk(directory):
    for file in files:
        if file.endswith(('.js', '.jsx', '.css', '.md')):
            process_file(os.path.join(root, file))

print("Replacement complete.")
