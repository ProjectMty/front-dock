import { Section } from '@/components';
import directClientIcon1 from '@/public/assets/redesign/ecommerce/direct-client-icon-1.svg';
import directClientIcon2 from '@/public/assets/redesign/ecommerce/direct-client-icon-2.svg';
import directClientIcon3 from '@/public/assets/redesign/ecommerce/direct-client-icon-3.svg';
import directClientIcon4 from '@/public/assets/redesign/ecommerce/direct-client-icon-4.svg';
import { animateFadeIn, animateIconsChild, animateIconsParent, animateZoomIn } from '@/utils';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function DirectClient() {
  return (
    <Section
      id='direct-to-client'
      className='flex flex-col gap-6 bg-white text-primary md:gap-8 xl:gap-10'
    >
      <div className='flex flex-col gap-6 font-bold md:flex-row md:items-center md:gap-8 xl:justify-evenly xl:gap-10'>
        <motion.h2 {...animateFadeIn} className='md:w-1/3 xl:w-1/3'>
          Direct <br className='hidden md:block' />
          to client
        </motion.h2>
        <motion.div
          {...animateZoomIn}
          className='flex flex-col gap-6 bg-secondary p-12 text-center uppercase md:w-2/3 xl:w-1/3'
        >
          <motion.p {...animateFadeIn}>
            Ideal solution for online retail, small businesses, and fbm models
          </motion.p>
          <motion.p {...animateFadeIn}>
            Domestic and international direct to client services (final client is receiving in the
            United States, Canada, or Mexico)
          </motion.p>
        </motion.div>
      </div>
      <motion.p
        {...animateFadeIn}
        className='w-full text-center text-base md:text-xl xl:mx-auto xl:w-3/4 xl:text-2xl'
      >
        Do you have an online store or sell on e-commerce platforms but don&apos;t have the
        warehouse space or simply want to outsource your logistics?{' '}
        <span className='font-bold'>Front Dock</span> offers a complete direct to client logistics
        solution. Our warehouses in <span className='font-bold'>Texas</span> and{' '}
        <span className='font-bold'>New York</span> can receive, sort, fill, and ship orders
        directly to your buyer&apos;s front door.
      </motion.p>
      <div>
        <motion.ul
          {...animateIconsParent}
          className='flex w-full flex-col flex-wrap justify-evenly gap-8 text-center font-black uppercase md:flex-row'
        >
          <motion.li {...animateIconsChild} className='flex flex-col items-center justify-center'>
            <Image
              src={directClientIcon1}
              alt='Direct to Client Icon 1'
              width={112}
              height={112}
              className='h-28 w-28 object-cover'
            />
            <span>Business to client</span>
          </motion.li>
          <motion.li {...animateIconsChild} className='flex flex-col items-center justify-center'>
            <Image
              src={directClientIcon2}
              alt='Direct to Client Icon 2'
              width={112}
              height={112}
              className='h-28 w-28 object-cover'
            />
            <span>Direct to consumer</span>
          </motion.li>
          <motion.li {...animateIconsChild} className='flex flex-col items-center justify-center'>
            <Image
              src={directClientIcon3}
              alt='Direct to Client Icon 3'
              width={112}
              height={112}
              className='h-28 w-28 object-cover'
            />
            <span>Dropshipping</span>
          </motion.li>
          <motion.li {...animateIconsChild} className='flex flex-col items-center justify-center'>
            <Image
              src={directClientIcon4}
              alt='Direct to Client Icon 4'
              width={112}
              height={112}
              className='h-28 w-28 object-cover'
            />
            <span>FBM</span>
          </motion.li>
        </motion.ul>
      </div>
    </Section>
  );
}
