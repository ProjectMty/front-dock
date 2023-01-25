import type { ReactNode } from 'react';

type ServiceProps = {
  processing: string;
  costs: {
    cost: {
      limit: string;
      receiving: number;
      type: 'Consolidate' | 'Repackage' | 'Resell' | 'Processing' | 'Dispose';
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

export default function Service({
  processing,
  costs: { cost, shipping, info },
  time,
}: ServiceProps) {
  return (
    <div className='mt-4 space-y-6 text-justify'>
      <h3 className='-ml-10 bg-secondary pl-10 text-center text-lg font-semibold'>
        What are the processing options?
      </h3>
      <p className='text-sm'>{processing}</p>
      <h3 className='-mr-10 bg-primary pr-10 text-center text-lg font-semibold text-secondary'>
        What does it cost?
      </h3>
      <table className='w-full border-separate border-spacing-2 border border-slate-300 bg-white text-center text-xs shadow-2xl'>
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
      <p className='text-sm'>
        <span className='font-bold'>Shipping Fee:</span> {shipping}
      </p>
      <p className='text-sm'>{info}</p>
      <h3 className='-ml-10 bg-secondary pl-10 text-center text-lg font-semibold'>
        How long does it take?
      </h3>
      <table className='w-full border-separate border-spacing-2 border border-slate-300 bg-white text-center text-xs shadow-2xl'>
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
