import Head from "next/head";
import React from "react";
import axios from "axios";
import { GetServerSideProps } from "next";
import { Navbar } from "../components";
import { Footer } from "../components";
import Slogan from "../components/navbar/Slogan";
import WeatherDisplay from "../components/weather/WeatherDisplay";
import EmbedVideo from "../components/video/EmbedVideo";
import { ToastContainer } from "react-toastify";

const Home = ({ weatherData }: any) => {
  return (
    <div className="h-screen bg-gray-100 scrollbar-thin scrollbar-track-gray-700 scrollbar-thumb-orange-500 scroll-smooth">
      <Head>
        <title>Crunch Gym - Top Rated Fitness Centers & Health Clubs</title>
        <link rel="shortcut icon" href="/crunch-logo.svg" />
      </Head>
      <header>
        <nav>
          <ToastContainer />
          <Slogan />
          <Navbar />
        </nav>
      </header>
      <main>
        <WeatherDisplay weatherData={weatherData} />
        <EmbedVideo />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await axios.get(
    `${process.env.OPEN_WEATHER_API_URL}${process.env.OPEN_WEATHER_API_KEY}`
  );

  const weatherData = response.data;

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
