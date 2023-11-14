import { LocationCard } from '@/components';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Locations() {
  return (
    <section className='bg-white px-5 py-8 text-center text-primary 2xl:py-20'>
      <motion.h2
        className='pb-8 text-2xl font-black uppercase lg:text-3xl 2xl:text-4xl'
        initial={{ x: -150, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Locations
      </motion.h2>
      <div className='flex flex-col-reverse lg:flex-row lg:items-center lg:px-20 2xl:px-56'>
        <motion.div
          className='lg:w-1/2'
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.25 }}
        >
          <Image
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
        </motion.div>
        <div className='mt-5 flex w-full flex-row items-center justify-evenly gap-x-2 lg:w-1/2 lg:flex-col lg:gap-y-14 2xl:gap-y-20'>
          <LocationCard>
            <p className='font-black'>South</p>
            <p>E. Cedar-Suite G 517,</p>
            <p>McAllen, TX 78501</p>
          </LocationCard>
        </div>
      </div>
    </section>
  );
}
