import type { SvelteComponent } from "svelte";
import type { PageServerLoad } from "./$types";

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
	helpers: Array<
		Record<
			string,
			{
				docs: Page[];
			}
		>
	>;
};

async function loadContent(): Promise<Data> {
	const modules = import.meta.glob('../docs/**/*.md');

	const postPromises = [];

	for (const [path, resolver] of Object.entries(modules)) {
		const promise = resolver().then((post) => {
			return {
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
	console.log(pages)
	// const groups = pages.reduce(
	// 	(acc, current) => {
	// 		if (current.slug.includes('components')) {
	// 			const [group, doc] = current.title.split('/');
	// 			const item = {
	// 				component: group,
	// 				title: doc,
	// 				order: current.order,
	// 				path: current.path,
	// 				slug: current.slug
	// 			};
	// 			if (acc.components[group] == undefined) {
	// 				acc.components[group] = [];
	// 			}
	// 			acc.components[group].push(item);
	// 			return acc;
	// 		}
	// 		if (current.slug.includes('helpers')) {
	// 			const [group, doc] = current.title.split('/');
	// 			const item = {
	// 				component: group,
	// 				title: doc,
	// 				order: current.order,
	// 				path: current.path,
	// 				slug: current.slug
	// 			};
	// 			if (acc.helpers[group] == undefined) {
	// 				acc.helpers[group] = [];
	// 			}
	// 			acc.helpers[group].push(item);
	// 			return acc;
	// 		}
	// 		acc.base.push(current);
	// 		return acc;
	// 	},
	// 	{ components: {}, base: [], helpers: {} }
	// );
	// return groups;
}

interface MdsvexFile {
	default: SvelteComponent;
	metadata: Record<string, string>;
}

const components = ['cldimage', 'cldogimage', 'clduploadbutton', 'clduploadwidget']
const helpers = ['getcldimageurl']

function getDoc(slug: string | undefined, section: string | undefined) {
	const folder = slug?.toLowerCase() ?? '/'
	const file = section?.toLowerCase()

	let path = `${slug?.toLowerCase()}.md`

	if (components.includes(folder)) {
		path = `components/${folder}/${file}.md`
	}
	if (helpers.includes(folder)) {
		path = `helpers/${folder}/${file}.md`
	}
	if (folder === '/') {
		path = 'index.md'

	}
	return import(/* @vite-ignore */`../docs/${path}`) as unknown as Promise<MdsvexFile>
}

export const load: PageServerLoad = async ({ params }) => {
	const post = await getDoc(params.slug, params.section)
	const { default: page, metadata } = post;
	const { default: meta } = await import('../docs/meta.json')
	const sections = Object.keys(meta).map((key) => {
		return { [key]: meta[key] }
	})
	return {
		page,
		metadata,
		sections
		// slug: path,
	}
}
