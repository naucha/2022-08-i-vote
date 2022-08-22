import dbConnect from "../lib/dbConnectDB";
import styles from "../styles/Home.module.css";
import PollModel from "../models/Poll";
import Polls from "../components/Polls/Polls";

const Home = ({ polls }) => {
  return (
    <>
      <section className={styles.description}>
        {`
            This application is made to quickly create posts to be able to vote
            among the given options. A quick way to decide the weekend plan or 
            to decide the day to have lunch with friends.`}
      </section>

      <section>
        <Polls polls={polls} />
      </section>
    </>
  );
};

export async function getServerSideProps() {
  await dbConnect();

  console.log("FIND ALL ON DB");

  const result = await PollModel.find({});

  const polls = JSON.parse(JSON.stringify(result));

  return { props: { polls } };
}

export default Home;
