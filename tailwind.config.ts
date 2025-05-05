/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
  "./src/**/*.{js,ts,jsx,tsx}",
  "./app/**/*.{js,ts,jsx,tsx}",
  "./pages/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}",
],
theme: {
	container: {
		padding: {
			DEFAULT: '1rem',
			sm: '2rem',
			lg: '4rem',
			xl: '5rem',
			'2xl': '6rem'
		},
		center: true
	},
	colors: {
		gray: '#D9D9D9',
		white: '#FFFFFF',
		darkgrey: '#242424',
		green: '#4EE1A0',
		black: '#151515',
		transparent: 'transparent',
		current: 'currentColor'
	},
	fontSize: {
		extralarge: [
			'88px',
			{
				lineHeight: '88px',
				letterSpacing: '-2.5px'
			}
		],
		large: [
			'48px',
			{
				lineHeight: '56px',
				letterSpacing: '-1.5px'
			}
		],
		medium: [
			'32px',
			{
				lineHeight: '40px',
				letterSpacing: '-1px'
			}
		],
		small: [
			'24px',
			{
				lineHeight: '32px',
				letterSpacing: '-0.44px'
			}
		],
		smaller: [
			'18px',
			{
				lineHeight: '28px'
			}
		],
		smallest: [
			'16px',
			{
				lineHeight: '26px'
			}
		]
	},
	extend: {
		spacing: {
			section: '80px'
		},
		borderRadius: {
			lg: 'var(--radius)',
			md: 'calc(var(--radius) - 2px)',
			sm: 'calc(var(--radius) - 4px)'
		},
		colors: {
			background: 'hsl(var(--background))',
			foreground: 'hsl(var(--foreground))',
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
		}
	}
},
plugins: [require("tailwindcss-animate")],
}







