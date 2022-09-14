import React, { useState } from "react";
import { IconType } from "react-icons";

type IconProps = {
  Icon: IconType;
  Id?: number;
};

const NavIcon = ({ Icon, Id }: IconProps) => {
  const [hover, setHover] = useState<boolean>(false);

  return (
    <div
      className="flex items-center cursor-pointer md:px-10 sm:h-14 md:hover:bg-orange-300 rounded-xl active:border-b-2 active:border-orange-500"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Icon className={`w-6 h-6 ${Id === 4 && "rotate-45"} ${hover && "scale-110 transition-all duration-150 ease-out"}`} color={`${hover ? "#472D2D" : "#555555"}`} />
    </div>
  );
};

export default NavIcon;