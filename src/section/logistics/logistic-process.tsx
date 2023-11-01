import { Diagram, Section } from '@/components';
import diagram1step1 from '@/public/assets/redesign/ecommerce/diagram-1-step-1.png';
import diagram1step2 from '@/public/assets/redesign/ecommerce/diagram-1-step-2.png';
import diagram1step3 from '@/public/assets/redesign/ecommerce/diagram-1-step-3.png';
import diagram1step4 from '@/public/assets/redesign/ecommerce/diagram-1-step-4.png';
import diagram1step5 from '@/public/assets/redesign/ecommerce/diagram-1-step-5.png';

const steps = [
  {
    id: 'diagram1step1',
    image: diagram1step1,
    description:
      'A buyer in Vermont purchases an item from your online store or your marketplace store.',
  },
  {
    id: 'diagram1step2',
    image: diagram1step2,
    description:
      'Our team receives the order, picks the product, packs the order.',
  },
  {
    id: 'diagram1step3',
    image: diagram1step3,
    description:
      'Inserts packing slip or marketing materials, applies a shipping label.',
  },
  {
    id: 'diagram1step4',
    image: diagram1step4,
    description: 'Routes the package with the last mile carrier.',
  },
  {
    id: 'diagram1step5',
    image: diagram1step5,
    description:
      'The last mile carrier delivers packages to the buyer in Vermont.',
  },
];
export default function LogisticProcess() {
  return (
    <Section id='logistic-process' className='bg-white text-primary'>
      <h2>Operational Process</h2>
      <Diagram section='operational-process' steps={steps} />
    </Section>
  );
}
