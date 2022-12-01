import React, { useContext, useEffect, useRef, useState } from "react";
import { AiOutlineStar, AiFillStar, AiOutlineClose } from "react-icons/ai";
import { TrackerContext } from "../../contexts/TrackerContext";
import { useRouter } from "next/router";
import SingleExercise from "./SingleExercise";
import { toast } from "react-toastify";
import { exerciseToast } from "../../lib/toasts";

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
  const router = useRouter();

  const [numberOfExercises, setNumberOfExercises] = useState<number>(0);
  const [exercises, setExercises] = useState<Exercise[]>([]);
  const [fillStars, setFillStars] = useState<number>(3);
  const [workoutName, setWorkoutName] = useState<string>(
    `My Workout #${user.workouts.length + 1}`
  );

  const nameRef = useRef<HTMLInputElement | null>(null);
  const durationRef = useRef<string>("");
  const notesRef = useRef<string>("");

  useEffect(() => {
    nameRef.current?.focus();
  }, []);

  const submitData = async () => {
    if (!exercises.length) {
      exerciseToast();
      return;
    }

    try {
      const body = {
        name: workoutName,
        rating: fillStars,
        exercises,
        duration: Number(durationRef.current),
        notes: notesRef.current,
      };
      await fetch("/api/post", {
        body: JSON.stringify(body),
        headers: { "Content-Type": "application/json" },
        method: "POST",
      });
      await router.replace(router.asPath);
      setShowModal(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="w-[calc(100vw-2rem)] sm:w-[75vw] z-40 fixed top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] flex flex-col space-y-8 items-center justify-start bg-zinc-50 p-4 shadow-md shadow-black font-kalam">
      <AiOutlineClose
        className="w-7 h-7 absolute top-3 right-3 cursor-pointer text-red-700 active:scale-95 transition duration-200 ease-out"
        onClick={() => setShowModal(false)}
      />
      <input
        className="text-[32px] sm:text-[40px] font-kalam text-center outline-none bg-transparent text-black"
        value={workoutName}
        onChange={(e) => setWorkoutName(e.target.value)}
        ref={nameRef}
      />
      <div className="flex flex-col space-y-3 sm:space-y-0 sm:flex-row sm:space-x-4">
        <div className="text-3xl text-center">Rating</div>
        <div className="flex space-x-3 items-center">
          {Array.from({ length: fillStars }, (_, i) => (
            <AiFillStar
              className="w-8 h-8 cursor-pointer text-orange-500"
              onClick={() => setFillStars(i + 1)}
              key={i}
            />
          ))}
          {Array.from({ length: outlineStars - fillStars }, (_, i) => (
            <AiOutlineStar
              className="w-8 h-8 cursor-pointer text-gray-700 transition duration-200 ease-in-out"
              onClick={() => setFillStars((prev) => prev + i + 1)}
              key={i}
            />
          ))}
        </div>
      </div>
      <div className="flex items-end space-x-4">
        <div className="text-3xl text-center">
          Duration <span className="text-2xl opacity-60">(min)</span>
        </div>
        <input
          type="number"
          className="p-2 outline-none text-lg text-center font-bold border-b border-black bg-zinc-50"
          min={0}
          onChange={(e) => (durationRef.current = e.target.value)}
        />
      </div>
      <div className="flex flex-col space-y-4 items-center">
        <div className="text-4xl text-center">Exercises</div>
        <div className="max-h-[12vh] overflow-auto flex flex-col space-y-2">
          {Array.from({ length: numberOfExercises }, (_, i) => (
            <div key={i}>
              <SingleExercise
                setExercises={setExercises}
                exercises={exercises}
              />
            </div>
          ))}
        </div>
        <button
          className="text-3xl select-none py-2 px-4 bg-gray-200 rounded-lg active:scale-95 transition duration-200 ease-out shadow-sm shadow-gray-500"
          onClick={() => setNumberOfExercises((prev) => prev + 1)}
        >
          +
        </button>
      </div>
      <div className="flex flex-col space-y-3 items-center w-[70%]">
        <div className="font-kalam text-3xl text-center">New Milestone?</div>
        <textarea
          className="resize-none p-4 outline-none border-b-2 bg-zinc-50 border-black rounded-lg text-2xl text-center w-[100%]"
          placeholder="Optional Comments"
          onChange={(e) => (notesRef.current = e.target.value)}
        ></textarea>
      </div>
      <button
        className="font-kalam text-blue-600 text-[5vw] sm:text-3xl rounded-md outline-none p-2 active:scale-95 transition duration-200 ease-out absolute bottom-3 right-3"
        onClick={() => submitData()}
      >
        Save
      </button>
    </div>
  );
};

export default SessionModal;
