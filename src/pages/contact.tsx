import { Hero } from '@/components';
import { ContactForm, Locations } from '@/section';
import BannerContact from '@/section/contact/banner-contact';
import { NextSeo } from 'next-seo';

export default function ContactPage() {
  return (
    <>
      <NextSeo title='Contact | Front Dock' />
      <Hero image='bg-contact-hero'>Contact Us</Hero>
      <Locations />
      <BannerContact />
      <ContactForm />
    </>
  );
}
