import styled from "styled-components";
import { ButtonStyled, Votes } from "../Styles/SharedStyles";

const Options = styled.ul`
  display: flex;
  padding: 0;
  justify-content: space-evenly;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
    margin-top: 2.2rem;
    margin-bottom: 2.2rem;
    gap: 1rem;
  }

  @media (min-width: 800px) {
    gap: 0.5rem;
  }
`;

const ListItem = styled.li`
  display: flex;
`;

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
    <Options>
      {options.map(({ option, votes }, index) => (
        <ListItem key={index}>
          <ButtonStyled onClick={() => handlerVoted(index)}>
            {option}
            <Votes>{votes.length}</Votes>
          </ButtonStyled>
        </ListItem>
      ))}
    </Options>
  );
};

export { OptionsToVote };
