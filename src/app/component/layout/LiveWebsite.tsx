'use client';
import React, { useRef, useState } from 'react';
import Image from 'next/image';
import live1 from '../../../../public/Assets/live1.png';
import live2 from '../../../../public/Assets/live2.png';
import live3 from '../../../../public/Assets/live3.svg';
// import Slider from 'react-slick';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useMediaQuery } from 'react-responsive';
import 'swiper/css';
// import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import Link from 'next/link';

const LiveWebsite = () => {
  const isLargeScreen = useMediaQuery({ minWidth: 1024 });
  const isMediumScreen = useMediaQuery({ minWidth: 768 });

  const settings = {
    navigation: true,
    slidesPerView: isLargeScreen ? 3 : isMediumScreen ? 2 : 1,
    spaceBetween: 30,
    // pagination: { clickable: true },
  };

  // const settings = isLargeScreen ? largeScreenSettings : smallScreenSettings;

  return (
    <section className='bg-[#FFF4EF] h-[58rem] md:h-[28rem] lg:h-[29rem] mac:h-[36.5rem]'>
      <div className='mac:max-w-[83rem] md:max-w-[45rem] pro:max-w-[52rem] px-2 md:px-0 lg:max-w-[60rem] xl:max-w-[72rem] mx-auto  py-[2rem] md:py-[4rem]'>
        <h3 className='text-center text-[#5933A7] text-lg uppercase lg:text-[1.25rem] xl:text-[1.5rem] mac:text-[2rem] pb-[2.5rem] md:pb-[5rem] font-semibold tracking-[8px] md:tracking-[1rem] leading-normal'>
          Live Websites
        </h3>
        <div className='flex flex-col gap-7 md:gap-0 md:flex-row justify-evenly'>
          {/* <Swiper
            {...settings}
            modules={[Navigation]}
            className='mySwiper h-[20rem]'
          > */}
          {/* <SwiperSlide className='lg:mr-5 '> */}
          <Link
            href='https://eppcheck.com/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <div className='flex flex-col justify-center items-center'>
              <Image
                src={live1}
                alt='live website'
                className='mac:w-[21.83881rem] md:mx-0 w-[18.83881rem] md:w-[15.83881rem] lg:w-[16.83881rem] xl:w-[17.53881rem] mac:h-[12.70075rem] xl:h-[10.70075rem]'
                priority
              />
              <p className='text-[#5933A7] lg:text-lg text-base md:text-base xl:text-[1.5rem] font-semibold leading-normal text-center pt-5'>
                EPPCHECK
              </p>
            </div>
          </Link>
          {/* </SwiperSlide> */}
          {/* <SwiperSlide> */}
          <Link
            href='https://sasklotteries.ca/'
            target='_blank'
            rel='noopener noreferrer'
          >
            {' '}
            <div className='flex flex-col justify-center items-center'>
              <Image
                src={live2}
                alt='live website'
                className='mac:w-[21.83881rem] w-[20.83881rem] md:w-[15.83881rem] lg:w-[16.83881rem] xl:w-[17.53881rem] mac:h-[12.70075rem] xl:h-[10.70075rem]'
                priority
              />
              <p className='text-[#5933A7] lg:text-lg text-base md:text-base xl:text-[1.5rem] font-semibold leading-normal text-center pt-5'>
                SASK LOTTERIES
              </p>
            </div>
          </Link>
          {/* </SwiperSlide> */}
          {/* <SwiperSlide className='lg:mr-7 xl:mr-10'> */}
          <Link
            href='https://vantage.ag/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <div className='flex flex-col justify-center items-center'>
              <Image
                src={live3}
                alt='live website'
                className='mac:w-[21.83881rem] w-[20.83881rem] md:w-[15.83881rem] lg:w-[16.83881rem] xl:w-[17.53881rem] mac:h-[12.70075rem] xl:h-[10.70075rem]'
                priority
              />
              <p className='text-[#5933A7] lg:text-lg text-base md:text-base xl:text-[1.5rem] font-semibold leading-normal text-center pt-5'>
                VANTAGE AG
              </p>
            </div>
          </Link>
          {/* </SwiperSlide> */}
          {/* <SwiperSlide className=''>
              <Link href='https://eppcheck.com/'>
                <div className='flex flex-col justify-center items-center'>
                  <Image
                    src={live1}
                    alt='live website'
                    className='mac:w-[21.83881rem] w-[20.83881rem] md:w-[15.83881rem] lg:w-[16.83881rem] xl:w-[17.53881rem] mac:h-[12.70075rem] xl:h-[11.70075rem]'
                    priority
                  />
                  <p className='text-[#5933A7] lg:text-lg text-base md:text-base xl:text-[1.5rem] font-semibold leading-normal text-center pt-5'>
                    EPPCHECK
                  </p>
                </div>
              </Link>
            </SwiperSlide>

            <SwiperSlide className=''>
              <Link href='https://vantage.ag/'>
                <div className='flex flex-col justify-center items-center'>
                  <Image
                    src={live2}
                    alt='live website'
                    className='mac:w-[21.83881rem] w-[20.83881rem] md:w-[15.83881rem] lg:w-[16.83881rem] xl:w-[17.53881rem] mac:h-[12.70075rem] xl:h-[11.70075rem]'
                    priority
                  />
                  <p className='text-[#5933A7] lg:text-lg text-base md:text-base xl:text-[1.5rem] font-semibold leading-normal text-center pt-5'>
                    VANTAGE AG
                  </p>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide className=''>
              <Link href='https://sasklotteries.ca/'>
                <div className='flex flex-col justify-center items-center'>
                  <Image
                    src={live3}
                    alt='live website'
                    className='mac:w-[21.83881rem] w-[20.83881rem] md:w-[15.83881rem] lg:w-[16.83881rem] xl:w-[17.53881rem] mac:h-[12.70075rem] xl:h-[11.70075rem]'
                    priority
                  />
                  <p className='text-[#5933A7] lg:text-lg text-base md:text-base xl:text-[1.5rem] font-semibold leading-normal text-center pt-5'>
                    SASK LOTTERIES
                  </p>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide className='xl:mr-10  lg:mx-0'>
              <div className='flex flex-col justify-center items-center'>
                <Image
                  src={live1}
                  alt='live website'
                  className='mac:w-[21.83881rem] w-[20.83881rem] md:w-[15.83881rem] lg:w-[16.23881rem] xl:w-[17.53881rem] mac:h-[12.70075rem] xl:h-[10.70075rem]'
                  priority
                />
                <p className='text-[#5933A7] lg:text-lg text-base md:text-base xl:text-[1.5rem] font-semibold leading-normal text-center pt-5'>
                  EPPCHECK
                </p>
              </div>
            </SwiperSlide> */}
          {/* </Swiper> */}
        </div>
      </div>
    </section>
  );
};

export default LiveWebsite;
