import styles from "../../styles/Home.module.css";

const VotationDetailitem = ({ votation }) => {
  console.log(votation);

  const { title, description, option1, option2, option3 } = votation;
  return (
    <>
      <h2>Detailed data from {title}</h2>
      <li className={styles.card}>
        <p>{description}</p>
        <button>
          <span>3</span> {option1}
        </button>
        <button>
          <span>6</span> {option2}
        </button>
        <button>
          <span>1</span> {option3}
        </button>
      </li>
      <div></div>
    </>
  );
};

export default VotationDetailitem;
