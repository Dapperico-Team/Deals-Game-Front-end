import React from "react";
import Tabs from "./Tabs";

import "./winners.css";

const History = () => {
  return (
    <section id="finish" className="container mx-auto ">
      <h2 className="mt-[145px] text-center text-[40px] leading-[48px]   font-serif font-extrabold text-accent  ">
        Finished Rounds
      </h2>
      <Tabs />
    </section>
  );
};

export default History;
