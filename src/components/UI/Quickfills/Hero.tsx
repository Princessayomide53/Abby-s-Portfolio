import React from 'react';
import Image from 'next/image';
import quickfill from '../../../../public/Assets/quickfill.svg';
import Nav from '@/app/component/layout/Nav';
import quickLogo from '../../../../public/Assets/quickLogo.svg';

const Hero = () => {
  return (
    <section className='relative'>
      <Nav />
      <div className='xl:max-w-[72rem] mt-28 rounded-2xl! pro:max-w-[52rem] md:max-w-[45rem] max-w-[22rem] mac:max-w-[81rem] lg:max-w-[59rem] mx-auto'>
        <Image
          src={quickfill}
          alt=''
          priority
          className='w-full h-full z-20 object-cover'
        />

        <div className='flex justify-center items-center absolute inset-0'>
          <Image
            src={quickLogo}
            alt='logo'
            priority
            className='h-[8.62144rem] w-[14rem] md:w-[25rem] lg:w-auto md:h-auto object-contain'
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
