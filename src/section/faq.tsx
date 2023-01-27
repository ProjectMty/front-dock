import {
  faChevronDown,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Disclosure, Transition } from '@headlessui/react';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import { useState } from 'react';

const questions = [
  {
    id: 'heavy',
    question: 'Do you handle heavy and/or bulky items?',
    response:
      'Yes! We service appliances and furniture returns. We do not have a weight or size limit. Please note we may have to quote your project out separately if your items exceed 100 lbs in actual or DIM weight.',
  },
  {
    id: 'fragile',
    question: 'Do you handle fragile items?',
    response:
      'Yes! We are a top notch service provider and have ample experience with fragile items including collectibles, antiques, glassware, TVs, and more! We document every step of the process with pictures and video, so we will know if there was damage and if the damage was caused by us.',
  },
  {
    id: 'secure',
    question: 'Is my merchandise secure in your warehouse?',
    response:
      'Yes! All of our locations are monitored by a complete real time security system including cameras that communicate directly with local authorities. All of our employees are subjected to background checks.High value merchandise is kept in a separate, secured access restricted area of the warehouse.',
  },
  {
    id: 'insured',
    question: 'Is my merchandise insured?',
    response:
      'Yes!  We insure your merchandise at 100% of the return price (retail price your buyer paid). We are liable for any items that are lost, stolen or damaged while in our care. We do not have a shrinkage allowance. We are responsible for every product in our care.',
  },
  {
    id: 'repair',
    question: 'Do you repair or clean items?',
    response: `No. We open the packages to confirm the item returned is what is expected. We upload notes and pictures to document the item's condition. We offer various options for returning actions. We do not offer repair or cleaning services.`,
  },
  {
    id: 'charities',
    question: 'What charities do you donate to?',
    response: `We do not select charities. We complete the logistics process to get the merchandise to the charity you choose. We can provide you a list of charities other clients work with if you'd like additional options for your donation.`,
  },
  {
    id: 'minium',
    question: 'Is there a monthly return minimum ?',
    response:
      'No! We can process 1 return or we can process your entire return load. We provide a solution for all types of sellers.',
  },
];

export default function Faq() {
  const [currentDesktopFaq, setCurrentDesktopFaq] = useState<string>('heavy');

  return (
    <section className='bg-white px-5 py-8 text-center text-base text-primary lg:px-52 2xl:pt-20'>
      <motion.h2
        className='pb-8 text-2xl font-black lg:text-3xl 2xl:text-4xl'
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        FREQUENTLY ASKED <br className='lg:hidden' />
        QUESTIONS
      </motion.h2>
      {/*  */}
      <div className='block space-y-8 2xl:hidden'>
        {questions.map(({ id, question, response }) => (
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
                <Disclosure.Button
                  className='flex w-full items-center justify-between py-5 px-6 text-left font-bold'
                  onClick={() => setCurrentDesktopFaq(id)}
                >
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
        ))}
      </div>
      <motion.div
        className='hidden 2xl:flex 2xl:flex-row 2xl:gap-x-14'
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className='w-1/2 space-y-4'>
          {questions.map(({ id, question }) => (
            <div
              key={question.toLowerCase()}
              className={clsx(
                'w-full border-2 border-primary text-justify transition-all duration-300',
                currentDesktopFaq === id && 'bg-primary',
              )}
              onClick={() => setCurrentDesktopFaq(id)}
            >
              <button className='flex w-full items-center justify-between py-5 px-6 text-left text-xl font-bold'>
                <span
                  className={clsx(currentDesktopFaq === id && 'text-secondary')}
                >
                  {question}
                </span>
                <FontAwesomeIcon
                  icon={faChevronRight}
                  className={clsx(
                    'text-white',
                    currentDesktopFaq === id && 'block text-secondary',
                  )}
                />
              </button>
            </div>
          ))}
        </div>
        <div className='flex w-1/2 items-center justify-center bg-primary px-10 text-justify text-2xl font-bold text-white'>
          {questions.find(({ id }) => id === currentDesktopFaq)?.response}
        </div>
      </motion.div>
    </section>
  );
}
