/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
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
        // Core Brand Colors - Sky Blue Family
        'brand-primary': '#0ea5e9',      // Sky 500 - Primary sky blue
        'brand-secondary': '#3b82f6',    // Blue 500
        'brand-accent': '#6366f1',       // Indigo 500
        
        // Legacy compatibility - mapping to new colors
        'neutral-dark': '#1e293b',       // Slate 800
        'neutral-medium': '#64748b',     // Slate 500
        'neutral-light': '#f1f5f9',      // Slate 100
        'neutral-white': '#ffffff',      // White
        
        // Property-Specific Accent Colors
        'property-hotels': '#3b82f6',    // Blue 500
        'property-resorts': '#10b981',   // Emerald 500
        'property-hostels': '#8b5cf6',   // Violet 500
        'property-rentals': '#f97316',   // Orange 500
        'property-apartments': '#06b6d4', // Cyan 500
        
        // Additional chart colors
        'chart-1': '#0ea5e9',           // Sky 500
        'chart-2': '#3b82f6',           // Blue 500
        'chart-3': '#06b6d4',           // Cyan 500
        'chart-4': '#8b5cf6',           // Violet 500
        'chart-5': '#6366f1',           // Indigo 500
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
}
