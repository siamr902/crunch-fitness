import React from "react";
import { TiGroup as Trainers } from "react-icons/ti";
import { AiFillCreditCard as Payment } from "react-icons/ai";
import { FaDumbbell as Workouts } from "react-icons/fa";
import { BsFillCalendarCheckFill as Tracker } from "react-icons/bs";
import NavIcon from "./NavIcon";
import { motion } from "framer-motion";

const NavIcons = () => {
  return (
    <motion.div className="flex justify-evenly space-x-4 lg:pl-28 translate-y-1 flex-grow">
      <NavIcon Icon={Trainers} popup="Trainers" route="/#trainers" />
      <NavIcon Icon={Workouts} id={4} popup="Classes" route="/#classes" />
      <NavIcon Icon={Payment} popup="Payment" route="payment" />
      <NavIcon Icon={Tracker} popup="Tracker" route="tracker" />
    </motion.div>
  );
};

export default NavIcons;
