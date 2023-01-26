import { LocationCard } from '@/components';
import Image from 'next/image';

export default function Locations() {
  return (
    <section className='bg-white px-5 py-8 text-center text-primary'>
      <h2 className='pb-8 text-2xl font-black'>LOCATIONS</h2>
      <Image
        src='/assets/usa-map-desktop.png'
        alt='Mexico locations'
        width={951}
        height={589}
        className='mx-auto min-h-[170px] w-full lg:min-h-[466px] 2xl:w-4/5'
        priority
        loading='eager'
      />
      <div className='mt-5 flex w-full justify-between gap-x-4'>
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
    </section>
  );
}
