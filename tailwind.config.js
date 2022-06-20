/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1020px",
      xl: "1440px",
    },
    extend: {
      fontFamily: {
        sans: ["Rubik", ["sans-serif"]],
        serif: ["monument-extended", "serif"],
        mono: ["Forgotten\\ Futurist"],
      },
      borderColor: {
        primary: "var(--color-bg-primary)",
      },

      backgroundColor: {
        primary: "var(--color-bg-primary)",
        secondary: "var(--color-bg-secondary)",
        button: "var(--color-bg-button)",
        footer: "var(--color-bg-footer)",
        title: "var(--color-bg-title)",
        shape: "var(--color-bg-shape)",
      },
      textColor: {
        accent: "var(--color-text-accent)",
        primary: "var(--color-text-primary)",
        secondary: "var(--color-text-secondary)",
        btnText: "var(--color-bg-secondary)",
        body: "#2C2C2C",
        card: "var(--color-bg-card)",
      },

      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--gradient-color-stops))",
      },
    },
  },
  plugins: [],
};
