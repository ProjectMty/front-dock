import type { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import { ReactNode } from 'react';
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
    <ul className='grid w-fit gap-y-4'>
      {products.map(({ id, icon, description }, index) => (
        <motion.li
          key={id}
          className='flex items-center space-x-7'
          initial={{ y: -10, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <ProductIcon
            icon={icon}
            color={index % 2 === 0 ? 'primary' : 'secondary'}
          />
          <p className='text-left'>{description}</p>
        </motion.li>
      ))}
    </ul>
  );
}
