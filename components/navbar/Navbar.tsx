import { motion, Transition } from "framer-motion";
import Image from "next/image";
import React from "react";
import logo from "../../public/crunch-logo.svg";
import NavIcons from "./NavIcons";
import Profile from "./Profile";

const Navbar = () => {
  return (
    <motion.aside
      initial={{ width: 0, opacity: 0 }}
      animate={{ width: "100%", opacity: 1 }}
      transition={{
        duration: 1 as Transition,
        ease: "easeIn" as unknown as Transition,
      }}
    >
      <nav className="flex items-center px-5 lg:px-6 shadow-md justify-between bg-stone-100">
        <div className="flex flex-center object-contain">
          <Image
            src={logo}
            width={100}
            height={80}
            className="cursor-pointer hover:-rotate-180 transition transform-all ease-out delay-150 duration-300"
            onClick={() => document.getElementById("profile")?.scrollIntoView()}
          />
        </div>
        <NavIcons />
        <Profile />
      </nav>
    </motion.aside>
  );
};

export default Navbar;
