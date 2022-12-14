import React from "react";
import Trainer from "./Trainer";
import trainers from "../../data/personalTrainers";
import { motion } from "framer-motion";

const variants = {
  in: {
    opacity: 0,
  },
  out: {
    opacity: 1,
    transition: {
      staggerChildren: 1,
      staggerDirection: -1,
    },
  },
};

const child = {
  in: { opacity: 0 },
  out: { opacity: 1 },
};

const MeetOurTrainers = () => {
  return (
    <div
      className="sm:flex flex-col w-full justify-center items-center p-5 space-y-6 mt-3"
      id="trainers"
    >
      <motion.div
        className="font-oswald text-5xl text-center font-bold scale-x-90 tracking-wide text-transparent bg-clip-text bg-gradient-to-b to-orange-500 from-fuchsia-600"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 4, delay: 3 }}
      >
        Meet Our Trainers
      </motion.div>
      <motion.div
        className="flex sm:flex-row flex-col gap-4 sm:gap-0 sm:space-x-8 items-center"
        variants={variants}
        initial="in"
        whileInView="out"
        viewport={{ once: true }}
      >
        {trainers.map((trainer) => (
          <motion.div
            key={trainer.name}
            variants={child}
            transition={{ duration: 2 }}
          >
            <Trainer {...trainer} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default MeetOurTrainers;
