import React from "react";

export default function Btn(props) {
  return (
    <button className={`${props.classes} rounded-md bg-orange-500 text-xs font-semibold text-white hover:bg-zinc-700 md:text-base`}>
      {props.displayText}
    </button>
  );
}
