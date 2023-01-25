import type { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import type { ReactNode } from 'react';
import ProductIcon from './product-icon';

type ProductsListProps = {
  products: {
    id: string;
    icon: IconDefinition;
    description: string | ReactNode;
  }[];
};

export default function ProductsList({ products }: ProductsListProps) {
  return (
    <div className='grid w-fit gap-y-4'>
      {products.map(({ id, icon, description }, index) => (
        <div key={id} className='flex items-center space-x-7'>
          <ProductIcon
            icon={icon}
            color={index % 2 === 0 ? 'primary' : 'secondary'}
          />
          <p className='text-left'>{description}</p>
        </div>
      ))}
    </div>
  );
}
