import { Exercise } from "@prisma/client";
import { useSession } from "next-auth/react";
import React, { useContext } from "react";
import { TrackerContext } from "../../contexts/TrackerContext";
import AddWorkout from "./AddSession";
import NoWorkouts from "./NoWorkouts";
import SingleWorkout from "./SingleWorkout";

type Workout = {
  exercises: Exercise[];
  id: string;
  name: string;
  rating: number;
};

const FitnessTracker = () => {
  const { data: session } = useSession();

  const user = useContext(TrackerContext);
  const { workouts } = user;

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
    <div className="flex flex-col space-y-10 items-center p-5">
      <div className="text-center text-6xl sm:text-7xl font-banner bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-[#de1245]">
        Personal Tracker
      </div>
      {!workouts.length && <NoWorkouts />}
      <div className="flex flex-col space-y-3 items-center">
        <div className="text-center text-3xl sm:text-[42px] font-kalam text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-orange-700 font-semibold">
          {session?.user?.name?.split(" ")[0]}'s Workouts
        </div>
        <div className="flex flex-col space-y-1 items-center justify-start">
          {workouts.map((workout: Workout) => (
            <div key={workout.name}>
              <SingleWorkout workout={workout} />
            </div>
          ))}
        </div>
      </div>
      <AddWorkout />
    </div>
  );
};

export default FitnessTracker;
