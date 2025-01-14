import flowbite from "flowbite-react/tailwind";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      backgroundImage: {
        'banner': "url('/src/assets/banner/bannerCompleate.png')",
        'footer-texture': "url('/img/footer-texture.png')",
      },
      fontFamily: {
        'logoFont': [' "Rubik Vinyl", serif;'],
        'bannerFont': [' "Kanit", serif'],
        
      },
    }
  },
  plugins: [
   
    flowbite.plugin(),
  ],
};
