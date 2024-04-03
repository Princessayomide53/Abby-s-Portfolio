"use client";
import React from "react";
import { Parallax } from "react-parallax";
import p1 from "../../../../public/Assets/p1.png";
import p2 from "../../../../public/Assets/p2.png";
import p3 from "../../../../public/Assets/p3.png";
import p4 from "../../../../public/Assets/p4.png";

const Projects: React.FC = () => {
  const backgroundImageUrl = p1.src;
  const backgroundImage = p2.src;
  const background = p3.src;
  const Image = p4.src;

  return (
    <div className="overflow-hidden bg-[#2B1851]">
      <Parallax
        strength={600}
        bgImage={backgroundImageUrl}
        // bgImageStyle={{ backgroundSize: "contain" }}
      >
        <div className="h-[32rem] w-full border-b-4 border-white">
          <div></div>
        </div>
      </Parallax>
      <Parallax
        strength={600}
        bgImage={backgroundImage}
        // bgImageStyle={{ backgroundSize: "cover" }}
      >
        <div className="h-[35rem] w-full">
          <div></div>
        </div>
      </Parallax>
      <Parallax
        strength={600}
        bgImage={background}
        // bgImageStyle={{ backgroundSize: "contain" }}
      >
        <div className="h-[38rem] w-full">
          <div></div>
        </div>
      </Parallax>
      <Parallax
        strength={600}
        bgImage={Image}
        bgImageStyle={{ backgroundSize: "contain" }}
      >
        <div className="h-[32rem] w-full">
          <div></div>
        </div>
      </Parallax>
    </div>
  );
};

export default Projects;
