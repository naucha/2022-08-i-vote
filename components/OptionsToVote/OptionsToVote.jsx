import styled from "styled-components";

const Options = styled.ul`
  display: flex;
  padding: 0;
  justify-content: space-evenly;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
    margin-top: 2.2rem;
    gap: 1rem;
  }

  @media (min-width: 800px) {
    gap: 0.5rem;
  }
`;

const ListItem = styled.li`
  display: flex;
`;

const ButtonStyled = styled.button`
  all: unset;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.6rem;
  color: #fff;
  background-color: #63c97a;
  border: 1px solid white;
  border-radius: 10px;
  width: 10rem;

  font-weight: 500;
  letter-spacing: 0.1rem;

  :hover {
    background-color: #cb5252;
  }

  :active {
    color: black;
    border-color: #000;
  }

  @media (max-width: 600px) {
    width: 14rem;
    font-size: 1.2rem;
    font-weight: 600;
  }
`;

const Span = styled.span`
  color: #000;
  color: #fff;
  border: 1px solid white;
  border-radius: 10px;
  letter-spacing: 0.1rem;
  text-align: center;
  padding: 0.5rem;
  font-weight: 800;
  width: 3rem;

  :active {
    color: #000;
    background-color: #cb5252;
    border-color: #ffae00;
  }
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
            <Span>{votes.length}</Span>
          </ButtonStyled>
        </ListItem>
      ))}
    </Options>
  );
};

export default OptionsToVote;
