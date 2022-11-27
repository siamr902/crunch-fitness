import { Workout } from "@prisma/client";
import { useSession } from "next-auth/react";
import React, { useContext } from "react";
import { TrackerContext } from "../../contexts/TrackerContext";
import AddWorkout from "./AddSession";
import NoWorkouts from "./NoWorkouts";
import SingleWorkout from "./SingleWorkout";

const FitnessTracker = () => {
  const { data: session } = useSession();

  const user = useContext(TrackerContext);

  if (!session)
    return (
      <div className="min-h-screen flex flex-col space-y-5 items-center justify-evenly p-5">
        <div className="text-[15vw] font-oswald">Error 403</div>
        <div className="text-center text-3xl sm:text-5xl font-banner bg-clip-text text-transparent bg-gradient-to-r from-red-800 to-[#de1245]">
          Not Authorized to Access Personal Workouts
        </div>
      </div>
    );

  return (
    <div className="flex flex-col space-y-8 items-center p-5">
      <div className="text-center text-5xl sm:text-6xl font-banner bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-[#de1245]">
        Personal Tracker
      </div>
      {!user.workouts.length && <NoWorkouts />}
      <AddWorkout />
      <div className="flex flex-col space-y-1 items-center justify-start">
        {user.workouts.map((workout: Workout) => {
          <div key={workout.id}>
            <SingleWorkout workout={workout} />;
          </div>;
        })}
      </div>
    </div>
  );
};

export default FitnessTracker;
