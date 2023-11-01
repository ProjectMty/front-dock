import { Section } from '@/components';

export default function ShipServices() {
  return (
    <Section id='ship-services' className='bg-primary text-white'>
      <ul className='grid w-full list-outside list-disc grid-cols-3 grid-rows-3 gap-x-24 gap-y-4 text-left text-white'>
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
