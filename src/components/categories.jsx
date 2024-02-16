import React from "react";
import coat from "../assets/coat.svg";
import dress from "../assets/dress.svg";
import glasses from "../assets/glasses.svg";
import shorts from "../assets/shorts.svg";
import tee from "../assets/tee.svg"
import jacket from "../assets/jacket.svg"
import watch from "../assets/watch.svg"
import hat from "../assets/hat.svg"

function CategoryItem(props) {
  return (
    <div className="m-1 flex sm:max-w-[360px] h-20 sm:h-24 md:h-20 items-center gap-4 md:gap-6 rounded-lg px-4 outline outline-1 outline-zinc-200 ">
      <div className="flex h-12 w-[10vw] sm:w-24 md:w-12 sm:h-16 md:h-12 items-center justify-center rounded-sm bg-zinc-200 outline outline-1 outline-zinc-300">
        <img src={props.iconSrc} alt="" className="h-8 w-8 " />
      </div>
      <div className="flex h-12 w-[70vw] sm:w-[40vw] md:w-[175px] flex-col justify-between">
        <div className="flex w-full justify-between">
          <p className="text-sm font-medium sm:font-bold">{props.desc.toUpperCase()}</p>
          <p className="text-xs text-zinc-500">({props.count})</p>
        </div>
        <button className="text-left text-sm text-orange-500">Show all</button>
      </div>
    </div>
  );
}

export default function categories() {
  return (
    <div className="flex gap-4 sm:mt-10 md:mb-4 overflow-x-scroll">
      <CategoryItem iconSrc={dress} desc="dress & frock" count="53" />
      <CategoryItem iconSrc={coat} desc="winter wear" count="58" />
      <CategoryItem iconSrc={glasses} desc="glasses & lens" count="68" />
      <CategoryItem iconSrc={shorts} desc="shorts & jeans" count="84" />
      <CategoryItem iconSrc={tee} desc="t-shirts" count="35" />
      <CategoryItem iconSrc={jacket} desc="jacket" count="16" />
      <CategoryItem iconSrc={watch} desc="Watch" count="27" />
      <CategoryItem iconSrc={hat} desc="Hat & caps" count="39" />
    </div>
  );
}
