import { ContactData, ContactForm } from '@/components';

export default function Contact() {
  return (
    <section>
      <ContactData />
      <div
        className='bg-cover bg-no-repeat px-4 pb-4'
        style={{
          backgroundImage: `url("assets/contact-background-mobile.png")`,
        }}
      >
        <div className='mx-auto w-full -translate-y-8 bg-primary text-base shadow-2xl lg:w-1/2 lg:-translate-y-14 2xl:w-1/3 2xl:-translate-y-20'>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
