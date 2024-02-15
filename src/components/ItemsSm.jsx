import React from "react";

export const ItemsSm = (props) => {
  return (
    <div className="text-zinc-800">
      <p className="text-left text-lg font-bold">{props.header}</p>
      <div className="my-4 border border-zinc-100 w-full md:w-[300px]"></div>
      <div className="flex w-full gap-4 overflow-x-scroll ">
        {props.children}
      </div>
    </div>
  );
};

export default ItemsSm;
