import sharp from 'sharp';
import { readdirSync, mkdirSync } from 'fs';
import { join, extname, basename } from 'path';

const INPUT_DIR = './src/assets';
const OUTPUT_DIR = './src/assets/optimized';

const TARGETS = ['primero.png', 'segundo.png', 'tercero.png', 'cuarto.png', 'quinto.png', 'acuerdoImage.png', 'reparacion.png', 'appImage.png'];

mkdirSync(OUTPUT_DIR, { recursive: true });

for (const file of TARGETS) {
    const input = join(INPUT_DIR, file);
    const output = join(OUTPUT_DIR, basename(file, extname(file)) + '.webp');

    await sharp(input)
        .resize(1200, 900, { fit: 'cover', withoutEnlargement: true })
        .webp({ quality: 78 })
        .toFile(output);

    console.log(`✓ ${file} → ${basename(output)}`);
}

console.log('\nDone. Check src/assets/optimized/');
