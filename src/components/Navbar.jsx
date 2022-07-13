import React, { useContext, useEffect, useRef, useState } from "react";
import ThemeToggle from "./ThemeToggle";
import Logo from "../asset/logoLight";
import LogoText from "../asset/logoTextLight.js";
import { ThemeContext } from "../context/ThemeContext";
import Button from "./button/Connect";
import { Transition } from "@headlessui/react";

const Navbar = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const trigger = useRef(null);
  const mobileNav = useRef(null);

  // close the mobile menu on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!mobileNav.current || !trigger.current) return;
      if (
        !mobileNavOpen ||
        mobileNav.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setMobileNavOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close the mobile menu if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (keyCode !== 27) return;
      setMobileNavOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });
  const { theme } = useContext(ThemeContext);
  return (
    <header className=" container mx-auto flex items-center justify-between pt-[50px] p-6 lg:px-[42px] bg-primary max-w-[1440px]">
      <div className=" flex space-x-[10.52px] w-[200px]  lg:w-auto ">
        <Logo theme={theme} />
        <LogoText theme={theme} />
      </div>

      <div className="items-center justify-between hidden xl:flex ">
        <nav>
          <ul className="flex space-x-[25px]  font-sans ">
            <a href="#get">
              <li>Get your ticket</li>
            </a>
            <a href="#finish">
              <li>Finished rounds</li>
            </a>
            <a href="#work">
              <li>How it works</li>
            </a>
            <a href="#win">
              <li>Winning Criteria</li>
            </a>
          </ul>
        </nav>

        <div className="flex items-center justify-between">
          <div className="flex items-center justify-center  h-[50px] w-[50px] rounded-full bg-[#fff3d8]   dark:bg-secondary mr-[23px] ml-[29px] ">
            <ThemeToggle />
          </div>
          <div>
            <Button />
          </div>
        </div>
      </div>
      <div className="inline-flex xl:hidden">
        {/* Mobile lights switch */}

        {/* Hamburger button */}
        <button
          ref={trigger}
          className={`hamburger ${mobileNavOpen && "active"}`}
          aria-controls="mobile-nav"
          aria-expanded={mobileNavOpen}
          onClick={() => setMobileNavOpen(!mobileNavOpen)}
        >
          <span className="sr-only">Menu</span>
          <svg
            className="mb-2 text-gray-900 transition duration-150 ease-in-out fill-current w-7 h-7 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect y="4" width="24" height="2" rx="1" />
            <rect y="11" width="24" height="2" rx="1" />
            <rect y="18" width="24" height="2" rx="1" />
          </svg>
        </button>

        {/*Mobile navigation */}
        <Transition
          show={mobileNavOpen}
          tag="ul"
          className="fixed top-0 left-0 z-20 w-full h-screen max-w-sm -ml-16 bg-white shadow-lg dark:bg-gray-900"
          enter="transition ease-out duration-200 transform"
          enterStart="opacity-0 -translate-x-full"
          enterEnd="opacity-100 translate-x-0"
          leave="transition ease-out duration-200"
          leaveStart="opacity-100"
          leaveEnd="opacity-0"
        >
          <nav
            id="mobile-nav"
            ref={mobileNav}
            className="fixed top-0 left-0 z-20 w-full h-screen bg-white shadow-lg dark:bg-gray-900 no-scrollbar"
          >
            <div className="py-6 pl-20 pr-4">
              {/* Logo */}
              <div className="flex items-center justify-between">
                <div className="w-[200px]  flex items-center justify-between text-center  ">
                  <Logo theme={theme} />
                  <LogoText theme={theme} />
                </div>
                <div>
                  <ThemeToggle />
                </div>
              </div>

              {/* Links */}
              <ul className="flex flex-col items-center justify-center h-screen text-center ">
                <div className="flex items-center justify-center  mb-[50px]">
                  <Button />
                </div>
                <a
                  href="#get"
                  className="flex py-2 text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100"
                >
                  <li>Get your ticket</li>
                </a>
                <a
                  href="#finish"
                  className="flex py-2 text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100"
                >
                  <li>Finished rounds</li>
                </a>
                <a
                  href="#work"
                  className="flex py-2 text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100"
                >
                  <li>How it works</li>
                </a>
                <a
                  href="#win"
                  className="flex py-2 text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100"
                >
                  <li>Winning Criteria</li>
                </a>
              </ul>
            </div>
          </nav>
        </Transition>
      </div>
    </header>
  );
};

export default Navbar;
