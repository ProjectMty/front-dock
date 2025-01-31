import { Section } from '@/components';
import { animateFadeIn, animateZoomIn } from '@/utils';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function GetStarted({ image }: { image: string }) {
  return (
    <Section
      id='get-started'
      className={`bg-slate-500 !py-4 md:!py-8 xl:!py-12 ${image} bg-cover bg-fixed bg-center bg-no-repeat`}
    >
      <motion.div
        {...animateZoomIn}
        className={clsx(
          'mx-auto flex flex-col gap-4 bg-secondary md:flex-row md:items-center md:justify-between xl:max-w-4xl 2xl:max-w-6xl',
          'p-8 md:p-12 xl:p-16',
        )}
      >
        <motion.p
          {...animateFadeIn}
          transition={{ delay: 0.5 }}
          className={clsx(
            'text-center font-black text-primary',
            'text-2xl md:text-3xl xl:text-4xl',
          )}
        >
          Ready to get started?
        </motion.p>
        <Link
          className='btn btn-primary btn-lg rounded-none text-lg tracking-wider text-white md:min-w-[16rem]'
          href='/contact-us#form'
        >
          <motion.span {...animateFadeIn} transition={{ delay: 0.5 }}>
            Let&apos;s go
          </motion.span>
        </Link>
      </motion.div>
    </Section>
  );
}
