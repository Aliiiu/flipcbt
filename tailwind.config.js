module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			colors: {
				'deep-blue': '#06042C',
			},
		},
		screens: {
			md: '768px',
			lg: '1024px',
			xl: '1280px',
			// 'xl': '1380px',
			mobile: { max: '768px' },
		},
	},
	plugins: [],
};
