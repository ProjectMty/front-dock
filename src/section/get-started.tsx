import { Section } from '@/components';
import clsx from 'clsx';
import Link from 'next/link';

export default function GetStarted({ image }: { image: string }) {
  return (
    <Section
      id='get-started'
      className={`bg-slate-500 !py-4 md:!py-8 xl:!py-12 ${image}`}
    >
      <div
        className={clsx(
          'mx-auto flex flex-col gap-4 bg-secondary md:flex-row md:items-center md:justify-between xl:max-w-4xl 2xl:max-w-6xl',
          'p-8 md:p-12 xl:p-16',
        )}
      >
        <p
          className={clsx(
            'text-center font-black text-primary',
            'text-2xl md:text-3xl xl:text-4xl',
          )}
        >
          Ready to get started?
        </p>
        <Link
          className='btn btn-primary btn-lg text-lg tracking-wider text-white md:min-w-[16rem]'
          href='/contact'
        >
          Let&apos;s go
        </Link>
      </div>
    </Section>
  );
}
