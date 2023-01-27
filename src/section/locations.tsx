import { LocationCard } from '@/components';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Locations() {
  return (
    <section className='bg-white px-5 py-8 text-center text-primary'>
      <motion.h2
        className='pb-8 text-2xl font-black lg:text-3xl 2xl:text-4xl'
        initial={{ x: -150, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        LOCATIONS
      </motion.h2>
      <div className='flex flex-col lg:flex-row lg:px-20 2xl:px-56'>
        <motion.div
          className='lg:shrink-0'
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.25 }}
        >
          <Image
            src='/assets/usa-map-desktop.png'
            alt='Mexico locations'
            width={951}
            height={589}
            className='mx-auto h-[201px] w-[326px] lg:h-[348px] lg:w-[560px] 2xl:h-[589px] 2xl:w-[951px]'
            priority
            loading='eager'
          />
        </motion.div>
        <div className='mt-5 flex w-full flex-row items-center justify-evenly gap-x-2 lg:flex-col'>
          <LocationCard>
            <p className='font-black'>Northeast</p>
            <p>202 Rhode Island Ave,</p>
            <p>Buffalo, NY 14213</p>
          </LocationCard>
          <LocationCard>
            <p className='font-black'>South</p>
            <p>1234 Main Street,</p>
            <p>San Antonio, TX 78040</p>
          </LocationCard>
        </div>
      </div>
    </section>
  );
}
