import { ReactNode } from 'react';

type InfoCardProps = {
  icon: ReactNode;
  title: string;
  content: string;
};

export default function InfoCard({ icon, title, content }: InfoCardProps) {
  return (
    <div className='info-card-square relative flex min-h-[450px] flex-col items-center justify-start gap-4 bg-primary p-6 text-center text-white shadow'>
      {icon}
      <h4 className='text-2xl font-bold capitalize'>{title}</h4>
      <p>{content}</p>
    </div>
  );
}
