/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class', // or 'media' or 'class' or 'false' 
  // media => dark mode based on system settings, if there is a 'dark' it will be dark mode, else light mode
  // class => dark mode based on class 'dark' in html tag
  // false => no dark mode
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation:{
        'bounce-slow': 'bounce 2s infinite',
      },
      keyframes:{
        bounce:{
          '0%, 100%': {transform: 'translateY(0) rotate(-45deg)'},
          '50%': {transform: 'translateY(-1rem) rotate(-45deg)'},
        },
      },
    },
  },
  plugins: [],
}