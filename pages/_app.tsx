import Head from "next/head";
import Link from "next/link";
import React from "react";
import { OptionVotesProvider } from "../store/context/OptionVotesContext";
import "../asset/css/globals.css";

const App = ({ Component, pageProps }) => {
  return (
    <>
      <OptionVotesProvider>
        <Head>
          <link rel="icon" href="/chicken-rooster-icon.svg" />
        </Head>
        <div className="flex container mt-8 content-normal min-w-full">
          <h1 className="text-3xl text-center flex-1 font-bold  text-teal-600 hover:text-teal-100 mobile:text-red-300  laptop:text-red-600">
            VoteApp
          </h1>
          <Link href={`/`}>
            <a className="text-3xl text-center flex-1 font-bold text-teal-600 hover:text-teal-100 rounded">
              Home
            </a>
          </Link>
          <Link href={`/new`}>
            <a className="text-3xl text-center flex-1 font-bold text-teal-600 hover:text-teal-100 hover:w-0 rounded">
              Poll Maker
            </a>
          </Link>
        </div>

        <main className="w-full">
          <Component {...pageProps} />
        </main>
      </OptionVotesProvider>
    </>
  );
};

export default App;
