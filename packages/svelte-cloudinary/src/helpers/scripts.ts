export function loadScript(src: string, callback: () => void) {
	const script = document.createElement('script');
	script.src = src;
	script.addEventListener('load', callback, { once: true });
	document.head.appendChild(script);
}
