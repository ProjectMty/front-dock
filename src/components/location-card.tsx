import type { ReactNode } from 'react';

type LocationCardProps = {
  children: ReactNode | ReactNode[];
};

export default function LocationCard({ children }: LocationCardProps) {
  return (
    <div className='border border-slate-300 px-6 py-5 text-sm shadow-lg drop-shadow-lg'>
      {children}
    </div>
  );
}
