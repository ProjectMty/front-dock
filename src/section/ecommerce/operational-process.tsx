import { Diagram, Section } from '@/components';
import diagram1step1 from '@/public/assets/redesign/ecommerce/diagram-1-step-1.webp';
import diagram1step2 from '@/public/assets/redesign/ecommerce/diagram-1-step-2.webp';
import diagram1step3 from '@/public/assets/redesign/ecommerce/diagram-1-step-3.webp';
import diagram1step4 from '@/public/assets/redesign/ecommerce/diagram-1-step-4.webp';
import diagram1step5 from '@/public/assets/redesign/ecommerce/diagram-1-step-5.webp';
import { animateFadeIn } from '@/utils';
import { motion } from 'framer-motion';

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
    description: 'Our team receives the order, picks the product, packs the order.',
  },
  {
    id: 'diagram1step3',
    image: diagram1step3,
    description: 'Inserts packing slip or marketing materials, applies a shipping label.',
  },
  {
    id: 'diagram1step4',
    image: diagram1step4,
    description: 'Routes the package with the last mile carrier.',
  },
  {
    id: 'diagram1step5',
    image: diagram1step5,
    description: 'The last mile carrier delivers packages to the buyer in Vermont.',
  },
];

export default function OperationalProcess() {
  return (
    <Section id='operational-process' className='bg-white text-primary'>
      <motion.h2 {...animateFadeIn}>Operational Process</motion.h2>
      <Diagram section='operational-process' steps={steps} />
    </Section>
  );
}
