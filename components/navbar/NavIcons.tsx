import React from "react";
import { FaMapMarkerAlt as Map } from "react-icons/fa";
import { TiGroup as Trainers } from "react-icons/ti";
import { AiFillCreditCard as Payment } from "react-icons/ai";
import { FaDumbbell as Workouts } from "react-icons/fa";
import { BsFillCalendarCheckFill as Tracker } from "react-icons/bs";
import NavIcon from "./NavIcon";

const NavIcons = () => {
  return (
    <div className="hidden sm:inline-flex justify-center">
      <div className="flex space-x-6 md:space-x-6 flex-grow">
        <NavIcon Icon={Map} />
        <NavIcon Icon={Trainers} />
        <NavIcon Icon={Payment} />
        <NavIcon Icon={Workouts} />
        <NavIcon Icon={Tracker} />
      </div>
    </div>
  );
};

export default NavIcons;