import React from 'react';
import Image from 'next/image';
import sketch1 from '../../../public/Assets/sketch1.png';
import sketch2 from '../../../public/Assets/sketch2.png';
import sketch3 from '../../../public/Assets/sketch3.png';
import sketch4 from '../../../public/Assets/sketch4.png';
import sketch5 from '../../../public/Assets/sketch5.png';
import sketch6 from '../../../public/Assets/sketch6.png';
import sketch7 from '../../../public/Assets/sketch7.png';
import sketch8 from '../../../public/Assets/sketch8.png';
import sketch9 from '../../../public/Assets/sketch9.png';
import sketch10 from '../../../public/Assets/sketch10.png';
import sketch11 from '../../../public/Assets/sketch11.png';
// import sketch9 from '../../../public/Assets/sketch9.png';

const Sketchbook = () => {
  return (
    <section className='mt-28 lg:mt-0 md:px-[1.5rem] lg:px-0'>
      <span className='flex flex-col md:flex-row md:justify-between space-y-[25px] md:space-y-0'>
        <div className='flex flex-col'>
          <div className='flex flex-col md:flex-row md:justify-between space-y-[25px] md:space-y-0'>
            <Image
              src={sketch1}
              alt=''
              className='lg:w-[220px] w-full md:w-[230px] xl:w-[250px] mac:w-auto lg:h-[234px] '
              priority
            />
            <Image
              src={sketch2}
              alt=''
              className='lg:h-[239px] w-full md:w-[230px] md:h-[220px] lg:w-[220px] xl:w-[280px] mac:w-[310px]'
              priority
            />
          </div>
          <div className='flex flex-col md:flex-row md:justify-between mt-[25px] md:mt-5'>
            <Image
              src={sketch4}
              alt=''
              className='xl:h-[305px] w-full md:w-[230px] lg:w-[220px] xl:w-[280px] mac:w-[350px] '
              priority
            />
            <Image
              src={sketch5}
              alt=''
              className='xl:h-[305px] w-full md:w-[230px] lg:w-[220px] mt-5 xl:w-[280px] mac:w-[310px]'
              priority
            />
          </div>
        </div>
        <Image
          src={sketch3}
          alt=''
          className='lg:w-[250px] w-full md:w-[230px] xl:w-auto'
          priority
        />
      </span>
      <div className='flex flex-col md:flex-row md:justify-between mt-[25px] space-y-[25px] md:space-y-0 md:mt-10'>
        <Image
          src={sketch6}
          alt=''
          className='lg:w-[220px] w-full md:w-[230px] xl:w-[280px] mac:w-auto'
          priority
        />
        <Image
          src={sketch7}
          alt=''
          className='xl:w-[280px] w-full md:w-[230px] lg:w-[220px] mac:w-auto'
          priority
        />
        <Image
          src={sketch8}
          alt=''
          className='xl:w-[280px] w-full md:w-[230px] lg:w-[220px] md:h-[180px] xl:h-[235px] -mt-5 mac:w-auto'
          priority
        />
      </div>
      <div className='flex flex-col md:flex-row md:justify-between mt-[25px] space-y-[25px] md:space-y-0 md:mt-10'>
        <Image
          src={sketch9}
          alt=''
          className='xl:w-[280px] w-full md:w-[230px] lg:w-[220px] mac:w-auto'
          priority
        />
        <Image
          src={sketch10}
          alt=''
          className='xl:w-[280px] w-full md:w-[230px] lg:w-[220px] mac:w-auto'
          priority
        />
        <Image
          src={sketch11}
          alt=''
          className='xl:h-[305px] w-full md:w-[230px] md:h-[240px] lg:h-[280px] lg:w-[220px] -mt-20 xl:w-[280px] mac:w-auto'
          priority
        />
      </div>
    </section>
  );
};

export default Sketchbook;
