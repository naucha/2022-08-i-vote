import Head from "next/head";
import Link from "next/link";
import CreateForm from "../components/CreateForm/CreateForm";
import StyledLink from "../components/Styles/LinkStyles";

const NewPoll = ({ data }) => {
  return (
    <>
      <Head>
        <title>New</title>
      </Head>
      <main>
        <CreateForm />
      </main>
      <div>
        <StyledLink href={"/"} name="Back Home"></StyledLink>
      </div>
    </>
  );
};

export default NewPoll;
