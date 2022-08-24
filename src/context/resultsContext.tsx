import React, {
  ReactElement,
  createContext,
  useContext,
  useState,
  useCallback,
  useMemo
} from "react";
import { useQuestionContext } from "./questionContext";

const initialState = {
  score: 0,
  maxScore: 0,
  updateScore: (score: number) => {}
};

export const ResultContext = createContext(initialState);

export const ResultProvider = ({ children }: any): ReactElement => {
  const questions = useQuestionContext().questions;
  const maxScore = questions.length * 4;

  const [totalScore, setTotalScore] = useState(initialState.score);

  const updateScore = useCallback(
    (score: number) => {
      setTotalScore(totalScore + score);
    },
    [totalScore, setTotalScore]
  );

  const value = useMemo(
    () => ({
      score: totalScore,
      maxScore,
      updateScore
    }),
    [maxScore, totalScore, updateScore]
  );

  ResultContext.displayName = "ResultProvider";

  return (
    <ResultContext.Provider value={value}>{children}</ResultContext.Provider>
  );
};

export const useResultContext = () => useContext(ResultContext);
