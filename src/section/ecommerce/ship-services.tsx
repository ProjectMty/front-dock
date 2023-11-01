import { Section } from '@/components';

export default function ShipServices() {
  return (
    <Section id='ship-services' className='bg-primary text-white'>
      <ul className='grid w-full list-inside list-disc grid-cols-2 gap-x-24 gap-y-4 text-center text-white md:list-outside md:grid-cols-3 md:text-left'>
        <li>LTL and FTL freight pick up</li>
        <li>Container unloading</li>
        <li>Receiving</li>
        <li>Labeling (FNSKU,master carton, sold as set, pallet)</li>
        <li>Polybag</li>
        <li>Bundling</li>
        <li>Palletizing</li>
        <li>Shrink wrapping</li>
        <li>Shipping to Amazon FC (parcel or LTL)</li>
        <li>Return processing</li>
        <li>Inventory management and reporting</li>
      </ul>
    </Section>
  );
}
