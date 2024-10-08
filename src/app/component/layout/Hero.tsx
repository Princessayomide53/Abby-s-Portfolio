import React from 'react';
import Image from 'next/image';
import left from '../../../../public/Assets/left.png';
import right from '../../../../public/Assets/right.png';
import '../../styles.css';
import Scroll from './Scroll';
// type Props = {}

const Hero: React.FC = () => {
  return (
    <section className='bg-[#FFF4EF] mac:h-screen md:h-[38rem] h-[25.5rem] lg:h-[45.5rem]  w-full relative overflow-hidden'>
      <div className='hidden md:flex justify-between pt-[3rem] md:pt-[8.5rem] lg:pt-[10.5rem]  '>
        <Image
          src={left}
          alt='Logo'
          className='md:w-[21.4375rem] md:h-[40.99469rem]'
          //   width={85}
          //   height={20}
          priority
        />
        <Image
          src={right}
          alt='Logo'
          className='w-[22.625rem] h-[40.375rem]'
          //   width={85}
          //   height={20}
          priority
        />
      </div>
      <div className='text-[#E9D3CA] absolute left-0 top-24 md:top-36 lg:top-48'>
        <Scroll />{' '}
      </div>
      <div className='xl:max-w-[72rem] mac:max-w-[83rem] md:max-w-[45rem] lg:max-w-[60rem] max-w-[20rem] mt-[17rem] mx-auto flex flex-col justify-center items-center md:-mt-[22rem] lg:-mt-[18rem]'>
        <p className='text-[#5933A7] text-xs tracking-[0.6px] w-full md:text-[1rem]  text-center font-semibold  leading-normal md:tracking-[0.3524578rem] lg:tracking-[0.5524578rem] xl:tracking-[0.9524578rem] mac:tracking-[1.1524578rem] uppercase'>
          Crafting purposeful designs with creativity and insight
        </p>

        {/* <h3 className='text-[#5933A7] md:text-[1.25rem] pt-[3.7rem] tracking-[10px] text-base lg:text-[2rem] mac:pt-[4rem] md:pt-[5rem] lg:pt-[5rem] text-center font-semibold leading-normal md:tracking-[1rem]'>
          FEATURED PROJECTS
        </h3> */}
        <button className='mt-[2.7rem] fonts text-lg leading-[1rem] px-[3rem] py-1 mac:mt-[4rem] md:mt-[5rem] lg:mt-[5rem] text-white flex gap-2 items-center bg-[#5933A7] rounded-full'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='29'
            height='28'
            viewBox='0 0 29 28'
            fill='none'
          >
            <path
              d='M10.5592 18.7008C10.7564 18.8401 10.9821 18.9338 11.22 18.975C11.4579 19.0163 11.702 19.0041 11.9346 18.9394C12.1672 18.8747 12.3825 18.7591 12.5649 18.6009C12.7473 18.4427 12.8922 18.2459 12.9892 18.0248L13.7592 15.6848C13.9465 15.1219 14.2623 14.6102 14.6816 14.1905C15.101 13.7708 15.6124 13.4546 16.1752 13.2668L18.4132 12.5398C18.7313 12.4292 19.0063 12.221 19.1992 11.9448C19.3481 11.7355 19.4451 11.4938 19.4821 11.2396C19.5192 10.9853 19.4953 10.726 19.4123 10.4828C19.3294 10.2397 19.1898 10.0198 19.0052 9.8412C18.8205 9.66263 18.596 9.53054 18.3502 9.45584L16.1352 8.73584C15.572 8.54904 15.0602 8.23363 14.6401 7.81462C14.2201 7.39561 13.9034 6.88451 13.7152 6.32184L12.9882 4.08484C12.8764 3.76789 12.6688 3.49356 12.3942 3.29984C12.1179 3.10934 11.7903 3.00732 11.4547 3.00732C11.1191 3.00732 10.7914 3.10934 10.5152 3.29984C10.2363 3.49705 10.0264 3.77689 9.91518 4.09984L9.17918 6.36484C8.99143 6.9129 8.68148 7.41108 8.27278 7.82167C7.86409 8.23227 7.36736 8.54454 6.82018 8.73484L4.58018 9.46084C4.26144 9.57351 3.98574 9.78273 3.79145 10.0594C3.59716 10.3361 3.49393 10.6664 3.49613 11.0045C3.49833 11.3425 3.60585 11.6715 3.80372 11.9456C4.0016 12.2197 4.28 12.4253 4.60018 12.5338L6.81618 13.2538C7.53463 13.4949 8.16621 13.9422 8.63218 14.5398C8.89818 14.8828 9.10318 15.2678 9.23818 15.6798L9.96618 17.9138C10.0782 18.2318 10.2862 18.5068 10.5612 18.7008M7.28818 11.8278L5.06818 11.1078C5.06818 11.1078 4.98318 11.0698 4.98318 10.9998C4.98561 10.9749 4.99469 10.9511 5.00947 10.9309C5.02424 10.9106 5.04417 10.8947 5.06718 10.8848L7.29918 10.1598C8.0748 9.89039 8.77783 9.44571 9.35363 8.86037C9.92944 8.27502 10.3625 7.56478 10.6192 6.78484L11.3402 4.56584C11.3402 4.56584 11.3832 4.48184 11.4542 4.48184C11.5252 4.48184 11.5672 4.56584 11.5672 4.56584L12.2902 6.78884C12.5516 7.57504 12.9931 8.28932 13.5794 8.87474C14.1657 9.46017 14.8806 9.90057 15.6672 10.1608L17.9372 10.8958C17.959 10.9053 17.9778 10.9205 17.9916 10.9399C18.0053 10.9593 18.0135 10.9821 18.0152 11.0058C18.0116 11.03 18.0022 11.0529 17.9877 11.0726C17.9732 11.0923 17.9542 11.1082 17.9322 11.1188L15.7072 11.8408C14.9209 12.1017 14.2065 12.5426 13.6207 13.1284C13.0349 13.7141 12.5941 14.4286 12.3332 15.2148L11.6182 17.4148C11.614 17.4419 11.5999 17.4664 11.5786 17.4836C11.5574 17.5007 11.5305 17.5094 11.5032 17.5078C11.3992 17.5078 11.3852 17.4328 11.3852 17.4328L10.6622 15.2128C10.4026 14.4243 9.96204 13.7075 9.37583 13.1198C8.78962 12.532 8.07399 12.0895 7.28618 11.8278M20.3032 24.7818C20.5069 24.925 20.7502 25.0011 20.9992 24.9998C21.2466 25.0009 21.4883 24.9255 21.6912 24.7838C21.8999 24.6364 22.0562 24.4262 22.1372 24.1838L22.5092 23.0408C22.5879 22.8035 22.7207 22.5878 22.8973 22.4108C23.0738 22.2337 23.2891 22.1002 23.5262 22.0208L24.6922 21.6428C24.9277 21.5596 25.1317 21.4056 25.2762 21.2019C25.4207 20.9981 25.4986 20.7546 25.4992 20.5048C25.4992 20.2488 25.4173 19.9994 25.2654 19.7932C25.1136 19.587 24.8997 19.4348 24.6552 19.3588L23.5112 18.9888C23.2738 18.9101 23.058 18.777 22.8809 18.6003C22.7039 18.4236 22.5704 18.2081 22.4912 17.9708L22.1112 16.8078C22.0292 16.5705 21.8749 16.3648 21.6699 16.2198C21.4649 16.0748 21.2195 15.9977 20.9684 15.9995C20.7173 16.0013 20.4731 16.0817 20.2702 16.2296C20.0672 16.3775 19.9158 16.5853 19.8372 16.8238L19.4632 17.9698C19.3865 18.204 19.2571 18.4175 19.085 18.5939C18.9128 18.7702 18.7025 18.9046 18.4702 18.9868L17.3042 19.3648C17.0685 19.4481 16.8644 19.6023 16.7199 19.8062C16.5754 20.0102 16.4976 20.2539 16.4972 20.5038C16.4974 20.7559 16.5771 21.0015 16.7248 21.2058C16.8725 21.4101 17.0809 21.5626 17.3202 21.6418L18.4642 22.0138C18.7025 22.0924 18.919 22.226 19.0962 22.4037C19.2734 22.5814 19.4063 22.7983 19.4842 23.0368L19.8632 24.1998C19.9459 24.4348 20.0997 24.6382 20.3032 24.7818ZM18.9322 20.5878L18.6622 20.4998L18.9452 20.4038C19.3992 20.2466 19.8107 19.9867 20.1477 19.6443C20.4848 19.3019 20.7382 18.8863 20.8882 18.4298L20.9762 18.1598L21.0652 18.4318C21.2175 18.8921 21.4753 19.3104 21.8181 19.6533C22.1608 19.9963 22.579 20.2543 23.0392 20.4068L23.3322 20.5068L23.0612 20.5938C22.6011 20.7473 22.1832 21.0059 21.8405 21.349C21.4979 21.6922 21.2399 22.1106 21.0872 22.5708L20.9992 22.8408L20.9112 22.5688C20.7582 22.1074 20.4996 21.688 20.1558 21.3442C19.812 21.0005 19.3927 20.7418 18.9312 20.5888'
              fill='white'
            />
          </svg>
          View my resume
        </button>
      </div>
    </section>
  );
};

export default Hero;
