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
    <footer className="flex justify-center sm:justify-between items-center w-full shadow-sm px-8 py-10 bg-black">
      <section className="flex flex-col">
        <div className="space-y-6">
          <div className="hidden sm:flex space-x-4 md:space-x-10 flex-grow">
            <Socials
              Icon={GrFacebookOption}
              link={socialLinks.facebook}
              color="text-[#4267B2]"
            />
            <Socials
              Icon={GrInstagram}
              link={socialLinks.instagram}
              color="text-[#E1306C]"
            />
            <Socials
              Icon={GrTwitter}
              link={socialLinks.twitter}
              color="text-[#00acee]"
            />
            <Socials
              Icon={GrYoutube}
              link={socialLinks.yt}
              color="text-red-500"
            />
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
      </section>
      <section className="flex flex-col pr-5 space-y-5">
        <div className="flex text-white justify-end font-arial">
          <div className="hidden sm:inline-flex font-semibold text-lg tracking-wider cursor-pointer hover:text-orange-400 transition-all ease-in-out duration-150 delay-75">
            FREE TRIAL
          </div>
        </div>
        <div>
          <ul className="hidden md:flex space-x-8 text-gray-400 text-xs font-semibold tracking-widest flex-grow">
            <li className="footer-list-item">CONTACT</li>
            <li className="footer-list-item">FAQ</li>
            <li className="footer-list-item">TERMS OF USE</li>
            <li className="footer-list-item">PRIVACY POLICY</li>
          </ul>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
