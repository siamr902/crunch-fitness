import React from "react";
import Banner from "./Banner";
import NoJudgement from "./NoJudgement";
import EmbedVideo from "./EmbedVideo";
import WeatherDisplay from "./WeatherDisplay";
import Energy from "./Energy";
import MembershipBanner from "./MembershipBanner";

const Content = ({ weatherData }: any) => {
  return (
    <>
      <div className="flex items-center justify-between w-full">
        <WeatherDisplay weatherData={weatherData} />
        <Banner />
      </div>
      <NoJudgement />
      <Energy />
      <EmbedVideo />
      <MembershipBanner />
    </>
  );
};

export default Content;
