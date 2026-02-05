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
        primary: {
          50: "#e6f2ff",
          100: "#b3d9ff",
          200: "#80bfff",
          300: "#4da6ff",
          400: "#1a8cff",
          500: "#007BFF",
          600: "#0066cc",
          700: "#004d99",
          800: "#003366",
          900: "#001a33",
        },
        accent: {
          50: "#e8f5ea",
          100: "#c8e6c9",
          200: "#a5d6a7",
          300: "#81c784",
          400: "#66bb6a",
          500: "#28A745",
          600: "#218838",
          700: "#1e7e34",
          800: "#155724",
          900: "#0d3315",
        },
        dark: {
          100: "#f8f9fa",
          200: "#e9ecef",
          300: "#dee2e6",
          400: "#ced4da",
          500: "#adb5bd",
          600: "#6c757d",
          700: "#495057",
          800: "#343a40",
          900: "#212529",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        heading: ["Poppins", "system-ui", "sans-serif"],
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        gradient: "gradient 8s ease infinite",
        "bounce-slow": "bounce 3s infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        gradient: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
      backgroundImage: {
        "hero-gradient":
          "linear-gradient(135deg, #007BFF 0%, #6f42c1 50%, #007BFF 100%)",
        "card-gradient":
          "linear-gradient(180deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 100%)",
      },
      boxShadow: {
        card: "0 4px 6px -1px rgba(0, 123, 255, 0.1), 0 2px 4px -1px rgba(0, 123, 255, 0.06)",
        "card-hover":
          "0 20px 25px -5px rgba(0, 123, 255, 0.2), 0 10px 10px -5px rgba(0, 123, 255, 0.04)",
        button: "0 4px 14px 0 rgba(0, 123, 255, 0.39)",
        "button-accent": "0 4px 14px 0 rgba(40, 167, 69, 0.39)",
      },
    },
  },
  plugins: [],
};

export default config;
