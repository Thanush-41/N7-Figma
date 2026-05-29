/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        bg: '#000d12',
        ink: '#E9F4F9',
        accent: '#00B4FD',
        accentDeep: '#003ACE',
        muted: '#586E84',
      },
      fontFamily: {
        sans: ['Archivo', 'Inter', 'ui-sans-serif', 'system-ui'],
        mono: ['"Chivo Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      maxWidth: {
        page: '1280px',
      },
      boxShadow: {
        card: '0 10px 40px -10px rgba(20, 22, 30, 0.08)',
      },
      keyframes: {
        floatY: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-8px)' } },
        fadeUp: { '0%': { opacity: 0, transform: 'translateY(20px)' }, '100%': { opacity: 1, transform: 'translateY(0)' } },
      },
      animation: {
        floatY: 'floatY 6s ease-in-out infinite',
        fadeUp: 'fadeUp .8s ease-out both',
      },
    },
  },
  plugins: [],
};
