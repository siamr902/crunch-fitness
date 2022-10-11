import Head from "next/head";
import React from "react";
import Footer from "../components/payment/Footer";
import Header from "../components/payment/Header";
import MembershipPlans from "../components/payment/MembershipPlans";

const Payment = () => {
  return (
    <div className="h-screen scrollbar-thin scrollbar-track-gray-700 scrollbar-thumb-orange-500 scroll-smooth">
      <Head>
        <title>
          Cheap Monthly Gym Memberships - High Value, Low Prices & Costs
        </title>
        <link rel="shortcut icon" href="/crunch-logo.svg" />
      </Head>
      <header className="sticky top-0 z-50">
        <Header />
      </header>
      <MembershipPlans />
      <Footer />
    </div>
  );
};

export default Payment;
