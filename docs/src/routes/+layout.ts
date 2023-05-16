type Page = {
	title: string;
	path: string;
	order: number;
	slug: string;
};
type Data = {
	base: Page[];
	components: Array<
		Record<
			string,
			{
				docs: Page[];
			}
		>
	>;
};
async function loadContent(): Promise<Data> {
	const modules = import.meta.glob(`./**/+page.svx`);

	const postPromises = [];

	for (const [path, resolver] of Object.entries(modules)) {
		const promise = resolver().then((post) => {
			const slug = path.replace('+page.svx', '').slice(1);
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
	const pages = await Promise.all(postPromises)
		.then((p) => {
		return p.sort((a, b) => a.order - b.order);
	});

	const groups = pages.reduce(
		(acc, current) => {
			if (current.slug.includes('components')) {
				const [group, doc] = current.title.split('/');
				const item = {
					component: group,
					title: doc,
					order: current.order,
					path: current.path,
					slug: current.slug
				};
				// if (acc.components[group] == undefined) {
				// 	acc.components[group] = { docs: [] };
				// }
				// acc.components[group].docs.push(item);
				acc.components.push(item)
				return acc;
			}
			acc.base.push(current);
			return acc;
		},
		{ components: [], base: [] }
	);
	return groups;
}

import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async () => {
	const { components, base } = await loadContent();
	return { components, base };
};
