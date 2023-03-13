import RootLayout from '@/layouts';
import { config } from '@fortawesome/fontawesome-svg-core';
import type { AppProps } from 'next/app';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

import '@fortawesome/fontawesome-svg-core/styles.css';
import '../styles/globals.css';
import 'react-toastify/dist/ReactToastify.min.css';
import { ToastContainer } from 'react-toastify';

config.autoAddCss = false;

export default function App({ Component, pageProps }: AppProps) {
  const element =
    process.env.NODE_ENV === 'production' ? 'recaptcha-container' : undefined;

  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY as string}
      language='en'
      container={{
        element,
        parameters: {
          badge: 'bottomleft', // optional, default undefined
        },
      }}
    >
      <RootLayout>
        <Component {...pageProps} />
        <ToastContainer className='text-base' />
      </RootLayout>
    </GoogleReCaptchaProvider>
  );
}
