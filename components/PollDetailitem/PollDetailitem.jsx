import { CircleChart } from "../CircleChart/CircleChart";
import { OptionsToVote } from "../OptionsToVote/OptionsToVote";

const PollDetailitem = ({ poll, setPoll }) => {
  const { title, description, options, _id: idPoll } = poll;

  if (idPoll == null) {
    return "Loading";
  }

  const votesValues = options.map((option) => option.votes.length);
  const orderedVotes = votesValues.sort((a, b) => b - a);

  const maxVotes = orderedVotes[0];

  const filterMaxVotedOption = options.filter(
    (option) => option.votes.length === maxVotes
  );

  const MaxVotedOption = filterMaxVotedOption[0].option;

  return (
    <>
      <div className="grid grid-cols-2 gap-4 mt-10 mb-4">
        <div className="pl-2 pr-2 border rounded-xl flex-col gap-y-2  min-w-full text-center">
          <div>
            <h1 className="mt-4 text-2xl text-teal-600 font-bold">{title}</h1>
            <div className="pl-4 pr-4 text-sm">{description}</div>
          </div>
          <div>
            For now the winning option is <span>{MaxVotedOption}</span> and have{" "}
            <span>{maxVotes} votes</span>
            <OptionsToVote poll={poll} setPoll={setPoll} />
          </div>
        </div>
        <CircleChart options={options} />
      </div>
    </>
  );
};

export default PollDetailitem;
