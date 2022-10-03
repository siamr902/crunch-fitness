import React from "react";
import groupclasses from "../../data/groupclasses";
import GroupClass from "./GroupClass";

const Energy = () => {
  return (
    <div className="flex justify-center flex-col items-center space-y-4">
      <h4 className="crunchism">Crunchism #3</h4>
      <div className="text-5xl font-bold scale-x-75 text-[#222] text-center -z-10">
        Energy is For Everyone
      </div>
      <div className="font-semibold tracking-wider">
        Belive in the power of a motivating group fitness community.
      </div>
      <div className="uppercase tracking-[3px] text-red-700 pt-3 font-bold text-xs cursor-pointer hover:text-black transition ease-in-out duration-300">
        Check out our group fitness classes
      </div>
      <div className="max-w-[90%] flex md:space-x-5 lg:space-x-6">
        {groupclasses.map(({ src, header, description, Icon }) => (
          <div key={description}>
            <GroupClass
              src={src}
              header={header}
              Icon={Icon}
              description={description}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Energy;
