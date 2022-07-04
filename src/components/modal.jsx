/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Close from "../asset/close.svg";
import Plus from "../asset/Plus.svg";
import "./modal.css";
import Button from "../components/button/Connect";
import Buy from "../components/button/Buy";
import { useAccount } from "wagmi";

export default function Modal({ open, setOpen }) {
  const { address, connector, isConnected } = useAccount();
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-10 overflow-y-auto"
        onClose={setOpen}
      >
        <div className="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="relative inline-block px-4 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
              <div className="absolute top-0 right-0 hidden pt-4 pr-4 sm:block">
                <img
                  onClick={() => setOpen(false)}
                  src={Close}
                  alt="close"
                  className="cursor-pointer"
                  width="20.86px"
                  height="21.98px"
                  aria-hidden="true"
                />
              </div>
              <div className="sm:flex sm:items-start">
                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                  <Dialog.Title
                    as="h3"
                    className="font-serif text-[32px] leading-[38.4px] font-medium  text-[#131111]"
                  >
                    Buy Tickets
                  </Dialog.Title>
                </div>
              </div>
              <div className="flex items-center justify-between mt-[55px] ml-4 ">
                <div className="flex">
                  <p className="font-serif text-[#131111] text-[20px] leading-[24px]">
                    Buy
                  </p>
                  <img src={Plus} alt="plus-icon" className="ml-[9px]" />
                </div>

                <p className="font-serif text-[#131111] text-[20px] leading-[24px]">
                  Tickets
                </p>
              </div>
              <div className="mt-[22px] ml-4">
                <input
                  min={1}
                  type="numer"
                  className="buy-input"
                  maxLength={6}
                  name=""
                  id=""
                />
              </div>
              <div className="flex items-center justify-between mt-[30px] ml-4 ">
                <p className="font-serif text-[#131111] text-[20px] leading-[24px]">
                  Cost
                </p>

                <p className="font-serif text-[#131111] text-[20px] leading-[24px]">
                  0
                </p>
              </div>
              <div className="border-b mt-[50px] border-[#F0F0F0]"></div>
              <div className="flex items-center justify-between mt-[20px] ml-4 ">
                <p className="font-serif font-extrabold text-[#131111] text-[30px] leading-[36px]">
                  You pay
                </p>

                <p className="font-serif font-extrabold text-[#131111] text-[30px] leading-[36px]">
                  0
                </p>
              </div>
              <div className="mt-[70px] w-full ">
                {address ? (
                  <Buy style={{ width: "100%" }} />
                ) : (
                  <Button style={{ width: "100%" }} />
                )}
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
