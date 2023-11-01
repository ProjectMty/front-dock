import { Section } from '@/components';

export default function Options() {
  return (
    <Section id='options' className='space-y-8 bg-primary'>
      <ul className='grid w-full list-outside list-disc grid-cols-4 grid-rows-2 gap-x-16 gap-y-4 text-left text-white'>
        <li>LTL and FTL freight pick up</li>
        <li>Container unloading</li>
        <li>Receiving</li>
        <li>Return processing</li>
        <li>Sorting</li>
        <li>Picking and packing</li>
        <li>Shipping</li>
        <li>Inventory management and reporting</li>
      </ul>
      <div className='space-y-8'>
        <p className='text-center font-bold uppercase text-white'>
          Value added services
        </p>
        <ul className='grid w-full list-outside list-disc grid-cols-5 gap-8 text-left text-white'>
          <li>Kitting</li>
          <li>Labeling</li>
          <li>Marketing materials</li>
          <li>Gift wrapping</li>
          <li>Special messages</li>
        </ul>
      </div>
    </Section>
  );
}
