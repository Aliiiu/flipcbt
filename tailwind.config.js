module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			colors: {
				'deep-blue': '#06042C',
				primary: '#0075FF',
				secondary: '#FFAD4A',
			},
			animation: {
				'fade-in': 'fadeIn 2s ease-in-out',
				'slide-up': 'slideUp 1s ease-in-out',
				'zoom-out': 'zoomOut 1s ease-in-out',
			},
			keyframes: {
				fadeIn: {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' },
				},
				slideUp: {
					'0%': { transform: 'translateY(20px)', opacity: '0' },
					'100%': { transform: 'translateY(0px)', opacity: '1' },
				},
				zoomOut: {
					'0%': { transform: 'scale(0)' },
					'100%': { transform: 'scale(1)' },
				},
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
