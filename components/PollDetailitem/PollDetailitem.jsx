import { CircleChart } from "../CircleChart/CircleChart";
import { OptionsToVote } from "../OptionsToVote/OptionsToVote";
import {
  Description,
  Info,
  Title,
  ListContainer,
  InfoContainer,
  DetailContainer,
  Heading,
} from "../Styles/DetailItemStyled";
import { ContainerSection, MaxVotes, Votes } from "../Styles/SharedStyles";

const PollDetailitem = ({ poll, setPoll }) => {
  const { title, description, options, _id: idPoll } = poll;

  if (idPoll == null) {
    return "Loading";
  }

  const votesValues = options.map((option) => option.votes.length);
  const orderedVotes = votesValues.sort((a, b) => b - a);

  const maxVotes = orderedVotes[0];

  const filterMaxVotedOption = options.filter(
    (option) => option.votes.length === maxVotes
  );

  const MaxVotedOption = filterMaxVotedOption[0].option;

  return (
    <>
      <ContainerSection>
        <ListContainer>
          <DetailContainer>
            <InfoContainer>
              <Heading>
                <Title>{title}</Title>
                <Description>{description}</Description>
              </Heading>
              <Info>
                For now the winning option is{" "}
                <MaxVotes>{MaxVotedOption}</MaxVotes> and have{" "}
                <MaxVotes>{maxVotes} votes</MaxVotes>
              </Info>
            </InfoContainer>
            <OptionsToVote poll={poll} setPoll={setPoll} />
          </DetailContainer>
          <CircleChart options={options} />
        </ListContainer>
      </ContainerSection>
    </>
  );
};

export default PollDetailitem;
