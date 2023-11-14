import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import Link from 'next/link';

export default function BannerContact() {
  return (
    <div
      className={clsx(
        'flex flex-col items-center justify-center gap-1 gap-y-8 bg-secondary py-8 text-xl font-extrabold text-primary sm:gap-2',
        'lg:flex-row lg:gap-x-14 lg:py-12 lg:text-2xl',
        '2xl:text-3xl',
      )}
    >
      <div className='flex items-center gap-x-2'>
        <FontAwesomeIcon icon={faEnvelope} />
        <Link
          href='mailto:sales@frontdock.com'
          target='_blank'
          rel='noopener noreferrer'
          className='link-hover link ml-1 inline-block'
        >
          sales@frontdock.com
        </Link>
      </div>
      <div className='flex items-center gap-x-2'>
        <FontAwesomeIcon icon={faPhone} />
        <Link
          href='tel:+19566487402'
          target='_blank'
          rel='noopener noreferrer'
          className='link-hover link ml-1 inline-block'
        >
          +1 (956) 648 7402
        </Link>
      </div>
    </div>
  );
}
