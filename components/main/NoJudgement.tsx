import React from "react";
import { objectives } from "../../data/objectives";
import CrunchObjective from "./CrunchObjective";

const NoJudgement = () => {
  return (
    <div className="flex justify-center items-center flex-col space-y-4 p-3">
      <h4 className="crunchism">Crunchism #1</h4>
      <div className="text-4xl sm:text-5xl scale-x-75 text-[#222] font-bold tracking-tighter text-center -z-10">
        No Judgements Are the Best Kind
      </div>
      <div className="font-semibold text-md sm:text-lg text-center">
        Differences are <span className="italic text-orange-700">encouraged.</span> Quirks are{" "}
        <span className="italic text-orange-700">welcomed.</span>
      </div>
      <div className="flex flex-col space-y-3 sm:space-y-0 sm:flex-row sm:space-x-5 -z-10">
        {objectives.map((objective) => (
          <div key={objective.header}>
            <CrunchObjective
              src={objective.img}
              header={objective.header}
              content={objective.content}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default NoJudgement;
