import { BiDumbbell } from "react-icons/bi";
import { FaBicycle } from "react-icons/fa";
import { AiOutlineFire } from "react-icons/ai";
import { IconType } from "react-icons";

const groupclasses: {
  src: string;
  header: string;
  description: string;
  Icon: IconType
}[] = [
  {
    src: "/chiselgroupclass.jpg",
    header: "Chisel It",
    description: "Sculpt the muscles on your muscles.",
    Icon: BiDumbbell,
  },
  {
    src: "/theridegroupclass.jpg",
    header: "The Ride",
    description:
      "Spin me right round, baby! Get in the saddle, gear up and channel your inner cyclist.",
    Icon: FaBicycle,
  },
  {
    src: "/hiitgroupclass.jpg",
    header: "Hiit It",
    description: "Feel the burn!",
    Icon: AiOutlineFire,
  },
];

export default groupclasses;
