'use client';
import React, { useState, useRef } from 'react';
import Image from 'next/image';
import art from '../../../../public/Assets/arts.png';
// import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-scroll';

const Nav: React.FC = () => {
  const isActive = useRef(() => {});

  // isActive.current = (sectionId: any) => {
  //   setActiveSection(sectionId);
  // };

  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const handleSetActiveSection = (sectionId: string) => {
    setActiveSection(sectionId);
  };

  const handleNav = () => {
    setOpen(true);
  };

  const closeNav = () => {
    setOpen(false);
  };
  return (
    <>
      <section className='bg-[#FFF4EF] fixed top-0 left-0 z-50 py-3 w-full'>
        <nav className='relative  xl:max-w-[72rem] pro:max-w-[52rem] md:max-w-[45rem] max-w-[22rem] mac:max-w-[83rem] lg:max-w-[59rem] mx-auto flex justify-between'>
          <div className='flex items-center'>
            <Image
              src={art}
              alt='Logo'
              className='md:w-[85px] md:h-[85px] w-[42.831px] h-[42.831px] '
              priority
            />
            <div>
              <h3 className='text-[#5933A7] text-sm md:text-[1rem] lg:text-[1.125rem] xl:text-[1.35rem] leading-normal font-extrabold'>
                Abieyuwa Adeseiye
              </h3>

              <p className='text-[#2B1851] text-sm md:text-[1.25rem] font-normal leading-normal'>
                Visual Designer
              </p>
            </div>
          </div>
          <ul className='lg:flex hidden xl:space-x-[3rem] lg:space-x-[1.75rem] mac:space-x-[7rem] py-4 lg:mt-3'>
            <li className='text-[#2B1851] cursor-pointer lg:text-[1rem] xl:text-[1.20rem] font-medium tracking-[0.25rem] leading-normal'>
              <Link
                activeClass='active'
                to='section1'
                spy={true}
                smooth={true}
                ref={() => isActive.current()}
                duration={500}
                className={`${activeSection === 'section1' ? 'active' : ''}`}
                onClick={() => handleSetActiveSection('section1')}
              >
                {' '}
                PROJECTS
              </Link>
            </li>
            <li className='text-[#2B1851] cursor-pointer lg:text-[1rem] uppercase xl:text-[1.20rem] font-medium tracking-[0.25rem] leading-normal'>
              <Link
                activeClass='active'
                to='section2'
                spy={true}
                smooth={true}
                // offset={-70} // Adjust this offset as needed
                duration={500}
                ref={() => isActive.current()}
                className={`${activeSection === 'section2' ? 'active' : ''}`}
                onClick={() => handleSetActiveSection('section2')}
              >
                {' '}
                About
              </Link>
            </li>
            <li className='text-[#2B1851] cursor-pointer lg:text-[1rem] uppercase xl:text-[1.20rem] font-medium tracking-[0.25rem] leading-normal'>
              <Link
                activeClass='active'
                to='section3'
                spy={true}
                smooth={true}
                ref={() => isActive.current()}
                // offset={-70} // Adjust this offset as needed
                duration={500}
                className={`${activeSection === 'section3' ? 'active' : ''}`}
                onClick={() => handleSetActiveSection('section3')}
              >
                Contact
              </Link>
            </li>
          </ul>
          <ul className='py-4 lg:mt-3 lg:flex hidden'>
            <li className='text-[#5933A7] lg:text-[1.1rem] xl:text-[1.35rem] font-medium underline leading-normal'>
              Illustration portfolio
            </li>
          </ul>
          <div
            className='my-3 md:my-7 md:text-2xl lg:hidden '
            onClick={handleNav}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='30'
              height='15'
              viewBox='0 0 22 10'
              fill='none'
            >
              <path
                d='M4.1084 1.04364H17.7365'
                stroke='#5933A7'
                stroke-width='1.94687'
                stroke-linecap='round'
              />
              <path
                d='M1.18848 4.93738L20.6572 4.93738'
                stroke='#5933A7'
                stroke-width='1.94687'
                stroke-linecap='round'
              />
              <path
                d='M4.1084 8.83112H17.7365'
                stroke='#5933A7'
                stroke-width='1.94687'
                stroke-linecap='round'
              />
            </svg>
          </div>
          {open && (
            <div>
              <div
                className='fixed top-0 left-0 bg-black opacity-50 h-screen w-screen z-20' // Added styles for overlay
                onClick={closeNav}
              ></div>{' '}
              <div className='fixed top-0 right-0 bg-[#FFF4EF] h-[32rem] md:h-screen px-5 py-5 w-[70%] z-30'>
                <div className='flex items-center'>
                  <Image
                    src={art}
                    alt='Logo'
                    className='md:w-[85px] md:h-[85px] w-[42.831px] h-[42.831px] '
                    priority
                  />
                  <div>
                    <h3 className='text-[#5933A7] text-sm md:text-[1rem] lg:text-[1.5rem] leading-normal font-extrabold'>
                      Abieyuwa Adeseiye
                    </h3>

                    <p className='text-[#2B1851] text-sm md:text-[1.25rem] font-normal leading-normal'>
                      Visual Designer
                    </p>
                  </div>
                </div>

                <ul className='pt-[2.8rem] px-2 space-y-[1.2rem]'>
                  {/* <HashLink smooth to='/#section1'> */}{' '}
                  <li className='text-base font-medium leading-normal tracking-[2.4px] text-[#2B1851]'>
                    <Link
                      activeClass='active'
                      to='section1'
                      spy={true}
                      smooth={true}
                      // offset={-70} // Adjust this offset as needed
                      duration={500}
                      className={`${
                        activeSection === 'section1' ? 'active' : ''
                      }`}
                      onClick={() => {
                        handleSetActiveSection('section1');
                        closeNav();
                      }}
                    >
                      {' '}
                      PROJECTS{' '}
                    </Link>
                  </li>
                  <li className='text-base font-medium leading-normal tracking-[2.4px] text-[#2B1851]'>
                    <Link
                      activeClass='active'
                      to='section2'
                      spy={true}
                      smooth={true}
                      offset={-70} // Adjust this offset as needed
                      duration={500}
                      className={`${
                        activeSection === 'section2' ? 'active' : ''
                      }`}
                      onClick={() => {
                        handleSetActiveSection('section2');
                        closeNav();
                      }}
                    >
                      {' '}
                      ABOUT{' '}
                    </Link>
                  </li>
                  <li className='text-base font-medium leading-normal tracking-[2.4px] text-[#2B1851]'>
                    <Link
                      activeClass='active'
                      to='section3'
                      spy={true}
                      smooth={true}
                      offset={-70} // Adjust this offset as needed
                      duration={500}
                      className={`${
                        activeSection === 'section3' ? 'active' : ''
                      }`}
                      onClick={() => {
                        handleSetActiveSection('section3');
                        closeNav();
                      }}
                    >
                      CONTACT
                    </Link>
                  </li>
                </ul>
                <ul className='flex pt-20 px-2 lg:hidden'>
                  <li className='text-[#5933A7] lg:text-[1.1rem] xl:text-[1.35rem] font-medium underline leading-normal'>
                    Illustration portfolio
                  </li>
                </ul>
              </div>
            </div>
          )}
        </nav>
      </section>
    </>
  );
};

export default Nav;
