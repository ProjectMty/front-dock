import { Form } from '@/components';

export default function ContactForm() {
  return (
    <section>
      <div
        className='bg-cover bg-no-repeat p-6'
        style={{
          backgroundImage: `url("assets/contact-background-mobile.png")`,
        }}
      >
        <div className='mx-auto w-full bg-white text-base text-primary shadow-2xl lg:w-3/4'>
          <div className='flex justify-center'>
            <h3 className='max-w-lg p-8 text-center drop-shadow'>
              Feel free to contact us for any query.
            </h3>
          </div>
          <Form />
        </div>
      </div>
    </section>
  );
}
