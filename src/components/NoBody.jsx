import React from "react";
import poly from "../asset/noBodyPolygon.svg";
import Image from "../asset/nobody.png";

const NoBody = () => {
  return (
    <section className="container mx-auto xl:mb-52 ">
      <div className="relative">
        <img
          src={poly}
          alt="polygon"
          className="absolute right-0 hidden xl:block "
        />
        <img
          src={Image}
          alt="nobody  "
          className="flex xl:right-0 xl:absolute xl:top-48 "
        />
      </div>
      <div className="flex flex-col items-start p-6 xl:ml-[145px] ">
        <h2 className=" mt-[20px]  xl:mt-[145px] text-center xl:text-left text-[40px] leading-[48px]   font-serif font-extrabold text-accent  ">
          What happens if nobody wins?
        </h2>

        <p className=" mt-[72px] text-center xl:text-left xl:w-1/2  font-sans font-normal lg:text-[24px] lg:leading-[28.44px] text-primary   ">
          If we do not have any winners in any of the matches, 50% of the money
          that is not won in the matches, is divided between the winners from
          all the other Matches of the same campaign, and the remaining goes to
          another pool that is used by the utility token of the website called
          DG Point. Then you can try your luck in another lottery by airdrop and
          a free ticket.
        </p>
      </div>
    </section>
  );
};

export default NoBody;
