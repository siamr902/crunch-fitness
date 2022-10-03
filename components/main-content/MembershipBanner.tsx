import React from "react";
import {GiCrown} from "react-icons/gi";

const MembershipBanner = () => {
  return (
    <div className="relative w-full bg-gradient-to-r from-[#de1245] to-[#ffbc15] p-10 flex justify-center items-center mt-10">
        <GiCrown className="w-12 h-8 absolute top-1 left-[48%] text-white"/>
      <div className="group cursor-pointer font-semibold bg-white py-5 px-10 text-lg uppercase tracking-wider">
        <span className="group-hover:text-orange-400 bg-clip-text text-transparent bg-gradient-to-r from-red-800 to-[#de1245] transition duration-300 ease-in-out">
          See Our Membership Options
        </span>
      </div>
    </div>
  );
};

export default MembershipBanner;
