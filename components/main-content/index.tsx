import React from "react";
import Banner from "./Banner";
import NoJudgement from "./NoJudgement";
import EmbedVideo from "./EmbedVideo";
import WeatherDisplay from "./WeatherDisplay";
import Energy from "./Energy";
import MembershipBanner from "./MembershipBanner";
import CrunchMode from "./CrunchMode";
import { motion } from "framer-motion";
import MeetOurTrainers from "./MeetOurTrainers";

const Content = ({ weatherData }: any) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="flex items-center justify-between w-full">
        <WeatherDisplay weatherData={weatherData} />
        <Banner />
      </div>
      <CrunchMode />
      <MeetOurTrainers />
      <NoJudgement />
      <Energy />
      <EmbedVideo />
      <MembershipBanner />
    </motion.div>
  );
};

export default Content;
