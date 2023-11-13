import { Footer, Header } from '@/components';
import { Lato, Montserrat } from 'next/font/google';
import { PropsWithChildren } from 'react';

const lato = Lato({
  subsets: ['latin'],
  weight: ['100', '300', '400', '700', '900'],
  variable: '--font-lato',
  display: 'swap',
  preload: true,
});

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-montserrat',
  display: 'swap',
  preload: true,
});

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <main className={`${lato.variable} ${montserrat.variable} w-full font-sans`}>
      <Header />
      {children}
      <div id='recaptcha-container' className='h-[0px] w-[0px]' />
      <Footer />
    </main>
  );
}
