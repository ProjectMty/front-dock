import { Hero } from '@/components';
import { LogisticProcess, Returns, ReturnsCost, SalesGrowing } from '@/section';
import { NextSeo } from 'next-seo';

export default function LogisticsPage() {
  return (
    <>
      <NextSeo title='Returns Management | Front Dock' />
      <Hero image='bg-logistics-hero' right>
        Returns <br />
        Management
      </Hero>
      <SalesGrowing />
      <Returns />
      <ReturnsCost />
      <LogisticProcess />
    </>
  );
}
