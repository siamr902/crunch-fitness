import { useSession } from "next-auth/react";
import React, { useState } from "react";
import { IoMdNotifications } from "react-icons/io";
import generateRandomName from "../../utils/defaultRandomName";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Profile = () => {
  const { data: session } = useSession();
  const [clicked, setClicked] = useState<boolean>(false);
  const [useGreenColor, setUseGreenColor] = useState<boolean>(true);

  const handleClick = (): void => {
    setClicked(true);
    if (useGreenColor) {
      session ? notifyWelcome() : notifyUnauthenticated();
      setTimeout(() => setUseGreenColor(false), 3000);
    }
  };

  const notifyWelcome = (): void => {
    toast(`Welcome, ${session?.user?.name?.split(" ")[0] ?? "Anonymous"} 👋!`, {
      position: "top-center",
      theme: "dark",
      autoClose: 3000,
      pauseOnHover: false,
    });
  };

  const notifyUnauthenticated = (): void => {
    toast("You must sign in to receive notifications.", {
      type: "error",
      position: "top-center",
      theme: "dark",
      autoClose: 3000,
      pauseOnHover: false,
    });
  };

  return (
    <div className="flex items-center sm:space-x-2 justify-evenly">
      <div className="mr-5">
        {session && (
          <img
            src={session?.user?.image!}
            className="hidden lg:inline-flex rounded-full h-12 cursor-pointer hover:rotate-90 transition duration-150 ease-in-out"
          />
        )}
      </div>
      <p className="hidden lg:inline-flex font-serif font-semibold whitespace-nowrap text-xl pr-1 text-orange-600">
        {session
          ? session?.user?.name || `${generateRandomName()}`
          : "Unauthenticated User"}
      </p>
      <div className="flex items-center md:p-x-5 sm:h-14 p-2 relative">
        <IoMdNotifications
          className={`w-10 h-10 cursor-pointer ${
            clicked && !useGreenColor && "hover:animate-notification"
          }`}
          color="#E2873C"
          onClick={handleClick}
          onMouseLeave={() => setClicked(false)}
        />
        <div
          className={`rounded-full w-[18px] h-[18px] absolute ${
            useGreenColor && session
              ? "bg-green-500 animate-pulse"
              : "bg-red-500"
          } top-1 right-3 ${
            clicked && !useGreenColor && "animate-notification"
          }`}
        ></div>
      </div>
    </div>
  );
};

export default Profile;
