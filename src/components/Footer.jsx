import React, { useContext } from "react";
import Logo from "../asset/fotLogoLight.js";
import Insta from "../asset/instaLight.js";
import Teleg from "../asset/telegLight.js";
import Message from "../asset/MessageLight";
import { ThemeContext } from "../context/ThemeContext";

const Footer = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <footer className="container mx-auto  flex flex-col  bottom-0 w-full h-[372px] bg-footer  ">
      <div className="flex items-start justify-around mt-[125px] h-3/4 ">
        <div>
          <Logo theme={theme} />
        </div>
        <div>
          <div className="flex flex-col ml-64 ">
            <h4 className="font-serif text-[18px] leading-[22px] text-primary mb-[22px] ">
              Links
            </h4>
            <div className="grid grid-cols-2 grid-rows-2 gap-6 ">
              <div className="">
                <p>How it works</p>
              </div>
              <div>
                <p>Token we support</p>
              </div>
              <div>
                <p>Campaigns</p>
              </div>
              <div>
                <p>DG point</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <h4 className="font-serif text-[18px] leading-[22px] text-primary mb-[22px]">
            Get in Touch
          </h4>
          <div className="flex items-center justify-start gap-8 mb-[13px]">
            <Teleg theme={theme} />
            <Insta theme={theme} />

            <Message theme={theme} />
          </div>
          <p className="text-center">
            <span className="text-[18px] leading-[21px] font-bold">
              Write us an Email:
            </span>
            <span className="ml-[13px] text-[18px]"> support@deals.game</span>
          </p>
        </div>
      </div>
      <div>
        <div className="flex items-center justify-center border-t-[1px] border-primary opacity-[.5] ">
          <p className="mt-[22px] mb-[33px] opacity-[.5] text-primary ">
            © 2022 Deals Game. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
