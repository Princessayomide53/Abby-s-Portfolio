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
    <section className='space-y-[2.54rem] mt-12 overflow-hidden'>
      <Image src={billboard} alt='billboard' priority />
      <div className='flex gap-10 justify-between'>
        <Image src={hanging} alt='letterhead2' />
        <Image src={side} alt='billboard' />
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
