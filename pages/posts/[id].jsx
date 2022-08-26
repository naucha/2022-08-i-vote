import Head from "next/head";
import dbConnect from "../../lib/dbConnectDB";
import { useContext, useEffect } from "react";
import PollModel from "../../models/Poll";
import PollDetailitem from "../../components/PollDetailitem/PollDetailitem";
import { OptionVotesContext } from "../../store/context/OptionVotesContext";
import StyledLink from "../../components/Styles/LinkStyles";
import { ContainerMain } from "../../components/Styles/SharedStyles";

const PollDetail = ({ element }) => {
  const { poll, setPoll } = useContext(OptionVotesContext);

  useEffect(() => {
    setPoll(element);
  }, [element, setPoll]);

  return (
    <>
      <Head>
        <title>Votation</title>
      </Head>
      <ContainerMain>
        <PollDetailitem poll={poll} setPoll={setPoll} />
        <StyledLink href="/" name="Back Home"></StyledLink>
      </ContainerMain>
    </>
  );
};

export async function getServerSideProps(context) {
  await dbConnect();

  console.log("FIND BY ID ONE VOTATION");
  const {
    query: { id },
  } = context;

  const pollResponse = await PollModel.findById(id);
  const poll = pollResponse.toObject();

  poll._id = pollResponse._id.toString();

  const optionsToClean = poll.options;

  optionsToClean.map((option) => {
    const cleaned = "";
    option._id = option._id.toString();
    return cleaned;
  });

  return { props: { element: poll } };
}

export default PollDetail;
