import "../styles/globals.css";
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>iVote</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <h1 className={styles.title}>iVote App!</h1>
        <nav>
          <div>
            <h2>
              <Link href={`/`}>Home</Link>
            </h2>
          </div>
          <div>
            <h2>
              <Link href={`/newpost`}>New Votation</Link>
            </h2>
          </div>
          <div>
            <h2>
              <Link href={`/posts/id`}>Existing Votation</Link>
            </h2>
          </div>
        </nav>
      </header>
      <main>
        <section className={styles.description}>
          {`
This application is made to quickly create posts to be able to vote among the given options.
A quick way to decide the weekend plan or to decide the day to have lunch with friends.`}
        </section>
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default MyApp;
