import React from "react";

function MenuItems(props) {
  return (
    <p className="hover:cursor-pointer hover:text-orange-500">
      {props.description}
    </p>
  );
}

function MenuItemsContainer(props) {
  return (
    <div className="absolute z-10 flex w-48 flex-col gap-1 rounded-lg bg-white px-6 py-6 text-left text-base text-zinc-500 shadow-2xl transition-transform duration-1000 ease-in ">
      {props.children}
    </div>
  );
}

function MenuCard(props) {
  const [showMenu, setShowMenu] = React.useState(false);

  return (
    <div onMouseOut={() => setShowMenu(false)}>
      <div
        className="h-6 hover:text-orange-500 "
        onMouseOver={() => setShowMenu(true)}
      >
        <p
          className={`text-left font-semibold hover:cursor-pointer ${showMenu ? "text-orange-500" : "text-zinc-500"}`}
        >
          {props.header.toUpperCase()}
        </p>
        {showMenu && (
          <div className="border-b-[3px] border-orange-500 pt-3 transition-all"></div>
        )}
        <>{props.children}</>
      </div>
    </div>
  );
}

function CategoryItems(props) {
  return (
    <div className="">
      <p className="text-[18px] font-bold">{props.header}</p>
      <div className="border-b py-1"></div>
      <div className="pb-5 pt-2">
        <div className="flex flex-col gap-2">{props.children}</div>
      </div>
      <img src={props.imgSrc} alt="Img" className="rounded-md" />
    </div>
  );
}

function CategoryContainer(props) {
  return (
    <div className="absolute left-[4.5%] z-10 mt-4 grid w-11/12 grid-cols-4 gap-4 rounded-lg bg-white p-6 text-left text-zinc-500 shadow-2xl">
      {props.children}
    </div>
  );
}

export default function Menu() {
  const [mouseHover, setMouseHover] = React.useState(null);
  return (
    <div className="hidden items-center justify-center gap-10 text-zinc-700 md:flex">
      <div
        onMouseOver={() => setMouseHover(0)}
        onMouseOut={() => setMouseHover(null)}
      >
        <MenuCard header="Home" />
      </div>
      <div
        onMouseOver={() => setMouseHover(1)}
        onMouseOut={() => setMouseHover(null)}
      >
        <MenuCard header="Categories"></MenuCard>
        {mouseHover === 1 && (
          <CategoryContainer>
            <CategoryItems
              header="Electronics"
              imgSrc="https://e-commerce-smoky-eight-80.vercel.app/img/electronics-banner-1.jpg"
            >
              <MenuItems description="Desktop" />
              <MenuItems description="Laptop" />
              <MenuItems description="Camera" />
              <MenuItems description="Tablet" />
              <MenuItems description="HeadPhone" />
            </CategoryItems>

            <CategoryItems
              header="Men's"
              imgSrc="https://e-commerce-smoky-eight-80.vercel.app/img/mens-banner.jpg"
            >
              <MenuItems description="Desktop" />
              <MenuItems description="Laptop" />
              <MenuItems description="Camera" />
              <MenuItems description="Tablet" />
              <MenuItems description="HeadPhone" />
            </CategoryItems>

            <CategoryItems
              header="Women's"
              imgSrc="https://e-commerce-smoky-eight-80.vercel.app/img/womens-banner.jpg"
            >
              <MenuItems description="Desktop" />
              <MenuItems description="Laptop" />
              <MenuItems description="Camera" />
              <MenuItems description="Tablet" />
              <MenuItems description="HeadPhone" />
            </CategoryItems>

            <CategoryItems
              header="Electronics"
              imgSrc="https://e-commerce-smoky-eight-80.vercel.app/img/electronics-banner-2.jpg"
            >
              <MenuItems description="Desktop" />
              <MenuItems description="Laptop" />
              <MenuItems description="Camera" />
              <MenuItems description="Tablet" />
              <MenuItems description="HeadPhone" />
            </CategoryItems>
          </CategoryContainer>
        )}
      </div>

      <div
        onMouseOver={() => setMouseHover(2)}
        onMouseOut={() => setMouseHover(null)}
      >
        <MenuCard header="Men's">
          {mouseHover === 2 && (
            <MenuItemsContainer>
              <MenuItems description="Shirt" />
              <MenuItems description="Shorts & Jeans" />
              <MenuItems description="Safety Shoes" />
              <MenuItems description="Wallet" />
            </MenuItemsContainer>
          )}
        </MenuCard>
      </div>

      <div
        onMouseOver={() => setMouseHover(3)}
        onMouseOut={() => setMouseHover(null)}
      >
        <MenuCard header="Women's">
          {mouseHover === 3 && (
            <MenuItemsContainer>
              <MenuItems description="Dressing & Frock" />
              <MenuItems description="Earrings" />
              <MenuItems description="Necklace" />
              <MenuItems description="Makeup kit" />
            </MenuItemsContainer>
          )}
        </MenuCard>
      </div>

      <div
        onMouseOver={() => setMouseHover(4)}
        onMouseOut={() => setMouseHover(null)}
      >
        <MenuCard header="Jewelrey">
          {mouseHover === 4 && (
            <MenuItemsContainer>
              <MenuItems description="Earrings" />
              <MenuItems description="Couple Rings" />
              <MenuItems description="Necklace" />
              <MenuItems description="Bracelet" />
            </MenuItemsContainer>
          )}
        </MenuCard>
      </div>

      <div
        onMouseOver={() => setMouseHover(5)}
        onMouseOut={() => setMouseHover(null)}
      >
        <MenuCard header="Perfume">
          {mouseHover === 5 && (
            <MenuItemsContainer>
              <MenuItems description="Clothes Perfume" />
              <MenuItems description="Deodorant" />
              <MenuItems description="Flower Fragrance" />
              <MenuItems description="Air Freshner" />
            </MenuItemsContainer>
          )}
        </MenuCard>
      </div>

      <div
        onMouseOver={() => setMouseHover(6)}
        onMouseOut={() => setMouseHover(null)}
      >
        <MenuCard header="blogs" />
      </div>

      <div
        onMouseOver={() => setMouseHover(7)}
        onMouseOut={() => setMouseHover(null)}
      >
        <MenuCard header="hot offers" />
      </div>
    </div>
  );
}
