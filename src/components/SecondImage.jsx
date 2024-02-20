import React from "react";
import { GoHeart } from "react-icons/go";
import { GoEye } from "react-icons/go";
import { BiTransferAlt } from "react-icons/bi";
import { PiFirstAidKitLight } from "react-icons/pi";

function SideIcons(props) {
    return (
      <div className="flex h-6 w-6 items-center justify-center rounded-md text-xs outline outline-1 bg-white outline-zinc-200 ">
        {props.children}
      </div>
    );
  }

export default function SecondImage(props) {
  return (
    <div className="relative h-[300px] md:h-auto ">
      <img src={props.imgSrc} alt="" className="transition ease-in-out delay-0 hover:-translate-y-1 hover:scale-110 duration-75"/>
      <div className="absolute right-0 top-0 z-10 flex flex-col gap-2 text-zinc-500">
        <SideIcons>
          <GoHeart />
        </SideIcons>
        <SideIcons>
          <GoEye />
        </SideIcons>
        <SideIcons>
          <BiTransferAlt />
        </SideIcons>
        <SideIcons>
          <PiFirstAidKitLight />
        </SideIcons>
      </div>
    </div>
  );
}
