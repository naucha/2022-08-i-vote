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
import { ContainerSection } from "../Styles/SharedStyles";

const PollDetailitem = ({ poll, setPoll }) => {
  const { title, description, options, _id: idPoll } = poll;

  if (idPoll == null) {
    return "Loading";
  }

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
                The winning option for now is <span>.... </span>
                You still have time to change, the most chosen option, you have
                until August 1
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
