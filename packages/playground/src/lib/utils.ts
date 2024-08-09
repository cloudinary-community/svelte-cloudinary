export function titleCase(str: string): string {
	return str
		.replace(
			/(\s|[A-Za-z])[a-z]+/g,
			(txt) =>
				' ' + txt.charAt(0).toUpperCase() + txt.slice(1).toLowerCase(),
		)
		.trim();
}
