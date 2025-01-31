import { Diagram, Section } from '@/components';
import { animateFadeIn } from '@/utils';
import { motion } from 'framer-motion';

import diagram3step1 from './assets/logistics_1.svg';
import diagram3step2 from './assets/logistics_2.svg';
import diagram3step3 from './assets/logistics_3.svg';
import diagram3step4 from './assets/logistics_4.svg';

const steps = [
  {
    id: 'steps1',
    image: diagram3step1,
    description: 'We receive and check in your return including labeling and registration.',
  },
  {
    id: 'steps2',
    image: diagram3step2,
    description: 'Your return is inspected and categorized based on packaging and item condition.',
  },
  {
    id: 'steps3',
    image: diagram3step3,
    description: 'Your return is handled according to predefined instructions.',
  },
  {
    id: 'steps4',
    image: diagram3step4,
    description:
      'Your return is moved to the next phase and either consolidated, forwarded, repackaged, and shipped to new destination.',
  },
];
export default function LogisticProcess() {
  return (
    <Section id='logistic-process' className='bg-white text-primary'>
      <motion.h2 {...animateFadeIn}>Operational Process</motion.h2>
      <Diagram section='logistics-process' steps={steps} />
    </Section>
  );
}
