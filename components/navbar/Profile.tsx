import { useSession } from "next-auth/react";
import React, { useState } from "react";
import { IoMdNotifications } from "react-icons/io";
import generateRandomName from "../../utils/defaultRandomName";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Profile = () => {
  const { data: session } = useSession();
  const [clicked, setClicked] = useState<boolean>(false);
  const [toggleColor, setToggleColor] = useState<boolean>(true);

  const handleClick = (): void => {
    setClicked(true);
    if (toggleColor) {
      notify();
      setTimeout(() => setToggleColor(false), 6000);
    }
  };

  const notify = () => {
    toast(`Welcome, ${session?.user?.name?.split(" ")[0]} 👋!`, {
      position: "top-center",
      theme: "dark",
      pauseOnHover: false
    });
  };

  return (
    <div className="flex items-center sm:space-x-2 justify-evenly">
      <div className="mr-5">
        {session && (
          <img
            src={session?.user?.image!}
            className="rounded-full h-12 cursor-pointer"
          />
        )}
      </div>
      <p className="hidden lg:inline-flex font-serif font-semibold whitespace-nowrap text-xl pr-1 text-orange-600">
        {session
          ? session?.user?.name || `${generateRandomName()}`
          : "Unauthorized User"}
      </p>
      <div className="flex items-center md:p-x-5 sm:h-14 p-2 relative">
        <IoMdNotifications
          className={`w-10 h-10 cursor-pointer ${
            clicked && !toggleColor && "hover:animate-notification"
          }`}
          color="#E2873C"
          onClick={handleClick}
          onMouseLeave={() => setClicked(false)}
        />
        <div
          className={`rounded-full w-[18px] h-[18px] absolute ${
            toggleColor ? "bg-green-500 animate-pulse" : "bg-red-500"
          } top-1 right-3 ${clicked && "animate-notification"}`}
        ></div>
      </div>
    </div>
  );
};

export default Profile;
