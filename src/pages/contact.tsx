import { Hero } from '@/components';
import { ContactForm, Locations } from '@/section';
import BannerContact from '@/section/contact/banner-contact';

export default function Contact() {
  return (
    <>
      <Hero image='assets/redesign/home-hero.png'>Contact</Hero>
      <Locations />
      <BannerContact />
      <ContactForm />
    </>
  );
}
