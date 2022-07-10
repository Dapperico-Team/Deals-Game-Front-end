import React, { useEffect, useLayoutEffect, useState } from "react";
import Slider from "react-slick";
import Right from "../asset/ArrowRight.svg";
import Left from "../asset/ArrowLeft.svg";
import Buy from "./button/Buy";
import Down from "../asset/ArrowDown";
import one from "../asset/1.png";
import two from "../asset/2.png";
import three from "../asset/3.png";
import four from "../asset/4.png";
import five from "../asset/5.png";
import six from "../asset/6.png";
import "./tabs.css";
import { ethers } from "ethers";
import { Disclosure, Transition } from "@headlessui/react";
import { useContractRead } from "wagmi";
import { contractABI, contractAddress } from "../contract";

function useWindowSize() {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return size;
}

const Tabs = ({ color }) => {
  const [openTab, setOpenTab] = React.useState(1);
  const [allLottaries, setAllLottaries] = useState([]);
  const [width, height] = useWindowSize();

  // const { data, isError, isLoading, error } = useContractRead({
  //   addressOrName: contractAddress,
  //   contractInterface: contractABI,
  //   functionName: "Lotteries",
  //   args: ID?.toString() - 1,
  // });

  const getAllLottaries = async () => {
    const res = await fetch("http://165.227.44.103:2000/api/allLottaries");
    const data = await res.json();
    return data;
  };

  useEffect(() => {
    getAllLottaries()
      .then((data) => {
        setAllLottaries(data?.lottariesData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function SampleNextArrow(props) {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <img src={Right} alt="arrow_left" />
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { className, onClick } = props;
    return (
      <div
        className={className}
        // style={{ display: "flex", margin: 0, padding: 0 }}
        onClick={onClick}
      >
        <img src={Left} alt="arrow_right" />
      </div>
    );
  }

  console.log(ethers.utils.formatEther(500000000000000));

  const settings =
    width < 768
      ? {
          infinite: true,
          arrows: false,
          dots: false,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
          // nextArrow: <SampleNextArrow style={{ backGround: "green" }} />,
          // prevArrow: <SamplePrevArrow />,
        }
      : {
          infinite: true,
          arrows: true,
          dots: false,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
          nextArrow: <SampleNextArrow style={{ backGround: "green" }} />,
          prevArrow: <SamplePrevArrow />,
        };

  return (
    <>
      <div className="flex flex-col items-center justify-center mt-[34px]">
        <div className=" bg-finish p-[8px] rounded-[17px]">
          <ul
            className="flex flex-row pt-3 pb-4 mb-0 list-none "
            role="tablist"
          >
            <li className="mr-2 font-serif text-center ">
              <a
                className={
                  openTab === 1
                    ? "btn-cu font-serif p-3 md:py-[14px] md:px-[30px]  break-all text-primary  border-secondary"
                    : "btn md:py-[14px] p-3 md:px-[30px]   text-white break-all "
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                All History
              </a>
            </li>
            <li className="mr-2 font-serif text-center ">
              <a
                className={
                  openTab === 2
                    ? "btn-cu p-3 md:py-[14px] md:px-[30px]   font-serif text-primary  border-secondary"
                    : "btn  p-3 text-white  md:py-[14px] md:px-[30px] "
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                Your History
              </a>
            </li>
          </ul>
        </div>

        <div
          className={
            openTab === 1 ? "flex items-center justify-center" : "hidden"
          }
          id="link1"
        ></div>
        <div
          className={
            openTab === 2 ? "flex items-center justify-center" : "hidden"
          }
          id="link2"
        >
          <div className="mt-[32px] max-w-[1036.69px]   ">
            <Slider {...settings}>
              {[
                {
                  _id: "62c99b03805d95f64cc3523e",
                  lottaryId: 0,
                  __v: 0,
                  eachGroupWin: [
                    10000000000000, 15000000000000, 25000000000000,
                    50000000000000, 100000000000000, 200000000000000,
                  ],
                  endTime: 1657379436,
                  paymentMethod: 0,
                  players: ["0x6e2fa26ec7AD0EE7143678035dDF5ec951c36279"],
                  totalCollectedValue: 500000000000000,
                  winCode: "808687",
                },
                {
                  _id: "62caad7d805d95f64cc38c3e",
                  lottaryId: 1,
                  __v: 0,
                  eachGroupWin: [
                    298340955.72, 447511433.58, 745852389.3, 1491704778.6,
                    2983409557.2, 5966819114.4,
                  ],
                  endTime: 1657449754,
                  paymentMethod: 0,
                  players: ["0x6e2fa26ec7AD0EE7143678035dDF5ec951c36279"],
                  totalCollectedValue: 14917047786,
                  winCode: "301181",
                },
              ]?.map((lottary, index) => (
                <div className="card-border rounded-[51px] max-w-[834px]  mx-auto  ">
                  <div className="bg-white mx-auto pl-6  rounded-[51px] z-50">
                    <div className="flex flex-col items-center justify-center gap-4 pt-[41px] pb-[23.17px] pl-[37.7px] pr-[30px] whitespace-nowrap">
                      <h3 className="font-serif text-[24px] leading-[29px] text-[#2C2C2C]">
                        Round{" "}
                        <span className=" bg-[#9e00911a] border-[.8px] border-[#9e0091] rounded-[9.25842px] py-[6.15px] px-[7.65px] fonet-serif text-[24px] leading-[29px] text-[#9E0091]   ">
                          {lottary?.lottaryId}
                        </span>
                      </h3>

                      <div>
                        <h4 className="font-serif text-[16px] xl:text-[20px] font-normal leading-[29px] text-[#A2A2A2] ">
                          Drawn{" "}
                          {new Date(lottary.endTime * 1000)
                            .toString()
                            .substring(0, 21)}
                        </h4>
                      </div>
                      <h3 className="font-serif text-[24px]  leading-[29px] text-[#2C2C2C]">
                        Wining Numbers
                      </h3>
                    </div>
                    <div className="flex flex-col items-center justify-center mx-auto text-center sm:gap-4 md:flex-row max-w-690">
                      <div className="relative flex items-center justify-center ">
                        <img src={one} alt="" className="relative" />
                        <div className="absolute top-6 left-9 font-serif text-[#2C2C2C] text-[30px]">
                          {/* {wincode && wincode?.substring(0, 1)} */}
                          {lottary && lottary?.winCode?.substring(0, 1)}
                        </div>
                      </div>
                      <div className="relative flex items-center justify-center ">
                        <img src={two} alt="" className="relative" />
                        <div className="absolute top-6 left-9 font-serif text-[#2C2C2C] text-[30px]">
                          {lottary && lottary?.winCode?.substring(1, 2)}
                        </div>
                      </div>

                      <div className="relative ">
                        <img src={three} alt="" className="relative" />
                        <div className="absolute top-6 left-9 font-serif text-[#2C2C2C] text-[30px]">
                          {lottary && lottary?.winCode?.substring(2, 3)}
                        </div>
                      </div>
                      <div className="relative ">
                        <img src={four} alt="" className="relative" />
                        <div className="absolute top-6 left-9 font-serif text-[#2C2C2C] text-[30px]">
                          {lottary && lottary?.winCode?.substring(3, 4)}
                        </div>
                      </div>
                      <div className="relative ">
                        <img src={five} alt="" className="relative" />
                        <div className="absolute top-6 left-9 font-serif text-[#2C2C2C] text-[30px]">
                          {lottary && lottary?.winCode?.substring(4, 5)}
                        </div>
                      </div>
                      <div className="relative ">
                        <img src={six} alt="" className="relative" />
                        <div className="absolute top-6 left-9 font-serif text-[#2C2C2C] text-[30px]">
                          {lottary && lottary?.winCode?.substring(5, 6)}
                        </div>
                      </div>
                    </div>

                    {/* <div className="mb-3 rounded-b-xl">
                          <div className="flex flex-col items-center text-center pb-[35px]  pt-[38px] ">
                            <Buy />
                          </div>
                        </div> */}
                    <div className=" z-50  cursor-pointer rounded-b-[51px] hover:rounded-b-[51px]  ">
                      <Disclosure>
                        {({ open }) => (
                          <>
                            <div className=" w-full border-t-2  border-[#e8e8e833] border-solid   "></div>
                            <Transition
                              enter="transition duration-500 ease-out"
                              enterFrom="transform scale-95 opacity-0"
                              enterTo="transform scale-100 opacity-100"
                              leave="transition duration-500 ease-out"
                              leaveFrom="transform scale-100 opacity-100"
                              leaveTo="transform scale-95 opacity-0"
                            >
                              <Disclosure.Panel className="pt-4 pb-2 text-sm text-gray-500 bg-transparent ">
                                <div className="flex flex-col flex-wrap items-center justify-around p-1 md:flex-row ">
                                  <div className="flex items-center">
                                    <div className="font-serif text-[24px]  leading-[29px] text-[#2C2C2C]">
                                      Prize Pot
                                    </div>
                                    <div>
                                      <p className="custom-color ml-3 text-[32px]">
                                        {lottary && lottary?.paymentMethod == 0
                                          ? "~BNB " +
                                            ethers.utils.formatEther(
                                              lottary?.totalCollectedValue
                                            )
                                          : "~$ " +
                                            lottary?.totalCollectedValue}
                                      </p>
                                    </div>
                                  </div>
                                  <div className="text-[#D1D1D1] text-[18px] leading-[21px] font-normal">
                                    Total players this round:{" "}
                                    <span className=" custom-color text-[18px] leading-[21px] font-medium">
                                      {lottary?.players.length}
                                    </span>
                                  </div>
                                </div>
                                <div className="flex flex-wrap items-start justify-start gap-10 p-6 ">
                                  {lottary &&
                                    lottary?.eachGroupWin?.map(
                                      (group, index) => (
                                        <div>
                                          <h5 className="text-[#D1D1D1] text-[18px] leading-[21px] font-normal">
                                            Match First {index + 1}
                                          </h5>
                                          <p className=" mt-[16px] custom-color  text-[18px] leading-[21px] font-medium">
                                            {lottary?.paymentMethod == 0
                                              ? "~BNB " +
                                                ethers.utils.formatEther(
                                                  group && Math.round(group - 1)
                                                )
                                              : "~$ " + group}
                                          </p>
                                        </div>
                                      )
                                    )}

                                  {/* <div>
                                    <h5 className="text-[#FF7A7A] text-[18px] leading-[21px] font-normal">
                                      Burn
                                    </h5>
                                    <p className=" mt-[16px] text-card text-[18px] leading-[21px] font-medium">
                                      {lottary?.paymentMethod == 0
                                        ? "~BNB " +
                                          ethers.utils.formatEther(group)
                                        : "~$ " + group}
                                    </p>
                                  </div> */}
                                </div>
                              </Disclosure.Panel>
                            </Transition>
                            <Disclosure.Button className="flex  rounded-b-[51px] bg-title items-center justify-center pt-[23px] pb-[25px] w-full h-full text-sm font-medium text-center hover:rounded-b-[51px] item-center hover:bg-gray-200  ">
                              <span className="text-[22px] text-card">
                                Details
                              </span>

                              <Down open={open} />
                            </Disclosure.Button>
                          </>
                        )}
                      </Disclosure>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tabs;
