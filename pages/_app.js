import "../styles/globals.css";
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import Home from ".";

const App = ({ Component, pageProps }) => {
  return (
    <>
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

          <Link href={`/newpost/new`}>
            <a>New Votation</a>
          </Link>

          <Link href={`/posts/id`}>
            <a>Existing Votation</a>
          </Link>
        </nav>
      </header>
      <main>
        <Component {...pageProps} />
      </main>
    </>
  );
};

export default App;
