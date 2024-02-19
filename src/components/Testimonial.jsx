import React from "react";
import HeadingText from "./HeadingText.jsx";
import Testimonial1 from "../assets/testimonial-1.jpg";
import Quote from "../assets/quotes.svg";

export default function Testimonial() {
  return (
    <article className="text-zinc-500 ">
      <HeadingText header="Testimonials" />
      <div className="rounded-lg outline outline-1 outline-zinc-200">
        <div className="mx-auto flex flex-col items-center gap-2 p-8 sm:w-[70%] md:w-full">
          <img src={Testimonial1} alt="" className="h-24 w-24 rounded-full" />
          <p className="font-bold">ALAN DOE</p>
          <p className="text-black">CEO & Founder Invision</p>
          <img src={Quote} alt="" className="h-6 w-6" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quidem
            laudantium doloremque!
          </p>
        </div>
      </div>
    </article>
  );
}
