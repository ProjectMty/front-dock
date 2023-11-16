import { Section } from '@/components';
import clsx from 'clsx';
import Link from 'next/link';

export default function BannerPricing() {
  return (
    <Section id='banner-pricing' className='bg-pricing-banner'>
      <div
        className={clsx(
          'mx-auto flex flex-col gap-4 bg-secondary md:flex-row md:items-center md:justify-between xl:max-w-4xl 2xl:max-w-6xl',
          'p-8 md:p-12 xl:p-16',
        )}
      >
        <p
          className={clsx(
            'space-y-2 text-left font-black text-primary',
            'text-2xl md:text-3xl xl:text-4xl',
          )}
        >
          <span> Let&apos;s build your custom 3PL rates today!</span>
          <span className='block text-base font-normal md:text-lg xl:text-xl'>
            You Sell, We Fulfill...
          </span>
        </p>
        <Link
          className='btn btn-primary btn-lg text-lg tracking-wider text-secondary md:min-w-[16rem]'
          href='/contact-us#form'
        >
          Contact us
        </Link>
      </div>
    </Section>
  );
}
