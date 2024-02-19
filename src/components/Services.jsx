import React from "react";
import HeadingText from "./HeadingText";
import { LuShip } from "react-icons/lu";
import { SlRocket } from "react-icons/sl";
import { LuPhone } from "react-icons/lu";
import { IoArrowUndoOutline } from "react-icons/io5";
import { IoTicketOutline } from "react-icons/io5";

function Items(props) {
  const [blackColor, setBlackColor] = React.useState(false);

  return (
    <div
      className="flex items- gap-4 hover:cursor-pointer hover:text-black w-[200px] sm:w-[230px] md:w-11/12 "
      onMouseOver={() => setBlackColor(true)}
      onMouseLeave={() => setBlackColor(false)}
    >
      <div
        className={`${blackColor ? "text-black" : "text-orange-500"} flex items-center justify-center`}
      >
        {props.children}
      </div>
      <div className="flex flex-col gap-1 text-left text-zinc-500">
        <p className="text-base font-bold">{props.header}</p>
        <p className="text-sm">{props.desc}</p>
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <article className="text-zinc-500 ">
      <HeadingText header="Our Services" /> 
      <div className="flex flex-col sm:grid grid-cols-3 md:flex items-center gap-4 rounded-lg p-8 outline outline-1 outline-zinc-200">
        <Items header="WorldWide Delivery" desc="Food Order Over $100">
          <LuShip className="h-8 w-8" />
        </Items>

        <Items header="Next Day Delivery" desc="UK Orders Only">
          <SlRocket className="h-8 w-8" />
        </Items>

        <Items
          header="Best Online Support"
          desc="Hours: 8AM - 11PM"
        >
          <LuPhone className="h-8 w-8" />
        </Items>
        <div className="flex flex-col sm:flex-row md:flex-col gap-4 sm:col-span-3 items-center justify-center w-full">

          <Items header="Return Policy" desc="Easy & Free Return">
            <IoArrowUndoOutline className="h-8 w-8" />
          </Items>
          <Items header="30% Money Back" desc="For Order Over $100">
            <IoTicketOutline className="h-8 w-8" />
          </Items>
        </div>
      </div>
    </article>
  );
}
