import React, { useState } from "react";
import { IconType } from "react-icons";

type IconProps = {
  Icon: IconType;
  id?: number;
  popup?: string;
};

const NavIcon = ({ Icon, id, popup }: IconProps) => {
  const [hover, setHover] = useState<boolean>(false);

  return (
    <div
      className="group relative flex items-center cursor-pointer md:px-10 sm:h-14 md:hover:bg-orange-300 rounded-xl active:border-b-2 active:border-orange-500"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="hidden group-hover:inline-flex text-xs italic absolute font-bold -top-[15px] left-[20px] font-croissant text-orange-500">
        {popup ?? ""}
      </div>
      <Icon
        className={`w-6 h-6 ${
          id === 4 && "rotate-45"
        } group-hover:scale-110 transition-all duration-150 ease-out`}
        color={`${hover ? "#472D2D" : "#555555"}`}
      />
    </div>
  );
};

export default NavIcon;
