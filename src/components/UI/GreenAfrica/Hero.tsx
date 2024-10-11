import React from 'react';
import Nav from '@/app/component/layout/Nav';
import Image from 'next/image';
import A1 from '../../../../public/Assets/A1.svg';
import A2 from '../../../../public/Assets/A2.svg';
import A3 from '../../../../public/Assets/A3.svg';
import A4 from '../../../../public/Assets/A4.svg';
import A5 from '../../../../public/Assets/A5.svg';
import A6 from '../../../../public/Assets/A6.svg';
import A7 from '../../../../public/Assets/A7.svg';
import A8 from '../../../../public/Assets/A8.svg';
import A9 from '../../../../public/Assets/A9.svg';
import A10 from '../../../../public/Assets/A10.svg';
import Link from 'next/link';
import Footer from '@/app/component/layout/Footer';
import Button from '../Button';

const Hero = () => {
  return (
    <section className=''>
      <Nav />

      <Link href='/'>
        <button className='mt-[7rem] hidden md:mt-[10rem] montserrat px-3 small:px-3 md:px-8 fonts lg:px-14 mac:px-20 md:flex gap-3 items-center text-[1.25rem] tracking-[0.25rem] leading-normal font-medium text-[#5933A7]'>
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
      <article className='flex flex-col gap-[1.94rem] md:flex-row md:items-center md:gap-7 justify-end mt-24 xl:max-w-[72rem] pro:max-w-[52rem] md:max-w-[45rem] px-3 small:max-w-[21.5rem] mac:max-w-[81rem] lg:max-w-[59rem] mx-auto'>
        <h1 className='text-[#5933A7] font-bold md:font-semibold leading-normal lg:leading-[2.5rem]  tracking-[0.375rem] md:tracking-[0.625rem] md:text-lg lg:text-[2rem] '>
          GREEN AFRICA
          <br /> AIRLINES
        </h1>
        <div className='bg-[#FFF4EF] w-full md:w-[34rem] lg:w-[41.1875rem] space-y-[1.56rem] h-[17rem] lg:h-[22.1875rem] rounded-xl px-5 py-3 md:px-12 lg:px-16 md:py-7'>
          <h4 className='text-[#5933A7] text-lg lg:text-[2rem] tracking-[0.3125rem] md:tracking-[0.5rem] leading-normal font-bold'>
            OVERVIEW
          </h4>
          <p className='text-black leading-[1.625rem] font-normal text-sm md:leading-[2rem] md:text-base lg:text-xl'>
            Campaign materials for an airline aiming to raise awareness during
            its launch, targeting everyday individuals who typically wouldn’t
            consider traveling by airplane.
          </p>

          <p className='text-black leading-[1.625rem] md:leading-[2rem] text-sm md:text-base lg:text-xl font-normal'>
            <b className='font-bold'> When:</b> 2020
            <br />
            <b className='font-bold'>Where:</b> DDB
          </p>
        </div>
      </article>

      <div className='mt-[4rem] md:mt-[8.13rem] xl:max-w-[72rem] grid grid-cols-1 md:grid-cols-2 gap-[2.5rem] md:gap-[4rem] pro:max-w-[52rem] md:max-w-[40rem] px-3 small:max-w-[21.5rem] mac:max-w-[81rem] lg:max-w-[59rem] mx-auto'>
        <Image src={A1} alt='' />
        <Image src={A2} alt='' />
        <Image src={A3} alt='' />
        <Image src={A4} alt='' />
      </div>

      <div className='xl:max-w-[72rem] pro:max-w-[52rem] md:max-w-[40rem] px-3 small:max-w-[21.5rem] mac:max-w-[81rem] lg:max-w-[59rem] mx-auto'>
        <h5 className='text-[#5933A7] text-left md:text-center mt-[5rem] mb-[3.5rem] md:mt-0 md:mb-0 md:my-[10.06rem] text-[1.25rem] md:text-[1.5rem] font-bold leading-[1.75rem] md:leading-normal tracking-[0.3125rem] md:tracking-[0.375rem]'>
          DESTINATION ANNOUNCEMENT DIGITAL POSTS
        </h5>{' '}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-[2.5rem] md:gap-[4rem] '>
          <Image src={A5} alt='' />
          <Image src={A6} alt='' />
          <Image src={A7} alt='' />
          <Image src={A8} alt='' />
          <Image src={A9} alt='' />
          <Image src={A10} alt='' />
        </div>
      </div>

      <Button />
      <Footer />
    </section>
  );
};

export default Hero;
