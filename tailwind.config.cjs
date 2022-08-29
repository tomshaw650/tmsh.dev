/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
      colors: {
        "main": "#191717",
        "accent": "#03989e",
      },
    },
	},
	plugins: [],
}
