import { Hero } from '@/components';
import { CoreValues, MissionVision, Sustainability } from '@/section';
import { NextSeo } from 'next-seo';

export default function AboutUsPage() {
  return (
    <>
      <NextSeo title='About Us | Front Dock' />
      <Hero image='bg-about-hero'>About Us</Hero>
      <MissionVision />
      <CoreValues />
      <Sustainability />
    </>
  );
}
