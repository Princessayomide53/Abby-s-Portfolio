import React from 'react';
import Image from 'next/image';
import Joice from '../../../../public/Assets/Joice.svg';
import Nav from '@/app/component/layout/Nav';
import Link from 'next/link';

const Hero = () => {
  return (
    <section>
      <Nav />
      <div className='mt-11 md:mt-32 xl:max-w-[72rem] rounded-2xl! pro:max-w-[52rem] md:max-w-[45rem] max-w-[22rem] mac:max-w-[81rem] lg:max-w-[59rem] mx-auto'>
        <Image
          src={Joice}
          alt='hero'
          className='h-[12.52638rem] w-full md:h-auto'
        />
      </div>
      <div className='xl:max-w-[72rem] mx-auto w-full pro:max-w-[52rem] px-2 small:px-0 md:max-w-[45rem] max-w-[22rem] mac:max-w-[81rem] lg:max-w-[59rem]'>
        <Link href='/'>
          <button className='mt-2 md:mt-[2.5rem] flex gap-3 items-center text-[1.25rem] tracking-[0.25rem] leading-normal font-medium text-[#5933A7]'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='13'
              height='18'
              viewBox='0 0 13 23'
              fill='none'
            >
              <path
                d='M11 21L2 11.5L11 21ZM2 11.5L11 2L2 11.5Z'
                fill='#5E1DBB'
              />
              <path
                d='M11 21L2 11.5L11 2'
                stroke='#5933A7'
                stroke-width='2.5'
                stroke-linecap='round'
                stroke-linejoin='round'
              />
            </svg>
            Home
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
