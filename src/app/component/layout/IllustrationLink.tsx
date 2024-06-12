import React from 'react';
import Link from 'next/link';

const IllustrationLink = () => {
  return (
    <li className='text-[#5933A7] cursor-pointer lg:text-[1.1rem] xl:text-[1.35rem] font-medium underline leading-normal'>
      <Link href='/illustration'>
        <p>Illustration portfolio</p>{' '}
      </Link>
    </li>
  );
};

export default IllustrationLink;
