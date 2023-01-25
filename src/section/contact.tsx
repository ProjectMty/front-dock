import { ContactData, ContactForm } from '@/components';

export default function Contact() {
  return (
    <section>
      <ContactData />
      <div
        className='min-h-[688px] bg-cover bg-no-repeat px-4 pb-10'
        style={{
          backgroundImage: `url("assets/contact-background-mobile.png")`,
        }}
      >
        <div className='absolute -mt-8 min-h-[300px] w-[calc(100%-32px)] bg-primary'>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
