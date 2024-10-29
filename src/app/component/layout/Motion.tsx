import React from 'react';

const Motion = () => {
  return (
    <section className='bg-[#FFF4EF] pb-[10.44rem] mb-[8.88rem]'>
      <div className='xl:max-w-[72rem]  pro:max-w-[52rem] md:max-w-[45rem] px-2 small:max-w-[22rem] mac:max-w-[81rem] lg:max-w-[59rem] mx-auto'>
        <h2 className='text-[#5933A7] pt-[4.69rem] text-center font-semibold text-[2rem] tracking-[1rem] leading-normal'>
          MOTION GRAPHICS
        </h2>
        <article className='flex justify-between pt-[5.25rem]'>
          <video
            src='/Assets/wmc.mp4'
            autoPlay
            muted
            loop
            className='w-[37.9375rem] h-[35rem] rounded-xl object-cover'
          ></video>
          <video
            src='/Assets/Motor.mp4'
            autoPlay
            muted
            loop
            className='w-[37.9375rem] h-[35rem] rounded-xl object-cover'
          ></video>
        </article>
        <article className='flex justify-between pt-[5.31rem]'>
          <video
            src='/Assets/Grace.mp4'
            autoPlay
            muted
            loop
            className='w-[25.5rem] h-[47.125rem] rounded-xl object-cover'
          ></video>
          <video
            src='/Assets/Shine.mp4'
            autoPlay
            muted
            loop
            className='w-[25.5rem] h-[47.125rem] rounded-xl object-cover'
          ></video>

          {/* <div className='rounded-2xl'> */}
          <video
            src='/Assets/Love.mp4'
            autoPlay
            muted
            loop
            className='w-[25.5rem] h-[47.125rem] rounded-xl object-cover'
          ></video>
          {/* </div> */}
        </article>
      </div>
    </section>
  );
};

export default Motion;
