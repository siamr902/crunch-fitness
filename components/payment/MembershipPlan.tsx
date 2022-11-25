import React, { ReactNode } from "react";
import { AiOutlineStar } from "react-icons/ai";
import { checkout } from "../../lib/checkout";

interface PlanProps {
  plan: string;
  price: string;
  clubs: string;
  info: string[];
  gradient?: string;
  color?: string;
  apiId: string;
  quantity?: number;
}

const formatPrice = (price: string): ReactNode => {
  const [dollars, cents] = price.split(".");
  return (
    <div>
      <span className="text-2xl align-super">$</span>
      {dollars}
      <span className="align-super text-2xl">{cents}*</span>
    </div>
  );
};

const MembershipPlan = ({
  plan,
  price,
  clubs,
  info,
  gradient,
  color,
  apiId,
  quantity = 1,
}: PlanProps) => {
  return (
    <div className="flex flex-col">
      <hr
        className="w-full h-[8px]"
        style={{ background: `linear-gradient(to right, ${gradient})` }}
      />
      <section className="relative flex flex-col justify-center items-center bg-[#F4F4F4] p-5 w-[calc(100vw-7rem)] md:w-[29vw]">
        {plan === "Peak Results" && (
          <AiOutlineStar className="w-7 h-7 sm:w-10 sm:h-10 absolute top-2 left-2 text-amber-600 cursor-pointer" />
        )}
        <div className="font-bold text-gray-800 text-center">{plan}</div>
        <div className="mt-5 text-6xl text-[#222] text-center font-bold">
          {formatPrice(price)}
        </div>
        <div className="mt-5 text-gray-400 text-sm text-center font-semibold">
          Monthly Recurring Payment
        </div>
        <div className="h-[2px] bg-[#333] w-[25%] my-5"></div>
        <div
          className="uppercase font-semibold text-center"
          style={{ color: color }}
        >
          {clubs}
        </div>
        <hr className="h-[2px] bg-[#333] w-[25%] my-5" />
        <button
          className="text-white bg-[#222] shadow-md shadow-gray-500 p-4 mt-24 w-[95%] font-semibold text-[22px] tracking-wide active:scale-90 transition duration-200 ease-out"
          onClick={() => {
            checkout({
              lineItems: [
                {
                  price: apiId,
                  quantity: quantity,
                },
              ],
            });
          }}
        >
          SELECT
        </button>
      </section>
      <section
        className="flex flex-col justify-start text-center h-[75vh] items-center p-5 w-[calc(100vw-7rem)] md:w-[29vw] text-white"
        style={{ background: `linear-gradient(to bottom right, ${gradient})` }}
      >
        <div className="uppercase font-bold tracking-widest pt-5">Includes</div>
        {info.map((piece) => (
          <div key={piece} className="text-white font-semibold my-[2px]">
            {piece}
          </div>
        ))}
        <div className="flex flex-col space-y-1 mt-auto pb-5">
          <div className="uppercase font-bold tracking-widest">
            Available Add-Ons
          </div>
          <div className="font-semibold">Personal Training</div>
        </div>
      </section>
      <div className="w-full h-[10px] bg-[#222]" />
    </div>
  );
};

export default MembershipPlan;
