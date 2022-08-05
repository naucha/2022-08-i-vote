import Link from "next/link";
import styles from "../styles/Home.module.css";

const VotationListItem = ({ votation }) => {
  //On click go to page //post/[id] show details//
  const { title, _id, description, option1, option2, option3 } = votation;
  return (
    <Link href={`/posts/${_id}`}>
      <li className={styles.card}>
        <h2>{title}</h2>
        <p>{description}</p>
        <button>{option1}</button>
        <button>{option2}</button>
        <button>{option3}</button>
      </li>
    </Link>
  );
};

export default VotationListItem;
