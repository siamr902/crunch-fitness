import React, { useState } from "react";
import { IoMdNotifications } from "react-icons/io";

const Profile = () => {
  const [clicked, setClicked] = useState<boolean>(false);

  const handleClick = () => {
    setClicked(true);
  };

  return (
    <div className="flex items-center sm:space-x-2 justify-evenly">
      <p className="hidden lg:inline-flex font-serif font-semibold whitespace-nowrap text-xl pr-2 text-orange-600">
        Siam Rahman
      </p>
      <div className="flex items-center md:p-x-5 sm:h-14 p-2 relative">
        <IoMdNotifications
          className={`w-10 h-10 cursor-pointer ${clicked && "hover:animate-notification"}`}
          color="#E38B29"
          onClick={handleClick}
          onMouseLeave={() => setClicked(false)}
        />
        <div
          className={`rounded-full w-[18px] h-[18px] absolute bg-red-700 top-1 right-3 ${
            clicked && "animate-notification"
          }`}
        ></div>
      </div>
    </div>
  );
};

export default Profile;
