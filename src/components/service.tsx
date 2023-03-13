import clsx from 'clsx';
import { motion } from 'framer-motion';
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
      <motion.h3
        className={clsx(
          'bg-secondary text-center font-semibold lg:py-3 2xl:py-5',
          'mr-10 pl-10 text-base',
          'lg:mr-52 lg:pl-52 lg:text-xl',
          '2xl:mr-96 2xl:pl-96 2xl:text-2xl',
        )}
        initial={{ x: -150, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        What are the processing options?
      </motion.h3>
      <motion.p
        className='px-10 lg:px-20 2xl:px-80'
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {processing}
      </motion.p>
      <motion.h3
        className={clsx(
          'bg-primary text-center font-semibold text-secondary lg:py-3 2xl:py-5',
          'ml-10 pr-10 text-base',
          'lg:ml-52 lg:pr-52 lg:text-xl',
          '2xl:ml-96 2xl:pr-96 2xl:text-2xl',
        )}
        initial={{ x: 150, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        What does it cost?
      </motion.h3>
      <div className='flex flex-col space-y-9 px-10 lg:flex-row lg:gap-x-9 lg:space-y-0 lg:px-20 2xl:flex-col 2xl:gap-y-10 2xl:px-80'>
        <div className='order-1 flex flex-col items-center justify-center gap-9 2xl:order-2 2xl:flex-row'>
          <motion.table
            className='w-[345px] border-separate border-spacing-2 border border-slate-300 bg-white text-center text-sm shadow-2xl sm:w-full lg:w-[408px] lg:p-4 xl:w-[500px] 2xl:w-1/2 2xl:shrink-0'
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
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
          </motion.table>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className='font-bold'>Shipping Fee:</span> {shipping}
          </motion.p>
        </div>
        <div className='order-2 flex flex-col items-center justify-center 2xl:order-1'>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {info}
          </motion.p>
        </div>
      </div>
      <motion.h3
        className={clsx(
          'bg-secondary text-center font-semibold lg:py-3 2xl:py-5',
          'mr-10 pl-10 text-base',
          'lg:mr-52 lg:pl-52 lg:text-xl',
          '2xl:mr-96 2xl:pl-96 2xl:text-2xl',
        )}
        initial={{ x: -150, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        How long does it take?
      </motion.h3>
      <motion.table
        className='2xl:[660px] mx-auto w-[345px] border-separate border-spacing-2 border border-slate-300 bg-white text-center text-sm shadow-2xl lg:w-[408px] lg:p-4'
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
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
      </motion.table>
    </div>
  );
}
