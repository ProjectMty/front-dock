import { Hero } from '@/components';
import { ContactForm, Locations } from '@/section';
import BannerContact from '@/section/contact/banner-contact';

export default function Contact() {
  return (
    <>
      <Hero image='bg-contact-hero'>Contact</Hero>
      <Locations />
      <BannerContact />
      <ContactForm />
    </>
  );
}
