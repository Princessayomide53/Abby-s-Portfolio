'use client';
import React, { useRef, useState } from 'react';
import Image from 'next/image';
import live1 from '../../../../public/Assets/live1.png';
import live2 from '../../../../public/Assets/live2.png';
import live3 from '../../../../public/Assets/live3.png';
// import Slider from 'react-slick';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useMediaQuery } from 'react-responsive';
import 'swiper/css';
// import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

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
    <section className='bg-[#FFF4EF] h-[23rem] md:h-[28rem] lg:h-[29rem] mac:h-[36.5rem]'>
      <div className='mac:max-w-[83rem] md:max-w-[45rem] pro:max-w-[52rem] lg:max-w-[60rem] xl:max-w-[72rem] mx-auto  py-[2rem] md:py-[4rem]'>
        <h3 className='text-center text-[#5933A7] text-lg uppercase lg:text-[1.25rem] xl:text-[1.5rem] mac:text-[2rem] pb-[2.5rem] md:pb-[5rem] font-semibold tracking-[8px] md:tracking-[1rem] leading-normal'>
          Live Websites
        </h3>
        <div className='flex justify-evenly'>
          <Swiper
            {...settings}
            modules={[Navigation]}
            className='mySwiper h-[20rem]'
          >
            <SwiperSlide className='lg:mx-7 '>
              <div className='flex flex-col justify-center items-center'>
                <Image
                  src={live1}
                  alt='live website'
                  className='mac:w-[21.83881rem] md:mx-0 w-[18.83881rem] md:w-[15.83881rem] lg:w-[16.83881rem] xl:w-[18.83881rem] mac:h-[12.70075rem] xl:h-[11.70075rem]'
                  priority
                />
                <p className='text-[#5933A7] lg:text-lg text-base md:text-base xl:text-[1.5rem] font-semibold leading-normal text-center pt-5'>
                  EPPCHECK
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='flex flex-col justify-center items-center'>
                <Image
                  src={live2}
                  alt='live website'
                  className='mac:w-[21.83881rem] w-[20.83881rem] md:w-[15.83881rem] lg:w-[16.83881rem] xl:w-[18.83881rem] mac:h-[12.70075rem] xl:h-[11.70075rem]'
                  priority
                />
                <p className='text-[#5933A7] lg:text-lg text-base md:text-base xl:text-[1.5rem] font-semibold leading-normal text-center pt-5'>
                  SASK LOTTERIES
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide className=''>
              <div className='flex flex-col justify-center items-center'>
                <Image
                  src={live3}
                  alt='live website'
                  className='mac:w-[21.83881rem] w-[20.83881rem] md:w-[15.83881rem] lg:w-[16.83881rem] xl:w-[18.83881rem] mac:h-[12.70075rem] xl:h-[11.70075rem]'
                  priority
                />
                <p className='text-[#5933A7] lg:text-lg text-base md:text-base xl:text-[1.5rem] font-semibold leading-normal text-center pt-5'>
                  VANTAGE AG
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide className=''>
              <div className='flex flex-col justify-center items-center'>
                <Image
                  src={live1}
                  alt='live website'
                  className='mac:w-[21.83881rem] w-[20.83881rem] md:w-[15.83881rem] lg:w-[16.83881rem] xl:w-[18.83881rem] mac:h-[12.70075rem] xl:h-[11.70075rem]'
                  priority
                />
                <p className='text-[#5933A7] lg:text-lg text-base md:text-base xl:text-[1.5rem] font-semibold leading-normal text-center pt-5'>
                  EPPCHECK
                </p>
              </div>
            </SwiperSlide>

            <SwiperSlide className=''>
              <div className='flex flex-col justify-center items-center'>
                <Image
                  src={live3}
                  alt='live website'
                  className='mac:w-[21.83881rem] w-[20.83881rem] md:w-[15.83881rem] lg:w-[16.83881rem] xl:w-[18.83881rem] mac:h-[12.70075rem] xl:h-[11.70075rem]'
                  priority
                />
                <p className='text-[#5933A7] lg:text-lg text-base md:text-base xl:text-[1.5rem] font-semibold leading-normal text-center pt-5'>
                  VANTAGE AG
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide className=''>
              <div className='flex flex-col justify-center items-center'>
                <Image
                  src={live2}
                  alt='live website'
                  className='mac:w-[21.83881rem] w-[20.83881rem] md:w-[15.83881rem] lg:w-[16.83881rem] xl:w-[18.83881rem] mac:h-[12.70075rem] xl:h-[11.70075rem]'
                  priority
                />
                <p className='text-[#5933A7] lg:text-lg text-base md:text-base xl:text-[1.5rem] font-semibold leading-normal text-center pt-5'>
                  SASK LOTTERIES
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide className='xl:mx-7  lg:mx-0'>
              <div className='flex flex-col justify-center items-center'>
                <Image
                  src={live1}
                  alt='live website'
                  className='mac:w-[21.83881rem] w-[20.83881rem] md:w-[15.83881rem] lg:w-[16.23881rem] xl:w-[18.83881rem] mac:h-[12.70075rem] xl:h-[11.70075rem]'
                  priority
                />
                <p className='text-[#5933A7] lg:text-lg text-base md:text-base xl:text-[1.5rem] font-semibold leading-normal text-center pt-5'>
                  EPPCHECK
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default LiveWebsite;
