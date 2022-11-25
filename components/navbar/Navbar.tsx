import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import logo from "../../public/crunch-logo.svg";
import NavIcons from "./NavIcons";
import Profile from "./Profile";

const Navbar = () => {
  return (
    <motion.aside
      initial={{ opacity: 0, y: -200 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 1,
        ease: "easeIn",
      }}
    >
      <nav className="flex items-center px-5 lg:px-6 shadow-md justify-between bg-stone-100">
        <div className="flex flex-center object-contain">
          <Image
            src={logo}
            width={100}
            height={80}
            className="cursor-pointer hover:-rotate-180 transition transform-all ease-out delay-150 duration-300"
            onClick={() =>
              window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
            }
          />
        </div>
        <NavIcons />
        <Profile />
      </nav>
    </motion.aside>
  );
};

export default Navbar;
