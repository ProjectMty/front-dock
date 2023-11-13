import { Hero } from '@/components';
import { Company, GetStarted, Services } from '@/section';
import { NextSeo } from 'next-seo';

export default function HomePage() {
  return (
    <>
      <NextSeo />
      <Hero image='bg-home-hero'>
        You sell, <br />
        we fulfill
      </Hero>
      <Company />
      <Services />
      <GetStarted image='bg-home-banner' />
    </>
  );
}
