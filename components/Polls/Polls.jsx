import PollListItem from "../PollListitem/PollListItem";

const Polls = ({ polls }) => {
  return (
    <div className="grid grid-cols-1 gap-3 mobile:grid-cols-2 tablet:grid-cols-3 laptop:grid-cols-4 desktop:grid-cols-6">
      {polls.map((poll, index) => (
        <PollListItem key={index} poll={poll} />
      ))}
    </div>
  );
};

export default Polls;
