import React from "react";
import { getProviders, signIn } from "next-auth/react";
import { GetServerSideProps } from "next";
import getProviderImage from "../../utils/getProviderImage";
import Head from "next/head";
import { motion } from "framer-motion";

const SignIn = ({ providers }: any) => {
  return (
    <div className="flex justify-center items-center flex-col min-h-screen bg-gradient-to-r from-[#de1245] to-[#ffbc15]">
      <Head>
        <title>Sign In</title>
        <link rel="shortcut icon" href="/crunch-logo.svg" />
      </Head>
      <motion.div
        className="text-4xl font-bold text-orange-200 drop-shadow-hollow"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 7, ease: "easeInOut" }}
      >
        Select a Provider
      </motion.div>
      <div className="flex space-x-4 justify-center items-center mt-10">
        {Object.values(providers).map((provider: any, index) => (
          <motion.div
            key={provider.name}
            className="flex justify-center p-[1px] rounded-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 * (index + 1), ease: "easeInOut" }}
          >
            <button
              onClick={() => signIn(provider.id, { callbackUrl: "/" })}
              className="text-5xl hover:scale-110 active:scale-100 hover:brightness-75 brightness-50"
            >
              {getProviderImage(provider.name)}
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const providers = await getProviders();

  return {
    props: {
      providers,
    },
  };
};

export default SignIn;
