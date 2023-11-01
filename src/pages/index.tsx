import { Hero } from '@/components';
import { Company, GetStarted, Services } from '@/section';

export default function HomePage() {
  return (
    <>
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
