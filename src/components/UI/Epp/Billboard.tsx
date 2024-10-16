import React from 'react';
import Image from 'next/image';
import billboard from '../../../../public/Assets/billboards.svg';
import letterhead2 from '../../../../public/Assets/Letterhead2.svg';
import letterhead3 from '../../../../public/Assets/letterhead3.svg';
import card3 from '../../../../public/Assets/Card-mock3.svg';
import black5 from '../../../../public/Assets/black5.svg';
import hoodie from '../../../../public/Assets/hoodie4.svg';
import tote6 from '../../../../public/Assets/tote6.svg';
import BOTTLE7 from '../../../../public/Assets/BOTTLE7.svg';
import Link from 'next/link';
import Footer from '../../../app/component/layout/Footer';
import Button from '../Button';

const Billboard = () => {
  return (
    <section className='space-y-[2.54rem] overflow-hidden'>
      <Image src={billboard} alt='billboard' priority />
      <div className='flex gap-5 md:gap-10 justify-between'>
        <Image
          src={letterhead3}
          alt='letterhead2'
          className='lg:w-auto md:h-auto md:w-[24rem] w-[10rem] h-[11.8125rem] md:hidden  flex'
        />
        <Image
          src={letterhead2}
          alt='letterhead2'
          className='lg:w-auto md:h-auto md:w-[24rem] w-[10rem] hidden md:flex'
        />
        <Image src={card3} alt='billboard' />
      </div>
      <div className='flex gap-5 md:gap-10 justify-between'>
        <Image
          src={black5}
          alt='billboard'
          className='xl:w-auto h-auto md:w-[24rem] lg:w-[30rem] w-[10rem] small:w-[12rem]'
        />
        <Image
          src={hoodie}
          alt='billboard'
          className='xl:w-auto h-auto md:w-[24rem] lg:w-[30rem] w-[10rem] small:w-[12rem]'
        />
      </div>
      <div className='flex gap-5 md:gap-10 justify-between'>
        <Image
          src={tote6}
          alt='billboard'
          className='xl:w-auto h-auto md:w-[24rem] lg:w-[30rem] w-[10rem] small:w-[12rem]'
        />
        <Image
          src={BOTTLE7}
          alt='billboard'
          className='xl:w-auto h-auto md:w-[24rem] lg:w-[30rem] w-[10rem] small:w-[12rem]'
        />
      </div>
      <Button />
      <Footer />
    </section>
  );
};

export default Billboard;
