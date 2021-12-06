import React from "react";
import Navbar from "./Navbar";
import Head from "next/head";

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>ShareTrip</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navbar />
      {children}
    </div>
  );
}
