import React from "react";
import Image from "next/image";
import left from "../../../../public/Assets/left.png";
import right from "../../../../public/Assets/right.png";
import "../../styles.css";
import Scroll from "./Scroll";
// type Props = {}

const Hero: React.FC = () => {
  return (
    <section className="bg-[#FFF4EF] h-screen w-full relative overflow-hidden">
      <div className="flex justify-between pt-[5rem]  ">
        <Image
          src={left}
          alt="Logo"
          className="w-[21.4375rem] h-[40.99469rem]"
          //   width={85}
          //   height={20}
          priority
        />
        <Image
          src={right}
          alt="Logo"
          className="w-[22.625rem] h-[40.375rem]"
          //   width={85}
          //   height={20}
          priority
        />
      </div>
      <div className="text-[#E9D3CA] absolute left-0 top-20">
        <Scroll />{" "}
      </div>
      <div className="max-w-[83rem] mx-auto flex flex-col justify-center -mt-[17rem]">
        <p className="text-[#E5BEAE] text-[1rem] font-medium  leading-normal tracking-[1.1524578rem] uppercase">
          crafting experiences that uplift and inspire.
        </p>

        <h3 className="text-[#5933A7] text-[2rem] pt-[8rem] text-center font-semibold leading-normal tracking-[1rem]">
          FEATURED PROJECTS
        </h3>
      </div>
    </section>
  );
};

export default Hero;
