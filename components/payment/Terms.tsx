import React from "react";
import { termLink } from "../../data/socialLinks";

const Terms = () => {
  return (
    <div className="text-[2vw] sm:text-[1.2vw] lg:text-[1vw] text-start mx-auto">
      <div className="text-gray-600 font-semibold">
        * An annual fee will be billed once per year. To see details of when you
        will be charged the full annual fee, see the{" "}
        <a href={termLink} target="_blank">
          <span className="underline underline-offset-1 cursor-pointer">
            Terms and Conditions
          </span>{" "}
        </a>
        for this club or inquire at the club.
      </div>
      <div className="text-gray-600 font-semibold">
        **Excludes access to Crunch Select & Crunch Signature locations
      </div>
    </div>
  );
};

export default Terms;
