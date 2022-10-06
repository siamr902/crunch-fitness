import { motion } from "framer-motion";
import React from "react";
import { GiBiceps } from "react-icons/gi";

const CrunchMode = () => {
  return (
    <div className="hidden sm:flex relative h-72 mt-4 items-center justify-center w-full">
      <div className="w-64 h-full bg-gradient-to-r from-[#de1245] to-orange-600 cliprightside"></div>
      <div className="h-auto relative bg-gradient-to-tr shadow-md shadow-black from-[#cc0234] to-orange-500 rounded-md p-6 flex-grow flex flex-col justify-center items-center">
        <GiBiceps className="bicep absolute right-[45%] -top-[22%] text-[#cc0234]" />
        <GiBiceps className="bicep absolute right-[49%] -top-[22%] -scale-x-100 text-[#de1245]" />
        <div className="uppercase text-orange-200 mb-2 font-oswald text-[3vw] scale-y-90">
          Go <span className="text-orange-300">Crunch</span> Mode
        </div>
        <div className="uppercase text-fuchsia-200 font-semibold font-mono tracking-wider text-[1.5vw] text-center">
          Memberships Starting at $9.99/Month
        </div>
        <motion.button
          className="w-[25%] h-[20%] p-3 mt-6 shadow-sm shadow-orange-200 bg-orange-100 uppercase rounded-sm tracking-widest font-bold text-red-800 text-[1vw]"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Join Now
        </motion.button>
      </div>
      <div className="w-64 h-full bg-gradient-to-l from-[#de1245] to-orange-600 clipleftside"></div>
    </div>
  );
};

export default CrunchMode;
