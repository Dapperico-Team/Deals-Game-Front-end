import React, { useContext } from "react";
import ThemeToggle from "./ThemeToggle";
import Logo from "../asset/logoLight";
import LogoText from "../asset/logoTextLight.js";
import { ThemeContext } from "../context/ThemeContext";
import Button from "./button/Connect";

const Navbar = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <header className=" container mx-auto flex items-end justify-between pt-[50px] p-6 lg:px-[42px] bg-primary max-w-[1440px]">
      <div className=" flex space-x-[10.52px] ">
        <Logo theme={theme} />
        <LogoText theme={theme} />
      </div>

      <div className="items-center justify-between hidden lg:flex ">
        <nav>
          <ul className="flex space-x-[25px]  font-sans ">
            <li>Get your ticket</li>
            <li>Finished rounds</li>
            <li>How it works</li>
            <li>Winning Criteria</li>
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
    </header>
  );
};

export default Navbar;
// import React, { useState, useRef, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import Dropdown from '../utils/Dropdown';
// import Transition from '../utils/Transition.js';

// function Navbar() {

//   const [mobileNavOpen, setMobileNavOpen] = useState(false);

//   const trigger = useRef(null);
//   const mobileNav = useRef(null);

//   // close the mobile menu on click outside
//   useEffect(() => {
//     const clickHandler = ({ target }) => {
//       if (!mobileNav.current || !trigger.current) return;
//       if (!mobileNavOpen || mobileNav.current.contains(target) || trigger.current.contains(target)) return;
//       setMobileNavOpen(false);
//     };
//     document.addEventListener('click', clickHandler);
//     return () => document.removeEventListener('click', clickHandler);
//   });

//   // close the mobile menu if the esc key is pressed
//   useEffect(() => {
//     const keyHandler = ({ keyCode }) => {
//       if (!mobileNavOpen || keyCode !== 27) return;
//       setMobileNavOpen(false);
//     };
//     document.addEventListener('keydown', keyHandler);
//     return () => document.removeEventListener('keydown', keyHandler);
//   });

//   // Handle light modes
//   const [darkMode, setDarkMode] = useState(() => {
//     const dark = localStorage.getItem('dark-mode');
//     if (dark === null) {
//       return true;
//     } else {
//       return dark === 'true';
//     }
//   });

//   useEffect(() => {
//     localStorage.setItem('dark-mode', darkMode)
//     if (darkMode) {
//       document.documentElement.classList.add('dark')
//     } else {
//       document.documentElement.classList.remove('dark')
//     }
//   }, [darkMode]);

//   return (
//     <header className="absolute z-30 w-full">
//       <div className="max-w-6xl px-4 mx-auto sm:px-6">
//         <div className="flex items-center justify-between h-20">

//           {/* Site branding */}
//           <div className="flex-shrink-0 mr-5">
//             {/* Logo */}
//             <Link to="/" className="block" aria-label="Cruip">
//               <svg className="w-8 h-8" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
//                 <defs>
//                   <linearGradient x1="26%" y1="100%" x2="100%" y2="100%" id="logo_a">
//                     <stop stopColor="#3ABAB4" offset="0%" />
//                     <stop stopColor="#7F9CF5" offset="100%" />
//                   </linearGradient>
//                   <linearGradient x1="26%" y1="100%" x2="100%" y2="100%" id="logo_b">
//                     <stop stopColor="#3ABAB4" offset="0%" />
//                     <stop stopColor="#3ABAB4" stopOpacity="0" offset="100%" />
//                   </linearGradient>
//                 </defs>
//                 <path d="M32 16h-8a8 8 0 10-16 0H0C0 7.163 7.163 0 16 0s16 7.163 16 16z" fill="url(#logo_a)" />
//                 <path d="M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16h8a8 8 0 1016 0h8z" fill="url(#logo_b)" />
//               </svg>
//             </Link>
//           </div>

//           {/* Desktop navigation */}
//           <nav className="hidden md:flex md:flex-grow">

//             {/* Desktop menu links */}
//             <ul className="flex flex-wrap items-center flex-grow font-medium">
//               <li>
//                 <Link to="/about" className="flex items-center px-5 py-2 text-gray-600 transition duration-150 ease-in-out hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100">About</Link>
//               </li>
//               <li>
//                 <Link to="/blog" className="flex items-center px-5 py-2 text-gray-600 transition duration-150 ease-in-out hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100">Blog</Link>
//               </li>
//               <li>
//                 <Link to="/testimonials" className="flex items-center px-5 py-2 text-gray-600 transition duration-150 ease-in-out hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100">Testimonials</Link>
//               </li>
//               {/* 1st level: hover */}
//               <Dropdown title="Resources">
//                 {/* 2nd level: hover */}
//                 <li>
//                   <Link to="/help" className="flex px-4 py-2 text-sm leading-tight text-gray-600 dark:text-gray-400 hover:text-teal-500 dark:hover:text-teal-500">Help center</Link>
//                 </li>
//                 <li>
//                   <Link to="/404" className="flex px-4 py-2 text-sm leading-tight text-gray-600 dark:text-gray-400 hover:text-teal-500 dark:hover:text-teal-500">404</Link>
//                 </li>
//               </Dropdown>
//             </ul>

//             {/* Desktop lights switch */}
//             <div className="flex flex-col justify-center ml-3 form-switch focus-within:outline-blue">
//               <input type="checkbox" name="light-switch" id="light-switch-desktop" className="sr-only light-switch" checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
//               <label className="relative" htmlFor="light-switch-desktop">
//                 <span className="relative z-10 shadow-sm bg-gradient-to-t from-gray-100 to-white dark:from-gray-800 dark:to-gray-700" aria-hidden="true"></span>
//                 <svg className="absolute inset-0" width="44" height="24" viewBox="0 0 44 24" xmlns="http://www.w3.org/2000/svg">
//                   <g className="text-white fill-current" fillRule="nonzero" opacity=".88">
//                     <path d="M32 8a.5.5 0 00.5-.5v-1a.5.5 0 10-1 0v1a.5.5 0 00.5.5zM35.182 9.318a.5.5 0 00.354-.147l.707-.707a.5.5 0 00-.707-.707l-.707.707a.5.5 0 00.353.854zM37.5 11.5h-1a.5.5 0 100 1h1a.5.5 0 100-1zM35.536 14.829a.5.5 0 00-.707.707l.707.707a.5.5 0 00.707-.707l-.707-.707zM32 16a.5.5 0 00-.5.5v1a.5.5 0 101 0v-1a.5.5 0 00-.5-.5zM28.464 14.829l-.707.707a.5.5 0 00.707.707l.707-.707a.5.5 0 00-.707-.707zM28 12a.5.5 0 00-.5-.5h-1a.5.5 0 100 1h1a.5.5 0 00.5-.5zM28.464 9.171a.5.5 0 00.707-.707l-.707-.707a.5.5 0 00-.707.707l.707.707z" />
//                     <circle cx="32" cy="12" r="3" />
//                     <circle fillOpacity=".4" cx="12" cy="12" r="6" />
//                     <circle fillOpacity=".88" cx="12" cy="12" r="3" />
//                   </g>
//                 </svg>
//                 <span className="sr-only">Switch to light / dark version</span>
//               </label>
//             </div>

//             {/* Desktop CTA on the right */}
//             <ul className="flex flex-wrap items-center justify-end">
//               <li>
//                 <Link to="/contact" className="ml-6 text-white bg-teal-500 btn-sm hover:bg-teal-400">Request code</Link>
//               </li>
//             </ul>

//           </nav>

//           {/* Mobile menu */}
//           <div className="inline-flex md:hidden">

//             {/* Mobile lights switch */}
//             <div className="form-switch focus-within:outline-blue flex flex-col justify-center mr-6 -mt-0.5">
//               <input type="checkbox" name="light-switch" id="light-switch-mobile" className="sr-only light-switch" checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
//               <label className="relative" htmlFor="light-switch-mobile">
//                 <span className="relative z-10 shadow-sm bg-gradient-to-t from-gray-100 to-white dark:from-gray-800 dark:to-gray-700" aria-hidden="true"></span>
//                 <svg className="absolute inset-0" width="44" height="24" viewBox="0 0 44 24" xmlns="http://www.w3.org/2000/svg">
//                   <g className="text-white fill-current" fillRule="nonzero" opacity=".88">
//                     <path d="M32 8a.5.5 0 00.5-.5v-1a.5.5 0 10-1 0v1a.5.5 0 00.5.5zM35.182 9.318a.5.5 0 00.354-.147l.707-.707a.5.5 0 00-.707-.707l-.707.707a.5.5 0 00.353.854zM37.5 11.5h-1a.5.5 0 100 1h1a.5.5 0 100-1zM35.536 14.829a.5.5 0 00-.707.707l.707.707a.5.5 0 00.707-.707l-.707-.707zM32 16a.5.5 0 00-.5.5v1a.5.5 0 101 0v-1a.5.5 0 00-.5-.5zM28.464 14.829l-.707.707a.5.5 0 00.707.707l.707-.707a.5.5 0 00-.707-.707zM28 12a.5.5 0 00-.5-.5h-1a.5.5 0 100 1h1a.5.5 0 00.5-.5zM28.464 9.171a.5.5 0 00.707-.707l-.707-.707a.5.5 0 00-.707.707l.707.707z" />
//                     <circle cx="32" cy="12" r="3" />
//                     <circle fillOpacity=".4" cx="12" cy="12" r="6" />
//                     <circle fillOpacity=".88" cx="12" cy="12" r="3" />
//                   </g>
//                 </svg>
//                 <span className="sr-only">Switch to light / dark version</span>
//               </label>
//             </div>

//             {/* Hamburger button */}
//             <button ref={trigger} className={`hamburger ${mobileNavOpen && 'active'}`} aria-controls="mobile-nav" aria-expanded={mobileNavOpen} onClick={() => setMobileNavOpen(!mobileNavOpen)}>
//               <span className="sr-only">Menu</span>
//               <svg className="w-6 h-6 text-gray-900 transition duration-150 ease-in-out fill-current hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                 <rect y="4" width="24" height="2" rx="1" />
//                 <rect y="11" width="24" height="2" rx="1" />
//                 <rect y="18" width="24" height="2" rx="1" />
//               </svg>
//             </button>

//             {/*Mobile navigation */}
//             <Transition
//               show={mobileNavOpen}
//               tag="ul"
//               className="fixed top-0 left-0 z-20 w-full h-screen max-w-sm -ml-16 overflow-scroll bg-white shadow-lg dark:bg-gray-900"
//               enter="transition ease-out duration-200 transform"
//               enterStart="opacity-0 -translate-x-full"
//               enterEnd="opacity-100 translate-x-0"
//               leave="transition ease-out duration-200"
//               leaveStart="opacity-100"
//               leaveEnd="opacity-0"
//             >
//               <nav id="mobile-nav" ref={mobileNav} className="fixed top-0 left-0 z-20 w-full h-screen max-w-sm -ml-16 overflow-scroll bg-white shadow-lg dark:bg-gray-900 no-scrollbar">
//                 <div className="py-6 pl-20 pr-4">
//                   {/* Logo */}
//                   <svg className="w-8 h-8" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
//                     <defs>
//                       <linearGradient x1="26%" y1="100%" x2="100%" y2="100%" id="menulogo_a">
//                         <stop stopColor="#3ABAB4" offset="0%" />
//                         <stop stopColor="#7F9CF5" offset="100%" />
//                       </linearGradient>
//                       <linearGradient x1="26%" y1="100%" x2="100%" y2="100%" id="menulogo_b">
//                         <stop stopColor="#3ABAB4" offset="0%" />
//                         <stop stopColor="#3ABAB4" stopOpacity="0" offset="100%" />
//                       </linearGradient>
//                     </defs>
//                     <path d="M32 16h-8a8 8 0 10-16 0H0C0 7.163 7.163 0 16 0s16 7.163 16 16z" fill="url(#menulogo_a)" />
//                     <path d="M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16h8a8 8 0 1016 0h8z" fill="url(#menulogo_b)" />
//                   </svg>
//                   {/* Links */}
//                   <ul>
//                     <li>
//                       <Link to="/about" className="flex py-2 text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100">About</Link>
//                     </li>
//                     <li>
//                       <Link to="/blog" className="flex py-2 text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100">Blog</Link>
//                     </li>
//                     <li>
//                       <Link to="/testimonials" className="flex py-2 text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100">Testimonials</Link>
//                     </li>
//                     <li className="py-2 my-2 border-t border-b border-gray-200 dark:border-gray-800">
//                       <span className="flex py-2 text-gray-600 dark:text-gray-400">Resources</span>
//                       <ul className="pl-4">
//                         <li>
//                           <Link to="/help" className="flex py-2 text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100">Help center</Link>
//                         </li>
//                         <li>
//                           <Link to="/404" className="flex py-2 text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100">404</Link>
//                         </li>
//                       </ul>
//                     </li>
//                     <li>
//                       <Link to="/contact" className="inline-flex items-center justify-center w-full px-4 py-2 my-2 font-medium text-white transition duration-150 ease-in-out bg-teal-500 border border-transparent rounded hover:bg-teal-400">Request code</Link>
//                     </li>
//                   </ul>
//                 </div>
//               </nav>
//             </Transition>

//           </div>

//         </div>
//       </div>
//     </header>
//   );
// }

// export default Navbar;
