import Link from "next/link";
import Options from "../Options/Options";
import { ListItem, Title, Description } from "../Styles/ListItemStyled";

const PollListItem = ({ poll }) => {
  const { title, _id, description, options } = poll;

  return (
    <Link href={`/posts/${_id}`}>
      <ListItem>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <Options options={options} />
      </ListItem>
    </Link>
  );
};

export default PollListItem;
