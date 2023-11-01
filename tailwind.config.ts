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
    extend: {
      backgroundImage: {
        'home-hero': "url('/assets/redesign/home/hero.png')",
        'home-banner': "url('/assets/redesign/home/banner.png')",
        'ecommerce-hero': "url('/assets/redesign/ecommerce/hero.png')",
        'ecommerce-banner': "url('/assets/redesign/ecommerce/banner.png')",
        'logistics-hero': "url('/assets/redesign/logistics/hero.png')",
        'logistics-banner': "url('/assets/redesign/logistics/banner.png')",
        'pricing-hero': "url('/assets/redesign/pricing/hero.png')",
        'pricing-banner': "url('/assets/redesign/pricing/banner.png')",
        'contact-hero': "url('/assets/redesign/contact/hero.png')",
        'contact-banner': "url('/assets/redesign/contact/banner.png')",
        'about-hero': "url('/assets/redesign/about/hero.png')",
        'about-banner': "url('/assets/redesign/about/banner.png')",
        'faq-hero': "url('/assets/redesign/faq/hero.png')",
      },
      fontFamily: {
        sans: ['var(--font-lato)'],
        montserrat: ['var(--font-montserrat)'],
      },
    },
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
