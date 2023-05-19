import type { Options } from "$fresh/plugins/twind.ts";

const options: Omit<Options, "selfURL"> = {
  theme: {
    extend: {
      screens: {
        sm: "479px",
        ml: "767px",
        md: "991px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      colors: {
        primary: "#141414",
        "primary-dark": "#003232",
        "primary-light": "#C5FFE9",
        transparent: "transparent",
        "footer": "#141414",
        "subcolor": "#00e963",
        "highlight": "#08a84c",
        "highlight-light": "rgba(0,233,99,.25)",
        "navlink": "#1a1b1f",
        "navlink-hover": "rgba(26,27,31,.75)",
        "menu-btn-hover": "rgba(0,233,99,.17)",
        "input": "#999",
        "chk-active": "rgba(0,233,99,.2)",
        "select": "#f3f3f3",
        "card-highlight": "rgba(0,233,99,.17)",
        "card-highlight-hover": "rgba(0,233,99,.45)",
        "card-action": "rgba(0,233,99,.5)",
        "card-bg-highlight-hover": "#effcef",
        "list-item": "#e3e3e3",
        "button-blank": "#ededed",
        "posts": "rgba(221,221,221,.5)",
      },
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
        grotesk: ["Space Grotesk", "sans-serif"],
        manrope: ["Manrope", "sans-serif"],
        serif: ["serif"],
        "webflow-icons": ["webflow-icons"],
        "ibm-plex": ["IBM Plex Mono", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      boxShadow: {
        header: "0 0 13px rgba(0,0,0,.2)",
        "header-xl": "1px 1px 20px rgba(0,0,0,.05)",
        menu: "0 8px 50px rgba(0,0,0,.05)",
        "close-btn": "3px 5px 20px -3px rgba(0,0,0,.3)",
        "card": "0 0 20px 2px rgba(0,0,0,.07)",
        "assistancedesk": "inset 100px 0 100px 100px rgba(0,232,97,.32)",
        "feedbacks": "1px 1px 50px -10px rgba(0,0,0,.2)",
      },
      fontSize: {
        title: ["32px", "39px"],
      },
      borderColor: {
        input: "#ccc",
        focus: "#3898ec",
        checkbox: "#f0f0f0",
      },
      gridTemplateColumns: {
        "careers-cards-sm": "1fr 1fr",
        "careers-cards": "2fr 1.25fr 1.25fr 1.25fr",
        "Assistance": ".75fr 1fr",
        "marcas": "1fr 1fr 1fr",
        "marcasDesk": "1fr 1fr 1fr 1fr 1fr 1fr",
        "footerMobile": "1.5fr 1.75fr;",
        "footerDesk": ".25fr 1fr;",
        "postsMobile": "1fr",
      },
      backgroundSize: {
        "bgFirst": "88%",
        "bgFirstDesk": "50%",
      },
    },
  },
  preflight: (preflight) => ({
    ...preflight,
    "@property --num": {
      "syntax": "<integer>",
      "initial-value": "0",
      "inherits": "false",
    },
    // Prevent scroll when modal is open
    "body.no-scroll": {
      overflow: "hidden",
      height: "100vh",
    },
  }),
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
      "grid-column-gap": "35px",
      "grid-template-rows": "auto",
      "grid-template-columns": "1fr 1fr 1fr",
    },
    "grid-footer-third-mobile": {
      "grid-column-gap": "50px",
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
    "grid-posts-mobile": {
      "display": "grid",
      "grid-column-gap": "24px",
      "grid-row-gap": "24px",
      "grid-auto-columns": "1fr",
      "z-index": "1",
    },
    "grid-column-none": {
      "grid-column-gap": "0",
    },
    "grid-column-six": {
      "grid-column-gap": "16px",
    },
    "w-icon": {
      "speak": "none",
      " font-variant": "normal",
      "text-transform": "none",
      "-webkit-font-smoothing": "antialiased",
      "-moz-osx-font-smoothing": "grayscale",
      "font-style": "normal",
      "font-weight": "400",
      "line-height": "1",
    },
    "menu-xl": {
      display: "flex",
      "flex-direction": "column",
      "align-items": "start",
      "justify-content": "start",
      "background-color": "#fafafa",
      "margin-top": "0",
      "border-radius": "0",
      "height": "100vh",
      "top": "0",
      "left": "0",
      "padding-top": "140px",
      "transition": "left 100ms linear",
      "gap": "16px",
    },
    "menu-list-xl": {
      "width": "90%",
      "grid-column-gap": "16px",
      "grid-row-gap": "16px",
      "grid-template-rows": "auto auto auto auto auto auto",
      "grid-template-columns": "1fr",
      "grid-auto-columns": "1fr",
      "justify-items": "start",
      "display": "grid",
      "margin": "16px auto 0 auto",
    },
    "backdropFilter": {
      "backdrop-filter": "blur(6px)",
    },
    "chk-group": {
      "> input:checked + div": {
        "background-color": "#00e963",
        "border-color": "#00e963",
        "box-shadow": "0 0 15px -1px #00e963",
        "background-image":
          "url(https://d3e54v103j8qbb.cloudfront.net/static/custom-checkbox-checkmark.589d534424.svg)",
        "background-position": "50%",
        "background-repeat": "no-repeat",
        "background-size": "cover",
      },
    },
    "pattern-careers": {
      "background-position": "50%",
      "background-repeat": "repeat",
      "background-size": "20%",
      "background-attachment": "fixed",
      "background-clip": "border-box",
    },
    "container-hero": {
      "width": "100%",
      "max-width": "1296px",
      "margin-left": "auto",
      "margin-right": "auto",
      "padding-left": "24px",
      "padding-right": "24px",
    },
    "forPosts": {
      "backgroundImage": "linear-gradient(transparent,#000)",
    },
  },
};

export default options;
