/* eslint-disable sonarjs/no-duplicate-string */
import { Hero } from '@/components';
import { Questions3PL, QuestionsReturns } from '@/section';

const questions3pl = [
  {
    id: 'why',
    question: 'Why Front Dock?',
    response:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam arcu justo, vulputate quis purus faucibus, mattis mollis urna. Donec eget augue a ante sagittis rutrum sed ut diam. Pellentesque eget hendrerit sem. Morbi consequat interdum velit porta pretium. Quisque faucibus nibh sit amet velit vehicula imperdiet. Morbi at ultrices augue.',
  },
  {
    id: 'benefits',
    question: 'What are the benefits of using a 3PL provider?',
    response:
      'Our support enables businesses to reduce costs, parঞcularly concerning warehouse expenses. Through a partnership with FRONTDOCK, you avoid the costs of having your own warehouse space and staff. This includes expenses for recruitment, training, salaries, and benefits. Addiঞonally, we miঞgate legal and financial risks by handling compliance, safety regulaঞons, and industry challenges, leমng you focus on core acঞviঞes. Our services include transportaঞon, warehousing, distribuঞon, and freight forwarding.',
  },
  {
    id: 'need-3pl',
    question: 'How do I know if my business needs 3PL services?',
    response:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam arcu justo, vulputate quis purus faucibus, mattis mollis urna. Donec eget augue a ante sagittis rutrum sed ut diam. Pellentesque eget hendrerit sem. Morbi consequat interdum velit porta pretium. Quisque faucibus nibh sit amet velit vehicula imperdiet. Morbi at ultrices augue.',
  },
];

const questionsReturns = [
  {
    id: 'heavy',
    question: 'Do you handle heavy and/or bulky items?',
    response:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam arcu justo, vulputate quis purus faucibus, mattis mollis urna. Donec eget augue a ante sagittis rutrum sed ut diam. Pellentesque eget hendrerit sem. Morbi consequat interdum velit porta pretium. Quisque faucibus nibh sit amet velit vehicula imperdiet. Morbi at ultrices augue.',
  },
  {
    id: 'fragile',
    question: 'Do you handle fragile items?',
    response:
      'Yes! We are a top notch service provider and have ample experience with fragile items including collectibles, antiques, glassware, TVs, and more! We document every step of the process with pictures and video, so we will know if there was damage and if the damage was caused by us.',
  },
  {
    id: 'need-return',
    question: 'How do I know if my business needs return services?',
    response:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam arcu justo, vulputate quis purus faucibus, mattis mollis urna. Donec eget augue a ante sagittis rutrum sed ut diam. Pellentesque eget hendrerit sem. Morbi consequat interdum velit porta pretium. Quisque faucibus nibh sit amet velit vehicula imperdiet. Morbi at ultrices augue.',
  },
];

export default function FaqPage() {
  return (
    <>
      <Hero image='bg-faq-hero'>FAQ</Hero>
      <Questions3PL questions={questions3pl} />
      <QuestionsReturns questions={questionsReturns} />
    </>
  );
}
