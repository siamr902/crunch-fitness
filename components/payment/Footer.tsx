import React from "react";
import { MdCopyright } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="flex justify-center items-center w-full shadow-sm px-8 py-10 mt-3 bg-black">
      <div className="flex flex-col items-center justify-center">
        <div className="flex text-white space-x-2 items-center justify-start font-arial">
          <MdCopyright className="h-3 w-3" />
          <div className="font-semibold text-lg tracking-wider">
            CRUNCH FITNESS
          </div>
        </div>
        <div className="inline-flex text-sm text-white font-semibold tracking-widest opacity-40 mt-1">
          ALL RIGHTS RESERVED
        </div>
      </div>
    </footer>
  );
};

export default Footer;
