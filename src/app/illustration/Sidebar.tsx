'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import abby from '../../../public/Assets/abby.png';
import heart from '../../../public/Assets/heart.png';
import Portfolio from './Portfolio';
import Link from 'next/link';
import Published from './Published';
import Comics from './Comics';
import Sketchbook from './Sketchbook';
import About from './About';

const Sidebar = () => {
  const [tabs, setTabs] = useState(1);
  const [nav, setNav] = useState(false);

  const handleTabs = (tabs: any) => {
    setTabs(tabs);
  };
  const handleBar = () => {
    setNav(true);
  };

  const closeBar = () => {
    setNav(false);
  };
  return (
    <section className='lg:flex-row flex flex-col lg:gap-10  w-[100%]'>
      <div className='md:max-w-[45rem] mx-auto block lg:hidden'>
        <header
          className={`${tabs === 1 ? 'bg-[#FBF1FF]' : ''}  ${
            tabs === 2 ? 'bg-[#F4FFDF]' : ''
          } ${tabs === 3 ? 'bg-[#E6FFFC]' : ''} ${
            tabs === 4 ? 'bg-[#FFF7C5]' : ''
          } ${
            tabs === 5 ? 'bg-[#FBF1FF]' : ''
          } w-full fixed top-0 left-0 z-20 h-24 flex justify-between items-center px-4 md:px-8 py-2`}
        >
          <div className='flex justify-between w-full relative z-20'>
            <span className='flex gap-3 md:gap-7 items-center'>
              <Image
                src={heart}
                alt='illustration'
                className='h-[45px] w-[45px]'
                priority
              />
              <span>
                <h3 className='text-[#5E167E] pt-[5px] text-[8.97px] md:text-[16.249px] font-semibold leading-normal tracking-[1.625px]'>
                  ABY PURPLEHEART
                </h3>
                <p className='text-[#5E167E] pt-[6.59px] text-[7.03px] md:text-[12.739px] font-medium leading-normal tracking-[4.223px]'>
                  ILLUSTRATIONS
                </p>
              </span>
            </span>
            <div
              onClick={handleBar}
              className='my-3 md:my-7 md:text-2xl lg:hidden'
            >
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
          </div>{' '}
          {nav && (
            <div
              className={`${tabs === 1 ? 'bg-[#FBF1FF]' : ''}  ${
                tabs === 2 ? 'bg-[#F4FFDF]' : ''
              } ${tabs === 3 ? 'bg-[#E6FFFC]' : ''} ${
                tabs === 4 ? 'bg-[#FFF7C5]' : ''
              }  ${
                tabs === 5 ? 'bg-[#FBF1FF]' : ''
              }  w-[70%] md:w-[60%] fixed top-0 right-0 z-30 h-full px-5`}
            >
              <span className='p-5' onClick={closeBar}>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  x='0px'
                  y='0px'
                  width='30'
                  height='30'
                  viewBox='0 0 50 50'
                  className='w-[25px] h-[25px] font-semibold md:w-[30px] md:h-[30px]'
                >
                  <path d='M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z'></path>
                </svg>
              </span>
              <center className='mt-10 md:mt-14'>
                <Image
                  src={abby}
                  alt='illustration'
                  className='h-[80px] w-[80px]'
                  priority
                />
                <h3 className='text-[#5E167E] pt-[25px] text-[8.97px] md:text-[16.249px] font-semibold leading-normal tracking-[1.625px]'>
                  ABY PURPLEHEART
                </h3>
                <p className='text-[#5E167E] pt-[6.59px] text-[7.03px] md:text-[12.739px] font-medium leading-normal tracking-[4.223px]'>
                  ILLUSTRATIONS
                </p>
                <div className='pt-[80.59px] pb-[90.5px] border-[#5E167E]  border-b-2 md:pt-[100px] flex flex-col'>
                  <ul className='space-y-[20px] md:space-y-[40px]'>
                    <li
                      onClick={() => {
                        handleTabs(1);
                      }}
                      className={`text-[#4F1E4B] ${
                        tabs === 1 ? 'font-semibold bg-white' : 'font-medium'
                      } font-medium leading-normal md:text-lg pl-2 hover:bg-white  py-1 cursor-pointer tracking-[3.2px] uppercase`}
                    >
                      PORTFOLIO
                    </li>
                    <li
                      onClick={() => {
                        handleTabs(2);
                      }}
                      className={`text-[#4F1E4B] font-medium leading-normal ${
                        tabs === 2 ? 'font-semibold bg-white' : 'font-medium'
                      } hover:bg-white py-1 md:text-lg cursor-pointer tracking-[3.2px] uppercase`}
                    >
                      Published
                    </li>
                    <li
                      onClick={() => {
                        handleTabs(3);
                      }}
                      className={`text-[#4F1E4B] font-medium leading-normal ${
                        tabs === 3 ? 'font-semibold bg-white' : 'font-medium'
                      } hover:bg-white py-1 md:text-lg cursor-pointer tracking-[3.2px] uppercase`}
                    >
                      Comics
                    </li>
                    <li
                      onClick={() => {
                        handleTabs(4);
                      }}
                      className={`text-[#4F1E4B] font-medium leading-normal ${
                        tabs === 4 ? 'font-semibold bg-white' : 'font-medium'
                      } hover:bg-white py-1 cursor-pointer md:text-lg tracking-[3.2px] uppercase`}
                    >
                      Sketchbook
                    </li>
                    <li
                      onClick={() => {
                        handleTabs(5);
                      }}
                      className={`text-[#4F1E4B] font-medium leading-normal ${
                        tabs === 5 ? 'font-semibold bg-white' : 'font-medium'
                      } hover:bg-white py-1 cursor-pointer md:text-lg tracking-[3.2px] uppercase`}
                    >
                      About
                    </li>
                    {/* <li
              onClick={() => {
                handleTabs(6);
              }}
              className='text-[#4F1E4B] font-medium leading-normal cursor-pointer tracking-[3.2px] uppercase'
            >
              CONTACT
            </li> */}
                  </ul>
                </div>
              </center>
            </div>
          )}
        </header>
      </div>
      <aside
        className={`${tabs === 1 ? 'bg-[#FBF1FF]' : ''}  ${
          tabs === 2 ? 'bg-[#F4FFDF]' : ''
        } ${tabs === 3 ? 'bg-[#E6FFFC]' : ''} ${
          tabs === 4 ? 'bg-[#FFF7C5]' : ''
        }  ${
          tabs === 5 ? 'bg-[#FBF1FF]' : ''
        }  w-[25%] hidden lg:block fixed h-[80rem] pt-10`}
      >
        <center className='pt-[13px]'>
          <Image
            src={abby}
            alt='illustration'
            className='xl:h-[120px] lg:h-[80px] lg:w-[80px] xl:w-[120px]'
            priority
          />
          <h3 className='text-[#5E167E] pt-[13px] text-[16.249px] font-semibold leading-normal tracking-[1.625px]'>
            ABY PURPLEHEART
          </h3>
          <p className='text-[#5E167E] pt-[6.59px] text-[12.739px] font-medium leading-normal tracking-[7.643px]'>
            ILLUSTRATIONS
          </p>
        </center>
        <div className='pt-[80.59px] flex flex-col lg:pl-[3.2rem] xl:pl-[4.9rem]'>
          <ul className='space-y-[20px]'>
            <li
              onClick={() => {
                handleTabs(1);
              }}
              className={`text-[#4F1E4B] font-medium leading-normal pl-2 hover:bg-white py-1 cursor-pointer tracking-[3.2px] uppercase ${
                tabs === 1 ? 'bg-white' : 'font-medium'
              }`}
            >
              PORTFOLIO
            </li>
            <li
              onClick={() => {
                handleTabs(2);
              }}
              className={`text-[#4F1E4B] font-medium leading-normal pl-2 hover:bg-white py-1 cursor-pointer tracking-[3.2px] uppercase ${
                tabs === 2 ? 'bg-white' : 'font-medium'
              }`}
            >
              Published
            </li>
            <li
              onClick={() => {
                handleTabs(3);
              }}
              className={`text-[#4F1E4B] font-medium leading-normal pl-2 hover:bg-white py-1 cursor-pointer tracking-[3.2px] uppercase ${
                tabs === 3 ? 'bg-white' : 'font-medium'
              }`}
            >
              Comics
            </li>
            <li
              onClick={() => {
                handleTabs(4);
              }}
              className={`text-[#4F1E4B] font-medium leading-normal pl-2 hover:bg-white py-1 cursor-pointer tracking-[3.2px] uppercase ${
                tabs === 4 ? 'bg-white' : 'font-medium'
              }`}
            >
              Sketchbook
            </li>
            <li
              onClick={() => {
                handleTabs(5);
              }}
              className={`text-[#4F1E4B] font-medium leading-normal pl-2 hover:bg-white py-1 cursor-pointer tracking-[3.2px] uppercase ${
                tabs === 5 ? 'bg-white' : 'font-medium'
              }`}
            >
              About
            </li>
            {/* <li
              onClick={() => {
                handleTabs(6);
              }}
              className='text-[#4F1E4B] font-medium leading-normal cursor-pointer tracking-[3.2px] uppercase'
            >
              CONTACT
            </li> */}
          </ul>
        </div>
      </aside>
      <main className=' absolute left-[5%] right-[5%] md:left-0 md:right-0 lg:left-[28%] top-0 lg:w-[70%]'>
        <div>
          {tabs === 1 && <Portfolio />}
          {tabs === 2 && <Published />}
          {tabs === 3 && <Comics />}
          {tabs === 4 && <Sketchbook />}
          {tabs === 5 && <About />}
          {/* {tabs === 6 && <Portfolio />} */}
          {/* {tabs === 1 && <Portfolio />} */}
        </div>
      </main>
    </section>
  );
};

export default Sidebar;
