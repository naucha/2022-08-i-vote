import styles from "../../styles/Home.module.css";
import CircleChart from "../CircleChart/CircleChart";

const PollDetailitem = ({ poll, setPoll }) => {
  const { title, description, options, _id: idPoll } = poll;

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

  if (idPoll == null) {
    return "Loading";
  }

  const chartData = {
    labels: options.map((data) => data.option),
    datasets: [
      {
        label: "Users options",
        data: options.map((data) => data.votes.length),
        backgroundColor: [
          "rgb(203,82,82)",
          "rgb(69,177,223)",
          "rgb(99,201,122)",
          "rgb(229,224,88)",
        ],
        borderWidth: 1,
      },
    ],
  };
  return (
    <>
      <h2>{title}</h2>
      <li className={styles.card}>
        <p>{description}</p>
        <ul>
          {options.map(({ option, votes }, index) => (
            <li key={index}>
              <button onClick={() => handlerVoted(index)}>
                <span>{votes.length} </span>
                {option}
              </button>
            </li>
          ))}
        </ul>
        <p>
          The winning option for now is <span className={styles.p}>.... </span>
          You still have time to change, the most chosen option, you have until
          August 1
        </p>
      </li>
      <div style={{ width: 250 }}>
        <CircleChart chartData={chartData} />
      </div>
    </>
  );
};

export default PollDetailitem;
