import { getCurrencyFormat } from '@/utils';
import { ReactNode } from 'react';

type ReturnCostData = {
  title: string;
  limit: 'N/A';
  receiving: string;
  type: string;
  typeFee: ReactNode;
  shipping: string;
};

const returnCostsData: Record<string, ReturnCostData> = {
  consolidate: {
    title: 'Consolidate',
    limit: 'N/A',
    receiving: getCurrencyFormat(1.5),
    type: 'Consolidate',
    typeFee: getCurrencyFormat(0.5),
    shipping: `At seller's expense, you can schedule LTL or carrier pickup, or you can provide us with shipping labels.`,
  },
  repackageShip: {
    title: 'Repackage and ship',
    limit: 'N/A',
    receiving: getCurrencyFormat(1.5),
    type: 'Repackage',
    typeFee: (
      <div className='space-y-3'>
        <p>$1.00 for items less than 5 lbs</p>
        <p>$2.00 for items less than 10 lbs</p>
        <p>$4.00 for items less than 25 lbs</p>
        <p>$5.00 for items less than 50 lbs</p>
        <p>$7.00 for items greater than 50 lbs</p>
      </div>
    ),
    shipping: `At seller's expense, you can schedule LTL or carrier pickup, or you can provide us with shipping labels.`,
  },
  resale: {
    title: 'Resale',
    limit: 'N/A',
    receiving: getCurrencyFormat(1.5),
    type: 'Resale',
    typeFee: getCurrencyFormat(1.5),
    shipping: `N/A`,
  },
  donate: {
    title: 'Donate',
    limit: 'N/A',
    receiving: getCurrencyFormat(1.5),
    type: 'Processing',
    typeFee: 'N/A',
    shipping: `At the seller's expense, you can schedule LTL or carrier pickup, or
  you can provide us with shipping labels. Oftentimes, sellers already have
  shipment agreements with charities and the receiver provides the shipping
  labels. If the charity is local and you would like us to deliver or coordinate
  delivery, we will quote out transport on a case by case basis.`,
  },
  dispose: {
    title: 'Dispose',
    limit: 'N/A',
    receiving: getCurrencyFormat(1.5),
    type: 'Dispose',
    typeFee: (
      <div className='space-y-3'>
        <p>$0.50 for items less than 5 lbs</p>
        <p>$1.00 for items less than 10 lbs</p>
        <p>$2.00 for items less than 25 lbs</p>
        <p>$4.00 for items less than 50 lbs</p>
        <p>$5.50 for items greater than 50 lbs</p>
      </div>
    ),
    shipping: `N/A`,
  },
};

export default returnCostsData;
