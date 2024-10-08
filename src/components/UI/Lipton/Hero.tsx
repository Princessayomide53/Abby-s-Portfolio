import React from 'react';
import Nav from '@/app/component/layout/Nav';
import Image from 'next/image';
import L1 from '../../../../public/Assets/L1.svg';
import L2 from '../../../../public/Assets/L2.svg';
import Link from 'next/link';
import Footer from '@/app/component/layout/Footer';

const Hero = () => {
  return (
    <section className=''>
      <Nav />

      <Link href='/'>
        <button className='mt-[7rem] hidden md:mt-[10rem] montserrat px-3 small:px-3 md:px-4 fonts mac:px-20 md:flex gap-3 items-center text-[1.25rem] tracking-[0.25rem] leading-normal font-medium text-[#5933A7]'>
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
      <article className='flex flex-col gap-[1.94rem] md:flex-row md:items-center md:gap-7 justify-end mt-12 xl:max-w-[72rem] pro:max-w-[52rem] md:max-w-[45rem] px-3 small:max-w-[21.5rem] mac:max-w-[81rem] lg:max-w-[59rem] mx-auto'>
        <h1 className='text-[#5933A7] font-bold md:font-semibold leading-normal  tracking-[0.375rem] md:tracking-[0.625rem] md:text-lg lg:text-[2rem] '>
          LIPTON
          <br /> WIDOWS CAMPAIGN
        </h1>
        <div className='bg-[#FFF4EF] w-full md:w-[34rem] lg:w-[41.1875rem] space-y-[1.56rem] h-[17rem] lg:h-[22.1875rem] rounded-lg px-5 py-3 md:px-12 lg:px-16 md:py-7'>
          <h4 className='text-[#5933A7] text-lg lg:text-[2rem] tracking-[0.3125rem] md:tracking-[0.5rem] leading-normal font-bold'>
            OVERVIEW
          </h4>
          <p className='text-black leading-[1.625rem] font-normal text-sm md:leading-[2rem] md:text-base lg:text-xl'>
            Campaign visuals for a tea brand designed to bring joy and comfort
            to widows, focusing on uplifting their spirits and fostering a sense
            of community.
          </p>

          <p className='text-black leading-[1.625rem] md:leading-[2rem] text-sm md:text-base lg:text-xl font-normal'>
            <b className='font-bold'> When:</b> 2018
            <br />
            <b className='font-bold'>Where:</b> DDB
          </p>
        </div>
      </article>

      <div className='mt-[8.13rem] xl:max-w-[72rem] pro:max-w-[52rem] md:max-w-[40rem] px-3 small:max-w-[21.5rem] mac:max-w-[81rem] lg:max-w-[59rem] mx-auto space-y-[6.25rem] flex-col items-center flex justify-center'>
        <Image src={L1} alt='' />
        <Image src={L2} alt='' />
      </div>

      <div className='xl:max-w-[72rem] pt-[7rem] pb-20 md:pb-44 pro:max-w-[52rem] md:max-w-[45rem] px-3 small:max-w-[21.5rem] mac:max-w-[81rem] lg:max-w-[59rem] mx-auto flex justify-between items-center'>
        <Link href='/'>
          {' '}
          <h4 className='text-[#5933A7] text-sm md:text-base lg:text-[1.5rem] font-semibold leading-normal tracking-[0.175rem] md:tracking-[0.3rem]'>
            HOMEPAGE
          </h4>
        </Link>

        <div className='flex gap-[2rem] md:gap-[3.19rem]'>
          <button className='rounded-full text-[#5E1DBB] md:text-base lg:text-[1.25rem] font-semibold tracking-[0.25rem] py-2 px-5 lg:px-10 flex gap-5 items-center bg-[#E9D3CA]'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='13'
              height='23'
              viewBox='0 0 13 23'
              fill='none'
              className='md:w-auto md:h-auto w-3 h-3'
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
            <b className='md:flex hidden'>PREV</b>
          </button>
          <button className='rounded-full text-[#5E1DBB] md:text-base lg:text-[1.25rem] font-semibold tracking-[0.25rem] py-2 px-5 lg:px-10 flex gap-5 items-center bg-[#E9D3CA]'>
            <b className='md:flex hidden'>NEXT</b>{' '}
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='13'
              height='23'
              viewBox='0 0 13 23'
              fill='none'
              className='md:w-auto md:h-auto w-3 h-3'
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
