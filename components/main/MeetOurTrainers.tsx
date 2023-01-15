import React from "react";
import Trainer from "./Trainer";
import trainers from "../../data/personalTrainers";
import { motion } from "framer-motion";

const MeetOurTrainers = () => {
  return (
    <div
      className="sm:flex flex-col w-full justify-center items-center p-5 space-y-6 mt-3"
      id="trainers"
    >
      <div
        className="font-oswald text-5xl text-center font-bold scale-x-90 tracking-wide text-transparent bg-clip-text bg-gradient-to-b to-orange-500 from-fuchsia-600"
      >
        Meet Our Trainers
      </div>
      <motion.div
        className="flex sm:flex-row flex-col gap-4 sm:gap-0 sm:space-x-8 items-center"
      >
        {trainers.map((trainer) => (
          <div
            key={trainer.name}
          >
            <Trainer {...trainer} />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default MeetOurTrainers;
