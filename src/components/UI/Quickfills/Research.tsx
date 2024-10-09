import React from 'react';
import Image from 'next/image';
import R1 from '../../../../public/Assets/R.svg';
import R2 from '../../../../public/Assets/R2.svg';
import R3 from '../../../../public/Assets/R3.svg';

type Props = {};

const Research = (props: Props) => {
  return (
    <section className='bg-[#1F0229] mt-[2.69rem] xl:max-w-[72rem] rounded-xl py-[5.08rem] pro:max-w-[52rem] md:max-w-[45rem] max-w-[22rem] mac:max-w-[83rem] lg:max-w-[59rem] mx-auto'>
      <h2 className='tracking-[0.375rem] text-center leading-normal  font-bold text-[1.5rem] text-white'>
        RESEARCH FINDINGS
      </h2>

      <div className='w-[46.51981rem] mt-[5.18rem] relative mx-auto h-[9.03206rem] bg-[#FDCF49] rounded-xl'>
        <Image src={R1} alt='' className='absolute top-2 -left-14 z-20' />
        <p className='text-[1.5rem] text-black px-28 py-12 font-bold leading-normal '>
          Transporting the cylinder to and fro
          <br /> is very stressful
        </p>
      </div>
      <div className='w-[46.51981rem] relative mt-[0.49rem] mx-auto h-[9.03206rem] bg-[#FDD86E] rounded-xl'>
        <Image src={R2} alt='' className='absolute top-2 -left-16 z-20' />
        <p className='text-[1.5rem] text-black px-28 py-10 font-bold leading-normal '>
          Waiting in long queues to fill gas can <br /> be frustrating
        </p>
      </div>
      <div className='w-[46.51981rem] relative mt-[0.49rem] mx-auto h-[9.03206rem] bg-[#FEEBB7] rounded-xl'>
        <Image src={R3} alt='' className='absolute top-2 -left-16 z-20' />
        <p className='text-[1.5rem] text-black px-24 py-10 font-bold leading-normal '>
          It is difficult to tell if the cylinder was filled <br /> accurately
        </p>
      </div>
    </section>
  );
};

export default Research;
