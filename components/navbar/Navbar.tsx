import Image from "next/image";
import React from "react";
import logo from "../../public/crunch-logo.svg";
import Slogan from "./Slogan";
import NavIcons from "./NavIcons";
import Profile from "./Profile";

const Navbar = () => {
  return (
    <div className="flex items-center sticky top-0 z-50 px-5 lg:px-6 shadow-md w-full justify-between">
      <section>
        <div className="flex flex-center">
          <Image
            src={logo}
            width={100}
            height={80}
            className="cursor-pointer hover:-rotate-180 transition transform ease-in-out delay-150 z-60"
          />
        </div>
      </section>

      <section>
        <NavIcons />
      </section>

      <section>
        <Profile />
      </section>
    </div>
  );
};

export default Navbar;
