import React from "react";

export const ItemsSm = (props) => {
  return (
    <div className="text-zinc-800 my-8 md:my-0">
      <p className="text-left text-lg font-bold">{props.header}</p>
      <div className="my-4 border border-zinc-100 w-full"></div>
      <div className="flex sm:grid grid-cols-2 w-full gap-4 overflow-x-scroll sm:overflow-x-hidden">
        {props.children}
      </div>
    </div>
  );
};

export default ItemsSm;
