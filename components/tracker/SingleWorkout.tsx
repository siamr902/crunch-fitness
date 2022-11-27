import { Exercise } from "@prisma/client";
import React from "react";

type Workout = {
  workout: {
    exercises: Exercise[];
    id: string;
    name: string;
    rating: number;
  };
};

const SingleWorkout = ({ workout }: Workout) => {
  const { name, rating, exercises } = workout;
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Experience</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{name}</td>
          <td>{rating}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default SingleWorkout;
