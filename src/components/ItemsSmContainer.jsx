import React from "react";
import ItemsSm from "./ItemsSm";
import ProductCardSm from "./ProductCardSm";
import SideBar from "./SideBar";
import DealDay from "./DealDay";
import HeadingText from "./HeadingText";
import coat from "../assets/coat.svg";
import clothes1 from "../assets/clothes-1.jpg";
import clothes2 from "../assets/clothes-2.jpg";
import clothes3 from "../assets/clothes-3.jpg";
import shirt1 from "../assets/shirt-1.jpg";
import sports1 from "../assets/sports-1.jpg";
import sports2 from "../assets/sports-2.jpg";
import sports3 from "../assets/sports-3.jpg";
import partywear1 from "../assets/party-wear-1.jpg";
import watch from "../assets/watch-3.jpg";
import jewelrey from "../assets/jewellery-3.jpg";
import perfume from "../assets/perfume.jpg";
import belt from "../assets/belt.jpg";
import jacket1 from "../assets/jacket-1.jpg";
import jacket3 from "../assets/jacket-3.jpg";
import jacket5 from "../assets/jacket-5.jpg";
import shorts1 from "../assets/shorts-1.jpg";
import sports6 from "../assets/sports-6.jpg";
import shoe3 from "../assets/shoe-3.jpg";
import shoe2 from "../assets/shoe-2.jpg";
import shoe1 from "../assets/shoe-1.jpg";
import jewellery1 from "../assets/jewellery-1.jpg";
import jewellery2 from "../assets/jewellery-2.jpg";
import watch1 from "../assets/watch-1.jpg";
import shampoo from "../assets/shampoo.jpg";

export default function ItemsSmContainer() {
  return (
    <div className=" mt-10 sm:pt-20 flex grid-cols-4 flex-col gap-8 md:grid md:h-[600px] md:gap-0">
      <div className="relative col-span-1 hidden md:block">
        <SideBar />
      </div>

      <div className="col-span-3 grid-cols-3 overflow-y-scroll md:grid gap-2">
        <ItemsSm header="New Arrivals">
          <div className="flex flex-col gap-3">
            <ProductCardSm
              iconSrc={clothes1}
              desc="Relaxed Short Full Sleeve T-Shirt"
              category="Clothes"
              price="45"
              oldPrice="12"
            />
            <ProductCardSm
              iconSrc={clothes2}
              desc="Girls Pink Embryo Design"
              category="Clothes"
              price="45"
              oldPrice="12"
            />
            <ProductCardSm
              iconSrc={clothes3}
              desc="Black Floral Wrap Midi Skirt"
              category="Clothes"
              price="45"
              oldPrice="12"
            />
            <ProductCardSm
              iconSrc={shirt1}
              desc="Pure Garmet Dyed Cotton Shirt"
              category="Clothes"
              price="45"
              oldPrice="12"
            />
          </div>
          <div className="flex flex-col gap-3 md:hidden">
            <ProductCardSm
              iconSrc={jacket1}
              desc="Men Yarn Fleece Full-Zip Jacket"
              category="Winter Wear"
              price="61"
              oldPrice="11"
            />{" "}
            <ProductCardSm
              iconSrc={jacket3}
              desc="Mens Winter Leather Jacket"
              category="Winter Wear"
              price="32"
              oldPrice="20"
            />
            <ProductCardSm
              iconSrc={jacket5}
              desc="Mens Winter Leather Jacket"
              category="Jackets"
              price="50"
              oldPrice="25"
            />
            <ProductCardSm
              iconSrc={shorts1}
              desc="Better Basics French Terry Sweats.."
              category="Clothes"
              price="20"
              oldPrice="10"
            />
          </div>
        </ItemsSm>

        <ItemsSm header="Trending">
          <div className="flex flex-col gap-3">
            <ProductCardSm
              iconSrc={sports1}
              desc="Running And Trekking Shoes - Whi..."
              category="Clothes"
              price="40"
              oldPrice="15"
            />
            <ProductCardSm
              iconSrc={sports2}
              desc="Running And Trekking Shoes - Bla.."
              category="Clothes"
              price="78"
              oldPrice="36"
            />
            <ProductCardSm
              iconSrc={sports3}
              desc="Womens Party Wear Shoes"
              category="Clothes"
              price="94"
              oldPrice="42"
            />
            <ProductCardSm
              iconSrc={partywear1}
              desc="Sports Claw Womens Shoes"
              category="Clothes"
              price="54"
              oldPrice="65"
            />
          </div>
          <div className="flex flex-col gap-3 md:hidden">
            <ProductCardSm
              iconSrc={sports6}
              desc="Air Trekking Shoes - White"
              category="Sports"
              price="52"
              oldPrice="55"
            />{" "}
            <ProductCardSm
              iconSrc={shoe3}
              desc="Boot With Suede Detail"
              category="Boots"
              price="20"
              oldPrice="30"
            />
            <ProductCardSm
              iconSrc={shoe1}
              desc="Mens Leather Formal Wear Shoes"
              category="Formal"
              price="56"
              oldPrice="78"
            />
            <ProductCardSm
              iconSrc={shoe2}
              desc="Casual Mens Brown Shoes"
              category="Casual"
              price="50"
              oldPrice="55"
            />
          </div>
        </ItemsSm>

        <ItemsSm header="Top Rated">
          <div className="flex flex-col gap-3">
            <ProductCardSm
              iconSrc={watch}
              desc="Pocket Watch Leather Pouch"
              category="Watches"
              price="34"
              oldPrice="50"
            />
            <ProductCardSm
              iconSrc={jewelrey}
              desc="Silver Deer Heart Necklace"
              category="Jewellry"
              price="84"
              oldPrice="30"
            />
            <ProductCardSm
              iconSrc={perfume}
              desc="Titan 100Ml Womens Perfume"
              category="Perfume"
              price="42"
              oldPrice="10"
            />
            <ProductCardSm
              iconSrc={belt}
              desc="Sports Claw Womens Shoes"
              category="Belt"
              price="24"
              oldPrice="10"
            />
          </div>
          <div className="flex flex-col gap-3 md:hidden">
            <ProductCardSm
              iconSrc={jewellery2}
              desc="Platinum Zicron Classic Ring"
              category="Jewellry"
              price="62"
              oldPrice="65"
            />{" "}
            <ProductCardSm
              iconSrc={watch1}
              desc="Smart Watch Vital Plus"
              category="Watches"
              price="56"
              oldPrice="78"
            />
            <ProductCardSm
              iconSrc={shampoo}
              desc="Shampoo Conditioner Packs"
              category="Cosmetics"
              price="20"
              oldPrice="30"
            />
            <ProductCardSm
              iconSrc={jewellery1}
              desc="Rose Gold Peacock Earrings"
              category="Jewellry"
              price="20"
              oldPrice="30"
            />
          </div>
        </ItemsSm>

        <HeadingText header="Deal Of The Day" />

        <div className="col-span-3 m-1 mt-4 flex gap-2 overflow-x-scroll md:overflow-visible">
        <div className="w-[100%]">
            <DealDay
              imgSrc={shampoo}
              header="SHAMPOO, CONDITIONER & FACEWASH PACKS"
              price="150"
              oldPrice="200"
              sold="20"
              available="40"
            />
          </div>

          <div className="w-[100%] md:hidden">
            <DealDay
              imgSrc={jewellery1}
              header="ROSE GOLD DIAMOND EARRING"
              price="1990"
              oldPrice="2000"
              sold="15"
              available="40"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
