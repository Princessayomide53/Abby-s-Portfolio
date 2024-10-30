import React from 'react';
import Image from 'next/image';
import Q1 from '../../../../public/Assets/Q1.svg';
import Figpie1 from '../../../../public/Assets/Figpie1.svg';
import Figpie2 from '../../../../public/Assets/Figpie2.svg';
import Figpie3 from '../../../../public/Assets/Figpie3.svg';

const Overview = () => {
  return (
    <section className=''>
      <article className=' xl:max-w-[72rem] mt-3 lg:mt-5 pro:max-w-[52rem] md:max-w-[45rem] max-w-[22rem] mac:max-w-[83rem] lg:max-w-[59rem] mx-auto rounded-2xl w-full h-full md:p-10'>
        <h4 className='text-[#5933A7] mt-48 text-[1.75rem] md:text-lg lg:text-[1.35rem] xl:text-[2rem] md:-mt-4 tracking-[0.5rem] leading-normal font-bold md:font-semibold'>
          OVERVIEW
        </h4>

        <div className='flex flex-col-reverse md:flex-row relative'>
          <p className='text-black text-base w-full md:text-sm md:w-[22rem] lg:text-base xl:text-xl lg:w-[30rem] xl:w-[40rem] mac:w-[53rem] font-normal  pt-[1.56rem] leading-[1.625rem] md:leading-normal lg:leading-[2rem]'>
            Quickfill is a user-friendly mobile application designed to simplify
            the process of purchasing gas cylinder refills and new gas
            cylinders. The app allows users to quickly and conveniently place
            orders from the comfort of their home, eliminating the hassle of
            visiting physical stores.
            <br />
            <br />
            <b className='text-black font-normal md:text-sm lg:text-base xl:text-[1.25rem] leading-[2rem] pr-5'>
              <b className='font-bold'>Date:</b> November 2021
            </b>
            <br className='md:hidden' />
            <b className='text-black font-normal md:text-sm lg:text-base xl:text-[1.25rem] leading-[2rem]'>
              <b className='font-bold'>Target:</b> African countries
            </b>
          </p>
          <Image
            src={Q1}
            alt='smartphone'
            className='object-contain -top-[19rem] h-[19.5625rem] md:w-[21rem] lg:w-[28rem] xl:w-[32rem] absolute  md:top-0  md:right-2 xl:right-0 z-30 md:h-[37rem] md:-mt-[17rem]'
          />
        </div>
        <article className='mac:mt-40 mt-[2.19rem] xl:mt-32 lg:mt-24 md:mt-16 p-[1rem] md:p-[2rem] lg:p-[4rem] rounded-lg flex flex-col md:flex-row gap-[2.63rem] md:gap-0 md:justify-between bg-[#FFF4EF]'>
          <div>
            <h3 className='text-[#5933A7] text-lg lg:text-[1.5rem] tracking-[0.375rem] font-bold leading-normal'>
              THE PROBLEM
            </h3>

            <p className='text-black text-base w-full md:w-[17rem] md:text-sm lg:w-[21rem] xl:w-[27rem] mac:w-[33rem] pt-[0.87rem] font-normal leading-[1.625rem] md:leading-[2rem] lg:text-base mac:text-[1.25rem]'>
              We understand that buying gas can be a stressful experience. Many
              people have faced the frustration of running out of gas in the
              middle of cooking. Long queues, the hassle of transporting
              cylinders, and unexpected price increases at the pump can make the
              process even more challenging.
            </p>
          </div>
          <div>
            <h3 className='text-[#5933A7] text-lg lg:text-[1.5rem] tracking-[0.375rem] font-bold leading-normal'>
              THE SOLUTION
            </h3>
            <p className='text-black text-base w-full md:w-[17rem] md:text-sm lg:w-[21rem] xl:w-[27rem] mac:w-[33rem] pt-[0.87rem] font-normal leading-[1.625rem] md:leading-[2rem] lg:text-base mac:text-[1.25rem]'>
              QuickFill is designed to simplify the process of refilling gas and
              purchasing cylinders. With just a few taps on the app, users can
              place an order, and a vendor will handle both pickup and delivery.
              This efficient system saves time and eliminates the hassle of
              visiting a gas station, making the entire process quicker and more
              convenient.
            </p>
          </div>
        </article>
        <article className='mt-[2.75rem] bg-[#1F0229] w-full py-[2rem] px-3 md:px-0'>
          <h3 className='pt-[1.26rem] md:pt-[3rem] lg:pt-[4rem] text-white text-base md:text-xl xl:text-[1.5rem] text-left md:text-center tracking-[0.3125rem] md:tracking-[0.375rem] font-bold leading-normal'>
            HOW USERS THINK
          </h3>

          <p className='pt-[1.26rem] lg:pt-[3.4rem] text-white text-sm md:text-xl xl:text-[1.5rem] font-light md:font-normal leading-normal text-left md:text-center'>
            A research was conducted that gave us some valuable{' '}
            <br className='hidden md:block' />
            insight into the minds of our potential users
          </p>
          <div className='flex flex-col pt-[4.31rem] gap-[3.25rem] md:gap-0 md:flex-row md:justify-around md:pt-[4.62rem] lg:pt-[5.62rem] pb-[2rem]'>
            <div className='flex flex-col items-center gap-[4.65rem]'>
              <p className='text-white font-bold md:text-left text-center leading-normal text-sm xl:text-base mac:text-[1.25rem]'>
                <b className='text-[#FF9900]'>45%</b> prefer to refill
                <br /> at gas stations
              </p>
              <Image
                src={Figpie1}
                alt=''
                className='w-[14.83325rem] h-[14.83325rem] md:w-[12rem] md:h-[15rem] lg:w-[15rem] lg:h-[15rem] xl:w-[18rem] xl:h-[18rem] mac:w-auto mac:h-auto'
              />
            </div>
            <div className='flex flex-col items-center gap-[4.65rem]'>
              <p className='text-white font-bold md:text-left text-center leading-normal text-sm xl:text-base mac:text-[1.25rem]'>
                <b className='text-[#FF9900]'>45%</b> prefer to refill
                <br /> at locations close to them
              </p>
              <Image
                src={Figpie2}
                alt=''
                className='w-[14.83325rem] h-[14.83325rem] md:w-[12rem] md:h-[15rem] lg:w-[15rem] lg:h-[15rem] xl:w-[18rem] xl:h-[18rem] mac:w-auto mac:h-auto'
              />
            </div>
            <div className='flex flex-col items-center gap-[4.65rem] '>
              <p className='text-white font-bold md:text-left text-center leading-normal text-sm xl:text-base mac:text-[1.25rem]'>
                <b className='text-[#FF9900]'>45%</b> like the idea of
                <br className='' /> ordering gas refills
                <br /> from their mobile phones
              </p>
              <Image
                src={Figpie3}
                alt=''
                className='w-[14.83325rem] h-[14.83325rem] md:w-[12rem] md:h-[15rem] -mt-4 lg:w-[15rem] lg:h-[15rem] xl:w-[18rem] xl:h-[18rem] mac:w-auto mac:h-auto'
              />
            </div>
          </div>
        </article>
      </article>
    </section>
  );
};

export default Overview;
