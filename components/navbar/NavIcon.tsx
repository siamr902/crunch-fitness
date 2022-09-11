import React from "react";
import { IconType } from "react-icons";

type IconProps = {
  Icon: IconType;
};

const NavIcon = ({ Icon }: IconProps) => {
  return (
    <div className="flex items-center cursor-pointer md:px-10 sm:h-14 md:hover:bg-orange-300 rounded-xl active:border-b-2 active:border-orange-500">
      <Icon className="w-7 h-7" color="#555555"/>
    </div>
  );
};

export default NavIcon;
