import { animateFadeIn, animateZoomIn, getCurrencyFormat } from '@/utils';
import { motion } from 'framer-motion';
import Link from 'next/link';

type PricingCardProps = {
  title: string;
  price: number;
  description: string;
  link?: string;
};

const MotionLink = motion(Link);

export default function PricingCard({ title, price, description, link }: PricingCardProps) {
  return (
    <motion.div
      {...animateZoomIn}
      className='flex w-11/12 flex-col justify-between gap-y-6 rounded-none bg-white p-12 text-primary md:w-96'
    >
      <div className='flex flex-col gap-y-6'>
        <motion.p {...animateFadeIn} className='text-sm font-black uppercase tracking-widest'>
          {title}
        </motion.p>
        <div>
          <motion.p {...animateFadeIn} className='text-7xl font-bold'>
            {getCurrencyFormat(price)}
          </motion.p>
          <motion.p {...animateFadeIn} className='text-sm text-[#5d5d5d]'>
            Per Unit
          </motion.p>
        </div>
        <motion.p {...animateFadeIn} className='text-sm font-black uppercase tracking-widest'>
          Description
        </motion.p>
        <motion.p {...animateFadeIn} className='text-lg text-[#5d5d5d]'>
          {description}
        </motion.p>
      </div>
      <MotionLink
        {...animateZoomIn}
        className='btn btn-secondary btn-lg text-lg tracking-wider text-primary'
        href={`/${link}`}
      >
        <motion.span {...animateFadeIn}>Get Started</motion.span>
      </MotionLink>
    </motion.div>
  );
}

PricingCard.defaultProps = {
  link: 'contact',
};
