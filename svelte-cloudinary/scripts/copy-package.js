import fs from 'fs';

// read file into JSON
const pkg = JSON.parse(fs.readFileSync('package.json', 'utf-8'));

// adjust pkg json however you like ..

// write it to your output directory
fs.writeFileSync(
  './dist/package.json', // path to your output directory may vary
  JSON.stringify(pkg, null, 2)
);
console.log('package.json written to /dist')
