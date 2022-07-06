import React from "react";
// import HeroImage from "../../asset/Hero.png";
import "./hero.css";
import Buy from "../button/Buy";
import Furtune from "../../asset/hero.webm";
import Arrow from "../../asset/Arrow.svg";

const Hero = () => {
  return (
    <section className="container mx-auto" id="hero ">
      {/* Container For Image & Content  */}
      <div className=" relative lg:h-[681px] mx-auto rounded-xl  xl:rounded-3xl image flex flex-col-reverse xl:mx-[42px] mt-[35px] lg:flex-row ">
        {/* Content  */}
        <div className=" flex flex-col p-6 xl:pt-[228px] xl:pl-[59px] xl:space-y-[85px] lg:w-1/2  ">
          <h1 className=" text-[40px] mb-6 text-center xl:text-left  xl:text-[50px] leading-[60px] text-white   font-serif font-extrabold  ">
            Buy Tickets
            <br /> Wait For The Draw
            <br /> Win The Prizes
          </h1>

          <div className="flex items-center justify-center w-full mb-6 space-x-4 x lg:justify-start">
            <Buy />
          </div>
        </div>
        <video autoPlay loop muted playsInline>
          <source src={Furtune} type="video/webm" />
        </video>
        <img
          src={Arrow}
          className="absolute animate-bounce   -bottom-[30px] left-[45%]  "
          alt=""
        />
      </div>
    </section>
  );
};

export default Hero;
