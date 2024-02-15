import React from "react";

export default function ProductCardSm(props) {
  return (
    <div className="mx-1 my-1 flex h-[90px] w-full items-center gap-6 rounded-lg px-6 outline outline-1 outline-zinc-200 hover:cursor-pointer md:my-10 md:w-[300px]">
      <div className="flex items-center justify-center">
        <img src={props.iconSrc} alt="" className="h-14 w-20 " />
      </div>
      <div className="flex w-[290px] flex-col justify-between text-left md:w-full">
        <p className="text-sm font-semibold">{props.desc}</p>
        <p className="text-sm text-zinc-500">{props.category}</p>
        <div className="flex items-center gap-3">
          <p className="font-bold text-orange-500">${props.price}.00</p>
          <p className="text-sm text-zinc-500 decoration-dashed">
            ${props.oldPrice}.00
          </p>
        </div>
      </div>
    </div>
  );
}
