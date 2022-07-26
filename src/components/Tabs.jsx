import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
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
import { useWaitForTransaction, useContractWrite, useAccount } from "wagmi";
import { contractABI, contractAddress } from "../contract";
import { DateTime } from "luxon";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

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
  const { address } = useAccount();
  const [openTab, setOpenTab] = React.useState(2);
  const [userTickets, setUserTickets] = useState([]);

  const slider = useRef(null);
  const [allLottaries, setAllLottaries] = useState([]);

  const [cliamResult, setCliamResult] = useState(null);
  const [width, height] = useWindowSize();

  const [isClosed, setIsClosed] = useState(false);

  // const { data, isError, isLoading, error } = useContractRead({
  //   addressOrName: contractAddress,
  //   contractInterface: contractABI,
  //   functionName: "Lotteries",
  //   args: ID?.toString() - 1,
  // });

  const postClaim = async (lotteryID) => {
    const settings = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        lottaryId: lotteryID,
        userAddress: address,
      }),
    };
    try {
      const fetchResponse = await fetch(
        `http://165.227.44.103:2000/api/claim_reward`,
        settings
      );
      const data = await fetchResponse.json();

      write({
        args: [
          data?.message?.toString(),
          data?.signedMessage,
          lotteryID,
          data?.paymentMethod,
        ],
      });
    } catch (e) {
      console.log(e);
    }
  };

  const {
    data: cliamData,
    isError: cliamError,
    isLoading: cliamLoading,
    error: text,
    write,
  } = useContractWrite({
    addressOrName: contractAddress,
    contractInterface: contractABI,
    functionName: "Claim_Reward",

    onSuccess(data) {
      console.log("Success", data);
    },
  });

  const { data, isError, isLoading } = useWaitForTransaction({
    hash: cliamData?.hash,
  });

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

  const getUserTickets = async () => {
    const settings = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userAddress: address,
      }),
    };
    try {
      const fetchResponse = await fetch(
        `http://165.227.44.103:2000/api/userTickets`,
        settings
      );
      const data = await fetchResponse.json();

      return data;
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getUserTickets()
      .then((data) => {
        setUserTickets(data.ticketsList); // set current lottary
      })
      .catch((err) => {
        console.log(err);
      });
  }, [address]);

  let result =
    userTickets.length > 0 &&
    userTickets?.reduce(function (r, a) {
      r[a.lottaryId] = r[a.lottaryId] || [];
      r[a.lottaryId].push(a);
      return r;
    }, Object.create(null));

  const settings =
    width < 768
      ? {
          infinite: false,
          arrows: false,
          dots: false,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      : {
          infinite: false,
          arrows: true,
          dots: false,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
          nextArrow: <SampleNextArrow style={{ backGround: "green" }} />,
          prevArrow: <SamplePrevArrow />,
        };
  const getCurrent = async () => {
    const res = await fetch("http://165.227.44.103:2000/api/allLottaries");
    const data = await res.json();
    return data;
  };
  const [allLoterries, setAllLoterries] = useState(null);

  // console.log({ allLoterries });
  useEffect(() => {
    getCurrent()
      .then((data) => {
        setAllLoterries(data?.lottariesData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log(allLoterries, "alllllllllllll");
  console.log("8" - "6");

  return (
    <>
      <div className=" mt-[34px] text-center">
        <div className=" bg-finish  inline-flex  p-[8px] rounded-[17px]">
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

        <div className={openTab === 1 ? "inline-block " : "hidden"} id="link1">
          <div className="mt-[32px] text-center lg:inline-block   max-w-[1036.69px]   ">
            <Swiper modules={[Navigation]} navigation>
              {Object.values(result)?.map((lottary, index) => (
                <SwiperSlide key={Date.now()}>
                  <div className="card-border max-w-[856px]  rounded-[51px]    mx-auto  ">
                    <div className="bg-white  rounded-[51px] z-50">
                      <div className="flex flex-col items-center justify-center gap-4 pt-[41px] pb-[23.17px] pl-[37.7px] pr-[30px] whitespace-nowrap">
                        <h3 className="font-serif text-[24px] leading-[29px] text-[#2C2C2C]">
                          Round{" "}
                          <span className=" bg-[#9e00911a] border-[.8px] border-[#9e0091] rounded-[9.25842px] py-[6.15px] px-[7.65px] fonet-serif text-[24px] leading-[29px] text-[#9E0091]   ">
                            {lottary[0]?.lottaryId}
                          </span>
                        </h3>
                        <div>
                          <h4 className="font-serif text-[16px] xl:text-[20px] font-normal leading-[29px] text-[#A2A2A2] ">
                            Drawn{" "}
                            {DateTime.fromJSDate(
                              new Date(lottary.endTime * 1000)
                            )
                              .toFormat("fffMMM dd, yyyy, hh:mm a")
                              .substring(30)}
                          </h4>
                        </div>
                      </div>
                      <div className="flex flex-col items-start  ml-[90px]">
                        <div>
                          {" "}
                          <h3 className="font-serif text-[20px]  leading-[24px] text-[#2C2C2C]">
                            number of Tickets: <span>{lottary?.length}</span>
                          </h3>{" "}
                        </div>
                        <div>
                          {" "}
                          <h3 className="font-serif text-[20px]  leading-[24px] mt-[32px] text-[#2C2C2C]">
                            Rewarded:{" "}
                            <span>
                              {" "}
                              {lottary.reduce((sum, b) => sum + b.winAmount, 0)}
                            </span>
                          </h3>{" "}
                        </div>
                      </div>
                      <div className="mb-3 rounded-b-xl">
                        <div className="flex flex-col items-center text-center pb-[35px]  pt-[38px] ">
                          {lottary.reduce((sum, b) => sum + b.winAmount, 0) &&
                          lottary[0]?.isPaid === 1 ? (
                            <button
                              onClick={() => {
                                postClaim(lottary[0]?.lottaryId);
                              }}
                              className="font-sans text-body rounded-[10px] font-normal leading-[28px] text-[24px] py-[16px] px-[34px] w-[241px] h-[60px] whitespace-nowrap bg-gradient-to-b from-[#FFE68D]  to-[#D9A913]"
                            >
                              Claim
                            </button>
                          ) : (
                            <button className="font-sans cursor-not-allowed text-body rounded-[10px] font-normal leading-[28px] text-[24px] py-[16px] px-[34px] w-[241px] h-[60px] whitespace-nowrap bg-gray-400">
                              Claim
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        <div className={openTab === 2 ? "block" : "hidden"} id="link2">
          <div className="mt-[32px] text-center lg:inline-block   max-w-[1036.69px]   ">
            {
              <Swiper modules={[Navigation]} navigation>
                {allLoterries?.map((lottary) => (
                  <>
                    <SwiperSlide key={lottary._id}>
                      <div className="card-border max-w-[856px]  rounded-[51px]    mx-auto  ">
                        <div className="bg-white  rounded-[51px] z-50">
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
                                {DateTime.fromJSDate(
                                  new Date(lottary.endTime * 1000)
                                )
                                  .toFormat("fffMMM dd, yyyy, hh:mm a")
                                  .substring(30)}
                              </h4>
                            </div>
                            <h3 className="font-serif text-[24px]  leading-[29px] text-[#2C2C2C]">
                              Wining Numbers
                            </h3>
                          </div>
                          <div className="flex flex-row items-center justify-center gap-4 mx-auto mb-6 text-center max-w-690">
                            <div className="relative flex items-center justify-center ">
                              <img src={one} alt="" className="relative" />
                              <div className="absolute top-2 left-[13px]  md:top-6 md:left-9 font-serif text-[#2C2C2C] text-[20px]  md:text-[30px]">
                                {lottary && lottary?.winCode?.substring(0, 1)}
                              </div>
                            </div>
                            <div className="relative flex items-center justify-center ">
                              <img src={two} alt="" className="relative" />
                              <div className="absolute top-2 left-[13px]  md:top-6 md:left-9 font-serif text-[#2C2C2C] text-[20px]  md:text-[30px]">
                                {lottary && lottary?.winCode?.substring(1, 2)}
                              </div>
                            </div>

                            <div className="relative ">
                              <img src={three} alt="" className="relative" />
                              <div className="absolute top-2 left-[13px]  md:top-6 md:left-9 font-serif text-[#2C2C2C] text-[20px]  md:text-[30px]">
                                {lottary && lottary?.winCode?.substring(2, 3)}
                              </div>
                            </div>
                            <div className="relative ">
                              <img src={four} alt="" className="relative" />
                              <div className="absolute top-2 left-[13px]  md:top-6 md:left-9 font-serif text-[#2C2C2C] text-[20px]  md:text-[30px]">
                                {lottary && lottary?.winCode?.substring(3, 4)}
                              </div>
                            </div>
                            <div className="relative ">
                              <img src={five} alt="" className="relative" />
                              <div className="absolute top-2 left-[13px]  md:top-6 md:left-9 font-serif text-[#2C2C2C] text-[20px]  md:text-[30px]">
                                {lottary && lottary?.winCode?.substring(4, 5)}
                              </div>
                            </div>
                            <div className="relative ">
                              <img src={six} alt="" className="relative" />
                              <div className="absolute top-2 left-[13px]  md:top-6 md:left-9 font-serif text-[#2C2C2C] text-[20px]  md:text-[30px]">
                                {lottary && lottary?.winCode?.substring(5, 6)}
                              </div>
                            </div>
                          </div>

                          <div className=" z-50  cursor-pointer rounded-b-[51px] hover:rounded-b-[51px]  ">
                            <div>
                              <div className="  border-t-2  border-[#e8e8e833] border-solid   "></div>
                              <Transition
                                show={isClosed}
                                enter="transition  delay-100  duration-800 ease-out"
                                enterFrom="transform scale-95 opacity-0"
                                enterTo="transform  scale-100 opacity-100"
                                leave="transition duration-500 ease-out"
                                leaveFrom="transform scale-100 opacity-100"
                                leaveTo="transform scale-95 opacity-0"
                              >
                                <div className="px-2 pt-4 pb-2 text-sm text-gray-500 bg-transparent ">
                                  <div className="flex flex-wrap items-center justify-between p-6 md:flex-row ">
                                    <div className="flex items-center">
                                      <div className="font-serif text-[24px]  leading-[29px] text-[#2C2C2C]">
                                        Prize Pot
                                      </div>
                                      <div>
                                        <p className="ml-3 custom-color  text-[32px]">
                                          {parseInt(lottary?.paymentMethod) ===
                                          0
                                            ? "~BNB " +
                                              ethers.utils.formatEther(
                                                lottary?.totalCollectedValue
                                              )
                                            : "~BUSD " +
                                              ethers.utils.formatEther(
                                                lottary?.totalCollectedValue
                                              )}
                                        </p>
                                      </div>
                                    </div>
                                    <div className="text-[#A2A2A2] flex items-center  text-[14px] leading-[21px] font-serif">
                                      Total players this round:{" "}
                                      <span className="custom-color-2 font-sans   ml-[5px]">
                                        {" "}
                                        {lottary?.players?.length}
                                      </span>
                                      <span className="  custom-color text-[18px] leading-[21px] font-medium"></span>
                                    </div>
                                  </div>
                                  <div className="flex flex-wrap gap-[41px] ml-[24px] my-[35px]">
                                    {lottary &&
                                      lottary?.eachGroupWin?.map(
                                        (group, index) => (
                                          <div className="flex flex-col items-start justify-start">
                                            <h5 className="text-[#A2A2A2] text-[16px] leading-[19.2px] font-serif">
                                              Match First {index + 1}
                                            </h5>
                                            <p className=" mt-[16px] custom-color-2 font-sans  ">
                                              {parseInt(
                                                lottary?.paymentMethod
                                              ) === 0
                                                ? "~BNB " +
                                                  ethers.utils.formatEther(
                                                    group
                                                  )
                                                : "~BUSD " +
                                                  ethers.utils.formatEther(
                                                    group
                                                  )}
                                            </p>
                                          </div>
                                        )
                                      )}

                                    <div className="flex flex-col flex-wrap items-start justify-start ">
                                      <h5 className="text-[#FF7A7A] text-[18px] leading-[21px] font-normal">
                                        Burn
                                      </h5>
                                      <p className=" mt-[16px] custom-color-2 text-card text-[18px] leading-[21px] font-medium">
                                        {parseInt(lottary?.paymentMethod) === 0
                                          ? `~BNB ${
                                              ethers.utils.formatEther(
                                                lottary.totalCollectedValue
                                              ) -
                                              ethers.utils.formatEther(
                                                lottary.eachGroupWin
                                                  .reduce(
                                                    (sum, b) =>
                                                      Number(sum) + Number(b),
                                                    0
                                                  )
                                                  .toString()
                                              )
                                            }`
                                          : `~BUSD ${
                                              ethers.utils.formatEther(
                                                lottary.totalCollectedValue
                                              ) -
                                              ethers.utils.formatEther(
                                                lottary.eachGroupWin
                                                  .reduce(
                                                    (sum, b) =>
                                                      Number(sum) + Number(b),
                                                    0
                                                  )
                                                  .toString()
                                              )
                                            }`}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </Transition>

                              <button
                                onClick={() => {
                                  setIsClosed(!isClosed);
                                }}
                                className="flex  rounded-b-[51px] bg-title items-center justify-center pt-[23px] pb-[25px] w-full h-full text-sm font-medium text-center hover:rounded-b-[51px] item-center dark:hover:bg-gray-300    hover:bg-[#330e46]  "
                              >
                                <span className="text-[22px] text-card">
                                  Details
                                </span>

                                <Down open={isClosed} />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  </>
                ))}
              </Swiper>
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default Tabs;
