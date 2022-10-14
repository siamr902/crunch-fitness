import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { IconType } from "react-icons";

interface TrainerProps {
  name: string;
  age: number;
  pic: string | undefined;
  desc: string;
  Icon: IconType;
}

const Trainer = ({ name, age, pic, desc, Icon }: TrainerProps) => {
  return (
    <div className="relative w-[27vw] shadow-md shadow-gray-500 rounded-md flex flex-col space-y-3 items-center justify-center text-center px-5 py-10">
      <Icon className="w-10 h-10 absolute left-[50%] -translate-x-[50%] top-3 z-10 text-amber-600" />
      <motion.div
        whileHover={{ rotate: 360 }}
        transition={{ duration: 2, ease: "easeInOut", delay: 0.25 }}
      >
        <Image
          src={pic!}
          width={150}
          height={150}
          className="rounded-full select-none cursor-pointer"
        />
      </motion.div>
      <div className="text-[1.5vw] font-banner">{name}</div>
      <div className="text-[1.25vw] font-croissant text-blue-800">{age}</div>
      <div className="text-[1.15vw] font-oswald opacity-90">{desc}</div>
    </div>
  );
};

export default Trainer;
