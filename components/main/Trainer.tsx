import Image from "next/image";
import React from "react";
import { IconType } from "react-icons";
import { BsFillTelephoneFill } from "react-icons/bs";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface TrainerProps {
  name: string;
  age: number;
  pic: string | undefined;
  desc: string;
  Icon: IconType;
  phone: string;
}

const Trainer = ({
  name,
  age,
  pic,
  desc,
  Icon,
  phone = "547-955-0142",
}: TrainerProps) => {

  const handleClick = (): void => {
    navigator.clipboard.writeText(phone);
    toast("Copied", {
      type: "info",
      theme: "dark",
      autoClose: 2000,
      hideProgressBar: true,
      position: "bottom-right",
    });
  };

  return (
    <div className="relative w-[calc(100vw-5rem)] sm:w-[27vw] shadow-md shadow-gray-500 rounded-md flex flex-col space-y-3 items-center justify-center text-center px-5 py-10">
      <Icon className="w-10 h-10 absolute left-[50%] -translate-x-[50%] top-3 z-10 text-amber-600" />
      <div
      >
        <Image
          src={pic!}
          width={150}
          height={150}
          alt={name}
          className="rounded-full"
        />
      </div>
      <div className="text-xl sm:text-[1.5vw] font-oswald">{name}</div>
      <div className="sm:text-[1.25vw] font-croissant font-semibold text-red-800">{age}</div>
      <div className="sm:text-[1.15vw] font-oswald opacity-90">{desc}</div>
      <BsFillTelephoneFill
        className="h-5 w-5 cursor-copy hover:text-gray-800 transition duration-200 ease-in-out"
        onClick={handleClick}
      />
    </div>
  );
};

export default Trainer;
