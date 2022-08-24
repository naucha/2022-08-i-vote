import styled from "styled-components";
import PollListItem from "../PollListitem/PollListItem";

export const GridContainer = styled.ul`
  margin: 0;
  padding: 0;
  justify-content: center;

  display: grid;
  grid-auto-flow: row;

  gap: 1em;

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
