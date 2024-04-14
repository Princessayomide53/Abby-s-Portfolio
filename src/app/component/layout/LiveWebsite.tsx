import React from "react";
import Image from "next/image";
import live1 from "../../../../public/Assets/live1.png";
import live2 from "../../../../public/Assets/live2.png";
import live3 from "../../../../public/Assets/live3.png";

const LiveWebsite = () => {
  return (
    <section className="bg-[#FFF4EF] h-[39.5rem]">
      <div className="max-w-[83rem] mx-auto py-[6rem]">
        <h3 className="text-center text-[#5933A7] uppercase text-[2rem] font-semibold tracking-[1rem] leading-normal">
          Live Websites
        </h3>
        <div className="flex justify-around pt-[5.7rem]">
          <div>
            <Image
              src={live1}
              alt="live website"
              className="w-[21.83881rem] h-[12.70075rem]"
              priority
            />
            <p className="text-[#5933A7] text-[1.5rem] font-semibold leading-normal text-center pt-5">
              EPPCHECK
            </p>
          </div>
          <div>
            <Image
              src={live2}
              alt="live website"
              className="w-[21.83881rem] h-[12.70075rem]"
              priority
            />{" "}
            <p className="text-[#5933A7] text-[1.5rem] font-semibold leading-normal text-center pt-5">
              SASK LOTTERIES
            </p>
          </div>
          <div>
            <Image
              src={live3}
              alt="live website"
              className="w-[21.83881rem] h-[12.70075rem]"
              priority
            />
            <p className="text-[#5933A7] text-[1.5rem] font-semibold leading-normal text-center pt-5">
              VANTAGE AG
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveWebsite;
