import type { ReactNode } from 'react';

type LocationCardProps = {
  children: ReactNode | ReactNode[];
};

export default function LocationCard({ children }: LocationCardProps) {
  return (
    <div className='h-fit w-[200px] border border-slate-300 p-4 text-base shadow-lg drop-shadow-lg lg:w-[242px] lg:px-5 lg:py-7 lg:text-lg 2xl:w-[350px] 2xl:px-6 2xl:py-12 2xl:text-2xl'>
      {children}
    </div>
  );
}
