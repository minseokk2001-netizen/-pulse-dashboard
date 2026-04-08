/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        gpt: { DEFAULT: "#E24B4A", light: "#FCEBEB", dark: "#791F1F" },
        claude: { DEFAULT: "#378ADD", light: "#E6F1FB", dark: "#0C447C" },
        gemini: { DEFAULT: "#7F77DD", light: "#EEEDFE", dark: "#3C3489" },
        surface: "#FAFAF8",
        ink: "#1A1A1A",
        muted: "#6B6B6B",
        accent: "#2C3E50",
        pos: "#1D9E75",
        neg: "#E24B4A",
      },
      fontFamily: {
        serif: ["'Playfair Display'", "Georgia", "serif"],
        body: ["'Source Sans 3'", "system-ui", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
    },
  },
  plugins: [],
}
