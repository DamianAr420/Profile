/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,html}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        background: "var(--color-bg)",
        foreground: "var(--color-fg)",
        muted: "var(--color-muted)",
        accent: "var(--color-accent)",
        text: "var(--color-fg)",
      },
      boxShadow: {
        soft: "0 4px 12px rgba(0, 0, 0, 0.1)",
        strong: "0 6px 30px rgba(0, 0, 0, 0.15)",
      },
    },
  },
  plugins: [],
};
