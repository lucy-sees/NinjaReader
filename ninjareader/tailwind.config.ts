import type { Config } from 'tailwindcss';

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // Custom Colors
      colors: {
        'maximum-blue-green': 'hsl(184, 50%, 60%)',
        'selective-yellow': 'hsl(42, 98%, 55%)',
        'eerie-black-70': 'hsla(240, 1%, 14%, 0.7)',
        'granite-gray': 'hsl(0, 0%, 40%)',
        'spanish-gray': 'hsl(0, 0%, 57%)',
        'oxford-blue': 'hsl(243, 95%, 8%)',
        'eerie-black': 'hsl(214, 10%, 14%)',
        'xiketic': 'hsl(240, 100%, 6%)',
        'white-1': 'hsl(0, 0%, 100%)',
        'white-2': 'hsl(0, 0%, 98%)',
        'white-10': 'hsla(0, 0%, 100%, 0.1)',
        'jet': 'hsl(225, 4%, 21%)',
      },
      // Custom Font Families
      fontFamily: {
        'work-sans': ['Work Sans', 'sans-serif'],
        'jost': ['Jost', 'sans-serif'],
      },
      // Custom Font Sizes
      fontSize: {
        'fs-1': '3.2rem',
        'fs-2': '2.4rem',
        'fs-3': '2.2rem',
        'fs-4': '2rem',
        'fs-5': '1.8rem',
        'fs-6': '1.4rem',
        'fs-7': '1.3rem',
        'fs-8': '1rem',
      },
      // Custom Font Weights
      fontWeight: {
        '400': '400',
        '500': '500',
        '700': '700',
      },
      // Custom Spacing
      spacing: {
        'section-padding': '60px',
      },
      // Custom Border Radius
      borderRadius: {
        'circle': '50%',
        'pill': '200px',
      },
      // Custom Transitions
      transitionDuration: {
        '1': '0.25s',
        '2': '0.5s',
      },
      transitionTimingFunction: {
        'cubic-in': 'cubic-bezier(0.51, 0.03, 0.64, 0.28)',
        'cubic-out': 'cubic-bezier(0.33, 0.85, 0.4, 0.96)',
        'cubic-anim': 'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
      },
    },
  },
  plugins: [],
} satisfies Config;