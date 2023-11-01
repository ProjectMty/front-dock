import { Section } from '@/components';
import marketIcon1 from '@/public/assets/redesign/ecommerce/market-icon-1.svg';
import marketIcon2 from '@/public/assets/redesign/ecommerce/market-icon-2.svg';
import marketIcon3 from '@/public/assets/redesign/ecommerce/market-icon-3.svg';
import marketIcon4 from '@/public/assets/redesign/ecommerce/market-icon-4.svg';
import marketIcon5 from '@/public/assets/redesign/ecommerce/market-icon-5.svg';
import Image from 'next/image';

export default function AmazonFba() {
  return (
    <Section
      id='amazon-fba'
      className='flex flex-col gap-8 bg-white text-primary'
    >
      <p className='text-center text-base lg:text-2xl'>
        If you sell on <span className='font-bold'>Amazon FBA</span> and are
        shipping from China or directly from your supplier&apos;s warehouse,{' '}
        <span className='font-bold'>Front Dock</span> will complete all of your
        prep and fulfillment operations. Our work stops only once the
        merchandise is delivered at the designated Amazon FC. Our{' '}
        <span className='font-bold'>FBA</span> teams in Texas and New York{' '}
        <span className='font-bold'>
          can receive, store, sort, fill, label, and ship your FBA replenishment
          shipments to Amazon
        </span>
        . We have vast experience with Amazon Seller Central and Carrier
        Central.
      </p>
      <div>
        <ul className='flex w-full flex-col flex-wrap justify-evenly gap-8 text-center font-black uppercase md:flex-row'>
          <li className='flex flex-col items-center justify-center'>
            <Image
              src={marketIcon1}
              alt='Market Icon 1'
              width={112}
              height={112}
              className='h-28 w-28 object-cover'
            />
            <span>FBA</span>
          </li>
          <li className='flex flex-col items-center justify-center'>
            <Image
              src={marketIcon2}
              alt='Market Icon 2'
              width={112}
              height={112}
              className='h-28 w-28 object-cover'
            />
            <span>ONLINE</span>
          </li>
          <li className='flex flex-col items-center justify-center'>
            <Image
              src={marketIcon3}
              alt='Market Icon 3'
              width={112}
              height={112}
              className='h-28 w-28 object-cover'
            />
            <span>RETAIL</span>
          </li>
          <li className='flex flex-col items-center justify-center'>
            <Image
              src={marketIcon4}
              alt='Market Icon 4'
              width={112}
              height={112}
              className='h-28 w-28 object-cover'
            />
            <span>WHOLESALE</span>
          </li>
          <li className='flex flex-col items-center justify-center'>
            <Image
              src={marketIcon5}
              alt='Market Icon 5'
              width={112}
              height={112}
              className='h-28 w-28 object-cover'
            />
            <span>PRIVATE</span>
          </li>
        </ul>
      </div>
    </Section>
  );
}
