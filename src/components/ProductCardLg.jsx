import React from "react";
import { FaRegStar } from "react-icons/fa";

export default function ProductCardLg(props) {
  const [showSecondImage, setShowSeondImage] = React.useState(false);

  return (
    <div className="m-1 flex flex-col rounded-xl p-4 outline outline-1 outline-zinc-200 hover:cursor-pointer hover:shadow-2xl">
      <div>{props.children}</div>
      <div className="flex flex-col gap-2 text-left">
        <p className="text-orange-500">{props.header}</p>
        <p className="font-sm font-light text-zinc-500">{props.desc}</p>
        <div className="flex">
          <FaRegStar className="text-orange-500 "/>
          <FaRegStar className="text-orange-500 "/>
          <FaRegStar className="text-orange-500 "/>
          <FaRegStar className="text-orange-500 "/>
          <FaRegStar className="text-orange-500 "/>
        </div>
        <div className="flex items-center gap-3">
          <p className="font-bold text-black">${props.price}.00</p>
          <p className="text-sm text-zinc-500 line-through">
            ${props.oldPrice}.00
          </p>
        </div>
      </div>
    </div>
  );
}
