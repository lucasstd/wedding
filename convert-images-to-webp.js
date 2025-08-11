// Script Node.js para converter PNG/JPG para WebP usando sharp
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = path.join(__dirname, 'src/assets');
const exts = ['.png', '.jpg', '.jpeg'];

function convertToWebp(filePath) {
  const outPath = filePath.replace(/\.(png|jpg|jpeg)$/i, '.webp');
  sharp(filePath)
    .webp({ quality: 80 })
    .toFile(outPath)
    .then(() => console.log(`Convertido: ${outPath}`))
    .catch(err => console.error(`Erro ao converter ${filePath}:`, err));
}

function walkDir(dir) {
  fs.readdirSync(dir).forEach(file => {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walkDir(fullPath);
    } else if (exts.includes(path.extname(file).toLowerCase())) {
      convertToWebp(fullPath);
    }
  });
}

walkDir(inputDir);
console.log('Conversão para WebP iniciada.');
