import PollListItem from "../components/PollListitem/PollListItem";
import dbConnect from "../lib/dbConnectDB";
import styles from "../styles/Home.module.css";
import PollModel from "../models/Poll";

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
        <ul>
          {polls.map((poll, index) => (
            <PollListItem key={index} poll={poll} />
          ))}
        </ul>
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
