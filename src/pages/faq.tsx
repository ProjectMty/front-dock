/* eslint-disable sonarjs/no-duplicate-string */
import { Hero } from '@/components';
import { Questions3PL, QuestionsReturns } from '@/section';
import { NextSeo } from 'next-seo';

const questions3pl = [
  {
    id: crypto.randomUUID(),
    question: 'Why FRONTDOCK?',
    response: (
      <div className='space-y-2'>
        <p>
          A multitude of our esteemed clients perceive FRONTDOCK as a comprehensive supply-chain
          resolution, which empowers customers to allocate greater energy towards their primary
          business strengths. Our focal point is to center our expertise in reducing expenses,
          freight costs, and the various management and administrative outlays.
        </p>
        <p className='inline-block'>Here are some instances of our capabilities:</p>
        <ul className='list-inside list-disc'>
          <li>Facilitating cross-border fulfillment into Mexico and Canada.</li>
          <li>Multiple warehouses in the US which can result in saving on shipping expenses.</li>
          <li>Assurance through insurance coverage and order fulfillment guarantees.</li>
          <li>
            Management of merchandise inventory along with the provision of monthly reports,
            including item photos.
          </li>
          <li>
            Receiving goods in Mexico, fulfilling orders for end customers, and overseeing last-mile
            delivery across the entirety of the Mexican Republic.
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: crypto.randomUUID(),
    question: 'What are the benefits of using a 3PL provider?',
    response:
      'Our support enables businesses to reduce costs, particularly concerning warehouse expenses. Through a partnership with FRONTDOCK, you avoid the costs of having your own warehouse space and staff. This includes expenses for recruitment, training, salaries, and benefits. Additionally, we mitigate legal and financial risks by handling compliance, safety regulations, and indu*ry challenges, letting you focus on core activities. Our services include transportation, warehousing, distribution, and freight forwarding.',
  },
  {
    id: crypto.randomUUID(),
    question: 'How do I know if my business needs 3PL services?',
    response: `If you're facing challenges related to the efficiency of your logistics, scalability or the management of costs. Also, as an e-seller,managing everything during peak seasons can be incredibly challenging. But with 9, those worries are a thing of the past. We offer essential assistance during business growth and peak times, with adaptable resources for increased demand. This ensures smooth warehousing, order fulfillment, and transportation. No need for costly expansions, enabling businesses to scale smoothly while prioritizing core operations and meeting customer expectations.`,
  },
  {
    id: crypto.randomUUID(),
    question: 'What are your processing times?',
    response: (
      <div className='space-y-4'>
        <div>
          <p>Inbound and Outbound Processing Times:</p>
          <span className='inline-block'>• Normal: 3-5 business days.</span>
        </div>
        <div>
          <p>
            During peak times, such as holidays or special promotions, it might take longer due to
            increased demand and order volumes:
            <span className='inline-block'>• Peak dates: 7-10 business days.</span>
            <span className='inline-block'>• Return Processing: 10-15 business days.</span>
          </p>
        </div>
        <div>
          <p>
            Returns for FBA orders typically take longer to process compared to outbound shipments,
            as they involve receiving, inspecting, and restocking returned items.
          </p>
        </div>
        <div>
          <p>
            For FMB orders, processing and shipping times are determined by the merchant rather than
            Amazon. It&apos;s important for both FBA and FBM sellers to communicate accurate
            processing and shipping times to their customers to manage expectations and provide a
            positive shopping experience.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: crypto.randomUUID(),
    question: 'How do you ensure the security and safety of my shipments?',
    response:
      'Ensuring the security and safety of your shipments is our top priority, by adhering to strict industry regulations this is possible. Our commitment is to safeguard your goods through various measures such as advanced security cameras, real-time monitoring in our warehouses, gated areas, insurance protection for your goods against unforeseen events, highly trained staff to handle shipments securely, following procedures and security protocols.',
  },
  {
    id: crypto.randomUUID(),
    question: 'Can you customize your services to meet the specific needs of my business?',
    response:
      'Absolutely! Our team is dedicated to tailoring our services to align perfectly with your specific logistics requirements. While we offer essential 3PL services like order fulfillment and merchandise storage, our true expertise lies in crafting a 3PL package that caters to your unique demands. Your success is our priority!',
  },
  {
    id: crypto.randomUUID(),
    question: 'What types of products does FRONTDOCK specialize in?',
    response: (
      <div className='space-y-4'>
        <p>
          Efficient Handling of Heavy and Bulky Orders, Management of Lightweight yet Large Items &
          Expertise in Fulfilling Fragile Products
        </p>
        <table className='table'>
          <tbody>
            <tr>
              <td className='border border-white'>Electronics</td>
              <td className='border border-white'>Apparel and Accessories</td>
            </tr>
            <tr>
              <td className='border border-white'>Toys and Games</td>
              <td className='border border-white'>Beauty and Personal Care</td>
            </tr>
            <tr>
              <td className='border border-white'>Books, Music and Media</td>
              <td className='border border-white'>Tools</td>
            </tr>
            <tr>
              <td className='border border-white'>Jewelry and Watches</td>
              <td className='border border-white'>Baby and Maternity</td>
            </tr>
            <tr>
              <td className='border border-white'>Food</td>
              <td className='border border-white'>Small appliances</td>
            </tr>
            <tr>
              <td className='border border-white'>Appliances</td>
              <td className='border border-white'>Sports and Outdoors</td>
            </tr>
          </tbody>
        </table>
      </div>
    ),
  },
  {
    id: crypto.randomUUID(),
    question: 'How can I track my shipments?',
    response: `Track your shipments easily with the provided tracking number and get real-time updates on your merchandise's progress. Plus, enjoy automatic email notifications as your shipment moves through. Our services include 24/7 customer support to support you with any tracking inquiries.`,
  },
];

const questionsReturns = [
  {
    id: crypto.randomUUID(),
    question: 'Do you handle heavy and/or bulky items?',
    response:
      'Yes! We service appliances and furniture returns. We do not have a weight or size limit. Please note we may have to quote your project out separately if your items exceed 100 lbs in actual or DIM weight.',
  },
  {
    id: crypto.randomUUID(),
    question: 'Do you handle fragile items?',
    response:
      'Yes! We are a top notch service provider and have ample experience with fragile items including collectibles, antiques, glassware, TVs, and more! We document every step of the process with pictures and video, so we will know if there was damage and if the damage was caused by us.',
  },
  {
    id: crypto.randomUUID(),
    question: 'Is my merchandise secure in your warehouse?',
    response:
      'Yes! All of our locations are monitored by a complete real time security system including cameras that communicate directly with local authorities. All of our employees are subjected to background checks.High value merchandise is kept in a separate, secured access restricted area of the warehouse.',
  },
  {
    id: crypto.randomUUID(),
    question: 'Is my merchandise insured?',
    response:
      'Yes! We insure your merchandise at 100% of the return price (retail price your buyer paid). We are liable for any items that are lost, stolen or damaged while in our care. We do not have a shrinkage allowance. We are responsible for every product in our care.',
  },
  {
    id: crypto.randomUUID(),
    question: 'Do you repair or clean items?',
    response: `No. We open the packages to confirm the item returned is what is expected. We upload notes and pictures to document the item's condition. We offer various options for returns actions. We do not offer repair or cleaning services.`,
  },
  {
    id: crypto.randomUUID(),
    question: 'What charities do you donate to?',
    response: `We do not select charities. We complete the logistics process to get the merchandise to the charity you choose. We can provide you a list of charities other clients work with if you'd like additional options for your donation.`,
  },
  {
    id: crypto.randomUUID(),
    question: 'Is there a monthly return minimum?',
    response: `No! We can process 1 return or we can process your entire return load. We provide a solution for all types of sellers.`,
  },
];

export default function FaqPage() {
  return (
    <>
      <NextSeo title='FAQ | Front Dock' />
      <Hero image='bg-faq-hero'>FAQ</Hero>
      <Questions3PL questions={questions3pl} />
      <QuestionsReturns questions={questionsReturns} />
    </>
  );
}
