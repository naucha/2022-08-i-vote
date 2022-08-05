import Head from "next/head";
import Link from "next/link";
import VotationModel from "../../models/Votation";
import dbConnect from "../../lib/dbConnectDB";
import VotationDetailitem from "../../components/VotationDetailitem/VotationDetailitem";

const VotationDetail = ({ votation }) => {
  return (
    <>
      <Head>
        <title>Votation</title>
      </Head>
      <VotationDetailitem votation={votation} />
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

  console.log("FIND BY ID");
  const {
    query: { id },
  } = context;

  const votationResponse = await VotationModel.findById(id);
  const votation = votationResponse.toObject();
  votation._id = votationResponse._id.toString();

  return { props: { votation } };
}

export default VotationDetail;
