// eslint-disable-next-line no-unused-vars
import React from "react";
import Btn from "./Btn";

function CountDown(props) {
  return (
    <div className="bg-zinc-200 flex flex-col items-center justify-center rounded-lg h-12 md:h-[60px] w-12 md:w-[60px]">
      <p className="text-sm md:text-base font-bold">{props.count}</p>
      <p className="text-xs md:text-sm">{props.desc}</p>
    </div>
  );
}

export default function DealDay(props) {
  const [days, setDays] = React.useState(null)
  const [hours, setHours] = React.useState(null)
  const [minutes, setMinutes] = React.useState(null)
  const [seconds, setSeconds] = React.useState(null)

  React.useEffect(() => {
    function updateCountdown() {
      const targetDate = new Date('2024-03-31T23:59:59').getTime();
  
      const currentDate = new Date().getTime();
  
      const remainingTime = targetDate - currentDate;
  
      setDays(Math.floor(remainingTime / (1000 * 60 * 60 * 24)));
      setHours(Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
      setMinutes(Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60)));
      setSeconds(Math.floor((remainingTime % (1000 * 60)) / 1000));
  
      requestAnimationFrame(updateCountdown);
    }
    updateCountdown()
  }, [])


  return (
    <div className="m-[1px] w-[90vw] grid-cols-2 gap-2 rounded-lg p-4 outline outline-1 outline-zinc-200 sm:grid md:w-auto md:p-6">
      <img src={props.imgSrc} alt="" className="" />
      <div className="flex flex-col gap-3 text-left text-zinc-600 md:my-auto md:gap-4">
        <div className="flex">{props.children}</div>
        <p className="text-sm font-semibold md:text-base md:font-bold">
          {props.header}
        </p>
        <p className="text-base font-light ">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa
          architecto placeat repellendus optio itaque fugit repellat?
        </p>
        <div className="flex items-center gap-3 text-[22px]">
          <p className="font-extrabold text-orange-500">${props.price}</p>
          <p className="text-lg font-light text-zinc-500 line-through">
            ${props.oldPrice}
          </p>
        </div>
        <Btn displayText="ADD TO CART" classes="h-8 w-28 md:h-8 md:w-32" />
        <div className="flex justify-between text-xs">
          <p>
            ALREADY SOLD:<span className="font-bold">{props.sold}</span>
          </p>
          <p>
            AVAILABLE:<span className="font-bold">{props.available}</span>
          </p>
        </div>
        <div className="flex h-2 w-full items-center rounded-lg bg-zinc-200">
          <div className="mx-1 h-1 w-[40%] rounded-2xl bg-orange-500"></div>
        </div>
        <p className="text-xs font-bold">HURRY UP! OFFER ENDS IN:</p>
        <div className="flex gap-4">
          <CountDown 
            count={days}
            desc="Days"
          />
          <CountDown 
            count={hours}
            desc="Hours"
          />
          <CountDown 
            count={minutes}
            desc="Min"
          />
          <CountDown 
            count={seconds}
            desc="Sec"
          />
        </div>
      </div>
    </div>
  );
}
