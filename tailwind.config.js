/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./src/**/*.{js,jsx,ts,tsx}",
      "./.storybook/**/*.{js,jsx,ts,tsx,mdx}",
      "./src/**/*.stories.{js,jsx,ts,tsx,mdx}",
    ],
    theme: { extend: {} },
    plugins: [],
}

