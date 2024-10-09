import React from 'react';
import Image from 'next/image';
import X1 from '../../../../public/Assets/X1.svg';
import Nav from '@/app/component/layout/Nav';
import x from '../../../../public/Assets/x.svg';

const Hero = () => {
  return (
    <section className='relative'>
      <Nav />
      <div className='xl:max-w-[72rem] mt-28 rounded-2xl! pro:max-w-[52rem] md:max-w-[45rem] max-w-[22rem] mac:max-w-[81rem] lg:max-w-[59rem] mx-auto'>
        <Image
          src={X1}
          alt='background'
          priority
          className='w-full h-full object-cover z-20'
        />

        <div className='flex justify-center items-center absolute inset-0'>
          <Image src={x} alt='logo' className='' />
        </div>
      </div>
    </section>
  );
};

export default Hero;
