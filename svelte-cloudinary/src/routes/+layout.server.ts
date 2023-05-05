async function loadContent() {
	const modules = import.meta.glob(`./**/+page.svx`);

	const postPromises = [];

	for (const [path, resolver] of Object.entries(modules)) {
		const promise = resolver().then((post) => {
			const slug = path.replace('+page.svx','').slice(1)
			return {
				slug: slug
					.normalize('NFD')
					.replace(/[\u0300-\u036f]/g, '')
					.replace(/\?|\¿/g, ''),
				...post.metadata,
				path: path
			};
		});

		postPromises.push(promise);
	}

	return Promise.all(postPromises); //.then((p) => {console.log(p); return Posts.parse(p)});
}

import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async () => {
	const articles = await loadContent()
	return {
		articles
	}
}
