import React from 'react';
import Link from 'next/link';

const IllustrationLink = () => {
  return (
    <Link
      href='https://www.abypurpleheart.com/'
      target='_blank'
      rel='noopener noreferrer'
    >
      <li className='text-[#5933A7] cursor-pointer lg:text-[1.1rem] xl:text-[1.35rem] font-medium underline leading-normal'>
        <p>Illustration portfolio</p>
      </li>{' '}
    </Link>
  );
};

export default IllustrationLink;
