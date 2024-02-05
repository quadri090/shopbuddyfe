// eslint-disable-next-line no-unused-vars
import React from "react";
import { FaRegHeart } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa6";
import { LuShoppingBag } from "react-icons/lu";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";

function SocialIcon({ children }) {
  return (
    <div className="flex h-7 w-7 items-center justify-center rounded-sm bg-zinc-200">
      {children}
    </div>
  );
}

export default function Header() {
  const [currency, setCurrency] = React.useState("EUR $");
  const [language, setLanguage] = React.useState("ENGLISH");
  const utilityClasses =
    "bg-orange-500 w-4 h-4 rounded-full absolute top-[-13px] right-[-8px] flex items-center justify-center text-xs text-white font-semibold";

  return (
    <div>
      <div className="hidden h-12 items-center justify-between text-sm text-zinc-500 sm:flex">
        <div className="flex gap-4 text-lg">
          <SocialIcon>
            <FaFacebook />
          </SocialIcon>
          <SocialIcon>
            <FaXTwitter />
          </SocialIcon>
          <SocialIcon>
            <FaInstagram />
          </SocialIcon>
          <SocialIcon>
            <FaLinkedin />
          </SocialIcon>
        </div>

        <div className="">FREE SHIPPING THIS WEEK ORDER OVER - $55</div>

        <div className="flex gap-6">
          <div className="flex w-20 items-center justify-center gap-2 hover:cursor-pointer">
            <input
              type="text"
              className="w-12 bg-inherit outline-none hover:cursor-pointer"
              value={currency}
              readOnly
            />
            <div className="text-xs font-bold">
              <FaChevronDown />
            </div>
          </div>
          <div className="flex w-20 items-center justify-center gap-2 hover:cursor-pointer">
            <input
              type="text"
              className="w-16 bg-inherit outline-none hover:cursor-pointer"
              value={language}
              readOnly
            />
            <div className="text-xs font-bold">
              <FaChevronDown />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-between sm:h-28 sm:flex-row">
        <p className="text-4xl font-bold">ShopBuddy</p>
        <div className="flex gap-2 items-center rounded-md outline outline-1  outline-zinc-200 active:outline active:outline-black sm:w-[600px]">
          <input
            type="text"
            placeholder="Enter your product name"
            className="h-10 bg-inherit px-4 text-lg outline-none sm:w-[560px]"
          />
          <div className="text-xl hover:text-orange-500">

            <IoIosSearch />
          </div>
        </div>
        <div className="hidden gap-6 text-[28px] font-extralight sm:flex">
          <FaRegUser />

          <div className="relative flex">
            <FaRegHeart />
            <p className={utilityClasses}>0</p>
          </div>

          <div className="relative flex">
            <LuShoppingBag />
            <p className={utilityClasses}>0</p>
          </div>
        </div>
      </div>
    </div>
  );
}
