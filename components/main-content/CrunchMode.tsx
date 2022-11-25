import { motion } from "framer-motion";
import React from "react";
import { GiBiceps } from "react-icons/gi";
import { useRouter } from "next/router";

const CrunchMode = () => {
  const router = useRouter();
  return (
    <div className="flex relative h-72 mt-0 sm:mt-4 items-center justify-center w-full">
      <div className="hidden sm:inline-flex w-48 lg:w-64 h-[80%] lg:h-full bg-gradient-to-r from-[#de1245] to-orange-600 cliprightside"></div>
      <div className="h-auto relative bg-gradient-to-tr shadow-md shadow-black from-[#cc0234] to-orange-500 rounded-md p-6 flex-grow flex flex-col justify-center items-center space-y-5">
        <GiBiceps className="bicep absolute right-[45%] -top-[25%] text-[#cc0234]" />
        <GiBiceps className="bicep absolute right-[49%] -top-[35%] -scale-x-100 text-[#de1245]" />
        <div className="uppercase text-orange-200 mb-2 font-oswald font-bold text-2xl md:text-[3vw] scale-y-90">
          Go <span className="text-orange-300">Crunch</span> Mode
        </div>
        <div className="uppercase text-fuchsia-200 font-semibold font-mono tracking-wider text-[16px] md:text-[1.2vw] text-center">
          Memberships Starting at $9.99/Month
        </div>
        <motion.button
          className="px-10 py-3 shadow-sm shadow-orange-200 bg-orange-100 uppercase rounded-sm tracking-widest font-bold text-red-800 text-sm md:text-[1vw]"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => router.push("/payment")}
        >
          Join Now
        </motion.button>
      </div>
      <div className="hidden sm:inline-flex w-48 lg:w-64 h-[80%] lg:h-full bg-gradient-to-l from-[#de1245] to-orange-600 clipleftside"></div>
    </div>
  );
};

export default CrunchMode;
