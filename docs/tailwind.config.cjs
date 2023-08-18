const daisyui = require('daisyui');
const typography = require('@tailwindcss/typography');

/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		fontFamily: {
			'sans': ['Poppins', 'ui-sans-serif', 'system-ui',],
			'serif': ['Poppins', 'ui-serif', 'Georgia']
		},
		extend: {}
	},

	plugins: [typography, daisyui],
	daisyui: {
		themes: ["light", "black"]
	}
};

module.exports = config;
