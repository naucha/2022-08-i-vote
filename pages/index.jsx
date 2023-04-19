import dbConnect from "../lib/dbConnectDB";
import PollModel from "../models/Poll";
import Polls from "../components/Polls/Polls";

const Home = ({ polls }) => {
  return (
    <>
      <section className="text-center">
        <p className="w-6/12 justify-normal content-center">
          This application is made to quickly create posts to be able to vote
          among the given options. A quick way to decide the weekend plan or to
          decide the day to have lunch with friends.
        </p>
      </section>

      <section className="p-4 justify-normal items-center">
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
