import Head from "next/head";
import CreateForm from "../components/CreateForm/CreateForm";
import Link from "next/link";

const NewPoll = ({ data }) => {
  return (
    <>
      <Head>
        <title>New</title>
      </Head>
      <CreateForm />
      <Link href={"/"} name="Back Home">
        <div className="border-2 border-blue-500 rounded-3xl p-2 text-center text-1xl w-48">
          ← Back Home
        </div>
      </Link>
    </>
  );
};

export default NewPoll;
