import { Section } from '@/components';

export default function Options() {
  return (
    <Section id='options' className='space-y-8 bg-primary'>
      <ul className='grid w-full list-inside list-disc grid-cols-2 gap-x-16 gap-y-4 text-center text-white md:list-outside md:grid-cols-4 md:grid-rows-2 md:text-left'>
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
        <p className='text-center font-bold uppercase text-white'>Value added services</p>
        <ul className='grid w-full list-inside list-disc grid-cols-2 gap-8 text-center text-white md:list-outside md:grid-cols-5 md:text-left'>
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
