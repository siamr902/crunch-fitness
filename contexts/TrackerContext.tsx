import { Exercise, User } from "@prisma/client";
import { createContext } from "react";

type user = User & {
  workouts: {
    exercises: Exercise[];
    id: string;
    name: string;
    rating: number;
    duration: number;
    notes: string;
  }[];
};

export const TrackerContext = createContext({} as user);
