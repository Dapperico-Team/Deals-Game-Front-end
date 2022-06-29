import React, { useContext } from "react";
import Poly from "../asset/getnow.js";

import dashed from "../asset/dashLine.svg";
import Buy from "./button/Buy";
import Down from "../asset/ArrowDown";
import { Disclosure } from "@headlessui/react";
import { ThemeContext } from "../context/ThemeContext";
import "./getnow.css";
const GetNow = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <section className="container mx-auto ">
      <h2 className="md:mt-[145px] mt-28 text-center text-[40px] leading-[48px]   font-serif font-extrabold text-accent  ">
        Get your tickets now!
      </h2>

      <div className="relative mx-auto flex items-center cut justify-center mt-[181px]">
        <div className="z-50 flex-col w-4/5 xl:w-1/2 first-line:flex">
          <div
            className={
              theme === "dark"
                ? "card-dark rounded-[51px] z-50"
                : "card rounded-[51px]  z-50"
            }
          >
            <div className=" rounded-t-[50px] bg-title  ">
              <div className="  flex items-center justify-between pt-[23px] pb-[25px] w-full h-full   text-center  item-center focus:outline-none ">
                <p className="text-[22px] ml-[36px] text-card">Next Draw</p>
                <p className=" mr-[43px]  text-[22px] text-card">
                  May 22, 2022, 03:30 PM
                </p>
              </div>
            </div>
            <div className="  text-card text-center leading-[48px] font-serif text-[40px] mt-[40px]">
              Prize Pot
            </div>
            <h2 className=" text-card  mt-3 font-serif text-[40px]  md:text-[80px] leading-[96px] text-center">
              ~$34,621
            </h2>
            <h3 className=" text-card text-[28px] mb-[20px]  text-center">
              23,765 &nbsp; DEALS
            </h3>

            <div className=" border-2 border-[#9B9B9B]   border-dashed "></div>

            <div className="mb-3 rounded-b-xl">
              <div className="flex flex-col items-center text-center pb-[35px]  pt-[38px] ">
                <Buy />
              </div>
            </div>
            <div className=" z-50  cursor-pointer rounded-b-[51px] hover:rounded-b-[51px]  ">
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Panel className="px-8 pt-4 pb-2 text-sm text-gray-500 bg-transparent">
                      <div className="flex flex-wrap items-start justify-start gap-10 p-6 ">
                        <div>
                          <h5 className="text-[#D1D1D1] text-[18px] leading-[21px] font-normal">
                            Match First 1
                          </h5>
                          <p className=" mt-[16px] text-card text-[18px] leading-[21px] font-medium">
                            23,765 DEALS
                          </p>
                          <p className="mt-[8px] text-card text-[14px] leading-[17px] font-normal">
                            ~$1,430
                          </p>
                        </div>
                        <div>
                          <h5 className="text-[#D1D1D1] text-[18px] leading-[21px] font-normal">
                            Match First 1
                          </h5>
                          <p className=" mt-[16px] text-card text-[18px] leading-[21px] font-medium">
                            23,765 DEALS
                          </p>
                          <p className="mt-[8px] text-card text-[14px] leading-[17px] font-normal">
                            ~$1,430
                          </p>
                        </div>
                        <div>
                          <h5 className="text-[#D1D1D1] text-[18px] leading-[21px] font-normal">
                            Match First 1
                          </h5>
                          <p className=" mt-[16px] text-card text-[18px] leading-[21px] font-medium">
                            23,765 DEALS
                          </p>
                          <p className="mt-[8px] text-card text-[14px] leading-[17px] font-normal">
                            ~$1,430
                          </p>
                        </div>
                        <div>
                          <h5 className="text-[#D1D1D1] text-[18px] leading-[21px] font-normal">
                            Match First 1
                          </h5>
                          <p className=" mt-[16px] text-card text-[18px] leading-[21px] font-medium">
                            23,765 DEALS
                          </p>
                          <p className="mt-[8px] text-card text-[14px] leading-[17px] font-normal">
                            ~$1,430
                          </p>
                        </div>
                        <div>
                          <h5 className="text-[#D1D1D1] text-[18px] leading-[21px] font-normal">
                            Match First 1
                          </h5>
                          <p className=" mt-[16px] text-card text-[18px] leading-[21px] font-medium">
                            23,765 DEALS
                          </p>
                          <p className="mt-[8px] text-card text-[14px] leading-[17px] font-normal">
                            ~$1,430
                          </p>
                        </div>
                        <div>
                          <h5 className="text-[#D1D1D1] text-[18px] leading-[21px] font-normal">
                            Match First 1
                          </h5>
                          <p className=" mt-[16px] text-card text-[18px] leading-[21px] font-medium">
                            23,765 DEALS
                          </p>
                          <p className="mt-[8px] text-card text-[14px] leading-[17px] font-normal">
                            ~$1,430
                          </p>
                        </div>
                        <div>
                          <h5 className="text-[#FF7A7A] text-[18px] leading-[21px] font-normal">
                            Burn
                          </h5>
                          <p className=" mt-[16px] text-card text-[18px] leading-[21px] font-medium">
                            23,765 DEALS
                          </p>
                          <p className="mt-[8px] text-card text-[14px] leading-[17px] font-normal">
                            ~$1,430
                          </p>
                        </div>
                      </div>
                    </Disclosure.Panel>
                    <Disclosure.Button className="flex  rounded-b-[51px] bg-title items-center justify-center pt-[23px] pb-[25px] w-full h-full text-sm font-medium text-center hover:rounded-b-[51px] item-center hover:bg-gray-200  ">
                      <span className="text-[22px] text-card">Details</span>

                      <Down theme={theme} open={open} />
                    </Disclosure.Button>
                  </>
                )}
              </Disclosure>
            </div>
          </div>
          {/* <div className="absolute  top-[304px] bg-primary rounded-full  -left-[40px] z-[9999999] w-[86px] h-[93.96px]"></div> */}

          <div className="bg-shape hidden xl:block  rounded-b-[51px] absolute -bottom-[35px] left-[398px]   z-[-1]  w-[647.9px] h-[180.17px]   p-1"></div>
        </div>
        <div className=" hidden xl:block   absolute -top-[89px]  left-[646px] ">
          {/* <div className="absolute  top-[304px] bg-primary z-[1]  mix-blend-normal  right-[0px]  w-[43px] h-[93.96px] rounded-bl-full rounded-tl-full "></div> */}
          <Poly theme={theme} />
        </div>

        <img
          src={dashed}
          alt="about"
          className=" absolute left-0 z-1 -top-[27px]"
        />
      </div>
    </section>
  );
};

export default GetNow;
