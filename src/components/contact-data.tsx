import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import Link from 'next/link';

export default function ContactData() {
  return (
    <div
      className={clsx(
        'flex h-24 justify-center gap-2 bg-secondary pt-5 text-base font-extrabold text-primary ',
        'lg:h-40 lg:pt-10 lg:text-2xl',
        '2xl:h-56 2xl:pt-14 2xl:text-4xl',
      )}
    >
      <div>
        <FontAwesomeIcon icon={faEnvelope} />
        <Link
          href='mailto:sales@frontdock.com'
          target='_blank'
          rel='noopener noreferrer'
          className='ml-1 inline-block hover:underline'
        >
          sales@frontdock.com
        </Link>
      </div>
      <div>
        <FontAwesomeIcon icon={faPhone} />
        <Link
          href='telto:9564517191'
          target='_blank'
          rel='noopener noreferrer'
          className='ml-1 inline-block hover:underline'
        >
          956 451 7191
        </Link>
      </div>
    </div>
  );
}
