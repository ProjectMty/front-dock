/* eslint-disable jsx-a11y/label-has-associated-control */
import clsx from 'clsx';
import { useState } from 'react';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import FormInput from './form-input';

type ContactFormFields = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  service: string;
  subject: string;
};

const services = [
  {
    id: 'consolidate',
    description: 'Consolidate',
  },
  {
    id: 'repackage-and-ship',
    description: 'Repackage and ship',
  },
  {
    id: 'resale',
    description: 'Resale',
  },
  {
    id: 'donate',
    description: 'Donate',
  },
  {
    id: 'dispose',
    description: 'Dispose',
  },
];

export default function Form() {
  const errorMsg = () =>
    toast.error('There was an error sending your message, please try again.', {
      position: 'bottom-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored',
    });

  const { executeRecaptcha } = useGoogleReCaptcha();
  const [loading, setLoading] = useState(false);

  const methods = useForm<ContactFormFields>({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      service: '',
      subject: '',
    },
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = methods;

  const onSubmit: SubmitHandler<ContactFormFields> = async (data) => {
    console.log({ data });

    if (!executeRecaptcha) {
      return;
    }

    try {
      const token = await executeRecaptcha();
      if (!token) {
        return;
      }

      setLoading(true);

      // TODO: Uncomment before deploy
      /* const response = await fetch(`/api/contact-form`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
        },
        body: JSON.stringify({ ...data, token }),
      });

      if (!response.ok) {
        errorMsg();
      }

      await response.json(); */

      toast.success('Thank you, your message has been sent successfully.', {
        position: 'bottom-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      });
      reset();
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
      errorMsg();
    } finally {
      setLoading(false);
    }
  };

  return (
    <FormProvider {...methods}>
      <form
        className='flex w-full flex-col items-center space-y-2 rounded-2xl px-8 pb-8 lg:rounded-l-none'
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className='grid w-full grid-cols-1 md:grid-cols-2 md:gap-x-6'>
          <FormInput
            id='firstName'
            label='First Name'
            placeholder='First Name'
          />
          <FormInput id='lastName' label='Last Name' placeholder='Last Name' />
          <FormInput
            id='email'
            label='E-mail Address'
            placeholder='E-mail Address'
          />
          <FormInput
            id='phone'
            label='Phone Number'
            placeholder='Phone Number'
          />
        </div>
        <div className='group form-control w-full'>
          <label className='label text-primary' htmlFor='service'>
            <span
              className={clsx(
                'label-text text-base focus:text-secondary group-focus-within:text-secondary lg:text-lg 2xl:text-xl',
                errors.service && 'text-error group-focus-within:text-error',
              )}
            >
              Service
            </span>
          </label>
          <select
            id='service'
            className={clsx(
              'input input-bordered w-full rounded-none bg-[#fafafa] text-primary  group-focus-within:input-secondary placeholder:text-gray-400',
              errors.service && 'input-error group-focus-within:input-error',
            )}
            {...register('service', { required: true })}
          >
            <option value='' id='unknown' disabled>
              Select a service
            </option>
            {services.map(({ id, description }) => (
              <option key={id} id={id} value={id}>
                {description}
              </option>
            ))}
          </select>
        </div>

        <div className='group form-control w-full'>
          <label className='label text-primary' htmlFor='subject'>
            <span
              className={clsx(
                'label-text rounded-none text-base focus:text-secondary group-focus-within:text-secondary lg:text-lg 2xl:text-xl',
                errors.subject && 'text-error group-focus-within:text-error',
              )}
            >
              Message
            </span>
          </label>
          <textarea
            id='subject'
            placeholder='Enter message'
            className={clsx(
              'textarea textarea-bordered min-h-16 h-36 max-h-48 w-full resize-y rounded-none bg-[#fafafa] text-primary group-focus-within:textarea-secondary placeholder:text-gray-400',
              errors.subject &&
                'textarea-error group-focus-within:textarea-error',
            )}
            {...register('subject', { required: true })}
          />
        </div>
        <div className='h-3' />
        <button
          type='submit'
          className={clsx(
            'btn btn-secondary btn-block rounded-none py-0 text-base text-primary lg:w-56 lg:text-lg 2xl:text-xl',
            loading && 'loading',
          )}
          aria-disabled={loading}
        >
          Send
        </button>
      </form>
    </FormProvider>
  );
}
