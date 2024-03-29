module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "very-dark-blue": "hsl(220, 13%, 13%)",
        "dark-grayish-blue": "hsl(219, 9%, 45%)",
        "grayish-blue": "hsl(220, 14%, 75%)",
        "light-grayish-blue": "hsl(223, 64%, 98%)",
        "orange": "hsl(26, 100%, 55%)",
        "pale-orange": "hsl(25, 100%, 94%)",
        "off-white": "hsl(45, 29%, 97%)",
        "light-box": "rgba(0,0,0,0.8)"
      },
      fontFamily: {
        "kumbh": "'Kumbh Sans', sans-serif"
      }
    },
    container: {
      center: true,
      padding: "1rem",
      lg: "1260px",
      xl: "1260px",
      "2xl": "1260px"
    }
  },
  plugins: [],
}