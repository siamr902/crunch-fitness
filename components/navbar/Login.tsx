import Link from "next/link";
import React, { useEffect, useState } from "react";
import { slogans } from "../../data/slogans";
import { selectRandom } from "../../utils/selectRandom";

const Login = () => {
  const [slogan, setSlogan] = useState<string>("#NOJUDGEMENTS");
  const [span, setSpan] = useState<string>("");

  const generateSlogan = () => {
    const [randomSlogan, spanCharacter] = selectRandom(slogans);
    setSlogan(randomSlogan.slice(spanCharacter.length + 1));
    setSpan(spanCharacter);
  };

  useEffect(() => {
    generateSlogan()
  }, []);

  return (
    <div className="w-full bg-[#000000] h-auto flex justify-between p-5">
      <div>
        <Link href="/">
          <p className="font-serif text-xl font-semibold text-gray-200 cursor-pointer" onClick={generateSlogan}>
            <span className="text-2xl">#</span>
            <span
              className="text-orange-500"
            >
              {span}
            </span>
            {slogan}
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Login;
