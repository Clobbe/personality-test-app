import { getQuestions } from "../api/firebase";
import React, {
  ReactElement,
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback
} from "react";
import { QuestionWithAnswers } from "../types";

type TContextValue = {
  getQuestions(): Promise<void>;
  questions: Array<QuestionWithAnswers>;
};

const initialState: TContextValue = {
  getQuestions: async () => {},
  questions: [
    {
      key: "no questions fetched",
      question: "no questions fetched",
      options: [
        {
          answer: "no questions fetched",
          weight: 1
        }
      ]
    }
  ]
};

export const QuestionContext = createContext(initialState);

export const QuestionProvider = ({ children }: any): ReactElement => {
  const [state, setState] = useState(initialState);

  const getQuestionsFromFirebase = useCallback(async (): Promise<void> => {
    const questionsFromFirebase = await getQuestions();

    if (questionsFromFirebase) {
      setState({
        ...state,
        questions: questionsFromFirebase
      });
    }
  }, [state]);

  useEffect(() => {
    getQuestionsFromFirebase().then();
  }, [getQuestionsFromFirebase]);

  const contextValue = {
    ...state,
    getQuestionsFromFirebase() {}
  };

  QuestionContext.displayName = "QuestionProvider";

  return (
    <QuestionContext.Provider value={contextValue}>
      {children}
    </QuestionContext.Provider>
  );
};

export const useQuestionContext = () => useContext(QuestionContext);
