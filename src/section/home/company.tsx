import { Section } from '@/components';
import CountUp from '@/components/count-up';
import { animateFadeIn, animateZoomIn } from '@/utils';
import { motion } from 'framer-motion';
import Link from 'next/link';

const counterVariants = {
  duration: 3,
  years: 20,
  clients: 99,
  warehouse: 60_000,
};

const MotionLink = motion(Link);

export default function Company() {
  return (
    <Section id='company'>
      <div className='grid grid-cols-1 items-center gap-8 lg:grid-cols-6'>
        <div className='flex flex-col items-center gap-8 text-center lg:col-span-2'>
          <motion.h2 className='text-white' {...animateFadeIn}>
            Who <span className='block'>we are</span>
          </motion.h2>
          <MotionLink
            {...animateZoomIn}
            className='btn btn-secondary rounded-none text-primary lg:btn-lg'
            href='/about-us'
          >
            <motion.span {...animateFadeIn}>Learn more about us</motion.span>
          </MotionLink>
          <div className='flex flex-wrap items-center justify-center gap-8'>
            <div>
              <CountUp
                duration={counterVariants.duration}
                to={counterVariants.years}
                className='font-lato text-2xl font-bold uppercase text-white lg:text-4xl'
              />
              <motion.p
                className='text-base font-bold leading-none text-secondary lg:text-xl'
                {...animateFadeIn}
              >
                Years of <br />
                experience
              </motion.p>
            </div>
            <div>
              <div className='font-lato flex justify-center text-2xl font-bold uppercase text-white lg:text-4xl'>
                <CountUp
                  duration={counterVariants.duration}
                  to={counterVariants.clients}
                  className='font-lato text-2xl font-bold uppercase text-white lg:text-4xl'
                />
                <span>%</span>
              </div>
              <motion.p
                className='text-base font-bold leading-none text-secondary lg:text-xl'
                {...animateFadeIn}
              >
                Client <br />
                satisfaction
              </motion.p>
            </div>
            <div>
              <CountUp
                duration={counterVariants.duration}
                to={counterVariants.warehouse}
                className='font-lato text-2xl font-bold uppercase text-white lg:text-4xl'
              />
              <motion.p
                className='text-base font-bold leading-none text-secondary lg:text-xl'
                {...animateFadeIn}
              >
                Square foot <br />
                warehouse
              </motion.p>
            </div>
          </div>
        </div>
        <motion.div
          className='space-y-4 bg-white p-5 text-center text-primary shadow-2xl lg:col-span-4 lg:p-12 2xl:px-24'
          {...animateZoomIn}
        >
          <motion.p {...animateFadeIn}>
            <span className='font-bold'>Front Dock is a 3PL</span> and e-commerce service provider
            in Texas and New York. More than <span className='font-bold'>20 years</span> of domestic
            and international marketplace fulfillment experience make us{' '}
            <span className='font-bold'>
              the industry leader for all of your e-commerce logistics and returns management.
            </span>
          </motion.p>

          <motion.p {...animateFadeIn}>
            We cover a wide spectrum of e-commerce models, including{' '}
            <span className='font-bold'>FBA</span> (Fulfillment by Amazon),{' '}
            <span className='font-bold'>B2C</span> (business-to-consumer),{' '}
            <span className='font-bold'>B2B</span> (business-to-business),{' '}
            <span className='font-bold'>FBM</span> (Fulfillment by Merchant),{' '}
            <span className='font-bold'>wholesale, dropshipping, and private label</span>.
          </motion.p>
          <motion.p {...animateFadeIn}>
            <span className='font-bold'>
              Front Dock is your complete solution for any combination of the acronyms!
            </span>
          </motion.p>
          <motion.p {...animateFadeIn}>
            Our <span className='font-bold'>60,000</span> square foot warehouse provides ample space
            for all of your items - large or small. We&apos;re confident our trained team is
            equipped to handle the logistics required for your business{' '}
            <span className='font-bold'>to sell more and improve your profitability</span>. If we
            don&apos;t already offer the service, we can create a solution tailored to your
            project&apos;s requirements.
          </motion.p>
        </motion.div>
      </div>
    </Section>
  );
}
