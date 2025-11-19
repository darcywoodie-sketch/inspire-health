import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0CB4D0",
        accent: "#F7E250",
        dark: "#1a1a1a",
        light: "#f5f5f5",
        "section-bg": "#f7f9fb",
        "text-dark": "#333333",
        "social-blue": "#5EB3D9",
        "gradient-start": "#5EB3D9",
        "gradient-end": "#7EC6E8",
        "footer-start": "#1F3C47",
        "footer-end": "#2A4C5A",
      },
      fontFamily: {
        heading: ["var(--font-poppins)", "sans-serif"],
        body: ["var(--font-lato)", "sans-serif"],
      },
      borderRadius: {
        xl: "1rem",
        "card": "12px",
      },
      boxShadow: {
        soft: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        card: "0 2px 8px rgba(0, 0, 0, 0.05)",
        button: "0 2px 4px rgba(0, 0, 0, 0.15)",
        "button-hover": "0 4px 8px rgba(0, 0, 0, 0.2)",
      },
      backgroundImage: {
        "gradient-blue": "linear-gradient(180deg, #5EB3D9 0%, #7EC6E8 100%)",
        "gradient-footer": "linear-gradient(180deg, #1F3C47 0%, #2A4C5A 100%)",
      },
    },
  },
  plugins: [],
};
export default config;

