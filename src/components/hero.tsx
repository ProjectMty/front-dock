import clsx from 'clsx';
import { motion } from 'framer-motion';
import React from 'react';

const initial = { opacity: 0, y: -20 };
const animate = { opacity: 1, y: 0 };

export default function Hero({
  children,
  image,
  right = false,
  banner = true,
}: React.PropsWithChildren<{
  image: string;
  right?: boolean;
  banner?: boolean;
}>) {
  return (
    <div
      className={clsx(
        'flex w-full items-end bg-cover bg-fixed bg-center',
        'before:pointer-events-none before:absolute before:left-0 before:top-0 before:w-full before:bg-primary/20 before:content-["*"]',
        'px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 2xl:px-32',
        'py-8',
        right && 'justify-end text-right',
        banner
          ? 'min-h-[400px] before:min-h-[400px] lg:min-h-[550px] before:lg:min-h-[550px] 2xl:min-h-[700px] before:2xl:min-h-[620px]'
          : 'min-h-[240px] before:min-h-[240px] lg:min-h-[256px] before:lg:min-h-[256px] 2xl:min-h-[288px] before:2xl:min-h-[288px]',
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
