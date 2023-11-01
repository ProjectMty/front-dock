import { Section } from '@/components';
import { motion } from 'framer-motion';
import Link from 'next/link';

const initial = { opacity: 0, y: -20 };
const animate = { opacity: 1, y: 0 };

export default function Company() {
  return (
    <Section id='company'>
      <motion.div
        initial={initial}
        whileInView={animate}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className='grid grid-cols-1 items-center gap-8 lg:grid-cols-6'
      >
        <div className='flex flex-col items-center gap-8 text-center lg:col-span-2'>
          <h2 className='text-white'>
            Who <span className='block'>we are</span>
          </h2>
          <Link
            className='btn btn-secondary rounded-full text-primary lg:btn-lg'
            href='/#'
          >
            Learn more
          </Link>
          <div className='flex flex-wrap items-center justify-center gap-8'>
            <div>
              <p className='font-lato text-2xl font-bold uppercase text-white lg:text-4xl'>
                20
              </p>
              <p className='text-base font-bold leading-none text-secondary lg:text-xl'>
                Year of <br />
                experience
              </p>
            </div>
            <div>
              <p className='font-lato text-2xl font-bold uppercase text-white lg:text-4xl'>
                99%
              </p>
              <p className='text-base font-bold leading-none text-secondary lg:text-xl'>
                Client <br />
                satisfaction
              </p>
            </div>
            <div>
              <p className='font-lato text-2xl font-bold uppercase text-white lg:text-4xl'>
                60,000
              </p>
              <p className='text-base font-bold leading-none text-secondary lg:text-xl'>
                Square foot <br />
                warehouse
              </p>
            </div>
          </div>
        </div>
        <div className='space-y-4 bg-white p-5 text-center text-primary shadow-2xl lg:col-span-4 lg:p-12 2xl:px-24'>
          <p>
            <span className='font-bold'>Front Dock is a 3PL</span> and
            e-commerce service provider in Houston, Texas. More than{' '}
            <span className='font-bold'>20 years</span> of domestic and
            international marketplace fulfillment experience make us{' '}
            <span className='font-bold'>
              the industry leader for all of your e-commerce logistics and
              returns management.
            </span>
          </p>

          <p>
            We cover a wide spectrum of e-commerce models, including{' '}
            <span className='font-bold'>FBA</span> (Fulfillment by Amazon),{' '}
            <span className='font-bold'>B2C</span> (business-to-consumer),{' '}
            <span className='font-bold'>B2B</span> (business-to-business),{' '}
            <span className='font-bold'>FBM</span> (Fulfillment by Merchant),{' '}
            <span className='font-bold'>
              wholesale, dropshipping, and private label
            </span>
            .
          </p>
          <p>
            <span className='font-bold'>
              Front Dock is your complete solutions for any combination of the
              acronyms!
            </span>
          </p>
          <p>
            Our <span className='font-bold'>60,000</span> square foot warehouse
            provides ample space for all of your items - large or small.
            We&apos;re confident our trained team is equipped to handle the
            logistics required for your business{' '}
            <span className='font-bold'>
              to sell more and improve your profitability
            </span>
            . If we don&apos;t already offer the service, we can create a
            solution tailored to your project&apos;s requirements.
          </p>
        </div>
      </motion.div>
    </Section>
  );
}
