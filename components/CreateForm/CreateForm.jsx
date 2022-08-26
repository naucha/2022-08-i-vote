import React, { useState } from "react";
import { Title } from "../Styles/DetailItemStyled";
import {
  ContainerFieldset,
  ContainerSection,
  Fieldset,
  Form,
  Input,
  Label,
  Legend,
  TextArea,
} from "../Styles/FormStyles";
import { ButtonStyled } from "../Styles/SharedStyles";

const CreateForm = ({ data }) => {
  const blankFields = {
    question: "",
    description: "",
    answerOne: "",
    answerTwo: "",
    answerThree: "",
    creator: "",
  };

  const [formData, setFormData] = useState(blankFields);

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.id]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {
      title: formData.question,
      description: formData.description,
      options: [
        { option: formData.answerOne },
        { option: formData.answerTwo },
        { option: formData.answerThree },
      ],
    };

    const JSONdata = JSON.stringify(data);

    const response = await fetch("api/create-vote", {
      body: JSONdata,
      method: "POST",
    });

    const result = await response.json();
  };

  return (
    <ContainerSection>
      <Title>Create new poll and shared</Title>
      <Form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <ContainerFieldset>
          <Fieldset>
            <Legend>New Poll </Legend>
            <Input
              id="question"
              onChange={handleChange}
              value={formData.question}
            />
            <Label htmlFor="description">
              Be more precise in explaining the poll options{" "}
            </Label>

            <TextArea
              id="description"
              value={formData.description}
              onChange={handleChange}
              cols={28}
              rows={10}
              autoFocus={true}
            ></TextArea>
          </Fieldset>
          <Fieldset>
            <Label htmlFor="answerOne">Answer One</Label>
            <Input
              value={formData.answerone}
              onChange={handleChange}
              id="answerOne"
            />

            <Label htmlFor="answerTwo">Answer Two</Label>
            <Input
              value={formData.answertwo}
              onChange={handleChange}
              id="answerTwo"
            />
            <Label htmlFor="answerThree">Answer Three</Label>
            <Input
              value={formData.answerthree}
              onChange={handleChange}
              id="answerThree"
            />
            <Label htmlFor="creator">Creator</Label>
            <Input
              value={formData.creator}
              onChange={handleChange}
              id="creator"
            />
          </Fieldset>
        </ContainerFieldset>
        <ButtonStyled type="submit">Publish</ButtonStyled>
      </Form>
    </ContainerSection>
  );
};

export default CreateForm;
