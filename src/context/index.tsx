import React, { FC } from "react";
import { QuestionProvider } from "./questionContext";

const AppContext: FC = ({ children }) => (
  <QuestionProvider>{children}</QuestionProvider>
);

export default AppContext;
