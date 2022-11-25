import { IconType } from "react-icons";
import { GiQueenCrown, GiImperialCrown } from "react-icons/gi";
import { FaCrown } from "react-icons/fa";

const trainers: {
  name: string;
  age: number;
  pic: string | undefined;
  desc: string;
  Icon: IconType;
  phone: string;
}[] = [
  {
    name: "Jonathan Moffet",
    age: 28,
    pic: "/jonathanmoffet.jpg",
    desc: "ELITE Personal Trainer, incredible father, professsional snowboarder, and checkers prodigy!",
    Icon: FaCrown,
    phone: "404-902-9272"
  },
  {
    name: "Dave Watson",
    age: 26,
    pic: "/davewatson.jpg",
    desc: "Laid-back trainer. Loves talking about baseball — and fitness of course.",
    Icon: GiImperialCrown,
    phone: "404-896-9627"
  },
  {
    name: "Kayla Moore",
    age: 32,
    pic: "/kaylamarshall.jpg",
    desc: "Mother of three. Marathon runner. Yoga instructer. The perfect companion for your fitness journey!",
    Icon: GiQueenCrown,
    phone: "404-164-0563"
  },
];

export default trainers;
