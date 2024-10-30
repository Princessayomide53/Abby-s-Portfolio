import React from 'react';
import Image from 'next/image';
import Joice2 from '../../../../public/Assets/joice2.svg';
import Joice3 from '../../../../public/Assets/joice3.svg';
import Joice4 from '../../../../public/Assets/joice4.svg';
import Joice5 from '../../../../public/Assets/Mag-Cover 2.svg';
import Joice6 from '../../../../public/Assets/Mag-Cover 1.svg';
import Joice7 from '../../../../public/Assets/joice7.svg';
import Joice8 from '../../../../public/Assets/joice8.svg';
import Joice9 from '../../../../public/Assets/joice9.svg';
import Joice10 from '../../../../public/Assets/joice10.svg';
import Joice11 from '../../../../public/Assets/joice11.svg';
import Joice12 from '../../../../public/Assets/joice12.svg';
import white from '../../../../public/Assets/white.svg';
import blue from '../../../../public/Assets/blue.svg';
import Button from '../Button';

const Overview = () => {
  return (
    <section className='xl:max-w-[72rem] mt-7 md:mt-16 pro:max-w-[52rem] md:max-w-[45rem] max-w-[22rem] mac:max-w-[81rem] lg:max-w-[59rem] mx-auto px-2 md:px-0'>
      <article className='bg-[#FFF4EF] rounded-2xl h-[29.625rem] small:h-[25.0625rem] w-full md:h-[18.3125rem] lg:h-[22.3125rem] p-5 md:px-10 md:py-7 xl:py-12 xl:px-16'>
        <h4 className='text-[#5933A7] text-xl lg:text-[2rem] tracking-[0.3125rem] md:tracking-[0.5rem] leading-[1.625rem] sm:leading-normal font-bold md:font-semibold'>
          OVERVIEW
        </h4>

        <p className='text-black text-sm small:text-base md:text-[15.85px] lg:text-lg xl:text-xl font-normal pt-[1.56rem] leading-[2rem]'>
          Joice is a faith based brand on a mission to create a safe space where
          people can find happiness, joy, and calm, away from the chaos of
          everyday life
          <br />
          <br />
          The goal was to develop a brand identity that visually and emotionally
          communicates a sense of peace and positivity. The design needed to
          feel approachable and uplifting, with elements that convey
          Joice`&apos;`s core values of joy, calmness, and a break from worries.
        </p>
      </article>
      <div className='mt-[3.88rem] md:mt-[5.56rem] lg:mt-[7.56rem] flex justify-center'>
        <Image
          src={Joice2}
          alt='hero'
          className='w-[14.45775rem] h-[3.61069rem] md:h-auto md:w-auto'
        />
      </div>
      <article className='flex justify-evenly mt-[3.67rem] md:mt-[5.51rem] lg:mt-[7.51rem]'>
        <div className='bg-[#FF7C76] w-[4.56825rem] small:w-[5.06825rem] h-[4.72069rem] md:w-[8.55975rem] lg:w-[10.35975rem] md:h-[9.64931rem] rounded-[0.75625rem] flex justify-center items-center px-2'>
          <Image
            src={white}
            alt='hero'
            className='w-[1.94031rem] h-[1.93113rem] md:w-auto md:h-auto'
          />
        </div>{' '}
        <div className='bg-[#FFD700] w-[4.56825rem] small:w-[5.06825rem] h-[4.72069rem] md:w-[8.55975rem] lg:w-[10.35975rem] md:h-[9.64931rem] rounded-[0.75625rem] flex justify-center items-center px-2'>
          <Image
            src={blue}
            alt='hero'
            className='w-[1.94031rem] h-[1.93113rem] md:w-auto md:h-auto'
          />
        </div>{' '}
        <div className='bg-[#AAFFF8] w-[4.56825rem] small:w-[5.06825rem] h-[4.72069rem] md:w-[8.55975rem] lg:w-[10.35975rem] md:h-[9.64931rem] rounded-[0.75625rem] flex justify-center items-center px-2'>
          <Image
            src={blue}
            alt='hero'
            className='w-[1.94031rem] h-[1.93113rem] md:w-auto md:h-auto'
          />
        </div>{' '}
        <div className='bg-[#F8EBDE] w-[4.56825rem] small:w-[5.06825rem] h-[4.72069rem] md:w-[8.55975rem] lg:w-[10.35975rem] md:h-[9.64931rem] rounded-[0.75625rem] flex justify-center items-center px-2'>
          <Image
            src={blue}
            alt='hero'
            className='w-[1.94031rem] h-[1.93113rem] md:w-auto md:h-auto'
          />
        </div>
      </article>
      <article className='bg-[#FFF4EF] xl:max-w-[72rem] mt-[3.81rem] md:mt-20 pro:max-w-[52rem] md:max-w-[45rem] max-w-[22rem] mac:max-w-[81rem] lg:max-w-[59rem] mx-auto rounded-2xl h-[27.5625rem] small:h-[24.0625rem] w-full md:h-[18.3125rem] lg:h-[22.3125rem] p-5 md:px-10 md:py-7 xl:py-12 xl:px-16'>
        <h4 className='text-[#5933A7] text-xl lg:text-[2rem] tracking-[0.3125rem] md:tracking-[0.5rem] leading-[1.625rem] sm:leading-normal font-bold md:font-semibold'>
          CHALLENGE
        </h4>

        <p className='text-black text-sm small:text-base md:text-[15.85px] lg:text-lg xl:text-xl font-normal pt-[1.56rem] leading-[2rem]'>
          The main challenge was to create a visual identity that could
          instantly evoke feelings of happiness and tranquility while standing
          out in a crowded marketplace.
          <br />
          <br />
          The branding had to communicate Joice’s message in a way that was
          clear and welcoming, yet still playful and engaging. The design needed
          to appeal to a broad audience seeking moments of calm and positivity
          in their daily lives.
        </p>
      </article>
      <div className='mt-[1.87rem] md:mt-[3.13rem] flex justify-center px-2'>
        <Image src={Joice3} alt='hero' />
      </div>

      <article className='bg-[#FFF4EF] xl:max-w-[72rem] mt-7 md:mt-20 pro:max-w-[52rem] md:max-w-[45rem] max-w-[22rem] mac:max-w-[81rem] lg:max-w-[59rem] mx-auto rounded-2xl h-[24.0625rem] small:h-[21.0625rem] w-full md:h-[16.3125rem] lg:h-[20.3125rem] p-5 md:px-10 md:py-7 xl:py-12 xl:px-16'>
        <h4 className='text-[#5933A7] text-xl lg:text-[2rem] tracking-[0.3125rem] md:tracking-[0.5rem] leading-[1.625rem] sm:leading-normal font-bold md:font-semibold'>
          COLOUR PALETTE
        </h4>

        <p className='text-black text-sm small:text-base md:text-[15.85px] lg:text-lg xl:text-xl font-normal pt-[1.56rem] leading-[2rem]'>
          The color palette was carefully selected to evoke feelings of calm and
          joy.
          <br />
          Soft, pastel tones were chosen to create a sense of tranquility, while
          pops of brighter colors <br />
          add a touch of energy, reflecting the uplifting nature of the brand.{' '}
          <br />
          The combination aims to strike a balance between serenity and
          liveliness.
          <br />
        </p>
      </article>
      <div className='mt-[1.87rem] md:mt-[3.13rem] flex justify-center px-2'>
        <Image src={Joice4} alt='hero' />
      </div>
      <article className='bg-[#FFF4EF] xl:max-w-[72rem] mt-7 md:mt-[3.19rem] pro:max-w-[52rem] md:max-w-[45rem] max-w-[22rem] mac:max-w-[81rem] lg:max-w-[59rem] mx-auto rounded-2xl h-[27.0625rem] small:h-[22.0625rem] w-full md:h-[18.3125rem] lg:h-[22.3125rem] p-5 md:px-10 md:py-7 xl:py-12 xl:px-16'>
        <h4 className='text-[#5933A7] text-xl lg:text-[2rem] tracking-[0.3125rem] md:tracking-[0.5rem] leading-[1.625rem] sm:leading-normal font-bold md:font-semibold'>
          MESSAGING & TONE
        </h4>

        <p className='text-black text-sm small:text-base md:text-[15.85px] lg:text-lg xl:text-xl font-normal pt-[1.56rem] leading-[2rem]'>
          The messaging strategy was crafted to align with Joice`&apos;`s
          mission of being a safe haven for happiness. The tone is positive,
          warm, and encouraging, inviting people to find joy in the small
          moments.
          <br />
          <br />
          Taglines such as `&apos;`Live in the moment, feel the joy`&apos;` and
          `&apos;`Come for the calm, stay for the joy`&apos;` encapsulate the
          brand`&apos;`s essence and resonate with its audience.
        </p>
      </article>
      <div className='mt-[1.87rem] md:mt-[3.13rem] flex justify-center px-2'>
        <Image src={Joice12} alt='hero' />
      </div>
      <div className='mt-[1.87rem] md:mt-[3.13rem] flex justify-center px-2'>
        <Image src={Joice5} alt='hero' />
      </div>

      <div className='mt-[1.87rem] md:mt-[3.13rem] flex justify-center px-2'>
        <Image src={Joice6} alt='hero' />
      </div>
      <div className='mt-[1.87rem] md:mt-[3.13rem] rounded-2xl overflow-hidden xl:max-w-[72rem] gap-[1rem] pro:max-w-[52rem] md:max-w-[45rem] max-w-[22rem] mac:max-w-[81rem] lg:max-w-[59rem] mx-auto flex flex-col md:flex-row justify-center'>
        <Image src={Joice7} alt='hero' className='object-contain' />
        <Image src={Joice8} alt='hero' className='object-contain' />
      </div>
      <div className='mt-[1.87rem] md:mt-[3.13rem] flex justify-center px-2'>
        <Image src={Joice9} alt='hero' />
      </div>
      <div className='mt-[1.87rem] md:mt-[3.13rem] rounded-2xl overflow-hidden xl:max-w-[72rem] gap-[1rem] pro:max-w-[52rem] md:max-w-[45rem] max-w-[22rem] mac:max-w-[81rem] lg:max-w-[59rem] mx-auto flex flex-col md:flex-row justify-center'>
        <Image src={Joice10} alt='hero' className='object-contain' />
        <Image src={Joice11} alt='hero' className='object-contain' />
      </div>
      <Button />
    </section>
  );
};

export default Overview;
