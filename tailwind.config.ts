import headlessui from '@headlessui/tailwindcss';
import twAspectRatio from '@tailwindcss/aspect-ratio';
import twContainerQueries from '@tailwindcss/container-queries';
import twForms from '@tailwindcss/forms';
import twTypography from '@tailwindcss/typography';
import daisyui from 'daisyui';

import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [
    headlessui,
    twAspectRatio,
    twContainerQueries,
    twForms,
    twTypography,
    daisyui,
  ],
  daisyui: {
    theme: true,
    themes: [
      {
        mytheme: {
          primary: '#041636',
          secondary: '#FFCA2A',
          accent: '#92A2AB',
          neutral: '#000000',
          'base-100': '#FFFFFF',
          info: '#0288D1',
          success: '#2E7D32',
          warning: '#ED6C02',
          error: '#D32F2F',
        },
      },
    ],
  },
};

export default config;
