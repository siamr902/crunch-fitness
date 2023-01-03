import { Exercise } from "@prisma/client";
import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import SingleExerciseDisplay from "./SingleExerciseDisplay";

interface Props {
  exercises: Exercise[];
  setShowExercises: (v: boolean) => void;
}

const ExerciseModal = ({ exercises, setShowExercises }: Props) => {
  return (
    <div className="w-[calc(100vw-2rem)] sm:w-[75vw] z-40 fixed top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] flex flex-col space-y-8 items-center justify-start bg-zinc-50 p-4 shadow-sm shadow-black font-kalam">
      <AiOutlineClose
        className="absolute top-3 right-3 w-7 h-7 text-red-600 cursor-pointer active:scale-95 transition duration-200 ease-out"
        onClick={() => setShowExercises(false)}
      />
      <div className="text-center text-5xl">Exercises</div>
      <div className="flex flex-col items-start space-y-4">
        {exercises.map((exercise, index) => (
          <div key={exercise.id}>
            <SingleExerciseDisplay exercise={exercise} index={index}/>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExerciseModal;
