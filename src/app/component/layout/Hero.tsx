import React from "react";
import Image from "next/image";
import left from "../../../../public/Assets/left.png";
import right from "../../../../public/Assets/right.png";
import "../../styles.css";
// type Props = {}

const Hero: React.FC = () => {
  return (
    <section className="bg-[#FFF4EF] h-screen w-full relative overflow-hidden">
      <div className="flex justify-between pt-[8rem]  ">
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

      <div className="text-[#E9D3CA] absolute left-0 top-52">
        <div className="w-full">
          <div className="flex justify-evenly absolute left-0 z-20 overflow-visible">
            <div className="flex justify-center animate mr-[2rem] lg:mr-0 items-center space-x-[3rem] xl:space-x-[5rem] lg:space-x-[4rem]  w-50">
              <h3 className="font-medium text-[5rem] whitespace-nowrap leading-normal ">
                Visual designer
              </h3>

              <h3 className="fonts  text-[5.0625rem] whitespace-nowrap  font-medium leading-normal">
                Product Designer.
              </h3>
              <h3
                style={{ fontFamily: "Allita" }}
                className="text-[5.5rem] font-medium leading-normal "
              >
                illustrator.
              </h3>

              <h3 className="font-medium  text-[5rem] whitespace-nowrap leading-normal ">
                Visual designer
              </h3>

              <h3 className="fonts  text-[5.0625rem] whitespace-nowrap  font-medium leading-normal">
                Product Designer.
              </h3>
              <h3
                style={{ fontFamily: "Allita" }}
                className="text-[5.5rem] font-medium leading-normal "
              >
                illustrator.
              </h3>
              <h3 className="font-medium  text-[5rem] whitespace-nowrap leading-normal ">
                Visual designer
              </h3>

              <h3 className="fonts  text-[5.0625rem] whitespace-nowrap  font-medium leading-normal">
                Product Designer.
              </h3>
              <h3
                style={{ fontFamily: "Allita" }}
                className="text-[5.5rem] font-medium leading-normal "
              >
                illustrator.
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
