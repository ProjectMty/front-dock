import { Section } from '@/components';
import missionImage from '@/public/assets/redesign/about/mission.webp';
import visionImage from '@/public/assets/redesign/about/vision.webp';
import Image from 'next/image';

export default function MissionVision() {
  return (
    <>
      <Section id='mission' className='space-y-8 bg-primary text-white'>
        <h2>Mission</h2>
        <div className='flex flex-wrap items-center justify-center gap-y-8 lg:justify-evenly'>
          <div className='flex flex-col gap-y-8 text-lg md:text-2xl lg:w-1/2'>
            <p>
              Front Dock&apos;s mission is to empower businesses to thrive in the e-commerce
              landscape by providing tailored, comprehensive solutions that go beyond the
              capabilities of standard 3PL services.
            </p>
            <p>
              We are dedicated to making your business look good by offering custom services at
              competitive pricing and ensuring that our clients can efficiently manage their
              operations whether they are based in the{' '}
              <span className='font-bold'>USA, Mexico, Canada or beyond</span>.
            </p>
          </div>
          <div className='flex items-center justify-center lg:w-1/2'>
            <Image src={missionImage} alt='mission image' width={320} className='w-80' />
          </div>
        </div>
      </Section>
      <Section id='vision' className='space-y-8 bg-secondary text-primary'>
        <h2>Vision</h2>
        <div className='flex flex-wrap items-center justify-center gap-y-8 lg:justify-evenly'>
          <div className='flex items-center justify-center lg:w-1/2'>
            <Image src={visionImage} alt='vision image' width={320} className='w-80' />
          </div>
          <div className='flex flex-col gap-y-8 text-lg md:text-2xl lg:w-1/2'>
            <p>
              Front Dock vision is to be the premier 3PL (Third Party Logistics) and e-commerce
              service provider in the USA, MX, CAD and beyond. With over 20 years of extensive
              experience in domestic and international marketplace fulfillment, Front Dock aims to
              solidify its position as an industry leader in e-commerce logistics and returns
              management.
            </p>
            <p>
              Front Dock is committed to staying at the forefront of the industry by continuously
              innovating and adapting to evolving e-commerce trends and technologies.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
