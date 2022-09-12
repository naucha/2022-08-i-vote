import Head from "next/head";
import Link from "next/link";
import { Header, Navbar, Title } from "../components/Navbar/Navbar";
import React from "react";
import { OptionVotesProvider } from "../store/context/OptionVotesContext";
import { ThemeProvider, DefaultTheme } from "styled-components";
import GlobalStyle from "../components/Styles/globalStyles";

const theme: DefaultTheme = {
  color: {
    primary: "#fff",
    secondary: "#45b1df",
  },
  bgcolor: {
    primary: "#000",
    secondary: "#fff",
  },
};

const App = ({ Component, pageProps }) => {
  return (
    <>
      <OptionVotesProvider>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Head>
            <title>VoteApp</title>
            <link rel="icon" href="/chicken-rooster-icon.svg" />
          </Head>
          <Header>
            <Title>| Vote |</Title>
            <Navbar>
              <Link href={`/`}>
                <a>Home</a>
              </Link>
              <Link href={`/new`}>
                <a>Poll Maker</a>
              </Link>
            </Navbar>
          </Header>
          <main>
            <Component {...pageProps} />
          </main>
        </ThemeProvider>
      </OptionVotesProvider>
    </>
  );
};

export default App;
