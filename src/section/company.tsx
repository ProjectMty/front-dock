import { motion } from 'framer-motion';

const initial = { opacity: 0, y: -20 };
const animate = { opacity: 1, y: 0 };

export default function Company() {
  return (
    <section className='bg-primary px-5 py-8'>
      <motion.h1
        className='pb-8 text-center text-2xl font-black text-white'
        initial={initial}
        whileInView={animate}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        YOUR E-COMMERCE <br /> RETURNS MADE EASY!
      </motion.h1>
      <motion.div
        className='space-y-4 bg-white p-5 text-center text-base text-primary shadow-2xl'
        initial={initial}
        whileInView={animate}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <p>
          Ecommerce sales are increasing every day, but so are customer returns!{' '}
          <strong>
            The industry estimates 30% of all products bought online are
            returned.
          </strong>
        </p>
        <p>
          Customer returns play such an important part of your sales cycle, but
          no one wants to deal with them!
        </p>
        <p>
          Receive the box, open it, make sure the contents are what they&apos;re
          supposed to be, verify the item&apos;s condition, refund the money,
          repackage, reshelf, or dispose. Start again.
        </p>
        <p>
          We all know what needs to be done, but returns can be time consuming
          and inefficient. Your resources are better spent on other areas of
          your operation.
        </p>
        <p>
          <strong>Leave the returns to us!</strong>
        </p>
        <p>
          Front Dock operates returns processing centers in San Antonio, Texas
          and Buffalo, New York. We service retailers, mid-size, and small
          businesses alike. With more than 15 years of experience in ecommerce
          shipping lanes and reverse logistics, you can trust your returns will
          be processed efficiently and according to your instructions.
          <strong>
            The team at Front Dock processes more than 4,800 returns per day at
            our Texas facility and nearly 6,000 at our New York center.
          </strong>
        </p>
      </motion.div>
    </section>
  );
}
