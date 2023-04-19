import Link from "next/link";
import Options from "../Options/Options";

const PollListItem = ({ poll }) => {
  const { title, _id, description, options } = poll;

  return (
    <Link href={`/posts/${_id}`}>
      <div className="border rounded-xl grid gap-y-2 w-52 min-w-full  text-center">
        <h2 className="mt-4 text-1xl text-teal-600 font-bold">{title}</h2>
        <p className="pl-4 pr-4 text-sm">{description}</p>
        <Options options={options} />
      </div>
    </Link>
  );
};

export default PollListItem;
