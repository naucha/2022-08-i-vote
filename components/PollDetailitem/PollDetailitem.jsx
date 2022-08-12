import styles from "../../styles/Home.module.css";

const PollDetailitem = ({ poll }) => {
  const { title, description, options } = poll;

  console.log(options.option);

  return (
    <>
      <h2>{title}</h2>
      <li className={styles.card}>
        <p>{description}</p>
        <ul>
          {options.map(({ option, votes }, index) => (
            <li key={index}>
              <button>
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
