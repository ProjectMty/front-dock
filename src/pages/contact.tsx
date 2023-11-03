import { Hero } from '@/components';
import { ContactForm, Locations } from '@/section';
import BannerContact from '@/section/contact/banner-contact';
import { NextSeo } from 'next-seo';

export default function ContactPage() {
  return (
    <>
      <NextSeo title='Pricing | Front Dock' />
      <Hero image='bg-contact-hero'>Contact</Hero>
      <Locations />
      <BannerContact />
      <ContactForm />
    </>
  );
}
