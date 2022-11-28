import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import SessionModal from "./SessionModal";

const variants = {
  hidden: {
    opacity: 0,
    y: "-100vh",
    transition: {
      type: "spring",
      stiffness: 100,
    },
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      dampness: 25,
      stiffness: 50,
    },
  },
};

const AddSession = () => {
  const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <>
      <div className="flex space-y-4 flex-col items-center">
        <div className="text-xl text-center font-banner">
          Click{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-800 to-orange-800">
            `add session`
          </span>{" "}
          or{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-800 to-orange-800">
            `+`
          </span>{" "}
          to add a new workout!
        </div>
        <button
          className="font-banner text-center tracking-wider text-3xl rounded-md bg-gradient-to-tr from-red-500 to-orange-400 text-white py-2 px-5 active:scale-95 transition duration-200 ease-out outline-none"
          onClick={() => setShowModal((prev) => !prev)}
        >
          +
        </button>
      </div>
      <AnimatePresence mode="wait">
        {showModal ? (
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="absolute top-[50%] left-[50%] -translate-y-[50%] -translate-x-[50%]"
          >
            <SessionModal setShowModal={setShowModal} />
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
};

export default AddSession;
