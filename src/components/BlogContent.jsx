import React from "react";
import blog1 from "../assets/blog-1.jpg";
import blog2 from "../assets/blog-2.jpg";
import blog3 from "../assets/blog-3.jpg";
import blog4 from "../assets/blog-4.jpg";

function BlogContent(props) {
  return (
    <div className="m-1 hover:cursor-pointer select-none">
      <div className="w-[90vw] mx-auto sm:w-[44vw] md:w-auto">
        <img src={props.imgSrc} alt="" className=" rounded-lg" />
      </div>
      <div className="mt-4 text-left">
        <p className="text-orange-500">{props.category}</p>
        <p className="text-lg font-semibold hover:text-orange-500">
          {props.header}
        </p>
        <p className="text-zinc-500">
          By {props.author} / <span>{props.date}</span>
        </p>
      </div>
    </div>
  );
}

export default function BlogContentContainer() {
  return (
    <div className="my-16 flex gap-4 overflow-x-scroll scroll-smooth snap-x snap-start">
      <BlogContent
        imgSrc={blog1}
        category="Clothes"
        header="Clothes Retail KPIs 2021 Guide for Clothes Executives."
        author="Mr Quadri"
        date="Feb 10, 2024"
      />

      <BlogContent
        imgSrc={blog2}
        category="Clothes"
        header="Curbside fashion Trends: How to win the Pickup battle"
        author="Mr Jamal"
        date="Feb 12, 2024"
      />

      <BlogContent
        imgSrc={blog3}
        category="Shoes"
        header="EBT vendors: Claim Your Share of SNAP Online Revenue."
        author="Mr Brave"
        date="Feb 14, 2024"
      />

      <BlogContent
        imgSrc={blog4}
        category="Electronics"
        header="Curbside fashion Trends: How to win the Pickup battle."
        author="Admin"
        date="Feb 16, 2024"
      />
    </div>
  );
}
