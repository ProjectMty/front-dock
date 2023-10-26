import { Hero } from '@/components';
import { Company, GetStarted, Services } from '@/section';

export default function Home() {
  return (
    <>
      <Hero image='assets/redesign/home-hero.png'>
        You sell, <br />
        we fulfill
      </Hero>
      <Company />
      <Services />
      <GetStarted />
    </>
  );
}
