import styled from "styled-components";

const Navbar = styled.nav`
  margin: 1em 0;
  height: 2em;

  display: grid;
  grid-auto-flow: column;
  text-align: center;
  align-content: center;

  font-weight: 600;
  background-color: #00ff66;

  a {
    color: black;
    text-decoration: none;
  }

  a:hover {
    color: #8503ff;
  }
  a:focus,
  a:active {
    text-decoration: underline;
  }

  @media (max-width: 400px) {
    grid-auto-flow: row;
    align-self: center;
    gap: 0.3em;
    height: 3em;
  }
`;

export default Navbar;
