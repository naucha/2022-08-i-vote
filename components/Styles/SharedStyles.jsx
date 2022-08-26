import styled from "styled-components";

const ContainerMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContainerSection = styled.section`
  @media (max-width: 600px) {
    height: 138vh;
  }
  @media (max-width: 380px) {
    min-height: 148vh;
  }
`;

const ButtonStyled = styled.button`
  all: unset;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.6rem;
  color: #fff;
  background-color: #45b1df;
  border: 1px solid white;
  border-radius: 10px;
  width: 10rem;

  font-weight: 500;
  letter-spacing: 0.1rem;

  :hover {
    background-color: #45b1dfc2;
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

const Votes = styled.span`
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

export { ContainerMain, ContainerSection, ButtonStyled, Votes };
