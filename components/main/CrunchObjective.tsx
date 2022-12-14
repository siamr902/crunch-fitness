import Image from "next/image";
import React from "react";

interface ObjectiveProps {
  src: string;
  header: string;
  content: string;
}

const CrunchObjective = ({ src, header, content }: ObjectiveProps) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <Image
        src={src}
        alt={header}
        width={216}
        height={216}
        className="w-100 h-64 scale-75 object-contain"
      />
      <div className="text-3xl font-bold scale-x-90 tracking-tighter text-[#222] uppercase">
        {header}
      </div>
      <div className="text-center max-w-[20rem] mt-4 font-semibold text-gray-700 text-[15px]">
        {content}
      </div>
    </div>
  );
};

export default CrunchObjective;
