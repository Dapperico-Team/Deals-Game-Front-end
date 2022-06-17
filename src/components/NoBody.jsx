import React from "react";
import poly from "../asset/noBodyPolygon.svg";
import Image from "../asset/about.png";

const AboutUs = () => {
  return (
    <section className="container mx-auto ">
      <h2 className="mt-[145px] text-center text-[40px] leading-[48px]   font-serif font-extrabold text-accent  ">
        About Us
      </h2>
      <div className="flex flex-col items-center xl:flex-row ">
        <div className="relative left-0 w-1/2">
          <img
            src={poly}
            alt="polygon"
            className=" hidden right-0 xl:flex  lg:-mt-16 w-[499.58px] h-[555.4px]"
          />
          <img
            src={Image}
            alt="about"
            className=" xl:absolute lg:top-[100px] lg:left-[138px] mt-6 "
          />
        </div>

        <div className="lg:w-[535.15px] lg:h-[196px] ">
          <p className=" ml-2 p-8  text-left xl:-ml-12  font-sans font-normal lg:text-[24px] lg:leading-[28.44px] text-primary   ">
            Deals game gives lottery lovers a chance to win a portion from Deals
            game pool.
            <br /> It is based on a smart contract and blockchain
            <br />
            technology. Each game has many lucky winners. You can be one of
            them. It's easy, <br /> Just connect your wallet and participate in
            the lottery with BUSD or BNB.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
