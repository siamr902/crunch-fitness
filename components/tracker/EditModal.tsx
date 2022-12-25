import { Exercise } from "@prisma/client";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { BiSave } from "react-icons/bi";
import { editDiscard, editSuccess } from "../../lib/toasts";

interface Props {
  setShowEdit: (v: boolean) => void;
  workout: {
    exercises: Exercise[];
    id: string;
    name: string;
    rating: number;
    duration: number;
    notes: string;
  };
}

const EditModal = ({ setShowEdit, workout }: Props) => {
  const { name, rating, duration, notes, id } = workout;

  const [workoutName, setWorkoutName] = useState<string>(name);
  const [workoutRating, setWorkoutRating] = useState<number>(rating);
  const [workoutDuration, setWorkoutDuration] = useState<number>(duration);
  const [workoutNotes, setWorkoutNotes] = useState<string>(notes);

  const router = useRouter();

  const updateWorkout = async () => {
    try {
      const body = {
        id: id,
        name: workoutName,
        rating: workoutRating,
        duration: workoutDuration,
        notes: workoutNotes,
      };
      await fetch("/api/update", {
        body: JSON.stringify(body),
        headers: { "Content-Type": "application/json" },
        method: "PATCH",
      });
      await router.replace(router.asPath);
      editSuccess();
      setShowEdit(false);
    } catch (error) {
      console.error(error);
    }
  };

  const handleShowEdit = () => {
    editDiscard();
    setShowEdit(false);
  };

  return (
    <div className="w-[calc(100vw-2rem)] sm:w-[75vw] z-40 fixed top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] flex flex-col space-y-8 items-center justify-start bg-zinc-50 p-4 shadow-md shadow-gray-700 font-kalam">
      <AiOutlineClose
        className="absolute top-3 right-3 w-7 h-7 text-red-600 cursor-pointer active:scale-95 transition duration-200 ease-out"
        onClick={() => handleShowEdit()}
      />
      <BiSave
        className="absolute bottom-3 right-3 w-8 h-8 cursor-pointer active:scale-95 transition duration-200 ease-out"
        onClick={() => updateWorkout()}
      />
      <div className="text-4xl text-center">Edit</div>
      <div className="text-xl sm:text-3xl text-center flex items-center space-x-3">
        <div>Name:</div>
        <input
          type="text"
          value={workoutName}
          onChange={(e) => setWorkoutName(e.target.value)}
          className="text-center outline-none bg-zinc-50 text-black"
        />
      </div>
      <div className="text-xl sm:text-3xl text-center flex items-center space-x-3">
        <div>Rating:</div>
        <input
          type="number"
          max={5}
          value={workoutRating}
          onChange={(e) => setWorkoutRating(Number(e.target.value))}
          className="text-center outline-none bg-zinc-50 text-black"
        />
      </div>
      <div className="text-xl sm:text-3xl text-center flex items-center space-x-3">
        <div>Duration:</div>
        <input
          type="number"
          min={0}
          onChange={(e) => setWorkoutDuration(Number(e.target.value))}
          value={workoutDuration}
          className="text-center outline-none bg-zinc-50 text-black"
        />
      </div>
      <div className="text-xl sm:text-3xl text-center flex flex-col items-center space-y-3 w-full">
        <div>Notes:</div>
        <textarea
          className="resize-none p-4 outline-none border-b-2 bg-zinc-50 border-black rounded-lg text-2xl text-center w-[80%]"
          placeholder="Optional"
          onChange={(e) => setWorkoutNotes(e.target.value)}
          value={workoutNotes}
        ></textarea>
      </div>
    </div>
  );
};

export default EditModal;
