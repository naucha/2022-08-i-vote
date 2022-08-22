import styled from "styled-components";

const List = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  flex-wrap: wrap;
`;

const Option = styled.li`
  border-radius: 10px;
  margin: 1rem;

  padding: 0.5rem;

  text-align: center;
  color: inherit;
  border: 1px solid #fff;
  /* min-width: 6rem; */
  width: 8rem;
  display: grid;
`;

const Options = ({ options }) => {
  return (
    <>
      <List>
        {options.map(({ option }, index) => (
          <Option key={index}>{option}</Option>
        ))}
      </List>
    </>
  );
};

export default Options;
