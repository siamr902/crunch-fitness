import React, { useRef, useState } from "react";

type Exercise = {
  name: string;
  sets: number;
  reps: number;
  weight: number;
};

interface Props {
  setExercises: (v: Exercise[]) => void;
  exercises: Exercise[];
}

const SingleExercise = ({ setExercises, exercises }: Props) => {
  const nameRef = useRef<string>("");
  const setsRef = useRef<string>("");
  const repsRef = useRef<string>("");
  const resistanceRef = useRef<string>("");

  const [disabled, setDisabled] = useState<boolean>(false);

  const handleComplete = () => {
    setDisabled(true);
    setExercises([
      ...exercises,
      {
        name: nameRef.current,
        sets: Number(setsRef.current),
        reps: Number(repsRef.current),
        weight: Number(resistanceRef.current),
      },
    ]);
  };

  return (
    <div className="flex space-x-2 items-center justify-evenly">
      <input
        type="text"
        placeholder="name"
        className={`exercise ${disabled && "bg-gray-200 cursor-not-allowed"}`}
        onChange={(e) => (nameRef.current = e.target.value)}
        disabled={disabled}
      />
      <input
        type="number"
        placeholder="sets"
        className={`exercise ${disabled && "bg-gray-200 cursor-not-allowed"}`}
        min={0}
        onChange={(e) => (setsRef.current = e.target.value)}
        disabled={disabled}
      />
      <input
        type="number"
        placeholder="reps"
        className={`exercise ${disabled && "bg-gray-200 cursor-not-allowed"}`}
        min={0}
        onChange={(e) => (repsRef.current = e.target.value)}
        disabled={disabled}
      />
      <input
        type="number"
        placeholder="resistance (lb)"
        className={`exercise ${disabled && "bg-gray-200 cursor-not-allowed"}`}
        min={0}
        onChange={(e) => (resistanceRef.current = e.target.value)}
        disabled={disabled}
      />
      <button
        className={`p-1 sm:p-3 sm:text-xl font-kalam rounded-md outline-none active:scale-90 transition duration-200 ease-out ${
          disabled && "cursor-not-allowed"
        }`}
        onClick={() => handleComplete()}
        disabled={disabled}
      >
        ADD
      </button>
    </div>
  );
};

export default SingleExercise;
