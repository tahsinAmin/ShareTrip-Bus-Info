import React from "react";
import Navbar from "./Navbar";
import Head from "next/head";

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>ShareTrip</title>
        <link rel='icon' href='/favicon.ico' />
        <link
          rel='stylesheet'
          href='https://unpkg.com/@themesberg/flowbite@1.2.0/dist/flowbite.min.css'
        />
      </Head>
      <Navbar />
      {children}
      <script src='https://unpkg.com/@themesberg/flowbite@1.2.0/dist/flowbite.bundle.js'></script>
    </div>
  );
}
