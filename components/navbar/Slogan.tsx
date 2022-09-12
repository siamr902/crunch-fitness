import Link from "next/link";
import React, { useEffect, useState } from "react";
import { slogans } from "../../data/slogans";
import { selectRandom } from "../../utils/selectRandom";

const Slogan = () => {
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
    <div className="w-full bg-[#000000] h-auto flex justify-between p-2">
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
    </div>
  );
};

export default Slogan;
