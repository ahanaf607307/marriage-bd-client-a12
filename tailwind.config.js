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
        'login': "url('/src/assets/loginReg/login.png')",
        'reg': "url('/src/assets/loginReg/reg.png')",
        'bannerAbout': "url('/src/assets/banner/aboutBanner.png')",
        'card1': "url('/src/assets/card/1.png')",
        'card2': "url('/src/assets/card/2.png')",
        'banner1': "url('/src/assets/banner/1.png')",
      },
      fontFamily: {
        'logoFont': [' "Rubik Vinyl", serif;'],
        'bannerFont': [' "Kanit", serif'],
        
      },
      animation: {
        blob: "blob-bounce 5s infinite ease",
      },
      keyframes: {
        "blob-bounce": {
          "0%": { transform: "translate(-100%, -100%) translate3d(0, 0, 0)" },
          "25%": { transform: "translate(-100%, -100%) translate3d(100%, 0, 0)" },
          "50%": { transform: "translate(-100%, -100%) translate3d(100%, 100%, 0)" },
          "75%": { transform: "translate(-100%, -100%) translate3d(0, 100%, 0)" },
          "100%": { transform: "translate(-100%, -100%) translate3d(0, 0, 0)" },
        },
      },
    }
  },
  plugins: [
   
    flowbite.plugin(),
  ],
};
