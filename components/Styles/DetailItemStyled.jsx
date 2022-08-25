import styled from "styled-components";

const ListContainer = styled.ul`
  display: flex;
  align-items: flex-start;
  gap: 2rem;
  width: 100vw;
  margin: 0;
  padding: 1rem;

  @media (max-width: 940px) {
    flex-direction: column;
    align-items: center;
    height: 100vh;
  }
`;

const DetailContainer = styled.li`
  display: flex;
  flex-direction: column;
  height: 40vh;
  border: 1px solid #fff;
  border-radius: 10px;
  margin: 0;
  padding: 0;
  gap: 1rem;
  @media (max-width: 600px) {
    height: 70vh;
  }
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
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
  font-size: 1.2rem;
  font-style: italic;
  text-align: center;
  padding: 1rem;
  @media (max-width: 600px) {
    font-size: 1.5rem;
  }
`;

export {
  Title,
  Description,
  Info,
  DetailContainer,
  ListContainer,
  InfoContainer,
  Heading,
};
