import { Hero } from '@/components';
import { CoreValues, MissionVision, Sustainability } from '@/section';

export default function AboutUsPage() {
  return (
    <>
      <Hero image='bg-about-hero'>About Us</Hero>
      <MissionVision />
      <CoreValues />
      <Sustainability />
    </>
  );
}
