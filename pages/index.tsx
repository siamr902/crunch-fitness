import Head from "next/head";
import React from "react";
import axios from "axios";
import { GetServerSideProps } from "next";
import { Navbar } from "../components";
import { Footer } from "../components";
import Slogan from "../components/navbar/Slogan";
import { ToastContainer } from "react-toastify";
import Content from "../components/main-content/Content";

const Home = ({ weatherData }: any) => {
  return (
    <div className="h-screen scrollbar-thin scrollbar-track-gray-700 scrollbar-thumb-orange-500 scroll-smooth">
      <Head>
        <title>Crunch Fitness - Top Rated Fitness Centers & Health Clubs</title>
        <link rel="shortcut icon" href="/crunch-logo.svg" />
      </Head>
      <Slogan />
      <header className="sticky top-0 left-0 z-50">
        <ToastContainer />
        <Navbar />
      </header>
      <main>
        <Content weatherData={weatherData} />
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
