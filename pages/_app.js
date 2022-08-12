import "../styles/globals.css";
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import Home from ".";
import { AppWrapper } from "../store/context/appContext";
import React from "react";

const App = ({ Component, pageProps }) => {
  return (
    <>
      <AppWrapper>
        <Head>
          <title>iVote</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <header>
          <h1 className={styles.title}>iVote App!</h1>
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
      </AppWrapper>
    </>
  );
};

export default App;
