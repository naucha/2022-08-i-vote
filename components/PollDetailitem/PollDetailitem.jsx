import OptionsToVote from "../OptionsToVote/OptionsToVote";
import CircleChart from "../CircleChart/CircleChart";
import {
  Description,
  Info,
  Title,
  ListContainer,
  ChartContainer,
  InfoContainer,
  DetailContainer,
  Heading,
} from "../Styles/DetailItemStyled";

const PollDetailitem = ({ poll, setPoll }) => {
  const { title, description, options, _id: idPoll } = poll;

  if (idPoll == null) {
    return "Loading";
  }

  const chartData = {
    labels: options.map((data) => data.option),
    datasets: [
      {
        label: "Users options",
        data: options.map((data) => data.votes.length),
        backgroundColor: ["#cb5252", "#e5e058", "#45b1df", "#63c97a"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <>
      <section>
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
          <ChartContainer>
            <CircleChart chartData={chartData} />
          </ChartContainer>
        </ListContainer>
      </section>
    </>
  );
};

export default PollDetailitem;
