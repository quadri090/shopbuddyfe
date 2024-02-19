import React from "react";
import SideBar from "./SideBar";
import DealDay from "./DealDay";
import HeadingText from "./HeadingText";
import AllProducts from "./AllProducts";
import AllItems from "./AllItems";
import jewellery1 from "../assets/jewellery-1.jpg";
import shampoo from "../assets/shampoo.jpg";

export default function ItemsSmContainer() {

  return (
    <div className=" mt-10 flex grid-cols-4 flex-col gap-8 md:grid md:h-[1000px] md:gap-0 md:pt-20">
      <div className="relative col-span-1 hidden md:block">
        <SideBar />
      </div>

      <div className="col-span-3 grid-cols-3 gap-2 overflow-y-scroll md:grid">
        <AllItems/>

        <HeadingText header="Deal Of The Day" />

        <div className="col-span-3 m-1 mt-4 flex gap-2 overflow-x-scroll md:overflow-visible">
          <div className="w-[100%]">
            <DealDay
              imgSrc={shampoo}
              header="SHAMPOO, CONDITIONER & FACEWASH PACKS"
              price="150"
              oldPrice="200"
              sold="20"
              available="40"
            />
          </div>

          <div className="w-[100%] md:hidden">
            <DealDay
              imgSrc={jewellery1}
              header="ROSE GOLD DIAMOND EARRING"
              price="1990"
              oldPrice="2000"
              sold="15"
              available="40"
            />
          </div>
        </div>

        <HeadingText header="New Products" />
        <AllProducts/>
        
      </div>
    </div>
  );
}
