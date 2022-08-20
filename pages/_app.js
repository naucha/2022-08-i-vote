import "../styles/globals.css";
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import React from "react";
import { OptionVotesProvider } from "../store/context/OptionVotesContext";

const App = ({ Component, pageProps }) => {
  return (
    <>
      <OptionVotesProvider>
        <Head>
          <title>iVote</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <header>
          <h1 className={styles.title}>| Vote App |</h1>
          <nav>
            <Link href={`/`}>
              <a>Home</a>
            </Link>
            <Link href={`/new`}>
              <a>Poll Maker</a>
            </Link>
          </nav>
        </header>
        <main>
          <Component {...pageProps} />
        </main>
      </OptionVotesProvider>
    </>
  );
};

export default App;
