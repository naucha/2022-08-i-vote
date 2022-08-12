import PollListItem from "../components/PollListitem/PollListItem";
import { useAppContext } from "../store/context/appContext";
import dbConnect from "../lib/dbConnectDB";
import styles from "../styles/Home.module.css";
import PollModel from "../models/Poll";

const Home = ({ polls }) => {
  const globalContext = useAppContext();

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
          {polls.map((poll) => (
            <PollListItem key={poll._id} poll={poll} />
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
  console.log("FIND DB", result);

  const polls = JSON.parse(JSON.stringify(result));

  // const polls = JSON.parse(poll);
  // console.log(polls);
  // const votations = result.map((doc) => {

  //   const votation = doc.toObject();
  //   // votation._id = votation._id.toString();
  //   return votation;
  // });

  return { props: { polls } };
}

export default Home;
