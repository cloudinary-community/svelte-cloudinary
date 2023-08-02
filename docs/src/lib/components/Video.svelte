<script lang="ts">
	function getUrlParamsFromString(string) {
		let url;

		try {
			url = new URL(string);
		} catch (e) {
			throw new Error(`Failed to get URL params from string: ${e.message}`);
		}

		const params = new URLSearchParams(url.search);

		return Array.from(params.keys()).map((key) => {
			return {
				key,
				value: params.get(key)
			};
		});
	}
	export let title: string;
	export let url: string;
	export let width = 560;
	export let height = 315;
	const videoId = getUrlParamsFromString(url).find(({ key }) => key === 'v')?.value;
</script>

<figure>
	<div style={`padding-top: ${(height / width) * 100}%`}>
		<iframe
			{title}
			{width}
			{height}
			src={`https://www.youtube.com/embed/${videoId}?feature=oembed`}
			frameBorder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
			allowFullScreen
			autoPlay
		/>
	</div>
	<figcaption>
		<a href={url} rel="noopener" target="_blank"> View on YouTube </a>
	</figcaption>
</figure>

<style>
	figure {
		margin-left: auto;
		margin-right: auto;
	}
	figure figcaption {
		text-align: center;
		margin-top: 1em;
	}

	figure > div:first-of-type {
		position: relative;
		overflow: hidden;
	}
	iframe {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		border: 0;
	}
</style>
