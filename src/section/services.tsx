import { Tab } from '@headlessui/react';

const titles = [
  'Consolidate',
  'Repackage and ship',
  'Resell',
  'Donate',
  'Dispose',
];

export default function Services() {
  return (
    <section className='bg-accent px-5 py-8 text-primary'>
      <button
        type='button'
        onClick={() => {
          console.log('button click');
        }}
      >
        Reset animation
      </button>
      <Tab.Group
        onChange={(index) => {
          console.log('Changed selected tab to:', index);
        }}
      >
        <Tab.List className='max-w-full overflow-hidden'>
          <div className='flex space-x-5 overflow-x-scroll'>
            {titles.map((title) => (
              <Tab
                key={title}
                className='inline-block select-none scroll-smooth whitespace-nowrap text-base font-black text-white ui-selected:text-primary ui-selected:underline'
              >
                {title}
              </Tab>
            ))}
          </div>
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel>
            <div>
              <h3 className='-ml-5 bg-secondary text-center'>
                What are the processing options?
              </h3>
              <p>What are the processing options - Consolidate</p>
              <h3 className='-mr-5 bg-primary text-center text-secondary'>
                What does it cost?
              </h3>
              <p>
                Shipping Fee: At seller&apos;s expense, you can schedule LTL or
                carrier pickup, or you can provide us with shipping labels.
              </p>
              <p>What does it cost - Consolidate</p>
              <h3 className='-ml-5 bg-secondary text-center'>
                How long does it take?
              </h3>
              <p>How long does it take - Consolidate</p>
            </div>
          </Tab.Panel>
          <Tab.Panel>
            <div>
              <h3 className='-ml-5 bg-secondary text-center'>
                What are the processing options?
              </h3>
              <p>What are the processing options - Repackage and ship</p>
              <h3 className='-mr-5 bg-primary text-center text-secondary'>
                What does it cost?
              </h3>
              <p>
                Shipping Fee: At seller&apos;s expense, you can schedule LTL or
                carrier pickup, or you can provide us with shipping labels.
              </p>
              <p>What does it cost - Repackage and ship</p>
              <h3 className='-ml-5 bg-secondary text-center'>
                How long does it take?
              </h3>
              <p>How long does it take - Repackage and ship</p>
            </div>
          </Tab.Panel>
          <Tab.Panel>
            <div>
              <h3 className='-ml-5 bg-secondary text-center'>
                What are the processing options?
              </h3>
              <p>What are the processing options - Resell</p>
              <h3 className='-mr-5 bg-primary text-center text-secondary'>
                What does it cost?
              </h3>
              <p>
                Shipping Fee: At seller&apos;s expense, you can schedule LTL or
                carrier pickup, or you can provide us with shipping labels.
              </p>
              <p>What does it cost - Resell</p>
              <h3 className='-ml-5 bg-secondary text-center'>
                How long does it take?
              </h3>
              <p>How long does it take - Resell</p>
            </div>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </section>
  );
}
