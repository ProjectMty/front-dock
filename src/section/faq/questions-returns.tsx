import { Questions, Section } from '@/components';
import { type Question } from '@/types';
import { motion } from 'framer-motion';

type QuestionsReturnsProps = {
  questions: Question[];
};

export default function QuestionsReturns({ questions }: QuestionsReturnsProps) {
  return (
    <Section id='questions-returns' className='bg-white'>
      <motion.h2
        className='pb-8 text-2xl font-black lg:text-3xl 2xl:text-4xl'
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Returns
      </motion.h2>

      <div className='space-y-8'>
        {questions.map((question) => (
          <Questions key={question.id} {...question} />
        ))}
      </div>
    </Section>
  );
}
