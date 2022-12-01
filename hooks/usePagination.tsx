import { Exercise } from "@prisma/client";
import React, { useState } from "react";

type Workouts = {
  workouts: {
    exercises: Exercise[];
    id: string;
    name: string;
    rating: number;
    duration: number;
    notes: string;
  }[];
};

const usePagination = ({ workouts }: Workouts) => {
  const [page, setPage] = useState<number>(1);

  const workoutsPerPage = 5;
  const lastWorkoutIndex = page * workoutsPerPage;
  const firstWorkoutIndex = lastWorkoutIndex - workoutsPerPage;

  const paginatedWorkouts = workouts.slice(firstWorkoutIndex, lastWorkoutIndex);

  return {
    page,
    setPage,
    paginatedWorkouts,
    workoutsPerPage
  }
};

export default usePagination;
