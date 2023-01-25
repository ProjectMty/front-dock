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
    <div className='grid gap-y-4'>
      {products.map(({ id, icon, description }, index) => (
        <div key={id} className='flex items-center gap-x-4 text-left'>
          <ProductIcon
            icon={icon}
            color={index % 2 === 0 ? 'primary' : 'secondary'}
          />
          <p>{description}</p>
        </div>
      ))}
    </div>
  );
}
