import { BiDumbbell } from "react-icons/bi";
import { FaBicycle } from "react-icons/fa";
import { AiOutlineFire } from "react-icons/ai";
import { GiSurprised } from "react-icons/gi";
import {GiBoxingGloveSurprise} from "react-icons/gi";
import {GiHiveMind} from "react-icons/gi";
import { IconType } from "react-icons";

const groupclasses: {
  src: string;
  header: string;
  description: string;
  Icon: IconType;
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
  {
    src: "/mindbodyburngroupclass.jpg",
    header: "Mind Body Burn",
    description: "Ommm-azingly strengthening.",
    Icon: GiHiveMind,
  },
  {
    src: "/actionsportsgroupclass.jpg",
    header: "Action Sports",
    description: "Your heart is about to raise the roof with our action packed classes.",
    Icon: GiBoxingGloveSurprise,
  },
  {
    src: "/somethingdifferentgroupclass.jpg",
    header: "Something Different",
    description: "It's like a weekly bachelorette party, but better.",
    Icon: GiSurprised,
  },
];

export default groupclasses;
