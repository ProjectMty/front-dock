import { Hero } from '@/components';
import { LogisticProcess, Returns, ReturnsCost, SalesGrowing } from '@/section';

export default function Home() {
  return (
    <>
      <Hero image='assets/redesign/home-hero.png' right>
        Reverse <br />
        Logistics
      </Hero>
      <SalesGrowing />
      <Returns />
      <ReturnsCost />
      <LogisticProcess />
    </>
  );
}
