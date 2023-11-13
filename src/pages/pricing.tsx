import { Hero } from '@/components';
import { BannerPricing, Price } from '@/section';
import { NextSeo } from 'next-seo';

export default function PricingPage() {
  return (
    <>
      <NextSeo title='Pricing | Front Dock' />
      <Hero image='bg-pricing-hero'>Pricing</Hero>
      <Price />
      <BannerPricing />
    </>
  );
}
