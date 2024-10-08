
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      typography: ({ theme }) => ({
        lean: {
          css: {
            '--tw-prose-body': '#555555',
            '--tw-prose-headings': '#000000',
            '--tw-prose-lead': theme('colors.gray[400]'),
            '--tw-prose-bold': theme('colors.gray[900]'),
            '--tw-prose-counters': theme('colors.lime[400]'),
            '--tw-prose-bullets': theme('colors.lime[500]'),
            '--tw-prose-hr': theme('colors.gray[200]'),
            '--tw-prose-quotes': theme('colors.gray[500]'),
            '--tw-prose-quote-borders': theme('colors.lime[400]'),
            '--tw-prose-captions': theme('colors.gray[900]'),
            '--tw-prose-code': theme('colors.gray[900]'),
            '--tw-prose-pre-code': theme('colors.lime[200]'),
            '--tw-prose-pre-bg': 'theme(colors.gray[900])',
            '--tw-prose-th-borders': theme('colors.gray[900]'),
            '--tw-prose-td-borders': theme('colors.lime[400]'),
            '--tw-prose-invert-body': theme('colors.pink[200]'),
            '--tw-prose-invert-headings': theme('colors.white'),
            '--tw-prose-invert-lead': theme('colors.pink[300]'),
            '--tw-prose-invert-links': theme('colors.white'),
            '--tw-prose-invert-bold': theme('colors.white'),
            '--tw-prose-invert-counters': theme('colors.pink[400]'),
            '--tw-prose-invert-bullets': theme('colors.pink[600]'),
            '--tw-prose-invert-hr': theme('colors.pink[700]'),
            '--tw-prose-invert-quotes': theme('colors.pink[100]'),
            '--tw-prose-invert-quote-borders': theme('colors.pink[700]'),
            '--tw-prose-invert-captions': theme('colors.pink[400]'),
            '--tw-prose-invert-code': theme('colors.white'),
            '--tw-prose-invert-pre-code': theme('colors.pink[300]'),
            '--tw-prose-invert-pre-bg': 'rgb(0 0 0 / 50%)',
            '--tw-prose-invert-th-borders': theme('colors.pink[600]'),
            '--tw-prose-invert-td-borders': theme('colors.pink[700]'),
          },
        },
        DEFAULT: {
          css: {
            a: {
              color: theme('colors.gray[700]'),
              textDecoration: 'underline',
              '&:hover': {
                color: 'theme(colors.gray[400])',
                textDecoration: 'underline',
              },
            },
          },
        },
      }),
    },
    fontSize: {
      xs: "0.75rem",
      sm: "0.875rem",
      base: "1.1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "4rem",
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
