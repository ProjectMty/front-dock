import clsx from 'clsx';
import { motion } from 'framer-motion';
import React from 'react';

const initial = { opacity: 0, y: -20 };
const animate = { opacity: 1, y: 0 };

export default function Hero({
  children,
  image,
  right = false,
}: React.PropsWithChildren<{ image: string; right?: boolean }>) {
  return (
    <div
      className={clsx(
        'flex min-h-[500px] w-full items-end bg-cover bg-fixed bg-center lg:min-h-[645px] 2xl:min-h-[760px]',
        'before:pointer-events-none before:absolute before:left-0 before:top-0 before:min-h-[500px] before:w-full before:bg-primary/20 before:content-["*"] before:lg:min-h-[645px] before:2xl:min-h-[760px]',
        'px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 2xl:px-32',
        'py-8',
        right && 'justify-end text-right',
      )}
      style={{ backgroundImage: `url("${image}")` }}
    >
      <motion.h1
        className='text-hero'
        initial={initial}
        whileInView={animate}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {children}
      </motion.h1>
    </div>
  );
}
