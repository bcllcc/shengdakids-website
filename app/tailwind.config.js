/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // 品牌色彩系统 (Neo-brutalism / Streetwear)
        brand: {
          primary: '#FFD700',      // 标志性明黄
          'primary-light': '#FFE44D',
          'primary-dark': '#E6C200',
          accent: '#FF3366',       // 强调色-潮酷粉/红
          'accent-hover': '#E62E5C',
          background: '#FFFFFF',   // 背景白
          'bg-light': '#F4F4F4',   // 浅灰背景
          text: '#000000',         // 纯黑主文字
          'text-secondary': '#333333',
          'text-muted': '#888888',
          border: '#000000',       // 强烈的黑色描边
        },
        // shadcn兼容色
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
          DEFAULT: "hsl(var(--destructive) / <alpha-value>)",
          foreground: "hsl(var(--destructive-foreground) / <alpha-value>)",
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
      fontFamily: {
        sans: ['"Outfit"', '"Inter"', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['"Arial Black"', '"Impact"', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'hero': ['3.5rem', { lineHeight: '1.1', fontWeight: '700' }],
        'hero-mobile': ['2.5rem', { lineHeight: '1.15', fontWeight: '700' }],
        'section': ['2rem', { lineHeight: '1.2', fontWeight: '600' }],
        'card-title': ['1.25rem', { lineHeight: '1.3', fontWeight: '600' }],
      },
      spacing: {
        'section': '6rem',
        'section-mobile': '4rem',
      },
      maxWidth: {
        'content': '1200px',
      },
      borderRadius: {
        xl: "calc(var(--radius) + 4px)",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        'card': '4px 4px 0px rgba(0, 0, 0, 1)',
        'card-hover': '8px 8px 0px rgba(0, 0, 0, 1)',
        'button': '4px 4px 0px rgba(0, 0, 0, 1)',
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.25, 0.1, 0.25, 1)',
        'bounce-out': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
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
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "scale-in": {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        "marquee": {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        "tilt": {
          "0%, 100%": { transform: "rotate(0deg)" },
          "25%": { transform: "rotate(1deg)" },
          "75%": { transform: "rotate(-1deg)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in-up": "fade-in-up 0.6s cubic-bezier(0.25, 0.1, 0.25, 1) forwards",
        "fade-in": "fade-in 0.4s ease-out forwards",
        "scale-in": "scale-in 0.3s ease-out forwards",
        "marquee": "marquee 35s linear infinite",
        "tilt": "tilt 3s infinite ease-in-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
