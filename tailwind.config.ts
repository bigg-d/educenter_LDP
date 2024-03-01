import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        desktop: "1536px",
        laptop: "1440px",
        tablet: "768px",
      },
      colors: {
        mainBlue: "#3E65FE",
        mainViolet: "#D23CFF",
        label: "#433753",
        mainGray: "#ECEDF2",
        mainPink: "#ff7fce",
        mainOrange: "#fc956e",
        yellow: "#FEC83C",
      },
      keyframes: {
        fadeIn: {
          "0%": {
            opacity: "0.8",
            transform: "translateY(20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0px)",
          },
        },
        "text-1": {
          "0%,3%,22%, 100%": {
            fontWeight: "600",
            boxShadow: "none",
            color: "#3E65FE",
            border: "2px solid #3E65FE",
          },
          "5%, 20%": {
            fontWeight: "bold",
            boxShadow:
              "rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;",
            // color: "white",
            // background: "#3E65FE",
            // transform: "scale(1.01)",
          },
        },
        "text-2": {
          "0%,23%,48%, 100%": {
            fontWeight: "600",
            boxShadow: "none",
            color: "rgb(16 185 129)",
            border: "2px solid rgb(16 185 129)",
          },
          "25%, 45%": {
            fontWeight: "bold",
            boxShadow:
              "rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;",
          },
        },
        "text-3": {
          "0%,63%, 87%, 100%": {
            fontWeight: "600",
            color: "#D23CFF",
            boxShadow: "none",
            border: "2px solid #D23CFF",
          },
          "65%,85%": {
            fontWeight: "bold",
            boxShadow:
              "rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;",
          },
        },
        "img-service-1": {
          "0%,22%, 100%": {
            filter: "grayscale(80%)",
            transform: "translateY(0px) scale(1)",
            zIndex: "1",
          },
          "5%, 18%": {
            filter: "grayscale(0%)",
            transform: "translateY(4px) scale(1.2)",
            zIndex: "2",
          },
        },
        "img-service-2": {
          "0%,18%,45%, 100%": {
            filter: "grayscale(80%)",
            transform: "translateY(0px) scale(1)",
            zIndex: "1",
          },
          "27%, 40%": {
            filter: "grayscale(0%)",
            transform: "translateY(4px) scale(1.2)",
            zIndex: "2",
          },
        },
        "img-service-3": {
          "0%,40%,65%, 100%": {
            filter: "grayscale(80%)",
            transform: "translateY(0px) scale(1)",
            zIndex: "1",
          },
          "45%, 60%": {
            filter: "grayscale(0%)",
            transform: "translateY(4px) scale(1.2)",
            zIndex: "2",
          },
        },
      },
      animation: {
        fadeIn: "fadeIn ease 1.2s",
        "text-1": "text-1 10s  infinite",
        "text-2": "text-2 10s  infinite",
        "text-3": "text-3 10s  infinite",
        "img-service-1": "img-service-1 20s infinite",
        "img-service-2": "img-service-2 20s infinite",
        "img-service-3": "img-service-3 20s infinite",
      },
      backgroundImage: {
        mainGradient: "linear-gradient(90.57deg, #3E65FE 0%, #D23CFF 100%)",
        "mainGradient-disabled":
          "linear-gradient(90deg, rgba(27,73,254,0.5) 15%, rgba(199,11,255,0.5) 100%)",
        secondaryGradient:
          "linear-gradient(90deg, rgba(255,127,206,1) 0%, rgba(252,149,110,1) 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
