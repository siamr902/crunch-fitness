import { Exercise, User as Member } from "@prisma/client";
import { createContext } from "react";

type User = Member & {
  workouts: {
    exercises: Exercise[];
    id: string;
    name: string;
    rating: number;
    duration: number;
    notes: string;
  }[];
};

export const TrackerContext = createContext({} as User);
