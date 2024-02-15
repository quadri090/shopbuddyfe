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
    <div className="mx-1 my-1 flex h-20 w-full items-center gap-4 md:gap-6 rounded-lg px-4 outline outline-1 outline-zinc-300 md:mt-10 md:mb-4">
      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-zinc-200 outline outline-1 outline-zinc-300">
        <img src={props.iconSrc} alt="" className="h-8 w-8 " />
      </div>
      <div className="flex h-12 w-[280px] md:w-[180px] flex-col justify-between">
        <div className="flex w-full justify-between">
          <p className="text-sm font-medium">{props.desc.toUpperCase()}</p>
          <p className="text-xs text-zinc-500">({props.count})</p>
        </div>
        <button className="text-left text-sm text-orange-500">Show all</button>
      </div>
    </div>
  );
}

export default function categories() {
  return (
    <div className="flex scroll-ml-[300px] gap-4 overflow-x-scroll scroll-smooth">
      <CategoryItem iconSrc={dress} desc="dress & frock" count="53" />
      <CategoryItem iconSrc={coat} desc="winter wear" count="58" />
      <CategoryItem iconSrc={glasses} desc="glasses & lens" count="68" />
      <CategoryItem iconSrc={shorts} desc="shorts & jeans" count="84" />
      <CategoryItem iconSrc={tee} desc="shorts & jeans" count="84" />
      <CategoryItem iconSrc={jacket} desc="shorts & jeans" count="84" />
      <CategoryItem iconSrc={watch} desc="shorts & jeans" count="84" />
      <CategoryItem iconSrc={hat} desc="shorts & jeans" count="84" />
    </div>
  );
}
