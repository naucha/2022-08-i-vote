import styled from "styled-components";

const ContainerMainDetail = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContainerMain = styled.section`
  @media (max-width: 600px) {
    height: 138vh;
  }
  @media (max-width: 380px) {
    min-height: 148vh;
  }
`;

export { ContainerMainDetail, ContainerMain };
