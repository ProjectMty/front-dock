import { Form } from '@/components';

export default function ContactForm() {
  return (
    <section>
      <div className='bg-contact-banner bg-cover bg-no-repeat px-6 py-16'>
        <div className='mx-auto w-full bg-white px-12 text-base text-primary shadow-2xl lg:w-3/5'>
          <div className='flex justify-center'>
            <h3 className='p-8 text-center drop-shadow'>
              Feel free to contact us <br /> for any query.
            </h3>
          </div>
          <Form />
        </div>
      </div>
    </section>
  );
}
