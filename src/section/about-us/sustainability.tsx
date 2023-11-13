import { InfoCard, Section } from '@/components';
import IconSustainability1 from '@/public/assets/redesign/about/sustainability-icon-1.svg';
import IconSustainability2 from '@/public/assets/redesign/about/sustainability-icon-2.svg';
import IconSustainability3 from '@/public/assets/redesign/about/sustainability-icon-3.svg';
import IconSustainability4 from '@/public/assets/redesign/about/sustainability-icon-4.svg';
import IconSustainability5 from '@/public/assets/redesign/about/sustainability-icon-5.svg';
import IconSustainability6 from '@/public/assets/redesign/about/sustainability-icon-6.svg';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import Image from 'next/image';

const initial = { opacity: 0, y: -20 };
const animate = { opacity: 1, y: 0 };

const services = [
  {
    key: 'er',
    icon: <Image src={IconSustainability1} alt='IconSustainability1' width={128} />,
    title: 'Enviromental Responsibility',
    content: `We are committed to minimizing environmental footprint by implementing eco-friendly practices throughout our operations.`,
  },
  {
    key: 'scs',
    icon: <Image src={IconSustainability2} alt='IconSustainability2' width={128} />,
    title: 'Supply Chain Sustainability',
    content: `We ensure that our supply chain partners also adhere to sustainable practices, such as ethical sourcing, fair labor practices, and reduced carbon emissions during transportation.`,
  },
  {
    key: 'ci',
    icon: <Image src={IconSustainability3} alt='IconSustainability3' width={128} />,
    title: 'Continuous Improvement',
    content: `Front Dock is committed to an ongoing sustainability journey, regularly evaluating and improving its sustainability initiatives to meet evolving standards and customer expectations.`,
  },
  {
    key: 'ce',
    icon: <Image src={IconSustainability4} alt='IconSustainability4' width={128} />,
    title: 'Client Education',
    content: `We provide guidance and assistance to our clients, enabling them to embrace sustainable practices in their ecommerce operations and advocating for environmentally friendly options in product design, packaging, and transportation.`,
  },
  {
    key: 'pps',
    icon: <Image src={IconSustainability5} alt='IconSustainability5' width={128} />,
    title: 'Product and Packaging Sustainability',
    content: `We actively seek sustainable product and packaging solutions for our clients, encouraging the use of recyclable materials and reduced packaging waste.`,
  },
  {
    key: 'cn',
    icon: <Image src={IconSustainability6} alt='IconSustainability6' width={128} />,
    title: 'Carbon Neutrality',
    content: `We are fully committed to an ongoing sustainability journey, regularly evaluating and improving our sustainability initiatives to meet evolving standards and customer expectations.`,
  },
];

export default function Sustainability() {
  return (
    <>
      <section className='relative w-full' id='sustainability'>
        <div
          className={clsx(
            'bg-about-banner',
            'flex w-full items-end bg-cover bg-fixed bg-center',
            'before:pointer-events-none before:absolute before:left-0 before:top-0 before:w-full before:bg-primary/20 before:content-["*"]',
            'px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 2xl:px-32',
            'py-8',
            'min-h-[240px] before:min-h-[240px] lg:min-h-[256px] before:lg:min-h-[256px] 2xl:min-h-[288px] before:2xl:min-h-[288px]',
          )}
        >
          <motion.h2
            className='text-white drop-shadow-2xl'
            initial={initial}
            whileInView={animate}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Sustainability
          </motion.h2>
        </div>
      </section>
      <Section id='sustainability-services' className='bg-white'>
        <div className='grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8 xl:grid-cols-3 xl:justify-between xl:gap-x-24 xl:gap-y-8'>
          {services.map((service) => (
            <InfoCard {...service} />
          ))}
        </div>
      </Section>
    </>
  );
}
