const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  purge: ["./pages/**/*.js", "./components/**/*.js"],
  theme: {
    extend: {
      colors: {
        twitter: "rgba(0,145,255,.1)",
        insta: "rgba(198,104,207,.2)",
        dribble: "rgba(198,104,207,.2)",
        github: "rgba(62,62,62,.1)",
        "transparent-1": "rgba(255, 255, 255, 0.1)",
        night: {
          300: "#b5b5b5",
          600: "#292933",
          700: "#0f131a",
          800: "#0a0a0a",
        },
        pink: {
          500: "#D70652",
        },
      },
      fontFamily: {
        sans: ["Space Grotesk", ...defaultTheme.fontFamily.sans],
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#fff',
            blockquote: {
              color: '#fff'
            },
            strong: {
              color: '#fff'
            }
          }
        }
      }
    },
  },
  variants: {
    scale: ["responsive", "hover", "focus", "active"],
    textOpacity: ["responsive", "hover", "focus", "group-hover"],
  },
  plugins: [require('@tailwindcss/typography'),],
}
