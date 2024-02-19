import React from "react";
import BestSellersSideBar from "./BestSellersSideBar";
import dress from "../assets/dress.svg";
import bag from "../assets/bag.svg";
import perfume from "../assets/perfume.svg";
import cosmetics from "../assets/cosmetics.svg";
import jewelry from "../assets/jewelry.svg";
import shoes from "../assets/shoes.svg";
import glasses from "../assets/glasses.svg";
import HeadingText from "./HeadingText";

function CategoryItems(props) {
  return (
    <div>
      <div className={`${props.showBorder} flex items-center justify-between text-zinc-500`}>
        <div className="flex gap-2">
          <img src={props.imgSrc} alt="" className="h-6 w-6" />
          <p className="text-base font-medium">{props.desc}</p>
        </div>
         <p className="text-[22px] font-bold" onClick={props.onclick}>{props.symbol}</p>
      </div>
        <ul className="my-2">

            {props.children}
        </ul>
    </div>
  );
}

function Item(props) {
  return (
    <li className="flex justify-between text-base ml-8 text-zinc-500 hover:text-black">
      <p>{props.name}</p>
      <p>{props.quantity}</p>
    </li>
  );
}

export default function SideBar() {
  const [showList, setShowList] = React.useState(null);

  return (
    <section className="fixed md:relative left-0 top-0 z-50 h-auto w-10/12 md:w-[280px] bg-white py-6 px-5 md:p-0 md:shadow-none shadow-[-5px_0px_60px_5px_rgba(0,0,0,0.35)]">
        <div className="overflow-y-scroll h-screen md:h-auto">

        <ul className="py-4 md:mx-1 md:my-1 flex flex-col  md:rounded-lg md:outline outline-1 outline-zinc-200 md:p-4">
        <div className="flex items-center justify-between text-[20px] font-bold">
            <p>Category</p>
            <p className="md:hidden">X</p>
        </div>
            <li onClick={() => setShowList(0)}>
                <CategoryItems imgSrc={dress} desc="clothes" symbol={showList === 0 ? "-" : "+"} showBorder={showList === 0 && "border-b"} onclick={() => setShowList(null)}>
                    {showList === 0 && (
                        <>
                            <Item name="Shirt" quantity="300" />
                            <Item name="Short & Jeans" quantity="60" />
                            <Item name="Jackets" quantity="50" />
                            <Item name="Dress & Frocks" quantity="87" />
                        </>
                    )}
                </CategoryItems>
            </li>

            <li onClick={() => setShowList(1)}>
                <CategoryItems imgSrc={shoes} desc="Footwares" symbol={showList === 1 ? "-" : "+"} showBorder={showList === 1 && "border-b"}>
                    {showList === 1 && (
                        <>
                            <Item name="Sports" quantity="45" />
                            <Item name="Casual" quantity="75" />
                            <Item name="Casual" quantity="26" />
                            <Item name="Safety Shoes" quantity="26" />
                        </>
                    )}
                </CategoryItems>
            </li>

            <li onClick={() => setShowList(2)}>
                <CategoryItems imgSrc={jewelry} desc="Jewelry" symbol={showList === 2 ? "-" : "+"} showBorder={showList === 2 && "border-b"}>
                    {showList === 2 && (
                        <>
                            <Item name="Earrings" quantity="46" />
                            <Item name="Couple Rings" quantity="73" />
                            <Item name="NECKLACE" quantity="61" />
                        </>
                    )}
                </CategoryItems>
            </li>

            <li onClick={() => setShowList(3)}>
                <CategoryItems imgSrc={perfume} desc="Perfume" symbol={showList === 3 ? "-" : "+"} showBorder={showList === 3 && "border-b"}>
                    {showList === 3 && (
                        <>
                            <Item name="Clothe Perfume" quantity="12 pcs" />
                            <Item name="Deodorant" quantity="68 pcs" />
                            <Item name="Jacket" quantity="50 pcs" />
                            <Item name="Dress & Frocks" quantity="87 pcs" />
                        </>
                    )}
                </CategoryItems>
            </li>

            <li onClick={() => setShowList(4)}>
                <CategoryItems imgSrc={cosmetics} desc="Cosmetics" symbol={showList === 4 ? "-" : "+"} showBorder={showList === 4 && "border-b"}>
                    {showList === 4 && (
                        <>
                            <Item name="Shampoo" quantity="68" />
                            <Item name="Sunscreen" quantity="46" />
                            <Item name="Body Wash" quantity="79" />
                            <Item name="Makeup Kit" quantity="23" />
                        </>
                    )}
                </CategoryItems>
            </li>

            <li onClick={() => setShowList(5)}>
                <CategoryItems imgSrc={glasses} desc="Glasses" symbol={showList === 5 ? "-" : "+"} showBorder={showList === 5 && "border-b"}>
                    {showList === 5 && (
                        <>
                            <Item name="Sun Glasses" quantity="68" />
                            <Item name="Lenses" quantity="46" />
                        </>
                    )}
                </CategoryItems>
            </li>

            <li onClick={() => setShowList(6)}>
                <CategoryItems imgSrc={bag} desc="Bags" symbol={showList === 6 ? "-" : "+"} showBorder={showList === 6 && "border-b"}>
                    {showList === 6 && (
                        <>
                            <Item name="Shirt" quantity="300" />
                            <Item name="Short & Jeans" quantity="60" />
                            <Item name="Jackets" quantity="50" />
                            <Item name="Dress & Frocks" quantity="87" />
                        </>
                    )}
                </CategoryItems>
            </li>

        </ul>
        <div className="m-4">

            <HeadingText header="Best Sellers"/>
        </div>
            <BestSellersSideBar/>
        </div>
    </section>
  );
}
