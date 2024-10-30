import React from 'react';
import Image from 'next/image';
import R1 from '../../../../public/Assets/R.svg';
import R2 from '../../../../public/Assets/R2.svg';
import R3 from '../../../../public/Assets/R3.svg';

type Props = {};

const Research = (props: Props) => {
  return (
    <section className='bg-[#1F0229] mt-[2.69rem] xl:max-w-[72rem] rounded-xl py-[1.56rem] md:py-[3.08rem] lg:py-[5.08rem] pro:max-w-[52rem] md:max-w-[45rem] max-w-[22rem] mac:max-w-[83rem] lg:max-w-[59rem] mx-auto'>
      <h2 className='tracking-[0.375rem] text-center leading-normal  font-bold text-xl md:text-[1.5rem] text-white'>
        RESEARCH FINDINGS
      </h2>

      <div className='w-[17.88375rem] md:w-[33.51981rem] lg:w-[46.51981rem] mt-[2.35rem] md:mt-[3.18rem] lg:mt-[5.18rem] relative mx-auto h-[5.05469rem] md:h-[9.03206rem] bg-[#FDCF49] rounded-xl'>
        <Image
          src={R1}
          alt=''
          className='absolute top-2 -left-8 md:-left-14 z-20 w-[3rem] h-[4rem] md:w-auto md:h-auto'
        />
        <p className='md:text-lg lg:text-[1.5rem] text-black px-[2.45rem] py-[0.65rem] md:px-28 md:py-12 font-bold leading-normal '>
          Transporting the cylinder to and fro
          <br className='hidden md:block' /> is very stressful
        </p>
      </div>
      <div className='w-[17.88375rem] md:w-[33.51981rem] lg:w-[46.51981rem] relative mt-[0.49rem] mx-auto h-[5.05469rem] md:h-[9.03206rem] bg-[#FDD86E] rounded-xl'>
        <Image
          src={R2}
          alt=''
          className='absolute top-2 -left-8 md:-left-16 z-20 w-[3rem] h-[4rem] md:w-auto md:h-auto'
        />
        <p className='md:text-lg lg:text-[1.5rem] text-black px-[2.45rem] py-[0.65rem] md:px-28 md:py-10 font-bold leading-normal '>
          Waiting in long queues to fill gas can{' '}
          <br className='hidden md:block' /> be frustrating
        </p>
      </div>
      <div className='w-[17.88375rem] md:w-[33.51981rem] lg:w-[46.51981rem] relative mt-[0.49rem] mx-auto h-[5.05469rem] md:h-[9.03206rem] bg-[#FEEBB7] rounded-xl'>
        <Image
          src={R3}
          alt=''
          className='absolute top-2 -left-8 md:-left-16 z-20 w-[3rem] h-[4rem] md:w-auto md:h-auto'
        />
        <p className='md:text-lg lg:text-[1.5rem] text-black px-[2.45rem] py-[0.65rem] md:px-24 md:py-10 font-bold leading-normal '>
          It is difficult to tell if the cylinder was filled{' '}
          <br className='hidden md:block' /> accurately
        </p>
      </div>
    </section>
  );
};

export default Research;
