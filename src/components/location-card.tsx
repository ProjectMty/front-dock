import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

type LocationCardProps = {
  children: ReactNode | ReactNode[];
};

export default function LocationCard({ children }: LocationCardProps) {
  return (
    <motion.div
      className='border border-slate-300 px-6 py-5 text-sm shadow-lg drop-shadow-lg'
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.25 }}
    >
      {children}
    </motion.div>
  );
}
