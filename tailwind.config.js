const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  theme: {
    extend: {
      colors: {
        "transparent-1": "rgba(255, 255, 255, 0.1)",
        night: {
          700: "#121212",
          800: "#0a0a0a",
        },
        pink: {
          500: "#D70652",
        },
      },
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {
    scale: ["responsive", "hover", "focus", "active"],
  },
  plugins: [require("@tailwindcss/ui")],
}
