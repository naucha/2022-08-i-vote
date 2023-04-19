import Head from "next/head";
import dbConnect from "../../lib/dbConnectDB";
import { useContext, useEffect } from "react";
import PollModel from "../../models/Poll";
import PollDetailitem from "../../components/PollDetailitem/PollDetailitem";
import { OptionVotesContext } from "../../store/context/OptionVotesContext";
import Link from "next/link";

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
      <div>
        <PollDetailitem poll={poll} setPoll={setPoll} />
        <Link href={"/"} name="Back Home">
          <div className="border-2 border-blue-500 rounded-3xl p-2 text-center text-1xl w-48">
            ← Back Home
          </div>
        </Link>
      </div>
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
