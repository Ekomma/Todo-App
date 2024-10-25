/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      textShadow: {
        sm: "0 1px 2px var(--tw-shadow-color)",
        DEFAULT: "0 2px 4px var(--tw-shadow-color)",
        lg: "0 2px 0px var(--tw-shadow-color)",
      },
      boxShadow: {
        sideShadow: "0px 0px 7px 2px #00000040",
        normalShadow: "0px 4px 4px rgba(0, 0, 0, 0.1)",
        innerShadow: "0px 4px 0px 0px #FFFFFF99 inset",
        buttonShadow: "0px 4px 4px 0px #00000040",
        buttonInnerShadow: "0px 3px 1px 0px #A8B5DE80 inset",
      },
      colors: {
        main: {
          100: "#071D55",
        },
        neutral: {
          100: "#F3F3F3",
          border: "#E7E7E7",
          grey: "#8D8D8D",
          inputBorder: "#CBCBCB",
        },
        primary: { 100: "#3556AB", border: "#123EB1" },
        yellow: {
          higlight: "#F2C94C",
        },
        red: {
          main: "#AB3535",
          border: "#720D0D",
        },
        green: { main: "#CDE53D", border: "#9EB031" },
      },
      height: {
        header: "7.69rem",
      },
      fontSize: {
        subHeader: [
          "1.56rem",
          {
            lineHeight: "26.46px",
          },
        ],
      },
      borderRadius: {
        ssm: "4px",
        lgg: "9px"
      },
      letterSpacing: {
        long: "0.115em"
      }
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "text-shadow": (value) => ({
            textShadow: value,
          }),
        },
        { values: theme("textShadow") }
      );
    }),
  ],
};
