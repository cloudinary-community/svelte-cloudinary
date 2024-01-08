<script lang="ts">
	import { onMount } from 'svelte';
	onMount(() => {
		// will add a children to any <pre> element with class language-*
		let pres: HTMLCollection = document.getElementsByTagName('pre');
		for (let _ of pres) {
			const pre = _ as HTMLPreElement;
			if (![...pre.classList].some((el) => el.startsWith('language-'))) {
				continue;
			}
			const text = pre.innerText;
			pre.classList.add('relative');
			let copyButton = document.createElement('button');
			copyButton.addEventListener('click', () => {
				navigator.clipboard.writeText(text);
				copyButton.innerHTML = 'Copied 👍';
				setTimeout(() => {
					copyButton.innerHTML = 'Copy';
				}, 1500);
			});
			copyButton.className =
				'copy absolute top-0 right-0 mt-2 mr-2 bcu-button variant-ringed-primary';
			copyButton.innerText = 'Copy';
			pre.appendChild(copyButton);
		}
	});
</script>

<slot />
