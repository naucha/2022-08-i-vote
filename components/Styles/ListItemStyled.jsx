import styled from "styled-components";

const Title = styled.h2`
  font-size: 1.6rem;
  letter-spacing: 0.1rem;
  margin: 0;

  :hover,
  :focus,
  :active {
    color: #fff;
  }
`;

const Description = styled.p`
  font-size: 1rem;
  padding-right: 0.4rem;
`;

const ListItem = styled.li`
  margin: 1rem;
  padding: 1rem;
  max-width: 360px;
  display: flex;
  flex-direction: column;

  text-align: left;
  font-size: 1.2rem;

  border: 1px solid #fff;
  border-radius: 10px;
  text-decoration: none;
  color: inherit;
  transition: color 0.15s ease, border-color 0.15s ease;
  cursor: pointer;

  :hover,
  :focus,
  :active {
    color: #fff;
    border-color: #45b1df;
  }
`;

export { ListItem, Title, Description };
