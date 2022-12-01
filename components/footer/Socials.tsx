import React from "react";
import { IconType } from "react-icons";

interface IconProps {
  Icon: IconType;
  link: string;
  color?: string
}

const Socials = ({ Icon, link, color }: IconProps) => {
  return (
    <div className={`flex items-center cursor-pointer ${color}`}>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <Icon className="w-6 h-6 hover:animate-pulse"/>
      </a>
    </div>
  );
};

export default Socials;
