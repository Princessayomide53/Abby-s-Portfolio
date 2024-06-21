import React from 'react';
import Image from 'next/image';
import Baby from '../../../public/Assets/Baby.png';
import Social from '../../../public/Assets/Social.png';
import anxious from '../../../public/Assets/anxious.png';
import snuggles from '../../../public/Assets/social.png';
import flab from '../../../public/Assets/flab.png';
import guilt from '../../../public/Assets/guilt.png';

const Comics = () => {
  return (
    <section className='space-y-7 pt-28 lg:p-0 lg:pt-0 md:px-[2rem] w-full overflow-hidden'>
      <div className='flex flex-col md:flex-row md:justify-between'>
        <Image src={Baby} alt='' className='w-[500px] h-auto ' priority />
        <Image src={Social} alt='' className='w-[500px] h-auto' priority />
      </div>
      <div className='flex justify-between'>
        <Image src={anxious} alt='' className='w-[500px] h-auto ' priority />
        <Image src={snuggles} alt='' className='w-[500px] h-auto' priority />
      </div>
      <div className='flex justify-between'>
        <Image src={flab} alt='' className='w-[500px] h-auto ' priority />
        <Image src={guilt} alt='' className='w-[500px] h-auto' priority />
      </div>
    </section>
  );
};

export default Comics;
