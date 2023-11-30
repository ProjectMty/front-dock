import { animateFadeIn } from '@/utils';
import { motion } from 'framer-motion';
import { ReactNode } from 'react';

type InfoCardProps = {
  icon: ReactNode;
  title: string;
  content: string;
};

export default function InfoCard({ icon, title, content }: InfoCardProps) {
  return (
    <div className='info-card-square relative flex min-h-[490px] flex-col items-center justify-start gap-4 bg-primary p-6 text-center text-white shadow'>
      <motion.div {...animateFadeIn} transition={{ delay: 0.2 }}>
        {icon}
      </motion.div>
      <motion.h3
        {...animateFadeIn}
        transition={{ delay: 0.2 }}
        className='text-2xl font-bold capitalize'
      >
        {title}
      </motion.h3>
      <motion.p {...animateFadeIn} transition={{ delay: 0.2 }}>
        {content}
      </motion.p>
    </div>
  );
}
