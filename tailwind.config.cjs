/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'tittle': '#1e2022',
      'subtitle': '#677788',
      'cards-tittle': '#001b4d',
      'bg-footer': '#001b4d',
      'buttons': '377dff',
      'text-orange': 'ea5e60',
    },
    fontFamily: {
      lato: ['Lato', 'sans-serif'],
    },
    fontSize: {
      tittleSize: '46px',
      subtitleSize: '24px',
      cardsTitleSize: '21px',
      normalText: '16px'
    }

  },
  plugins: [],
}
