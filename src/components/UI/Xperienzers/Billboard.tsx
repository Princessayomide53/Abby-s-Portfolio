import React from 'react';
import Image from 'next/image';
import billboard from '../../../../public/Assets/billboardx.svg';
import hanging from '../../../../public/Assets/hanging.svg';
import side from '../../../../public/Assets/sideX.svg';
import book from '../../../../public/Assets/book.svg';
import abstract from '../../../../public/Assets/abstract.svg';
import Link from 'next/link';
import Footer from '../../../app/component/layout/Footer';
import Button from '../Button';

const Billboard = () => {
  return (
    <section className='space-y-[1.54rem] md:space-y-[2.54rem] mt-12 overflow-hidden max-w-[90rem] mx-auto'>
      <Image src={billboard} alt='billboard' priority />
      <div className='flex gap-5 md:gap-10 justify-between'>
        <Image
          src={hanging}
          alt='letterhead2'
          className='md:-mt-24 -mt-8 z-20 w-[12rem] md:w-[25rem] lg:w-[35rem] xl:w-auto h-auto'
        />
        <Image
          src={side}
          alt='billboard'
          className='lg:w-[47rem] w-[16rem] md:w-[33rem] xl:w-auto h-auto md:-mt-5 lg:-mt-0'
        />
      </div>

      <Image src={book} alt='billboard' />
      <div className='flex justify-center'>
        <Image src={abstract} alt='billboard' priority className='' />
      </div>

      <Button />
      <div className='bg-[#FFF4EF]'>
        <Footer />
      </div>
    </section>
  );
};

export default Billboard;
