import { Exercise } from "@prisma/client";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { HiMinus } from "react-icons/hi";
import { AnimatePresence, motion } from "framer-motion";
import ExerciseModal from "./ExerciseModal";
import EditButton from "./EditButton";

const variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
};

type Workout = {
  workout: {
    exercises: Exercise[];
    id: string;
    name: string;
    rating: number;
    duration: number;
    notes: string;
  };
};

const SingleWorkout = ({ workout }: Workout) => {
  const router = useRouter();
  const { id, name, rating, duration, notes, exercises } = workout;
  const [showExercises, setShowExercises] = useState<boolean>(false);

  const deleteWorkout = async () => {
    try {
      const body = {
        id: id,
      };
      await fetch("/api/delete", {
        body: JSON.stringify(body),
        headers: { "Content-Type": "application/json" },
        method: "DELETE",
      });
      await router.replace(router.asPath);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="relative flex flex-col items-center p-2 space-y-3 justify-evenly w-screen border-b-2 lg:border-b-[3px] border-gray-900 border-gradient">
        <div className="workout-section">
          <div className="text-4xl sm:text-5xl text-center font-banner text-transparent bg-clip-text bg-gradient-to-tr from-pink-700 to-blue-700 -z-10">
            {name}
          </div>
        </div>
        <div className="workout-section">
          <div className="workout-header">Rating</div>
          <div className="flex items-center space-x-2">
            <div className="text-2xl font-banner">{rating}</div>
            <AiFillStar className="w-7 h-7 text-orange-500" />
          </div>
        </div>
        <div className="workout-section">
          <div className="workout-header">Duration</div>
          <div className="text-2xl font-banner text-center">
            {duration} minutes
          </div>
        </div>
        <div className="workout-section">
          <div className="workout-header">Exercises</div>
          <button
            className="text-xl font-banner text-center underline underline-offset-4 decoration-dotted active:scale-95 transition duration-200 ease-out"
            onClick={() => setShowExercises(true)}
          >
            View Exercises
          </button>
          <div className="workout-section">
            <div className="workout-header">Notes</div>
            <p className="text-xl font-banner w-full break-words overflow-hidden">{notes}</p>
          </div>
        </div>
        <HiMinus
          className="w-8 h-8 cursor-pointer text-red-600 active:scale-95 transition duration-200 ease-out absolute top-2 left-2"
          onClick={() => deleteWorkout()}
        />
        <EditButton workout={workout} />
      </div>
      <AnimatePresence mode="wait">
        {showExercises ? (
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="absolute"
          >
            <ExerciseModal
              exercises={exercises}
              setShowExercises={setShowExercises}
            />
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
};

export default SingleWorkout;
