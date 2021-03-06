import React, { useState, VFC } from "react";
import { Row, Col } from "react-grid-system";
import { useHistory } from "react-router-dom";
import { getQuestions } from "../api/firebase";
import { Card, Spacing } from "../components/atoms";
import {
  AnswerOptions,
  PrimaryButton,
  QuestionHeader
} from "../components/molecules";
import { QuestionWithAnswers } from "../types";

const Questionaire: VFC = () => {
  //TODO :: refactor into using component composition instead
  //TODO :: refactor this to fetch questions from context
  //TODO :: refactor score-keeping to use a context instead
  // -- export a function from the context instead...
  //TODO :: add function to context to store score in Firebase

  const [pageIndex, updatePageIndex] = useState(0);
  const [score, setScore] = useState(0);
  const history = useHistory();

  //TODO :: refactor this func out to context
  const updateScoreHandler = (weight: number) => {
    const s = score + weight;
    setScore(s);
    if (pageIndex === questions.length - 1) {
      history.push({
        pathname: "/result",
        state: {
          score: score
        }
      });
    } else {
      updatePageIndex(pageIndex + 1);
    }
  };
  return (
    <Card>
      <Row>
        <Col>
          <QuestionHeader index={pageIndex} question={questions[pageIndex]} />
          <AnswerOptions
            onClick={() => {}}
            options={questionsAndAnswersFromBackend[0].options}
          />
        </Col>
      </Row>
      <Spacing spacing={5} />
      <Row justify="end">
        <PrimaryButton onClick={() => {}}>Next question</PrimaryButton>
      </Row>
    </Card>
  );
};

export default Questionaire;
