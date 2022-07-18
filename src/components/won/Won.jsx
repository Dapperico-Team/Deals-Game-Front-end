import React from "react";
import "./won.css";
import walllet from "../../asset/wallet.png";
import Button from "../button/Connect";

const Won = () => {
  return (
    <section className="mx-auto   max-w-[1440px]  mt-[150px]">
      <div className="flex items-center justify-center w-full ml-[8%]">
        <div className="relative flex flex-col xl:flex-row  xl:w-[1089.82px]   w-2/3 h-auto xl:h-[161.84px] shape">
          <img
            src={walllet}
            alt=""
            className="absolute hidden xl:flex   -left-[282px] -top-[176px] "
          />
          <div className="flex flex-col items-center justify-center lg:flex-row leading-[36px] ">
            <h2 className="  font-serif  lg:flex text-left  text-[30px] leading-[36px] m-6 xl:ml-[213.82px] ">
              Connect your wallet
              <br /> to check if you've won!
            </h2>
            <div className="xl:ml-[51px] m-6 lg:m-0  flex">
              <Button style={{ height: "75px" }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Won;
