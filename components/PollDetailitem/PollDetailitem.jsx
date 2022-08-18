import { useContext } from "react";
import { OptionVotesContext } from "../../store/context/OptionVotesContext";
import styles from "../../styles/Home.module.css";

const PollDetailitem = ({ poll }) => {
  const { title, description, options, _id: idPoll } = poll;

  const [state, setState] = useContext(OptionVotesContext);

  const handlerVoted = async (index) => {
    const optionIdToChange = options[index]._id;
    const pollIdToChange = idPoll;

    const response = await fetch("../api/submit-vote", {
      body: [pollIdToChange, optionIdToChange],
      method: "PUT",
    });

    const result = await response.json();
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
    </>
  );
};

export default PollDetailitem;
