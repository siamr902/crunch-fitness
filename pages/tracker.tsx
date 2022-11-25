import Head from "next/head";
import React from "react";
import Footer from "../components/payment/Footer";
import FitnessTracker from "../components/tracker/FitnessTracker";
import Header from "../components/tracker/Header";

const Tracker = () => {
  return (
    <>
      <Head>
        <title>Crunch Tracker - Monitor Your Progress</title>
        <link rel="shortcut icon" href="/crunch-logo.svg" />
      </Head>
      <Header />
      <FitnessTracker />
      <Footer />
    </>
  );
};

export default Tracker;
