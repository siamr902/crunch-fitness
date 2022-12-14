import React from "react";

const Banner = () => {
  return (
    <div className="flex bg-gradient-to-r from-orange-500 to-fuchsia-600 h-48 w-full lg:w-[calc(100%-17rem)] lg:clipbg justify-center pr-4 items-center -z-50 font-banner border-t-[5px] border-b-[5px] border-orange-700 shadow-lg">
      <p className="text-white select-none text-2xl sm:text-[5vw] text-center">
        Our Gym is{" "}
        <span className="font-croissant text-pink-300 cursor-pointer">
          YOUR
        </span>{" "}
        Gym
      </p>
    </div>
  );
};

export default Banner;
