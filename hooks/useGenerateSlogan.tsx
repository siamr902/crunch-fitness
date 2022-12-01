import { useEffect, useState } from "react";
import { slogans } from "../data/slogans";
import { selectRandom } from "../utils/selectRandom";

export const useGenerateSlogan = () => {
  const [slogan, setSlogan] = useState<string>("#NOJUDGEMENTS");
  const [span, setSpan] = useState<string>("NO");

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

  return {
    slogan,
    span,
    generateSlogan,
  };
};
