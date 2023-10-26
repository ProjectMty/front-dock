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
import { useMemo } from 'react';

const initial = { opacity: 0, y: -20 };
const animate = { opacity: 1, y: 0 };

export default function Returns() {
  const products = useMemo(
    () => [
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
    ],
    [],
  );

  return (
    <section className='space-y-6 bg-white px-5 py-8 text-center text-base text-primary lg:space-y-7 lg:text-xl 2xl:space-y-8 2xl:py-32 2xl:text-2xl'>
      <motion.h2
        className='text-2xl font-black lg:text-3xl 2xl:text-4xl'
        initial={initial}
        whileInView={animate}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        What products do we handle?
      </motion.h2>
      <div className='flex justify-around'>
        <ProductsList products={products} />
      </div>
    </section>
  );
}
