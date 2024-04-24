'use client';
import React from 'react';
import Image from 'next/image';
import { Parallax } from 'react-parallax';
import p1 from '../../../../public/Assets/p1.png';
import p2 from '../../../../public/Assets/p2.png';
import p3 from '../../../../public/Assets/p3.png';
import p4 from '../../../../public/Assets/p4.png';
import quickfill from '../../../../public/Assets/quickfill.png';
import eppcheck from '../../../../public/Assets/eppcheck.png';
import xperizer from '../../../../public/Assets/xperizer.png';
import gatsby from '../../../../public/Assets/gatsby.png';

import p5 from '../../../../public/Assets/p5.png';
import p6 from '../../../../public/Assets/p6.png';
import p7 from '../../../../public/Assets/p7.png';
import p8 from '../../../../public/Assets/p8.png';

const Projects: React.FC = () => {
  const backgroundImageUrl = p1.src;
  const backgroundImage = p2.src;
  const background = p3.src;
  const Images = p4.src;

  const quick = p5.src;
  const epp = p6.src;
  const Xperizers = p7.src;
  const gatby = p8.src;

  return (
    <div className='overflow-hidden bg-[#2B1851] bg-fixed'>
      <div className='md:block hidden'>
        <Parallax
          strength={600}
          bgImage={backgroundImageUrl}
          // bgImageStyle={{ backgroundSize: "contain" }}
        >
          <div className='h-[10rem] md:h-[22rem] lg:h-[29.5rem] flex flex-col justify-center items-center w-full border-b-4 border-white'>
            <div className='flex md:gap-3 gap-1 lg:gap-5'>
              {' '}
              <Image
                src={quickfill}
                alt='illustration'
                className='lg:-mt-10 w-[27.674px] -mt-1 h-[27.431px] md:-mt-5 md:w-[57.674px] md:h-[50.431px] lg:w-[62.674px] lg:h-[57.431px]'
                //   width={85}
                //   height={20}
                priority
              />
              <h2 className='text-white md:text-[35.5px] lg:text-[50.1px] font-extrabold leading-normal md:leading-[20.049px]'>
                QuickFill
              </h2>
            </div>

            <div className='flex gap-5 md:gap-12 mt-5 md:mt-10'>
              <button className='text-[#FFF4EF] text-[10.503px] border-[1px] px-4 py-2 border-[#FFF4E] md:text-base lg:text-[24px] font-semibold leading-normal tracking-[5.251px] md:tracking-[12px]'>
                UX DESIGN
              </button>
              <button className='text-[#FFF4EF] text-[10.503px] border-[1px] px-4 py-2 border-[#FFF4E] md:text-base lg:text-[24px] font-semibold leading-normal tracking-[5.251px] md:tracking-[12px]'>
                CASE STUDY
              </button>
            </div>
          </div>
        </Parallax>
        <Parallax
          strength={600}
          bgImage={backgroundImage}
          // bgImageStyle={{ backgroundSize: "cover" }}
        >
          <div className='h-[10rem] md:h-[22rem] lg:h-[29.5rem] flex flex-col justify-center items-center w-full border-b-4 border-white'>
            <div className='flex gap-5'>
              {' '}
              <Image
                src={eppcheck}
                alt='illustration'
                className='lg:-mt-10 w-[78px] h-[50.615px] md:-mt-5 md:w-[110px] md:h-[80.615px] lg:w-[160px] lg:h-[102.615px]'
                //   width={85}
                //   height={20}
                priority
              />
            </div>

            <div className='flex gap-5 md:gap-12 mt-5 md:mt-10'>
              <button className='text-[#FFF4EF] border-[1px] text-[10.503px] px-4 py-2 border-[#FFF4E] md:text-base lg:text-[24px] font-semibold leading-normal tracking-[5.251px] md:tracking-[12px]'>
                VISUAL DESIGN
              </button>
              <button className='text-[#FFF4EF] border-[1px] text-[10.503px] px-4 py-2 border-[#FFF4E] md:text-base lg:text-[24px] font-semibold leading-normal tracking-[5.251px] md:tracking-[12px]'>
                BRANDING
              </button>
            </div>
          </div>
        </Parallax>
        <Parallax
          strength={600}
          bgImage={background}
          // bgImageStyle={{ backgroundSize: "contain" }}
        >
          <div className='h-[10rem] md:h-[22rem] lg:h-[29.5rem] flex flex-col justify-center items-center w-full border-b-4 border-white'>
            <div className='flex gap-5'>
              {' '}
              <Image
                src={xperizer}
                alt='illustration'
                className='lg:-mt-10 md:-mt-5 w-[110.362px] h-[45.572px] md:w-[195.362px] md:h-[70.572px] lg:w-[305.362px] lg:h-[108.572px]'
                priority
              />
            </div>

            <div className='flex gap-5 md:gap-12 mt-5 md:mt-10'>
              <button className='text-[#FFF4EF] border-[1px] px-4 py-2 border-[#FFF4E] text-[10.503px] md:text-base lg:text-[24px] font-semibold leading-normal tracking-[5.251px] md:tracking-[12px]'>
                BRANDING
              </button>
              <button className='text-[#FFF4EF] border-[1px] px-4 py-2 border-[#FFF4E] text-[10.503px] md:text-base lg:text-[24px] font-semibold leading-normal tracking-[5.251px] md:tracking-[12px]'>
                VISUAL DESIGN
              </button>
            </div>
          </div>
        </Parallax>
        <Parallax
          strength={600}
          bgImage={Images}
          bgImageStyle={{ backgroundSize: 'contain' }}
        >
          <div className='h-[10rem] md:h-[22rem] lg:h-[29.5rem] flex flex-col justify-center items-center w-full border-b-4 border-white'>
            <div className='flex gap-5'>
              {' '}
              <Image
                src={gatsby}
                alt='illustration'
                className='lg:-mt-10 md:-mt-5 w-[170.4665px] h-[20.063px] md:w-[274.4665px] md:h-[35.063px] lg:w-[454.466px] lg:h-[55.063px]'
                priority
              />
            </div>

            <div className='flex gap-5 md:gap-12 mt-5 md:mt-10'>
              <button className='text-[#FFF4EF] text-[10.503px] border-[1px] px-4 py-2 border-[#FFF4E] md:text-base lg:text-[24px] font-semibold leading-normal tracking-[5.251px] md:tracking-[12px]'>
                BRANDING
              </button>
              <button className='text-[#FFF4EF] text-[10.503px] border-[1px] px-4 py-2 border-[#FFF4E] md:text-base lg:text-[24px] font-semibold leading-normal tracking-[5.251px] md:tracking-[12px]'>
                VISUAL DESIGN
              </button>
            </div>
          </div>
        </Parallax>
      </div>

      {/* small screen */}
      <div className='block md:hidden'>
        <Parallax strength={600} bgImage={quick}>
          <div className='h-[12rem] md:h-[22rem] lg:h-[29.5rem] flex flex-col justify-center items-center w-full border-b-4 border-white'>
            <div className='flex md:gap-3 gap-1 lg:gap-5'>
              {' '}
              <Image
                src={quickfill}
                alt='illustration'
                className='lg:-mt-10 w-[27.674px] -mt-1 h-[27.431px] md:-mt-5 md:w-[57.674px] md:h-[50.431px] lg:w-[62.674px] lg:h-[57.431px]'
                priority
              />
              <h2 className='text-white md:text-[35.5px] lg:text-[50.1px] font-extrabold leading-normal md:leading-[20.049px]'>
                QuickFill
              </h2>
            </div>

            <div className='flex gap-5 md:gap-12 mt-5 md:mt-10'>
              <button className='text-[#FFF4EF] text-[10.503px] border-[1px] px-4 py-2 border-[#FFF4E] md:text-base lg:text-[24px] font-semibold leading-normal tracking-[5.251px] md:tracking-[12px]'>
                UX DESIGN
              </button>
              <button className='text-[#FFF4EF] text-[10.503px] border-[1px] px-4 py-2 border-[#FFF4E] md:text-base lg:text-[24px] font-semibold leading-normal tracking-[5.251px] md:tracking-[12px]'>
                CASE STUDY
              </button>
            </div>
          </div>
        </Parallax>
        <Parallax strength={600} bgImage={epp}>
          <div className='h-[12rem] md:h-[22rem] lg:h-[29.5rem] flex flex-col justify-center items-center w-full border-b-4 border-white'>
            <div className='flex gap-5'>
              {' '}
              <Image
                src={eppcheck}
                alt='illustration'
                className='lg:-mt-10 w-[78px] h-[50.615px] md:-mt-5 md:w-[110px] md:h-[80.615px] lg:w-[160px] lg:h-[102.615px]'
                priority
              />
            </div>

            <div className='flex gap-5 md:gap-12 mt-5 md:mt-10'>
              <button className='text-[#FFF4EF] border-[1px] text-[10.503px] px-4 py-2 border-[#FFF4E] md:text-base lg:text-[24px] font-semibold leading-normal tracking-[5.251px] md:tracking-[12px]'>
                VISUAL DESIGN
              </button>
              <button className='text-[#FFF4EF] border-[1px] text-[10.503px] px-4 py-2 border-[#FFF4E] md:text-base lg:text-[24px] font-semibold leading-normal tracking-[5.251px] md:tracking-[12px]'>
                BRANDING
              </button>
            </div>
          </div>
        </Parallax>
        <Parallax
          strength={600}
          bgImage={Xperizers}
          // bgImageStyle={{ backgroundSize: "contain" }}
        >
          <div className='h-[12rem] md:h-[22rem] lg:h-[29.5rem] flex flex-col justify-center items-center w-full border-b-4 border-white'>
            <div className='flex gap-5'>
              {' '}
              <Image
                src={xperizer}
                alt='illustration'
                className='lg:-mt-10 md:-mt-5 w-[110.362px] h-[45.572px] md:w-[195.362px] md:h-[70.572px] lg:w-[305.362px] lg:h-[108.572px]'
                priority
              />
            </div>

            <div className='flex gap-5 md:gap-12 mt-5 md:mt-10'>
              <button className='text-[#FFF4EF] border-[1px] px-4 py-2 border-[#FFF4E] text-[10.503px] md:text-base lg:text-[24px] font-semibold leading-normal tracking-[5.251px] md:tracking-[12px]'>
                BRANDING
              </button>
              <button className='text-[#FFF4EF] border-[1px] px-4 py-2 border-[#FFF4E] text-[10.503px] md:text-base lg:text-[24px] font-semibold leading-normal tracking-[5.251px] md:tracking-[12px]'>
                VISUAL DESIGN
              </button>
            </div>
          </div>
        </Parallax>
        <Parallax
          strength={600}
          bgImage={gatby}
          bgImageStyle={{ backgroundSize: 'contain' }}
        >
          <div className='h-[12rem] md:h-[22rem] lg:h-[29.5rem] flex flex-col justify-center items-center w-full border-b-4 border-white'>
            <div className='flex gap-5'>
              {' '}
              <Image
                src={gatsby}
                alt='illustration'
                className='lg:-mt-10 md:-mt-5 w-[170.4665px] h-[20.063px] md:w-[274.4665px] md:h-[35.063px] lg:w-[454.466px] lg:h-[55.063px]'
                priority
              />
            </div>

            <div className='flex gap-5 md:gap-12 mt-5 md:mt-10'>
              <button className='text-[#FFF4EF] text-[10.503px] border-[1px] px-4 py-2 border-[#FFF4E] md:text-base lg:text-[24px] font-semibold leading-normal tracking-[5.251px] md:tracking-[12px]'>
                BRANDING
              </button>
              <button className='text-[#FFF4EF] text-[10.503px] border-[1px] px-4 py-2 border-[#FFF4E] md:text-base lg:text-[24px] font-semibold leading-normal tracking-[5.251px] md:tracking-[12px]'>
                VISUAL DESIGN
              </button>
            </div>
          </div>
        </Parallax>
      </div>
    </div>
  );
};

export default Projects;
