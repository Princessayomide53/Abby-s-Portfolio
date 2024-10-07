'use client';
import React from 'react';
import Image from 'next/image';
import epp2 from '../../../../public/Assets/epp2.svg';
import gatsby2 from '../../../../public/Assets/gatsby2.svg';
import xperiencer2 from '../../../../public/Assets/xperiencer2.svg';
import Link from 'next/link';

const Projects: React.FC = () => {
  const Projects = [
    {
      id: 1,
      img: epp2,
      Link: '/quickfill',
      text: 'PRODUCT DESIGN | CASE STUDY',
    },
    {
      id: 2,
      img: xperiencer2,
      Link: '/xperienzer',
      text: 'VISUAL DESIGN | BRANDING',
    },
    {
      id: 3,
      img: gatsby2,
      Link: '/gatsby',
      text: 'VISUAL DESIGN | BRANDING',
    },
  ];
  return (
    <section className='mt-[4rem] mb-[5rem] px-3' id='section1'>
      <h3 className='text-[#5933A7] md:text-[1.25rem] mb-[3.06rem]  tracking-[10px] text-base lg:text-[2rem] text-center font-semibold leading-normal md:tracking-[1rem]'>
        PROJECTS
      </h3>
      <div className='xl:max-w-[72rem] pro:max-w-[52rem] md:max-w-[45rem] px-2 small:max-w-[22rem] mac:max-w-[81rem] lg:max-w-[59rem] mx-auto space-y-[2rem] md:space-y-[3.44rem] '>
        {Projects.map((item) => (
          <div className='relative z-20'>
            <h3 className='tracking-[0.09175rem] pb-3 md:hidden font-bold leading-normal text-[#391D70] text-[0.45875rem]'>
              {item.text}
            </h3>
            <Image src={item.img} priority alt='PROJECTS' className='z-20' />
            <h3 className='w-[15rem] hidden md:flex text-[9px] md:w-[22.1875rem] lg:w-[30.1875rem] absolute inset-0 rounded-xl items-center justify-center mt-auto mb-3 ml-6 h-[3.625rem] bg-white/80 backdrop-blur-[7.5px] text-xs lg:text-lg text-[#391D70] tracking-[0.25rem] font-bold leading-normal'>
              {item.text}
            </h3>
            <Link href={item.Link}>
              <div className='absolute bottom-0 right-0'>
                <button className='text-[#391D70] flex gap-2 items-center ml-auto mt-auto bg-white py-2 md:py-3 px-2 md:px-4 font-semibold rounded-tl-md rounded-br-sm rounded-bl-lg text-[9px] md:text-[1rem] leading-normal tracking-[0.045rem] md:tracking-[0.1375rem]'>
                  VIEW PROJECT{' '}
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='12'
                    height='12'
                    viewBox='0 0 6 9'
                    fill='none'
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

export default Projects;
