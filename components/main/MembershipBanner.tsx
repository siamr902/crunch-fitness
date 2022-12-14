import React from "react";
import { GiCrown } from "react-icons/gi";
import { useRouter } from "next/router";

const MembershipBanner = () => {
  const router = useRouter();
  return (
    <div className="relative w-full bg-gradient-to-r from-[#de1245] to-[#ffbc15] px-10 pb-8 pt-6 flex flex-col space-y-2 justify-center items-center mt-10">
      <GiCrown className="w-12 h-8 text-white" />
      <button
        className="group cursor-pointer font-semibold bg-white p-4 sm:py-5 sm:px-10 text-lg uppercase tracking-wider active:scale-90 transition duration-200 ease-in-out"
        onClick={() => router.push("/payment")}
      >
        <span className="group-hover:text-orange-400 text-center text-sm sm:text-lg bg-clip-text text-transparent bg-gradient-to-r from-red-800 to-[#de1245] transition duration-300 ease-in-out">
          See Our Membership Options
        </span>
      </button>
    </div>
  );
};

export default MembershipBanner;
