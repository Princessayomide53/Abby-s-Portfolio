import React from "react";
import Image from "next/image";
import arts from "../../../../public/Assets/arts.png";

const About = () => {
  return (
    <section className="h-[52rem] bg-[rgb(233,211,202)]">
      <div className="max-w-[83rem] flex justify-between">
        <Image
          src={arts}
          alt="illustration"
          className="w-[39.875rem] h-[39.875rem] mt-[4rem]"
          //   width={85}
          //   height={20}
          priority
        />

        <div className="pt-[7rem] pb-[3.5rem]">
          <h2 className="text-[#4F1E4B] text-[2rem] pb-[1rem] font-semibold tracking-[1rem] leading-normal">
            ABOUT ME
          </h2>
          <p className="text-[#43055F] text-[1.5rem] font-medium leading-normal text-justify">
            As a visual designer and illustrator, I am committed to crafting
            designs that are not only beautiful, but also purposeful and
            impactful. I believe that design has the power to make a difference,
            and I am dedicated to using my talents to create work that inspires
            and uplifts.
            <br />
            <br />
            My design philosophy is rooted in the belief that great design
            should be both functional and visually appealing, with a focus on
            simplicity and emotional impact.
            <br />
            <br />
            With over 7 years of experience in the industry, I have honed my
            skills in visual storytelling and developed a keen eye for finding
            inspiration in the everyday. I approach each project with a curious
            and creative mindset, always looking for new ways to connect with
            audiences through my work.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
