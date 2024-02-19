import React from 'react'
import one from "../assets/1.jpg";
import two from "../assets/2.jpg";
import three from "../assets/3.jpg";
import four from "../assets/4.jpg";
import { FaRegStar } from "react-icons/fa";

function Items(props) {
    return (
      <div className="m-[1px] flex h-[90px] w-full items-center gap-6 rounded-lg px-6  hover:cursor-pointer md:my-1 md:w-[280px]">
        <div className="flex items-center justify-center w-28 rounded-lg bg-zinc-800">
          <img src={props.iconSrc} alt="" className="h-16 w-20 sm:w-12 md:w-20 " />
        </div>
        <div className="flex w-full flex-col gap-[6px] text-left">
          <p className="md:hidden text-sm sm:text-xs font-semibold">{props.desc}</p>
          <p className="hidden md:block text-sm font-semibold">{`${props.desc.slice(0,20)}...`}</p>
          <div className="flex text-sm">
          <FaRegStar className="text-orange-500 "/>
          <FaRegStar className="text-orange-500 "/>
          <FaRegStar className="text-orange-500 "/>
          <FaRegStar className="text-orange-500 "/>
          <FaRegStar className="text-orange-500 "/>
        </div>
          <div className="flex items-center gap-3">
            <p className="text-sm text-zinc-500 line-through">
              ${props.oldPrice}.00
            </p>
            <p className="font-bold text-zinc-700">${props.price}.00</p>
          </div>
        </div>
      </div>
    );
  }

export default function BestSellersSideBar() {
  return (
    <div className='flex flex-col gap-2'>
         <Items
            iconSrc={one}
            desc="Baby Fabric Shoes"
            category="Clothes"
            price="4"
            oldPrice="5"
          />
          <Items
            iconSrc={two}
            desc="Mens Hoddie T-Shirt"
            category="Clothes"
            price="7"
            oldPrice="17"
          />
          <Items
            iconSrc={three}
            desc="Girls T-Shirt"
            category="Clothes"
            price="3"
            oldPrice="5"
          />
          <Items
            iconSrc={four}
            desc="Woolen Hat For Men"
            category="Clothes"
            price="12"
            oldPrice="15"
          />
    </div>
  )
}
