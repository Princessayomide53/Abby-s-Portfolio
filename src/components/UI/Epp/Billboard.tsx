import React from 'react';
import Image from 'next/image';
import billboard from '../../../../public/Assets/billboards.svg';
import letterhead2 from '../../../../public/Assets/Letterhead2.svg';
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
      <Button />
      <Footer />
    </section>
  );
};

export default Billboard;
