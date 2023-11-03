import { IconDefinition } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import { useFormContext } from 'react-hook-form';

type FormInputProps = {
  id: string;
  label: string;
  placeholder: string;
  icon: IconDefinition;
};

export default function FormInput({ id, label, placeholder, icon }: FormInputProps) {
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
      <div className='relative'>
        <input
          id={id}
          type='text'
          placeholder={placeholder}
          className={clsx(
            'input input-bordered w-full rounded-none bg-[#fafafa] pr-10  group-focus-within:input-secondary placeholder:text-gray-400',
            errors[id] && 'input-error group-focus-within:input-error',
          )}
          {...register(id, { required: true })}
        />
        <FontAwesomeIcon
          className='absolute right-0 top-1/2 m-0 -translate-x-full -translate-y-1/2'
          icon={icon}
        />
      </div>
    </div>
  );
}
