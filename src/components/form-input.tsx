import clsx from 'clsx';
import { useFormContext } from 'react-hook-form';

type FormInputProps = {
  id: string;
  label: string;
  placeholder: string;
};

export default function FormInput({ id, label, placeholder }: FormInputProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className='group form-control w-full'>
      <label className='label' htmlFor={id}>
        <span
          className={clsx(
            'label-text text-base focus:text-secondary group-focus-within:text-secondary lg:text-lg 2xl:text-xl',
            !!errors[id] && 'text-error group-focus-within:text-error',
          )}
        >
          {label}
        </span>
      </label>
      <input
        id={id}
        type='text'
        placeholder={placeholder}
        className={clsx(
          'input input-bordered w-full rounded-none bg-[#fafafa]  group-focus-within:input-secondary placeholder:text-gray-400',
          errors[id] && 'input-error group-focus-within:input-error',
        )}
        {...register(id, { required: true })}
      />
    </div>
  );
}
