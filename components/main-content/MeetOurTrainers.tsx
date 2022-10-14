import React from "react";
import Trainer from "./Trainer";
import trainers from "../../data/personalTrainers";

const MeetOurTrainers = () => {
  return (
    <div className="hidden sm:flex flex-col w-full justify-center items-center p-5 space-y-6 mt-3" id="trainers">
      <div className="font-oswald text-5xl font-bold scale-x-90 tracking-wide text-transparent bg-clip-text bg-gradient-to-b from-orange-500 to-fuchsia-600">
        Meet Our Trainers
      </div>
      <div className="flex space-x-8">
        {trainers.map((trainer) => (
          <div key={trainer.name}>
            <Trainer {...trainer} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MeetOurTrainers;
