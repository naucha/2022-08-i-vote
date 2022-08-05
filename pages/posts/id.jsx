import Head from "next/head";
import Link from "next/link";
import dbConnect from "../../lib/dbConnectDB";
import Votation from "../../models/Votation";
import homeStyles from "../../styles/Home.module.css";

const ExistingVotations = ({ votations }) => {
  console.log(votations);
  return (
    <>
      <Head>
        <title>Votation</title>
      </Head>

      <section>
        <ul>
          {votations.map((votation) => (
            <li className={homeStyles.card} key={votation._id}>
              <h2>{votation.title}</h2>
              <p>{votation.description}</p>
              <button>{votation.option1}</button>
              <button>{votation.option2}</button>
              <button>{votation.option3}</button>
            </li>
          ))}
        </ul>
      </section>

      <div>
        <Link href={"/"}>
          <a>← Back to home</a>
        </Link>
      </div>
    </>
  );
};

export async function getServerSideProps() {
  await dbConnect();

  console.log("FIND on DB");

  const result = await Votation.find({});
  const votations = result.map((doc) => {
    const votation = doc.toObject();

    votation._id = votation._id.toString();

    return votation;
  });

  return { props: { votations } };
}

export default ExistingVotations;
