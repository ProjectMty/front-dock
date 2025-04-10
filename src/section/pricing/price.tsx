import { Section, PricingCard } from '@/components';
import { animateFadeIn, animateZoomIn } from '@/utils';
import clsx from 'clsx';
import { motion } from 'framer-motion';

export default function Price() {
  return (
    <Section id='price' className='!pb-6 lg:!pb-8'>
      <div
        className={clsx(
          'space-y-4 text-center text-white lg:space-y-8',
          'text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl',
        )}
      >
        <div className='flex justify-center'>
          <motion.p {...animateFadeIn} className='max-w-[80%]'>
            <span className='text-secondary'>Front Dock</span> is the ideal solution for your custom
            3PL needs. We can tailor a package to fit your fulfillment and shipping objectives.
          </motion.p>
        </div>
        <motion.p {...animateFadeIn}>Take a look at our most popular packages:</motion.p>
        <div className='flex flex-wrap justify-evenly gap-y-8'>
          <PricingCard
            {...animateZoomIn}
            title='All-in-FBA Package'
            price={0.8}
            description='The all-in-FBA package includes all costs associated with receiving, sorting, FNSKU labeling, fulfilling your FBA shipment plan, applying master carton and shipping labels. We pick, prep, and pack the order to fulfill your shipment plan'
          />
          <PricingCard
            {...animateZoomIn}
            title='All-in-FBM Package'
            price={2.25}
            description='The all-in-FBA package includes all costs associated with receiving, sorting, FNSKU labeling, fulfilling your order, pick, pack, and ship.'
          />
        </div>
        <motion.p {...animateFadeIn}>Request our complete rate schedule.</motion.p>
      </div>
    </Section>
  );
}
