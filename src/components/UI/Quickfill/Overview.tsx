import React from 'react';
import Image from 'next/image';
import Q1 from '../../../../public/Assets/Q1.svg';
import Figpie1 from '../../../../public/Assets/Figpie1.svg';
import Figpie2 from '../../../../public/Assets/Figpie2.svg';
import Figpie3 from '../../../../public/Assets/Figpie3.svg';

const Overview = () => {
  return (
    <section className=''>
      <article className=' xl:max-w-[72rem] mt-5 pro:max-w-[52rem] md:max-w-[45rem] max-w-[22rem] mac:max-w-[83rem] lg:max-w-[59rem] mx-auto rounded-2xl w-full h-full p-10'>
        <h4 className='text-[#5933A7] text-[2rem] -mt-4 tracking-[0.5rem] leading-normal font-semibold'>
          OVERVIEW
        </h4>

        <div className='flex relative'>
          <p className='text-black text-xl w-[53rem] font-normal  pt-[1.56rem] leading-[2rem]'>
            Quickfill is a user-friendly mobile application designed to simplify
            the process of purchasing gas cylinder refills and new gas
            cylinders. The app allows users to quickly and conveniently place
            orders from the comfort of their home, eliminating the hassle of
            visiting physical stores.
            <br />
            <br />
            <b className='text-black font-normal text-[1.25rem] leading-[2rem] pr-5'>
              <b className='font-bold'>Date:</b> November 2021
            </b>
            <b className='text-black font-normal text-[1.25rem] leading-[2rem]'>
              <b className='font-bold'>Target:</b> African countries
            </b>
          </p>
          <Image
            src={Q1}
            alt='smartphone'
            className='object-contain w-[32rem] absolute top-0 right-0 z-30 h-[37rem] -mt-[17rem]'
          />
        </div>
        <article className='mt-40 px-[4rem] rounded-lg py-[4rem] flex justify-between bg-[#FFF4EF]'>
          <div>
            <h3 className='text-[#5933A7] text-[1.5rem] tracking-[0.375rem] font-bold leading-normal'>
              THE PROBLEM
            </h3>

            <p className='text-black w-[33rem] pt-[0.87rem] font-normal leading-[2rem] text-[1.25rem]'>
              We understand that buying gas can be a stressful experience. Many
              people have faced the frustration of running out of gas in the
              middle of cooking. Long queues, the hassle of transporting
              cylinders, and unexpected price increases at the pump can make the
              process even more challenging.
            </p>
          </div>
          <div>
            <h3 className='text-[#5933A7] leading-normal text-[1.5rem] tracking-[0.375rem] font-bold'>
              THE SOLUTION
            </h3>
            <p className='text-black w-[33rem] pt-[0.87rem] font-normal leading-[2rem] text-[1.25rem]'>
              QuickFill is designed to simplify the process of refilling gas and
              purchasing cylinders. With just a few taps on the app, users can
              place an order, and a vendor will handle both pickup and delivery.
              This efficient system saves time and eliminates the hassle of
              visiting a gas station, making the entire process quicker and more
              convenient.
            </p>
          </div>
        </article>
        <article className='mt-[2.75rem] bg-[#1F0229] w-full py-[2rem]'>
          <h3 className='pt-[4rem] text-white text-[1.5rem] text-center tracking-[0.375rem] font-bold leading-normal'>
            {' '}
            HOW USERS THINK
          </h3>

          <p className='pt-[3.4rem] text-white text-[1.5rem] font-normal leading-normal text-center'>
            A research was conducted that gave us some valuable <br />
            insight into the minds of our potential users
          </p>
          <div className='flex justify-around pt-[5.62rem] pb-[2rem]'>
            <div className='flex flex-col items-center gap-[4.65rem]'>
              <p className='text-white font-bold leading-normal text-[1.25rem]'>
                <b className='text-[#FF9900]'>45%</b> prefer to refill
                <br /> at gas stations
              </p>
              <Image src={Figpie1} alt='' />
            </div>
            <div className='flex flex-col items-center gap-[4.65rem]'>
              <p className='text-white font-bold leading-normal text-[1.25rem]'>
                <b className='text-[#FF9900]'>45%</b> prefer to refill
                <br /> at locations close to them
              </p>
              <Image src={Figpie2} alt='' />
            </div>
            <div className='flex flex-col items-center gap-[4.65rem] '>
              <p className='text-white font-bold leading-normal text-[1.25rem]'>
                <b className='text-[#FF9900]'>45%</b> like the idea of
                <br /> ordering gas refills
                <br /> from their mobile phones
              </p>
              <Image src={Figpie3} alt='' />
            </div>
          </div>
        </article>
      </article>
    </section>
  );
};

export default Overview;
