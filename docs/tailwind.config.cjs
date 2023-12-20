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
		extend: {
			typography: (theme) => ({
				DEFAULT: {
					css: {
						a: {
							color: theme('colors.blue.500')
						}
					}
				},
				dark: {
					css: {
						a: {
							color: theme('colors.blue.400')
						}
					}
				}
			})
		}
	},

	plugins: [typography, daisyui],
	daisyui: {
		themes: ["light", "night"]
	}
};

module.exports = config;
