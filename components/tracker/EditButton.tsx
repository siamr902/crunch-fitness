import { Exercise } from "@prisma/client";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { BiEdit } from "react-icons/bi";
import EditModal from "./EditModal";

const variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

type Workout = {
  workout: {
    exercises: Exercise[];
    id: string;
    name: string;
    rating: number;
    duration: number;
    notes: string;
  };
};

const EditButton = ({ workout }: Workout) => {
  const [showEdit, setShowEdit] = useState<boolean>(false);
  return (
    <>
      <BiEdit
        className="w-8 h-8 cursor-pointer text-blue-600 active:scale-95 transition duration-200 ease-out absolute top-2 right-3"
        onClick={() => setShowEdit(true)}
      />
      <AnimatePresence mode="wait">
        {showEdit ? (
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="absolute"
          >
            <EditModal setShowEdit={setShowEdit} workout={workout}/>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
};

export default EditButton;
