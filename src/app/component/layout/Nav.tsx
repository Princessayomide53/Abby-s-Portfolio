import React from 'react';
import Image from 'next/image';
import art from '../../../../public/Assets/arts.png';

// type Props = {}

const Nav: React.FC = () => {
  return (
    <>
      <section className='bg-[#FFF4EF] py-3 w-full'>
        <nav className='xl:max-w-[72rem] pro:max-w-[52rem] md:max-w-[45rem] max-w-[22rem] mac:max-w-[83rem] lg:max-w-[59rem] mx-auto flex justify-between'>
          <div className='flex items-center'>
            <Image
              src={art}
              alt='Logo'
              className='md:w-[85px] md:h-[85px] w-[42.831px] h-[42.831px] '
              // width={85}
              // height={20}
              // lg:w-[85px]
              // lg:h-[20px]
              priority
            />
            <div>
              <h3 className='text-[#5933A7] text-sm md:text-[1rem] lg:text-[1.5rem] leading-normal font-extrabold'>
                Abieyuwa Adeseiye
              </h3>

              <p className='text-[#2B1851] text-sm md:text-[1.25rem] font-normal leading-normal'>
                Visual Designer
              </p>
            </div>
          </div>
          <ul className='lg:flex hidden xl:space-x-[5rem] lg:space-x-[3rem] mac:space-x-[7rem] py-4'>
            <li className='text-[#2B1851] lg:text-[1.125rem] xl:text-[1.25rem] font-medium tracking-[0.25rem] leading-normal'>
              About
            </li>
            <li className='text-[#2B1851] lg:text-[1.125rem] xl:text-[1.25rem] font-medium tracking-[0.25rem] leading-normal'>
              Contact
            </li>
          </ul>
          <ul className='py-4  lg:flex hidden'>
            <li className='text-[#5933A7] lg:text-[1.3rem] xl:text-[1.5rem] font-medium underline leading-normal'>
              Illustration portfolio
            </li>
          </ul>
          <div className='my-3 md:my-7 md:text-2xl lg:hidden'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='30'
              height='15'
              viewBox='0 0 22 10'
              fill='none'
            >
              <path
                d='M4.1084 1.04364H17.7365'
                stroke='#5933A7'
                stroke-width='1.94687'
                stroke-linecap='round'
              />
              <path
                d='M1.18848 4.93738L20.6572 4.93738'
                stroke='#5933A7'
                stroke-width='1.94687'
                stroke-linecap='round'
              />
              <path
                d='M4.1084 8.83112H17.7365'
                stroke='#5933A7'
                stroke-width='1.94687'
                stroke-linecap='round'
              />
            </svg>
          </div>
        </nav>
      </section>
    </>
  );
};

export default Nav;
