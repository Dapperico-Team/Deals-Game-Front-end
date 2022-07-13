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
import { useWaitForTransaction, useContractWrite, useAccount } from "wagmi";
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
  const { address } = useAccount();
  const [openTab, setOpenTab] = React.useState(1);
  const [userTickets, setUserTickets] = useState([]);

  const [allLottaries, setAllLottaries] = useState([]);

  const [cliamResult, setCliamResult] = useState(null);
  const [width, height] = useWindowSize();

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
        lottaryId: 2,
        userAddress: address,
      }),
    };
    try {
      const fetchResponse = await fetch(
        `http://165.227.44.103:2000/api/claim_reward`,
        settings
      );
      const data = await fetchResponse.json();

      // setCliamResult(data);

      write({
        args: [
          data?.message,
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
    // args: [
    //   cliamResult?.message,
    //   cliamResult?.signedMessage,
    //   2,
    //   cliamResult?.paymentMethod,
    // ],

    onSuccess(data) {
      console.log("Success", data);
    },
  });

  console.log(cliamData, "dtaaaaaaaa");
  console.log(text, "textextexttext");
  console.log(cliamLoading, "loading");
  // const { data, isError, isLoading } = useWaitForTransaction({
  //   hash: cliamData?.transactionHash,
  // });

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
  const values = [
    {
      _id: "62c99b03b16477792f5e136d",
      Useraddress: "0x6e2fa26ec7AD0EE7143678035dDF5ec951c36279",
      lottaryId: 0,
      ticket: "123456",
      winAmount: 0,
      matchGroup: 7,
      __v: 0,
      isPaid: 1,
    },
    {
      _id: "62c99b03b16477792f5e136e",
      Useraddress: "0x6e2fa26ec7AD0EE7143678035dDF5ec951c36279",
      lottaryId: 0,
      ticket: "234567",
      winAmount: 0,
      matchGroup: 7,
      __v: 0,
      isPaid: 1,
    },
    {
      _id: "62c99b03b16477792f5e136f",
      Useraddress: "0x6e2fa26ec7AD0EE7143678035dDF5ec951c36279",
      lottaryId: 0,
      ticket: "345678",
      winAmount: 0,
      matchGroup: 7,
      __v: 0,
      isPaid: 1,
    },
    {
      _id: "62c99b03b16477792f5e1370",
      Useraddress: "0x6e2fa26ec7AD0EE7143678035dDF5ec951c36279",
      lottaryId: 0,
      ticket: "456789",
      winAmount: 1,
      matchGroup: 7,
      __v: 0,
      isPaid: 1,
    },
    {
      _id: "62c99b03b16477792f5e1371",
      Useraddress: "0x6e2fa26ec7AD0EE7143678035dDF5ec951c36279",
      lottaryId: 0,
      ticket: "567899",
      winAmount: 1,
      matchGroup: 7,
      __v: 0,
      isPaid: 1,
    },
    {
      _id: "62caad7db16477792f5e13a7",
      Useraddress: "0x6e2fa26ec7AD0EE7143678035dDF5ec951c36279",
      lottaryId: 1,
      ticket: "111111",
      winAmount: 0,
      matchGroup: 7,
      __v: 0,
      isPaid: 2,
    },
    {
      _id: "62caad7db16477792f5e13a8",
      Useraddress: "0x6e2fa26ec7AD0EE7143678035dDF5ec951c36279",
      lottaryId: 1,
      ticket: "222222",
      winAmount: 0,
      matchGroup: 7,
      __v: 0,
      isPaid: 2,
    },
    {
      _id: "62caad7db16477792f5e13a9",
      Useraddress: "0x6e2fa26ec7AD0EE7143678035dDF5ec951c36279",
      lottaryId: 1,
      ticket: "333333",
      winAmount: 6115989592,
      matchGroup: 1,
      __v: 0,
      isPaid: 2,
    },
    {
      _id: "62caad7db16477792f5e13aa",
      Useraddress: "0x6e2fa26ec7AD0EE7143678035dDF5ec951c36279",
      lottaryId: 1,
      ticket: "444444",
      winAmount: 0,
      matchGroup: 7,
      __v: 0,
      isPaid: 2,
    },
    {
      _id: "62caad7db16477792f5e13ab",
      Useraddress: "0x6e2fa26ec7AD0EE7143678035dDF5ec951c36279",
      lottaryId: 1,
      ticket: "555555",
      winAmount: 0,
      matchGroup: 7,
      __v: 0,
      isPaid: 2,
    },
    {
      _id: "62caad7db16477792f5e13ac",
      Useraddress: "0x6e2fa26ec7AD0EE7143678035dDF5ec951c36279",
      lottaryId: 1,
      ticket: "666666",
      winAmount: 0,
      matchGroup: 7,
      __v: 0,
      isPaid: 2,
    },
    {
      _id: "62caad7db16477792f5e13ad",
      Useraddress: "0x6e2fa26ec7AD0EE7143678035dDF5ec951c36279",
      lottaryId: 1,
      ticket: "777777",
      winAmount: 0,
      matchGroup: 7,
      __v: 0,
      isPaid: 2,
    },
    {
      _id: "62caad7db16477792f5e13ae",
      Useraddress: "0x6e2fa26ec7AD0EE7143678035dDF5ec951c36279",
      lottaryId: 1,
      ticket: "888888",
      winAmount: 0,
      matchGroup: 7,
      __v: 0,
      isPaid: 2,
    },
    {
      _id: "62caad7db16477792f5e13af",
      Useraddress: "0x6e2fa26ec7AD0EE7143678035dDF5ec951c36279",
      lottaryId: 1,
      ticket: "999999",
      winAmount: 0,
      matchGroup: 7,
      __v: 0,
      isPaid: 2,
    },
  ];
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
          // nextArrow: <SampleNextArrow style={{ backGround: "green" }} />,
          // prevArrow: <SamplePrevArrow />,
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

  console.log(userTickets, "usertickets");

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

        <div className={openTab === 1 ? "block" : "hidden"} id="link1">
          <div className="mt-[32px] text-center lg:inline-block   max-w-[1036.69px]   ">
            <Slider {...settings}>
              {Object.values(result)?.map((lottary, index) => (
                <div
                  // key={index}
                  className="card-border max-w-[856px]  rounded-[51px]    mx-auto  "
                >
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
                          {new Date(lottary[0].EndTime * 1000)
                            .toString()
                            .substring(0, 21)}
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
              ))}
            </Slider>
          </div>
        </div>
        <div className={openTab === 2 ? "block" : "hidden"} id="link2">
          <div className="mt-[32px] text-center lg:inline-block   max-w-[1036.69px]   ">
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
              ]?.map((lottary) => (
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
                          {new Date(lottary.endTime * 1000)
                            .toString()
                            .substring(0, 21)}
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
                      <Disclosure>
                        {({ open }) => (
                          <>
                            <div className="  border-t-2  border-[#e8e8e833] border-solid   "></div>
                            <Transition
                              enter="transition duration-800 ease-out"
                              enterFrom="transform scale-95 opacity-0"
                              enterTo="transform scale-100 opacity-100"
                              leave="transition duration-500 ease-out"
                              leaveFrom="transform scale-100 opacity-100"
                              leaveTo="transform scale-95 opacity-0"
                            >
                              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500 bg-transparent ">
                                <div className="flex flex-col flex-wrap items-center justify-around p-6 md:flex-row ">
                                  <div className="flex items-center">
                                    <div className="font-serif text-[24px]  leading-[29px] text-[#2C2C2C]">
                                      Prize Pot
                                    </div>
                                    <div>
                                      <p className="ml-3 custom-color  text-[32px]">
                                        {lottary?.paymentMethod == 0
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
                                    <span className="  custom-color text-[18px] leading-[21px] font-medium">
                                      {/* { lottary && lottary?.players?.length} */}
                                    </span>
                                  </div>
                                </div>
                                {lottary &&
                                  lottary?.eachGroupWin?.map((group, index) => (
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
                                  ))}
                                <div className="flex flex-wrap items-start justify-start gap-10 p-6 ">
                                  {/* <div>
                                        <h5 className="text-[#FF7A7A] text-[18px] leading-[21px] font-normal">
                                          Burn
                                        </h5>
                                        <p className=" mt-[16px] text-card text-[18px] leading-[21px] font-medium">
                                          23,765 DEALS
                                        </p>
                                        <p className="mt-[8px] text-card text-[14px] leading-[17px] font-normal">
                                          ~$1,430
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
