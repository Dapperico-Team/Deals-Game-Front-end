import React from "react";
import poly from "../asset/PolygonCalculate.svg";

import Cont from "../asset/result.svg";

const Calculate = () => {
  return (
    <section id="work" className="container mx-auto ">
      <h2 className="mt-[145px] text-center p-6  xl:text-center text-[40px] leading-[48px]   font-serif font-extrabold text-accent  ">
        How the Winning is calculated:
      </h2>
      <div className="flex flex-col items-center xl:flex-row ">
        <div className="relative left-0 w-2/3">
          <img
            src={poly}
            alt="polygon"
            className="   hidden left-0 xl:flex  w-[499.58px] h-[555.4px]"
          />

          <div className="">
            <img
              src={Cont}
              alt="about"
              className="xl:absolute flex top-[36px] left-[77px]"
            />
          </div>
        </div>
        <div className="xl:w-1/3 ">
          <p className="   text-center xl:text-left  font-sans font-normal lg:text-[24px] lg:leading-[33px] text-primary   ">
            Check your ticket. <br />
            The best match on your ticket will make you a lucky winner!
            <br />
            If the digits on your ticket match the <br />
            winning numbers in the correct order, you
            <br /> will definitely win a portion of Dealsgame <br /> prize pool.
            <br />
            The smart contract goes through every <br /> ticket and calculates
            the maximum <br /> amount each ticket can win.
            <br />
            Then you can claim the winnings <br /> from all your tickets and
            withdraw <br /> them into your wallet.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Calculate;
