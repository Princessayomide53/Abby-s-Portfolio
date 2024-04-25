import React from 'react';
import Image from 'next/image';
import arts from '../../../../public/Assets/arts.png';

const About = () => {
  return (
    <section className='md:h-[29rem] xl:h-[49rem] lg:h-[41.5rem] bg-[rgb(233,211,202)]'>
      <div
        className='mac:max-w-[83rem] pro:max-w-[52rem] lg:max-w-[59rem] max-w-[22rem] md:max-w-[45rem] xl:max-w-[72rem] mx-auto flex flex-col-reverse justify-center items-center md:flex-row md:justify-between'
        id='section2'
      >
        <Image
          src={arts}
          alt='illustration'
          className='mac:w-[39.875rem] w-[20rem] h-[20rem] md:w-[22.275rem] md:h-[22.275rem] lg:w-[30.275rem] lg:h-[30.775rem] xl:w-[36.875rem] xl:h-[37.875rem] mac:h-[39.875rem] md:mt-[2rem] lg:mt-[5rem]'
          //   width={85}
          //   height={20}
          priority
        />

        <div className='lg:pt-[7rem] pt-[2rem] md:pt-[3.5rem] pb-[3.5rem]'>
          <h2 className='text-[#5933A7] px-3 md:px-0 lg:text-[1.5rem] xl:text-[2rem] pb-[1rem] font-semibold tracking-[8px] md:tracking-[1rem] leading-normal'>
            ABOUT ME
          </h2>
          <p className='text-[#43055F] text-sm px-3 md:px-0 md:text-xs lg:text-[1rem] xl:text-[1.226rem] mac:text-[1.42rem] leading-normal font-medium md:leading-normal text-justify'>
            As a visual designer and illustrator, I am committed to crafting
            designs that are not only beautiful, but also purposeful and
            impactful. I believe that design has the power to make a difference,
            and I am dedicated to using my talents to create work that inspires
            and uplifts.
            <br />
            <br />
            My design philosophy is rooted in the belief that great design
            should be both functional and visually appealing, with a focus on
            simplicity and emotional impact.
            <br />
            <br />
            With over 7 years of experience in the industry, I have honed my
            skills in visual storytelling and developed a keen eye for finding
            inspiration in the everyday. I approach each project with a curious
            and creative mindset, always looking for new ways to connect with
            audiences through my work.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
