/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useCallback, useEffect, useMemo, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Close from "../asset/close.svg";
import Plus from "../asset/Plus.svg";
import "./modal.css";
import Button from "../components/button/Connect";
import Buy from "../components/button/Buy";
import { useAccount } from "wagmi";
import { useContractRead, useContractWrite } from "wagmi";
import { contractABI, contractAddress } from "../contract";
import { ethers, BigNumber } from "ethers";

export default function Modal({ open, setOpen }) {
  const { address, connector, isConnected } = useAccount();
  const [countvalues, setcountvalues] = useState(0);
  const [formValues, setFormValues] = useState([{ price: "" }]);
  const str = formValues
    ?.map((item) => [item.price].join(","))
    .filter((item) => item !== "");

  const {
    data: ID,
    isError: IDerror,
    isLoading: IDloading,
  } = useContractRead({
    addressOrName: contractAddress,
    contractInterface: contractABI,
    functionName: "_ID",
  });
  const { data, isError, isLoading, error } = useContractRead({
    addressOrName: contractAddress,
    contractInterface: contractABI,
    functionName: "Lotteries",
    args: ID?.toString() - 1,
  });

  const rawstatus = data?.toString()?.split(",");

  const count = rawstatus && rawstatus[1];
  const status = rawstatus && rawstatus[4];
  const paymentMethod = rawstatus && rawstatus[5];
  const price = rawstatus && rawstatus[0];
  const finalPrice = price && price * formValues?.length;
  let a = finalPrice && BigNumber.from(finalPrice);

  const {
    data: buydata,
    isError: buyerror,
    isLoading: buyloading,
    error: text,
    write,
  } = useContractWrite({
    addressOrName: contractAddress,
    contractInterface: contractABI,
    functionName: "Buy_Ticket",
    args: [ID?.toString() - 1, str, paymentMethod],
    overrides: { value: a },
  });

  console.log(ID?.toString() - 1, str, paymentMethod, a);
  console.log(buydata, "buydta");
  console.log(text, "errror");
  console.log(buyerror, "buyerror");
  let handleChange = (i, e) => {
    let newFormValues = [...formValues];

    if (e.target.value.length <= 6) {
      if (e.target.value.length == 1 && e.target.value == 0) {
        return;
      } else {
        setcountvalues((prev) => prev + 1);
        newFormValues[i][e.target.name] = e.target.value;

        setFormValues(newFormValues);
      }
    } else {
      return;
    }

    console.log(e.target.value.length < 6, "targetrargettarger");
  };

  let addFormFields = () => {
    setFormValues([...formValues, { price: "" }]);
  };

  let removeFormFields = (i) => {
    let newFormValues = [...formValues];
    newFormValues.splice(i, 1);
    setFormValues(newFormValues);
  };

  if (status !== 1) {
    return (
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-[9999999999999999999999999999] overflow-y-auto"
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
              <div
                style={{ zIndex: "99999999999" }}
                className="relative inline-block px-4 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6"
              >
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

                <div className="flex items-center justify-center mt-[30px] ml-4 ">
                  <p className="font-serif text-[#131111] text-[20px] leading-[24px]">
                    no tickets available
                  </p>

                  <p className="font-serif text-[#131111] text-[20px] leading-[24px]"></p>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    );
  } else {
    return (
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-[999999999999999999999] overflow-y-auto"
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
              <div
                style={{ zIndex: "99999999999" }}
                className="relative inline-block px-4 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6"
              >
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
                    <img
                      src={Plus}
                      alt="plus-icon"
                      className="ml-[9px]"
                      onClick={
                        formValues.length < count ? () => addFormFields() : null
                      }
                    />
                  </div>

                  <p className="font-serif text-[#131111] text-[20px] leading-[24px]">
                    Tickets
                  </p>
                </div>
                <div className="mt-[22px] ml-4">
                  {formValues.map((element, index) => (
                    <div className="form-inline" key={index}>
                      <input
                        min={1}
                        type="number"
                        className="mb-2 buy-input"
                        maxLength={6}
                        name="price"
                        value={element.price || ""}
                        onChange={(e) => {
                          handleChange(index, e);
                          if (element.price.length <= 0)
                            removeFormFields(index);
                        }}
                      />

                      {/* {index ? (
                        <button
                          type="button"
                          className="button remove"
                          onClick={() => removeFormFields(index)}
                        >
                          Remove
                        </button>
                      ) : null} */}
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-between mt-[30px] ml-4 ">
                  <p className="font-serif text-[#131111] text-[20px] leading-[24px]">
                    Cost
                  </p>

                  <p className="font-serif text-[#131111] text-[20px] leading-[24px]">
                    {paymentMethod == 0
                      ? "~BNB " + ethers.utils.formatEther(price)
                      : "~$ " + price}
                  </p>
                </div>
                <div className="border-b mt-[50px] border-[#F0F0F0]"></div>
                <div className="flex items-center justify-between mt-[20px] ml-4 ">
                  <p className="font-serif font-extrabold text-[#131111] text-[30px] leading-[36px]">
                    You pay
                  </p>

                  <p className="font-serif font-extrabold text-[#131111] text-[30px] leading-[36px]">
                    {paymentMethod == 0
                      ? "~BNB " +
                        ethers.utils.formatEther(price) * formValues.length
                      : "~$ " + price * formValues.length}
                  </p>
                </div>
                <div className="mt-[70px] w-full ">
                  {isConnected ? (
                    <button
                      onClick={() => write()}
                      className="font-sans text-body rounded-[10px] w-full font-normal leading-[28px] text-[24px] py-[16px] px-[34px]  h-[60px] whitespace-nowrap bg-gradient-to-b from-[#FFE68D]  to-[#D9A913]"
                    >
                      Buy Tickets
                    </button>
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
}
