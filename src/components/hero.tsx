import { animateFadeIn } from '@/utils';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import { type PropsWithChildren } from 'react';

export default function Hero({
  children,
  image,
  right = false,
}: PropsWithChildren<{
  image: string;
  right?: boolean;
}>) {
  return (
    <div
      className={clsx(
        image,
        'flex w-full items-end bg-cover bg-fixed bg-center',
        'before:pointer-events-none before:absolute before:left-0 before:top-0 before:w-full before:bg-primary/20 before:content-["*"]',
        'px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 2xl:px-32',
        'py-8',
        'min-h-[400px] before:min-h-[400px] lg:min-h-[550px] before:lg:min-h-[550px] 2xl:min-h-[700px] before:2xl:min-h-[700px]',
        right && 'justify-end text-right',
      )}
    >
      <motion.h1 className='text-hero' {...animateFadeIn}>
        {children}
      </motion.h1>
    </div>
  );
}
