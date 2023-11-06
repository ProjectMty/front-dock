import { getCurrencyFormat } from '@/utils';
import Link from 'next/link';

type PricingCardProps = {
  title: string;
  price: number;
  description: string;
  link?: string;
};

export default function PricingCard({ title, price, description, link }: PricingCardProps) {
  return (
    <div className='flex w-11/12 flex-col justify-between gap-y-6 rounded-3xl bg-white p-12 text-primary md:w-96'>
      <div className='flex flex-col gap-y-6'>
        <p className='text-sm font-black uppercase tracking-widest'>{title}</p>
        <div>
          <p className='text-7xl font-bold'>{getCurrencyFormat(price)}</p>
          <p className='text-sm text-[#5d5d5d]'>Per Unit</p>
        </div>
        <p className='text-sm font-black uppercase tracking-widest'>Description</p>
        <p className='text-lg text-[#5d5d5d]'>{description}</p>
      </div>
      <Link
        className='btn btn-secondary btn-lg text-lg tracking-wider text-primary'
        href={`/${link}`}
      >
        Started
      </Link>
    </div>
  );
}

PricingCard.defaultProps = {
  link: 'contact',
};
