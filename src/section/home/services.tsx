import { Section, InfoCard } from '@/components';
import IconService1 from '@/public/assets/redesign/home/service-1.svg';
import IconService2 from '@/public/assets/redesign/home/service-2.svg';
import IconService3 from '@/public/assets/redesign/home/service-3.svg';
import IconService4 from '@/public/assets/redesign/home/service-4.svg';
import IconService5 from '@/public/assets/redesign/home/service-5.svg';
import IconService6 from '@/public/assets/redesign/home/service-6.svg';
import Image from 'next/image';

const services = [
  {
    key: 'fba',
    icon: <Image src={IconService1} alt='IconService1' width={128} />,
    title: 'Amazon FBA Prep',
    content: `We are well-equipped to handle the logistics and preparation aspects of FBA, ensuring that products are properly processed according to Amazon guidelines before being sent to Amazon's fulfillment centers.Our service spans various sourcing methods used by Amazon sellers, including Retail Arbitrage (RA), Online Arbitrage (OA), Wholesale (WS), and Private Label (PL)`,
  },
  {
    key: 'fbm',
    icon: <Image src={IconService2} alt='IconService2' width={128} />,
    title: 'FBM-Fulfilled by Merchant Cross-Dockin',
    content: `Our service provides worldwide fulfillment solutions for e-commerce sellers across various online marketplaces such as Amazon, Walmart, Etsy, eBay. We partner with all major carriers for last mile shipping. We pick, pack, and ship!`,
  },
  {
    key: 'cross-docking',
    icon: <Image src={IconService3} alt='IconService3' width={128} />,
    title: 'Cross-Docking',
    content: `We receive your pallets, store them, and forward them on to their next destination when you're ready. The next destination can be a marketplace fulfillment center, retail distribution, your client, or another 3PL facility`,
  },
  {
    key: 'bkp',
    icon: <Image src={IconService4} alt='IconService4' width={128} />,
    title: 'Bunding, Kitting, and Packing',
    content: `Send your merchandise directly from the supplier and we prepare it for its sale destination. We can bundle items, create kits, insert marketing materials and custom package your merchandise.`,
  },
  {
    key: 'marketplace',
    icon: <Image src={IconService5} alt='IconService5' width={128} />,
    title: 'Forwarding to Marketplace',
    content: `We can pick, inspect, and label your cartons to fulfill your marketplace shipment plans. We ship LTL, FTL, and all major carriers. We also use Amazon partner carrier shipping`,
  },
  {
    key: 'warehouse',
    icon: <Image src={IconService6} alt='IconService6' width={128} />,
    title: 'Warehouse & Storage',
    content: `Short term and long term storage available for boxes, pallets, and full containers at set prices throughout the year.`,
  },
];

export default function Services() {
  return (
    <Section id='main-services' className='bg-white'>
      <h2 className='mb-8 text-primary'>Our Services</h2>
      <div className='grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8 xl:grid-cols-3 xl:justify-between xl:gap-x-24 xl:gap-y-8'>
        {services.map((service) => (
          <InfoCard {...service} />
        ))}
      </div>
    </Section>
  );
}
