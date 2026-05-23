/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/styles/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#312783',    // Orijinal Koyu Lacivert renginiz (Ana yazı ve kurumsal alanlar)
          orange: '#E94E1B',  // Orijinal Turuncu renginiz (Butonlar, dikkat çeken yerler)
          red: '#AE2C2B',     // Orijinal Bordo/Kırmızı renginiz (Vurgular ve detaylar)
        }
      }
    },
  },
  plugins: [],
}