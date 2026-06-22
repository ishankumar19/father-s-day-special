/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // ---- Brand palette --------------------------------------------
        // Rename / retint these if you'd like a different mood — every
        // color in the site is pulled from this palette, nowhere else.
        navy: {
          DEFAULT: '#14213D',
          light: '#1F3158',
          dark: '#0B1426',
        },
        cream: {
          DEFAULT: '#FBF4E6',
          dark: '#F3E6CC',
        },
        gold: {
          DEFAULT: '#C7973B',
          light: '#E3C27A',
          dark: '#9C7327',
        },
        brown: {
          DEFAULT: '#7A5230',
          light: '#9C6F47',
        },
        warmwhite: '#FFFCF6',
        heart: '#B23A48',
      },
      fontFamily: {
        // Display serif for headlines — set in index.html <link> tags
        display: ['"Playfair Display"', 'serif'],
        // Clean body sans for readability
        body: ['"Inter"', 'sans-serif'],
        // Handwritten accent font for the letter + personal touches
        script: ['"Caveat"', 'cursive'],
      },
      keyframes: {
        floatUp: {
          '0%': { transform: 'translateY(0) rotate(0deg)', opacity: '0' },
          '10%': { opacity: '1' },
          '90%': { opacity: '1' },
          '100%': { transform: 'translateY(-110vh) rotate(20deg)', opacity: '0' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        spinSlow: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        pulseSoft: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.06)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-1deg)' },
          '50%': { transform: 'rotate(1deg)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        float: 'floatUp linear forwards',
        'fade-up': 'fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in': 'fadeIn 1s ease forwards',
        'spin-slow': 'spinSlow 8s linear infinite',
        'pulse-soft': 'pulseSoft 2.4s ease-in-out infinite',
        wiggle: 'wiggle 4s ease-in-out infinite',
        shimmer: 'shimmer 3s linear infinite',
      },
      boxShadow: {
        card: '0 10px 30px -10px rgba(20, 33, 61, 0.35)',
        gold: '0 0 0 1px rgba(199,151,59,0.4), 0 8px 24px -8px rgba(199,151,59,0.5)',
      },
    },
  },
  plugins: [],
}
