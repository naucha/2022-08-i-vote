import styled from "styled-components";

const ContainerSection = styled.section`
  display: flex;
  flex-direction: column;
  width: 90vw;
  margin-bottom: 1rem;
`;
const ContainerFieldset = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (min-width: 640px) {
    flex-direction: row;
    width: 90vw;
    align-items: flex-end;
    & label {
      font-size: 1.2rem;
    }
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const Fieldset = styled.fieldset`
  margin-top: 1rem;
  display: flex;
  font-style: italic;
  flex-direction: column;
  gap: 0.5rem;
  width: 90vw;
  border: 1px solid #fff;
  border-radius: 10px;

  @media (min-width: 600px) {
    width: 50vw;
  }
`;

const Legend = styled.legend`
  font-size: 1.4rem;
  font-style: italic;
  letter-spacing: 0.1rem;
`;

const Label = styled.label`
  font-size: 1.2rem;
  padding-left: 0.2rem;
  margin-top: 1rem;
`;

const Input = styled.input`
  font-size: 1.4rem;
  border: 1x solid #000;
  border-radius: 10px;
  padding: 0.3rem;
`;

const TextArea = styled.textarea`
  font-family: inherit;
  padding: 0.3rem;
  font-size: 1.4rem;
  border: 1x solid #000;
  border-radius: 10px;
  height: 30vh;
`;

export {
  ContainerSection,
  ContainerFieldset,
  Form,
  Fieldset,
  Legend,
  Label,
  Input,
  TextArea,
};
