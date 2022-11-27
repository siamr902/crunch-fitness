import React from "react";
import Image from "next/image";
import logo from "../../public/crunch-logo.svg";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { IoMdLogOut } from "react-icons/io";
import { signOut } from "next-auth/react";

const Header = () => {
  const router = useRouter();
  return (
    <motion.aside
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: 80, opacity: 1 }}
      transition={{
        duration: 1,
        ease: "easeIn",
      }}
    >
      <header className="relative w-full px-5 py-2 h-[45px] items-center justify-between bg-black shadow-sm mb-10 whitespace-nowrap">
        <div className="hidden sm:inline-flex absolute font-oswald text-sm lg:text-lg top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] text-[17px] text-white font-bold uppercase tracking-wider scale-x-90">
          Take the first step to a healthier, happier you
        </div>
          <Image
            src={logo}
            width={90}
            height={60}
            className="cursor-pointer hover:-rotate-180 transition transform-all ease-out delay-150 duration-300 object-contain"
            onClick={() => router.push("/")}
          />
        <div
          className="absolute top-[50%] -translate-y-[50%] right-8 cursor-pointer hover:scale-90 active:scale-100 transition ease-in-out duration-200"
          onClick={() => signOut({ callbackUrl: "/" })}
        >
          <IoMdLogOut className="w-8 h-8 text-orange-300" />
        </div>
      </header>
    </motion.aside>
  );
};

export default Header;
