import React from "react";
import SideBar from "./SideBar";
import { LuShoppingBag } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa6";
import { IoMenuOutline } from "react-icons/io5";
import { CiMenuKebab } from "react-icons/ci";
import { IoHomeOutline } from "react-icons/io5";

const Icons = (props) => {
  return (
    <div className="relative flex h-12 w-12 items-center justify-center bg-zinc-200 text-[25px] shadow-2xl">
      {props.children}
    </div>
  );
};

export const Layout = (props) => {
  const utilityClasses =
    "bg-orange-500 w-[13px] h-[13px] rounded-full absolute top-[5px] right-[1px] text-[10px] text-white font-semibold";
  const [showSideBar, setShowSideBar] = React.useState(false);

  return (
    <div>
      <div className="fixed bottom-0 left-0 flex h-16 w-full bg-white sm:rounded-t-xl shadow-[0px_15px_15px_15px_rgba(0,0,0,0.35)] sm:mx-auto sm:w-[50%] sm:-right-[25%] sm:-left-[25%] md:hidden">
        <div className="flex w-full items-center justify-center gap-8">
          <Icons>
            <IoMenuOutline />
          </Icons>

          <Icons>
            <LuShoppingBag />
            <p className={utilityClasses}>0</p>
          </Icons>

          <Icons>
            <IoHomeOutline />
          </Icons>

          <Icons>
            <FaRegHeart />
            <p className={utilityClasses}>0</p>
          </Icons>

          <div onClick={() => setShowSideBar(true)}>
            <Icons>
              <CiMenuKebab />
            </Icons>
          </div>
        </div>
      </div>
      {showSideBar && (<SideBar />)}
    </div>
  );
};

export default Layout;