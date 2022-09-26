import Image from "next/image";
import React from "react";
import logo from "../../public/crunch-logo.svg";
import NavIcons from "./NavIcons";
import Profile from "./Profile";

const Navbar = () => {
  return (
    <div className="flex items-center z-50 px-5 lg:px-6 shadow-md w-full justify-between bg-stone-100">
      <div className="flex flex-center object-contain">
        <Image
          src={logo}
          width={100}
          height={80}
          className="cursor-pointer hover:-rotate-180 transition transform-all ease-out delay-150"
          onClick={() => window.scrollTo({top: 0, left: 0, behavior: 'smooth'})}
        />
      </div>

      <NavIcons />
      <Profile />
    </div>
  );
};

export default Navbar;
