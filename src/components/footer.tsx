import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className='my-0 flex w-full flex-col items-center justify-center gap-4 bg-primary p-6 text-center text-sm font-extralight text-white'>
      <div className='space-x-4'>
        <Link
          href='https://www.facebook.com/cargomonterrey'
          target='_blank'
          rel='noopener noreferrer'
          className='inline-block hover:underline'
        >
          <FontAwesomeIcon
            icon={faFacebookF}
            className='h-4 w-4 cursor-pointer rounded-full bg-white p-2 text-base text-[#1E1E1E] hover:bg-secondary'
          />
        </Link>
        <Link
          href='https://www.instagram.com/cargomonterrey/'
          target='_blank'
          rel='noopener noreferrer'
          className='inline-block hover:underline'
        >
          <FontAwesomeIcon
            icon={faInstagram}
            className='h-4 w-4 cursor-pointer rounded-full bg-white p-2 text-base text-[#1E1E1E] hover:bg-secondary'
          />
        </Link>
      </div>
      <div>
        <p>Privacy Policy - Terms of Service</p>
        <p>
          Copyright © {new Date().getUTCFullYear()}, All Rights Reserved by
          Front Dock
        </p>
      </div>
    </footer>
  );
}
