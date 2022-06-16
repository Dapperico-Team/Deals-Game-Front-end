import React from "react";
import HeroImage from "../asset/Hero.png";
import "./hero.css";
import Buy from "./button/Buy";

const Hero = () => {
  return (
    <section className="container mx-auto" id="hero ">
      {/* Container For Image & Content  */}
      <div class=" relative lg:h-[681px]  rounded-3xl image flex flex-col-reverse mx-[42px] mt-[35px] lg:flex-row ">
        {/* Content  */}
        <div class=" flex flex-col pt-[228px] pl-[59px] space-y-[85px] lg:w-1/2  ">
          <h1 class="text-[50px] leading-[60px]   font-serif font-extrabold  ">
            Buy Tickets
            <br /> Wait For The Draw
            <br /> Win The Prizes
          </h1>

          <div class="flex items-center justify-center w-full space-x-4 lg:justify-start">
            <Buy />
          </div>
        </div>

        {/* Image */}
        {/* <div class="absolute lg:w-[805.26px] lg:h-[610.43px] lg:left-[606px] lg:top-[61px]">
       
          <img src={HeroImage} alt="" class=" mix-blend-lighten  " />
        </div> */}
      </div>
    </section>
  );
};

export default Hero;
