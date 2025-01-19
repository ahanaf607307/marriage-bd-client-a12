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
        'card1': "url('/src/assets/card/1.png')",
        'card2': "url('/src/assets/card/2.png')",
        'banner1': "url('/src/assets/banner/1.png')",
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
