import { Hero } from '@/components';
import { BannerPricing, Price } from '@/section';

export default function PricingPage() {
  return (
    <>
      <Hero image='bg-pricing-hero'>Pricing</Hero>
      <Price />
      <BannerPricing />
    </>
  );
}
