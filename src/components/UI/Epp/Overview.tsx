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
      <article className='bg-[#FFF4EF] xl:max-w-[72rem] mt-7 md:mt-20 pro:max-w-[52rem] md:max-w-[45rem] max-w-[22rem] mac:max-w-[81rem] lg:max-w-[59rem] mx-auto rounded-2xl h-[34.0625rem] w-full md:h-[20.3125rem] lg:h-[22.3125rem] p-5 md:p-10 xl:p-16'>
        <h4 className='text-[#5933A7] text-xl lg:text-[2rem] tracking-[0.3125rem] md:tracking-[0.5rem] leading-normal font-bold md:font-semibold'>
          OVERVIEW
        </h4>

        <p className='text-black text-sm small:text-base md:text-base lg:text-lg xl:text-xl font-normal pt-[1.56rem] leading-[2rem]'>
          TGB Digitals offers customized digital solutions designed to deliver
          real results. With a focus on innovation and collaboration, they help
          businesses succeed in today’s competitive digital world. Their
          services range from marketing strategies to web and app development,
          all tailored to meet each client’s specific needs.
          <br />
          <br />
          TGB Digitals needed a fun and approachable brand that showcases their
          friendly, customer-first approach while helping businesses stay
          competitive and achieve lasting growth.
        </p>
      </article>

      <article className='mt-12 md:mt-20 lg:mt-40 md:max-w-[43rem] lg:max-w-[70rem] mx-auto'>
        <div className='flex flex-col justify-center gap-7 items-center md:flex-row md:justify-around lg:max-w-[70rem] mx-auto'>
          <Image
            src={g1}
            alt=''
            className='lg:w-auto lg:h-auto md:w-[14rem] w-[17rem]'
          />
          <Image
            src={g2}
            alt=''
            className='lg:w-auto lg:h-auto md:w-[14rem] w-[17rem]'
          />
        </div>
        <div className='md:flex grid grid-cols-2 md:grid-cols-none gap-7 place-items-center md:flex-row md:justify-around mt-[3rem] md:mt-[6.0rem]'>
          <Image
            src={g3}
            alt=''
            className='lg:w-auto lg:h-auto md:w-[10rem] h-[8rem] w-[7rem]'
          />
          <Image
            src={g4}
            alt=''
            className='lg:w-auto lg:h-auto md:w-[10rem] h-[8rem] w-[7rem]'
          />
          <Image
            src={g5}
            alt=''
            className='lg:w-auto lg:h-auto md:w-[10rem] h-[8rem] w-[7rem]'
          />
          <Image
            src={g6}
            alt=''
            className='lg:w-auto lg:h-auto md:w-[10rem] h-[8rem] w-[7rem]'
          />
        </div>
      </article>
      <div className='bg-[#1D1D1B] h-[6.0625rem] w-full mt-14 md:mt-32 lg:mt-40'></div>
      <div className='bg-[#FFD43B] h-[6.0625rem] w-full mt-5'></div>
      <div className='bg-[#FFE792] h-[6.0625rem] w-full mt-5'></div>
      <div className='bg-[#FFF6D9] h-[6.0625rem] w-full mt-5'></div>
    </section>
  );
};

export default Overview;
