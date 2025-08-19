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
	       keyframes: {
	         glitch: {
	      "0%": { "clip-path": "inset(20% 0 50% 0)" },
	      "5%": { "clip-path": "inset(10% 0 60% 0)" },
	      "10%": { "clip-path": "inset(15% 0 55% 0)" },
          "15%": { "clip-path": "inset(25% 0 35% 0)" },
          "20%": { "clip-path": "inset(30% 0 40% 0)" },
          "25%": { "clip-path": "inset(40% 0 20% 0)" },
          "30%": { "clip-path": "inset(10% 0 60% 0)" },
          "35%": { "clip-path": "inset(15% 0 55% 0)" },
          "40%": { "clip-path": "inset(25% 0 35% 0)" },
          "45%": { "clip-path": "inset(30% 0 40% 0)" },
          "50%": { "clip-path": "inset(20% 0 50% 0)" },
          "55%": { "clip-path": "inset(10% 0 60% 0)" },
          "60%": { "clip-path": "inset(15% 0 55% 0)" },
          "65%": { "clip-path": "inset(25% 0 35% 0)" },
          "70%": { "clip-path": "inset(30% 0 40% 0)" },
          "75%": { "clip-path": "inset(40% 0 20% 0)" },
          "80%": { "clip-path": "inset(20% 0 50% 0)" },
          "85%": { "clip-path": "inset(10% 0 60% 0)" },
          "90%": { "clip-path": "inset(15% 0 55% 0)" },
          "95%": { "clip-path": "inset(25% 0 35% 0)" },
          "100%": { "clip-path": "inset(30% 0 40% 0)" },
        },
      },
      animation: {
        "glitch-after": "glitch var(--after-duration) infinite linear alternate-reverse",
        "glitch-before": "glitch var(--before-duration) infinite linear alternate-reverse",
	  },
	},
  },
  plugins: [require("tailwindcss-animate")],
};







