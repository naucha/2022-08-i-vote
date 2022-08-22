import styled from "styled-components";
import PollListItem from "../PollListitem/PollListItem";

export const GridContainer = styled.ul`
  @media (min-width: 400px) {
    margin: 5rem, 9rem;
    padding: 0;
    justify-content: center;

    display: grid;
    grid-auto-flow: row;
    width: min-content(90%, 5rem);

    gap: 1em;
  }

  @media (min-width: 660px) {
    display: flex;
    flex-flow: wrap;
  }
`;

const Polls = ({ polls }) => {
  return (
    <GridContainer>
      {polls.map((poll, index) => (
        <PollListItem key={index} poll={poll} />
      ))}
    </GridContainer>
  );
};

export default Polls;
