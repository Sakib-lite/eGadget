import React, { Fragment } from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <Fragment>
      <section className='bg-white dark:bg-gray-900'>
        <div className='grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28'>
          <div className='mr-auto place-self-center lg:col-span-7'>
            <h1 className='max-w-2xl mb-4 text-2xl font-extrabold leading-none tracking-tight  md:text-5xl xl:text-6xl dark:text-white'>
              Building digital products & brands.
            </h1>
            <p className='max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg text-sm lg:text-xl dark:text-gray-400'>
              This free and open-source landing page template was built using
              the utility classNamees from
            </p>
          </div>
          <div className='hidden lg:mt-0 lg:col-span-5 lg:flex'>
            <Image src='/hero.png' alt='hero image' width='800' height='600'  objectFit='cover' />
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Hero;
