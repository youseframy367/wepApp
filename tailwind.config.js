/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./componnt/**/*.{js,ts,jsx,tsx,mdx}", // تأكد من اسم الفولدر لديك
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // ربط كلاسات Tailwind بالـ CSS Variables التي عرفتها في الـ Layout
        cairo: ["var(--font-cairo)", "sans-serif"],
        inter: ["var(--font-inter)", "sans-serif"],
        montserrat: ["var(--font-montserrat)", "sans-serif"],
      },
      colors: {
        primary: {
          DEFAULT: "#FCD570",
          dark: "#DB9D39",
        },
      },
    },
  },
  plugins: [],
};