import React, { useEffect, useState } from "react";
import { slogans } from "../../data/slogans";
import { selectRandom } from "../../utils/selectRandom";

const Login = () => {
  const [slogan, setSlogan] = useState("#NOJUDGEMENTS");

  useEffect(() => {
    const randomSlogan = selectRandom(slogans);
    setSlogan(randomSlogan);
  }, []);

  return <div>{slogan}</div>;
};

export default Login;
