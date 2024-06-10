import { readFile, writeFile } from 'node:fs/promises';
import { join } from 'desm';

const pkg = JSON.parse(await readFile(join('../package.json'), 'utf-8'));

const tpl = `// THIS FILE IS GENERATED
export const VERSION = '${pkg.version}';
`;

await writeFile(join('../src/version.ts'), tpl, 'utf-8');
