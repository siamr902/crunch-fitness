import Head from "next/head";
import React from "react";
import axios, { AxiosResponse } from "axios";
import { Navbar } from "../components";
import Slogan from "../components/navbar/Slogan";
import WeatherDisplay from "../components/weather/WeatherDisplay";

const Home = ({ weatherData }: any) => {
  return (
    <div>
      <Head>
        <title>Crunch Gym - Top Rated Fitness Centers & Health Clubs</title>
        <link rel="shortcut icon" href="/crunch-favicon-logo.png" />
      </Head>
      <header>
        <nav>
          <Slogan />
          <Navbar />
        </nav>
      </header>
      <main>
        <WeatherDisplay />
        {weatherData.main.temp}
      </main>

      <footer></footer>
    </div>
  );
};

export const getServerSideProps = async () => {
  const response = await axios.get(
    `${process.env.OPEN_WEATHER_API_URL}${process.env.OPEN_WEATHER_API_KEY}`
  );

  const weatherData = response.data

  if (!weatherData) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      weatherData,
    },
  };
};

export default Home;
