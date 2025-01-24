/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	darkMode: "class",
	theme: {
		extend: {
			boxShadow: {
				'xl': '0 20px 25px -5px rgb(0 0 0 / 0.05), 0 8px 10px -6px rgb(0 0 0 / 0.05)',
				'xlLogo': '0 0 10px rgb(0 0 0 / 0.1), 0 0 10px rgb(0 0 0 / 0.05)',
				'inset-custom': 'inset 0 0 8px 8px rgb(255 255 255 / 1)',
			},
			fontFamily: {
				barlow: [
					'Barlow',
					'sans-serif'
				],
				krona: [
					'Krona One',
					'serif'
				],
				jakarta: [
					'Plus Jakarta Sans',
					'sans-serif'
				],
				poppins: [
					'Poppins',
					'sans-serif'
				]
			},
			colors: {
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				bluedefault: '#070F2B',
				bluetextdefault: '#8891C5',
				backgroundlight: '#f2f6ff',
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				chart: {
					'1': 'hsl(var(--chart-1))',
					'2': 'hsl(var(--chart-2))',
					'3': 'hsl(var(--chart-3))',
					'4': 'hsl(var(--chart-4))',
					'5': 'hsl(var(--chart-5))'
				}
			},
			keyframes: {
				'border-pulse': {
					'0%, 100%': { borderColor: 'rgba(0, 0, 0, 0.1)' },
					'50%': { borderColor: 'rgba(200, 200, 200, 0.4)' },
				},
				scroll: {
					'0%': { transform: 'translateX(100%)' },
					'100%': { transform: 'translateX(-100%)' },
				},
				animatedgradient: {
					'0%': {
						backgroundPosition: '0% 50%'
					},
					'50%': {
						backgroundPosition: '100% 50%'
					},
					'100%': {
						backgroundPosition: '0% 50%'
					}
				},
				slideIn: {
					'0%': {
						transform: 'translateX(100%)', // Start off-screen
					},
					'100%': {
						transform: 'translateX(0%)', // Move to its natural position
					},
				},
				slideOut: {
					'0%': {
						transform: 'translateX(0%)', // Start from its natural position
					},
					'100%': {
						transform: 'translateX(100%)', // Move off-screen
					},
				},
				fadeInOut: {
					'0%': { opacity: '1' },
					'100%': { opacity: '0' },
				},
			},
			backgroundSize: {
				'300%': '300%'
			},
			animation: {
				gradient: 'animatedgradient 6s ease infinite alternate',
				'border-pulse': 'border-pulse 4s infinite ease-in-out',
				scroll: 'scroll 20s linear infinite',
				'slide-in': 'slideIn 0.5s ease-in-out',
				'slide-out': 'slideOut 0.5s ease-in-out',
				'fade-in-out': 'fadeInOut 1s ease-in-out',
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
};
