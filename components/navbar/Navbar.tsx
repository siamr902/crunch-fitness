import Image from "next/image";
import React from "react";
import logo from "../../public/crunch-logo.svg";
import Login from "./Login";

const Navbar = () => {
  return (
    <div>
      <Login />
      <div className="flex flex-center">
        <Image src={logo} width={120} height={120} />
      </div>
    </div>
  );
};

export default Navbar;
