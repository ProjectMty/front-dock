import { Section } from '@/components';
import { motion } from 'framer-motion';

const initial = { opacity: 0, y: -20 };
const animate = { opacity: 1, y: 0 };

export default function WhatWeCanDo() {
  return (
    <Section id='what-we-can-do' className='flex flex-col items-center gap-8'>
      <motion.h2
        initial={initial}
        whileInView={animate}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className='text-secondary'
      >
        What we can do
      </motion.h2>
      <motion.div
        initial={initial}
        whileInView={animate}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className='space-y-4 bg-white p-5 text-center text-primary shadow-2xl lg:col-span-4 lg:max-w-5xl lg:p-12 2xl:px-24'
      >
        <p>
          <span className='font-bold'>Sell and keep selling!</span> Let us do all of the heavy
          lifting in the warehouse. From unloading the trailers, to depalletizing, sorting, picking,
          packing and shipping your order, we&apos;ve got you covered! We can ship a package to your
          buyer or we can forward pallets for your shipment plan to{' '}
          <span className='font-bold'>Amazon FC.</span>
        </p>
        <p>
          <span className='font-bold'>Front Dock</span> resolves all of your domestic and
          international e-commerce logistics and returns management.
        </p>
      </motion.div>
    </Section>
  );
}
