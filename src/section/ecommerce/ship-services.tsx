import { Section } from '@/components';
import { animateIconsChild, animateIconsParent } from '@/utils';
import { motion } from 'framer-motion';

export default function ShipServices() {
  return (
    <Section id='ship-services' className='bg-primary text-white'>
      <motion.ul
        {...animateIconsParent}
        className='grid w-full list-inside list-disc grid-cols-2 items-center gap-x-24 gap-y-4 text-center text-white md:list-outside md:grid-cols-3 md:text-left'
      >
        <motion.li {...animateIconsChild}>LTL and FTL freight pick up</motion.li>
        <motion.li {...animateIconsChild}>Container unloading</motion.li>
        <motion.li {...animateIconsChild}>Receiving</motion.li>
        <motion.li {...animateIconsChild}>
          Labeling (FNSKU,master carton, sold as set, pallet)
        </motion.li>
        <motion.li {...animateIconsChild}>Polybag</motion.li>
        <motion.li {...animateIconsChild}>Bundling</motion.li>
        <motion.li {...animateIconsChild}>Palletizing</motion.li>
        <motion.li {...animateIconsChild}>Shrink wrapping</motion.li>
        <motion.li {...animateIconsChild}>Shipping to Amazon FC (parcel or LTL)</motion.li>
        <motion.li {...animateIconsChild}>Return processing</motion.li>
        <motion.li {...animateIconsChild}>Inventory management and reporting</motion.li>
      </motion.ul>
    </Section>
  );
}
