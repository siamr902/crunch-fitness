import { IconType } from "react-icons";
import { GiQueenCrown, GiImperialCrown } from "react-icons/gi";
import { FaCrown } from "react-icons/fa";

const trainers: {
  name: string;
  age: number;
  pic: string | undefined;
  desc: string;
  Icon: IconType;
}[] = [
  {
    name: "Jonathan Moffet",
    age: 28,
    pic: "/jonathanmoffet.jpg",
    desc: "ELITE Personal Trainer, incredible father, professsional snowboarder, and checkers prodigy!",
    Icon: FaCrown,
  },
  {
    name: "Dave Watson",
    age: 26,
    pic: "/davewatson.jpg",
    desc: "Laid-back trainer. Extensive knowledge in baseball — and fitness of course.",
    Icon: GiImperialCrown,
  },
  {
    name: "Kayla Moore",
    age: 32,
    pic: "/kaylamarshall.jpg",
    desc: "Mother of three. Marathon runner. Yoga instructer. The perfect companion for your fitness journey!",
    Icon: GiQueenCrown,
  },
];

export default trainers;
