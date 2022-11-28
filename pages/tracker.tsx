import { Exercise, User, Workout } from "@prisma/client";
import { motion } from "framer-motion";
import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";
import Head from "next/head";
import React from "react";
import Footer from "../components/payment/Footer";
import FitnessTracker from "../components/tracker/FitnessTracker";
import Header from "../components/tracker/Header";
import { TrackerContext } from "../contexts/TrackerContext";

type Props = {
  user: User & {
    workouts: {
      exercises: Exercise[];
      id: string;
      name: string;
      rating: number;
      duration: number;
      notes: string;
    }[];
  };
};

const Tracker = ({ user }: Props) => {
  return (
    <TrackerContext.Provider value={user}>
      <motion.aside
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <Head>
          <title>Crunch Tracker - Monitor Your Progress</title>
          <link rel="shortcut icon" href="/crunch-logo.svg" />
        </Head>
        <Header />
        <FitnessTracker />
        <Footer />
      </motion.aside>
    </TrackerContext.Provider>
  );
};

export default Tracker;

export const getServerSideProps: GetServerSideProps = async () => {
  const session = await getSession();

  const user = await prisma?.user.findFirst({
    where: {
      email: session?.user?.email,
    },
    include: {
      workouts: {
        where: {
          rating: { gte: 1 },
        },
        select: {
          exercises: true,
          id: true,
          name: true,
          rating: true,
          duration: true,
          notes: true
        },
      },
    },
  });

  return {
    props: {
      user,
    },
  };
};
