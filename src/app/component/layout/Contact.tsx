import React from 'react';

const Contact = () => {
  return (
    <section id='section3' className='bg-[#FFF4EF] h-full pt-[4rem]'>
      <h1 className='text-[#5933A7] text-base lg:text-[2rem] font-semibold text-center tracking-[6px] lg:tracking-[1rem] leading-normal'>
        LET’S CONNECT
      </h1>
      <p className='text-[#5933A7] text-xs md:text-base xl:text-xl mac:text-[1.3rem] font-medium text-center pt-[1.13rem] lg:pt-[2.13rem] leading-normal tracking-[5px] md:tracking-[15px] lg:tracking-[1.4rem]'>
        LINKEDIN | DRIBBLE | BEHANCE{' '}
      </p>
      <div className='md:max-w-[38rem] max-w-[21rem] lg:max-w-[50rem] mx-auto py-7 md:py-0 md:pt-10 lg:pt-14 pb-10'>
        <form className='space-y-[1.5rem] md:space-y-[2rem]'>
          <div className=''>
            <label
              htmlFor='email'
              className='block text-[#5933A7] md:text-base lg:text-lg  font-medium pb-3 lg:pb-4'
            >
              FirstName
            </label>
            <input
              type='email'
              id='email'
              name='email'
              className='border border-[#5933A7] focus:outline-blue-300 rounded-md px-4 h-[2.5rem] md:h-[3.5rem] w-full'
            />
          </div>
          <div className=''>
            <label
              htmlFor='email'
              className='block text-[#5933A7] md:text-base lg:text-lg  font-medium pb-3 lg:pb-4'
            >
              LastName
            </label>
            <input
              type='email'
              id='email'
              name='email'
              className='border border-[#5933A7] focus:outline-blue-300 rounded-md px-4 h-[2.5rem] md:h-[3.5rem] w-full'
            />
          </div>
          <div className=''>
            <label
              htmlFor='email'
              className='block text-[#5933A7] md:text-base lg:text-lg  font-medium pb-3 lg:pb-4'
            >
              Email
            </label>
            <input
              type='email'
              id='email'
              name='email'
              className='border border-[#5933A7] focus:outline-blue-300 rounded-md px-4 h-[2.5rem] md:h-[3.5rem] w-full'
            />
          </div>
          <div className=''>
            <label
              htmlFor='email'
              className='block text-[#5933A7] md:text-base lg:text-lg  font-medium pb-3 lg:pb-4'
            >
              Message
            </label>
            <textarea
              id='email'
              name='message'
              className='border border-[#5933A7] focus:outline-blue-300 rounded-md px-4 min-h-[7rem] lg:max-h-[13rem] w-full'
            />
          </div>

          <div className='flex justify-end items-end mb-7 md:pb-[5rem] lg:pb-7'>
            <button
              type='submit'
              className='bg-[#5933A7] text-white px-6 py-3 rounded-lg hover:bg-opacity-90'
            >
              Send message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
