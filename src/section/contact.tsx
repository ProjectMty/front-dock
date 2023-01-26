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
        <div className='w-full -translate-y-8 bg-primary text-base shadow-2xl'>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
