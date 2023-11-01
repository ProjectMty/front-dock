import { Diagram, Section } from '@/components';
import diagram3step1 from '@/public/assets/redesign/logistics/diagram-3-step-1.png';
import diagram3step2 from '@/public/assets/redesign/logistics/diagram-3-step-2.png';
import diagram3step3 from '@/public/assets/redesign/logistics/diagram-3-step-3.png';
import diagram3step4 from '@/public/assets/redesign/logistics/diagram-3-step-4.png';
import diagram3step5 from '@/public/assets/redesign/logistics/diagram-3-step-5.png';

const steps = [
  {
    id: 'diagram3step1',
    image: diagram3step1,
    description: 'We receive your merchandise.',
  },
  {
    id: 'diagram3step2',
    image: diagram3step2,
    description: 'We receive your return instructions.',
  },
  {
    id: 'diagram3step3',
    image: diagram3step3,
    description: 'We label and register your products.',
  },
  {
    id: 'diagram3step4',
    image: diagram3step4,
    description: 'We ship the returns with the select carrier.',
  },
  {
    id: 'diagram3step5',
    image: diagram3step5,
    description: 'We send information that your goods are ready for pickup.',
  },
];
export default function LogisticProcess() {
  return (
    <Section id='logistic-process' className='bg-white text-primary'>
      <h2>Operational Process</h2>
      <Diagram section='logistics-process' steps={steps} />
    </Section>
  );
}
