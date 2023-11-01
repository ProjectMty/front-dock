import { Section, PricingCard } from '@/components';
import clsx from 'clsx';

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
          <p className='max-w-[80%]'>
            <span className='text-secondary'>Front Dock</span> is the ideal
            solution for your custom 3PL needs. We can tailor a package to fit
            your fulfillment and shipping objectives.
          </p>
        </div>
        <p>Take a look at our most popular packages:</p>
        <div className='flex flex-wrap justify-evenly gap-y-8'>
          <PricingCard
            title='All-in-FBA Package'
            price={0.8}
            description='The all-in-FBA package includes all costs associated with receiving, sorting, FNSKU labeling, fulfilling your FBA shipment plan, applying master carton and shipping labels. We pick, prep, and pack the order to fulfill your shipment plan'
          />
          <PricingCard
            title='All-in-FBA Package'
            price={2.25}
            description='The all-in-FBA package includes all costs associated with receiving, sorting, FNSKU labeling, fulfilling your order, pick, pack, and ship.'
          />
        </div>
        <p>Request our complete rate schedule.</p>
      </div>
    </Section>
  );
}
