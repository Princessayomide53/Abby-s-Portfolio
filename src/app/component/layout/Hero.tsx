import React from 'react';
import Image from 'next/image';
import left from '../../../../public/Assets/left.png';
import right from '../../../../public/Assets/right.png';
import '../../styles.css';
import Scroll from './Scroll';
// type Props = {}

const Hero: React.FC = () => {
  return (
    <section className='bg-[#FFF4EF] mac:h-screen md:h-[30rem] h-[20.5rem] lg:h-[45.5rem]  w-full relative overflow-hidden'>
      <div className='flex justify-between pt-[5rem]  '>
        <Image
          src={left}
          alt='Logo'
          className='w-[21.4375rem] h-[40.99469rem]'
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
      <div className='text-[#E9D3CA] absolute left-0 top-8 md:top-12 lg:top-20'>
        <Scroll />{' '}
      </div>
      <div className='xl:max-w-[72rem] mac:max-w-[83rem] md:max-w-[45rem] max-w-[22rem] -mt-[33rem] mx-auto flex flex-col justify-center items-center md:-mt-[23rem] lg:-mt-[17rem]'>
        <p className='text-[#E5BEAE] text-xs tracking-normal w-full mac:text-[1rem]  text-center font-medium  leading-normal md:tracking-[0.3524578rem] lg:tracking-[0.5524578rem] xl:tracking-[0.9524578rem] mac:tracking-[1.1524578rem] uppercase'>
          crafting experiences that uplift and inspire.
        </p>

        <h3 className='text-[#5933A7] md:text-[1.25rem] pt-[3.7rem] tracking-[10px] text-base lg:text-[2rem] md:pt-[3rem] lg:pt-[8rem] text-center font-semibold leading-normal md:tracking-[1rem]'>
          FEATURED PROJECTS
        </h3>
      </div>
    </section>
  );
};

export default Hero;
