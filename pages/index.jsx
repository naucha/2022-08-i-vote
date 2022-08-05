import dbConnect from "../lib/dbConnectDB";
import Votation from "../models/Votation";
import styles from "../styles/Home.module.css";
import mongoose from "mongoose";

const Home = () => {
  return (
    <>
      {" "}
      <section className={styles.description}>
        {`
            This application is made to quickly create posts to be able to vote
            among the given options. A quick way to decide the weekend plan or 
            to decide the day to have lunch with friends.`}
      </section>
    </>
  );
};

export async function getServerSideProps() {
  await dbConnect();

  console.log("CONNECTED TO DB");

  const result = await Votation.find({});
  const votations = result.map((doc) => {
    const votation = doc.toObject();

    votation._id = votation._id.toString();

    return votation;
  });

  return { props: { votations } };
}

export default Home;
