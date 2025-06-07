/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
   extend: {
  fontFamily: {
    sans: ["var(--font-outfit)", "sans-serif"],
  },
  colors: {
    ring: "hsl(var(--color-ring) / <alpha-value>)",
    border: "hsl(var(--color-border) / <alpha-value>)",
    foreground: "hsl(var(--color-foreground) / <alpha-value>)",
    background: "hsl(var(--color-background) / <alpha-value>)",
  },
  keyframes: {
    variant6ExitTop: {
      '0%':   { opacity: 0, transform: 'scale(0.9) translateY(100px)' },
      '20%':  { opacity: 1, transform: 'scale(1) translateY(0)' },
      '60%':  { opacity: 1, transform: 'scale(1) translateY(0)' },
      '100%': { opacity: 0, transform: 'scale(1) translateY(-200px)' }
    },
    variant4DropDown: {
      '0%':   { opacity: 0, transform: 'scale(0.9) translateY(-100px)' },
      '20%':  { opacity: 1, transform: 'scale(1) translateY(0)' },
      '70%':  { opacity: 1, transform: 'scale(1) translateY(0)' },
      '100%': { opacity: 0, transform: 'scale(0.8) translateY(100px)' }
    },
    frame1LeftRight: {
      '0%':   { opacity: 0, transform: 'scale(0.95) translateX(-100px)' },
      '20%':  { opacity: 1, transform: 'scale(1) translateX(0)' },
      '70%':  { opacity: 1, transform: 'scale(1) translateX(0)' },
      '100%': { opacity: 0, transform: 'scale(0.95) translateX(100px)' }
    }
  },
  animation: {
    variant6Effect: 'variant6ExitTop 3s ease-in-out',
    variant4Effect: 'variant4DropDown 3s ease-in-out',
    frame1Effect: 'frame1LeftRight 3s ease-in-out'
  }
}

  },
  plugins: [],
}
