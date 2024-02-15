import React from "react";
import banner from "../assets/banner-1.jpg";
import bannersm from "../assets/bannersm-1.jpg";

export default function Hero() {
  return (
    <div className="relative mt-8 h-[400px] overflow-hidden md:mt-4">
      <img
        src={banner}
        height={400}
        alt="Hero image"
        className="hidden h-[400px] w-full rounded-lg object-cover lg:flex"
      />

      <img
        src={bannersm}
        alt="Hero"
        className="block h-[350px] w-full rounded-lg md:hidden"
      />
      <div className="absolute bottom-[16%] mx-4 flex max-h-full w-11/12 flex-col gap-1 rounded-lg bg-white bg-opacity-70 p-6 text-left md:bottom-0 md:left-[10%] md:top-[15%] md:mx-0 md:w-auto  md:gap-4 md:rounded-none md:bg-inherit md:p-0">
        <p className="text-base text-orange-500 md:text-[28px] md:font-semibold">
          Trending Item
        </p>
        <p className="text-[24px] font-extrabold leading-[25px] md:text-[48px] md:font-bold md:leading-[45px]">
          WOMEN'S <br className="hidden md:flex" /> LATEST <br /> FASHION SALE
        </p>
        <p className="hidden text-[24px] font-semibold text-zinc-500 md:block">
          starting at $ <span className="text-[32px] font-bold">20</span>.00
        </p>
        <button className="h-6 w-20 rounded-md bg-orange-500 text-xs font-semibold text-white hover:bg-zinc-700 md:h-8 md:w-32 md:text-base">
          SHOP NOW
        </button>
      </div>
    </div>
  );
}
