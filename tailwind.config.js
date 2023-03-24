module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			colors: {
				flipDark: '#06042C',
				primaryBlue: '#F9FBFE',
				secondaryBlue: '#ADD0F9',
				primary: '#0075FF',
				secondary: '#FFAD4A',
				flipGreen: '#E6F9F3',
			},
			gridTemplateRows: {
				// Simple 8 row grid
				10: 'repeat(10, minmax(0, 60px))',
				layout: '200px minmax(900px, 1fr) 100px',
			},
			animation: {
				'fade-in': 'fadeIn 1s ease-in-out',
				'slide-up': 'slideUp 1s ease-in-out',
				'slide-down': 'slideDown 0.5s ease-in-out',
				'zoom-out': 'zoomOut 0.5s ease-in-out',
				'glide-up': 'glideUp 0.3s ease-in-out',
			},
			keyframes: {
				fadeIn: {
					'0%': { opacity: '0.3' },
					'100%': { opacity: '1' },
				},
				slideUp: {
					'0%': { transform: 'translateY(0px)', opacity: '1' },
					'100%': { transform: 'translateY(-10px)', opacity: '0' },
				},
				slideDown: {
					'100%': { transform: 'translateY(0px)', opacity: '1' },
					'0%': { transform: 'translateY(-10px)', opacity: '0' },
				},
				glideUp: {
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
			mobile: { max: '488px' },
		},
	},
	plugins: [],
};
