/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        red: '4px 4px 0px 4px hsl(0, 70%, 25%)',
        green: '4px 4px 0px 4px hsl(120, 70%, 15%)',
        yellow: '4px 4px 0px 4px hsl(50, 70%, 16%)',
        blue: '4px 4px 0px 4px hsl(220, 70%, 25%)',
        gray: '8px 8px 0px 4px hsl(0, 70%, 0%)',
        active: '0px 0px 0px 0px hsl(0, 70%, 25%)',
      },
    },
  },
  plugins: [],
};
