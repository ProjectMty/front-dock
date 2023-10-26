import { Section } from '@/components';

export default function Options() {
  return (
    <Section id='options' className='bg-primary'>
      <ul className='grid w-full grid-cols-3 grid-rows-3 gap-4 text-center text-white'>
        <li className='flex items-center justify-center'>
          LTL and FTL freight pick up
        </li>
        <li className='flex items-center justify-center'>
          Container unloading
        </li>
        <li className='flex items-center justify-center'>Receiving</li>
        <li className='flex items-center justify-center'>Return processing</li>
        <li className='flex items-center justify-center'>Sorting</li>
        <li className='flex items-center justify-center'>
          Picking and packing
        </li>
        <li className='flex items-center justify-center'>Shipping</li>
        <li className='flex items-center justify-center'>
          Inventory management and reporting
        </li>
        <li className='flex items-center justify-center'>
          Value added services
        </li>
      </ul>
    </Section>
  );
}
