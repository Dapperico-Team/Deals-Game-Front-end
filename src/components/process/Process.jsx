import React from "react";
import "./process.css";
import Win from "../../asset/winning criteria.png";

const Process = () => {
  return (
    <>
      <div className="w-full max-w-[1440px] h-full mx-auto mt-20 back">
        <section>
          <div className="container flex flex-col items-center pt-24 pb-32 mx-auto space-y-10 lg:flex-row ">
            <div className="flex flex-col items-start ">
              <div className="flex flex-col space-y-5 xl:ml-[97px] max-w-[644px]">
                <h2 className=" m-0 p-0 text-white text-center xl:text-left text-[40px] leading-[48px]   font-serif font-extrabold text-accent">
                  We illustrate this process with a simple example:
                </h2>
                <p className=" text-center xl:text-left text-[22px] text-white leading-[26px] font-sans font-normal">
                  <span className="text-[#FFEE00] ">Ticket A:</span> The first
                  three digits match, but the 4th digit is wrong, so this ticket
                  only wins "Matches First 3" prize{" "}
                  <span className="text-[#FFEE00]">*</span>.
                </p>

                <p className="text-center xl:text-left text-[22px] text-white leading-[26px] font-sans font-normal">
                  <span className="text-[#FFEE00] ">Ticket B: </span> All last 5
                  digits match, but the first digit is incorrect, so this ticket
                  does not win a prize.
                </p>
                <p className="text-center xl:text-left text-[22px] text-white leading-[26px] font-sans font-normal ">
                  <span className="text-[#FFEE00]"> *</span> If you match the
                  First 3 numbers you will win from the “Matches First 3” prize
                  pool and not “Matches First 2” and “Matches First” prize
                  pools.
                </p>
              </div>
            </div>
            <div className="">
              <img
                src={Win}
                alt=""
                className="mb-10 p-6 xl:w-[567.27px] xl:h-[415px] xl:ml-[48.39px] "
              />
            </div>
          </div>
        </section>
      </div>{" "}
    </>
  );
};

export default Process;
