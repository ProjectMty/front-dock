import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import Link from 'next/link';

export default function BannerContact() {
  return (
    <div
      className={clsx(
        'flex items-center justify-center gap-1 bg-secondary py-14 text-sm font-extrabold text-primary sm:gap-2',
        'lg:gap-x-14 lg:text-2xl',
        '2xl:text-3xl',
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
          href='telto:+19566487402'
          target='_blank'
          rel='noopener noreferrer'
          className='ml-1 inline-block hover:underline'
        >
          +1 (956) 648 7402
        </Link>
      </div>
    </div>
  );
}
