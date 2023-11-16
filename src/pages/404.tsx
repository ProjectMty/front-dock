import { NextSeo } from 'next-seo';
import Link from 'next/link';

export default function NotFound() {
  return (
    <>
      <NextSeo title='Page Not Found | Front Dock' />
      <div className='flex h-screen flex-col text-primary'>
        <div className='flex grow-[1] items-center justify-center bg-secondary'>
          <div className='flex w-9/12 items-center justify-center pb-2 pt-16'>
            <div className='overflow-hidden rounded-none bg-white pb-8 shadow'>
              <div className='border-t border-gray-200 pt-8 text-center'>
                <h1 className='text-6xl font-bold lg:text-8xl'>404</h1>
                <h2 className='py-8 text-2xl font-medium lg:text-4xl'>Page Not Found</h2>
                <p className='px-12 pb-8 text-lg font-medium lg:text-xl'>
                  It seems that the page you are looking for does not exist.
                </p>
                <Link href='/' className='btn btn-primary text-white'>
                  Go back to Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
