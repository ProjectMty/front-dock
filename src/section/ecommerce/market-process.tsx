import { Diagram, Section } from '@/components';
import diagram2step1 from '@/public/assets/redesign/ecommerce/diagram-2-step-1.webp';
import diagram2step2 from '@/public/assets/redesign/ecommerce/diagram-2-step-2.webp';
import diagram2step3 from '@/public/assets/redesign/ecommerce/diagram-2-step-3.webp';
import diagram2step4 from '@/public/assets/redesign/ecommerce/diagram-2-step-4.webp';
import diagram2step5 from '@/public/assets/redesign/ecommerce/diagram-2-step-5.webp';

const steps = [
  {
    id: 'diagram2step1',
    image: diagram2step1,
    description: 'You ship 2 pallets of headphones from your supplier to our ware- house in Texas.',
  },
  {
    id: 'diagram2step2',
    image: diagram2step2,
    description:
      'Once the merchandise is received in Texas, we break down the pallets, check the merchandise in, review your FBA plans, print FNSKU, master carton, and pallet labels.',
  },
  {
    id: 'diagram2step3',
    image: diagram2step3,
    description:
      'We select Amazon preferred carrier rates and print shipping labels for the various shipment plans.',
  },
  {
    id: 'diagram2step4',
    image: diagram2step4,
    description:
      'The 2 pallets have become 5 dif- ferent FBA shipments going to 5 different Amazon FCs.',
  },
  {
    id: 'diagram2step5',
    image: diagram2step5,
    description:
      'The 5 plans are shipped to their as- signed FCs. Your boxes are received by Amazon and your merchandise is now for sale.',
  },
];

export default function MarketProcess() {
  return (
    <Section id='market-process' className='bg-white text-primary'>
      <h2>Operational Process</h2>
      <Diagram section='market' steps={steps} />
    </Section>
  );
}
