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
import { useMemo } from 'react';

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
    <section className='bg-white px-5 py-8 text-center text-primary'>
      <h2 className='pb-8 text-2xl font-black'>RETURNS SOLUTIONS</h2>
      <p className='mb-5 text-xl'>What products do we handle?</p>
      <div className='flex justify-around'>
        <ProductsList products={products} />
      </div>
    </section>
  );
}
