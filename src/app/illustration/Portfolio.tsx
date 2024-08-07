import React from 'react';
import Image from 'next/image';
import Bianca1 from '../../../public/Assets/Bianca-1.jpg';
import Bianca2 from '../../../public/Assets/Bianca-2.jpg';
import arts from '../../../public/Assets/1b.jpg';
import arts2 from '../../../public/Assets/arts2.jpg';
import family from '../../../public/Assets/family.jpg';
import love from '../../../public/Assets/love.jpg';
import papa from '../../../public/Assets/papa.jpg';
import snow from '../../../public/Assets/snow.jpg';
import Sunset from '../../../public/Assets/Sunset.jpg';
import sleep from '../../../public/Assets/sleep.jpg';
import book from '../../../public/Assets/book.jpg';

const Portfolio = () => {
  return (
    <section className='h-[80rem] w-full mt-28 lg:mt-0'>
      <div className='flex flex-col md:flex-row md:justify-between gap-y-[25px] md:gap-y-0 mac:gap-5'>
        <Image
          src={arts}
          alt=''
          className='mac:w-[504px] md:w-[350px] md:h-[350px] lg:w-[350px] lg:h-[350px] xl:w-[400px] xl:h-[400px] mac:h-[504px]'
          priority
        />
        <Image
          src={Bianca2}
          alt=''
          className='lg:w-[300px] md:w-[350px] xl:w-[450px] mac:w-[504px]'
          priority
        />
      </div>
      <div className='flex flex-col md:flex-row md:justify-between gap-y-[25px] md:gap-y-0  mac:gap-5'>
        <Image
          src={Bianca1}
          alt=''
          className='xl:-mt-64 lg:-mt-24 md:-mt-40 mt-[25px] md:w-[350px] md:h-[450px] lg:w-[350px] lg:h-[400px] xl:w-[400px] xl:h-[500px] mac:w-[504px] mac:h-[522px]'
          priority
        />
        <Image
          src={arts2}
          alt=''
          className='lg:w-[300px] w-[350px] xl:w-[450px] mac:w-[502px] md:mt-10'
          priority
        />
      </div>
      <div className='flex flex-col md:flex-row md:justify-between gap-y-[25px] md:gap-y-0  mac:gap-5'>
        <Image
          src={family}
          alt=''
          className='mac:-mt-[22.5rem] xl:-mt-[19rem] mt-[25px] md:-mt-[8.3rem] md:w-[350px] md:h-[400px] lg:-mt-[4.5rem] lg:w-[350px] lg:h-[350px] xl:w-[400px] xl:h-[490px] mac:w-[504px] mac:h-[504px]'
          priority
        />
        <Image
          src={love}
          alt=''
          className='md:mt-10 mac:h-[504px] md:w-[350px] md:h-[450px] mac:w-auto lg:w-[300px] lg:h-[420px] xl:w-[450px] xl:h-[550px]'
          priority
        />
      </div>
      <div className='flex flex-col md:flex-row md:justify-between gap-y-[25px] md:gap-y-0  mac:gap-5'>
        <Image
          src={papa}
          alt=''
          className='xl:-mt-[22rem] md:-mt-[11rem] mt-[25px] lg:-mt-[9.1rem] mac:-mt-[22.5rem] md:w-[350px] xl:w-[400px] lg:w-[350px] md:h-[400px] xl:h-[500px] mac:w-[504px] mac:h-[498px]'
          priority
        />
        <Image
          src={snow}
          alt=''
          className='md:mt-10 lg:w-[300px] md:w-[350px] md:h-[450px] xl:h-auto xl:w-[450px] mac:h-[638px] mac:w-[502px]'
          priority
        />
      </div>
      <div className='flex flex-col md:flex-row md:justify-between gap-y-[25px] md:gap-y-0  mac:gap-5'>
        <Image
          src={Sunset}
          alt=''
          className='xl:-mt-[25.5rem] mac:-mt-[30.7rem] mt-[25px] md:-mt-[13rem] md:w-[350px] md:h-[400px] xl:w-[400px] lg:w-[350px] lg:-mt-[12.5rem] lg:h-[400px] xl:h-[550px] mac:w-[507px] mac:h-[620px]'
          priority
        />
        <Image
          src={sleep}
          alt=''
          className='lg:mt-14 mac:mt-20 lg:w-[300px] md:w-[350px] md:mt-10 md:h-[500px] xl:h-auto xl:w-[450px] mac:w-[502px] mac:h-[627px]'
          priority
        />
      </div>
      <div className='flex flex-col md:flex-row md:justify-between gap-y-[25px] md:gap-y-0 mac:gap-5'>
        <Image
          src={book}
          alt=''
          className='mac:-mt-[32rem] md:w-[350px] mt-[25px] md:h-[320px] md:-mt-[20rem] lg:-mt-[21rem] lg:w-[350px] lg:h-[320px] xl:-mt-[26rem] xl:w-[400px] xl:h-[400px] mac:w-[504px] mac:h-[498px]'
          priority
        />
        {/* <Image src={sleep} alt='' className='mt-10' priority /> */}
      </div>
    </section>
  );
};

export default Portfolio;
