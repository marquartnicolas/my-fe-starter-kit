const defaultTheme = require("tailwindcss/defaultTheme")
const colors = require("tailwindcss/colors")

module.exports = {
  purge: { content: ["./public/**/*.html", "./src/**/*.vue"] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true
    },
    fontFamily: {
      sans: ["Inter", ...defaultTheme.fontFamily.sans],
      stock: [defaultTheme.fontFamily.sans]
    },
    extend: {
      colors: {
        gray: colors.blueGray,
        indigo: colors.indigo,
        truegray: colors.gray,
        fuchsia: colors.fuchsia,
        amber: colors.amber,
        cyan: colors.cyan,
        emerald: colors.emerald
      }
    }
  },
  variants: { colors: ["hover"] },
  plugins: [require("@tailwindcss/forms"), require("daisyui"), require("@tailwindcss/typography")]
}
