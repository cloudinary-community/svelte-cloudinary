import type { PageServerLoad } from "./$types";


const components = ['cldimage', 'cldogimage', 'clduploadbutton', 'clduploadwidget','cldvideoplayer']
const helpers = ['getcldimageurl','getcldogimageurl']

function getDoc(slug: string | undefined, section: string | undefined) {
	const folder = slug?.toLowerCase().split(" ").join("-") ?? '/'
	const file = section?.toLowerCase()

	if (components.includes(folder)) {
		return import(`../docs/components/${folder}/${file}.md`)
	}
	if (helpers.includes(folder)) {
		return import(`../docs/helpers/${folder}/${file}.md`)
	}
	if(folder === 'guides'){
		return import(`../docs/guides/${file}.md`)
	}

	if(folder === 'templates'){
		return import(`../docs/templates/${file}.md`)
	}

	if (folder === '/') {
		return import(`../docs/index.md`)
	}
	return import(`../docs/${folder}.md`)
}

export const load: PageServerLoad = async ({ params }) => {
	const post = await getDoc(params.slug, params.section)
	const { default: page, metadata } = post;
	const { default: meta } = await import('../docs/meta.json')
	return {
		page,
		metadata,
		sections: meta.sections,
	}
}

export const prerender = true
export const trailingSlash = "always"
