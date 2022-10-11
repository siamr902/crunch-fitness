import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import React, { useEffect } from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import { GoHome } from "react-icons/go";
import { runConfetti } from "../../lib/confetti";

const Success = () => {
  const router = useRouter();

  const { data: session } = useSession();

  useEffect(() => {
    runConfetti();
  }, [])

  return (
    <motion.div
      className="min-h-screen flex flex-col items-center justify-center bg-zinc-200"
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "100vh" }}
      transition={{ duration: 2, ease: "easeIn" }}
    >
      <Head>
        <title>Thanks for Joining!</title>
        <link rel="shortcut icon" href="/crunch-logo.svg" />
      </Head>
      <div className="font-banner text-[4vw] font-normal -translate-y-40">
        <div>
          Welcome to the{" "}
          <span className="text-transparent bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text">
            Crunch Family
          </span>{" "}
          {session?.user!.name?.split(" ")[0]}!
        </div>
        <div className="absolute -top-[75%] right-[50%] translate-x-[50%] w-[18vw] h-[18vw] bg-orange-500 rounded-full -z-10 opacity-40"></div>
      </div>
      <GoHome
        className="w-[15vw] h-[5vw] cursor-pointer text-red-600 opacity-70 hover:scale-90 active:scale-100 transition duration-200 ease-in-out"
        onClick={() => router.push("/")}
      />
    </motion.div>
  );
};

export default Success;
