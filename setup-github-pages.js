import fs from 'fs/promises';
import path from 'path';

const files = {
  'next.config.js': `
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // altre configurazioni...
}

module.exports = nextConfig
  `,
  '.github/workflows/deploy.yml': `
name: Deploy to GitHub Pages

on:
  push:
    branches: ["main"]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
      - name: Checkout
        uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build
        run: npm run build
      
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: \${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./out
  `
};

async function updatePackageJson() {
  const packageJsonPath = path.join(process.cwd(), 'package.json');
  const packageJson = JSON.parse(await fs.readFile(packageJsonPath, 'utf8'));
  
  if (!packageJson.scripts.build) {
    packageJson.scripts.build = "next build";
    await fs.writeFile(packageJsonPath, JSON.stringify(packageJson, null, 2));
    console.log('Aggiunto script di build a package.json');
  } else {
    console.log('Lo script di build esiste già in package.json');
  }
}

async function createOrUpdateFile(filePath, content) {
  await fs.mkdir(path.dirname(filePath), { recursive: true });
  await fs.writeFile(filePath, content.trim());
  console.log(`File creato/aggiornato: ${filePath}`);
}

async function main() {
  try {
    console.log('Inizio configurazione per GitHub Pages...');
    
    for (const [file, content] of Object.entries(files)) {
      await createOrUpdateFile(path.join(process.cwd(), file), content);
    }
    
    await updatePackageJson();
    
    console.log('Configurazione per GitHub Pages completata con successo!');
    console.log('Ricorda di eseguire questi comandi:');
    console.log('1. git add .');
    console.log('2. git commit -m "Configurato per GitHub Pages"');
    console.log('3. git push origin main');
    console.log('Poi, vai alle impostazioni del tuo repository su GitHub e nella sezione "Pages", seleziona come source "GitHub Actions".');
  } catch (error) {
    console.error('Si è verificato un errore:', error);
  }
}

main();