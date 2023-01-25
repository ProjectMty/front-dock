import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

export default function ContactData() {
  return (
    <div className='flex h-24 justify-center gap-2 bg-secondary pt-5 text-base font-extrabold text-primary'>
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
