import React from "react";
// import HeroImage from "../../asset/Hero.png";
import "./hero.css";
import Buy from "../button/Buy";
import Furtune from "../../asset/hero.webm";
import Arrow from "../../asset/Arrow.svg";

const Hero = () => {
  return (
    <section className=" max-w-[1440px] mx-auto " id="hero ">
      {/* Container For Image & Content  */}
      <div className=" relative lg:h-[681px]  mx-6 rounded-xl  xl:rounded-3xl image flex flex-col-reverse md:mx-[42px]   mt-[35px] lg:flex-row ">
        {/* Content  */}
        <div className=" flex flex-col lg:items-start mx-auto  justify-center lg:mb-[128px]    lg:pt-[228px] lg:pl-[59px] xl:space-y-[85px]   ">
          <h1 className="  sm:text-[30px] lg:text-left text-center xl:text-left  xl:text-[50px] leading-[60px] text-white   font-serif font-extrabold  ">
            Buy Tickets
            <br /> Wait For The Draw
            <br /> Win The Prizes
          </h1>

          <div className="flex items-center   mt-[85px] justify-center mb-[128px] space-x-4 lg:justify-start">
            <Buy />
          </div>
        </div>
        <video
          autoPlay
          loop
          muted
          playsInline
          className="md:max-w-[550.54px] mx-auto"
        >
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
