import React from "react";

export default function FirstProductImage(props) {
  return (
    <div className="h-[280px] md:h-auto">
      <img src={props.imgSrc} alt="" />
    </div>
  );
}
