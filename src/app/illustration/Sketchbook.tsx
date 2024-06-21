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
    <section className=''>
      <span className='flex justify-between'>
        <div className='flex flex-col'>
          <div className='flex justify-between'>
            <Image src={sketch1} alt='' className='h-[234px] ' priority />
            <Image
              src={sketch2}
              alt=''
              className='h-[239px] w-[310px]'
              priority
            />
          </div>
          <div className='flex justify-between mt-5'>
            <Image
              src={sketch4}
              alt=''
              className='h-[305px] w-[350px] '
              priority
            />
            <Image
              src={sketch5}
              alt=''
              className='h-[305px] mt-5 w-[310px]'
              priority
            />
          </div>
        </div>
        <Image src={sketch3} alt='' className='' priority />
      </span>
      <div className='flex justify-between mt-10'>
        <Image src={sketch6} alt='' className='' priority />
        <Image src={sketch7} alt='' className='' priority />
        <Image src={sketch8} alt='' className='h-[235px] -mt-5' priority />
      </div>
      <div className='flex justify-between mt-10'>
        <Image src={sketch9} alt='' className='' priority />
        <Image src={sketch10} alt='' className='' priority />
        <Image src={sketch11} alt='' className='h-[305px] -mt-20' priority />
      </div>
    </section>
  );
};

export default Sketchbook;
