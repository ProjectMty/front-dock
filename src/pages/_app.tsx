import RootLayout from '@/layouts';
import { config } from '@fortawesome/fontawesome-svg-core';
import { DefaultSeo } from 'next-seo';
import { type AppProps } from 'next/app';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import { ToastContainer } from 'react-toastify';

import '@fortawesome/fontawesome-svg-core/styles.css';
import 'react-toastify/dist/ReactToastify.min.css';
import '../styles/globals.css';

config.autoAddCss = false;

const frontDockSiteName = 'Front Dock';

export default function App({ Component, pageProps }: AppProps) {
  const element = process.env.NODE_ENV === 'production' ? 'recaptcha-container' : undefined;

  return (
    <>
      <DefaultSeo
        title={frontDockSiteName}
        description='Your e-Commerce returns made easy!'
        canonical='https://www.frontdock.com/'
        openGraph={{
          url: 'https://www.frontdock.com/',
          title: frontDockSiteName,
          description: 'Your e-Commerce returns made easy!',
          siteName: frontDockSiteName,
        }}
        additionalMetaTags={[
          {
            name: 'viewport',
            content: 'width=device-width, initial-scale=1.0',
          },
          {
            name: 'keywords',
            content: 'E-commerce, returns',
          },
          { name: 'author', content: frontDockSiteName },
        ]}
      />
      <GoogleReCaptchaProvider
        reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY as string}
        language='en'
        container={{
          element,
          parameters: {
            badge: 'bottomleft', // optional, default undefined
          },
        }}
        scriptProps={{
          defer: true,
          async: true,
        }}
      >
        <RootLayout>
          <Component {...pageProps} />
          <ToastContainer className='text-base' />
        </RootLayout>
      </GoogleReCaptchaProvider>
    </>
  );
}
