import { Hero, InfoCard, Section } from '@/components';
import FbaPrepIcon from '@/icons/fba-prep-icon';
import clsx from 'clsx';
import { motion } from 'framer-motion';

const initial = { opacity: 0, y: -20 };
const animate = { opacity: 1, y: 0 };

const services = [
  {
    key: 'er',
    icon: <FbaPrepIcon size={128} />,
    title: 'Enviromental Responsibility',
    content: `We are committed to minimizing environmental footprint by implementing eco-friendly practices throughout our operations.`,
  },
  {
    key: 'scs',
    icon: <FbaPrepIcon size={128} />,
    title: 'Supply Chain Sustainability',
    content: `We ensure that our supply chain partners also adhere to sustainable practices, such as ethical sourcing, fair labor practices, and reduced carbon emissions during transportation.`,
  },
  {
    key: 'ci',
    icon: <FbaPrepIcon size={128} />,
    title: 'Continuous Improvement',
    content: `Front Dock is committed to an ongoing sustainability journey, regularly evaluating and improving its sustainability initiatives to meet evolving standards and customer expectations.`,
  },
  {
    key: 'ce',
    icon: <FbaPrepIcon size={128} />,
    title: 'Client Education',
    content: `We provide guidance and assistance to our clients, enabling them to embrace sustainable practices in their ecommerce operations and advocating for environmentally friendly options in product design, packaging, and transportation.`,
  },
  {
    key: 'pps',
    icon: <FbaPrepIcon size={128} />,
    title: 'Product and Packaging Sustainability',
    content: `We actively seek sustainable product and packaging solutions for our clients, encouraging the use of recyclable materials and reduced packaging waste.`,
  },
  {
    key: 'cn',
    icon: <FbaPrepIcon size={128} />,
    title: 'Carbon Neutrality',
    content: `We are fully committed to an ongoing sustainability journey, regularly evaluating and improving our sustainability initiatives to meet evolving standards and customer expectations.`,
  },
];

export default function AboutUs() {
  return (
    <>
      <Hero image='bg-about-hero'>About Us</Hero>
      <Section id='mision' className='space-y-8 bg-primary text-white'>
        <h2>Mision</h2>
        <div className='flex flex-wrap justify-between'>
          <div className='flex flex-col gap-y-8 lg:w-1/2'>
            <p>
              Front Dock&apos;s mission is to empower businesses to thrive in
              the e-commerce landscape by providing tailored, comprehensive
              solutions that go beyond the capabilities of standard 3PL
              services.
            </p>
            <p>
              We are dedicated to making your business look good by offering
              custom services at competitive pricing and ensuring that our
              clients can efficiently manage their operations whether they are
              based in the{' '}
              <span className='font-bold'>USA, Mexico, Canada or beyond</span>.
            </p>
          </div>
          <div className={clsx('rounded-full bg-red-600', 'h-16 w-16')} />
        </div>
      </Section>
      <Section id='vision' className='space-y-8 bg-secondary  text-primary'>
        <h2>Vision</h2>
        <div className='flex flex-wrap justify-between'>
          <div className='flex flex-col gap-y-8 lg:w-1/2'>
            <p>
              Front Dock&apos;s mission is to empower businesses to thrive in
              the e-commerce landscape by providing tailored, comprehensive
              solutions that go beyond the capabilities of standard 3PL
              services.
            </p>
            <p>
              We are dedicated to making your business look good by offering
              custom services at competitive pricing and ensuring that our
              clients can efficiently manage their operations whether they are
              based in the{' '}
              <span className='font-bold'>USA, Mexico, Canada or beyond</span>.
            </p>
          </div>
          <div className={clsx('rounded-full bg-red-600', 'h-16 w-16')} />
        </div>
      </Section>
      <Section id='core-values' className='space-y-8 bg-primary text-white'>
        <h2>Core Values</h2>
        <div className='flex flex-col justify-between gap-16 text-center md:flex-row'>
          <div>
            <p>
              We are dedicated to excellence in all aspects of our services. We
              take pride in offering 100% insurance coverage on all merchandise
              in our warehouse, demonstrating our commitment to reliability and
              accountability.
            </p>
          </div>
          <div>
            <p>
              At Front Dock, the customer is at the heart of everything we do.
              We are committed to understanding the unique needs and goals of
              each client and providing the support required for their success.
            </p>
          </div>
          <div>
            <p>
              With cross-border fulfillment and freight forwarding capabilities
              to Canada and Mexico, we extend our reach to help businesses
              expand their markets and explore new opportunities on an
              international scale
            </p>
          </div>
        </div>
      </Section>
      <div className='w-full' id='sustainability'>
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
      </div>
      <Section id='main-services' className='bg-white'>
        <div className='grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8 xl:grid-cols-3 xl:justify-between xl:gap-x-24 xl:gap-y-8'>
          {services.map((service) => (
            <InfoCard {...service} />
          ))}
        </div>
      </Section>
    </>
  );
}
