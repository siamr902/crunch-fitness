import React from "react";
import { TiGroup as Trainers } from "react-icons/ti";
import { AiFillCreditCard as Payment } from "react-icons/ai";
import { FaDumbbell as Workouts } from "react-icons/fa";
import { BsFillCalendarCheckFill as Tracker } from "react-icons/bs";
import NavIcon from "./NavIcon";

const NavIcons = () => {
  return (
    <div className="hidden sm:flex justify-center pl-10 translate-y-1">
      <div className="flex justify-evenly sm:space-x-4">
        <NavIcon Icon={Trainers} id={2} popup="Trainers"/>
        <NavIcon Icon={Payment} id={3} popup="Payment"/>
        <NavIcon Icon={Workouts} id={4} popup="Workouts"/>
        <NavIcon Icon={Tracker} id={5} popup="Tracker"/>
      </div>
    </div>
  );
};

export default NavIcons;