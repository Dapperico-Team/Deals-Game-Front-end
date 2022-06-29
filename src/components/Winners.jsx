import React from "react";
import poly from "../asset/PolygonAbout.svg";
import Slider from "react-slick";
import "./winners.css";

const Winners = () => {
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
          slidesToShow: 2,
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
    <section className="container mx-auto ">
      <h2 className="mt-[145px] text-center text-[40px] leading-[48px]   font-serif font-extrabold text-accent  ">
        The names of the winners
      </h2>
      <div className="relative  mt-[50px]">
        <div className="absolute left-0 ">
          <img src={poly} alt="polygon" className="left-0 xl:flex lg:-mt-16" />
        </div>
      </div>
      <div className="mt-[100px]   ">
        <Slider {...settings}>
          <div className="flex  bg-white rounded-[31.2992px] card-slide ">
            <div className="flex  items-center justify-start gap-4 pt-[25.98px] pb-[27.71px] pl-[37.7px] pr-[30px]whitespace-nowrap">
              <h3 className="font-serif text-[24px] leading-[29px] text-[#2C2C2C]">
                round
              </h3>
              <span className=" bg-[#9e00911a] border-[.8px] border-[#9e0091] rounded-[9.25842px] py-[6.15px] px-[7.65px] fonet-serif text-[24px] leading-[29px] text-[#9E0091]   ">
                436
              </span>
              <h3 className="font-serif text-[18px] font-extrabold leading-[29px] text-[#2C2C2C]">
                match first 1
              </h3>
            </div>
            <div className=" border-2 border-[#9B9B9B]   border-dashed "></div>
            <div className=" px-[37.7px] pt-[50px] pb-[33px]">
              <h4 className="font-serif text-[20px] font-normal leading-[29px] text-[#A2A2A2] ">
                wallet ID:
              </h4>
              <p className="font-serif text-[20px] leading-[29px] text-[#2C2C2C]">
                hurfyyf6ef6y8ucgbdh
              </p>
            </div>
            <div className="px-[37.7px] pb-[28.78px]">
              <h4 className="font-serif text-[20px] font-normal leading-[24px] text-[#A2A2A2]">
                winning prize:{" "}
              </h4>
              <p className="fonet-serif pt-3  text-[40px] font-extrabold leading-[48px] text-[#9E0091]  ">
                $65,654
              </p>
            </div>
          </div>
          <div className="flex  bg-white rounded-[31.2992px] max-w-[447.7px] card-slide ">
            <div className="flex items-center justify-start gap-4 pt-[25.98px] pb-[27.71px] pl-[37.7px] pr-[30px]whitespace-nowrap">
              <h3 className="font-serif text-[24px] leading-[29px] text-[#2C2C2C]">
                round
              </h3>
              <span className=" bg-[#9e00911a] border-[.8px] border-[#9e0091] rounded-[9.25842px] py-[6.15px] px-[7.65px] fonet-serif text-[24px] leading-[29px] text-[#9E0091]   ">
                436
              </span>
              <h3 className="font-serif text-[18px] font-extrabold leading-[29px] text-[#2C2C2C]">
                match first 1
              </h3>
            </div>
            <div className=" border-2 border-[#9B9B9B]   border-dashed "></div>
            <div className=" px-[37.7px] pt-[50px] pb-[33px]">
              <h4 className="font-serif text-[20px] font-normal leading-[29px] text-[#A2A2A2] ">
                wallet ID:
              </h4>
              <p className="font-serif text-[20px] leading-[29px] text-[#2C2C2C]">
                hurfyyf6ef6y8ucgbdh
              </p>
            </div>
            <div className="px-[37.7px] pb-[28.78px]">
              <h4 className="font-serif text-[20px] font-normal leading-[24px] text-[#A2A2A2]">
                winning prize:{" "}
              </h4>
              <p className="fonet-serif pt-3  text-[40px] font-extrabold leading-[48px] text-[#9E0091]  ">
                $65,654
              </p>
            </div>
          </div>
          <div className="flex   bg-white rounded-[31.2992px] max-w-[447.7px] card-slide ">
            <div className="flex items-center justify-start gap-4 pt-[25.98px] pb-[27.71px] pl-[37.7px] pr-[30px]whitespace-nowrap">
              <h3 className="font-serif text-[24px] leading-[29px] text-[#2C2C2C]">
                round
              </h3>
              <span className=" bg-[#9e00911a] border-[.8px] border-[#9e0091] rounded-[9.25842px] py-[6.15px] px-[7.65px] fonet-serif text-[24px] leading-[29px] text-[#9E0091]   ">
                436
              </span>
              <h3 className="font-serif text-[18px] font-extrabold leading-[29px] text-[#2C2C2C]">
                match first 1
              </h3>
            </div>
            <div className=" border-2 border-[#9B9B9B]   border-dashed "></div>
            <div className=" px-[37.7px] pt-[50px] pb-[33px]">
              <h4 className="font-serif text-[20px] font-normal leading-[29px] text-[#A2A2A2] ">
                wallet ID:
              </h4>
              <p className="font-serif text-[20px] leading-[29px] text-[#2C2C2C]">
                hurfyyf6ef6y8ucgbdh
              </p>
            </div>
            <div className="px-[37.7px] pb-[28.78px]">
              <h4 className="font-serif text-[20px] font-normal leading-[24px] text-[#A2A2A2]">
                winning prize:{" "}
              </h4>
              <p className="fonet-serif pt-3  text-[40px] font-extrabold leading-[48px] text-[#9E0091]  ">
                $65,654
              </p>
            </div>
          </div>
          <div className="flex  bg-white rounded-[31.2992px] max-w-[447.7px] card-slide ">
            <div className="flex items-center justify-start gap-4 pt-[25.98px] pb-[27.71px] pl-[37.7px] pr-[30px]whitespace-nowrap">
              <h3 className="font-serif text-[24px] leading-[29px] text-[#2C2C2C]">
                round
              </h3>
              <span className=" bg-[#9e00911a] border-[.8px] border-[#9e0091] rounded-[9.25842px] py-[6.15px] px-[7.65px] fonet-serif text-[24px] leading-[29px] text-[#9E0091]   ">
                436
              </span>
              <h3 className="font-serif text-[18px] font-extrabold leading-[29px] text-[#2C2C2C]">
                match first 1
              </h3>
            </div>
            <div className=" border-2 border-[#9B9B9B]   border-dashed "></div>
            <div className=" px-[37.7px] pt-[50px] pb-[33px]">
              <h4 className="font-serif text-[20px] font-normal leading-[29px] text-[#A2A2A2] ">
                wallet ID:
              </h4>
              <p className="font-serif text-[20px] leading-[29px] text-[#2C2C2C]">
                hurfyyf6ef6y8ucgbdh
              </p>
            </div>
            <div className="px-[37.7px] pb-[28.78px]">
              <h4 className="font-serif text-[20px] font-normal leading-[24px] text-[#A2A2A2]">
                winning prize:{" "}
              </h4>
              <p className="fonet-serif pt-3  text-[40px] font-extrabold leading-[48px] text-[#9E0091]  ">
                $65,654
              </p>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default Winners;
