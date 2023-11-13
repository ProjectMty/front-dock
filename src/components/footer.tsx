import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import SubscriptionForm from './subscription-form';

export default function Footer() {
  return (
    <>
      <footer className='grid grid-cols-1 gap-4 bg-primary p-8 font-montserrat tracking-wide text-white md:grid-cols-2 md:gap-8 md:p-16 lg:grid-cols-[2fr_2fr_2fr]'>
        <div className='space-y-4'>
          <p className='text-base font-bold'>About Us</p>
          <p className='text-justify text-sm font-light'>
            Front Dock&apos;s mission is to empower businesses to thrive in the e-commerce landscape
            by providing tailored, comprehensive solutions that go beyond the capabilities of
            standard 3PL services. We are dedicated to making your business look good by offering
            custom services at competitive pricing and ensuring that our clients can efficiently
            manage their operations whether they are based in the USA, Mexico, Canada or beyond.
          </p>
        </div>
        <div className='flex justify-between gap-3 md:justify-around lg:gap-4'>
          <div className='space-y-4'>
            <p className='text-base font-bold'>Useful Links</p>
            <ul className='space-y-2 text-sm font-light'>
              <li>
                <Link className='link-hover link' href='/about-us'>
                  About Us
                </Link>
              </li>
              <li>
                <Link className='link-hover link' href='/about-us#mission'>
                  Mission
                </Link>
              </li>
              <li>
                <Link className='link-hover link' href='/about-us#vision'>
                  Vision
                </Link>
              </li>
              <li>
                <Link className='link-hover link' href='/about-us#sustainability'>
                  Sustainability
                </Link>
              </li>
              <li>
                <Link className='link-hover link' href='/contact'>
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div className='space-y-4'>
            <p className='text-base font-bold'>Help</p>
            <ul className='space-y-2 text-sm font-light'>
              <li>
                <Link className='link-hover link' href='/faq'>
                  FAQ
                </Link>
              </li>
              <li>
                <Link className='link-hover link' href='/terms-conditions'>
                  Terms & conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className='flex w-full flex-col items-center gap-8'>
          <p className='text-3xl'>Ready to get started?</p>
          <div className='form-control'>
            <SubscriptionForm />
          </div>
          <ul className='flex w-full justify-evenly lg:justify-center lg:gap-16'>
            <li>
              <Link
                target='_blank'
                href='https://www.facebook.com/frontdock/'
                aria-label='Linkedin'
              >
                <FontAwesomeIcon icon={faFacebook} size='2x' />
              </Link>
            </li>
            <li>
              <Link
                target='_blank'
                href='https://www.instagram.com/frontdock/'
                aria-label='Instagram'
              >
                <FontAwesomeIcon icon={faInstagram} size='2x' />
              </Link>
            </li>
            {/* <li>
              <Link target='_blank' href='https://twitter.com/' aria-label='Twitter'>
                <FontAwesomeIcon icon={faTwitter} size='2x' />
              </Link>
            </li>
            <li>
              <Link target='_blank' href='https://linkedin.com/' aria-label='Linkedin'>
                <FontAwesomeIcon icon={faLinkedin} size='2x' />
              </Link>
            </li> */}
          </ul>
        </div>
      </footer>
      <div className='xl:h-15 h-8 w-full bg-secondary md:h-12' />
    </>
  );
}
