import { motion } from 'framer-motion';
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
      <motion.h3
        className='-ml-10 bg-secondary pl-10 text-center text-xl font-semibold'
        initial={{ x: -150, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        What are the processing options?
      </motion.h3>
      <motion.p
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {processing}
      </motion.p>
      <motion.h3
        className='-mr-10 bg-primary pr-10 text-center text-xl font-semibold  text-secondary'
        initial={{ x: 150, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        What does it cost?
      </motion.h3>
      <motion.table
        className='w-full border-separate border-spacing-2 border border-slate-300 bg-white text-center text-sm shadow-2xl'
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
      <motion.p
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {info}
      </motion.p>
      <motion.h3
        className='-ml-10 bg-secondary pl-10 text-center text-xl font-semibold'
        initial={{ x: -150, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        How long does it take?
      </motion.h3>
      <motion.table
        className='w-full border-separate border-spacing-2 border border-slate-300 bg-white text-center text-sm shadow-2xl'
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
