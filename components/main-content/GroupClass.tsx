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
    <div
      className="relative group hover:scale-105 transition duration-300 ease-in-out shadow-lg shadow-gray-400 hidden md:inline-flex md:w-[220px] md:h-[280px] lg:h-[280px] lg:w-[280px] xl:h-[320px] xl:w-[380px] bg-no-repeat bg-cover cursor-pointer"
      style={{ backgroundImage: `url(${src})` }}
    >
      <div className="hidden group-hover:flex justify-center items-center flex-col group-hover:bg-opacity-75 absolute w-[100%] h-[100%] bg-orange-400">
        <Icon className="w-10 h-10 text-white" />
        <div className="font-semibold uppercase font-croissant text-white">
          {header}
        </div>
        <div className="text-center max-w-[80%] font-bold text-white mt-5">{description}</div>
      </div>
    </div>
  );
};

export default GroupClass;
