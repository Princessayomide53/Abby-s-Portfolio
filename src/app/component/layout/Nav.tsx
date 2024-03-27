import React from "react";
import Image from "next/image";
import art from "../../../../public/Assets/art.svg";

// type Props = {}

const Nav: React.FC = () => {
  return (
    <>
      <section className="bg-[#FFF4EF] py-3 w-full">
        <nav className="max-w-[83rem] mx-auto flex justify-between">
          <div className="flex items-center">
            <Image
              src={art}
              alt="Logo"
              // className="w-[6.6875rem] h-[6.6875rem]"
              width={85}
              height={20}
              priority
            />
            <div>
              <h3 className="text-[#5933A7] text-[1.5rem] leading-normal font-extrabold">
                Abieyuwa Adeseiye
              </h3>

              <p className="text-[#2B1851] text-[1.25rem] font-normal leading-normal">
                Visual Designer
              </p>
            </div>
          </div>
          <ul className="flex space-x-[7rem] py-4">
            <li className="text-[#2B1851] text-[1.25rem] font-medium tracking-[0.25rem] leading-normal">
              About
            </li>
            <li className="text-[#2B1851] text-[1.25rem] font-medium tracking-[0.25rem] leading-normal">
              Contact
            </li>
          </ul>
          <ul className="py-4">
            <li className="text-[#5933A7] text-[1.5rem] font-medium underline leading-normal">
              Illustration portfolio
            </li>
          </ul>
        </nav>
      </section>
    </>
  );
};

export default Nav;
