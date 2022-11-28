import { Exercise } from "@prisma/client";
import React from "react";

interface Props {
  exercise: Exercise;
  index: number;
}

const SingleExerciseDisplay = ({ exercise, index }: Props) => {
  const { name, reps, sets, weight } = exercise;
  return (
    <div className="flex flex-col space-y-2 items-center sm:flex-row sm:space-y-0 sm:space-x-4 font-kalam">
      <div className="text-3xl text-center">
        <span className="text-red-600">{index + 1}.</span> {name}
      </div>
      <div className="text-3xl text-center text-blue-600">{sets} Sets</div>
      <div className="text-3xl text-center text-fuchsia-600">{reps} Reps</div>
      <div className="text-3xl text-center">{weight} lbs</div>
    </div>
  );
};

export default SingleExerciseDisplay;
