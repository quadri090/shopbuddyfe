import React from "react";
import banner from "../assets/banner-1.jpg";
import bannersm from "../assets/bannersm-1.jpg";
import Btn from "./Btn";

export default function Hero() {
  return (
    <div className="relative mt-8 h-[400px] overflow-hidden sm:h-auto md:mt-4">
      <img
        src={banner}
        height={400}
        alt="Hero image"
        className="hidden h-[400px] w-full rounded-lg sm:flex sm:h-[250px] sm:w-screen md:h-[400px] md:object-cover"
      />

      <img
        src={bannersm}
        alt="Hero image"
        className="block h-[350px] w-full rounded-lg sm:hidden"
      />
      <div className="absolute bottom-[16%] mx-4 flex max-h-full w-11/12 max-w-xl flex-col gap-1 rounded-lg bg-white bg-opacity-70 p-6 text-left sm:top-[5%] sm:mx-0 sm:gap-2 sm:bg-inherit md:bottom-0 md:left-[10%] md:top-[15%] md:w-auto md:gap-4 md:rounded-none md:p-0">
        <p className="text-base text-orange-500 md:text-[28px] md:font-semibold">
          Trending Item
        </p>
        <p className="text-[24px] font-extrabold leading-[25px] sm:text-[28px] sm:font-bold sm:leading-[35px] md:text-[48px] md:leading-[45px]">
          WOMEN'S <br className="hidden md:flex" /> LATEST <br /> FASHION SALE
        </p>
        <p className="hidden font-semibold text-zinc-500 sm:block md:text-[24px]">
          starting at ${" "}
          <span className="font-bold sm:text-[28px] md:text-[32px]">20</span>.00
        </p>
        <Btn displayText="SHOP NOW" classes="h-6 w-20 md:h-8 md:w-32" />
      </div>
    </div>
  );
}
