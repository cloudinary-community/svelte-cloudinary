import { readFile, writeFile } from 'node:fs/promises';
import { join } from 'desm';

const pkg = JSON.parse(
	await readFile(join(import.meta.url, '../package.json'), 'utf-8'),
);

const tpl = `// THIS FILE IS GENERATED
export const VERSION: string = '${pkg.version}';
`;

await writeFile(join(import.meta.url, '../src/version.ts'), tpl, 'utf-8');
