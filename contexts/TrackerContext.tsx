import { createContext } from "react";
import { User, Workout } from "@prisma/client";

// interface Props extends User {
//     workouts: Workout[];
// }

export const TrackerContext = createContext({} as any);