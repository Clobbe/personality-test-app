import React, { useState, VFC } from "react";
import { Row, Col } from "react-grid-system";
import { useHistory } from "react-router-dom";
import { Card, Spacing } from "../components/atoms";
import {
  AnswerOptions,
  PrimaryButton,
  QuestionHeader
} from "../components/molecules";
import { useQuestionContext } from "../context/questionContext";
import { useResultContext } from "../context/resultsContext";

const Questionaire: VFC = () => {
  const [pageIndex, updatePageIndex] = useState(0);
  const questionsAndAnswers = useQuestionContext().questions;
  const resultContext = useResultContext();
  const history = useHistory();

  const updateScoreHandler = (score: number) => {
    resultContext.updateScore(score);

    if (pageIndex === questionsAndAnswers.length - 1) {
      history.push({
        pathname: "/result"
      });
    } else {
      setTimeout(() => {
        updatePageIndex(pageIndex + 1);
      }, 150);
    }
  };
  return (
    <Card>
      <Row>
        <Col>
          <QuestionHeader
            index={pageIndex}
            question={questionsAndAnswers[pageIndex].question}
          />
          <AnswerOptions
            sendScore={updateScoreHandler}
            options={questionsAndAnswers[pageIndex].options}
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
