import React from 'react';
import Image from 'next/image';
import Bianca1 from '../../../public/Assets/Bianca-1.png';
import Bianca2 from '../../../public/Assets/Bianca-2.png';
import arts from '../../../public/Assets/1b.png';
import arts2 from '../../../public/Assets/arts2.png';
import family from '../../../public/Assets/family.png';
import love from '../../../public/Assets/love.png';
import papa from '../../../public/Assets/papa.png';
import snow from '../../../public/Assets/snow.png';
import Sunset from '../../../public/Assets/Sunset.png';
import sleep from '../../../public/Assets/sleep.png';
import book from '../../../public/Assets/book.png';

const Portfolio = () => {
  return (
    <section className='h-[80rem] w-full'>
      <div className='flex gap-5'>
        <Image src={arts} alt='' className='w-[504px] h-[504px]' priority />
        <Image src={Bianca2} alt='' className='w-[504px]' priority />
      </div>
      <div className='flex gap-5'>
        <Image
          src={Bianca1}
          alt=''
          className='-mt-64 w-[504px] h-[522px]'
          priority
        />
        <Image src={arts2} alt='' className='w-[502px] mt-10' priority />
      </div>
      <div className='flex gap-5'>
        <Image
          src={family}
          alt=''
          className='-mt-[22.5rem] w-[504px] h-[628px]'
          priority
        />
        <Image src={love} alt='' className='mt-10' priority />
      </div>
      <div className='flex gap-5'>
        <Image
          src={papa}
          alt=''
          className='-mt-[15rem] w-[504px] h-[498px]'
          priority
        />
        <Image src={snow} alt='' className='mt-10 h-[638px]' priority />
      </div>
      <div className='flex gap-5'>
        <Image
          src={Sunset}
          alt=''
          className='-mt-[23.7rem] w-[504px] h-[620px]'
          priority
        />
        <Image src={sleep} alt='' className='mt-20 h-[648px]' priority />
      </div>
      <div className='flex gap-5'>
        <Image
          src={book}
          alt=''
          className='-mt-[28rem] w-[504px] h-[455px]'
          priority
        />
        {/* <Image src={sleep} alt='' className='mt-10' priority /> */}
      </div>
    </section>
  );
};

export default Portfolio;
