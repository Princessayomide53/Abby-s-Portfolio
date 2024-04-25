import React from 'react';
import Image from 'next/image';
import left from '../../../../public/Assets/left.png';
import right from '../../../../public/Assets/right.png';
import '../../styles.css';
import Scroll from './Scroll';
// type Props = {}

const Hero: React.FC = () => {
  return (
    <section className='bg-[#FFF4EF] mac:h-screen md:h-[38rem] h-[25.5rem] lg:h-[45.5rem]  w-full relative overflow-hidden'>
      <div className='hidden md:flex justify-between pt-[3rem] md:pt-[8.5rem] lg:pt-[10.5rem]  '>
        <Image
          src={left}
          alt='Logo'
          className='md:w-[21.4375rem] md:h-[40.99469rem]'
          //   width={85}
          //   height={20}
          priority
        />
        <Image
          src={right}
          alt='Logo'
          className='w-[22.625rem] h-[40.375rem]'
          //   width={85}
          //   height={20}
          priority
        />
      </div>
      <div className='text-[#E9D3CA] absolute left-0 top-24 md:top-36 lg:top-48'>
        <Scroll />{' '}
      </div>
      <div className='xl:max-w-[72rem] mac:max-w-[83rem] md:max-w-[45rem] lg:max-w-[60rem] max-w-[22rem] mt-[17rem] mx-auto flex flex-col justify-center items-center md:-mt-[22rem] lg:-mt-[18rem]'>
        <p className='text-[#E5BEAE] text-xs tracking-[0.6px] w-full md:text-[1rem]  text-center font-medium  leading-normal md:tracking-[0.3524578rem] lg:tracking-[0.5524578rem] xl:tracking-[0.9524578rem] mac:tracking-[1.1524578rem] uppercase'>
          crafting experiences that uplift and inspire.
        </p>

        <h3 className='text-[#5933A7] md:text-[1.25rem] pt-[3.7rem] tracking-[10px] text-base lg:text-[2rem] mac:pt-[4rem] md:pt-[5rem] lg:pt-[5rem] text-center font-semibold leading-normal md:tracking-[1rem]'>
          FEATURED PROJECTS
        </h3>
      </div>
    </section>
  );
};

export default Hero;
