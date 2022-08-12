import Head from "next/head";
import Link from "next/link";
import CreateForm from "../components/CreateForm/CreateForm";

const NewPoll = ({ data }) => {
  return (
    <>
      <Head>
        <title>New</title>
      </Head>
      <main>
        <CreateForm />
      </main>
      <div>
        <Link href={"/"}>
          <a>← Back to home</a>
        </Link>
      </div>
    </>
  );
};

export default NewPoll;
