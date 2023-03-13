import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav
      className='navbar sticky top-0 z-[200] bg-primary/80 text-accent
    shadow-xl'
    >
      <div className='flex-1'>
        <button className='btn-ghost btn-square btn'>
          <FontAwesomeIcon icon={faBars} className='invisible text-2xl' />
        </button>
      </div>
      <div className='flex-none'>
        <a className='btn-ghost btn text-xl normal-case'>
          <Image
            src='/assets/frontdock-logo.png'
            alt='FrontDock Logo'
            width={64}
            height={64}
          />
        </a>
      </div>
    </nav>
  );
}
