import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        'poppins': ["Poppins", "sans - serif"],
        'inter': ["Inter", "sans - serif"],
      },
      boxShadow: {
        '3xl': '0px 8px 16px 0px #0000000D',
        '4xl': '0px 8px 16px 0px #00000033'
      },
      colors: {
        light_bg: "#F7F7F8",
        dark_bg: "#292B32",
        dark_cardBg:"#818A97"
      },
      borderColor: {
        light_border: "#A9ACB2",
        dark_border: "#818A97",
      },
      backgroundImage: {
        "dark-bg-gradient": "linear-gradient(180deg,#18282A, #221A2C)",
        "light-bg-gradient": "linear-gradient(180deg, #F9F8FF, #F3F9FF)"
        // background: linear - gradient(180deg, #F9F8FF 0 %, #F3F9FF 100 %);
      },
      screens: {
        xxs:"350px",
        xs:"475px",
      }
    },
  },
  plugins: [],
};
export default config;
