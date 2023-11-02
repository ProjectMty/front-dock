import clsx from 'clsx';

export default function Marketplace() {
  return (
    <section
      id='marketplace'
      className='flex flex-wrap bg-primary text-base lg:text-lg 2xl:text-xl'
    >
      <div
        className='flex w-full items-center bg-cover bg-center p-14 lg:w-1/2'
        style={{
          backgroundImage: `url("assets/redesign/ecommerce/bg-ecommerce-market.webp")`,
        }}
      >
        <h3 className='text-white drop-shadow'>
          E-commerce Marketplace Prep and Ship Services
        </h3>
      </div>
      <div
        className={clsx(
          'flex w-full flex-col gap-8 p-14 text-center text-secondary lg:w-1/2',
          'text-xl lg:text-2xl',
        )}
      >
        <p>Ideal Solution For Amazon FBA Sellers</p>
        <p>
          Domestic And International Marketplace Prep And Fulfillment Services
          (Shipping To Amazon Fulfillment Centers In The United States, Canada,
          Or Mexico)
        </p>
      </div>
    </section>
  );
}
