import fs from 'fs';
import path from 'path'
const root = process.cwd()
const filesToCopy = ['./package.json', './README.md', "./LICENSE"];
filesToCopy.forEach(file => {
  const __dirname = path.dirname(root);
  fs.copyFileSync(path.resolve(__dirname,file), `./${file}`);
})

console.log('files written to project root');

