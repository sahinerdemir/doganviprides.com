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
        background: "#08080A",
        surface: "#101014",
        "surface-light": "#18181F",
        border: "#26262E",
        gold: {
          50: "#FCF9EE",
          100: "#F7F0D4",
          200: "#EFE0A8",
          300: "#E5CD75",
          400: "#D4AF37",
          500: "#C59B27",
          600: "#AA7F1D",
          700: "#865F19",
          800: "#6F4D1B",
          900: "#5D401C",
        },
        vip: {
          black: "#08080A",
          dark: "#0F0F13",
          card: "#14141A",
          cardHover: "#1A1A24",
          accent: "#D4AF37",
          accentLight: "#E8C85E",
          silver: "#94A3B8",
          muted: "#64748B",
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gold-gradient': 'linear-gradient(135deg, #F9E79F 0%, #D4AF37 50%, #AA7F1D 100%)',
        'gold-shimmer': 'linear-gradient(90deg, #D4AF37 0%, #FFF3C4 50%, #D4AF37 100%)',
        'dark-glass': 'linear-gradient(180deg, rgba(20, 20, 26, 0.75) 0%, rgba(10, 10, 14, 0.85) 100%)',
      },
      boxShadow: {
        'gold-glow': '0 0 25px rgba(212, 175, 55, 0.25)',
        'gold-glow-lg': '0 0 45px rgba(212, 175, 55, 0.35)',
        'luxury': '0 20px 40px -15px rgba(0, 0, 0, 0.7)',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        serif: ['var(--font-playfair)', 'serif'],
      },
    },
  },
  plugins: [],
};
export default config;
