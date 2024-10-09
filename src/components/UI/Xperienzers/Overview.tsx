import React from 'react';
import Image from 'next/image';
import xx1 from '../../../../public/Assets/xx1.svg';
import x2 from '../../../../public/Assets/x2.svg';
import x3 from '../../../../public/Assets/x3.svg';
import x4 from '../../../../public/Assets/x4.svg';
import x5 from '../../../../public/Assets/x5.svg';
import x6 from '../../../../public/Assets/x6.svg';
import x7 from '../../../../public/Assets/x7.svg';
import x8 from '../../../../public/Assets/x8.svg';

const Overview = () => {
  return (
    <section className=''>
      <article className='bg-[#FFF4EF] xl:max-w-[72rem] mt-20 pro:max-w-[52rem] md:max-w-[45rem] max-w-[22rem] mac:max-w-[81rem] lg:max-w-[59rem] mx-auto rounded-2xl w-full h-[22.3125rem] p-16'>
        <h4 className='text-[#5933A7] text-[2rem] tracking-[0.5rem] leading-normal font-semibold'>
          OVERVIEW
        </h4>

        <p className='text-black text-xl font-normal pt-[1.56rem] leading-[2rem]'>
          Xperienzer Makeovers provides personalized makeup services that
          enhance natural beauty and empower individuals to feel their best.
          Their client-focused services ensure that each makeup experience is
          tailored to highlight individual style and confidence.
          <br />
          <br />
          Xperienzer Makeovers needed a modern, sophisticated brand that
          reflects their commitment to celebrating unique beauty,
        </p>
      </article>

      <article className='mt-40 mb-5 max-w-[70rem] mx-auto'>
        <div className='flex justify-center max-w-[70rem] mx-auto'>
          <Image src={xx1} alt='' />
          {/* <Image src={x2} alt='' /> */}
        </div>
        <div className='flex justify-around mt-[6.0rem]'>
          <Image src={x3} alt='' />
          <Image src={x4} alt='' />
          <Image src={x2} alt='' />
          {/* <Image src={g6} alt='' /> */}
        </div>
        <div className='flex justify-around mt-[6.0rem]'>
          <Image src={x5} alt='' />

          <Image src={x7} alt='' />
          <Image src={x6} alt='' />
          <Image src={x8} alt='' />
        </div>
      </article>
    </section>
  );
};

export default Overview;
