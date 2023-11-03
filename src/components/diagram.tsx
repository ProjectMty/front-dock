import clsx from 'clsx';
import Image, { StaticImageData } from 'next/image';

type StepData = {
  id: string;
  image: StaticImageData;
  description: string;
};

type DiagramProps = {
  section: string;
  steps: Array<StepData>;
};

export default function Diagram({ section, steps }: DiagramProps) {
  return (
    <div
      className={clsx(
        'flex flex-wrap items-baseline justify-center gap-16 xl:gap-x-32 xl:gap-y-8',
        'mx-auto max-w-full 2xl:max-w-7xl',
      )}
    >
      {steps.map(({ id, image, description }, i) => (
        <div key={`${section}-${id}`} className='relative max-w-[250px] text-center'>
          <div className='absolute right-6 top-4 flex h-7 w-7 items-center justify-center rounded-full bg-secondary text-center font-black text-white drop-shadow'>
            {i + 1}
          </div>
          <div className='flex flex-col items-center'>
            <Image src={image} alt={description} width={192} className='w-48' />
            <span className='font-montserrat text-sm font-medium text-gray-500'>{description}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
