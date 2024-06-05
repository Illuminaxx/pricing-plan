import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "dark-radial":
          "radial-gradient(100% 100% at 50% 100%, #0738B9 0%, #031953 100%)",
        "button-radial":
          "radial-gradient(100% 100% at 50% 100%, #07287E 0%, #1E6FFD 100%)",
        "card-radial":
          "radial-gradient(300% 100% at 50% 100%, #031953 0%, #1874FF 100%)",
        "main-card-linear":
          "linear-gradient(90deg, rgba(9, 89, 229, 0.5) 0%, rgba(9, 89, 229, 0.26) 100%)",
        "main-card-second-linear":
          "linear-gradient(180deg, rgba(9, 89, 229, 0.5) 0%, rgba(9, 89, 229, 0) 100%)",
        "main-icon-lienear":
          "linear-gradient(90deg, rgba(218,226,255,0.56) 0%, rgba(255,255,255,0.2) 100%)",
        "icon-linear":
          "linear-gradient(90deg, rgba(167,186,255,0.5) 0%, rgba(76,92,153,0.08) 100%)",
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
