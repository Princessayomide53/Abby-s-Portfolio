'use client';
import React from 'react';
import { useRouter, usePathname } from 'next/navigation';

const Button = () => {
  const router = useRouter();
  const currentPath = usePathname();

  // Define routes based on your specific page structure
  const routes = [
    '/Joice',
    '/quickfill',
    '/xperienzer',
    '/Green-africa',
    '/Omo',
    '/Dano',
    '/Lipton',
  ];

  const currentIndex = routes.indexOf(currentPath);
  const prevRoute = currentIndex > 0 ? routes[currentIndex - 1] : null;
  const nextRoute =
    currentIndex < routes.length - 1 ? routes[currentIndex + 1] : null;

  const handleNavigation = (path: string) => {
    if (path) {
      console.log('Navigating to:', path);
      router.push(path);
    }
    console.log('Current Path:', currentPath);
    console.log('Current Index:', currentIndex);
    console.log('Previous Route:', prevRoute);
    console.log('Next Route:', nextRoute);
  };

  return (
    <div className='xl:max-w-[72rem] pt-[4rem] md:pt-[7rem] pb-20 md:pb-44 pro:max-w-[52rem] md:max-w-[45rem] px-3 small:max-w-[21.5rem] mac:max-w-[81rem] lg:max-w-[59rem] mx-auto flex justify-between items-center'>
      <button
        onClick={() => router.push('/')}
        className='text-[#5933A7] text-sm md:text-base lg:text-[1.5rem] font-semibold leading-normal tracking-[0.175rem] md:tracking-[0.3rem]'
      >
        HOMEPAGE
      </button>

      <div className='flex gap-[2rem] md:gap-[3.19rem]'>
        {prevRoute && (
          <button
            onClick={() => handleNavigation(prevRoute)}
            className='rounded-xl text-[#5E1DBB] md:text-base lg:text-[1.25rem] font-medium tracking-[0.25rem] py-3 px-5 lg:px-10 flex gap-5 items-center bg-[#E9D3CA]'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='13'
              height='23'
              viewBox='0 0 13 23'
              fill='none'
              className='md:w-auto md:h-auto w-3 h-3'
            >
              <path
                d='M11 21L2 11.5L11 21ZM2 11.5L11 2L2 11.5Z'
                fill='#5E1DBB'
              />
              <path
                d='M11 21L2 11.5L11 2'
                stroke='#5933A7'
                strokeWidth='3'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
            <b className='md:flex hidden'>PREV</b>
          </button>
        )}
        {nextRoute && (
          <button
            onClick={() => handleNavigation(nextRoute)}
            className='rounded-xl text-[#5E1DBB] md:text-base lg:text-[1.25rem] font-medium tracking-[0.25rem] py-3 px-5 lg:px-10 flex gap-5 items-center bg-[#E9D3CA]'
          >
            <b className='md:flex hidden'>NEXT</b>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='13'
              height='23'
              viewBox='0 0 13 23'
              fill='none'
              className='md:w-auto md:h-auto w-3 h-3'
            >
              <path
                d='M2 21L11 11.5L2 21ZM11 11.5L2 2L11 11.5Z'
                fill='#5E1DBB'
              />
              <path
                d='M2 21L11 11.5L2 2'
                stroke='#5933A7'
                strokeWidth='3'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
};

export default Button;
