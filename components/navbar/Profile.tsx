import { useSession } from "next-auth/react";
import React, { useState } from "react";
import { IoMdNotifications } from "react-icons/io";
import generateRandomName from "../../utils/defaultRandomName";
import "react-toastify/dist/ReactToastify.css";
import { notifyUnauthenticated, notifyWelcome } from "../../lib/toasts";
import Image from "next/image";

const Profile = () => {
  const { data: session } = useSession();
  const [clicked, setClicked] = useState<boolean>(false);
  const [useGreenColor, setUseGreenColor] = useState<boolean>(true);

  const handleClick = (): void => {
    setClicked(true);
    if (useGreenColor) {
      session
        ? notifyWelcome(session?.user?.name?.split(" ")[0])
        : notifyUnauthenticated();
      setTimeout(() => setUseGreenColor(false), 1000);
    }
  };

  return (
    <div className="hidden sm:flex items-center sm:space-x-2 justify-evenly">
      <div className="mr-5">
        {session && (
          <Image
            height={48}
            width={48}
            src={session?.user?.image!}
            className="hidden lg:inline-flex rounded-full h-12 cursor-pointer hover:rotate-90 transition duration-150 delay-100 ease-in-out"
            alt={session?.user?.name || "User"}
          />
        )}
      </div>
      <p className="hidden lg:inline-flex font-serif font-semibold whitespace-nowrap text-xl pr-1 text-orange-600 cursor-not-allowed select-none">
        {session
          ? session?.user?.name || `${generateRandomName()}`
          : "Unauthenticated User"}
      </p>
      <div className="flex items-center md:p-x-5 sm:h-14 p-2 relative">
        <IoMdNotifications
          className={`w-10 h-10 cursor-pointer ${
            clicked && !useGreenColor && "animate-notification"
          }`}
          color="#E2873C"
          onClick={handleClick}
          onMouseLeave={() => setClicked(false)}
        />
        <div
          className={`rounded-full w-[18px] h-[18px] absolute ${
            useGreenColor && session ? "bg-green-500 animate-pulse" : "hidden"
          } top-1 right-3 ${
            clicked && !useGreenColor && "animate-notification"
          }`}
        ></div>
      </div>
    </div>
  );
};

export default Profile;
