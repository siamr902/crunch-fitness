import React, { useEffect, useState } from "react";
import { slogans } from "../../data/slogans";
import { selectRandom } from "../../utils/selectRandom";

const Login = () => {
  const [slogan, setSlogan] = useState<string>("#NOJUDGEMENTS");
  const [span, setSpan] = useState<string>("");

  useEffect(() => {
    const [randomSlogan, spanCharacter] = selectRandom(slogans);
    setSlogan(randomSlogan.slice(spanCharacter.length + 1));
    setSpan(spanCharacter);
  }, []);

  return (
    <div className="w-full bg-[#000000] h-auto flex justify-between p-5">
      <div>
        <p
          className="font-serif text-xl font-semibold text-gray-200"
        >
          #
          <span
            className={`${
              /CRUNCH/i.test(span) ? "text-gray-200" : "text-orange-500"
            }`}
          >
            {span}
          </span>
          {slogan}
        </p>
      </div>
    </div>
  );
};

export default Login;
