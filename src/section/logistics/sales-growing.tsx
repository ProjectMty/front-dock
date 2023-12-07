import { Section } from '@/components';
import { animateFadeIn } from '@/utils';
import { motion } from 'framer-motion';

export default function SalesGrowing() {
  return (
    <Section id='sales-growing' className='flex flex-col items-center gap-8'>
      <motion.h2 {...animateFadeIn} className='text-secondary'>
        Your sales are growing - yay!! <br /> but so are your returns...
      </motion.h2>
      <div className='space-y-4 bg-primary px-5 text-center text-white lg:col-span-4 lg:max-w-5xl lg:px-16 2xl:px-28'>
        <motion.p {...animateFadeIn}>
          Returns can be overwhelming and burdensome to your business. Front Dock saves you time,
          increases your bottom line and your client&apos;s satisfaction.
        </motion.p>
      </div>
    </Section>
  );
}
