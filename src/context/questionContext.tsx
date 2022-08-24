import React, {
  ReactElement,
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback
} from "react";
import { getQuestions } from "../api/firebase";
import { QuestionWithAnswers } from "../types";

type TContextValue = {
  questions: Array<QuestionWithAnswers>;
};

const initialState: TContextValue = {
  questions: [
    {
      key: "no questions fetched",
      question: "no questions fetched",
      options: [
        {
          answer: "no questions fetched",
          score: 1
        }
      ]
    }
  ]
};

export const QuestionContext = createContext(initialState);

export const QuestionProvider = ({ children }: any): ReactElement => {
  const [state, setState] = useState(initialState);

  const getQuestionsFromFirebase = useCallback(async () => {
    const questionsFromFirebase = await getQuestions();

    if (questionsFromFirebase) {
      setState({
        questions: questionsFromFirebase
      });
    }
  }, []);

  useEffect(() => {
    getQuestionsFromFirebase();
  }, [getQuestionsFromFirebase]);

  QuestionContext.displayName = "QuestionProvider";

  return (
    <QuestionContext.Provider value={state}>
      {children}
    </QuestionContext.Provider>
  );
};

export const useQuestionContext = () => useContext(QuestionContext);
