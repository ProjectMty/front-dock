import { useClickOutside } from '@/hooks';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import LogoFrontDock from '@/public/assets/redesign/logo-frontdock-optimized.png';

type NavItem = {
  link: string;
  label: string;
};

const navItems: NavItem[] = [
  { link: '/', label: 'Home' },
  { link: '/ecommerce', label: 'E-commerce' },
  { link: '/logistics', label: 'Reverse Logistics' },
  { link: '/pricing', label: 'Pricing' },
  { link: '/contact', label: 'Contact Us' },
];

function Navbar() {
  const [expanded, setExpanded] = useState(false);
  const pathname = usePathname();

  const ref = useClickOutside(() => {
    setExpanded(false);
  });

  useEffect(() => {
    setExpanded(false);
  }, [pathname]);

  return (
    <div
      ref={ref}
      className='min-h-20 container relative mx-auto grid grid-cols-2 p-4 font-montserrat text-white lg:flex lg:justify-between lg:py-6'
    >
      <nav className='flex w-full items-center justify-between lg:justify-center lg:gap-16'>
        <Link href='/'>
          <Image src={LogoFrontDock} alt='logo' width={192} className='w-48' />
        </Link>
        <ul className='hidden gap-12 lg:flex'>
          {navItems.map(({ link, label }) => (
            <li key={link}>
              <Link
                className={clsx(
                  'link-offset-4 link-hover link p-1 text-xs uppercase tracking-widest transition-all duration-300 hover:text-gray-300',
                  pathname === link && 'border border-white',
                )}
                href={link}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <button
        type='button'
        className='inline-flex items-center justify-center justify-self-end rounded-none p-2 focus:outline-none lg:hidden'
        aria-controls='mobile-menu'
        aria-expanded='false'
        onClick={() => setExpanded((prev) => !prev)}
      >
        <span className='sr-only'>Open main menu</span>
        <AnimatePresence initial={false} mode='wait'>
          <motion.div
            key={expanded ? 'minus' : 'plus'}
            initial={{
              rotate: expanded ? -90 : 90,
            }}
            animate={{
              zIndex: 1,
              rotate: 0,
              transition: {
                type: 'tween',
                duration: 0.15,
                ease: 'circOut',
              },
            }}
            exit={{
              zIndex: 0,
              rotate: expanded ? -90 : 90,
              transition: {
                type: 'tween',
                duration: 0.15,
                ease: 'circIn',
              },
            }}
          >
            {expanded ? <FontAwesomeIcon icon={faXmark} /> : <FontAwesomeIcon icon={faBars} />}
          </motion.div>
        </AnimatePresence>
      </button>
      <AnimatePresence mode='wait'>
        {expanded && (
          <motion.div
            initial={{
              opacity: 0,
              height: 0,
              display: 'hidden',
            }}
            animate={{
              opacity: 1,
              height: 'auto',
              display: 'relative',
              transition: {
                height: {
                  duration: 0.4,
                },
                opacity: {
                  duration: 0.25,
                  delay: 0.15,
                },
              },
            }}
            exit={{
              opacity: 0,
              height: 0,
              display: 'hidden',
              transition: {
                height: {
                  duration: 0.4,
                },
                opacity: {
                  duration: 0.25,
                },
              },
            }}
            key='test'
            id='mobile-menu'
            className={clsx('z-50 col-span-2 mt-4 rounded-none border border-white p-2 lg:hidden')}
          >
            <ul className='w-full py-2'>
              {navItems.map(({ link, label }) => (
                <li
                  key={link}
                  className={clsx(
                    'rounded-none p-2 text-gray-50 hover:bg-gray-700 hover:text-gray-50 focus:bg-gray-700 focus:text-gray-50',
                    pathname === link && 'border border-white',
                  )}
                >
                  <Link href={link}>
                    <span className='text-sm uppercase tracking-widest'>{label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Navbar;
