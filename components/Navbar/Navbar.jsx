import styled from "styled-components";

const Header = styled.header`
  display: flex;
  height: 8rem;
  align-items: baseline;
  background-color: #45b1df;
  margin: 0;
  padding: 1rem;

  @media (max-width: 550px) {
    align-items: stretch;
  }
  @media (max-width: 380px) {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    height: 12rem;
    justify-content: center;
  }
`;

const Title = styled.h1`
  margin: 0;
  padding: 0;
  color: #fff;
  display: flex;
  justify-content: center;
  text-align: center;
  font-size: 4rem;
  width: 50vw;
  align-items: center;

  @media (max-width: 550px) {
    font-size: 3.4rem;
  }
  @media (max-width: 380px) {
    margin-top: 1rem;
    justify-content: center;
  }
`;

const Navbar = styled.nav`
  display: flex;
  width: 50vw;
  justify-content: space-around;
  font-weight: 600;
  margin: 0;
  padding: 0;
  @media (max-width: 550px) {
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
  }
  @media (max-width: 380px) {
    align-items: center;
  }

  a {
    font-size: 1.6rem;
    color: black;
    text-decoration: none;
    @media (max-width: 550px) {
      font-size: 2rem;
    }
  }

  a:hover {
    color: #fff;
  }
  a:focus,
  a:active {
    text-decoration: underline;
  }
`;

export { Header, Navbar, Title };
