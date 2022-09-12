import Head from "next/head";
import React from "react";
import { Navbar } from "../components";
import Login from "../components/navbar/Slogan";

const Home = () => {
  return (
    <div>
      <Head>
        <title>Crunch Fitness</title>
      </Head>
      <header>
        <nav>
          <Login />
          <Navbar />
        </nav>
      </header>
      <main>

      </main>

      <footer>
        
      </footer>
    </div>
  );
};

export default Home;
