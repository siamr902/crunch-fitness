import { motion } from "framer-motion";
import React from "react";
import { IconType } from "react-icons";

interface GroupClassProps {
  src: string;
  header: string;
  description: string;
  Icon: IconType;
}

const GroupClass = ({ src, header, description, Icon }: GroupClassProps) => {
  return (
    <motion.div
      className="relative group transition duration-300 ease-out rounded-md shadow-lg shadow-gray-400 w-[calc(100vw-10rem)] h-[250px] sm:w-[30vw] sm:h-[30vh] lg:h-[280px] lg:w-[300px] xl:h-[320px] xl:w-[380px] bg-no-repeat bg-cover object-contain"
      style={{ backgroundImage: `url(${src})` }}
      initial={{ opacity: 0.5 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{
        opacity: { duration: 4 },
        scale: { duration: 0 },
      }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 1 }}
    >
      <div className="hidden group-hover:flex justify-center items-center flex-col text-white group-hover:bg-opacity-75 absolute w-[100%] h-[100%] bg-gray-900">
        <Icon className="w-10 h-10" />
        <div className="font-semibold text-center uppercase font-croissant">{header}</div>
        <div className="text-center max-w-[80%] font-semibold mt-5">
          {description}
        </div>
      </div>
    </motion.div>
  );
};

export default GroupClass;
