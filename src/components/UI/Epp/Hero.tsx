import React from 'react';
import Image from 'next/image';
import gatsbyHero from '../../../../public/Assets/gatsbyHero.svg';
import Nav from '@/app/component/layout/Nav';
import gatsby3 from '../../../../public/Assets/gatsby3.svg';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className='relative'>
      <Nav />
      <div className='xl:max-w-[72rem] mt-28 rounded-2xl! pro:max-w-[52rem] md:max-w-[45rem] max-w-[22rem] mac:max-w-[81rem] lg:max-w-[59rem] mx-auto'>
        <Image
          src={gatsbyHero}
          alt=''
          priority
          className='h-[15.62144rem] w-full md:h-full object-cover'
        />

        <div className='flex justify-center items-center absolute inset-0'>
          <Image
            src={gatsby3}
            alt='logo'
            priority
            className='w-[15rem] md:w-[28rem] lg:w-[36rem] xl:w-auto lg:h-auto'
          />
        </div>
        <div className='absolute inset-0 py-12 md:px-8 lg:px-14 mac:px-20'>
          <Link href='/'>
            <h3 className='hidden montserrat px-3 small:px-3 md:px-8 lg:px-14 mac:px-20 md:flex gap-3 items-center text-[1.25rem] tracking-[0.25rem] leading-normal font-medium text-white'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='13'
                height='18'
                viewBox='0 0 13 23'
                fill='none'
              >
                <path
                  d='M11 21L2 11.5L11 21ZM2 11.5L11 2L2 11.5Z'
                  fill='#fff'
                />
                <path
                  d='M11 21L2 11.5L11 2'
                  stroke='#fff'
                  stroke-width='2.5'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
              </svg>
              Home
            </h3>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
