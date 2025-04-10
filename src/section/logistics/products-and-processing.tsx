import { ProductsList } from '@/components';
import {
  faBabyCarriage,
  faBlender,
  faCarBattery,
  faCookieBite,
  faCouch,
  faGem,
  faMugSaucer,
  faPlug,
  faPuzzlePiece,
  faScrewdriverWrench,
  faShirt,
  faTableTennisPaddleBall,
  faToiletPortable,
} from '@fortawesome/free-solid-svg-icons';
import processingOtion1 from '@/public/assets/redesign/logistics/processing-options-1.svg';
import processingOtion2 from '@/public/assets/redesign/logistics/processing-options-2.svg';
import processingOtion3 from '@/public/assets/redesign/logistics/processing-options-3.svg';
import processingOtion4 from '@/public/assets/redesign/logistics/processing-options-4.svg';
import processingOtion5 from '@/public/assets/redesign/logistics/processing-options-5.svg';
import processingOtion6 from '@/public/assets/redesign/logistics/processing-options-6.svg';
import processingOtion7 from '@/public/assets/redesign/logistics/processing-options-7.svg';
import Image from 'next/image';
import clsx from 'clsx';
import { animateFadeIn, animateIconsChild, animateIconsParent } from '@/utils';
import { motion } from 'framer-motion';

const products = [
  {
    id: 'products1',
    icon: faPlug,
    description: 'Consumer electronics',
  },
  {
    id: 'products2',
    icon: faPuzzlePiece,
    description: 'Toys',
  },
  {
    id: 'products3',
    icon: faShirt,
    description: (
      <>
        Apparel <br />
        (clothing and footwear)
      </>
    ),
  },
  {
    id: 'products4',
    icon: faGem,
    description: 'Fashion jewelry',
  },
  {
    id: 'products5',
    icon: faTableTennisPaddleBall,
    description: 'Sporting goods',
  },
  {
    id: 'products6',
    icon: faMugSaucer,
    description: 'Housewares',
  },
  {
    id: 'products7',
    icon: faBabyCarriage,
    description: 'Baby items',
  },
  {
    id: 'products8',
    icon: faCookieBite,
    description: 'Food',
  },
  {
    id: 'products9',
    icon: faScrewdriverWrench,
    description: 'Tools',
  },
  {
    id: 'products10',
    icon: faCarBattery,
    description: 'Small machinery',
  },
  {
    id: 'products11',
    icon: faBlender,
    description: 'Small appliances',
  },
  {
    id: 'products12',
    icon: faCouch,
    description: 'Furniture',
  },
  {
    id: 'products13',
    icon: faToiletPortable,
    description: 'Appliances',
  },
];

const process = [
  {
    id: 'process1',
    icon: processingOtion1,
    description: 'Return to seller upon arrival',
    color: 'primary',
  },
  {
    id: 'process2',
    icon: processingOtion5,
    description: 'Resell to wholesalers',
    color: 'secondary',
  },
  {
    id: 'process3',
    icon: processingOtion2,
    description: 'Consolidate and return to seller',
    color: 'primary',
  },
  {
    id: 'process4',
    icon: processingOtion6,
    description: 'Donate',
    color: 'secondary',
  },
  {
    id: 'process5',
    icon: processingOtion3,
    description: 'Repackage and ship to 3rd party',
    color: 'primary',
  },
  {
    id: 'process6',
    icon: processingOtion7,
    description: 'Dispose',
    color: 'secondary',
  },
  {
    id: 'process7',
    icon: processingOtion4,
    description: 'Repackage, create new SKU, and send to FBA',
    color: 'primary',
  },
];

export default function ProductsAndProcessing() {
  return (
    <section className='space-y-6 bg-white px-5 py-8 text-center text-base text-primary lg:space-y-7 lg:text-xl 2xl:space-y-8 2xl:py-32 2xl:text-2xl'>
      <motion.h3 {...animateFadeIn} className='text-2xl font-black lg:text-3xl 2xl:text-4xl'>
        What products do we handle?
      </motion.h3>
      <div className='flex justify-around'>
        <ProductsList products={products} />
      </div>
      <motion.h3 {...animateFadeIn} className='text-2xl font-black lg:text-3xl 2xl:text-4xl'>
        What are the processing options?
      </motion.h3>
      <div className='flex justify-around'>
        <motion.ul
          {...animateIconsParent}
          className='grid w-2/3 gap-x-0 gap-y-4 lg:grid-cols-2 lg:gap-x-20 lg:text-xl 2xl:grid-cols-3 2xl:gap-x-32 2xl:gap-y-14 2xl:text-2xl'
        >
          {process.map(({ id, icon, description, color }) => (
            <motion.li id={id} className='flex items-center gap-x-7' {...animateIconsChild}>
              <Image
                src={icon}
                alt={description}
                width={54}
                className={clsx(
                  'h-[34px] w-[34px] rounded-full p-1 lg:h-[38px] lg:w-[38px] 2xl:h-[52px] 2xl:w-[52px]',
                  color === 'primary' ? 'bg-secondary' : 'bg-primary',
                )}
              />
              <p className='w-fit text-left'>{description}</p>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
