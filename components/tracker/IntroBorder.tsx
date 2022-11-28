import React from "react";

const IntroBorder = () => {
  return (
    <div className="flex items-center justify-between w-screen">
      <div className="w-[20vw] h-[3px] bg-gradient-to-r from-orange-700 to-fuchsia-700"></div>
      <div className="w-[20vw] h-[3px] bg-gradient-to-l from-orange-700 to-fuchsia-700"></div>
    </div>
  );
};

export default IntroBorder;
