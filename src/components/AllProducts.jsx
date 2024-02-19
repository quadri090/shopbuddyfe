import React from 'react'
import ProductCardLg from "./ProductCardLg";
import SecondImage from "./SecondImage";
import FirstProductImage from "./FirstProductImage";
import clothes4 from "../assets/clothes-4.jpg";
import shirt2 from "../assets/shirt-2.jpg";
import jacket3 from "../assets/jacket-3.jpg";
import shirt1 from "../assets/shirt-1.jpg";
import jacket4 from "../assets/jacket-4.jpg";
import jacket5 from "../assets/jacket-5.jpg";
import clothes3 from "../assets/clothes-3.jpg";
import jacket6 from "../assets/jacket-6.jpg";
import jacket1 from "../assets/jacket-1.jpg";
import jacket2 from "../assets/jacket-2.jpg";
import shoe2 from "../assets/shoe-2.jpg";
import shoe21 from "../assets/shoe-2_1.jpg";
import shoe1 from "../assets/shoe-1.jpg";
import shoe11 from "../assets/shoe-1_1.jpg"
import watch3 from "../assets/watch-3.jpg";
import watch4 from "../assets/watch-4.jpg";
import watch1 from "../assets/watch-1.jpg";
import watch2 from "../assets/watch-2.jpg";
import partywear1 from "../assets/party-wear-1.jpg";
import partywear2 from "../assets/party-wear-2.jpg";
import sports2 from "../assets/sports-2.jpg";
import sports4 from "../assets/sports-4.jpg";
import shorts1 from "../assets/shorts-1.jpg";
import shorts2 from "../assets/shorts-2.jpg";





export default function AllProducts() {
  const [showSecondImage, setShowSeondImage] = React.useState(null);

  return (
    <>
        <div className="col-span-3 flex grid-cols-2 flex-col gap-4 sm:grid md:grid-cols-4 md:gap-6">
          <div
            onMouseOver={() => setShowSeondImage(0)}
            onClick={() => setShowSeondImage(0)}
            onMouseLeave={() => setShowSeondImage(null)}
          >
            <ProductCardLg
              header="JACKET"
              desc="Mens Winter Leather Jackets"
              price="48"
              oldPrice="75"
            >
              {showSecondImage !== 0 && <FirstProductImage imgSrc={jacket3} />}
              {showSecondImage === 0 && <SecondImage imgSrc={jacket4} />}
            </ProductCardLg>
          </div>

          <div
            onMouseOver={() => setShowSeondImage(1)}
            onClick={() => setShowSeondImage(1)}
            onMouseLeave={() => setShowSeondImage(null)}
          >
            <ProductCardLg
              header="SKIRT"
              desc="Pure Garmet Dyed Cotton"
              price="45"
              oldPrice="56"
            >
              {showSecondImage !== 1 && (
                <FirstProductImage imgSrc={shirt1} />
              )}
              {showSecondImage === 1 && <SecondImage imgSrc={shirt2} />}
            </ProductCardLg>
          </div>

          <div
            onMouseOver={() => setShowSeondImage(2)}
            onClick={() => setShowSeondImage(2)}
            onMouseLeave={() => setShowSeondImage(null)}
          >
            <ProductCardLg
              header="JACKET"
              desc="Men Yarn Fleece Full-Zip Jacket"
              price="58"
              oldPrice="65"
            >
              {showSecondImage !== 2 && (
                <FirstProductImage imgSrc={jacket5} />
              )}
              {showSecondImage === 2 && <SecondImage imgSrc={jacket6} />}
            </ProductCardLg>
          </div>

          <div
            onMouseOver={() => setShowSeondImage(3)}
            onClick={() => setShowSeondImage(3)}
            onMouseLeave={() => setShowSeondImage(null)}
          >
            <ProductCardLg
              header="SKIRT"
              desc="Black FLoral Wrap Midi Skirt"
              price="25"
              oldPrice="35"
            >
              {showSecondImage !== 3 && (
                <FirstProductImage imgSrc={clothes3} />
              )}
              {showSecondImage === 3 && <SecondImage imgSrc={clothes4} />}
            </ProductCardLg>
          </div>
        </div>

        <div className="col-span-3 flex grid-cols-2 flex-col gap-4 sm:grid md:grid-cols-4 md:gap-6">
          <div
            onMouseOver={() => setShowSeondImage(4)}
            onClick={() => setShowSeondImage(4)}
            onMouseLeave={() => setShowSeondImage(null)}
          >
            <ProductCardLg
              header="CASUAL"
              desc="Casual Mens Brown Shoes"
              price="99"
              oldPrice="105"
            >
              {showSecondImage !== 4 && <FirstProductImage imgSrc={shoe2} />}
              {showSecondImage === 4 && <SecondImage imgSrc={shoe21} />}
            </ProductCardLg>
          </div>

          <div
            onMouseOver={() => setShowSeondImage(5)}
            onClick={() => setShowSeondImage(5)}
            onMouseLeave={() => setShowSeondImage(null)}
          >
            <ProductCardLg
              header="WATCHES"
              desc="Pocket Watch Leather Pouch"
              price="150"
              oldPrice="170"
            >
              {showSecondImage !== 5 && (
                <FirstProductImage imgSrc={watch3} />
              )}
              {showSecondImage === 5 && <SecondImage imgSrc={watch4} />}
            </ProductCardLg>
          </div>

          <div
            onMouseOver={() => setShowSeondImage(6)}
            onClick={() => setShowSeondImage(6)}
            onMouseLeave={() => setShowSeondImage(null)}
          >
            <ProductCardLg
              header="Watches"
              desc="Smart Watch Vital Plus"
              price="100"
              oldPrice="120"
            >
              {showSecondImage !== 6 && (
                <FirstProductImage imgSrc={watch1} />
              )}
              {showSecondImage === 6 && <SecondImage imgSrc={watch2} />}
            </ProductCardLg>
          </div>

          <div
            onMouseOver={() => setShowSeondImage(7)}
            onClick={() => setShowSeondImage(7)}
            onMouseLeave={() => setShowSeondImage(null)}
          >
            <ProductCardLg
              header="PARTY WEAR"
              desc="Womens Party Wear Shoes"
              price="25"
              oldPrice="30"
            >
              {showSecondImage !== 7 && (
                <FirstProductImage imgSrc={partywear1} />
              )}
              {showSecondImage === 7 && <SecondImage imgSrc={partywear2} />}
            </ProductCardLg>
          </div>
        </div>

        <div className="col-span-3 flex grid-cols-2 flex-col gap-4 sm:grid md:grid-cols-4 md:gap-6">
          <div
            onMouseOver={() => setShowSeondImage(0)}
            onClick={() => setShowSeondImage(0)}
            onMouseLeave={() => setShowSeondImage(null)}
          >
            <ProductCardLg
              header="JACKET"
              desc="Mens Winter Leather Jackets"
              price="48"
              oldPrice="75"
            >
              {showSecondImage !== 0 && <FirstProductImage imgSrc={jacket1} />}
              {showSecondImage === 0 && <SecondImage imgSrc={jacket2} />}
            </ProductCardLg>
          </div>

          <div
            onMouseOver={() => setShowSeondImage(1)}
            onClick={() => setShowSeondImage(1)}
            onMouseLeave={() => setShowSeondImage(null)}
          >
            <ProductCardLg
              header="SPORT"
              desc="Trekking & Running Shoes - Black"
              price="58"
              oldPrice="64"
            >
              {showSecondImage !== 1 && (
                <FirstProductImage imgSrc={sports2} />
              )}
              {showSecondImage === 1 && <SecondImage imgSrc={sports4} />}
            </ProductCardLg>
          </div>

          <div
            onMouseOver={() => setShowSeondImage(2)}
            onClick={() => setShowSeondImage(2)}
            onMouseLeave={() => setShowSeondImage(null)}
          >
            <ProductCardLg
              header="Formal"
              desc="Mens Leather Formal Wear Shoes"
              price="50"
              oldPrice="65"
            >
              {showSecondImage !== 2 && (
                <FirstProductImage imgSrc={shoe1} />
              )}
              {showSecondImage === 2 && <SecondImage imgSrc={shoe11} />}
            </ProductCardLg>
          </div>

          <div
            onMouseOver={() => setShowSeondImage(3)}
            onClick={() => setShowSeondImage(3)}
            onMouseLeave={() => setShowSeondImage(null)}
          >
            <ProductCardLg
              header="SHORTS"
              desc="Better Basics French Terry Sweatshorts"
              price="70"
              oldPrice="85"
            >
              {showSecondImage !== 3 && (
                <FirstProductImage imgSrc={shorts1} />
              )}
              {showSecondImage === 3 && <SecondImage imgSrc={shorts2} />}
            </ProductCardLg>
          </div>
        </div>
    </>
  )
}
