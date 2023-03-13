import { Footer, Navbar } from '@/components';
import { Lato } from '@next/font/google';
import Head from 'next/head';

const lato = Lato({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  variable: '--font-inter',
});

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <>
      <Head>
        <meta charSet='UTF-8' key='charset' />
        <meta
          name='viewport'
          content='width=device-width,initial-scale=1'
          key='viewport'
        />
        <title>Front Dock</title>
        <meta name='description' content='Your e-Commerce returns made easy!' />
        <link rel='canonical' href='https://frontdock.luiscarrillo.mx/' />
        <meta property='og:type' content='website' />
        <meta property='og:title' content='Front Dock' />
        <meta
          property='og:description'
          content='Your e-Commerce returns made easy!'
        />
        <meta property='og:image' content='LINK TO THE IMAGE FILE' />
        <meta property='og:url' content='https://frontdock.luiscarrillo.mx/' />
        <meta property='og:site_name' content='Front Dock' />
        <meta name='twitter:title' content='TITLE OF POST OR PAGE' />
        <meta
          name='twitter:description'
          content='Your e-Commerce returns made easy!'
        />
        <meta name='twitter:image' content='LINK TO IMAGE' />
        <meta name='twitter:site' content='@front-dock' />
        <meta name='twitter:creator' content='@front-dock' />
        <meta name='robots' content='index, follow' />
      </Head>
      <Navbar />
      <main className={lato.className}>{children}</main>
      <div id='recaptcha-container' className='h-[0px] w-[0px]' />
      <Footer />
    </>
  );
}
