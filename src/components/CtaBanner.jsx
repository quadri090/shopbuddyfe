import React from "react";
import Ctabanner from "../assets/cta-banner.jpg";

export default function CtaBanner() {
  return (
    <div className="relative col-span-2">
      <img
        src={Ctabanner}
        alt="Hero image"
        className="block h-[400px] w-full rounded-lg sm:h-full md:h-[450px]"
      />
      <div className="absolute bottom-[35%] md:bottom-[25%] left-[25%] flex h-[35%] md:h-[50%] w-[50%] flex-col items-center justify-center gap-1 rounded-lg bg-white bg-opacity-60 text-zinc-500 sm:mx-0  sm:gap-2">
        <p className="w-auto px-2 sm:py-1 rounded-md bg-black sm:bg-zinc-800 text-xs font-bold text-white sm:text-base">
          25% DISCOUNT
        </p>
        <p className="text-lg  text-black sm:text-zinc-600 font-bold leading-[25px] sm:text-[28px] md:leading-[35px]">
          Summer <br className="sm:hidden md:block"/> Collection
        </p>
        <p className="sm:text-lg">
          Starting @ $
          <span className="font-bold sm:text-[24px]">20</span>.00
        </p>
        <p className="text-sm sm:text-base font-semibold sm:font-bold">SHOP NOW</p>
      </div>
    </div>
  );
}
