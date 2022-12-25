import Link from "next/link";
import React, { useState } from "react";
import { IoMdExit } from "react-icons/io";
import { signIn, signOut, useSession } from "next-auth/react";
import { useGenerateSlogan } from "../../hooks/useGenerateSlogan";

const Slogan = () => {
  const { data: session } = useSession();
  const [hover, setHover] = useState<boolean>(false);
  const { slogan, span, generateSlogan } = useGenerateSlogan();

  return (
    <div className="w-full bg-gradient-to-r from-[#0e1111] to-[#222] h-15 flex justify-between p-2 shadow-sm">
      <div>
        <Link href="/">
          <p
            className="font-serif text-xl font-semibold text-gray-200 cursor-pointer whitespace-nowrap"
            onClick={() => generateSlogan()}
          >
            <span className="text-2xl select-none">#</span>
            <span className="text-orange-500 select-none">{span}</span>
            <span className="select-none">{slogan}</span>
          </p>
        </Link>
      </div>

      {session ? (
        <div className="flex pr-4 space-x-4">
          <div
            className={`${
              !hover && "hidden"
            } text-white bg-transparent flex items-center font-medium opacity-40`}
          >
            Sign Out?
          </div>
          <IoMdExit
            color="#FFFFFF"
            className="text-[34px] cursor-pointer text-gray-300 transition transform hover:scale-90"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            onClick={() => signOut()}
          />
        </div>
      ) : (
        <div className="pr-4">
          <button
            className="font-semibold flex rounded-[2px] items-center text-md uppercase py-2 px-3 bg-gradient-to-r from-red-600 to-red-500 text-white font-serif active:scale-90 transition duration-200 ease-out"
            onClick={() => signIn()}
          >
            Sign In
          </button>
        </div>
      )}
    </div>
  );
};

export default Slogan;
