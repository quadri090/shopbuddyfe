import React from "react";
import banner from "../assets/banner-1.jpg";
import bannersm from "../assets/bannersm-1.jpg"

export default function Hero() {
  return (
    <div className="relative  mt-4 h-[400px] overflow-hidden">
      <img
        src={banner}
        height={400}
        alt="Hero image"
        className="hidden h-[400px] w-full rounded-lg lg:flex object-cover"
      />

      <img src={bannersm} alt="Hero"  className="block md:hidden h-[350px] w-full rounded-lg"/>
      <div className="bg-white md:bg-inherit p-4 md:p-0 w-11/12 md:w-auto mx-4 md:mx-0 rounded-lg md:rounded-none bg-opacity-70 absolute md:left-[10%] md:top-[15%] bottom-[16%] md:bottom-0 flex  flex-col gap-1 md:gap-4 text-left">
        <p className="text-base md:text-[28px] md:font-semibold text-orange-500">
          Trending Item
        </p>
        <p className="text-[18px] md:text-[48px] font-extrabold md:font-bold md:leading-[50px]">
          WOMEN'S <br className="hidden md:flex"/> LATEST <br /> FASHION SALE
        </p>
        <p className="hidden md:block text-[24px] font-semibold text-zinc-500">
          starting at $ <span className="text-[32px] font-bold">20</span>.00
        </p>
        <button className="h-6 md:h-8 w-20 md:w-32 rounded-md bg-orange-500 hover:bg-zinc-700 text-xs md:text-base font-semibold text-white">
          SHOP NOW
        </button>
      </div>
    </div>
  );
}
