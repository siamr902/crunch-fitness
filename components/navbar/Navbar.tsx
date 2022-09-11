import Image from "next/image";
import React from "react";
import logo from "../../public/crunch-logo.svg";
import Login from "./Login";
import NavIcons from "./NavIcons";

const Navbar = () => {
  return (
    <div className="flex items-center sticky top-0 z-50 px-4 lg:px-5 shadow-md w-full">
      <section>
        <div className="flex flex-center">
          <Image
            src={logo}
            width={120}
            height={140}
            className="cursor-pointer hover:-rotate-45 transition ease-in-out delay-150"
          />
        </div>
      </section>

      <section>
        <NavIcons />
      </section>
    </div>
  );
};

export default Navbar;
