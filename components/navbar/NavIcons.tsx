import React from "react";
import { TiGroup as Trainers } from "react-icons/ti";
import { AiFillCreditCard as Payment } from "react-icons/ai";
import { FaDumbbell as Workouts } from "react-icons/fa";
import { BsFillCalendarCheckFill as Tracker } from "react-icons/bs";
import NavIcon from "./NavIcon";

const NavIcons = () => {
  return (
    <div className="hidden sm:flex justify-evenly space-x-4 lg:pl-28 translate-y-1 flex-grow">
      <NavIcon Icon={Trainers} popup="Trainers" route="/#trainers" />
      <NavIcon Icon={Payment} popup="Payment" route="payment" />
      <NavIcon Icon={Workouts} id={4} popup="Workouts" route="workouts" />
      <NavIcon Icon={Tracker} popup="Tracker" route="tracker" />
    </div>
  );
};

export default NavIcons;
