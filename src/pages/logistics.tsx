import { Hero } from '@/components';
import { LogisticProcess, Returns, ReturnsCost, SalesGrowing } from '@/section';

export default function Home() {
  return (
    <>
      <Hero image='bg-logistics-hero' right>
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
