const OptionsToVote = ({ poll, setPoll }) => {
  const { options, _id: idPoll } = poll;

  const handlerVoted = async (index) => {
    const optionIdToChange = options[index]._id;
    const pollIdToChange = idPoll;

    const response = await fetch("../api/submit-vote", {
      body: [pollIdToChange, optionIdToChange],
      method: "PUT",
    });

    const result = await response.json();
    setPoll(result);
  };

  return (
    <ul className="h-60  flex flex-col items-center  justify-center ">
      {options.map(({ option, votes }, index) => (
        <li
          className="w-2/3 p-2 mt-6 border justify-between rounded-lg grid grid-cols-1"
          key={index}
        >
          <button
            className="flex justify-normal items-center"
            onClick={() => handlerVoted(index)}
          >
            <span className="w-10/12"> {option}</span>
            <span className="border rounded p-1 w-2/12 text-center mr-1">
              {votes.length}
            </span>
          </button>
        </li>
      ))}
    </ul>
  );
};

export { OptionsToVote };
