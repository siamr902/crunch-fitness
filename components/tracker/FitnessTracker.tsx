import { Exercise } from "@prisma/client";
import { useSession } from "next-auth/react";
import React, { useContext } from "react";
import { TrackerContext } from "../../contexts/TrackerContext";
import usePagination from "../../hooks/usePagination";
import AddWorkout from "./AddSession";
import IntroBorder from "./IntroBorder";
import NoWorkouts from "./NoWorkouts";
import PaginationButton from "./PaginationButton";
import SingleWorkout from "./SingleWorkout";

type Workout = {
  exercises: Exercise[];
  id: string;
  name: string;
  rating: number;
  duration: number;
  notes: string;
};

const FitnessTracker = () => {
  const { data: session } = useSession();

  const user = useContext(TrackerContext);
  const { workouts } = user;
  
  const {
    page = 1,
    setPage = () => {},
    paginatedWorkouts = workouts,
    workoutsPerPage = 5,
  } = usePagination({ workouts });

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
    <div className="flex flex-col space-y-10 items-center p-5 min-h-screen">
      <div className="text-center text-6xl sm:text-7xl font-oswald bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-[#de1245]">
        Personal Tracker
      </div>
      {!workouts.length && <NoWorkouts />}
      <div className="flex flex-col space-y-8 items-center">
        <div className="text-center text-3xl sm:text-[42px] font-oswald text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-orange-700 font-semibold">
          {session?.user?.name?.split(" ")[0]}&apos;s Workouts
        </div>
        <AddWorkout />
        <IntroBorder />
        <div className="flex flex-col items-center justify-start">
          {paginatedWorkouts.map((workout: Workout) => (
            <div key={workout.id}>
              <SingleWorkout workout={workout} />
            </div>
          ))}
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-4 justify-center items-center">
          {Array.from(
            { length: Math.ceil(workouts.length / workoutsPerPage) },
            (_, idx) => (
              <PaginationButton
                page={page}
                setPage={setPage}
                pageNumber={idx + 1}
                key={idx}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default FitnessTracker;
