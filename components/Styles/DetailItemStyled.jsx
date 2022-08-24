import styled from "styled-components";

const ListContainer = styled.ul`
  border: 1px solid red;
  display: flex;
  align-items: flex-start;
  gap: 2rem;
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 1rem;

  @media (max-width: 800px) {
    flex-direction: column;
    align-items: center;
    height: 100vh;
  }
`;

const DetailContainer = styled.li`
  border: 1px solid aliceblue;
  display: flex;
  flex-direction: column;
  margin: 0;

  padding: 0;
  gap: 1rem;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 30vh;
`;

const Heading = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;

const Title = styled.h2`
  font-size: 1.6rem;
  letter-spacing: 0.1rem;
  text-align: center;
  margin: 0;
  margin-top: 1rem;

  @media (max-width: 600px) {
    font-size: 1.8rem;
  }
`;

const Description = styled.p`
  font-size: 1.2rem;
  text-align: center;
  padding: 0.4rem;
  margin-top: 1rem;

  @media (max-width: 600px) {
    font-size: 1.3rem;
    font-weight: 600;
  }
`;

const Info = styled.p`
  margin: 0;
  font-size: 1.1rem;
  font-style: italic;
  text-align: center;
  padding-right: 0.4rem;
  @media (max-width: 600px) {
    font-size: 1.3rem;
  }
`;

const ChartContainer = styled.div`
  width: 14rem;
  display: flex;
  justify-content: center;
  color: white;
  text-align: left;
  height: 42vh;

  border: 1px solid white;
`;

export {
  Title,
  Description,
  Info,
  DetailContainer,
  ListContainer,
  ChartContainer,
  InfoContainer,
  Heading,
};