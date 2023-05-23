/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      transform: ['peer-focus', 'peer-placeholder-shown'],
      scale: ['peer-focus', 'peer-placeholder-shown'],
      translate: ['peer-focus', 'peer-placeholder-shown'],
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

