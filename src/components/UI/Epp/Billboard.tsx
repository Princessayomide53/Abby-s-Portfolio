import React from 'react';
import Image from 'next/image';
import billboard from '../../../../public/Assets/billboards.svg';
import letterhead2 from '../../../../public/Assets/letterhead2.svg';
import card3 from '../../../../public/Assets/card-mock3.svg';
import black5 from '../../../../public/Assets/black5.svg';
import hoodie from '../../../../public/Assets/hoodie4.svg';
import tote6 from '../../../../public/Assets/tote6.svg';
import BOTTLE7 from '../../../../public/Assets/BOTTLE7.svg';
import Link from 'next/link';
import Footer from '../../../app/component/layout/Footer';

const Billboard = () => {
  return (
    <section className='space-y-[2.54rem] overflow-hidden'>
      <Image src={billboard} alt='billboard' priority />
      <div className='flex gap-10 justify-between'>
        <Image src={letterhead2} alt='letterhead2' />
        <Image src={card3} alt='billboard' />
      </div>
      <div className='flex gap-10 justify-between'>
        <Image src={black5} alt='billboard' />
        <Image src={hoodie} alt='billboard' />
      </div>
      <div className='flex gap-10 justify-between'>
        <Image src={tote6} alt='billboard' />
        <Image src={BOTTLE7} alt='billboard' />
      </div>
      <div className='xl:max-w-[72rem] pt-[6rem] pb-44 pro:max-w-[52rem] md:max-w-[45rem] max-w-[22rem] mac:max-w-[81rem] lg:max-w-[59rem] mx-auto flex justify-between items-center'>
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

export default Billboard;
