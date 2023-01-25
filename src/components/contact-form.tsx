import clsx from 'clsx';

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
  return (
    <form
      className='space-y-2 rounded-2xl p-8 lg:w-1/2 lg:rounded-l-none'
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <div className='group form-control w-full'>
        <label className='label' htmlFor='name'>
          <span
            className={clsx(
              'label-text text-white focus:text-secondary group-focus-within:text-secondary',
              false && 'text-error group-focus-within:text-error',
            )}
          >
            Name *
          </span>
        </label>
        <input
          id='name'
          type='text'
          placeholder='Name'
          className={clsx(
            'input-bordered input w-full rounded-none text-black  placeholder:text-gray-400 group-focus-within:input-secondary',
            false && 'input-error group-focus-within:input-error',
          )}
        />
      </div>
      <div className='group form-control w-full'>
        <label className='label' htmlFor='email'>
          <span
            className={clsx(
              'label-text text-white focus:text-secondary group-focus-within:text-secondary',
              false && 'text-error group-focus-within:text-error',
            )}
          >
            Email *
          </span>
        </label>
        <input
          id='email'
          type='email'
          placeholder='Email'
          className={clsx(
            'input-bordered input w-full rounded-none text-black  placeholder:text-gray-400 group-focus-within:input-secondary',
            false && 'input-error group-focus-within:input-error',
          )}
        />
      </div>
      <div className='group form-control w-full'>
        <label className='label' htmlFor='phone'>
          <span
            className={clsx(
              'label-text text-white focus:text-secondary group-focus-within:text-secondary',
              false && 'text-error group-focus-within:text-error',
            )}
          >
            Phone *
          </span>
        </label>
        <input
          id='phone'
          type='text'
          placeholder='Phone'
          className={clsx(
            'input-bordered input w-full rounded-none text-black  placeholder:text-gray-400 group-focus-within:input-secondary',
            false && 'input-error group-focus-within:input-error',
          )}
        />
      </div>
      <div className='group form-control w-full'>
        <label className='label' htmlFor='phone'>
          <span
            className={clsx(
              'label-text text-white focus:text-secondary group-focus-within:text-secondary',
              false && 'text-error group-focus-within:text-error',
            )}
          >
            Phone *
          </span>
        </label>
        <select
          className={clsx(
            'input-bordered input w-full rounded-none text-black  placeholder:text-gray-400 group-focus-within:input-secondary',
            false && 'input-error group-focus-within:input-error',
          )}
        >
          <option disabled id='placeholder'>
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
              'label-text rounded-none text-white focus:text-secondary group-focus-within:text-secondary',
              false && 'text-error group-focus-within:text-error',
            )}
          >
            Comments
          </span>
        </label>
        <textarea
          id='subject'
          placeholder='Comments'
          className={clsx(
            'textarea-bordered textarea min-h-16 h-36 max-h-48 w-full resize-y rounded-none text-black placeholder:text-gray-400 group-focus-within:textarea-secondary',
            false && 'textarea-error group-focus-within:textarea-error',
          )}
        />
      </div>
      <div className='h-3' />
      <button
        type='submit'
        className={clsx(
          'btn-secondary btn-block btn rounded-none py-0 text-primary lg:w-56',
          false && 'loading disabled:text-gray-300',
        )}
        // disabled={loading}
      >
        Send
      </button>
    </form>
  );
}
