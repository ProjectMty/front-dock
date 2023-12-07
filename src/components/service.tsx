import clsx from 'clsx';
import type { ReactNode } from 'react';

type ServiceProps = {
  processing: string;
  costs: {
    cost: {
      limit: string;
      receiving: number;
      type: 'Consolidate' | 'Repackage' | 'Resale' | 'Processing' | 'Dispose';
      typeFee: string | ReactNode | ReactNode[];
    };
    shipping: string;
    info: string;
  };
  time: {
    checkin: string;
    ship: string;
  };
};
// text-base lg:text-xl 2xl:text-2xl
export default function Service({
  processing,
  costs: { cost, shipping, info },
  time,
}: ServiceProps) {
  return (
    <div className='mt-4 space-y-6 text-justify lg:space-y-10'>
      <h3
        className={clsx(
          'bg-secondary text-center font-semibold lg:py-3 2xl:py-5',
          'mr-10 pl-10 text-base',
          'lg:mr-52 lg:pl-52 lg:text-xl',
          '2xl:mr-96 2xl:pl-96 2xl:text-2xl',
        )}
      >
        What are the processing options?
      </h3>
      <p className='px-10 lg:px-20 2xl:px-80'>{processing}</p>
      <h3
        className={clsx(
          'bg-primary text-center font-semibold text-secondary lg:py-3 2xl:py-5',
          'ml-10 pr-10 text-base',
          'lg:ml-52 lg:pr-52 lg:text-xl',
          '2xl:ml-96 2xl:pr-96 2xl:text-2xl',
        )}
      >
        What does it cost?
      </h3>
      <div className='flex flex-col space-y-9 px-10 lg:flex-row lg:gap-x-9 lg:space-y-0 lg:px-20 2xl:flex-col 2xl:gap-y-10 2xl:px-80'>
        <div className='order-1 flex flex-col items-center justify-center gap-9 2xl:order-2 2xl:flex-row'>
          <table className='w-[345px] border-separate border-spacing-2 border border-slate-300 bg-white text-center text-sm shadow-2xl sm:w-full lg:w-[408px] lg:p-4 xl:w-[500px] 2xl:w-1/2 2xl:shrink-0'>
            <thead>
              <tr>
                <th>Size or Weight Limit</th>
                <th>Receiving Fee</th>
                <th>{cost.type} Fee</th>
              </tr>
            </thead>
            <tbody>
              <tr className='font-black'>
                <td>{cost.limit}</td>
                <td>
                  {new Intl.NumberFormat('en-US', {
                    style: 'currency',
                    currency: 'USD',
                  }).format(cost.receiving)}
                </td>
                <td>{cost.typeFee}</td>
              </tr>
            </tbody>
          </table>
          <p>
            <span className='font-bold'>Shipping Fee:</span> {shipping}
          </p>
        </div>
        <div className='order-2 flex flex-col items-center justify-center 2xl:order-1'>
          <p>{info}</p>
        </div>
      </div>
      <h3
        className={clsx(
          'bg-secondary text-center font-semibold lg:py-3 2xl:py-5',
          'mr-10 pl-10 text-base',
          'lg:mr-52 lg:pl-52 lg:text-xl',
          '2xl:mr-96 2xl:pl-96 2xl:text-2xl',
        )}
      >
        How long does it take?
      </h3>
      <table className='2xl:[660px] mx-auto w-[345px] border-separate border-spacing-2 border border-slate-300 bg-white text-center text-sm shadow-2xl lg:w-[408px] lg:p-4'>
        <thead>
          <tr>
            <th>Check-in Time</th>
            <th>Ready to Ship / Processing Time</th>
          </tr>
        </thead>
        <tbody>
          <tr className='font-black'>
            <td>{time.checkin}</td>
            <td>{time.ship}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
