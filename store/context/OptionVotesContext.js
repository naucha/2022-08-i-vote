import React, { useState } from "react";

const OptionVotesContext = React.createContext([{}, () => {}]);

const OptionVotesProvider = (props) => {
  const initialState = {};

  const [poll, setPoll] = useState(initialState);

  return (
    <OptionVotesContext.Provider value={{ poll, setPoll }}>
      {props.children}
    </OptionVotesContext.Provider>
  );
};

export { OptionVotesContext, OptionVotesProvider };
