import React from "react";
import SideBar from "./SideBar";
import { LuShoppingBag } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa6";
import { IoMenuOutline } from "react-icons/io5";
import { HiOutlineSquares2X2 } from "react-icons/hi2";
import { IoHomeOutline } from "react-icons/io5";
import { MdClose } from "react-icons/md";

const Icons = (props) => {
  return (
    <div className="relative flex h-12 w-12 items-center justify-center bg-zinc-200 text-[25px] shadow-2x hover:bg-zinc-300 hover:cursor-pointer rounded-[4px]">
      {props.children}
    </div>
  );
};

export const Layout = () => {

  const utilityClasses =
    "bg-orange-500 w-[15px] h-[15px] rounded-full text-center absolute top-[0] right-[0] text-[10px] text-white font-semibold";

  const [showSideBar, setShowSideBar] = React.useState(false);

  return (
    <div>
      <div className="fixed bottom-0 left-0 flex h-16 w-full bg-white sm:rounded-t-xl shadow-[0px_15px_15px_15px_rgba(0,0,0,0.35)] sm:mx-auto sm:w-[50%] sm:-right-[25%] sm:-left-[25%] md:hidden z-10 ">
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
            <HiOutlineSquares2X2 />
            </Icons>
          </div>
        </div>
      </div>
      {showSideBar && (<SideBar>
        <i className="" onClick={() => setShowSideBar(false)}>
        <MdClose className="md:hidden text-[24px]" />
        </i>
      </SideBar>)}
    </div>
  );
};

export default Layout;
