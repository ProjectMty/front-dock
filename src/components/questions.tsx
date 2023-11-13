import { Question } from '@/types';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Disclosure, Transition } from '@headlessui/react';
import clsx from 'clsx';
import { motion } from 'framer-motion';

type QuestionsProps = Question;

export default function Questions({ id, question, response }: QuestionsProps) {
  return (
    <Disclosure key={id}>
      {({ open }) => (
        <motion.div
          className={clsx(
            'border-2 border-primary text-justify transition-all duration-300',
            open && 'bg-primary',
          )}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Disclosure.Button className='flex w-full items-center justify-between px-6 py-5 text-left font-bold text-primary'>
            <span className='ui-open:text-secondary'>{question}</span>
            <FontAwesomeIcon
              icon={faChevronDown}
              className='ui-open:rotate-180 ui-open:text-secondary'
            />
          </Disclosure.Button>
          <Transition
            show={open}
            enter='transition duration-200 ease-out'
            enterFrom='transform scale-95 opacity-0'
            enterTo='transform scale-100 opacity-100'
            leave='transition duration-100 ease-out'
            leaveFrom='transform scale-100 opacity-100'
            leaveTo='transform scale-95 opacity-0'
          >
            <Disclosure.Panel className='px-6 pb-5 text-white' static>
              {response}
            </Disclosure.Panel>
          </Transition>
        </motion.div>
      )}
    </Disclosure>
  );
}
