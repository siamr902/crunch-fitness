import React from "react";

interface ObjectiveProps {
  src: string;
  header: string;
  content: string;
}

const CrunchObjective = ({ src, header, content }: ObjectiveProps) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <img src={src} alt={header} className="w-100 h h-64 scale-75 object-contain"/>
      <div className="text-3xl font-bold scale-x-90 tracking-tighter text-[#222] uppercase hidden md:inline-flex">
        {header}
      </div>
      <div className="hidden md:inline-flex text-center max-w-[20rem] mt-4 font-semibold text-gray-700">{content}</div>
    </div>
  );
};

export default CrunchObjective;
