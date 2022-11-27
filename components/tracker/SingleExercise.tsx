import React, { useRef, useState } from "react";
import { BsCheckLg } from "react-icons/bs";

type Exercise = {
  name: string;
  sets: number;
  reps: number;
  weight: number;
};

interface Props {
  setExercises: (v: Exercise[]) => void;
}

const SingleExercise = ({ setExercises }: Props) => {
  const nameRef = useRef<string>("");
  const setsRef = useRef<string>("");
  const repsRef = useRef<string>("");
  const resistanceRef = useRef<string>("");
  
  const [disabled, setDisabled] = useState<boolean>(false);

  const handleComplete = () => {
    setDisabled(true);
    console.log(nameRef.current, setsRef.current, repsRef.current, resistanceRef.current);
  };

  return (
    <div className="flex space-x-2 items-center justify-evenly">
      <input
        type="text"
        placeholder="name"
        className="exercise"
        onChange={(e) => (nameRef.current = e.target.value)}
        disabled={disabled}
      />
      <input
        type="number"
        placeholder="sets"
        className="exercise"
        min={0}
        onChange={(e) => (setsRef.current = e.target.value)}
        disabled={disabled}
      />
      <input
        type="number"
        placeholder="reps"
        className="exercise"
        min={0}
        onChange={(e) => (repsRef.current = e.target.value)}
        disabled={disabled}
      />
      <input
        type="number"
        placeholder="resistance (kg)"
        className="exercise"
        min={0}
        onChange={(e) => (resistanceRef.current = e.target.value)}
        disabled={disabled}
      />
      <BsCheckLg
        className="w-7 h-7 cursor-pointer text-blue-500 active:scale-95 transition duration-200 ease-out"
        onClick={() => handleComplete()}
      />
    </div>
  );
};

export default SingleExercise;
