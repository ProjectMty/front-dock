import { Hero } from '@/components';
import { BannerContact, ContactForm, Locations } from '@/section';
import { NextSeo } from 'next-seo';

export default function ContactPage() {
  return (
    <>
      <NextSeo title='Contact Us | Front Dock' />
      <Hero image='bg-contact-hero'>Contact Us</Hero>
      <Locations />
      <BannerContact />
      <ContactForm />
    </>
  );
}
