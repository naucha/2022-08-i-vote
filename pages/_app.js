import "../styles/globals.css";
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import React from "react";
import { OptionVotesProvider } from "../store/context/OptionVotesContext";
import Navbar from "../components/Navbar/Navbar";

const App = ({ Component, pageProps }) => {
  return (
    <>
      <OptionVotesProvider>
        <Head>
          <title>VoteApp</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <header>
          <h1 className={styles.title}>| Vote App |</h1>
          <Navbar>
            <Link href={`/`}>
              <a>Home</a>
            </Link>
            <Link href={`/new`}>
              <a>Poll Maker</a>
            </Link>
          </Navbar>
        </header>
        <main>
          <Component {...pageProps} />
        </main>
      </OptionVotesProvider>
    </>
  );
};

export default App;
