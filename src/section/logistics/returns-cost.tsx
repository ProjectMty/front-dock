import { Section } from '@/components';
import { Carousel, CarouselContent, CarouselItem } from '@/components/carousel';
import returnCostsData from '@/section/logistics/return-cost-data';
import { animateFadeIn } from '@/utils';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function ReturnsCost() {
  return (
    <Section id='returns-cost' className='space-y-4' withPadding={false}>
      <div
        className={clsx(
          'space-y-8 md:mx-auto md:w-3/4',
          'px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24',
          'py-2 sm:py-4 md:py-6 lg:py-8 xl:py-10 2xl:py-12',
        )}
      >
        <motion.h3 {...animateFadeIn} className='text-center text-secondary'>
          How much do returns cost?
        </motion.h3>
        <motion.p {...animateFadeIn} className='text-center text-white'>
          At Front Dock, we specialize in custom returns management, with our popular consolidate
          and return to seller model. We process returns daily, update you on inventory, and ship
          back when you&apos;re ready.
        </motion.p>
        <motion.p {...animateFadeIn} className='text-center text-white'>
          Let&apos;s schedule a call to discuss your merchandise and how we can help. Your account
          executive will provide a customized pricing proposal, considering your returns needs.
        </motion.p>
        <motion.p {...animateFadeIn} className='text-center text-white'>
          In the meantime, don&apos;t forget—we&apos;re home to the{' '}
          <span className='text-secondary'>$0.99</span> return!
        </motion.p>
      </div>
      <Carousel
        className='w-full px-4'
        opts={{
          align: 'center',
          loop: true,
          active: true,
          startIndex: 0,
        }}
      >
        <CarouselContent>
          {returnCostsData.map(({ id, top, content }) => (
            <CarouselItem
              key={id}
              className='w-full sm:w-auto md:basis-1/2 lg:basis-1/3 xl:basis-1/4 2xl:basis-1/5'
            >
              <div className='select-none bg-white'>
                <div className='space-y-4 bg-secondary py-6 text-center text-primary'>
                  <div className='text-2xl font-black uppercase'>{top.title}</div>
                  <div className='text-6xl font-bold'>{top.cost}</div>
                  <div className='text-xl font-bold'>{top.type}</div>
                </div>
                <div className='flex min-h-[630px] flex-col items-center justify-between pb-6'>
                  <div>{content}</div>
                  <Link
                    href='/contact-us#form'
                    className={clsx(
                      'btn btn-secondary flex gap-2 rounded-none py-0 text-base uppercase text-primary lg:text-lg 2xl:text-xl',
                      'w-3/4 md:w-1/3 xl:w-56',
                    )}
                  >
                    Started
                  </Link>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </Section>
  );
}
