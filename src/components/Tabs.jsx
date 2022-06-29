import React from "react";
import Slider from "react-slick";
import Right from "../asset/ArrowRight.svg";
import Left from "../asset/ArrowLeft.svg";
import Buy from "./button/Buy";
import Down from "../asset/ArrowDown";
// import one from "../asset/1.svg";
// import two from "../asset/2.svg";
// import three from "../asset/3.svg";
// import four from "../asset/4.svg";
// import five from "../asset/5.svg";
// import six from "../asset/6.svg";
import "./tabs.css";
import { Disclosure, Transition } from "@headlessui/react";
const Tabs = ({ color }) => {
  const [openTab, setOpenTab] = React.useState(1);

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
  const settings = {
    infinite: true,
    arrows: true,
    dots: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // nextArrow: <SampleNextArrow style={{ backGround: "green" }} />,
    // prevArrow: <SamplePrevArrow />,
  };
  return (
    <>
      <div className="flex flex-col items-center justify-center mt-[34px]">
        <div className=" bg-finish p-[8px] rounded-[17px]">
          <ul
            className="flex flex-row pt-3 pb-4 mb-0 list-none "
            role="tablist"
          >
            <li className="mr-2 font-serif text-center last:mr-0">
              <a
                className={
                  openTab === 1
                    ? "btn-cu font-serif text-primary  border-secondary"
                    : "btn text-white "
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
            <li className="mr-2 font-serif text-center last:mr-0">
              <a
                className={
                  openTab === 2
                    ? "btn-cu font-serif text-primary  border-secondary"
                    : "btn text-white "
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
        >
          <div className="mt-[32px] max-w-[1036.69px]  ">
            <Slider {...settings}>
              <div className="flex items-center justify-center mx-auto ">
                <div className="z-50 flex-col ">
                  <div className="card-border rounded-[51px] max-w-[834px] mx-[300px]  sm:mx-auto  ">
                    <div className="bg-white rounded-[51px] z-50">
                      <div className="flex flex-col items-center justify-center gap-4 pt-[41px] pb-[23.17px] pl-[37.7px] pr-[30px] whitespace-nowrap">
                        <h3 className="font-serif text-[24px] leading-[29px] text-[#2C2C2C]">
                          Round{" "}
                          <span className=" bg-[#9e00911a] border-[.8px] border-[#9e0091] rounded-[9.25842px] py-[6.15px] px-[7.65px] fonet-serif text-[24px] leading-[29px] text-[#9E0091]   ">
                            436
                          </span>
                        </h3>

                        <div>
                          <h4 className="font-serif text-[20px] font-normal leading-[29px] text-[#A2A2A2] ">
                            Drawn May 10, 2022, 04:00 Pm
                          </h4>
                        </div>
                        <h3 className="font-serif text-[24px]  leading-[29px] text-[#2C2C2C]">
                          Wining Numbers
                        </h3>
                      </div>
                      <div className="flex items-center justify-center gap-0 max-w-690">
                        {/* <img src={one} alt="" />
                          <img src={two} alt="" />
                          <img src={three} alt="" />
                          <img src={four} alt="" />
                          <img src={five} alt="" />
                          <img src={six} alt="" /> */}
                      </div>

                      <div className="mb-3 rounded-b-xl">
                        <div className="flex flex-col items-center text-center pb-[35px]  pt-[38px] ">
                          <Buy />
                        </div>
                      </div>
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
                                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500 bg-transparent ">
                                  <div className="flex items-center justify-around">
                                    <div className="font-serif text-[24px]  leading-[29px] text-[#2C2C2C]">
                                      Prize Pot
                                    </div>
                                    <div>
                                      <p className="mt-[8px] custom-color  text-[32px]">
                                        ~$1,430
                                      </p>
                                      <h5 className="text-[#D1D1D1] text-[18px] leading-[21px] font-normal">
                                        23,765 DEALS
                                      </h5>
                                    </div>
                                    <div className="text-[#D1D1D1] text-[18px] leading-[21px] font-normal">
                                      Total players this round:{" "}
                                      <span className=" mt-[16px] text-card text-[18px] leading-[21px] font-medium">
                                        234
                                      </span>
                                    </div>
                                  </div>
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
                </div>
              </div>

              <div className="flex  bg-white rounded-[31.2992px]   ">
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
            </Slider>
          </div>
        </div>
        <div className={openTab === 2 ? "block" : "hidden"} id="link2"></div>
        {/* </div>
            </div>
          </div> */}
      </div>
    </>
  );
};

export default Tabs;
