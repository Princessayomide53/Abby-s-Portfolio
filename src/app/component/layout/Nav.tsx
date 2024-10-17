'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import { Link as ScrollLink } from 'react-scroll';
import art from '../../../../public/Assets/arts.png';
import IllustrationLink from './IllustrationLink';

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1);
      if (hash) {
        setTimeout(() => {
          const element = document.getElementById(hash);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 0);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Check for hash on initial load

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const handleSetActiveSection = (sectionId: string) => {
    setActiveSection(sectionId);
  };

  const handleNav = () => {
    setOpen(true);
  };

  const closeNav = () => {
    setOpen(false);
  };

  const NavLink = ({
    to,
    children,
  }: {
    to: string;
    children: React.ReactNode;
  }) => {
    const isHomePage = pathname === '/';

    if (isHomePage) {
      return (
        <ScrollLink
          activeClass='active'
          to={to}
          spy={true}
          smooth={true}
          duration={500}
          className={`cursor-pointer ${activeSection === to ? 'active' : ''}`}
          onClick={() => handleSetActiveSection(to)}
        >
          {children}
        </ScrollLink>
      );
    } else {
      return (
        <Link href={`/#${to}`}>
          <span className='cursor-pointer'>{children}</span>
        </Link>
      );
    }
  };

  return (
    <section className='bg-white/50 backdrop-blur-md fixed top-0 left-0 z-50 py-3 w-full'>
      <nav className='relative xl:max-w-[72rem] pro:max-w-[52rem] md:max-w-[45rem] max-w-[22rem] mac:max-w-[83rem] lg:max-w-[59rem] mx-auto flex justify-between'>
        <Link href='/'>
          <div className='flex items-center'>
            <Image
              src={art}
              alt='Logo'
              className='md:w-[85px] md:h-[85px] w-[42.831px] h-[42.831px]'
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
        </Link>
        <ul className='lg:flex hidden xl:space-x-[3rem] lg:space-x-[1.75rem] mac:space-x-[7rem] py-4 lg:mt-3'>
          <li className='text-[#2B1851] lg:text-[1rem] xl:text-[1.20rem] font-medium tracking-[0.25rem] leading-normal'>
            <NavLink to='section1'>PROJECTS</NavLink>
          </li>
          <li className='text-[#2B1851] lg:text-[1rem] uppercase xl:text-[1.20rem] font-medium tracking-[0.25rem] leading-normal'>
            <NavLink to='section2'>ABOUT</NavLink>
          </li>
          <li className='text-[#2B1851] lg:text-[1rem] uppercase xl:text-[1.20rem] font-medium tracking-[0.25rem] leading-normal'>
            <NavLink to='section3'>CONTACT</NavLink>
          </li>
        </ul>
        <ul className='py-4 lg:mt-3 lg:flex hidden'>
          <IllustrationLink />
        </ul>
        <div className='my-3 md:my-7 md:text-2xl lg:hidden' onClick={handleNav}>
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
              strokeWidth='1.94687'
              strokeLinecap='round'
            />
            <path
              d='M1.18848 4.93738L20.6572 4.93738'
              stroke='#5933A7'
              strokeWidth='1.94687'
              strokeLinecap='round'
            />
            <path
              d='M4.1084 8.83112H17.7365'
              stroke='#5933A7'
              strokeWidth='1.94687'
              strokeLinecap='round'
            />
          </svg>
        </div>
        {open && (
          <div>
            <div
              className='fixed top-0 left-0 bg-black opacity-50 h-screen w-screen z-20'
              onClick={closeNav}
            ></div>
            <div className='fixed top-0 right-0 bg-[#FFF4EF] h-[32rem] md:h-screen px-5 py-5 w-[70%] z-30'>
              <div className='flex items-center'>
                <Image
                  src={art}
                  alt='Logo'
                  className='md:w-[85px] md:h-[85px] w-[42.831px] h-[42.831px]'
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
                <li className='text-base font-medium leading-normal tracking-[2.4px] text-[#2B1851]'>
                  <NavLink to='section1'>PROJECTS</NavLink>
                </li>
                <li className='text-base font-medium leading-normal tracking-[2.4px] text-[#2B1851]'>
                  <NavLink to='section2'>ABOUT</NavLink>
                </li>
                <li className='text-base font-medium leading-normal tracking-[2.4px] text-[#2B1851]'>
                  <NavLink to='section3'>CONTACT</NavLink>
                </li>
              </ul>
              <ul className='flex pt-20 px-2 lg:hidden'>
                <li className='text-[#5933A7] lg:text-[1.1rem] xl:text-[1.35rem] font-medium underline leading-normal'>
                  <Link
                    href='https://www.abypurpleheart.com/'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    Illustration portfolio
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        )}
      </nav>
    </section>
  );
}
