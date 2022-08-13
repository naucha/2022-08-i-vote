import React, { useState } from "react";
import homeStyles from "../../styles/Home.module.css";

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
    <section>
      <h2>Create </h2>
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <fieldset className={homeStyles.card}>
          <legend>New Poll</legend>
          <label htmlFor="question">
            {" "}
            <input
              id="question"
              onChange={handleChange}
              value={formData.question}
            />
          </label>

          <textarea
            id="description"
            value={formData.description}
            onChange={handleChange}
            cols={28}
            rows={10}
            autoFocus={true}
          ></textarea>

          <div className="form__options--container">
            <label htmlFor="answerOne">Answer One</label>
            <input
              value={formData.answerone}
              onChange={handleChange}
              id="answerOne"
            />

            <label htmlFor="answerTwo">Answer Two</label>
            <input
              value={formData.answertwo}
              onChange={handleChange}
              id="answerTwo"
            />
            <label htmlFor="answerThree">Answer Three</label>
            <input
              value={formData.answerthree}
              onChange={handleChange}
              id="answerThree"
            />
            <label htmlFor="creator">Creator</label>
            <input
              value={formData.creator}
              onChange={handleChange}
              id="creator"
            />
          </div>
          <button type="submit">Publish</button>
        </fieldset>
      </form>
    </section>
  );
};

export default CreateForm;
