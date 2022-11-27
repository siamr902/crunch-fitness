import React, { useContext, useEffect, useRef, useState } from "react";
import { AiOutlineStar, AiFillStar, AiOutlineClose } from "react-icons/ai";
import { TrackerContext } from "../../contexts/TrackerContext";
import SingleExercise from "./SingleExercise";

type Props = {
  setShowModal: (v: boolean) => void;
};

type Exercise = {
  name: string;
  sets: number;
  reps: number;
  weight: number;
};

const outlineStars = 5;

const SessionModal = ({ setShowModal }: Props) => {

  const user = useContext(TrackerContext);

  const [numberOfExercises, setNumberOfExercises] = useState<number>(0);
  const [exercises, setExercises] = useState<Exercise[]>([]);

  const [fillStars, setFillStars] = useState<number>(3);
  const [workoutName, setWorkoutName] = useState<string>(`My Workout #${user.workouts.length + 1}`);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  return (
    <div className="min-w-[70vw] fixed z-50 top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] flex flex-col space-y-8 items-center justify-start bg-zinc-50 p-5 shadow-md shadow-black font-kalam">
      <AiOutlineClose
        className="w-7 h-7 absolute top-2 right-2 cursor-pointer"
        onClick={() => setShowModal(false)}
      />
      <input
        className="text-[40px] font-kalam text-center outline-none bg-transparent text-black"
        value={workoutName}
        onChange={(e) => setWorkoutName(e.target.value)}
        ref={inputRef}
      />
      <div className="flex space-x-4">
        <div className="text-3xl text-center">Rating</div>
        <div className="flex space-x-3 items-center">
          {Array.from({ length: fillStars }, (_, i) => (
            <AiFillStar
              className="w-8 h-8 cursor-pointer text-orange-500"
              onClick={() => setFillStars(i + 1)}
            />
          ))}
          {Array.from({ length: outlineStars - fillStars }, (_, i) => (
            <AiOutlineStar
              className="w-8 h-8 cursor-pointer text-gray-700 hover:text-orange-500 transition duration-200 ease-in-out"
              onClick={() => setFillStars((prev) => prev + i + 1)}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col space-y-4 items-center">
        <div className="text-4xl text-center">Exercises</div>
        <div className="max-h-[50vh] overflow-auto flex flex-col space-y-2">
          {Array.from({ length: numberOfExercises }, (_) => (
            <SingleExercise setExercises={setExercises} />
          ))}
        </div>
        <button
          className="text-3xl select-none py-2 px-4 bg-gray-200 rounded-lg active:scale-95 transition duration-200 ease-out shadow-sm shadow-gray-500"
          onClick={() => setNumberOfExercises((prev) => prev + 1)}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default SessionModal;
