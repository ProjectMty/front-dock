import { Section } from '@/components';
import { animateFadeIn, animateIconsChild, animateIconsParent } from '@/utils';
import { motion } from 'framer-motion';

export default function Options() {
  return (
    <Section id='options' className='space-y-8 bg-primary'>
      <motion.ul
        {...animateIconsParent}
        className='grid w-full list-inside list-disc grid-cols-2 items-center gap-x-16 gap-y-4 text-center text-white md:list-outside md:grid-cols-4 md:grid-rows-2 md:text-left'
      >
        <motion.li {...animateIconsChild}>LTL and FTL freight pick up</motion.li>
        <motion.li {...animateIconsChild}>Container unloading</motion.li>
        <motion.li {...animateIconsChild}>Receiving</motion.li>
        <motion.li {...animateIconsChild}>Return processing</motion.li>
        <motion.li {...animateIconsChild}>Sorting</motion.li>
        <motion.li {...animateIconsChild}>Picking and packing</motion.li>
        <motion.li {...animateIconsChild}>Shipping</motion.li>
        <motion.li {...animateIconsChild}>Inventory management and reporting</motion.li>
      </motion.ul>
      <motion.p {...animateFadeIn} className='text-center font-bold uppercase text-white'>
        Value added services
      </motion.p>
      <motion.ul
        {...animateIconsParent}
        className='grid w-full list-inside list-disc grid-cols-2 items-center gap-8 text-center text-white md:list-outside md:grid-cols-5 md:text-left'
      >
        <motion.li {...animateIconsChild}>Kitting</motion.li>
        <motion.li {...animateIconsChild}>Labeling</motion.li>
        <motion.li {...animateIconsChild}>Marketing materials</motion.li>
        <motion.li {...animateIconsChild}>Gift wrapping</motion.li>
        <motion.li {...animateIconsChild}>Special messages</motion.li>
      </motion.ul>
    </Section>
  );
}
