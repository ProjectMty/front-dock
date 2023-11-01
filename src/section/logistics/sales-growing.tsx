import { Section } from '@/components';
import { motion } from 'framer-motion';

const initial = { opacity: 0, y: -20 };
const animate = { opacity: 1, y: 0 };

export default function SalesGrowing() {
  return (
    <Section id='sales-growing' className='flex flex-col items-center gap-8'>
      <motion.h2
        initial={initial}
        whileInView={animate}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className='text-secondary'
      >
        Your sales are growing - yay!! <br /> but so are your returns...
      </motion.h2>
      <motion.div
        initial={initial}
        whileInView={animate}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className='space-y-4 bg-primary px-5 text-center text-white lg:col-span-4 lg:max-w-5xl lg:px-16 2xl:px-28'
      >
        <p>
          Returns can be overwhelming and burdensome to your business. Front
          Dock saves you time, increases your bottom line and your client&apos;s
          satisfaction.
        </p>
      </motion.div>
    </Section>
  );
}
