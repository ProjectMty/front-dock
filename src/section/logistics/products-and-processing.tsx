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
import { motion } from 'framer-motion';
import processingOtion1 from '@/public/assets/redesign/logistics/processing-options-1.svg';
import processingOtion2 from '@/public/assets/redesign/logistics/processing-options-2.svg';
import processingOtion3 from '@/public/assets/redesign/logistics/processing-options-3.svg';
import processingOtion4 from '@/public/assets/redesign/logistics/processing-options-4.svg';
import processingOtion5 from '@/public/assets/redesign/logistics/processing-options-5.svg';
import processingOtion6 from '@/public/assets/redesign/logistics/processing-options-6.svg';
import processingOtion7 from '@/public/assets/redesign/logistics/processing-options-7.svg';
import Image from 'next/image';
import clsx from 'clsx';

const initial = { opacity: 0, y: -20 };
const animate = { opacity: 1, y: 0 };

const products = [
  {
    id: 'faPlug',
    icon: faPlug,
    description: 'Consumer electronics',
  },
  {
    id: 'faPuzzlePiece',
    icon: faPuzzlePiece,
    description: 'Toys',
  },
  {
    id: 'faShirt',
    icon: faShirt,
    description: (
      <>
        Apparel <br />
        (clothing and footwear)
      </>
    ),
  },
  {
    id: 'faGem',
    icon: faGem,
    description: 'Fashion jewelry',
  },
  {
    id: 'faTableTennisPaddleBall',
    icon: faTableTennisPaddleBall,
    description: 'Sporting goods',
  },
  {
    id: 'faMugSaucer',
    icon: faMugSaucer,
    description: 'Housewares',
  },
  {
    id: 'faBabyCarriage',
    icon: faBabyCarriage,
    description: 'Baby items',
  },
  {
    id: 'faCookieBite',
    icon: faCookieBite,
    description: 'Food',
  },
  {
    id: 'faScrewdriverWrench',
    icon: faScrewdriverWrench,
    description: 'Tools',
  },
  {
    id: 'faCarBattery',
    icon: faCarBattery,
    description: 'Small machinery',
  },
  {
    id: 'faBlender',
    icon: faBlender,
    description: 'Small appliances',
  },
  {
    id: 'faCouch',
    icon: faCouch,
    description: 'Furniture',
  },
  {
    id: 'faToiletPortable',
    icon: faToiletPortable,
    description: 'Appliances',
  },
];

const process = [
  {
    id: 'processingOtion1',
    icon: processingOtion1,
    description: 'Return to seller upon arrival',
    color: 'primary',
  },
  {
    id: 'processingOtion5',
    icon: processingOtion5,
    description: 'Resell to wholesalers',
    color: 'secondary',
  },
  {
    id: 'processingOtion2',
    icon: processingOtion2,
    description: 'Consolidate and return to seller',
    color: 'primary',
  },
  {
    id: 'processingOtion6',
    icon: processingOtion6,
    description: 'Donate',
    color: 'secondary',
  },
  {
    id: 'processingOtion3',
    icon: processingOtion3,
    description: 'Repackage and ship to 3rd party',
    color: 'primary',
  },
  {
    id: 'processingOtion7',
    icon: processingOtion7,
    description: 'Dispose',
    color: 'secondary',
  },
  {
    id: 'processingOtion4',
    icon: processingOtion4,
    description: 'Repackage, create new SKU, and send to FBA',
    color: 'primary',
  },
];

export default function ProductsAndProcessing() {
  return (
    <section className='space-y-6 bg-white px-5 py-8 text-center text-base text-primary lg:space-y-7 lg:text-xl 2xl:space-y-8 2xl:py-32 2xl:text-2xl'>
      <motion.h3
        className='text-2xl font-black lg:text-3xl 2xl:text-4xl'
        initial={initial}
        whileInView={animate}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        What products do we handle?
      </motion.h3>
      <div className='flex justify-around'>
        <ProductsList products={products} />
      </div>
      <motion.h3
        className='text-2xl font-black lg:text-3xl 2xl:text-4xl'
        initial={initial}
        whileInView={animate}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        What are the processing options?
      </motion.h3>
      <div className='flex justify-around'>
        <ul className='grid w-2/3 gap-x-0 gap-y-4 lg:grid-cols-2 lg:gap-x-20 lg:text-xl 2xl:grid-cols-3 2xl:gap-x-32 2xl:gap-y-14 2xl:text-2xl'>
          {process.map(({ id, icon, description, color }) => (
            <motion.li
              key={id}
              className='flex items-center gap-x-7'
              initial={{ y: -10, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
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
        </ul>
      </div>
    </section>
  );
}
