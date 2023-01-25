import RootLayout from '@/layouts';
import { config } from '@fortawesome/fontawesome-svg-core';
import type { AppProps } from 'next/app';

import '@fortawesome/fontawesome-svg-core/styles.css';
import '../styles/globals.css';

config.autoAddCss = false;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RootLayout>
      <Component {...pageProps} />
    </RootLayout>
  );
}
