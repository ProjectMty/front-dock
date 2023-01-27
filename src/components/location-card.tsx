import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

type LocationCardProps = {
  children: ReactNode | ReactNode[];
};

export default function LocationCard({ children }: LocationCardProps) {
  return (
    <motion.div
      className='h-fit w-[200px] border border-slate-300 px-5 py-4 text-sm shadow-lg drop-shadow-lg lg:w-[242px] lg:py-7 lg:px-5 lg:text-lg 2xl:w-[350px] 2xl:py-12 2xl:px-6 2xl:text-2xl'
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.25 }}
    >
      {children}
    </motion.div>
  );
}
