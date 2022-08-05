import VotationListItem from "../components/VotationListItem";
import dbConnect from "../lib/dbConnectDB";
import VotationModel from "../models/Votation";
import styles from "../styles/Home.module.css";

const Home = ({ votations }) => {
  return (
    <>
      {" "}
      <section className={styles.description}>
        {`
            This application is made to quickly create posts to be able to vote
            among the given options. A quick way to decide the weekend plan or 
            to decide the day to have lunch with friends.`}
      </section>
      <section>
        <ul>
          {votations.map((votation) => (
            <VotationListItem key={votation._id} votation={votation} />
          ))}
        </ul>
      </section>
    </>
  );
};

export async function getServerSideProps() {
  await dbConnect();

  console.log("FIND on DB");

  const result = await VotationModel.find({});
  const votations = result.map((doc) => {
    const votation = doc.toObject();

    votation._id = votation._id.toString();

    return votation;
  });

  return { props: { votations } };
}

export default Home;
