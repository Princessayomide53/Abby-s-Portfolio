import React from 'react';
import Image from 'next/image';
import girl from '../../../../public/Assets/girl.svg';
import boy from '../../../../public/Assets/boy.svg';

type Props = {};

const Users = (props: Props) => {
  return (
    <section className='bg-[#FFF4EF] p-[3rem] xl:max-w-[72rem] mt-5 pro:max-w-[52rem] md:max-w-[45rem] max-w-[22rem] mac:max-w-[83rem] lg:max-w-[59rem] mx-auto'>
      <article className='flex justify-between'>
        <div className='border-[3.885px] w-[24.18256rem] border-[#1F0229] p-[2.14rem] '>
          <Image src={girl} alt='' />

          <p className='text-[#1F0229] pt-[1.7rem] flex justify-between text-[1.0695rem] leading-[1.49725rem] tracking-[-0.02138rem] font-medium'>
            <b className='text-[#5933A7] tracking-[-0.02138rem] font-bold text-[1.0695rem]'>
              NAME:{' '}
            </b>
            Tope Williams
          </p>
          <p className='text-[#1F0229] pt-[1.4rem] flex justify-between text-[1.0695rem] leading-[1.49725rem] tracking-[-0.02138rem] font-medium'>
            <b className='text-[#5933A7] tracking-[-0.02138rem] font-bold text-[1.0695rem]'>
              AGE:{' '}
            </b>
            42
          </p>
          <p className='text-[#1F0229] pt-[1.4rem] flex justify-between text-[1.0695rem] leading-[1.49725rem] tracking-[-0.02138rem] font-medium'>
            <b className='text-[#5933A7] tracking-[-0.02138rem] font-bold text-[1.0695rem]'>
              EDUCATION:{' '}
            </b>
            University graduate
          </p>
          <p className='text-[#1F0229] pt-[1.4rem] flex justify-between text-[1.0695rem] leading-[1.49725rem] tracking-[-0.02138rem] font-medium'>
            <b className='text-[#5933A7] tracking-[-0.02138rem] font-bold text-[1.0695rem]'>
              JOB:
            </b>
            Freelance UX researcher
          </p>
          <p className='text-[#1F0229] pt-[1.4rem] flex justify-between text-[1.0695rem] leading-[1.49725rem] tracking-[-0.02138rem] font-medium'>
            <b className='text-[#5933A7] tracking-[-0.02138rem] font-bold text-[1.0695rem]'>
              LOCATION:
            </b>
            Asaba, Nigeria
          </p>
        </div>

        <div className='flex flex-col gap-[2rem]'>
          <div className='border-[3.885px] border-dashed border-[#1F0229] w-[24.60906rem] p-7'>
            <h4 className='tracking-[-0.02569rem] text-[#5933A7] font-bold text-[1.28338rem] leading-[1.71119rem]'>
              Bio
            </h4>

            <p className='text-[#5933A7] pt-[0.8rem] text-[1.06831rem] font-normal leading-normal'>
              Tope Williams is a wife, mother of twin toddler boys and a
              Freelance UX researcher. She lives in Asaba and spends most of her
              time in front of her computer, attending client meetings or taking
              care of her children, this makes it difficult for her to run some
              home services which include filling of gas. Mrs Williams will love
              a mobile application that can solve this problem.{' '}
            </p>
          </div>
          <div className='border-[3.885px] border-[#1F0229] w-[24.60906rem] p-7 pb-[6rem]'>
            <h4 className='text-[#1F0229] text-[1.28338rem] font-bold leading-[1.71119rem] tracking-[-0.02569rem]'>
              Pain points
            </h4>

            <p className='text-[#5933A7] flex flex-col pt-[0.8rem] font-normal text-[1.0695rem] tracking-[-0.02138rem]'>
              <b className='font-normal'>
                - The stress of transporting the gas cylinder to and fro
              </b>
              <b className='font-normal'>- The distance to the gas station</b>
              <b className='font-normal'>
                - Inability to know if the quantity filled is accurate
              </b>
            </p>
          </div>
        </div>

        <div className='flex flex-col gap-[2rem]'>
          <div className='border-[3.885px] border-[#1F0229] w-[24.60906rem] p-7 pb-[13.5rem]'>
            <h4 className='text-[#5933A7] leading-[1.49725rem] tracking-[-0.02138rem] font-bold'>
              Motivations
            </h4>
            <p className=' text-[#5933A7] flex flex-col pt-[0.8rem] font-normal text-[1.0695rem] tracking-[-0.02138rem]'>
              <b className='font-normal'>- Convenience</b>
              <b className='font-normal'>- Reliability</b>
              <b className='font-normal'>- Distance</b>
              <b className='font-normal'>- Efficiency</b>
            </p>
          </div>
          <div className='border-[3.885px] border-dashed border-[#1F0229] w-[24.60906rem] p-7 pb-[4rem]'>
            <h4 className='tracking-[-0.02569rem] text-[#5933A7] font-bold text-[1.28338rem] leading-[1.71119rem]'>
              Goals
            </h4>
            <p className='flex flex-col text-[#5933A7] pt-[0.8rem] text-[1.06831rem] font-normal leading-normal'>
              <b className='font-normal'>
                - To be able to purchase gas refills stress free
              </b>
              <b className='font-normal'>
                - To be able to determine when gas will finish
              </b>
              <b className='font-normal'>
                - To find a trustworthy and reliable gas vendor
              </b>
            </p>
          </div>
        </div>
      </article>

      <article className='flex justify-between mt-[8.27rem]'>
        <div className='border-[3.885px] w-[24.18256rem] border-[#1F0229] p-[2.14rem] '>
          <Image src={boy} alt='' />

          <p className='text-[#1F0229] pt-[1.7rem] flex justify-between text-[1.0695rem] leading-[1.49725rem] tracking-[-0.02138rem] font-medium'>
            <b className='text-[#5933A7] tracking-[-0.02138rem] font-bold text-[1.0695rem]'>
              NAME:{' '}
            </b>
            John Osas
          </p>
          <p className='text-[#1F0229] pt-[1.4rem] flex justify-between text-[1.0695rem] leading-[1.49725rem] tracking-[-0.02138rem] font-medium'>
            <b className='text-[#5933A7] tracking-[-0.02138rem] font-bold text-[1.0695rem]'>
              AGE:{' '}
            </b>
            25
          </p>
          <p className='text-[#1F0229] pt-[1.4rem] flex justify-between text-[1.0695rem] leading-[1.49725rem] tracking-[-0.02138rem] font-medium'>
            <b className='text-[#5933A7] tracking-[-0.02138rem] font-bold text-[1.0695rem]'>
              EDUCATION:{' '}
            </b>
            Undergraduate
          </p>
          {/* <p className='text-[#1F0229] pt-[1.4rem] flex justify-between text-[1.0695rem] leading-[1.49725rem] tracking-[-0.02138rem] font-medium'>
            <b className='text-[#5933A7] tracking-[-0.02138rem] font-bold text-[1.0695rem]'>
              JOB:
            </b>
            Freelance UX researcher
          </p> */}
          <p className='text-[#1F0229] pt-[1.4rem] flex justify-between text-[1.0695rem] leading-[1.49725rem] tracking-[-0.02138rem] font-medium'>
            <b className='text-[#5933A7] tracking-[-0.02138rem] font-bold text-[1.0695rem]'>
              LOCATION:
            </b>
            Abuja, Nigeria
          </p>
        </div>

        <div className='flex flex-col gap-[2rem]'>
          <div className='border-[3.885px] border-dashed border-[#1F0229] w-[24.60906rem] p-7 pb-[5rem]'>
            <h4 className='tracking-[-0.02569rem] text-[#5933A7] font-bold text-[1.28338rem] leading-[1.71119rem]'>
              Bio
            </h4>

            <p className='text-[#5933A7] pt-[0.8rem] text-[1.06831rem] font-normal leading-normal'>
              John Osas is a Final Year Student of Mechanical Engineering. John
              loves food and loves to cook but hates stress especially when he
              runs out of gas.
              <br />
              <br />
              He would jump at any solution that reduces the tress of
              transporting gas cylinders and waiting long hours on queue just to
              fill gas.
            </p>
          </div>
          <div className='border-[3.885px] border-[#1F0229] w-[24.60906rem] p-7 pb-[6rem]'>
            <h4 className='text-[#1F0229] text-[1.28338rem] font-bold leading-[1.71119rem] tracking-[-0.02569rem]'>
              Pain points
            </h4>

            <p className='text-[#5933A7] flex flex-col pt-[0.8rem] font-normal text-[1.0695rem] tracking-[-0.02138rem]'>
              <b className='font-normal'>
                - The stress of transporting the gas cylinder to and fro
              </b>
              <b className='font-normal'>- The distance to the gas station</b>
              <b className='font-normal'>
                - Inability to know if the quantity filled is accurate
              </b>
            </p>
          </div>
        </div>

        <div className='flex flex-col gap-[2rem]'>
          <div className='border-[3.885px] border-[#1F0229] w-[24.60906rem] p-7 pb-[13.5rem]'>
            <h4 className='text-[#5933A7] leading-[1.49725rem] tracking-[-0.02138rem] font-bold'>
              Motivations
            </h4>
            <p className=' text-[#5933A7] flex flex-col pt-[0.8rem] font-normal text-[1.0695rem] tracking-[-0.02138rem]'>
              <b className='font-normal'>- Convenience</b>
              <b className='font-normal'>- Reliability</b>
              <b className='font-normal'>- Distance</b>
              <b className='font-normal'>- Efficiency</b>
            </p>
          </div>
          <div className='border-[3.885px] border-dashed border-[#1F0229] w-[24.60906rem] p-7 pb-[4rem]'>
            <h4 className='tracking-[-0.02569rem] text-[#5933A7] font-bold text-[1.28338rem] leading-[1.71119rem]'>
              Goals
            </h4>
            <p className='flex flex-col text-[#5933A7] pt-[0.8rem] text-[1.06831rem] font-normal leading-normal'>
              <b className='font-normal'>
                - To be able to purchase gas refills stress free
              </b>
              <b className='font-normal'>
                - To be able to determine when gas will finish
              </b>
              <b className='font-normal'>
                - To find a trustworthy and reliable gas vendor
              </b>
            </p>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Users;
