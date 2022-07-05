module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        title: "Bebas Neue, cursive",
        content: "Prompt, sans-serif",
      },
      minHeight: {
        "body": "calc(100vh - 176px - 74px)",
      },
    },
  },
  plugins: [],
};
