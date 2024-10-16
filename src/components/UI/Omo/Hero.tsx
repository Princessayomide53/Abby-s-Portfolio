import React from 'react';
import Nav from '@/app/component/layout/Nav';
import Image from 'next/image';
import Omo1 from '../../../../public/Assets/Omo1.jpg';
import Omo2 from '../../../../public/Assets/Omo2.jpg';
import Omo3 from '../../../../public/Assets/Omo3.jpg';
import Link from 'next/link';
import Footer from '@/app/component/layout/Footer';
import Button from '../Button';

const Hero = () => {
  return (
    <section className=''>
      <Nav />

      <Link href='/'>
        {' '}
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
        <h1 className='text-[#5933A7] font-bold md:font-semibold leading-normal lg:leading-[2.5rem]  tracking-[0.375rem] md:tracking-[0.625rem] md:text-lg lg:text-[2rem]'>
          OMO LOCKDOWN
          <br />
          COMMUNICATION
          <br />
        </h1>
        <div className='bg-[#FFF4EF] w-full md:w-[34rem] lg:w-[41.1875rem] space-y-[1.56rem] h-[17rem] lg:h-[22.1875rem] rounded-lg px-5 py-3 md:px-12 lg:px-16 md:py-7'>
          <h4 className='text-[#5933A7] text-lg lg:text-[2rem] tracking-[0.3125rem] md:tracking-[0.5rem] leading-normal font-bold'>
            OVERVIEW
          </h4>
          <p className='text-black leading-[1.625rem] font-normal text-sm md:leading-normal lg:leading-[2rem] md:text-[15px] lg:text-xl'>
            Social media communication during the COVID lockdown aimed at
            encouraging parents to allow their children to play indoors.
          </p>

          <p className='text-black leading-[1.625rem] md:leading-[2rem] text-sm md:text-base lg:text-xl font-normal'>
            <b className='font-bold'> When:</b> 2020
            <br />
            <b className='font-bold'>Where:</b> DDB
          </p>
        </div>
      </article>

      <div className='mt-[4rem] md:mt-[8.13rem] xl:max-w-[72rem] pro:max-w-[52rem] md:max-w-[40rem] px-3 small:max-w-[21.5rem] mac:max-w-[81rem] lg:max-w-[59rem] mx-auto space-y-[4.25rem] md:space-y-[6.25rem] flex-col items-center flex justify-center'>
        <Image src={Omo1} alt='omo' />
        <Image src={Omo2} alt='omo' />
        <Image src={Omo3} alt='omo' />
      </div>

      <Button />
      <Footer />
    </section>
  );
};

export default Hero;
