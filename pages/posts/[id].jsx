import Head from "next/head";
import Link from "next/link";
import dbConnect from "../../lib/dbConnectDB";
import { useState } from "react";
import CircleChart from "../../components/CircleChart/CircleChart";
import PollModel from "../../models/Poll";
import PollDetailitem from "../../components/PollDetailitem/PollDetailitem";

const PollDetail = ({ poll }) => {
  const { options } = poll;

  const [userData, setData] = useState({
    labels: options.map((data) => data.option),
    datasets: [
      {
        label: "Users options",
        data: options.map((data) => data.votes.length),
        backgroundColor: [
          "rgb(203,82,82)",
          "rgb(69,177,223)",
          "rgb(99,201,122)",
          "rgb(229,224,88)",
        ],
        borderWidth: 1,
      },
    ],
  });

  return (
    <>
      <Head>
        <title>Votation</title>
      </Head>
      <div style={{ width: 400 }}>
        <PollDetailitem poll={poll} />
        <div style={{ width: 250 }}>
          <CircleChart chartData={userData} />
        </div>
      </div>
      <div>
        <Link href={"/"}>
          <a>← Back to home</a>
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

  return { props: { poll } };
}

export default PollDetail;
