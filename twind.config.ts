/** @type {import('$fresh/plugins/twind').Options} */
export default {
  theme: {
    extend: {
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      colors: {
        primary: "#2FD180",
        "primary-dark": "#003232",
        "primary-light": "#C5FFE9",
        transparent: "transparent",
        "footer": "#141414",
        "subcolor": "#00e963",
      },
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
        serif: ["serif"],
      },
      gridTemplateColumns: {
        "footerMobile": "1.5fr 1.75fr;",
        "footerDesk": ".25fr 1fr;",
      },
    },
  },
  plugins: {
    "grid-footer": {
      "display": "grid",
      "grid-auto-columns": "1fr",
      "grid-row-gap": "16px",
      "grid-column-gap": "16px",
      "object-fit": "fill",
      "grid-template-rows": "auto",
      "justify-content": "start",
      "align-items": "start",
    },
    "grid-footer-second": {
      "display": "grid",
      "grid-auto-columns": "1fr",
      "grid-row-gap": "16px",
      "grid-column-gap": "16px",
      "grid-template-rows": "auto",
      "grid-template-columns": "4.25fr 1fr",
      "align-content": "end",
    },
    "grid-footer-third": {
      "display": "grid",
      "grid-auto-columns": "1fr",
      "grid-row-gap": "16px",
      "grid-column-gap": "5px",
      "grid-template-rows": "auto",
      "grid-template-columns": "1fr 1fr 1fr",
    },
    "grid-footer-third-mobile": {
      "grid-column-gap": "40px",
      "grid-row-gap": "16px",
      "grid-template-rows": "auto",
      "grid-template-columns": "1fr 1fr 1fr",
      "grid-auto-columns": "1fr",
      "grid-auto-flow": "row",
      "align-content": "start",
      "justify-content": "space-around",
      "margin-left": "auto",
      "margin-right": "auto",
      "display": "grid",
    },
  },
};
