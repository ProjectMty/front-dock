import { LocationCard } from '@/components';
import { animateFadeIn, animateZoomIn } from '@/utils';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import Image from 'next/image';

const MotionImage = motion(Image);

export default function Locations() {
  return (
    <section className='bg-white px-6 py-16 text-center text-primary 2xl:py-20'>
      <motion.h2 {...animateFadeIn} className='pb-8 font-black uppercase'>
        Locations
      </motion.h2>
      <div className='flex flex-col-reverse gap-y-8 lg:flex-row lg:items-center lg:justify-center lg:px-20 2xl:px-56'>
        <div className='lg:w-1/2'>
          <MotionImage
            {...animateZoomIn}
            src='/assets/usa-map.webp'
            alt='Mexico locations'
            width={951}
            height={589}
            className={clsx(
              'mx-auto w-[326px]',
              // 'mx-auto w-[326px] lg:w-[560px] 2xl:w-[951px]',
              'sm:w-[390px]',
              'md:w-[455px]',
              'lg:w-[510px]',
              'xl:w-[565px]',
              '2xl:w-[650px]',
            )}
            priority
            loading='eager'
          />
        </div>
        <div className='flex w-full flex-row flex-wrap items-center justify-evenly gap-x-2 gap-y-8 lg:w-1/3 lg:flex-col lg:flex-nowrap lg:gap-y-10 2xl:gap-y-12'>
          <LocationCard>
            <p className='font-black'>Northeast</p>
            <p>202 Rhode Island Ave</p>
            <p>Buffalo, NY 14213</p>
          </LocationCard>
          <LocationCard>
            <p className='font-black'>South</p>
            <p>517 East Cedar Avenue Suite G</p>
            <p>McAllen, TX 78501</p>
          </LocationCard>
        </div>
      </div>
    </section>
  );
}
