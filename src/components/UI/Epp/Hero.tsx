import React from 'react';
import Image from 'next/image';
import gatsbyHero from '../../../../public/Assets/gatsbyHero.svg';
import Nav from '@/app/component/layout/Nav';
import gatsby3 from '../../../../public/Assets/gatsby3.svg';

const Hero = () => {
  return (
    <section className='relative'>
      <Nav />
      <div className='xl:max-w-[72rem] mt-28 rounded-2xl! pro:max-w-[52rem] md:max-w-[45rem] max-w-[22rem] mac:max-w-[81rem] lg:max-w-[59rem] mx-auto'>
        <Image
          src={gatsbyHero}
          alt=''
          priority
          className='w-full h-full object-cover'
        />

        <div className='flex justify-center items-center absolute inset-0'>
          <Image src={gatsby3} alt='logo' priority className='' />
        </div>
      </div>
    </section>
  );
};

export default Hero;
