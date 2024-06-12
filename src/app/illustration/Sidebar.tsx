'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import abby from '../../../public/Assets/abby.png';
import Portfolio from './Portfolio';
import Link from 'next/link';
import Published from './Published';
import Comics from './Comics';
import Sketchbook from './Sketchbook';
import About from './About';

const Sidebar = () => {
  const [tabs, setTabs] = useState(1);

  const handleTabs = (tabs: any) => {
    setTabs(tabs);
  };
  return (
    <section className='flex gap-10 w-[100%]'>
      <aside className='bg-[#FBF1FF] w-[25%] fixed h-screen pt-10'>
        <center className='pt-[13px]'>
          <Image
            src={abby}
            alt='illustration'
            className='h-[120px] w-[120px]'
            priority
          />
          <h3 className='text-[#5E167E] pt-[13px] text-[16.249px] font-semibold leading-normal tracking-[1.625px]'>
            ABY PURPLEHEART
          </h3>
          <p className='text-[#5E167E] pt-[6.59px] text-[12.739px] font-medium leading-normal tracking-[7.643px]'>
            ILLUSTRATIONS
          </p>
        </center>
        <div className='pt-[80.59px] flex flex-col  items-center'>
          <ul className='space-y-[20px]'>
            <li
              onClick={() => {
                handleTabs(1);
              }}
              className='text-[#4F1E4B] font-medium leading-normal hover:bg-white py-1 cursor-pointer tracking-[3.2px] uppercase'
            >
              PORTFOLIO
            </li>
            <li
              onClick={() => {
                handleTabs(2);
              }}
              className='text-[#4F1E4B] font-medium leading-normal tracking-[3.2px] cursor-pointer uppercase'
            >
              Published
            </li>
            <li
              onClick={() => {
                handleTabs(3);
              }}
              className='text-[#4F1E4B] font-medium leading-normal cursor-pointer tracking-[3.2px] uppercase'
            >
              Comics
            </li>
            <li
              onClick={() => {
                handleTabs(4);
              }}
              className='text-[#4F1E4B] font-medium leading-normal cursor-pointer tracking-[3.2px] uppercase'
            >
              Sketchbook
            </li>
            <li
              onClick={() => {
                handleTabs(5);
              }}
              className='text-[#4F1E4B] font-medium leading-normal cursor-pointer tracking-[3.2px] uppercase'
            >
              About
            </li>
            <li
              onClick={() => {
                handleTabs(6);
              }}
              className='text-[#4F1E4B] font-medium leading-normal cursor-pointer tracking-[3.2px] uppercase'
            >
              CONTACT
            </li>
          </ul>
        </div>
      </aside>
      <main className=' absolute left-[28%] top-0 w-[70%]'>
        <div>
          {tabs === 1 && <Portfolio />}
          {tabs === 2 && <Published />}
          {tabs === 3 && <Comics />}
          {tabs === 4 && <Sketchbook />}
          {tabs === 5 && <About />}
          {tabs === 6 && <Portfolio />}
          {/* {tabs === 1 && <Portfolio />} */}
        </div>
      </main>
    </section>
  );
};

export default Sidebar;
