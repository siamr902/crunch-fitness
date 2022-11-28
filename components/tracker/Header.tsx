import { useRouter } from "next/router";
import Image from "next/image";
import React from "react";
import logo from "../../public/crunch-logo.svg";

const Header = () => {
  const router = useRouter();
  return (
    <header className="w-full z-50 sticky top-0 h-[45px] flex justify-between px-5 items-start bg-black shadow-sm shadow-black mb-10">
      <Image
        src={logo}
        width={85}
        height={65}
        className="cursor-pointer hover:-rotate-180 transition transform-all ease-out delay-150 duration-300 object-contain"
        onClick={() => router.push("/")}
      />
    </header>
  );
};

export default Header;
