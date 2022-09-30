import React from "react";
import Banner from "./Banner";
import Crunchism2 from "./NoJudgement";
import EmbedVideo from "./EmbedVideo";
import WeatherDisplay from "./WeatherDisplay";

const Content = ({ weatherData }: any) => {
  return (
    <>
      <div className="flex items-center justify-between w-full">
        <WeatherDisplay weatherData={weatherData} />
        <Banner />
      </div>
      <Crunchism2 />
      <EmbedVideo />
    </>
  );
};

export default Content;
