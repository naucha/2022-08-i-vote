import Link from "next/link";
import styles from "../../styles/Home.module.css";

const PollListItem = ({ poll }) => {
  const { title, _id, description, options } = poll;

  return (
    <Link href={`/posts/${_id}`}>
      <li className={styles.card}>
        <h2>{title}</h2>
        <p>{description}</p>

        <ul>
          {options.map(({ option }, index) => (
            <li key={index}>{option}</li>
          ))}
        </ul>
      </li>
    </Link>
  );
};

export default PollListItem;
