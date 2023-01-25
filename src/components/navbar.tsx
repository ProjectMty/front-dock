import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Navbar() {
  return (
    <div
      className='navbar fixed top-0 z-[200] bg-primary/80 text-accent
    shadow-xl'
    >
      <div className='flex-1'>
        <button className='btn-ghost btn-square btn'>
          <FontAwesomeIcon icon={faBars} className='text-2xl' />
        </button>
      </div>
      <div className='flex-none'>
        <a className='btn-ghost btn text-xl normal-case'>LOGO</a>
      </div>
    </div>
  );
}
