import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import { SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

export default function SubscriptionForm() {
  const { executeRecaptcha } = useGoogleReCaptcha();
  const {
    reset,
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<{ subscription: string }>({
    progressive: true,
  });

  const errorMsg = () =>
    toast.error('There was an error sending your subscription, please try again.', {
      position: 'bottom-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored',
    });

  const onSubmit: SubmitHandler<{
    subscription: string;
  }> = async (data) => {
    try {
      if (!executeRecaptcha) {
        return;
      }
      const token = await executeRecaptcha();
      if (!token) {
        return;
      }

      const response = await fetch(`/api/subscription`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
        },
        body: JSON.stringify({ email: data.subscription, token }),
      });

      if (!response.ok) {
        errorMsg();
        return;
      }

      await response.json();
      toast.success('Thank you, your subscription has been sent successfully.', {
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
    } catch {
      errorMsg();
    }
  };

  return (
    <form className='flex bg-white p-1' onSubmit={handleSubmit(onSubmit)}>
      <input
        type='email'
        placeholder='Enter email address'
        className='input rounded-none text-primary'
        {...register('subscription', {
          required: true,
        })}
      />
      <button
        type='submit'
        className='btn btn-secondary min-w-[105px] rounded-none capitalize text-black'
        disabled={isSubmitting}
        aria-disabled={isSubmitting}
      >
        {isSubmitting ? <span className='loading loading-spinner' /> : <span>Subscribe</span>}
      </button>
    </form>
  );
}
