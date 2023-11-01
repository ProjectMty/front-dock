import { Hero } from '@/components';
import { BannerPricing, Price } from '@/section';

export default function Pricing() {
  return (
    <>
      <Hero image='assets/redesign/home-hero.png'>Pricing</Hero>
      <Price />
      <BannerPricing />
    </>
  );
}
