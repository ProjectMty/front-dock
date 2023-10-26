import { Section } from '@/components';

export default function ShipServices() {
  return (
    <Section id='ship-services' className='bg-primary text-white'>
      <ul className='grid w-full grid-cols-3 grid-rows-3 gap-4 text-center text-white'>
        <li className='flex items-center justify-center'>
          LTL and FTL freight pick up
        </li>
        <li className='flex items-center justify-center'>
          Container unloading
        </li>
        <li className='flex items-center justify-center'>Receiving</li>
        <li className='flex items-center justify-center'>
          Labeling (FNSKU,master carton, sold as set, pallet)
        </li>
        <li className='flex items-center justify-center'>Polybag</li>
        <li className='flex items-center justify-center'>Bundling</li>
        <li className='flex items-center justify-center'>Palletizing</li>
        <li className='flex items-center justify-center'>Shrink wrapping</li>
        <li className='flex items-center justify-center'>
          Shipping to Amazon FC (parcel or LTL)
        </li>
        <li className='flex items-center justify-center'>Return processing</li>
        <li className='flex items-center justify-center'>
          Inventory management and reporting
        </li>
      </ul>
    </Section>
  );
}
