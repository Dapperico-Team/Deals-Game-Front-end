import React from "react";
import Countdown, { zeroPad } from "react-countdown";
import Circle from "../Circle";
import "./count.css";

const CountDown = () => {
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return "finish";
    } else {
      // Render a countdown
      return (
        <div className="flex items-center space-x-[24.88px]  mt-16 ">
          <div className="flex flex-col items-center ">
            <div className="font-sans font-medium text-[#2c2c2c99] dark:text-[#ffffff99] text-[30px] -mb-7 ">
              Day
            </div>
            <div className="rounded-[34.825px] w-[124.38px] h-[124.38px] mx-auto  mt-10 bg-gradient-to-b p-[2.49px] from-[#2c2c2c]  dark:from-white dark:to-[#2c2c2c]  to-white  ">
              <div className="flex flex-col justify-center items-center h-full p-4 text-white bg-primary rounded-[34.825px] ">
                <div className="font-serif font-normal text-[44.77px] leading-[44.77px] text-primary ">
                  {zeroPad(days)}
                </div>
              </div>
            </div>
          </div>

          <Circle />

          <div className="flex flex-col items-center">
            <div className="font-sans font-medium text-[#2c2c2c99] dark:text-[#ffffff99] text-[30px] -mb-7 ">
              Hours
            </div>
            <div className="rounded-[34.825px] w-[124.38px] h-[124.38px] mx-auto  mt-10 bg-gradient-to-b p-[2.49px] from-[#2c2c2c]  to-white  dark:from-white dark:to-[#2c2c2c] ">
              <div className="flex flex-col justify-center items-center h-full p-4 text-white bg-primary rounded-[34.825px] ">
                <div className="font-serif font-normal text-[44.77px] leading-[44.77px] text-primary ">
                  {zeroPad(hours)}
                </div>
              </div>
            </div>
          </div>
          <Circle />
          <div className="flex flex-col items-center ">
            <div className="font-sans font-medium text-[#2c2c2c99] dark:text-[#ffffff99] text-[30px] -mb-7 ">
              Min
            </div>
            <div className="rounded-[34.825px] w-[124.38px] h-[124.38px] mx-auto  mt-10 bg-gradient-to-b p-[2.49px] from-[#2c2c2c]  to-white  dark:from-white dark:to-[#2c2c2c] ">
              <div className="flex flex-col justify-center items-center h-full p-4 text-white bg-primary rounded-[34.825px] ">
                <div className="font-serif font-normal text-[44.77px] leading-[44.77px] text-primary ">
                  {zeroPad(minutes)}
                </div>
              </div>
            </div>
          </div>
          <Circle />
          <div className="flex flex-col items-center ">
            <div className="font-sans font-medium text-[#2c2c2c99] dark:text-[#ffffff99] text-[30px] -mb-7 ">
              Sec
            </div>
            <div className="rounded-[34.825px] w-[124.38px] h-[124.38px] mx-auto  mt-10 bg-gradient-to-b p-[2.49px] from-[#2c2c2c] dark:from-white dark:to-[#2c2c2c] to-white">
              <div className="flex flex-col justify-center items-center h-full p-4 text-white bg-primary rounded-[34.825px] ">
                <div className="font-serif font-normal text-[44.77px] leading-[44.77px] text-primary ">
                  {zeroPad(seconds)}
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  };
  return (
    <section className="container mx-auto ">
      <div className="flex flex-col items-center justify-center">
        <Countdown date={"2022-06-19T01:02:03"} renderer={renderer} />
        <p className="font-mono text-[50px] mt-[23.49px]"> until the draw</p>
      </div>
    </section>
  );
};

export default CountDown;
