import Link from "next/link";
import React, { useEffect, useState } from "react";
import { slogans } from "../../data/slogans";
import { selectRandom } from "../../utils/selectRandom";
import { IoMdExit } from "react-icons/io";

const Slogan = () => {
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
    <div className="w-full bg-[#0e1111] h-auto flex justify-between p-2 shadow-sm">
      <div>
        <Link href="/">
          <p
            className="font-serif text-xl font-semibold text-gray-200 cursor-pointer whitespace-nowrap"
            onClick={generateSlogan}
          >
            <span className="text-2xl select-none">#</span>
            <span className="text-orange-500 select-none">{span}</span>
            <span className="select-none">{slogan}</span>
          </p>
        </Link>
      </div>

      <div className="flex pr-4 space-x-4">
        <div
          className={`${
            !hover && "hidden"
          } text-red-300 bg-transparent flex items-center font-medium`}
        >
          Sign Out?
        </div>
        <IoMdExit
          color="#FFFFFF"
          className="text-4xl cursor-pointer text-gray-300 hover:animate-pulse transition transform hover:scale-90"
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        />
      </div>
    </div>
  );
};

export default Slogan;
