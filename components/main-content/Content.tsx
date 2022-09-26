import React from "react";
import Banner from "./Banner";
import WeatherDisplay from "./weather/WeatherDisplay";

const Content = ({ weatherData }: any) => {
  return (
    <>
      <div className="flex items-center justify-between w-full">
        <WeatherDisplay weatherData={weatherData} />
        <Banner />
      </div>
    </>
  );
};

export default Content;
