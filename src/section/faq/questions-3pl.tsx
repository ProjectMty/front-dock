import { Questions, Section } from '@/components';
import { type Question } from '@/types';

type Questions3plProps = {
  questions: Question[];
};

export default function Questions3pl({ questions }: Questions3plProps) {
  return (
    <Section id='questions-3pl' className='bg-white !pb-0'>
      <h2 className='pb-8 text-2xl font-black text-primary lg:text-3xl 2xl:text-4xl'>3PL</h2>

      <div className='space-y-8'>
        {questions.map((question) => (
          <Questions key={question.id} {...question} />
        ))}
      </div>
    </Section>
  );
}
