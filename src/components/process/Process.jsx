import React from "react";
import "./process.css";
import Win from "../../asset/winning criteria.png";

const Process = () => {
  return (
    <>
      <div className="w-full h-full mx-auto mt-20 back">
        <section>
          <div class="container space-y-10 flex flex-col items-center mx-auto px-6 pt-24 pb-32 lg:flex-row ">
            <div class="flex flex-col items-start md:w-1/2">
              <div class="flex flex-col space-y-5">
                <h2 class=" m-0 p-0 text-left text-[40px] leading-[48px]   font-serif font-extrabold text-accent">
                  We illustrate this process with a simple example:
                </h2>
                <p class="text-[22px] leading-[26px] font-sans font-normal">
                  <span className="text-[#FFEE00] ">Ticket A:</span> The first
                  three digits match, but the 4th digit is wrong, so this ticket
                  only wins "Matches First 3" prize*.
                </p>

                <p class="text-[22px] leading-[26px] font-sans font-normal">
                  <span className="text-[#FFEE00] ">Ticket B: </span> All last 5
                  digits match, but the first digit is incorrect, so this ticket
                  does not win a prize.
                </p>
                <p class="text-[22px] leading-[26px] font-sans font-normal ">
                  <span className="text-[#FFEE00]"> *</span> If you match the
                  First 3 numbers you will win from the “Matches First 3” prize
                  pool and not “Matches First 2” and “Matches First” prize
                  pools.
                </p>
              </div>
            </div>
            <div class="md:w-1/2">
              <img src={Win} alt="" class="mb-10" />
            </div>
          </div>
        </section>
      </div>{" "}
    </>
  );
};

export default Process;
