import React from 'react';
import omo from '../../../../public/Assets/Omo.svg';
import lipton from '../../../../public/Assets/Lipton.svg';
import waistline from '../../../../public/Assets/waistline.svg';
import flight from '../../../../public/Assets/flight.svg';
import Image from 'next/image';
import Link from 'next/link';

type Props = {};

const Arts = (props: Props) => {
  const Arts = [
    {
      id: 1,
      img: flight,
      text: 'VIEW PROJECT',
      Link: '/Green-africa',
    },
    {
      id: 2,
      img: omo,
      text: 'VIEW PROJECT',
      Link: '/Omo',
    },
    {
      id: 3,
      img: waistline,
      text: 'VIEW PROJECT',
      Link: '/Dano',
    },
    {
      id: 4,
      img: lipton,
      text: 'VIEW PROJECT',
      Link: '/Lipton',
    },
  ];
  return (
    <section className='my-[4.75rem] lg:my-[7.75rem] xl:max-w-[72rem] pro:max-w-[52rem] md:max-w-[45rem] px-2 small:max-w-[22rem] mac:max-w-[81rem] lg:max-w-[59rem] mx-auto'>
      <h1 className='text-center mb-[3rem] text-[#5933A7] text-lg lg:text-[2rem] tracking-[1rem] leading-normal font-semibold'>
        ART DIRECTION
      </h1>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-[3rem]'>
        {Arts.map((items) => (
          <div className='relative' key={items.id}>
            <Image src={items.img} priority alt='arts' />
            <Link href={items.Link}>
              <div className='absolute bottom-0 right-0'>
                <button className='text-[#391D70] flex gap-2 items-center ml-auto mt-auto bg-white py-2 md:py-3 px-2 md:px-4 font-semibold rounded-tl-md rounded-br-sm rounded-bl-lg text-[10px] md:text-[1rem] leading-normal tracking-[0.045rem] md:tracking-[0.1375rem]'>
                  {items.text}
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='12'
                    height='12'
                    viewBox='0 0 6 9'
                    fill='none'
                    className='w-3 h-3 md:w-auto md:h-auto'
                  >
                    <path d='M1 8L5 4.5L1 8ZM5 4.5L1 1L5 4.5Z' fill='#5E1DBB' />
                    <path
                      d='M1 8L5 4.5L1 1'
                      stroke='#5933A7'
                      stroke-width='1.5'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                    />
                  </svg>
                </button>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Arts;
