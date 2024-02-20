import React from "react";
import payment from "../assets/payment.png";

function TextContent2(props) {
  return <a href="#" className="hover:text-zinc-400 hover:cursor-pointer">{props.text}</a>;
}

function TextContent1(props) {
  return <p className="hover:text-zinc-400">{props.text} | </p>;
}

function FooterBlock1(props) {
  return <div></div>;
}

function FooterBlock2(props) {
  return (
    <div>
      <p className="text-sm font-bold text-white sm:text-base">
        {props.header.toUpperCase()}{" "}
      </p>
      <div className="w-[20%] sm:w-[30%] border-[1px] mt-1  border-b border-orange-500"></div>
      <div className="flex flex-col gap-1 py-2 md:py-4">{props.children}</div>
    </div>
  );
}

export default function Footer() {
  return (
    <div className="bg-zinc-800 px-5 pb-10 md:pb-0 text-left text-zinc-500 poppins-light">
      {/* <div className="py-8"></div> */}
      <div className="py-8 flex flex-col gap-4 sm:grid sm:grid-cols-3 md:grid-cols-5 max-w-7xl mx-auto">
        <FooterBlock2 header="popular categories">
          <TextContent2 text="Fashion" />
          <TextContent2 text="Electronic" />
          <TextContent2 text="Cosmetic" />
          <TextContent2 text="Health" />
          <TextContent2 text="Watches" />
        </FooterBlock2>

        <FooterBlock2 header="products">
          <TextContent2 text="Prices Drop" />
          <TextContent2 text="New Products" />
          <TextContent2 text="Best Sales" />
          <TextContent2 text="Contact Us" />
          <TextContent2 text="Sitemap" />
        </FooterBlock2>

        <FooterBlock2 header="our company">
          <TextContent2 text="Delivery" />
          <TextContent2 text="Legal Notice" />
          <TextContent2 text="Terms And conditions" />
          <TextContent2 text="About Us" />
          <TextContent2 text="Secure Payment" />
        </FooterBlock2>

        <FooterBlock2 header="Services">
          <TextContent2 text="Prices Drop" />
          <TextContent2 text="New Products" />
          <TextContent2 text="Best Sales" />
          <TextContent2 text="Contact Us" />
          <TextContent2 text="Sitemap" />
        </FooterBlock2>

        <FooterBlock2 header="contact">
          <TextContent2 text="Prices Drop" />
          <TextContent2 text="New Products" />
          <TextContent2 text="Best Sales" />
          <TextContent2 text="Contact Us" />
          <TextContent2 text="Sitemap" />
        </FooterBlock2>
      </div>
      <center className="py-8">
        <img src={payment} alt="" />
        <p className="my-4 font-semibold">
          Copyright © ShopBuddy All Rights Reserved.
        </p>
      </center>
    </div>
  );
}
