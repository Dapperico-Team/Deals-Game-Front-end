import React, { useEffect, useState } from "react";
import poly from "../asset/PolygonWinners.svg";
import Slider from "react-slick";

import Line from "../asset/Line.svg";
import "./winners.css";
import { ethers } from "ethers";

const Winners = () => {
  const [allUsers, setAllUsers] = useState();
  const [res, setRes] = useState([]);

  const getAllUser = async () => {
    const res = await fetch("http://165.227.44.103:2000/api/lastWinners");
    const data = await res.json();
    return data;
  };

  useEffect(() => {
    getAllUser()
      .then((data) => {
        setAllUsers(data); // set current lottary
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  // const mj = allUsers && JSON.parse(allUsers);
  // console.log(
  //   mj,

  //   "alllusers"
  // );

  var merged = allUsers && [].concat.apply([], Object.values(allUsers));

  console.log(merged, "merged");

  const settings = {
    // className: "center",
    centerMode: true,
    infinite: true,
    // centerPadding: "60px",
    arrows: false,
    dots: false,

    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1020,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section id="win" className="container mx-auto ">
      <h2 className="mt-[145px] m-6 text-center text-[40px] leading-[48px]   font-serif font-extrabold text-accent  ">
        The names of the winners
      </h2>
      <div className="relative  mt-[50px]">
        <div className="absolute left-0 ">
          <img src={poly} alt="polygon" className="left-0 xl:flex lg:-mt-16" />
        </div>
      </div>
      <div className="mt-[100px]   ">
        <Slider {...settings}>
          {merged?.map((user, index) => (
            <div
              key={index}
              className="flex  mx-auto bg-white rounded-[31.2992px] card-slide "
            >
              <div className="  flex-col md:flex-row   flex  items-center justify-start gap-4 pt-[25.98px] pb-[27.71px] md:pl-[37.7px] md:pr-[30px] whitespace-nowrap">
                <h3 className="font-serif text-[24px] leading-[29px] text-[#2C2C2C]">
                  round
                </h3>
                <span className=" bg-[#9e00911a] border-[.8px] border-[#9e0091] rounded-[9.25842px] py-[6.15px] px-[7.65px] fonet-serif text-[24px] leading-[29px] text-[#9E0091]   ">
                  {user?.tickets[0]?.lottaryId}
                </span>
                <h3 className="font-serif text-[18px] font-extrabold leading-[29px] text-[#2C2C2C]">
                  match first 1
                </h3>
              </div>
              <img src={Line} alt="dashedLine" className="w-full"></img>
              <div className=" px-[37.7px] pt-[50px] pb-[33px]">
                <h4 className="font-serif text-[20px] font-normal leading-[29px] text-[#A2A2A2] ">
                  wallet ID:
                </h4>
                <p className=" break-all font-serif text-[23px] leading-[29px] text-[#2C2C2C]">
                  {user?.tickets[0]?.Useraddress}
                </p>
              </div>
              <div className="px-[37.7px] pb-[28.78px]">
                <h4 className="font-serif text-[20px] font-normal leading-[24px] text-[#A2A2A2]">
                  winning prize:{" "}
                </h4>
                <p className="font-serif pt-3  text-[40px] font-extrabold leading-[48px] text-[#9E0091]  ">
                  {parseInt(user.tickets[0]?.paymentMethod) === 0
                    ? "~BNB " +
                      ethers.utils.formatEther(user?.tickets[0]?.winAmount)
                    : "~BUSD " +
                      ethers.utils.formatEther(user?.tickets[0]?.winAmount)}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Winners;
