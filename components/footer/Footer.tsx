import React from "react";
import Socials from "./Socials";
import socialLinks from "../../data/socialLinks";
import {
  GrFacebookOption,
  GrTwitter,
  GrYoutube,
  GrInstagram,
} from "react-icons/gr";
import { MdCopyright } from "react-icons/md";

const Footer = () => {
  return (
    <div className="flex justify-between items-center w-full shadow-sm p-5 bg-[#0e1111]">
      <div className="flex flex-col">
        <div className="space-y-6">
          <div className="flex space-x-4 md:space-x-10 flex-grow">
            <Socials Icon={GrFacebookOption} link={socialLinks.facebook} />
            <Socials Icon={GrInstagram} link={socialLinks.instagram} />
            <Socials Icon={GrTwitter} link={socialLinks.twitter} />
            <Socials Icon={GrYoutube} link={socialLinks.yt} />
          </div>
          <div className="flex text-white space-x-2 items-center justify-start font-arial">
            <MdCopyright className="h-3 w-3" />
            <div className="font-semibold text-lg tracking-widest">
              CRUNCH FITNESS
            </div>
          </div>
        </div>
        <div className="inline-flex text-sm text-white font-semibold tracking-widest opacity-40 mt-1">
          ALL RIGHTS RESERVED
        </div>
      </div>
    </div>
  );
};

export default Footer;
