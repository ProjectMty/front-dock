import {
  Company,
  Contact,
  Faq,
  Hero,
  Locations,
  Returns,
  Services,
} from '@/section';

export default function Home() {
  return (
    <>
      <Hero />
      <Company />
      <Returns />
      <Services />
      <Faq />
      <Locations />
      <Contact />
    </>
  );
}
