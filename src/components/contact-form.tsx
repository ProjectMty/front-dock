import clsx from 'clsx';
import { useState } from 'react';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import { SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

type ContactFormFields = {
  name: string;
  email: string;
  phone: string;
  product: string;
  subject: string;
};

const products = [
  {
    id: 'consumer-electronics',
    description: 'Consumer electronics',
  },
  {
    id: 'toys',
    description: 'Toys',
  },
  {
    id: 'apparel',
    description: 'Apparel (clothing and footwear)',
  },
  {
    id: 'fashion-jewelry',
    description: 'Fashion jewelry',
  },
  {
    id: 'sporting-goods',
    description: 'Sporting goods',
  },
  {
    id: 'housewares',
    description: 'Housewares',
  },
  {
    id: 'baby-items',
    description: 'Baby items',
  },
  {
    id: 'food',
    description: 'Food',
  },
  {
    id: 'tools',
    description: 'Tools',
  },
  {
    id: 'small-machinery',
    description: 'Small machinery',
  },
  {
    id: 'small-appliances',
    description: 'Small appliances',
  },
  {
    id: 'furniture',
    description: 'Furniture',
  },
  {
    id: 'appliances',
    description: 'Appliances',
  },
];

export default function ContactForm() {
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

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormFields>({
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      product: '',
      subject: '',
    },
  });

  const onSubmit: SubmitHandler<ContactFormFields> = async (data) => {
    if (!executeRecaptcha) {
      return;
    }

    try {
      const token = await executeRecaptcha();
      if (!token) {
        return;
      }

      setLoading(true);
      const response = await fetch(`/api/contact-form`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
        },
        body: JSON.stringify({ ...data, token }),
      });

      if (!response.ok) {
        errorMsg();
      }

      await response.json();

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
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error(err);
      errorMsg();
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      className='flex w-full flex-col items-center space-y-2 rounded-2xl p-8 lg:rounded-l-none'
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className='group form-control w-full'>
        <label className='label' htmlFor='name'>
          <span
            className={clsx(
              'label-text text-base text-white focus:text-secondary group-focus-within:text-secondary lg:text-lg 2xl:text-xl',
              errors.name && 'text-error group-focus-within:text-error',
            )}
          >
            Name
          </span>
        </label>
        <input
          id='name'
          type='text'
          placeholder='Name'
          className={clsx(
            'input-bordered input w-full rounded-none text-black  group-focus-within:input-secondary placeholder:text-gray-400',
            errors.name && 'input-error group-focus-within:input-error',
          )}
          {...register('name', { required: true })}
        />
      </div>
      <div className='group form-control w-full'>
        <label className='label' htmlFor='email'>
          <span
            className={clsx(
              'label-text text-base text-white focus:text-secondary group-focus-within:text-secondary lg:text-lg 2xl:text-xl',
              errors.email && 'text-error group-focus-within:text-error',
            )}
          >
            Email
          </span>
        </label>
        <input
          id='email'
          type='email'
          placeholder='Email'
          className={clsx(
            'input-bordered input w-full rounded-none text-black  group-focus-within:input-secondary placeholder:text-gray-400',
            errors.email && 'input-error group-focus-within:input-error',
          )}
          {...register('email', { required: true })}
        />
      </div>
      <div className='group form-control w-full'>
        <label className='label' htmlFor='phone'>
          <span
            className={clsx(
              'label-text text-base text-white focus:text-secondary group-focus-within:text-secondary lg:text-lg 2xl:text-xl',
              errors.phone && 'text-error group-focus-within:text-error',
            )}
          >
            Phone
          </span>
        </label>
        <input
          id='phone'
          type='text'
          placeholder='Phone'
          className={clsx(
            'input-bordered input w-full rounded-none text-black  group-focus-within:input-secondary placeholder:text-gray-400',
            errors.phone && 'input-error group-focus-within:input-error',
          )}
          {...register('phone', { required: true })}
        />
      </div>
      <div className='group form-control w-full'>
        <label className='label' htmlFor='product'>
          <span
            className={clsx(
              'label-text text-base text-white focus:text-secondary group-focus-within:text-secondary lg:text-lg 2xl:text-xl',
              errors.product && 'text-error group-focus-within:text-error',
            )}
          >
            Product
          </span>
        </label>
        <select
          className={clsx(
            'input-bordered input w-full rounded-none text-black  group-focus-within:input-secondary placeholder:text-gray-400',
            errors.product && 'input-error group-focus-within:input-error',
          )}
          {...register('product', { required: true })}
        >
          <option value='' id='placeholder' disabled>
            Product category
          </option>
          {products.map(({ id, description }) => (
            <option key={id} id={id} value={id}>
              {description}
            </option>
          ))}
        </select>
      </div>

      <div className='group form-control w-full'>
        <label className='label' htmlFor='subject'>
          <span
            className={clsx(
              'label-text rounded-none text-base text-white focus:text-secondary group-focus-within:text-secondary lg:text-lg 2xl:text-xl',
              errors.subject && 'text-error group-focus-within:text-error',
            )}
          >
            Comments
          </span>
        </label>
        <textarea
          id='subject'
          placeholder='Comments'
          className={clsx(
            'textarea-bordered textarea min-h-16 h-36 max-h-48 w-full resize-y rounded-none text-black group-focus-within:textarea-secondary placeholder:text-gray-400',
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
          'btn-secondary btn-block btn rounded-none py-0 text-base text-primary lg:w-56 lg:text-lg 2xl:text-xl',
          loading && 'loading',
        )}
        disabled={loading}
      >
        Send
      </button>
    </form>
  );
}
