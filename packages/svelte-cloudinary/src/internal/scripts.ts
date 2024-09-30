interface LoadScriptOptions {
	src: string;
	onLoad: () => void;
	onError: () => void;
}

export function loadScript(options: LoadScriptOptions) {
	const script = document.createElement('script');
	script.src = options.src;
	script.addEventListener('load', options.onLoad, { once: true });
	script.addEventListener('error', options.onError, { once: true });
	document.head.appendChild(script);
}
