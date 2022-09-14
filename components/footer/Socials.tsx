import React from "react";
import { IconType } from "react-icons";

interface IconProps {
  Icon: IconType;
  link: string;
}

const Socials = ({ Icon, link }: IconProps) => {
  return (
    <div className="flex items-center cursor-pointer text-white">
      <a href={link} target="_blank">
        <Icon className="w-6 h-6 hover:animate-pulse"/>
      </a>
    </div>
  );
};

export default Socials;
