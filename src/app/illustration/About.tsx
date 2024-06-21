import React from 'react';
import Image from 'next/image';
import abby2 from '../../../public/Assets/abby2.png';
import abbys from '../../../public/Assets/abbys.png';

type Props = {};

const About = (props: Props) => {
  return (
    <section className='lg:pt-20 pt-32 md:px-[2rem] lg:px-0 w-full overflow-hidden'>
      <h1 className='text-[#5E167E] text-[36px] leading-normal font-bold'>
        Hello!
      </h1>
      <span className='flex flex-col gap-y-12 md:gap-y-0 w-full md:flex-row md:justify-between pt-5 lg:pt-0 pb-[120px] md:pb-[90px] lg:pb-[120px] xl:pb-[140px]'>
        <p className='text-[#000] text-base md:text-[14.2px] lg:text-base xl:text-xl font-normal leading-[30px] md:w-[540px]'>
          I'm Abieyuwa, a creative illustrative storyteller.
          <br /> I consider myself an Illustrator that creates
          <span className='font-semibold mr-1'>
            {' '}
            “art with <br className='hidden mac:block' />
            heart”
          </span>
          because I always strive to create work that
          <br className='hidden mac:block' /> evokes positive emotions and
          resonates deeply with
          <br className='hidden mac:block' /> people.
          <br />
          <br /> I find inspiration for my illustrations in the beauty of
          <br className='hidden mac:block' />
          everyday life, drawing from the nuances of human{' '}
          <br className='hidden mac:block' />
          experiences and the world around me. <br />
          <br />​ If you have any questions or wish to collaborate on a{' '}
          <br className='hidden mac:block' />
          project, feel free to reach out—I'm eager to create
          <br className='hidden mac:block' /> something amazing together!
          <br />
        </p>
        <span>
          <Image
            src={abby2}
            alt=''
            className='md:h-[350px] lg:h-auto hidden md:flex'
            priority
          />
          <Image src={abbys} alt='' className='w-full md:hidden' priority />
        </span>
      </span>

      <div className='md:max-w-[38rem] max-w-full md:px-0 lg:max-w-[50rem] mx-auto py-7 md:py-0 md:pt-10 lg:pt-14 pb-10'>
        <h3 className='text-[#5E167E] text-[24px] md:text-[36px] pb-[45px] font-semibold leading-normal'>
          Let’s give life to your project
        </h3>
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

          <div className='flex justify-start mb-7 md:pb-[5rem] lg:pb-7'>
            <button
              type='submit'
              className='bg-[#5933A7] text-white w-full rounded-2xl py-4 md:w-auto md:px-6 md:py-3 md:rounded-lg hover:bg-opacity-90'
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default About;
