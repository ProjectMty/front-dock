import { Section } from '@/components';
import CoreValueIcon1 from '@/public/assets/redesign/about/core-value-icon-1.svg';
import CoreValueIcon2 from '@/public/assets/redesign/about/core-value-icon-2.svg';
import CoreValueIcon3 from '@/public/assets/redesign/about/core-value-icon-3.svg';
import Image from 'next/image';

export default function CoreValues() {
  return (
    <Section id='core-values' className='space-y-8 bg-primary text-white'>
      <h2>Core Values</h2>
      <div className='flex flex-col justify-between gap-16 text-center md:flex-row'>
        <div className='flex flex-col items-center justify-baseline'>
          <Image
            src={CoreValueIcon1}
            width={192}
            className='w-48'
            alt='CoreValueIcon1'
          />
          <p>
            We are dedicated to excellence in all aspects of our services. We
            take pride in offering 100% insurance coverage on all merchandise in
            our warehouse, demonstrating our commitment to reliability and
            accountability.
          </p>
        </div>
        <div className='flex flex-col items-center justify-baseline'>
          <Image
            src={CoreValueIcon2}
            width={192}
            className='w-48'
            alt='CoreValueIcon2'
          />
          <p>
            At Front Dock, the customer is at the heart of everything we do. We
            are committed to understanding the unique needs and goals of each
            client and providing the support required for their success.
          </p>
        </div>
        <div className='flex flex-col items-center justify-baseline'>
          <Image
            src={CoreValueIcon3}
            width={192}
            className='w-48'
            alt='CoreValueIcon3'
          />
          <p>
            With cross-border fulfillment and freight forwarding capabilities to
            Canada and Mexico, we extend our reach to help businesses expand
            their markets and explore new opportunities on an international
            scale
          </p>
        </div>
      </div>
    </Section>
  );
}
