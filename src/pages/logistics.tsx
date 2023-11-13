import { Hero } from '@/components';
import { LogisticProcess, Returns, ReturnsCost, SalesGrowing } from '@/section';
import { NextSeo } from 'next-seo';

export default function LogisticsPage() {
  return (
    <>
      <NextSeo title='Reverse Logistics | Front Dock' />
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
