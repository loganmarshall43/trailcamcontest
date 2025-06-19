# gen_images.py
import os, json, re

IMG_DIR  = 'images'
OUT_FILE = 'images.js'

images = []
for fname in os.listdir(IMG_DIR):
    if not re.search(r'\.(jpe?g|png|gif)$', fname, re.I):
        continue
    name, _ = os.path.splitext(fname)        # "FirstLastState"
    parts = re.findall(r'[A-Z][a-z]*', name) # ["First","Last","State"]
    caption = ' '.join(parts[:-1]) + ', ' + parts[-1]
    images.append({
        "id":      name,
        "src":     f"images/{fname}",
        "caption": caption
    })

with open(OUT_FILE, 'w') as f:
    f.write('export const images = ')
    json.dump(images, f, indent=2)
    f.write(';')

print(f"✅ Wrote {len(images)} images to {OUT_FILE}")
