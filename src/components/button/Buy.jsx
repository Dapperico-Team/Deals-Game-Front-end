import React, { useState } from "react";
import Modal from "../../components/modal";
import { useAccount } from "wagmi";

const Buy = ({ style }) => {
  const [open, setOpen] = useState(false);
  const { isConnected } = useAccount();
  return (
    <>
      <button
        style={style}
        // onClick={() => {
        //   if (isConnected) {
        //     return;
        //   } else {
        //     setOpen(!open);
        //   }
        // }}
        onClick={() => {
          setOpen(!open);
        }}
        className="font-sans text-body rounded-[10px] font-normal leading-[28px] text-[24px] py-[16px] px-[34px] w-[241px] h-[60px] whitespace-nowrap bg-gradient-to-b from-[#FFE68D]  to-[#D9A913]"
      >
        Buy Tickets
      </button>
      <Modal open={open} setOpen={setOpen} />
    </>
  );
};

export default Buy;
