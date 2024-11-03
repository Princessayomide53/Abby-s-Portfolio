import React from 'react';

const Motion = () => {
  return (
    <section className='bg-[#FFF4EF] pb-[7.75rem] md:pb-[5.44rem] lg:pb-[10.44rem] md:mb-[5.88rem] lg:mb-[8.88rem]'>
      <div className='xl:max-w-[72rem]  pro:max-w-[52rem] md:max-w-[45rem] px-2 small:max-w-[22rem] mac:max-w-[81rem] lg:max-w-[59rem] mx-auto'>
        <h2 className='text-[#5933A7] pt-[2.94rem] md:pt-[4.69rem] text-center font-semibold text-lg md:text-2xl lg:text-[2rem] tracking-[0.625rem] md:tracking-[1rem] leading-normal'>
          MOTION GRAPHICS
        </h2>
        <article className='flex flex-col items-center gap-[1.56rem] md:flex-row md:justify-between pt-[2.91rem]  md:pt-[3.725rem] lg:pt-[5.25rem]'>
          <video
            src='/Assets/wmc.mp4'
            autoPlay
            muted
            loop
            controls
            className='h-[15.1875rem] w-[15.1875rem] lg:w-[25.9375rem] md:w-[18.9375rem] md:h-[28.5rem] xl:w-[30.9375rem] mac:w-[37.9375rem] lg:h-[35rem] rounded-xl object-cover'
          ></video>
          <video
            src='/Assets/Motor.mp4'
            autoPlay
            muted
            loop
            controls
            className='h-[15.1875rem] w-[15.1875rem] lg:w-[25.9375rem] md:w-[18.9375rem] md:h-[28.5rem] xl:w-[30.9375rem] mac:w-[37.9375rem] lg:h-[35rem] rounded-xl object-cover'
          ></video>
        </article>
        <article className='flex flex-col items-center gap-[1.56rem] md:flex-row md:justify-between pt-[1.56rem] md:pt-[5.31rem]'>
          <video
            src='/Assets/Grace.mp4'
            autoPlay
            muted
            loop
            controls
            className='w-[15.25rem] h-[27.125rem] md:w-[13.5rem] md:h-[23.125rem] lg:w-[16.5rem] lg:h-[27.125rem] xl:w-[21.5rem] mac:w-[25.5rem] xl:h-[38.125rem] mac:h-[47.125rem] rounded-xl object-cover'
          ></video>
          <video
            src='/Assets/Shine.mp4'
            autoPlay
            muted
            loop
            controls
            className='w-[15.25rem] h-[27.125rem] md:w-[13.5rem] md:h-[23.125rem] lg:w-[16.5rem] lg:h-[27.125rem] xl:w-[21.5rem] mac:w-[25.5rem] xl:h-[38.125rem] mac:h-[47.125rem] rounded-xl object-cover'
          ></video>

          {/* <div className='rounded-2xl'> */}
          <video
            src='/Assets/Love.mp4'
            autoPlay
            muted
            loop
            controls
            className='w-[15.25rem] h-[27.125rem] md:w-[13.5rem] md:h-[23.125rem] lg:w-[16.5rem] lg:h-[27.125rem] xl:w-[21.5rem] mac:w-[25.5rem] xl:h-[38.125rem] mac:h-[47.125rem] rounded-xl object-cover'
          ></video>
          {/* </div> */}
        </article>
      </div>
    </section>
  );
};

export default Motion;
