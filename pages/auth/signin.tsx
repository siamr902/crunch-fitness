import React from "react";
import { getProviders, signIn } from "next-auth/react";
import { GetServerSideProps } from "next";
import getProviderImage from "../../utils/getProviderImage";
import Head from "next/head";

const SignIn = ({ providers }: any) => {
  return (
    <div className="flex justify-center items-center flex-col min-h-screen bg-gradient-to-r from-[#de1245] to-[#ffbc15]">
      <Head>
        <title>Sign In</title>
        <link rel="shortcut icon" href="/crunch-logo.svg" />
      </Head>
      <div className="text-4xl font-bold text-orange-200 drop-shadow-hollow">
        Select a Provider
      </div>
      <div className="flex space-x-4 justify-center items-center mt-10">
        {Object.values(providers).map((provider: any) => (
          <div
            key={provider.name}
            className="flex justify-center p-[1px] rounded-full"
          >
            <button
              onClick={() => signIn(provider.id, { callbackUrl: "/" })}
              className="text-5xl hover:scale-110 hover:brightness-75 brightness-50"
            >
              {getProviderImage(provider.name)}
            </button>
          </div>
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
