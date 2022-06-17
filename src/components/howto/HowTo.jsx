import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import "./howto.css";

const HowTo = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <div className="container py-16 mx-auto element sm:py-24 lg:py-32">
      <div className="max-w-md px-4 mx-auto text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="font-serif text-[40px] leading-[48px] font-extrabold  text-primary sm:text-4xl">
          How to participate in the Lottery
        </h2>
        <p className=" mx-auto mt-[28px] text-[30px] text-[#828991] leading-[35.55px] font-normal ">
          The lottery mechanism is based on a smart contract.
        </p>
        <div className="mt-[135.42px]">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 xl:grid-cols-3 ">
            <div className="flow-root mb-10 min-h-[435.88px] max-w-[400.3px] px-6 pb-8 rounded-lg white-grad glass">
              <div className="-mt-14">
                <div>
                  <span
                    className={
                      theme === "dark"
                        ? "num-dark   font-serif text-primary text-[60px] leading-[72px] z-50 w-[120px] h-[120px]  inline-flex items-center justify-center p-3 rounded-full shadow-lg "
                        : "num-light  num-light font-serif text-primary text-[60px] leading-[72px] z-50 w-[120px] h-[120px]  inline-flex items-center justify-center p-3 rounded-full shadow-lg "
                    }
                  >
                    1
                  </span>
                </div>
                <h3
                  className={
                    theme === "dark"
                      ? "font-serif font-normal text-[24px] title mt-[40px]"
                      : "font-serif font-normal text-[24px] text-[#9E0091] mt-[40px]"
                  }
                >
                  Buy Tickets
                </h3>
                <p className="mt-[39px] font-sans mx-auto  text-[22px] text-center leading-[26px] font-normal text-primary">
                  Connect your wallet easily! Choose your favorite campaign to
                  participate from the list of available campaigns*. Get a
                  ticket and try your luck at winning**. After the purchase, you
                  will receive your ticket number***.
                </p>
              </div>
            </div>
            <div className="flow-root mb-10 min-h-[435.88px] max-w-[400.3px] px-6 pb-8 rounded-lg white-grad glass">
              <div className="-mt-14">
                <div>
                  <span
                    className={
                      theme === "dark"
                        ? "num-dark   font-serif text-primary text-[60px] leading-[72px] z-50 w-[120px] h-[120px]  inline-flex items-center justify-center p-3 rounded-full shadow-lg "
                        : "num-light  num-light font-serif text-primary text-[60px] leading-[72px] z-50 w-[120px] h-[120px]  inline-flex items-center justify-center p-3 rounded-full shadow-lg "
                    }
                  >
                    2
                  </span>
                </div>
                <h3
                  className={
                    theme === "dark"
                      ? "font-serif font-normal text-[24px] title mt-[40px]"
                      : "font-serif font-normal text-[24px] text-[#9E0091] mt-[40px]"
                  }
                >
                  Wait for the draw
                </h3>
                <p className="mt-[39px]   font-sans mx-auto  text-[22px] text-center leading-[26px] font-normal text-primary">
                  The lottery is held at the time specified in the campaign and
                  the winning numbers will be announced on the website.
                </p>
              </div>
            </div>
            <div className="flow-root  mb-10 min-h-[435.88px] max-w-[400.3px] px-6 pb-8 rounded-lg white-grad glass">
              <div className="-mt-14">
                <div>
                  <span
                    className={
                      theme === "dark"
                        ? "num-dark   font-serif text-primary text-[60px] leading-[72px] z-50 w-[120px] h-[120px]  inline-flex items-center justify-center p-3 rounded-full shadow-lg "
                        : "num-light  num-light font-serif text-primary text-[60px] leading-[72px] z-50 w-[120px] h-[120px]  inline-flex items-center justify-center p-3 rounded-full shadow-lg "
                    }
                  >
                    3
                  </span>
                </div>
                <h3
                  className={
                    theme === "dark"
                      ? "font-serif font-normal text-[24px] title mt-[40px]"
                      : "font-serif font-normal text-[24px] text-[#9E0091] mt-[40px]"
                  }
                >
                  Win the prizes
                </h3>
                <p className="mt-[39px]  font-sans mx-auto  text-[22px] text-center leading-[26px] font-normal text-primary">
                  Check out the prizes. Go to Dealsgame.com. The winning numbers
                  will be available and visible to everyone. Each game has many
                  lucky winners and you can be one of them. Claim your winning
                  Prizes
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <p className="text-[24px] leading-[57px] font-normal p-28">
        <span className=" text-[#CB5DFF]">* </span> Depending on the campaign
        you can participate in the lottery with BUSD or BNB. <br />
        <span className=" text-[#CB5DFF]">** </span>Each person can buy up to 10
        tickets. <br />
        <span className=" text-[#CB5DFF]">*** </span>You can choose your lottery
        ticket number yourself or the system will choose one for you randomly.
      </p>
    </div>
  );
};

export default HowTo;
