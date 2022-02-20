const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  variants: {
    scrollbars: ["rounded"],
  },
  theme: {
    ripple: (theme) => ({
      colors: theme("colors"),
    }),
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
    require("postcss-import"),
    require("tailwindcss"),
    require("autoprefixer"),
    require("tailwind-scrollbar"),
  ],
};
