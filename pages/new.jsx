import Head from "next/head";
import CreateForm from "../components/CreateForm/CreateForm";
import StyledLink from "../components/Styles/LinkStyles";
import { ContainerMain } from "../components/Styles/SharedStyles";

const NewPoll = ({ data }) => {
  return (
    <>
      <Head>
        <title>New</title>
      </Head>
      <ContainerMain>
        <CreateForm />
        <StyledLink href={"/"} name="Back Home"></StyledLink>
      </ContainerMain>
    </>
  );
};

export default NewPoll;
