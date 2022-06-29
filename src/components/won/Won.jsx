import React from "react";
import "./won.css";
import walllet from "../../asset/wallet.png";
import Button from "../button/Connect";

const Won = () => {
  return (
    <section className="mx-auto hidden lg:block  max-w-[1440px]  mt-72">
      <div className="flex items-center justify-center w-full ">
        <div className="relative w-2/3 h-[161.84px] shape  ">
          <img
            src={walllet}
            alt=""
            className="absolute flex -left-[282px] -top-[176px] "
          />
          <div className="flex items-center justify-center mt-[46.91px]">
            <h2 className="  font-serif text-left  text-[30px] leading-[36px] ml-[100px] ">
              Connect your wallet
              <br /> to check if you've won!
            </h2>
            <div className="ml-[51px]">
              <Button />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Won;
