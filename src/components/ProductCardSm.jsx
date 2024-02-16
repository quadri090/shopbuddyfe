import React from "react";

export default function ProductCardSm(props) {
  return (
    <div className="m-[1px] flex h-[90px] w-full items-center gap-6 rounded-lg px-6 outline outline-1 outline-zinc-200 hover:cursor-pointer md:my-1 md:w-[280px]">
      <div className="flex items-center justify-center w-[15vw] sm:w-20 md:w-auto">
        <img src={props.iconSrc} alt="" className="h-14 w-20 sm:w-12 md:w-20 " />
      </div>
      <div className="flex w-[59vw] sm:w-full flex-col justify-between text-left md:w-full">
        <p className="md:hidden text-sm sm:text-xs font-semibold">{props.desc}</p>
        <p className="hidden md:block text-sm font-semibold">{`${props.desc.slice(0,20)}...`}</p>
        <p className="text-sm text-zinc-500">{props.category}</p>
        <div className="flex items-center gap-3">
          <p className="font-bold text-orange-500">${props.price}.00</p>
          <p className="text-sm text-zinc-500 line-through">
            ${props.oldPrice}.00
          </p>
        </div>
      </div>
    </div>
  );
}
