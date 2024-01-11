/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      screens: {
        'course-sm': '460px',
        'course-md': '760px',
        'course-lg': '960px',
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#502048",
          "secondary": "#FB7818",
          "accent": "#f7a376",
          "neutral": "#4B5563",
          // "base-100": "#ede2ee",
          "info": "#78bbf2",
          // "success": "#1b8d69",
          // "warning": "#e69e1a",
          // "error": "#e66074",


        },
      },
    ],
  },
  plugins: [require("daisyui")]
}
