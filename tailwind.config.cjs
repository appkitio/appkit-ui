const { tailwindExtractor } = require('tailwindcss/lib/lib/purgeUnusedStyles')
const { name } = require('./package.json')
const production = !process.env.ROLLUP_WATCH

module.exports = {
	// mode: "jit",
	purge: {
		enabled: production,
		content: ['src/**/*.svelte', `node_modules/${name}/src/**/*.svelte`],
		options: {
			defaultExtractor: (content) => [
				// If this stops working, please open an issue at https://github.com/svelte-add/tailwindcss/issues rather than bothering Tailwind Labs about it
				...tailwindExtractor(content),
				// Match Svelte class: directives (https://github.com/tailwindlabs/tailwindcss/discussions/1731)
				...[...content.matchAll(/(?:class:)*([\w\d-/:%.]+)/gm)].map(
					([_match, group, ..._rest]) => group
				)
			],
			keyframes: true
		}
	},
	theme: {
		extend: {
			colors: {
				'brand-yellow': '#ffc900',
				'brand-light-yellow': '#ffc90020',
				'brand-off-yellow': '#c89f20',
				'brand-dark-gray': '#242327',
				'brand-light-gray': '#fafafa',
				'brand-light-blue': '#e5f3fa',
				'brand-heading': '#FFF',
				'brand-heading-border': '#c9ced3',
				'brand-heading-text': '#242327',
				'brand-bg-color': '#edf1f5',
				'brand-blue': '#2d87d9',
				'app-bg': '#f6f6f7',
				'brand-green': '#038060',
				'brand-primary': '#038060',
				'brand-primary-hover': '#006d52'
			},
			fontFamily: {
				sans: ['CeraPro', 'Helvetica Neue'],
				mono: ['MonoLisa', 'Helvetica Neue'],
				'mono-bold': ['MonoLisaBold', 'Helvetica Neue'],
				'cera-medium': ['CeraProMedium', 'Helvetica Neue'],
				'cera-bold': ['CeraProBold', 'Helvetica Neue'],
				body: ['CeraPro', 'Helvetica Neue']
			}
		}
	},
	variants: {
		extend: {}
	},
	plugins: [require('@tailwindcss/forms')]
}
