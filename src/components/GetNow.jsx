import React, { useContext, useEffect, useState } from "react";
import Poly from "../asset/getnow.js";
import { ethers } from "ethers";
import dashed from "../asset/dashLine.svg";
import Buy from "./button/Buy";
import Down from "../asset/ArrowDown";
import { Disclosure } from "@headlessui/react";
import { ThemeContext } from "../context/ThemeContext";
import "./getnow.css";
import { useContractRead } from "wagmi";
import { contractABI, contractAddress } from "../contract";
const GetNow = () => {
  const { theme } = useContext(ThemeContext);

  const getCurrent = async () => {
    const res = await fetch("http://165.227.44.103:2000/api/currentLottary");
    const data = await res.json();
    return data;
  };
  const [current, setCurrent] = useState(null);
  useEffect(() => {
    getCurrent()
      .then((data) => {
        setCurrent(data); // set current lottary
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const {
    data: ID,
    isError: IDerror,
    isLoading: IDloading,
  } = useContractRead({
    addressOrName: contractAddress,
    contractInterface: contractABI,
    functionName: "_ID",
  });
  const { data, isError, isLoading, error } = useContractRead({
    addressOrName: contractAddress,
    contractInterface: contractABI,
    functionName: "Lotteries",
    args: ID?.toString() - 1,
  });
  const {
    data: deals,
    isError: dealerror,
    isLoading: dealload,
  } = useContractRead({
    addressOrName: contractAddress,
    contractInterface: contractABI,
    functionName: "Get_SoldOut_Tickets",
    args: ID?.toString() - 1,
  });

  const rawstatus = data?.toString()?.split(",");
  const status = rawstatus && rawstatus[4];
  const timestamp = rawstatus && rawstatus[3];

  const date = new Date(timestamp * 1000);

  // console.log(rawstatus[5]);

  if (status == 0 || status == 1) {
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
                    {/* May 22, 2022, 03:30 PM */}
                    {date?.toString().substring(0, 21)}
                  </p>
                </div>
              </div>
              <div className="  text-card text-center leading-[48px] font-serif text-[40px] mt-[40px]">
                Prize Pot
              </div>
              <h2 className=" text-card  mt-3 font-serif text-[40px]  md:text-[80px] leading-[96px] text-center">
                {current && rawstatus && rawstatus[5] == 0
                  ? "~BNB " + ethers.utils.formatEther(current?.totalCollected)
                  : "~$ " + current?.totalCollected}
              </h2>
              <h3 className=" text-card text-[28px] mb-[20px]  text-center">
                {deals?.toString()?.split(",")?.length} &nbsp; DEALS
              </h3>

              <div className=" border-2 border-[#9B9B9B]   border-dashed "></div>

              <div className="mb-3 rounded-b-xl">
                <div className="flex flex-col items-center text-center pb-[35px]  pt-[38px] ">
                  <Buy />
                </div>
              </div>
              <div className=" z-6  cursor-pointer rounded-b-[51px] hover:rounded-b-[51px]  ">
                <Disclosure>
                  {({ open }) => (
                    <>
                      <Disclosure.Panel className="px-8 pt-4 pb-2 text-sm text-gray-500 bg-transparent">
                        <div className="flex flex-wrap items-start justify-start gap-10 p-6 ">
                          {current?.eachGroupWins?.map((item, index) => (
                            <div>
                              <h5 className="text-[#D1D1D1] text-[18px] leading-[21px] font-normal">
                                Match First {index + 1}
                              </h5>
                              <p className=" mt-[16px] text-card text-[18px] leading-[21px] font-medium">
                                {rawstatus && rawstatus[5] == 0
                                  ? "~BNB " + ethers.utils.formatEther(item)
                                  : "~$ " + item}
                              </p>
                            </div>
                          ))}
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
  } else {
    return null;
  }
};

export default GetNow;
