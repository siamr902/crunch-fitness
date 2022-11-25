import Head from "next/head";
import React from "react";
import axios from "axios";
import { GetServerSideProps } from "next";
import { Navbar, Slogan, Footer, Content } from "../components";
import { ToastContainer } from "react-toastify";

const Home = ({ weatherData }: any) => {
  return (
    <>
      <Head>
        <title>Crunch Fitness - Top Rated Fitness Centers & Health Clubs</title>
        <link rel="shortcut icon" href="/crunch-logo.svg" />
      </Head>
      <div id="profile">
        <Slogan />
      </div>
      <header className="sticky top-0 left-0 z-50">
        <ToastContainer />
        <Navbar />
      </header>
      <Content weatherData={weatherData} />
      <Footer />
    </>
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
