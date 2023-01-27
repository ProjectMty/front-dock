import { ReactNode } from 'react';

type SectionProps = { id: string; children: ReactNode | ReactNode[] };

export default function Section({ id, children }: SectionProps) {
  return (
    <section
      id={id}
      className='bg-primary px-5 pb-7 text-base lg:px-12 lg:text-lg 2xl:px-80 2xl:pb-20 2xl:text-xl'
    >
      {children}
    </section>
  );
}
