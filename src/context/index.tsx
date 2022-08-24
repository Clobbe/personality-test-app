import React, { FC } from "react";
import { QuestionProvider } from "./questionContext";
import { ResultProvider } from "./resultsContext";

const AppContext: FC = ({ children }) => (
  <QuestionProvider>
    <ResultProvider>{children}</ResultProvider>
  </QuestionProvider>
);

export default AppContext;
