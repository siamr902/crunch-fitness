import Link from "next/link";
import React, { useEffect, useState } from "react";
import { slogans } from "../../data/slogans";
import { selectRandom } from "../../utils/selectRandom";
import { IoMdExit } from "react-icons/io";
import { signIn, signOut, useSession } from "next-auth/react";
import { RiErrorWarningFill } from "react-icons/ri";

const Slogan = () => {
  const { data: session } = useSession();

  const [hover, setHover] = useState<boolean>(false);
  const [slogan, setSlogan] = useState<string>("#NOJUDGEMENTS");
  const [span, setSpan] = useState<string>("");

  const generateSlogan = (): void => {
    const [randomSlogan, spanCharacter] = selectRandom(slogans);
    if (spanCharacter === span) {
      generateSlogan();
    } else {
      setSlogan(randomSlogan.slice(spanCharacter.length + 1));
      setSpan(spanCharacter);
    }
  };

  useEffect(() => {
    generateSlogan();
  }, []);

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
            className="text-4xl cursor-pointer text-gray-300 transition transform hover:scale-90"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            onClick={() => signOut()}
          />
        </div>
      ) : (
        <div className="pr-4">
          <button
            className="font-semibold flex space-x-2 items-center text-md tracking-wide uppercase py-2 px-3 bg-red-600 text-white rounded-[8px] active:scale-90 transition duration-200 ease-out"
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
