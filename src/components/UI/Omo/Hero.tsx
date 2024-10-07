import React from 'react';
import Nav from '@/app/component/layout/Nav';
import Image from 'next/image';
import Omo1 from '../../../../public/Assets/Omo1.svg';
import Omo2 from '../../../../public/Assets/Omo2.svg';
import Omo3 from '../../../../public/Assets/Omo3.svg';
import Link from 'next/link';
import Footer from '@/app/component/layout/Footer';

const Hero = () => {
  return (
    <section className=''>
      <Nav />
      <Link href='/'>
        {' '}
        <button className='mt-[10rem] px-20 flex gap-3 items-center text-[1.25rem] tracking-[0.25rem] leading-normal font-semibold text-[#5933A7]'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='13'
            height='18'
            viewBox='0 0 13 23'
            fill='none'
          >
            <path d='M11 21L2 11.5L11 21ZM2 11.5L11 2L2 11.5Z' fill='#5E1DBB' />
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
      <article className='flex items-center gap-[7rem] justify-end mt-12 xl:max-w-[72rem] pro:max-w-[52rem] md:max-w-[45rem] max-w-[22rem] mac:max-w-[81rem] lg:max-w-[59rem] mx-auto'>
        <h1 className='text-[#5933A7] font-semibold leading-normal tracking-[0.625rem] text-[2rem] '>
          OMO LOCKDOWN
          <br />
          COMMUNICATION
          <br />
        </h1>
        <div className='bg-[#FFF4EF] w-[41.1875rem] space-y-[1.56rem] h-[22.1875rem] rounded-lg px-16 py-7'>
          <h4 className='text-[#5933A7] text-[2rem] tracking-[0.5rem] leading-normal font-bold'>
            OVERVIEW
          </h4>
          <p className='text-black font-normal leading-[2rem] text-xl'>
            Social media communication during the COVID lockdown aimed at
            encouraging parents to allow their children to play indoors.
          </p>

          <p className='text-black leading-[2rem] text-xl font-normal'>
            <b className='font-bold'> When:</b> 2020
            <br />
            <b className='font-bold'>Where:</b> DDB
          </p>
        </div>
      </article>

      <div className='mt-[8.13rem] space-y-[6.25rem] flex-col items-center flex justify-center'>
        <Image src={Omo1} alt='omo' />
        <Image src={Omo2} alt='omo' />
        <Image src={Omo3} alt='omo' />
      </div>

      <div className='xl:max-w-[72rem] pt-[7rem] pb-44 pro:max-w-[52rem] md:max-w-[45rem] max-w-[22rem] mac:max-w-[81rem] lg:max-w-[59rem] mx-auto flex justify-between items-center'>
        <Link href='/'>
          {' '}
          <h4 className='text-[#5933A7] text-[1.5rem] font-semibold leading-normal tracking-[0.3rem]'>
            HOMEPAGE
          </h4>
        </Link>

        <div className='flex gap-[3.19rem]'>
          <button className='rounded-full text-[#5E1DBB] text-[1.25rem] font-semibold tracking-[0.25rem] py-2 px-10 flex gap-5 items-center bg-[#E9D3CA]'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='13'
              height='23'
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
                stroke-width='4'
                stroke-linecap='round'
                stroke-linejoin='round'
              />
            </svg>{' '}
            PREV
          </button>
          <button className='rounded-full text-[#5E1DBB] text-[1.25rem] font-semibold tracking-[0.25rem] py-2 px-10 flex gap-5 items-center bg-[#E9D3CA]'>
            NEXT{' '}
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='13'
              height='23'
              viewBox='0 0 13 23'
              fill='none'
            >
              <path
                d='M2 21L11 11.5L2 21ZM11 11.5L2 2L11 11.5Z'
                fill='#5E1DBB'
              />
              <path
                d='M2 21L11 11.5L2 2'
                stroke='#5933A7'
                stroke-width='4'
                stroke-linecap='round'
                stroke-linejoin='round'
              />
            </svg>
          </button>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Hero;
