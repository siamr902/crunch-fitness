import { Exercise } from "@prisma/client";
import { useRouter } from "next/router";
import React from "react";
import { AiFillStar } from "react-icons/ai";
import { FaMinus } from "react-icons/fa";

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

  const deleteWorkout = async () => {
    console.log(id)
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
      console.error();
    }
  };

  return (
    <div className="flex flex-col items-center p-2 space-y-3 justify-evenly w-screen border-t-2 border-b-2 border-gray-500">
      <div className="workout-section">
        <div className="workout-header">Name</div>
        <div className="font-banner text-xl text-center">{name}</div>
      </div>
      <div className="workout-section">
        <div className="workout-header">Rating</div>
        <div className="flex items-center space-x-2">
          <div className="text-xl font-banner font-semibold">{rating}</div>
          <AiFillStar className="w-6 h-6 text-orange-500" />
        </div>
      </div>
      <div className="workout-section">
        <div className="workout-header">Duration</div>
        <div className="text-xl font-banner text-center">
          {duration} minutes
        </div>
      </div>
      {notes !== "" && (
      <div className="workout-section">
        <div className="workout-header">Notes</div>
        <div className="text-xl font-banner text-center">{notes}</div>
      </div>

      )}
      <div className="workout-section">
        <div className="workout-header">Exercises</div>
        <button className="text-xl font-banner text-center">
          View Exercises
        </button>
      </div>
      <FaMinus
        className="w-8 h-8 cursor-pointer text-red-600 active:scale-95 transition duration-200 ease-out"
        onClick={() => deleteWorkout()}
      />
    </div>
  );
};

export default SingleWorkout;
