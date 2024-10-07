import React from 'react';
import Image from 'next/image';
import g1 from '../../../../public/Assets/g1.svg';
import g2 from '../../../../public/Assets/g2.svg';
import g3 from '../../../../public/Assets/g3.svg';
import g4 from '../../../../public/Assets/g4.svg';
import g5 from '../../../../public/Assets/g5.svg';
import g6 from '../../../../public/Assets/g6.svg';

const Overview = () => {
  return (
    <section className=''>
      <article className=' xl:max-w-[72rem] mt-16 pro:max-w-[52rem] md:max-w-[45rem] max-w-[22rem] mac:max-w-[81rem] lg:max-w-[59rem] mx-auto rounded-2xl w-full h-[22.3125rem] p-16'>
        <h4 className='text-[#5933A7] text-[2rem] tracking-[0.5rem] leading-normal font-semibold'>
          OVERVIEW
        </h4>

        <div>
          <p className='text-black text-xl font-normal pt-[1.56rem] leading-[2rem]'>
            Quickfill is a user-friendly mobile application designed to simplify
            the process of purchasing gas cylinder refills and new gas
            cylinders. The app allows users to quickly and conveniently place
            orders from the comfort of their home, eliminating the hassle of
            visiting physical stores.
            <br />
            <br />
            TGB Digitals needed a fun and approachable brand that showcases
            their friendly, customer-first approach while helping businesses
            stay competitive and achieve lasting growth.
          </p>
          {/* <Image src={} alt='' /> */}
        </div>
      </article>

      <article className='mt-40 max-w-[70rem] mx-auto bg-[#FFF4EF]'></article>
      <div className='bg-[#1D1D1B] h-[6.0625rem] w-full mt-40'></div>
      <div className='bg-[#FFD43B] h-[6.0625rem] w-full mt-5'></div>
      <div className='bg-[#FFE792] h-[6.0625rem] w-full mt-5'></div>
      <div className='bg-[#FFF6D9] h-[6.0625rem] w-full mt-5'></div>
    </section>
  );
};

export default Overview;
