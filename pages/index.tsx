import Head from "next/head";
import React from "react";
import axios, { AxiosResponse } from "axios";
import { Navbar } from "../components";
import {Footer} from "../components";
import Slogan from "../components/navbar/Slogan";
import WeatherDisplay from "../components/weather/WeatherDisplay";
import EmbedVideo from "../components/video/EmbedVideo";

const Home = ({ weatherData }: any) => {
  return (
    <div className="min-h-screen bg-gray-100">
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
        <WeatherDisplay weatherData={weatherData}/>
        <EmbedVideo />
      </main>

      <footer>
        <Footer />
      </footer>
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
