import { Section } from '@/components';
import { animateFadeIn, animateZoomIn } from '@/utils';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import Link from 'next/link';

const MotionLink = motion(Link);

export default function BannerPricing() {
  return (
    <Section id='banner-pricing' className='bg-pricing-banner'>
      <motion.div
        {...animateZoomIn}
        className={clsx(
          'mx-auto flex flex-col gap-4 bg-secondary md:flex-row md:items-center md:justify-between xl:max-w-4xl 2xl:max-w-6xl',
          'p-8 md:p-12 xl:p-16',
        )}
      >
        <p
          className={clsx(
            'space-y-2 text-left font-black text-primary',
            'text-2xl md:text-3xl xl:text-4xl',
          )}
        >
          <motion.span {...animateFadeIn}>
            Let&apos;s build your custom 3PL rates today!
          </motion.span>
          <motion.span
            {...animateFadeIn}
            className='block text-base font-normal md:text-lg xl:text-xl'
          >
            You Sell, We Fulfill...
          </motion.span>
        </p>
        <MotionLink
          {...animateZoomIn}
          className='btn btn-primary btn-lg text-lg tracking-wider text-secondary md:min-w-[16rem]'
          href='/contact-us#form'
        >
          <motion.span {...animateFadeIn}>Contact us</motion.span>
        </MotionLink>
      </motion.div>
    </Section>
  );
}
