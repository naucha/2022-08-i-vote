import Link from "next/link";
import styled from "styled-components";

const StyledA = styled.a`
  display: flex;

  align-items: center;

  gap: 0.5rem;
  text-align: right;
`;

const StyledArrow = styled.p`
  display: flex;
  border-right: 1px solid #fff;

  border-radius: 6px;

  margin: 0;
  padding: 0;
  width: 2rem;
  height: 2rem;
  text-align: center;
  align-items: center;
  justify-content: center;
`;

const LinkContainer = styled.div`
  display: flex;
  border: 1px solid #fff;
  padding: 0;
  font-size: 1.2rem;
  border-radius: 6px;
  width: 10rem;
  font-weight: 600;
  margin-bottom: 2rem;
  :hover,
  :focus,
  :active {
    color: #fff;
    border-color: #45b1df;
  }
`;

const StyledLink = ({ href, name }) => (
  <LinkContainer>
    <Link href={href} passHref>
      <StyledA>
        {" "}
        <StyledArrow>←</StyledArrow>
        {name}
      </StyledA>
    </Link>
  </LinkContainer>
);

export default StyledLink;
